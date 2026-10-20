---
name: unibestX-skill
description: Use when developing, compiling, refactoring, or troubleshooting uni-app X (.uvue / .uts / .ts) projects, handling UTS strict type constraints (UTS110111163, UTS110111119, UTS110111120, ClassCastException, error17 Any? slot props), Tailwind CSS styling and layout engine limitations, page skeleton conventions, or platform-specific cross-end issues across App (Android Kotlin, iOS Swift), HarmonyOS (ArkTS), Web, and Mini-Programs.
---

# unibestX-skill (uni-app X & UTS 规范、真实案例与代码生成指南)

## 任务目标

- 让 AI / Agent 在 unibestX（uni-app X）项目里**写出能一次编译通过**的 `.uvue` / `.uts` / `.ts` / `.scss` 代码，不踩 UTS 名义强类型与原生渲染的坑。
- 新增页面时**结构可照抄、接口层同批交付**：骨架来自分册 4 / 5，`src/api/<page>/` 在同一次改动里建齐（分册 6）。
- 跨端行为可控：App（Kotlin）/ 鸿蒙（ArkTS）/ Web / 小程序的差异，先按分册 3 判定，再做条件编译或门面分流。
- 排错以**根因 + 可复现证据**收尾，不靠猜测和「改改试试」。
- 交付前必须过 A.2 红线清单与真实验证命令，**没有验证输出就不算完成**。

> ⚠️ 本文件与 `references/` 下 8 个分册、下方 A.1 / A.2 同为强制约束；动手前先读「注意事项」与「A.2 代码生成红线清单」。

---

## 概述

uni-app X 采用 UTS (uni type script) 语言与原生渲染引擎，跨端直接编译为原生代码（Android 编译为 Kotlin，iOS 插件编译为 Swift，鸿蒙插件编译为 ArkTS，Web / 小程序编译为 JS）。  
与宽容的 TypeScript / JavaScript 不同，UTS 采用**名义强类型系统（Nominal Strong Typing）**与**原生渲染规范** —— 很多在 TS 里「只是警告」的写法，在 UTS 里是编译失败或真机崩溃。

本 Skill 采用 **「1 个入口 + 8 个分册」** 结构：入口常驻任务目标、交互流程与 A.1 / A.2 速查；成体系的铁律、正反例与实测结论都在 `references/` 分册里，**命中即必须 Read**。

---

## 输出与表达规范

### 核心表达

- **中文、结论先行**：先给「做了什么 / 为什么这么做 / 结果如何」，再展开细节。
- **技术严谨**：API 名、类型名、文件路径与报错码照实写，不臆造不存在的 API、参数或文件。
- **证据支撑**：声称「已修复 / 已通过 / 已完成」前，必须已实际运行验证命令并看到输出；没有证据就如实说「未验证」。

### 回答与代码要求

- 代码给**完整可落地的片段**（含 import 路径与类型标注），不要省略到别人无法直接粘贴。
- 引用文件一律用可点击的 markdown 相对路径（如 `src/pages/index/index.uvue`），并尽量带到行号。
- 报错排查先给**根因**，再给修复；根因不确定时先说明「待验证的假设」，不要直接堆改法。
- 涉及跨端差异时，显式写出「哪一端、为什么、按分册哪一条」。
- 生成代码前先在分册里找现成模板 / 正例，**能照抄就不自创结构**。

### 复杂度适配

- 按任务复杂度分三级（判定规则见「标准交互流程 · 1」）：微任务直接改，不写设计文档；常规页面 / Bug 由主代理直接完成；复杂跨模块任务先澄清需求再动手。
- 回复长度随任务复杂度伸缩：改一行颜色不需要长篇说明，架构调整才需要完整方案与影响面。

---

## 操作步骤

1. **任务识别与复杂度分级** —— 判断任务类型、复杂度等级，以及是否命中本 Skill 的触发条件。
2. **规范加载** —— 按「资源索引 · 规范分册」Read 命中的分册，核对完整正反例；多个分册命中就全部读。
3. **实现** —— 模板优先、Utils-First、新增页面同步建接口层，按 UTS 语法铁律写代码。
4. **红线自检** —— 逐条过 A.2 清单与所读分册末尾的自检项。
5. **验证与交付** —— 真实运行验证命令，附证据交付；未经确认不提交。
6. **规范分歧处理** —— 发现 Skill 与代码不符，只在回复中提建议，等开发者裁决。

---

## 标准交互流程

### 1. 任务识别与复杂度分级

**触发条件**（命中任一即触发本 Skill）：

- 编写、重构或新增 `.uvue`、`.uts`、`.ts`、`.scss` 文件时
- 规划或生成新页面结构、骨架布局与视口高度（`availableHeight`）时
- **新增页面并同步建 `src/api/<page>/` 接口层（接口函数 + 类型 + 数据集，按需拆 `types.uts`）时**、把页面里的假数据抽成接口函数时
- 对接后端真实接口、写 `http` 请求 / 文件上传 / SSE 流式接口时
- **获取系统信息、视口高度、状态栏 / 导航栏高度，或读取环境变量、API 域名、调用 Toast 时**
- **在页面 / 组件里做跳转（push / replace / switchTab / back）或读当前路由信息（path / query / meta / name）时**（分册 8）
- 使用 Tailwind CSS 编写跨端 UI、按钮排版、文本颜色与安全区适配时
- 遇到 UTS 强类型编译错误（`UTS110111163`、`UTS110111119`、`UTS110111120`、`UTS100006`、`error17`）
- 遇到 Android / iOS 原生运行时报错（`ClassCastException: Map cannot be cast to UTSJSONObject`）
- 进行跨端渲染模式（VDOM / Android VDOM / Vapor）兼容或 Easycom 组件库开发时

**处理逻辑**：

1. 先给任务定级（与项目 `CLAUDE.md` 保持一致）：
   - **第 1 级 微型任务**（单行修改、CSS 样式、文案、简单配置）：主代理直接改 + 轻量验证，禁止派子代理、写单测、建 worktree、起草设计文档。
   - **第 2 级 小型功能 / 局部调整**（单文件开发、独立页面、常规 Bug 修复）：主代理直接完成；Bug 成因不明确时**先定位根因再改**。
   - **第 3 级 复杂系统 / 跨模块重构**（需求模糊且影响广泛）：先澄清需求；跨模块强依赖时先写计划文档再实现。
