# 路由篇

项目路由基于 [`route-bestX`](https://github.com/cq112233/unibestX/tree/main/uni_modules/route-bestX) 开发，`src/router` 负责业务层组装：初始化全局单例、注册登录与维护守卫、桥接 TabBar、加载构建期路由表。

```text
页面 / 组件
    ↓ useRouter()
src/router
    ↓
route-bestX
    ↓
uni.navigateTo / redirectTo / reLaunch / navigateBack
```

> 业务页面禁止直接调用 `uni.navigateTo`、`uni.redirectTo`、`uni.reLaunch`、`uni.switchTab`、`uni.navigateBack`。直接调用会绕过登录拦截、维护守卫、TabBar 分流与路由状态同步。

## 分层与导入

| 能力 | 位置 | 说明 |
| :--- | :--- | :--- |
| 路由引擎 | `uni_modules/route-bestX/` | 跳转、快照、守卫、错误码、URL 工具 |
| 业务路由层 | `src/router/index.uts` | 创建 `router` 单例、安装业务守卫 |
| 守卫规则 | `src/router/guards/` | 维护守卫与登录守卫责任链 |
| 业务配置 | `src/router/config.uts` | 登录页、首页、黑白名单策略 |
| 页面路由表 | `virtual:uni-pages-route-table` | 构建期生成，不落盘 |

页面统一从业务门面导入：

```uts
import { useRoute, useRouter } from '@/src/router/index.uts';
```

需要路径工具时从模块入口导入：

```uts
import {
  getCurrentPath,
  getCurrentRoute,
  isSamePath
} from '@/uni_modules/route-bestX/index.uts';
```

不要导入 `route-bestX` 的 `core/`、`hooks/`、`interceptor/` 等内部文件。

## 读取当前路由

`useRoute()` 返回当前页面专属的响应式只读快照。只能在页面或组件的 `setup` 中调用，每次调用都是一份独立快照。

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `path` | `string` | 规范化路径，带前导 `/`，不含 query |
| `fullPath` | `string` | 路径与编码后的 query 串 |
| `query` | `Map<string, string>` | 已解码的查询参数，使用 `.get()` 读取 |
| `params` | `Map<string, string>` | 恒为空；命名路由的 params 会转成 query |
| `meta` | `UTSJSONObject \| null` | 来自 `definePage` / `pages.json` 的页面元数据 |
| `name` | `string \| null` | 路由名，未声明时回落到路径最后一段 |
| `page` | `any \| null` | 当前栈顶页面实例 |
| `pages` | `UniPage[]` | 当前页面栈快照 |

```uts
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

const route = useRoute();

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
```

### 参数规则

- `query` 的值永远是 `string`，数字与布尔值必须显式转换。
- `route.params` 恒为空，命名路由参数也会进入 `query`。
- `fullPath` 中的 query 是编码态；展示中文时读取 `query.get()`。
- 不要解构 `useRoute()`，否则会丢失响应式与快照语义。
- 不要用 `onLoad(options)` 或 `getCurrentPages()` 取代 `useRoute()`。

### 读取页面 meta

```uts
const meta = route.meta;
let pageTitle: string = '详情页';

if (meta != null) {
  const style = meta['style'];
  if (style != null) {
    const styleObj = style as UTSJSONObject;
    const title = styleObj['navigationBarTitleText'];
    if (title != null) {
      pageTitle = `${title}`;
    }
  }
}
```

`meta` 和嵌套的 `style` 都可能为 `null`，必须逐层判空后使用下标访问。

## 页面跳转

`useRouter()` 返回全局唯一导航器。推荐使用对象形态，由路由层自动序列化和编码 query。

| 方法 | 用途 | 底层行为 |
| :--- | :--- | :--- |
| `router.push(to)` | 打开新页面，保留当前页 | `uni.navigateTo`，Tab 页自动分流 |
| `router.replace(to)` | 替换当前页面 | `uni.redirectTo`，Tab 页自动分流 |
| `router.relaunch(to)` | 关闭全部页面并打开目标页 | `uni.reLaunch` |
| `router.switchTab(to)` | 切换 Tab 页面 | 转发到 `switchTabbar()` |
| `router.back(delta?)` | 返回上一页或前 N 页 | `uni.navigateBack` |
| `router.go(delta)` | 按步长后退，只支持负数 | `uni.navigateBack` |
| `router.resolve(to)` | 只解析目标 URL，不跳转 | 返回完整 URL 字符串 |

```uts
import { useRouter } from '@/src/router/index.uts';

const router = useRouter();

/** 普通路径跳转 */
function openDetail(): void {
  router.push({
    path: '/src/sub/detail/detail',
    query: { id: 1001, title: '详情页' }
  });
}

/** 命名路由跳转 */
function openByName(): void {
  router.push({
    name: 'detail',
    params: { id: 1002, from: 'name-route' }
  });
}

/** 登录成功后替换当前页 */
function replaceToHome(): void {
  router.replace('/src/pages/index/index');
}

/** 返回上一页 */
function back(): void {
  router.back();
}
```

切换 TabBar 时可以统一使用 `router.push()`，也可明确调用 `switchTabbar()`：

```uts
import { switchTabbar } from '@/src/tabbar/index.uts';

router.push('/src/pages/me/me');
switchTabbar('/src/pages/me/me');
```

不要直接调用 `uni.switchTab`，否则会绕过自定义 TabBar 的选中态、保活与路由同步。

## 全局守卫

业务守卫集中在 `src/router/guards/`，按固定顺序执行：

```text
guardMaintenance（停服维护）
        ↓
guardLogin（登录鉴权）
        ↓
next() 放行
```

任一规则不通过都会立即短路，后续规则不再执行。`next()` 的裁决方式与 Vue Router 一致：

| 调用 | 结果 |
| :--- | :--- |
| `next()` | 放行 |
| `next(false)` | 取消本次导航 |
| `next('/src/sub/auth/login')` | 改跳目标页 |
| `next({ path, query, replace: true })` | 改跳并替换当前页 |

### 登录策略

`src/router/config.uts` 维护登录页、首页与黑白名单：

| 配置 | 说明 |
| :--- | :--- |
| `LOGIN_PAGE` | 登录页路径 |
| `REGISTER_PAGE` | 注册页路径 |
| `DEFAULT_HOME_PAGE` | 登录成功后的默认回跳页 |
| `LOGIN_STRATEGY` | 黑名单 / 白名单策略 |
| `EXCLUDE_LOGIN_PATH_LIST` | 策略页面名单 |

未登录访问受保护页面时，守卫会带上 `redirect`：

```uts
const loginUrl = `${LOGIN_PAGE}?redirect=${encodeURIComponent(to.fullPath)}`;
return next(loginUrl);
```

登录页读取并回跳：

```uts
import { DEFAULT_HOME_PAGE } from '@/src/router/config.uts';
import { useRoute, useRouter } from '@/src/router/index.uts';

const route = useRoute();
const router = useRouter();
const redirect = route.query.get('redirect') ?? '';
const target = redirect != '' ? redirect : DEFAULT_HOME_PAGE;

router.replace(target);
```

### 新增业务守卫

1. 在 `src/router/guards/` 新建 `guardXxx.uts`，导出接收 `RouteGuardContext` 的纯函数。
2. 在 `src/router/guards/index.uts` 中按优先级接入责任链。
3. 需要中断或改跳时返回对应决策，全部通过后由流水线统一 `next()`。
4. 不要在页面 `setup` 中重复注册 `beforeEach`。

## TabBar 模式 4 的路由守卫

模式 4 的 Tab 切换发生在宿主页内部，不调用 `uni.switchTab`，因此不会触发 route-bestX 的全局 `beforeEach` / `afterEach`。需要在虚拟 Tab 切换前处理第三方接入、参数换取、埋点或预取时，使用 Tab 级导航守卫：

```uts
import type {
  TabNavigationContext,
  TabNavigationNext
} from '@/src/tabbar/index.uts';
import { registerTabNavigationGuard } from '@/src/tabbar/index.uts';

registerTabNavigationGuard((context: TabNavigationContext, next: TabNavigationNext): void => {
  if (context.api == 'hostQuery' && context.query.get('from') == 'third-party') {
    // exchangeThirdPartySession 为业务自定义函数
    exchangeThirdPartySession(context.query).then((_res: any): void => {
      next(true);
    }, (_err: any): void => {
      next(false);
    });
    return;
  }
  next(true);
});
```

上下文字段：

| 字段 | 说明 |
| :--- | :--- |
| `from` / `fromPath` | 来源虚拟 Tab 的完整 URL / path |
| `to` / `toPath` | 目标虚拟 Tab 的完整 URL / path |
| `query` | 目标 query，值已解码 |
| `api` | `tabClick` / `router` / `hostQuery` / `switchTabbar` |

必须调用一次 `next(true)` 或 `next(false)`。`next(true)` 后才写入激活索引、虚拟 query 与 H5 地址栏。Tab 到普通页面（例如“我的 → 登录”）仍会走全局守卫。

## 直链与冷启动

项目已经在 `App.uvue` 中调用 `checkDirectEntry(options)`。App 冷启动、H5 刷新、分享链接和外部 Scheme 进入时，会自动同步页面栈并触发守卫，不需要页面额外处理。

## 非组件环境读取路由

API 层、工具函数或守卫中不能调用 `useRoute()`，使用路由工具：

```uts
import {
  getCurrentPath,
  getCurrentRoute,
  isSamePath
} from '@/uni_modules/route-bestX/index.uts';

const path = getCurrentPath();
const rawRoute = getCurrentRoute();
const isMePage = isSamePath(path, '/src/pages/me/me');
```

`router.currentRoute` / `routeState` 表示“当前或正在导航到的路由”，跳转发起后就会变化，禁止用于页面展示。

## 错误处理

导航失败统一交给全局 `afterEach` / `onError`，不要在 `router.push()` 后链式写 `.catch()`。

| 错误码 | 常量 | 含义 |
| :---: | :--- | :--- |
| `101` | `GUARD_CANCELLED` | 守卫主动取消 |
| `102` | `MAX_REDIRECT_EXCEEDED` | 重定向超过上限 |
| `201` | `BACK_STACK_DEPTH_INVALID` | 页面栈深度不足 |
| `202` | `NAVIGATE_BACK_FAILED` | 返回失败 |
| `301` | `NAVIGATE_TO_FAILED` | 页面未注册或页面栈超限 |
| `302` | `REDIRECT_TO_FAILED` | `redirectTo` 失败 |
| `303` | `RELAUNCH_FAILED` | `reLaunch` 失败 |
| `304` | `SWITCH_TAB_FAILED` | Tab 切换失败 |

```uts
import router from '@/src/router/index.uts';
import { ROUTER_ERROR_CODE } from '@/uni_modules/route-bestX/index.uts';
import type { RouteTarget } from '@/uni_modules/route-bestX/index.uts';

router.afterEach((_to: RouteTarget, _from: RouteTarget, failure?: any | null): void => {
  if (failure != null && failure.code == ROUTER_ERROR_CODE.GUARD_CANCELLED) {
    console.log('本次导航被守卫取消');
  }
});
```

## 常见场景

| 场景 | 写法 |
| :--- | :--- |
| 打开详情页 | `router.push({ path, query })` |
| 命名路由 | `router.push({ name, params })` |
| 登录成功回跳 | `router.replace(target)` |
| 退出登录回首页 | `router.relaunch('/src/pages/index/index')` |
| 切换 Tab | `router.push(tabPath)` / `switchTabbar(tabPath)` |
| 读取 query | `route.query.get('id')` 后显式转型 |
| 判断当前页 | `isSamePath(route.path, '/src/pages/me/me')` |
| 新增登录保护页 | 修改 `src/router/config.uts` 的策略名单 |

## 约束清单

- 页面导入只使用 `@/src/router/index.uts` 或 `@/uni_modules/route-bestX/index.uts`。
- 所有跳转统一走 `useRouter()` / `switchTabbar()`。
- 路由信息统一走 `useRoute()`，禁止 `onLoad` 取参和手写 `getCurrentPages()`。
- query 值先判空再转型，缺失值必须有默认值。
- `meta` 及嵌套对象逐层判空。
- 业务守卫只在 `src/router/guards/index.uts` 编排。
- 模式 4 Tab 切换使用 Tab 级守卫，不要桥接回全局路由。

> 更完整的底层 API 见 [`route-bestX` 文档](https://github.com/cq112233/unibestX/tree/main/uni_modules/route-bestX) 与 [`src/router/README.md`](https://github.com/cq112233/unibestX/blob/main/src/router/README.md)。
