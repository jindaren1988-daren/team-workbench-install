# 官方来源和边界（2026-11-18）

Codex：[官方 Skills 文档](https://developers.openai.com/codex/skills) 当前转向 [Build skills](https://learn.chatgpt.com/docs/build-skills)。标准目录含 SKILL.md（name/description frontmatter），可附 scripts/references/assets。用户级发现目录为 `$HOME/.agents/skills`；Windows 对应用户主目录 `.agents\skills`。将整个 `team-workbench-install` 文件夹复制到该目录后检查 SKILL.md，必要时重启 Codex。已有同名目录先比较，勿覆盖用户自定义内容。也可以让 Codex直接读取解压后的 SKILL.md 执行；本包不主动改 Codex 配置。

WorkBuddy：[官方技能说明](https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Skills-Market) 明确自行技能包应通过「添加技能 → 上传技能」导入；对话搜索安装只支持市场已有技能。因此先上传本包 ZIP，再要求“使用安装团队工作台技能安装”。官方提到从 `.agents` 复制的技能，但没有在该页承诺所有版本统一扫描目录。不要擅自写猜测的 `.workbuddy/skills` 路径；本轮 WorkBuddy 导入和实际执行均未实机验证。

Harness：[唯一官方下载页面](https://www.deepseek.com/download/) 提供 [macOS Apple Silicon DMG](https://download.deepseek.com/desktop/dsh-latest-macos-arm64.dmg)（macOS 13+）和 [Windows x64 安装程序](https://download.deepseek.com/desktop/dsh-latest-windows-x64.exe)。链接是可变 latest，不宣称固定版本或已验证安装程序hash；从官方页面核对来源，在系统安装时由本人确认签名及条款。插件助手本身不下载应用；Skill会按单独的首次安装指引继续下载和用户目录安装，不移除隔离属性。Intel Mac/Windows ARM 原生支持未证实。

本机源码依据：官方 CLI `apps/desktop/cli/{dsh,dsh.cmd}` 使用随应用 Electron/Node；Mac runtime/bin/node 需要 `DSH_DESKTOP_NODE_EXECUTABLE`，助手从应用 Info.plist 的 CFBundleExecutable 解析，支持含空格位置。Windows launcher 按官方目录推导 resources/app.asar 内 CLI entry，由随应用 exe 的 Electron Node 模式执行，避免把 cmd 参数拼入 shell。无需外部 Node/Git。

本包更新的是正式邀请码插件，不含暂停的微信账号桥、系统凭据助手、OAuth 配置或任何真实邀请码。文件SHA清单用于完整性，不是发布者签名；应从可信交付渠道取得整个 Skill 包。

默认预览安装和正式desktop是不同目标。正式安装必须先停止目标profile的Harness，避免HMR和正在写配置的进程交错。只安装同名团队依赖、使用官方CLI合并bundle选择，已有个人工作台/Bots/会话不复制、不删除、不改写。备份仅保存旧团队插件与其来源/选择位置/补丁hash；回滚不替换整份配置，保留其它新增依赖。

Windows 与 WorkBuddy 无实机，本轮只做源码审查。Mac 实跑证据由交付记录另附，不能把 fixture payload 验证当成最终0.5.0业务或生产验收。
