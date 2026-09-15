# src/tabbar/helper 职责归位与导出面收敛 — 设计规格

日期：2026-09-15
状态：已获用户确认，待生成实现计划

## 1. 背景与问题

`src/tabbar/helper/` 目前只有两个文件，却承载了七八种互不相关的职责，且模块对外导出面泄漏了大量内部实现细节。经实际引用关系核查，具体问题如下。

### 1.1 `helper/index.uts`（297 行）职责过载

| 职责 | 代表导出 | 位置 |
| --- | --- | --- |
| 尺寸常量 | `TABBAR_HEIGHT`、`TABBAR_CONTAINER_HEIGHT` | 12-15 行 |
| 策略解析 | `TABBAR_STRATEGY_MAP`、`parseTabbarStrategy` + 7 个派生死布尔 | 20-92 行 |
| 主题 / 视口计算 | `themeTokens`、`safeAreaBottom`、`isVersionGte525`、`tabbarPlaceholderHeight` | 95-121 行 |
| 路由跳转行为 | `switchTabbar`、`handleTabbarClick`、模块级节流锁 `isSwitchingTab` | 136-221 行 |
| 平台桥接与 hack | `safeHideNativeTabBar`（H5 注入 style + `uni.hideTabBar`）、`initNativeMidButtonTap` | 226-280 行 |
| 订阅工具 | `onTabShow` | 288-297 行 |
| 整包转发 | `export * from './store'` | 9 行 |

### 1.2 `helper/store.uts`（118 行）同样混杂

列表派生（`buildFullTabbarList`、`customTabbarList`、`tabbarList`）、状态（`curIdx`、`themeColor`）、路径匹配工具（`setCurIdxByPath`、`syncCurIdxByCurrentPage`、`isPageTabbar`）、徽标写入（`setTabbarItemBadge`）四种职责同处一文件。且 `store.uts` 并不是 store（无 pinia），项目里另有真正的 `src/store/`，命名构成误导。

### 1.3 三个结构性缺陷（不只是"看着乱"）

1. **门面套娃**：`src/tabbar/index.uts` → `export * from './helper'` → `export * from './store'`，同一顶层符号经历两层星号转发。这正是 `unibestX-skill` 1.1.12 与红线 21 点名的形态（"被聚合的子模块自身不得再对外做整包重导出"）。
2. **store ↔ tabbar 双向依赖**：`helper/index.uts` 顶层 `import { useAppStore } from '@/src/store'`；而 `src/store/vapor/app.ts`、`src/store/vdom/app.uts` 又 `import { themeColor } from '@/src/tabbar/helper'`，且 `app.ts` 在模块体即写 `themeColor.value`，初始化顺序敏感。`themeColor` 语义上属于主题域，寄居在 tabbar 里属职责错位。
3. **导出面一半是内部细节**：`tabbarCacheEnable`、`customTabbarEnable`、`hasNativeTabbarConfig`、`isNoTabbar`、`isCapsuleTabbar` 全项目零引用；`buildFullTabbarList`、`customTabbarList`、`handleClickBulge` 仅文件内使用。

### 1.4 附带问题

消费者 import 路径有四种写法混用：`@/src/tabbar/helper`、`../../tabbar/helper`、`../tabbar/helper/index.uts`、`@/src/tabbar`。

## 2. 目标与非目标

### 目标

- helper/ 内部按职责归位，每个文件可独立理解。
- 模块对外只保留一层门面，导出面收敛到真实契约。
- 解开 store ↔ tabbar 的双向依赖。
- 消费者 import 路径归一。

### 非目标（明确不做）

- **不改任何运行时行为**。本次是纯搬家 + 导出面收敛。
- 不重命名 `helper/` 目录、不动 `ui/` 与 `components/` 的布局。
- 不处理 `src/utils/systemInfo/index.uts` 反向 import `src/tabbar/config.uts` 这一处同模块内的环形依赖（记录备查，不在本次范围）。

## 3. 目标结构

### 3.1 helper/ 内部拆为 5 个叶子文件

| 文件 | 职责 | 承接自 |
| --- | --- | --- |
| `helper/strategy.uts` | 策略枚举与模式判定 | index.uts 20-92 行 |
| `helper/metrics.uts` | 尺寸常量与视口 / 主题计算 | index.uts 12-15、95-121 行 |
| `helper/state.uts` | 列表与激活状态、路径匹配、激活订阅 | store.uts 全部 + index.uts 288-297 行 |
| `helper/navigate.uts` | 跳转行为、中间按钮点击与原生监听 | index.uts 136-221、258-280 行 |
| `helper/native.uts` | 平台桥接（隐藏原生 tabbar） | index.uts 226-256 行 |

