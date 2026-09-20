# Superpowers-ZH 精简增强版（按需分级启用）

本项目配置了 Superpowers 技能框架与 uni-app X 专属规范。为了避免“小问题过度思考、流程冗长耗时”，严格执行以下**分级门槛规则与按需调用机制**。

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

## 技能按需启用策略

Skills 位于 `.agents/skills/` 目录。**坚决废除“哪怕 1% 可能性也强制调用”的旧规则，改为按需查阅：**

- **日常开发 / 快速迭代**：直接编写代码，遵循 UTS 强类型规范；
- **排查复杂 Bug**：按需参考 `systematic-debugging` 与 `verification-before-completion`；
- **专属特定指令**：仅在用户显式指定时触发对应的特殊 skill（如 `/chinese-code-review`、`/chinese-git-workflow` 等）。

## 项目规则与专属 Skills

- **AI / Agent 必读铁律**：所有参与本项目开发的 AI、Agent 在进行任何编码、重构、修 bug 或新增页面任务前，**必须首先完整阅读并严格遵循 `unibestX-skill`**（`.agents/skills/unibestX-skill/SKILL.md`）。
- **VDOM 与 Vapor 差异自动分类回写机制**：在开发或调试排错过程中，若遇到任何 UTS 语法、组件属性、生命周期、CSS 样式（如阴影、布局等）在 **VDOM 模式与 Vapor 模式不通用 / 存在渲染与表现差异** 的情况，AI / Agent **必须主动根据四维分类（语法规范、样式限制、运行时约束、快速对照表与红线清单）自动追加并同步到 `unibestX-skill/SKILL.md` 中**，严禁遗漏！
- **必须遵守** `.agents/rules/uniappx.md` 中的 uni-app X 开发规范。每次会话开始时先 Read 该文件，并在编写 `.uvue`、`.uts`、`.ts`、`.scss` 文件时严格遵循其中的规则。
- **一律禁止使用 `interface`**：在本项目中定义任何对象结构、状态、参数或返回值类型时，**一律禁止使用 `interface`**，**必须全部统一使用 `type`（类型别名）**，避免触发 UTS 底层对对象字面量赋值的 `UTS110111163` 编译错误。
