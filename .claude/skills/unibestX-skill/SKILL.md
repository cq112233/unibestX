---
name: unibestX-skill
description: Use when developing, compiling, refactoring, or troubleshooting uni-app X (.uvue / .uts / .ts) projects, handling UTS strict type constraints (UTS110111163, UTS110111119, UTS110111120, ClassCastException, error17 Any? slot props), Tailwind CSS styling and layout engine limitations, page skeleton conventions, or platform-specific cross-end issues across App (Android Kotlin, iOS Swift), HarmonyOS (ArkTS), Web, and Mini-Programs.
---

# unibestX-skill (uni-app X & UTS 规范、真实案例与代码生成指南)

## 概述

> 🚨 **AI / Agent 必读铁律**：所有参与本项目开发的 AI、Agent 在进行任何编码、重构、修 bug 或新增页面任务前，**必须首先完整阅读本文件，并按其命中的分册继续 Read 对应参考文件**。只看本文件（入口）而不读分册就动手，视为未遵守本 Skill。

> 🚫 **AI / Agent 严禁擅自修改本 Skill**：本 Skill 是项目规范知识库，AI / Agent **严禁在本 Skill 内新增、删除、改写字数、调整结构或「顺手优化」**。仅当**开发者显式、明确地要求修改本 Skill** 时，才可动本 Skill 下的任何一个文件（含 `SKILL.md` 与 `references/` 全部分册）。发现本 Skill 与实际代码不符、或觉得某条规则「应该改一改」时，**只能在回复里提出建议并等待开发者裁决，不得先改再说**。

uni-app X 采用 UTS (uni type script) 语言与原生渲染引擎，跨端直接编译为原生代码（Android 编译为 Kotlin，iOS 插件编译为 Swift，鸿蒙插件编译为 ArkTS，Web/小程序编译为 JS）。  
与宽容的 TypeScript/JavaScript 不同，UTS 采用**名义强类型系统（Nominal Strong Typing）**与**原生渲染规范**。

本文档按六大维度组织，采用 **「1 个入口 + 8 个分册」** 结构：

1. **UTS 与原生规范**：语法与严格类型（分册 1）、CSS / Tailwind 样式引擎限制（分册 2）、跨端运行时铁律（分册 3）；
2. **项目正确案例**：来自本项目的生产级标杆案例（分册 4）——页面骨架、TabBar、二级详情页、滚动与下拉刷新、组件与生态库优先范式；
3. **项目代码生成规范**：生成流程与模板（分册 5）、本文件常驻的 A.1 对照表与 A.2 红线清单；
4. **AI 页面层级与组件设计规范**：页面高内聚自包含、最多三级封顶、容器与纯展示解耦、Mock 接口契约化（分册 6）——**AI 生成复杂页面与拆分组件前必读**；
5. **API 接口层规范**：一页一目录落位、契约类型（`type`）与 Mock 数据集同层、后端就绪只换函数体（分册 7）——**新增页面与对接后端前必读**；
6. **项目核心工具库规范**：系统信息（`src/utils/systemInfo`）、环境变量（`src/utils/env`）与基础通用工具（分册 8）——**页面开发与调用通用能力前必读**。

---

## 何时使用

- 编写、重构或新增 `.uvue`、`.uts`、`.ts`、`.scss` 文件时
- 规划或生成新页面结构、骨架布局与视口高度（`availableHeight`）时
- **新增页面并同步建 `src/api/<page>/` 接口层（接口函数 + `types.uts` + `mock/`）时**、把页面里的假数据抽成接口函数时
- 对接后端真实接口、写 `http` 请求 / 文件上传 / SSE 流式接口时
- **获取系统信息、视口高度、状态栏/导航栏高度，或读取环境变量、API 域名、调用 Toast / Router 时**
- 使用 Tailwind CSS 编写跨端 UI、按钮排版、文本颜色与安全区适配时
- 遇到 UTS 强类型编译错误（`UTS110111163`、`UTS110111119`、`UTS110111120`、`UTS100006`、`error17`）
- 遇到 Android/iOS 原生运行时报错（`ClassCastException: Map cannot be cast to UTSJSONObject`）
- 进行跨端渲染模式（VDOM / Android VDOM / Vapor）兼容或 Easycom 组件库开发时

---

## 文档结构（分册导航 —— 命中即必须 Read）

> ⚠️ **本 Skill 为分册式组织：下表的分册文件不会自动加载**，需要时用 Read 工具打开。
> **硬性要求**：对照表（A.1）或红线清单（A.2）命中某条时，**必须打开其标注的分册核对完整正反例与实测结论**，不得只凭本文件的一行结论就改代码 —— 每条铁律的「为什么会炸」「反例长什么样」都在分册里。

