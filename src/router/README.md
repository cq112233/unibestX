# src/router 业务路由层（基于 route-bestX）

本项目路由系统**基于 [`route-bestX`](../../uni_modules/route-bestX/readme.md) 模块开发**，不是自研路由引擎。`src/router` 负责在模块能力之上组装业务守卫、登录鉴权、TabBar 桥接和页面元数据。

- **底层路由引擎**：[`@/uni_modules/route-bestX`](../../uni_modules/route-bestX/readme.md)（纯 UTS、对标 Vue Router 4、页面快照隔离、全平台导航拦截）
- **业务路由层**：`src/router/`（初始化单例、注册守卫、维护登录策略、转发 Hooks）
- **路由元数据**：`src/router/generated/page-meta.uts`（由构建插件生成，禁止手改）

> 🚨 **业务页面禁止直接调用 `uni.navigateTo` / `uni.redirectTo` / `uni.reLaunch` / `uni.switchTab` / `uni.navigateBack`**。统一走 `useRouter()`，否则会绕过登录拦截、维护拦截、TabBar 分流与路由状态同步。

---

## 路由能力分工

| 能力 | 所在位置 | 说明 |
| :--- | :--- | :--- |
| 路由引擎 | `uni_modules/route-bestX/` | `createRouter`、`useRouter`、`useRoute`、守卫、拦截器、URL 工具 |
| 业务门面 | `src/router/index.uts` | 创建全局 `router` 单例，注册 TabBar 桥接与业务守卫 |
| 全局守卫 | `src/router/guards/` | 维护公告守卫、登录守卫及责任链编排 |
| 业务配置 | `src/router/config.uts` | 登录页、注册页、首页、登录策略与黑白名单 |
| 页面元数据 | `src/router/generated/page-meta.uts` | `definePage` / `pages.json` 配置生成，供 `useRoute().meta` 使用 |

页面里优先从业务门面导入：

```uts
import { useRoute, useRouter } from '@/src/router/index.uts';
```

需要路由工具函数（如 `getCurrentPath`、`isSamePath`）时，从模块入口导入：

```uts
import { getCurrentPath, isSamePath } from '@/uni_modules/route-bestX/index.uts';
```

两种入口拿到的是同一个路由器单例。不要 import `route-bestX` 的内部文件。

---

## 目录结构

```text
src/router/
├── index.uts                     # 路由入口：初始化单例、注册 TabBar 桥接与业务守卫
├── config.uts                    # 登录页、注册页、首页、登录策略与黑白名单
├── guards/
│   ├── index.uts                 # 守卫责任链：维护守卫 -> 登录守卫 -> 放行
│   ├── guardMaintenance.uts      # 系统停服维护拦截
│   └── guardLogin.uts            # 登录态、黑白名单与登录页回跳
├── generated/
│   └── page-meta.uts             # definePage / pages.json 元数据（自动生成，禁止手改）
└── README.md                     # 架构与使用文档
```

---

## 快速使用

### 1. 读取当前路由（useRoute）

`useRoute()` 返回当前页面专属的**响应式只读路由快照**，包含以下字段：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `path` | `string` | 规范化路径，带前导 `/`，不含 query |
| `fullPath` | `string` | 路径 + query 串；query 值经过 URL 编码 |
| `query` | `Map<string, string>` | 查询参数；值已解码，统一用 `.get('key')` 读取 |
| `params` | `Map<string, string>` | uni-app X 无动态路由段，恒为空 Map |
| `meta` | `UTSJSONObject \| null` | 页面元数据，来自 `definePage` / `pages.json` 配置 |
| `name` | `string \| null` | 路由名；未声明时回落到路径最后一段 |
| `page` | `any \| null` | 当前栈顶页面实例 |
| `pages` | `UniPage[]` | 当前页面栈快照 |

