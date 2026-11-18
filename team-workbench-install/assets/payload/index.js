/**
 * Team workbench Host half: exposes the team server's projects, todos and memories as model tools.
 * Use one dedicated Harness profile per explicitly delegated workbench member and mode.
 */
import { closeSync, constants, fstatSync, openSync, readFileSync, writeFileSync } from 'node:fs'

export const name = 'team-workbench-formal'
export const inject = ['tools']

const SERVER = (process.env.DSH_TEAM_WORKBENCH_URL || 'https://team.opp.zone').replace(/\/$/, '')
const TOKEN_FILE = process.env.DSH_TEAM_V11_TOKEN_FILE
const STUDIO_PROJECT = process.env.DSH_TEAM_STUDIO_PROJECT
const DELEGATION = /^twb11_[0-9A-Za-z_-]{43}$/
let contextFence

function delegatedToken() {
  try {
    if (!TOKEN_FILE) return ''
    const fd = openSync(TOKEN_FILE, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK)
    try {
      const stat = fstatSync(fd)
      if (!stat.isFile() || stat.size > 256 || (process.getuid && (stat.uid !== process.getuid() || (stat.mode & 0o077)))) return ''
      const token = readFileSync(fd, 'utf8').trim()
      return DELEGATION.test(token) ? token : ''
    } finally { closeSync(fd) }
  } catch { return '' }
}

async function call(path, init = {}, verifiedToken) {
  const before = verifiedToken ? null : await contextAccess(init.signal)
  const token = verifiedToken || before.token
  if (!token) throw new Error('请在已登录的团队工作台创建 Harness 连接，并为专用实例配置 DSH_TEAM_V11_TOKEN_FILE。')
  const target = new URL(SERVER)
  const local = target.protocol === 'http:' && ['localhost','127.0.0.1'].includes(target.hostname)
  if ((!local && target.protocol !== 'https:') || target.username || target.password || target.search || target.hash) {
    throw new Error('请为 Harness 使用有效的工作台 HTTPS 地址。')
  }
  const limit = AbortSignal.timeout(15_000)
  const res = await fetch(SERVER + path, {
    ...init, redirect:'error',
    signal: init.signal ? AbortSignal.any([init.signal,limit]) : limit,
    headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
  })
  const text = await res.text()
  let data = {}
  try {
    data = text ? JSON.parse(text) : {}
  } catch {
    throw new Error(`团队工作台返回了非 JSON 响应（HTTP ${res.status}）`)
  }
  if (before) {
    const after = await contextAccess(init.signal)
    if (before.revision !== after.revision) {
      throw new Error('工具调用期间访问权限发生变化，已停止返回结果。若提交了写入，请到工作台核对。')
    }
  }
  if (!res.ok) {
    const detail = data.current ? `（当前版本 ${data.current.version ?? data.current.rev}）` : ''
    const message = typeof data.error === 'string' ? data.error : data.error?.message
    throw Object.assign(new Error((message || `HTTP ${res.status}`) + detail), { status: res.status, current: data.current })
  }
  return data
}

async function contextAccess(signal) {
  if (!contextFence) throw new Error('请通过专用 Harness 实例连接团队工作台。')
  return contextFence(signal)
}

function createContextFence() {
  let baseline
  let invalid = false
  let queued = Promise.resolve()
  return signal => {
    const result = queued.then(async () => {
      if (invalid) throw new Error('访问范围已变化。请关闭此 Harness 实例，创建新的专用连接。')
      signal?.throwIfAborted()
      const token = delegatedToken()
      if (!token) throw new Error('请在已登录的团队工作台创建 Harness 连接，并为专用实例配置 DSH_TEAM_V11_TOKEN_FILE。')
      let snapshot
      try { snapshot = await call('/api/agent/context-access', { signal }, token) }
      catch (error) {
        if (signal?.aborted) throw error
        if ([401,403,404].includes(error.status)) invalid = true
        throw new Error('无法验证团队工作台的访问范围。此次模型请求已停止。')
      }
      if (typeof snapshot.connectionId !== 'string' || typeof snapshot.revision !== 'string' ||
          !/^(0|[1-9][0-9]*)$/.test(snapshot.revision) || !Array.isArray(snapshot.grants) ||
          snapshot.grants.some(grant=>typeof grant !== 'string' || !/^[a-f0-9]{64}$/.test(grant))) {
        throw new Error('无法验证团队工作台的访问范围。此次模型请求已停止。')
      }
      const grants = new Set(snapshot.grants)
      if (baseline && (baseline.token !== token || baseline.connectionId !== snapshot.connectionId ||
          [...baseline.grants].some(grant=>!grants.has(grant)))) {
        invalid = true
        throw new Error('访问范围已变化。请关闭此 Harness 实例，创建新的专用连接。')
      }
      baseline = {...snapshot,token,grants}
      return {token,revision:snapshot.revision}
    })
    queued = result.catch(()=>{})
    return result
  }
}

