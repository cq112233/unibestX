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

- **AI / Agent 必读铁律**：所有参与本项目开发的 AI、Agent 在进行任何编码、重构、修 bug 或新增页面任务前，**必须首先完整阅读并严格遵循 `unibestX-skill`**（`.claude/skills/unibestX-skill/SKILL.md`）。该 Skill 为**「1 个入口 + 8 个分册」**结构：入口 `SKILL.md` 只常驻「概述 + 分册导航 + 3.3 对照表 + 3.4 红线清单」，正文细节在 `references/` 下的 8 个分册（`1.1-uts-syntax` / `1.2-styling` / `1.3-runtime` / `2-examples` / `3-codegen` / `4-utils` / `5-infra` / `6-page-component-spec`）；命中导航或速查表条目时，**必须继续 Read 对应分册**核对完整正反例，不得只看入口结论就改代码。
- **内置工具优先复用**：动手实现任何通用能力（取路由与路径、取主题色、读环境变量、多语言文案、提示弹窗、返回键接管、下拉刷新与导航栏控制、文件上传、系统与安全区尺寸、防抖节流与流式处理、LaTeX 公式排版）之前，**必须先查 `unibestX-skill/references/4-utils.md`**，`src/utils/` 下已有 10 个现成模块可直接调用，严禁重复造轮子（如自己写 `uni.getSystemInfoSync()`、裸写 `setInterval` 做防抖、直接读 `import.meta.env.VITE_XXX`）。
- **基础设施按既有配置走**：发起接口请求（**严禁自己写 `uni.request`**，鉴权头 / 业务码判定 / 401 跳登录都在 `src/http/request.uts` 的拦截器里）、做 SSE 打字机输出、改登录拦截与登录策略、**选页面 `layout` 或配 `definePage` 导航栏字段**、增改多语言文案之前，**必须先查 `unibestX-skill/references/5-infra.md`**。特别注意：**任何 `layout: 'navbar'` 的页面，`style.navigationStyle` 必须显式写 `'custom'`**，漏写会让导航栏、返回箭头、状态栏占位**静默消失且不报错**。
- **必须遵守** `.agents/rules/uniappx.md` 中的 uni-app X 开发规范。每次会话开始时先 Read 该文件，并在编写 `.uvue`、`.uts`、`.ts`、`.scss` 文件时严格遵循其中的规则。
- **一律禁止使用 `interface`**：在本项目中定义任何对象结构、状态、参数或返回值类型时，**一律禁止使用 `interface`**，**必须全部统一使用 `type`（类型别名）**，避免触发 UTS 底层对对象字面量赋值的 `UTS110111163` 编译错误。
