<p align="center">
  <a href="https://github.com/cq112233/unibestX">
    <img width="160" src="https://i.ibb.co/rhtd2V7/logo.png" style="border-radius: 20px;" alt="unibestX Logo">
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

> 💡 **HBuilderX 版本建议**
>
> - 推荐使用 **HBuilderX 5.21 及以上版本**：全面支持 **Android / iOS / 鸿蒙三端蒸汽（Vapor）模式**；
> - 最好升级至最新 **HBuilderX 5.24 版本**，完整体验无虚拟 DOM 高性能原生渲染；
> - 旧版本可切换 **VDOM 模式**（`manifest.json` 中 `"vapor": false`）稳定运行。

> ⚡ **渲染模式与 UI 组件库重要说明**
>
> 1. 🚀 **main 分支全面兼容 VDOM 模式与 Vapor 模式（默认 Vapor 蒸汽模式）**：
>    - `main` 分支现已全面兼通 Vue3 传统 **VDOM 模式** 与 **Vapor 模式**（蒸汽模式，无虚拟 DOM 高性能原生渲染）；
>    - **默认采用 Vapor 蒸汽模式**，开发者可在 `manifest.json` 中按需切换回 VDOM 模式。
> 2. 📦 **关于 uview-ultra 组件库**：
>    - `main` 分支内置了深度修复版的 `uview-ultra`，已全面适配多端与 VDOM/Vapor 模式，常用基础功能**基本够用**；
>    - 因个人精力有限，作者后续将**不再对 uview-ultra 进行维护与定制更新**。
> 3. 🌟 **推荐分支：`uniX-rice-ui`（有团队持续维护）**：
>    - 如需长期维护、享受官方团队持续迭代更新的 UI 组件库，强烈推荐切换使用 **`uniX-rice-ui`** 分支（集成 Rice UI 官方支持，团队持续更新，完美支持 VDOM 与 Vapor 模式）。
>
> ```bash
> # 切换至 uniX-rice-ui 分支
> git checkout uniX-rice-ui
> ```