const output = {
  schema: {
    type: 'object',
    additionalProperties: false,
    required: ['result'],
    properties: { result: { type: 'string' } },
  },
  render: (_args, value) => [{ type: 'text', text: value.result }],
}

const generic = (title) => (args) => ({ card: 'generic', title, kind: 'other', rawInput: args })

const projectList = {
  name: 'team_project_list',
  description: 'List the team workbench projects with their open todo and memory counts.',
  parameters: { type: 'object', properties: {} },
  output,
  execute: async () => {
    const { projects } = await call('/v1/projects')
    if (!projects.length) return { result: '团队还没有项目。' }
    return {
      result: projects
        .map((p) => `- ${p.name}（${p.open_todos} 个未完成待办，${p.memories} 条记忆，id=${p.id}）`)
        .join('\n'),
    }
  },
  presentCall: generic('List team projects'),
}

const projectCreate = {
  name: 'team_project_create',
  description: 'Create a project on the team workbench.',
  parameters: {
    type: 'object',
    properties: {
      name: { type: 'string', description: 'Project name, a short phrase.' },
      description: { type: 'string', description: 'Optional project description.' },
    },
    required: ['name'],
  },
  output,
  execute: async (args) => {
    const { project } = await call('/v1/projects', {
      method: 'POST',
      body: JSON.stringify({ name: args.name, description: args.description || '' }),
    })
    return { result: JSON.stringify({ id: project.id, name: project.name }) }
  },
  presentCall: generic('Create team project'),
}

const memberList = {
  name: 'team_member_list',
  description: 'List team members and their ids, for assigning todos or attributing memories.',
  parameters: { type: 'object', properties: {} },
  output,
  execute: async () => {
    const { members } = await call('/v1/members')
    return { result: members.map((m) => `- ${m.name}（${m.role}，id=${m.id}）`).join('\n') }
  },
  presentCall: generic('List team members'),
}

const todoList = {
  name: 'team_todo_list',
  description: 'List team todos, optionally filtered by project id.',
  parameters: {
    type: 'object',
    properties: {
      projectId: { type: 'string', description: 'Project id; omit to list todos across projects.' },
    },
  },
  output,
  execute: async (args) => {
    const suffix = args.projectId ? `?projectId=${encodeURIComponent(args.projectId)}` : ''
    const { todos } = await call(`/v1/todos${suffix}`)
    if (!todos.length) return { result: '没有待办。' }
    return {
      result: todos
        .map(
          (t) =>
            `- [${t.status}] ${t.title}（rev=${t.rev}${t.owner_name ? `，${t.owner_name}` : ''}${t.due ? `，截止 ${String(t.due).slice(0, 10)}` : ''}，id=${t.id}）`,
        )
        .join('\n'),
    }
  },
  presentCall: generic('List team todos'),
}

const todoCreate = {
  name: 'team_todo_create',
  description: 'Create a todo in a team workbench project; optionally assign an owner and a due date.',
  parameters: {
    type: 'object',
    properties: {
      projectId: { type: 'string', description: 'Project id from team_project_list.' },
      title: { type: 'string', description: 'Short imperative task title.' },
      detail: { type: 'string', description: 'Optional longer description.' },
      ownerId: { type: 'string', description: 'Optional member id from team_member_list.' },
      due: { type: 'string', description: 'Optional due date, YYYY-MM-DD.' },
    },
    required: ['projectId', 'title'],
  },
  output,
  execute: async (args) => {
    const { todo } = await call('/v1/todos', {
      method: 'POST',
      body: JSON.stringify({
        projectId: args.projectId,
        title: args.title,
        detail: args.detail || '',
        ownerId: args.ownerId || null,
        due: args.due || null,
      }),
    })
    return { result: JSON.stringify({ id: todo.id, title: todo.title, status: todo.status, rev: todo.rev }) }
  },
  presentCall: generic('Create team todo'),
}

