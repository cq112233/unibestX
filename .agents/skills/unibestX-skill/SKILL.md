---
name: unibestX-skill
description: Use when developing, compiling, refactoring, or troubleshooting uni-app X (.uvue / .uts / .ts) projects, handling UTS strict type constraints (UTS110111163, UTS110111119, UTS110111120, ClassCastException, error17 Any? slot props), Tailwind CSS styling and layout engine limitations, page skeleton conventions, or platform-specific cross-end issues across App (Android Kotlin, iOS Swift), HarmonyOS (ArkTS), Web, and Mini-Programs.
---

# unibestX-skill (uni-app X & UTS 规范、真实案例与代码生成指南)

## 概述

> 🚨 **AI / Agent 必读铁律**：所有参与本项目开发的 AI、Agent 在进行任何编码、重构、修 bug 或新增页面任务前，**必须首先完整阅读本文件，并按其命中的分册继续 Read 对应参考文件**。只看本文件（入口）而不读分册就动手，视为未遵守本 Skill。
> 🔄 **VDOM 与 Vapor 差异自动回写机制**：若在开发或排错过程中，遇到任何 UTS 语法、组件属性、生命周期、CSS 样式在 **VDOM 模式与 Vapor 模式不通用 / 存在渲染差异** 的问题，AI / Agent **必须主动按四维分类追加到对应分册**（见 3.5），严禁遗漏！

uni-app X 采用 UTS (uni type script) 语言与原生渲染引擎，跨端直接编译为原生代码（Android 编译为 Kotlin，iOS 插件编译为 Swift，鸿蒙插件编译为 ArkTS，Web/小程序编译为 JS）。  
与宽容的 TypeScript/JavaScript 不同，UTS 采用**名义强类型系统（Nominal Strong Typing）**与**原生渲染规范**。

本文档按六大维度组织，采用 **「1 个入口 + 8 个分册」** 结构：

1. **UTS 与原生规范**：语法与严格类型（分册 1.1）、CSS / Tailwind 样式引擎限制（分册 1.2）、跨端运行时铁律（分册 1.3）；
2. **项目正确案例**：来自本项目的生产级标杆案例（分册 2）——页面骨架、TabBar、二级详情页、滚动与下拉刷新、组件与生态库优先范式；
3. **项目代码生成规范**：生成流程与模板（分册 3）、本文件常驻的 3.3 对照表与 3.4 红线清单、回写维护机制（分册 3 的 3.5）；
4. **项目内置工具库**：`src/utils/` 下 10 个现成模块的 API 与用法（分册 4）——**动手造轮子前先查这里**；
5. **页面与应用基础设施**：`src/http/`（请求与流式）、`src/router/`（路由拦截）、`src/layouts/`（页面布局）、`src/i18n/`（语言装配）、`src/api/`（业务请求与 Mock）（分册 5）——**定策略 / 选骨架 / 改配置前先查这里**；
6. **AI 页面层级与组件设计规范**：页面高内聚自包含、最多三级封顶、容器与纯展示解耦、Mock 接口契约化（分册 6）——**AI 生成复杂页面与拆分组件前必读**。

---

## 何时使用

- 编写、重构或新增 `.uvue`、`.uts`、`.ts`、`.scss` 文件时
- 规划或生成新页面结构、骨架布局与视口高度（`computedAvailableHeight`）时
- 使用 Tailwind CSS 编写跨端 UI、按钮排版、文本颜色与安全区适配时
- 遇到 UTS 强类型编译错误（`UTS110111163`、`UTS110111119`、`UTS110111120`、`UTS100006`、`error17`）
- 遇到 Android/iOS 原生运行时报错（`ClassCastException: Map cannot be cast to UTSJSONObject`）
- 进行跨端渲染模式（VDOM / Android VDOM / Vapor）兼容或 Easycom 组件库开发时

---

## 文档结构（分册导航 —— 命中即必须 Read）

