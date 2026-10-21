# 8 路由导航与 `useRoute` 手册（跳转一律 `useRouter()` · 路由信息一律 `useRoute()`）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：页面 / 组件里要读当前路由（path / query / meta / name）时；要做任何跳转（入栈、替换、回退、切 Tab）时；准备写 `onLoad((options) => {...})` 取参数、手写 `getCurrentPages()` 判断当前页、或直接调用 `uni.navigateTo(...)` 时 —— **必须首先阅读并严格遵循本分册**。
>
> **架构前提（先记住）**：本项目路由**不是自研**，底层是 [`uni_modules/route-bestX`](../../../../uni_modules/route-bestX/readme.md)（纯 UTS、对标 Vue Router 4），业务层在 [`src/router/`](../../../../src/router/README.md) 组装全局守卫、登录拦截、TabBar 桥接。**所有路由能力都从 route-bestX 的入口导入，不要去抄它的内部文件**。
>
> **与其它分册的分工**：分册 7.4.2 只做「有哪些路由工具」的清单式速查；本分册讲**「`useRoute()` 到底返回什么、怎么用、哪里会错」**。守卫规则怎么加、登录黑白名单配置在哪改，看 `src/router/README.md` 与 `src/router/guards/`。

---

## 8.1 导入：一行代码决定用哪个口径

### 8.1.1 页面 / 组件（99% 的场景）

```uts
import { useRoute, useRouter } from '@/uni_modules/route-bestX/index.uts';
```

- **`useRoute()`** —— 读本页路由（响应式、只读）。
- **`useRouter()`** —— 导航器（跳转、回退、注册守卫）。
- 这是项目现有页面统一采用的写法（`src/pages/*`、`src/sub/*`、`src/components/NavBar` 等十余处先例）。
- **统一写全入口文件 `@/uni_modules/route-bestX/index.uts`（保留 `.uts`）**：项目内所有导入一律带后缀；去掉后缀后 TS 侧会丢补全并报 `TS2307`（见分册 1 / 红线 36）。

### 8.1.2 业务门面（可选，与上面完全等价）

```uts
import { useRoute, useRouter } from '@/src/router/index.uts';
```

`src/router/index.uts` 只做三件事：初始化 route-bestX 单例、注册业务守卫、**转发 `useRoute` / `useRouter`**（外加命名导出 `router` 与默认导出）。两者拿到的是同一个全局路由器，**选一种并保持一致即可**。

### 8.1.3 其它符号从哪拿（全部来自 route-bestX 入口）

| 你要的 | 从哪拿 |
| :--- | :--- |
| `useRoute` / `useRouter` / `router` 单例 / `createRouter` | `@/uni_modules/route-bestX/index.uts` |
| 路径工具：`cleanPath`、`getCurrentPath`、`getCurrentRoute`、`getCurrentPageOptions`、`getPageStackLength`、`isSamePath`、`parseUrlToObj`、`resolveUrl`、`serializeQuery`、`decodeSafe`、`decodeQueryValue` | 同上 |
| 全局路由状态：`routeState`、`previousRouteState`、`setRouteMeta`、`removeRouteMeta`、`getRouteMeta`、`setRoutes` | 同上 |
| 拦截器 / 直链检查：`installRouteInterceptor`、`checkDirectEntry` | 同上 |
| 导航类型：`RouteLocation`、`RouteLocationRaw`、`RouteTarget`、`RouterError` | 同上（用 `import type`） |
| 业务登录页 / 黑白名单配置：`LOGIN_PAGE`、`REGISTER_PAGE`、`EXCLUDE_LOGIN_PATH_LIST`、`LOGIN_STRATEGY`、`isNeedLoginMode`、`DEFAULT_HOME_PAGE` | `@/src/router/config.uts` |
| 业务守卫规则链 | `@/src/router/guards/index.uts`（单条规则在 `guards/guardLogin.uts` 等） |
| 手动跳登录页（401 / 业务主动） | `@/src/utils/auth/toLoginPage.uts`（内置 1s 节流，防重复跳登录页） |

```uts
// ❌ 错误：这些都已经是历史路径，文件不存在了
import { getCurrentPath } from '@/src/router/utils/utils.uts';
import { routeState } from '@/src/router/hooks/route-state.uts';
import { toLoginPage } from '@/src/router/toLoginPage/toLoginPage.uts';

// ✅ 正确
import { getCurrentPath } from '@/uni_modules/route-bestX/index.uts';
import { routeState } from '@/uni_modules/route-bestX/index.uts';
import { toLoginPage } from '@/src/utils/auth/toLoginPage.uts';
```

> ⚠️ **不要去 import route-bestX 的内部文件**（`core/route-state.uts`、`core/route-snapshot.uts`、`hooks/useRoute.uts`、`interceptor/interceptor.uts`）：模块入口已经把公开 API 全部导出，穿透内部文件等于把实现细节变成业务依赖，升级模块必炸。

---

## 8.2 `useRoute()` 返回什么

### 8.2.1 类型：`RouteLocation`

```uts
import type { RouteLocation } from '@/uni_modules/route-bestX/index.uts';
```

