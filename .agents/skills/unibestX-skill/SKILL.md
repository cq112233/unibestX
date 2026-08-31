---
name: unibestX-skill
description: Use when developing, compiling, refactoring, or troubleshooting uni-app X (.uvue / .uts / .ts) projects, handling UTS strict type constraints (UTS110111163, UTS110111119, UTS110111120, ClassCastException, Any? slot props), Tailwind CSS styling and layout engine limitations, or platform-specific cross-end issues across App (Android Kotlin, iOS Swift), HarmonyOS (ArkTS), Web, and Mini-Programs.
---

# unibestX-skill (uni-app X & UTS 开发与避坑指南)

## 概述

uni-app X 采用 UTS (uni type script) 语言与原生渲染引擎，跨端直接编译为原生代码（Android 编译为 Kotlin，iOS 插件编译为 Swift，鸿蒙插件编译为 ArkTS，Web/小程序编译为 JS）。
与宽松的 TypeScript/JavaScript 不同，UTS 采用**名义强类型系统（Nominal Strong Typing）**与**原生渲染规范**，在类型、样式（Tailwind CSS）、运行环境和编译机制上有严格的约束。

---

## 何时使用

- 编写或修改 `.uvue`、`.uts`、`.ts`、`.scss` 代码时
- 使用 Tailwind CSS (`tailwindcss` + `weapp-tailwindcss`) 编写 UI 与布局时
- 遇到 UTS 编译报错（如 `UTS110111163`、`UTS110111119`、`UTS110111120`、`UTS100006`）
- 遇到 Android/iOS 原生运行时报错（如 `ClassCastException: Map cannot be cast to UTSJSONObject`）
- 遇到样式不生效、布局塌陷、鸿蒙 VDOM 行高异常或原生控件样式无法继承
- 编写跨端 API 调用、条件编译及 Easycom 组件开发时

---

## 1. UTS 强类型系统与语法核心铁律

### 1.1 一律禁止使用 `interface`，统一使用 `type`

- **错误码**：`UTS110111163: Object literals only support object types defined by construction type, and do not support interfaces`
- **原因**：UTS 将 `interface` 严格映射为底层面向对象纯接口，禁止将对象字面量（如 `{ name: 'foo' }`）、Mock 数据或 API 返回值赋值给 `interface`。
- **规则**：所有对象结构、状态、入参、返回值定义**一律使用 `type`（类型别名）**。

```ts
// ❌ 错误：触发 UTS110111163
interface UserInfo {
  name: string
  age: number
}
const user: UserInfo = { name: "Tom", age: 18 }

// ✅ 正确：统一使用 type
type UserInfo = {
  name: string
  age: number
}
const user: UserInfo = { name: "Tom", age: 18 }
```

### 1.2 不支持 `undefined`，必须初始化为 `null`

- **错误码**：`UTS110111119`
- **规则**：所有变量在使用前必须初始化。表示空值必须使用 `null`，且联合类型仅支持 `Type | null`。

```ts
// ❌ 错误
let value: string | undefined
function test(param?: string) {}

// ✅ 正确
let value: string | null = null
function test(param: string | null): void {}
```

### 1.3 条件语句必须为显式布尔表达式

- **错误码**：`UTS110111120`
- **规则**：禁止使用 truthy / falsy 隐式类型转换（如 `if (str)` 或 `arr || []`）。

```ts
// ❌ 错误
if (obj) {}
if (str) {}
const list = arr || []

// ✅ 正确
if (obj != null) {}
if (str != null && str != "") {}
const list = arr != null ? arr : []
```

### 1.4 等值比较使用 `==` / `!=`，禁止对基础类型使用 `===` / `!==`

- **原因**：在 Kotlin (Android) 原生端，`===` 会编译为引用/身份比较（Identity Equality）。对于字符串比较的是内存地址，对于数值/布尔值会受装箱（Boxing）影响导致判断错误。
- **规则**：一律使用 `==` 和 `!=` 进行值比较。

