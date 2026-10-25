---
name: unibestX-skill
description: Use when developing, compiling, refactoring, or troubleshooting uni-app X (.uvue / .uts / .ts) projects, handling UTS strict type constraints (UTS110111163, UTS110111119, UTS110111120, ClassCastException, error17 Any? slot props), Tailwind CSS styling and layout engine limitations, page skeleton conventions, visual direction and anti-template UI decisions, typography and palette systems, or platform-specific cross-end issues across App (Android Kotlin, iOS Swift), HarmonyOS (ArkTS), Web, and Mini-Programs.
---

# unibestX-skill (uni-app X & UTS 规范、真实案例与代码生成指南)

## 任务目标

- 让 AI / Agent 在 unibestX（uni-app X）项目里**写出能一次编译通过**的 `.uvue` / `.uts` / `.ts` / `.scss` 代码，不踩 UTS 名义强类型与原生渲染的坑。
- 新增页面时**结构可照抄、接口归属同批交付**：骨架来自分册 4 / 5，接口按业务模块归入 `src/api/<module>/`（分册 6）。
- 新建 / 重做界面时先建立**业务专属的视觉方向**：配色、排版、布局与唯一记忆点来自业务主体，不套通用 AI 模板（分册 11）。
- 跨端行为可控：App（Kotlin）/ 鸿蒙（ArkTS）/ Web / 小程序的差异，先按分册 3 判定，再做条件编译或门面分流。
- 排错以**根因 + 可复现证据**收尾，不靠猜测和「改改试试」。
- 交付前必须过 A.2 红线清单与真实验证命令，**没有验证输出就不算完成**。

> ⚠️ 本文件与 `references/` 下 11 个分册、下方 A.1 / A.2 同为强制约束；动手前先读「注意事项」与「A.2 代码生成红线清单」。

---

## 概述

uni-app X 采用 UTS (uni type script) 语言与原生渲染引擎，跨端直接编译为原生代码（Android 编译为 Kotlin，iOS 插件编译为 Swift，鸿蒙插件编译为 ArkTS，Web / 小程序编译为 JS）。  
与宽容的 TypeScript / JavaScript 不同，UTS 采用**名义强类型系统（Nominal Strong Typing）**与**原生渲染规范** —— 很多在 TS 里「只是警告」的写法，在 UTS 里是编译失败或真机崩溃。

本 Skill 采用 **「1 个入口 + 11 个分册」** 结构：入口常驻任务目标、交互流程与 A.1 / A.2 速查；成体系的铁律、正反例与实测结论都在 `references/` 分册里，**命中即必须 Read**。

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
- 规划或生成新页面结构、骨架布局与视口高度（`availableHeight`）时；新增页面与已有页面同属业务模块时，先确认是否聚合，不得擅自迁移存量页面
- **新建页面、重做 UI、判断页面是否「像模板」，或需要确定配色 / 字体 / 布局 / 动效方向时**（分册 11）
- **新增页面并接入 `src/api/<module>/` 业务模块接口层（接口函数 + 类型 + 数据集，按需拆 `types.uts`）时**、把页面里的假数据抽成接口函数时
- 对接后端真实接口、写 `http` 请求 / 文件上传 / SSE 流式接口时
- **使用 `src/http` 业务实例、`src/api` 接口层，或 `useQuery` / `useMutation` / `useQueryClient` 时**（分册 10）
- **新增 / 删除 Tab、切换 TabBar 模式、调整 UI / 角标、监听 Tab 生命周期、处理底部安全区时**（分册 9）
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
- 同时命中多个分册时全部 Read（典型：新增页面 = 分册 11 + 4 + 5 + 6 + 7 + 8；涉及 TabBar 加 9，涉及网络 / 异步 hooks 加 10）。
- 分册没有覆盖的新问题：以项目现有代码与实测为准，**不要套用 TS / Vue 的通用经验臆断**。

### 3. 实现

**触发条件**：规范已加载，开始写或改代码。

**处理逻辑（强制）**：

