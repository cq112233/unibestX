# 四、项目内置工具库（src/utils）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用，收录 `src/utils/` 下 11 个内置工具模块的对外 API 与使用规范。
>
> **何时读本文件**：动手写「路由取路径、取主题色、读环境变量、多语言文案、提示弹窗、返回键接管、下拉刷新、文件上传、取系统/安全区尺寸、防抖节流/流式处理、数学公式排版」之前 —— **先查本文件有没有现成工具，严禁重复造轮子**（例如自己写 `uni.getSystemInfoSync()`、裸写 `setInterval` 做防抖、手拼 `import.meta.env.VITE_XXX`、为渲染公式去引 KaTeX）。
>
> **回写规则**：`src/utils/` 新增模块、或既有模块新增导出 / 改变调用姿势时，同步追加到本文件，编号续接 `4.11`、`4.12`…，并更新 [SKILL.md](../SKILL.md) 的导航表。

> 📎 **通用约定（适用于本文件全部模块）**
> 1. **import 路径必须带 `.uts` 扩展名**，且 `@` 指向项目根：`import { xxx } from '@/src/utils/<模块名>/index.uts'`。漏掉扩展名会触发 TS2307 丢补全（见 3.3 / 1.3.19）。
> 2. **每个模块通常同时提供「具名函数」与「聚合单例类」两种等价调用方式**（如 `route` / `toastUtils`），并 `export default` 同一个单例。二选一即可，不要混着写。
> 3. 各模块的 `index.d.uts.ts` 声明文件由 `node scripts/gen-uts-dts.mjs` 生成（`systemInfo` 为手工同步），改动导出面后必须重新生成，否则 IDE 补全与运行时不符。

---

## 4.1 路由与路径工具（route）

**一句话定位**：统一收敛页面路径的规范化（补/去前导斜杠、去 query）、当前页面路径与页面栈获取，以及「两个路径是否同一页面」的比对。

**何时用**：需要拿当前页面路径做判断（TabBar 高亮、埋点、路由守卫）、要把 `pages.json` 里的短路径与运行时 `getCurrentPages()` 的路径统一格式时。**不要**自己 `split('?')`、不要手写 `getCurrentPages()[len-1].route`，本模块已把空栈与异常兜底处理好了。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `ensureLeadingSlash` | `(path: string): string` | 保证路径以前导 `/` 开头；空串返回 `'/'` |
| `removeLeadingSlash` | `(path: string): string` | 去掉一个前导 `/` |
| `cleanPath` | `(path: string): string` | 去 `?` 及其后内容并补前导 `/`；空串返回 `''` |
| `isSamePath` | `(path1: string, path2: string): boolean` | 清洗后比较两路径是否指向同一页面（含结尾后缀匹配） |
| `getCurrentRoute` | `(): string` | 栈顶页面原生 route，如 `"pages/index/index"`；取不到返回 `''` |
| `getCurrentPath` | `(): string` | 栈顶页面规范化路径，如 `"/pages/index/index"`；取不到返回 `''` |
| `getQueryString` | `(url: string): string` | 取 URL 中 `?` 之后的 query 串（不含 `?`），无参数返回 `''` |
| `getPageStackLength` | `(): number` | 当前页面栈深度，异常时返回 `0` |
| `RouteUtils`（类） | `new RouteUtils()` | 聚合类，方法为上述 8 个函数的同名同签名包装 |
| `route` / `routeUtils` | `const route: RouteUtils` | 全局单例（两个名字同一实例），`export default route` |

```uts
import { route, cleanPath, isSamePath } from '@/src/utils/route/index.uts'

// 方式 1：具名函数（纯路径处理，无副作用）
const p = cleanPath('/pages/index/index?tab=2')   // '/pages/index/index'
if (isSamePath(p, 'pages/index/index')) { /* 同一页面 */ }

// 方式 2：聚合单例，与具名函数完全等价
const current = route.getCurrentPath()            // '/pages/index/index'
const depth = route.getPageStackLength()          // 首页为 1
const qs = route.getQueryString('/pages/login?from=home&tab=1') // 'from=home&tab=1'
```

**使用注意**：
- `getCurrentRoute()` 返回**不带前导 `/`** 的原生 route，`getCurrentPath()` 才保证带 `/`；两者混用比较必然失败，统一格式请先过 `cleanPath`。
- 三个 `getCurrent*` 与 `getPageStackLength` 依赖 `getCurrentPages()`，页面栈为空时分别返回 `''` / `''` / `0`（源码内 `try/catch` 兜底，**不会抛异常**），可以放心在 `setup` / `onLoad` 阶段直接用；但判 `== ''` 仍是必要的。
- ⚠️ `isSamePath` **不是等值比较**，最后一步是**双向 `endsWith` 后缀匹配**（为兼容「带不带 `src/` 前缀」）。副作用：短路径会误判，`'pages/index/index'` 与 `'index/index'` 也返回 `true`。需要严格相等请 `cleanPath` 后自己 `==`。
- `cleanPath` 只截 `?` 之后的内容，**不处理 `#`**；`ensureLeadingSlash('')` 返回 `'/'` 而 `cleanPath('')` 返回 `''`，两者对空串态度不一致。
- 全同步纯函数，无生命周期限制、无 `#ifdef`，vapor / vdom 表现一致，可在任意位置（含 `App.uvue`、普通 `.uts`、子包页面）调用。

---

## 4.2 主题与换肤（theme）

**一句话定位**：以根目录 `theme.json` 为单源的亮/暗主题色板提供者，负责计算深浅色、下发根容器 CSS 变量，并在 H5 / 小程序端同步原生导航栏配色。

**何时用**：自定义 NavBar / TabBar / 卡片需要取当前主题的导航栏、TabBar、背景色时用 `getThemeTokens()`；要跟随系统深浅色或让用户切主题时用 `isDarkMode()` + `applyThemeMode()` + `getRootThemeStyle()`。**不要**在组件里手写 `#ffffff` / `#0f172a` 之类色值，也不要自己拼 `prefers-color-scheme` 判断。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `ThemeMode` | `type = 'auto' \| 'light' \| 'dark'` | 外观模式类型别名（接口参数实际是 `string`） |
| `THEME_MODES` | `string[]` | `['auto', 'light', 'dark']`，可直接喂给切换 UI |
| `THEME_COLOR_PRESETS` | `string[]` | 预置主题主色调色盘（5 个十六进制色） |
| `ThemeTokens` | `type { bgContent, navBg, navText, tabBg, tabBorder, tabColor, tabSelected: string }` | 亮/暗色板结构 |
| `getDefaultTheme` | `(): string` | 默认主色调，读 `VITE_DEFAULT_THEME`，兜底 `#37c2bc` |
| `themeColor` | `Ref<string>`（d.ts 生成为 `any`） | 全局响应式主题色，由 app store 写入 |
| `getSystemTheme` | `(): string` | 系统/宿主主题 `'dark' \| 'light'`，失败返回 `'light'` |
| `isDarkMode` | `(mode: string, systemTheme: string = getSystemTheme()): boolean` | 由模式 + 系统深浅色算出**实际是否暗色**；`auto` 时跟随系统 |
| `getThemeTokens` | `(isDark: boolean): ThemeTokens` | 取亮/暗色板，直接读 `theme.json` |
| `getRootThemeStyle` | `(themeColor: string, isDark: boolean): UTSJSONObject` | 根容器 CSS 变量对象 |
| `applyThemeColor` | `(color: string): void` | 应用主色调（**仅 H5**，写 `html` 的 `--theme-color`） |
| `applyThemeMode` | `(mode: string, isDark: boolean): void` | 应用外观模式（App → `uni.setAppTheme`；H5 → `html[data-theme]`） |
| `applyNavbarTheme` | `(isDark: boolean): void` | 同步原生导航栏配色（H5 改 DOM；微信小程序用 `uni.setNavigationBarColor`） |
| `watchThemeChange` | `(callback: () => void): void` | 监听系统/宿主深浅色变化（App / H5 / 小程序） |
| `ThemeUtils`（类） | 9 个方法，与上表同名函数一一对应 | **不含** `themeColor` / `THEME_MODES` / `THEME_COLOR_PRESETS` |
| `theme` / `themeUtils` | `const theme: ThemeUtils` | 全局单例（两个名字同一实例），`export default theme` |

```uts
import {
  THEME_COLOR_PRESETS, applyNavbarTheme, applyThemeColor, applyThemeMode,
  getRootThemeStyle, getThemeTokens, isDarkMode, themeColor
} from '@/src/utils/theme/index.uts'
import type { ThemeTokens } from '@/src/utils/theme/index.uts'

// 1. 取色板（自定义 NavBar / TabBar 用）
const isDark: boolean = isDarkMode('auto')          // 或 isDarkMode(store.state.themeMode)
const tokens: ThemeTokens = getThemeTokens(isDark)
console.log(tokens.navBg, tokens.navText, tokens.tabBg, tokens.tabBorder)

// 2. 根容器 CSS 变量（绑到 :style，注意传的是 themeColor.value）
const rootStyle: UTSJSONObject = getRootThemeStyle(themeColor.value, isDark)

// 3. 换肤 / 切换外观模式
themeColor.value = THEME_COLOR_PRESETS[1]           // ref，脚本里必须 .value
applyThemeColor(themeColor.value)                   // 仅 H5 生效
applyThemeMode('dark', true)                        // App: setAppTheme / H5: html[data-theme]

// 4. 原生导航栏同步（页面渲染后调用，内部 nextTick）
applyNavbarTheme(false)

// 聚合单例（与具名函数等价）
import { theme } from '@/src/utils/theme/index.uts'
console.log(theme.getSystemTheme(), theme.getThemeTokens(true).tabSelected)
```

