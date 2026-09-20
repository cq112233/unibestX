# Superpowers-ZH 精简增强版（按需分级启用）

本项目配置了 Superpowers 技能框架与 uni-app X 专属规范。为了避免「小问题过度思考、流程冗长耗时」，严格执行以下**分级门槛规则与按需调用机制**。

## 核心规则：任务复杂度分级与门槛控制

在执行任何操作前，首先评估任务复杂度，严格按层级匹配流程，**严禁小题大做**：

1. **第 1 级：微型任务（单行修改、CSS 样式、文案、简单配置、简单组件调用）**
   - **绝对禁止**启动 `brainstorming`、`subagent-driven-development`、`using-git-worktrees`、`test-driven-development`、`code-review`。
   - **执行方式**：主代理直接读写修改目标文件 + 快速轻量验证，一气呵成迅速交付。

2. **第 2 级：小型功能 / 局部调整（单文件开发、独立 UI 页面、常规 Bug 修复）**
   - **禁止**派生子代理（subagent），**默认主代理直接完成**。
   - 仅做轻量思路整理或针对性修复，仅在 Bug 成因不明确时参考 `systematic-debugging`，修复后做基本验证即可。

3. **第 3 级：复杂系统 / 跨多文件架构重构 / 核心业务系统升级**
   - 仅在需求高度模糊且影响广泛时才启用 `brainstorming`；
   - 仅在涉及跨模块复杂依赖时才编写 `writing-plans`；
   - 默认仍由主代理直接推进，非必要不分派复杂并行子代理。

**两条不因任务大小豁免**：`verification-before-completion`（声称完成前必须有验证证据），以及下方「项目规则与专属 Skills」中的必读铁律——前者防虚假进度，后者防静默编译错误与端差异 Bug，都不是流程仪式。

## 技能按需启用策略

Skills 位于 `.claude/skills/` 目录（共 23 个），每个 skill 有独立的 `SKILL.md` 文件。**坚决废除「哪怕 1% 可能性也强制调用」的旧规则，改为按需查阅。** 用 `Skill` 工具加载，绝不要用 Read 工具直接读 `SKILL.md`。

### 按需参考（满足触发条件才进流程）

- **brainstorming**: 需求模糊或需要重大方案决策时。简单修改、CSS、文案、配置**严禁触发**。
- **writing-plans**: 跨多文件复杂架构重构，或存在强依赖的多步骤任务。单文件开发、日常 UI、配置修改直接实现。
- **test-driven-development**: 仅编写需严谨单测的算法或核心业务纯函数时。日常 UI、页面样式、小 bug 修复**严禁触发**。
- **subagent-driven-development**: 仅用户明确要求或超大型多任务时。日常开发默认不启用。
- **using-git-worktrees**: 仅用户显式要求隔离分支 / 工作树时。**严禁自动创建 worktree**。
- **dispatching-parallel-agents**: 2 个以上可独立进行、无共享状态或顺序依赖的任务时。
- **systematic-debugging**: 遇到 bug、测试失败或异常行为时，在提出修复方案之前。
- **verification-before-completion**: 宣称完成、已修复或测试通过之前，在提交或创建 PR 之前——必须运行验证命令并确认输出。
- **executing-plans**: 有书面实现计划需在单独会话中执行、并设有审查检查点时。
- **finishing-a-development-branch**: 实现完成、测试通过、需决定如何集成工作时（合并 / PR / 清理）。
- **requesting-code-review** / **receiving-code-review**: 主动请求 review / 收到 review 反馈并实施建议之前。
- **writing-skills**: 创建新技能、编辑现有技能或在部署前验证技能时。
- **mcp-builder**: 构建生产级 MCP 工具、连接外部能力时。

### 项目专属 Skills

- **unibestX-skill**: uni-app X（`.uvue` / `.uts` / `.ts`）开发、编译、重构、排错必读——UTS 严格类型约束、Tailwind 与布局引擎限制、页面骨架约定、App / 鸿蒙 / Web / 小程序端差异。**详见下方铁律。**
- **uniappx-page-skeleton**: 新建 `.uvue` 页面骨架时使用。
- **uts-any-slot-prop**: 处理 `error17` / `Any?` slot props 等 UTS 对象字面量类型问题时使用。

### 仅显式调用（不要根据上下文自动触发）

