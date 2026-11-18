# 缺少 Harness 时继续安装官方应用

仅在成员已要求安装、目标机器缺少官方 Harness 时读取。当前工程机已有应用；以下首次安装路径本轮未实跑。安装应用不等于同意新法律条款或放弃系统保护。

1. 用可用联网工具打开 https://www.deepseek.com/download/ ，读取该次页面实际指向当前 OS 的官方 Harness 安装包链接。只采用页面可证明的链接（站外 CDN 也必须由该页直接链接）；不能因为文档曾给过 latest URL 就跳过确认。记录来源、最终URL及本地安装包hash，hash仅用于本次复核、不伪称发布者签名。
2. 下载至新建的本机临时/下载目录，使用工具允许的 HTTPS 下载器。Mac自带curl、Windows的PowerShell Invoke-WebRequest足够，无需Node/Git。保持文件名和路径作为独立参数。检查HTTP成功、预期磁盘镜像/PE类型、大小合理，错误页不能当安装包执行。保留来源和下载元数据/隔离属性。
3. Mac：仅Apple芯片、macOS13+。在本人用户目录 `~/Applications` 安装，不用sudo，不覆盖现有同名应用。可用 `hdiutil attach -readonly -nobrowse -mountpoint '<本次空mount目录>' '<官方下载的DMG>'` 只读挂载；确认内含官方 `DeepSeek Harness.app`，用 `codesign --verify --deep --strict` 和系统 `spctl --assess --type execute` 核对签名与系统判断，不修改签名或豁免。若系统要求联网/本人确认或拒绝，交给本人处理原始提示；不能关闭Gatekeeper或执行 `xattr -d`。验证允许后用系统 `ditto --rsrc --extattr '<mount>/DeepSeek Harness.app' "$HOME/Applications/DeepSeek Harness.app"` 复制，保留资源、权限和扩展属性。若下载DMG带 `com.apple.quarantine` 而复制结果缺失，应将同一值传递到复制后的应用（只增加隔离，不移除）；最终再次核对签名和隔离属性。仅卸载本次创建的mount；失败时不删除用户原有应用。然后运行安装助手，它会探测 `~/Applications`。
4. Windows：先检查下载EXE的 `Get-AuthenticodeSignature`，状态必须为Valid，发布者与本次官方发行信息相符；不自猜发布者名或忽略无签名错误。只有官方当前安装器文档明确给出无需条款交互的用户级安装参数时，才用这些已核实参数继续自动执行；没有参数证据不能猜 `/S`、`/silent`，改为正常打开官方安装器由本人完成。遇UAC/条款/SmartScreen依平台规则handoff，不绕过或修改全局执行策略。安装完成后重新探测官方CLI，再执行插件助手。
5. 只要没有必须由本人处理的系统/法律步骤，Agent应继续完成应用安装、团队插件安装及校验，不要仅返回下载链接。仍不启动工作台服务、不自动填邀请码或打开个人资料。安装后用户再在工作台内配置个人资料与输入另行取得的邀请码。

应用版本/安装器静默参数随官方发布变化；本轮Mac已装应用下的插件助手有实跑，Mac首次DMG复制、Windows安装和WorkBuddy导入未实测，不可宣称已验证一键全覆盖。
