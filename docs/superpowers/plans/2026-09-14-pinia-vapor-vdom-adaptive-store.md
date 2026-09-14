# Pinia 官方库 (Vapor) 与 Pinia by UTS (VDOM) 双模式自动匹配实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 在 `src/store` 中构建双模式自动匹配架构，在 App 蒸汽模式（Vapor）、Web、小程序、iOS/鸿蒙平台自动使用官方 `pinia` 3.0.4 + `pinia-plugin-persistedstate` 4.7.1，在 Android VDOM 模式自动使用 `Pinia by uts` (`x-pinia-s`)，对所有业务页面暴露一致的调用接口。

**架构：**
- `src/store/vapor/`：存放基于官方 Pinia 与 `pinia-plugin-persistedstate` 的组合式实现（`index.ts`, `app.ts`, `user.ts`, `token.ts`）；
- `src/store/vdom/`：存放 Android VDOM 专用的 `x-pinia-s` class 风格实现（`index.uts`, `app.uts`, `user.uts`, `token.uts`）；
- `src/store/index.uts`：统一门面层通过条件编译指令（`#ifdef APP-ANDROID && !VUE3-VAPOR` / `#ifndef APP-ANDROID && !VUE3-VAPOR`）自动匹配并重导出对应实现与所有 stores。

**技术栈：** uni-app X, UTS, Vue 3, Pinia 3.0.4, pinia-plugin-persistedstate 4.7.1, x-pinia-s.

---

## 涉及文件与职责

- **创建：** `src/store/vdom/index.uts`、`app.uts`、`user.uts`、`token.uts` — 封装 Android VDOM (x-pinia-s) 模式实现。
- **创建：** `src/store/vapor/index.ts`、`app.ts`、`user.ts`、`token.ts` — 封装官方 Pinia (Vapor / Web / iOS / Harmony / 小程序) 模式实现。
- **修改：** `src/store/index.uts` — 统一入口条件编译自动分发。
- **移除：** 移除冗余的 `src/store/app.uts`、`user.uts`、`token.uts`，由 `index.uts` 单点分发，避免双份维护。
- **规格参考：** `docs/superpowers/specs/2026-09-14-pinia-vapor-vdom-adaptive-store-design.md`

---

## 任务列表

### 任务 1：整理并归档 Android VDOM 实现 (`src/store/vdom/`)

- [x] **步骤 1：创建 `src/store/vdom/` 目录并将现有代码移入**
  - `src/store/vdom/index.uts`：Pinia 实例与持久化插件
  - `src/store/vdom/app.uts`：`AppStore` 类及 `useAppStore`
  - `src/store/vdom/user.uts`：`UserStore` 类及 `useUserStore`
  - `src/store/vdom/token.uts`：`TokenStore` 类及 `useTokenStore`

---

### 任务 2：实现官方 Pinia 模块 (`src/store/vapor/`)

- [x] **步骤 1：创建 `src/store/vapor/index.ts`**
  - 初始化 `createPinia()`
  - 配置 `piniaPluginPersistedstate` 配合 `uni.getStorageSync` / `uni.setStorageSync`
  - 调用 `setActivePinia(pinia)`
- [x] **步骤 2：创建 `src/store/vapor/app.ts`**
  - 定义与导出 `IAppState`
  - 使用 `defineStore` 实现 `useAppStore`，返回包含 `state` 响应式对象及 actions（`setTheme`, `setThemeMode`, `initThemeMode`, `refreshIsDark`, `setLocale`）
  - 开启 `persist: true`（key 为 `pinia:app`）
- [x] **步骤 3：创建 `src/store/vapor/user.ts`**
  - 定义与导出 `IUserInfo`, `IUserState`
  - 使用 `defineStore` 实现 `useUserStore`，包含 `state.userInfo` 与 actions（`setUserInfo`, `setAvatar`, `clearUserInfo`）
  - 开启 `persist: true`（key 为 `pinia:user`）
- [x] **步骤 4：创建 `src/store/vapor/token.ts`**
  - 定义与导出 `ILoginForm`, `ISingleTokenRes`, `IDoubleTokenRes`, `ITokenState`
  - 使用 `defineStore` 实现 `useTokenStore`，包含 `state` 与 actions（`setSingleToken`, `setDoubleToken`, `clearToken`, `getToken`, `isTokenValid`, `isRefreshTokenValid`, `hasLoginInfo`, `hasValidLogin`）
  - 开启 `persist: true`（key 为 `pinia:token`）

---

### 任务 3：构建单一门面层条件编译分发 (`src/store/index.uts`)

- [x] **步骤 1：重构 `src/store/index.uts`**
  - `#ifdef APP-ANDROID && !VUE3-VAPOR` 导入并导出 `vdom`
  - `#ifndef APP-ANDROID && !VUE3-VAPOR` 导入并导出 `vapor`
- [x] **步骤 2：删除冗余的 `src/store/app.uts`、`user.uts`、`token.uts`**
  - 全局统一从 `src/store` 导入，消灭重复代码和重复条件判断


---

### 任务 4：语法检查、红线自检与验证

- [x] **步骤 1：运行 `npm run lint`**
  - 确保 0 错误
- [x] **步骤 2：校验规范文档更新与提交 Git**
  - 规范文档已更新，代码已提交

---

## 验证结论

- `npm run lint` 验证 0 errors。
- 业务调用端完全零改造，API 100% 兼容。
