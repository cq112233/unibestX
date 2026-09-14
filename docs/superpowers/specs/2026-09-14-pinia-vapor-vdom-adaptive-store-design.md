# Pinia 官方库 (Vapor) 与 Pinia by UTS (VDOM) 双模式自动匹配设计规格 (2026-09-14)

## 1. 概述

根据 uni-app X 官方支持文档：
- **APP 蒸汽模式 (Vapor)**、**鸿蒙和 iOS VDOM 模式**、**Web 平台**、**各大小程序平台**：可以直接使用 `pinia` 官方库（本项目采用 `pinia: ^3.0.4` + `pinia-plugin-persistedstate: ^4.7.1`）；
- **Android VDOM 模式** (`APP-ANDROID && !VUE3-VAPOR`)：由于 Kotlin 强类型底层与 Native 编译机制限制，必须使用专为 UTS 设计的三方插件 `Pinia by uts` (`uni_modules/x-pinia-s`)。

本设计旨在 `src/store` 中实现**模式自动匹配与透明切换**，使得业务代码（如 `useAppStore().state.isDark`、`useAppStore().setTheme(...)`）在任何模式和平台下调用方式保持 100% 一致，无需任何业务侧改动，且实现持久化数据互通。

---

## 2. 架构设计

### 2.1 模块分层与目录结构

```
src/store/
├── index.uts           # 统一入口门面：根据编译平台与 Vapor 模式自动导出 pinia 实例与所有 stores
├── vapor/              # 🌟 官方 Pinia 实现（Vapor / Web / iOS / Harmony / 小程序）
│   ├── index.ts        # createPinia() + createPersistedState()
│   ├── app.ts          # 基于 vapor pinia 的 useAppStore
│   ├── user.ts         # 基于 vapor pinia 的 useUserStore
│   └── token.ts        # 基于 vapor pinia 的 useTokenStore
└── vdom/               # 🛡️ Android VDOM 原生实现（x-pinia-s）
    ├── index.uts       # x-pinia-s 的 createPinia() + createPersistPlugin()
    ├── app.uts         # AppStore (extends PiniaStoreBase)
    ├── user.uts        # UserStore (extends PiniaStoreBase)
    └── token.uts       # TokenStore (extends PiniaStoreBase)
```

### 2.2 条件编译匹配规则

- **Android VDOM 分支**：
  `#ifdef APP-ANDROID && !VUE3-VAPOR`
  只引入并编译 `src/store/vdom/`，绝不引用 npm 模块 `pinia`，保证 Android 原生 Kotlin 编译 100% 成功。
- **官方 Pinia 分支**：
  `#ifndef APP-ANDROID && !VUE3-VAPOR`（包含 `VUE3-VAPOR`、`H5`、`WEB`、`MP`、`APP-IOS`、`APP-HARMONY`）
  引入 `src/store/vapor/`，使用官方 `pinia` 与 `pinia-plugin-persistedstate`。

---

## 3. 详细实现设计

### 3.1 官方 Pinia 实现 (`src/store/vapor/`)

#### 3.1.1 插件初始化 (`vapor/index.ts`)
```ts
import { createPinia, setActivePinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia.use(
  createPersistedState({
    key: (id: string): string => `pinia:${id}`,
    storage: {
      getItem: (key: string): string | null => {
        const val = uni.getStorageSync(key);
        return val != null && val !== '' ? `${val}` : null;
      },
      setItem: (key: string, value: string): void => {
        uni.setStorageSync(key, value);
      }
    }
  })
);

setActivePinia(pinia);
export default pinia;
```

#### 3.1.2 状态结构与兼容性
为了与现有业务调用完全兼容（现有业务统一以 `store.state.xxx` 访问状态，并调用 actions），官方 Pinia 实现中：
- `state` 属性统一为 `reactive<T>({...})`；
- Actions 作为顶层函数暴露，并且其内部同时同步全局样式变量（如 `themeColor.value`、`applyThemeColor` 等）；
- 持久化配置 `persist: { paths: [...] }` 自动持久化指定状态。

### 3.2 Android VDOM 实现 (`src/store/vdom/`)
保持现有生产级 `x-pinia-s` 的完整实现不变，移至 `src/store/vdom/` 目录下。

### 3.3 统一门面设计 (`src/store/index.uts`)
无需冗余的子文件，所有 Pinia 实例与 Store 集中在 `src/store/index.uts` 中统一由条件编译分发：
```uts
// #ifndef APP-ANDROID && !VUE3-VAPOR
import pinia from './vapor/index';

export default pinia;

export * from './vapor/app';
export * from './vapor/token';
export * from './vapor/user';
// #endif

// #ifdef APP-ANDROID && !VUE3-VAPOR
import pinia from './vdom/index.uts';

export default pinia;

export * from './vdom/app.uts';
export * from './vdom/token.uts';
export * from './vdom/user.uts';
// #endif
```

---

## 4. 验证计划

1. **语法与类型自检**：运行 `npm run lint` 验证 0 错误；
2. **构建验证**：运行开发与打包验证；
3. **调用兼容性验证**：检查 `useAppStore`、`useUserStore`、`useTokenStore` 在各页面的消费无类型断层。
