# uni-app X 项目开发规约（AI / Agent 用）

本项目只保留一个技能 **`unibestX-skill`**（uni-app X / UTS 规范知识库），配合以下分级门槛规则使用，避免「小问题过度思考、流程冗长耗时」。

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

## 技能：仅保留 `unibestX-skill`

项目中唯一的技能是 [.claude/skills/unibestX-skill/](.claude/skills/unibestX-skill/)（并在 [.agents/skills/unibestX-skill/](.agents/skills/unibestX-skill/) 保留一份镜像副本，两份需保持同步）。它是 uni-app X（`.uvue` / `.uts` / `.ts`）开发、编译、重构、排错的**必读知识库**——UTS 严格类型约束、Tailwind 与布局引擎限制、页面骨架约定、App / 鸿蒙 / Web / 小程序端差异。

任务匹配时用 `Skill` 工具加载并严格遵循其流程，**绝不要用 Read 工具直接读 `SKILL.md`**。具体铁律见下方。

## 项目规则与专属 Skills

- **AI / Agent 必读铁律**：所有参与本项目开发的 AI、Agent 在进行任何编码、重构、修 bug 或新增页面任务前，**必须首先完整阅读并严格遵循 `unibestX-skill`**（`.claude/skills/unibestX-skill/SKILL.md`）。该 Skill 为**「1 个入口 + 8 个分册」**结构：入口 `SKILL.md` 只常驻「概述 + 分册导航 + A.1 对照表 + A.2 红线清单」，正文细节在 `references/` 下的 8 个分册（`1-uts-syntax` / `2-styling` / `3-runtime` / `4-examples` / `5-codegen` / `6-page-component-spec` / `7-api-spec` / `8-utils-spec`）；命中导航或速查表条目时，**必须继续 Read 对应分册**核对完整正反例，不得只看入口结论就改代码。
- **核心工具库优先（Utils-First）**：获取系统尺寸与高度优先使用 `@/src/utils/systemInfo`，环境变量与接口域名优先使用 `@/src/utils/env`，开发中所需的基础通用方法优先使用 `@/src/utils/...`（详见分册 8）。
- **新增页面必须同步建接口层**：每新增一个页面（`src/pages/<page>/`、`src/sub/<page>/`），必须在**同一次改动**里建出 `src/api/<page>/<page>.uts`（接口函数，按模块分段）；接口文件预计 ≥ 400 行时再拆 `src/api/<page>/types.uts`（只含 `type` 的契约类型）与 `src/api/<page>/mock/<模块>.uts`（模拟数据集）。**页面目录下严禁出现 `mock.uts`，页面与组件里严禁 `ref([...])` 硬编码假数据**；后端就绪时只换函数体、签名冻结。完整规范见 `unibestX-skill` 分册 7（`references/7-api-spec.md`），对照结构见分册 6 铁律 5。
- **必须遵守** `.agents/rules/uniappx.md` 中的 uni-app X 开发规范。每次会话开始时先 Read 该文件，并在编写 `.uvue`、`.uts`、`.ts`、`.scss` 文件时严格遵循其中的规则。
- **一律禁止使用 `interface`**：在本项目中定义任何对象结构、状态、参数或返回值类型时，**一律禁止使用 `interface`**，**必须全部统一使用 `type`（类型别名）**，避免触发 UTS 底层对对象字面量赋值的 `UTS110111163` 编译错误。
