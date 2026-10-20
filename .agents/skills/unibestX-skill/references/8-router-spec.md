# 9 路由导航规范（useRoute / useRouter 优先 · 禁止原生导航 API）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：页面 / 组件里要做**任何跳转**（入栈、替换、回退、切 Tab）时；要**读当前路由信息**（path / query / meta / name）时；准备写 `onLoad((options) => {...})` 取参数、手写 `getCurrentPages()` 判断当前页、或直接 `uni.navigateTo(...)` 时 —— **必须首先阅读并严格遵循本分册**。
>
> **与其它分册的分工**：分册 8.4.2 只做「`@/src/router` 有哪些工具」的清单式速查；本分册讲「跳转与取路由**该怎么写、为什么不能那么写**」。守卫规则怎么加一条、登录黑白名单配置在哪改，看 `src/router/README.md`。
>
> **核心定位**：**页面与组件里不许出现原生导航 API，路由信息一律从 `useRoute()` 读。**
> 对标 `vue-router` 的 `useRoute()` / `useRouter()`，本项目已把两者完整封装好；绕过去自己调原生 API，等于把**登录拦截、TabBar 分流、路由状态同步、参数编解码**四件事全部重写一遍，且必然漏掉其中一项。

---

## 9.1 铁律一：跳转一律走 `useRouter()`

### 9.1.1 正反例对照

```uts
// ✅ 正确：统一走 useRouter()，底层映射到 uni 原生 API，全局拦截器照常生效
import { useRouter } from '@/src/router/index.uts';

const router = useRouter();

router.push('/src/pages/detail/detail');                                  // 入栈（可返回）
router.push({ path: '/src/pages/detail/detail', query: { id: 1 } });      // 对象形态，query 自动拼串并编码
router.replace('/src/pages/index/index');                                 // 关当前页再打开
router.relaunch('/src/pages/index/index');                                // 关掉所有页面再打开
router.switchTab('/src/pages/me/me');                                     // 切 TabBar 页（必须用它）
router.back();                                                            // 回退一层（等价 back(1)）
router.back(2);                                                           // 回退两层
router.go(-2);                                                            // vue-router 形态：仅支持负数
```

```uts
// ❌ 错误：页面里直接调原生导航 API
uni.navigateTo({ url: '/src/pages/detail/detail?id=1' });   // 绕过守卫：登录校验 / TabBar 分流 / 路由状态同步全部失效
uni.switchTab({ url: '/src/pages/me/me' });                 // 同上
uni.navigateBack({ delta: 1 });                             // 回退本身不过守卫，但同样一律走 router.back()，保持一处出口
```

### 9.1.2 为什么不能直接用 `uni.navigateTo`

`useRouter()` 的每个方法都是**薄封装**：拼好 url 后调同一个 uni API。但它比裸调用多保证三件事，这三件事都在 `src/router/interceptor/interceptor.uts` 的全局拦截器里：

| 保证 | 绕过后的表现 |
| :--- | :--- |
| **登录拦截**：每次跳转先过 `guard/` 的规则链，未登录自动改跳登录页并带 `?redirect=原地址` | 未登录也能进需要登录的页面；登录后也回不到原页 |
| **TabBar 分流**：守卫改跳时自动识别 TabBar 页并改走 `switchTab` | 改跳 TabBar 页被框架静默拒绝，用户点了没反应 |
| **路由状态同步**：放行时把目标路由预写进 `useRoute()` 的状态 | 新页面首帧读到的是**上一页**的 `route.path`（App 端页面栈有滞后，回读也救不回来） |

> ⚠️ **`uni.navigateTo` 跳 TabBar 页会被框架直接拒绝**（这是 uni 自身的限制，不是本项目的）。TabBar 页只能用 `router.switchTab()`。

### 9.1.3 `useRouter()` API 速查

| 方法 | 落到哪个 uni API | 入参 | 返回 |
| :--- | :--- | :--- | :--- |
| `push(to)` | `uni.navigateTo` | `string \| RouteLocationRaw \| null` | 该 API 的 Promise；入参为空 / 缺 `path` 时 `null` |
| `replace(to)` | `uni.redirectTo` | 同上 | 同上 |
| `relaunch(to)` | `uni.reLaunch` | 同上 | 同上 |
| `switchTab(to)` | `uni.switchTab` | 同上 | 同上 |
| `back(delta = 1)` | `uni.navigateBack` | `number` | `void` |
| `go(delta = -1)` | `uni.navigateBack`（**仅负数**） | `number` | `void` |
| `resolve(to)` | —（只拼 url，不跳转） | 同上 | `string`（归一化后的 url） |