| 字段 | 类型 | 语义与取值口径 |
| :--- | :--- | :--- |
| `path` | `string` | 规范化路径：**带前导 `/`、不含 query**。示例：`/src/sub/detail/detail`。`src/` 前缀按调用方原文保留，不做增删 |
| `fullPath` | `string` | `path` + query 串。**query 值经过 `encodeURIComponent`**（见 `buildFullPath()`），所以中文 / 空格在 `fullPath` 里是编码态；要展示请用 `query` |
| `query` | `Map<string, string>` | 查询参数，**值一律是 URL 解码态**（全端统一口径：App / H5 / 微信小程序都归一过） |
| `params` | `Map<string, string>` | **恒为空**。uni-app X 没有动态路由段，仅为对齐 vue-router 形态 |
| `meta` | `UTSJSONObject \| null` | 页面元信息，见 8.2.3 |
| `name` | `string \| null` | 路由名：优先取 `meta` 里声明的 `name`，未声明时**回落到路径最后一段**（如 `detail`），路径为空才为 `null` |
| `page` | `any \| null` | 当前栈顶页面实例（`UniPage`），栈空时为 `null` |
| `pages` | `UniPage[]` | 页面栈快照（等价于 `getCurrentPages()` 的一次拷贝） |

- `query` 的读法：`route.query.get('id')` → `string | null`；`route.query.has('id')` → `boolean`；`route.query.size` → `number`。
- **不要写 `route.query['id']`**：`Map` 在 UTS 里不支持下标的字符串键读法，必须 `.get()`。
- `params` 恒空，**不要期待它盛放参数** —— 命名路由的 `params` 在导航时会被转成 query（见 8.6.3）。
- `page` / `pages` 是**快照时刻的拷贝**，不是实时栈；需要页面实例做局部刷新辅助时用它，别拿它当页面栈监听。

### 8.2.2 `query` 是解码态，`fullPath` 是编码态

```uts
// 目标：/src/sub/detail/detail?id=1&title=儿童绘本
const route = useRoute();

const title = route.query.get('title');      // '儿童绘本'（已解码，可直接展示）
const raw = route.fullPath;                  // '/src/sub/detail/detail?id=1&title=%E5%84%BF%E7%AB%A5%E7%BB%98%E6%9C%AC'
```

> ⚠️ 守卫里拼登录回跳地址时，**必须再 `encodeURIComponent()` 一次**（`to.fullPath` 已是解码态，直接拼会破坏参数）。参考 `src/router/guards/guardLogin.uts` 的 `loginUrl` 拼法。

### 8.2.3 `meta` / `name`：不用手写注册

`meta` 有两级数据源，就近优先：

1. **手动注册**：`setRouteMeta(path, meta)`（可覆盖 / 补充）；
2. **`pages.json` 里该页面的完整配置项**（构建期插件把 `definePage` 的字段原样写进 `pages.json`，并生成 `src/router/generated/page-meta.uts`）—— 也就是说，**`pages.json` 里这个页面的配置项就是 `meta`**。

```uts
definePage({
  name: 'detail',                                       // → useRoute().name
  debug: false,
  debugHome: false,
  layout: 'navbar',                                     // → useRoute().meta['layout']
  showBack: true,
  hideStatusBar: false,
  hideNavbar: false,
  enablePullDownRefresh: false,
  style: { navigationBarTitleText: '详情页' }            // → useRoute().meta['style']['navigationBarTitleText']
});
```

读取时注意**两层判空 + 下标访问**（`meta` 是 `UTSJSONObject`，不能用点号取动态键，见分册 1.27）：

```uts
function readNavTitle(): string {
  const meta = route.meta;
  if (meta == null) {
    return '';
  }
  const style = meta['style'];          // any | null
  if (style == null) {
    return '';
  }
  const styleObj = style as UTSJSONObject;
  const title = styleObj['navigationBarTitleText'];
  if (title == null) {
    return '';
  }
  return `${title}`;
}
```

需要补充 / 覆盖时：

```uts
import { setRouteMeta, removeRouteMeta } from '@/uni_modules/route-bestX/index.uts';

setRouteMeta('/src/pages/me/me', { name: 'me', title: '我的', requireAuth: true });
removeRouteMeta('/src/pages/me/me');     // 移除后回落到 pages.json 的配置项
```

> ⚠️ `setRouteMeta` 只在**手动注册表**里生效，不写回 `pages.json`；跨端编译期拿不到它，**要参与编译期路由表就写 `definePage`**。

### 8.2.4 它是「本页快照」，不是全局那一份

这是整个模块**最容易踩错**的一点：

- **每次调用 `useRoute()` 都新建一份快照**（页面里调一次、子组件里调一次 = 两份），它们**值相同、互不影响**：本页路由变了，本页所有快照一起变；别的页面变了，本页一份都不动。
- 快照创建时即定值；此后在**本页 `onPageShow`** 时回读页面栈刷新、在本页 `onPageHide` 时冻结、组件卸载时注销。
- **不要做身份判断**：`useRoute() == useRoute()` 恒为 `false`（而且 UTS 里本来也不该拿它比较）。
- **只在页面 / 组件的 `setup` 中调用**。它依赖组件级 `onPageShow` / `onPageHide` 生命周期来刷新与冻结快照；在模块顶层、纯工具函数、`api` 层调用既拿不到页面生命周期，也会触发 Vue 告警。

