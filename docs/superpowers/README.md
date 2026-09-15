# superpowers 文档约定

本目录是 **brainstorming / writing-plans 工作流**的产出落地处，由 AI Agent 与维护者共同写入：

| 子目录 | 内容 | 命名 |
| --- | --- | --- |
| `specs/` | 设计规格（brainstorming 产出） | `YYYY-MM-DD-<topic>-design.md` |
| `plans/` | 实现计划（writing-plans 产出） | `YYYY-MM-DD-<feature-name>.md` |

这些文档**会被 VitePress 编译进官网**（`docs/` 是 `srcDir`），因此正文必须满足 VitePress 的链接规则。下面这条是所有踩坑里唯一会导致**整站部署失败**的。

## 硬规则：不要写跳出 `docs/` 的相对链接

VitePress 把正文里的 markdown 链接解析成**站内路由**，不是文件系统路径。而 `srcDir` 是 `docs/`，一旦 `../` 跳出这个边界，目标位置不会产出任何页面（`.uts` / `.ts` 不是页面源文件），于是在打包阶段被判定为**死链**。

VitePress 默认 `ignoreDeadLinks: false`，会直接抛错中断构建 —— 也就是说，**一条越界链接就会让整个官网打包失败、GitHub Actions 变红**，本地 `dev` / `build:h5` 完全看不出来。

值得注意的是：`../../../src/xxx.uts` 这种写法在 **VS Code 和 GitHub 里是正确可点的**（文件确实存在），出错只在 VitePress 这一侧。所以不能靠「编辑器里能点开」来判断它对不对。

## 引用仓库源码：三种写法

**需要点击跳转 → 用 GitHub 绝对链接**

```markdown
[src/router/interceptor.uts](https://github.com/cq112233/unibestX/blob/main/src/router/interceptor.uts)
```

带行号时用 `#L` 锚点，与 GitHub 的锚点格式一致：

```markdown
[token.uts:122](https://github.com/cq112233/unibestX/blob/main/src/store/vdom/token.uts#L122)
```

这种写法在**编辑器、GitHub、官网三处都能点**，是首选。

**只是提及文件名 → 用行内代码**

```markdown
`src/router/interceptor.uts`
```

**禁止 → 相对路径跳出 `docs/`**

```markdown
[src/router/interceptor.uts](../../../src/router/interceptor.uts)
```

> ⛔ 上面这一行在实际文档里出现，就会让官网打包失败。

## 允许的链接

- **站内链接**：指向 `docs/` 内部的其他页面，用相对路径或 `/guide/xxx` 这类站内绝对路径都可以。例如 plan 里引用同目录的 spec。
- **外链**：任意 `https://` 地址。

## 提交前自检

```bash
pnpm docs:build
```

**退出码必须是 0**，且日志中不应出现 `dead link`。CI 的 `Deploy site to GitHub Pages` 跑的是同一条命令，本地先跑一次就能避免把红叉推上去。
