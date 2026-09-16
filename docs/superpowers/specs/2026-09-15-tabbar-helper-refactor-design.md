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
3. **导出面一半是内部细节**：`tabbarCacheEnable`、`hasNativeTabbarConfig`、`isNoTabbar`、`isCapsuleTabbar` 全项目零引用；`customTabbarEnable` 则**有且仅有一处引用**——根组件 `App.ku.uvue:14` 的模板 `v-if="customTabbarEnable && isCurrentPageTabbar"`（第 20 行导入），它是自定义 TabBar 的渲染开关，**必须保留**。此外 `buildFullTabbarList`、`customTabbarList`、`handleClickBulge` 仅文件内使用。

   > 📌 本项在实施阶段修正过一次：原表述把这 5 个布尔一律判为「零引用」，但 `customTabbarEnable` 的引用点写在根组件的**模板表达式**里，纯靠 grep 符号名扫 `.ts`/`.uts` 会漏掉。删除数因此从 5 降为 4。

### 1.4 附带问题

消费者 import 路径有四种写法混用：`@/src/tabbar/helper`、`../../tabbar/helper`、`../tabbar/helper/index.uts`、`@/src/tabbar`。此外根组件 `App.uvue` 与 `App.ku.uvue` 还各自用了 `./src/tabbar/helper` 与 `@/src/tabbar/helper/index.uts` 两种更深的写法，这两处在最初梳理时被漏掉（见 §3.4 注）。

## 2. 目标与非目标

### 目标

- helper/ 内部按职责归位，每个文件可独立理解；该层目录更名为 `internal/`，名副其实。
- 模块对外只保留一层门面，导出面收敛到真实契约。
- 解开 store ↔ tabbar 的双向依赖。
- 消费者 import 路径归一。

### 非目标（明确不做）

- **不改任何运行时行为**。本次是纯搬家 + 导出面收敛。
- 不动 `ui/` 与 `components/` 的布局。（原「不重命名 `helper/` 目录」一条在用户评审时被推翻：该目录更名为 `internal/`，见 §3.5。）
- 不处理 `src/utils/systemInfo/index.uts` 反向 import `src/tabbar/config.uts` 这一处同模块内的环形依赖（记录备查，不在本次范围）。

## 3. 目标结构

### 3.1 internal/ 内部拆为 5 个叶子文件

| 文件 | 职责 | 承接自 |
| --- | --- | --- |
| `internal/strategy.uts` | 策略枚举与模式判定 | index.uts 20-92 行 |
| `internal/metrics.uts` | 尺寸常量与视口 / 主题计算 | index.uts 12-15、95-121 行 |
| `internal/state.uts` | 列表与激活状态、路径匹配、激活订阅 | store.uts 全部 + index.uts 288-297 行 |
| `internal/navigate.uts` | 跳转行为、中间按钮点击与原生监听 | index.uts 136-221、258-280 行 |
| `internal/native.uts` | 平台桥接（隐藏原生 tabbar） | index.uts 226-256 行 |

`helper/index.uts` 与 `helper/store.uts` 先随目录更名移至 `internal/`（§3.5），再由后续任务掏空并删除。

各文件导出符号：

- **`strategy.uts`**：`TabbarStrategyType`、`TABBAR_STRATEGY_MAP`、`parseTabbarStrategy`、`selectedTabbarStrategy`、`isSinglePageTabbar`、`isNativeTabbar`、`needHideNativeTabbar`、`tabbarType`、`customTabbarEnable`。`tabbarCacheEnable`、`hasNativeTabbarConfig`、`isNoTabbar`、`isCapsuleTabbar` 这 **4** 个零引用派生态**直接删除**（原表述为「收回非导出」）；`customTabbarEnable` 被 `App.ku.uvue` 的模板引用，**保留为导出**（详见 §1.3.3）。

  **为什么是删除而非保留为私有**：保留为私有常量只会产出 4 条 `unused-imports/no-unused-vars` 警告（已用探针实测：是 warning 不是 error），而本项目把构建警告当缺陷看（见 `unibestX-skill` 1.1.4）。策略矩阵的语义已完整保留在 `TABBAR_STRATEGY_MAP` 的文档注释与 `config.uts` 的说明里，派生一行的布尔值任何人都能就地重算。若使用者希望恢复这些语义的对外可见性，把它们改回 `export const` 即可。