**为什么这么设计**：全局那份路由状态在**跳转请求发出时**就被写成目标路由了，而上一页此刻还挂在栈上、还在屏幕上有进入动画。若两边共用一份，上一页的 `route.fullPath` 会在新页进入期间就翻成新页的值（同路径带参重进尤其明显）。拆成快照后：上一页在重新显示之前纹丝不动，新页面首帧又能直接读到自己的路由。

完整模型见 `uni_modules/route-bestX/core/route-snapshot.uts` 文件头（**只读文档，不要 import 它**）。

### 8.2.5 三种取参方式对比（为什么禁止后两种）

| 方式 | 响应式 | 编码口径 | 返回后 / 页面重新显示 | 结论 |
| :--- | :--- | :--- | :--- | :--- |
| `useRoute().query` | ✅ 是 | 全端统一解码态 | ✅ `onPageShow` 自动回读刷新 | **唯一正确写法** |
| `onLoad((options) => ...)` | ❌ 否 | 微信小程序端是**编码态**，其它端是解码态 | ❌ 不刷新（同路径带参重进拿不到新值） | 禁止 |
| `getCurrentPages()` 手读 | ❌ 否 | 各端不一致 | ❌ App 端页面栈有滞后，读到上一页 | 禁止（除框架内部） |

---

## 8.3 完整 Demo：一个标准的「详情页」

> 直接复制到 `src/sub/detail/detail.uvue`（`src/api/detail/` 与页面同批建好，见分册 6），把接口调用换成真实函数即可。

```uts
<template>
  <view class="flex flex-col flex-1 bg-[#f8fafc]">
    <scroll-view direction="vertical" class="flex-1 flex flex-col p-[16px]">

      <!-- 1. 路径 / 路由名 / 页面标题：全部来自 useRoute() -->
      <view class="w-full rounded-[12px] bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] p-[16px] mb-[12px]">
        <text class="text-[15px] font-semibold text-[#1e293b]">{{ pageTitle }}</text>
        <text class="text-[12px] text-[#64748b] mt-[4px]">{{ route.path }}</text>
        <text class="text-[12px] text-[#64748b] mt-[2px]">name：{{ routeName }}</text>
        <text class="text-[12px] text-[#64748b] mt-[2px]">栈深：{{ route.pages.length }}</text>
      </view>

      <!-- 2. 类型化后的参数 -->
      <view class="w-full rounded-[12px] bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] p-[16px] mb-[12px]">
        <text class="text-[14px] font-semibold text-[#1e293b] mb-[8px]">参数</text>
        <view class="flex flex-row items-center justify-between mb-[6px]">
          <text class="text-[13px] text-[#64748b]">id（number）</text>
          <text class="text-[13px] text-[#1e293b]">{{ detailQuery.id }}</text>
        </view>
        <view class="flex flex-row items-center justify-between mb-[6px]">
          <text class="text-[13px] text-[#64748b]">title（string）</text>
          <text class="text-[13px] text-[#1e293b]">{{ detailQuery.title }}</text>
        </view>
        <view class="flex flex-row items-center justify-between">
          <text class="text-[13px] text-[#64748b]">from</text>
          <text class="text-[13px] text-[#1e293b]">{{ detailQuery.from }}</text>
        </view>
      </view>

      <!-- 3. 原始 query 列表：Map 必须先摊成数组 -->
      <view class="w-full rounded-[12px] bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] p-[16px]">
        <text class="text-[14px] font-semibold text-[#1e293b] mb-[8px]">route.query（{{ queryRows.length }} 项）</text>
        <view v-for="row in queryRows" :key="row.key" class="flex flex-row items-center justify-between mt-[6px]">
          <text class="text-[13px] text-[#64748b]">{{ row.key }}</text>
          <text class="text-[13px] text-[#1e293b]">{{ row.value }}</text>
        </view>
        <text v-if="queryRows.length == 0" class="text-[13px] text-[#94a3b8] mt-[6px]">没有 query 参数</text>
      </view>

    </scroll-view>
  </view>
</template>

<script setup lang="uts">
import { computed } from 'vue';
import { useRoute } from '@/uni_modules/route-bestX/index.uts';

definePage({
  name: 'detail',
  debug: false,
  debugHome: false,
  layout: 'navbar',
  showBack: true,
  hideStatusBar: false,
  hideNavbar: false,
  enablePullDownRefresh: false,
  style: {
    navigationBarTitleText: '详情页',
    navigationStyle: 'custom'
  }
});

/** 本页路由（响应式、只读）—— 只能在 setup 里调用 */
const route = useRoute();

/** query 的类型化视图：query 值恒为 string，业务需要的类型在这里转一次 */
type DetailQuery = {
  id: number,
  title: string,
  from: string
};

const detailQuery = computed((): DetailQuery => {
  const idText = route.query.get('id');
  let id: number = 0;
  if (idText != null) {
    id = parseInt(idText, 10);
  }
  return {
    id: id,
    title: route.query.get('title') ?? '',
    from: route.query.get('from') ?? ''
  } as DetailQuery;
});

/** 导航栏标题：取值链 pages.json → meta.style.navigationBarTitleText */
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

/** 路由名：definePage 声明优先，未声明回落到路径最后一段 */
const routeName = computed((): string => route.name ?? '');

/** query 列表：Map 直接 v-for 拿不到稳定下标，先摊成数组 */
type QueryRow = {
  key: string,
  value: string
};

const queryRows = computed((): QueryRow[] => {
  const rows: QueryRow[] = [];
  route.query.forEach((value: string, key: string): void => {
    rows.push({ key, value } as QueryRow);
  });
  return rows;
});
</script>

<style></style>
```

