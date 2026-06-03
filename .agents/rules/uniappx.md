---
trigger: always_on
glob: "**/*.{uvue,uts,ts,scss,json}"
description: uni-app X (UTS) 开发规范与踩坑避坑指南，适用于跨端 App 及小程序编译
---

# uni-app X & UTS 开发规范与踩坑指南

本规范总结了在 `uni-app X` + `UTS` 架构下进行跨端（App-Android/iOS、H5、小程序）开发时，由于原生渲染引擎和 UTS 强类型系统所带来的底层限制与最佳实践。

---

## 1. 核心运行环境与 API 限制
*   **禁止使用浏览器特有 API**：
    App 平台编译为原生 Kotlin/Swift，不含有浏览器的 `window`、`document` 或 `navigator` 等全局对象。
    *   *错误示例*：`document.documentElement.style.setProperty()`
    *   *正确做法*：通过 Vue 的 `:style` 响应式数据绑定，或使用 uni-app X 提供的跨端 API 进行操作。
*   **UTS 与原生组件生命周期**：
    `onShow`, `onHide`, `onLaunch` 等生命周期在不同平台下表现可能略有差异，UTS 编译为 Native Code 时对非标准类型及生命周期内异步调用的时序要求更严苛，务必尽早进行真机或基座运行检查。

---

## 2. 样式 (CSS & SCSS) 开发规范
*   **CSS 变量全平台支持与响应式**：
    在 uni-app X 中，可以使用 CSS 变量来实现动态换肤。为了保证 App 平台下 CSS 变量能够跟随 JS 变量动态更新，**必须在根元素（例如 `layout` 组件的根 `view`）上通过内联样式绑定该变量**：
    ```html
    <template>
      <view :style="{ '--theme-color': appStore.state.theme }">
        <slot></slot>
      </view>
    </template>
    ```
*   **按钮样式限制 (Button Layout Restrictions)**：
    在 App 原生平台下，系统底层的 `<button>` 元素是作为一个专门的文本对齐控件实现的。
    *   **重要限制**：**禁止**在原生 `<button>` 元素上直接使用 `flex` 相关的对齐属性（如 `justify-content`, `align-items` 以及 UnoCSS 的 `justify-center`, `items-center`），否则会触发编译报错：
        > `style property justify-content|align-items is only supported on <view>|<scroll-view>|<list-view>|<list-item>|<flow-item>|<swiper-item>|<navigator>`
    *   *解决办法*：移除 `<button>` 上的 `justify-content` 和 `align-items` 样式（文本对齐一般使用 `text-align`）。如需使用复杂的 Flex 布局或带图标的自定义按钮，建议使用 `<view>` 作为外层容器进行 Flex 排版，内层使用普通文本或其它元素，或使用 UI 库提供的组件。
*   **文字颜色样式限制 (Color Property Restrictions)**：
    在 App 原生平台下，`color` 属性仅支持在 `<text>`, `<button>`, `<input>`, `<textarea>` 元素上使用。
    *   **重要限制**：**禁止**在 `<view>` 元素上直接使用 `color` 属性（包括在应用于 `<view>` 的 class 中定义 `color`），否则会触发编译报错：
        > `style property color is only supported on <text>|<button>|<input>|<textarea>`
    *   *解决办法*：将 `color` 属性移到子级的 `<text>` 元素上进行渲染控制，或者移除 `<view>` 标签上冗余/无效的 `color` 定义。
*   **SCSS 变量的动态化覆盖**：
    在 `uni.scss` 中引入第三方组件库（如 `uview-ultra`）的 `theme.scss` 变量后，如需将某些编译期 SCSS 变量（如 `$up-primary`）转化为运行时的动态 CSS 变量，可在 `uni.scss` 引入之后重新赋值：
    ```scss
    @import '@/uni_modules/uview-ultra/theme.scss';
    $up-primary: var(--theme-color, #0957DE);
    $u-primary: var(--theme-color, #0957DE);
    ```

---

## 3. Easycom 与组件自动导入
*   **免去手动 import**：
    在 `uni_modules` 中的组件，如其目录结构为 `uni_modules/[module-name]/components/[component-name]/[component-name].uvue`，uni-app X 的编译器会自动通过 `easycom` 规则加载，**无需且禁止在页面的 `<script>` 中手动 import 它们**。
    *   *错误示例*：`import upActionSheet from 'uview-ultra/components/up-action-sheet/up-action-sheet.vue'` (会导致模块加载失败或 App 平台报错)。
    *   *正确做法*：直接在 `<template>` 中写 `<up-action-sheet>`，并在 `pages.json` 中配置对应的 `easycom` 匹配规则。

---

