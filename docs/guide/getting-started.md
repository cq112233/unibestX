# 快速上手

欢迎使用 `unibestX`，这是一个基于 uni-app X 的现代开发模板。本指南将帮助您快速在本地运行项目。

## ⚙️ 环境准备

在开始之前，请确保您的开发环境满足以下要求：

* **Node.js**: `>= 22`
* **包管理器**: `pnpm >= 7.30`
* **IDE**: `HBuilderX >= 5.21`
  > [!TIP] 建议
  > 推荐使用 **HBuilderX 5.21 及以上版本**，全面支持 Android / iOS / 鸿蒙三端蒸汽（Vapor）模式；最好升级至最新 **HBuilderX 5.24** 版本。
  > 旧版本可切换 VDOM 模式（`manifest.json` 中 `"vapor": false`）稳定运行。
* **Vue Official**: `>= 2.1.10`
* **TypeScript**: `>= 5.0`
* **特定平台依赖**:
  * **Android**: JDK >= 17, Android SDK
  * **iOS**: Xcode (仅 macOS 支持)
  * **鸿蒙**: DevEco Studio

## 📂 快速开始

### 1. 创建 / 克隆项目

* **方式一：通过 `degit` 快速创建（推荐，无历史提交记录）**：

  ```bash
  # 主分支（main，默认 VDOM 模式，全面兼通 VDOM & Vapor）
  npx degit cq112233/unibestX my-project

  # Rice UI 官方支持分支（强烈推荐，团队持续维护，支持 VDOM & Vapor 模式）
  npx degit cq112233/unibestX#uniX-rice-ui my-project
  ```

* **方式二：通过 `git clone` 克隆**：

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

在控制台中执行以下命令，使用 `pnpm` 安装项目所需的 Node 依赖：

```bash
pnpm install
```

### 3. 运行项目（支持热更新）

项目支持 **命令行 (CLI)** 与 **HBuilderX 图形界面** 两种开发运行方式：

#### 🖥️ 方式一：命令行 CLI 运行

```bash
# 运行到 H5 / Web 端
pnpm dev:web

# 运行到 Android 原生端
pnpm dev:app-android

# 运行到 iOS 原生端（需 macOS + Xcode 环境）
pnpm dev:app-ios

# 运行到 鸿蒙原生端（需 DevEco Studio 环境）
pnpm dev:app-harmony

# 运行到 微信小程序
pnpm dev:mp-weixin

# 运行到 支付宝小程序
pnpm dev:mp-alipay
```

#### 🛠️ 方式二：HBuilderX 图形化运行

使用 **HBuilderX** 打开克隆下来的项目根目录，在顶部菜单栏中选择：

* **Android 平台**：选择 `运行 → 运行到手机或模拟器`，然后选择目标安卓设备。
* **iOS 平台**：选择 `运行 → 运行到手机或模拟器`，选择 iOS 设备。
* **鸿蒙平台**：选择 `运行 → 运行到手机或模拟器`，选择鸿蒙设备。
* **H5 平台**：选择 `运行 → 运行到浏览器`。
* **微信小程序**：选择 `运行 → 运行到小程序模拟器 → 微信开发者工具`。

### 4. 发布构建

完成开发后，您可以通过以下方式打包发布：

#### 🖥️ 命令行打包构建

```bash
# 打包构建 H5
pnpm build:h5

# 打包构建 微信小程序
pnpm build:mp-weixin
```

#### 🛠️ HBuilderX 发行打包

* **Android 平台**：选择 `发行 → 原生App-云打包` 或 `原生App-本地打包`。
* **iOS 平台**：选择 `发行 → 原生App-云打包`（需 Apple 开发者证书）。
* **鸿蒙平台**：选择 `发行 → 原生App-鸿蒙`。
* **H5 平台**：选择 `发行 → 网站-H5手机版`，打包后的文件将生成在 `dist/build/h5` 目录下。
* **微信小程序**：选择 `发行 → 小程序-微信`，然后通过微信开发者工具上传代码。
