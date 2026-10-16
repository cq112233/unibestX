# route-bestX

> **专为 uni-app X / UTS 强类型架构打造的现代化独立跨端路由引擎。**  
> 对标 Vue Router 4 标准 API，轻量零外部依赖，支持导航守卫、参数解析、快照隔离与全平台（App、Web、小程序）兼容。

---

## 🌟 核心特性

- 🎯 **对标 Vue Router 标准规范**：支持 `createRouter()`、`useRouter()`、`useRoute()`、`app.use(router)`
- 🛡️ **完备的导航守卫流水线**：支持全局前置守卫 `beforeEach`、全局后置钩子 `afterEach`、全局异常捕获 `onError`
- 🖐️ **手势返回与侧滑全域拦截**：原生抹平小程序侧滑手势、物理返回与导航栏返回，自带防抖去重与离开页快照还原
- ⚡ **独立快照隔离引擎**：组件页面级专属路由快照，防止多层页面切换时上一页数据被提前冲刷覆盖
- 🔄 **TabBar 智能兼容**：支持传入通用 TabBar 页面清单或判定规则，`router.push()` 时自动识别并平滑分流
- 🔒 **URL 编解码安全容错**：内置 `decodeSafe` 容错多层嵌套编码（如 `redirect` 参数）与特殊字符，防止参数乱码或异常
- 💎 **纯 UTS 原生强类型**：零第三方构建依赖，跨端全兼容：`App (Android / iOS / HarmonyOS)`、`Web (H5)`、`微信小程序`、`支付宝小程序`

---

## 📦 安装与初始化

### 1. 创建路由器实例并挂载 (`main.uts`)

```uts
import App from './App.uvue';
import { createSSRApp } from 'vue';
import { createRouter } from '@/uni_modules/route-bestX';

// 1. 创建路由器实例
export const router = createRouter();

// 2. 注册全局前置守卫（登录鉴权 / 权限控制等）
router.beforeEach((to, from, next) => {
  // 示例：拦截特定页面
  if (to.path.startsWith('/pages/admin/')) {
    next('/pages/login/login');
    return;
  }
  // 正常放行
  next();
});

// 3. 注册全局后置钩子（数据统计 / 页面埋点上报等）
router.afterEach((to, from, failure) => {
  if (failure != null) {
    console.warn('[Router afterEach] 导航中断或失败:', failure);
    return;
  }
  // reportPV(to.path);
});

// 4. 注册全局异常捕获
router.onError((error, to, from) => {
  console.error('[Router onError] 路由异常:', error, to?.path);
});

export function createApp() {
  const app = createSSRApp(App);

  // 挂载路由插件（自动安装全平台路由拦截器，并向 globalProperties 自动注入 $router 与 $route）
  app.use(router);

  return { app };
}
```

### 2. 首屏冷启动与外部唤起直达保护 (`App.uvue`)

为确保 App 冷启动直达或外部 Scheme / 分享直链能够触发全局导航守卫校验，在 `App.uvue` 的 `onShow` 中调用：

```html
<script setup lang="uts">
import { checkDirectEntry } from '@/uni_modules/route-bestX';

onShow((options?) => {
  checkDirectEntry(options);
});
</script>
```

---

## 📖 基础用法

### 1. 页面跳转导航（`useRouter`）

可在任何组件或页面中的 `<script setup>` 或常规方法中直接调用：

