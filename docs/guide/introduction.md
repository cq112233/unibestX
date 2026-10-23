# 介绍

`unibestX` 是一套面向 **uni-app X** 的现代开发模板，目标是把原生渲染、工程规范、业务基础设施和 AI 协作能力组合成可直接开工的项目底座。

> 一套代码运行到 Android、iOS、鸿蒙、H5、微信小程序与支付宝小程序。

## 技术栈

| 类别 | 技术 | 说明 |
| :--- | :--- | :--- |
| 框架 | uni-app X | 原生渲染，默认 Vapor，兼容 VDOM |
| 语言 | UTS | 编译为 Kotlin / Swift / ArkTS / JS |
| UI 框架 | Vue 3 | Composition API + `<script setup>` |
| 构建 | Vite 5 | 快速启动与热更新 |
| 样式 | Tailwind CSS v4 | 原子化样式 + SCSS |
| 路由 | `route-bestX` | 对标 Vue Router 4 的路由与守卫体系 |
| 请求 | `request-bestX` | 请求实例、拦截器、缓存、`useQuery` / `useMutation` |
| 状态 | Pinia / `x-pinia-s` | 按运行模式自动切换实现 |
| 国际化 | `lime-i18n` | 中英文语言包与运行时切换 |
| 列表 | `z-paging-x` | 原生下拉刷新、分页与嵌套滚动 |

## 内置能力

- 自定义 TabBar：5 种运行模式、2 种 UI 形态、角标与中间鼓包按钮。
- 文件路由：自动扫描 `src/pages`、`src/sub`，通过 `definePage` 声明页面元数据。
- 路由守卫：登录、维护、权限编排与 TabBar 页面拦截。
- 请求体系：多域名实例、Token 注入、统一错误处理、上传下载与流式请求。
- 状态管理：Vapor、Web、小程序与 App VDOM 双实现自适应。
- 主题系统：`theme.json` 单源维护亮色 / 暗色配色，支持动态换肤。
- 工程化：ESLint、Stylelint、TypeScript、Vitest、Husky、Release 与包体积检查。
- AI 原生：内置 `unibestX-skill`，约束 UTS、页面、请求、路由和 TabBar 写法。

## 支持平台

| 平台 | 状态 | 说明 |
| :--- | :---: | :--- |
| Android | ✅ | Vapor / VDOM，原生 App |
| iOS | ✅ | Vapor / VDOM，需 macOS + Xcode |
| HarmonyOS | ✅ | 需 DevEco Studio |
| H5 | ✅ | 支持 Docker + Nginx 部署 |
| 微信小程序 | ✅ | HBuilderX 发行 |
| 支付宝小程序 | ✅ | HBuilderX 5.31+ |

## 分支说明

| 分支 | 定位 |
| :--- | :--- |
| `main` | 无内置 UI 组件库的纯净基线，原生组件 + Tailwind CSS |
| `uniX-rice-ui` | 集成 Rice UI，适合希望开箱即用的项目 |
| `uniX-uview-ultra` | 集成项目深度修复版 uview-ultra |

新项目若需要长期维护和完整组件生态，优先评估 `uniX-rice-ui`；需要保持最薄底座则使用 `main`。

## 下一步

- 第一次运行项目：[快速开始](/guide/getting-started)
- 配置底部导航：[TabBar 专题](/guide/tabbar)
- 页面跳转与守卫：[路由篇](/guide/route)
- 对接服务端：[请求篇](/guide/request)
- 生成接口类型：[自动生成接口](/guide/api-generator)
- 准备上线：[运行发布](/guide/release)