- **模板与案例优先**：页面结构照分册 4 的标杆案例、分册 4 的标准模板，不自创骨架。`components/`、`common/`、`modules/` 都按需创建，简单业务默认只写根页面，不为了拆分而创建目录。
- **视觉方向先于组件堆叠**：新建或重做界面时，先按分册 11 写紧凑设计计划，明确业务主体、唯一任务、4–6 个颜色 Token、3–5 级排版层级与一个 signature，再选组件与样式。
- **UTS 语法铁律**：`type` 不用 `interface`、空值用 `null` 不用 `undefined`、基础类型比较用 `==` / `!=`、条件必须显式布尔（见 A.2 第 1–4 条）。
- **新增页面必须接入接口层**：同一次改动接入 `src/api/<module>/`，模块首次出现时建接口文件；类型被两个以上文件共用时才拆 `types.uts`，接口文件不设行数上限；页面目录下严禁数据集文件，页面与组件里严禁 `ref([...])` 硬编码假数据（分册 6）。
- **Utils-First**：系统信息、环境变量、Toast、路由、通用算法先查 `@/src/utils/` 与 `uni_modules/` 六个生态库，不手写（分册 7）。
- **跨端显式分流**：常规逻辑用 `@/src/config/env/platform.uts` 常量；端专属原生全局符号用条件编译宏物理隔离（分册 3.27）。
- **不得擅自修改本 Skill**（见「注意事项 · 交互规范」）。

### 4. 红线自检

**触发条件**：代码改完、准备交付。

**处理逻辑**：逐条核对 A.2 的 55 条红线，以及所读分册末尾的自检清单；命中即改，改完重新自检。重点复核：`interface` / `undefined` / `===`、UTS / TS / JS 循环依赖、动态 `:style` 强转、`gap` 与 `space-*`、链式 `.catch()`、页面跳转是否走 `useRouter()`、新增页面是否已建接口层、视觉方案是否只是通用模板。

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

