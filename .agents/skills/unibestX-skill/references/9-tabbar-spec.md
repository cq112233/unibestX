# 9 TabBar 业务导航手册（配置驱动 · 五种模式 · hooks 优先）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：新增 / 删除 Tab、调整 Tab 顺序或图标、切换 `VITE_TABBAR_MODE`、修改 TabBar UI 形态、设置角标、监听 Tab 切换 / 页面重新显示、修复底部遮挡与安全区问题时 —— **必须先阅读本分册**。
>
> **权威源码说明**：[src/tabbar/README.md](../../../../src/tabbar/README.md) 是本项目 TabBar 的完整使用文档；本分册把它压缩成 Agent 可执行的规范、正反例与检查清单。两者冲突时，以当前源码与实测为准，并回看 README。

---

## 9.1 职责边界：配置、生成物、运行时三层分离

```text
src/tabbar/config.uts                 ← 唯一配置真源（人改）
        │
        ├─ plugins/vite-plugin-tabbar-views.ts
        │     ├─ 生成 src/tabbar/components/TabViews.uvue
        │     ├─ 补页面 views 脚手架
        │     └─ 同步 pages.json / TabContent 属性
        │
        └─ src/tabbar/core + adapters + ui   ← 运行时实现（框架维护）
                 └─ src/tabbar/index.uts     ← 业务导入门面
```

| 层 | 位置 | 规则 |
| :--- | :--- | :--- |
| 配置层 | `src/tabbar/config.uts` | **只改这里**；`list`、`midButton`、`type`、`glassEffect` 都在这里 |
| 生成层 | `src/tabbar/components/TabViews.uvue` | **禁止手改**，下次 dev / 配置变更会被覆盖 |
| 运行时核心 | `src/tabbar/core/` | 状态、导航、策略、生命周期、尺寸；业务不要直接 import |
| 业务适配 | `src/tabbar/adapters/` | 主题、i18n、Navbar、平台、系统信息；业务不要直接 import |
| 组合式入口 | `src/tabbar/hooks/` | 推荐业务使用，但统一从 `index.uts` 导入 |
| UI 层 | `src/tabbar/ui/` | `default` / `capsule`，扩展新形态复制 `template.uvue` |

### 导入规则

```uts
// ✅ 业务代码：统一从门面导入 hooks
import {
  useTabbar,
  useTabbarPage,
  useTabbarTheme,
  useTabbarMetrics,
  useTabbarI18n
} from '@/src/tabbar/index.uts';

// ✅ 只读配置可以精准导入
import { customTabbarConfig } from '@/src/tabbar/config.uts';

// ❌ 禁止业务直接穿透内部实现
import { curIdx } from '@/src/tabbar/core/state.uts';
import { themeTokens } from '@/src/tabbar/adapters/theme.uts';
```

- `.uts` / `.uvue` 后缀必须保留；去掉后缀会导致 TS 侧丢补全并报 `TS2307`。
- 底层具名函数仍从 `index.uts` 导出，兼容旧代码；**新代码优先 hooks**。

---

## 9.2 五种 TabBar 模式

模式由 `.env` 的 `VITE_TABBAR_MODE` 决定，业务代码不需要按模式重写。

| 值 | 模式 | 页面缓存 | 切换方式 | 渲染方 |
| :--- | :--- | :--- | :--- | :--- |
| `0` | 无 TabBar | — | — | 不渲染 |
| `1` | 原生 TabBar | ✅ | `uni.switchTab` | 框架原生 |
| `2` | 自定义 + 原生底座 | ✅ | `uni.switchTab` | `App.ku.uvue` + `src/tabbar` |
| `3` | 纯自定义 | ❌ | `uni.redirectTo` | `App.ku.uvue` + `src/tabbar` |
| `4` | 单页保活 | ✅ 天然保活 | 切容器索引，不跳路由 | `src/pages/index/index.uvue` |

当前项目默认模式为 `4`。判断模式时优先使用 `useTabbar()` 返回值，不要在业务里重复解析环境变量：

```uts
const {
  isSinglePageTabbar,
  isNativeTabbar,
  customTabbarEnable,
  needTabbarBottomPadding
} = useTabbar();
```