`helper/index.uts` 与 `helper/store.uts` 删除。

各文件导出符号：

- **`strategy.uts`**：`TabbarStrategyType`、`TABBAR_STRATEGY_MAP`、`parseTabbarStrategy`、`selectedTabbarStrategy`、`isSinglePageTabbar`、`isNativeTabbar`、`needHideNativeTabbar`、`tabbarType`。`tabbarCacheEnable`、`customTabbarEnable`、`hasNativeTabbarConfig`、`isNoTabbar`、`isCapsuleTabbar` 这 5 个零引用派生态**直接删除**（原表述为「收回非导出」）。

  **为什么是删除而非保留为私有**：保留为私有常量只会产出 5 条 `unused-imports/no-unused-vars` 警告（已用探针实测：是 warning 不是 error），而本项目把构建警告当缺陷看（见 `unibestX-skill` 1.1.4）。策略矩阵的语义已完整保留在 `TABBAR_STRATEGY_MAP` 的文档注释与 `config.uts` 的说明里，派生一行的布尔值任何人都能就地重算。若使用者希望恢复这些语义的对外可见性，把它们改回 `export const` 即可。
- **`metrics.uts`**：`TABBAR_HEIGHT`、`TABBAR_CONTAINER_HEIGHT`、`themeTokens`、`safeAreaBottom`、`isVersionGte525`、`tabbarPlaceholderHeight`。
- **`state.uts`**：`tabbarList`、`curIdx`、`setCurIdx`、`setCurIdxByPath`、`syncCurIdxByCurrentPage`、`isPageTabbar`、`onTabShow`、`setTabbarItemBadge`。其中 `buildFullTabbarList`、`customTabbarList` 改为**非导出**。
- **`navigate.uts`**：`switchTabbar`、`handleTabbarClick`、`initNativeMidButtonTap`。其中 `handleClickBulge` 与节流锁 `isSwitchingTab` 改为**非导出**。
- **`native.uts`**：`safeHideNativeTabBar`。

### 3.2 门面收敛为单层

`src/tabbar/index.uts` 直接对叶子文件做单层 `export *`：

```uts
export * from './config';
export * from './types';
export * from './helper/strategy.uts';
export * from './helper/metrics.uts';
export * from './helper/state.uts';
export * from './helper/navigate.uts';
export * from './helper/native.uts';
```

**为什么用 `export *` 而不是显式具名再导出**：`export { x } from './y.uts'` 在本项目内无任何先例，属未验证语法；而单层 `export *` 是修好后的 `src/store/index.uts` 已经验证过的写法。在 UTS 的诸多已知陷阱面前，选择已验证形态优于语法优雅。

### 3.3 themeColor 迁至主题域

`src/utils/theme/index.uts` 在 `getDefaultTheme()` 定义之后新增：

```uts
export const themeColor = ref(getDefaultTheme());
```

`src/store/vapor/app.ts` 与 `src/store/vdom/app.uts` 改从该处 import。迁移后 `store → tabbar` 的**直接**依赖边被消除，依赖方向变为单向：`theme ← store`、`theme ← tabbar`、`store ← tabbar`。

**⚠️ 准确表述：间接环仍然存在**。另有一条改造前就有的链路 `store/*/app` → `utils/i18n` → `tabbar/helper` → `store`（`src/store/vapor/app.ts:4` 与 `src/store/vdom/app.uts:3` 导入 i18n；`src/utils/i18n/index.uts:2` 导入 `tabbarList`；而 tabbar 的 `themeTokens` 反过来 `useAppStore()`）。本次**只解直接边**，该间接环不动——它改造前即存在且当前工作正常。要彻底切断需把暗色标志也上移主题域，属独立改动。

**已验证不受红线 1.1.11 影响**：该文件顶层不存在 `getThemeColor` 函数，不会与新增 `themeColor` 在 Kotlin 端生成的静态 getter 撞名。同文件 `getRootThemeStyle(themeColor: string, ...)` 中的 `themeColor` 是函数参数，不构成冲突。

### 3.4 消费者 import 归一

全部统一为 `@/src/tabbar`（themeColor 除外，指向 `@/src/utils/theme/index.uts`）。

