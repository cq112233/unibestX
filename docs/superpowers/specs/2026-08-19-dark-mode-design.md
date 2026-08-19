# 外观模式（跟随系统 / 浅色 / 深色）设计

日期：2026-08-19
状态：已批准（方案一：CSS 变量 + Store 状态，三态升级版）

## 背景与目标

项目目前只有「主题色切换」（`--theme-color`）。目标：

- 提供**外观模式三态**：`auto`（跟随系统/宿主）/ `light`（浅色）/ `dark`（深色），放在主题 Demo 卡片 `ThemeSwitchCard` 里
- App 端通过 `uni.setAppTheme` + `uni.onAppThemeChange` 跟随系统夜间模式；Web / 微信小程序通过 `hostTheme` + `uni.onHostThemeChange` 跟随宿主主题
- 本期只做机制 + 全局基础变量（背景 / 文字 / 卡片色），页面不逐个改造，机制跑通后逐步铺开
- 跨端生效：H5 / App（Android / iOS / 鸿蒙，vapor 与 vdom 模式）/ 微信小程序

## 现状

- `src/store/app.uts`：`AppStore` 已有 `theme` / `locale` 状态 + `x-pinia` 持久化钩子（`_serialize` / `_hydrate` / `_doReset`），`setTheme` 通过 `--theme-color` 生效
- `App.ku.uvue`：全局根包裹组件，根 `view` 已内联绑定主题 CSS 变量（符合 uni-app x 规范：App 端必须根元素内联绑定才能响应式更新）
- `App.uvue`：应用入口，`onLaunch` 中初始化主题模式（x-pinia 的持久化还原发生在 store 插件阶段，晚于构造函数，因此必须在 `onLaunch` 里读取还原后的 `themeMode`）
- `ThemeSwitchCard.uvue`：主题 Demo 卡片，目前是 5 个主色切换
- 项目使用 i18n（`$t`），文案在 `src/i18n/locales/zh-CN.json` / `en-US.json`
- 大量页面使用硬编码颜色（`text-[#94a3b8]`、`color: #666` 等），本期不逐个改造

## 设计

### 1. 状态：`src/store/app.uts`

- `IAppState` 增加 `themeMode: string`（`'auto' | 'light' | 'dark'`，默认 `'auto'`）与 `isDark: boolean`（实际生效亮暗，`auto` 时跟随上家主题）
- `_serialize` 只持久化 `themeMode`（`isDark` 是派生值）；`_hydrate` 兼容旧数据：有 `themeMode` 取三态，否则按旧 `isDark` 布尔迁移为 `light` / `dark`
- 新增 action：

```ts
/** 初始化外观模式：注册全局主题监听并应用当前模式 */
initThemeMode(): void {
  if (!this._themeModeInited) {
    this._themeModeInited = true
    // #ifdef APP
    // App：应用主题（含手动切换与跟随系统切换）真实变化时同步 isDark
    uni.onAppThemeChange((res: AppThemeChangeResult) => {
      this.state.isDark = res.appTheme == 'dark'
    })
    // #endif
    // #ifdef H5
    // H5：监听 prefers-color-scheme 变化，auto 模式下跟随系统深浅色
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.state.themeMode == 'auto') this.refreshIsDark()
    })
    // #endif
    // #ifndef APP
    // #ifndef H5
    // 微信小程序：宿主主题变化时，auto 模式下跟随更新
    uni.onHostThemeChange((res: OnHostThemeChangeCallbackResult) => {
      if (this.state.themeMode == 'auto') this.refreshIsDark()
    })
    // #endif
    // #endif
  }
  // #ifdef APP
  uni.setAppTheme({ theme: this.state.themeMode as 'light' | 'dark' | 'auto' })
  // #endif
  this.refreshIsDark()
}
```

- `setThemeMode(mode)`：写 `themeMode`，App 端调用 `uni.setAppTheme`，再 `refreshIsDark()`
- `refreshIsDark()`：`light` / `dark` 直接赋值；`auto` 时调用 `getSystemTheme()`（`src/utils/theme.uts`，App 读 `osTheme`，H5 用 `matchMedia`，小程序读 `hostTheme`）；H5 同步 `html[data-theme]`
- `_doReset` / `_hydrate` 沿用 x-pinia 持久化钩子，无额外依赖

### 2. 工具函数：`src/utils/theme.uts`

「获取系统/宿主主题」收敛到 utils，store 不直接触碰平台 API：

```ts
export function getSystemTheme(): string {
  let theme: string = 'light'
  // #ifdef APP
  theme = uni.getDeviceInfo().osTheme
  // #endif
  // #ifdef H5
  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  // #endif
  // #ifndef APP
  // #ifndef H5
  theme = uni.getAppBaseInfo().hostTheme
  // #endif
  // #endif
  return theme
}
```

### 3. 启动接入：`App.uvue`

`onLaunch` 中先 `useAppStore()`（触发持久化还原）再调用 `initThemeMode()`：

```ts
import { useAppStore } from './src/store'
onLaunch(() => {
  loadFont()
  useAppStore().initThemeMode()
  // ...
})
```

