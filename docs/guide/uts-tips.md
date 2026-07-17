# UTS 开发必读与踩坑指南

在 `uni-app X` 的开发中，我们将使用 UTS (uni-app Type Script) 和 Vue 3 的组合。由于 UTS 最终会被编译为各平台的原生代码（如 Android 的 Kotlin、iOS 的 Swift），这就要求我们在编写代码时必须遵循更加严格的类型和语法规范。

> [!IMPORTANT] 核心法则
> **安卓端语法最严**：Android 编译器的 UTS 类型与语法校验是所有平台中最严格的。一般如果 Android 端编译正常通过，其他平台（H5、微信小程序、iOS等）通常都不会有大问题。

## 1. 文件扩展名规范

在项目中，不要再使用传统的 `.vue` 和 `.ts`，请使用：
* **`.uvue`**：用于编写页面（Pages）和组件（Components）。
* **`.uts`**：用于编写逻辑代码、Store、工具函数等。

## 2. 严格的类型系统

UTS 具有比 TypeScript 更严格的类型校验机制：

* **不支持 `undefined`**：在 UTS 中，变量不能赋值为 `undefined`。
* **联合类型的限制**：目前 UTS 的联合类型仅支持与 `null` 联合（例如 `string | null`），不支持不同数据类型之间的联合（如 `string | number` 不合法，此时需考虑使用 `any` 或拆分）。
* **判断相等**：在 UTS 中，请使用 `==` 和 `!=` 进行比较，避免使用 `===` 和 `!==`，因为在编译到原生时，三等号可能会引起非预期的引用地址对比导致逻辑错误。

## 3. CSS 样式限制

因为 `uni-app X` 的界面是由原生控件（如 `TextView`, `UIView` 等）直接渲染的，并不是 Web 浏览器环境，所以并不是所有 CSS 属性都能被支持：

* **不支持部分布局属性**：原生平台不支持诸如 `display: grid` 等复杂的 Web 布局，请尽量使用 Flex 布局。
* **Gap 属性**：在部分旧版原生编译环境中对 `gap` 的支持有限，请优先考虑通过 `margin` 来控制元素间距。
* **动态换肤**：项目支持 SCSS 变量，但如果你需要实现运行时的动态主题覆盖，请配合 CSS 变量 (`var(--theme-color)`) 来实现。

更多关于原生平台 CSS 支持范围的细节，请参阅 [uni-app X 官方文档](https://uniapp.dcloud.net.cn/uni-app-x/)。

## 4. API 环境限制

**不要使用任何浏览器特有的 API！**

由于原生 APP 平台（Android/iOS）中不存在浏览器环境，所以在 `.uts` 或 `.uvue` 代码中：
* `window` 是不存在的。
* `document` 是不存在的（无法通过 DOM API 操作节点）。
* `localStorage` 和 `sessionStorage` 也是不存在的（请使用 uni 提供的 `uni.setStorageSync` 等持久化方案）。
* `navigator` 不存在。

所有的平台差异或系统交互，都请依赖 `uni-app` 提供的跨端 API 或在 UTS 中直接调用原生 API 实现。