- **`metrics.uts`**：`TABBAR_HEIGHT`、`TABBAR_CONTAINER_HEIGHT`、`themeTokens`、`safeAreaBottom`、`isVersionGte525`、`tabbarPlaceholderHeight`。
- **`state.uts`**：`tabbarList`、`curIdx`、`setCurIdx`、`setCurIdxByPath`、`syncCurIdxByCurrentPage`、`isPageTabbar`、`onTabShow`、`setTabbarItemBadge`。其中 `buildFullTabbarList`、`customTabbarList` 改为**非导出**。
- **`navigate.uts`**：`switchTabbar`、`handleTabbarClick`、`initNativeMidButtonTap`。其中 `handleClickBulge` 与节流锁 `isSwitchingTab` 改为**非导出**。
- **`native.uts`**：`safeHideNativeTabBar`。

### 3.2 门面收敛为单层

`src/tabbar/index.uts` 直接对叶子文件做单层 `export *`：

```uts
export * from './config';
export * from './types';
export * from './internal/strategy.uts';
export * from './internal/metrics.uts';
export * from './internal/state.uts';
export * from './internal/navigate.uts';
export * from './internal/native.uts';
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

**需改路径的 12 处：**

| 文件 | 现状 | 改为 |
| --- | --- | --- |
| `App.uvue:4` | `./src/tabbar/helper` | `@/src/tabbar` |
| `App.ku.uvue:25` | `@/src/tabbar/helper/index.uts` | `@/src/tabbar` |
| `src/layouts/navbar.uvue:56` | `@/src/tabbar/helper` | `@/src/tabbar` |
| `src/sub/auth/login.uvue:20` | `../../tabbar/helper` | `@/src/tabbar` |
| `src/pages/me/views/MeView.uvue:49` | `@/src/tabbar/helper` | `@/src/tabbar` |
| `src/router/interceptor.uts:2` | `../tabbar/helper/index.uts` | `@/src/tabbar` |
| `src/utils/i18n/index.uts:2` | `../../tabbar/helper/index.uts` | `@/src/tabbar` |
| `src/tabbar/tabbar.uvue:14` | `./helper` | `@/src/tabbar` |
| `src/tabbar/components/TabContent.uvue:11` | `@/src/tabbar/helper` | `@/src/tabbar` |
| `src/tabbar/ui/default/index.uvue:13` | `../../helper` | `@/src/tabbar` |
| `src/tabbar/ui/default/TabbarItem.uvue:3` | `../../helper` | `@/src/tabbar` |
| `src/tabbar/ui/capsule/index.uvue:14` | `../../helper` | `@/src/tabbar` |

> 📌 **`App.uvue` 与 `App.ku.uvue` 是本表在实施阶段补入的两处。** 原先的梳理只覆盖了 `src/` 目录，两个根组件不在扫描范围内，而它们恰好用了最深、最不显眼的两种相对写法。漏掉它们的后果是：删除内层聚合 `index.uts` 后根组件直接编译失败。

**另需改 themeColor 来源的 3 处**（入口本就是 `@/src/tabbar`，仅把 `themeColor` 改从主题域导入，属 §3.3 的范围，不在本表重复计数）：

| 文件 | 改为 |
| --- | --- |
| `src/store/vapor/app.ts` | `themeColor` 改从 `@/src/utils/theme/index.uts` 导入 |
| `src/store/vdom/app.uts` | 同上 |
| `src/tabbar/ui/template.uvue` | 同上（另两个 UI 组件 `TabbarItem.uvue`、`capsule/index.uvue` 的 themeColor 随本表改路径时一并调整） |

`src/pages/index/index.uvue` 与 `src/pages/function/views/FunctionView.uvue` 已是 `@/src/tabbar`，无需改动。

**归一必须排在所有符号搬迁之前**：路径归一不改变导出面（纯字符串替换），但符号一搬迁，任何仍走深路径的消费者都会立刻编译失败。实施顺序见计划文档「任务 2」。

### 3.5 目录更名为 `internal/`

`src/tabbar/helper/` → `src/tabbar/internal/`，门面的聚合行同步由 `export * from './helper';` 改为 `export * from './internal';`。

**为什么更名**：`src/tabbar/helper` 是**全项目唯一的 `helper/` 目录**（已 `find` 全仓确认），所以更名不破坏任何既有惯例。而 §3.1 拆出的 5 个叶子文件装的是 tabbar 模块的**实现主体**（策略判定、尺寸计算、状态、跳转、原生桥接），不是「辅助工具」，`helper` 名不副实。`internal` 明说「这是模块内部实现、请走门面」，与本次「把 8 个符号从对外面收回」的目标同构。

**为什么不叫 `utils`**：项目已有全局 `src/utils/`（9 个子模块）。再设 `src/tabbar/utils/` 会让叶子文件里出现「utils 引用 `@/src/utils/…`」这种读起来含糊的导入。

**为什么排在所有搬家之前**：改完 §3.4 的路径归一后，全仓对 `./helper` 的引用只剩门面那一行，此刻更名就是一次 `git mv` 加一行改动；若等搬完再改，`helper/` 与 `internal/` 会同时存在，中间态更乱。目录层级不变，两个文件里的相对导入（`./store`、`../config`、`../types`）全部继续有效，无需改动。

**更名对导出面必须完全透明**：导出面检查脚本按门面的 `export *` 动态解析模块路径、没有硬编码任何目录名，因此更名前后符号数应纹丝不动（40 个）。

## 4. 约束与红线（本次适用）

- 严禁 `interface`，一律 `type`。
- 严禁 `undefined`，空值统一 `null`。
- 基础类型比较一律 `==` / `!=`，禁用 `===` / `!==`。
- 数字与数组显式声明类型；函数参数与返回值显式声明类型。
- 注释里出现 `#ifdef` / `#ifndef` / `#endif` 时**不得带前缀斜杠**（红线 37）。
- 被 `.ts` / `.uvue` 以字面 `xxx.uts` 路径导入的 `.uts` 必须有配套 `<name>.d.uts.ts`（红线 39）。本次消费者改用的 `@/src/tabbar` 是无扩展名目录路径，现状即无 `src/tabbar/index.d.uts.ts` 且构建正常，故**不新增** tabbar 侧声明文件。
- 严禁手工编辑 `<name>.d.uts.ts`（红线 40）。`src/utils/theme/index.d.uts.ts` 由 `pnpm gen:uts-dts` 重生成。

