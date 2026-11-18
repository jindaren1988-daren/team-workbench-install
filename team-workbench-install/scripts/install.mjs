import { readFile, writeFile, mkdir, lstat, realpath, readdir, copyFile, rm } from 'node:fs/promises'
import { createHash, randomUUID } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import { join, dirname, resolve } from 'node:path'
import { homedir } from 'node:os'
import { fileURLToPath } from 'node:url'
const here=dirname(fileURLToPath(import.meta.url)), name='@team/dsh-team-workbench-formal'
const hash=b=>createHash('sha256').update(b).digest('hex')
const read=async p=>readFile(p).catch(e=>{if(e.code==='ENOENT')return null;throw e})
const json=async p=>JSON.parse(await readFile(p,'utf8'))
async function copyOrdinary(from,to,budget={bytes:0,files:0}) {
  const stat=await lstat(from)
  if(stat.isSymbolicLink())throw Error('包内不能包含符号链接。')
  if(stat.isDirectory()){await mkdir(to,{recursive:true,mode:0o700});for(const n of await readdir(from))await copyOrdinary(join(from,n),join(to,n),budget)}
  else {if(!stat.isFile()||(budget.bytes+=stat.size)>32*1024*1024||++budget.files>200)throw Error('包文件超出允许范围。');await copyFile(from,to)}
}
async function verifyPayload(directory,manifest) {
  const metadata=await json(join(directory,'package.json'))
  if(metadata.name!==name||metadata.version!==manifest.version)throw Error('插件名称或版本不匹配。')
  const expected=new Set(Object.keys(manifest.files));let count=0
  async function walk(dir,prefix=''){
    for(const item of await readdir(dir,{withFileTypes:true})){
      const rel=prefix+item.name,path=join(dir,item.name)
      if(item.isSymbolicLink())throw Error('包中发现符号链接。')
      if(item.isDirectory())await walk(path,rel+'/')
      else {if(!item.isFile()||!expected.has(rel)||hash(await readFile(path))!==manifest.files[rel])throw Error('包校验失败：'+rel);count++}
    }
  }
  await walk(directory)
  if(count!==expected.size)throw Error('包缺少校验清单文件。')
  return metadata
}
async function fingerprint(directory) {
  const metadata=await json(join(directory,'package.json'))
  const manifest={version:metadata.version,files:{}}
  let bytes=0,count=0
  async function walk(dir,prefix='') {
    for(const item of await readdir(dir,{withFileTypes:true})) {
      const path=join(dir,item.name),rel=prefix+item.name
      if(item.isSymbolicLink())throw Error('包中发现符号链接。')
      if(item.isDirectory())await walk(path,rel+'/')
      else {
        const stat=await lstat(path)
        if(!stat.isFile()||(bytes+=stat.size)>32*1024*1024||++count>200)throw Error('包文件超出允许范围。')
        manifest.files[rel]=hash(await readFile(path))
      }
    }
  }
  await walk(directory)
  return manifest
}
export async function main(args=process.argv.slice(2)) {
  const opts={};for(let i=0;i<args.length;i++){const key=args[i];if(['--formal','--stopped'].includes(key))opts[key]=true;else if(['--profile','--cli','--payload','--manifest','--rollback','--verify'].includes(key)){if(!args[i+1]||args[i+1].startsWith('--'))throw Error('参数缺少值：'+key);opts[key]=args[++i]}else throw Error('未知参数：'+key)}
  const profile=opts['--profile']||'team-install-preview'
  if(!/^[a-zA-Z0-9_-]+$/.test(profile))throw Error('profile名称无效。')
  const reserved=/^(desktop|web|tui|headless|sdk.*)$/i.test(profile)
  if(reserved&&(!opts['--formal']||!opts['--stopped']||profile!=='desktop'))throw Error('正式desktop安装需要 --formal --stopped；先退出该profile的Harness。')
  const cli=opts['--cli']||process.env.TEAM_WORKBENCH_DSH_CLI
  if(!cli)throw Error('请由平台启动助手提供官方CLI。')
  const dataHome=resolve(process.env.DSH_HOME||join(homedir(),'.dsh')), profileDir=join(dataHome,'profiles',profile)
  const root=join(dataHome,'member-installs');await mkdir(root,{recursive:true,mode:0o700})
  const lock=join(root,profile+'.lock');await mkdir(lock).catch(()=>{throw Error('已有同profile安装操作；请勿并行安装。')})
  const run=argv=>{const command=process.platform==='win32'?process.execPath:cli;const prefix=process.platform==='win32'?['--expose-internals',process.env.TEAM_WORKBENCH_CLI_ENTRY]:[];if(prefix.some(value=>!value))throw Error('官方Windows CLI入口缺失。');const result=spawnSync(command,[...prefix,'plugin','--profile',profile,...argv],{env:{...process.env,npm_config_ignore_scripts:'true',npm_config_offline:'true'},encoding:'utf8',maxBuffer:2*1024*1024});if(result.error||result.status!==0)throw Error('官方CLI操作失败（'+(result.status??result.error?.code)+'），保留快照供恢复。')}
  const patchDigest=async()=>{const b=await read(join(profileDir,'cordis.patch.yml'));return b?hash(b):null}
  const packagePath=join(profileDir,'package.json')
  async function rollback(record){
    if(record.profile!==profile||record.dataHome!==dataHome)throw Error('恢复记录与当前profile不一致。')
    const current=await json(packagePath)
    if(record.rolledBackAt){
      if(current.dependencies?.[name]!==record.restoredSpec||await patchDigest()!==record.afterPatch)throw Error('恢复后的插件或补丁已变化；拒绝覆盖。')
      if(record.restoredSpec)await verifyPayload(await realpath(join(profileDir,'node_modules',name)),record.restoredManifest)
      console.log('该记录已恢复，无需修改。');return
    }
    if(current.dependencies?.[name]!==record.afterSpec||await patchDigest()!==record.afterPatch)throw Error('该插件来源或补丁已变化；拒绝覆盖，请人工核对记录。')
    // A file: dependency can keep its spec while its installed bytes change.
    // Validate before any CLI mutation; keep the receipt for manual recovery.
    try {await verifyPayload(await realpath(join(profileDir,'node_modules',name)),record.manifest)}
    catch {throw Error('当前团队插件文件已变化；拒绝覆盖，恢复记录保留，请人工核对。')}
    if(record.previous) {
      await verifyPayload(join(record.directory,'previous'),record.previousManifest)
      run(['add','file:'+join(record.directory,'previous'),'--offline','--ignore-scripts'])
    }
    else run(['remove',name])
    // Restore only this bundle selection. Keep all other dependencies/configuration.
    const latest=await json(packagePath),bundles=latest.dsh?.profile?.bundles
    if(!Array.isArray(bundles))throw Error('profile配置不是已验证格式，请保留快照人工处理。')
    const filtered=bundles.filter(value=>value!==name)
    if(record.beforeIndex>=0)filtered.splice(Math.min(record.beforeIndex,filtered.length),0,name)
    latest.dsh.profile.bundles=filtered
    await writeFile(packagePath,JSON.stringify(latest,null,2)+'\n',{mode:0o600})
    if(await patchDigest()!==record.afterPatch)throw Error('恢复时补丁意外变化，请保留记录人工核对。')
    record.restoredSpec=latest.dependencies?.[name];record.restoredManifest=record.previous?record.previousManifest:null;record.rolledBackAt=new Date().toISOString();await writeFile(join(record.directory,'receipt.json'),JSON.stringify(record,null,2)+'\n',{mode:0o600})
    console.log('仅团队插件已恢复；其它profile数据未替换。')
  }
  try {
    if(opts['--rollback']){const record=await json(resolve(opts['--rollback']));await rollback(record);return}
    if(opts['--verify']){const record=await json(resolve(opts['--verify']));if(record.profile!==profile||record.dataHome!==dataHome)throw Error('验证记录与profile不一致。');await verifyPayload(await realpath(join(profileDir,'node_modules',name)),record.manifest);console.log('安装验证通过：'+name+' '+record.manifest.version);return}
    const manifest=await json(resolve(opts['--manifest']||join(here,'../assets/payload-manifest.json')))
    const source=resolve(opts['--payload']||join(here,'../assets/payload'))
    await verifyPayload(source,manifest)
    let before=await read(packagePath);before=before?JSON.parse(before):null
    if(reserved&&!before)throw Error('正式desktop必须是已有profile；请先正常安装并启动官方Harness。')
    const oldSpec=before?.dependencies?.[name]||null
    console.log('目标profile：'+profile+'；已有团队插件：'+(oldSpec?'已检测（来源保存在本地记录）':'未安装'))
    const destination=join(root,'payloads',hash(JSON.stringify(manifest)),'team-workbench')
    if(!await read(join(destination,'package.json'))) {await mkdir(dirname(destination),{recursive:true,mode:0o700});await copyOrdinary(source,destination)}
    await verifyPayload(destination,manifest)
    const installed=join(profileDir,'node_modules',name)
    if(oldSpec&&before?.dsh?.profile?.bundles?.includes(name)){try{await verifyPayload(await realpath(installed),manifest);console.log('相同版本与字节已安装，无需修改。');return}catch{}}
    const directory=join(root,'receipts',new Date().toISOString().replace(/[:.]/g,'-')+'-'+randomUUID());await mkdir(directory,{recursive:true,mode:0o700})
    const record={directory,dataHome,profile,manifest,oldSpec,beforeIndex:before?.dsh?.profile?.bundles?.indexOf(name)??-1,previous:false,beforePatch:await patchDigest()}
    if(oldSpec){await copyOrdinary(await realpath(installed),join(directory,'previous'));record.previousManifest=await fingerprint(join(directory,'previous'));record.previous=true}
    await writeFile(join(directory,'receipt.json'),JSON.stringify(record,null,2)+'\n',{mode:0o600})
    try {
      run(['add','file:'+destination,'--offline','--ignore-scripts'])
      record.afterSpec=(await json(packagePath)).dependencies?.[name];record.afterPatch=await patchDigest()
      await writeFile(join(directory,'receipt.json'),JSON.stringify(record,null,2)+'\n',{mode:0o600})
      await verifyPayload(await realpath(installed),manifest)
      if(record.beforePatch!==null&&record.beforePatch!==record.afterPatch)throw Error('官方CLI意外改动现有profile补丁。')
      console.log('安装与字节校验完成：'+name+' '+manifest.version+'\n恢复记录：'+join(directory,'receipt.json'))
    } catch(error){
      record.afterSpec=(await json(packagePath)).dependencies?.[name];record.afterPatch=await patchDigest()
      await writeFile(join(directory,'receipt.json'),JSON.stringify(record,null,2)+'\n',{mode:0o600})
      try {await rollback(record)}catch{throw Error(error.message+' 自动恢复未完成；仅使用本地记录人工核对：'+join(directory,'receipt.json'))}
      throw error
    }
  } finally {await rm(lock,{recursive:true,force:true})}
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))main().catch(error=>{console.error(error.message);process.exitCode=1})