```ts
// ❌ 错误
if (statusCode === 200) {}
if (routePath === '/home') {}

// ✅ 正确
if (statusCode == 200) {}
if (routePath == '/home') {}
```

### 1.5 数字与数组必须显式声明类型

- **规则**：除 `string` 和 `boolean` 可以字面量推导外，`number` 和 `Array` 必须显式注明类型，避免不同原生平台推导歧义。

```ts
// ❌ 错误
let count = 0
let list = []

// ✅ 正确
let count: number = 0
let list: Array<string> = []
// 或
let list: string[] = []
```

### 1.6 类型定义必须在顶层作用域

- **错误码**：`UTS100006`（type）、`UTS110111166`（interface）
- **规则**：`type` 与 `interface` 不能声明在函数或代码块内部，必须提取到文件顶层。

### 1.7 作用域插槽解构变量推断为 `Any?`

- **错误码**：`参数类型不匹配：实际类型为 'Any?'，预期类型为 'UTSJSONObject'`
- **规则**：在 `.uvue` 模板中，作用域插槽（`#default="{ item, index }"`）解构出的属性会被推导为 `Any?`，传参给函数时必须在调用点显式使用 `as` 进行收窄。

```html
<!-- ❌ 错误：item 为 Any? -->
<text>{{ formatItem(item) }}</text>

<!-- ✅ 正确：调用点断言 -->
<text>{{ formatItem(item as UTSJSONObject) }}</text>
<text>{{ (index as number) + 1 }}</text>
```

### 1.8 Class 相关约束

- **私有属性**：禁止使用 `#prop`，使用 `private prop` (`UTS110111128`)。
- **下标访问**：Class 实例禁止 `obj[key]` 下标访问，必须用点操作符 `obj.prop` (`UTS110111129`)。
- **静态初始化**：禁止静态块 `static {}`，使用私有静态方法 `private static initData()` 初始化 (`UTS110111130`)。
- **继承要求**：子类继承必须显式声明 `constructor()` 并调用 `super()` (`UTS110111131`)。
- **Class 仅为类型**：禁止把 Class 赋值给变量或作为对象传递，使用工厂函数 (`UTS110111151`)。

---

## 2. 样式 (CSS & Tailwind CSS) 与原生渲染避坑

### 2.1 CSS 变量动态换肤与原生控件限制

- **根节点绑定**：为了保证 App 端 CSS 变量跟随 JS 响应式更新，必须在根元素（如 layout 根 `view`）上内联绑定：

  ```html
  <view :style="{ '--theme-color': appStore.state.theme }">
    <slot></slot>
  </view>
  ```

- **iOS 原生控件（如 `<button>`）换肤**：iOS 原生 `UIButton` 不会自动继承 CSS 变量重绘，必须通过 Vue 响应式行内样式直接绑定：

  ```html
  <button :style="{ backgroundColor: appStore.state.theme }">按钮</button>
  ```

### 2.2 原生 `<button>` 布局对齐限制

- **铁律**：**禁止**在原生 `<button>` 上直接使用 `flex` 对齐类名（如 `items-center`、`justify-center`）。原生平台的 `<button>` 仅作为文本控件实现。
- **解决方案**：使用 `<view>` 作为外层 Flex 容器进行排版，内层使用普通文本或自定义组件：

  ```html
  <!-- ❌ 错误 -->
  <button class="flex flex-row items-center justify-center">按钮</button>

  <!-- ✅ 正确 -->
  <view class="w-full h-[36px] rounded-[8px] bg-primary flex flex-row items-center justify-center">
    <text class="text-white text-[14px] font-medium">确认提交</text>
  </view>
  ```

### 2.3 `color` 属性仅支持特定文本元素