```html
<template>
  <view>
    <text>路径：{{ route.path }}</text>
    <text>路由名：{{ route.name ?? '' }}</text>
    <text>页面标题：{{ pageTitle }}</text>
    <text>参数 id：{{ detailQuery.id }}</text>
    <text>参数 title：{{ detailQuery.title }}</text>
  </view>
</template>

<script setup lang="uts">
import { computed } from 'vue';
import { useRoute } from '@/src/router/index.uts';

definePage({
  name: 'detail',
  layout: 'navbar',
  showBack: true,
  style: {
    navigationBarTitleText: '详情页',
    navigationStyle: 'custom'
  }
});

/** 当前页面路由快照：响应式、只读，只能在 setup 中调用 */
const route = useRoute();

/** 路由参数的类型化视图 */
type DetailQuery = {
  id: number;
  title: string;
};

const detailQuery = computed((): DetailQuery => {
  const idText = route.query.get('id');
  let id: number = 0;
  if (idText != null) {
    id = parseInt(idText, 10);
  }
  return {
    id: id,
    title: route.query.get('title') ?? ''
  } as DetailQuery;
});

/** 页面标题：从 pages.json 生成的 meta 中读取 */
const pageTitle = computed((): string => {
  const meta = route.meta;
  if (meta == null) {
    return '详情页';
  }
  const style = meta['style'];
  if (style == null) {
    return '详情页';
  }
  const styleObj = style as UTSJSONObject;
  const title = styleObj['navigationBarTitleText'];
  if (title == null) {
    return '详情页';
  }
  return `${title}`;
});
</script>
```

必须注意：

1. **`query` 的值恒为 `string`**：即使是 `{ id: 1001 }` 传参，取回也是 `'1001'`，业务侧要显式 `parseInt`。
2. **`route.params` 恒为空**：命名路由的 `params` 会在导航时自动转成 query。
3. **`meta` 来自页面配置**：`definePage` 的字段就是 `meta` 的键；嵌套字段 `style` 需要逐层判空后用下标读取。
4. **`useRoute()` 每次调用都是一份本页快照**：不要在页面与子组件之间传递同一份快照，也不要解构 `const { query } = route`。
5. **只能在页面 / 组件 `setup` 中调用**：需要响应式派生值时，在 `computed` 中读取 `route` 字段。

### 2. 页面跳转（useRouter）

`useRouter()` 返回全局唯一导航器，支持字符串路径和对象形态：

```uts
import { useRouter } from '@/src/router/index.uts';

const router = useRouter();

/** 打开详情页：对象形态会自动编码 query */
function openDetail(): void {
  router.push({
    path: '/src/sub/detail/detail',
    query: { id: 1001, title: '详情页' }
  });
}

/** 命名路由：params 自动转为 query */
function openByName(): void {
  router.push({
    name: 'routerParamsBasicDemo',
    params: { id: 1002, from: 'name-route' }
  });
}

/** 替换当前页：登录成功后常用 */
function replaceToLogin(): void {
  router.replace('/src/sub/auth/login');
}

/** 关闭所有页面并回首页 */
function resetToHome(): void {
  router.relaunch('/src/pages/index/index');
}

/** 返回上一页；返回 N 层可传 delta */
function backOne(): void {
  router.back();
}
```

| 方法 | 语义 | 底层行为 |
| :--- | :--- | :--- |
| `router.push(to, intercept?)` | 保留当前页，打开目标页 | `uni.navigateTo`；命中 TabBar 页时自动改走 TabBar 处理器 |
| `router.replace(to, intercept?)` | 关闭当前页，打开目标页 | `uni.redirectTo`；命中 TabBar 页时同样自动纠偏 |
| `router.relaunch(to, intercept?)` | 关闭所有页面，打开目标页 | `uni.reLaunch` |
| `router.switchTab(to, intercept?)` | 切换 TabBar 页面 | 本项目走 `switchTabbar()` |
| `router.back(delta?, intercept?)` | 返回上一页或前 N 页 | `uni.navigateBack` |
| `router.go(delta?, intercept?)` | 按步长后退 | 仅支持负数；正数会被忽略 |
| `router.resolve(to)` | 只解析目标 URL，不执行跳转 | 返回拼接后的字符串 |