**使用注意**：
- **单源是根目录 `theme.json`**：`getThemeTokens()` 直接 `import` 该 JSON（依赖 UTS 的 JSON 导入能力，HBuilderX 4.25+），逐字段 `as string` 转换。`navigationBarTextStyle` / `tabBarBorderStyle` 的 `black` / `white` 是枚举，会被映射成具体色值。**往 `theme.json` 加字段时必须同步改 `ThemeTokens` 类型与 `getThemeTokens()` 的字段映射**，否则新字段永远取不到（缺字段得到 null 被 `as string` 强转，运行时才暴露）。
- ⚠️ **动态换肤在原生端受限（与 1.2.1 同源）**：`applyThemeColor()` 只有 `#ifdef H5` 分支，**App / 小程序调用是空操作**。原生端主色调只能靠 `theme.json` + `pages.json` 的编译期 `@` 变量配置，运行期改 `--theme-color` 不会重绘原生导航栏 / 原生 TabBar，只能影响走了 CSS 变量的自定义组件。**写「运行时全局换肤」需求前必须先确认端。**
- `applyThemeMode()` **没有小程序分支**：App 走 `uni.setAppTheme`，H5 写 `html[data-theme]`；小程序深浅色依赖 `theme.json` + `pages.json` 的 darkmode 静态配置。
- `applyNavbarTheme()`：uni-app X **没有「运行时全局 navbar 配置」API**。H5 用 DOM 方式改写 `uni-page-head` 背景色/文字色并逐个改返回按钮 SVG 的 `fill`，内部 `nextTick` 异步执行，需在页面渲染后调用（项目里在 `App.ku.uvue` 的 `onMounted` 与 `isDark` 的 `watch` 中调用）；微信小程序用 `uni.setNavigationBarColor`（`frontColor` 仅支持 `#ffffff` / `#000000`）；**App 端不处理**，靠 `setAppTheme` 系统级跟随。`navigationStyle: custom` 的页面没有 `uni-page-head`，H5 端自动跳过。
- ⚠️ `watchThemeChange()` **不提供取消监听入口**（返回 `void`），重复调用会累积回调 → **只在应用生命周期内注册一次**（参考 `src/store/vapor/app.ts` 的 `_themeModeInited` 守卫写法）。
- ⚠️ `themeColor` 是 `ref`，脚本里必须 `themeColor.value`；且 `.d.uts.ts` 里它被生成为 `any`（生成器无法表达 Vue 的 `Ref`），IDE 拿不到 `.value` 的类型与补全 —— 写成 `themeColor = '#xxx'` **编译器不报错**。
- `getRootThemeStyle(themeColor: string, isDark: boolean)` 的形参与导出的 `themeColor` ref **同名**，务必显式传 `themeColor.value`；返回的 CSS 变量键为 `--bg-color` / `--border-color` / `--card-bg` / `--text-color` / `--text-secondary` / `--theme-color`。
- **与安全区的关系**：theme 模块**不处理安全区**，安全区由 4.9 `systemInfo` 的 `safeAreaInsets` / `safeAreaBottom` 提供；TabBar 用 `getThemeTokens()` 的 `tabBg` / `tabBorder` 填充底部安全区垫高块。
- **VDOM / Vapor**：本模块自身无 `#ifdef VUE3-VAPOR` 分支，两套 store（`src/store/vapor/app.ts`、`src/store/vdom/app.uts`）import 的是同一份；需要判断当前模式请用 4.3 `env` 的 `isVaporMode()`。
- 接口参数是 `string` 而非 `ThemeMode` 类型（`isDarkMode(mode: string)`、`applyThemeMode(mode: string)`），**传错枚举值不会报编译错误**，只会静默按非 light/dark 处理（走 `auto` 逻辑）。

---

## 4.3 环境变量与配置（env）

**一句话定位**：把全项目所有 `import.meta.env.*` 读取、环境类型判断、TabBar 策略与平台/编译模式探测收敛成一组具名函数，并提供 `env` 单例。

**何时用**：需要读任何 `.env` 配置（接口域名、主题色、默认语言、OSS、TabBar 模式）或判断「当前是什么环境 / 什么平台 / Vapor 还是 VDOM」时，一律走本模块。**不要**在业务里直接 `import.meta.env.VITE_XXX`，也不要硬编码域名与 `process.env.NODE_ENV` 判断。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `getAppTitle` | `(): string` | 应用名称，读 `VITE_APP_TITLE`，兜底 `unibestX` |
| `getAppVersion` | `(): string` | 版本号：优先运行时 `uni.getSystemInfoSync().appVersion`，微信小程序再走 `uni.getAppBaseInfo()`，最后 `VITE_APP_VERSION` / `1.0.0` |
| `getApiBaseUrl` | `(): string` | 主接口 BaseURL，读 `VITE_SERVER_BASEURL` |
| `getApiSecondaryUrl` | `(): string` | 备用接口 BaseURL |
| `getH5UseProxy` | `(): boolean` | H5 是否走反向代理（`VITE_H5_USE_PROXY == 'true'`），仅 H5 有意义 |
| `getDefaultTheme` | `(): string` | 默认主题主色调，兜底 `#37c2bc` |
| `getDefaultLocale` | `(): string` | 默认语言：`VITE_DEFAULT_LOCALE` → 系统 `appLanguage` 含 zh/en → `zh-CN` |
| `getStreamUrl` | `(): string` | 流式接口地址；相对路径自动拼 `getApiBaseUrl()`，绝对 `http(s)` 原样返回，未配置返回 `''` |
| `getOssBaseUrl` / `getOssUploadPath` / `getOssUploadUrl` | `(): string` | OSS 域名 / 上传路径 / 二者拼接 |
| `getTabBarMode` | `(): string` | TabBar 策略原始串，读 `VITE_TABBAR_MODE`，兜底 `'1'` |
| `getTabbarStrategyNum` | `(): number` | 策略数值：0 无 / 1 原生 / 2 带原生自定义 / 3 纯自定义 / 4 单页 TabBar；接受 `NO_TABBAR` 等英文别名，无法识别返回 `1` |
| `isNativeTabBar` | `(): boolean` | 是否原生 TabBar（`'1'` 或 `NATIVE_TABBAR`） |
| `isVaporMode` | `(): boolean` | 是否 Vapor 渲染模式（编译条件 `VUE3-VAPOR`） |
| `getCurrentEnv` | `(): string` | `'development' \| 'test' \| 'production'` |
| `getCurrentEnvName` | `(): string` | 环境中文名，读 `VITE_ENV_NAME`；**未配置时返回空字符串** |
| `isDev` / `isTest` / `isProd` | `(): boolean` | 基于 `getCurrentEnv()` 的便捷判断 |
| `getCompilePlatform` | `(): string` | 编译目标平台中文名（`H5`/`Android`/`iOS`/`HarmonyOS`/`微信小程序`/…） |
| `getCompileMode` | `(): string` | 展示串，如 `Vapor 模式 (开发)` / `VDOM 模式 (生产)` |
| `EnvUtils`（类） | 22 个方法，与上表同名同签名一一对应 | 可 `new`，但通常直接用单例 |
| `env` / `envUtils` | `const env: EnvUtils` | 全局单例（两个名字同一实例），`export default env` |

```uts
// 具名导入（推荐，按需引入体积最小）
import { getApiBaseUrl, getStreamUrl, getTabbarStrategyNum, getCompileMode, isDev } from '@/src/utils/env/index.uts'

const baseUrl: string = getApiBaseUrl()
const strategy: number = getTabbarStrategyNum()
if (isDev()) { console.log(getCompileMode()) }   // "Vapor 模式 (开发)"

// 聚合单例（与具名函数等价，适合集中调试打印）
import { env } from '@/src/utils/env/index.uts'
console.log(env.getApiBaseUrl(), env.getDefaultLocale(), env.getCompilePlatform())
```

**使用注意**：
- ⚠️ **禁止在业务代码直读 `import.meta.env`**：其类型是 `string | null`，参与 UTS 强类型运算会报错；必须经本模块用 `` `${...}` `` + `??`（不是 `||`）收敛成 `string`。
- **`import.meta.env` 是构建期注入的编译期常量**：改 `.env` / 切环境**必须重新编译**才生效，运行期读不到 —— 不要写「运行时切换环境」的逻辑。
- `getCurrentEnvName()` 未配置 `VITE_ENV_NAME` 时返回 `''`（不会自动推导中文名），调用方需判空。
- `getStreamUrl()` 未配置时返回 `''`，调用方需自行回退到本地模拟流。
- `getH5UseProxy()` 只影响 H5（App / 小程序始终直连完整域名）；实际调用处也只在 `#ifdef H5` 内读取（`src/http/request.uts`）。
- `getCompilePlatform()` / `isVaporMode()` 依赖 `#ifdef` 条件编译，是**编译期判定**而非运行时探测；只有「其它平台」兜底分支才走 `uni.getSystemInfoSync().uniPlatform`。
- `getAppVersion()` 优先取运行时系统版本，可能与 `VITE_APP_VERSION` 不一致。
- `getTabbarStrategyNum()` 未知值一律落到 `1`（原生策略），新增模式名时需同步该函数。
- `getDefaultTheme()` 在本模块与 4.2 `theme` 模块各有一份（实现相同）；**项目约定主题取色统一走 theme 模块**。
- 需要成体系的应用/环境信息（appTitle、appVersion、envName、安全区、可用高度）请用 4.9 `systemInfo`，它内部复用本模块函数。
- 本模块不区分 VDOM / Vapor 两条实现路径，而是用 `isVaporMode()` / `getCompileMode()` 把编译模式暴露给调用方。

---

## 4.4 国际化（i18n）

**一句话定位**：对 `src/i18n/index.uts` 里 `lime-i18n` 实例的轻量封装，提供带「找不到就回退成 key」保护的翻译函数，以及原生 TabBar / NavigationBar 文案的多语言刷新。

**何时用**：页面/组件里取多语言文案、语言包里用 `%key%` 包装的配置表取值、切换语言后刷新原生 TabBar 与导航栏标题时。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `t` | `(key: string, named: UTSJSONObject \| null = null): string` | 通用翻译；未命中或结果为空串时回退返回原 `key` |
| `$t` | `(key: string, named: UTSJSONObject \| null = null): string` | `t` 的快捷别名，项目内 `.uvue` 普遍用这个 |
| `getI18nText` | `(key: string): string` | 兼容 `%basic.langTitle%` 与 `basic.langTitle` 两种写法；未命中回退返回**去掉 `%` 后的** key |
| `setTabbarItem` | `(): void` | 遍历 `@/src/tabbar/index.uts` 的 `tabbarList`，逐项 `uni.setTabBarItem({ index, text })` |
| `setNavigationBarTitle` | `(titleKey: string): void` | 设置当前页导航栏标题，并 `uni.$emit('setNavbarTitle', title)` |
| `testI18n` | `(): void` | 非 vue/uvue 环境自测示例，弹 `uni.showModal` |
| `I18nUtils`（类） | 方法签名与上表 6 个函数逐一对应 | 聚合类 |
| `i18nUtils` | `const i18nUtils: I18nUtils` | 全局单例，`export default i18nUtils` |