## 5. 已知取舍

1. **破坏性变更**：本仓库是模板项目（unibestX），删除 4 个策略布尔（详见 §3.1）与收回 3 个内部函数（`buildFullTabbarList`、`customTabbarList`、`handleClickBulge`），对已克隆并使用了它们的下游构成破坏性变更。用户已确认接受。
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

- `internal/` 下 5 个文件，各自职责单一，无 `index.uts` / `store.uts`。
- `src/tabbar/index.uts` 为单层门面，无两层星号转发。
- `themeColor` 位于 `src/utils/theme/index.uts`，`src/store` 不再被 tabbar 反向引用。
- 全部 12 处消费者 import 归一为 `@/src/tabbar`（另 3 处 `themeColor` 来源改走主题域）。
- `README.md` 的**正文**不再引用已不存在的 `src/tabbar/helper` 路径（第 590 行小节标题已在任务 3 改掉）。**第 320 行的目录树条目不在任务 3 范围**——该目录树在本次重构前就已整体过时（它列出的 `custom/`、顶层 `TabbarItem.uvue`、顶层 `index.uvue` 均不存在，`src/utils/` 一段还把子目录写成了扁平文件），而任务 4-7 会立刻再次改变 `internal/` 的形态，此刻重写必然作废。故该树留到结构定型后由**任务 8 步骤 8** 一次性更新。
- 上述四步验证全部通过，且该模块对外行为与改造前完全一致。
