# src/router 路由（组合式 hooks · 守卫 · 配置）

对标 `vue-router` 形态的路由层：`useRoute()` 读当前路由、`useRouter()` 做跳转、`guard/` 做导航裁决、`config/` 放登录策略配置。底层仍是 uni 原生导航 API，因此 [main.uts](../../main.uts) 里安装的全局拦截器照常生效——**你写的每一次 `router.push()` 都会先过守卫**。

> 🚨 **页面里禁止直接写 `uni.navigateTo` / `uni.switchTab`**。绕过导航器与守卫，等于把登录拦截、TabBar 分流、路由状态同步全部重写一遍，且必然漏掉其中一项。

---

## 目录结构

```text
src/router/
├── index.uts                     # 门面：只转发下面四块（业务侧 import 入口）
├── config/
│   └── config.uts                # 登录策略、登录页路径、黑白名单列表
├── guard/                        # ⭐ 业务开发者主战场：路由裁决规则
│   ├── index.uts                 #   规则链编排：runRouterGuard() / guardRoute()
│   ├── types.uts                 #   契约类型 RouteTarget / RouteGuardContext / GuardResult + allow() / block()
│   └── guardLogin.uts            #   规则 1：登录（免登录名单 / 登录页回跳 / 已登录兜底）
├── hooks/
│   ├── useRoute.uts              # 组合式：读本页路由（响应式、只读）
│   ├── useRouter.uts             # 组合式：导航器 push / replace / switchTab / back …
│   ├── route-state.uts           # 全局路由状态（四层数据源）+ meta 注册表 setRouteMeta()
│   ├── route-snapshot.uts        # 每调用点一份的页面快照（useRoute 返回的就是它）
│   └── route-types.uts           # RouteLocation 类型（零依赖叶子，勿合并）
├── interceptor/
│   └── interceptor.uts           # 框架侧管道：installRouteInterceptor() / checkDirectEntry()
├── toLoginPage/
│   └── toLoginPage.uts           # 手动跳登录页（带 1s 节流防重复打开）
├── utils/
│   └── utils.uts                 # 路径规范化 / URL 解析 / RouteUtils 单例
└── generated/
    └── page-meta.uts             # ⚠️ 构建期自动生成（pages.json → useRoute().meta），勿手改
```

| 你要做的事 | 去哪个文件 |
| :--- | :--- |
| 页面里读路由 / 写跳转 | [hooks/useRoute.uts](hooks/useRoute.uts) / [hooks/useRouter.uts](hooks/useRouter.uts) |
| 改免登录名单、切黑白名单策略、换登录页路径 | [config/config.uts](config/config.uts) |
| 加一条路由规则（权限、会员、灰度…） | [guard/](guard/)（新建 `guardXxx.uts`，见下文） |
| HTTP 401 后跳登录页 | [toLoginPage/toLoginPage.uts](toLoginPage/toLoginPage.uts) |
| 路径清洗、URL 拆参、取当前页路径 | [utils/utils.uts](utils/utils.uts) |
| 改导航管道本身（几乎不需要） | [interceptor/interceptor.uts](interceptor/interceptor.uts) |

---

## 快速上手

### 1. 读当前路由 `useRoute()`

```uts
<script setup lang="uts">
import { computed } from 'vue';
import { useRoute } from '@/src/router/index.uts';

const route = useRoute();

// query 是 Map<string, string>，值已 URL 解码；模板里直接遍历 Map 渲染不稳，先摊成数组
const id = computed((): string => {
  return route.query.get('id') ?? '';
});
</script>

<template>
  <text>{{ route.path }}</text>
  <text>{{ route.fullPath }}</text>
  <text>{{ id }}</text>
</template>
```

`RouteLocation` 的字段：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `path` | `string` | 规范化路径，带前导 `/`、不含 query，如 `/src/pages/me/me` |
| `fullPath` | `string` | `path` + query 串，如 `/src/pages/me/me?tab=1` |
| `query` | `Map<string, string>` | 查询参数，**值已解码**（中文直接可显示） |
| `params` | `Map<string, string>` | **恒为空**。uni-app X 无动态路由段，仅为对齐 vue-router 形态 |
| `meta` | `UTSJSONObject \| null` | 路由元信息，见下 |
| `name` | `string \| null` | 取自 `meta` 的 `name` 字段（在页面 `definePage` 里声明） |

**`meta` 不用另外注册**：页面 `definePage` 里声明什么，构建期插件就把它原样写进 `pages.json`，并同步生成一份路由表（[generated/page-meta.uts](generated/page-meta.uts)），`useRoute()` 按当前路径自动取到——**`pages.json` 里这个页面的配置项就是 `meta`**：