- **`go()` 传正数会告警并忽略** —— uni-app X 没有「前进」API，别指望它。
- **返回类型标 `any | null`**（分册 1 / 红线 27）：标成 `Promise<any> | null` 或只写 `any` 都会因泛型不协变报类型不匹配。
- **对象形态收具名类型 `RouteLocationRaw`**（`{ path, query }`，定义在 `src/router/utils/utils.uts`）：字面量与带类型标注的变量都可以；**裸的 `UTSJSONObject`（如 `JSON.parseObject()` 的返回值）会被编译期挡下**，这是有意的收紧。
- 需要处理跳转失败时用**双参** `.then(onFulfilled, onRejected)`；⚠️ **严禁链式 `.catch()`**（分册 1 / 红线 35，Kotlin 端 `error25` 编不过）。
- `useRouter()` 返回**全局单例**，可安全长期持有；首次调用会顺带确保路由状态就绪。

> 📌 **query 值不要自己拼串**：写 `router.push('/a/b?id=' + id)` 会漏掉 URL 编码（中文、空格、`&` 全炸）。用对象形态 `router.push({ path: '/a/b', query: { id } })`，序列化与编码由 `serializeQuery()` 统一负责。

---

## 9.2 铁律二：路由信息一律从 `useRoute()` 读

### 9.2.1 正反例对照

```uts
// ✅ 正确：setup 里调 useRoute()，响应式、只读
import { computed } from 'vue';
import { useRoute } from '@/src/router/index.uts';

const route = useRoute();

const detailId = computed((): string => {
  return route.query.get('id') ?? '';      // query 值已是 URL 解码态，中文可直接显示
});
```

```uts
// ❌ 错误一：用 onLoad(options) 取参数
onLoad((options) => {
  // 口径与其它页面不一致（微信小程序端 options 是 URL 编码态，还得自己 decodeURIComponent）
  // 且不是响应式的：本页重新显示 / 同路径带参重进时不会刷新
  const id = options['id'];
});
```

```uts
// ❌ 错误二：手写 getCurrentPages() 判断当前页
const pages = getCurrentPages();
const currentPath = pages[pages.length - 1].route ?? '';   // App 端页面栈有滞后，读到的可能是上一页
```

```uts
// ❌ 错误三：自己订阅路由事件造一份状态
uni.$on('routeChange', () => { ... });                      // 全局 emitter 会泄漏原生 Activity（红线 40）
```

### 9.2.2 `useRoute()` 返回什么

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `path` | `string` | 规范化路径，带前导 `/`、不含 query，如 `/src/pages/me/me` |
| `fullPath` | `string` | `path` + query 串，如 `/src/pages/me/me?tab=1` |
| `query` | `Map<string, string>` | 查询参数，**值已 URL 解码**（全端统一口径） |
| `params` | `Map<string, string>` | **恒为空**。uni-app X 无动态路由段，仅为对齐 vue-router 形态 |
| `meta` | `UTSJSONObject \| null` | 路由元信息，见 9.2.4 |
| `name` | `string \| null` | 取自 `meta` 的 `name` 字段（页面 `definePage` 里声明），未声明为 `null` |

**排版注意（分册 2）**：`query` 是 `Map`，**模板里 `v-for` 直接遍历 Map 拿不到稳定下标**，必须先摊成数组再交给 `v-for`：

```uts
type QueryRow = { key: string, value: string };

const queryRows = computed((): QueryRow[] => {
  const rows: QueryRow[] = [];
  route.query.forEach((value: string, key: string): void => {
    rows.push({ key, value } as QueryRow);
  });
  return rows;
});
```

### 9.2.3 ⚠️ `useRoute()` 返回的是「本页快照」，不是全局那一份

这是本模块**最容易踩错**的一点，务必理解：

