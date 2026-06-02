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
    *   **重要限制**：**禁止**在原生 `<button>` 元素上直接使用 `flex` 相关的对齐属性（如 `justify-content`, `align-items` 以及 UnoCSS 的 `justify-center`, `items-center`），否则会触发编译报错。
    *   *解决办法*：如需自定义高度或带图标的按钮，建议用 `<view>` 作为外层容器并用 UnoCSS 排版，内层套一个透明度为 0 且带 `open-type` 等能力的 `<button>` 绝对定位覆盖其上，或者直接使用 UI 库提供的组件。
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
