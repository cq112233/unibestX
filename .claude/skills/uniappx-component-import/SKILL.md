---
name: uniappx-component-import
description: 编写/修改 uni-app X 的 .uvue 文件、使用或导入任何组件时使用——所有组件必须手动 import（不能依赖 easycom 自动导入），标签与 import 名用一致的 PascalCase，否则蒸汽(云)打包后组件丢失/白屏
---

# uni-app X 组件必须手动 import

## 核心约定

1. **凡是 `<template>` 里用到的组件，必须在 `<script>` 里手动 `import`**（uni_modules 组件 + `src/components` 自定义组件）。**禁止依赖 easycom 自动导入**（也就是直接写小写标签 `<uni-icons>` 却不 import 的那种写法）。
2. **为什么**：依赖 easycom 自动导入时，**蒸汽(云)打包不会把组件打进出包产物**，运行后组件丢失 / 渲染空白。手动 import 才能保证组件被打进产物。
3. **import 名与标签都用 PascalCase 且一致**：`import UniIcons → <UniIcons>`。不要写小写标签 `<uni-icons>`，避免命中 easycom 自定义规则（如 `^e-chart$`）导致混用、打包异常。
4. **保留 pages.json 的 easycom 配置，不要删**：`autoscan: true` 是 uni_modules 内部互相引用（如 `z-paging-x` → `z-paging-x-empty`）所必需；自定义规则 `^NavBar$`、`^e-chart$` 也保留。src 里对用到的组件手动 import 即可覆盖、正确打进产物。

## 常用组件 import 路径

```ts
import UniIcons    from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue'
import LIcon       from '@/uni_modules/lime-icon/components/l-icon/l-icon.uvue'
import EChart      from '@/uni_modules/e-chart/components/e-chart/e-chart.uvue'
import LSignature  from '@/uni_modules/lime-signature/components/l-signature/l-signature.uvue'
import ZPagingX    from '@/uni_modules/z-paging-x/components/z-paging-x/z-paging-x.uvue'
```

用法（标签和 import 名一致）：

```html
<UniIcons type="paperplane-filled" size="18" color="#ffffff"></UniIcons>
```

## 红线（出现即视为违反）

- 模板里出现 `<uni-icons>` / `<l-icon>` / `<e-chart>` / `<z-paging-x>` / `<l-signature>` 等小写标签而 `<script>` 里没有手动 import。
- 用了组件但该文件 `<script>` 没有对应的 `import Xxx from '@/uni_modules/...'`。
- 「组件是 easycom 自动导入的，不用 import」——这是过去 `.agents/rules/uniappx.md` 第 3 节写过的旧想法（现已翻转），本次就是要彻底消除它。

## 检查命令

```bash
# src 中不应残留任何小写 easycom 组件标签（期望输出为空）
rg -n --glob '*.uvue' '<(uni-icons|l-icon|e-chart|z-paging-x|l-signature)\b' src
```

每写完一个 `.uvue`：用了哪个组件 → 确认该文件有没有对应的手动 import，没有就补上。

## 参考

完整 uni-app X 开发规范见 `.agents/rules/uniappx.md`（`trigger: always_on`，自动加载，含本规则的权威表述）。