- **每次调用都新建一份快照**（页面里与子组件里各调一次就是各一份），它们**值相同、互不影响**：本页路由变了，本页所有快照一起变；别的页面变了，本页一份都不动。
- **不要做身份判断**：`useRoute() === useRoute()` 恒为 `false`，`===` 本身也违反 UTS 铁律（用 `==`，但此处根本不该比）。
- **只在页面 / 组件的 `setup` 中调用**。它内部依赖组件级 `onPageShow` / `onPageHide` 生命周期来刷新与冻结快照；在纯工具函数、模块顶层调用既拿不到页面生命周期，也会触发 Vue 告警。

**为什么这么设计**：全局那份路由状态在**跳转请求发出时**就被写成了目标路由，而上一页此刻还挂在屏幕上有进入动画。若两边共用一份，上一页的 `route.fullPath` 会在新页进入期间就翻成新页的值（同页带参重进尤其明显）。拆成快照后，上一页在重新显示之前纹丝不动，新页面首帧又能直接读到自己的路由。完整模型见 `src/router/hooks/route-snapshot.uts` 文件头。

### 9.2.4 `meta` / `name` 不用手写注册

页面 `definePage` 里声明什么，构建期插件就把它原样写进 `pages.json`，并同步生成一份路由表（`src/router/generated/page-meta.uts`），`useRoute()` 按当前路径自动取到 —— **`pages.json` 里这个页面的配置项就是 `meta`**。

```uts
definePage({
  name: 'routerBasicDemo',                                // → useRoute().name
  style: { navigationBarTitleText: '路由 hooks 用法' }     // → useRoute().meta['style']
});
```

需要补充 / 覆盖时用 `setRouteMeta()`（从 `src/router/hooks/route-state.uts` 精准导入）：

```uts
import { setRouteMeta, removeRouteMeta } from '@/src/router/hooks/route-state.uts';

setRouteMeta('/src/pages/me/me', { name: 'me', title: '我的', requireAuth: true });
removeRouteMeta('/src/pages/me/me');     // 移除后回落到 pages.json 的配置项
```

### 9.2.5 非组件环境（api 层 / 纯工具函数）怎么取当前路由

`useRoute()` 只能在组件 `setup` 里调用。在 api 层、工具函数这类**没有组件实例**的地方：

```uts
// 取当前栈顶页面的路径（最常用）
import { getCurrentPath, getCurrentRoute, isSamePath } from '@/src/router/utils/utils.uts';

const path = getCurrentPath();               // '/src/pages/me/me'（规范化，不含 query）
const raw = getCurrentRoute();               // 'src/pages/me/me'（页面栈原生 route 串）
const same = isSamePath(path, '/src/pages/me/me');
```

```uts
// 需要响应式 / 完整字段时，读全局那一份路由状态
import { routeState } from '@/src/router/hooks/route-state.uts';

console.log(routeState.fullPath);
```

> ⚠️ 全局 `routeState` 的语义是「应用当前 / **正在导航到**的路由」——**跳转请求发出时它就变成目标路由了**，不是「眼前这一页」。要在页面上展示本页路由，永远用 `useRoute()`。

---

## 9.3 精准导入：哪个符号从哪个文件拿

> 🚨 这是**不因任务大小豁免**的红线（分册 1.22 / 红线 36）。门面 `src/router/index.uts` **只转发四块**：`config`、`useRoute`、`useRouter`、`interceptor`；其余符号一律精准导入具体实现文件 —— 门面整包转发会让底层符号全成公共 API，调用方顺手穿越门面，正撞 Kotlin `<clinit>` 循环死锁。

| 你要的 | 从哪拿 |
| :--- | :--- |
| **读本页路由 / 导航器** | `@/src/router/index.uts`（`useRoute` / `useRouter`） |
| 登录页地址、黑白名单策略 | `@/src/router/config/config.uts` |
| 安装全局拦截器、H5 直链入口 | `@/src/router/interceptor/interceptor.uts` |
| 手动跳登录页（401 等场景） | `@/src/router/toLoginPage/toLoginPage.uts` |
| 路径 / URL 工具、`route` 单例 | `@/src/router/utils/utils.uts` |
| 全局路由状态、`setRouteMeta()` | `@/src/router/hooks/route-state.uts` |
| 业务守卫规则 | `@/src/router/guard/` |