- **推荐对象形态**：`router.push({ path, query })` 会自动处理 URL 编码，避免手拼 query 导致中文、空格和 `&` 出错。
- **命名路由**适合路径稳定、名称明确的页面；不同目录存在同名页面时优先使用 `path`。
- `intercept` 默认是 `true`，业务页面不要传 `false`。跳过拦截器只用于框架级特殊跳转。
- `push` / `replace` 等方法返回 `any | null`，不需要在页面等待跳转结果；失败统一交给全局 `afterEach` / `onError`。

### 3. 全局守卫责任链

业务守卫集中维护在 `src/router/guards/`，执行顺序固定：

```text
guardMaintenance（停服维护）
        ↓
guardLogin（登录鉴权）
        ↓
next() 放行
```

任意一条规则返回 `pass == false` 时立即短路，后续规则不再执行：

```uts
import type {
  NextFunction,
  RouteTarget
} from '@/uni_modules/route-bestX/index.uts';
import { buildGuardContext } from '@/uni_modules/route-bestX/index.uts';
import { guardMaintenance } from './guardMaintenance.uts';
import { guardLogin } from './guardLogin.uts';

function runGuardsPipeline(
  to: RouteTarget,
  from: RouteTarget,
  next: NextFunction,
  api?: string
): void {
  const ctx = buildGuardContext(to, from, api ?? 'navigateTo');

  const maintenance = guardMaintenance(ctx);
  if (!maintenance.pass) {
    next(maintenance.redirect);
    return;
  }

  const login = guardLogin(ctx);
  if (!login.pass) {
    next(login.redirect);
    return;
  }

  next();
}
```

`next()` 的裁决方式与 Vue Router 保持一致：

| 调用 | 结果 |
| :--- | :--- |
| `next()` | 放行本次导航 |
| `next(false)` | 取消本次导航，停留在当前页 |
| `next('/src/sub/auth/login')` | 中断原导航并改跳登录页 |
| `next({ path: '/src/sub/auth/login', query: { redirect: to.fullPath }, replace: true })` | 改跳并替换当前页面，避免返回后再次被拦截 |

新增业务守卫时：

1. 在 `src/router/guards/` 新建 `guardXxx.uts`，导出接收 `RouteGuardContext` 的纯函数。
2. 在 `src/router/guards/index.uts` 中按优先级接入责任链。
3. 需要短路时返回 `ctx.next(...)`；全部通过后由流水线统一 `next()`。
4. 不要在页面 `setup` 里重复注册 `beforeEach`。

### 4. 登录策略与维护公告

#### 登录配置

`src/router/config.uts` 集中维护登录相关配置：

| 配置 | 当前值 / 含义 |
| :--- | :--- |
| `LOGIN_PAGE` | `/src/sub/auth/login`，登录页路径 |
| `REGISTER_PAGE` | `/src/sub/auth/register`，注册页路径 |
| `DEFAULT_HOME_PAGE` | `/src/pages/index/index`，登录后默认回跳首页 |
| `EXCLUDE_LOGIN_PATH_LIST` | 策略名单；默认黑名单模式下表示「需要登录的页面」 |
| `LOGIN_STRATEGY` | `DEFAULT_NO_NEED_LOGIN`：默认黑名单策略 |
| `isNeedLoginMode` | `false`：默认无需登录，仅黑名单页面拦截 |

`EXCLUDE_LOGIN_PATH_LIST` 会随策略切换语义：

- **黑名单模式**（默认）：名单内页面需要登录，名单外直接放行。
- **白名单模式**：名单内页面免登录，名单外全部要求登录。

未登录访问受保护页面时，`guardLogin` 会携带原路径跳转登录页：

```uts
import { LOGIN_PAGE } from '@/src/router/config.uts';

const loginUrl = `${LOGIN_PAGE}?redirect=${encodeURIComponent(to.fullPath)}`;
return next(loginUrl);
```

登录成功后可读取 `redirect` 回跳：