> ⚠️ **本 Skill 为分册式组织：下表的 8 个分册文件不会自动加载**，需要时用 Read 工具打开。
> **硬性要求**：对照表（3.3）或红线清单（3.4）命中某条时，**必须打开其标注的分册核对完整正反例与实测结论**，不得只凭本文件的一行结论就改代码 —— 每条铁律的「为什么会炸」「反例长什么样」都在分册里。

| 分册文件 | 收录内容 | 何时 Read |
| :--- | :--- | :--- |
| [references/1.1-uts-syntax.md](references/1.1-uts-syntax.md) | **1.1 UTS 强类型系统与语法核心铁律**（19 条） | 定义对象结构与类型标注、写 `export` / `class` / 闭包 / 定时器回调 / 集合遍历；遇 `UTS110111163`、`UTS110111119`、`UTS110111120`、`error1`、`error17`、`error18`、`NoSuchMethodError` |
| [references/1.2-styling.md](references/1.2-styling.md) | **1.2 样式 (CSS & Tailwind) 与原生渲染铁律**（19 条） | 写 `.scss` / Tailwind 工具类；处理按钮与文本排版、安全区、高度单位、阴影边框、字号字重、行内嵌套样式、样式不生效或表现不一致 |
| [references/1.3-runtime.md](references/1.3-runtime.md) | **1.3 跨端运行时与渲染模式约束**（20 条） | VDOM / Android VDOM / Vapor 差异、多平台门面分流与条件编译、UTS 插件与自定义基座、Markdown 渲染、真机与 Kotlin 报错、编译验证命令选择 |
| [references/2-examples.md](references/2-examples.md) | **二、项目正确案例**（5 个生产级标杆案例） | 新建页面、搭「上固定 + 下滚动」骨架、算可用高度、写 TabBar 页与下拉刷新、写二级 / 子包页、用 Easycom 引组件 —— **优先照抄，不要自创结构** |
| [references/3-codegen.md](references/3-codegen.md) | **3.1 新增页面生成流程**、**3.2 页面代码标准模板**、**3.5 VDOM/Vapor 差异回写维护机制** | 生成新页面 / 组件前走流程、需要复制标准页面模板、需要按四维分类回写本 Skill |
| [references/4-utils.md](references/4-utils.md) | **四、项目内置工具库**（`src/utils/` 10 个模块：route / theme / env / i18n / toast / backPress / refresh / upload / systemInfo / rxjs-lite） | **动手实现任何通用能力前先查这里**：取路由与路径、取主题色、读环境变量、多语言、提示弹窗、返回键接管、下拉刷新与导航栏控制、文件上传、系统与安全区尺寸、防抖节流与流式处理 |
| [references/5-infra.md](references/5-infra.md) | **五、页面与应用基础设施**：5.1 请求（http/request）、5.2 流式请求（http/stream）、5.3 路由与拦截器（router）、5.4 页面布局（layouts）、5.5 国际化配置（i18n）、**5.6 业务 API 与 Mock 接口化（src/api/）** | 发起接口请求 / 处理错误与 401、做 SSE 打字机输出、改登录拦截与登录策略、**选 `layout` 或配 `definePage` 导航栏字段**、增改多语言文案、**抽离 Mock 模拟数据为后端接口函数** |
| [references/6-page-component-spec.md](references/6-page-component-spec.md) | **六、AI 页面层级与组件设计规范**（页面高内聚 · 三级防过度拆分 · 容器/视图分离 · Mock 接口契约化 · 生产接口同名映射） | 规划新页面结构、拆分复杂页面组件、组织页面内 `components/common/` 与模块私有视图、从 mock.uts 对接 `src/api/<page>/<page>.uts` 时必读 |

> 📌 **3.3 快速排查对照表**与 **3.4 代码生成红线清单** 因使用频率最高，常驻在本文件下方，无需额外 Read。

---

## 3.3 快速排查与对照表 (Quick Reference Matrix)

