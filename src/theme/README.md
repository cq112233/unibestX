# src/theme 主题与外观（换肤 · 深浅色 · 设计令牌）

主题层的**唯一真源是根目录 [theme.json](../../theme.json)**：亮 / 暗两套配色（页面底色、导航栏、TabBar）在那里声明，本目录负责把它读成运行时可用的「设计令牌」，并把主题色 / 外观模式应用到各端运行环境。

`themeColor` 是一个全局响应式 `ref`，TabBar、NavBar 等组件直接读它拿当前主色；深浅色则由 `useThemeStore().state.isDark` 驱动。

> 🚨 **改配色只改 [theme.json](../../theme.json)，不要在本文件里写死颜色。** 写死会在换肤 / 切深浅色时与 `pages.json` 的原生配置（导航栏、下拉刷新背景）对不上。

---

## 目录结构

```text
src/theme/
└── index.uts        # ⭐ 唯一文件：常量、令牌读取、运行环境应用、变更监听、ThemeUtils 单例
```

| 你要做的事 | 用哪个 API |
| :--- | :--- |
| 拿当前主色（响应式） | `themeColor`（ref） |
| 读亮 / 暗配色令牌 | `getThemeTokens(isDark)` |
| 给根容器绑 CSS 变量 | `getRootThemeStyle(themeColor, isDark)` |
| 判断当前是否深色 | `isDarkMode(mode, systemTheme?)` / `getSystemTheme()` |
| 改主题色 / 外观模式 | **不要直接调本目录的 apply 函数**，走 `useThemeStore().setTheme()` / `setThemeMode()` |
| 监听系统深浅色变化 | `watchThemeChange(cb)`（store 的 `initThemeMode()` 已内部接好） |

---

## 快速上手

### 1. 读当前主色（响应式）

```uts
import { themeColor } from '@/src/theme/index.uts';

// 主色变化时，依赖它的 computed / 模板会自动刷新
const activeColor = computed((): string => themeColor.value);
```

### 2. 读设计令牌（跟随深浅色）

```uts
import { computed } from 'vue';
import { getThemeTokens } from '@/src/theme/index.uts';
import type { ThemeTokens } from '@/src/theme/index.uts';
import { useThemeStore } from '@/src/store/index.uts';

// 标准写法：令牌随 isDark 变化自动重算（TabBar / NavBar 内部就是这么用的）
const tokens = computed((): ThemeTokens => getThemeTokens(useThemeStore().state.isDark));

// tokens.bgContent / navBg / navText / tabBg / tabBorder / tabColor / tabSelected
```

### 3. 给根容器绑 CSS 变量（全平台换肤的关键）

```html
<!-- App.ku.uvue 的实际做法：在根 view 上内联绑定 -->
<view :class="themeStore.state.isDark ? 'dark' : ''" :style="themeStyle">
```

```uts
const themeStyle = computed((): UTSJSONObject => {
  return getRootThemeStyle(themeStore.state.theme, themeStore.state.isDark);
});
```

> ⚠️ **必须绑在根元素的内联 `:style` 上**，不能只写在 CSS 里。uni-app X 的原生端
> 只有内联绑定的 CSS 变量才会随 JS 变量更新而重绘（详见 `unibestX-skill` 分册 2.1
> `.agents/skills/unibestX-skill/references/2-styling.md`）。

### 4. 换肤 / 切外观（走 store，别直调 apply）

```uts
import { useThemeStore } from '@/src/store/index.uts';

const themeStore = useThemeStore();

themeStore.setTheme('#0957DE');   // 换主色：同步 themeColor + CSS 变量 + 持久化
themeStore.setThemeMode('dark');  // 'auto' | 'light' | 'dark'：同步 setAppTheme + 重新计算 isDark
```

---

## API 一览

### 常量与类型

