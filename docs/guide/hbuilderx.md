# HBuilderX 模板

本项目既可以作为普通 Git 仓库使用，也可以作为 HBuilderX 项目模板导入。

## 导入项目

1. 克隆或下载项目。
2. 使用 HBuilderX 打开项目根目录。
3. 等待插件和依赖初始化。
4. 在 `manifest.json` 中填写自己的 DCloud AppID。
5. 选择设备运行，或通过 `pnpm dev:*` 启动 CLI 工作流。

## 版本同步

项目固定了与编辑器对应的 `@dcloudio/*` 版本。编辑器升级后执行：

```bash
pnpm sync:hbuilderx
pnpm sync:hbuilderx --check
pnpm sync:hbuilderx --dry-run
```

`dev` 与 `build` 脚本会通过 `--ensure` 自动检查版本。版本不一致时先同步，不要直接修改编译产物。

## 推荐工作流

- 使用 VSCode / Cursor / Trae 编写代码。
- HBuilderX 在后台负责原生编译、基座和发行。
- CLI 启动前必须确保 HBuilderX 已打开。
- 不要同时让 IDE 和 CLI 抢同一份编译缓存。

## 模板创建

如果要基于本项目生成新项目，优先使用：

```bash
pnpm create unibestx my-app
```

脚手架会选择 UI 库、功能和演示分包，并生成干净的 Git 仓库。