### 4. 变量：`App.ku.uvue`

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

### 5. 选择器：`ThemeSwitchCard.uvue`

- 主题色预览区下方新增一行「外观模式」，三个选项（跟随系统 / 浅色 / 深色）：

```html
<view class="flex-row justify-between items-center mt-10px">
  <text class="text-14px">外观模式</text>
  <view
    class="flex-row rounded-8px overflow-hidden"
    :style="{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--border-color, #e2e8f0)' }"
  >
    <view
      v-for="(item, index) in themeModeOptions"
      :key="index"
      :style="{ backgroundColor: appStore.state.themeMode == item.value ? appStore.state.theme : 'transparent' }"
      @click="changeThemeMode(item.value)"
    >
      <text>{{ item.label }}</text>
    </view>
  </view>
</view>
```

- `themeModeOptions` 为 `computed<ThemeModeOption[]>`（`type ThemeModeOption = { value: string; label: string }`）
- `changeThemeMode(value)`：调用 `appStore.setThemeMode(value)` 并 toast
- i18n：`zh-CN.json` / `en-US.json` 增加 `basic.themeModeTitle` / `themeModeAuto` / `themeModeLight` / `themeModeDark` / `themeModeSuccess`

### 6. 本期演示点（验证机制）

- `App.ku.uvue`：根容器背景使用 `var(--bg-color)`（通过根 view 内联 style 或 scss）
- `src/pages/basic/components/Card.uvue`：卡片背景 / 标题文字改为 `var(--card-bg)` / `var(--text-color)`
- 其余页面硬编码颜色暂不改，机制跑通后逐步铺开

### 7. 约束

- 不引入新依赖
- 对象结构一律用 `type`，禁止 `interface`
- 字符串比较用 `==`；布尔类型显式声明
- App 与 Web/小程序主题 API 不同，全部用条件编译（`#ifdef APP` / `#ifndef APP` / `#ifdef H5`）隔离

### 8. 系统级深色适配（theme.json + manifest darkmode）

按官方暗黑主题教程补充系统级（pages.json / tabbar / 导航栏）深色适配，避免页面转场闪白、小程序原生背景色滞后：

- 新增根目录 `theme.json`：`light` / `dark` 两套变量（导航栏、页面背景、背景文字、tabBar 颜色）
- `manifest.json`：`mp-weixin` 与 `web` 节点增加 `"darkmode": true`（App 端由 `uni.setAppTheme` 控制，无需该字段）
- `pages.config.json`（源）与生成的 `pages.json`：`globalStyle` 与 `tabBar` 改用 `@` 变量引用
- 注意：`pages.json` 由 `vite-plugin-uni-pages` 从 `pages.config.json` 自动生成，**主题变量必须写入 `pages.config.json`**，直接改 `pages.json` 会被覆盖
- 副作用（官方文档明确）：开启 `darkmode` 后 H5 / 小程序的 tabbar、导航栏、系统弹窗等 UI 跟随**宿主主题**，应用无法干预；与三态手动选择（如宿主深色但用户选 light）会不一致，属官方限制
- App 端 `theme.json` 的 dark 内容在 `uni.setAppTheme({ theme: 'dark' | 'auto' })` 后生效，`initThemeMode()` 已在 `onLaunch` 调用，覆盖三态与持久化恢复

### 9. 自定义 NavBar / TabBar 跟随 theme.json

uvue 组件运行时无法读取 `theme.json`（该文件仅供 pages.json 使用），因此将 theme.json 的亮 / 暗色值镜像到 `src/utils/theme.uts` 的 `getThemeTokens(isDark)`：

- `NavBar`：`bgColor` / `titleColor` 默认改为空串，未显式传色时取 `tokens.navBg` / `tokens.navText`；显式传色（如 uview-ultra demo 页 `bg-color="#ffffff"`）仍优先
- `TabBar`（`src/tabbar/index.uvue` + `TabbarItem.uvue`）：底板 / 安全区背景、顶部边框、未选中 / 选中颜色分别取 `tokens.tabBg` / `tokens.tabBorder` / `tokens.tabColor` / `tokens.tabSelected`
- 修改 `theme.json` 时需同步更新 `getThemeTokens` 中的色值（已在代码注释中标注）

## 验证

- 编写后检查 UTS 语法与条件编译预处理
- 沙箱无法运行 HBuilderX 编译，需用户本机验证：H5 浏览器、App（Android / iOS / 鸿蒙）、微信小程序
- 验证点：三态切换后根背景 / 卡片 / 文字立即变化；`auto` 下切换系统深浅色实时跟随；重启应用后状态保持（持久化）；旧版持久化数据（`isDark`）可正常迁移

## 不做的事（YAGNI）

- 不逐个改造全部页面颜色
- 不在 `manifest.json` 配置 `defaultAppTheme`（App 默认主题由 store 持久化的 `themeMode` 在 `onLaunch` 通过 `setAppTheme` 动态设置）
- 不处理 uview-ultra 组件库暗色（已知限制：组件库内部大量硬编码浅色，见 README 已知限制）
- 不做动画 / 渐变过渡