| 场景 / 报错现象 | 错误写法 | 正确规范写法 |
| :--- | :--- | :--- |
| **对象类型定义 (`UTS110111163`)** | `interface User { id: string }` | `type User = { id: string }`（一律使用 `type`，禁止 `interface`） |
| **空值定义 (`UTS110111119`)** | `let name: string | undefined` | `let name: string | null = null`（不支持 `undefined`，统一用 `null`） |
| **条件判断 (`UTS110111120`)** | `if (user)` / `if (str)` | `if (user != null)` / `if (str != null && str != "")`（禁止隐式类型转换） |
| **基础类型等值比较** | `if (code === 200)` / `if (path === "/a")` | `if (code == 200)` / `if (path == "/a")`（统一使用 `==` 与 `!=`） |
| **插槽变量传参 (`error17`)** | `<text>{{ fn(item) }}</text>` | `<text>{{ fn(item as UTSJSONObject) }}</text>`（插槽参数为 `Any?`，需显式强转） |
| **动态 `:style` 属性强转崩溃** | `:style="parent['style'] as UTSJSONObject"`（Kotlin 运行期抛 `Map cannot be cast to UTSJSONObject`） | `:style="(parent['style'] ?? {}) as any"`（使用双问号空兜底并转 `as any`） |
| **`<text>` 混合文本嵌套** | `<text>a<text>b</text>c</text>` | 外层 `view` 内放多个兄弟 `<text>` 节点（原生 `<text>` 不支持内嵌多文本） |
| **Tailwind 边框解析限制** | `class="border border-gray-200"` | `class="border-[1px] border-solid border-[#e2e8f0]"`（需明确指定宽度、线型与颜色） |
| **等宽字体显示 (`parse-css-font`)** | `class="font-mono"`（原生解析器缺 `font-size` 报错） | 内联 `style="font-family: monospace;"` |
| **原生 `<button>` 布局限制** | `<button class="items-center justify-center">` | 用 `<view class="flex flex-row items-center justify-center">` 包裹 |
| **`<view>` 设置文字颜色** | `<view class="text-[#333]">` | `<text class="text-[#333]">`（`color` 属性仅支持 `<text>`, `<button>`, `<input>`, `<textarea>`） |
| **Align-Items 属性限制** | `class="items-baseline"`（原生不支持 `baseline`） | `class="items-end"` 或 `class="items-center"` |
| **原生端间距（gap 与 space）支持限制** | 原生 App 端依赖 `gap`、`gap-x-*`、`gap-y-*` 或 `space-x-*`、`space-y-*` | 严禁使用 `gap` 与 `space-*`；水平排列改用 `mr-*` / `ml-*`，垂直列表挂载 `mb-*` 或 `mt-*` |
| **键盘高度事件类型** | `(e: UniInputKeyboardHeightChangeEventDetail)` | `(e: UniInputKeyboardHeightChangeEvent)`（避免 ClassCastException 崩溃） |
| **对象字面量包含函数导出** | `export const env = { getApiBaseUrl }`（Kotlin 编译报 `Function invocation expected`） | 统一使用标准具名函数导出 `export function getApiBaseUrl()` |
| **原生回调参数访问** | `(res as UTSJSONObject).tempFiles`（Kotlin 运行时崩溃 `ClassCastException`） | 直接利用原生类型推断访问 `res.tempFiles`，严禁将回调结果强转 `UTSJSONObject` |
| **多层 `export *` 重导出（`error18 找不到名称` / 运行期 `NoSuchMethodError`）** | 子模块与门面对同一符号多次 `export *` 转发（Kotlin 端符号被改名为 `useXxxStore__1`） | 同一顶层符号只在一层门面中 `export *`；子模块严禁再整包重导出 |
| **局部函数/变量与框架全局同名（撞车导致找不到或参数不匹配）** | 页面里写 `function stop()`（撞 `@vue/reactivity` 全局 `stop(runner)`） | 局部方法一律加业务前缀（如 `stopStream`）；且局部函数必须定义在调用点之前（Kotlin 声明不提升） |
| **回调引用承载自身的变量（`error18 找不到名称`）** | `const timerId = setInterval(() => { clearInterval(timerId) })` | `let timerId: number = 0;` 先声明，再 `timerId = setInterval(...)` 赋值 |
| **真机 `IndexOutOfBoundsException`** | 数组下标越界检查未前置（JS 返回 `undefined`，Kotlin 直接抛异常） | 边界判断必须与下标读取写进**同一个**短路表达式且判断在前：`i < arr.length && arr[i]` |
| **真机 `NullPointerException`** | 对可能为 null 的字段直接做 `as` 非空断言（`val.pre as boolean`） | 判空后再断言：`val.pre == null ? null : (val.pre as boolean)` |
| **多平台条件编译分流** | 门面只用 `#ifdef VUE3-VAPOR` 分流（该宏仅在 App 蒸汽模式生效，H5/小程序落入 VDOM） | 分流条件显式并列平台：`#ifdef VUE3-VAPOR || H5 || WEB || MP` |
| **注释中带斜杠的条件编译标记** | 在块注释里写 `// #ifdef` / `// #endif`（触发 `Unbalanced right delimiter` 语法错误） | 注释中提到标记只写标记本身，严禁带前缀斜杠 |
| **跨分支共享类型从 `.ts` 导出** | 从 `.ts` 文件经 `export *` 转发纯类型（小程序端 uts2js 报错） | 跨分支共享类型统一抽到纯 `.uts` 叶子文件中定义与导出 |
| **遍历值类型为 `any` 的 Map 报 `error17`** | `map.forEach((value: any, key: string): void => {})` | 去掉类型标注：`map.forEach((value, key) => {})`，或改用 `UTSJSONObject.keys(map)` |
| **Kotlin 报 `Expression 'keys' cannot be invoked as a function`** | `map.keys()`（UTS 声明是方法，Kotlin 侧是属性） | 改用 `UTSJSONObject.keys(obj)` |
| **局部函数当值传递报 `error18 找不到名称`** | `setTimeout(localFn, 1000)` 或在对象字面量回调里直接引用外层局部函数 | 包装为 lambda：`setTimeout(() => { localFn(); }, 1000)` |
| **对象类型属性里声明剩余参数** | `back: (...args: Array<number>) => void`（语法报错 `cannot have modifiers`） | 提取为独立顶层别名：`type BackFn = (...args: Array<number>) => void;` |
| **自带可空返回的内置 API 直接返回** | `return decodeURIComponent(value);`（可空 `String?` 赋给非空 `String` 签名报错） | 先判空兜底再返回：`const d = decodeURIComponent(val); return d != null ? d : val;` |
| **uni 跳转 API 返回值类型声明** | 标为 `Promise<any> | null` 或只写 `any`（泛型不协变导致类型不匹配） | 统一标为 `any | null` |