- **chinese-code-review**: 中文 review 沟通参考——话术模板、分级标注（必须修复 / 建议修改 / 仅供参考）、国内团队常见反模式应对。仅 `/chinese-code-review`。
- **chinese-commit-conventions**: 中文 commit 与 changelog 配置参考——Conventional Commits 中文适配、commitlint / husky / commitizen 中文模板。仅 `/chinese-commit-conventions`。
- **chinese-documentation**: 中文文档排版参考——中英文空格、全半角标点、术语保留、链接格式。仅 `/chinese-documentation`。
- **chinese-git-workflow**: 国内 Git 平台配置参考——Gitee、Coding.net、极狐 GitLab、CNB 的 SSH / HTTPS / 凭据 / CI 接入差异与镜像同步。仅 `/chinese-git-workflow`。
- **workflow-runner**: 在 Claude Code / OpenClaw / Cursor 中直接运行 agency-orchestrator YAML 工作流——无需 API key，使用当前会话的 LLM 作为执行引擎。用户提供 `.yaml` 工作流文件或要求多角色协作完成任务时触发。

## 如何使用

先按上方三级门槛判断该不该进流程，该进时才进；能用主代理直接完成的不要派子代理。任务匹配某个 skill 时，用 `Skill` 工具加载并严格遵循其流程。

## 项目规则与专属 Skills

- **AI / Agent 必读铁律**：所有参与本项目开发的 AI、Agent 在进行任何编码、重构、修 bug 或新增页面任务前，**必须首先完整阅读并严格遵循 `unibestX-skill`**（`.claude/skills/unibestX-skill/SKILL.md`）。该 Skill 为**「1 个入口 + 7 个分册」**结构：入口 `SKILL.md` 只常驻「概述 + 分册导航 + 3.3 对照表 + 3.4 红线清单」，正文细节在 `references/` 下的 7 个分册（`1.1-uts-syntax` / `1.2-styling` / `1.3-runtime` / `2-examples` / `3-codegen` / `4-utils` / `5-infra`）；命中导航或速查表条目时，**必须继续 Read 对应分册**核对完整正反例，不得只看入口结论就改代码。
- **内置工具优先复用**：动手实现任何通用能力（取路由与路径、取主题色、读环境变量、多语言文案、提示弹窗、返回键接管、下拉刷新与导航栏控制、文件上传、系统与安全区尺寸、防抖节流与流式处理、LaTeX 公式排版）之前，**必须先查 `unibestX-skill/references/4-utils.md`**，`src/utils/` 下已有 11 个现成模块可直接调用，严禁重复造轮子（如自己写 `uni.getSystemInfoSync()`、裸写 `setInterval` 做防抖、直接读 `import.meta.env.VITE_XXX`）。
- **基础设施按既有配置走**：发起接口请求（**严禁自己写 `uni.request`**，鉴权头 / 业务码判定 / 401 跳登录都在 `src/http/request.uts` 的拦截器里）、做 SSE 打字机输出、改登录拦截与登录策略、**选页面 `layout` 或配 `definePage` 导航栏字段**、增改多语言文案之前，**必须先查 `unibestX-skill/references/5-infra.md`**。特别注意：**任何 `layout: 'navbar'` 的页面，`style.navigationStyle` 必须显式写 `'custom'`**，漏写会让导航栏、返回箭头、状态栏占位**静默消失且不报错**。
- **VDOM 与 Vapor 差异自动分类回写机制**：在开发或调试排错过程中，若遇到任何 UTS 语法、组件属性、生命周期、CSS 样式（如阴影、布局等）在 **VDOM 模式与 Vapor 模式不通用 / 存在渲染与表现差异** 的情况，AI / Agent **必须主动根据四维分类自动追加到 `unibestX-skill/references/` 下的对应分册中**（语法规范 → `1.1-uts-syntax.md`；样式限制 → `1.2-styling.md`；运行时约束 → `1.3-runtime.md`；快速对照表与红线清单 → 入口 `SKILL.md` 的 3.3 / 3.4），并将 `.claude/skills/unibestX-skill/` 与 `.agents/skills/unibestX-skill/` 两份副本同步一致，严禁遗漏！
- **必须遵守** `.agents/rules/uniappx.md` 中的 uni-app X 开发规范。每次会话开始时先 Read 该文件，并在编写 `.uvue`、`.uts`、`.ts`、`.scss` 文件时严格遵循其中的规则。
- **一律禁止使用 `interface`**：在本项目中定义任何对象结构、状态、参数或返回值类型时，**一律禁止使用 `interface`**，**必须全部统一使用 `type`（类型别名）**，避免触发 UTS 底层对对象字面量赋值的 `UTS110111163` 编译错误。