- **铁律**：Tailwind 的文本颜色类（如 `text-[#1e293b]`、`text-primary`、`text-white`）底层对应的 `color` 属性**仅支持**在 `<text>`、`<button>`、`<input>`、`<textarea>` 上使用，**禁止**在 `<view>` 上直接定义文字颜色。
- **规则**：将字体颜色类名挂载到内部的 `<text>` 标签上：

  ```html
  <!-- ❌ 错误 -->
  <view class="text-[#334155]">
    <text>内容</text>
  </view>

  <!-- ✅ 正确 -->
  <view>
    <text class="text-[#334155] text-[14px]">内容</text>
  </view>
  ```

### 2.4 Tailwind CSS 边框书写规范

- **铁律**：原生平台解析器要求明确指定边框宽度、颜色与实线样式，推荐使用带明确属性的 Tailwind 类名组合：

  ```html
  <!-- ✅ 推荐写法 -->
  <view class="border-[1px] border-solid border-[#e2e8f0] rounded-[12px] p-[16px]"></view>
  ```

### 2.5 禁用字体族与 Display 限制

- **禁止 `font-mono` / `font-sans`**：缺少 `font-size` 会导致原生解析器报错 `[parse-css-font] Missing required font-size.`。如需等宽字体，请使用内联样式：

  ```html
  <text class="text-[13px] text-[#334155]" style="font-family: monospace;">127.0.0.1</text>
  ```

- **Display 仅支持 `flex` 与 `none`**：禁止使用 `grid` 或 `inline-block`。
- **布局推荐使用 Flex 类名**：`flex flex-row`、`flex-col`、`flex-1`、`items-center`、`justify-between`、`justify-center`。
- **对齐支持**：Tailwind v4 原生输出 `flex-start`/`flex-end`，`justify-start`、`items-start`、`self-start` 可安全使用。

### 2.6 文本行高支持

- `weapp-tailwindcss` 现已全面支持 `leading-[...]` 原子化类名（如 `leading-[26px]`、`leading-[20px]`），可直接在 `<text>` 等元素上使用原子化类名。

### 2.7 Tailwind 自定义配置与安全区适配

- **安全区工具类**（通过 `tailwind.config.ts` 插件提供）：
  - `.p-safe`：四周安全区 padding
  - `.pt-safe`：顶部安全区 padding（状态栏适配）
  - `.pb-safe`：底部安全区 padding（Home 条适配）
- **小字号拓展**：
  - `text-2xs`（20rpx / 28rpx）
  - `text-3xs`（18rpx / 26rpx）
- **品牌色支持**：
  - `bg-primary` / `text-primary`（绑定 `--theme-color`）
- **暗黑模式**：
  - 支持 `dark:` 变体，例如 `class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100"`

### 2.8 高度与 Flex 布局子元素高度塌陷

- **视口单位**：原生不支持 `vh` / `vw`，使用 `flex-1`、`h-full` 或 `uni.getWindowInfo().windowHeight`。
- **Flex 塌陷**：当父容器为 `flex-1` 且无显式像素高度时，子元素设置 `h-full` (100%) 在原生端会被解析为 0。子元素也必须使用 `flex-1`。

### 2.9 标签自闭合规范

- 模板中的 Void 元素（如 `<input />`、`<image />`）必须显式自闭合。

---

## 3. 原生运行时与跨端架构避坑

### 3.1 `Map` 转换为 `UTSJSONObject` 的 ClassCastException 与 `:style` 类型安全

- **问题**：在 Android (Kotlin) 端，从 Vue props 或动态对象传递的样式/属性底层是 `LinkedHashMap` 而非 `UTSJSONObject`。若直接 `as UTSJSONObject` 会触发运行时 `ClassCastException`。
- **问题 2**：`parentData['styleKey']` 返回 `Any?`，直接赋给 `:style` 会报 `预期类型为 Any 实际为 Any?`。
- **解决方案**：使用 `?? {}` 兜底并断言为 `as any`：

  ```html
  <view :style="(parentData['labelStyle'] ?? {}) as any"></view>
  ```

### 3.2 Options API 中组件自定义事件名与局部方法同名冲突

