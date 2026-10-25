# uni-app X 项目开发规约（AI / Agent 用）

本项目只保留一个技能 **`unibestX-skill`**（uni-app X / UTS 规范知识库），配合以下分级门槛规则使用，避免“小问题过度思考、流程冗长耗时”。

## 核心规则：任务复杂度分级与门槛控制

在执行任何操作前，首先评估任务复杂度，严格按层级匹配流程，**严禁小题大做**：

1. **第 1 级：微型任务（单行修改、CSS 样式、文案、简单配置、简单组件调用）**
   - **绝对禁止**派生子代理、写单测、建 worktree、起草设计文档。
   - **执行方式**：主代理直接读写修改目标文件 + 快速轻量验证，一气呵成迅速交付。

2. **第 2 级：小型功能 / 局部调整（单文件开发、独立 UI 页面、常规 Bug 修复）**
   - **禁止**派生子代理（subagent），**默认主代理直接完成**。
   - 仅做轻量思路整理或针对性修复；Bug 成因不明确时先定位根因再改，修复后做基本验证即可。

3. **第 3 级：复杂系统 / 跨多文件架构重构 / 核心业务系统升级**
   - 需求高度模糊且影响广泛时，先澄清需求再动手；跨模块强依赖时，先写计划文档再实现。
   - 默认仍由主代理直接推进，非必要不分派并行子代理。

**一条不因任务大小豁免的底线**：**声称完成 / 已修复 / 测试通过之前，必须实际运行验证命令并确认输出**，用证据支撑断言，严禁虚假进度。下方「项目规则与专属 Skills」中的必读铁律同样不豁免。

## 技能按需启用策略

Skills 位于 `.agents/skills/` 目录，目前**只保留 `unibestX-skill` 一个**。按需查阅，不强制调用：

- **日常开发 / 快速迭代**：直接编写代码，遵循 UTS 强类型规范，必要时查阅 `unibestX-skill` 的分册；
- **排查复杂 Bug**：先定位根因（复现 → 缩小范围 → 定位）再动手修改，修复后用可运行的验证命令确认。

## 项目规则与专属 Skills

- **AI / Agent 必读铁律**：所有参与本项目开发的 AI、Agent 在进行任何编码、重构、修 bug 或新增页面任务前，**必须首先完整阅读并严格遵循 `unibestX-skill`**（`.agents/skills/unibestX-skill/SKILL.md`）。该 Skill 为**「1 个入口 + 11 个分册」**结构：入口 `SKILL.md` 常驻「任务目标 + 输出与表达规范 + 操作步骤 + 标准交互流程（触发条件与处理逻辑）+ 可选分支 + 资源索引（分册导航）+ 注意事项 + 使用示例 + A.1 对照表 + A.2 红线清单」，正文细节在 `references/` 下的 11 个分册（`1-uts-syntax` / `2-styling` / `3-runtime` / `4-page-component` / `5-page-structure` / `6-api-spec` / `7-utils-spec` / `8-router-spec` / `9-tabbar-spec` / `10-http-spec` / `11-frontend-design`）；命中入口导航或速查表条目时**必须继续 Read 对应分册**核对完整正反例。
- **核心工具库优先（Utils-First）**：获取系统尺寸与高度优先使用 `@/src/utils/systemInfo`，环境变量与接口域名优先使用 `@/src/config/env`，开发中所需的基础通用方法优先使用 `@/src/utils/...`（详见分册 7）。
- **新增页面必须同步接入接口层**：接口按**业务模块**归入 `src/api/<module>/`，模块首次出现时建接口文件，多个页面共用接口时不重复建目录；类型被两个以上文件共用时才拆 `src/api/<module>/types.uts`（只含 `type` 的契约类型）。**页面目录下严禁出现 `mock.uts`，页面与组件里严禁 `ref([...])` 硬编码假数据**；后端就绪时只换函数体、签名冻结。完整规范见 `unibestX-skill` 分册 6（`references/6-api-spec.md`），页面与 API 目录结构见分册 5（`references/5-page-structure.md`）。
- **必须遵守 `.agents/rules/` 下的项目规则**（按触发方式分层加载）：`base-lines.md`（Always On，最高底线）、`api-standard.md` / `page-standard.md` / `router-standard.md`（Glob，写对应文件时自动加载）、`naming-standard.md` / `commit-rule.md`（Model Decision，按需加载）。规则文件只写「对错判定」，**用法、类型、模板与正反例一律查 `unibestX-skill` 分册**，命中场景必须加载对应分册。
- **一律禁止使用 `interface`**：在本项目中定义任何对象结构、状态、参数或返回值类型时，**一律禁止使用 `interface`**，**必须全部统一使用 `type`（类型别名）**，避免触发 UTS 底层对对象字面量赋值的 `UTS110111163` 编译错误。
- **AI 代码零新增 warning**：仓库存量 ESLint / Stylelint warning 默认忽略；AI 新建或修改的代码**不得新增任何 warning，也不得扩大原文件的 warning 数量**。交付前必须运行作用于改动文件的 ESLint / Stylelint 校验；禁止用大范围 `eslint-disable` / `stylelint-disable` 掩盖问题，确属框架误报时只能在命中行或单文件做精确豁免并注明原因。

## Token 极致控制与文件读取铁律（Vibe Coding 防膨胀）

- **默认禁止搜索 / 批量读取 `uni_modules/`、`node_modules/`、`unpackage/`、`dist/`**：这些目录合计上千万行、数百万 token，一旦被读入上下文会在后续每一轮请求中重复发送，是 token 消耗的主要来源。
- **`uni_modules/` 例外用法**：确需查看某个组件实现（如 `up-calendar`、`uni-layouts`）时，**按精确路径读取单个文件**（例如 `uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue`），严禁对整个目录做 `rg`、`grep`、`find` 后全量读取。
- **严禁全量 Dump 超过 200 行的大文件（强制精准切片）**：对 `pages.json`、`navbar.uvue`、`eslint-plugin-uts.mjs` 等大文件，**一律禁止不传行号全量读取**！必须使用 `StartLine` 与 `EndLine` 参数切片查看目标代码块（单次切片建议 50~100 行），节约 80% 单次 Token 消耗。
- **定位即收敛**：通过 `grep_search` 得到命中行号后，仅切片读取目标行上下 30 行，禁止顺手将整个千行文件全盘塞进上下文。
- **契约类型下沉为「零依赖叶子文件（Leaf Types）」**：跨两个以上文件共用的业务数据结构与接口契约，一律下沉到只包含 `type` 的独立 `types.uts` 文件中；AI 查阅类型时**仅读取该纯类型文件**（通常仅 20~50 行），严禁顺带读取包含数百行复杂模板与业务实现的宿主组件。
- 搜索一律用 `rg`（会遵守根目录 `.ignore`），禁止 `grep -r` 直扫仓库根目录。