> ⚠️ 模式 4 只有一个真实路由入口 `src/pages/index/index.uvue`；其他 Tab 页面在这个模式下是 `TabViews.uvue` 调度的视图组件，不参与路由注册。

---

## 9.3 配置契约：新增 Tab 只改 `config.uts`

新增一项至少需要以下字段：

```uts
{
  tabType: 'order',                         // 业务唯一标识，推荐全小写
  text: 'tabbar.order',                     // i18n key 或直接中文
  pagePath: 'src/pages/order/order',        // 不写前导 /
  iconType: 'icon',                         // 'icon' | 'image'
  icon: 'list',                             // uni-icons 名称
  iconActive: 'list-filled',                // 激活态图标
  iconPath: 'static/tabbar/order.png',      // iconType='image' 时使用
  selectedIconPath: 'static/tabbar/order_fill.png',
  badge: null,                              // number | 'dot' | null
  isBulge: false
}
```

约束：

1. `tabType` 全列表唯一；它是 `onTabShow('order', ...)` 与 `setCurIdxByKey('order')` 的稳定键。
2. `pagePath` 不带前导 `/`；运行时列表会自动补齐。
3. `midButton` 通过注释启停是官方支持路径，插件解析前会剥离注释。
4. 不要在业务页面手写 `pages.json` 的 `tabBar` 节点；它由插件生成。
5. 不要新增 `type: 'glass'` 形态；液态玻璃由 `glassEffect` 叠加在当前形态上。

---

## 9.4 Hooks API 契约

### 9.4.1 `useTabbar()`：全局状态、模式与导航

| 返回值 | 类型 | 说明 |
| :--- | :--- | :--- |
| `curIdx` | `Ref<number>` | 当前激活下标，包含鼓包项 |
| `tabbarList` | `CustomTabBarItem[]` | 完整列表，已合并鼓包并补 `pagePath` 前导 `/` |
| `activeTabTitle` | `Ref<string>` | 当前 Tab 标题，供 Navbar 联动 |
| `customTabbarConfig` | `TabBarConfig` | 原始配置 |
| `isSinglePageTabbar` | `boolean` | 是否模式 4 |
| `isNativeTabbar` | `boolean` | 是否模式 1 |
| `customTabbarEnable` | `boolean` | 是否模式 2 / 3 |
| `needTabbarBottomPadding` | `boolean` | 是否需要页面底部预留 |
| `tabbarType` | `string` | `default` / `capsule` |
| `setCurIdx(idx)` | `void` | 设置下标并持久化，**不跳路由** |
| `setCurIdxByKey(key)` | `void` | 按 `tabType` 设置下标 |
| `setCurIdxByPath(path)` | `void` | 按页面路径设置下标 |
| `syncCurIdxByCurrentPage()` | `void` | 按当前页面路径同步下标 |
| `setTabbarItemBadge(idx, badge)` | `void` | 设置数字角标或 `'dot'` |
| `isPageTabbar(path)` | `boolean` | 判断是否为 TabBar 页面 |
| `switchTabbar(url)` | `void` | 按当前模式切换 Tab |
| `handleTabbarClick(index)` | `void` | 自定义 UI 统一点击处理，内置防连击 |
| `resetTabSwitchThrottle()` | `void` | 重置切换节流锁 |
| `initNativeMidButtonTap()` | `void` | 初始化原生中间按钮监听 |
| `safeHideNativeTabBar()` | `void` | 安全隐藏原生 TabBar |
| `safeRestoreNativeTabBar()` | `void` | 安全恢复原生 TabBar |

### 9.4.2 `useTabbarPage()`：页面显示与 Tab 生命周期

| 返回值 | 说明 |
| :--- | :--- |
| `isPageVisible` | 宿主页面是否可见 |
| `pageShowTimes` | 累计显示次数 |
| `notifyPageShow()` / `notifyPageHide()` | 向 TabBar 通知宿主页面可见性 |
| `onTabShow(target, callback, immediate?)` | 监听某个 Tab 被切换激活 |
| `onTabPageShow(target, callback, immediate?)` | 监听 Tab 页面重新显示，覆盖切 Tab、从子页返回、App 回前台 |
| `resolveTabIndexByKey(key)` | 业务标识转完整列表下标 |

