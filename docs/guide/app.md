# App 专题

uni-app X 的 App 端有两种渲染模式，项目默认使用 Vapor，并兼容 VDOM。

| 模式 | 特点 |
| :--- | :--- |
| Vapor | 无虚拟 DOM，原生渲染性能更好，项目默认 |
| VDOM | 传统虚拟 DOM，适合兼容旧组件或排查问题时切换 |

切换入口在 `manifest.config.ts` / `manifest.json` 的 `vapor` 配置。不要长期同时维护两套业务写法。

## App 开发环境

- HBuilderX 5.26+
- Android：JDK 17、Android SDK
- iOS：macOS、Xcode
- 鸿蒙：DevEco Studio

CLI 命令仍依赖本机正在运行的 HBuilderX。

## 原生能力

- 相机、扫码、文件、设备信息等能力优先使用 uni-app X 官方 API。
- 引入原生插件前确认 Android / iOS / 鸿蒙支持矩阵。
- 需要原生 jar 或收费插件时，必须准备自定义基座，不能使用标准基座验证。
- 端专属符号必须使用条件编译隔离，不能只在普通 `if` 中判断。

## 配置与权限

`manifest.json` 由 `manifest.config.ts` 生成。修改 AppID、权限、图标、版本号和原生模块后，应同步源配置，避免下一次构建被覆盖。

```bash
pnpm manifest
```

## 真机排查顺序

1. 先跑 Android，UTS 类型与 Kotlin 编译最严格。
2. 清理 `unpackage` 后重新编译，排除旧缓存。
3. 检查是否出现循环依赖、端专属 API 裸调用或错误的条件编译。
4. 使用日志定位到具体页面和生命周期，不做盲目重试。

