<p align="center">
  <a href="https://github.com/cq112233/unibestX">
    <img width="140" src="static/logo-rounded.png" alt="unibestX logo">
  </a>
</p>

<h1 align="center">unibestX</h1>

<p align="center">
  面向 <strong>uni-app X</strong> 的现代开发模板<br>
  Vue 3 · UTS · Vite 5 · Tailwind CSS · Vapor / VDOM
</p>

<p align="center">
  <a href="https://github.com/cq112233/unibestX/stargazers"><img src="https://img.shields.io/github/stars/cq112233/unibestX?style=flat-square" alt="Stars"></a>
  <a href="https://github.com/cq112233/unibestX/network/members"><img src="https://img.shields.io/github/forks/cq112233/unibestX?style=flat-square" alt="Forks"></a>
  <a href="https://github.com/cq112233/unibestX/blob/main/LICENSE"><img src="https://img.shields.io/github/license/cq112233/unibestX?style=flat-square" alt="License"></a>
  <img src="https://img.shields.io/badge/Node.js-%3E%3D22.22.2-green?style=flat-square" alt="Node.js">
  <img src="https://img.shields.io/badge/pnpm-%3E%3D10.0.0-orange?style=flat-square" alt="pnpm">
  <img src="https://img.shields.io/badge/HBuilderX-%3E%3D5.26-blue?style=flat-square" alt="HBuilderX">
</p>

<p align="center">
  <a href="https://cq112233.github.io/unibestX/">在线演示</a> ·
  <a href="https://cq112233.github.io/unibestX/docs/">在线文档</a> ·
  <a href="https://github.com/cq112233/unibestX/issues">问题反馈</a>
</p>

## 特性

- 一套代码运行到 Android、iOS、鸿蒙、H5、微信小程序和支付宝小程序。
- 5 种 TabBar 运行模式、2 种 UI 形态，并支持原生液态玻璃。
- 内置 `route-bestX` 路由守卫与 `request-bestX` 请求、缓存和异步状态 hooks。
- Pinia / `x-pinia-s` 双模式状态管理，按运行环境自动切换。
- 自动文件路由、OpenAPI 接口生成、多语言、主题、上传下载与 SSE 流式请求。
- 内置 ESLint、Stylelint、TypeScript、Vitest、Husky 和 GitHub Actions。
- 自带 `unibestX-skill`，让 AI Agent 按项目规范生成和检查代码。

## 快速开始

### 环境要求

- Node.js `>= 22.22.2`
- pnpm `>= 10.0.0`
- HBuilderX `>= 5.26`
- Android：JDK 17 + Android SDK
- iOS：macOS + Xcode
- 鸿蒙：DevEco Studio

### 创建项目

```bash
# 交互式脚手架（推荐）
pnpm create unibestx my-app

# 无 UI 库基线
npx degit cq112233/unibestX my-app

# Rice UI 分支
npx degit cq112233/unibestX#uniX-rice-ui my-app
```

### 安装与运行

```bash
cd my-app
pnpm install
pnpm dev:web
```

> App 与小程序编译依赖本机已启动的 HBuilderX。完整环境说明见[快速开始](https://cq112233.github.io/unibestX/docs/guide/getting-started)。

## 文档

| 文档 | 内容 |
| :--- | :--- |
| [介绍](https://cq112233.github.io/unibestX/docs/guide/introduction) | 技术栈、能力与分支说明 |
| [快速开始](https://cq112233.github.io/unibestX/docs/guide/getting-started) | 创建项目、安装依赖与运行 |
| [TabBar 专题](https://cq112233.github.io/unibestX/docs/guide/tabbar) | 模式、配置、UI 形态与 hooks |
| [路由篇](https://cq112233.github.io/unibestX/docs/guide/route) | 路由跳转、参数读取、守卫与错误码 |
| [请求篇](https://cq112233.github.io/unibestX/docs/guide/request) | 请求实例、异步 hooks、缓存、上传下载 |
| [自动生成接口](https://cq112233.github.io/unibestX/docs/guide/api-generator) | Apifox / OpenAPI 生成 UTS 类型 |
| [CLI 开发指南](https://cq112233.github.io/unibestX/docs/guide/cli) | 各平台运行与构建命令 |

完整目录见[在线文档](https://cq112233.github.io/unibestX/docs/)。

## 常用命令

| 命令 | 说明 |
| :--- | :--- |
| `pnpm dev:web` | 运行到 H5 |
| `pnpm dev:app-android` | 运行到 Android |
| `pnpm dev:app-ios` | 运行到 iOS 模拟器 |
| `pnpm dev:app-harmony` | 运行到鸿蒙 |
| `pnpm dev:mp-weixin` | 运行到微信小程序 |
| `pnpm build:h5` | 构建 H5 |
| `pnpm build:test` / `pnpm build:prod` | 按环境构建 H5 |
| `pnpm api:gen` | 生成强类型接口 |
| `pnpm manifest` | 同步 `manifest.json` |
| `pnpm docs:dev` | 启动本地文档站 |
| `pnpm typecheck` | TypeScript 类型检查 |
| `pnpm lint:all` | ESLint + Stylelint |
| `pnpm test` | 运行单元测试 |
| `pnpm health` | 项目健康检查 |
| `pnpm clean:demo` | 清理演示页面与入口 |

## 项目结构

```text
unibestX/
├── docs/                 # VitePress 文档
├── plugins/              # Vite 构建插件
├── scripts/              # 开发、构建与发布脚本
├── src/
│   ├── api/              # 业务接口层
│   ├── components/       # 公共组件
│   ├── http/             # 业务请求实例
│   ├── pages/            # 主包页面
│   ├── router/           # 路由与守卫
│   ├── store/            # 状态管理
│   ├── sub/              # 分包页面
│   ├── tabbar/           # TabBar 配置与运行时
│   ├── theme/            # 主题与设计令牌
│   └── utils/            # 通用工具
├── uni_modules/          # 跨端插件
├── pages.config.json     # 页面配置源
├── manifest.config.ts    # manifest 配置源
└── theme.json            # 亮色 / 暗色配色源
```

## 贡献

提交前请运行 `pnpm health`、`pnpm typecheck`、`pnpm lint:all` 和 `pnpm test`。页面、接口与路由代码请遵循 [AGENTS.md](AGENTS.md) 和 `unibestX-skill` 中的项目规范。

## 联系与交流

- 微信：`cq_81894`（添加请备注来意）
- QQ 技术交流群：`983313908`

<p align="center">
  <img src="https://i.ibb.co/fdkLsmTv/qq-uni-Best-X.png" width="220" alt="QQ 技术交流群">
</p>

## 支持项目

如果这个项目对你有帮助，欢迎点一个 Star。也可以请作者喝杯咖啡：

<p align="center">
  <img src="https://i.ibb.co/rKHkpcHP/wx.jpg" height="300" alt="微信赞赏码">
</p>

## License

[MIT](LICENSE) © 2026 HTwoO
