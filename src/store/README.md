# src/store 状态管理（双模式自适应 · 官方 Pinia / x-pinia-s）

全项目**唯一的状态入口**。门面 [index.uts](index.uts) 按平台把同一套 store 路由到两份实现之一，业务侧 `import { useXxxStore } from '@/src/store/index.uts'` 一句到底，**不需要知道当前跑的是哪种模式**。

- **官方 Pinia 分支**（[vapor/](vapor/)）：App 蒸汽模式（Vapor）、H5 / Web、全部小程序。用 Vue 官方组合式写法 + `pinia-plugin-persistedstate`。
- **x-pinia-s 分支**（[vdom/](vdom/)）：**未开**蒸汽模式的 App 原生端（如 Android VDOM）。用 UTS 强类型的 `PiniaStoreBase` 类写法。

> 🚨 **只从 [index.uts](index.uts) 门面导入 store**，不要直接引 `vapor/` 或 `vdom/` 下的文件。直引会让两个分支同时进产物，Android 端合并 Kotlin 时重名符号被改名成 `useXxxStore__1`，运行期报 `NoSuchMethodError`。

---

## 目录结构

```text
src/store/
├── index.uts                     # ⭐ 门面：按平台路由 + 唯一转发层（业务侧 import 入口）
├── types.uts                     # ⭐ 共享类型唯一真源（只放 type，不放运行时代码）
├── vapor/                        # 官方 Pinia 分支（App 蒸汽模式 / H5 / Web / 小程序）
│   ├── index.uts                 #   创建 pinia 实例 + 持久化插件（只默认导出 pinia）
│   ├── app.uts                   #   useAppStore     底座上下文（state.mode）
│   ├── i18n.uts                  #   useI18nStore    多语言
│   ├── modal.uts                 #   useModalStore   组件实例注册表（无 state）
│   ├── theme.uts                 #   useThemeStore   主题 / 外观
│   ├── token.uts                 #   useTokenStore   登录令牌
│   └── user.uts                  #   useUserStore    用户信息
└── vdom/                         # x-pinia-s 分支（未开蒸汽的 App 原生端）
    └── （与 vapor/ 同名一一对应，行为必须完全一致，差别只在实现形态）
```

| 你要做的事 | 去哪个文件 |
| :--- | :--- |
| 业务里读 / 写状态 | 只从 [index.uts](index.uts) 导入 `useXxxStore` |
| 加一个 store | `vapor/` 与 `vdom/` **各加一份**，再在 [index.uts](index.uts) 两个分支里各加一行 `export *` |
| 改 store 对外类型 | [types.uts](types.uts)（两个分支共用，**不要**在分支里 `export type` 同名类型） |
| 改持久化 key 前缀 | `vapor/index.uts` 的 `key` 与 `vdom/index.uts` 的 `keyPrefix`（当前都是 `pinia:`） |

---

## 快速上手

### 1. 页面里用 store

```uts
import { useTokenStore, useUserStore } from '@/src/store/index.uts';

const tokenStore = useTokenStore();
const userStore = useUserStore();

// 登录成功后
tokenStore.setSingleToken({ token: 'xxx', expiresIn: 7200 } as ISingleTokenRes);
userStore.setUserInfo({
  userId: 1,
  username: 'unix',
  nickname: 'UNIX',
  avatar: '',
  permissions: ['report:read']
} as IUserInfo);

// 退出登录
tokenStore.clearToken();
userStore.clearUserInfo();
```

> 💡 两种模式下**调用方式完全一致**，业务代码不需要写条件编译。

### 2. 加一个 store（两个分支都要加）

```uts
// vapor/foo.uts —— 官方组合式写法
import { reactive } from 'vue';
import { defineStore } from 'pinia';

type IFooState = { bar: string };   // 类型真源在 ../types.uts，此处内联镜像（见下方说明）

export const useFooStore = defineStore('foo', () => {
  const state = reactive<IFooState>({ bar: '' });
  function setBar(v: string): void { state.bar = v; }
  return { state, setBar };
}, {
  persist: true            // 需要持久化才加；不要持久化则整个第三参省略
});
```

```uts
// vdom/foo.uts —— x-pinia-s 类写法
import { defineStore, PiniaStoreBase } from '@/uni_modules/x-pinia-s';
import type { IFooState } from '../types.uts';

export class FooStore extends PiniaStoreBase {
  state: IFooState = reactive<IFooState>({ bar: '' });

  constructor() {
    super();
    this.bindState(this.state);
  }

  override _doReset(): void { this.state.bar = ''; }
  override _hydrate(data: UTSJSONObject): void {
    if (data.bar != null) this.state.bar = data.bar as string;
  }
  override _serialize(): UTSJSONObject { return { bar: this.state.bar } as UTSJSONObject; }

  setBar(v: string): void { this.state.bar = v; }
}

export const useFooStore = defineStore<FooStore>('foo', (): FooStore => new FooStore());
```

最后在 [index.uts](index.uts) 的两个条件块里各加一行：

```uts
// #ifdef VUE3-VAPOR || H5 || WEB || MP
export * from './vapor/foo.uts';
// #endif

// #ifndef VUE3-VAPOR || H5 || WEB || MP
export * from './vdom/foo.uts';
// #endif
```

