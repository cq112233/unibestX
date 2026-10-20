---
trigger: glob
description: 路由硬性契约 —— 读参数 useRoute、跳转 useRouter、禁止原生导航 API
globs: src/**/*.uts,src/**/*.ts,src/**/*.vue,src/**/*.uvue
---

# router-standard（Glob：`src/**/*.{uts,ts,vue,uvue}`）

> 只写「该用谁」。`useRoute` 返回什么、字段类型、全部场景与坑点 → **unibestX-skill 分册 8**。

## MUST

- **导入**：`import { useRoute, useRouter } from '@/uni_modules/route-bestX/index.uts';`（门面 `@/src/router/index.uts` 等价）。
- **读当前路由**：一律 `useRoute()`，取参用 `route.query.get('id')`。
- **跳转**：一律 `useRouter()` 的 `push` / `replace` / `relaunch` / `switchTab` / `back` / `go`。
- **`query` 值恒为 `string`**，取到后必须显式转类型并给默认值（`parseInt(idText, 10)`）。
- **`meta` 使用前必须判空**，嵌套字段（`style`）逐层下标访问。
- **失败处理走 `onError` / `afterEach`**，或用双参 `.then(ok, err)`。

## MUST NOT

- **禁止直接调 `uni.navigateTo` / `uni.redirectTo` / `uni.reLaunch` / `uni.switchTab` / `uni.navigateBack`**（绕过守卫 = 登录拦截、TabBar 分流、路由状态同步同时失效）。
- **禁止 `onLoad((options) => {...})` 取参数**（不响应式，且微信小程序端是编码态）。
- **禁止手写 `getCurrentPages()` 判断当前页**；非组件环境用 `getCurrentPath()`。
- **页面展示禁止读 `router.currentRoute` / 全局 `routeState`**（语义是「正在导航到的路由」）。
- **`useRoute()` 只能在页面 / 组件 `setup` 调用**；禁止解构、禁止身份比较。
- **禁止链式 `.catch()`**；禁止自己拼 query 串直传（用 `{ path, query }` 对象形态）。

---

> 📖 需要 `RouteLocation` 全字段、`RouteLocationRaw` 参数、10 类场景写法、14 条坑点 → 加载 **unibestX-skill 分册 8**（`.claude/skills/unibestX-skill/references/8-router-spec.md`）。