> ⚠️ **三方组件库与插件修改说明**
>
> 本项目内置的 **`z-paging-x`** 分页组件（如 [z-paging-x.uvue](file:///Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue)）已由作者进行了**深度定制修改与修复**，专门用于兼容 `uni-app X` 各端平台（特别针对 Android 原生嵌套手势协商、`type="nested"` 架构支持以及各端 CSS 解析限制等进行了优化）。
> **提示**：请勿直接从官方插件市场重新下载覆盖。若从官方重新下载安装，可能会导致多端兼容性与手势机制失效，届时请务必重新测试与调试！

`unibestX` —— 最好的 `uni-app X` 开发模板，由 `uni-app X` + `Vue3` + `UTS` + `Vite5` + `Tailwind CSS` + `uview-ultra` + `z-paging-x` 构成，使用了下一代 uni-app 原生开发技术栈，通过 `HBuilderX` 运行 `Android`、`iOS`、`鸿蒙`、`H5` 和 `小程序` 等多端平台。

👉 **在线 H5 演示体验**：[https://cq112233.github.io/unibestX/](https://cq112233.github.io/unibestX/)

📱 **手机扫码体验**👇

<img src="https://i.ibb.co/bjcVVxbV/qr-code.png" width="160" alt="H5 演示二维码" />

📖 **官方文档地址**：[https://cq112233.github.io/unibestX/docs/](https://cq112233.github.io/unibestX/docs/)

🐙 **GitHub 仓库地址**：[https://github.com/cq112233/unibestX](https://github.com/cq112233/unibestX)

🍊 **Gitee 镜像仓库**：[https://gitee.com/htwoO-cq/uni-best-x](https://gitee.com/htwoO-cq/uni-best-x)

如果项目对您有帮助，请帮忙点个 **Star ⭐** 或 **赞 👍** 支持一下！您的鼓励是作者持续优化与维护的动力！

`unibestX` 内置了 `自定义 TabBar`、`Layout 布局`、`请求封装`、`请求拦截`、`登录拦截`、`路由守卫`、`Tailwind CSS`、`i18n 多语言`、`Pinia 状态管理`、`主题切换` 等基础功能，提供了 `代码提示`、`自动格式化`、`统一配置` 等辅助功能，让你编写 `uni-app X` 拥有 `best` 体验。

![](https://raw.githubusercontent.com/andreasbm/readme/master/screenshots/lines/rainbow.png)

<p align="center">
  <a href="https://uniapp.dcloud.net.cn/uni-app-x/" target="_blank">📖 uni-app X 官方文档</a>
</p>

***

## 📂 快速开始

### 1. 创建 / 克隆项目与分支选择

- **方式一：通过 `degit` 快速创建（推荐，无历史提交记录）**：

  ```bash
  # 主分支（main，默认 Vapor 蒸汽模式，全面兼通 VDOM & Vapor）
  npx degit cq112233/unibestX my-project

  # Rice UI 官方支持分支（强烈推荐，团队持续维护，支持 VDOM & Vapor 模式）
  npx degit cq112233/unibestX#uniX-rice-ui my-project
  ```

- **方式二：通过 `git clone` 克隆**：

  ```bash
  # GitHub
  git clone https://github.com/cq112233/unibestX.git
  cd unibestX

  # Gitee（国内加速推荐）
  git clone https://gitee.com/htwoO-cq/uni-best-x.git
  cd uni-best-x

  # 或克隆 Rice UI 官方支持分支（推荐）
  git clone -b uniX-rice-ui https://github.com/cq112233/unibestX.git
  cd unibestX
  ```

### 2. 安装依赖

进入项目目录后，在控制台执行以下命令安装 Node 依赖：

```bash
pnpm install
```

### 3. 运行项目（支持热更新）

项目支持 **命令行 (CLI)** 与 **HBuilderX 图形界面** 两种开发运行方式：

#### 🖥️ 方式一：命令行 CLI 运行

> ⚠️ **使用 CLI 命令前，必须先启动 HBuilderX**（推荐 **HBuilderX 5.24+**）。CLI 命令本质是通过正在运行的 HBuilderX 来编译运行项目，未打开时会报「未找到 HBuilderX」；App 端（Android / iOS / 鸿蒙）编译只能由 HBuilderX 完成。

```bash
# 运行到 H5 / Web 端
pnpm dev:web

# 运行到 Android 原生端
pnpm dev:app-android

# 运行到 iOS 模拟器（需 macOS + Xcode 环境）
pnpm dev:app-ios

# 运行到 iOS 真机（需连接 iPhone 并信任此电脑）
pnpm dev:app-ios:device

# 运行到 鸿蒙原生端（需 DevEco Studio 环境）
pnpm dev:app-harmony

# 运行到 微信小程序
pnpm dev:mp-weixin
```

> 💡 **开发模式**：可以使用命令（`pnpm dev:*`）运行，但前提是 HBuilderX 已打开。

#### 🛠️ 方式二：HBuilderX 图形化运行

使用 **HBuilderX** 打开项目根目录，在顶部菜单中选择：

- **Android 平台**：在 HBuilderX 中选择 `运行 → 运行到手机或模拟器`，选择连接的 Android 设备即可。
- **iOS 平台**：在 HBuilderX 中选择 `运行 → 运行到手机或模拟器`，选择 iOS 设备（需 macOS + Xcode 环境）。
- **鸿蒙平台**：在 HBuilderX 中选择 `运行 → 运行到手机或模拟器`，选择鸿蒙设备（需 DevEco Studio 环境）。
- **H5 平台**：在 HBuilderX 中选择 `运行 → 运行到浏览器`。
- **微信小程序**：在 HBuilderX 中选择 `运行 → 运行到小程序模拟器 → 微信开发者工具`。

### 4. 打包与发布

#### 🖥️ 命令行打包构建

##### 🖥️ H5：在自己服务器 / CI 上打包（推荐）

> H5 支持在**自己的服务器 / CI 上打包**，脚本调用 HBuilderX 官方 CLI（`cli publish`）完成构建，产物完整（包含 `src/sub` 分包页面）。⚠️ 纯 CLI 的 `uni build` 产物不完整（分包页面不会编译进去），请勿使用。

```bash
# 1. 切换打包环境（默认是生产环境，打测试包才需要切换）
pnpm env:test    # 打测试包：生成 .env.production.local（不影响 git）
pnpm env:prod    # 恢复生产环境：删除 .env.production.local

# 2. 打包 H5，产物输出到 unpackage/dist/build/web
pnpm build:h5
```

**环境文件（四件套）：**

| 文件 | 用途 |
| :--- | :--- |
| `.env` | 公用变量，所有环境都会加载 |
| `.env.development` | 开发环境，HBuilderX 运行 / `pnpm dev:*` 自动加载 |
| `.env.test` | 测试环境，`pnpm env:test` 后打测试包 |
| `.env.production` | 生产环境，默认即此环境，打正式包无需切换 |

> 💡 `pnpm env:test` 会把「公用 + 测试」合并写入 `.env.production.local`（Vite 生产模式优先加载它），`pnpm env:prod` 删除它即恢复生产，四个 env 文件本身不会被动修改。

**接口地址（`VITE_SERVER_BASEURL`）各端规则：**

- **H5**：通过 `.env` 配置项 `VITE_H5_USE_PROXY` 切换——`true` 走反向代理（请求 `/api`，开发配 `vite.config.ts` 的 `server.proxy`，生产配 `deploy/nginx.conf`）；`false` 直连 `VITE_SERVER_BASEURL` 完整域名（默认）。切换只改配置，不用动代码。
- **微信小程序 / App**（蒸汽与 vdom 模式）：统一读取 `VITE_SERVER_BASEURL`，固定直连完整域名；若误配 `/api` 相对路径会自动回退为默认完整域名。
- **微信小程序**：需在微信公众平台后台配置 request 合法域名。

**服务器要求：**

- 安装 HBuilderX 官方 **Linux 版**（常见安装目录 `/opt/hbuilderx/HBuilderX`，命令行工具为 `cli`），或设置环境变量指定路径：`export HBUILDERX_CLI_PATH=/opt/hbuilderx/HBuilderX/cli`。
- macOS / Windows 本机打包同样支持，脚本会自动查找常见安装路径（macOS 为 `/Applications/HBuilderX.app/Contents/MacOS/cli`）。
- 脚本在构建前后会自动备份并还原 `pages.json`，不会污染工作区。

> ⚠️ **App 端（Android / iOS / 鸿蒙）与小程序发布仍需使用 HBuilderX**：原生 App 云打包 / 小程序上传依赖 HBuilderX 发行能力，命令行仅支持 H5。

#### 🛠️ HBuilderX 发行打包

- **Android 平台**：在 HBuilderX 中选择 `发行 → 原生App-云打包` 或 `原生App-本地打包`。
- **iOS 平台**：在 HBuilderX 中选择 `发行 → 原生App-云打包`（需 Apple 开发者证书）。
- **鸿蒙平台**：在 HBuilderX 中选择 `发行 → 原生App-鸿蒙`。
- **H5 平台**：在 HBuilderX 中选择 `发行 → 网站-H5手机版`，打包后的文件在 `unpackage/dist/build/web`。
- **微信小程序**：在 HBuilderX 中选择 `发行 → 小程序-微信`，然后通过微信开发者工具上传。

## 📦 推荐的 UI 组件库

`unibestX` 提供了多分支与多种 UI 组件库选择，你可以根据项目架构与需求灵活选用：

| 组件库 | 简介 | 推荐分支 / 官网地址 | 维护状态 |
| :--- | :--- | :--- | :--- |
| **Rice UI（强烈推荐）** | 专为 uni-app X 打造的现代 UI 组件库，**完美支持 Vapor 蒸汽模式与 VDOM 模式无缝切换**，由 Rice UI 官方团队持续维护与技术支持。 | **`uniX-rice-ui` 分支** / [https://riceui.cn/](https://riceui.cn/) | 团队持续维护与迭代 |
| **uview-ultra** | 专为 uni-app X 打造的 UI 库，本项目 main 分支内置了深度修复版，已全面兼容 Vapor/VDOM 模式，基础功能基本够用。 | **`main` 分支** / [https://uview-ultra.lingyun.net/](https://uview-ultra.lingyun.net/) | 已停止后续维护与定制 |
| **TMUI** | 功能丰富、高度可定制的企业级组件库，提供完善的业务组件和主题系统。 | [https://tmui.design/](https://tmui.design/) | 社区维护 |
| **Lime UI** | 社区活跃的 uni-app X 组件库，组件风格清新，覆盖常用移动端场景。 | [https://limex.qcoon.cn/](https://limex.qcoon.cn/) | 社区维护 |

> 💡 **选型与分支建议**：
>
> 1. **主分支（`main`）**：全面兼容 **VDOM 模式** 与 **Vapor 模式**（**默认采用 Vapor 蒸汽模式**）。内置了作者深度修复的 `uview-ultra` 组件库，常用基础组件功能完备、**基本够用**。但由于个人精力有限，作者后续将**不再对其进行维护与后续定制**。
> 2. **`uniX-rice-ui` 分支（强烈推荐）**：集成了由 **Rice UI 官方团队持续维护** 的组件库，同样完美支持 VDOM 和 Vapor 模式。若有新项目或需要长期维护支持，强烈建议选用 **`uniX-rice-ui`** 分支。

## ✨ 特性

- 🚀 **uni-app X (VDOM & Vapor 全面兼容)** — 默认启用传统 VDOM 模式，同时完美兼容 Vapor 蒸汽模式（无虚拟 DOM 高性能原生渲染）自由切换
- 💪 **Vue3 + Vite5** — 最新前端技术栈，开发体验极佳
- 🎨 **Tailwind CSS** — 原子化 CSS 引擎（v4 + weapp-tailwindcss），高效编写样式
- 📦 **uview-ultra** — 专为 uni-app X 打造的 UI 组件库（内置深度修复版，已全面兼容 VDOM 与 Vapor 模式，常用基础功能完备，基本够用；后续不再单独维护与定制）
- 📜 **z-paging-x** — 强大的分页列表组件（本项目已对 [z-paging-x.uvue](file:///Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue) 底层 Android 嵌套手势协商、Flex 布局及 `type="nested"` 架构进行了深度兼容修改与适配）
- 🔧 **Pinia 持久化** — 状态管理 + 本地持久化，开箱即用
- 🌐 **i18n 多语言** — 内置中英文切换，支持自动检测系统语言
- 🛡️ **路由守卫** — 黑名单/白名单策略，灵活的登录拦截
- 🌈 **动态主题** — CSS 变量驱动的主题切换
- 📊 **ECharts** — 图表组件支持
- 📱 **底部 TabBar 体系** — 支持 4 种策略模式（原生/带页面缓存自定义/纯自定义/无）、2 种视觉形态（悬浮胶囊 Dock 岛与标准凸起鼓包）、角标徽标与全端动态主题联动
- 🔌 **请求封装** — 基于lime-request，支持多域名、Token 自动续期

## 平台兼容性

| Android | iOS | 鸿蒙 | H5 | 微信小程序 |
| ------- | --- | -- | -- | ----- |
| √ | √ | √ | √ | √ |

> 注意：uni-app X 目前兼容以上 5 个端平台。

## 📱 各端首页截图

<p align="center">
  <img src="https://i.ibb.co/xS0ssKm9/wxxcx.png" width="19%" alt="微信小程序" />
  <img src="https://i.ibb.co/cSJ8wPbn/android.png" width="19%" alt="Android" />
  <img src="https://i.ibb.co/Fbzwbzsx/h5.png" width="19%" alt="H5" />
  <img src="https://i.ibb.co/7dpytqFJ/ios.png" width="19%" alt="iOS" />
  <img src="https://i.ibb.co/MxXrjGq9/hm.png" width="19%" alt="鸿蒙" />
</p>

<p align="center">
  微信小程序 &nbsp;&nbsp;|&nbsp;&nbsp; Android &nbsp;&nbsp;|&nbsp;&nbsp; H5 &nbsp;&nbsp;|&nbsp;&nbsp; iOS &nbsp;&nbsp;|&nbsp;&nbsp; 鸿蒙
</p>

## ⚙️ 环境

- Node >= 22
- pnpm >= 7.30
- HBuilderX >= 5.21（全面支持三端 Vapor 蒸汽模式；建议升级至最新 **HBuilderX 5.24**；旧版本可切换 VDOM 模式运行）
- Vue Official >= 2.1.10
- TypeScript >= 5.0
- JDK >= 17（Android 平台）
- Android SDK（Android 平台）
- Xcode（iOS 平台，仅 macOS）
- DevEco Studio（鸿蒙平台）

## 📁 项目结构

```text
unibestX/
├── plugins/                  # Vite 构建插件
│   ├── vite-plugin-uni-pages.ts #   自动文件路由插件（生成 pages.json / definePage 支持）
│   ├── uni-layouts-plugin.ts #   跨端 Layout 布局插件（支持 default/empty 及自定义布局）
│   └── root-plugin.ts        #   自动包裹 App.ku.uvue 全局根骨架组件
├── pages.config.json         # 页面路由与全局配置文件（⚠️ 路由与页面配置请在此处修改，勿直接修改 pages.json）
├── src/
│   ├── api/                  # API 请求模块（foo.uts, user.uts, auth.uts 等）
│   ├── assets/               # 静态资源（图标、图片等）
│   ├── components/           # 公共业务组件
│   │   └── NavBar/           #   自定义通用导航栏组件（NavBar.uvue）
│   ├── http/                 # HTTP 客户端封装（基于 lime-request）
│   │   ├── request.uts       #   HttpClient 核心类与拦截器
│   │   ├── types.uts         #   HTTP 响应与请求类型定义
│   │   └── tools/enum.uts    #   HTTP 状态码与业务枚举
│   ├── i18n/                 # 国际化多语言
│   │   ├── index.uts         #   i18n 实例与响应式切换
│   │   └── locales/          #   中英文语言包（zh-Hans / en）
│   ├── layouts/              # 页面布局模板
│   │   ├── default.uvue      #   默认页面布局
│   │   └── empty.uvue        #   空白全屏布局
│   ├── pages/                # 主包页面（TabBar 页面）
│   │   ├── index/            #   首页（概览、常用入口）
│   │   ├── basic/            #   基础组件与工具演示（Crypto、Lodash、HTTP、Dayuts 等）
│   │   ├── function/         #   原生能力展示（设备、系统信息、扫码等）
│   │   ├── ai/               #   AI 助手对话演示
│   │   └── me/               #   个人中心与系统设置
│   ├── router/               # 路由守卫与导航控制
│   │   ├── config.uts        #   页面登录白名单/黑名单策略
│   │   └── interceptor.uts   #   全局路由跳转拦截器
│   ├── store/                # Pinia 状态管理
│   │   ├── index.uts         #   Pinia 实例与本地持久化插件
│   │   ├── app.uts           #   应用全局状态（主题、语言等）
│   │   ├── token.uts         #   Token 鉴权状态（单/双 Token 自动续期）
│   │   └── user.uts          #   当前登录用户信息
│   ├── style/                # 全局样式（Tailwind、变量等）
│   ├── sub/                  # 应用分包页面（按需加载）
│   │   ├── auth/             #   登录、注册、找回密码
│   │   ├── paging/           #   z-paging-x 分页列表各种场景演示
│   │   ├── test/             #   页面间参数传递测试
│   │   └── uiTest/           #   UI 测试与排版页面
│   ├── tabbar/               # 底部 TabBar 体系
│   │   ├── custom/           #   悬浮胶囊 TabBar（悬空圆角 Dock 栏风格）
│   │   │   └── index.uvue    #     悬浮胶囊组件
│   │   ├── helper/           #   TabBar 状态与辅助工具
│   │   │   ├── index.uts     #     TabBar 策略、安全路由跳转与主题 Token 辅助
│   │   │   └── store.uts     #     TabBar 选中状态管理与响应式数据
│   │   ├── TabbarItem.uvue   #   单个 Tab 项与角标（标准底座）
│   │   ├── index.uvue        #   标准自定义 TabBar（带中间凸起鼓包 midButton）
│   │   ├── config.uts        #   TabBar 统一配置（对齐 pages.json 规范，支持 type 风格切换）
│   │   └── types.uts         #   TabBar 强类型定义
│   ├── types/                # 全局 TypeScript / UTS 类型定义
│   │   └── uni.d.ts          #   definePage 宏、Vue 宏与全局 API 类型补全
│   └── utils/                # 全局工具函数
│       ├── upload.uts        #   文件上传封装（基于原生 uni.uploadFile，支持 OSS 上传与动态 BaseURL）
│       ├── toast.uts         #   全局 Toast 轻提示
│       ├── systemInfo.uts    #   屏幕与系统信息获取
│       ├── backPress.uts     #   Android 物理返回键双击退出
│       ├── toLoginPage.uts   #   跳转登录页逻辑封装
│       └── i18n.uts          #   多语言辅助工具
├── uni_modules/              # uni-app 扩展插件模块
│   ├── unix-crypto/          #   全端跨平台加密解密库（AES/DES/RSA/MD5/SHA/HMAC/Base64/UUID）
│   ├── uview-ultra/          #   针对 uni-app X 深度优化适配的 UI 组件库
│   ├── z-paging-x/           #   针对 uni-app X 深度优化适配的分页组件
│   ├── iRainna-lodash/       #   UTS 版 Lodash 工具库
│   ├── lime-request/         #   HTTP 请求核心库
│   ├── lime-signature/       #   手写签名板组件
│   ├── e-chart/              #   ECharts 图表适配组件
│   └── ...                   #   其他官方/三方 uni_modules
├── js_sdk/                   # JS / UTS SDK 资源
├── docs/                     # VitePress 项目文档源码
├── App.ku.uvue               # 全局根包裹组件（动态主题注入、全局 Toast 容器）
├── main.uts                  # 应用主入口文件
├── pages.json                # ⚠️ 自动生成的页面路由表（编译产物，构建时自动覆盖，请勿手动编辑）
├── manifest.json             # 应用配置清单（多端 AppID、权限、原生模块配置）
├── vite.config.ts            # Vite 构建配置（Tailwind/weapp-tailwindcss 与自定义插件）
├── uni.scss                  # 全局 SCSS 变量与主题注入
└── tsconfig.json             # TypeScript / UTS 编译配置文件
```

## 🧩 核心功能说明

### 页面路由与配置 (uni-pages) ⚠️

本项目内置了自动文件路由插件 **`vite-plugin-uni-pages`**，自动递归扫描 `src/pages` 主包与 `src/sub` 分包目录，并实时维护生成 `pages.json` 与同步 `pages.config.json`。

> [!WARNING]
> **请勿直接手动修改 `pages.json`！**
> `pages.json` 为 Vite 插件的**自动构建产物**。每次在 HBuilderX 中运行、保存代码或打包时，插件都会根据源配置重新生成并完全覆盖 `pages.json`。

**路由与页面配置使用说明（双向自动同步）**：

1. **方式一：在页面代码中通过 `definePage` 或 `<route>` 配置（推荐）**：
   直接在页面的 `.uvue` 代码中内联声明配置。**当页面中写有 `definePage` 或 `<route>` 时，插件会自动双向同步 `pages.config.json` 和 `pages.json`**：

   ```html
   <script setup lang="uts">
   definePage({
     style: {
       navigationBarTitleText: 'CircleProgress 圆形进度条',
       navigationStyle: 'custom'
     }
   })
   </script>
   ```

2. **方式二：在根目录 `pages.config.json` 中配置**：
   当页面中没有写 `definePage` 时，直接在 `pages.config.json` 中定义全局 `globalStyle`、`tabBar` 以及各页面的 `style`，保存后插件也会**实时自动同步到 `pages.json`**：

   ```json
   {
     "path": "uview-ultra/demos/circle-progress/circle-progress",
     "style": {
       "navigationBarTitleText": "CircleProgress 圆形进度条",
       "navigationStyle": "custom"
     }
   }
   ```

### 沙盒独立调试模式 (Page Sandbox) 🚀

在大型多页面或复杂分包项目中，每次热更新或多端（尤其是 App 原生端）编译如果都全量编译所有页面，不仅构建耗时，还容易受到其他页面临时编译报错的干扰。

为此，`unibestX` 原创打造了 **沙盒独立调试模式**：在本地开发阶段，可将编译范围精准锁定为当前正在编写的单个页面或特定模块，**极速秒级编译，且应用启动直达目标调试页面**！

```text
               沙盒独立调试模式 (Page Sandbox) 运行流程
 ┌─────────────────────────────────────────────────────────────────┐
 │ 开启方式 A: 代码级 definePage({ debug: true, debugHome: true })   │
 │ 开启方式 B: 环境级 .env (VITE_DEV_SANDBOX=true，优先级更高)       │
 └───────────────────────────────┬─────────────────────────────────┘
                                 ▼
           ⚡ 触发 vite-plugin-uni-pages 智能裁剪过滤
 ┌─────────────────────────────────────────────────────────────────┐
 │ 1. 动态生成 pages.json: 仅包含选中的沙盒页面，目标页置顶 pages[0] │
 │ 2. 严密保护 pages.config.json: 沙盒期间绝不回写，全量配置 100% 完整 │
 │ 3. TabBar 智能协同: 单页调试保持底部 UI 占位并优雅拦截未编译页面 │
 │ 4. 生产构建强制熔断: 打包 (build:h5 等) 自动恢复全量，严防调试泄露│
 └─────────────────────────────────────────────────────────────────┘
```

#### 1. 两种开启方式

##### 方式一：代码内 `definePage` 声明（极简轻便，推荐单页秒开）

直接在目标页面（无论是主包还是 `src/sub` 分包页面）的顶部脚本中配置 `debug: true`：

```html
<script setup lang="uts">
definePage({
  debug: true,       // 开启当前页面独立沙盒调试（仅编译包含此标记的页面）
  debugHome: true,   // 强制置顶为应用冷启动首页（排在 pages[0]；全局仅允许 1 个）
  layout: 'navbar',
  style: {
    navigationBarTitleText: '登录页调试',
    navigationStyle: 'custom'
  }
});
</script>
```

> 💡 **调试完毕**：只需将 `debug: true` 改回 `false`（或直接删除），保存代码后无需重启，自动秒级恢复全量页面编译。

##### 方式二：`.env` 环境变量配置（最高优先级，支持批量/通配符）

在根目录 `.env`（或 `.env.development`）中开启沙盒模式并指定目标页面：

```bash
# 开启本地开发沙盒模式
VITE_DEV_SANDBOX=true

# 指定需要独立调试的页面列表（支持单个、逗号分隔多页、或通配符批量调试整个模块）
VITE_DEV_SANDBOX_PAGES=src/sub/auth/login,src/pages/me/me

# 也支持目录通配符批量调试（例如调试 auth 模块下全部页面）：
# VITE_DEV_SANDBOX_PAGES=src/sub/auth/*
```

#### 2. 优先级与安全保护机制 🛡️

1. **环境级最高优先级（`.env` > 代码标记）**：
   - 只要 `.env` 中 `VITE_DEV_SANDBOX=true`，完全以 `.env` 指定的页面列表为主，自动覆盖代码中分散的 `debug` 标记；
   - 当 `.env` 中 `VITE_DEV_SANDBOX=false` 时，自动平滑回退使用代码中的 `definePage({ debug: true })` 标记。
2. **`debug: false` 一票否决权**：
   - 页面显式配置了 `debug: false` 时，无论是否配置了 `debugHome`，一律彻底排除出沙盒列表，严防误引入。
3. **全量配置文件严格保护**：
   - 沙盒调试期间，插件**绝对不会回写 `pages.config.json`**，全量项目路由永远安全完整。
4. **TabBar 智能协同与 UI 还原**：
   - **多 Tab 页面调试**（命中 >= 2 个 Tab）：自动保留合法的 `tabBar` 供原生切换；
   - **单 Tab 页面调试**（仅命中 1 个 Tab）：系统级 `tabBar` 节点自动剔除（防止 uni-app 报路由缺失错误），但**界面底部自定义 TabBar 依然 100% 保持渲染**（保证 UI 视觉和底部安全区一致）；点击未编译 Tab 时自动弹出轻提示 `💡 沙盒调试中：目标页面未编译`，不白屏、不报错。
5. **生产发版打包安全熔断**：
   - 执行 `pnpm build:h5` 或正式打包发版时，插件会自动判定生产模式并**强制熔断沙盒模式**，100% 输出完整项目全量页面，绝无将调试配置带入线上的风险！

***

### VDOM 模式与 Vapor 蒸汽模式切换

#### 什么是 Vapor 蒸汽模式？

uni-app x 推出了新一代的 **蒸汽模式（Vapor）**。新版渲染引擎性能远超原生，考虑到 **AI 友好度、动态性** 以及老 uni-app 用户的升级，蒸汽模式下改用普通的 **TS / JS** 编写：

- 蒸汽模式下**不再依赖 UTS 的原生编译能力**：拥有 JS 的动态性、非常强的 AI 友好度，渲染性能又超过原生；
- 如果写成 **UTS**，Android 和 iOS 也会通过 **uts2js** 运行在 JS 引擎上；
- **鸿蒙（HarmonyOS）**目前运行在 ArkTS 引擎上，未来为了热更新，也会提供运行在 JS 引擎上的选项；
- 蒸汽模式之后，**UTS 语言的主要作用是开发 UTS 原生插件**：仅 UTS 插件（`utssdk` 目录）继续保留 UTS 向 Kotlin / Swift / ets 的编译能力。

> 🚀 从 **2026 年起**，新的[**蒸汽模式**](https://doc.dcloud.net.cn/uni-app-x/app-vapor.html)将逐渐替代老的 VDOM 模式。

本项目 `main` 分支全面兼通 **VDOM 模式** 与 **Vapor 模式**，**默认采用 Vapor 蒸汽模式**（可在下方 `manifest.json` 配置中随时切换回 VDOM）。

若需开启 **Vapor 蒸汽模式**（无虚拟 DOM 高性能原生渲染），可通过修改根目录下的 `manifest.json` 进行开启与配置：

```json
{
  "uni-app-x": {
    "styleIsolationVersion": "2",
    "vapor": true // true 为 Vapor 蒸汽模式（本项目默认）；false 为传统 VDOM 模式
  }
}
```

> 💡 **本人建议使用 Vapor 模式**：
>
> - **推荐优先使用 Vapor 模式**：Android 端语法要求不会那么严格，许多 UTS 强类型检查会更宽松，开发调试更省心；
> - **注意切换风险**：一旦在 Vapor 模式下开发过，之后若再切换回 **VDOM 模式**，之前可正常编译的代码可能会报类型或语法错误（VDOM 模式编译检查更严格）；
> - 最终选用哪种模式**看个人选择**：追求开发体验、少踩编译报错建议选 Vapor；追求最大兼容性与传统写法生态可保持 VDOM。

### 底部 TabBar 体系

项目内置了成熟健壮、全端兼容的 **多策略 + 多形态** TabBar 体系：

#### 1. 底部 TabBar 策略模式（`.env` 中的 `VITE_TABBAR_MODE`）

可在根目录 `.env` 中通过 `VITE_TABBAR_MODE` 自由切换 4 种底层运行策略：

| 模式值 | 策略名称 | 页面缓存机制 | 底层路由实现 | 适用场景与特性说明 |
| :---: | :--- | :---: | :---: | :--- |
| **`2`** | **`CUSTOM_TABBAR_WITH_NATIVE`**（【推荐】带缓存自定义模式） | **支持缓存** | `uni.switchTab` | **【强烈推荐】**`pages.json` 生成原生底座并安全隐藏，**保留各 Tab 页面组件状态与滚动位置缓存**，切换时不重新请求刷新，全端体验最流畅。 |
| **`3`** | **`CUSTOM_TABBAR_WITHOUT_NATIVE`**（纯自定义模式） | **不缓存** | `uni.redirectTo` | `pages.json` 中无 `tabBar` 节点，**每次切换重新触发页面生命周期与加载数据**。 |
| **`1`** | **`NATIVE_TABBAR`**（纯原生 TabBar） | **支持缓存** | `uni.switchTab` | 纯原生 `pages.json` TabBar 渲染（⚠️ 原生 `midButton` 在微信小程序/鸿蒙端官方不支持）。 |
| **`0`** | **`NO_TABBAR`**（无 TabBar） | 无 | 无 | 纯单页、登录页或不需要 TabBar 的应用场景。 |

#### 2. TabBar 视觉呈现形态（`src/tabbar/config.uts`）

在自定义模式（模式 2 或 模式 3）下，可通过 `src/tabbar/config.uts` 的 `type` 字段一键切换 UI 风格：

- **`type: 'capsule'`（悬浮胶囊岛屿风格）**：
  - 位于屏幕底部的悬空圆角 Dock 栏（`rounded-[34px]` + 柔和立体阴影）；
  - 当前激活项呈现独立的高亮胶囊底色与平滑过渡效果；
  - 完美适配亮色/暗黑主题模式与底部安全区（`safeAreaBottom`）。
- **`type: 'default'`（标准贴底底座风格）**：
  - 标准贴底容器，支持中间立体凸起鼓包按钮（`midButton`，如居中 AI 交互按钮）；
  - 全端 100% 支持立体鼓包、字体图标、角标徽标（小红点 / 数字）。

#### 3. 统一路由跳转与安全 API（`src/tabbar/helper`）

- **`switchTabbar(url: string)`**：全局统一 TabBar 跳转方法，自动根据当前策略模式选择 `uni.switchTab` 或 `uni.redirectTo`，内置防连击节流与失败容错降级，自动同步激活索引；
- **`syncCurIdxByCurrentPage()`**：自动从当前页面路由同步激活 Tab 项索引；
- **`safeHideNativeTabBar()`**：安全跨端隐藏原生底板并消除视口多余空白；
- **`initNativeMidButtonTap()`**：仅在原生模式且配置 `midButton` 时自动注册监听，无需在页面中硬编码。

### 主题切换（暗黑模式）

内置三种外观模式：`auto`（跟随系统）/ `light`（浅色）/ `dark`（深色），入口位于「基础」页的主题切换卡片（`src/pages/basic/components/ThemeSwitchCard.uvue`），状态管理在 `src/store/app.uts`。

各端跟随机制：

- **App（Android / iOS / 鸿蒙）**：`auto` 模式监听 `uni.onOsThemeChange` 实时跟随系统深浅色；手动 `light` / `dark` 通过 `uni.setAppTheme` + `uni.onAppThemeChange` 生效。注意 Android 10+ / iOS 13+ 系统才支持深色模式。
- **H5**：通过 `prefers-color-scheme` 媒体查询监听系统深浅色。
- **微信小程序**：读取宿主主题 `hostTheme`，`auto` 模式监听 `uni.onHostThemeChange` 跟随微信宿主主题。

颜色配置采用**单源**方案：

- 根目录 `theme.json` 定义 `light` / `dark` 两套色板（导航栏、TabBar、页面背景等）；
- `pages.json` 通过 `@` 变量引用（如 `"navigationBarBackgroundColor": "@navigationBarBackgroundColor"`），驱动原生导航栏 / TabBar / 页面背景；
- 自定义组件（NavBar、TabBar、全局容器）通过 `src/utils/theme.uts` 的 `getThemeTokens()` 读取同一份色板，保证与原生配置一致。

> 💡 **修改 `light` / `dark` 主题配色，请统一在根目录 `theme.json` 中配置**（单源维护，`pages.json` 与自定义组件自动同步生效，勿在页面或组件中写死颜色）。

> 💡 **全局导航栏如何跟随主题**：uni-app X 没有「运行时全局 navbar 配置」API，原生导航栏样式属于**编译期静态配置**（`pages.json` 的 `@变量`）。运行时切换主题时，由 `src/utils/theme.uts` 的 `applyNavbarTheme()` 同步（挂载在全局根包裹组件 `App.ku.uvue` 的 `onShow` 与主题监听上，每个页面切换都会触发）：H5 直接修改 `uni-page-head` 的 DOM 样式（背景 / 文字 / 按钮色）；微信小程序无 DOM，走官方 `uni.setNavigationBarColor`；App 端由 `uni.setAppTheme` 系统级切换，自动跟随。`navigationStyle: custom` 的页面没有 `uni-page-head`，H5 自动跳过。

⚠️ **平台限制说明**：

- 小程序原生导航栏背景色 `navigationBarBackgroundColor` 支持 `@theme.json` 变量，**真机可正常随主题切换**，但微信开发者工具模拟器可能无法正确预览深色效果，**以真机效果为准**（真机跟随微信「我 → 设置 → 通用 → 深色模式」）。
- 微信小程序端 `uni.setNavigationBarColor` 的 `frontColor` 仅支持 `#ffffff` / `#000000`，自定义导航栏文字颜色请通过组件 props 传入（`src/components/NavBar/NavBar.uvue`）。

### 路由守卫

提供灵活的登录拦截策略：

- **黑名单模式**（默认）：仅指定页面需要登录
- **白名单模式**：除指定页面外，全部需要登录
- 支持登录后自动跳回原页面

### 请求封装

基于 `lime-request` 封装的 HTTP 客户端：

- 自动携带 Token
- 请求/响应拦截器
- 多域名支持
- 401 自动登出
- 支持忽略认证的请求

### 文件上传

基于原生 `uni.uploadFile` 统一封装的高性能跨端文件上传模块（位于 `src/utils/upload.uts`）：

- **跨端原生适配**：全端通用（App Android / iOS / HarmonyOS、微信小程序、H5）。
- **统一鉴权**：自动从 `TokenStore` 注入 `header.token`（支持 `ignoreAuth: true` 跳过鉴权）。
- **智能路径拼接**：支持传入完整 URL 或仅传入相对接口路径（如 `/api/upload` 自动与基础域名拼接）。
- **上传进度监听**：支持 `onProgress` 进度回调。
- **智能响应解析**：兼容 `code: 200`、`code: "10000"`、`success: true`、`data: "url"`、`data: { url: "..." }` 等多种后端返回格式，若业务失败自动提取错误信息。

#### 配置说明（通过 .env 环境变量）

项目支持直接在对应环境的 `.env` 文件（`.env.development` / `.env.test` / `.env.production`）中配置上传接口基础域名与路由路径：

```ini
# .env.development / .env.production
VITE_UPLOAD_BASEURL=https://xxx.com                     # 上传基础域名
VITE_UPLOAD_PATH=/gateway/user/sys/oss/upload/xxx       # 上传接口路由
```

底层 [`src/utils/upload.uts`](src/utils/upload.uts) 会自动从 `import.meta.env` 读取当前环境的配置，无需改动源码。

#### 调用示例

```uts
import { uploadOssFile, uploadFile } from '@/src/utils/upload';

// 1. 快捷上传图片到 OSS
uploadOssFile(filePath)
  .then((ossUrl: string) => {
    console.log('上传成功 OSS 地址:', ossUrl);
  })
  .catch((err: Error | null) => {
    uni.showToast({ title: err?.message ?? '上传失败', icon: 'none' });
  });

// 2. 自定义上传接口与进度监听
uploadFile({
  url: '/api/custom-upload', // 相对路径自动拼接 BaseURL，也可传完整 http(s) URL
  filePath,
  name: 'file',
  onProgress: (progress: number) => {
    console.log(`当前上传进度: ${progress}%`);
  }
});
```

### 状态管理

基于 `x-pinia-s`（Pinia for uni-app X）：

- `AppStore` — 主题色、语言设置
- `TokenStore` — 支持单 Token 和双 Token（access + refresh）模式
- `UserStore` — 用户信息管理
- 内置持久化插件，自动同步到本地存储

### i18n 多语言

基于 `lime-i18n` 的国际化方案：

- 内置中文（zh-CN）和英文（en-US）
- 自动检测系统语言
- VSCode i18n-ally 插件支持
- 非 Vue 文件中也可使用翻译函数

### Layout 布局

通过自定义 Vite 插件实现：

- 自动为页面包裹 Layout 组件
- 支持页面级别 `<route>` 配置自定义布局
- 可通过 `layout: false` 禁用布局

## 🔧 技术栈详情

| 类别      | 技术                    | 说明                                     |
| ------- | --------------------- | -------------------------------------- |
| 框架      | uni-app X (VDOM / Vapor) | 下一代 uni-app，默认 Vapor 蒸汽模式渲染，全面兼容传统 VDOM 模式 |
| 语言      | UTS                   | uni-app Type Script，编译为原生 Kotlin/Swift |
| 前端框架    | Vue 3                 | Composition API                        |
| 构建工具    | Vite 5                | 极速开发体验                                 |
| CSS 引擎  | Tailwind CSS           | v4 + weapp-tailwindcss，方括号任意值语法          |
| UI 组件库  | uview-ultra           | uni-app X 专用 UI 库（内置深度修复版，全面兼容 VDOM/Vapor 模式，基础功能完备基本够用；后续不再维护定制） |
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
6. **路由与页面配置**：`pages.json` 为自动构建产物（构建打包时会被覆盖）。页面中写有 `definePage` 或 `<route>` 时会自动双向同步 `pages.config.json` 与 `pages.json`；无配置时请在 `pages.config.json` 中配置，**切勿直接手动修改 `pages.json`**

> \[!IMPORTANT]
> **安卓端语法最严**：Android 编译器的 UTS 类型与语法校验是所有平台中最严格的。一般如果 Android 端编译正常通过，其他平台（H5、微信小程序、iOS等）通常都不会有大问题。

## 🙏 参考

本项目参考自 [unibest](https://github.com/unibest-tech/unibest)，官网地址：<https://unibest.tech/>

## 📄 License

[MIT](https://opensource.org/license/mit/)

Copyright (c) 2026 HTwoO

## 💬 联系 & 交流

有项目、商务合作或遇到问题，可以随时加微信联系我，备注说明来意，微信号：`cq_81894`

👥 **QQ 技术交流群**：扫一扫下方二维码，或搜索群号 `983313908` 加入群聊！

<p align='center'>
  <img src="https://i.ibb.co/fdkLsmTv/qq-uni-Best-X.png" width="220" alt="QQ 技术交流群" />
</p>

## 请作者喝杯咖啡 ☕

如果你觉得这个项目好用，可以请作者喝杯咖啡 ☕

<p align='center'>
<img alt="微信收款码" src="https://i.ibb.co/rKHkpcHP/wx.jpg" height="330" style="display:inline-block; height:330px;">
