# 暗黑模式（手动开关）设计

日期：2026-08-19
状态：已批准（方案一：CSS 变量 + Store 状态）

## 背景与目标

项目目前只有「主题色切换」（`--theme-color`），没有暗黑模式。目标：

- 提供暗黑模式，**手动开关**（放在主题 Demo 卡片 `ThemeSwitchCard` 里）
- 本期只做机制 + 全局基础变量（背景 / 文字 / 卡片色），页面不逐个改造，机制跑通后逐步铺开
- 跨端生效：H5 / App（Android / iOS / 鸿蒙，vapor 与 vdom 模式）/ 微信小程序

## 现状

- `src/store/app.uts`：`AppStore` 已有 `theme` / `locale` 状态 + `x-pinia` 持久化钩子（`_serialize` / `_hydrate` / `_doReset`），`setTheme` 通过 `--theme-color` 生效
- `App.ku.uvue`：全局根组件，根 `view` 已内联绑定 `--theme-color`（符合 uni-app x 的 CSS 变量规范：App 端必须根元素内联绑定才能响应式更新）
- `ThemeSwitchCard.uvue`：主题 Demo 卡片，目前是 5 个主色切换
- 项目使用 i18n（`$t`），文案在 `src/i18n/locales/zh-CN.json` / `en-US.json`
- 大量页面使用硬编码颜色（`text-[#94a3b8]`、`color: #666` 等），本期不逐个改造

## 设计

### 1. 状态：`src/store/app.uts`

- `IAppState` 增加 `isDark: boolean`，默认 `false`
- `state.isDark` / `defaultAppState.isDark` 同步新增
- 新增 action：

```ts
/** 设置暗黑模式 */
setDarkMode(dark: boolean): void {
  this.state.isDark = dark
  // H5：同步给 html 根节点 data-theme，方便 CSS 选择器与调试
  // #ifdef H5
  const docEl = document.documentElement
  if (docEl != null) {
    docEl.setAttribute('data-theme', dark ? 'dark' : 'light')
  }
  // #endif
}
```

- `_serialize` / `_hydrate` / `_doReset` 同步 `isDark` 字段（沿用现有 x-pinia 持久化，无额外依赖）

### 2. 变量：`App.ku.uvue`

根 `view` 的 `:style` 按 `isDark` 计算绑定变量（亮 / 暗两套），保留现有 `--theme-color`：

```ts
const themeStyle = computed((): UTSJSONObject => {
  const dark = appStore.state.isDark
  return {
    '--theme-color': appStore.state.theme,
    '--bg-color': dark ? '#0f172a' : '#f5f6fa',
    '--text-color': dark ? '#e2e8f0' : '#1e293b',
    '--text-secondary': dark ? '#94a3b8' : '#64748b',
    '--card-bg': dark ? '#1e293b' : '#ffffff',
    '--border-color': dark ? '#334155' : '#e2e8f0'
  } as UTSJSONObject
})
```

模板：`:style="themeStyle"`（替换现有的 `--theme-color` 内联绑定）。

变量集（本期最小集）：
| 变量 | 亮色 | 暗色 | 用途 |
| --- | --- | --- | --- |
| `--bg-color` | `#f5f6fa` | `#0f172a` | 页面背景 |
| `--text-color` | `#1e293b` | `#e2e8f0` | 主文字 |
| `--text-secondary` | `#64748b` | `#94a3b8` | 次要文字 |
| `--card-bg` | `#ffffff` | `#1e293b` | 卡片背景 |
| `--border-color` | `#e2e8f0` | `#334155` | 边框 |

### 3. 开关：`ThemeSwitchCard.uvue`

- 卡片顶部（主题色预览区下方）新增一行「暗黑模式」：

```html
<view class="flex-row justify-between items-center mt-10px">
  <text class="text-14px text-[var(--text-secondary,#64748b)]">暗黑模式</text>
  <switch :checked="appStore.state.isDark" color="var(--theme-color,#37c2bc)" @change="handleDarkChange" />
</view>
```

- `handleDarkChange(e)`：从事件取值并调用 `appStore.setDarkMode(...)`
- i18n：`zh-CN.json` / `en-US.json` 增加 `basic.themeDark` 文案

### 4. 本期演示点（验证机制）

- `App.ku.uvue`：根容器背景使用 `var(--bg-color)`（通过根 view 内联 style 或 scss）
- `src/pages/basic/components/Card.uvue`：卡片背景 / 标题文字改为 `var(--card-bg)` / `var(--text-color)`
- 其余页面硬编码颜色暂不改，机制跑通后逐步铺开

### 5. 约束

- 不引入新依赖
- 对象结构一律用 `type`，禁止 `interface`
- 字符串比较用 `==`；布尔类型显式声明
- 不做「跟随系统深色」（YAGNI，留待后续）

## 验证

- 编写后检查 UTS 语法与条件编译预处理
- 沙箱无法运行 HBuilderX 编译，需用户本机验证：H5 浏览器、App（Android / iOS / 鸿蒙）、微信小程序
- 验证点：开关切换后根背景 / 卡片 / 文字立即变化；重启应用后状态保持（持久化）

## 不做的事（YAGNI）

- 不逐个改造全部页面颜色
- 不跟随系统深色
- 不做动画 / 渐变过渡