**逐段要点**：

1. `useRoute()` 只调一次、放在顶层，模板与 `computed` 共用同一个快照。
2. **所有 query 值都是 `string`**：`id` 必须自己 `parseInt`，别指望框架推断成数字。
3. `route.query.forEach((value, key) => ...)` 的参数类型按 `string` 写，**不要标 `any`**（分册 1.14 / 红线 22）。
4. `meta` / `style` 都是 `UTSJSONObject`，**只能下标取值**，并且逐层判空。
5. `definePage` 里的字段会自动进入 `meta`，**不需要额外注册**。

---

## 8.4 多种场景写法（可直接复制）

### 8.4.1 读取单个 / 多个 query 并转类型

```uts
const route = useRoute();

// 字符串（缺失给默认值）
const keyword: string = route.query.get('keyword') ?? '';

// 数字（缺失 / 非法都是 0；**联合类型上禁止三元**，用 if 提前赋值）
const idText = route.query.get('id');
let id: number = 0;
if (idText != null) {
  id = parseInt(idText, 10);
}

// 布尔（query 里只有字符串，先落到 string 再比）
const mode: string = route.query.get('mode') ?? '';
const isEdit: boolean = mode == 'edit';

// 可选值（不存在就是 null，别用 undefined）
const couponId: string | null = route.query.get('couponId');

// 多值拼接（约定用逗号串，路由层没有数组参数）
const idsText = route.query.get('ids') ?? '';
const ids: string[] = idsText != '' ? idsText.split(',') : [];
```

### 8.4.2 判断「是不是当前页」/ 是否同一路径

```uts
import { cleanPath, isSamePath } from '@/uni_modules/route-bestX/index.uts';

const route = useRoute();

// 只比路径，忽略 query 与 src/ 前缀差异
const isMePage: boolean = isSamePath(route.path, '/src/pages/me/me');

// 需要规范化形态时
const normalized: string = cleanPath(route.path);
```

> ⚠️ 目标路径必须与页面真实路径一致（本项目页面都在 `src/` 下）。`isSamePath` 支持结尾匹配，能兼容带 / 不带 `src/` 的写法，但**别把它当万能匹配**。

### 8.4.3 读 `meta` 里的自定义字段（权限 / 标题 / 埋点）

```uts
const meta = route.meta;
let requireAuth: boolean = false;
let pageTitle: string = '';
let navTitle: string | null = null;

if (meta != null) {
  // 业务自定义字段：definePage 里加了就会进 meta（值来自 UTSJSONObject，必须判空）
  requireAuth = meta['requireAuth'] == true;

  const rawTitle = meta['title'];
  if (rawTitle != null) {
    pageTitle = `${rawTitle}`;
  }

  // 嵌套字段（pages.json 的 style）：取出后必须判空再断言
  const style = meta['style'];
  if (style != null) {
    const styleObj = style as UTSJSONObject;
    const rawNavTitle = styleObj['navigationBarTitleText'];
    if (rawNavTitle != null) {
      navTitle = `${rawNavTitle}`;
    }
  }
}
```

> ⚠️ `definePage` 的字段名就是 `meta` 的键；`style` 内部是**另一层 `UTSJSONObject`**，要再取一次。
> ⚠️ 上面用 `if (meta != null) { ... }` 包住下标取值，而不是 `meta != null ? meta['x'] : null` —— `route.meta` 是 `T | null`，**在联合类型上直接写三元会报 `Expression expected`**（分册 1.20）。

### 8.4.4 模板里直接读（含 Map 遍历）

```html
<!-- ✅ 单值：直接读 -->
<text>{{ route.path }}</text>
<text>{{ route.name }}</text>

<!-- ⚠️ query 是 Map：单值可以 .get()，遍历必须先摊成数组 -->
<text>{{ route.query.get('id') }}</text>

<view v-for="row in queryRows" :key="row.key">
  <text>{{ row.key }}</text>
  <text>{{ row.value }}</text>
</view>
```

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

### 8.4.5 子组件里读路由

