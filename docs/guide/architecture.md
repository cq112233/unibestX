# 技术架构与目录结构

`unibestX` 基于最新的前端构建工具和 uni-app 原生渲染技术，旨在提供极致的性能和开发体验。

## 🛠️ 核心技术栈

| 类别 | 技术 | 说明 |
| :--- | :--- | :--- |
| **框架** | uni-app X | 下一代 uni-app，基于原生渲染，彻底告别 Webview 的性能瓶颈 |
| **语言** | UTS | uni-app Type Script，编译期直接转换为原生 Kotlin(Android) 和 Swift(iOS) |
| **前端框架** | Vue 3 | 采用 Composition API 编写 UI 逻辑 |
| **构建工具** | Vite 5 | 提供极速的本地开发启动与热更新体验 |
| **CSS 引擎** | UnoCSS | 按需生成的原子化 CSS，轻量且高效 |
| **UI 组件库** | uview-ultra | 专为 uni-app X 深度重构的组件库，修复了原生 `gap`/`grid` 等布局限制 |
| **分页组件** | z-paging-x | 提供强大的下拉刷新与分页列表加载体验 |
| **状态管理** | x-pinia-s | 兼容 uni-app X 的 Pinia 方案 |
| **HTTP 请求** | lime-request | uni-app X 兼容的现代化请求库 |
| **国际化** | lime-i18n | 兼容 vue-i18n 生态的多语言方案 |
| **图表库** | e-chart | ECharts 在 uni-app X 中的适配实现 |

## 📁 项目目录结构

```text
unibestX/
├── plugins/                  # Vite 构建插件（自定义布局插件、根组件注入插件）
│   ├── uni-layouts-plugin.ts #   自动布局插件（仿 vite-plugin-uni-layouts）
│   └── root-plugin.ts        #   自动包裹 App.ku.uvue 根组件插件
├── src/
│   ├── api/                  # 业务模块 API 请求函数（foo.uts, user.uts, auth.uts 等）
│   ├── assets/               # 静态资源（图标、图片）
│   ├── components/           # 公共业务组件（NavBar 自定义通用导航栏）
│   ├── http/                 # HTTP 客户端封装（基于 lime-request，拦截器与错误处理）
│   ├── i18n/                 # 国际化多语言配置（zh-Hans / en 语言包）
│   ├── layouts/              # 页面布局模板（如 default.uvue）
│   ├── pages/                # 主应用页面（首页、基础组件展示、原生能力展示、AI助手、个人中心）
│   ├── router/               # 全局路由拦截器与登录白名单策略
│   ├── store/                # Pinia 状态管理与持久化（app, token, user）
│   ├── style/                # 全局样式（UnoCSS / SCSS）
│   ├── sub/                  # 应用分包页面（auth, paging, test, uiTest, uview-ultra 等）
│   ├── tabbar/               # 自定义 TabBar 组件与状态配置
│   ├── types/                # 全局类型定义
│   └── utils/                # 全局工具函数（toast, systemInfo, env, backPress 等）
├── uni_modules/              # uni-app 扩展插件模块
│   ├── unix-crypto/          #   全端跨平台加密解密与安全工具库
│   ├── uview-ultra/          #   uni-app X 深度定制 UI 组件库
│   ├── z-paging-x/           #   uni-app X 深度定制分页列表组件
│   ├── iRainna-lodash/       #   UTS 版 Lodash 工具库
│   ├── lime-request/         #   HTTP 请求库
│   ├── lime-signature/       #   手写签名板组件
│   └── e-chart/              #   ECharts 图表适配组件
├── js_sdk/                   # JS / UTS SDK 资源（UnoCSS 解析引擎等）
├── docs/                     # VitePress 文档源码
├── App.ku.uvue               # 全局根包裹组件（动态主题注入、全局 Toast 容器）
├── main.uts                  # 应用的入口文件
├── pages.json                # 页面路由表、分包与构建配置
├── manifest.json             # 应用配置清单（多端 AppID、权限等）
├── vite.config.ts            # Vite 构建配置（UnoCSS 规则、插件与别名）
├── uni.scss                  # 全局 SCSS 变量与主题注入
└── tsconfig.json             # TypeScript / UTS 编译配置
```