| 分册文件 | 收录内容 | 何时 Read |
| :--- | :--- | :--- |
| [references/1-uts-syntax.md](references/1-uts-syntax.md) | **1 UTS 强类型系统与语法核心铁律**（21 条） | 定义对象结构与类型标注、写 `export` / `class` / 闭包 / 定时器回调 / 集合遍历 / 联合类型上的三元表达式 / Promise 的 `.then` 与 `.catch`；遇 `UTS110111163`、`UTS110111119`、`UTS110111120`、`error1`、`error17`、`error18`、`error25`、`NoSuchMethodError`、`Expression expected` |
| [references/2-styling.md](references/2-styling.md) | **2 样式 (CSS & Tailwind) 与原生渲染铁律**（23 条） | 写 `.scss` / Tailwind 工具类；处理按钮与文本排版、安全区、高度单位、阴影边框、字号字重、行内嵌套样式、样式不生效或表现不一致 |
| [references/3-runtime.md](references/3-runtime.md) | **3 跨端运行时与渲染模式约束**（25 条） | VDOM / Android VDOM / Vapor 差异、多平台门面分流与条件编译、UTS 插件与自定义基座、**第三方组件（选项式 `.vue`）是否可用**、Markdown 渲染、真机与 Kotlin 报错、编译验证命令选择 |
| [references/4-examples.md](references/4-examples.md) | **4 项目正确案例**（5 个生产级标杆案例） | 新建页面、搭「上固定 + 下滚动」骨架、算可用高度、写 TabBar 页与下拉刷新、写二级 / 子包页、用 Easycom 引组件 —— **优先照抄，不要自创结构** |
| [references/5-codegen.md](references/5-codegen.md) | **5.1 新增页面生成流程**、**5.2 页面代码标准模板** | 生成新页面 / 组件前走流程、需要复制标准页面模板；**新增页面时必产接口层**（接口文件模板见分册 7） |
| [references/6-page-component-spec.md](references/6-page-component-spec.md) | **6 AI 页面层级与组件设计规范**（页面高内聚 · 数据所有权下沉 · 容器/视图分离 · Mock 收拢进页面接口目录 · 后端就绪只换函数体，附八大铁律与 19 条自检红线） | 规划新页面结构、拆分复杂页面组件、组织页面内 `components/common/` 与模块私有视图、把 mock 收拢进 `src/api/<page>/`、对接后端真实接口时必读 |
| [references/7-api-spec.md](references/7-api-spec.md) | **7 API 接口层规范**（一页一目录落位 · 命名约定 · 契约类型铁律 · 按模块独立造数 · `http` 单例 / 上传 / SSE 用法 · 后端就绪只换函数体，附 12 条接口层自检红线） | **新增页面同步建 `src/api/<page>/` 时**、抽接口函数时、写 mock 数据集与契约类型时、对接后端真实接口时必读 |
| [references/8-utils-spec.md](references/8-utils-spec.md) | **8 项目核心工具库规范**（系统信息 `src/utils/systemInfo` · 环境变量 `src/utils/env` · 基础通用工具优先原则，附完整 API 矩阵与 10 条红线） | 获取屏幕/窗口尺寸、状态栏/导航栏/TabBar高度、计算内容可用高度（`availableHeight`）；判断开发/生产环境、获取接口基础地址；使用 Toast、Loading、路由跳转、主题与返回键时必读 |

> 📌 **A.1 快速排查对照表**与 **A.2 代码生成红线清单** 因使用频率最高，常驻在本文件下方，无需额外 Read。

---