```uts
<script setup lang="uts">
import { computed } from 'vue';
import { useRoute } from '@/uni_modules/route-bestX/index.uts';

// ✅ 子组件 setup 里可以调，拿到的是**本页**的快照（与页面里那份值相同、互不影响）
const route = useRoute();

const inDetailPage = computed((): boolean => route.path.includes('/detail'));
</script>
```

- 子组件与页面各自持有一份快照，**都随本页 `onPageShow` 刷新**，不要互相传 `route` 来「省一次调用」。
- 不要把 `route` 通过 props 往下传：快照是响应式对象，跨组件传会导致类型与生命周期判断混乱；各组件各调一次。

### 8.4.6 非组件环境（api 层 / 工具函数 / 守卫）

```uts
import { getCurrentPath, getCurrentRoute, getCurrentPageOptions, isSamePath } from '@/uni_modules/route-bestX/index.uts';

// 栈顶页面的规范化路径（最常用）：'/src/pages/me/me'
const path = getCurrentPath();

// 页面栈原生 route 串：'src/pages/me/me'
const raw = getCurrentRoute();

// 栈顶页面的原始 options（各端编码态不一致，用前必须 decodeQueryValue）
const options = getCurrentPageOptions();

// 路径比较
const same = isSamePath(path, '/src/pages/me/me');
```

```uts
// 需要响应式 / 完整字段时，读全局那一份路由状态
import { routeState } from '@/uni_modules/route-bestX/index.uts';

console.log(routeState.fullPath);
```

> ⚠️ 全局 `routeState` 的语义是「应用当前 / **正在导航到**的路由」——**跳转请求发出时它就变成目标路由了**，不是「眼前这一页」。要在页面上展示本页路由，永远用 `useRoute()`。

### 8.4.7 登录回跳：读 `redirect` 并在登录后返回

```uts
import { useRoute, useRouter } from '@/uni_modules/route-bestX/index.uts';
import { isPageTabbar, switchTabbar } from '@/src/tabbar/index.uts';
import { DEFAULT_HOME_PAGE } from '@/src/router/config.uts';

const route = useRoute();
const router = useRouter();

function afterLogin(): void {
  // redirect 已在路由层解码（守卫拼 loginUrl 时编码过一次）
  const target = route.query.get('redirect') ?? '';
  const next = target != '' ? target : DEFAULT_HOME_PAGE;

  if (isPageTabbar(next)) {
    switchTabbar(next);        // 本项目 TabBar 是自定义实现，切 Tab 走它
    return;
  }
  router.replace(next);        // 替换登录页，返回键不会回到登录页
}
```

> 真实先例：[src/sub/auth/login.uvue](../../../../src/sub/auth/login.uvue) 的 `getRedirectTarget()` 与 `navigateToTarget()`。

### 8.4.8 同路径带参重进本页（验证响应式刷新）

```uts
const PUSH_SELF = '/src/sub/detail/detail';

// 新入栈一层：新页面实例拿到新快照，query 立刻是新值
router.push({ path: PUSH_SELF, query: { id: 2 } });

// 替换当前层：同样换一个新实例
router.replace({ path: PUSH_SELF, query: { id: 3 } });
```

- 上一页在被盖住期间**不会**被新页的参数污染（快照冻结），返回时 `onPageShow` 再回读一次页面栈，读到的是它自己的参数。
- 因此**判断参数要用 `route.query`，不要缓存进普通 `let`**：缓存变量不会随 `onPageShow` 刷新。

### 8.4.9 TabBar / 单页 Tab 场景

- 本项目的 TabBar 是**自定义实现**（`src/tabbar/`），切 Tab 用 `switchTabbar(path)`，或直接用 `router.push(tabPath)` —— `router.push` 内部会先判断 `isPageTabbar(url)`，命中就自动改走 TabBar 处理器（本项目桥接的是 `switchTabbar`）。
- 切到 Tab 页后，该页的 `useRoute()` 会在 `onPageShow` 时刷新成新路径，**不要在 Tab 页里缓存「我是哪个 Tab」的判断结果**。

```uts
import { useRouter } from '@/uni_modules/route-bestX/index.uts';
import { isPageTabbar, switchTabbar } from '@/src/tabbar/index.uts';

// 下面两种写法等价（本项目自定义 TabBar）
switchTabbar('/src/pages/me/me');
useRouter().push('/src/pages/me/me');
```

### 8.4.10 H5 刷新 / 外部直链 / App 冷启动直达

- H5 刷新页面、从分享链接 / Scheme 直接进入：`App.uvue` 的 `onShow` 已调用 `checkDirectEntry(options)` 触发守卫校验；`useRoute()` 首次调用时若状态为空，会从页面栈回读一次，**页面首帧就能读到路径与参数**。
- App 冷启动直达同理；不需要页面里额外写初始化。
- 但注意：**直链进入的页面如果是需要登录的**，守卫会把用户送到登录页并带上 `redirect`，页面代码不需要自己处理。

---

## 8.5 坑点清单（按踩坑频率排序）

### ① 把 `useRoute()` 当全局单例，跨页复用

`useRoute()` **每次调用都是新快照**。在 A 页拿到的 `route` 传给 B 页 / 存进全局 store，B 页看到的仍是 A 页的值。

