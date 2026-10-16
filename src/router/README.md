# src/router 业务路由层（基于 route-bestX）

本项目路由系统采用分层架构设计：

- **底层路由引擎**：[`@/uni_modules/route-bestX`](../../uni_modules/route-bestX/readme.md)（纯 UTS、对标 Vue Router 标准、快照隔离、全平台导航拦截）
- **业务路由层**：`src/router/`（组装全局前置守卫、登录态拦截、TabBar 桥接与业务配置）

---

## 目录结构

```text
src/router/
├── index.uts         # 路由入口：初始化并导出 router 单例，支持 app.use(router)
├── guards/           # 业务前置守卫：流水线编排 (index.uts) 与纯函数鉴权 (guardLogin.uts)
├── config.uts        # 路由业务配置：LOGIN_PAGE、REGISTER_PAGE、受保护页面名单
└── README.md         # 架构与使用文档
```

---

## 快速使用

### 1. 页面中使用 Hooks

业务页面直接通过标准 hooks 读取当前路由与触发跳转：

```html
<script setup lang="uts">
import { useRoute, useRouter } from '@/src/router/index.uts';

const route = useRoute();
const router = useRouter();

function goToDetail() {
  router.push('/src/sub/detail/detail?id=123');
}
</script>
```

### 2. 全局守卫配置

在 `src/router/guards/index.uts` 中维护全局导航守卫：

```uts
export function setupRouteGuards(router: Router): void {
  router.beforeEach((to, from, next) => {
    // 检查登录态或权限
    if (needLogin(to.path) && !isLoggedIn()) {
      next(`/src/sub/auth/login?redirect=${encodeURIComponent(to.fullPath)}`);
    } else {
      next();
    }
  });
}
```

### 3. 应用挂载

在 `main.uts` 中通过标准 Vue 插件语法注册：

```uts
import router from '@/src/router/index.uts';

export function createApp() {
  const app = createSSRApp(App);
  app.use(router);
  app.config.globalProperties.$router = router;
  // ...
}
```
