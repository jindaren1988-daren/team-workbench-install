param([string]$Profile='team-install-preview',[switch]$Formal,[switch]$Stopped,[string]$Rollback,[string]$Verify,[string]$DshCli)
$ErrorActionPreference='Stop'
if(-not $DshCli){
  $candidates=@((Join-Path $env:LOCALAPPDATA 'Programs\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd'),(Join-Path $env:ProgramFiles 'DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd'))
  $DshCli=$candidates | Where-Object {Test-Path -LiteralPath $_ -PathType Leaf} | Select-Object -First 1
}
if(-not $DshCli -or -not(Test-Path -LiteralPath $DshCli -PathType Leaf)){throw '未找到官方 Harness。请从 https://www.deepseek.com/download/ 下载 Windows x64 版，由本人完成安装与系统确认。不要绕过系统保护。可用 -DshCli 指定官方应用内 dsh.cmd。'}
$resources=[IO.Path]::GetFullPath((Join-Path (Split-Path -Parent $DshCli) '..\..\..'))
$appRoot=Split-Path -Parent $resources
$executable=Join-Path $appRoot 'DeepSeek Harness.exe'
if(-not(Test-Path -LiteralPath $executable -PathType Leaf)){throw '找不到官方应用运行载体，请核对应用目录。'}
$env:ELECTRON_RUN_AS_NODE='1'
$env:DSH_DESKTOP_NODE_EXECUTABLE=$executable
$env:TEAM_WORKBENCH_CLI_ENTRY=Join-Path $resources 'app.asar\dsh\node_modules\@deepseek-ai\dsh-desktop-host\lib\cli.js'
$arguments=@('--profile',$Profile,'--cli',$DshCli)
if($Formal){$arguments+='--formal'};if($Stopped){$arguments+='--stopped'}
if($Rollback){$arguments+=@('--rollback',$Rollback)};if($Verify){$arguments+=@('--verify',$Verify)}
& $executable --expose-internals (Join-Path $PSScriptRoot 'install.mjs') @arguments
if($LASTEXITCODE -ne 0){exit $LASTEXITCODE}
