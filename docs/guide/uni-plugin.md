# uni 插件

项目通过 `uni_modules/` 管理跨端插件。业务代码只从插件**公开入口**导入，不要穿透到 `core/`、`hooks/` 等内部目录。

## 核心模块

| 模块 | 作用 |
| :--- | :--- |
| [`route-bestX`](/guide/route) | 路由引擎、`useRoute` / `useRouter`、全局守卫与页面快照 |
| [`request-bestX`](/guide/request) | 请求实例、拦截器、缓存、`useQuery` / `useMutation`、流式请求 |
| `x-pinia-s` | App VDOM 模式下的 Pinia 适配 |
| `z-paging-x` | 原生分页列表与下拉刷新 |
| `lime-i18n` | 多语言运行时 |
| `lime-icon` | Iconify / 字体 / SVG 图标集合 |
| `uni-icons` | 轻量字体图标组件 |
| `lime-shared` / `lime-use` / `lime-color` | 通用工具、组合式 hooks 与颜色能力 |

## 使用原则

```uts
// ✅ 从公开入口导入
import { useRoute, useRouter } from '@/uni_modules/route-bestX/index.uts';

// ❌ 不要穿透内部实现
import { useRoute } from '@/uni_modules/route-bestX/core/route.uts';
```

- 公共能力优先复用现有模块，不在页面里重复造轮子。
- 插件模块内部必须保持单向依赖，禁止循环依赖。
- Easycom 范围内的组件直接写短横线标签，不需要手动 import。
- 页面私有组件必须手动 import。
- 修改生态插件前先确认 Vapor / VDOM 与目标平台兼容性。

## 页面配置插件

项目还内置了 Vite 插件：

- `vite-plugin-uni-pages`：扫描页面并生成 `pages.json`。
- `uni-layouts-plugin`：把页面包进 `default` / `empty` / `navbar` 布局。
- `tabbarViewsPlugin`：根据 TabBar 配置生成单页容器。
- `root-plugin`：自动挂载全局根骨架。

`pages.json` 是生成物，页面配置请写在 `definePage` 或 `pages.config.json` 中。详见[文件路由与页面配置](/guide/uni-pages)。

