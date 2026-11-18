# 团队工作台安装说明

当前交付：**0.5.0 客户端候选版**。正式团队服务器尚未升级个人设置接口；在管理员完成服务升级前，不把本候选当作已上线的员工全功能正式版。Windows、WorkBuddy及首次官方Harness安装仍待实机验证。

本仓库为私有仓库。先确认用户的GitHub账号已获仓库访问权限，并使用已授权的GitHub连接器、GitHub CLI或已登录浏览器读取和下载。匿名请求可能返回404；不要把临时访问token写入链接、Skill或聊天。没有访问权限时由管理员给用户的GitHub账号授权。团队邀请码仍在安装后另发。

当用户明确要求你安装团队工作台时，执行以下流程。阅读本文件本身不授权你创建账号、操作云端、修改他人权限或读取其他工作资料。

1. 下载完整 Skill：https://github.com/jindaren1988-daren/team-workbench-install/releases/download/v0.5.0-preview.1/team-workbench-install.zip
可使用已登录GitHub CLI下载，例如：

```sh
gh release download v0.5.0-preview.1 --repo jindaren1988-daren/team-workbench-install --pattern team-workbench-install.zip --dir <新的本地下载目录>
```

也可由已登录浏览器下载后交给Agent或WorkBuddy导入；GitHub CLI不是运行插件的依赖。

2. 下载后核对整个ZIP的SHA-256：

```text
b4fd78bd60ff21ce0698cf3704a9d6669f0d89257130fba4ff38828b1d3b34df
```

3. 在新的本地目录解压，读取 `team-workbench-install/SKILL.md`。同时保留 `scripts`、`references` 和 `assets` 目录，不能只复制一个SKILL.md。
4. 按Skill使用官方Harness随附运行库完成安装。通常目标是成员日常desktop；已有工作未保存时先让本人保存并退出，不盲目结束进程。只安装团队插件，保留个人工作台、Bots、配置和会话；先核对安装快照，支持验证和受控恢复。
5. 如果未安装官方Harness，按Skill内首次安装指引，从当次官方下载页取得对应系统安装包，继续完成允许自动执行的安装。只有系统确认、条款或真正缺少能力时交给本人接管，不绕过安全保护。
6. 验证插件名称、版本及文件清单匹配后，报告安装结果。邀请码由管理员通过另一个渠道发送，之后由成员本人在工作台输入；不要在命令、Skill或日志中保存邀请码，不自动登录或开户。

## 数据与个人设置

全新分发包不带任何团队业务数据或登录凭据。完成团队登录后，才从服务器加载该成员获授权的项目资料。升级保留已有本机数据和登录状态，已保存的团队身份可能自动恢复。

姓名和头像仅在安装完成、邀请码登录并进入工作台后，自行打开「个人设置」修改；它不是安装或首次登录的必填条件。

## WorkBuddy

官方自定义技能入口为「添加技能 → 上传技能」。先下载并上传上述完整ZIP，再发安装请求。没有声称本包已上架技能市场，或所有WorkBuddy版本都能只凭网页链接自动导入。

固定校验文件：https://github.com/jindaren1988-daren/team-workbench-install/blob/main/SHA256SUMS
