# unix-router-guard 导航拦截插件设计规格 (2026-09-15)

## 1. 概述

### 1.1 背景

项目现有 [src/router/interceptor.uts](https://github.com/cq112233/unibestX/blob/main/src/router/interceptor.uts) 已经实现了导航拦截，但它**与业务强绑定**：登录策略常量（`LOGIN_PAGE`、`EXCLUDE_LOGIN_PATH_LIST`）、token 校验（`useTokenStore`）、TabBar 选中态（`src/tabbar/helper`）全部内联在 `doIntercept()` 里，无法作为通用能力复用，也无法独立分发。

另有一份 [2026-09-14-router-guard-design.md](./2026-09-14-router-guard-design.md) 规划了 `src/router` 内部的**工厂式守卫重构**，那仍然是在业务工程内的改造，不属于本规格范围。

`feat/router-guard` 分支（2026-09-15 上午）曾实现过一版同类插件，但它的公开形态是 `installRouterGuard({ guards, dispatch })` + 守卫对象数组、且要求宿主注入 `RouterDispatch` 才能跳 TabBar 页。本规格**不沿用**那一版，改为 `createRouter()` + `beforeEach(fn)` 的注册式形态（更贴 vue-router），并把 TabBar 的差异收敛为**可选**的 `resolveRedirectApi` 回调。该分支的 `uni_modules/unix-router-guard/` 与本规格产出的同名目录**不共存**：当前分支 `refactor/tabbar-helper-split` 上没有该目录，本规格从零创建。

本规格新增一个 **与业务零耦合** 的 uni_modules 插件 `unix-router-guard`：只提供「导航拦截 + 守卫链 + 跳转门面」，**不含任何业务规则**（不做登录判断、不依赖 Pinia / store / 项目 utils）。

### 1.2 目标

1. 把 vue-router 的**导航控制**部分（`beforeEach` / `afterEach` / `next` 三种裁决 / 重定向 / 中止）搬到 uni-app X，API 形状与 vue-router 3 一致，降低使用者的心智负担；
2. 一个 `createRouter()` 完成拦截器安装，业务只需在一个守卫里写自己的规则；
3. 纯函数层（URL 解析/规范化/序列化、守卫链执行器）可脱离 uni 运行时在 node 里跑决策矩阵测试；
4. 只依赖 `vue`（实际上只依赖 `uni` 全局，`vue` 都不需要），可直接发布插件市场。

### 1.3 非目标（明确不做）

| 不做的能力 | 原因 |
| --- | --- |
| `routes` 路由表 / 命名路由 / 动态段 `:id` | 本插件只做拦截；uni-app X 页面路径由 `pages.json` 静态声明 |
| `<router-view>` | uni-app X 页面是原生页面栈，没有视图出口可渲染 |
| `useRoute()` / `router.currentRoute` | 页面取参继续用 uni 原生的 `onLoad(options)`；插件无法可靠覆盖所有进入路径（直链、返回、原生返回键） |
| 异步守卫（`await` 后再裁决） | `uni.addInterceptor` 的 `invoke` 必须**同步**返回 boolean，形态上写不出来 |
| `router.beforeResolve()` | 没有组件内守卫，没有与之对应的时序 |
| `next(error)` / `router.onError()` | 同步拦截形态下没有失败通道 |
| `NavigationDuplicated` 重复导航报错 | uni 页面栈允许同一页面重复入栈，模拟它会破坏正常用法 |
| `to.name` / `to.meta` / `to.matched` / `to.hash` | 无路由表则无来源 |

## 2. 与 vue-router 的 API 对齐

| vue-router 3 | 本插件 | 说明 |
| --- | --- | --- |
| `new VueRouter({ routes })` | `createRouter({ apis, redirectApi })` | 无 `routes` |
| `router.beforeEach((to, from, next) => {})` | **签名完全一致** | 触发本次导航的 API 名放在 `to.api`，见 3.2 |
| `router.afterEach((to, from) => {})` | **签名完全一致** | afterEach 无 `next` |
| `next()` / `next('/x')` / `next(false)` | **完全一致** | 见 3.3 |
| `router.push(location)` | 一致（`string` 或 `{ path, query }`） | 见 3.4 |
| `router.replace(location)` | 一致 | |
| `router.go(n)` / `router.back()` | `router.back()` / `router.back(2)` | 同 `next`，用剩余参数容纳两种调用形态 |
| — | `router.relaunch(location)` | uni 特有：关闭所有页面打开 |
| — | `router.switchTab(location)` | uni 特有：只跳 tabBar 页面 |
| `to.path` / `to.fullPath` / `to.query` / `to.params` | 一致 | `params` 恒为空对象，仅为形态一致 |
| `router.beforeEach` 返回注销函数 | 一致 | |

**两个刻意保留的差异**（都会写进 readme）：

1. `to.params` 恒为 `{}`（无路由表 ⇒ 无动态段）。保留该字段只为让 vue-router 使用者的读取代码不用改。
2. `afterEach` 在**放行时同步触发**，不是在「导航确认成功后」。理由见 5.4。
3. `to.query` / `to.params` 是 `Map<string, string>` 而非对象，读法为 `to.query.get('id')` 而非 `to.query.id`。理由见 3.2（UTS 无法动态构造 `UTSJSONObject`）。

**一个刻意的补充**：`to.api` / `from.api` 是本插件新增字段，值为触发本次导航的 uni API 名（`navigateTo` / `switchTab` …）。vue-router 没有这个概念，但排查「谁触发了这次跳转」时是刚需；放在 `to` 上而不是加第 4 个守卫参数，是为了让守卫签名与 vue-router **逐字相同**，使用者可以直接照搬 vue-router 的守卫写法。

## 3. 公开 API

### 3.1 创建与选项

```uts
import { createRouter } from '@/uni_modules/unix-router-guard'

const router = createRouter({
  apis: ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab', 'navigateBack'],
  redirectApi: 'navigateTo',
  maxRedirectDepth: 5,
  debug: false
})
```

```uts
export type RouterOptions = {
  /** 需要拦截的 API 名；不传用默认 5 个 */
  apis ?: Array<string>
  /** 守卫裁决重定向时统一使用的 API；不传用 'navigateTo' */
  redirectApi ?: string
  /** 同一次导航的重定向链深度上限，超过则拒绝重定向；不传用 5 */
  maxRedirectDepth ?: number
  /** 打印拦截链路日志；不传用 false */
  debug ?: boolean
  /** 裁决重定向时按 url 决定用哪个跳转 API（如「是 TabBar 页就 switchTab」）；不传则恒用 redirectApi */
  resolveRedirectApi ?: (url: string) => string
}
```

（`?:` 是本项目已在用的可选字段写法，见 [src/utils/upload/index.uts](https://github.com/cq112233/unibestX/blob/main/src/utils/upload/index.uts) 的 `onProgress?: (progress: number) => void`；因此 `createRouter()` 与 `createRouter({ debug: true })` 都合法。）

`createRouter()` 内部完成 `uni.addInterceptor` 安装（幂等：重复调用先卸载上一次）。

### 3.2 守卫

```uts
// 前置守卫：to / from / next（与 vue-router 逐字相同）
const unregister = router.beforeEach((to, from, next) => {
  if (needLogin(to.path) && !hasToken()) {
    next(`/src/sub/auth/login?redirect=${to.fullPath}`)
    return
  }
  if (needLogin(to.path) && to.api == 'switchTab') {
    // to.api 告诉你是哪个 uni API 触发的这次跳转
  }
  next()
})

// 后置守卫：to / from
router.afterEach((to, from) => {
  console.log('navigation done', to.api, to.fullPath)
})

unregister() // 注销该守卫
```

```uts
/** 路由目标：一次导航的目标或来源 */
export type RouteTarget = {
  /** 原始 url 字符串（保留 query） */
  url: string
  /** 规范化路径（带前导 /，不含 query） */
  path: string
  /** path + query 的完整形式 */
  fullPath: string
  /** 查询参数键值对，值恒为 string（URL 是唯一跨页面传参通道） */
  query: Map<string, string>
  /** 与 vue-router 形态对齐：本插件无路由表，恒为空 Map */
  params: Map<string, string>
  /** 本插件扩展字段：触发本次导航的 uni API 名（navigateTo / redirectTo / reLaunch / switchTab / navigateBack） */
  api: string
}

/** next 回调：放行 / 改跳 / 中止 */
export type Next = (...args: Array<any>) => void

export type NavigationGuard = (to: RouteTarget, from: RouteTarget, next: Next) => void
export type AfterNavigationHook = (to: RouteTarget, from: RouteTarget) => void
```

**`query` 为什么是 `Map<string, string>` 而不是对象**：`to.query` 必须由 url 字符串**动态构造**，而 UTS 的 `UTSJSONObject` 只提供静态的 `assign` / `keys`，没有可用的动态写入接口（本项目对它的用法全是「读」，见 `uni_modules/lime-i18n/common/composer.uts`）。`Map` 则是本项目既有形态 —— `src/router/interceptor.uts:141` 的 `UrlObj.query` 就是 `Map<string, string>`。

代价是读法从 vue-router 的 `to.query.id` 变成 `to.query.get('id')`，这条差异写进 readme。

**`Next` 为什么用 `...args: Array<any>`**：[.agents/rules/uniappx.md:215](https://github.com/cq112233/unibestX/blob/main/.agents/rules/uniappx.md#L215) 规定「UTS 的联合类型目前仅支持与 `null` 的联合，`string | number` 这类需声明为 `any`」。而 vue-router 的 `next()` / `next('/x')` / `next(false)` 三种形态的**参数个数与类型都不同**，只有剩余参数能同时容纳它们并保持零参数调用合法。剩余参数在本项目已有实证（`uni_modules/lime-i18n/common/util.uts:139` 的 `parseArgs(...args: Array<any>)`）。

守卫链**同步**执行：`router.beforeEach` 注册顺序即执行顺序。

### 3.3 next 裁决表

| 调用形态 | 裁决 | 说明 |
| --- | --- | --- |
| `next()` | 放行 | 链条继续，交给下一个守卫 |
| `next(null)` | 放行 | 与 vue-router 3 一致（`null`/`undefined` 均视为放行） |
| `next('/x')` 或 `next('x?a=1')` | 短路 | 中止本次导航并改跳该地址 |
| `next(false)` | 短路 | 中止本次导航，且不做任何跳转 |
| 其他值（如 `next(123)`） | 短路 + 警告 | **fail-safe**：取值非法时按中止处理，不静默放行 |
| 守卫执行完仍未调用 `next` | 短路 + 警告 | vue-router 会挂起导航，同步形态不能挂，必须给确定结果 |

「短路」= 不再执行后续守卫，也不触发本次导航的 `afterEach`。

### 3.4 跳转门面

```uts
router.push('/src/sub/user/detail?id=1')                         // 字符串形态
router.push({ path: '/src/sub/user/detail', query: { id: 1 } })  // 对象形态
router.replace({ path: '/src/sub/auth/login' })
router.relaunch('/src/pages/index/index')
router.switchTab('/src/pages/me/me')
router.back()      // 等价 back(1)
router.back(2)
```

```uts
export type Router = {
  beforeEach: (guard: NavigationGuard) => () => void
  afterEach: (hook: AfterNavigationHook) => () => void
  push: (to: any) => Promise<any> | null
  replace: (to: any) => Promise<any> | null
  relaunch: (to: any) => Promise<any> | null
  switchTab: (to: any) => Promise<any> | null
  back: (...args: Array<number>) => void
  uninstall: () => void
}
```

- `to` 声明为 `any` 而非 `string | UTSJSONObject`：**UTS 不支持任意类型联合**（同上规则），要同时接受字符串与对象字面量只能声明为 `any`，这也是 vue-router 使用者最熟悉的两种写法。
- `back` 同样用剩余参数，`router.back()` 与 `router.back(2)` 都合法（默认退 1 层）。
- 返回值与底层 uni API 一致（`Promise<...> | null`）；导航被守卫拦截时返回 `null`。
- 跳转门面是**薄封装**：守卫挂在 `uni.addInterceptor` 上，因此业务代码直接调 `uni.navigateTo` 同样会被拦截，门面只为写法一致与便于测试。

#### 3.4.1 对象形态的内部读取方式

`any` 位置的对象字面量在 UTS 里编译为 **`UTSJSONObject`**（`_uO(...)`，见红线 1.1.10 的编译产物说明），因此内部用 `getString('path')` / `getJSON('query')` 读取，**绝不对它做 `as SomeType` 强转** —— `as` 是 Kotlin 非空转换，`UTSJSONObject` → data class 会直接抛 `ClassCastException`（红线 1.3.1 / 1.3.17）。

嵌套对象字面量 + `getJSON` 在本项目已有实证：`uni_modules/lime-i18n/common/composer.uts:60` 读的正是字面量里的嵌套对象。

**由此产生一条必须写进 readme 的使用约束**：对象形态**只能直接传字面量**，不能先声明成变量再传。

```uts
// ✅ 正确：直接传字面量 → 编译为 UTSJSONObject，内部按 Json 读取
router.push({ path: '/src/sub/user/detail', query: { id: 1 } })

// ❌ 错误：变量带显式 type 标注 → 编译为 Kotlin data class，内部按 UTSJSONObject 读取时抛异常
type MyLoc = { path: string }
const loc: MyLoc = { path: '/src/sub/user/detail' }
router.push(loc)
```

因此插件**不导出** `RouteLocation` 之类的对象类型 —— 导出它反而会诱导使用者写出上面那条错误写法。

#### 3.4.2 query 值的序列化规则

URL 是唯一跨页面通道，值最终只能是字符串：

| 值类型 | 序列化结果 |
| --- | --- |
| `string` / `number` / `boolean` | 转字符串后 `encodeURIComponent` |
| 数组 | 元素转字符串后用 `,` 连接（`{ ids: [1, 2] }` → `?ids=1,2`） |
| 对象 | `JSON.stringify` 后再编码 |
| `null` | 忽略该键 |

类型判定用 `typeof` 与 `isArray()`，键遍历用 `UTSJSONObject.toMap()`（两者在本项目均有实证：`uni_modules/lime-i18n/common/util.uts:141`、`uni_modules/lime-i18n/common/composer.uts:99`）。

### 3.5 卸载

```uts
router.uninstall()   // 移除全部已安装拦截器
```

## 4. 架构与文件结构

```
uni_modules/unix-router-guard/
├── package.json          # main: "index.uts"，dcloudext.type: "uts"
├── readme.md
├── changelog.md
├── index.uts             # 唯一门面：单层 export，禁止多层转发
└── lib/
    ├── types.uts         # 零点依赖叶子：全部 type + createRouteTarget 之外的纯类型
    ├── url.uts           # 纯函数：解析 query / 规范化路径 / 相对路径解析 / 序列化
    ├── guard.uts         # 守卫注册表 + 同步执行器（runBeforeGuards / runAfterGuards）
    ├── interceptor.uts   # addInterceptor 安装/卸载 + 裁决派发 + 重定向深度保护
    └── router.uts        # createRouter 工厂（对象字面量 + 箭头函数，不用 class）
```

依赖方向（严格单向，无环）：

```
types.uts ──> url.uts ──> guard.uts ──> router.uts ──> index.uts
                    └──> interceptor.uts ──┘
```

- `types.uts` 零依赖，是打破环的关键：`guard.uts` 与 `interceptor.uts` 都要用类型，若类型放在 `router.uts` 就会成环。
- `index.uts` **只做单层 `export *`**，`lib/*` 之间用 `import` 而非 `export *`（红线 1.1.12）。
- `createRouter()` 返回 `Router` 对象字面量（字段为箭头函数）：UTS **禁止传递 Class 实例**（`UTS110111151`），因此不能用 `class`。

## 5. 关键实现细节

### 5.1 RouteTarget 构建（`url.uts`）

沿用 [src/router/interceptor.uts](https://github.com/cq112233/unibestX/blob/main/src/router/interceptor.uts) 已验证的规则，一条都不能少：

1. 按 `?` 切分 url，前段为 path，后段按 `&` / `=` 解析为 query（值做 `decodeURIComponent`）；
2. 补前导 `/`（`src/pages/x` → `/src/pages/x`）；
3. **相对路径解析**：不以 `/` 开头、且不是 `plugin://` / `http://` / `https://` 的路径，按**当前页目录**拼成绝对路径（当前页取 `getCurrentPages()` 末页的 `route`）；
4. `fullPath` = 规范化 path + 原始 query 串。

对应的纯函数签名（可在 node 里单测）：

```uts
export function parseUrl(url: string): RouteTarget
export function normalizePath(path: string): string
export function resolveRelativePath(path: string, currentPagePath: string): string
export function buildFullPath(path: string, queryStr: string): string
```

相对路径解析依赖「当前页路径」，把它作为**参数**传入而不是在函数里调 `getCurrentPages()`，才能脱离运行时测试。

### 5.2 拦截器安装与 options 强转（`interceptor.uts`）

```uts
export function installInterceptor(api: string): void {
  uni.addInterceptor(api, createInterceptor(api))
}
```

`invoke(options: any)` 取 url 时**必须按 API 分别强转**（App 原生端各 API 的 options 是不同 Kotlin 类，混用会 ClassCastException）：

```uts
function extractUrl(api: string, options: any): string {
  if (options == null) { return '' }
  // #ifdef APP
  if (api == 'navigateTo') { return (options as NavigateToOptions).url }
  if (api == 'redirectTo') { return (options as RedirectToOptions).url }
  if (api == 'reLaunch') { return (options as ReLaunchOptions).url }
  if (api == 'switchTab') { return (options as SwitchTabOptions).url }
  // #endif
  // #ifndef APP
  const obj = options as UTSJSONObject
  return (obj.url != null) ? (obj.url as string) : ''
  // #endif
  return ''
}
```

- **只对 5 个内置 API 做 App 端强转**；`apis` 里由使用者追加的自定义 API 一律走 `UTSJSONObject` 分支，避免 `as` 抛异常（`as` 是非空转换，类型不匹配会 NPE —— 红线 1.3.17）。
- `navigateBack` 没有 url，同样走 `UTSJSONObject` 分支，其 `to` 用一个「回退目标占位」：`url` 为 `''`，`path` 取当前页路径，`api` 为 `'navigateBack'`。
- 与现有实现等价：`invoke` 同步返回 `false` 即取消本次导航。

### 5.3 裁决派发与重定向深度保护

守卫返回「改跳」时由插件统一派发：

```
pass  → 返回 true，放行
改跳  → 短路并按下方规则选 API 调用；返回 false（取消原导航）
中止  → 返回 false，不做任何跳转
```

**改跳用哪个 uni API**，按两步决定：

1. 传了 `resolveRedirectApi` → 用它按 url 逐个决定（如「是 TabBar 页就返回 `switchTab`」）；
2. 没传 → 恒用 `redirectApi`（默认 `navigateTo`）。

第 1 步存在的必要性：改跳目标若是 TabBar 页面，`uni.navigateTo` 会**直接失败**（uni 规定 TabBar 页只能用 `switchTab`）。插件对宿主的 TabBar 清单零知识，所以这里只留一个**可选**的纯函数钩子 —— 不传也能用，传了就能处理 TabBar 改跳，且不引入任何项目内依赖。

重定向派发会**再次触发拦截器**（这是预期行为，也是「登录页放行」这类写法能终止链条的原因）。防死循环用**递增 + 放行归零**策略：

- 每次重定向 `redirectDepth += 1`；
- 任一环节**放行**（含 `navigateBack`）时 `redirectDepth = 0`；
- `redirectDepth > maxRedirectDepth` 时**拒绝重定向**（按静默中止处理）并打警告。

该策略不需要依赖「interceptor 的 invoke 是否同步执行」这一未证实前提。

### 5.4 afterEach 的触发时机

`afterEach` 在**守卫链放行之后、调用 uni API 之前同步触发**。

理由：`afterEach` 在 vue-router 里依赖「导航确认」这一时机，而 uni 侧只能靠 interceptor 的 `success` 回调，该回调的跨平台行为**没有官方逐平台说明**（[2026-09-14 规格 §6.2](./2026-09-14-router-guard-design.md) 已把这条列为待真机验证项）。`afterEach` 的典型用途是埋点与 TabBar 选中态同步，对「导航随后可能失败」不敏感，因此优先选**确定会触发**的时机。

真机验证后若确认 `success` 回调可靠，可切换为 success 触发 —— 改动只在 `interceptor.uts` 一处。

## 6. 红线遵守

- **禁止 `interface`**：全部使用 `type` 别名；
- **禁止 `undefined`**：空值一律 `null`，联合类型仅为 `T | null`；
- **禁止任意类型联合**：需要多类型的位置（`next` 参数、`push` 的 `to`）声明为 `any` 并在此文档写明原因；
- **基础类型等值比较**：一律 `==` / `!=`；
- **数字与数组显式声明类型**；函数参数与返回值显式声明类型，无返回值写 `:void`；
- **类型定义在文件顶层作用域**；
- **禁止传递 Class**：用工厂函数 + 类型化对象字面量（箭头函数字段）；
- **禁止多层 `export *`**：只有 `index.uts` 做单层转发；
- **`.uvue` 与 `<script setup>`**：本插件是纯逻辑 UTS，不含组件，Vapor / VDOM 差异不适用；
- **条件编译**：`#ifdef` / `#ifndef` / `#endif` 不写前缀斜杠；分支内不做自动格式化排序。

## 7. 风险与约束

| 风险 | 影响 | 处置 |
| --- | --- | --- |
| `afterEach` 触发时机与 vue-router 语义不同 | 使用者在「导航失败」时也会收到 afterEach | 已写入 readme 与本文档 5.4；真机验证后可切换 |
| `next` / `to` 使用 `any` | 失去该处的静态类型提示 | UTS 联合类型限制所致，无替代方案；类型说明写进 readme |
| 对象形态**只能直接传字面量**（见 3.4.1） | 使用者若先把 `{ path, query }` 存进带类型标注的变量再传，App 端会抛 `ClassCastException`（H5/node 却正常，只在真机暴露） | 不导出对象类型以消除诱导；约束写进 readme；8.3 回归矩阵里加一条「变量承载对象形态」的用例 |
| `to.query` 是 `Map` 而非对象（见 3.2） | 与 vue-router 读法不一致 | UTS 无法动态构造 `UTSJSONObject`，无替代方案；差异写进 readme |
| 改跳目标是 TabBar 页时必须配 `resolveRedirectApi` | 不配则该次改跳失败（`uni.navigateTo` 不支持 TabBar 页） | 插件零知识宿主的 TabBar 清单，只能靠可选钩子；readme 给出配置示例 |
| 自定义 API 只能走 `UTSJSONObject` 分支 | App 端自定义 API 的 options 需自身可被当作 `UTSJSONObject` 读取 | 文档明确；内置 5 个 API 不受影响 |
| 相对路径解析依赖页栈 | 页栈为空（如冷启动首个页面）时解析结果可能不符预期 | 页栈为空时保持原样不做拼接，并要求使用绝对路径 |
| 插件与 `src/router/` 同时安装 | 两条守卫链同时生效、重复重定向 | readme 明确「二选一」；本期不改造 `src/router/` |

## 8. 验证计划

### 8.1 node harness 决策矩阵（先写，后实现）

项目**当前没有任何测试框架**，按 skill 1.3.13 的做法搭建 node harness，目录 `scripts/router-guard-test/`（不复用既存的空目录 `scripts/guard-test/`）：

1. 把 `lib/types.uts`、`lib/url.uts`、`lib/guard.uts` 按纯文本转换为 `.ts`（相对导入补 `.ts` 后缀、UTS 的 `a ?: A` 可选参数转 TS 的 `a?: A`、条件编译按目标平台求值）；
2. `stub.ts` 补齐运行时全局：`uni`（`addInterceptor` / `navigateTo` 等空实现）、`getCurrentPages`；
3. 覆盖：URL 解析与规范化（含相对路径、`plugin://`、`http(s)://`、百分号转义）、next 裁决表 6 种形态、守卫链短路顺序、重定向深度保护、放行归零；
4. **必须验证「把实现改坏时测试会红」** —— 不会红的测试等于没测（skill 红线 28）。

`interceptor.uts` 因直接调用 `uni.addInterceptor` 与条件编译强转，不进 harness，改由 8.3 的手工回归覆盖。

### 8.2 真机构建验证

按 skill 1.3.15，必须使用**不带 `--compile`** 的真机构建：

```bash
/Applications/HBuilderX.app/Contents/MacOS/cli launch app-android \
  --project /Users/chenqi/Desktop/unibestX --deviceId <序列号>
```

构建后先确认日志中 **`编译为android class` 出现 ≥ 1 次**，再看 `项目 unibestX 编译成功。`

（`launch app-android --compile true` 与 `compile app-android --file` **不执行** Kotlin 编译阶段，对故意写坏的代码同样报「编译成功」，不可作为验证依据。）

### 8.3 手工回归矩阵

需要一个临时验证页（不属于交付物，验证后移除），覆盖：

- `next()` 放行 → 导航正常发生，`afterEach` 触发；
- `next('/x')` → 原导航取消、跳到 `/x`，链条不继续；
- `next(false)` → 无任何跳转；
- `push({ path: '/xxx', query: { id: 1 } })` 对象形态 → 拼出 `/xxx?id=1` 并正常跳转；query 值覆盖 `string` / `number` / `boolean` / 数组四种类型（见 3.4.2）；
- 「把对象形态存进带类型标注的变量再传」→ 记录真机实际表现，确认与 3.4.1 描述的边界一致；
- 未调用 `next` → 导航取消 + 警告日志；
- 5 个 API（`navigateTo` / `redirectTo` / `reLaunch` / `switchTab` / `navigateBack`）各自触发拦截；
- 相对路径 `'subpage?id=1'` → 解析为当前页同目录的绝对路径；
- 无限重定向（守卫把 A 改跳 B、B 改跳 A）→ 达到 `maxRedirectDepth` 后停下并打警告。

## 9. 交付清单

| 文件 | 动作 |
| --- | --- |
| `uni_modules/unix-router-guard/package.json` | 新增（`main: "index.uts"`，`dcloudext.type: "uts"`） |
| `uni_modules/unix-router-guard/index.uts` | 新增（单层门面） |
| `uni_modules/unix-router-guard/lib/types.uts` | 新增 |
| `uni_modules/unix-router-guard/lib/url.uts` | 新增 |
| `uni_modules/unix-router-guard/lib/guard.uts` | 新增 |
| `uni_modules/unix-router-guard/lib/interceptor.uts` | 新增 |
| `uni_modules/unix-router-guard/lib/router.uts` | 新增 |
| `uni_modules/unix-router-guard/readme.md` | 新增（用法、与 vue-router 的差异、与 `src/router` 二选一） |
| `uni_modules/unix-router-guard/changelog.md` | 新增 |
| `scripts/router-guard-test/` | 新增（node harness，不参与主工程编译） |