- **新建页面 / 重做 UI**：分册 11（视觉方向与设计计划）→ 4（流程与模板）→ 5（层级与拆分）→ 6（接口层）→ 7（工具库）→ 8（路由）；涉及 TabBar 加 9，涉及网络 / 异步 hooks 加 10。
- **新增组件**：分册 4（组件契约与模板）→ 5（组件提升边界）→ 11（组件视觉层级与文案）；涉及样式能力与跨端兼容加 2。
- **编译 / 运行报错**：按报错码或现象定位分册 1（UTS 语法）或分册 3（跨端运行时）；先找根因，再改代码。
- **样式 / 布局问题**：先判断是「审美与视觉方向」还是「原生样式能否生效」：前者读分册 11 定方向，后者读分册 2 查 flex / 单位 / 文本宿主 / 边框 / 安全区等引擎限制。
- **接口对接 / Mock 数据**：分册 6；涉及 `src/http` 实例、鉴权、错误归一或 Query hooks 时同时读分册 10；后端就绪只换函数体，签名冻结。
- **TabBar 配置 / 模式 / 生命周期 / 底部避让**：分册 9；只改 `src/tabbar/config.uts`，业务优先使用 `useTabbar*` hooks。
- **HTTP / 异步状态管理**：分册 10；页面 → `src/api` → `src/http`，读写分别用 `useQuery` / `useMutation`。
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
| [references/0-redlines.md](references/0-redlines.md) | **0 红线清单与排查对照手册**（A.1 快速排查对照表 30+ 条 + A.2 代码生成红线清单 55 条） | 代码生成前必检、交付前自检、遇到典型编译/运行时报错快速定位 |
| [references/1-uts-syntax.md](references/1-uts-syntax.md) | **1 UTS 强类型与语法手册**（29 条铁律 + 类型声明/导入 + 类型能力 + 完整可编译示例 + 7 类场景写法 + 17 条坑点 + 报错索引 + 速查表 + 15 条红线） | 定义对象结构与类型标注、写 `export` / `class` / 闭包 / 定时器回调 / 集合遍历 / 联合类型上的三元表达式 / Promise 的 `.then` 与 `.catch` / **`UTSJSONObject` 下标取值** / **Pinia 基类方法重写**；遇 `UTS110111163`、`UTS110111119`、`UTS110111120`、`error1`、`error17`、`error18`、`error25`、`NoSuchMethodError`、`Expression expected`、VSCode 里的 `TS2322 不能将类型"Timeout"分配给类型"number"`、运行期 `ReferenceError: XxxPageResult is not defined` |
| [references/2-styling.md](references/2-styling.md) | **2 样式与原生渲染手册**（26 条铁律 + 完整页面示例 + 7 类场景写法 + 17 条坑点 + 样式能力矩阵 + 20 条红线） | 写 `.scss` / Tailwind 工具类；处理按钮与文本排版、**安全区工具类 `p-safe` / `pt-safe` / `pb-safe`**、**行高 `leading-[...]`**、**SCSS 变量运行时动态化、`uni.scss` 覆盖**、高度单位、阴影边框、字号字重、行内嵌套样式、样式不生效或表现不一致 |
| [references/3-runtime.md](references/3-runtime.md) | **3 跨端运行时手册**（29 条铁律 + 跨端能力封装示例 + 7 类场景写法 + 16 条坑点 + 渲染模式/条件编译宏/假绿判定速查 + 14 条红线） | VDOM / Android VDOM / Vapor 差异、多平台门面分流与条件编译、**全局跨端平台判断规范（统一使用 `@/src/config` 常量，除 TabViews.uvue 外严禁在 src/ 散落手写 `#ifdef`）**、**禁止浏览器特有 API `window` / `document` / `localStorage` 与非全端 API 裸调用（含 `getLocale` 安全取语言）**、**Vite 自定义页面插件开发约束**、UTS 插件与自定义基座、**第三方组件（选项式 `.vue`）是否可用**、Markdown 渲染、真机与 Kotlin 报错、编译验证命令选择 |
| [references/4-page-component.md](references/4-page-component.md) | **4 页面与组件手册**（三种页面骨架 · `definePage` 全字段 · **标准业务页：`useRoute` / `useRouter` + `useQuery` / `useMutation` / `useQueryClient`** · easycom · **4.5 组件写法：根节点 / props / emits / expose / 取数边界** · 流程与交付 · 坑点 · 速查 · 红线） | **新建 / 改造页面或组件必读**：骨架怎么搭、`definePage` 写哪些字段、带接口的页面怎么写、**组件文件怎么写**、如何交付 —— **优先照抄，不要自创结构** |
| [references/5-page-structure.md](references/5-page-structure.md) | **5 页面结构编排标准**（TabBar 单页 · 非 TabBar 业务模块聚合 · **存量页面 URL 保护** · 简单页与 `components / common / modules` 的按需选择 · 取数边界 · 组件提升 · API 归属 · 结构速查 · 18 条红线） | **规划页面结构**时必读：目录怎么摆、为什么 TabBar 页也没有 `views/`、何时才用 `modules/`、谁能调接口、数据归谁、mock 落哪。**新增页面与已有页面同属业务模块时，必须先询问是否聚合，不得擅自迁移旧页面或改变 URL**。**不含任何代码写法** —— 页面 / 组件怎么写看分册 4，接口函数看分册 6 |
| [references/6-api-spec.md](references/6-api-spec.md) | **6 API 接口层手册**（业务模块目录 · 契约类型 · 按模块造数 · `http` 用法 · 完整 mock→http 双实现 + 8 类场景写法 + 16 条坑点 + 速查表 + 26 条红线） | **新增页面接入 `src/api/<module>/` 时**、抽接口函数时、写 mock 数据集与契约类型时、对接后端真实接口时必读 |
| [references/7-utils-spec.md](references/7-utils-spec.md) | **7 工具库使用手册**（系统信息 · 环境变量 · 通用工具 · 6 个生态库 + 能力对照示例 + 7 类场景写法 + 15 条坑点 + 「该用谁」速查表 + 23 条红线） | 获取屏幕/窗口尺寸、状态栏/导航栏/TabBar高度、计算内容可用高度（`availableHeight`）；判断开发/生产环境、获取接口基础地址；使用 Toast、Loading、主题与返回键时必读；**要写大数运算 / 加解密与哈希 / 日期时间 / 颜色处理 / 数组对象工具 / 组合式 hooks 前必读（先查 `uni_modules/` 生态库，不要手写）** |
| [references/8-router-spec.md](references/8-router-spec.md) | **8 路由导航与 `useRoute` 手册**（导入口径 · `RouteLocation` 全字段与类型 · 完整 demo · 10 类场景写法 · 14 条坑点 · `useRouter` 速查 · 10 条自检红线） | **页面 / 组件里要做任何跳转（push / replace / switchTab / back）、要读当前路由信息（path / query / meta / name）、准备写 `onLoad(options)` 取参数或手写 `getCurrentPages()` 时必读** |
| [references/9-tabbar-spec.md](references/9-tabbar-spec.md) | **9 TabBar 业务导航手册**（配置真源 · 五种模式 · `useTabbar` / `useTabbarPage` / `useTabbarTheme` / `useTabbarMetrics` / `useTabbarI18n` 契约 · 角标 / 生命周期 / 安全区写法 · 12 条坑点 · 15 条自检红线） | **新增 / 删除 Tab、切换 `VITE_TABBAR_MODE`、调整 UI 形态、设置角标、监听 Tab 显示、处理底部遮挡与安全区时必读** |
| [references/10-http-spec.md](references/10-http-spec.md) | **10 HTTP 网络层手册**（`src/http` 业务实例 · `src/api` 三层边界 · `useQuery` / `useMutation` / `useQueryClient` · 上传 / 下载 / 流式 · 401 / Token / 多域名 · 15 条坑点 · 18 条自检红线） | **新增 / 修改接口函数、接入真实后端、使用异步请求 hooks、处理鉴权 / 401 / 统一错误提示时必读** |
| [references/11-frontend-design.md](references/11-frontend-design.md) | **11 前端设计美学手册**（业务主体 · 设计计划 · 颜色 Token · AppText 排版 · 结构语义 · 动效克制 · 反模板审美 · 文案与真实状态 · uni-app X 落地 · 设计自检） | **新建页面、重做 UI、页面「像模板」、需要确定配色 / 字体 / 布局 / 动效方向，或要把设计稿落到原生端时必读** |

