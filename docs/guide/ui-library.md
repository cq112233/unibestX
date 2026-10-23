# UI 库选型篇

`unibestX` 采用多分支策略，不把某个 UI 库强绑定到核心模板。选型前先确认项目的维护周期、设计规范和跨端要求。

## 三个选择

| 方案 | 分支 | 适合场景 |
| :--- | :--- | :--- |
| 无 UI 库 | `main` | 需要完全自定义设计系统，只使用原生组件 + Tailwind |
| Rice UI | `uniX-rice-ui` | 希望开箱即用、持续维护、Vapor / VDOM 双模式 |
| uview-ultra | `uniX-uview-ultra` | 已有 uview 使用经验，接受基础组件能力 |

## 选型建议

- 新项目、长期维护：优先评估 **Rice UI**。
- 设计规范强、组件高度定制：使用 `main` 纯净基线。
- 存量 uview 项目迁移：评估 `uniX-uview-ultra` 的兼容成本。
- 不要在同一项目里混装两套完整 UI 库，容易出现样式、主题和命名冲突。

## 创建对应项目

```bash
# 纯净基线
npx degit cq112233/unibestX my-app

# Rice UI
npx degit cq112233/unibestX#uniX-rice-ui my-app

# uview-ultra
npx degit cq112233/unibestX#uniX-uview-ultra my-app
```

也可以在 `create-unibestx` 交互式脚手架中直接选择 UI 方案。