```uts
import { t, $t, getI18nText, setTabbarItem, setNavigationBarTitle } from '@/src/utils/i18n/index.uts'
import { i18nUtils } from '@/src/utils/i18n/index.uts'   // 单例写法，与上面等价

const title = $t('basic.langTitle')                 // "语言设置"
const safe = t('not.exist.key')                     // "not.exist.key"（回退成 key，不必判空）
const hello = $t('message.hello', { msg: 'hi' })    // 语言包写 "hello": "{msg}，世界！" → "hi，世界！"
const navTitle = getI18nText('%basic.langTitle%')   // 兼容 %xxx% 包装

setNavigationBarTitle('basic.langTitle')            // 内部会 uni.$emit('setNavbarTitle', title)
setTabbarItem()                                     // 切语言后刷新原生 TabBar 文案
i18nUtils.t('message.welcome')
```

**使用注意**：
- 语言包在 `src/i18n/locales/zh-CN.json` / `en-US.json`，由 `src/i18n/index.uts` 用 `@/uni_modules/lime-i18n` 的 `createI18n` 组装，**`fallbackLocale` 固定为 `'en-US'`**，默认语言取自 4.3 `env` 的 `getDefaultLocale()`。key 是嵌套 JSON 的点分路径。
- ⚠️ **本模块不负责切换语言**。切换走 store：`appStore.setLocale(lang)`（store 开了 `persist: true`，持久化到 `uVueI18nLocale`）。**切完必须再调 `setTabbarItem()`** 才会刷新原生 TabBar 文案，参考 `src/pages/basic/components/LangSwitchCard.uvue`。
- `t` / `$t` / `getI18nText` 的返回值**永不为 null**（源码内部已做 `res != null && res.length > 0` 回退），无需再做空判断。
- 命名参数形参类型是 `UTSJSONObject`，直接传内联对象字面量即可。
- `getI18nText` 只在字符串**首尾同时是 `%` 且长度 > 2** 时才脱壳；`%` 或 `%%` 会被当成普通 key。
- `setTabbarItem()` 依赖全局 `tabbarList`，会**整体覆盖**每一项的原生文案（index 按数组下标对齐）；tabbar 配置里的 `text` 写的是裸 key（如 `'tabbar.home'`），两种格式都由 `getI18nText` 兼容。
- ⚠️ `setNavigationBarTitle()` 除设标题外还会广播 `uni.$emit('setNavbarTitle', title)`，该事件名与 4.7 `refresh` 的 `EVENT_SET_NAVBAR_TITLE` 相同（对应 `setNavbarTitle()` / `resetNavbarTitle()`），**别在外部重复监听造成双写**。
- 本模块只调用 `i18n.global.t`，是纯函数封装，vdom / vapor 用法一致。直接 `import i18n from '@/src/i18n/index.uts'` 拿到的是 `lime-i18n` 的 `any` 类型实例，会丢类型提示，**优先走本模块**。

---

## 4.5 消息提示（toast）

**一句话定位**：对 `uni.showToast` 的语义化快捷封装（成功 / 失败 / 普通文本），外加一个可自定 icon 与时长的底层 `showToast`。

**何时用**：操作反馈提示。普通文案用 `toast`，表单/请求成功失败用 `toastSuccess` / `toastError`，需要 loading 或自定义时长时用 `showToast`。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `showToast` | `(options: UTSJSONObject): void` | 底层方法，从 `options` 读 `message ?? title ?? ''`、`icon ?? 'none'`、`duration ?? 1500` |
| `toast` | `(message: string, _type: string = 'default'): void` | 纯文本提示，固定 `icon: 'none'` |
| `toastSuccess` | `(message: string): void` | `icon: 'success'` |
| `toastError` | `(message: string): void` | `icon: 'error'` |
| `toastWarning` / `toastPrimary` | `(message: string): void` | 直接转调 `toast(message)`，**实际无图标** |
| `ToastUtils`（类） | `showToast` / `toast` / `info` / `success` / `error` / `warning` / `primary` | 聚合类 |
| `toastUtils` | `const toastUtils: ToastUtils` | 全局单例，`export default toastUtils` |

```uts
import { showToast, toast, toastSuccess, toastError } from '@/src/utils/toast/index.uts'
import { toastUtils } from '@/src/utils/toast/index.uts'   // 注意方法名与函数名不同：success / error / info

toast('普通文本提示')                  // icon: 'none'
toastSuccess('操作成功')               // icon: 'success'
toastError('操作失败')                 // icon: 'error'

// 底层：自定 icon 与时长
showToast({ message: '加载中...', icon: 'loading', duration: 3000 })
showToast({ title: '只传 title 也能取到文案' })   // message 缺省时回退 title

// 单例写法（等价）
toastUtils.success('操作成功')
toastUtils.showToast({ message: '底层调用' })
```

**使用注意**：
- ⚠️ **`toast(message, _type)` 的第二个参数是死参数**（源码中带 `_` 前缀且从未被读取），传 `'success'` 不会变成成功图标；要图标必须用 `toastSuccess` / `toastError` / `showToast`。
- ⚠️ `toastWarning` / `toastPrimary` 只是 `toast` 的转调，**没有任何颜色或图标差异**，仅作语义表达；`ToastUtils.warning` / `ToastUtils.primary` 同理。这是本项目最容易写出「以为有图标其实没有」的地方。
- ⚠️ `showToast(options)` 形参是 `UTSJSONObject` 而非强类型对象：**字段名写错（如 `msg:`、`Icon:`）编译器不报错**，只是静默走默认值；且 `message` 优先于 `title`。
- `icon` 在源码中被收窄为 `'success' | 'loading' | 'error' | 'none'` 四种；三个快捷函数都**不传 `duration`**，只有 `showToast` 会显式传（默认 1500）。
- **没有导出隐藏提示的方法**（无 `hideToast`），需要手动关闭 loading 请自己调 `uni.hideToast()`。
- 所有方法返回 `void`，无回调、无 Promise，不阻塞后续代码。纯 `uni.showToast` 封装，无 `#ifdef`，vdom / vapor 用法一致。

---

## 4.6 返回键接管（backPress）

**一句话定位**：一个「再按一次退出应用」的双击退出处理器 —— 首次按下弹 toast，2 秒内再次按下才真正退出进程。

**何时用**：App 首页（tabbar 页）需要拦截物理返回键、避免误触退出时。在页面的 `onBackPress` 生命周期里调用。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `handleBackPressExit` | `(): boolean` | 首次按下返回 `true`（拦截并提示「再按一次退出应用」），2 秒内再次按下执行退出并返回 `false` |

> 本模块**只有这一个具名函数导出，没有聚合类、没有单例、没有默认导出**，因此只有一种调用方式。

```uts
import { handleBackPressExit } from '@/src/utils/backPress/index.uts'

// 页面里自行注册 onBackPress 生命周期，本模块不会自动挂载
// 真实用法见 src/pages/index/index.uvue / me.uvue / basic.uvue / function.uvue
onBackPress((options: OnBackPressOptions): boolean => {
  // #ifdef APP
  if (options.from == 'backbutton') {
    return handleBackPressExit()
  }
  // #endif
  return false
});
```

**使用注意**：
- ⚠️ **必须自己注册 `onBackPress`**。本模块只是一个被调用的纯函数，不做任何全局注册；项目内示例把注册包在 `// #ifdef APP` 里，并判断 `options.from == 'backbutton'`（只有物理返回键触发，导航栏返回按钮不接管），`#endif` 外一律 `return false`。
- ⚠️ **返回值语义与直觉相反**：`true` = 消费掉本次返回事件（页面**不**退出），`false` = 不拦截、交给系统退出。所以首次按下「没退出」是预期行为；误改成 `return false` 会导致按一下就退出。首次调用时函数**内部已经弹了** `uni.showToast({ title: '再按一次退出应用', position: 'bottom' })`，调用方不要重复弹。
- ⚠️ **安卓专属实现**：只有 `// #ifdef APP-ANDROID` 分支才走 `UTSAndroid.getUniActivity()` → `activity.finishAffinity()` → 500ms 后 `java.lang.System.exit(0)`；这段被 `try/catch` 包着，异常时兜底 `uni.exit()`。非 Android（`// #ifndef APP-ANDROID`）直接 `uni.exit()`。**照抄时千万别把 `UTSAndroid.getUniActivity()` 挪出 `#ifdef APP-ANDROID`**，否则其他端编译不过。
- 之所以要 `finishAffinity()` + 延时 `System.exit(0)`（源码注释原文）：为了播完退出动画同时彻底杀进程，保证下次启动是干净冷启动，避免 re-entry 时 `setupRenderEffect` NPE。
- 双击判定窗口是 **2000ms**，状态存在模块级变量 `firstBackTime` 上（非导出）；超时后由 `setTimeout` 里的 `firstBackTime == now` 比对自动复位。多个页面共用同一份状态，但 `onBackPress` 只对当前页面生效。
- 这是**页面级**能力：只声明在 `pages.json` 里的 tabbar/首页才有意义，内页返回上一级请勿调用。

---

## 4.7 下拉刷新与导航栏控制（refresh）

**一句话定位**：以 `uni.$emit` / `$on` 为总线，统一驱动内置 NavBar 布局的滚动/触底/下拉刷新事件，并动态控制导航栏标题、导航栏与状态栏显隐、页面滚动与下拉开关。

