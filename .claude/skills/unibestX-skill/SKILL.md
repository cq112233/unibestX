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

本文档按五大维度组织，采用 **「1 个入口 + 7 个分册」** 结构：

1. **UTS 与原生规范**：语法与严格类型（分册 1.1）、CSS / Tailwind 样式引擎限制（分册 1.2）、跨端运行时铁律（分册 1.3）；
2. **项目正确案例**：来自本项目的生产级标杆案例（分册 2）——页面骨架、TabBar、二级详情页、滚动与下拉刷新、组件与生态库优先范式；
3. **项目代码生成规范**：生成流程与模板（分册 3）、本文件常驻的 3.3 对照表与 3.4 红线清单、回写维护机制（分册 3 的 3.5）；
4. **项目内置工具库**：`src/utils/` 下 10 个现成模块的 API 与用法（分册 4）——**动手造轮子前先查这里**；
5. **页面与应用基础设施**：`src/http/`（请求与流式）、`src/router/`（路由拦截）、`src/layouts/`（页面布局）、`src/i18n/`（语言装配）四套配置与装配层（分册 5）——**定策略 / 选骨架 / 改配置前先查这里**。

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

> ⚠️ **本 Skill 为分册式组织：下表的 7 个分册文件不会自动加载**，需要时用 Read 工具打开。
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

> 📌 **3.3 快速排查对照表**与 **3.4 代码生成红线清单** 因使用频率最高，常驻在本文件下方，无需额外 Read。

---

## 3.3 快速排查与对照表 (Quick Reference Matrix)