2. 判定任务涉及的端（App / 鸿蒙 / Web / 小程序）与涉及的模块（页面、接口层、路由、工具库）。
3. 未命中任何触发条件、且与 uni-app X 规范无关的任务，不加载本 Skill，按普通任务处理。

### 2. 规范加载

**触发条件**：规范分册导航表 / A.1 对照表 / A.2 红线清单中任一条与当前任务相关。

**处理逻辑**：

- 用 Read 工具打开对应分册并**核对完整正反例与实测结论**，不得只凭入口里的一行结论就改代码。
- 同时命中多个分册时全部 Read（典型：新增页面 = 分册 4 + 6 + 7 + 8 + 9）。
- 分册没有覆盖的新问题：以项目现有代码与实测为准，**不要套用 TS / Vue 的通用经验臆断**。

### 3. 实现

**触发条件**：规范已加载，开始写或改代码。

**处理逻辑（强制）**：

- **模板与案例优先**：页面结构照分册 4 的标杆案例、分册 4 的标准模板，不自创骨架。
- **UTS 语法铁律**：`type` 不用 `interface`、空值用 `null` 不用 `undefined`、基础类型比较用 `==` / `!=`、条件必须显式布尔（见 A.2 第 1–4 条）。
- **新增页面必产接口层**：同一次改动建出 `src/api/<page>/<page>.uts`，类型被多段共用时才拆 `types.uts`，接口文件不设行数上限；页面目录下严禁数据集文件，页面与组件里严禁 `ref([...])` 硬编码假数据（分册 6）。
- **Utils-First**：系统信息、环境变量、Toast、路由、通用算法先查 `@/src/utils/` 与 `uni_modules/` 六个生态库，不手写（分册 7）。
- **跨端显式分流**：常规逻辑用 `@/src/config/env/platform.uts` 常量；端专属原生全局符号用条件编译宏物理隔离（分册 3.27）。
- **不得擅自修改本 Skill**（见「注意事项 · 交互规范」）。

### 4. 红线自检

**触发条件**：代码改完、准备交付。

**处理逻辑**：逐条核对 A.2 的 50 条红线，以及所读分册末尾的自检清单；命中即改，改完重新自检。重点复核：`interface` / `undefined` / `===`、动态 `:style` 强转、`gap` 与 `space-*`、链式 `.catch()`、页面跳转是否走 `useRouter()`、新增页面是否已建接口层。

### 5. 验证与交付

**触发条件**：红线自检通过。

**处理逻辑**：

- 实际运行验证命令并确认输出（按任务选择：HBuilderX / CLI 编译、Volar 诊断、单测、真机运行），**没有验证输出不得声称完成**（分册 3.15 的三条「假绿」路径要避开）。
- 交付时给出：改了什么、为什么、验证命令与关键输出；未验证的部分明确说明。
- 未经用户明确要求，**不执行 `git commit` / `git push`**。

### 6. 规范分歧处理

**触发条件**：发现 Skill 内容与当前代码不符，或认为某条规则应当调整。

**处理逻辑**：在回复中说明「哪里不符、证据是什么、建议怎么改」，**等开发者裁决**；未获显式授权不得改动 `SKILL.md` 与 `references/` 下的任何文件。

---

## 可选分支

- **新增页面 / 组件**：分册 4（流程与模板）→ 6（层级与拆分）→ 7（接口层）→ 8（工具库）→ 9（路由）→ 4（骨架照抄）。
- **编译 / 运行报错**：按报错码或现象定位分册 1（UTS 语法）或分册 3（跨端运行时）；先找根因，再改代码。
- **样式 / 布局问题**：分册 2；先确认是哪个端、哪条引擎限制，再改。
- **接口对接 / Mock 数据**：分册 6；后端就绪只换函数体，签名冻结。
- **跳转与路由参数**：分册 8；`useRouter()` / `useRoute()`，禁止原生 `uni.navigateTo` 与 `onLoad(options)`。
- **跨端差异 / 条件编译**：分册 3；两级分层治理（常量分流 vs `#ifdef` 物理隔离）。
- **通用算法能力**（加密、哈希、日期、颜色、大数、hooks）：先查 `uni_modules/` 六个生态库（分册 6.5），不要手写。
- **只读咨询 / 代码解读**：可不改代码，按需 Read 分册后作答；仍受「不臆造、给证据」约束。
- **修改本 Skill**：仅在开发者显式、明确要求时执行，按本文件的章节骨架增改。

---

## 资源索引

> ⚠️ **本 Skill 为分册式组织：下表的分册文件不会自动加载**，需要时用 Read 工具打开。
> **硬性要求**：对照表（A.1）或红线清单（A.2）命中某条时，**必须打开其标注的分册核对完整正反例与实测结论**，不得只凭本文件的一行结论就改代码 —— 每条铁律的「为什么会炸」「反例长什么样」都在分册里。

### 规范分册（分册导航 —— 命中即必须 Read）