```uts
// ❌ 错误：把快照塞进全局，期待它跟着导航走
const route = useRoute();
someGlobalStore.currentRoute = route;

// ✅ 正确：每个页面 / 组件在自己的 setup 里各取一份
```

### ② 在 `setup` 之外调用

```uts
// ❌ 错误：模块顶层 / 普通函数
const route = useRoute();                 // 模块顶层
function getTitle(): string {
  return useRoute().name ?? '';           // 普通函数
}

// ✅ 正确：只在页面 / 组件的 setup 里
const route = useRoute();
function getTitle(): string {
  return route.name ?? '';                // 用 setup 里那一份
}
```

### ③ 解构 `route` 丢响应式

```uts
// ❌ 错误：解构出来的是普通拷贝，路由变化后不再更新
const { path, query } = useRoute();

// ✅ 正确：保留对象引用，模板 / computed 里读字段
const route = useRoute();
const path = computed((): string => route.path);
```

### ④ query 值全是 `string`，直接当数字 / 布尔用

`route.query.get('id')` 的类型是 `string | null`，**即使传参时写的是数字** `{ id: 0 }`，拿回来也是 `'0'`。直接做数值比较会得到「类型不对 / 恒不相等 / `'0'` 被当真的」这类静默错误。

```uts
// ✅ 正确：先判空、再显式转换（联合类型上别写三元，见分册 1.20）
const idText = route.query.get('id');
let id: number = 0;
if (idText != null) {
  id = parseInt(idText, 10);
}
if (id == 0) { /* ... */ }

// ✅ 布尔同理：先取字符串再比较
const mode: string = route.query.get('mode') ?? '';
const isEdit: boolean = mode == 'edit';
```

### ⑤ 在模板里直接 `v-for` 遍历 `route.query`

`query` 是 `Map`，直接遍历拿不到稳定的下标与 DOM 复用。必须先摊成 `Array`（见 8.4.4）。

### ⑥ `meta` / `name` 忘记判空

`meta` 在页面元信息缺失时是 `null`；**任何 `route.meta['x']` 的写法都必须先判空**，否则 Kotlin 端直接 NPE（分册 1 / 红线 19）。

### ⑦ 拿 `router.currentRoute` / `routeState` 做页面展示

它们语义是「应用当前 / 正在导航到的路由」，**跳转请求发出时就已变成目标页**：

```uts
// ❌ 错误：上一页在进入动画期间会显示成新页的路径
<text>{{ router.currentRoute.fullPath }}</text>

// ✅ 正确：页面上展示本页信息一律用 useRoute()
<text>{{ route.fullPath }}</text>
```

同时提醒：`fullPath` 里的 query 是**编码态**，要展示中文请用 `route.query.get(...)`。

### ⑧ `import { route }` 拿到的不是当前路由

`route-bestX` 导出的 `route` 是**路径工具类单例**（`RouteUtils` 实例，`.cleanPath()` / `.parseUrlToObj()` 之类方法），**不是**路由状态对象：

```uts
import { route } from '@/uni_modules/route-bestX/index.uts';

route.getCurrentPath();      // ✅ 工具方法
route.path;                  // ❌ 没有这个字段，当前路由请用 useRoute()
```

### ⑨ 用 `onLoad(options)` 取参数

见 8.2.5 对比表。`onLoad` 不响应式 + 微信小程序端编码态与其它端不一致，一律禁止。

### ⑩ 自己拼 query 串

```uts
// ❌ 错误：漏 URL 编码，中文 / 空格 / & / ? 全炸
router.push(`/src/sub/detail/detail?title=${title}`);

// ✅ 正确：对象形态交给 serializeQuery 编码
router.push({ path: '/src/sub/detail/detail', query: { title } });
```

### ⑪ 页面栈滞后（App 端）

App 端 `getCurrentPages()` 在页面刚入栈的一小段时间里**栈顶仍是上一页**。所以：

- 页面 **setup 里不要**读 `getCurrentPages()` 判断当前页（读到上一页）；
- 页面判断当前页用 `route.path`；
- 非组件环境只能在「稳定时机」读栈（冷启动、返回、`onPageShow`）。

### ⑫ 手势返回 / 物理返回键

这两种返回**不走** `uni.navigateBack`，但 `useRoute()` 靠 `onPageShow` 回读页面栈，**返回上一页后快照会正确刷新** —— 这是它能覆盖 App 物理返回键的原因。**不要**自己监听 `uni.$on('routeChange')` 造状态（分册 3.26 / 红线 40：全局事件不解绑会泄漏 Activity）。

### ⑬ 试图修改 `route`

`useRoute()` 返回的是**只读快照**。

```uts
// ❌ 错误：改了也不会生效，且可能污染全局状态下的同名字段
route.query.set('id', '2');

// ✅ 正确：要换路由请用 router.replace({ path, query })
router.replace({ path: route.path, query: { id: 2 } });
```

### ⑭ 导入路径的 `src/` 前缀与 `.uts` 后缀