```html
<script setup lang="uts">
import { useRouter } from '@/uni_modules/route-bestX';

const router = useRouter();

// ① 基础路径跳转（目标页入栈，保留当前页）
router.push('/pages/detail/detail');

// ② 字符串路径带参跳转
router.push('/pages/detail/detail?id=1001&title=hello');

// ③ 对象形态跳转（query 自动拼串与 URL 编码）
router.push({
  path: '/pages/detail/detail',
  query: { id: 1001, title: '详情页' }
});

// ④ 命名路由跳转（需通过 setRouteMeta 注册或注入页面元信息表，未配置时推荐使用 path）
router.push({
  name: 'detail',
  params: { id: 1001 }
});

// ⑤ 重定向替换（关闭当前页并打开目标页）
router.replace('/pages/index/index');

// ⑥ 跳过拦截器（第二参数传入 false，默认 true 走拦截器，false 直接跳过全局守卫）
router.push('/pages/login/login', false);
router.replace('/pages/login/login', false);
// 也支持在对象入参中直接指定 intercept: false
router.push({ path: '/pages/login/login', intercept: false });

// ⑦ 重启应用（关闭所有页面再打开目标页）
router.relaunch('/pages/index/index');

// ⑧ TabBar 页面切换
router.switchTab('/pages/index/index');

// ⑨ 页面返回（第二参数同样支持传入 false 跳过拦截）
router.back();          // 返回上一页，等价 router.back(1)
router.back(1, false);  // 返回上一页且跳过拦截器
router.go(-2);          // 后退 2 层

// ⑩ 仅解析目标 URL（只拼装完整 URL，不执行跳转）
const url = router.resolve({
  path: '/pages/detail/detail',
  query: { id: 1001 }
});
</script>
```

> 💡 **跳过拦截器参数 (`intercept: boolean`)**：
> `router.push`、`router.replace`、`router.relaunch`、`router.switchTab`、`router.back`、`router.go` 的第二个参数均支持传入 `boolean`（默认 `true`）：
>
> - **`true`（默认）**：按标准流程触发全局 `beforeEach` 守卫与页面拦截；
> - **`false`**：直接执行底层跳转，**跳过守卫与拦截器**（适合用于登出清空状态跳转登录页、防死循环强跳等特殊场景）。

---

### 2. 读取当前路由信息（`useRoute`）

`useRoute()` 返回当前页面专属的**响应式只读路由快照**，各页面间独立互不干扰：

```html
<template>
  <view>
    <text>页面路径: {{ route.path }}</text>
    <text>完整路径: {{ route.fullPath }}</text>
    <text>路由名称: {{ route.name }}</text>

    <!-- Query 参数（Map 结构，读取解码后的参数值） -->
    <text>参数 id: {{ route.query.get('id') }}</text>

    <!-- 页面栈与当前页面实例 -->
    <text>页面栈深度: {{ route.pages.length }}</text>
  </view>
</template>

<script setup lang="uts">
import { useRoute } from '@/uni_modules/route-bestX';

const route = useRoute();
</script>
```

#### `route` 对象字段一览

| 字段名 | 类型 | 说明 |
| :--- | :--- | :--- |
| `path` | `string` | 规范化绝对路径（带前导 `/`，不含 query），如 `/pages/detail/detail` |
| `fullPath` | `string` | 包含 query 的完整路径，如 `/pages/detail/detail?id=1001` |
| `query` | `Map<string, string>` | 查询参数字典，值均已执行 URL 解码，使用 `.get('key')` 读取 |
| `name` | `string \| null` | 路由名称 |
| `meta` | `UTSJSONObject \| null` | 页面元信息配置 |
| `page` | `any \| null` | 当前栈顶页面实例（`UniPage`） |
| `pages` | `any[]` | 当前页面栈实例数组（等价于 `getCurrentPages()`） |

---

## 🛡️ 导航守卫规则与实战场景

在 `router.beforeEach((to, from, next) => { ... })` 中：

- **放行导航**：调用 `next()` 或返回 `true`
- **取消/中断导航**：调用 `next(false)` 或返回 `false`（触发 `101` 错误回调）
- **重定向至新页面**：
  - 调用 `next('/pages/login/login')` 或直接返回目标路径字符串
  - 携带参数与替换历史栈：`next({ path: '/pages/login/login', query: { redirect: to.fullPath }, replace: true })`（`replace: true` 会走 `uni.redirectTo` 替换当前页面，不入历史栈）

### 实战示例 1：登录鉴权与重定向回跳 (带 redirect & replace)

