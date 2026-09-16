## 1.0.0（2026-09-15）

- 首个版本：`createRouter()`、`beforeEach` / `afterEach`、`next()` / `next('/x')` / `next(false)` 裁决
- 拦截 `navigateTo` / `redirectTo` / `reLaunch` / `switchTab` / `navigateBack`
- 跳转门面：`push` / `replace` / `relaunch` / `switchTab` / `back` / `uninstall`
- 重定向链深度保护（默认上限 5）与可选 `resolveRedirectApi`
- 自带 node harness（`scripts/router-guard-test/`）
