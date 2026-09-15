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
├── index.uts           # 统一入口门面：唯一的 export * 转发层，按平台导出 pinia 实例与所有 stores
├── types.uts           # 📐 跨分支共享类型唯一真源（只放 type，不放运行时代码）
├── vapor/              # 🌟 官方 Pinia 实现（App 蒸汽模式 / Web / 全部小程序）
│   ├── index.ts        # createPinia() + createPersistedState()（只默认导出 pinia，严禁 export *）
│   ├── app.ts          # 基于 vapor pinia 的 useAppStore
│   ├── user.ts         # 基于 vapor pinia 的 useUserStore
│   └── token.ts        # 基于 vapor pinia 的 useTokenStore
└── vdom/               # 🛡️ 未开蒸汽的 App 原生端实现（x-pinia-s）
    ├── index.uts       # x-pinia-s 的 createPinia() + createPersistPlugin()（同样只默认导出 pinia）
    ├── app.uts         # AppStore (extends PiniaStoreBase)
    ├── user.uts        # UserStore (extends PiniaStoreBase)
    └── token.uts       # TokenStore (extends PiniaStoreBase)
```

**两条硬性约束**（违反任一条都会在特定平台上编译失败，详见 `unibestX-skill` 的 1.1.12 / 1.3.18）：

1. **`types.uts` 只定义类型**，`vapor/*` 与 `vdom/*` 一律 `import type` 使用，**不得再 `export type` 同名类型**（否则门面收到重复导出）。跨分支共享类型之所以不能留在 `.ts` 实现文件里：小程序 uts2js 链路无法从 `.ts` 文件经 `export *` 转发纯类型。
2. **唯一的 `export *` 转发层是 `index.uts`**。`vapor/index.ts` 与 `vdom/index.uts` 只创建并默认导出 pinia 实例，**严禁再整包转发 stores**，否则 Android 端 Kotlin 合并会把重名符号改名为 `useXxxStore__1`。

### 2.2 条件编译匹配规则

> **实现状态（2026-09-15 修正）**：本节原写的 `#ifdef APP-ANDROID && !VUE3-VAPOR` 判据**不可用**，已按下面的实测结论改为平台枚举。原判据的问题在于 `VUE3-VAPOR` 在 H5 / 小程序上恒为 `false`，会用错分支。

**判据（已落地于 `src/store/index.uts`）**：

- **官方 Pinia 分支**：`#ifdef VUE3-VAPOR || H5 || WEB || MP`
  引入 `src/store/vapor/`，使用官方 `pinia` 与 `pinia-plugin-persistedstate`。
- **x-pinia-s 分支**：`#ifndef VUE3-VAPOR || H5 || WEB || MP`（即**未开启**蒸汽模式的 App 原生端，如 Android VDOM）
  只引入并编译 `src/store/vdom/`，绝不引用 npm 模块 `pinia`。

**为什么必须枚举平台名，而不能只判断 `VUE3-VAPOR`**：

1. `VUE3-VAPOR` 由 `uni-cli-shared` 依据 `process.env.UNI_APP_X_DOM2 === 'true'` 求值（`dist/preprocess/context.js`），**只在 App 蒸汽模式下成立**；
2. 更要紧的是，框架在 `uni-cli-shared/dist/hbx/alias.js` 里对 web / 小程序**强制删除**该环境变量：

   ```js
   // 如果是 web 和小程序，目前强制非蒸汽。
   if (isWebOrMpPlatform(utsPlatform) || isWebOrMpPlatform(uniPlatform)) {
       delete process.env.UNI_APP_X_DOM2;
   }
   // isWebOrMpPlatform = (p === 'h5' || p === 'web' || p.startsWith('mp-'))
   ```

   ⇒ **`manifest.json` 里 `uni-app-x.vapor: true` 对 H5 / 全部小程序平台不产生任何效果**；这些平台只能靠按平台名显式放行。

**平台宏的对应关系**（`context.js` 的 `initScopedPreContext()` 实测）：

| 编译平台 | 成立的宏 |
| :--- | :--- |
| `h5` | `H5`、`WEB` |
| `mp-*`（微信/支付宝/百度/头条…） | `MP` + 具体名如 `MP_WEIXIN`、`MP_ALIPAY` |
| App 蒸汽模式 | `APP`、`APP_ANDROID`/`APP_IOS`/`APP_HARMONY`、`VUE3_VAPOR` |
| App（未开蒸汽） | `APP`、`APP_ANDROID`/`APP_IOS`/`APP_HARMONY`（无 `VUE3_VAPOR`） |

因此「manifest 开了蒸汽 ⇒ App 全端走官方 Pinia；Web 与全部小程序本就是 JS 运行时、也走官方 Pinia」这一目标，写作 `VUE3-VAPOR || H5 || WEB || MP` 即可。

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
所有 Pinia 实例与 Store 集中在 `src/store/index.uts` 中统一由条件编译分发。**实际实现**如下（`export default pinia` 必须放在条件块之外，两个分支各自只 `import` 不导出）：

```uts
// 1. 共享类型：与平台无关，恒定向外转发（必须在所有 #ifdef 之外）
export * from './types.uts';

// 2. Pinia 实例：按平台路由
// #ifdef VUE3-VAPOR || H5 || WEB || MP
import pinia from './vapor/index.ts';
// #endif

// #ifndef VUE3-VAPOR || H5 || WEB || MP
import pinia from './vdom/index.uts';
// #endif

export default pinia;

// 3. Store 实现：按平台路由（只转发 store，不再转发类型）
// #ifdef VUE3-VAPOR || H5 || WEB || MP
export * from './vapor/app.ts';
export * from './vapor/token.ts';
export * from './vapor/user.ts';
// #endif

// #ifndef VUE3-VAPOR || H5 || WEB || MP
export * from './vdom/app.uts';
export * from './vdom/token.uts';
export * from './vdom/user.uts';
// #endif
```

**维护警示**：本文件**不得**套用任何「导入/导出排序」类自动格式化（HBuilderX 保存时格式化、ESLint `sort-exports`、Prettier 插件等）。排序会跨过 `#endif` 把语句挪出条件块，使 `vapor/*` 与 `vdom/*` 在**所有平台同时被导出**，直接触发上述 `useXxxStore__1` 红线。同理，注释里提到 `#ifdef` / `#ifndef` / `#endif` 时**不要带前缀斜杠**，否则预处理器会抛 `Unbalanced right delimiter` 中断编译。

---

## 4. 验证计划

1. **语法与类型自检**：运行 `npm run lint` 验证 0 错误；
2. **构建验证**：运行开发与打包验证；
3. **调用兼容性验证**：检查 `useAppStore`、`useUserStore`、`useTokenStore` 在各页面的消费无类型断层。
