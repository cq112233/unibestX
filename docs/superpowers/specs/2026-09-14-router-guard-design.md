# 路由守卫 (Router Guard) 工厂式重构设计规格 (2026-09-14)

## 1. 概述

当前 [src/router/interceptor.uts](../../../src/router/interceptor.uts) 把 URL 解析、路径规范化、相对路径解析、Token 校验、白/黑名单裁决、登录页重定向等全部逻辑塞在单个 `doIntercept()` 里，四个跳转 API 各自薄薄包一层。任何新增一条路由规则都要改动这个 260 行的单体函数，且无法单测。

本设计参照 `/Users/chenqi/Documents/qizhi-front/qizhi-h5/src/router/guard` 的**工厂式守卫模式**（一个关切一个文件，`createXxx(router)` 工厂 + `setupRouterGuard(router)` 统一安装），把 `doIntercept()` 拆解为可插拔的守卫链。

**目标**：
- 行为与现有实现**完全等价**，零回归；
- 新增路由规则 = 新增一个 `createXxxGuard.uts` + 在 `setupRouterGuard()` 里注册一行；
- 守卫裁决逻辑与平台 API 解耦，可在 node 里跑决策矩阵测试。

---

## 2. 参考模式映射

| qizhi-h5 (vue-router) | 本项目 (uni-app X) | 说明 |
| --- | --- | --- |
| `setupRouterGuard(router)` | `setupRouterGuard()` | 无 router 实例，守卫注册进模块级注册表 |
| `router.beforeEach(fn)` | `RouteGuard.beforeEach` | 工厂函数返回守卫对象 |
| `router.afterEach(fn)` | `RouteGuard.afterEach` + interceptor `success` 回调 | 见 6.2 风险 |
| `next()` | `allow()` | 放行 |
| `next('/login')` | `block('/login')`，由 interceptor 派发 | 守卫只表达意图，不直接调 uni API |
| `to.meta.title` | 无 | 本项目不做自动标题（见 3.4） |

**核心差异**：`uni.addInterceptor` 的 `invoke` 必须**同步**返回 boolean，而 vue-router 的 `beforeEach` 可以是 async。因此本项目的守卫**只能是同步的**。

---

## 3. 架构设计

### 3.1 目录结构与依赖方向

```
src/router/
├── location.uts                 [新] URL 解析 / 规范化 / 相对路径解析 → buildRouteContext()
├── config.uts                   [改] 常量 + judgeIsExcludePath() + buildLoginRedirectUrl()
├── guard/
│   ├── types.uts                [新] RouteGuardContext / GuardResult / RouteGuard + allow()/block()
│   ├── createTokenGuard.uts     [新]
│   ├── createPageGuard.uts      [新]
│   ├── createAfterGuard.uts     [新]
│   └── index.uts                [新] 注册表 + 守卫链执行器 + setupRouterGuard()
├── interceptor.uts              [改] 瘦身：建上下文 → 跑守卫链 → 派发重定向 → 安装 interceptor
├── index.uts                    [改] +1 行转发
└── toLoginPage.uts              [不变]
```

**依赖方向（严格单向，无环）**：

```
guard/types.uts ──┬──> location.uts ──┐
                  │                   ├──> create*.uts ──> guard/index.uts ──> interceptor.uts
                  └──> config.uts ────┘
```

- `guard/types.uts` **零依赖**，是打破环的关键：否则 `create*.uts` 需从 `guard/index.uts` 取类型，而 `guard/index.uts` 又要 import `create*.uts`，成环。
- `config.uts` **只依赖 `guard/types.uts`**，其余保持纯叶子：`buildLoginRedirectUrl()` 接收已序列化的 `fullPath: string`，序列化动作由 `location.uts` 的 `serializeTarget()` 承担。
- `guard/createPageGuard.uts` 不允许 import `interceptor.uts`（`judgeIsExcludePath` 因此迁至 `config.uts`）。

### 3.2 核心接口（`guard/types.uts`）

