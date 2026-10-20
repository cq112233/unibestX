---
trigger: always_on
description: unibestX 最高底线 —— 任何代码都不能违反的框架契约（极简，不写具体 API 用法）
---

# base-lines（Always On）

> 只写**违规即错**的底线。具体怎么用、有哪些参数、完整模板，一律查 `.claude/skills/unibestX-skill/`（物理源 `.agents/skills/unibestX-skill/`，两者同一份）。

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

## 3. 内置体系优先

- **不脱离 unibestX 内置能力**：系统信息、环境变量、Toast、路由、接口请求、通用算法，一律先用项目封装或 `uni_modules/` 生态库，不手写等价实现。
- **导入一律别名**：`@/src/...`、`@/uni_modules/...`，不相对穿透；保留 `.uts` 后缀；第三方模块只从其**公开入口**导入，不穿透内部文件。

## 4. 交付

- **声称「完成 / 已修复」前必须实际运行验证并给出输出**；未验证就如实说明。
- **未经开发者明确指示，不执行 `git commit` / `git push`**。
- **严禁擅自修改 `unibestX-skill`**（`SKILL.md` 与 `references/`），有异议只在回复中提建议。

---

> 📖 **本文件只是底线开关，不含用法。**
> 需要类型定义、完整模板、正反例、踩坑结论时，用 Read 打开 `.claude/skills/unibestX-skill/SKILL.md` 定位分册，再读对应分册：
> - UTS 语法与类型 → 分册 1
> - 样式与布局 → 分册 2
> - 跨端运行时与真机报错 → 分册 3
> - 页面骨架 / 组件写法 / 生成流程 / 交付 → 分册 4
> - 页面结构编排（目录 / 分层 / 拆分 / 数据归属）→ 分册 5
> - 接口层写法（`http` / `useQuery` / mock） → 分册 6
> - 工具库与生态库速查 → 分册 7
> - 路由 `useRoute` / `useRouter` 手册 → 分册 8