| 文件 | 现状 | 改为 |
| --- | --- | --- |
| `src/layouts/navbar.uvue` | `@/src/tabbar/helper` | `@/src/tabbar` |
| `src/sub/auth/login.uvue` | `../../tabbar/helper` | `@/src/tabbar` |
| `src/pages/me/views/MeView.uvue` | `@/src/tabbar/helper` | `@/src/tabbar` |
| `src/router/interceptor.uts` | `../tabbar/helper/index.uts` | `@/src/tabbar` |
| `src/utils/i18n/index.uts` | `../../tabbar/helper/index.uts` | `@/src/tabbar` |
| `src/store/vapor/app.ts` | `@/src/tabbar/helper`（themeColor） | `@/src/utils/theme/index.uts` |
| `src/store/vdom/app.uts` | `@/src/tabbar/helper`（themeColor） | `@/src/utils/theme/index.uts` |
| `src/tabbar/tabbar.uvue` | `./helper` | `@/src/tabbar` |
| `src/tabbar/components/TabContent.uvue` | `@/src/tabbar/helper` | `@/src/tabbar` |
| `src/tabbar/ui/default/index.uvue` | `../../helper` | `@/src/tabbar` |
| `src/tabbar/ui/default/TabbarItem.uvue` | `../../helper` | `@/src/tabbar` + themeColor 走 theme |
| `src/tabbar/ui/capsule/index.uvue` | `../../helper` | `@/src/tabbar` + themeColor 走 theme |
| `src/tabbar/ui/template.uvue` | 入口已正确 | 仅 themeColor 改走 theme |

`src/pages/index/index.uvue` 与 `src/pages/function/views/FunctionView.uvue` 已是 `@/src/tabbar`，无需改动。

## 4. 约束与红线（本次适用）

- 严禁 `interface`，一律 `type`。
- 严禁 `undefined`，空值统一 `null`。
- 基础类型比较一律 `==` / `!=`，禁用 `===` / `!==`。
- 数字与数组显式声明类型；函数参数与返回值显式声明类型。
- 注释里出现 `#ifdef` / `#ifndef` / `#endif` 时**不得带前缀斜杠**（红线 37）。
- 被 `.ts` / `.uvue` 以字面 `xxx.uts` 路径导入的 `.uts` 必须有配套 `<name>.d.uts.ts`（红线 39）。本次消费者改用的 `@/src/tabbar` 是无扩展名目录路径，现状即无 `src/tabbar/index.d.uts.ts` 且构建正常，故**不新增** tabbar 侧声明文件。
- 严禁手工编辑 `<name>.d.uts.ts`（红线 40）。`src/utils/theme/index.d.uts.ts` 由 `pnpm gen:uts-dts` 重生成。

## 5. 已知取舍

1. **破坏性变更**：本仓库是模板项目（unibestX），删除 5 个策略布尔（详见 §3.1）与收回 3 个内部函数（`buildFullTabbarList`、`customTabbarList`、`handleClickBulge`），对已克隆并使用了它们的下游构成破坏性变更。用户已确认接受。
2. **`initNativeMidButtonTap` 全项目零调用**：原生中间按钮点击监听实际从未注册。按"面向开发者的预留钩子"保留而非删除；若后续确认废弃，另行清理。
3. **`setCurIdxByPath` 与 `initNativeMidButtonTap` 会被门面的 `export *` 转发出去**：前者被 `navigate.uts` 跨文件使用，后者是预留钩子，两者均保留在对外面上，不做进一步隐藏。

## 6. 验证计划

不使用"假绿"命令（红线 32：`launch app-android --compile true` 与 `compile app-android --file` 均不执行「编译为android class」）。

| 步骤 | 命令 | 通过判据 |
| --- | --- | --- |
| 类型声明同步 | `pnpm gen:uts-dts && pnpm check:uts-dts` | exit 0 |
| H5 构建 | `pnpm build:h5` | 编译成功 |
| 小程序链路（uts2js 对导出面最敏感） | `cli launch mp-weixin --compile true` | **看产物**：`test -d unpackage/dist/dev/mp-weixin/src/tabbar`；不看 exit code（红线 41：竞态下被打断仍返回 0） |
| 真机 Kotlin 阶段 | `cli launch app-android --deviceId <序列号>`，**不带** `--compile` | `grep -c "编译为android class" <log>` ≥ 1，且紧随 `项目 unibestX 编译成功。` |

另需在改完后跑一次导出面自查（红线 1.1.11）：

```bash
grep -nE "^export const [A-Za-z_]" src/utils/theme/index.uts
grep -nE "^export function get[A-Z]" src/utils/theme/index.uts
```

确认不存在 `foo` ↔ `getFoo` 形状的同名冲突。

## 7. 完成标准

- `helper/` 下 5 个文件，各自职责单一，无 `index.uts` / `store.uts`。
- `src/tabbar/index.uts` 为单层门面，无两层星号转发。
- `themeColor` 位于 `src/utils/theme/index.uts`，`src/store` 不再被 tabbar 反向引用。
- 全部 13 处消费者 import 归一。
- 上述四步验证全部通过，且该模块对外行为与改造前完全一致。