| 分册文件 | 收录内容 | 何时 Read |
| :--- | :--- | :--- |
| [references/1-uts-syntax.md](references/1-uts-syntax.md) | **1 UTS 强类型与语法手册**（29 条铁律 + 类型声明/导入 + 类型能力 + 完整可编译示例 + 7 类场景写法 + 17 条坑点 + 报错索引 + 速查表 + 15 条红线） | 定义对象结构与类型标注、写 `export` / `class` / 闭包 / 定时器回调 / 集合遍历 / 联合类型上的三元表达式 / Promise 的 `.then` 与 `.catch` / **`UTSJSONObject` 下标取值** / **Pinia 基类方法重写**；遇 `UTS110111163`、`UTS110111119`、`UTS110111120`、`error1`、`error17`、`error18`、`error25`、`NoSuchMethodError`、`Expression expected`、VSCode 里的 `TS2322 不能将类型"Timeout"分配给类型"number"`、运行期 `ReferenceError: XxxPageResult is not defined` |
| [references/2-styling.md](references/2-styling.md) | **2 样式与原生渲染手册**（26 条铁律 + 完整页面示例 + 7 类场景写法 + 17 条坑点 + 样式能力矩阵 + 20 条红线） | 写 `.scss` / Tailwind 工具类；处理按钮与文本排版、**安全区工具类 `p-safe` / `pt-safe` / `pb-safe`**、**行高 `leading-[...]`**、**SCSS 变量运行时动态化、`uni.scss` 覆盖**、高度单位、阴影边框、字号字重、行内嵌套样式、样式不生效或表现不一致 |
| [references/3-runtime.md](references/3-runtime.md) | **3 跨端运行时手册**（29 条铁律 + 跨端能力封装示例 + 7 类场景写法 + 16 条坑点 + 渲染模式/条件编译宏/假绿判定速查 + 14 条红线） | VDOM / Android VDOM / Vapor 差异、多平台门面分流与条件编译、**全局跨端平台判断规范（统一使用 `@/src/config` 常量，除 TabViews.uvue 外严禁在 src/ 散落手写 `#ifdef`）**、**禁止浏览器特有 API `window` / `document` / `localStorage` 与非全端 API 裸调用（含 `getLocale` 安全取语言）**、**Vite 自定义页面插件开发约束**、UTS 插件与自定义基座、**第三方组件（选项式 `.vue`）是否可用**、Markdown 渲染、真机与 Kotlin 报错、编译验证命令选择 |
| [references/4-page-component.md](references/4-page-component.md) | **4 页面与组件手册**（三种页面骨架 · `definePage` 全字段 · **标准业务页：`useRoute` / `useRouter` + `useQuery` / `useMutation` / `useQueryClient`** · easycom · **4.5 组件写法：根节点 / props / emits / expose / 取数边界** · 流程与交付 · 坑点 · 速查 · 红线） | **新建 / 改造页面或组件必读**：骨架怎么搭、`definePage` 写哪些字段、带接口的页面怎么写、**组件文件怎么写**、如何交付 —— **优先照抄，不要自创结构** |
| [references/5-page-structure.md](references/5-page-structure.md) | **5 页面结构编排标准**（分层结构 · 八大铁律 · 目录拓扑 · 组件放哪 · 形态豁免 · 结构速查 · 12 条红线） | **规划页面结构**时必读：目录怎么摆、`views/` 要不要、拆几层、谁能调接口、数据归谁、mock 落哪。**不含任何代码写法** —— 页面 / 组件怎么写看分册 4，接口函数看分册 6 |
| [references/6-api-spec.md](references/6-api-spec.md) | **6 API 接口层手册**（一页一目录 · 契约类型 · 按模块造数 · `http` 用法 · 完整 mock→http 双实现 + 8 类场景写法 + 16 条坑点 + 速查表 + 25 条红线） | **新增页面同步建 `src/api/<page>/` 时**、抽接口函数时、写 mock 数据集与契约类型时、对接后端真实接口时必读 |
| [references/7-utils-spec.md](references/7-utils-spec.md) | **7 工具库使用手册**（系统信息 · 环境变量 · 通用工具 · 6 个生态库 + 能力对照示例 + 7 类场景写法 + 15 条坑点 + 「该用谁」速查表 + 23 条红线） | 获取屏幕/窗口尺寸、状态栏/导航栏/TabBar高度、计算内容可用高度（`availableHeight`）；判断开发/生产环境、获取接口基础地址；使用 Toast、Loading、主题与返回键时必读；**要写大数运算 / 加解密与哈希 / 日期时间 / 颜色处理 / 数组对象工具 / 组合式 hooks 前必读（先查 `uni_modules/` 生态库，不要手写）** |
| [references/8-router-spec.md](references/8-router-spec.md) | **8 路由导航与 `useRoute` 手册**（导入口径 · `RouteLocation` 全字段与类型 · 完整 demo · 10 类场景写法 · 14 条坑点 · `useRouter` 速查 · 10 条自检红线） | **页面 / 组件里要做任何跳转（push / replace / switchTab / back）、要读当前路由信息（path / query / meta / name）、准备写 `onLoad(options)` 取参数或手写 `getCurrentPages()` 时必读** |

> 📌 **A.1 快速排查对照表**与 **A.2 代码生成红线清单** 因使用频率最高，常驻在本文件末尾，无需额外 Read。

### 项目权威规则与关键代码位置

| 资源 | 位置 | 用途 |
| :--- | :--- | :--- |
| 项目开发规约 | [CLAUDE.md](../../../CLAUDE.md) | 任务复杂度分级门槛、新增页面必建接口层、禁止 `interface` |
| 项目规则（分层加载） | [.agents/rules/](../../rules/)：`base-lines.md`（Always On）· `api-standard.md` / `page-standard.md` / `router-standard.md`（Glob）· `naming-standard.md` / `commit-rule.md`（Model Decision） | 规则只写「对错判定」；本 Skill 是其**按需展开版**（用法 / 类型 / 模板 / 正反例） |
| 页面目录 | `src/pages/<page>/`、`src/sub/<page>/` | 页面与模块私有视图 |
| 接口层 | `src/api/<page>/<page>.uts`（类型 / 数据集默认内联，按需拆 `types.uts`） | 一页一目录，后端就绪只换函数体（分册 6） |
| 系统信息 | `src/utils/systemInfo/index.uts` | `availableHeight`、`statusBarHeight`、`navBarHeight`、`safeAreaBottom`（分册 7） |
| 环境变量 | `src/config/env/env.uts`、`src/config/env/platform.uts` | `getApiBaseUrl()`、`isDev()`、`isH5` / `isApp` 等平台常量（分册 7） |
| 路由 | `uni_modules/route-bestX/index.uts`（`useRoute` / `useRouter` / 路径工具 / `routeState`）、`src/router/index.uts`（业务门面与 `router` 单例）、`src/router/guards/`（业务守卫） | `useRoute()` / `useRouter()`（分册 8） |
| 生态工具库 | `uni_modules/`（`lime-shared`、`lime-use`、`lime-color`、`lime-dayuts`、`bignumber-bestX`、`crypto-bestX`） | 通用算法能力优先复用（分册 6.5） |
| 生态库演示页 | `src/sub/*FunctionDemo/` | 对照真实用法，复制前先看这里的既有先例 |

---

## 注意事项

### 交互规范

- **推荐由主代理直接推进**：除非开发者明确要求拆分，不派生子代理、不建 worktree。
- **未经确认不提交**：`git commit` / `git push` 必须等开发者显式指令；Skill 流程里出现的「提交设计文档」也不构成授权。
- **严禁擅自修改本 Skill**：本 Skill 是项目规范知识库，禁止新增、删除、改写字数、调整结构或「顺手优化」。仅当开发者显式、明确要求时才可动本文件与 `references/` 全部分册；发现与实际代码不符时，只在回复里提建议并等待裁决。
- **不许虚假进度**：不许用「应该可以」「理论上没问题」代替验证；未跑通就如实说明卡在哪一步。

### 规范约束