- 页面路径统一 `/src/pages/...`、`/src/sub/...`（本项目页面都在 `src/` 下）；
- 模块导入统一 `@/uni_modules/route-bestX/index.uts`，保留 `.uts`；
- 用 `@` 绝对路径，不要从页面目录往上 `../../` 穿透。

---

## 8.6 `useRouter()` 速查（跳转必需）

### 8.6.1 方法表

| 方法 | 落到哪个 uni API | 入参 | 返回 |
| :--- | :--- | :--- | :--- |
| `push(to, intercept = true)` | `uni.navigateTo`；**命中 TabBar 页时自动改走 TabBar 处理器** | `string \| RouteLocationRaw \| null` | 该 API 的 Promise（本项目 TabBar 分支返回 `null`）；入参为空 / 解析不出路径时 `null` |
| `replace(to, intercept = true)` | `uni.redirectTo`（同样自动纠正 TabBar 页） | 同上 | 同上 |
| `relaunch(to, intercept = true)` | `uni.reLaunch` | 同上 | 同上 |
| `switchTab(to, intercept = true)` | 本项目走 `switchTabbar()`；未注册处理器时降级 `uni.switchTab` | 同上 | 走自定义 TabBar 时返回 `null` |
| `back(delta = 1, intercept = true)` | `uni.navigateBack` | `number` | `void` |
| `go(delta = -1, intercept = true)` | `uni.navigateBack`（**仅负数**，等价 `back(-delta)`） | `number` | `void` |
| `resolve(to)` | —（只拼 url，不跳转） | 同上 | `string`（归一化 url，失败为空串） |
| `beforeEach(guard)` / `afterEach(hook)` / `onError(handler)` | — | 回调 | `void` |
| `currentRoute`（getter） | — | — | 全局 `routeState`（**别用于页面展示**） |

- **`go()` 传正数会告警并忽略** —— uni-app X 没有「前进」API。
- **返回类型标 `any | null`**（红线 27）：标成 `Promise<any> | null` 或只写 `any` 都会因泛型不协变报类型不匹配。
- **失败处理走全局钩子**（`onError` / `afterEach`）；确需等待返回值时**先判空**，再用双参 `.then(ok, err)`；⚠️ **严禁链式 `.catch()`**（分册 1.21 / 红线 35，Kotlin 端 `error25` 编不过）。
- `intercept: false`（第二参或对象字段）表示**本次跳转跳过拦截器与守卫**（等价于 `setBypassInterceptorOnce(true)`），只给「守卫会误判」的框架级内部跳转用，业务页面一律不要传。

```uts
import type { RouteTarget } from '@/uni_modules/route-bestX/index.uts';

// ✅ 推荐：导航失败统一在全局 onError / afterEach 处理（不要对 push 返回值链式 .catch()）
// ⚠️ 全局钩子只注册一次（main.uts / src/router/guards/index.uts 的编排处），别写在页面 setup 里
router.onError((error: any, to?: RouteTarget | null, from?: RouteTarget | null): void => {
  console.warn('[router] 导航异常', error, to?.path ?? '');
});

router.afterEach((to: RouteTarget, from: RouteTarget, failure?: any | null): void => {
  if (failure != null) {
    console.warn('[router] 导航中断或失败', to.path, failure);
  }
});
```

> ⚠️ `push` 的返回值类型是 `any | null`，**不要直接链式 `.then()` / `.catch()`**：返回 `null` 的情形（入参为空、解析不出路径）没有 Promise；业务上也不需要等待跳转结果，失败走 `onError` / `afterEach`。

### 8.6.2 入参 `RouteLocationRaw`（`to` 的对象形态）

```uts
import type { RouteLocationRaw } from '@/uni_modules/route-bestX/index.uts';
```

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `path` | `string?` | 目标路径，可自带 query 串（`/a/b?x=1`）；相对路径会按当前页目录解析，**建议一律写绝对路径** |
| `name` | `string?` | 路由名（`definePage` 的 `name` 或路径最后一段），未给 `path` 时按它查路径 |
| `query` | `UTSJSONObject?` | query 参数，值由 `serializeQuery` 统一编码（数字 / 布尔 / 数组 / 对象都能序列化） |
| `params` | `UTSJSONObject?` | 命名路由参数，**会自动并入 query** 拼进 url（uni 没有动态路由段） |
| `intercept` | `boolean?` | `false` = 本次跳过拦截器（业务别用） |
| `replace` | `boolean?` | **仅在守卫 `next({ replace: true })` 里生效**；`router.push()` 不消费它，要 replace 请直接调 `router.replace()` |

- **必须是 `RouteLocationRaw` 类型或对象字面量**：**裸的 `UTSJSONObject`（如 `JSON.parseObject()` 的返回值）会被编译期挡下**，这是有意的收紧（详见 `utils/utils.uts` 的 `RouteLocationRaw` 注释）。
- 参数标 `any` 时编辑器给不出字段补全，标 `UTSJSONObject` 只弹成员方法 —— 所以请用具名类型。

### 8.6.3 三种跳转写法