```uts
import { DEFAULT_HOME_PAGE } from '@/src/router/config.uts';
import { useRoute, useRouter } from '@/src/router/index.uts';

const route = useRoute();
const router = useRouter();
const redirect = route.query.get('redirect') ?? '';
const target = redirect != '' ? redirect : DEFAULT_HOME_PAGE;
router.replace(target);
```

`router.replace(target)` 会自动识别 TabBar 页面并走对应的切换逻辑；登录页当前也通过 `isPageTabbar` 显式做了分流。

#### 维护公告

`guardMaintenance` 优先级最高，开启后除维护页和自定义白名单外，所有页面都会跳到维护页：

```uts
import {
  setMaintenanceMode,
  setMaintenanceWhiteList
} from '@/src/router/guards/guardMaintenance.uts';

setMaintenanceMode(true);
setMaintenanceWhiteList([
  '/src/sub/maintenance/maintenance',
  '/src/sub/privacy/privacy'
]);
```

### 5. 应用挂载与直链保护

在 `main.uts` 中通过标准 Vue 插件语法注册路由：

```uts
import App from './App.uvue';
import { createSSRApp } from 'vue';
import router from '@/src/router/index.uts';

export function createApp() {
  const app = createSSRApp(App);
  app.use(router);
  return { app };
}
```

`app.use(router)` 会自动安装导航拦截器；在支持的平台上还会注入 `$router` / `$route`。业务页面统一使用 Hooks，不依赖全局属性。业务守卫已经在 `src/router/index.uts` 中通过 `setupRouteGuards(router)` 注册，不要在 `main.uts` 重复注册。

App 冷启动、H5 刷新、分享链接或外部 Scheme 直达时，在 `App.uvue` 的 `onShow` 中触发直链检查：

```uts
import { checkDirectEntry } from '@/uni_modules/route-bestX/index.uts';

onShow((options?) => {
  checkDirectEntry(options);
});
```

### 6. TabBar 桥接

`src/router/index.uts` 将 route-bestX 与项目自定义 TabBar 连接起来：

```uts
export const router = createRouter({
  isTabbar: (url: string): boolean => isPageTabbar(url),
  switchTab: (url: string): void => {
    switchTabbar(url);
  }
});
```

因此以下写法都能正确切换 TabBar：

```uts
import { switchTabbar } from '@/src/tabbar/index.uts';

// 推荐：统一由 router 自动识别并分流
router.push('/src/pages/me/me');

// 明确知道目标是 Tab 页时，也可以直接调用 TabBar 模块
switchTabbar('/src/pages/me/me');
```

不要直接调用 `uni.switchTab`：它会绕过自定义 TabBar 的激活索引、保活策略和路由状态同步。

### 7. 导航失败与错误处理

全局后置钩子和错误回调已经在 `src/router/guards/index.uts` 注册：

```uts
router.afterEach((to, from, failure) => {
  if (failure != null) {
    console.warn('[Router afterEach] 导航中断/异常:', failure);
    return;
  }
  // 导航成功：埋点、统计等
});

router.onError((error, to, from) => {
  console.error('[Router onError] 路由异常:', error, to?.path, from?.path);
});
```

常见错误码来自 `ROUTER_ERROR_CODE`：

| 错误码 | 常量 | 含义 |
| :--- | :--- | :--- |
| `101` | `GUARD_CANCELLED` | 守卫调用 `next(false)` 主动取消 |
| `102` | `MAX_REDIRECT_EXCEEDED` | 守卫重定向超过上限，防止死循环 |
| `201` | `BACK_STACK_DEPTH_INVALID` | 页面栈深度不足，无法返回 |
| `202` | `NAVIGATE_BACK_FAILED` | 返回 API 调用失败 |
| `301` | `NAVIGATE_TO_FAILED` | 页面未注册或页面栈超过上限 |
| `302` | `REDIRECT_TO_FAILED` | `redirectTo` 调用失败 |
| `303` | `RELAUNCH_FAILED` | `reLaunch` 调用失败 |
| `304` | `SWITCH_TAB_FAILED` | 目标页不在 TabBar 或切换失败 |