**何时用**：页面用 `layout: 'navbar'` 布局时，`onPageScroll` / `onReachBottom` **拿不到**滚动与触底事件，必须改用本模块的 `onNavbarPageScroll` / `onNavbarReachBottom`；下拉刷新收尾要结束 NavBar 自定义刷新态时用 `stopNavbarPullDownRefresh`；需要运行时改标题/隐藏导航栏时用 `setNavbarTitle` / `setHideNavbar`，而不是去改 `props`。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `isPageScrollDisabled` | `Ref<boolean>` | 页面滚动禁用开关（**反向语义**：`true` = 禁用），由布局消费 |
| `isPageRefresherDisabled` | `Ref<boolean>` | 页面下拉刷新禁用开关（反向语义） |
| `setPageScrollEnabled` | `(enabled: boolean): void` | 启用/禁用页面滚动，内部写 `isPageScrollDisabled = !enabled` |
| `setPageRefresherEnabled` | `(enabled: boolean): void` | 启用/禁用页面下拉刷新 |
| `onNavbarPageScroll` | `(callback: (e: PageScrollDetail) => void): void` | 监听 NavBar 布局内滚动，**替代原生 `onPageScroll`** |
| `onNavbarReachBottom` | `(callback: () => void): void` | 监听 NavBar 布局内触底，**替代原生 `onReachBottom`** |
| `onNavbarPullDownRefresh` | `(callback: () => void): void` | 监听 NavBar 布局下拉刷新触发 |
| `stopNavbarPullDownRefresh` | `(): void` | 停止刷新：同时 `$emit('stopPagePullDownRefresh')` 与调 `uni.stopPullDownRefresh()` |
| `setNavbarTitle` | `(title: string): void` | 改 NavBar 布局标题，**并**调 `uni.setNavigationBarTitle` 改原生标题栏 |
| `resetNavbarTitle` | `(): void` | 恢复为页面初始配置标题 |
| `setNavbarVisible` | `(visible: boolean): void` | 导航栏显隐，**参数是「显示」** |
| `setHideNavbar` | `(hide: boolean): void` | 导航栏显隐，**参数是「隐藏」**（与上一个语义相反） |
| `resetNavbarVisible` | `(): void` | 恢复导航栏初始显隐 |
| `setStatusBarVisible` | `(visible: boolean): void` | 状态栏占位显隐，参数是「显示」 |
| `setHideStatusBar` | `(hide: boolean): void` | 状态栏占位显隐，参数是「隐藏」 |
| `resetStatusBarVisible` | `(): void` | 恢复状态栏初始显隐 |
| `PageScrollDetail` | `type { scrollTop: number }` | 滚动回调参数类型 |
| `EVENT_*`（10 个） | `string` | 事件名常量，如 `EVENT_SET_NAVBAR_TITLE = 'setNavbarTitle'` |
| `RefreshUtils`（类） | 13 个控制方法，**不含 `setHideStatusBar`** | 聚合类 |
| `refresh` / `refreshUtils` | `const refresh: RefreshUtils` | 全局单例（两个名字同一实例），`export default refresh` |

```uts
import {
  refresh, onNavbarPullDownRefresh, stopNavbarPullDownRefresh,
  setNavbarTitle, setPageScrollEnabled
} from '@/src/utils/refresh/index.uts'

definePage({
  layout: 'navbar',              // 必须：事件源来自内置 NavBar 布局
  enablePullDownRefresh: true,
  navigationStyle: 'custom'
})

// ⚠️ 必须在 <script setup> 顶层同步调用（内部用 onMounted 注册、onUnmounted 自动解绑）
onNavbarPullDownRefresh(() => {
  loadData()
  setTimeout(() => { stopNavbarPullDownRefresh() }, 600)
})

// 方式 2：聚合单例
refresh.setNavbarTitle('详情')
refresh.setHideNavbar(true)        // 注意参数是「隐藏」
setPageScrollEnabled(false)        // 具名函数：禁用页面滚动
```

**使用注意**：
- ⚠️ **三个 `onNavbar*` 必须在组件 setup 的同步执行期调用**（即 `<script setup>` 顶层）。它们内部是 `onMounted` 注册 + `onUnmounted` 解绑，写在 `onLoad`、`setTimeout`、事件回调或异步分支里，生命周期钩子注册窗口已过，监听会**静默丢失且不报错**。无需手动 `$off`，但重复调用会重复注册。
- ⚠️ **事件源在布局的滚动容器里，`navbar` 与 `default` 两种布局都有，只有 `layout: false` 没有**。三个 `onNavbar*` 的派发点分别在 `src/layouts/navbar.uvue` 与 `src/layouts/default.uvue` 的 `scroll-view` 上——`default.uvue` **同样派发** `onPagePullDownRefresh`（L222）/ `onNavbarPageScroll`（L254）/ `onNavbarReachBottom`（L263）。只有 `layout: false`（插件完全不包裹页面）或 `layout: 'empty'`（无滚动容器）时，这些监听才**收不到任何回调（静默无效果）**。布局选型详见 **5.4**。
- ⚠️ **`set*` / `reset*` 系列是全局 `uni.$emit` 广播，不是定向调用**：`src/layouts/navbar.uvue` 注册了 9 个事件监听，而 `src/layouts/default.uvue` **只监听 `stopPagePullDownRefresh`** —— 所以在 `layout: 'default'` 页面上调 `setNavbarTitle` / `setHideNavbar` / `setStatusBarVisible` 全是**无声空操作**。同时存活的多个 navbar 页面会**一起**收到广播，跨页场景请自行用页面栈判断后再调用。
- ⚠️ **参数语义方向相反，极易写反**：`setNavbarVisible(visible)` vs `setHideNavbar(hide)`、`setStatusBarVisible(visible)` vs `setHideStatusBar(hide)`；`isPageScrollDisabled` / `isPageRefresherDisabled` 也是「Disabled」反向语义。这两个 ref 是给布局消费的，业务侧请走 `setPageScrollEnabled` / `setPageRefresherEnabled`，**不要直接 `.value` 赋值**。
- ⚠️ **`RefreshUtils` 聚合类漏包了 `setHideStatusBar`**（具名导出 14 个函数，类上只有 13 个方法），且两个 `Ref` 开关与 10 个 `EVENT_*` 常量也不在类上。要控制「隐藏状态栏占位」**必须用具名函数** `setHideStatusBar(hide)` —— `refresh.setHideStatusBar(...)` 不存在。这类不对称不会导致编译报错，属于静默缺口。
- `stopNavbarPullDownRefresh()` 同时发事件并调 `uni.stopPullDownRefresh()`，**原生下拉与 NavBar 自定义下拉两种模式都适用**（NavBar 布局按 `definePage.style.enablePullDownRefresh` 决定走哪一种：原生开了就优先原生、关掉用内部自定义下拉）。
- 下拉刷新的两个事件名常量（`'onPagePullDownRefresh'` / `'stopPagePullDownRefresh'`）在源码里是**模块私有 `const`，未导出**；只有其余 8 个事件名有 `EVENT_*` 常量导出。需要手工 `uni.$on` 时字符串要自己保证与源码一致。
- ⚠️ **页面里不要定义与这些导出同名的局部函数**（`src/layouts/navbar.uvue:317` 的注释记录了实测坑）：同名时局部函数会被模块包级函数接管，导致**事件自触发死循环**。页面自定义函数一律加业务前缀（同 1.3.14）。
- 本模块未见 `#ifdef`、也未在 vapor 与 vdom 间分流，行为全端一致。

---

## 4.8 文件上传（upload）

**一句话定位**：对 `uni.uploadFile` 的统一封装，负责 URL 拼接、Token 注入、进度回调，以及把各家后端的响应体解析成最终 OSS 地址字符串。

**何时用**：任何「选文件 → 传后端 → 拿回可访问 URL」的场景。App / 小程序 / H5 全端通用，返回 `Promise<string>`。**不要**自己写 `uni.uploadFile` 再手工判 `code`、解 `data.url`，本模块已覆盖 `code` 数字/字符串、`success` 布尔、`data` 为字符串或对象等常见形态。

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `UploadFileOptions` | `type { url?: string; filePath: string; name?: string; header?: UTSJSONObject; formData?: UTSJSONObject; ignoreAuth?: boolean; onProgress?: (progress: number) => void }` | 上传参数类型 |
| `uploadFile` | `(options: UploadFileOptions): Promise<string>` | 通用上传，成功 resolve 文件 URL，失败 reject `Error` |
| `uploadOssFile` | `(filePath: string, formData: UTSJSONObject \| null = null, ignoreAuth: boolean = false): Promise<string>` | 走默认 OSS 接口的快捷方法 |
| `DEFAULT_OSS_BASE_URL` | `string` | `VITE_UPLOAD_BASEURL`，未配置时兜底 `'https://xxx.com'` |
| `DEFAULT_OSS_UPLOAD_PATH` | `string` | `VITE_UPLOAD_PATH`，未配置时兜底 `'/gateway/user/sys/oss/upload/xxx'` |
| `DEFAULT_OSS_UPLOAD_URL` | `string` | 上两者拼接的完整地址，`uploadOssFile` 默认使用 |
| `UploadUtils`（类） | 包装 `uploadFile` / `uploadOssFile` | 聚合类 |
| `upload` / `uploadUtils` | `const upload: UploadUtils` | 全局单例（两个名字同一实例），`export default upload` |

```uts
import { uploadFile, uploadOssFile } from '@/src/utils/upload/index.uts'
import type { UploadFileOptions } from '@/src/utils/upload/index.uts'

uni.chooseImage({
  count: 1,
  success: (res) => {
    const filePath = res.tempFilePaths[0] as string

    // 方式 1：通用上传（可自定义接口、formData、进度）
    uploadFile({
      url: '/gateway/user/sys/oss/upload/xxx', // 相对路径会拼接 DEFAULT_OSS_BASE_URL
      filePath,
      formData: { bizType: 'avatar' } as UTSJSONObject,
      ignoreAuth: false,                       // false 时自动注入 token
      onProgress: (progress: number) => { console.log('上传进度', progress) }  // 0 - 100
    } as UploadFileOptions)
      .then((url: string) => { console.log('上传成功 OSS 地址:', url) })
      .catch((err: Error | null) => {
        uni.showToast({ title: err?.message ?? '上传失败', icon: 'none' })
      })

    // 方式 2：快捷函数（走默认 OSS 地址）
    uploadOssFile(filePath).then((url: string) => { /* ... */ })
  }
})
```