> 📌 **完整版 A.1 快速排查对照表（30+ 条）**与 **A.2 代码生成红线清单（55 条）** 均独立收录于 [references/0-redlines.md](references/0-redlines.md)，交付前必须打开核对；入口末尾保留 Top 12 最致命高频自检项。

### 项目权威规则与关键代码位置

| 资源 | 位置 | 用途 |
| :--- | :--- | :--- |
| 项目开发规约 | [CLAUDE.md](../../../CLAUDE.md) | 任务复杂度分级门槛、新增页面必建接口层、禁止 `interface` |
| 项目规则（分层加载） | [.agents/rules/](../../rules/)：`base-lines.md`（Always On）· `api-standard.md` / `page-standard.md` / `router-standard.md`（Glob）· `naming-standard.md` / `commit-rule.md`（Model Decision） | 规则只写「对错判定」；本 Skill 是其**按需展开版**（用法 / 类型 / 模板 / 正反例） |
| 页面目录 | `src/pages/<page>/`（TabBar 单页）、`src/sub/<page>/`（非 TabBar 单页）、`src/sub/<module>/<page>/`（非 TabBar 多页面业务模块） | 页面结构与私有视图（分册 5） |
| 接口层 | `src/api/<module>/<file>.uts`（类型 / 数据集默认内联，按需拆 `types.uts`） | 按业务模块聚合，后端就绪只换函数体（分册 6） |
| 系统信息 | `src/utils/systemInfo/index.uts` | `availableHeight`、`statusBarHeight`、`navBarHeight`、`safeAreaBottom`（分册 7） |
| 环境变量 | `src/config/env/env.uts`、`src/config/env/platform.uts` | `getApiBaseUrl()`、`isDev()`、`isH5` / `isApp` 等平台常量（分册 7） |
| 路由 | `uni_modules/route-bestX/index.uts`（`useRoute` / `useRouter` / 路径工具 / `routeState`）、`src/router/index.uts`（业务门面与 `router` 单例）、`src/router/guards/`（业务守卫） | `useRoute()` / `useRouter()`（分册 8） |
| TabBar | `src/tabbar/index.uts`（hooks 门面）、`src/tabbar/config.uts`（唯一配置真源）、`src/tabbar/components/TabViews.uvue`（生成物） | `useTabbar*` hooks、模式与底部避让（分册 9） |
| HTTP 网络层 | `src/http/index.uts`（`http` / `secondaryHttp`）、`src/api/<module>/<file>.uts`（接口函数）、`uni_modules/request-bestX/index.uts`（hooks / 类型） | 页面 → api → http，读写用 Query hooks（分册 10） |
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
- **严禁 `.uts` / `.ts` / `.js` 模块形成直接或间接循环依赖**（`A → B → A`，包含 `import`、`import type`、`export *` 转发与条件编译分支）；模块依赖必须保持单向有向无环图（DAG），公共类型、常量与纯函数下沉到叶子文件，见分册 1.22。
- 新增页面必须接入 `src/api/<module>/` 业务模块接口层，页面与组件里不得出现硬编码假数据。
- 跨端差异先判定端与触发条件，再做条件编译或门面分流；不得按 TS / Vue 的通用经验臆断。
- 涉及端专属原生全局符号（`window`、`wx`、`my`、`uni.onKeyboardHeightChange` 等）必须 `#ifdef` 物理隔离，普通 `if` 拦不住原生编译期的符号解析。

### 质量

- 代码以**能编译、能真机跑**为准，不以「看起来对」为准。
- 交付必须附验证命令与关键输出；没有输出就没有「完成」。
- 页面结构照抄标杆案例与模板，不为了「更好看」自创骨架；`components/`、`common/`、`modules/` 都是按需结构，简单业务默认留在根页面。

### 上下文边界（rules vs skill）

