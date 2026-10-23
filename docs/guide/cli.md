# CLI 开发指南

项目的 CLI 是 HBuilderX 编译能力的命令行包装，不是独立原生编译器。

> 执行 `pnpm dev:*` 前必须先启动 HBuilderX 5.26+。

## 常用命令

| 命令 | 平台 |
| :--- | :--- |
| `pnpm dev:web` | H5 |
| `pnpm dev:app-android` | Android |
| `pnpm dev:app-ios` | iOS 模拟器 |
| `pnpm dev:app-ios:device` | iOS 真机 |
| `pnpm dev:app-harmony` | 鸿蒙 |
| `pnpm dev:mp-weixin` | 微信小程序 |
| `pnpm dev:mp-alipay` | 支付宝小程序 |
| `pnpm dev:mock` | H5 + 本地 Mock |

## 构建与检查

```bash
pnpm build:h5
pnpm build:test
pnpm build:prod
pnpm health
pnpm typecheck
pnpm lint:all
pnpm test
```

## HBuilderX 路径

项目会自动探测常见安装位置。特殊安装目录可配置：

```bash
export HBUILDERX_CLI_PATH=/path/to/HBuilderX/cli
```

## 常见问题

- 终端提示找不到 HBuilderX：先启动编辑器。
- CLI 与 IDE 同时编译：关闭其中一个，避免缓存竞争。
- 只有小程序或 App 报错：优先检查平台差异和条件编译。
- 升级 HBuilderX 后类型错乱：运行 `pnpm sync:hbuilderx`。