未登录时拦截访问个人中心或订单页，并将当前目标路由作为 `redirect` 参数传递给登录页，登录成功后可直接跳回；使用 `replace: true` 避免在历史栈中残留受限页面：

```uts
router.beforeEach((to, from, next) => {
  // 检查目标页是否需要登录鉴权（支持读取 meta 或按路径前缀识别）
  const requireAuth = to.meta?.getBoolean('requireAuth') ?? false;

  if (requireAuth && !checkUserLoggedIn()) {
    next({
      path: '/pages/login/login',
      query: {
        redirect: to.fullPath // 记录来源页完整路径供登录后回跳
      },
      replace: true // 替换当前页，防止返回键再次陷入拦截死循环
    });
    return;
  }

  next();
});
```

### 实战示例 2：已登录用户防重复访问登录/注册页

当用户已处于登录状态时，若再次误点进入登录页或注册页，自动重定向至首页：

```uts
router.beforeEach((to, from, next) => {
  const isAuthPage = to.path == '/pages/login/login' || to.path == '/pages/register/register';

  if (isAuthPage && checkUserLoggedIn()) {
    next({ path: '/pages/index/index', replace: true });
    return;
  }

  next();
});
```

### 实战示例 3：基于元信息 (meta) 角色权限管控

结合路由元信息 `roles` 控制管理员或 VIP 专属页面访问，权限不足时弹窗提示并中断跳转：

```uts
router.beforeEach((to, from, next) => {
  // 检查页面所需角色
  const roles = to.meta?.getArray<string>('roles');
  if (roles != null && roles.length > 0) {
    if (!hasUserRole(roles)) {
      uni.showToast({ title: '权限不足，无法访问', icon: 'none' });
      next(false); // 拦截并取消本次导航
      return;
    }
  }

  next();
});
```

### 实战示例 4：全站系统维护/升级公告拦截

在后台开启全站维护或系统升级时，自动将所有页面跳转统一重定向至系统维护公告页：

```uts
router.beforeEach((to, from, next) => {
  // 处于系统维护模式且目标不是维护公告页时，强制重定向至维护页
  if (isSystemMaintenance() && to.path != '/pages/maintenance/maintenance') {
    next({
      path: '/pages/maintenance/maintenance',
      replace: true
    });
    return;
  }

  next();
});
```

### 实战示例 5：页面离开前二次确认（异步弹窗防丢失未保存内容）

当用户准备离开表单编辑页时，通过异步弹窗询问用户是否放弃未保存的修改：

```uts
router.beforeEach((to, from, next) => {
  // 离开编辑页且有未保存表单数据时二次确认
  if (from.path == '/pages/editor/editor' && isFormDirty()) {
    uni.showModal({
      title: '离开确认',
      content: '当前表单内容尚未保存，确定要放弃修改并离开吗？',
      confirmText: '放弃并离开',
      cancelText: '继续编辑',
      success: (res) => {
        if (res.confirm) {
          next(); // 用户确认离开，放行导航
        } else {
          next(false); // 用户取消离开，中断导航保留在当前页
        }
      }
    });
    return;
  }

  next();
});
```

### 实战示例 6：Vue Router 4 极简 return 语法糖

除了经典的 `next()` 回调方式，守卫还支持直接返回 `boolean` 或目标路径字符串，书写更加轻量：

```uts
router.beforeEach((to, from) => {
  // 返回 false 中断跳转（等价于 next(false)）
  if (to.path == '/pages/forbidden/forbidden') {
    return false;
  }

  // 返回路径字符串进行重定向（等价于 next('/pages/new-feature/new-feature')）
  if (to.path == '/pages/old-feature/old-feature') {
    return '/pages/new-feature/new-feature';
  }

  // 返回 true 或不返回代表正常放行
  return true;
});
```

---

## 🖐️ 手势返回、物理按键与全域返回拦截

