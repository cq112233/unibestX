---
trigger: always_on
description: unibestX 最高底线 —— 任何代码都不能违反的框架契约（极简，不写具体 API 用法）
---

# base-lines（Always On）

> 只写**违规即错**的底线。具体怎么用、有哪些参数、完整模板，一律查 `.agents/skills/unibestX-skill/`。

## 1. 运行环境

- **禁止浏览器 API**：`window`、`document`、`navigator`、`localStorage`、`history` 在 App 原生端不存在。样式用 `:style`，存储用 `uni.setStorageSync`，跳转用 `useRouter()`。
- **跨端判断两级分层**：
  - 常规业务分支 → 用 `@/src/config/env/platform.uts` 的 `isH5` / `isApp` / `isMpWeixin` 等常量走普通 `if`；
  - 端专属未声明符号（`window`、`my`、`wx`、`plus`）→ 必须 `// #ifdef ...` 物理隔离，普通 `if` 拦不住原生编译期符号解析（`error18`）。
- **条件编译标记永远不写斜杠前缀**，注释里也只写标记本身。

## 2. UTS 类型

- **禁止 `interface`**，对象结构一律 `type`。
- **禁止 `undefined`**，空值只用 `null`；联合只允许 `T | null`。
- **禁隐式 any / 隐式转换**：条件必须是显式布尔；`number` 与 `Array` 必须标注类型；函数参数与返回值必须标注。
- **基础类型比较只用 `==` / `!=`**，不用 `===`。
- **`as` 后面不写泛型实例化别名**（`as PageResult<Item>` ✅，`as FooPageResult` ❌，运行期 `ReferenceError`）。

## 3. 模板与样式底线

- **禁手写 HTML 标签与禁文本嵌套**：虽项目配置了 HTML 编译转换插件，但**未经开发者明确要求，一律严禁手写 `div`、`span`、`i`、`em`、`b` 等 HTML 标签**，必须直接使用 uni 原生 `<view>` 与 `<text>`；所有行内文本标签一律转为 `<text>`，且**严禁 `<text>` 嵌套 `<text>`**（原生渲染引擎报错或排版异常）。复合多色/不同字重文本必须使用 `<view class="flex flex-row flex-wrap">` 平铺并列兄弟 `<text>` 节点。
- **严禁模板裸写 prop**：`<template>` 中禁止直接裸写 prop 属性名（如 `:border="border"`），必须使用 `props.xxx` 或收敛为 `computed` 变量（鸿蒙 ArkTS 无法自动解构 prop 且易与内置属性冲突导致编译报错）。
- **条件指令单值化**：`v-if` / `v-else-if` / `v-show` 禁止包含 `&&` / `||` 复合逻辑表达式（如 `v-if="a && b"`），必须在 `<script setup>` 中收敛为单值 `computed` 计算属性（规避多端 AST 与小程序编译器语法告警）。
- **CSS 条件编译禁逻辑运算符**：CSS/SCSS 样式块中的条件编译严禁写 `||` / `&&`（只支持单平台宏如 `/* #ifdef APP-ANDROID */`，多条件不支持或会导致样式被重复注入引发对象序列化异常）。

## 4. 内置体系优先

- **不脱离 unibestX 内置能力**：系统信息、环境变量、Toast、路由、接口请求、通用算法，一律先用项目封装或 `uni_modules/` 生态库，不手写等价实现。
- **导入一律别名**：`@/src/...`、`@/uni_modules/...`，不相对穿透；保留 `.uts` 后缀；第三方模块只从其**公开入口**导入，不穿透内部文件。
- **禁止循环依赖**：`.uts` / `.ts` / `.js` 依赖必须保持单向 DAG，禁止直接或间接 `A → B → A`；`import`、`import type`、`export *` 与条件编译分支形成的依赖边一律计入。公共类型 / 常量 / 纯函数下沉到零依赖叶子文件（判定与正反例见 Skill 分册 1.22）。

## 5. 交付

- **声称「完成 / 已修复」前必须实际运行验证并给出输出**；未验证就如实说明。
- **未经开发者明确指示，不执行 `git commit` / `git push`**。
- **严禁擅自修改 `unibestX-skill`**（`SKILL.md` 与 `references/`），有异议只在回复中提建议。

## 6. AI 代码零新增 warning

- **存量 warning 不清理**：仓库已有的 ESLint / Stylelint warning 默认忽略，禁止以「顺手清理」为由扩大改动范围。
- **新增 warning 必须为 0**：AI 新建或修改的代码不得产生任何 warning，也不得让原文件的 warning 数量增加。
- **交付前必须校验**：对本次改动文件运行 ESLint，对含样式的改动文件运行 Stylelint；发现新增 warning 必须修到 0 才能交付。
- **禁止掩盖**：不得用大范围 `eslint-disable` / `stylelint-disable` 压掉 warning；确属框架误报时，只允许在命中行或单文件做精确豁免，并注明原因。

---

> 📖 **本文件只是底线开关，不含用法。**
> 需要类型定义、完整模板、正反例、踩坑结论时，用 Read 打开 `.agents/skills/unibestX-skill/SKILL.md` 定位分册，再读对应分册：
>
> - UTS 语法与类型 → 分册 1
> - 样式与布局 → 分册 2
> - 跨端运行时与真机报错 → 分册 3
> - 页面骨架 / 组件写法 / 生成流程 / 交付 → 分册 4
> - 页面结构编排（目录 / 分层 / 拆分 / 数据归属）→ 分册 5
> - 接口层写法（`http` / `useQuery` / mock） → 分册 6
> - 工具库与生态库速查 → 分册 7
> - 路由 `useRoute` / `useRouter` 手册 → 分册 8
> - TabBar 业务导航手册 → 分册 9
> - HTTP 网络层与异步状态 → 分册 10
> - 前端设计美学手册 → 分册 11