| 名称 | 说明 |
| :--- | :--- |
| `THEME_COLOR_PRESETS` | 预置主题色盘：`#37c2bc` / `#0957DE` / `#10b981` / `#f43f5e` / `#f97316` |
| `THEME_MODES` | 外观模式列表：`['auto', 'light', 'dark']` |
| `ThemeMode` | 外观模式类型：`'auto' \| 'light' \| 'dark'` |
| `ThemeTokens` | 令牌类型：`bgContent` / `navBg` / `navText` / `tabBg` / `tabBorder` / `tabColor` / `tabSelected` |

### 读取类

| 函数 | 说明 |
| :--- | :--- |
| `getDefaultTheme()` | 默认主色，读 `.env` 的 `VITE_DEFAULT_THEME`，兜底 `#37c2bc` |
| `getDefaultThemeMode()` | 默认外观模式，读 `.env` 的 `VITE_DEFAULT_THEME_MODE`，非法值兜底 `auto` |
| `getSystemTheme()` | 当前系统 / 宿主主题（`'dark'` / `'light'`）：App 读 `osTheme`、H5 读 `prefers-color-scheme`、小程序读 `hostTheme` |
| `isDarkMode(mode, systemTheme?)` | 按模式与系统状态算实际是否深色（`light` → false，`dark` → true，`auto` → 跟随系统） |
| `getThemeTokens(isDark)` | 读 [theme.json](../../theme.json) 的 `light` / `dark` 段，**纯读取、不切换主题** |

### 应用类

| 函数 | 作用范围 | 说明 |
| :--- | :--- | :--- |
| `applyThemeColor(color)` | H5 | 写 `document.documentElement` 的 `--theme-color` |
| `applyThemeMode(mode, isDark)` | App + H5 | App 调 `uni.setAppTheme`；H5 写 `data-theme` / `dark` class 与一组 CSS 变量 |
| `applyNavbarTheme(isDark)` | H5 + 小程序 | 同步原生导航栏配色（App 由 `setAppTheme` 系统级跟随，本函数不处理） |
| `watchThemeChange(cb)` | 全端 | 监听系统 / 宿主深浅色变化 |

> 💡 这些 `apply*` 函数已由 `useThemeStore()` 与 `App.ku.uvue` 在合适时机自动调用，
> 业务代码通常**不需要**直接调它们。需要「换肤」请用 store 的 `setTheme` / `setThemeMode`。

### 单例

`ThemeUtils` 类 + `theme`（别名 `themeUtils`）单例，方法名与上面一一对应，支持 `theme.isDarkMode('auto')` 这种面向对象写法；默认导出也是它。

---

## 谁在消费本模块

```text
theme.json（亮/暗配色，唯一真源）
      │
      └──► src/theme/index.uts        getThemeTokens / getRootThemeStyle / themeColor
               │
               ├──► App.ku.uvue                  根容器绑 CSS 变量 + applyNavbarTheme
               ├──► App.uvue                     useThemeStore().initThemeMode() + applyThemeColor
               ├──► src/store/*/theme.uts        useThemeStore()（setTheme / setThemeMode 是唯一写入口）
               ├──► src/tabbar/internal/theme.uts   isDark / themeTokens / activeThemeColor
               └──► src/layouts/navbar/utils/theme.uts  navbarThemeTokens / refresherBackground
```

---

## 红线

- **不要在业务里写死颜色**：一律走 `getThemeTokens()` 或 CSS 变量，否则深浅色切换时会漏改。
- **换肤 / 切模式必须走 `useThemeStore()`**：直接调 `applyThemeColor()` 不写 store、不持久化，重启即失效。
- **CSS 变量要绑在根元素内联 `:style` 上**：写在 CSS 类里在原生端不会随 JS 变量更新。
- **`getThemeTokens()` 只读不切**：它不会改主题，切换请用 `setThemeMode()`。

---

## 相关示例页

| 页面 | 演示内容 |
| :--- | :--- |
| [src/sub/themeBasicDemo](../../src/sub/themeBasicDemo/themeBasicDemo.uvue) | 色块换肤、外观模式三态切换、设计令牌与 CSS 变量读取 |