`target` 推荐使用 `tabType` 字符串（如 `'index'`、`'me'`）；也兼容数字下标、`pagePath` 和下标字符串。

### 9.4.3 主题、尺寸、国际化

```uts
const { isDark, themeTokens, activeThemeColor } = useTabbarTheme();
const {
  TABBAR_HEIGHT,
  TABBAR_CONTAINER_HEIGHT,
  hasTabbarBulge,
  safeAreaBottom,
  tabbarPlaceholderHeight,
  tabbarBottomPaddingHeight,
  tabbarBottomPaddingClass
} = useTabbarMetrics();
const { formatTabbarText, setTabbarItem } = useTabbarI18n();
```

> 🚨 **`activeThemeColor` 只属于 `useTabbarTheme()`**。从 `useTabbar()` 解构会报 `UseTabbarResult` 上不存在该属性。

---

## 9.5 标准场景写法

### 9.5.1 切 Tab

```uts
import { useTabbar } from '@/src/tabbar/index.uts';

const { switchTabbar, handleTabbarClick } = useTabbar();

/** 自定义 TabBar 点击：统一交给 handleTabbarClick */
function onTabClick(index: number): void {
  handleTabbarClick(index);
}

/** 明确跳某个 Tab 页面 */
function goMe(): void {
  switchTabbar('/src/pages/me/me');
}
```

- 页面级跳转仍优先 `useRouter()`；命中 TabBar 页面时 route-bestX 会自动纠偏到 TabBar 处理器。
- 严禁直接调用 `uni.switchTab` / `uni.redirectTo` / `uni.navigateTo` 绕过 TabBar 逻辑。

### 9.5.2 设置角标

```uts
import { useTabbar, useTabbarPage } from '@/src/tabbar/index.uts';

const { setTabbarItemBadge } = useTabbar();
const { resolveTabIndexByKey } = useTabbarPage();

const meIndex = resolveTabIndexByKey('me');
if (meIndex >= 0) {
  setTabbarItemBadge(meIndex, 6);
}
```

不要写死下标：`midButton` 插位或调整顺序后，数字下标会失效。

### 9.5.3 监听 Tab 重新显示

```uts
import { useTabbarPage } from '@/src/tabbar/index.uts';

const { onTabPageShow } = useTabbarPage();

onTabPageShow('me', (): void => {
  // 切回“我的”、从子页面返回、App 回前台都会走到这里
}, true);
```

- 数据刷新优先使用 `onTabPageShow()`，不要只依赖 `onTabShow()`。
- `immediate = true` 仅在目标 Tab 已激活且页面可见时立即执行一次。
- 订阅必须在页面 / 组件的 `<script setup>` 中同步注册；不要在异步回调里补注册。

### 9.5.4 宿主页面可见性桥接

仅模式 4 的宿主页面或承载 TabBar 的容器需要：

```uts
import { onHide, onShow } from '@dcloudio/uni-app';
import { useTabbar, useTabbarPage } from '@/src/tabbar/index.uts';

const { setCurIdxByKey } = useTabbar();
const { notifyPageShow, notifyPageHide } = useTabbarPage();

onShow((): void => {
  setCurIdxByKey('index');
  notifyPageShow();
});

onHide((): void => {
  notifyPageHide();
});
```

普通 Tab 子视图不要重复调用 `notifyPageShow/Hide()`。

### 9.5.5 自定义 UI 与新增形态

1. 需要改标准形态样式：改 `src/tabbar/ui/default/` 或 `ui/capsule/`。
2. 需要新增形态：复制 `ui/template.uvue` 到 `ui/<新形态>/index.uvue`，再在 `tabbar.uvue` 加分支。
3. 自定义点击必须走 `handleTabbarClick(index)`；不要自行 `setCurIdx` + 路由两套逻辑。
4. 液态玻璃由 `customTabbarConfig.glassEffect` 控制，不要为玻璃单独建类型。
5. `TabViews.uvue` 是构建产物，调度行为要改 `TabContent.uvue` 或插件。

### 9.5.6 底部避让

