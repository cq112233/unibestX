# uni-router-guard

uni-app X 的导航守卫运行时。零业务依赖：只依赖 `uni` 全局，不引 Pinia、不读项目配置。

拦截 `navigateTo` / `redirectTo` / `reLaunch` / `switchTab` / `navigateBack`，用 vue-router 3 的写法做裁决。

## 安装

把 `uni-router-guard` 放进 `uni_modules/`，在 `main.uts` 里创建一次：

```uts
import { createRouter } from '@/uni_modules/uni-router-guard';
import type { RouteTarget } from '@/uni_modules/uni-router-guard';

const router = createRouter({ debug: false });

router.beforeEach((to: RouteTarget, from: RouteTarget, next: (...args: Array<any>) => void): void => {
  console.log('前往', to.fullPath);
  next();
});

export function createApp() {
  // ...你自己的后续逻辑
}
```

## next 的四种形态

| 写法 | 结果 |
| --- | --- |
| `next()` | 放行，链条继续 |
| `next(null)` / `next(true)` | 放行 |
| `next('/login?a=1')` | 中止本次导航，改跳该地址 |
| `next(false)` | 中止本次导航，且不跳转 |
| 其他值 / 忘记调用 | 警告 + 中止（**fail-safe**：不静默放行） |

## 跳转门面

```uts
router.push('/src/pages/me/me?id=1');
router.push({ path: '/src/pages/me/me', query: { id: 1, tags: ['a', 'b'] } });
router.replace('/src/pages/login/login');
router.relaunch('/src/pages/index/index');
router.switchTab('/src/pages/me/me');
router.back();
router.back(2);
```

## 与 src/router 二选一

项目自带的 `src/router/`（登录白/黑名单策略）与本插件**同时安装会各自跑一条守卫链**，导致重复重定向。请只保留一个。

## 与 vue-router 的差异（已确认的三条）

1. **没有路由表**：没有 `routes`、命名路由、动态段、`<router-view>`，`to.params` 恒为空。
2. **`to.query` 是 `Map`**，读法是 `to.query.get('id')` 而不是 `to.query.id`（UTS 无法动态构造 `UTSJSONObject`）。
3. **`afterEach` 在放行时同步触发**，不是「导航确认成功后」。原因：uni 侧只有 interceptor 的 `success` 回调能代表成功，而它的跨平台行为没有官方说明。

## 平台支持

Android 真机已验证：**VDOM（Kotlin）与蒸汽 / 字节码两条通道都能编译通过并正常启动**（判据 `编译为android class` ≥ 1 且 `error:` 0 命中）。守卫链的裁决行为由 node harness 覆盖（`scripts/router-guard-test/`，52 条用例）。

**HarmonyOS 与小程序未验证**（`package.json` 的 `uni_modules.platforms` 里如实标为 `x`）。

## 已知边界

- 守卫必须是**同步**的（`uni.addInterceptor` 的 `invoke` 同步返回 boolean）。需要异步校验时：先 `next(false)` 拦下，异步完成后再自己跳。
- `push({ path, query })` 的对象形态**必须直接传字面量**。先存进带类型标注的变量再传，会在真机抛 `ClassCastException`。
- `router.uninstall()` 按 API 名整条移除，会一并移除你自己为同一 API 装的拦截器。
- 改跳目标若是 TabBar 页面，必须配 `resolveRedirectApi`：

```uts
const router = createRouter({
  resolveRedirectApi: (url: string): string => {
    return isTabbarPage(url) ? 'switchTab' : 'navigateTo';
  }
});
```

- `navigateBack` 被拦截时，`to` 取「上一页」；多级返回（`delta > 1`）一律按上一页处理。