> ⚠️ 加完后**不要用「按字母序重排 import/export」的格式化器保存 [index.uts](index.uts)**：
> 排序会跨过条件编译的结束标记把语句挪出条件块，导致两个分支在所有平台同时被导出。

---

## 内置 store 一览

| Store | 状态 | 主要 API |
| :--- | :--- | :--- |
| `useAppStore` | `state.mode`（`'vapor'` / `'vdom'`） | 只读底座上下文，与业务解耦 |
| `useI18nStore` | `state.locale` | `setLocale(locale)` / `initLocale()` |
| `useThemeStore` | `state.theme` / `themeMode` / `isDark` | `setTheme(color)` / `setThemeMode(mode)` / `initThemeMode()` / `refreshIsDark()` |
| `useTokenStore` | 单 token + 双 token + 两个过期时间戳 | `setSingleToken` / `setDoubleToken` / `clearToken` / `getToken` / `isTokenValid` / `isRefreshTokenValid` / `hasLoginInfo` / `hasValidLogin` |
| `useUserStore` | `state.userInfo` | `setUserInfo` / `setAvatar` / `clearUserInfo` |
| `useModalStore` | **无 state**（模块级 `Map` 存组件实例） | `setInstance(key, inst)` / `getInstance(key)` / `deleteInstance(key)` |

> 💡 `useModalStore` 刻意不持有 state：组件实例被响应式代理后 `$callMethod` 会失真，且实例不可序列化。
> 它只负责「按名字存取实例」，弹窗语义留在调用方（见 [modal.uts](vapor/modal.uts) 注释）。
>
> 💡 `theme` / `i18n` store 是「换肤 / 切语言」的**唯一写入口**，细节见 [src/theme/README.md](../theme/README.md)
> 与 [src/i18n/README.md](../i18n/README.md)。

---

## 双模式是怎么路由的

[index.uts](index.uts) 的判据（两条互斥的条件编译分支）：

```uts
// #ifdef VUE3-VAPOR || H5 || WEB || MP
import pinia from './vapor/index.uts';
// #endif

// #ifndef VUE3-VAPOR || H5 || WEB || MP
import pinia from './vdom/index.uts';
// #endif
```

> ⚠️ **为什么 Web / 小程序要手写平台名，而不能只判断 `VUE3-VAPOR`**：
> `VUE3-VAPOR` 由框架按 `process.env.UNI_APP_X_DOM2` 求值，而框架对 web / 小程序**强制清除**该变量
> （`uni-cli-shared/dist/hbx/alias.js` 里 `delete process.env.UNI_APP_X_DOM2`）。
> 也就是说 `manifest.json` 里 `vapor: true` 对 Web / 小程序**不生效**，这两类平台的 `VUE3-VAPOR` 恒为 false。
> 想让它们走官方 Pinia，只能在此按平台名显式放行。App 端（Android / iOS / 鸿蒙）则确实由 `vapor` 开关控制。

---

## 类型为什么内联镜像

[vapor/](vapor/) 下的文件在 TS 侧**不能** `import type { IThemeState } from '../types.uts'` —— `.uts` 在 TS 里只有通配 `any` 声明（见 [src/types/uts-shim.d.ts](../types/uts-shim.d.ts)），具名类型导入会被当作命名空间报 `TS2709`。因此：

- **vapor 分支**：内联镜像一份 `type`，注释里标明「真源见 `../types.uts`」；
- **vdom 分支**：正常 `import type`（走 UTS 链路，无此问题）；
- **对外类型**：一律只在 [types.uts](types.uts) 定义并 `export type`。

> ⚠️ **改类型要改三处**：[types.uts](types.uts)（真源）+ vapor 分支的内联镜像 + 检查 vdom 分支的用法。
> ⚠️ 项目红线：一律用 `type`，**禁止 `interface`**。

---

## 红线

- **只从 [index.uts](index.uts) 导入**，禁止业务直引 `vapor/*` / `vdom/*`。
- **[vapor/index.uts](vapor/index.uts) 与 [vdom/index.uts](vdom/index.uts) 只创建并默认导出 pinia 实例**，严禁再 `export *` 转发 store（会造成 `useXxxStore__1` 改名 + `NoSuchMethodError`）。
- **加 store / 加类型必须两端同步**，只改一边会在另一模式下编译失败或运行异常。
- **[index.uts](index.uts) 禁止套用自动排序格式化**（会把语句挪出条件编译块）。
- **注释里不要写带斜杠前缀的条件编译标记**（预处理器做分隔符配对时会被带偏，抛 `Unbalanced right delimiter found in string` 中断整个 UTS 编译）。

---

## 相关示例页

| 页面 | 演示内容 |
| :--- | :--- |
| [src/sub/auth/login.uvue](../sub/auth/login.uvue) | token / user store 的登录、清除 |
| [src/sub/themeBasicDemo](../sub/themeBasicDemo/themeBasicDemo.uvue) | theme store 换肤与外观模式 |
| [src/sub/langBasicDemo](../sub/langBasicDemo/langBasicDemo.uvue) | i18n store 切换语言 |
| [src/sub/modalBasicDemo](../sub/modalBasicDemo/modalBasicDemo.uvue) | modal store 实例注册与跨层级调用 |
