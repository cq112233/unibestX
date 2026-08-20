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

<img src="static/qr-code.png" width="160" alt="H5 演示二维码" />

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
- 📱 **自定义 TabBar** — 支持凸起按钮和角标
- 🔌 **请求封装** — 基于lime-request，支持多域名、Token 自动续期

## 平台兼容性

| Android | iOS | 鸿蒙 | H5 | 微信小程序 |
| ------- | --- | -- | -- | ----- |
| √ | √ | √ | √ | √ |

> 注意：uni-app X 目前兼容以上 5 个端平台。

## 📱 各端首页截图

<p align="center">
  <img src="https://uniappx.oss-cn-beijing.aliyuncs.com/wxxcx.png?t=Math.random()" width="19%" alt="微信小程序" />
  <img src="https://uniappx.oss-cn-beijing.aliyuncs.com/android.png?t=Math.random()" width="19%" alt="Android" />
  <img src="https://uniappx.oss-cn-beijing.aliyuncs.com/h5.png?t=Math.random()" width="19%" alt="H5" />
  <img src="https://uniappx.oss-cn-beijing.aliyuncs.com/ios.png?t=Math.random()" width="19%" alt="iOS" />
  <img src="https://uniappx.oss-cn-beijing.aliyuncs.com/hm.png?t=Math.random()" width="19%" alt="鸿蒙" />
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
│   │   ├── uiTest/           #   UI 测试与排版页面
│   │   └── uview-ultra/      #   uview-ultra 组件库示例
│   ├── tabbar/               # 自定义 TabBar
│   │   ├── index.uvue        #   TabBar 底部容器
│   │   ├── TabbarItem.uvue   #   单个 Tab 项与角标
│   │   ├── config.uts        #   TabBar 图标与路由配置
│   │   ├── store.uts         #   TabBar 选中状态管理
│   │   └── types.uts         #   TabBar 类型定义
│   ├── types/                # 全局 TypeScript / UTS 类型定义
│   │   └── uni.d.ts          #   definePage 宏、Vue 宏与全局 API 类型补全
│   └── utils/                # 全局工具函数
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

本项目内置了自动文件路由插件 **`vite-plugin-uni-pages`**，自动递归扫描 `src/pages` 主包与 `src/sub` 分包目录，并实时维护生成 `pages.json`。

> [!WARNING]
> **请勿直接手动修改 `pages.json`！**
> `pages.json` 为 Vite 插件的**自动构建产物**。每次在 HBuilderX 中运行、保存代码或打包时，插件都会根据源配置重新生成并完全覆盖 `pages.json`。

**正确的页面配置方式（二选一）**：

1. **在根目录 `pages.config.json` 中配置**（推荐）：
   在 `pages.config.json` 中定义全局 `globalStyle`、`tabBar` 以及页面的 `style`（如自定义导航栏、页面标题等）：

   ```json
   {
     "path": "uview-ultra/demos/circle-progress/circle-progress",
     "style": {
       "navigationBarTitleText": "CircleProgress 圆形进度条",
       "navigationStyle": "custom"
     }
   }
   ```

2. **在页面代码中通过 `definePage` 编译宏或 `<route>` 声明**：
   直接在页面的 `.uvue` 代码中内联声明，插件会在编译时自动提取：

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

### 自定义 TabBar

内置自定义 TabBar 组件，支持：

- 5 个 Tab 项配置
- 中间凸起按钮（如 AI 入口）
- 角标显示
- 动态主题色

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
6. **路由与页面配置**：`pages.json` 为自动构建产物（构建时会被覆盖），请在 `pages.config.json` 或页面代码 `definePage` 中配置，**切勿直接修改 `pages.json`**

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
  <img src="static/qq_uniBestX.jpg" width="220" alt="QQ 技术交流群" />
</p>

## 请作者喝杯咖啡 ☕

如果你觉得这个项目好用，可以请作者喝杯咖啡 ☕

<p align='center'>
<img alt="微信收款码" src="https://uniappx.oss-cn-beijing.aliyuncs.com/wx.jpg" height="330" style="display:inline-block; height:330px;">