const todoUpdate = {
  name: 'team_todo_update',
  description:
    'Update a team todo. Pass the current expectedRev; a stale revision returns the latest version instead of overwriting.',
  parameters: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'Todo id.' },
      expectedRev: { type: 'integer', description: 'Revision the change is based on.' },
      status: { type: 'string', enum: ['todo', 'doing', 'review', 'done'], description: 'New status.' },
      title: { type: 'string', description: 'New title.' },
      detail: { type: 'string', description: 'New detail text.' },
      ownerId: { type: 'string', description: 'New owner member id; an empty string clears the owner.' },
      due: { type: 'string', description: 'New due date YYYY-MM-DD; an empty string clears it.' },
    },
    required: ['id', 'expectedRev'],
  },
  output,
  execute: async (args) => {
    const body = { expectedRev: args.expectedRev }
    if (args.status) body.status = args.status
    if (args.title !== undefined) body.title = args.title
    if (args.detail !== undefined) body.detail = args.detail
    if (args.ownerId !== undefined) body.ownerId = args.ownerId || null
    if (args.due !== undefined) body.due = args.due || null
    const data = await call(`/v1/todos/${encodeURIComponent(args.id)}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    })
    return { result: JSON.stringify({ id: data.todo.id, status: data.todo.status, rev: data.todo.rev }) }
  },
  presentCall: generic('Update team todo'),
}

const studioFields = {
  columnId: { type: 'string', description: 'Destination column ID from team_board_list.' },
  stateId: { type: 'string', enum: ['todo', 'doing', 'review', 'done'], description: 'Task state, independent of the column.' },
  title: { type: 'string', description: 'Task title.' },
  description: { type: 'string', description: 'Task description.' },
  assigneeId: { type: 'string', description: 'Member ID from team_board_list; empty clears the assignee.' },
  dueDate: { type: 'string', description: 'Deadline as YYYY-MM-DD; empty clears it.' },
  priority: { type: 'string', enum: ['low', 'medium', 'high', 'urgent'], description: 'Task priority.' },
}
const studioTaskId = { type: 'string', description: 'Stable task ID.' }

function studioTool(name, label, description, properties, required, execute) {
  return {
    name, description, output,
    parameters: {
      type: 'object', additionalProperties: false,
      properties: { projectId: { type: 'string', description: 'Project ID from team_project_list. May be omitted when this Agent is bound to a project.' }, ...properties },
      required,
    },
    execute: async (args, exec) => {
      const { connection } = await call('/api/agent/status', { signal: exec?.signal })
      const projectId = args.projectId || connection.projectId || STUDIO_PROJECT
      if (!projectId) throw new Error('请先选择有权访问的项目，再使用项目任务工具。')
      if (connection.mode === 'project' && projectId !== connection.projectId) throw new Error('任务不属于 Agent 当前绑定的项目。')
      const scope = '/api/projects/' + encodeURIComponent(projectId)
      try {
        return { result: JSON.stringify(await execute(scope, args, exec?.signal)) }
      } catch (err) {
        if (err.status === 409 && err.current) {
          return { result: JSON.stringify({
            ok: false, error: '任务已有更新。请核对当前版本和原修改，确认后再提交。',
            current: err.current,
          }) }
        }
        throw err
      }
    },
    presentCall: generic(label),
  }
}

function studioWriteBody(args, fields) {
  const body = {}
  for (const field of fields) {
    if (Object.hasOwn(args, field)) {
      const value = args[field]
      body[field] = ['assigneeId', 'dueDate', 'beforeTaskId'].includes(field) && !value ? null : value
    }
  }
  return body
}
const studioRead = studioTool(
  'team_board_read', '查看看板任务', 'Read the current task, activity and version before editing.',
  { taskId: studioTaskId }, ['taskId'],
  (scope, args, signal) => call(scope + '/tasks/' + encodeURIComponent(args.taskId), { signal }),
)
const studioList = studioTool(
  'team_board_list', '查看项目看板', 'Read the board with column IDs, task states, members and current task versions.',
  {}, [], (scope, _args, signal) => call(scope, { signal }),
)
const studioCreate = studioTool(
  'team_board_create_task', '创建看板任务', 'Create a task in a specified project column. The state can be set separately.',
  studioFields, ['columnId', 'title'],
  (scope, args, signal) => call(scope + '/tasks', {
    method: 'POST', signal, body: JSON.stringify(studioWriteBody(args, Object.keys(studioFields))),
  }),
)
const studioUpdate = studioTool(
  'team_board_update_task', '更新看板任务', 'Edit task fields or move it to a column. Use the version obtained from team_board_read. A conflict requires reviewing the latest values.',
  {
    taskId: studioTaskId, version: { type: 'integer', description: 'Current task version.' },
    beforeTaskId: { type: 'string', description: 'Place before this task in the destination column; empty appends to the end.' },
    ...studioFields,
  }, ['taskId', 'version'],
  (scope, args, signal) => call(scope + '/tasks/' + encodeURIComponent(args.taskId), {
    method: 'PATCH', signal, body: JSON.stringify(studioWriteBody(args, ['version', 'beforeTaskId', ...Object.keys(studioFields)])),
  }),
)

const memorySearch = {
  name: 'team_memory_search',
  description:
    'Search the team memory (decisions, facts, preferences, risks) for a project or the whole team. Use it before asking the user to repeat context.',
  parameters: {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'What to recall, in natural language.' },
      projectId: { type: 'string', description: 'Limit to one project id.' },
      limit: { type: 'integer', description: 'Maximum results, 1-20. Defaults to 8.' },
    },
    required: ['query'],
  },
  output,
  execute: async (args) => {
    const data = await call('/v1/memories/search', {
      method: 'POST',
      body: JSON.stringify({
        q: args.query,
        projectId: args.projectId || null,
        limit: args.limit || 8,
      }),
    })
    if (!data.memories.length) return { result: '没有找到相关记忆。' }
    return {
      result: data.memories
        .map(
          (m) =>
            `- [${m.kind}] ${m.title}：${m.content}（${m.author_name || '未知'}，${String(m.created_at).slice(0, 10)}，id=${m.id}）`,
        )
        .join('\n'),
    }
  },
  presentCall: generic('Search team memory'),
}

const memoryPropose = {
  name: 'team_memory_propose',
  description:
    'Propose one durable team memory for a human to confirm. This never writes directly: the person accepts or rejects it in the workbench.',
  parameters: {
    type: 'object',
    properties: {
      projectId: { type: 'string', description: 'Project id, or omit for a the delegated project.' },
      kind: {
        type: 'string',
        enum: ['fact', 'decision', 'preference', 'risk', 'note'],
        description: 'Memory kind.',
      },
      sourceType: { type:'string', enum:['resource','topic','deliverable_version','context'], description:'Type of an existing, visible, committed project source.' },
      sourceId: { type:'string', description:'Stable source ID returned by team_space_search.' },
      title: { type: 'string', description: 'Short label, such as "Release process".' },
      content: { type: 'string', description: 'The fact, decision or preference, with context.' },
    },
    required: ['title', 'content', 'sourceType', 'sourceId'],
  },
  output,
  execute: async (args, exec) => {
    const { connection } = await call('/api/agent/status', { signal: exec?.signal })
    if (connection.mode !== 'project') throw new Error('请在有写权限的项目连接中提交提议。')
    const { proposal } = await call('/v1/memory-proposals', {
      method: 'POST', signal: exec?.signal,
      body: JSON.stringify({
        projectId: args.projectId || connection.projectId,
        kind: args.kind || 'fact',
        title: args.title,
        content: args.content,
        source: { type: args.sourceType, id: args.sourceId },
      }),
    })
    return {
      result: `已提交团队记忆提议（id=${proposal.id}），等待成员在工作台确认后才会写入。`,
    }
  },
  presentCall: generic('Propose team memory'),
}


const contextShare = {
  name: 'team_context_share',
  description:
    'Distill the current conversation into a shared team context (summary, key points, decisions, open questions) for teammates to collaborate on. It is a proposal until a member accepts it in the workbench.',
  parameters: {
    type: 'object',
    properties: {
      projectId: { type: 'string', description: 'Project id, or omit to use the delegated project.' },
      title: { type: 'string', description: 'Short title of what this context is about.' },
      summary: { type: 'string', description: 'A self-contained summary a teammate can read without the original conversation.' },
      keyPoints: { type: 'array', items: { type: 'string' }, description: 'Key facts the team needs.' },
      decisions: { type: 'array', items: { type: 'string' }, description: 'Decisions already made.' },
      openQuestions: { type: 'array', items: { type: 'string' }, description: 'Questions still open for the team.' },
    },
    required: ['title', 'summary'],
  },
  output,
  execute: async (args, exec) => {
    const { connection } = await call('/api/agent/status', { signal: exec?.signal })
    if (connection.mode !== 'project') throw new Error('请在有写权限的项目连接中提交会话提议。')
    const { context } = await call('/v1/contexts', {
      method: 'POST', signal: exec?.signal,
      body: JSON.stringify({
        projectId: args.projectId || connection.projectId,
        title: args.title,
        summary: args.summary,
        keyPoints: args.keyPoints || [],
        decisions: args.decisions || [],
        openQuestions: args.openQuestions || [],
        source: { sessionId: exec?.agent?.session?.id ?? null },
      }),
    })
    return { result: `已提交共享上下文提议（id=${context.id}），成员确认后会出现在工作台「会话」里。` }
  },
  presentCall: generic('Share conversation context'),
}

const spaceSearch = {
  name: 'team_space_search',
  description: 'Search permitted project sources. Returns source IDs, kind, project, title and text. Omit projectId to use the delegated scope.',
  parameters: {
    type:'object', additionalProperties:false, required:['query'],
    properties:{query:{type:'string'},projectId:{type:'string'}},
  },
  output,
  async execute(args,exec) {
    const query = new URLSearchParams({q:args.query})
    if (args.projectId) query.set('projectId',args.projectId)
    return {result:JSON.stringify(await call('/api/agent/knowledge?'+query,{signal:exec?.signal}))}
  },
  presentCall:generic('Search project sources'),
}

const agentReport = {
  name:'team_agent_report',
  description:'Generate a read-only project report preview from real tasks, approved results and accessible source references. Requires selected project IDs in cross-project mode. A person can save/share from the workbench.',
  parameters:{
    type:'object',additionalProperties:false,
    properties:{projectIds:{type:'array',items:{type:'string'}},title:{type:'string'}},
  },
  output,
  async execute(args,exec) {
    const {connection} = await call('/api/agent/status',{signal:exec?.signal})
    const projectIds = args.projectIds ?? (connection.projectId ? [connection.projectId] : [])
    if (!projectIds.length) throw new Error('请先确认需要报告的项目范围。')
    return {result:JSON.stringify(await call('/api/agent/reports',{
      method:'POST',signal:exec?.signal,body:JSON.stringify({projectIds,title:args.title}),
    }))}
  },
  presentCall:generic('Generate project report preview'),
}

export function apply(ctx) {
  if (process.env.DSH_TEAM_V11_DEDICATED !== '1') return
  contextFence = createContextFence()
  ctx.on('llm/stream', async function* (options, next) {
    await contextAccess(options.signal)
    yield* next()
  })
  const tools = [
    projectList,
    projectCreate,
    memberList,
    todoList,
    todoCreate,
    todoUpdate,
    studioList,
    studioRead,
    studioCreate,
    studioUpdate,
    memorySearch,
    memoryPropose,
    contextShare,
    spaceSearch,
    agentReport,
  ]
  for (const definition of tools) {
    ctx.effect(() => ctx.tools.register(definition))
  }
  if (contextFence && process.env.DSH_TEAM_V11_CONTEXT_READY_FILE) {
    writeFileSync(process.env.DSH_TEAM_V11_CONTEXT_READY_FILE,'ready\n',{mode:0o600,flag:'wx'})
  }
}