- `.agents/rules/` 与 `CLAUDE.md` 是**规则层**（`base-lines.md` 常驻；`api-standard` / `page-standard` / `router-standard` 按 Glob 命中加载；`naming-standard` / `commit-rule` 由模型按需判断）；本 Skill 是**按需懒加载**的领域知识库，只在命中触发条件或显式 `/unibestX-skill` 时进入上下文。
- 因此：**必须无条件生效的硬约束**（复杂度分级、禁 `interface`、必建接口层）留在 rules / CLAUDE.md；**成体系的铁律、正反例与实测结论**放在本 Skill 分册，不要反向把大块知识搬运到常驻规则里。

---

## 使用示例

### 示例 1：用户提出「新增一个订单列表页」

- **用户**：帮我加一个订单列表页。
- **助手**：判定为第 2 级任务 → Read 分册 11 / 4 / 5 / 6 / 8 → 先按分册 11 定业务视觉方向与设计计划 → 照分册 4 模板建页面骨架（上固定 + 下滚动、`availableHeight`）→ 按业务模块接入 `src/api/order/order.uts`（类型与数据集内联） → 跳转走 `useRouter()` → 过 A.2 红线 → 跑编译验证后交付。

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

### 示例 7：用户说「这个页面看起来很 AI、很模板」

- **用户**：这个首页全是圆角卡片和渐变，看起来很模板，帮我改得有自己的气质。
- **助手**：Read 分册 11 → 先确认业务主体、受众与页面唯一任务 → 写 4–6 色 Token、3–5 级排版与一个 signature 的设计计划 → 自我批判掉通用默认 → 按分册 2 检查原生端可落地性 → 再改页面并截图验收。

---

## A. 交付自检与红线速查 (Checklist & Redlines)

> 📖 **完整 55 条红线清单与 30+ 常见排查矩阵已收录于 [references/0-redlines.md](references/0-redlines.md)**。代码生成前与交付前必须逐条核验。

### Top 12 最致命高频自检清单（速查）

在宣告代码修改完成前，请先快速自检以下最高频的崩溃/编译错误风险点：

- [ ] **1. 严禁使用 `interface`**：所有对象结构一律使用 `type`（规避 `UTS110111163`，详见分册 1）。
- [ ] **2. 严禁使用 `undefined`**：空值统一使用 `null`，联合类型仅限 `Type | null`（规避 `UTS110111119`）。
- [ ] **3. 基础类型等值比较统一使用 `==` 与 `!=`**：严禁使用 `===` 与 `!==`。
- [ ] **4. 条件判断禁止隐式转换**：`if (val)` 必须显式写为 `if (val != null)` 或 `if (val != "")`（规避 `UTS110111120`）。
- [ ] **5. 动态 `:style` 与属性严禁强转 `as UTSJSONObject`**：统一使用 `(val ?? {}) as any`（规避 Kotlin 运行时 `ClassCastException`）。
- [ ] **6. `as` 断言位置严禁写「泛型实例化别名」**：必须写泛型本体如 `as PageResult<Item>`，严禁 `as FooPageResult`（编译期不报错，运行期抛 `ReferenceError` 炸列表，详见分册 1.25）。
- [ ] **7. 原生平台严禁使用 `gap` 与 `space-x-*` / `space-y-*`**：原生渲染引擎不支持，水平排列改用 `mr-*`/`ml-*`，垂直列表用 `mb-*`/`mt-*`（详见分册 2）。
- [ ] **8. `<view>` 上严禁挂载文字颜色与字体样式**：`color` / `font-size` / `font-weight` 等必须下沉到 `<text>` 承载。
- [ ] **9. 严禁写链式 `.catch()`**：Promise 拒绝分支统一改用双参 `.then(onFulfilled, onRejected)`（规避 Kotlin `error25`，详见分册 1.21）。
- [ ] **10. 严禁 `.uts` / `.ts` / `.js` 循环依赖**：依赖图必须是单向 DAG，严禁底包反向 import 或多层重导出，彻底杜绝 Android 类初始化死锁（详见分册 1.22）。
- [ ] **11. 页面跳转走 `useRouter()`，取路由走 `useRoute()`**：严禁原生 `uni.navigateTo`，严禁 `onLoad((options) => ...)`（详见分册 8）。
- [ ] **12. 新增页面必须接入 `src/api/<module>/` 业务模块接口层**：页面与组件内严禁 `ref([...])` 硬编码假数据（详见分册 6）。

---

> 🔗 **需要完整 55 条红线清单与 30+ 编译器报错对照表时，请查看分册：[references/0-redlines.md](references/0-redlines.md)**