跨端开发（特别是微信小程序、支付宝小程序与 iOS 原生 App）面临一个长期痛点：**用户通过边缘手势侧滑返回或点击系统自带物理返回键时，底层并不调用 `uni.navigateBack` API**，导致常规路由拦截器直接被绕过，返回页面丢失权限校验。

`route-bestX` 底层深度整合了页面栈监听与生命周期拦截体系，实现了**真正的全域返回保护**：

### 1. 手势返回与普通返回双轨闭环

- **API 显式返回**：调用 `router.back()` 或 `uni.navigateBack()` 时，由 `navigateBackInterceptor` 即时拦截并交由守卫裁决；
- **原生手势/物理返回**：用户边缘侧滑或点击物理返回键时，底层自动捕获返回动作，装配 `api: 'navigateBack'` 上下文并触发全局前置守卫校验。若未放行，立即改跳至受控目标页。

### 2. 500ms 智能防抖去重机制

当用户在页面顶部自定义 Navbar 点击返回按钮（触发了 `uni.navigateBack` 拦截器放行）后，紧随其后的原生页面显现钩子会自动触发。  
`route-bestX` 内部通过**目标路径全比对 + 500ms 动态时间窗口**自动识别同一动作，**绝对不会重复跑两次守卫或触发两次 `afterEach`**。

### 3. 真实离开页（`from`）快照恢复

在多端环境手势返回时，系统事件分发往往存在时序差异（部分平台在派发事件时，全局栈顶状态已被提前覆盖为返回后的页面）。  
`route-bestX` 会自动从 `previousRouteState` 前序快照中逆向恢复真实的离开页面，保证守卫中读取到的 `from`（实际离开的页面）与 `to`（返回到达的目标页面）**100% 真实准确**。

---

## 💡 最佳实践与踩坑防范

### 1. 路由 Hook 推荐在 setup 最顶部初始化

在页面 `.uvue` 组件的 `<script setup>` 中，**推荐将 `useRoute()` 与 `useRouter()` 置于最顶部声明**：

```html
<script setup lang="uts">
// ⭐ 推荐：最先声明路由 Hook，确保页面返回与各生命周期中路由快照最先就绪
const route = useRoute();
const router = useRouter();

// 随后再写页面业务代码与生命周期监听
onShow(() => {
  // 此处读取 route.path / route.query 绝对稳定
});
</script>
```

### 2. 嵌套多层 URL 编码安全防护

在重定向回跳场景中（如 `login?redirect=%2Fpages%2Forder%2Flist`），下游参数可能被再次编码（变为 `%252F` 嵌套态）。  
`route-bestX` 内部针对所有参数提取内置了 `decodeSafe` 容错处理：

- 自动智能解开多层嵌套 URL 编码，回跳路径不再残留 `%2F`；
- 原生包含字面量 `%`（如 `discount=100%`）时安全兜底，两端绝不抛出 `URIError`。

### 3. 全自动页面元信息同步 (`setPageMetaJson`)

若配合 `vite-plugin-uni-pages` 等构建插件，可在项目入口通过 `setPageMetaJson` 一行代码直接同步 `pages.json` 生成的元数据：

```uts
import { setPageMetaJson } from '@/uni_modules/route-bestX';
import { PAGE_META_JSON } from '@/src/router/generated/page-meta.uts';

// 全自动同步：页面中 definePage 配置的 style、name 等字段直接映射至 route.meta / route.name
setPageMetaJson(PAGE_META_JSON);
```

---

## ⚙️ 进阶配置 (`RouterOptions`)

创建路由器时可按需配置 TabBar 识别策略：

```uts
const router = createRouter({
  // 方式 1：指定 TabBar 页面路径列表
  tabbarPath: ['/pages/index/index', '/pages/me/me'],

  // 方式 2：自定义判定函数
  isTabbar: (url: string): boolean => {
    return url.includes('pages/index/index');
  },

  // 方式 3：自定义 TabBar 跳转实现（若项目使用了自定义 TabBar 方案）
  switchTab: (url: string) => {
    // 自定义切换逻辑
  }
});
```