**使用注意**：
- `url` 可省略或传**以 `/` 开头的相对路径**（会拼上 `DEFAULT_OSS_BASE_URL`），也可传完整 `http(s)` 地址（原样使用）；省略时取模块加载时算好的 `DEFAULT_OSS_UPLOAD_URL`。
- **自动鉴权**：`ignoreAuth != true` 时同步调用 `useTokenStore().getToken()`，把值写进 header 的 **`token` 字段**（不是 `Authorization`，源码里也没加 `Bearer` 前缀）；`getToken()` 返回 `''` 时不写。`useTokenStore` 需要 Pinia 已安装 —— 页面/组件内正常调用即可，但**不要放进应用初始化之前的裸 `.uts` 顶层逻辑**。
- ⚠️ **`header` 会被就地改写**：源码是 `const header = options.header ?? ({} as UTSJSONObject)` 之后直接 `header.token = token`。若复用同一个长期存在的 header 常量对象，**token 会残留并串到后续请求上**；建议每次传新对象，或干脆不传。
- `formData` 可显式传 `null`（内部 `?? {}` 兜底，仓库里的 `src/api/foo.uts` 就是这么调的）；`name` 默认 `'file'`。`uploadOssFile` 的第二参同样接受 `null`。
- 成功判定为**双重条件**：`res.statusCode == 200` **且**响应体业务解析成功；否则 reject 一个 `Error`，message 是中文（如 `上传请求失败，HTTP 状态码: xxx` / `上传失败[code]：msg`），取提示请用 `err?.message`。
- 响应解析顺序（`parseUploadResult`，**私有未导出**）：纯 `http(s)://` 文本 → JSON；`success == false` 直接抛错；未给 `success` 时校验 `code` 白名单（数字 `200`/`0`/`10000`，字符串 `'200'`/`'0'`/`'10000'`/`'000000'`/`'SUCCESS'`/`'OK'`），不在白名单即抛错；再依次取顶层 `url` → `data`（字符串且非 `'null'`）→ `data.url`/`fileUrl`/`ossUrl`/`path`/`link`。**若是 JSON 却一个 URL 都没解析出来，会抛「上传成功但未能从响应中解析出文件 URL 地址」**，而不会把 JSON 原样当 URL 返回；非 JSON 的纯文本则原样作为 URL 返回。
- `onProgress` 只在你传入时才挂载 `uploadTask.onProgressUpdate`，回调参数 `progress` 是 `0`-`100` 的数字。
- ⚠️ `DEFAULT_OSS_*` 是**模块加载时**从 `import.meta.env` 读出的常量（`VITE_UPLOAD_BASEURL` / `VITE_UPLOAD_PATH`），**改完 `.env` 必须重新构建才生效**；未配置时兜底域名是占位符 `https://xxx.com`，真上传前务必配好 `.env`。
- 无生命周期限制（不像 4.7 `refresh` 依赖 setup 期），子包页面、普通 `.uts` 工具函数里都能直接调；未使用 `#ifdef`，也未按 vapor/vdom 分流，全端一致。

---

## 4.9 系统与设备信息（systemInfo）

**一句话定位**：全端统一采集「屏幕 / 窗口 / 状态栏 / 安全区 / 导航栏 / TabBar / 胶囊按钮 / 设备与编译环境」的响应式度量中心，并提供页面可用高度的自动计算。

**何时用**：需要屏幕/窗口尺寸、状态栏高度、底部安全区做布局（自定义导航栏、底部操作栏、悬浮按钮避让）；需要给 `scroll-view` 算「撑满剩余视口」的高度；需要在模板里响应式显示编译器版本、运行环境、Vapor/VDOM 模式、设备型号；需要判断 HBuilderX 编译器版本做分支兼容；需要微信小程序胶囊按钮位置对齐自定义导航栏标题。

> ⚠️ **不要**自己写 `uni.getSystemInfoSync()`：本模块已对多平台字段来源做了兜底（`getWindowInfo` / `getDeviceInfo` / `getAppBaseInfo` / `getSystemInfoSync` 互相回退）、对安全区做了跨端语义归一，并封装成响应式值。

**响应式值（模板 / computed 首选，`<script>` 里读必须 `.value`）**

| API | 类型 | 说明 |
| :--- | :--- | :--- |
| `NAVBAR_CONTENT_HEIGHT` / `TABBAR_BASE_HEIGHT` | `const number` | 导航栏内容区基准高度 44 / TabBar 基准高度 50（px） |
| `systemId` | `let number` | 系统信息变更计数器，每次 `updateAvailableHeight()` 自增（**是 `let` 可变导出**，别当常量用） |
| `systemInfo` | `Ref<SystemInfoType \| null>` | 全量系统信息快照 |
| `safeAreaInsets` | `Ref<SystemSafeAreaInsets \| null>` | 安全区插入距离 `{ top, right, bottom, left }`（**跨端语义已归一**） |
| `menuRect` | `ComputedRef<SystemMenuRect \| null>` | 微信小程序胶囊矩形；其余平台恒为 null |
| `windowWidth` / `windowHeight` / `screenWidth` / `screenHeight` | `ComputedRef<number>` | 窗口与屏幕尺寸（px），未初始化时为 0 |
| `statusBarHeight` / `navBarHeight` / `tabBarHeight` | `ComputedRef<number>` | 状态栏 / 导航栏内容区 / TabBar 高度；后两者未初始化时回退基准值 44 / 50 |
| `availableHeight` | `ComputedRef<number>` | 页面可用内容高度（px），按当前 TabBar 策略二次修正 |
| `safeAreaBottom` | `ComputedRef<number>` | 底部安全区高度（px）；**未初始化时为 0（不是 null），无需判空** |

**函数与类型**

| API | 签名 | 说明 |
| :--- | :--- | :--- |
| `updateSystemInfo` | `(): void` | 重新采集系统信息并整体写入响应式状态 |
| `isCompilerVersionGte` | `(targetVersion: string): boolean` | 当前编译器版本是否 ≥ 目标版本（如 `'5.25'`） |
| `getScrollHeight` | `(topOffset?: number, bottomOffset?: number, minusStatusBar?: boolean): number` | 页面视口内滚动容器的自适应剩余高度（px） |
| `updateAvailableHeight` | `(kuProps: AppKuHeightProps, selectedTabbarStrategy: number): void` | 框架内部使用，**业务页面不要自己构造调用** |
| `SystemUtils`（类）/ `systemUtils` / `sys` | 全局单例（`sys` 是别名同一实例），`export default systemUtils` | 命令式取值的唯一入口，见下 |
| `SystemInfoType` / `SystemSafeAreaInsets` / `SystemSafeArea` / `SystemMenuRect` / `AppKuHeightProps` | `type` | 快照 / 安全区 / 胶囊矩形 / 高度计算 props 类型 |

`SystemUtils` 单例成员：与顶层同名的 `readonly` 值（`NAVBAR_CONTENT_HEIGHT`、`systemInfo`、各 `ComputedRef`），加上**顶层刻意不导出**的命令式取值方法：`getInfo()`、`getStatusBarHeight()`、`getWindowHeight()`、`getScreenWidth()`、`getScreenHeight()`、`getNavBarHeight()`、`getTabBarHeight(includeSafeArea?)`、`getAvailableHeight()`、`getSafeAreaBottom()`、`getMenuRect()`、`getScrollHeight(...)`、`updateSystemInfo()`、`isCompilerVersionGte(v)`。

```uts
// ===== 方式 1：具名导入响应式值（模板 / computed 里首选）=====
import {
  availableHeight, menuRect, safeAreaBottom, systemInfo, windowWidth
} from '@/src/utils/systemInfo/index.uts'
import type { SystemInfoType } from '@/src/utils/systemInfo/index.uts'

const listHeight = availableHeight.value      // 顶层响应式值在 <script> 里必须 .value
const capsule = menuRect.value                // SystemMenuRect | null，仅微信小程序有值

// systemInfo 是可空 ref，UTS 强类型下必须判空后再逐字段读
const info: SystemInfoType | null = systemInfo.value
if (info != null) { console.log(info.platformName, info.isVapor, info.compilerVersion) }

// ===== 方式 2：聚合单例（命令式实时取值）=====
import { systemUtils, sys } from '@/src/utils/systemInfo/index.uts'

console.log(sys.getNavBarHeight())                // 导航栏内容区高度
console.log(systemUtils.getTabBarHeight(true))    // 50 + 底部安全区

// ===== 场景：给 scroll-view 算撑满剩余视口的高度 =====
import { getScrollHeight, isCompilerVersionGte } from '@/src/utils/systemInfo/index.uts'

const scrollH = getScrollHeight(88, 0)   // 顶部已占 88px（自定义导航栏），自动扣状态栏
// #ifdef H5
const canUseAbsoluteTabbar = isCompilerVersionGte('5.25')
// #endif
```

**使用注意**：
- **模块导入时已自动执行一次 `updateSystemInfo()`**（`index.uts` 文件末尾），`src/layouts/default.uvue` 又在 `onMounted` 里补刷了一次。但类型上 `systemInfo.value` 仍是 `SystemInfoType | null`，**必须判空或 `?.` + `??`**（源码内部也统一这么做）。
- ⚠️ **顶层刻意不导出 `getNavBarHeight()` / `getTabBarHeight()`** —— 为规避 Kotlin 端「顶层 computed `tabBarHeight` 会生成静态 getter `getTabBarHeight()`」的平台声明冲突（见 **1.1.11**，本项目 2026-09-15 在 `src/utils/systemInfo/index.uts` 上真实踩过）。需要命令式取值请走单例。**新增顶层 `getXxx()` 函数前先比对本文件顶层是否已有 `xxx` 属性。**
- ⚠️ `menuRect` **仅在微信小程序（MP-WEIXIN）** 由 `uni.getMenuButtonBoundingClientRect()` 写入，其余平台恒为 null；微信下若页面尚未就绪导致该 API 抛错，也会被 `try/catch` 吞掉而保持 null（**两种 null 成因不同**）。
- ⚠️ `SystemMenuRect` 六个字段全是**视口坐标**（原点为屏幕左上角），与 CSS 的 `right` / `bottom` 语义**相反**：`right` 是胶囊右边缘距**屏幕左边**的距离。「距屏幕右边」要自己算 `screenWidth - right`。
- ⚠️ **`safeArea` 存在跨端语义差异**：微信下是绝对坐标矩形，其余平台是相对边界距离（源码注释明确）。跨端直接读 `systemInfo.value.safeArea` 要留意；统一语义的是 `safeAreaInsets`。
- ⚠️ `availableHeight` **不是简单减状态栏**：它按当前 TabBar 策略二次修正（策略 0/4 直接返回基准值；策略 2/3 且 `customTabbarConfig.type != 'default'` 时额外加回 `TABBAR_BASE_HEIGHT + safeAreaInsets.top`）。**不要自己手算，直接用这个值。**
- `getScrollHeight(topOffset, bottomOffset, minusStatusBar)` 默认 `minusStatusBar = true`（自动扣状态栏）；当 `isNativeTabBar()` 为真（`VITE_TABBAR_MODE=1`）时**会再自动扣掉 `TABBAR_BASE_HEIGHT + 底部安全区`**，所以**不要重复扣 TabBar 高度**；返回值已用 `Math.max(0, ...)` 夹紧，不会为负。
- ⚠️ **严禁滥用 `getScrollHeight` 做页面高度计算（Flex-1 绝对优先）**：
  - 在标准页面布局中，凡能通过原生 Flex 弹性盒模型（父容器 `flex flex-col flex-1`，子级 `scroll-view` / `swiper` 使用 `flex-1 flex flex-col`）天然撑满剩余空间的，**必须一律使用 `flex-1`，严禁滥用 JS/UTS 动态计算绑定 `:style="{ height: ... }"`**；
  - 滥用 JS 算高的严重缺陷：硬编码偏移量（如写死 48px）极其脆弱、首帧响应式计算未就绪时容易高度为 0 导致空白或闪烁、不同模式下容易重复扣除 TabBar 导致高度异常变短；
  - `getScrollHeight` **仅作为极少数第三方老旧组件或特殊 Canvas 必须强制传入具体像素值且 Flex 无法生效时的最后兜底手段**，日常页面开发严禁滥用。
