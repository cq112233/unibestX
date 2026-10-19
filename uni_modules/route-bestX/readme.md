# route-bestX

> **专为 uni-app X / UTS 强类型架构打造的现代化独立跨端路由引擎。**  
> 对标 Vue Router 4 标准 API，轻量零外部依赖，支持导航守卫、参数解析、快照隔离与全平台（App、Web、小程序）兼容。

---

## 🌟 核心特性

- 🎯 **对标 Vue Router 标准规范**：支持 `createRouter()`、`useRouter()`、`useRoute()`、`app.use(router)`。
- 🛡️ **完备的导航守卫流水线**：支持全局前置守卫 `beforeEach`、全局后置钩子 `afterEach`、全局异常捕获 `onError`。
- 🖐️ **手势返回与侧滑全域拦截**：原生抹平小程序侧滑手势、物理返回与导航栏返回，自带防抖去重与离开页快照还原。
- ⚡ **独立快照隔离引擎**：组件页面级专属路由快照，防止多层页面切换时上一页数据被提前冲刷覆盖。
- 🔄 **TabBar 智能兼容**：支持传入通用 TabBar 页面清单或判定规则，`router.push()` 时自动识别并平滑分流。
- 🔒 **URL 编解码安全容错**：内置 `decodeSafe` 容错多层嵌套编码（如 `redirect` 参数）与特殊字符，防止参数乱码或异常。
- 💎 **纯 UTS 原生强类型**：零第三方构建依赖，跨端全兼容：`App (Android / iOS / HarmonyOS)`、`Web (H5)`、`微信小程序`、`支付宝小程序`。

---

## 📖 快速导航目录

