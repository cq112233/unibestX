<p align="center">
  <a href="https://github.com/cq112233/unibestX">
    <img width="160" src="https://uniappx.oss-cn-beijing.aliyuncs.com/logo.png" style="border-radius: 20px;" alt="unibestX Logo">
  </a>
</p>

<h1 align="center">
  <a href="https://github.com/cq112233/unibestX" target="_blank">unibestX - 最好的 uni-app X 开发框架</a>
</h1>

<div align="center">

[![GitHub Repo stars](https://img.shields.io/github/stars/cq112233/unibestX?style=flat&logo=github)](https://github.com/cq112233/unibestX)
[![GitHub forks](https://img.shields.io/github/forks/cq112233/unibestX?style=flat&logo=github)](https://github.com/cq112233/unibestX)
![node version](https://img.shields.io/badge/node-%3E%3D22-green)
![pnpm version](https://img.shields.io/badge/pnpm-%3E%3D7.30-green)
![GitHub package.json version](https://img.shields.io/github/package-json/v/cq112233/unibestX)
![unibest License](https://img.shields.io/github/license/cq112233/unibestX)

</div>

`unibestX` —— 最好的 `uni-app X` 开发模板，由 `uni-app X` + `Vue3` + `UTS` + `Vite5` + `UnoCSS` + `uview-ultra` + `z-paging-x` 构成，使用了下一代 uni-app 原生开发技术栈，通过 `HBuilderX` 运行 `Android`、`iOS`、`鸿蒙`、`H5` 和 `小程序` 等多端平台。

如果项目对您有帮助，请帮忙点个 **Star ⭐** 或 **赞 👍** 支持一下！您的鼓励是作者持续优化与维护的动力！

`unibestX` 内置了 `自定义 TabBar`、`Layout 布局`、`请求封装`、`请求拦截`、`登录拦截`、`路由守卫`、`UnoCSS`、`i18n 多语言`、`Pinia 状态管理`、`主题切换` 等基础功能，提供了 `代码提示`、`自动格式化`、`统一配置` 等辅助功能，让你编写 `uni-app X` 拥有 `best` 体验。

![](https://raw.githubusercontent.com/andreasbm/readme/master/screenshots/lines/rainbow.png)

<p align="center">
  <a href="https://uniapp.dcloud.net.cn/uni-app-x/" target="_blank">📖 uni-app X 官方文档</a>
</p>

***

## ✨ 特性

* 🚀 **uni-app X** — 基于 UTS 语言的原生渲染，性能远超 WebView 方案
* 💪 **Vue3 + Vite5** — 最新前端技术栈，开发体验极佳
* 🎨 **UnoCSS** — 原子化 CSS 引擎，高效编写样式
* 📦 **uview-ultra** — 专为 uni-app X 打造的 UI 组件库
* 📜 **z-paging-x** — 强大的分页列表组件
* 🔧 **Pinia 持久化** — 状态管理 + 本地持久化，开箱即用
* 🌐 **i18n 多语言** — 内置中英文切换，支持自动检测系统语言
* 🛡️ **路由守卫** — 黑名单/白名单策略，灵活的登录拦截
* 🌈 **动态主题** — CSS 变量驱动的主题切换
* 📊 **ECharts** — 图表组件支持
* 📱 **自定义 TabBar** — 支持凸起按钮和角标
* 🔌 **请求封装** — 基于lime-request，支持多域名、Token 自动续期

## 平台兼容性

| Android | iOS | 鸿蒙 | H5 | 微信小程序 |
| ------- | --- | -- | -- | ----- |
| √       | √   | √  | √  | √     |

> 注意：uni-app X 目前兼容以上 5 个端平台。

## ⚙️ 环境

* Node >= 22
* pnpm >= 7.30
* HBuilderX >= 4.0（推荐最新版）
* Vue Official >= 2.1.10
* TypeScript >= 5.0
* JDK >= 17（Android 平台）
* Android SDK（Android 平台）
* Xcode（iOS 平台，仅 macOS）
* DevEco Studio（鸿蒙平台）

## 📁 项目结构

    unibestX/
    ├── plugins/               # Vite 插件（布局、根组件注入）
    │   ├── uni-layouts-plugin.ts
    │   └── root-plugin.ts
    ├── src/
    │   ├── api/               # API 请求函数
    │   ├── components/        # 公共组件
    │   │   ├── NavBar/        #   导航栏组件
    │   │   ├── MySteps/       #   步骤条组件
    │   │   ├── MySubsection/  #   分段器组件
    │   │   └── MyTabs/        #   标签页组件
    │   ├── http/              # HTTP 请求封装
    │   │   ├── request.uts    #   HttpClient 类
    │   │   ├── types.uts      #   响应类型定义
    │   │   └── tools/enum.uts #   状态码枚举
    │   ├── i18n/              # 国际化
    │   │   ├── index.uts      #   i18n 实例
    │   │   └── locales/       #   语言包（zh-CN / en-US）
    │   ├── layouts/           # 页面布局
    │   │   └── default.uvue   #   默认布局
    │   ├── pages/             # 主页面（TabBar 页）
    │   │   ├── index/         #   首页
    │   │   ├── basic/         #   基础组件展示
    │   │   ├── function/      #   原生能力展示
    │   │   ├── ai/            #   AI 助手（Mock）
    │   │   └── me/            #   个人中心
    │   ├── router/            # 路由配置
    │   │   ├── config.uts     #   登录策略配置
    │   │   └── interceptor.uts#   全局路由拦截
    │   ├── store/             # Pinia 状态管理
    │   │   ├── index.uts      #   Pinia 实例 + 持久化插件
    │   │   ├── app.uts        #   应用状态（主题/语言）
    │   │   ├── token.uts      #   Token 状态（单/双 Token）
    │   │   └── user.uts       #   用户信息
    │   ├── style/             # 全局样式
    │   ├── sub/               # 分包页面
    │   │   ├── auth/          #   登录/注册
    │   │   ├── test/          #   URL 参数测试
    │   │   ├── paging/        #   分页列表演示
    │   │   └── uview-ultra/   #   UI 组件展示
    │   ├── tabbar/            # 自定义 TabBar
    │   │   ├── index.uvue     #   TabBar 容器
    │   │   ├── TabbarItem.uvue#   TabBar 项
    │   │   ├── config.uts     #   TabBar 配置
    │   │   ├── store.uts      #   TabBar 状态
    │   │   └── types.uts      #   类型定义
    │   └── utils/             # 工具函数
    │       ├── backPress.uts  #   双击退出
    │       ├── i18n.uts       #   i18n 辅助
    │       ├── systemInfo.uts #   屏幕信息
    │       ├── toLoginPage.uts#   登录跳转
    │       └── toast.uts      #   全局 Toast
    ├── uni_modules/           # uni-app 插件市场模块
    ├── js_sdk/                # JS SDK（UnoCSS 等）
    ├── App.ku.uvue            # 全局根组件（主题/TabBar/Toast）
    ├── main.uts               # 应用入口
    ├── pages.json             # 页面路由配置
    ├── manifest.json          # 应用配置清单
    ├── vite.config.ts         # Vite 构建配置
    ├── uni.scss               # 全局 SCSS 变量
    └── tsconfig.json          # TypeScript 配置

## 📂 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/cq112233/unibestX.git
cd unibestX
```

### 2. 安装依赖

在运行项目之前，请先在控制台执行以下命令安装项目所需的 Node 依赖：

```bash
pnpm install
```

### 3. 打开项目

使用 **HBuilderX** 打开项目根目录。

## 📦 运行（支持热更新）

### 1. 命令行 (CLI) 运行方式

可以通过命令行直接运行和调试 **H5** 以及 **微信小程序**：

* **H5 平台**：在项目根目录下执行 `pnpm dev`（等同于 `pnpm dev:h5`）
* **微信小程序**：在项目根目录下执行 `pnpm dev:mp-weixin`

### 2. 命令行 (CLI) 打包方式

可以通过命令行直接打包和构建 **H5** 以及 **微信小程序**：

* **H5 平台**：在项目根目录下执行 `pnpm build`（等同于 `pnpm build:h5`）
* **微信小程序**：在项目根目录下执行 `pnpm build:mp-weixin`

### 3. HBuilderX 运行方式

对于 App 平台（Android、iOS、鸿蒙），建议通过 **HBuilderX** 启动：

* **Android 平台**：在 HBuilderX 中选择 `运行 → 运行到手机或模拟器`，选择目标设备即可。
* **iOS 平台**：在 HBuilderX 中选择 `运行 → 运行到手机或模拟器`，选择 iOS 设备（需 macOS + Xcode 环境）。
* **鸿蒙平台**：在 HBuilderX 中选择 `运行 → 运行到手机或模拟器`，选择鸿蒙设备（需 DevEco Studio 环境）。
* **H5 平台**：在 HBuilderX 中选择 `运行 → 运行到浏览器`。
* **微信小程序**：在 HBuilderX 中选择 `运行 → 运行到小程序模拟器 → 微信开发者工具`。

## 🔗 发布

* **Android 平台**：在 HBuilderX 中选择 `发行 → 原生App-云打包` 或 `原生App-本地打包`。
* **iOS 平台**：在 HBuilderX 中选择 `发行 → 原生App-云打包`（需 Apple 开发者证书）。
* **鸿蒙平台**：在 HBuilderX 中选择 `发行 → 原生App-鸿蒙`。
* **H5 平台**：在 HBuilderX 中选择 `发行 → 网站-H5手机版`，打包后的文件在 `dist/build/h5`。
* **微信小程序**：在 HBuilderX 中选择 `发行 → 小程序-微信`，然后通过微信开发者工具上传。

## 🧩 核心功能说明

### 自定义 TabBar

内置自定义 TabBar 组件，支持：

* 5 个 Tab 项配置
* 中间凸起按钮（如 AI 入口）
* 角标显示
* 动态主题色

### 路由守卫

提供灵活的登录拦截策略：

* **黑名单模式**（默认）：仅指定页面需要登录
* **白名单模式**：除指定页面外，全部需要登录
* 支持登录后自动跳回原页面

### 请求封装

基于 `lime-request` 封装的 HTTP 客户端：

* 自动携带 Token
* 请求/响应拦截器
* 多域名支持
* 401 自动登出
* 支持忽略认证的请求

### 状态管理

基于 `x-pinia-s`（Pinia for uni-app X）：

* `AppStore` — 主题色、语言设置
* `TokenStore` — 支持单 Token 和双 Token（access + refresh）模式
* `UserStore` — 用户信息管理
* 内置持久化插件，自动同步到本地存储

### i18n 多语言

基于 `lime-i18n` 的国际化方案：

* 内置中文（zh-CN）和英文（en-US）
* 自动检测系统语言
* VSCode i18n-ally 插件支持
* 非 Vue 文件中也可使用翻译函数

### Layout 布局

通过自定义 Vite 插件实现：

* 自动为页面包裹 Layout 组件
* 支持页面级别 `<route>` 配置自定义布局
* 可通过 `layout: false` 禁用布局

## 🔧 技术栈详情

| 类别      | 技术                    | 说明                                     |
| ------- | --------------------- | -------------------------------------- |
| 框架      | uni-app X             | 下一代 uni-app，原生渲染                       |
| 语言      | UTS                   | uni-app Type Script，编译为原生 Kotlin/Swift |
| 前端框架    | Vue 3                 | Composition API                        |
| 构建工具    | Vite 5                | 极速开发体验                                 |
| CSS 引擎  | UnoCSS                | 原子化 CSS，自定义规则                          |
| UI 组件库  | uview-ultra           | uni-app X 专用 UI 库                      |
| 分页组件    | z-paging-x            | 强大的下拉刷新 + 分页加载                         |
| 状态管理    | x-pinia-s (Pinia)     | uni-app X 版 Pinia                      |
| HTTP 请求 | lime-request          | uni-app X 兼容请求库                        |
| 国际化     | lime-i18n             | vue-i18n 兼容方案                          |
| 图表      | e-chart               | ECharts for uni-app X                  |
| 图标      | uni-icons + lime-icon | 双图标方案                                  |

## ⚠️ UTS 开发注意事项

1. **文件扩展名**：使用 `.uts`（逻辑代码）和 `.uvue`（页面/组件），而非 `.ts` 和 `.vue`
2. **类型系统**：UTS 不支持 `undefined`，联合类型仅限 `null`；使用 `==` 而非 `===`
3. **CSS 限制**：部分 CSS 属性在原生平台不支持，具体参考 [uni-app X 文档](https://uniapp.dcloud.net.cn/uni-app-x/)
4. **API 限制**：原生平台不支持浏览器 API（如 `window`、`document`、`localStorage` 等）
5. **SCSS 变量**：支持 SCSS 变量，但动态覆盖需使用 CSS 变量方式

> \[!IMPORTANT]
> **安卓端语法最严**：Android 编译器的 UTS 类型与语法校验是所有平台中最严格的。一般如果 Android 端编译正常通过，其他平台（H5、微信小程序、iOS等）通常都不会有大问题。

## 🙏 参考

本项目参考自 [unibest](https://github.com/unibest-tech/unibest)，官网地址：<https://unibest.tech/>

## 📄 License

[MIT](https://opensource.org/license/mit/)

Copyright (c) 2026 HTwoO

## 请作者喝杯咖啡 ☕

如果你觉得这个项目好用，可以请作者喝杯咖啡 ☕

<p align='center'>
<img alt="微信收款码" src="https://uniappx.oss-cn-beijing.aliyuncs.com/wx.jpg" height="330" style="display:inline-block; height:330px;">