| 场景 / 报错现象 | 错误写法 | 正确规范写法 |
| :--- | :--- | :--- |
| **新增页面定义** | 缺少 `definePage`；或把该用 navbar 的页面写成 `layout: false`（`false` 本身合法，但会连顶栏与滚动容器一起失去，见 5.4） | 顶部声明标准完整 `definePage`（`customPageClass`, `customPageStyle`, `debug: false`, `debugHome: false`, `layout: 'navbar'`, `style.navigationStyle: 'custom'` 等）；按需配置 `showBack`（默认 `true`，TabBar 首页写 `false`）、`enablePullDownRefresh`（默认 `false`，按需设为 `true`）、`style.navigationBarTitleText` |
| **页面根容器** | 根用 `<scroll-view>` 导致双重滚动冲突 | 根用 `<view class="flex flex-col flex-1">`，内部需要滚动自写 `<scroll-view>` |
| **可用视口高度** | 手写 `100vh` 或手算状态栏/TabBar | 直接使用 `computedAvailableHeight`（基于 `availableHeight.value ?? 0`） |
| **对象类型定义 (`UTS110111163`)** | `interface User { id: string }` | `type User = { id: string }` |
| **空值定义 (`UTS110111119`)** | `let name: string \| undefined` | `let name: string \| null = null` |
| **条件判断 (`UTS110111120`)** | `if (user)` / `if (str)` | `if (user != null)` / `if (str != null && str != "")` |
| **基础类型等值比较** | `if (code === 200)` / `if (path === '/a')` | `if (code == 200)` / `if (path == '/a')` |
| **插槽变量传参 (`error17`)** | `<text>{{ fn(item) }}</text>` | `<text>{{ fn(item as UTSJSONObject) }}</text>` |
| **动态 `:style` 属性** | `:style="parent['style'] as UTSJSONObject"` | `:style="(parent['style'] ?? {}) as any"` |
| **`<text>` 混合文本** | `<text>a<text>b</text>c</text>` | 外层 `view` 内放多个兄弟 `<text>` 节点 |
| **Tailwind 边框** | `class="border border-gray-200"` | `class="border-[1px] border-solid border-[#e2e8f0]"` |
| **等宽字体显示** | `class="font-mono"` | 内联 `style="font-family: monospace;"` |
| **原生 `<button>` 居中** | `<button class="items-center justify-center">` | 用 `<view class="flex flex-row items-center justify-center">` 包裹 |
| **`<view>` 设置文字颜色** | `<view class="text-[#333]">` | `<text class="text-[#333]">` |
| **Align-Items baseline** | `class="items-baseline"` | `class="items-end"` 或 `class="items-center"` |
| **阴影使用限制** | 过度使用 `shadow-lg` / `box-shadow` | 严禁过度使用阴影，优先使用细腻浅色边框 `border-[1px] border-solid border-[#e2e8f0]` 与微反差背景区分层级（安卓端 VDOM 与 Vapor 阴影表现不一致） |
| **键盘高度事件类型** | `(e: UniInputKeyboardHeightChangeEventDetail)` | `(e: UniInputKeyboardHeightChangeEvent)` |
| **组件库使用与生态优先原则** | 需求中涉及图标、图表、分页、富文本、二维码等功能时脱离生态重复造轮子手写低效原生结构；或在 `<script>` 中手动 `import` 组件 | 优先检索并使用 `uni_modules/` 下已内置的 38 个成熟组件/插件（如 `uni-icons`、`lime-icon`、`e-chart`、`z-paging-x`、`mp-html`、`sp-editor`、`lime-qrcode`、`lime-signature`、`uni-rate-x`、`uni-collapse-x`、`uni-badge-view` 等）；模板直接使用短横线标签（easycom 自动导入），严禁手动 `import` |
| **安全区底部适配** | 内联计算 paddingBottom | `class="pb-safe"` |
| **对象字面量包含函数导出** | `export const env = { getApiBaseUrl }`（Kotlin 编译报 `Function invocation expected`） | 统一使用标准具名函数导出 `export function getApiBaseUrl()`，使用方 `import { getApiBaseUrl }` |
| **文档预览参数 (openDocument)** | `uni.openDocument({ showMenu: true })`（Kotlin 报错 `No parameter with name 'showMenu' found`） | 移除 `showMenu`，仅传 `filePath` 与 `fileType` |
| **键盘全局监听解绑** | `uni.offKeyboardHeightChange(callback)`（Kotlin 报错 `预期类型为 'Number?'`） | 保存 `listenerId = uni.onKeyboardHeightChange(...)`，通过 `uni.offKeyboardHeightChange(listenerId)` 解绑 |
| **原生回调参数访问** | `(res as UTSJSONObject).tempFiles`（Kotlin 运行时崩溃 `ChooseFileSuccess cannot be cast to UTSJSONObject`） | 直接利用原生类型推断访问 `res.tempFiles` / `res.tempFilePaths`，严禁强转 `UTSJSONObject` |
| **多层 `export *` 重导出（`error18 找不到名称"useXxxStore"` / 运行期 `NoSuchMethodError: getUseXxxStore()`）** | 子模块 `vdom/index.uts` 与门面 `store/index.uts` 对同一符号各 `export *` 转发一次（生成 `useXxxStore__1`） | 同一顶层符号只在一层门面中 `export *`；子模块 `index.uts` 只创建并默认导出实例，严禁再转发 |
| **App 端「某个样式看不出效果」** | 直接断定是"写法不对"就去改写法 / 改成 class（本项目曾据此误判 `font-weight`，见 1.2.16） | 先用「静态 class + 动态 `:style` 并排渲染同一行」对照：两种都无效 ⇒ 样式没到元素，往渲染架构查（1.2.15 / 1.3.9 坑 4）；只有一种无效 ⇒ 才怀疑写法（1.2.13 / 1.2.14） |
| **行内嵌套样式丢失（`***粗斜体***` 只剩斜体）** | `:style="inlineStyle(本节点)"` + `flatText(子树)`（内层标签连样式一起被摊平丢掉） | `:class="chainClass(n)"` 沿纯行内单链累加 class（见 1.2.15 / 1.3.9 改造 7） |
| **给渲染器新增 HTML 标签后一片空白** | 只在模板里加 `n.name == 'video'` 分支，忘了改解析器（未知标签会被兜底分支**改名成 `div`**，分支永不命中） | 解析器里在 `br/hr/img` 那组**显式接住**新标签；且因 marked 把 `<video>` 当行内标签包进 `<p>`，**顶层与嵌套两条模板分支都要写**（见 1.3.9 坑 4） |
| **流式渲染下媒体 `src` 半截** | `<video :src="src">` 直接用流式到达的半截 URL（渲染出报错黑框） | 取值函数加完成度守卫：含 `://` 且以已知扩展名结尾才返回，否则返回 `''`（模板 `src != ''` 才渲染，见 1.3.9 坑 4） |
| **段落里的行内片段各占一行（段落被拆行）** | 用裸 `<view>` 承载行内混排内容（原生 `view` 默认 `flex-direction:column`，行内兄弟节点被当成列项） | 行内内容容器必须显式 `flex-direction:row;flex-wrap:wrap`，或按「行内连续段」分组 / 无混排时并成单个 `<text>`（见 1.2.17） |
| **链式累加 class 却拿不到内层样式** | 解析阶段对行内标签 `stripAllTags(inner)` 摊平（内层标签在解析期就没了，`chainClass` 第一跳即 break） | 行内节点 children 用 `parseHtml(inner)` **保留树形**；`pre` / 行内 `code` 例外（见 1.2.15） |
| **`error18 找不到名称"stop"` 的兄弟报错 `No value passed for parameter 'runner'`** | 页面里写 `function stop()`（与本页无关，但 `@vue/reactivity` 全局就有 `stop(runner: ReactiveEffectRunner)`，页面内 `stop()` 被解析成框架那个） | 局部方法**一律加业务前缀**（`stop` → `stopStream`）；未 import 就直接用的名字都要先假定会撞框架全局（见 1.3.14） |
| **改名后反而报 `找不到名称"stopStream"`** | 以为是自己改坏了，把名字改回去 | **这是把被掩盖的顺序错误顶出来了**：`<script setup>` 局部声明不提升，定义必须在调用点之前。改名与调整顺序**必须一起做**（见 1.3.14） |
| **回调引用承载它的那个变量（`error18 找不到名称"timerId"`）** | `const timerId = setInterval(() => { ... clearInterval(timerId) ... })` | `let timerId: number = 0;` 先声明，再 `timerId = setInterval(...)` 赋值（局部声明在自身初始化表达式内不可见，见 1.1.14） |
| **宣称"编译成功"却漏掉 Kotlin 报错** | 用 `launch app-android --compile true`（或 `compile app-android --file`）当 UTS 编译验证 | 必须用**不带 `--compile`** 的真机 `launch app-android`，并先 `grep -c "编译为android class" <log>` ≥ 1；两条捷径对故意写坏的代码也报"编译成功"（见 1.3.15） |
| **真机 `IndexOutOfBoundsException` 但 H5/单测一切正常** | `const next = arr[i + 1];` 写在循环外，边界判断 `i + 1 < arr.length` 写在下一行（JS 越界给 `undefined` 且被 `&&` 短路挡住，Kotlin 直接抛） | 把边界判断与读取写进**同一个** `&&`、判断在前：`while (i + 1 < arr.length && arr[i + 1].type == 'text')`（见 1.3.16） |
| **原生端某条 CSS 只报警告、样式却没了（如 `vertical-align`）** | 看到 `is not a standard property name (may not be supported)` 就当噪音放过（`<sub>` / `<sup>` 实际只有字号生效、没有上下标偏移） | 这类警告一律回头确认该项样式是否真的生效 —— 原生端不认的属性全是「警告 + 静默失效」，同 1.2.13 / 1.2.14（见 1.2.18） |
| **真机 `NullPointerException: null cannot be cast to non-null type kotlin.Boolean`** | 对可能缺失的字段做非空断言 `pre: token.pre as boolean`（行内 html token 根本没给 `pre`；JS 里 `null as boolean` 是空操作，所以 H5/小程序都好） | 判空后再断言：`token.pre == null ? null : (token.pre as boolean)`（见 1.3.17） |
| **H5 / 微信小程序没走到预期的蒸汽（Vapor）分支** | 门面只用 `#ifdef VUE3-VAPOR` 分流（该宏**只在 App 蒸汽模式**成立；且框架对 web/小程序**强制删除** `UNI_APP_X_DOM2`，所以 `manifest.json` 里写 `vapor: true` 对它们**毫无作用**，二者双双落进 VDOM 分支） | 分流条件显式并列平台：`#ifdef VUE3-VAPOR \|\| H5 \|\| WEB \|\| MP`（`MP` 覆盖全部小程序；`H5` 已蕴含 `WEB`）；注意 `#ifndef A \|\| B` 语义是 `!(A \|\| B)`（见 1.3.18） |
| **UTS 编译抛 `Error: Unbalanced right delimiter found in string at position N`** | 在 `/** */` 块注释里写了**带斜杠前缀**的条件编译标记名（形如 `// #ifdef` / `// #endif`）—— 普通斜杠散文不会触发，只有斜杠**紧跟**标记名时才炸，极难肉眼发现 | 注释里提到这些标记只写标记本身、不带前缀斜杠；定位用报错的字符偏移直接切片看上下文（见 1.3.12） |
| **小程序报 `[plugin:uts] "ISingleTokenRes" is not exported by ".../store/index.uts"`** | 门面 `export * from './vapor/token'` 从 **`.ts`** 文件转发纯类型（补成 `./vapor/token.ts` 也**无效**，报错一字不变） | 跨分支共享类型抽到只含 `type` 的 **`.uts`** 叶子文件（如 `src/store/types.uts`），门面**无条件** `export * from './types.uts'`，两分支实现各自 `import type` 且不再 `export type` 同名类型（见 1.3.18） |
| **CLI 编译 mp-weixin 报 `ENOENT ... .uts2js/cache/...` 且报错文件每次都不同** | 以为是代码缺陷，改源码 / 反复 `rm -rf unpackage/cache/.mp-weixin` | 这是**开着的 HBuilderX IDE 与 CLI 抢 `unpackage/cache` 的竞态**（判据：同一份代码换次运行报错文件就变）。**同一份代码直接重试即可通过**；注意 CLI **被打断时仍返回 exit 0**，必须 `test -d unpackage/dist/dev/mp-weixin/src/store` 看产物才算数（见 1.3.18） |
| **IDE 报 `Cannot find module '../types.uts' or its corresponding type declarations`，但构建全绿** | 当成噪音忽略 / 手工补一个声明文件 | 凡被 `.ts` / `.uvue` 以 `xxx.uts` 导入的 `.uts` 都必须有**同目录同名** `<name>.d.uts.ts`（靠 `allowArbitraryExtensions`）。跑 `node scripts/gen-uts-dts.mjs`；不在 `src/utils/*/` 下的要登记进脚本的 `EXTRA_SOURCES`（见 1.3.19） |
| **遍历值类型为 `any` 的 Map 报 `error17`**（`实际类型为 'Function2<Any, String, Unit>'，预期类型为 'Function1<Map.Entry<String, Any?>, Unit>'`） | `query.toMap().forEach((value: any, key: string): void => {})`（给值参数显式标注 `any`） | 去掉标注写 `query.toMap().forEach((value, key) => {})`，或改用 `UTSJSONObject.keys(query)` + `query.getAny(key)`（见 1.1.15） |
| **Kotlin 报 `Expression 'keys' of type 'MutableSet<String>' cannot be invoked as a function`** | `map.keys()`（UTS 声明里是方法，Kotlin 侧是属性） | 改用 `UTSJSONObject.keys(obj)`；只取已知键时直接 `getString` / `getAny`，不要遍历 Map（见 1.1.15） |
| **`error18 找不到名称"someLocalFn"`，但函数就在同一个文件里** | `setTimeout(someLocalFn, 1000)`；或在对象字面量的回调里引用外层局部函数 | 包一层 lambda：`setTimeout(() => { someLocalFn(); }, 1000)`（见 1.1.16） |
| **真机运行日志里 `编译为android class` 恒为 0，却报「编译成功」** | 把这种「编译成功」当成 UTS 已过 Kotlin 编译 | 这是 `manifest.json` 的 `vapor-render-target: "bytecode"` 让整轮跳过 Kotlin 阶段；临时删掉 `vapor` 两个键改走 VDOM 模式再验（见 1.3.20） |
| **Kotlin 报 `error: Function type parameters cannot have modifiers.`** | 把剩余参数写进对象类型的属性：`back: (...args: Array<number>) => void` | 抽成顶层别名 `export type BackFn = (...args: Array<number>) => void;` 再 `back: BackFn`（顶层别名里写 `...args` 合法，对象类型属性里不合法，见 1.1.17） |
| **Kotlin 报 `error1 返回类型不匹配：预期类型为 'String'，实际类型为 'String?'`** | `return decodeURIComponent(value);`（包在 `try/catch` 里也不行） | 先判空再返回：`const decoded = decodeURIComponent(value); if (decoded == null) { return value; } return decoded;`（见 1.1.18） |
| **Kotlin 先报 `expected 'UTSPromise<Any>?', actual 'UTSPromise<AsyncApiSuccessResult>?'`，按提示改成 `any` 后又报 `expected 'Any'`** | 给 uni 跳转 API 的返回值标 `Promise<any> | null`，或听提示只写 `any` | 声明与被调用方统一写 `any | null`（UTS 泛型不协变 + `any` 是非空 Kotlin `Any`，见 1.1.19） |
| **`layout: 'navbar'` 页面顶栏整块消失，导航栏 / 返回箭头 / 状态栏占位全没了，且不报任何错** | 只写了 `layout: 'navbar'`（`navbar.uvue` 是 `<NavBar v-if="isCustomNav">`，`isCustomNav` 只认 `pageStyle.navigationStyle == 'custom'`） | `definePage` 的 `style` 里**必须同时写 `navigationStyle: 'custom'`**；漏写时页面看起来只剩一个滚动容器（见 5.4） |
| **请求失败的 `catch` 里取不到 `err.message`（拿到 undefined / 空）** | `catch ((err: Error) => console.log(err.message))` —— lime-request 把拦截器里抛出的 `Error` 转成了 `LimeRequestFail` **普通对象**再 reject | 读 `err.errMsg`，或 `err.cause.message`，或照 `src/sub/httpDemo/httpDemo.uvue` 做 `instanceof Error` → `instanceof UTSJSONObject` 多级兜底；**注意 5.2 流式的 `error` 反而下沉真 `Error` 实例**（见 5.1 / 5.2） |
| **调了 `setNavbarTitle` / `setHideNavbar` / `setStatusBarVisible` 毫无反应** | 在 `layout: 'default'` 或 `layout: false` 的页面上调用（前者只监听 `stopPagePullDownRefresh`，后者连布局都没有） | 这 9 个 `set*` / `reset*` 广播**只有 `layout: 'navbar'` 监听**；要运行时可改顶栏就必须选 navbar 布局（见 5.4 / 4.7） |
| **`uni.addInterceptor` 加了拦截器却没拦住跳转** | `invoke` 里没写 `return false`（返回 `undefined` / 不写 `return` 一律视为放行） | 只有**显式返回 `false`** 才取消本次跳转；且 `uni.addInterceptor` 是**追加**语义，注册必须收敛到 `main.uts` 一处（见 5.3） |
| **切了语言，原生 TabBar / 当前页导航栏标题还是旧语言** | 只调了 `appStore.setLocale(lang)` 就以为完事 | 切完还要调 4.4 的 `setTabbarItem()` 刷 TabBar 文案、4.7 的 `setNavigationBarTitle()` 刷标题（见 5.5） |
| **H5 Docker 部署模式** | 在 Docker 容器内下载安装 3.7GB Linux 版 HBuilderX 桌面端做全流程构建（构建耗时 15~30 分钟、Mac M 芯片转译卡死、BuildKit 日志管道堵塞） | 宿主机/CI 执行 `pnpm build:test` / `pnpm build:prod`，Docker 仅基于 `nginx:alpine` 轻量镜像承载静态文件与 `${API_UPSTREAM}` 动态反代（镜像仅 ~25MB，打包 1~2 秒，详见 `docs/guide/docker-deploy.md`） |
| **App 端动画卡顿 / 顿挫（Transition / Transform）** | 将 `transitionProperty` / `duration` 写在动态 `:style` 中；对带深阴影的元素做 `scale` 缩放；切换时改 `fontWeight` 触发文本 `requestLayout()`；用 `setTimeout` 延迟挂载来掩盖卡顿 | `transition` 规则写在静态 CSS class 中走原生 GPU 硬件加速；动态 `:style` 只传单一 `transform` 变化；避免带深阴影缩放与频繁改变 `fontWeight`；保持同步状态，严禁使用 `setTimeout` 掩盖动画性能缺陷（见 1.2.19） |
| **模拟数据（Mock）直接在页面组件中硬编码** | 在 `.uvue` 页面组件的 `<script setup>` 里写死大段假数据数组/对象字面量（如 `const list = ref([...])`） | 抽离到 `src/api/xxx.uts`，先定义强类型 `type`，将 Mock 数据封装为返回 `Promise<T>` 的接口函数（如 `Promise.resolve(MOCK_LIST)`）；页面统一通过异步 API 函数拉取。后期对接真实后端仅需在 API 模块中改用 `http.get/post`，页面层 0 改动（见 5.6） |


