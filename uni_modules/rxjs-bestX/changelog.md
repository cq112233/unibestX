# Changelog

## 1.0.0 (2026-10-19)

- 从项目内 `src/utils/rxjs-lite/` 迁出，升级为独立 `uni_modules/rxjs-bestX` 模块。
- 核心概念：`Observable` / `Subscriber` / `Subscription` / `Subject` / `Operator`。
- 创建函数：`fromArray` / `interval` / `timer` / `throwError`。
- 操作符：`map` / `scan` / `filter` / `toArray` / `distinctUntilChanged` / `debounceTime` / `throttleTime` / `take` / `takeUntil` / `tap` / `startWith` / `catchError` / `finalize`。
- 工具函数：`unsubscribeAll`。
- 全平台支持：Android / iOS / 鸿蒙 / H5 / 微信小程序 / 支付宝小程序，纯 UTS 实现，无第三方依赖。
