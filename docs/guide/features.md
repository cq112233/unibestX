# 核心功能

`unibestX` 内置了众多开箱即用的功能，旨在提升基于 uni-app X 的开发效率和体验。

## 自定义 TabBar

项目内置了高度可定制的 TabBar 组件（位于 `src/tabbar`）：

* **多 Tab 支持**：标准 5 个 Tab 项配置。
* **特殊样式**：支持中间凸起按钮（例如用于发布按钮或 AI 助手入口）。
* **状态显示**：支持角标显示（红点或数字）。
* **主题化**：全面支持动态主题色的响应。

## 路由守卫

提供了灵活且强大的页面访问控制：

* **黑名单模式**（默认）：只有在配置中指定的页面才需要登录访问。
* **白名单模式**：除了指定的几个页面（如登录、注册、首页），其余全部页面都需要登录。
* **智能跳转**：支持拦截跳转登录，并在登录成功后自动跳回最初想访问的页面。

## 请求封装 (HTTP)

基于 `lime-request` 封装的现代化 HTTP 客户端（位于 `src/http`）：

* **无感 Token**：自动在请求头携带 Token，并支持 Token 自动续期。
* **拦截器机制**：全局请求与响应拦截，方便统一处理错误（如 401 自动登出）。
* **多域名支持**：轻松配置和切换不同的 API 域名环境。
* **灵活配置**：支持配置特定请求忽略认证。

## 文件上传 (Upload)

基于官方原生 `uni.uploadFile` 封装的文件上传模块（位于 `src/utils/upload.uts`）：

* **全端通用**：全平台原生支持（App Android / iOS / HarmonyOS、微信小程序、H5）。
* **Token 自动注入**：自动在 header 携带 Token（支持 `ignoreAuth: true` 跳过）。
* **BaseURL 动态拼接**：支持传入完整 URL 或仅传入相对接口路径。
* **进度监听**：支持 `onProgress` 上传进度回调。
* **环境变量配置**：支持直接在对应环境的 `.env`（如 `.env.development` / `.env.production`）中配置：

  ```ini
  VITE_UPLOAD_BASEURL=https://xxx.com
  VITE_UPLOAD_PATH=/gateway/user/sys/oss/upload/xxx
  ```

## 状态管理与持久化

基于 `x-pinia-s` (专为 uni-app X 优化的 Pinia)：

* **AppStore (`app.uts`)**：管理应用的全局状态，如主题色、当前语言等。
* **TokenStore (`token.uts`)**：管理鉴权信息，内置支持单 Token 和双 Token (access + refresh) 模式。
* **UserStore (`user.uts`)**：管理登录用户的个人信息。
* **自动持久化**：内置持久化插件，状态改变时自动同步到本地设备存储中。

## i18n 多语言支持

基于 `lime-i18n` 提供的国际化方案：

* **开箱即用**：内置中文（`zh-CN`）和英文（`en-US`）基础语言包。
* **系统感知**：能够自动检测并跟随系统语言。
* **生态兼容**：支持 VSCode `i18n-ally` 插件，提升翻译编辑体验。
* **全局可用**：不仅能在 Vue 模板中使用，也支持在 `.uts` 脚本文件中调用翻译函数。

## 页面布局机制 (Layout)

借助自定义 Vite 插件 (`plugins/uni-layouts-plugin.ts`)，实现了灵活的页面布局：

* **自动注入**：自动为页面包裹默认的 Layout 组件，无需在每个页面重复书写。
* **自定义配置**：支持在 `pages.json` 或页面 `definePage` / `<route>` 块中配置自定义使用的布局。
* **按需禁用**：可以通过设置 `layout: false` 单独为某个页面禁用布局包裹。

## 文件路由与 definePage (uni-pages)

基于 `plugins/vite-plugin-uni-pages.ts` 实现现代化的文件路由与页面元数据体系：

* **免手动配置**：自动递归扫描 `src/pages` 与 `src/sub` 生成 `pages.json`。
* **同源声明**：在页面内通过 `definePage({ style: { ... }, layout: '...', type: 'home' })` 声明页面标题、导航栏与布局。
* **动态首页**：声明 `type: 'home'` 即可将该页面自动排在 `pages.json` 首位作为应用首页。
* **类型安全**：配备完整的全局 TypeScript / UTS 宏类型与 IDE 智能补全。
