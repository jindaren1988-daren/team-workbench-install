#!/bin/bash
set -euo pipefail
script_dir="$(cd "$(dirname "$0")" && pwd -P)"
if [ "$(uname -m)" != arm64 ]; then echo '官方当前 macOS 下载仅支持 Apple 芯片；此安装器不承诺 Intel 支持。' >&2; exit 1; fi
cli="${TEAM_WORKBENCH_DSH_CLI:-/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh}"
if [ ! -x "$cli" ] && [ -z "${TEAM_WORKBENCH_DSH_CLI:-}" ]; then cli="$HOME/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh"; fi
if [ ! -x "$cli" ]; then echo '未找到官方 Harness。请从 https://www.deepseek.com/download/ 下载 macOS Apple 芯片版并正常安装，再重试。请由本人处理系统确认/条款；不要关闭 Gatekeeper。' >&2; exit 2; fi
while [ -L "$cli" ]; do
  cli_dir="$(cd "$(dirname "$cli")" && pwd -P)"; target="$(readlink "$cli")"
  case "$target" in /*) cli="$target";; *) cli="$cli_dir/$target";; esac
done
contents="$(cd "$(dirname "$cli")/../../../.." && pwd -P)"
executable="$(/usr/libexec/PlistBuddy -c 'Print :CFBundleExecutable' "$contents/Info.plist")"
case "$executable" in ''|*/*|.|..) echo '官方应用信息无效。' >&2; exit 1;; esac
export DSH_DESKTOP_NODE_EXECUTABLE="$contents/MacOS/$executable"
export ELECTRON_RUN_AS_NODE=1
if [ ! -x "$DSH_DESKTOP_NODE_EXECUTABLE" ]; then echo '官方应用运行载体缺失。' >&2; exit 1; fi
"$cli" --version
exec "$DSH_DESKTOP_NODE_EXECUTABLE" --expose-internals "$script_dir/install.mjs" --cli "$cli" "$@"