---

## 3.4 代码生成红线清单 (Redlines Checklist)


在生成任何 `.uvue`、`.uts` 代码并宣告完成前，必须逐条自检：

- [ ] **1. 新增页面顶层显式声明完整 `definePage`**（包含 `customPageClass`, `customPageStyle`, `debug: false`, `debugHome: false`, `layout: 'navbar'`, `showBack`, `hideStatusBar: false`, `hideNavbar: false`, `enablePullDownRefresh: false`（按需开启设为 `true`）, `navigationStyle: 'custom'`）
- [ ] **2. 页面根容器为 `view` 而非 `scroll-view`**（杜绝与布局双重滚动冲突）
- [ ] **3. 视口可用高度直接采用 `computedAvailableHeight`**（严禁写 `100vh` 或手工扣除 TabBar）
- [ ] **4. 严禁使用 `interface`**（所有数据模型统一使用 `type`）
- [ ] **5. 严禁使用 `undefined`**（所有变量显式赋予初始值，空值统一用 `null`，联合类型仅限 `Type | null`）
- [ ] **6. `if` 与三元表达式严禁隐式转换**（必须显式与 `null`、空串或数值比较）
- [ ] **7. 基础类型等值比较严禁使用 `===` 或 `!==`**（一律统一使用 `==` 与 `!=`）
- [ ] **8. 原生 `<button>` 上严禁挂载 flex 对齐类名**（复杂排版一律使用 `<view>` 包裹）
- [ ] **9. `<view>` 上严禁挂载文字颜色样式**（颜色类名必须下沉到子级 `<text>` 上）
- [ ] **10. `<text>` 内部严禁混合嵌套多个文本节点**（多色排版一律使用兄弟 `<text>` 标签）
- [ ] **11. 严禁使用 `font-mono` / `font-sans`**（等宽排版必须使用内联 `font-family: monospace;`）
- [ ] **12. 严禁使用 `items-baseline`**（原生编译器不支持，必须改用 `items-end` 或 `items-center`）
- [ ] **13. 颜色值一律强制十六进制（`#ffffff`）**（严禁使用英文命名颜色如 `bg-[red]`）
- [ ] **14. 严禁过度依赖深重阴影**（安卓端 VDOM 与 Vapor 模式阴影渲染不一致，优先使用浅边框与底色反差划分层级）
- [ ] **15. 模板作用域插槽调用点必须显式添加 `as` 类型断言**（避免触发 `error17`）
- [ ] **16. 组件库组件严禁在 `<script>` 中手动 import**（统一使用 easycom 短横线标签自动导入）
- [ ] **17. 严禁导出包裹了顶层函数的对象字面量**（如 `export const env = { fn }`，会触发 Android Kotlin 编译崩溃 `Function invocation expected`，统一使用标准具名函数导出）
- [ ] **18. 严禁在 `uni.openDocument` 中传递 `showMenu` 参数**（uni-app X 原生 Kotlin 不支持该字段，会触发编译报错 `No parameter with name 'showMenu' found`）
- [ ] **19. 全局键盘监听解绑必须使用 `listenerId: number`**（`uni.offKeyboardHeightChange` 入参为数字 ID 而非回调函数）
- [ ] **20. 严禁将系统 API 回调原生结果对象强转为 `UTSJSONObject`**（如 `chooseFile` 的 `res as UTSJSONObject`，会触发 Android Kotlin 运行时 `ClassCastException` 崩溃，应直接访问对象属性）
- [ ] **21. 严禁多层 / 重复 `export *` 转发同一顶层符号**（会导致 Kotlin 端符号被改名为 `useXxxStore__1`，`.uts` 编译报 `error18 找不到名称`、`.uvue` 运行期报 `NoSuchMethodError: getUseXxxStore()`；同一符号只允许在一层门面中转发，子模块 `index.uts` 不得再整包重导出）
- [ ] **22. 遇到「样式看不出效果」严禁先猜写法**（必须先用「静态 class + 动态 `:style` 并排渲染同一行」对照，区分"样式没到元素"与"写法不对"；本项目曾据此误判动态 `:style` 的 `font-weight`，见 1.2.16）
- [ ] **23. 行内嵌套样式必须沿单链累加，严禁「本节点样式 + 摊平子树」**（否则 `***粗斜体***`、`~~**粗删**~~` 这类内层效果被静默丢掉，见 1.2.15）
- [ ] **24. 给 Markdown 渲染器新增 HTML 标签时，解析器与模板（顶层 + 嵌套）必须同时改**（未知标签会被兜底分支改名成 `div`；marked 把 `<video>` 等当行内标签包进 `<p>`，只写顶层分支会渲染成空，见 1.3.9 坑 4）
- [ ] **25. 流式渲染下的媒体 `src` 必须加完成度守卫**（半截 URL 直接喂给 `<video>` / `<image>` 会闪出报错黑框；含 `://` 且以已知扩展名结尾才返回）
- [ ] **26. 行内混排内容严禁用裸 `<view>` 承载**（原生 `view` 默认 `flex-direction:column`，段落里的行内兄弟节点会各占一行、把段落拆开；必须显式 `flex-direction:row;flex-wrap:wrap`，见 1.2.17）
- [ ] **27. 行内节点的子节点严禁在解析阶段摊平**（`stripAllTags(inner)` 会让内层标签在解析期消失，链式累加 class 无从下探、内层样式静默丢失；必须 `parseHtml(inner)` 保留树形，见 1.2.15）
- [ ] **28. 渲染链路的测试必须跑「真实解析器产出的树」，严禁手搭 fixture**（本项目曾用 20/20 全绿的手搭树测试掩盖了真机上的样式丢失 —— 解析器根本不产出那种树形；并且要验证"改回旧写法测试会红"，见 1.2.15）
- [ ] **29. `<script setup>` 里的局部方法 / 变量严禁与框架全局同名**（未 import 就直接使用的名字一律先 grep 框架 d.ts；`stop` 撞 `@vue/reactivity` 的 `stop(runner)`，且**撞名会掩盖"先调用后定义"的顺序错误**，改名后才会暴露，见 1.3.14）
- [ ] **30. `<script setup>` 里的局部函数必须定义在所有调用点之前**（Kotlin 局部声明不提升，先调用后定义直接 `error18 找不到名称`，见 1.3.14）
- [ ] **31. 回调体内严禁引用承载它的那个局部变量**（`const timerId = setInterval(() => clearInterval(timerId))` 必炸 `error18`；必须 `let` 先声明后赋值，`const` 做不到，见 1.1.14）
- [ ] **32. 严禁用 `launch app-android --compile true` 或 `compile app-android --file` 充当 UTS 编译验证**（两者都**不执行**「编译为android class」，对本项目故意写坏的代码同样报"编译成功"；必须用不带 `--compile` 的真机构建，并先确认日志里 `编译为android class` 出现 ≥ 1 次，见 1.3.15）
- [ ] **33. 数组 / 列表下标读取，边界判断必须与读取写在同一个短路表达式内、且判断在前**（严禁"先在上方或循环外读可能越界的下标，再在下方判边界"：JS 只给 `undefined` 且常被 `&&` 挡住，Kotlin 直接抛 `IndexOutOfBoundsException` —— 真机必崩而 H5 与 node 单测全绿，见 1.3.16）
- [ ] **34. 对可能缺失的字段做 `as` 非空断言前必须先判空**（Kotlin 的 `as T` 不允许 null、直接抛 NPE，JS 侧却是空操作 ⇒ 只在真机崩；尤其构造方与消费方分离的代码，如 `Tokenizer` → `Parser`，见 1.3.17）
- [ ] **35. 多平台门面分流严禁只用 `VUE3-VAPOR`**（该宏只代表 **App 蒸汽模式**；且框架在 `hbx/alias.js` 里对 web/小程序**强制删除** `UNI_APP_X_DOM2`，**`manifest.json` 的 `vapor: true` 对它们完全无效** —— 只按它分流会把 Web 与全部小程序错误甩进 VDOM 分支；必须并列平台：`#ifdef VUE3-VAPOR || H5 || WEB || MP`，并牢记 `#ifndef A || B` 语义是 `!(A || B)`，见 1.3.18）
- [ ] **36. 跨分支共享的纯类型严禁放在 `.ts` 实现文件里经 `export *` 转发**（微信小程序 uts2js 链路拿不到 `.ts` 经 `export *` 转发的类型，业务侧 `import type` 直接报 `"[X]" is not exported by ".../store/index.uts"`；补 `.ts` 扩展名无效。必须抽到只含 `type` 的 `.uts` 叶子文件，由门面**无条件**转发，见 1.3.18）
- [ ] **37. `.uts` 里 `#ifdef` / `#ifndef` / `#endif` 三个词任何时候都不要带前缀斜杠书写**（行首会当真标记、块注释里带斜杠前缀则直接抛 `Unbalanced right delimiter` 中断 UTS 编译；注释里只写标记本身，见 1.3.12）
- [ ] **38. 带条件编译（`#ifdef` 分段）的 `.uts` 文件严禁套用「导入/导出排序」类自动格式化**（排序会跨过 `#endif` 把语句挪出条件块，导致两个平台分支的 `export *` 在**所有平台同时生效** —— 命中 `useXxxStore__1` 红线并触发 1.1.12 的 `NoSuchMethodError`；发现语句顺序异常先 `git diff` 复原，见 1.3.18）
- [ ] **39. 新增 / 移动任何被 `.ts`、`.uvue` 导入的 `.uts` 后，必须跑一次 `node scripts/gen-uts-dts.mjs`**（缺配套 `<name>.d.uts.ts` 就会在 IDE 里挂 `Cannot find module`；不在 `src/utils/*/` 下的还要先登记进 `EXTRA_SOURCES`。这条**不影响构建**、只在 IDE 面板出现，最容易被漏掉，见 1.3.19）
- [ ] **40. 严禁手工编辑 `<name>.d.uts.ts`**（由脚本生成，会被下次运行覆盖；确需人工维护的模块登记进脚本的 `HANDWRITTEN`，见 1.3.19）
- [ ] **41. 遇到 `ENOENT ... .uts2js/cache/...` 时严禁怀疑 / 修改业务代码**（那是 IDE 常驻 `uni.js -p mp-weixin` 与 CLI 抢 `unpackage/cache` 的竞态，**同一份代码重试即可通过**；且 CLI 被打断时仍返回 exit 0，判定必须落到产物目录是否存在，见 1.3.18）
- [ ] **42. 遍历值类型为 `any` 的 `Map` 时，严禁给回调参数显式标注 `any`**（`query.toMap().forEach((value: any, key: string) => {})` 报 `error17` —— `Function2<Any, String, Unit>` 对不上 `Function1<Map.Entry<String, Any?>, Unit>`；去掉标注或改用 `UTSJSONObject.keys()` + `getAny()`，见 1.1.15）
- [ ] **43. 严禁按方法调用 `map.keys()`**（UTS 声明是方法、Kotlin 侧是 `MutableSet` 属性，报 `cannot be invoked as a function`；改用 `UTSJSONObject.keys(obj)`，见 1.1.15）
- [ ] **44. `<script setup>` 里的局部函数严禁当值传递、也严禁在对象字面量回调里引用**（`setTimeout(localFn, 1000)` 报 `error18 找不到名称`，必须包 `() => { localFn(); }`，见 1.1.16）
- [ ] **45. 见到「编译成功」前必须先确认这轮真的进了 Kotlin 阶段**（`manifest.json` 的 `vapor-render-target: "bytecode"` 会让整轮走字节码 / `uts2js`，`grep -c "编译为android class"` 恒为 0；此时的「编译成功」不代表 UTS 过了 Kotlin，见 1.3.20）
- [ ] **46. 对象类型的属性里严禁写剩余参数**（`back: (...args: Array<number>) => void` 报 `Function type parameters cannot have modifiers.`；抽成顶层 `type` 别名再引用即可，见 1.1.17）
- [ ] **47. 自带可空返回的内置 API 严禁直接 `return` 给非空签名**（`return decodeURIComponent(value);` 在 `: string` 函数里报 `error1 返回类型不匹配`，`try/catch` 挡不住；先判空兜底再返回，见 1.1.18）
- [ ] **48. uni 跳转 API 的返回值严禁标 `Promise<any> | null`、也不要只写 `any`**（前者报 `expected 'UTSPromise<Any>?'`，后者报 `expected 'Any'`；统一写 `any | null`，见 1.1.19）
- [ ] **49. 任何 `layout: 'navbar'` 的页面，`definePage.style.navigationStyle` 必须显式写 `'custom'`**（漏写时 `<NavBar>` 整块不渲染、返回箭头与状态栏占位一并消失，**且完全静默不报错**；仓库 18 个 navbar 页面无一例外都写了，见 5.4）
- [ ] **50. 接口请求的失败值严禁直接当 `Error` 实例用**（lime-request 会把拦截器抛出的 `Error` 转成 `LimeRequestFail` 普通对象，`err.message` 取不到；读 `errMsg` / `err.cause.message` 或做多级兜底。**5.2 流式请求的 `error` 才是真 `Error` 实例**，两套姿势不要混，见 5.1 / 5.2）
- [ ] **51. 运行时改导航栏 / 状态栏严禁改 `definePage` 或 props**（`definePage` 是编译期数据、布局 props 只在渲染时读一次；必须走 4.7 的 `set*` 广播，且只有 `layout: 'navbar'` 会响应，见 5.4）
- [ ] **52. H5 Docker 部署严禁在容器内安装 HBuilderX 桌面端做全流程构建**（必须使用宿主机/CI `pnpm build:h5` + `nginx:alpine` 轻量镜像交付，镜像仅 ~25MB，详见 `docs/guide/docker-deploy.md`）
- [ ] **53. 需求功能与 `uni_modules` 匹配时严禁重复造轮子**（在编写 UI 界面或实现业务功能前，必须优先检索 `uni_modules/` 目录；若需求功能与 `uni_modules` 下已有成熟组件或插件匹配，如 `uni-icons`、`lime-icon`、`e-chart`、`z-paging-x`、`mp-html`、`sp-editor`、`lime-qrcode`、`lime-signature`、`uni-rate-x`、`uni-collapse-x`、`uni-badge-view`、`uni-number-box-x`、`uni-link-x`、`uni-fab-button`、`uni-time-format` 等，**必须优先使用现有组件/库**，严禁重复手写低效原生结构；且模板中直接使用标签，严禁在 `<script>` 中手动 import）
- [ ] **54. App 端 `transition` 动画属性严禁写在动态 `:style` 中，严禁使用 `setTimeout` 错峰掩盖性能缺陷**（`transitionProperty` / `transitionDuration` / `transitionTimingFunction` 必须声明在静态 CSS 类中走硬件加速，动态 `:style` 只传单一 `transform` 变化；避免对带深阴影容器做缩放动画；严禁在外部容器使用 `setTimeout` 延迟挂载来掩盖组件自身的动画性能问题，见 1.2.19）
- [ ] **55. 严禁在页面/组件内直接硬编码 Mock 模拟数据，必须抽离为 `src/api/` 标准后端接口函数**（模拟数据必须在 `src/api/` 下集中管理，定义强类型 `type` 并封装为返回 `Promise<T>` 的接口函数如 `Promise.resolve(MOCK_DATA)`，页面一律通过异步 API 函数拉取；对接真实接口时仅需在 API 模块内将 `Promise.resolve` 替换为 `http.get/post`，实现页面业务层零改动无缝切换，见 5.6）