需要识别具体失败时：

```uts
import { ROUTER_ERROR_CODE } from '@/uni_modules/route-bestX/index.uts';

if (failure != null && failure.code == ROUTER_ERROR_CODE.GUARD_CANCELLED) {
  console.log('本次导航被守卫取消');
}
```

不要在 `router.push(...)` 后面链式写 `.catch()`。导航失败统一由 `afterEach` / `onError` 处理。

### 8. 非组件环境读取路由

`useRoute()` 依赖组件生命周期，只能在 `setup` 中调用。API 层、工具函数或守卫中需要当前页信息时，使用路由工具函数：

```uts
import {
  getCurrentPath,
  getCurrentRoute,
  isSamePath
} from '@/uni_modules/route-bestX/index.uts';

/** 当前栈顶页面的规范化路径 */
const path = getCurrentPath();

/** 当前页原始 route 串 */
const rawRoute = getCurrentRoute();

/** 判断是否某个页面 */
const isMePage = isSamePath(path, '/src/pages/me/me');
```

| 场景 | 使用方式 |
| :--- | :--- |
| 页面 / 组件读当前路由 | `useRoute()` |
| 页面展示路径、参数、meta | `useRoute()` |
| 非组件环境读当前页 | `getCurrentPath()` / `getCurrentRoute()` |
| 401 或主动跳登录页 | `toLoginPage()`（`src/utils/auth/toLoginPage.uts`） |
| 页面跳转 | `useRouter()` 或 `switchTabbar()` |

`router.currentRoute` / `routeState` 的语义是「应用当前或正在导航到的路由」，跳转请求发出时就可能变成目标页，**禁止用于页面展示**。

---

## 常见场景速查

| 场景 | 写法 |
| :--- | :--- |
| 打开详情页 | `router.push({ path: '/src/sub/detail/detail', query: { id: 1 } })` |
| 命名路由跳转 | `router.push({ name: 'detail', params: { id: 1 } })` |
| 登录成功后替换当前页 | `router.replace(target)` |
| 退出登录回首页 | `router.relaunch('/src/pages/index/index')` |
| 切换自定义 TabBar | `switchTabbar('/src/pages/me/me')` 或 `router.push(tabPath)` |
| 返回上一页 | `router.back()` |
| 读取 query | `route.query.get('id')`，随后显式转类型 |
| 读取页面标题 | 从 `route.meta` 的 `style.navigationBarTitleText` 读取 |
| 判断是否当前页 | `isSamePath(route.path, '/src/pages/me/me')` |
| 新增登录保护页面 | 修改 `src/router/config.uts` 的策略名单 |
| 新增业务守卫 | 在 `src/router/guards/` 新建规则并接入责任链 |

---

## 使用约束

- **导入统一**：页面使用 `@/src/router/index.uts` 或 `@/uni_modules/route-bestX/index.uts`；禁止 import 模块内部文件。
- **跳转统一**：禁止直接调用 `uni.navigateTo` / `uni.redirectTo` / `uni.reLaunch` / `uni.switchTab` / `uni.navigateBack`。
- **读参统一**：禁止 `onLoad((options) => ...)` 取参数，禁止手写 `getCurrentPages()` 判断当前页。
- **快照只读**：不要解构 `useRoute()`，不要修改 `route.query`，不要跨页面传递同一份 `route`。
- **参数转型**：`query` 值恒为 `string`，数字、布尔值都要显式转换并给默认值。
- **meta 判空**：`route.meta` 可能为 `null`，嵌套 `style` 必须逐层判空后用下标访问。
- **query 编码**：不要自己拼接 query 字符串，优先使用 `{ path, query }` 对象形态。
- **错误处理**：不要链式 `.catch()`；导航失败统一交给 `afterEach` / `onError`。
- **页面栈**：App 端页面刚入栈时 `getCurrentPages()` 可能滞后，页面内判断当前页请使用 `route.path`。
- **守卫注册**：业务守卫只在 `src/router/guards/index.uts` 编排，禁止在页面 `setup` 重复注册。