- 页面底部统一使用 `<TabbarPlaceholder>`，不要手写固定 `padding-bottom`。
- 需要自定义间距时用 `useTabbarMetrics()` 的 `tabbarBottomPaddingHeight` / `tabbarPlaceholderHeight`。
- 安全区使用 `safeAreaBottom`，不要用 `env(safe-area-inset-bottom)` 或硬编码机型值。
- 模板可直接使用 Ref；脚本中读取响应式值必须写 `.value`。

---

## 9.6 高频坑点

| # | 错误写法 | 正确做法 |
| :--- | :--- | :--- |
| ① | 手改 `TabViews.uvue` / `pages.json` | 改 `config.uts` 或插件，构建会覆盖生成物 |
| ② | 从 `useTabbar()` 解构 `activeThemeColor` | 从 `useTabbarTheme()` 获取 |
| ③ | 使用数字下标设置角标 / 订阅事件 | 用 `tabType` + `resolveTabIndexByKey()` |
| ④ | `setCurIdx()` 后以为会跳页面 | 它只改状态；要跳转用 `switchTabbar()` 或 `useRouter()` |
| ⑤ | 页面里直接 `uni.switchTab` | 走 `switchTabbar()` / `useRouter()`，保留守卫与状态同步 |
| ⑥ | 只监听 `onTabShow()` 刷数据 | 优先 `onTabPageShow()`，覆盖从子页返回与回前台 |
| ⑦ | 在 Tab 子视图重复 `notifyPageShow()` | 只在宿主页面 / 容器桥接一次 |
| ⑧ | 自写固定高度 `50px` / `80px` | 用 `useTabbarMetrics()` 与 `<TabbarPlaceholder>` |
| ⑨ | 新增 `type: 'glass'` | 保持现有形态，用 `glassEffect` 开关 |
| ⑩ | 从 `core/` / `adapters/` 直接 import | 统一走 `@/src/tabbar/index.uts` |
| ⑪ | 在 `computed` / 条件分支里调用订阅 hook | 在 `setup` 顶层同步调用 |
| ⑫ | 自定义 UI 自己维护防连击 | 调 `handleTabbarClick()`，内部已有节流锁 |

---

## 9.7 验证命令

```bash
pnpm typecheck
pnpm test
pnpm exec eslint src/tabbar --ext .uts,.uvue
pnpm exec stylelint "src/tabbar/**/*.uvue"
git diff --check
```

涉及原生 UI、安全区、原生 TabBar、液态玻璃或 Kotlin 编译行为时，还必须补充 HBuilderX / 真机验证；`typecheck` 与 H5 构建不能证明原生端通过。

---

## 9.8 自检红线清单

- [ ] **1. 唯一真源**：Tab 增删改只改 `src/tabbar/config.uts`，未手改生成物。
- [ ] **2. 稳定标识**：事件订阅、角标、索引同步使用 `tabType`，未写死数字下标。
- [ ] **3. hooks 入口**：业务统一从 `@/src/tabbar/index.uts` 导入 hooks。
- [ ] **4. 主题归属**：`activeThemeColor` 从 `useTabbarTheme()` 获取。
- [ ] **5. 导航归属**：切 Tab 走 `switchTabbar()` / `useRouter()`，未裸调原生导航。
- [ ] **6. 生命周期**：页面重新显示场景优先 `onTabPageShow()`。
- [ ] **7. 宿主通知**：`notifyPageShow/Hide()` 只在宿主页面调用一次。
- [ ] **8. 底部避让**：使用 `<TabbarPlaceholder>` / `useTabbarMetrics()`，无固定高度硬编码。
- [ ] **9. 安全区**：使用 `safeAreaBottom`，未手写 `env(safe-area-inset-bottom)`。
- [ ] **10. 玻璃开关**：液态玻璃通过 `glassEffect` 控制，未新增独立 glass 类型。
- [ ] **11. 生成物边界**：未手改 `TabViews.uvue` 与 `pages.json`。
- [ ] **12. 模式判断**：使用 hook 返回值，未在业务重复解析 `VITE_TABBAR_MODE`。
- [ ] **13. 自定义 UI**：点击走 `handleTabbarClick()`，未复制节流与模式判断。
- [ ] **14. 页面作用域**：订阅 hooks 在 `setup` 顶层同步调用。
- [ ] **15. 验证闭环**：至少通过 typecheck、test、ESLint、Stylelint；原生改动另跑真机验证。
