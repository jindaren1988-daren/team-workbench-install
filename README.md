# 团队工作台安装 Skill

用于在官方 DeepSeek Harness 中安装团队工作台插件。成员可交给 Codex 执行；WorkBuddy 先上传 Skill ZIP 导入后再发安装请求。

**当前是 0.5.0 客户端候选版。正式团队服务器尚未升级个人设置接口，本次只发布安装交付与验收候选，不代表已完成正式服务上线。Windows、WorkBuddy 导入/执行及首次 Harness 安装仍待实机验证。**

## 私有访问

本仓库为私有仓库。管理员先为成员的GitHub账号授予仓库访问权限，成员登录GitHub后读取说明和下载Release。GitHub仓库权限只用于取得安装包，不授予团队项目资料访问权；团队邀请码由管理员另行发送。

## 给成员的入口

- [安装说明](INSTALL.md)：可把其 Raw 文本链接交给 Agent 读取。
- [下载完整 Skill ZIP](https://github.com/jindaren1988-daren/team-workbench-install/releases/download/v0.5.0-preview.1/team-workbench-install.zip)，用于 Codex本地读取或WorkBuddy上传技能。
- [校验值](SHA256SUMS)。

成员请求示例：

> 读取这份安装说明，在我的电脑安装团队工作台。邀请码之后单独提供，不要替我登录或设置个人资料。

## 安装与数据

完整分发包不包含项目、任务、成员、聊天记录、邀请码、登录令牌或测试数据。它只有 Skill 说明、安装助手与团队插件，预填团队服务器地址。

全新安装先显示团队登录页；通过单独取得的邀请码完成登录后，才会按该成员权限从团队服务器读取资料。日常项目、任务和空间资料仍保存在团队服务器。

升级会保留已有个人工作台、Bots、本机配置和会话。已经保存的团队登录可能自动恢复；安装不会主动清空已有数据。个人姓名和头像只在进入工作台后，主动打开「个人设置」修改，不属于安装或首次登录的必填步骤。

## 范围与验证

Mac Apple Silicon使用官方Harness 0.2.2-rc.3，在全新隔离desktop配置实跑安装、校验、重复安装和回滚通过，并保留合成个人/Bots依赖、补丁、偏好及会话标记。恢复前会核对当前团队插件是否被另外修改，避免覆盖后续改动。

Windows脚本、WorkBuddy导入和首次官方应用安装没有实机验证。本包不含官方Harness二进制；所需官方应用从[DeepSeek下载页](https://www.deepseek.com/download/)取得。系统确认或条款由本人处理，不移除quarantine或关闭系统保护。

## 维护

Skill完整目录在 [team-workbench-install](team-workbench-install/)。`assets/payload-manifest.json`固定本次插件名称、版本和文件SHA。校验提供完整性核对，不等同发布者数字签名。

此仓库为团队工作台安装交付项目，与DeepSeek官方项目无隶属或背书关系。仓库未授予额外的开源许可；公开可读不等于默认采用MIT许可。