```uts
definePage({
  name: 'routerBasicDemo',          // → useRoute().name
  style: { navigationBarTitleText: '路由 hooks 用法' }   // → useRoute().meta['style']
});
```

需要补充 / 覆盖时用 `setRouteMeta()`（优先级高于 pages.json，从 [core/route-state.uts](core/route-state.uts) 精准导入）：

```uts
import { setRouteMeta, removeRouteMeta } from '@/src/router/core/route-state.uts';

setRouteMeta('/src/pages/me/me', { name: 'me', title: '我的', requireAuth: true });
removeRouteMeta('/src/pages/me/me');   // 移除后回落到 pages.json 的配置项
```

> ⚠️ **`useRoute()` 返回的是「本页快照」，不是全局那一份。** 每次调用都新建一份，同一页面里页面与子组件各调一次就是各一份，它们**值相同、互不影响**：本页路由变了本页所有快照一起变，别的页面变了本页一份都不动。别用 `useRoute() === useRoute()` 做身份判断。
>
> 这么设计是为了治「上一页提前翻页」：全局那份在**跳转请求发出时**就被写成了目标路由，而上一页此刻还在屏幕上；拆成快照后，上一页在重新显示之前纹丝不动，新页面首帧又能直接读到自己的路由。模型细节见 [core/route-snapshot.uts](core/route-snapshot.uts) 文件头。

### 2. 导航 `useRouter()`

```uts
import { useRouter } from '@/src/router/index.uts';

const router = useRouter();

router.push('/src/sub/auth/login');                                   // 入栈，可返回
router.push({ path: '/src/pages/detail/detail', query: { id: 1 } });  // 对象形态，query 自动拼串并编码
router.replace('/src/pages/index/index');                             // 关当前页再打开
router.relaunch('/src/pages/index/index');                            // 关掉所有页面再打开
router.switchTab('/src/pages/me/me');                                 // 跳 TabBar 页（必须用它）
router.back();        // 等价 back(1)
router.back(2);       // 返回两层
router.go(-2);        // vue-router 形态：负数后退。传正数会告警并忽略（uni 无「前进」API）
router.resolve({ path: '/a/b', query: { id: 1 } });                   // 只拼 url，不跳转
```

| 方法 | 落到哪个 uni API | 返回 |
| :--- | :--- | :--- |
| `push(to)` | `uni.navigateTo` | 该 API 的 Promise |
| `replace(to)` | `uni.redirectTo` | 该 API 的 Promise |
| `relaunch(to)` | `uni.reLaunch` | 该 API 的 Promise |
| `switchTab(to)` | `uni.switchTab` | 该 API 的 Promise |
| `back(delta = 1)` | `uni.navigateBack` | 无 |
| `go(delta = -1)` | `uni.navigateBack`（仅负数） | 无 |
| `resolve(to)` | — | 归一化后的 url 字符串 |

**两条必须知道的约束**：

1. **对象形态收具名类型 `RouteLocationRaw`**（`{ path, query }`），字面量与带类型标注的变量都可以；**裸的 `UTSJSONObject`（如 `JSON.parseObject()` 的返回值）不再被接受**——它会在编译期被挡下，而不是拖到真机才崩。
2. **TabBar 页面必须用 `switchTab()`**。`push()` 走 `uni.navigateTo`，跳 TabBar 页会被框架直接拒绝。

带 url 的四个方法，**入参为空 / 缺 `path` 时返回 `null` 且不触发任何跳转**（其余情况返回该 uni API 的 Promise，需要处理失败时用 `.then(onFulfilled, onRejected)`——⚠️ 不要写链式 `.catch()`，UTS 下编不过）。`back` / `go` 返回 `void`。

### 3. 手动跳登录页 `toLoginPage()`

守卫会自动处理「被拦下 → 跳登录页 → 登录成功回原页」。只有在业务代码里**主动**要把用户送去登录（如点了个需要登录的按钮）时才用它：

```uts
import { toLoginPage } from '@/src/router/toLoginPage/toLoginPage.uts';

toLoginPage();                                                          // 默认 navigateTo
toLoginPage({ mode: 'reLaunch' } as UTSJSONObject);                     // 关掉所有页面再跳
toLoginPage({ queryString: '?redirect=%2Fsrc%2Fpages%2Fme%2Fme' } as UTSJSONObject);
```

内置 1s 节流（并发请求同时 401 只会打开一个登录页），且当前页已是登录页时直接返回。

---

## 路由守卫

拦截发生在**框架侧管道** [interceptor/interceptor.uts](interceptor/interceptor.uts)：读 uni 导航入参 → 归一化 URL → 交给守卫裁决 → 按裁决放行 / 改跳，并顺手维护 `useRoute()` 的状态。

