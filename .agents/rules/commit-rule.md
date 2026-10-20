---
trigger: model_decision
description: Git 提交规范 —— 只在用户要求提交 / 写 commit message 时按需加载
---

# commit-rule（Model Decision）

> 写代码时不需要常驻。**仅当用户明确要求提交**时按本文件执行。

## 前置

- **必须先得到用户明确指令**才执行 `git commit` / `git push`；本文件被加载不代表授权。
- 提交前跑：`pnpm lint && pnpm lint:style`（改动涉及 `.uvue` / `.uts` 时）。
- **禁止 `git add -A` / `git add .`**：`unpackage/` 虽已忽略，但 `dist/logs/` 等产物仍被跟踪，逐文件 `git add <path>`。

## 消息格式（Conventional Commits）

```text
<type>: <subject>

[optional body]
```

- **type**：`feat` / `fix` / `docs` / `style` / `refactor` / `perf` / `test` / `chore` / `build` / `ci` / `revert`
- **subject**：中文、动词开头、不超过 50 字、句末不加句号
- **body**（可选）：说明「为什么」与影响面，不逐条罗列改动

```text
feat: 调试无缝切换mock调试和真实接口
fix: 修复 tabbar 切换时下拉刷新卡死
docs: 更新 unibestX-skill 分册 8 路由手册
```

## 禁止

- 空 subject、纯符号、`update` / `修改` 这类无信息量的词。
- 把多件事塞进一个 commit（一个 commit 一个意图）。
- **如实描述**：没有验证过的改动不要在 message 里写「已验证 / 已修复」。

---

> 📖 需要提交钩子机制（`scripts/verify-commit-msg.mjs`）、分支拓扑说明 → 看仓库 `README.md` / `AGENTS.md`。