```uts
/** 路由目标：一次跳转的目标或来源 */
export type RouteTarget = {
  /** 原始 url 字符串（保留 query） */
  url: string;
  /** 规范化路径（带前导 /，不含 query） */
  path: string;
  /** 查询参数键值对 */
  query: Map<string, string>;
};

/** 路由守卫上下文 */
export type RouteGuardContext = {
  /** 目标页面 */
  to: RouteTarget;
  /** 来源页面（当前栈顶页面） */
  from: RouteTarget;
  /** 触发本次跳转的 API：navigateTo / redirectTo / reLaunch / switchTab */
  api: string;
};

/** 守卫裁决结果 */
export type GuardResult = {
  /** 是否放行 */
  pass: boolean;
  /** 拦截时可选：需要改跳的目标 url；null 表示静默拦截 */
  redirect: string | null;
};

/** 单个路由守卫 */
export type RouteGuard = {
  /** 守卫名，仅用于日志排查 */
  name: string;
  /** 前置守卫：返回 pass=false 即短路整条链 */
  beforeEach: ((ctx: RouteGuardContext) => GuardResult) | null;
  /** 后置守卫：仅在跳转成功后执行，不参与裁决 */
  afterEach: ((ctx: RouteGuardContext) => void) | null;
};

/** 构造放行裁决 */
export function allow(): GuardResult;
/** 构造拦截裁决；redirect 为 null 表示静默拦截 */
export function block(redirect: string | null = null): GuardResult;
```

> `type` 含函数字段在本项目已有先例：[src/utils/upload.uts](../../../src/utils/upload.uts) 的 `onProgress?: (progress: number) => void`。

### 3.3 守卫链执行语义（`guard/index.uts`）

```uts
export function setupRouterGuard(): void {
  resetGuards();
  // 顺序即语义：tokenGuard 必须早于 pageGuard ——
  // 外部跳转携带 accessToken 时先落库，pageGuard 才能看到「已登录」状态，
  // 否则会被误判为未登录并重定向到登录页。
  registerGuard(createTokenGuard());
  registerGuard(createPageGuard());
  registerGuard(createAfterGuard());
}
```

- `runBeforeGuards(ctx)`：按注册顺序执行，**任一返回 `pass: false` 立即短路**并返回该裁决（对应 vue-router 中一个守卫 `next('/login')` 终结链条）。
- `runAfterGuards(ctx)`：全部执行，不短路、不影响导航结果。
- 该顺序约束与参考项目一致：qizhi 的 `guard/index.ts` 同样把「第三方登录」排在「页面权限拦截」之前。

**afterEach 的上下文传递**：interceptor 的 `success` 回调拿不到请求参数，无法还原 url。因此在 `guard/index.uts` 内维护一个模块级暂存：

```uts
export function setPendingAfterContext(ctx: RouteGuardContext): void;
export function runPendingAfterGuards(): void;   // 取出并清空暂存，再执行 runAfterGuards
```

### 3.4 三个守卫

#### `createPageGuard` — 迁移 `doIntercept` 主体，行为等价

| 登录态 | 策略 | 目标路径 | 裁决 |
| --- | --- | --- | --- |
| 已登录 | — | 非登录页 | `allow()` |
| 已登录 | — | 登录页 | `block(redirect ?? 首页)` |
| 未登录 | 白名单 | 排除页 / 登录页 | `allow()` |
| 未登录 | 白名单 | 其余 | `block(登录页?redirect=原地址)` |
| 未登录 | 黑名单 | 排除页 | `block(登录页?redirect=原地址)` |
| 未登录 | 黑名单 | 其余 | `allow()` |

#### `createTokenGuard` — URL 携带 accessToken 时写入 tokenStore

从 `ctx.to.query` 取 `accessToken`，非空则调用 `useTokenStore().setSingleToken(...)`。