## A.1 快速排查与对照表 (Quick Reference Matrix)

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
| **模块导入与循环引用（Kotlin 类加载死锁 / NPE）** | 底层模块互相引用 `index.uts` 聚合门面，或总入口反向 `export *` 导致循环引用闭环（运行期报 `Parameter specified as non-null is null` / `ExceptionInInitializerError` / `NoClassDefFoundError`） | 全局开发统一坚持**精准导入（Deep / Precise Import）**，直接引入具体实现文件（如 `@/src/config/env/env.uts`、`@/src/router/utils/utils.uts`），严禁底层互相穿透引用 `index.uts` 总入口，总入口严禁反向 `export *` 自环（详见 **1.22**） |
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
| **H5 双向滚动拖不动 / 放大后被压回屏宽** | `<scroll-view direction="all"><view class="flex flex-row"><image style="width:812px" /></view></scroll-view>`（H5 的 `uni-view` 自带 `overflow:hidden`，溢出被中间层裁掉；且 H5 flex 项默认 `flex-shrink:1` 把图压回屏宽，App 端默认是 0 所以不复现） | 溢出元素**直挂** `scroll-view` 并显式 `flex-shrink:0`：`<scroll-view direction="all"><image :style="'width:812px;flex-shrink:0'" /></scroll-view>`；居中用左右 `margin`，别用 `justify-content:center`（详见 **2.22**） |
| **一手排出来的「绝对定位图元画布」放大后拖不动** | 内容是一层 `<view>` 里的一堆 `position:absolute` 图元（mermaid / katex 视图、图元拼接画布），必须包一层载体 view ⇒ 又套回「中间层 `overflow:hidden` 裁掉溢出、滚动层量不到真实内容宽」，`scroll-view` 方案彻底不成立 | **不滚动，改手指平移**：承载区 flex 居中 + 画布自己吃 `touchstart/move/end`，`canvasStyle = rootStyle + 'left:${panX}px;top:${panY}px;'`（`position:relative` 的四向偏移官方全端支持），并做 `clamp(±画布尺寸)` 限幅与切档复位（详见 **2.22** 补充） |
| **加了 `flatten` 后点击 / 触摸没反应、遮罩层压不住、阴影没了** | 在挂了 `@click` / `@touch*` 的元素，或依赖 `z-index` / `visibility` / `background-image` / `display:fixed` 的元素上拍平（拍平 = 不创建独立原生 View、作为绘制指令画到父上；**事件与这批 CSS 全部静默失效**，编译不报错运行不警告；`image` 还会只剩 gif 第一帧） | 只给**纯装饰、无事件、不依赖 z-index/visibility** 的元素拍平（katex / mermaid 图元层、静态图标分隔线）；交互元素与遮罩层一律不拍。仅蒸汽模式生效（本项目 `manifest.json` 已 `vapor:true`）；初始化属性不能动态绑定；**鸿蒙要至少两个相邻元素同时拍平才有收益，否则掉性能**（详见 **3.24**） |
| **H5 报 `Cannot access 'x' before initialization`** | 同一函数里两个不同块各自 `const id = ...`（UTS 变量按**函数级**去重，把两者合成一个变量，声明点落在后面那个，前面那段就成了 TDZ） | 不同块的同名局部量按语义改名（`bare` / `sized` / `grouped`…）；顺序 `for` 里重名的 `i` 安全（详见 **1.19**） |
| **App 端 `min-width` / `min-height` / `max-width:100%` 静默失效** | 写百分比 `min-height:100%` / `min-width:100%` / `max-width:100%`（原生端 `min-*` / `max-*` 只认 `number` 与 `px`，构建期只有一条 warn，运行期直接忽略；`width` / `height` 的百分比**是**支持的） | 「至少撑满」写 `flex:1`、「至多铺满」写 `width:100%`，带 padding / border 时补 `box-sizing:border-box`（详见 **2.23**） |
| **流式渲染时 App 闪退 `UTS instance N is not registered`** | 计时器每来一个 chunk 就把整串内容喂给富文本渲染器（`streamText.value = full`）—— 末尾那个还没收完的块（`<video>` / mermaid / `$$…$$`）会先按**顶层节点**渲染，等闭合标签到齐又变成块的**子节点**，原生组件在两条分支间搬家、被销毁重建，新实例拿到已释放的原生实例 id | 接收与渲染分离：**只在块边界推进渲染快照**（`text.lastIndexOf('\n\n')` 取最后一个完整块的结尾），半截块永不进渲染；`complete` 回调里再补渲染一次尾巴（详见 **3.23**） |
| **联合类型上的三元表达式（`Expression expected`）** | `return target >= 0 ? target : -1;`（`target: number \| string`，UTS 在 `typeof` 窄化前先解析三元，判据对另一分支非法即报错，错误箭头指向 `>=`） | 拆成 `if` 语句提前 `return`：`if (target >= 0) { return target; } return -1;`（仅在**联合类型**上必需，单类型变量上的三元合法，切勿全仓机械替换，详见 **1.20**） |
| **链式 `.catch()`（`error25 None of the following candidates is applicable`）** | `.then(done).catch((err: any) => {...})`（UTSPromise 的三个 `.catch` 重载在 Kotlin 端均无法收敛；**与回调返回类型、是否 `throw` 无关**，单一返回类型的回调照样报错） | 改为双参 `.then(onFulfilled, onRejected)`，拒绝回调并进第二参；要表达「抛出」时用 `Promise.reject(toError(err)) as Promise<T>` 而非 `throw`（`Promise.resolve(...)` 包裹也一并去掉，详见 **1.21**） |
| **系统尺寸与高度获取** | 散落调用 `uni.getSystemInfoSync()` 或样式手写 `100vh`（损耗性能、非响应式、原生端不支持 vh 且易被 TabBar/导航栏遮挡） | 优先引入 `@/src/utils/systemInfo/index.uts` 中的响应式变量（`availableHeight`、`statusBarHeight`、`navBarHeight`、`safeAreaBottom`）或使用 `sys` 单例（详见 **分册 8**） |
| **环境变量与服务地址读取** | 手写 `process.env` / `import.meta.env` 或在代码里硬编码域名 IP（原生平台无法识别且切换环境易出错） | 统一从 `@/src/utils/env/index.uts` 引入具名方法（`getApiBaseUrl()`、`getOssBaseUrl()`、`isDev()`、`isProd()`、`isVaporMode()`）（详见 **分册 8**） |
| **轻提示与加载动画 (Toast / Loading)** | 散落手写 `uni.showToast({ title: '...', icon: 'none' })` | 统一引入 `@/src/utils/toast/index.uts` 中的 5 个轻量纯函数：`toast(msg)`、`toastSuccess(msg)`、`toastError(msg)`、`showLoading()`、`hideLoading()`（详见 **分册 8**） |
| **页面跳转与路由控制** | 直接调用原生 `uni.navigateTo` 等且未做参数编码与越界防护 | 优先引入 `@/src/router/index.uts` 的路由封装方法（如 `toLoginPage()`、`cleanPath()`、`getCurrentPath()`、`parseUrlToObj()` 或 `route` 单例，详见 **分册 8**） |