- **问题**：在 Android 原生端编译时，若局部方法与 `emits` 事件同名（如 `@change="change"` 且定义了 `methods: { change() {} }`），事件回调会屏蔽实例方法，导致方法失效。
- **规则**：方法命名加前缀区分，如 `onChange`、`keyboardChange`。

### 3.3 键盘事件类型声明

- **规则**：监听 `@keyboardheightchange` 时，参数类型必须为 `UniInputKeyboardHeightChangeEvent`，不得声明为 `UniInputKeyboardHeightChangeEventDetail`。

### 3.4 Easycom 自动导入

- **规则**：`uni_modules` 中的组件由 `easycom` 规则自动引入，**严禁在 `<script>` 中手动 `import` 组件**。

### 3.5 平台差异 API 与语言获取

- **条件编译**：非全平台支持的 API 必须使用条件编译（如 `// #ifndef APP` 或 `// #ifdef MP-WEIXIN`）。
- **应用语言**：App 端不支持 `uni.getLocale()`，应使用 `uni.getSystemInfoSync().appLanguage` 或 `uni.getDeviceInfo().osLanguage`。

---

## 4. 页面创建与 `definePage` 规范（AI 新增页面必填）

在本项目中，页面统一采用 `uni-layouts-plugin` 自动包裹布局，导航栏统一采用 `uni_modules/uni-nav-bar-x` 驱动的自定义导航栏。

**重要铁律**：AI 或开发者**新增任何 `.uvue` 页面时，必须在 `<script setup lang="uts">` 顶部显式声明完整的 `definePage` 配置**，严禁省略或配置为 `layout: false`（除非极特殊全屏需求）。

### 4.1 二级页面 / 子包分包页面标准模板（如 `src/sub/**`、普通详情页）

```uts
<script setup lang="uts">
definePage({
  layout: 'navbar',
  showBack: true,
  hideNavbar: false,
  enablePullDownRefresh: false,
  style: {
    navigationBarTitleText: '页面标题',
    navigationStyle: 'custom'
  }
});
</script>
```

### 4.2 主包 TabBar 页面标准模板（`src/pages/**`）

```uts
<script setup lang="uts">
definePage({
  layout: 'navbar',
  showBack: false, // TabBar 主页面不显示返回按钮
  hideNavbar: false,
  enablePullDownRefresh: true, // 首页/列表页按需开启
  style: {
    navigationBarTitleText: '基础',
    navigationStyle: 'custom'
  }
});
</script>
```