- 严禁使用 `interface`，所有对象结构统一用 `type`（规避 `UTS110111163`）。
- 严禁使用 `undefined`，空值统一 `null`；条件判断必须显式与 `null` / 空串比较。
- 新增页面必须同批建出 `src/api/<page>/`，页面与组件里不得出现硬编码假数据。
- 跨端差异先判定端与触发条件，再做条件编译或门面分流；不得按 TS / Vue 的通用经验臆断。
- 涉及端专属原生全局符号（`window`、`wx`、`my`、`uni.onKeyboardHeightChange` 等）必须 `#ifdef` 物理隔离，普通 `if` 拦不住原生编译期的符号解析。

### 质量

- 代码以**能编译、能真机跑**为准，不以「看起来对」为准。
- 交付必须附验证命令与关键输出；没有输出就没有「完成」。
- 页面结构照抄标杆案例与模板，不为了「更好看」自创骨架。

### 上下文边界（rules vs skill）

- `.agents/rules/` 与 `CLAUDE.md` 是**规则层**（`base-lines.md` 常驻；`api-standard` / `page-standard` / `router-standard` 按 Glob 命中加载；`naming-standard` / `commit-rule` 由模型按需判断）；本 Skill 是**按需懒加载**的领域知识库，只在命中触发条件或显式 `/unibestX-skill` 时进入上下文。
- 因此：**必须无条件生效的硬约束**（复杂度分级、禁 `interface`、必建接口层）留在 rules / CLAUDE.md；**成体系的铁律、正反例与实测结论**放在本 Skill 分册，不要反向把大块知识搬运到常驻规则里。

---

## 使用示例

### 示例 1：用户提出「新增一个订单列表页」

- **用户**：帮我加一个订单列表页。
- **助手**：判定为第 2 级任务 → Read 分册 4 / 5 / 6 / 8 → 照分册 4 模板建页面骨架（上固定 + 下滚动、`availableHeight`）→ 同批建 `src/api/order/order.uts`（类型与数据集内联） → 跳转走 `useRouter()` → 过 A.2 红线 → 跑编译验证后交付。

### 示例 2：用户贴出编译报错

- **用户**：`error: UTS110111163`，我这个类型定义怎么改？
- **助手**：定位为「用了 `interface`」→ 改 `type` → 顺带检查同文件是否还有 `undefined`、`===` 等同类问题（A.2 第 1–4 条）→ 给出修改后的完整片段。

### 示例 3：用户反馈「按钮点了没反应」

- **用户**：这个卡片上的按钮在 App 上点不动，H5 正常。
- **助手**：先按分册 3.24 检查是否给挂了事件 / 依赖 `z-index` 的元素加了 `flatten` → 确认根因后再改 → 不直接从「事件没绑上」猜。

### 示例 4：用户要把 Mock 换成真接口

- **用户**：订单列表接口后端给好了，帮我切一下。
- **助手**：Read 分册 6 → **只换 `src/api/order/order.uts` 的函数体，签名与 `types.uts` 冻结** → 页面代码零改动 → 跑验证。

### 示例 5：用户质疑某条规则

- **用户**：分册 2 这条关于 `gap` 的写法我觉得可以简化。
- **助手**：说明实测结论与影响的端 → 给出建议 → **等开发者裁决**，不先改 Skill。

### 示例 6：与本 Skill 无关的任务

- **用户**：帮我改一下 README 的错别字。
- **助手**：未命中触发条件 → 不加载分册，直接改并轻量验证。

---

## A.1 快速排查与对照表 (Quick Reference Matrix)