---

## A.2 代码生成红线清单 (Redlines Checklist)

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
- [ ] **28. 计时器高频驱动的流式渲染，严禁把「块结构未完成」的整串内容喂给富文本渲染器**（末尾半截块会让原生组件在渲染分支间搬家、被销毁重建，App 抛 `IllegalStateException: UTS instance N is not registered`；必须把接收与渲染分离，只按块边界推进渲染快照，见 3.23）
- [ ] **29. 严禁给挂了事件或依赖 `z-index` / `visibility` / `display:fixed` / `background-image` 的元素加 `flatten`**（拍平后**事件与这批 CSS 全部静默失效** —— 编译不报错、运行不警告，只是点了没反应、遮罩压不住；`image` 拍平后 gif 只显第一帧。只给纯装饰图元加；仅蒸汽模式生效，是初始化属性不能动态绑定，鸿蒙需至少两个相邻元素同时拍平才有收益，见 3.24）
- [ ] **30. 严禁在页面各处直接调用 `uni.getSystemInfoSync()` 与使用 CSS `100vh`**（系统信息与视口高度必须优先从 `@/src/utils/systemInfo/index.uts` 引入 `statusBarHeight`、`availableHeight` 等响应式变量，见分册 8）
- [ ] **31. 严禁手写 `process.env` / `import.meta.env` 或硬编码请求域名**（必须统一从 `@/src/utils/env/index.uts` 引入 `getApiBaseUrl()`、`isDev()` 等方法，见分册 8）
- [ ] **32. 严禁在业务页面中散落调用原生 `uni.showToast({ title, icon: 'none' })`**（必须统一使用 `@/src/utils/toast/index.uts` 导出的 `toast(msg)` 或 `showToast(...)`，见分册 8）
- [ ] **33. 业务功能开发前优先复用 `@/src/utils/` 下既有封装**（严禁在局部重新手写已有的通用方法，引用路径一律使用 `@/src/utils/<module>/index.uts` 绝对路径，见分册 8）
- [ ] **34. 联合类型变量（`number | string`、`T | null` 等）上严禁直接写三元表达式**（UTS 在 `typeof` 窄化前先解析三元，判据对另一分支类型非法即报 `Expression expected` 且箭头指向判据操作数；必须拆成 `if` 语句提前 `return`。**只针对联合类型，单类型变量上的三元合法，严禁全仓机械替换**，见 1.20）
- [ ] **35. 严禁写链式 `.catch()`**（UTSPromise 的三个 `.catch` 重载在 Kotlin 端均无法收敛，报 `error25 None of the following candidates is applicable`，**与回调返回类型 / 是否 `throw` 无关**；一律改为双参 `.then(onFulfilled, onRejected)`，拒绝回调并进第二参，并且该回调内要用 `Promise.reject(err) as Promise<T>` 而非 `throw` 来表达失败，见 1.21）
- [ ] **36. 全局开发统一坚持「精准导入（Deep / Precise Import）」原则**（严禁底层模块从聚合门面 `index.uts` 互相穿透引用，所有模块导入一律精准指向具体的实现文件如 `@/src/config/env/env.uts`、`@/src/router/utils/utils.uts`、`@/src/i18n/utils/index.uts`；总入口严禁反向 `export *` 形成自环；彻底根绝 Android 原生端类静态初始化 `<clinit>` 循环死锁与 `NullPointerException`，见 1.22）