```uts
// ① 字符串（最常用；query 由你自己拼，务必 encodeURIComponent 或用对象形态）
router.push('/src/sub/detail/detail');

// ② 路径对象（推荐：query 自动编码）
router.push({ path: '/src/sub/detail/detail', query: { id: 1, title: '标题' } });

// ③ 命名路由（params 自动转 query）
router.push({ name: 'detail', params: { id: 1 } });

// ④ 失败兜底 / 提前校验：先 resolve 看 url
const url = router.resolve({ path: '/src/sub/detail/detail', query: { id: 1 } });
```

> ⚠️ 本项目规范要求每个页面都显式声明唯一的 `definePage({ name: 'detail' })`。运行时虽会回落到**路径最后一段**（`/src/sub/detail/detail` → `detail`），但不同目录可能同名冲突，**禁止依赖该兜底**。跨页面跳转仍建议优先用 `path`，`name` 只当便捷写法。

---

## 8.7 场景总表

| 场景 | 正确写法 |
| :--- | :--- |
| 读本页 query | `useRoute().query.get('id')`（记得转类型） |
| 读本页路径 / 路由名 | `useRoute().path` / `useRoute().name` |
| 读本页路由元信息 | `useRoute().meta`（来自 `definePage` / `pages.json`） |
| 读页面栈深度 | `useRoute().pages.length` |
| 判断是否某页 | `isSamePath(useRoute().path, '/src/sub/x/x')` |
| 打开二级页 / 详情页 | `useRouter().push({ path, query })` |
| 打开 TabBar 页 | `useRouter().push(tabPath)` 或 `switchTabbar(tabPath)` |
| 登录成功后替换当前页 | `useRouter().replace(target)` |
| 退出登录 / 切账号回首页 | `useRouter().relaunch('/src/pages/index/index')` |
| 返回上一页 / N 层 | `useRouter().back()` / `useRouter().back(2)` |
| 只想拼出 url 看一眼 | `useRouter().resolve({ path, query })` |
| 401 / 主动送登录页 | `toLoginPage()`（`@/src/utils/auth/toLoginPage.uts`，内置 1s 节流） |
| 非组件环境取当前页 | `getCurrentPath()` / `getCurrentRoute()` / `getCurrentPageOptions()` |
| 改「哪些页面要登录」 | `src/router/config.uts` 的 `EXCLUDE_LOGIN_PATH_LIST` + `LOGIN_STRATEGY` |
| 加一条新路由规则 | 在 `src/router/guards/` 新建 `guardXxx.uts`，接入 `guards/index.uts` 的流水线 |

---

## 8.8 自检红线清单

- [ ] **红线 1**：严禁在页面 / 组件里直接调用 `uni.navigateTo` / `uni.redirectTo` / `uni.reLaunch` / `uni.switchTab` / `uni.navigateBack`，一律走 `useRouter()`（绕过守卫 = 登录拦截、TabBar 分流、路由状态同步同时失效）。
- [ ] **红线 2**：路由信息一律 `useRoute()`，**严禁 `onLoad((options) => {...})` 取参数、严禁手写 `getCurrentPages()` 判断当前页**（`onLoad` 不响应式且小程序端编码态不一致；页面栈在 App 端有滞后）。
- [ ] **红线 3**：`useRoute()` 只能在页面 / 组件的 `setup` 中调用，严禁在模块顶层、纯工具函数、api 层调用；**严禁做 `useRoute() == useRoute()` 这类身份判断**；严禁解构 `route`。
- [ ] **红线 4**：`query` 值恒为 `string`，取值后**必须显式转换类型并给默认值**；`meta` 使用前必须判空，嵌套字段（`style`）逐层下标访问。
- [ ] **红线 5**：严禁用 `route.query` 直接 `v-for`，必须先摊成 `Array`；`forEach` 回调参数按 `string` 标注，**严禁标 `any`**。
- [ ] **红线 6**：页面展示路由信息一律用 `useRoute()`，**严禁读 `router.currentRoute` / 全局 `routeState`**（它们是「正在导航到的路由」）。
- [ ] **红线 7**：严禁自己拼 query 串直传，一律用 `router.push({ path, query })` 对象形态，交给 `serializeQuery()` 编码。
- [ ] **红线 8**：`useRouter()` 的 `push` / `replace` / `relaunch` / `switchTab` 返回类型必须标 `any | null`；导航失败统一走 `onError` / `afterEach`，确需等待返回值时先判空再用双参 `.then(ok, err)`，**严禁链式 `.catch()`**（红线 27、35）。
- [ ] **红线 9**：所有路由符号一律从 `@/uni_modules/route-bestX/index.uts`（或门面 `@/src/router/index.uts` 的 `useRoute` / `useRouter`）导入，**严禁 import 模块内部文件**；历史路径 `@/src/router/utils/utils.uts` / `@/src/router/hooks/route-state.uts` / `@/src/router/toLoginPage/toLoginPage.uts` 均已不存在。
- [ ] **红线 10**：`toLoginPage` 从 `@/src/utils/auth/toLoginPage.uts` 导入，登录页路径与黑白名单配置从 `@/src/router/config.uts` 导入，业务守卫规则只加在 `src/router/guards/`。
