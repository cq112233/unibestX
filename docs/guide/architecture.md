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
| **HTTP 请求** | lime-request| uni-app X 兼容的现代化请求库 |
| **国际化** | lime-i18n | 兼容 vue-i18n 生态的多语言方案 |
| **图表库** | e-chart | ECharts 在 uni-app X 中的适配实现 |

## 📁 项目目录结构

```text
unibestX/
├── plugins/               # Vite 插件（包含自定义的布局、根组件注入插件）
├── src/
│   ├── api/               # 各个业务模块的 API 请求函数
│   ├── components/        # 公共 Vue/UTS 组件（NavBar, Tabs 等）
│   ├── http/              # HTTP 请求客户端封装与响应类型定义
│   ├── i18n/              # 国际化配置实例及语言包（zh-CN / en-US）
│   ├── layouts/           # 页面布局模板配置（如 default.uvue）
│   ├── pages/             # 主应用页面（通常是 TabBar 包含的页面）
│   ├── router/            # 全局路由拦截与登录黑白名单策略
│   ├── store/             # Pinia 状态管理（app, user, token）
│   ├── style/             # 全局样式（UnoCSS / SCSS）
│   ├── sub/               # 应用分包页面（登录页、组件演示、分页演示等）
│   ├── tabbar/            # 自定义 TabBar 组件及配置
│   └── utils/             # 全局工具函数（提示、系统信息、双击退出等）
├── uni_modules/           # uni-app 官方与第三方插件市场模块
├── js_sdk/                # JavaScript/UTS SDK 资源
├── App.ku.uvue            # 全局根组件，提供主题、全局 Toast 容器
├── main.uts               # 应用的入口文件
├── pages.json             # 页面路由表与构建配置
├── manifest.json          # 应用配置清单（AppID、权限等）
├── vite.config.ts         # Vite 构建配置（插件、别名等）
├── uni.scss               # 全局 SCSS 变量注入
└── tsconfig.json          # TypeScript/UTS 编译配置
```
