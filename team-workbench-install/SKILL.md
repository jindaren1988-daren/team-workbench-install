---
name: team-workbench-install
description: 为成员在官方 DeepSeek Harness 中安装或恢复团队工作台插件，保留已有个人工作台、Bots、会话和配置。用于安装团队插件，不用于开户、收集邀请码、迁移账号或操作云端。
---

使用本包自带的安装助手，不要求成员预装 Node、Git 或开发工具。正式插件为 `@team/dsh-team-workbench-formal`；本包不包含任何真实邀请码或凭据。

成员明确要求在自己的电脑安装团队工作台时，常规目标是日常 Harness 的 `desktop` profile，避免装到隔离目录后日常客户端仍显示旧版。核实官方 App 已退出且没有该 profile 的运行实例后，Agent直接使用下面的正式参数完成已授权安装，不额外要求一次无意义批准。有未保存工作时让本人保存并退出，不盲杀 App。只有用户明确要求测试、隔离预览时才使用 `team-install-preview`；脚本不带参数仍默认 preview 是防误触措施，不能据此误选常规成员安装目标。先读取已有同名插件来源并保留快照，不覆盖整个 profile，也不卸载其它名字的插件。首次收到本 Skill 不代表获准创建团队、开户、同步云端数据或接受邀请。

若 `desktop` 尚未初始化，助手会停止而非假称已安装。按官方首次启动流程打开 App，由本人完成必要条款、系统确认及初始化；确认真实生成 desktop profile 后正常退出，再继续正式安装。不要复制别人的 profile 或把 preview 冒充 desktop。

- macOS：执行本 Skill 目录下 `scripts/install-macos.command`；当前官方安装包仅支持 Apple 芯片、macOS 13+。正式安装加 `--profile desktop --formal --stopped`。
- Windows x64：PowerShell 执行 `scripts/install-windows.ps1`；正式安装加 `-Profile desktop -Formal -Stopped`。不要改变系统执行策略；若系统阻止脚本，交由本人审查并按本机政策运行。
- 可通过 `TEAM_WORKBENCH_DSH_CLI`（Mac）或 `-DshCli`（Windows）指定非默认位置的官方应用内 CLI。所有含空格路径均作为独立参数传入，不能拼接 shell 命令。

未安装官方 Harness 时，按 [references/install-official-harness.md](references/install-official-harness.md) 从当次官方页面取得对应下载链接，继续下载和能安全执行的用户目录安装；不要只给链接就结束。Mac可只读挂载官方DMG、核验签名后复制到 `~/Applications`，保留quarantine。Windows仅在官方参数可核实时自动执行，否则正常打开安装器交由本人完成。条款、系统警告、验证码按平台规则handoff，不能绕过保护。完成后重跑助手。

助手校验自带 payload 的名称、版本、所有文件 SHA256，经官方 CLI 离线安装。安装记录及旧团队包仅保存在本机 DSH_HOME/member-installs 下，不上传。相同版本且字节匹配时不重复安装。失败会尝试只恢复团队插件；若该插件或补丁已另行改变，停止并报告恢复记录路径，不能强制覆盖。

验证使用安装输出的 receipt 路径：Mac 增加 `--verify '<receipt>'`；Windows 增加 `-Verify '<receipt>'`。恢复使用 `--rollback '<receipt>'` 或 `-Rollback '<receipt>'`，以及相同 profile/正式参数。恢复记录中有本机路径，不应分享给其它成员。

完成后报告官方 CLI 版本、目标 profile、插件版本、校验结果、恢复记录路径和未实测项。不要自动启动服务或访问生产 API。用户自行启动 Harness 后，应保留原个人工作台并出现团队工作台入口；个人资料（姓名、头像等）仅在登录后的工作台内自行设置，不作为安装或登录前提；不自动打开个人资料页。邀请码之后通过单独渠道取得，在团队插件本人输入，不要写入 Skill、安装命令或日志。

工具导入与已验证范围见 [references/compatibility.md](references/compatibility.md)。