### 页面元信息与命名路由配置（可选）

如果不使用构建插件注入元信息，可通过以下方式手动为页面注册路由名称（供 `router.push({ name: 'detail' })` 检索）与扩展元数据：

#### 方式 1：初始化时在 `createRouter` 传入 `routes` 数组（推荐，对标 Vue Router 4）

```uts
export const router = createRouter({
  routes: [
    {
      path: '/pages/index/index',
      name: 'home',
      meta: { title: '首页' }
    },
    {
      path: '/pages/detail/detail',
      name: 'detail',
      meta: { title: '商品详情', requireAuth: true }
    },
    {
      path: '/pages/user/user',
      name: 'user',
      meta: { title: '个人中心' }
    }
  ]
});
```

#### 方式 2：使用 `setRoutes` 批量注册数组

```uts
import { setRoutes } from '@/uni_modules/route-bestX';

setRoutes([
  { path: '/pages/detail/detail', name: 'detail', meta: { title: '商品详情' } },
  { path: '/pages/user/user', name: 'user', meta: { title: '个人中心' } }
]);
```

#### 方式 3：使用 `setRoutesMeta` 批量传入字典映射

```uts
import { setRoutesMeta } from '@/uni_modules/route-bestX';

setRoutesMeta({
  '/pages/detail/detail': { name: 'detail', title: '商品详情' },
  '/pages/user/user': { name: 'user', title: '个人中心' }
});
```

#### 方式 4：使用 `setRouteMeta` 注册单个页面

```uts
import { setRouteMeta } from '@/uni_modules/route-bestX';

setRouteMeta('/pages/detail/detail', {
  name: 'detail',
  title: '商品详情'
});
```

---

## ⚠️ 标准错误码 (`ROUTER_ERROR_CODE`)

在 `router.afterEach((to, from, failure) => { ... })` 或 `router.onError((error) => { ... })` 中，可通过标准错误码对导航中断或失败进行精准捕获与排查：

| 错误码 | 标识常量 | 触发场景与原因 |
| :--- | :--- | :--- |
| `101` | `GUARD_CANCELLED` | **守卫拦截**：全局前置守卫中显式调用了 `next(false)` 主动中断本次跳转 |
| `102` | `MAX_REDIRECT_EXCEEDED` | **重定向超限**：守卫内连续重定向超过 10 次触发安全熔断（防止无限死循环） |
| `201` | `BACK_STACK_DEPTH_INVALID` | **页面栈不足**：调用 `router.back()` 或 `router.go(-n)` 时当前已处于首屏或步长超出栈深度 |
| `202` | `NAVIGATE_BACK_FAILED` | **页面返回失败**：底层调用 `uni.navigateBack` 失败 |
| `301` | `NAVIGATE_TO_FAILED` | **保留跳转失败**：底层 `uni.navigateTo` 失败（页面未在 `pages.json` 注册或页面栈达 10 层上限） |
| `302` | `REDIRECT_TO_FAILED` | **重定向失败**：底层 `uni.redirectTo` 失败（如页面未在 `pages.json` 注册） |
| `303` | `RELAUNCH_FAILED` | **重启应用失败**：底层 `uni.reLaunch` 失败（如页面未在 `pages.json` 注册） |
| `304` | `SWITCH_TAB_FAILED` | **底栏切换失败**：底层 `uni.switchTab` 失败（目标页面不在 TabBar 列表中） |

### 错误捕获示例

```uts
import { ROUTER_ERROR_CODE } from '@/uni_modules/route-bestX';

router.afterEach((to, from, failure) => {
  if (failure != null) {
    if (failure.code == ROUTER_ERROR_CODE.GUARD_CANCELLED) {
      console.log('用户未通过守卫校验，导航已取消');
    } else if (failure.code == ROUTER_ERROR_CODE.NAVIGATE_TO_FAILED) {
      console.error('跳转失败，请检查 pages.json 页面注册情况');
    }
  }
});
```