**约束**：tokenStore 只有 `setSingleToken(res)` / `setDoubleToken(res)`，**没有裸 token 的 setter**（见 [token.uts:122](../../../src/store/vdom/token.uts#L122)）。因此复用既有的 `setSingleToken`：

```uts
setSingleToken({ token: accessToken, expiresIn: EXTERNAL_TOKEN_TTL_SECONDS } as ISingleTokenRes);
```

`EXTERNAL_TOKEN_TTL_SECONDS` 在 `config.uts` 中定义为 `7200`（2 小时）。**取默认值而非真实有效期是刻意的** —— URL 只携带 token 本身，不携带 `expiresIn`；该常量必须带注释说明这是占位语义，接入真实外部跳转方后应改为由对方传 `expiresIn`。

**本守卫不改动 `src/store/` 下任何文件。**

#### `createAfterGuard` — 只提供机制，内置一个实做示例

`afterEach` 执行 `setCurIdxByPath(ctx.to.path)` 同步自定义 TabBar 选中态。

**必要性**：TabBar 策略 3（`CUSTOM_TABBAR_WITHOUT_NATIVE`）走 `uni.redirectTo` 跳转，不经过 `switchTabbar()`，选中态会失同步。

**明确不做自动导航栏标题**：uni-app X 没有 vue-router 的 `to.meta.title`，而集中映射表与逐页 `defineRouteMeta` 都有各自成本，本次不引入。

---

## 4. `interceptor.uts` 改造后形态

保留四个 API 各自的 interceptor 对象（App 原生端需要按 `NavigateToOptions` / `RedirectToOptions` / `ReLaunchOptions` / `SwitchTabOptions` 分别强转），但 `invoke` 统一收敛：

```uts
/** 统一前置处理：构建上下文 → 跑守卫链 → 派发守卫裁决的重定向 */
function handleBefore(url: string, api: string): boolean {
  if (url == null || url == '') return true;
  const ctx = buildRouteContext(url, api);       // location.uts 提供
  const result = runBeforeGuards(ctx);
  if (!result.pass) {
    dispatchRedirect(result.redirect, api);
    return false;
  }
  setPendingAfterContext(ctx);
  return true;
}

/** 由「路由器」侧统一派发跳转，守卫本身不调 uni API */
function dispatchRedirect(url: string | null, api: string): void {
  // url 为 null/空 → 静默拦截，不做任何跳转
  // 命中 TabBar 页面 → switchTabbar(url)
  // 其余 → uni.navigateTo({ url })，与现有实现等价（不随触发本次跳转的 api 变化）
  // api 仅用于日志，便于排查「哪个跳转 API 触发了重定向」
}
```

**与现有实现的等价性**：原 `doIntercept` 在重定向时同样一律使用 `uni.navigateTo`（仅 TabBar 页面改走 `switchTabbar`），不区分是哪个 API 触发的。本次保持该行为不变，`api` 参数仅作日志用途。

`installRouteInterceptor()` 内部先调 `setupRouterGuard()` 再 `uni.addInterceptor(...)`，因此 [main.uts](../../../main.uts) **无需改动**。

---

## 5. 红线遵守

- **红线 21（多层 `export *` 套娃）**：`guard/index.uts` **不做 `export *`**，只导出自身符号（类型、注册表、执行器、`setupRouterGuard`）。`create*.uts` 由 `guard/index.uts` 以 `import` 引用而非 re-export。`router/index.uts` 单层转发 `./guard/index.uts`，全项目无两层转发链。
- **禁止 `interface`**：全部使用 `type` 别名。
- **禁止 `undefined`**：空值一律 `null`，联合类型仅为 `T | null`。
- **基础类型等值比较**：一律 `==` / `!=`，禁止 `===` / `!==`。
- **下标读取**：边界判断与读取写在同一个短路表达式内、判断在前（避免 Kotlin 侧越界抛异常而 H5 静默通过）。
- **局部声明顺序**：`<script setup>` 与 `.uts` 内的局部函数定义写在所有调用点之前（Kotlin 局部声明不提升）。

---

## 6. 风险与约束

### 6.1 守卫只能是同步的
`invoke` 必须同步返回 boolean，参考项目里 `await userStore.getUserInfo()` 那类异步守卫**在本形态下写不出来**。需要异步的场景须用「先拦截 + 异步完成后重新 dispatch」的模式。本次不实现，在 `types.uts` 注释中写清楚，避免后人误以为是遗漏。

### 6.2 `afterEach` 依赖 interceptor 的 `success` 回调
官方 uni-app x 文档的示例对象含 `invoke`/`success`/`fail`/`complete`，但未提供逐回调的平台兼容表。该回调在 App 原生端是否触发**必须真机验证**。

若不触发，退路是改由页面 `onShow` 兜底 —— `guard/index.uts` 是唯一改动点。

### 6.3 递归触发
`dispatchRedirect` 内部调用 `uni.navigateTo` / `switchTabbar` 会再次触发 interceptor。现有实现已依赖此行为并靠「登录页放行」终止，本次保持等价，但需在回归矩阵中覆盖「已登录访问登录页」这一路径确认不无限循环。

---

## 7. 验证计划

### 7.1 node harness 决策矩阵测试（先写，后实现）

项目**当前没有任何测试框架**（`package.json` 无 vitest/jest），因此按 skill 1.3.13 的做法搭建 node harness：

1. 将 `guard/types.uts`、`guard/createPageGuard.uts`、`location.uts`、`config.uts` 按纯文本转换复制为 `.ts`（相对导入补 `.ts` 后缀、条件编译按 App 分支求值）；
2. `stub.ts` 补齐运行时全局：`uni`（`navigateTo` 等空实现）、`getCurrentPages`、`useTokenStore`（可注入登录态）；
3. 跑 `createPageGuard` 的全决策矩阵：{已登录, 未登录} × {白名单模式, 黑名单模式} × {登录页, 排除页, 普通页} × {带 redirect, 不带 redirect}；
4. **必须验证「改回旧实现测试会红」** —— 不会红的测试等于没测（红线 28）。

harness 放在 `scripts/guard-test/`，不参与主工程编译。

### 7.2 真机构建验证

按 skill 1.3.15，**必须使用不带 `--compile` 的真机构建**：

```bash
/Applications/HBuilderX.app/Contents/MacOS/cli launch app-android \
  --project /Users/chenqi/Desktop/unibestX --deviceId <序列号>
```

构建后先确认日志中 `编译为android class` 出现 **≥ 1 次**，再看 `项目 unibestX 编译成功。`

（`launch app-android --compile true` 与 `compile app-android --file` 都**不执行** Kotlin 编译阶段，对故意写坏的代码同样报「编译成功」，不可作为验证依据。）

### 7.3 手工回归矩阵

4 个跳转 API × {已登录, 未登录} × {登录页, 白名单页, 普通页}，重点覆盖：
- 已登录访问登录页 → 重定向到 `redirect` 或首页，且不无限循环；
- 未登录访问白名单页 → 放行；
- 未登录访问普通页 → 重定向登录页且携带完整 `redirect`（含原 query）；
- TabBar 策略 3 下跳转 TabBar 页面 → `curIdx` 选中态同步正确（验证 `createAfterGuard`）。

---

## 8. 交付清单

| 文件 | 动作 |
| --- | --- |
| `src/router/location.uts` | 新增 |
| `src/router/config.uts` | 修改：新增 `judgeIsExcludePath()`、`buildLoginRedirectUrl()`、外部 token 默认有效期常量 |
| `src/router/guard/types.uts` | 新增 |
| `src/router/guard/createTokenGuard.uts` | 新增 |
| `src/router/guard/createPageGuard.uts` | 新增 |
| `src/router/guard/createAfterGuard.uts` | 新增 |
| `src/router/guard/index.uts` | 新增 |
| `src/router/interceptor.uts` | 修改：瘦身 |
| `src/router/index.uts` | 修改：+1 行转发 |
| `scripts/guard-test/` | 新增：node harness 测试 |