## 4. UTS 严格类型系统
*   **UTSJSONObject 操作**：
    UTS 是类似 TypeScript 的强类型语言，但转换成强类型 Kotlin 时十分严格。对于没有声明强类型字段的 `UTSJSONObject`，不能直接使用 `obj.key` 访问。
    *   *错误示例*：`config.color['up-primary'] = 'red'`
    *   *正确做法*：使用下标访问并配合类型断言（Type Assertion）：
        ```uts
        const colorConfig = config['color'] as UTSJSONObject
        colorConfig['up-primary'] = 'red'
        ```
*   **Pinia Store 重写方法匹配**：
    自定义的 Pinia 基类（如 `PiniaStoreBase`）重写或覆写内置方法（如 `_hydrate`）时，参数的命名和数量必须与父类类型签名严格对应，否则在部分平台（如 App-Android）下无法通过编译器对泛型基类方法的强校验。

---

## 5. Vite 插件开发规范
如果你需要在 Vite 中编写自定义的页面处理插件（如自动包裹根布局等），注意以下防坑指南：
*   **页面与组件精准过滤**：
    只处理 `src/pages/` 下的页面 `.uvue` 文件，并且必须排除 layout、子组件（如 `/components/`）以及 `App.uvue`，防止重复或非法转换。建议在判断路径前将反斜杠 `\` 规范化为斜杠 `/` 以支持多端跨平台编译（如 Windows）。
*   **保护 `<style>` 与其它辅助标签**：
    在自定义 `transform(code, id)` 插件时，不要直接用模板字面量覆盖整个代码内容。应通过正则替换 `<template>` 和 `<script>` 节点内部的代码，确保 `<style>` 标签内的公共和局部 CSS 代码不丢失。

---

## 6. UTS 核心语法与类型规范

为了确保 UTS 代码在编译成 Kotlin (Android)、Swift (iOS) 等原生语言时不会报错，必须严格遵守以下语法与类型标准：

*   **变量与类型声明 (Variables & Type Declarations)**：
    *   UTS 不支持 `undefined`。变量必须被初始化（即使初始化为 `null`，例如 `let value: string | null = null`）。
    *   除了 `string` 和 `boolean` 可以采用字面量自动推导外，**数字 (number) 和数组 (Array) 类型必须显式声明类型**，避免不同原生平台（如 Kotlin Int/Double 差异）下的推导歧义：
        *   *正确做法*：`let count: number = 1`，`let list: Array<string> = ['a', 'b']`
    *   UTS 的联合类型目前**仅支持与 `null` 的联合**（如 `string | null`）。不支持任意类型联合（如 `string | number`，此类情况需要声明为 `any`）。
*   **方法与函数声明 (Functions)**：
    *   所有函数参数必须显式声明类型，返回值也需要声明类型。若无返回值，必须声明为 `:void`：
        *   *正确做法*：`function test(score: number): boolean { return score >= 60 }`
*   **安全调用运算符 (Safe Calls)**：
    *   对于声明为可空类型（如 `Type | null`）的变量，在调用其方法或属性时**必须使用安全调用运算符 `?.`**，否则编译器将报错：
        *   *正确做法*：`const len = str?.length`
*   **类型转换与断言 (Type Assertion)**：
    *   在 Vue 选项式组件的 `data()` 定义中，或针对 `any` 类型的变量，建议使用 `as` 关键字进行显式类型转换：
        *   *正确做法*：`const year = date.getFullYear() as number`
*   **代码语句分割**：
    *   多行书写时行尾分号 `;` 可省略。同行多条语句必须以分号分割。
*   **对象字面量与接口限制 (Object Literals & Interfaces)**：
    *   UTS 不允许将对象字面量直接赋值给 `interface` 定义的类型（会触发 `UTS110111163` 编译错误）。对于需要接收/赋值对象字面量的类型，必须使用 `type`（类型别名）进行定义。
        *   *错误做法*：`interface Config { name: string }; const c: Config = { name: "UTS" }`
        *   *正确做法*：`type Config = { name: string }; const c: Config = { name: "UTS" }`
*   **模板自闭合标签限制 (Template Void Elements)**：
    *   在 `.uvue` 模板中，像 `<input>` 等 HTML Void 元素必须显式地进行自闭合（如 `<input />`），否则 uni-app X 编译器会报 `Element is missing end tag` 错误。同时，可以在 ESLint 中配置或关闭相关的 html-self-closing 规则以避免 lint 冲突。
*   **等值比较限制 (Value Equality vs Identity Equality)**：
    *   在 UTS 中，避免对数字 (`Number`/`Int`/`Double`) 或布尔值（如可空的 `Boolean?` 与 `Boolean`）使用身份全等运算符 `===`。
    *   因为这在 Kotlin (Android) 原生端会编译为引用/身份比较，而隐式装箱（Implicit Boxing）会导致不同包装对象之间即使数值/状态相同，引用比较也返回 `false`。
    *   *错误示例*：`if (statusCode === 401)`，`if (toastVal === false)`
    *   *正确做法*：使用普通值相等运算符 `==` 或值不等运算符 `!=`（例如 `if (statusCode == 401)`，`if (toastVal == false)`）。