**业务规则一律写在 [guard/](guard/)**——一条规则一个文件，各自可单测，模板升级不覆盖。框架侧代码与注释里**不出现任何业务词**（登录、权限、会员……），有回归测试盯着。

### 裁决契约（对齐 vue-router 的 `next()`）

```uts
type GuardResult = {
  pass: boolean;              // 是否放行
  redirect: string | null;    // 不放行时的改跳目标；null = 静默拦截（不跳任何页面）
};

// 规则内推荐直接从 ctx 解构使用：
const { to, next } = ctx;

next();                     // 放行（等价于 allow()）
next(false);                // 静默拦截（等价于 block()）
next('/src/sub/auth/login?redirect=%2Fsrc%2Fpages%2Fme%2Fme');   // 拦截并改跳（等价于 block('...')）
```

框架只调 [guard/index.uts](guard/index.uts) 的 `runRouterGuard(to, from, api)` 这一个符号，它内部先 `buildGuardContext()` 装配上下文（**全项目唯一读 store 的地方**），再按优先级跑规则链——**前面拦下后，后面的规则完全不执行**。

### 登录规则（`guardLogin.uts`）

| 登录态 | 策略 | 目标页面 | 结果 |
| :--- | :--- | :--- | :--- |
| 已登录 | — | 非登录页 | `next()` |
| 已登录 | — | 登录页 | `next(redirect 参数 ?? 首页)` |
| 未登录 | 白名单 | 名单内页面 / 登录页 | `next()` |
| 未登录 | 白名单 | 其余页面 | `next(登录页?redirect=原地址)` |
| 未登录 | 黑名单 | 名单内页面 | `next(登录页?redirect=原地址)` |
| 未登录 | 黑名单 | 其余页面 | `next()` |

被拦下跳登录页时，守卫会把**原地址**编码进 `?redirect=`，登录成功由 [login.uvue](../sub/auth/login.uvue) 解出来 `redirectTo` 回原页。

### 要加一条规则

1. 新建 `guard/guardXxx.uts`，形状照抄 [guardLogin.uts](guard/guardLogin.uts)：收 `ctx`、返回 `GuardResult`、**纯函数、同步、不碰 uni API**；
2. 在 [guard/index.uts](guard/index.uts) 的 `guardRoute()` 里按优先级链三行（那里有注释模板）；
3. 新规则要用的业务信号（如 `isVip`）：给 [guard/types.uts](guard/types.uts) 的 `RouteGuardContext` 补字段 + 在 `buildGuardContext()` 里取值。**框架侧一行都不用动**。

### 四条必须守住的约束

1. **规则只返回裁决，不许自己调 `uni.navigateTo` / `uni.switchTab`**。拦截器只在**放行**时才把目标路由写进路由状态，规则自己跳会绕过这个不变量（新页面首帧会读到上一页）。返回 `block('url')` 即可，框架替你跳，并自动识别 TabBar 页面改走 `switchTab`。
2. **只能同步**。`uni.addInterceptor` 的 `invoke` 必须同步返回 `boolean`，规则既不能 `async` 也不能返回 Promise。需要异步（如先拉用户信息再判权限）时只能「先拦下、异步完成后再重新发起跳转」——该模式本次不提供。
3. **必须是纯函数**：只看 `ctx`、只返回裁决，不改入参、不读写模块级状态。「取 store」留在 `buildGuardContext()`（每跳一次取一次，作为快照塞进 `ctx`）。否则「整条链的裁决 == 本规则的裁决」那条等价测试就废了。
4. **禁止 `interface`、空值一律 `null`、基础类型比较一律 `==` / `!=`**（UTS 强类型铁律）。

---

## 配置项 `config/config.uts`

| 导出 | 类型 | 说明 |
| :--- | :--- | :--- |
| `LOGIN_STRATEGY_MAP` | `{ DEFAULT_NO_NEED_LOGIN: 0, DEFAULT_NEED_LOGIN: 1 }` | 策略枚举：黑名单 / 白名单 |
| `LOGIN_STRATEGY` | `number` | 当前选中的策略，默认 `DEFAULT_NO_NEED_LOGIN`（黑名单） |
| `isNeedLoginMode` | `boolean` | 便捷判断，等价 `LOGIN_STRATEGY == DEFAULT_NEED_LOGIN` |
| `LOGIN_PAGE` | `string` | 登录页绝对路径，默认 `/src/sub/auth/login` |
| `REGISTER_PAGE` | `string` | 注册页绝对路径，默认 `/src/sub/auth/register` |
| `LOGIN_PAGE_LIST` | `string[]` | 登录相关基础页列表（登录 + 注册） |
| `EXCLUDE_LOGIN_PATH_LIST` | `string[]` | 名单，语义随策略翻转（见下） |