- ⚠️ **`.uts` 后缀必须保留**（`@/src/router/index.uts`，不是 `@/src/router`）：去掉后缀 TS 侧会丢补全并报 `TS2307`。
- ⚠️ **`@` 指向项目根**，统一写 `@/src/...`；模块内部互相引用用相对路径。
- ⚠️ **`@/src/router/index.uts` 上并没有 `cleanPath` / `getCurrentPath` / `parseUrlToObj` / `toLoginPage` / `route` 单例** —— 这些必须从 `utils/utils.uts`、`toLoginPage/toLoginPage.uts` 精准导入（分册 8.4.2 已同步订正）。
- ⚠️ **`guard/` 里的文件不要 import `index.uts`** —— 门面转出的 interceptor 会把 guard 拉进来，互相 import 就成自环。

---

## 9.4 场景速查：这件事该用谁

| 场景 | 正确写法 |
| :--- | :--- |
| 打开一个二级页 / 详情页 | `useRouter().push({ path, query })` |
| 打开一个 TabBar 页 | `useRouter().switchTab('/src/pages/xxx/xxx')` |
| 登录成功后替换当前页 | `useRouter().replace(target)` |
| 退出登录 / 切换账号后回首页 | `useRouter().relaunch('/src/pages/index/index')` |
| 返回上一页 / 返回 N 层 | `useRouter().back()` / `useRouter().back(2)` |
| 读本页 query 参数 | `useRoute().query.get('id') ?? ''` |
| 读本页路径 / 路由名 | `useRoute().path` / `useRoute().name` |
| 读本页路由元信息 | `useRoute().meta`（来自 `definePage`） |
| 只想拼出目标 url 看一眼 | `useRouter().resolve({ path, query })` |
| 401 / 业务代码里主动送用户去登录 | `toLoginPage()`（toLoginPage.uts，内置 1s 节流） |
| 非组件环境取当前页路径 | `getCurrentPath()` / `getCurrentRoute()`（utils.uts） |
| 改「哪些页面要登录」 | `src/router/config/config.uts` 的 `EXCLUDE_LOGIN_PATH_LIST` + `LOGIN_STRATEGY` |
| 加一条新的路由规则（权限 / 会员…） | 在 `src/router/guard/` 新建 `guardXxx.uts`，别改框架侧 |

---

## 9.5 自检红线清单

- [ ] **红线 1**：严禁在页面 / 组件里直接调用 `uni.navigateTo` / `uni.redirectTo` / `uni.reLaunch` / `uni.switchTab` / `uni.navigateBack`，一律走 `useRouter()`（绕过守卫 = 登录拦截、TabBar 分流、路由状态同步同时失效）。
- [ ] **红线 2**：跳 TabBar 页面必须 `router.switchTab()`，**严禁 `router.push()`**（`navigateTo` 跳 TabBar 页会被框架直接拒绝）。
- [ ] **红线 3**：严禁用 `onLoad((options) => {...})` 取路由参数，一律 `useRoute().query`（`onLoad` 不是响应式的，且微信小程序端 options 是编码态，与其它端口径不一致）。
- [ ] **红线 4**：严禁手写 `getCurrentPages()` 判断当前页，一律 `useRoute().path`；非组件环境用 `getCurrentPath()` / `getCurrentRoute()`。
- [ ] **红线 5**：严禁自己拼 query 串直传（如 `'/a/b?id=' + id`），一律用 `router.push({ path, query })` 对象形态，交给 `serializeQuery()` 编码。
- [ ] **红线 6**：`useRoute()` 只能在页面 / 组件的 `setup` 中调用，严禁在纯工具函数、模块顶层调用；且**严禁做 `useRoute() == useRoute()` 这类身份判断**（每次调用都是新快照，值相同但互不影响）。
- [ ] **红线 7**：`useRouter()` 的 `push` / `replace` / `relaunch` / `switchTab` 返回类型必须标 `any | null`，严禁标 `Promise<any> | null` 或只写 `any`；需要处理失败时用双参 `.then(ok, err)`，**严禁链式 `.catch()`**（见红线 27、35）。
- [ ] **红线 8**：严禁给页面上展示的路由信息去读全局 `routeState` —— 它是「正在导航到的路由」，跳转请求发出时就已变成目标页；页面展示一律用 `useRoute()`。
- [ ] **红线 9**：`cleanPath` / `getCurrentPath` / `parseUrlToObj` / `toLoginPage` / `route` 单例等符号**不在** `@/src/router/index.uts` 门面上，必须从 `@/src/router/utils/utils.uts`、`@/src/router/toLoginPage/toLoginPage.uts` 精准导入并保留 `.uts` 后缀（见红线 36）。