- `isCompilerVersionGte('5.25')`：版本比较是**逐段 parseInt 的数字比较**（`'5.25'` vs `'5.10'` 不会被当字符串比），且当 `compilerVersion` 为空字符串时**直接返回 false**。真实用例见 `src/tabbar/internal/native.uts` 与 `src/tabbar/internal/metrics.uts`（后者用 `#ifdef H5` 包裹，非 H5 恒为 false）。
- `compilerVersion` 是多平台兜底得到的：H5 走 `globalThis.__uniConfig.compilerVersion`，其余优先 `uni.getSystemInfoSync().uniCompileVersion`，再兜 `uni.getAppBaseInfo()`，**全部失败时兜底 `'1.0.0'`**。
- `updateAvailableHeight(kuProps, selectedTabbarStrategy)` 是给 `App.ku.uvue` **编译期自动注入的 props** 用的（`AppKuHeightProps` 由 autoRootPlugin 全量注入），其 `pageStyle` 真实类型是 `UTSJSONObject | null`（纯 TS 声明文件里用 `Record<string, any>` 近似）。
- **本模块没有 Vapor / VDOM 两条实现路径**（源码无 `VUE3-VAPOR` 条件编译）；当前模式通过 `systemInfo.value.isVapor` 与 `compileMode` 对外暴露。

---

## 4.10 轻量响应式（rxjs-lite）

**一句话定位**：用纯 UTS 重写的极简 RxJS（Observable / Subject / Subscription + 18 个创建与管道操作符），**用于防抖、节流、流式累积、定时轮询等一切「事件流」场景**。

**为什么需要它**：uni-app X 的 App 端（Android 编译 Kotlin、iOS 编译 Swift）**没有 JS 引擎**，npm 上的 rxjs **根本无法引入**。所以只能用这个纯 UTS 实现。

**何时用**：输入框联想 / 搜索框防抖、滚动或点击节流；流式请求（SSE / chunked 分块返回）的累积与渲染（用 `scan` 拼完整文本）；定时轮询、倒计时等需要「一键停止全部流」的场景；把按钮点击/用户输入这类命令式事件源转成声明式流（`Subject`）；请求失败降级到本地兜底数据（`catchError`）。

> ⚠️ **不要**自己裸写 `setInterval` + 手动清理：本库把定时器/事件监听的释放统一收进 `Subscription`，语义对齐 rxjs，可在 Android / iOS / H5 / 小程序全端一致运行。

**核心类**

| 类型 | 构造 / 方法 | 说明 |
| :--- | :--- | :--- |
| `Observable<T>` | `constructor(subscribeFn: SubscribeFn<T>)`；`subscribe(nextFn?, errorFn?, completeFn?): Subscription`；`pipe<R>(operator: Operator<T, R>): Observable<R>` | 可被多次订阅的数据流定义 |
| `Subject<T>` | `asObservable(): Observable<T>`；`next(v)` / `error(e)` / `complete()` / `observerCount(): number` | 多播源：既可被订阅也可主动 push（**不继承 Observable**） |
| `Subscription` | `isClosed(): boolean` / `add(teardown)` / `unsubscribe(): void` | 订阅凭证，`unsubscribe()` 释放上游全部定时器/请求/监听（幂等） |
| `Subscriber<T>` | `constructor(nextFn?, errorFn?, completeFn?)`；`next` / `error` / `complete` | 订阅者（**是 class，不是对象字面量**） |
| `NextFn<T>` / `ErrorFn` / `CompleteFn` / `TeardownFn` / `SubscribeFn<T>` / `Operator<T, R>` | `type` | 回调与操作符类型别名 |

**创建函数**：`fromArray(values)`、`interval(period)`、`timer(delay, value)`、`throwError(err)`
**管道操作符**：`map`、`scan(accumulator, seed)`、`toArray`、`filter`、`distinctUntilChanged(comparator?)`、`debounceTime(due)`、`throttleTime(due)`、`take(count)`、`takeUntil(notifier)`、`tap(callback)`、`startWith(value)`、`catchError(handler)`、`finalize(callback)`
**批量工具**：`unsubscribeAll(subscriptions: Array<Subscription>): void`

```uts
import {
  Subject, interval, throwError, scan, filter, debounceTime, takeUntil, catchError, unsubscribeAll
} from '@/src/utils/rxjs-lite/index.uts'
import type { Subscription } from '@/src/utils/rxjs-lite/index.uts'

const subs: Array<Subscription> = []          // 统一收集订阅句柄

// 1) 输入防抖（搜索框场景）：Subject 必须先 asObservable() 才有 subscribe / pipe
//    ⚠️ 句柄务必 push 进 subs —— 页面卸载时必须 unsubscribeAll（见下方 4)），否则防抖定时器常驻
const keyword$ = new Subject<string>()
subs.push(
  keyword$.asObservable()
    .pipe(debounceTime(300))
    .pipe(filter((kw: string): boolean => kw != ''))
    .subscribe((kw: string): void => { console.log('搜索关键词:', kw) })
)
keyword$.next('uni')

// 2) 定时流 + 停止信号：interval 不会自己结束
const stop$ = new Subject<void>()
subs.push(
  interval(1000)
    .pipe(takeUntil(stop$.asObservable()))
    .subscribe(
      (i: number): void => { console.log('tick', i) },
      null,                                   // 不需要 error 回调也必须显式传 null
      (): void => { console.log('流已结束') }
    )
)
stop$.next()

// 3) 流式拼接 + 失败降级（泛型无法从入参推断时必须显式写 <string>）
subs.push(
  throwError<string>('网络异常')
    .pipe(catchError((err: any): Observable<string> => timer(0, '本地兜底数据')))
    .pipe(scan((acc: string, text: string): string => acc + text, ''))
    .subscribe((full: string): void => { console.log(full) })
)

// 4) 页面卸载：批量取消（定时器 / 请求 / 监听一次性释放）
onUnmounted(() => { unsubscribeAll(subs) })
```

**使用注意**：
- ⚠️ **`Subject` 刻意不继承 `Observable`，因此它没有 `subscribe()` 也没有 `pipe()`**：必须先 `subject.asObservable()` 才能串联操作符或订阅；`takeUntil` 的入参同样要传 `stop$.asObservable()`。源码注释说明原因：Kotlin 的 `super(...)` 构造参数中无法引用 `this`，故用组合替代继承。**这与 rxjs 的写法不同，是本库最容易写错的一处。**
- ⚠️ **`pipe()` 一次只接收一个操作符**（UTS 重载与变参泛型支持有限），多个操作符必须链式调用：`.pipe(op1).pipe(op2)`。
- ⚠️ **`subscribe(nextFn, errorFn, completeFn)` 三个回调位置固定，不用的必须显式传 `null`**（UTS 禁止 `undefined`）。回调必须写全参数类型与返回类型：`(kw: string): void => {}`。
- ⚠️ **`subscribe()` 返回 `Subscription`，页面 `onUnmounted` 必须取消订阅**，否则 `interval` / `debounceTime` 的定时器会持续运行。流正常完成或出错时框架会**自动** `unsubscribe()`（对齐 rxjs 语义），此时 `isClosed()` 为 `true`。
- `interval(period)` **不会自动结束**，必须配 `take(n)` 或 `takeUntil(notifier)`。
- ⚠️ `unsubscribeAll(subscriptions)` 内部遍历后会 `splice(0, length)` **清空传入的数组**，调用后再遍历该数组会得到空结果。
- `Subject` 一旦 `complete()` / `error()`，内部 `_stopped` 置真，后续 `next()` 被静默忽略、`asObservable()` 的新订阅者会立即收到 `complete()`；`observerCount()` 可查当前订阅者数，用于排查泄漏。
- ⚠️ `throwError<T>(err)` 与 `toArray<T>()` **签名里没有可推断泛型的入参**，必须显式写类型参数（如 `throwError<string>('x')`）。
- `catchError(handler)` 只在**上游出错**时切到备用流；备用流自身再出错会继续向下游传播。`finalize(callback)` 在正常完成 / 出错 / 被取消订阅三种情况下都执行一次，适合复位 loading、关闭外部资源。`distinctUntilChanged()` 不传 comparator 时用 `==` 比较。
- ⚠️ **在 `.uvue` 里给流相关的局部函数命名要避开 Vue 的全局导出**：项目真实踩坑 —— 把函数命名成 `stop` 会被解析到 `@vue/reactivity` 的 `stop(runner: ReactiveEffectRunner)`，Kotlin 端报「No value passed for parameter 'runner'」，项目最终改名为 `stopStream`；且 `<script setup>` 局部函数在 Kotlin 端**声明不提升**，必须先定义再调用（见 **1.3.14**）。
- ⚠️ `Subscriber` 刻意实现为 **class 而非对象字面量**（源码注释：UTS 在 Android 端会把对象字面量中的函数字段编译为 Kotlin `Map`，存在编译/运行风险）。业务侧自定义 `Observable` 时也应遵循这个姿势，不要用 `{ next: ..., complete: ... }` 字面量（同 **1.1.10**）。
- **本模块没有 Vapor / VDOM 两条实现路径**：全文件无 `VUE3-VAPOR` 条件编译，纯 UTS 实现，源码注释明确「可在 Android / iOS / H5 / 小程序全端一致运行」。
- 本模块**没有默认导出**（只有具名导出），使用方一律具名导入。