> **注意**：`type: 'home'` 为首页专属标识，仅在 [src/pages/index/index.uvue](file:///Users/chenqi/Documents/chenqi-front/unibestX/src/pages/index/index.uvue) 中配置，其他页面严禁添加。

### 4.3 下拉刷新机制与最佳实践规范

在 unibestX 体系中，下拉刷新分为**自定义下拉刷新**与**系统原生下拉刷新**：

- **自定义下拉刷新（✨推荐）**：
  - **配置方式**：在 `definePage` 的**顶层**配置 `enablePullDownRefresh: true`；
  - **实现机制**：由 `navbar` 布局内的 `<scroll-view>` 容器驱动，支持跟随主题换肤、阻尼手势平滑顺畅，且与自定义顶部导航栏天然联动；
  - **监听与控制**：使用 `onNavbarPullDownRefresh` 监听，使用 `stopNavbarPullDownRefresh` 关闭动画。
- **系统原生下拉刷新**：
  - **配置方式**：在 `definePage.style` **内部**配置 `style: { enablePullDownRefresh: true }`；
  - **实现机制**：由系统底层原生窗口驱动（编译进 `pages.json`），使用 `onPullDownRefresh` 监听，使用 `uni.stopPullDownRefresh()` 关闭。
- **优先级与规则**：
  - 若**两者同时出现**，系统默认**原生下拉刷新优先**，`navbar` 布局会自动禁用自定义 `<scroll-view>` 下拉，杜绝双重菊花手势冲突；
  - **最佳实践**：**强烈推荐统一使用顶层的自定义下拉刷新**，跨端表现更优美可控。

#### 标准自定义下拉刷新代码示例

```uts
<script setup lang="uts">
import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/utils/refresh';

definePage({
  layout: 'navbar',
  showBack: false,
  hideNavbar: false,
  enablePullDownRefresh: true, // 👈 推荐：放在顶层开启自定义平滑下拉
  style: {
    navigationBarTitleText: '页面标题',
    navigationStyle: 'custom'
  }
});

onNavbarPullDownRefresh(() => {
  // 1. 发起网络请求或加载业务数据
  fetchData().then(() => {
    // 2. 数据加载完毕后手动关闭刷新动画
    stopNavbarPullDownRefresh();
  });
});
</script>
```

---

## 5. 快速参考表

| 场景 / 报错 | 错误写法 | 正确写法 |
| :--- | :--- | :--- |
| **新增页面定义 (`definePage`)** | 缺少 `definePage` 或 `layout: false` | 必须包含 `layout: 'navbar'`, `showBack`, `hideNavbar`, `style: { navigationBarTitleText, navigationStyle: 'custom' }` |
| 对象类型定义 (`UTS110111163`) | `interface User { id: string }` | `type User = { id: string }` |
| 空值定义 (`UTS110111119`) | `let name: string \| undefined` | `let name: string \| null = null` |
| 条件判断 (`UTS110111120`) | `if (user)` | `if (user != null)` |
| 基础类型相等性比较 | `if (code === 200)` | `if (code == 200)` |
| 插槽变量传参 | `<text>{{ fn(item) }}</text>` | `<text>{{ fn(item as UTSJSONObject) }}</text>` |
| 动态 `:style` 属性 | `:style="parent['style'] as UTSJSONObject"` | `:style="(parent['style'] ?? {}) as any"` |
| Tailwind 边框 | `class="border border-gray-200"` | `class="border-[1px] border-solid border-[#e2e8f0]"` |
| 等宽字体显示 | `class="font-mono"` | `style="font-family: monospace;"` |
| `<button>` 水平居中 | `<button class="items-center justify-center">` | 用 `<view class="flex flex-row items-center justify-center">` 包裹 |
| `<view>` 文本颜色 | `<view class="text-[#333]">` | `<text class="text-[#333]">` |
| 键盘高度事件类型 | `(e: UniInputKeyboardHeightChangeEventDetail)` | `(e: UniInputKeyboardHeightChangeEvent)` |
| 模块组件导入 | `import MyBtn from '@/uni_modules/...'` | 无需 import，直接在 template 使用 `<my-btn>` |
| 安全区底部适配 | 内联计算 paddingBottom | `class="pb-safe"` |

---

## 6. 红线清单（停下来立即修正）

- [ ] **新增 `.uvue` 页面缺少标准的 `definePage` 声明**（必须包含 `layout: 'navbar'`, `showBack`, `hideNavbar`, `style: { navigationBarTitleText, navigationStyle: 'custom' }`）
- [ ] 使用了 `interface` 定义对象类型（必须改为 `type`）
- [ ] 使用了 `undefined` 或未初始化变量（必须改为 `null` 并赋初始值）
- [ ] 在 `if` / 三元运算符中使用了非布尔值（必须显式比较，如 `!= null`）
- [ ] 对 `string` / `number` / `boolean` 使用了 `===` 或 `!==`（必须改为 `==` 或 `!=`）
- [ ] 在原生 `<button>` 上直接使用了 flex 对齐类名（`justify-center` / `items-center`）
- [ ] 在 `<view>` 上直接定义了文字颜色样式类名（如 `text-[#1e293b]`、`text-primary`）
- [ ] 在 Tailwind 中使用了 `font-mono` / `font-sans`（必须用内联 `style="font-family: monospace;"`）
- [ ] 在 `.uvue` 模板的作用域插槽调用点缺少 `as` 类型断言