---

## 3.4 代码生成红线清单 (Redlines Checklist)

在生成任何 `.uvue`、`.uts` 代码并宣告完成前，必须逐条自检纯 UTS 语法与跨端编译器规范：

- [ ] **1. 严禁使用 `interface`**（所有对象数据模型统一使用 `type`，规避 `UTS110111163`）
- [ ] **2. 严禁使用 `undefined`**（所有变量显式赋予初始值，空值统一用 `null`，联合类型仅限 `Type | null`，规避 `UTS110111119`）
- [ ] **3. `if` 与三元表达式严禁隐式转换**（必须显式与 `null`、空串或数值比较，规避 `UTS110111120`）
- [ ] **4. 基础类型等值比较严禁使用 `===` 或 `!==`**（一律统一使用 `==` 与 `!=`）
- [ ] **5. 模板作用域插槽调用点必须显式添加 `as` 类型断言**（避免 Kotlin 编译抛 `error17` 参数类型不匹配）
- [ ] **6. 动态 `:style` 与属性严禁强转 `as UTSJSONObject`**（避免运行时抛 `ClassCastException: Map cannot be cast to UTSJSONObject`，统一使用 `(val ?? {}) as any`）
- [ ] **7. 原生 `<button>` 上严禁挂载 flex 对齐类名**（复杂排版一律使用 `<view>` 包裹）
- [ ] **8. `<view>` 上严禁挂载文字颜色样式**（`color` 类名必须下沉到子级 `<text>` 上）
- [ ] **9. `<text>` 内部严禁混合嵌套多个文本节点**（多色文本排版一律使用兄弟 `<text>` 标签）
- [ ] **10. 严禁使用 `font-mono` / `font-sans` 工具类**（等宽排版必须使用内联 `font-family: monospace;`）
- [ ] **11. 严禁使用 `items-baseline`**（原生编译器不支持，必须改用 `items-end` 或 `items-center`）
- [ ] **12. 原生平台严禁使用 `gap` 及其原子化类名与 `space-x-*` / `space-y-*`**（原生 Flexbox 引擎不支持 gap 和兄弟选择器；水平排列用 `mr-*`/`ml-*`，垂直列表用 `mb-*`/`mt-*`）
- [ ] **13. 严禁导出包裹了顶层函数的对象字面量**（如 `export const env = { fn }` 会触发 Android Kotlin 编译崩溃 `Function invocation expected`，统一使用标准具名函数导出）
- [ ] **14. 严禁将原生回调结果对象强转为 `UTSJSONObject`**（如 `chooseFile` 回调结果，会触发 Android Kotlin 运行时 `ClassCastException` 崩溃，应直接访问对象属性）
- [ ] **15. 严禁多层 / 重复 `export *` 转发同一顶层符号**（会导致 Kotlin 端符号被自动重命名为 `useXxxStore__1`，报 `error18 找不到名称` 与运行期 `NoSuchMethodError`；同一符号只允许在一层门面中转发）
- [ ] **16. `<script setup>` 里的局部方法 / 变量严禁与框架全局同名**（如 `stop` 撞 Vue 全局），且局部函数必须定义在所有调用点之前（Kotlin 局部声明不提升，先调用后定义直接报 `error18`）
- [ ] **17. 回调体内严禁直接引用承载自身的局部变量**（如 `const timerId = setInterval(() => clearInterval(timerId))` 必报 `error18`；必须 `let` 先声明后赋值）
- [ ] **18. 数组 / 列表下标读取前必须在同一个短路表达式内先做边界检查**（`i < arr.length && arr[i]`，避免原生 Kotlin 抛 `IndexOutOfBoundsException`）
- [ ] **19. 对可能为 null 的字段做 `as` 断言前必须先判空**（避免 Kotlin 原生抛 `NullPointerException`）
- [ ] **20. 跨分支共享的纯类型严禁放在 `.ts` 实现文件里经 `export *` 转发**（必须抽到只含 `type` 的 `.uts` 叶子文件，由门面无条件转发）
- [ ] **21. `.uts` 里条件编译标记在注释中严禁带前缀斜杠**（如 `// #ifdef` 会触发预处理器 `Unbalanced right delimiter` 编译崩溃；注释中只写标记本身）
- [ ] **22. 遍历值类型为 `any` 的 `Map` 时严禁给回调参数显式标注 `any`**（避免 Kotlin 报错 `error17`）
- [ ] **23. 严禁按方法调用 `map.keys()`**（UTS 声明是方法，Kotlin 侧是属性，报 `cannot be invoked as a function`；改用 `UTSJSONObject.keys(obj)`）
- [ ] **24. `<script setup>` 里的局部函数严禁当值传递或在对象字面量回调里引用**（`setTimeout(fn, 1000)` 报 `error18`，必须包 lambda：`() => { fn(); }`）
- [ ] **25. 对象类型的属性签名中严禁声明剩余参数**（`back: (...args: Array<number>) => void` 语法报错，必须抽成顶层独立 `type` 别名）
- [ ] **26. 自带可空返回的内置 API 严禁直接 `return` 给非空签名**（必须先判空兜底再返回）
- [ ] **27. uni 跳转 API 的返回值严禁标 `Promise<any> | null`、也不要只写 `any`**（统一写 `any | null`）