## 4.11 LaTeX 公式排版（katex-lite）

**一句话定位**：用纯 UTS 重写的极简 LaTeX 排版引擎（单文件、无第三方依赖），把公式源码排成一组**绝对定位图元**（文本盒 + 线段）；渲染由使用页面自理（几行模板，见下），项目里**没有**单独的公式组件。

**为什么需要它**：App 端没有 JS 引擎，npm 上的 KaTeX 是纯 JS，**根本跑不起来**；mp-html 官方的 latex 插件同样走「H5 塞 KaTeX.js + App 走 WebView」的路线，与本项目的原生渲染链路不兼容。而项目内的 mp-html 只支持 text / image / table / pre 等有限标签，分式、根号、上下标这类二维排版用它的标签体系表达不出来（原生端 `<text>` 里也不能嵌 `<view>`）—— 所以公式只能自己排。

**何时用**：需要展示数学公式（分式、根式、上下标、大运算符上下限、矩阵、分段函数）；AI 对话里「公式混在 Markdown 源文里、随分块到达、到一块重排一次」的场景。

**导出面**

| 导出 | 签名 | 说明 |
| :--- | :--- | :--- |
| `renderKatex` | `(latex: string, fontSize: number): KatexLayout` | 排版主入口；`fontSize` 是基准字号 px |
| `KatexLayout` | `{ width; height; boxes; error }` | `width` / `height` 为公式尺寸 px；`error` 非空表示排版失败（已兜底，不抛异常） |
| `KatexBox` | `{ kind; text; x; top; width; fontSize; lineHeight; italic }` | `kind` 为 `'text'`（文本盒）或 `'rule'`（分数线 / 根号横线 / 上划线）；坐标已换算成容器坐标系，直接 `position:absolute` 定位 |
| `KATEX_BASELINE_RATIO` | `number = 0.84` | 文本盒「顶边 → 基线」的距离系数；换字体族时改这一个数 |

**在页面里渲染（项目现状：不封组件）**

引擎只管排版，渲染三步就能贴进页面，`rxjsDemo.uvue` 的流式公式段就是这么写的：

```uts
// 1) 引擎输出 → 模板能直接绑的样式串（文本框与线段盒分开收集）
type KatexRenderBox = { text: string; style: string }

function buildTextBoxes(latex: string, size: number): Array<KatexRenderBox> {
  const layout: KatexLayout = renderKatex(latex, size)
  const list: Array<KatexRenderBox> = []
  const boxes: Array<KatexBox> = layout.boxes
  for (let i: number = 0; i < boxes.length; i++) {
    const box: KatexBox = boxes[i]
    if (box.kind != 'text') {
      continue
    }
    // line-height 必须等于 font-size，基线换算系数（KATEX_BASELINE_RATIO）才成立
    let style: string = `position:absolute;top:${box.top}px;left:${box.x}px;`
      + `font-size:${box.fontSize}px;line-height:${box.fontSize}px;color:#0f172a;`
    if (box.italic) {
      style = `${style}font-style:italic;`
    }
    list.push({ text: box.text, style: style } as KatexRenderBox)
  }
  return list
}
// 线段盒同理，只是样式换成 width / height / background-color
```

```html
<!-- 2) 模板：容器用引擎算好的宽高，图元绝对定位贴进去 -->
<view :style="rootStyle">
  <text v-for="(box, i) in textBoxes" :key="`t${i}`" :style="box.style">{{ box.text }}</text>
  <view v-for="(box, i) in ruleBoxes" :key="`r${i}`" :style="box.style" />
</view>
```

- `rootStyle` 即 `position:relative;width:${layout.width}px;height:${layout.height}px`，由引擎算好，页面不要自己测量或判断居中。
- **块级公式**：外面套一层 `flex flex-row items-center` 即可居中（容器自带宽高）。
- **行内公式**：与 `<text>` 并排放在同一个 flex 行里 —— 把一句话拆成「文本片段 / 公式片段」交替的列表，模板按序平铺（`$$ … $$` 切片方案只覆盖独立成行的块级公式，行内公式要按这条自己拼）。
- ⚠️ 一处页面有多个渲染点时图元模板会重复（uni-app X 不能在同一个 `.uvue` 内定义局部组件），**改动渲染方式务必同步每一处**。

**流式公式：把公式写进 Markdown 源文，按 `$$` 切片**

AI 对话场景下公式不该单独开一条流，而是**写进同一份 Markdown 源文**，按定界符把累积文本切成交替的「Markdown 片段 / 公式片段」，再分别交给 marked 与 katex-lite：

```uts
// 片段类型：kind 为 'md' 时用 html，为 'formula' 时用 render
type StreamPart = { kind: string; html: string; render: FormulaRender }

// 逐段扫描：碰到 $$ 就切一刀，中间那段交给 katex-lite
let mdStart: number = 0
let cursor: number = 0
while (cursor < text.length) {
  const open: number = text.indexOf('$$', cursor)
  if (open < 0) { break }
  if (!isLineStart(text, open)) {           // 行内的 $$ 不算（行内代码里写到的 $$ 要留给 Markdown）
    cursor = open + 2
    continue
  }
  const close: number = text.indexOf('$$', open + 2)
  pushMarkdownPart(parts, text.substring(mdStart, open))
  if (close < 0) {                          // $$ 还没闭合：尾部整段当公式，半截命令实时重排
    pushFormulaPart(parts, text.substring(open + 2))
    return parts
  }
  pushFormulaPart(parts, text.substring(open + 2, close))
  cursor = close + 2
  mdStart = cursor
}
```

- 定界符只认 **独立成行** 的 `$$`（`isLineStart`：往前只有行首或空白），行内代码里的 `$$` 归 Markdown，免得把一段散文拖去当 LaTeX 排版。
- 空白片段直接丢掉，避免产出空节点；公式源码 `trim()` 后再排版。
- 模板按序平铺：`kind == 'md'` 走 `<MpHtml :content="part.html" />`，`kind == 'formula'` 走上面的图元模板（成行公式外面套 `items-center` 居中）。
- ⚠️ 已知取舍：**围栏代码块**里独立成行的 `$$` 仍会被当成公式（切片器不做 Markdown 语法分析），演示源文里避开即可。

**同一套切片：mermaid 围栏 → mermaid-lite 排成原生视图**

`mermaid` 是纯 JS 库，App 端没有 JS 引擎跑不起来（见 1.3.9 所在分册的渲染链路说明）。
**不要走「远端渲染成图片」那条路**（mermaid.ink / kroki）：要联网、放大就糊、字号也不跟页面走，本质还是一张网图。
项目自研的 `mermaid-lite`（`src/utils/mermaid-lite/index.uts`）和 katex-lite 一样**自己排版**，
输出的是「框 / 线 / 箭头 / 文字」四类图元，页面用普通 view 与 text 绝对定位贴上去 ——
不联网、跟着页面字号走、点开放大到 3× 依然清晰。

**接入三步**

```uts
import { renderMermaid } from '@/src/utils/mermaid-lite/index.uts'
import type { MermaidLayout, MermaidShape } from '@/src/utils/mermaid-lite/index.uts'

// 1) 引擎：源码 + 字号 → 图元（width / height 是整图尺寸，shapes 是图元表）
const layout: MermaidLayout = renderMermaid('graph TD\n  A[开始] --> B{判断}\n  B --> C[左]\n', 12)

// 2) 页面：图元 → 样式串（配色在页面侧定，引擎只管几何）
//    'node'        → bgBoxes（底层，先画，否则实底会把文字与连线盖住）
//    'text'        → textBoxes（line-height = font-size，与公式文本框同一规矩）
//    'edge'/'arrow'→ ruleBoxes（连线与箭头切片，都是「带底色的 view」）
const nodeStyle: string = `position:absolute;top:${shape.top}px;left:${shape.x}px;`
  + `width:${shape.width}px;height:${shape.height}px;box-sizing:border-box;`
  + `background-color:#ede9fe;border-width:1.5px;border-style:solid;`
  + `border-color:#8b5cf6;border-radius:${shape.radius}px;`
```

```html
<!-- 3) 模板：三组图元按「底 → 中 → 上」平铺，容器宽高直接用引擎算好的 rootStyle -->
<view :style="part.render.rootStyle">
  <view v-for="(box, bi) in part.render.bgBoxes" :key="`fb${bi}`" :style="box.style" />
  <text v-for="(box, bi) in part.render.textBoxes" :key="`ft${bi}`" :style="box.style">{{ box.text }}</text>
  <view v-for="(box, bi) in part.render.ruleBoxes" :key="`fr${bi}`" :style="box.style" />
