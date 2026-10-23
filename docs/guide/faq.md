# 常见问题

## HBuilderX 未找到

先启动 HBuilderX，再执行 CLI 命令。macOS 也可检查 `/Applications/HBuilderX.app/Contents/MacOS/cli`，必要时设置 `HBUILDERX_CLI_PATH`。

## AppID 仍不能运行

仓库里的 AppID 仅供演示。请在 DCloud 开发者中心申请自己的 AppID，并同步写入 `manifest.config.ts` 与生成的 `manifest.json`。

## 修改 `pages.json` 后被覆盖

`pages.json` 是生成物。页面配置写在 `definePage`，全局配置写在 `pages.config.json`，TabBar 配置写在 `src/tabbar/config.uts`。

## UTS 编译报错

按顺序检查：

- 是否使用 `interface`，应改为 `type`。
- 是否使用 `undefined`，应改为 `null`。
- 是否使用 `===` / `!==`，应改为 `==` / `!=`。
- 是否出现 `.uts` / `.ts` / `.js` 循环依赖。
- 是否裸调用了端专属 API。

## 页面入口找不到

检查文件是否位于 `src/pages` 或 `src/sub`、是否符合页面命名规则，以及 `pages.config.json` 中的分包是否仍然存在。

## 请求 401 或域名错误

检查 `.env.*` 中的 `VITE_SERVER_BASEURL`；小程序还需要在平台后台配置 request 合法域名。