**`EXCLUDE_LOGIN_PATH_LIST` 的语义是双向的**：

- **黑名单模式下**（默认）：名单里的页面**需要登录**，未登录访问会被拦到登录页；
- **白名单模式下**：名单里的页面**免登录直接放行**（如首页、关于页）。

匹配是**全等匹配**，不支持前缀 / 通配——**必须写完整路径**（`/src/sub/routerParamsBasicDemo/routerParamsBasicDemo`）。

```uts
// 黑名单模式（默认）——只有这些页面要登录
export const LOGIN_STRATEGY = LOGIN_STRATEGY_MAP.DEFAULT_NO_NEED_LOGIN;
export const EXCLUDE_LOGIN_PATH_LIST: string[] = [
  '/src/sub/routerParamsBasicDemo/routerParamsBasicDemo'
];
```

> ⚠️ **「什么算已登录」的口径不在这个文件里**，在 store：`src/store/vdom/token.uts` 与 `vapor/token.uts` 的 `hasValidLogin()`（token 存在且未过期）。要改成「游客也算登录」「必须有用户信息才算」，改 store 那个方法，不要在守卫里重写一份判断。

---

## 精准导入（Precise Import）

> 🚨 这是本项目**不因任务大小豁免**的红线（unibestX-skill 1.22 / 红线 36）。

`index.uts` **只转发四块**：`config`、`useRoute`、`useRouter`、`interceptor`。其余符号一律精准导入具体实现文件——门面整包转发会让底层符号全成公共 API，调用方顺手穿越门面引用，正撞 Kotlin `<clinit>` 循环死锁。

| 你要的 | 从哪拿 |
| :--- | :--- |
| 读本页路由 / 导航器 | `@/src/router/index.uts` |
| 登录页地址、黑白名单策略 | `@/src/router/config/config.uts` |
| 安装全局拦截器、H5 直链入口 | `@/src/router/interceptor/interceptor.uts` |
| 跳登录页 | `@/src/router/toLoginPage/toLoginPage.uts` |
| 路径 / URL 工具、`route` 单例 | `@/src/router/utils/utils.uts` |
| 路由状态、`setRouteMeta()` | `@/src/router/core/route-state.uts` |
| 业务守卫规则 | `@/src/router/guard/` |

⚠️ **`.uts` 后缀必须保留**（`@/src/router/index.uts`，不是 `@/src/router`）：去掉后缀 TS 侧会丢补全并报 TS2307。`@` 指向项目根，所以要写 `@/src/...`。
⚠️ **`guard/` 里的文件不要 import `index.uts`**——门面转出的 interceptor 会把 guard 拉进来，互相 import 就成自环（Kotlin 端类初始化死锁）。

---

## 谁在哪里安装

| 位置 | 调用 | 作用 |
| :--- | :--- | :--- |
| [main.uts](../../main.uts) | `installRouteInterceptor()` | 注册 `navigateTo` / `redirectTo` / `reLaunch` / `switchTab` / `chooseLocation` 拦截器 + 安装路由状态监听。必须在任何页面 setup 之前 |
| [App.uvue](../../App.uvue) | `checkDirectEntry(options)` | H5 直链 / 小程序分享链接进入时补一次拦截校验（仅非 APP 端） |

业务代码**不需要**再装任何东西——`useRoute()` / `useRouter()` 首次调用会自动确保路由状态就绪。

---

## 测试

```bash
pnpm test                            # 全量单测（vitest run）
pnpm test tests/unit/router          # 只跑路由
```

| 用例文件 | 覆盖 |
| :--- | :--- |
| [tests/unit/router/route-guard.test.ts](../../tests/unit/router/route-guard.test.ts) | 守卫决策矩阵（登录态 × 策略 × 目标页面 6 种组合）+ 整条链的短路等价性 |
| [tests/unit/router/use-router.test.ts](../../tests/unit/router/use-router.test.ts) | 每个导航方法落到哪个 uni API、入参长什么样 |
| [tests/unit/router/use-route.test.ts](../../tests/unit/router/use-route.test.ts) | 快照模型、`meta` 两级数据源、返回上一页 / 同页带参重进 |
| [tests/unit/router/interceptor.test.ts](../../tests/unit/router/interceptor.test.ts) | 框架侧管道：归一化、放行后写状态、改跳（TabBar 走 switchTab） |

规则改成纯函数就是为了这个：不用起真机、不用打桩 store，就能把裁决矩阵跑完。