</view>
```

**支持范围**（子集，够画流程图）

| 语法 | 说明 |
| :--- | :--- |
| `graph TD` / `flowchart LR` | `TD`/`TB`/`BT` 纵向、`LR`/`RL` 横向（不做反向）；缺省 TD |
| `A[方框]` `B(圆角)` `C((圆))` `D([体育场])` `E{菱形}` `F` | 菱形按方框画；裸 id 直接显示 id |
| `A --> B` / `A --- B` / `A --> B --> C` | 带箭头 / 不带箭头 / 链式，共用一条解析 |
| `A -->|文字| B` | 标签跳过不渲染，只保证解析不串行 |
| `;` 分隔多语句、`%%` 整行注释 | — |
| 子图 `subgraph`、`classDef`/`style`/`click`、时序图与状态图、`-.->`/`==>` | **不支持**，按普通连线降级处理 |

- **分层**：`layer(下游) = 1 + max(layer(上游))` 松弛到稳定，最多跑「节点数 + 1」遍 ⇒ **有环也不会死循环**，回边直接不画。
- **节点尺寸**：文字宽度复用 katex-lite 导出的 `measureTextWidth`（原生端拿不到字体度量，字宽表全项目只维护一份）；节点高 = 字号 + 上下内边距。
- **连线**：正交折线（纵向：下 → 横 → 下；横向：右 → 竖 → 右），中点是拐弯处。
- **箭头**：`ARROW_SLICES` 片递减的矩形拼三角 —— **原生端画不了 path**，也**不要**用 `transform: rotate()` 去拼 V 形箭头（旋转原点与裁剪在两个平台不一致，切片法最稳）。
- **容错**：任何输入都不抛异常。半截语句（流式常见）整句跳过，括号没配对就当普通 id，真解析不出内容就返回空图。
- **只在围栏闭合后排版**：未闭合时留给 Markdown（marked 按代码块渲染）—— 半截图源码排出来只是一堆错位的框。
- ⚠️ mp-html **本身不做 mermaid**：它拿不到「围栏是否闭合」这个信息；要全局支持，得在 mp-html 的 `pre` 分支里加同样判断（静态文档才安全）。

**点图放大：不要用 `uni.previewImage`，页面内自绘缩放层**

`uni.previewImage({ urls: [url] })` 看着最省事，但**H5 端它只是把图按屏幕铺满，没有任何缩放能力**：实测点开预览层后，层里的 `<image>` 宽高等于视口、`transform` 恒为 `none`，滚轮与 `dispatchTouchEvent` 的双指/滑动都不改尺寸（只有 App 端原生预览才带捏合）。所以统一的做法是自绘：

```html
<!-- 流里的 mermaid 图元外面套一层可点区域：点一下把源码交给查看器 -->
<view class="w-full flex flex-col items-center my-[8px]" @click="onLayoutPartClick(part)">
  <view class="flex flex-row items-center justify-center">
    <view :style="part.render.rootStyle">
      <!-- 三组图元，见上文 -->
    </view>
  </view>
</view>

<!-- 查看器：全屏遮罩 + 双向滚动 + 档位按钮 -->
<view v-if="mermaidViewerSource != ''" class="fixed top-0 bottom-0 left-0 right-0 z-[1000] flex flex-col"
      style="background-color: #020617" @click="closeMermaidViewer">
  <view class="w-full flex flex-row items-center justify-between px-[16px] h-[48px]" @click.stop="stopBubble">
    <text class="text-[12px] text-[#e2e8f0]">mermaid 图 · 可缩放 / 拖动</text>
    <view class="px-[12px] h-[28px] flex flex-row items-center rounded-[14px]"
          style="background-color: #1e293b" @click="closeMermaidViewer">
      <text class="text-[12px] text-[#ffffff]">关闭</text>
    </view>
  </view>
  <!-- 图元容器必须直挂 scroll-view：中间套一层 view 会被 H5 的 uni-view{overflow:hidden} 裁掉，横向拖不动（见 1.2.22） -->
  <scroll-view direction="all" class="w-full flex-1" @click.stop="stopBubble">
    <view :style="mermaidViewerRootStyle">
      <view v-for="(box, bi) in mermaidViewerRender.bgBoxes" :key="`vb${bi}`" :style="box.style" />
      <text v-for="(box, bi) in mermaidViewerRender.textBoxes" :key="`vt${bi}`" :style="box.style">{{ box.text }}</text>
      <view v-for="(box, bi) in mermaidViewerRender.ruleBoxes" :key="`vr${bi}`" :style="box.style" />
    </view>
  </scroll-view>
  <view class="w-full flex flex-row items-center justify-center h-[68px]" @click.stop="stopBubble">
    <view class="w-[40px] h-[40px] rounded-[20px]" style="background-color: #1e293b" @click="zoomMermaidOut">
      <text class="text-[20px] text-[#ffffff]">-</text>
    </view>
    <text class="text-[12px] text-[#e2e8f0] w-[80px]" style="text-align: center">{{ mermaidZoomText }}</text>
    <view class="w-[40px] h-[40px] rounded-[20px]" style="background-color: #1e293b" @click="zoomMermaidIn">
      <text class="text-[20px] text-[#ffffff]">+</text>
    </view>
  </view>
</view>
```

```uts
// 档位：相对「基准字号」的倍数。缩放 = 换更大字号重新排版一遍，图与文字都是原生视图，放到 3× 也不糊
const MERMAID_ZOOM_STEPS: Array<number> = [1, 1.5, 2, 3]
const MERMAID_ZOOM_DEFAULT_INDEX: number = 1        // 默认 1.5×：比页面里大一点，又不用横向拖

const mermaidViewerSource = ref<string>('')
const mermaidZoomIndex = ref<number>(0)

/** 查看器里的图：按当前档位的字号重排一份（关闭时源码是空串，排出来就是空图） */
const mermaidViewerRender = computed((): StreamRender => {
  return buildMermaid(mermaidViewerSource.value, MERMAID_FONT_SIZE * MERMAID_ZOOM_STEPS[mermaidZoomIndex.value])
})

/** flex-shrink:0 与左右 margin 居中都是必须的，原因见 1.2.22 */
const mermaidViewerRootStyle = computed((): string => {
  const layout: StreamRender = mermaidViewerRender.value
  const pad: number = Math.max(12, Math.round((WINDOW_WIDTH - layout.width) / 2))
  return `${layout.rootStyle};flex-shrink:0;`
    + `margin-top:12px;margin-bottom:12px;margin-left:${pad}px;margin-right:${pad}px;`
})

function openMermaidViewer(source: string): void {
  if (source.length == 0) { return }
  mermaidViewerSource.value = source
  mermaidZoomIndex.value = MERMAID_ZOOM_DEFAULT_INDEX
}
function closeMermaidViewer(): void { mermaidViewerSource.value = '' }
/** 到边界就停住，不循环（循环容易一下从最大跳回最小） */
function zoomMermaidOut(): void { if (mermaidZoomIndex.value > 0) { mermaidZoomIndex.value -= 1 } }
function zoomMermaidIn(): void {
  if (mermaidZoomIndex.value < MERMAID_ZOOM_STEPS.length - 1) { mermaidZoomIndex.value += 1 }
}
/** `.stop` 必须挂在真函数上（空表达式不合法），用来吞掉冒泡、避免点图/点按钮时误关查看器 */
function stopBubble(): void { /* 有意留空 */ }
```

- **流式片段的 kind 要留一份源码**：`StreamPart` 除了 `render`（小字号图元）再存一个 `source`（图源码），点图放大时才能按新字号重排；只存图元的话就放大不了了。
- **`direction="all"`** 是双向滚动的正确写法（`scroll-x` / `scroll-y` 在 App 端已废弃且「不支持同时为 true」，见官方 `scroll-view` 文档）；它会被编译成 `scroll-x` + `scroll-y` 两个属性。
- **遮罩必须不透明**（`#020617`，别用 `rgba(...,0.94)`）：半透明时后面的自定义导航栏标题会透上来，和查看器标题叠成两行字。

**直接调引擎**

```uts
import { renderKatex } from '@/src/utils/katex-lite/index.uts'
import type { KatexLayout, KatexBox } from '@/src/utils/katex-lite/index.uts'

const layout: KatexLayout = renderKatex('x = \\frac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}', 18)
// layout.boxes 即最终图元；文本盒必须带 `line-height = font-size`，
// 否则基线换算系数（KATEX_BASELINE_RATIO）失效，分子/分母/上下标会错位
```

**支持范围**：`^` `_`（含 `'` 撇号）、`\frac \dfrac \tfrac`、`\sqrt[n]{}`、`\sum \prod \int` 等大运算符（∑∏ 上下限堆叠、∫ 侧挂）、`\lim` 与 `\sin \cos \log` 等函数名、`\begin{pmatrix|bmatrix|Bmatrix|vmatrix|cases}…\end{…}`、希腊字母与常用关系/箭头/运算符号、`\text \mathrm \mathbf \mathbb`、`\hat \vec \bar \overline`、`\, \; \quad \qquad` 间距。

**使用注意**

- ⚠️ **只支持 LaTeX 子集**：`\left \right \big` 当作「不可见命令」跳过（定界符按原字号渲染，不拉伸），`\overset \color \boxed` 等样式类命令退化成「原样渲染组内容」，**未知命令不报错**、按正体显示命令名（流式下命令还没到齐时正是这个表现，下一块到达会自动重排）。
- ⚠️ **绝不抛异常**：`\frac{1}{`（缺参数）、尾随 `\`、未闭合的 `\begin{pmatrix}` 都会「能排多少排多少」；真排不出来时返回 `error` 非空 + 空图元，页面不会白屏。
- ⚠️ **宽高由引擎算好**：使用方不做任何测量与居中判断，`KatexLayout.width` / `height` 直接当容器宽高用。
- ⚠️ **字号一律传 px**：`fontSize` 是基准字号（一般与所在正文一致），公式内上下标 / 分子分母按 0.72 / 0.95 倍率自动缩放，**不要传 em / rpx**。
- ⚠️ **源码里的反斜杠要转义**：UTS 里写 `'\\frac{1}{2}'`；**不要用模板串**（模板串会把 `\f` `\s` 这类序列当转义字符吃掉）。
- ⚠️ **本模块的 d.ts 曾因源码里的「增补平面字符」而丢失导出**：`scripts/gen-uts-dts.mjs` 的 `mask()` 原先用 `[...src]` 展开字符，遇到代理对（emoji、`𝔼` 这类数学字母）时下标映射整体错位、把后续代码当字符串抹掉，表现为「某些 export 凭空消失」。脚本已改为 `split('')`，但 `.uts` / `.uvue` 源码里仍不建议放这类字符（原生端字形多为豆腐块）。
- 参考实现：演示页 `src/sub/rxjsDemo/rxjsDemo.uvue` —— `DEMO_TEXT` 里混着 `$$ … $$` 公式，页面切片后与 Markdown 同屏流式渲染（页面上只有这一处公式渲染，静态示例已按需求移除）。
- 本模块**没有 Vapor / VDOM 两条实现路径**：纯 UTS 计算 + 绝对定位渲染，全端一致。
