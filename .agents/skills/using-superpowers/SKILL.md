---
name: using-superpowers
description: 在开始任何对话时使用——确立如何查找和使用技能，要求在任何响应（包括澄清性问题）之前调用 Skill 工具
---

<SUBAGENT-STOP>
如果你是作为子智能体被分派来执行特定任务的，跳过此技能。
</SUBAGENT-STOP>

<EXTREMELY-IMPORTANT>
遵循任务复杂度分级门槛规则，避免对简单任务进行过度流程化处理。
- 微型/简单任务（单行修改、CSS、文案、简单配置、简单组件）：直接修改并简单验证，禁止进入 brainstorm、TDD、subagent、worktree 等重型流程！
- 小型功能/常规排查：主代理直接实现，禁止派生子代理。
- 复杂架构/模糊需求/重大重构：才按需引入对应流程技能。
</EXTREMELY-IMPORTANT>

## 指令优先级

Superpowers 技能覆盖默认系统提示行为，但**用户指令始终具有最高优先级**：

1. **用户的明确指令**（CLAUDE.md、GEMINI.md、AGENTS.md、直接请求）——最高优先级
2. **Superpowers 技能** ——在冲突处覆盖默认系统行为
3. **默认系统提示** ——最低优先级

如果 CLAUDE.md、GEMINI.md 或 AGENTS.md 说"不要使用 TDD"，而某个技能说"始终使用 TDD"，遵循用户的指令。用户拥有控制权。

## 如何访问技能

**在 Codex 中：** 使用 `Skill` 工具。当你调用一个技能时，其内容会被加载并呈现给你——直接遵循即可。绝不要用 Read 工具读取技能文件。

**在 Copilot CLI 中：** 使用 `skill` 工具。技能从已安装的插件中自动发现。`skill` 工具的工作方式与 Codex 的 `Skill` 工具相同。

**在 Hermes Agent 中：** 使用 `skill_view` 工具加载技能。Hermes 支持三级渐进式加载：`skills_list` 浏览 → `skill_view(name)` 加载完整内容 → `skill_view(name, path)` 查看引用文件。

**在 Gemini CLI 中：** 技能通过 `activate_skill` 工具激活。Gemini 在会话开始时加载技能元数据，并按需激活完整内容。

**在其他环境中：** 查看你的平台文档了解技能的加载方式。

## 平台适配

技能使用 Claude Code 的工具名称。非 CC 平台：查看 `references/copilot-tools.md`（Copilot CLI）、`references/hermes-tools.md`（Hermes Agent）、`references/codex-tools.md`（Codex）、`references/qoder-tools.md`（Qoder）了解工具对应关系。Gemini CLI 用户通过 GEMINI.md 自动获得工具映射。

## 核心原则：按需启用，避免过度工程

**根据任务复杂度选择技能，禁止简单任务小题大做：**

1. **简单修改 / 样式文案 / 单点配置**：主代理直接实现并轻量验证，**跳过一切技能流程**。
2. **只有需求不明确**：才调用 `brainstorming` 沟通对齐。
3. **只有跨文件复杂依赖**：才调用 `writing-plans` 输出步骤。
4. **只有排查困难疑难 Bug**：才调用 `systematic-debugging` 根因分析。
5. **默认不启用子代理**：主代理直接完成编码，杜绝层层分发带来的延迟与上下文丢失。

## 技能优先级

当多个技能可能适用时，使用此顺序：

1. **流程技能优先**（头脑风暴、调试）- 这些决定如何处理任务
2. **实现技能其次**（前端设计、mcp-builder）- 这些指导执行

"让我们构建 X" → 先头脑风暴，再使用实现技能。
"修复这个 bug" → 先调试，再使用领域特定技能。

## 中国特色技能路由

当检测到以下场景时，**必须**优先调用对应的中国特色技能：

| 场景 | 调用技能 |
|------|---------|
| 代码审查且团队使用中文沟通 | **superpowers:chinese-code-review** |
| 使用 Gitee/Coding/极狐 GitLab | **superpowers:chinese-git-workflow** |
| 编写中文技术文档或 README | **superpowers:chinese-documentation** |
| 编写 git commit message（中文项目） | **superpowers:chinese-commit-conventions** |
| 构建 MCP 服务器/工具 | **superpowers:mcp-builder** |

**判断依据：**
- 项目中有中文注释、中文 README、或 .gitee 目录 → 启用中文系列技能
- commit 历史中有中文 → 使用中文提交规范
- 用户用中文交流 → 所有输出使用中文，优先考虑中国特色技能

中国特色技能与翻译技能**叠加使用**，不互斥。例如：做代码审查时，同时使用 requesting-code-review（流程）+ chinese-code-review（风格）。

## 技能类型

**刚性的**（TDD、调试）：严格遵循。不要偏离纪律。

**灵活的**（模式）：根据上下文调整原则。

技能本身会告诉你它属于哪种。

## 用户指令

指令说明做什么，而非怎么做。"添加 X"或"修复 Y"不意味着跳过工作流。