| 场景 / 报错现象 | 错误写法 | 正确规范写法 |
| :--- | :--- | :--- |
| **对象类型定义 (`UTS110111163`)** | `interface User { id: string }` | `type User = { id: string }`（一律使用 `type`，禁止 `interface`） |
| **空值定义 (`UTS110111119`)** | `let name: string \| undefined` | `let name: string \| null = null`（不支持 `undefined`，统一用 `null`） |
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
| **键盘高度全局监听与解绑平台限制** | App 端调用 `uni.onKeyboardHeightChange`（报错未定义 API / 拼写错误），或向 `uni.offKeyboardHeightChange` 传回调函数（类型不匹配），或事件参数标为 `UniInputKeyboardHeightChangeEventDetail`（抛 ClassCastException 崩溃） | App 端必须通过 `<input>`/`<textarea>` 监听 `@keyboardheightchange` 且参数标为 `UniInputKeyboardHeightChangeEvent`；全局 API 仅限微信小程序（`// #ifdef MP-WEIXIN`），且解绑时必须向 `off` 传入注册返回的 ID（`number`）（详见 **3.3**） |
| **组件实例方法动态调用 (`$callMethod`)** | 把实例强转 `(el as any).$callMethod('clear')`（Kotlin 报 `error18 找不到名称“$callMethod”`） | 保持 `ComponentPublicInstance` 强类型：`const sigRef = ref<ComponentPublicInstance>(null)` 并直接调用 `sigRef.value?.$callMethod('clear')`，严禁 `as any`（详见 **1.23**） |
| **`<web-view>` 的 `@message` 事件入参** | 回调参数标为 `(e: any)`（Kotlin 读取 `e.detail` 报 `error18 找不到名称“detail”`） | 必须显式声明为官方强类型 `(e: UniWebViewMessageEvent)`（详见 **1.24**） |
| **对象字面量包含函数导出** | `export const env = { getApiBaseUrl }`（Kotlin 编译报 `Function invocation expected`） | 统一使用标准具名函数导出 `export function getApiBaseUrl()` |
| **原生回调参数访问** | `(res as UTSJSONObject).tempFiles`（Kotlin 运行时崩溃 `ClassCastException`） | 直接利用原生类型推断访问 `res.tempFiles`，严禁将回调结果强转 `UTSJSONObject` |
| **多层 `export *` 重导出（`error18 找不到名称` / 运行期 `NoSuchMethodError`）** | 子模块与门面对同一符号多次 `export *` 转发（Kotlin 端符号被改名为 `useXxxStore__1`） | 同一顶层符号只在一层门面中 `export *`；子模块严禁再整包重导出 |
| **模块导入与循环引用（Kotlin 类加载死锁 / NPE）** | 底层模块互相引用 `index.uts` 聚合门面，或总入口反向 `export *` 导致循环引用闭环（运行期报 `Parameter specified as non-null is null` / `ExceptionInInitializerError` / `NoClassDefFoundError`） | 全局开发统一坚持**精准导入（Deep / Precise Import）**，直接引入具体实现文件（如 `@/src/config/env/env.uts`、`@/src/utils/systemInfo/index.uts`）；第三方模块则从**其公开入口**导入（如 `@/uni_modules/route-bestX/index.uts`），严禁穿透其内部实现文件，严禁底层互相穿透引用 `index.uts` 总入口，总入口严禁反向 `export *` 自环（详见 **1.22**） |
| **局部函数/变量与框架全局同名（撞车导致找不到或参数不匹配）** | 页面里写 `function stop()`（撞 `@vue/reactivity` 全局 `stop(runner)`） | 局部方法一律加业务前缀（如 `stopStream`）；且局部函数必须定义在调用点之前（Kotlin 声明不提升） |
| **回调引用承载自身的变量（`error18 找不到名称`）** | `const timerId = setInterval(() => { clearInterval(timerId) })` | `let timerId: number = 0;` 先声明，再 `timerId = setInterval(...)` 赋值 |
| **定时器句柄报 `TS2322 不能将类型“Timeout”分配给类型“number”`（⚠️ 这是 VSCode / Volar 诊断，不是 UTS 编译错误）** | `pollingTimer = setInterval(() => { ... }, ms)`（显式 `number` 标注 + 直接赋值；@types/node 经 `vite.config.ts` 把返回值判为 `Timeout`） | 调用点就地双层强转：`pollingTimer = (setInterval(() => { ... }, ms) as any) as number;`（单层 `as number` 报 TS2352；在 `.d.ts` 补全局声明无效；UTS 编译与 `pnpm typecheck` 都不报，只能看 `ts-plugin` 诊断，详见 **1.26**） |
| **真机 `IndexOutOfBoundsException`** | 数组下标越界检查未前置（JS 返回 `undefined`，Kotlin 直接抛异常） | 边界判断必须与下标读取写进**同一个**短路表达式且判断在前：`i < arr.length && arr[i]` |
| **真机 `NullPointerException`** | 对可能为 null 的字段直接做 `as` 非空断言（`val.pre as boolean`） | 判空后再断言：`val.pre == null ? null : (val.pre as boolean)` |
| **多平台条件编译分流** | 门面只用 `#ifdef VUE3-VAPOR` 分流（该宏仅在 App 蒸汽模式生效，H5/小程序落入 VDOM） | 分流条件显式并列平台：`#ifdef VUE3-VAPOR \|\| H5 \|\| WEB \|\| MP` |
| **注释中带斜杠的条件编译标记** | 在块注释里写 `// #ifdef` / `// #endif`（触发 `Unbalanced right delimiter` 语法错误） | 注释中提到标记只写标记本身，严禁带前缀斜杠 |
| **跨分支共享类型从 `.ts` 导出** | 从 `.ts` 文件经 `export *` 转发纯类型（小程序端 uts2js 报错） | 跨分支共享类型统一抽到纯 `.uts` 叶子文件中定义与导出 |
| **遍历值类型为 `any` 的 Map 报 `error17`** | `map.forEach((value: any, key: string): void => {})` | 去掉类型标注：`map.forEach((value, key) => {})`，或改用 `UTSJSONObject.keys(map)` |
| **Kotlin 报 `Expression 'keys' cannot be invoked as a function`** | `map.keys()`（UTS 声明是方法，Kotlin 侧是属性） | 改用 `UTSJSONObject.keys(obj)` |
| **局部函数当值传递报 `error18 找不到名称`** | `setTimeout(localFn, 1000)` 或在对象字面量回调里直接引用外层局部函数 | 包装为 lambda：`setTimeout(() => { localFn(); }, 1000)` |
| **对象类型属性里声明剩余参数** | `back: (...args: Array<number>) => void`（语法报错 `cannot have modifiers`） | 提取为独立顶层别名：`type BackFn = (...args: Array<number>) => void;` |
| **自带可空返回的内置 API 直接返回** | `return decodeURIComponent(value);`（可空 `String?` 赋给非空 `String` 签名报错） | 先判空兜底再返回：`const d = decodeURIComponent(val); return d != null ? d : val;` |
| **uni 跳转 API 返回值类型声明** | 标为 `Promise<any> \| null` 或只写 `any`（泛型不协变导致类型不匹配） | 统一标为 `any \| null` |
| **H5 双向滚动拖不动 / 放大后被压回屏宽** | `<scroll-view direction="all"><view class="flex flex-row"><image style="width:812px" /></view></scroll-view>`（H5 的 `uni-view` 自带 `overflow:hidden`，溢出被中间层裁掉；且 H5 flex 项默认 `flex-shrink:1` 把图压回屏宽，App 端默认是 0 所以不复现） | 溢出元素**直挂** `scroll-view` 并显式 `flex-shrink:0`：`<scroll-view direction="all"><image :style="'width:812px;flex-shrink:0'" /></scroll-view>`；居中用左右 `margin`，别用 `justify-content:center`（详见 **2.22**） |
| **一手排出来的「绝对定位图元画布」放大后拖不动** | 内容是一层 `<view>` 里的一堆 `position:absolute` 图元（mermaid / katex 视图、图元拼接画布），必须包一层载体 view ⇒ 又套回「中间层 `overflow:hidden` 裁掉溢出、滚动层量不到真实内容宽」，`scroll-view` 方案彻底不成立 | **不滚动，改手指平移**：承载区 flex 居中 + 画布自己吃 `touchstart/move/end`，`canvasStyle = rootStyle + 'left:${panX}px;top:${panY}px;'`（`position:relative` 的四向偏移官方全端支持），并做 `clamp(±画布尺寸)` 限幅与切档复位（详见 **2.22** 补充） |
| **加了 `flatten` 后点击 / 触摸没反应、遮罩层压不住、阴影没了** | 在挂了 `@click` / `@touch*` 的元素，或依赖 `z-index` / `visibility` / `background-image` / `display:fixed` 的元素上拍平（拍平 = 不创建独立原生 View、作为绘制指令画到父上；**事件与这批 CSS 全部静默失效**，编译不报错运行不警告；`image` 还会只剩 gif 第一帧） | 只给**纯装饰、无事件、不依赖 z-index/visibility** 的元素拍平（katex / mermaid 图元层、静态图标分隔线）；交互元素与遮罩层一律不拍。仅蒸汽模式生效（本项目 `manifest.json` 已 `vapor:true`）；初始化属性不能动态绑定；**鸿蒙要至少两个相邻元素同时拍平才有收益，否则掉性能**（详见 **3.24**） |
| **H5 报 `Cannot access 'x' before initialization`** | 同一函数里两个不同块各自 `const id = ...`（UTS 变量按**函数级**去重，把两者合成一个变量，声明点落在后面那个，前面那段就成了 TDZ） | 不同块的同名局部量按语义改名（`bare` / `sized` / `grouped`…）；顺序 `for` 里重名的 `i` 安全（详见 **1.19**） |
| **App 端 `min-width` / `min-height` / `max-width:100%` 静默失效** | 写百分比 `min-height:100%` / `min-width:100%` / `max-width:100%`（原生端 `min-*` / `max-*` 只认 `number` 与 `px`，构建期只有一条 warn，运行期直接忽略；`width` / `height` 的百分比**是**支持的） | 「至少撑满」写 `flex:1`、「至多铺满」写 `width:100%`，带 padding / border 时补 `box-sizing:border-box`（详见 **2.23**） |
| **流式渲染时 App 闪退 `UTS instance N is not registered`** | 计时器每来一个 chunk 就把整串内容喂给富文本渲染器（`streamText.value = full`）—— 末尾那个还没收完的块（`<video>` / mermaid / `$$…$$`）会先按**顶层节点**渲染，等闭合标签到齐又变成块的**子节点**，原生组件在两条分支间搬家、被销毁重建，新实例拿到已释放的原生实例 id | 接收与渲染分离：**只在块边界推进渲染快照**（`text.lastIndexOf('\n\n')` 取最后一个完整块的结尾），半截块永不进渲染；`complete` 回调里再补渲染一次尾巴（详见 **3.23**） |
| **联合类型上的三元表达式（`Expression expected`）** | `return target >= 0 ? target : -1;`（`target: number \| string`，UTS 在 `typeof` 窄化前先解析三元，判据对另一分支非法即报错，错误箭头指向 `>=`） | 拆成 `if` 语句提前 `return`：`if (target >= 0) { return target; } return -1;`（仅在**联合类型**上必需，单类型变量上的三元合法，切勿全仓机械替换，详见 **1.20**） |
| **链式 `.catch()`（`error25 None of the following candidates is applicable`）** | `.then(done).catch((err: any) => {...})`（UTSPromise 的三个 `.catch` 重载在 Kotlin 端均无法收敛；**与回调返回类型、是否 `throw` 无关**，单一返回类型的回调照样报错） | 改为双参 `.then(onFulfilled, onRejected)`，拒绝回调并进第二参；要表达「抛出」时用 `Promise.reject(toError(err)) as Promise<T>` 而非 `throw`（`Promise.resolve(...)` 包裹也一并去掉，详见 **1.21**） |
| **系统尺寸与高度获取** | 散落调用 `uni.getSystemInfoSync()` 或样式手写 `100vh`（损耗性能、非响应式、原生端不支持 vh 且易被 TabBar/导航栏遮挡） | 优先引入 `@/src/utils/systemInfo/index.uts` 中的响应式变量（`availableHeight`、`statusBarHeight`、`navBarHeight`、`safeAreaBottom`）或使用 `sys` 单例（详见 **分册 7**） |
| **环境变量与服务地址读取** | 手写 `process.env` / `import.meta.env` 或在代码里硬编码域名 IP（原生平台无法识别且切换环境易出错） | 统一从 `@/src/config/env/env.uts` 引入具名方法（`getApiBaseUrl()`、`getOssBaseUrl()`、`isDev()`、`isProd()`、`isVaporMode()`）（详见 **分册 7**） |
| **页面跳转与路由控制** | 直接调用原生 `uni.navigateTo` / `uni.switchTab` / `uni.navigateBack`；或用 `onLoad((options) => {...})` 取参数、手写 `getCurrentPages()` 读当前页 | 跳转一律 `useRouter().push / replace / relaunch / switchTab / back`；路由信息一律 `useRoute()`（`query` 已是解码态 `Map`，值为 `string`，需自行转类型）。所有路由符号从 `@/uni_modules/route-bestX/index.uts` 导入（**严禁 import 模块内部文件**）；`toLoginPage`、`LOGIN_PAGE`、黑白名单分别来自 `@/src/utils/auth/toLoginPage.uts`、`@/src/router/config.uts`（详见 **分册 8**） |
| **LeakCanary 报 Activity 内存泄漏（`mDestroyed = true`）** | 页面或根容器组件（如 `App.ku.uvue`）通过 `uni.$on` 注册全局监听但**未在 `onUnmounted` 中通过 `uni.$off` 注销**（或直接传入匿名函数无法解绑）；全局单例 `IndexKt.emitter` 永久持有页面回调，导致退出页面后原生 Activity 无法被 GC 回收 | 回调函数必须抽离为**具名函数**，`onMounted` 注册，`onUnmounted` 必须严格调用 `uni.$off(eventName, handler)` 注销（详见 **3.26**） |
| **`ReferenceError: XxxPageResult is not defined`**（**编译期零报错，运行期才炸**，且常被页面的 `try/catch` 吞成「列表渲染不出来 + 一条 `console.error`」） | 在 `as` 断言位置写「**泛型实例化别名**」：`} as FooPageResult);`（而 `type FooPageResult = PageResult<FooItem>`）—— UTS 把 `as` 断言**编译成构造调用** `new FooPageResult({...})`，但别名只是编译期 `type`、**没有任何运行期绑定**（编译器只为泛型本体生成 `class PageResult`）⇒ 产物里留下一个指向不存在标识符的 `new` | 断言**直写泛型本体、实参写全**：`} as PageResult<FooItem>);`；别名只允许出现在**类型位置**（返回值标注 / 回调参数标注）。口诀：**`as` / `new` 后面不许出现泛型实例化别名，`:` 后面可以**。判据必须落到产物上：`grep -rn "new [A-Za-z_]*PageResult(" unpackage/dist/dev/mp-weixin/src/api/*.js`（单测走 esbuild 转译、**不复现**这一层，全绿也照样有坑；详见 **1.25**） |
| **跨端平台判断（常规逻辑 vs 原生未声明符号）** | 在 `src/` 业务代码中散落手写 `// #ifdef ...`；或企图用 `if (isH5)` / `if (isMpAlipay)` 包裹端专属未声明原生符号（如 `window`、`my`、`wx`、`app.config`） | 遵循**两级分层治理**：① 常规跨端业务逻辑 / 参数差异一律引入 `@/src/config/env/platform.uts` 常量走普通 `if` 分支；② 端专属未在全平台声明的原生全局符号（`window`、`my`、`wx`、`uni.onKeyboardHeightChange`、`app.config` 等）或模板静态分流，**必须强制使用 `// #ifdef ...` 物理隔离**，规避原生 Kotlin 静态符号解析失败抛 `error18 找不到名称`（详见 **3.27**） |
| **浏览器特有 API** | `document.documentElement.style.setProperty(...)`、`localStorage.getItem(...)`、`history.pushState(...)`（App 端无这些全局对象） | 样式用 `:style` 响应式绑定；存储用 `uni.setStorageSync` / `uni.getStorageSync`；跳转走 `useRouter()`；确需 Web 专属逻辑时 `// #ifdef H5` 物理隔离（详见 **3.28**） |
| **非全端 API 裸调用** | `uni.getLocale()`、`uni.vibrateShort()`（App 端不直接支持，报「请检查 xxx 的拼写是否正确」） | 用条件编译包裹，或改用全端支持的等价 API；App 端取应用语言用 `uni.getSystemInfoSync().appLanguage`、取系统语言用 `uni.getDeviceInfo().osLanguage`（详见 **3.28**） |
| **未声明字段的 `UTSJSONObject` 点属性访问** | `config.color['up-primary'] = 'red'`（`UTSJSONObject` 没有静态成员，点访问取不到值） | 逐层下标 + 断言：`const colorConfig = config['color'] as UTSJSONObject; colorConfig['up-primary'] = 'red'`（详见 **1.27**） |
| **安全区 / 行高手写** | `style="padding-bottom: env(safe-area-inset-bottom); line-height: 22px"` | 项目工具类 `p-safe` / `pt-safe` / `pb-safe` + `leading-[22px]`（详见 **2.25**） |
| **Easycom 组件手动 import** | `import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue'` 再用 `<UniIcons />` | `uni_modules/*/components/` 与根 `components/` 的组件直接写短横线标签 `<uni-icons />`，无需 import；**页面私有组件（`src/pages/*/components/`）不在扫描范围，必须手动 import**（详见 **4.4**） |

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
- [ ] **30. 严禁在页面各处直接调用 `uni.getSystemInfoSync()` 与使用 CSS `100vh`**（系统信息与视口高度必须优先从 `@/src/utils/systemInfo/index.uts` 引入 `statusBarHeight`、`availableHeight` 等响应式变量，见分册 7）
- [ ] **31. 严禁手写 `process.env` / `import.meta.env` 或硬编码请求域名**（必须统一从 `@/src/config/env/env.uts` 引入 `getApiBaseUrl()`、`isDev()` 等方法，见分册 7）
- [ ] **32. 严禁在业务页面中散落调用原生 `uni.showToast({ title, icon: 'none' })`**（必须统一使用 `@/src/utils/toast/index.uts` 导出的 `toast(msg)` 或 `showToast(...)`，见分册 7）
- [ ] **33. 业务功能开发前优先复用 `@/src/utils/` 下既有封装**（严禁在局部重新手写已有的通用方法，引用路径一律使用 `@/src/utils/<module>/index.uts` 绝对路径，见分册 7）
- [ ] **34. 联合类型变量（`number | string`、`T | null` 等）上严禁直接写三元表达式**（UTS 在 `typeof` 窄化前先解析三元，判据对另一分支类型非法即报 `Expression expected` 且箭头指向判据操作数；必须拆成 `if` 语句提前 `return`。**只针对联合类型，单类型变量上的三元合法，严禁全仓机械替换**，见 1.20）
- [ ] **35. 严禁写链式 `.catch()`**（UTSPromise 的三个 `.catch` 重载在 Kotlin 端均无法收敛，报 `error25 None of the following candidates is applicable`，**与回调返回类型 / 是否 `throw` 无关**；一律改为双参 `.then(onFulfilled, onRejected)`，拒绝回调并进第二参，并且该回调内要用 `Promise.reject(err) as Promise<T>` 而非 `throw` 来表达失败，见 1.21）
- [ ] **36. 全局开发统一坚持「精准导入（Deep / Precise Import）」原则**（严禁底层模块从聚合门面 `index.uts` 互相穿透引用，业务代码引用项目模块时精准指向具体实现文件如 `@/src/config/env/env.uts`、`@/src/utils/systemInfo/index.uts`、`@/src/i18n/utils/index.uts`；第三方模块（如 `route-bestX`）则从其**公开入口** `@/uni_modules/route-bestX/index.uts` 导入，严禁穿透 `core/` / `hooks/` 等内部文件；总入口严禁反向 `export *` 形成自环；彻底根绝 Android 原生端类静态初始化 `<clinit>` 循环死锁与 `NullPointerException`，见 1.22）
- [ ] **37. 严禁在 App 原生端直接调用全局 `uni.onKeyboardHeightChange`**（全局键盘监听在 App-Android/iOS 原生环境未实现，调用报未定义/拼写错误；App 端必须使用 `<input>` / `<textarea>` 的 `@keyboardheightchange` 组件事件，且其入参类型必须严格声明为 `UniInputKeyboardHeightChangeEvent`，严禁写成 `...Detail` 导致 Android 运行时抛 `ClassCastException`，见 3.3）
- [ ] **38. 组件实例方法动态调用严禁强转 `as any` 后调用 `$callMethod`**（UTS 强类型系统对 `any` 不支持动态方法反射，写 `(el as any).$callMethod(...)` 会报 `error18 找不到名称“$callMethod”`；必须保持 `ref<ComponentPublicInstance | null>(null)` 强类型并调用 `el.value?.$callMethod(...)`，见 1.23）
- [ ] **39. `<web-view>` 组件的 `@message` 事件入参必须显式声明为 `UniWebViewMessageEvent`**（严禁将入参声明为 `(e: any)` 或省略类型后直接访问 `e.detail`，UTS 强类型检查会报 `找不到名称“detail”`；必须显式声明为官方事件强类型 `(e: UniWebViewMessageEvent)`，见 1.24）
- [ ] **40. 严禁在页面或组件中使用 `uni.$on` 注册全局事件后不执行 `uni.$off` 注销**（全局单例 `IndexKt.emitter` 生命周期贯穿整个应用进程，未注销的回调闭包会死死抓取组件实例、DOM 树及 `UniPortraitPageActivity`，导致每次进出页面都泄露一个完整的原生 Activity，被 LeakCanary 报内存泄漏；监听回调必须抽为具名函数，在 `onMounted` 注册，并在 `onUnmounted` 中调用 `uni.$off` 严格注销，见 3.26）
- [ ] **41. 「泛型实例化别名」（如 `type FooPageResult = PageResult<FooItem>`）严禁出现在 `as` 断言位置**（UTS 把 `as` 断言编译成**构造调用**，写 `} as FooPageResult);` 会生成 `new FooPageResult({...})`，而别名只是编译期 `type`、**没有任何运行期绑定**（编译器只为泛型本体生成 `class PageResult`）⇒ 产物里留下指向不存在标识符的 `new`，**编译期零报错零警告**、运行期抛 `ReferenceError: FooPageResult is not defined`，且常被页面 `try/catch` 吞成「列表渲染不出来 + 一条 `console.error`」而被误判为网络问题；断言必须**直写泛型本体、实参写全** `} as PageResult<FooItem>);`，别名只允许出现在类型位置（返回值标注 / 回调参数标注）；口诀「`as` / `new` 后面不许出现泛型实例化别名，`:` 后面可以」。**判据必须落到产物上**：`grep -rn "new [A-Za-z_]*PageResult(" unpackage/dist/dev/mp-weixin/src/api/*.js` —— 单测走 esbuild 转译、**不复现**这一层，全绿也照样有坑，见 1.25）
- [ ] **42. 通用算法能力严禁直接手写**（如自己实现 `md5` / SHA-256、手拼日期格式化、用 `+` 或 `*` 直接做大数运算、手写颜色空间转换）：必须先查 `uni_modules/` 下 6 个生态库并优先复用 —— `lime-shared`（91 个纯函数模块）、`lime-use`（组合式 hooks）、`lime-color`（颜色）、`lime-dayuts`（日期）、`bignumber-bestX`（任意精度）、`crypto-bestX`（加解密 / 哈希 / UUID），每库自带 `readme.md` 与项目内演示页（`src/sub/*FunctionDemo/`）。**注意两点**：① `lime-shared` 必须**深引入到具体函数文件**（其桶入口 `index.ts` 的 26 条导出**全被注释**，`import { addUnit } from '@/uni_modules/lime-shared'` 取不到值）；② 该模块的 `uniq` / `chunk` / `get` / `capitalize` / `isEqual` 是**项目本地补进去的**，升级 `lime-shared` 会被覆盖，升级后必须回来核对（见分册 6.5）
- [ ] **43. 定时器句柄（`setTimeout` / `setInterval`）在显式 `number` 标注下必须就地双层强转 `(…) as any) as number`**（@types/node 经 `vite.config.ts` 进程序后，把全局 `setTimeout` / `setInterval` 的返回值判为 `Timeout`，直接赋值报 `TS2322 不能将类型“Timeout”分配给类型“number”`，单层 `as number` 报 `TS2352`；**这是 VSCode / Volar 编辑器诊断，不是 UTS 编译错误** —— UTS 真源返回的就是 `number`，UTS 编译与 `pnpm typecheck` 都不会报，故判据只能落到 `ts-plugin` 诊断上；在 `.d.ts` 里补全局声明无效（重载取先声明那支）；与 1.13 会同时命中同一个定时器变量；先例 `src/components/NestedScroll/NestedScroll.uvue:383`，见 1.26）
- [ ] **44. 页面 / 组件里的跳转与取路由必须走组合式 hooks**（跳转一律 `useRouter().push / replace / relaunch / switchTab / back`，**严禁直接调用 `uni.navigateTo` / `uni.switchTab` / `uni.navigateBack`**，绕过守卫会让登录拦截、TabBar 分流、路由状态同步同时失效；本项目 TabBar 为自定义实现，`push` 命中 TabBar 页会自动纠正为 `switchTabbar`）；路由信息一律 `useRoute()`（**严禁 `onLoad((options) => {...})` 取参数** —— 它不响应式、且微信小程序端 options 是编码态与其它端口径不一致；**严禁手写 `getCurrentPages()` 判断当前页**；页面展示禁用全局 `routeState` / `router.currentRoute`，它们是「正在导航到的路由」；`useRoute()` 只能在组件 `setup` 内调用、每次返回新快照、禁止身份比较与解构）；`query` 值恒为 `string` 必须显式转类型，`meta` 使用前必须判空；所有符号从 `@/uni_modules/route-bestX/index.uts` 导入（保留 `.uts` 后缀），**严禁 import 其内部文件**，见分册 8）
- [ ] **45. 跨端平台判断遵循两级分层治理**（常规业务逻辑/分流统一引入 `@/src/config/env/platform.uts` 编译期常量走标准 `if` 分支；涉及端专属未在全平台声明的原生全局符号如 `window`、`my`、`wx`、`app.config` 或端特有 API，**必须且只能使用 `// #ifdef ...` 条件编译宏物理隔离**，避免原生 Kotlin 编译期静态符号解析抛 `error18 找不到名称`，见 3.27）
- [ ] **46. 严禁依赖浏览器特有 API**（`window`、`document`、`navigator`、`localStorage`、`sessionStorage`、`history` 在原生端不存在）：样式走 `:style` 响应式绑定、存储走 `uni.setStorageSync` / `uni.getStorageSync`、跳转走 `useRouter()`；确需 Web 专属逻辑必须 `// #ifdef H5` 物理隔离，见 3.28
- [ ] **47. 非全端 API 严禁裸调用**（如 `uni.vibrateShort`、`uni.getLocale` 在 App 端报「请检查 xxx 的拼写是否正确」）：用条件编译包裹或改用全端等价 API；App 端取应用语言用 `uni.getSystemInfoSync().appLanguage`、取系统语言用 `uni.getDeviceInfo().osLanguage`，见 3.28
- [ ] **48. 未声明字段的 `UTSJSONObject` 严禁点属性访问**（`config.color[...]` 取不到值）：必须逐层下标 + 断言 `config['color'] as UTSJSONObject`；注意与 1.9 相反 —— `Class` 实例禁止下标、只能点操作符，见 1.27
- [ ] **49. 安全区与行高严禁手写**（`env(safe-area-inset-bottom)`、零散 `line-height` 内联样式）：安全区用项目工具类 `p-safe` / `pt-safe` / `pb-safe`，行高用 `leading-[...]` 原子类，见 2.25
- [ ] **50. Easycom 范围内的组件严禁手动 import**（`uni_modules/*/components/` 与根 `components/` 直接写短横线标签）；反过来，**页面私有组件（`src/pages/*/components/`）不在扫描范围，必须手动 import**；改 easycom 配置时改 `pages.config.json`（`pages.json` 是生成物），且 `uniEasycomPlugin` 必须覆盖 App 与 Web（排除 mp-*），见 4.4