- [一、快速上手与路由器挂载 (createRouter / app.use)](#一快速上手与路由器挂载-createrouter--appuse)
  - [1.1 路由器初始化 (main.uts)](#11-路由器初始化-mainuts)
  - [1.2 首屏冷启动与直达保护 (App.uvue)](#12-首屏冷启动与直达保护-appuvue)
- [二、页面跳转与导航 API (useRouter)](#二页面跳转与导航-api-userouter)
  - [2.1 跳转方法调用代码示例](#21-跳转方法调用代码示例)
  - [2.2 路由跳转入参对象全览 (RouteLocationRaw)](#22-路由跳转入参对象全览-routelocationraw)
  - [2.3 useRouter 常用方法速查表](#23-userouter-常用方法速查表)
- [三、路由快照与参数读取 (useRoute)](#三路由快照与参数读取-useroute)
  - [3.1 useRoute 调用与模板消费](#31-useroute-调用与模板消费)
  - [3.2 route 响应式快照对象字段全览](#32-route-响应式快照对象字段全览)
- [四、导航守卫流水线 (beforeEach / afterEach / onError)](#四导航守卫流水线-beforeeach--aftereach--onerror)
  - [4.1 守卫裁决规则与语法糖](#41-守卫裁决规则与语法糖)
  - [4.2 常见业务实战场景 (登录重定向 / 离开确认等)](#42-常见业务实战场景-登录重定向--离开确认等)
- [五、全域手势返回与物理键拦截机制](#五全域手势返回与物理键拦截机制)
- [六、进阶配置与命名路由 (RouterOptions / setRoutes)](#六进阶配置与命名路由-routeroptions--setroutes)
  - [6.1 RouterOptions 参数表](#61-routeroptions-参数表)
  - [6.2 页面元信息配置与命名路由注册](#62-页面元信息配置与命名路由注册)
- [七、标准错误码体系 (ROUTER_ERROR_CODE)](#七标准错误码体系-router_error_code)
- [八、目录结构与规范](#八目录结构与规范)

---

## 一、快速上手与路由器挂载 (createRouter / app.use)

### 1.1 路由器初始化 (main.uts)

```uts
import App from './App.uvue';
import { createSSRApp } from 'vue';
import { createRouter } from '@/uni_modules/route-bestX';

// 1. 创建路由器实例
export const router = createRouter();

// 2. 注册全局前置守卫（登录鉴权 / 权限控制等）
router.beforeEach((to, from, next) => {
  // 示例：拦截未登录访问受保护页面
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
  // 数据上报
});

// 4. 注册全局异常捕获
router.onError((error, to, from) => {
  console.error('[Router onError] 路由异常:', error, to?.path);
});

export function createApp() {
  const app = createSSRApp(App);

  // 挂载路由插件（自动安装全平台路由拦截器，并向 globalProperties 注入 $router 与 $route）
  app.use(router);

  return { app };
}
```

### 1.2 首屏冷启动与直达保护 (App.uvue)

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

## 二、页面跳转与导航 API (useRouter)

可在任何组件或页面中的 `<script setup>` 或常规方法中直接调用 `const router = useRouter()` 发起跳转。

### 2.1 跳转方法调用代码示例

```uts
import { useRouter } from '@/uni_modules/route-bestX';

const router = useRouter();

// ① 基础路径跳转（目标页入栈，保留当前页）
router.push('/pages/detail/detail');

// ② 字符串路径带参跳转
router.push('/pages/detail/detail?id=1001&title=hello');

// ③ 对象形态跳转（query 自动序列化拼串与 URL 编码）
router.push({
  path: '/pages/detail/detail',
  query: { id: 1001, title: '详情页' }
});

// ④ 命名路由跳转（支持 params 传参）
router.push({
  name: 'detail',
  params: { id: 1001 }
});

// ⑤ 重定向替换（关闭当前页并打开目标页）
router.replace('/pages/index/index');

// ⑥ 跳过拦截器（第二参数传入 false，默认 true 走拦截器）
router.push('/pages/login/login', false);
router.replace('/pages/login/login', false);

// ⑦ 重启应用（关闭所有页面再打开目标页）
router.relaunch('/pages/index/index');

// ⑧ TabBar 页面平滑切换
router.switchTab('/pages/index/index');

// ⑨ 页面返回
router.back();          // 返回上一页，等价 router.back(1)
router.back(1, false);  // 返回上一页且跳过拦截器
router.go(-2);          // 连续后退 2 层

// ⑩ 仅解析目标 URL（只拼装完整 URL，不执行真实跳转）
const resolvedUrl = router.resolve({
  path: '/pages/detail/detail',
  query: { id: 1001 }
});
```

---

### 2.2 路由跳转入参对象全览 (RouteLocationRaw)

当跳转方法传入对象形态时，支持以下字段：

| 参数字段 | 类型 | 必填 | 默认值 | 说明 |
| :--- | :--- | :---: | :---: | :--- |
| `path` | `string` | 否 | - | 目标页面路径（如 `/pages/detail/detail`） |
| `name` | `string` | 否 | - | 目标路由名称（需通过 routes 预先配置） |
| `query` | `any` (UTSJSONObject \| Record) | 否 | `null` | 查询参数对象，会自动转换为 `?key=val` 并做 URL 编码 |
| `params` | `any` (UTSJSONObject \| Record) | 否 | `null` | 命名路由参数（仅在传入 `name` 时生效） |
| `replace` | `boolean` | 否 | `false` | 是否以重定向替换模式跳转（关闭当前页） |
| `intercept` | `boolean` | 否 | `true` | 是否经过全局守卫拦截器（设为 `false` 可强跳防死循环） |

---

### 2.3 useRouter 常用方法速查表

| 方法名称 | 参数签名 | 返回值 | 语义对应原生 API |
| :--- | :--- | :---: | :--- |
| `router.push` | `(to: RouteLocationRaw, intercept?: boolean)` | `void` | 保留当前页，跳转到目标页 (`uni.navigateTo`) |
| `router.replace` | `(to: RouteLocationRaw, intercept?: boolean)` | `void` | 关闭当前页，跳转到目标页 (`uni.redirectTo`) |
| `router.relaunch` | `(to: RouteLocationRaw, intercept?: boolean)` | `void` | 关闭所有页面，打开目标页 (`uni.reLaunch`) |
| `router.switchTab` | `(to: RouteLocationRaw, intercept?: boolean)` | `void` | 切换到指定底栏 TabBar 页面 (`uni.switchTab`) |
| `router.back` | `(delta?: number, intercept?: boolean)` | `void` | 返回上一级或上 `delta` 级页面 (`uni.navigateBack`) |
| `router.go` | `(delta: number, intercept?: boolean)` | `void` | 按步长后退（仅支持负数，如 `-1`, `-2`） |
| `router.resolve` | `(to: RouteLocationRaw)` | `string` | 仅做目标路径与参数拼装解析，返回拼好的 URL 字符串 |

---

## 三、路由快照与参数读取 (useRoute)

### 3.1 useRoute 调用与模板消费

`useRoute()` 返回当前页面专属的**响应式只读路由快照**，各页面间独立互不干扰：

```html
<template>
  <view>
    <text>页面路径: {{ route.path }}</text>
    <text>完整路径: {{ route.fullPath }}</text>
    <text>路由名称: {{ route.name }}</text>

    <!-- Query 参数读取（已自动完成多层 decode 解码） -->
    <text>参数 id: {{ route.query.get('id') }}</text>

    <!-- 页面栈深度 -->
    <text>当前页面栈层数: {{ route.pages.length }}</text>
  </view>
</template>

<script setup lang="uts">
import { useRoute } from '@/uni_modules/route-bestX';

const route = useRoute();
</script>
```

---

### 3.2 route 响应式快照对象字段全览

| 字段名 | 类型 | 说明 | 示例 |
| :--- | :--- | :--- | :--- |
| `path` | `string` | 规范化绝对路径（带前导 `/`，不含 query） | `"/pages/detail/detail"` |
| `fullPath` | `string` | 包含 query 的完整 URL 路径 | `"/pages/detail/detail?id=1001"` |
| `query` | `Map<string, string>` | 查询参数字典，参数值均已执行解码，通过 `.get('key')` 读取 | `route.query.get('id')` |
| `name` | `string \| null` | 路由名称（若已配置命名路由） | `"detail"` |
| `meta` | `UTSJSONObject \| null` | 页面元数据（可在页面定义或配置表中自定义） | `route.meta?.getString('title')` |
| `page` | `any \| null` | 当前栈顶页面实例对象（`UniPage`） | - |
| `pages` | `any[]` | 当前页面栈实例数组（等价于 `getCurrentPages()`） | `route.pages.length` |

---

## 四、导航守卫流水线 (beforeEach / afterEach / onError)

### 4.1 守卫裁决规则与语法糖

在 `router.beforeEach((to, from, next) => { ... })` 中，可通过以下方式决定跳转行为：

- **正常放行**：调用 `next()` 或直接 `return true`；
- **中断导航**：调用 `next(false)` 或直接 `return false`（取消本次跳转并触发错误码 `101`）；
- **重定向新页面**：
  - 调用 `next('/pages/login/login')` 或直接 `return '/pages/login/login'`；
  - 携带参数与替换栈：`next({ path: '/pages/login/login', query: { redirect: to.fullPath }, replace: true })`（`replace: true` 走 `redirectTo`，不增加历史栈深度）。

---

### 4.2 常见业务实战场景 (登录重定向 / 离开确认等)

#### 场景 1：未登录鉴权拦截并回跳登录页
```uts
router.beforeEach((to, from, next) => {
  const requireAuth = to.meta?.getBoolean('requireAuth') ?? false;

  if (requireAuth && !checkUserLoggedIn()) {
    next({
      path: '/pages/login/login',
      query: { redirect: to.fullPath }, // 保存来源页，登录后可回跳
      replace: true // 替换当前页，防止返回键再次被拦截陷入死循环
    });
    return;
  }
  next();
});
```

#### 场景 2：已登录用户防重复访问登录页
```uts
router.beforeEach((to, from, next) => {
  if (to.path == '/pages/login/login' && checkUserLoggedIn()) {
    next({ path: '/pages/index/index', replace: true });
    return;
  }
  next();
});
```

#### 场景 3：离开表单页前二次确认弹窗
```uts
router.beforeEach((to, from, next) => {
  if (from.path == '/pages/editor/editor' && isFormDirty()) {
    uni.showModal({
      title: '离开确认',
      content: '当前修改尚未保存，确认放弃并离开吗？',
      success: (res) => {
        if (res.confirm) {
          next(); // 确认离开：放行
        } else {
          next(false); // 取消离开：中断本次导航，停留在当前编辑页
        }
      }
    });
    return;
  }
  next();
});
```

---

## 五、全域手势返回与物理键拦截机制

在微信小程序、支付宝小程序与 iOS 原生 App 中，用户通过边缘侧滑返回或点击系统自带物理返回键时，底层不经过常规 API。  
`route-bestX` 深度整合了原生页面栈事件流，实现了**真正的全域返回保护**：

1. **双轨闭环拦截**：API 返回（`router.back()`）与系统手势返回均会被捕获并交由全局 `beforeEach` 守卫统一裁决；
2. **500ms 智能防抖去重**：自定义 Navbar 点击返回与紧随其后的原生生命周期自动合并，绝不重复触发两次守卫；
3. **真实来源页 (`from`) 快照恢复**：从前序历史快照中自动逆向恢复真实离开页面，保证守卫中读取到的 `from` 与 `to` 100% 真实准确。

---

## 六、进阶配置与命名路由 (RouterOptions / setRoutes)

### 6.1 RouterOptions 参数表

在 `createRouter(options)` 时支持传入以下配置：

| 参数字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `routes` | `Array<RouteRecordRaw>` | 路由表清单（可定义 path, name, meta） |
| `tabbarPath` | `Array<string>` | TabBar 页面路径列表，`router.push()` 时遇到列表中页面自动分流为 `switchTab` |
| `isTabbar` | `(url: string) => boolean` | 自定义 TabBar 判定函数 |
| `switchTab` | `(url: string) => void` | 自定义 TabBar 切换实现（适用于使用了自定义底栏方案） |

---

### 6.2 页面元信息配置与命名路由注册

#### 方式 1：初始化时在 `createRouter` 传入（对标 Vue Router 4）
```uts
export const router = createRouter({
  routes: [
    { path: '/pages/index/index', name: 'home', meta: { title: '首页' } },
    { path: '/pages/detail/detail', name: 'detail', meta: { title: '详情', requireAuth: true } }
  ]
});
```

#### 方式 2：使用 `setRoutes` 或 `setRoutesMeta` 动态注入
```uts
import { setRoutes, setPageMetaJson } from '@/uni_modules/route-bestX';

// 批量注册数组
setRoutes([
  { path: '/pages/detail/detail', name: 'detail', meta: { title: '商品详情' } }
]);

// 或直接对接 vite-plugin-uni-pages 生成的 PAGE_META_JSON
// setPageMetaJson(PAGE_META_JSON);
```

---

## 七、标准错误码体系 (ROUTER_ERROR_CODE)

在 `router.afterEach((to, from, failure) => { ... })` 或 `router.onError((error) => { ... })` 中，可通过标准错误码对导航中断或失败进行精准捕获：

| 错误码 | 标识常量 | 触发场景与原因 |
| :--- | :--- | :--- |
| `101` | `GUARD_CANCELLED` | **守卫拦截**：全局前置守卫中调用了 `next(false)` 主动中断本次跳转 |
| `102` | `MAX_REDIRECT_EXCEEDED` | **重定向超限**：守卫内连续重定向超过 10 次触发安全熔断（防止死循环） |
| `201` | `BACK_STACK_DEPTH_INVALID` | **页面栈不足**：调用 `router.back()` 时当前已处于首屏或步长超出栈深度 |
| `202` | `NAVIGATE_BACK_FAILED` | **页面返回失败**：底层调用 `uni.navigateBack` 失败 |
| `301` | `NAVIGATE_TO_FAILED` | **保留跳转失败**：底层 `uni.navigateTo` 失败（页面未注册或页面栈达 10 层上限） |
| `302` | `REDIRECT_TO_FAILED` | **重定向失败**：底层 `uni.redirectTo` 失败 |
| `303` | `RELAUNCH_FAILED` | **重启应用失败**：底层 `uni.reLaunch` 失败 |
| `304` | `SWITCH_TAB_FAILED` | **底栏切换失败**：底层 `uni.switchTab` 失败（目标不在 TabBar 列表中） |

```uts
import { ROUTER_ERROR_CODE } from '@/uni_modules/route-bestX';

router.afterEach((to, from, failure) => {
  if (failure != null && failure.code == ROUTER_ERROR_CODE.GUARD_CANCELLED) {
    console.log('用户被守卫拦截，未进入受控页面');
  }
});
```

---

## 八、目录结构与规范

```text
uni_modules/route-bestX/
├── index.uts             # 模块核心统一门面出口
├── types.d.ts            # TypeScript 强类型补全
├── package.json          # 插件元信息（id: route-bestX）
├── readme.md             # 官方使用说明文档
├── changelog.md          # 版本更新历史
├── core/                 # 核心路由器实现（Router 实例类与调度流水线）
├── guard/                # 守卫处理器（beforeEach / afterEach / onError 驱动）
├── hooks/                # 组合式 Hook（useRouter / useRoute）
├── interceptor/          # 底层 API 拦截器（全端 navigateTo / navigateBack 拦截与防抖）
└── utils/                # URL 解析、快照深拷贝与 decodeSafe 容错工具
```

---

## 📄 开源与规范协议

- 本库遵循 **MIT** 开源协议。
- 专为 **uni-app X** 打造，全量遵循 UTS 强类型规范，零外部 npm 依赖。
