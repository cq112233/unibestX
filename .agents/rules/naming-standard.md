---
trigger: model_decision
description: 命名规范 —— 写新文件 / 新符号、或需要校验命名时按需加载
---

# naming-standard（Model Decision）

> 几乎所有代码都涉及命名，但不必次次常驻。**新建文件、新增导出、或用户要求「统一命名」时**按本文件校验。

## 文件与目录

| 对象 | 规则 | 例 |
| :--- | :--- | :--- |
| 页面目录 | kebab-case，与路由段一致 | `src/sub/order/list/` |
| 页面入口 | 与页面目录同名 | `src/sub/order/list/list.uvue` |
| 接口层 | 按业务模块聚合，按页面 / 接口域拆文件 | `src/api/order/list.uts` |
| 工具模块 | kebab-case 目录 + `index.uts` | `src/utils/systemInfo/index.uts` |
| 组件文件 | PascalCase | `GoodsGrid.uvue` |
| 类型文件 | `types.uts` / `<模块>.types.uts` | `src/api/order/types.uts` |
| 模拟数据集 | 默认内联在业务模块接口文件；过大才按接口域拆兄弟文件 | `LOCAL_WALLPAPERS` |

## 符号

| 对象 | 规则 | 例 |
| :--- | :--- | :--- |
| 类型 / 接口契约 | PascalCase，**必须 `type`** | `OrderItem`、`PageResult<T>` |
| 函数（普通） | camelCase，动词开头 | `formatAmount`、`loadPage` |
| 接口函数 | `fetchXxxListApi` / `fetchXxxDetailApi` / `createXxxApi` / `updateXxxApi` / `deleteXxxApi` | `fetchOrderListApi` |
| composable | `use` + PascalCase | `useThemeStore`、`useBackPressExit` |
| 常量 | UPPER_SNAKE | `PAGE_SIZE`、`LOCAL_ORDER_LIST` |
| 布尔变量 | `is` / `has` / `can` / `should` 开头 | `isLoading`、`hasMore` |
| 事件处理 | `on` + 名词 + 动作 | `onSelectTab`、`onOpenDetail` |
| 页面局部方法 | **加业务前缀**，避开框架全局名（`stop` / `effect` / `nextTick` / `trigger`） | `stopStream` 而非 `stop` |
| 枚举式常量对象 | PascalCase 键 + UPPER_SNAKE 值 | `TABBAR_STRATEGY_MAP.CUSTOM_TABBAR` |

## 禁止

- 拼音 / 中英混拼命名（`getShuJu`）。
- 无意义缩写（`d`、`tmp`、`obj1`）。
- 用 `_` 前缀表示「私有」——UTS 用 `private`；**仅未使用的函数入参**允许 `_event` / `_index`。
- 同一模块内 `list` / `data` / `items` 混用（选一个并在该模块内保持一致）。

---

> 📖 需要接口层的完整命名约定（DTO / 分页容器 / 数据集）→ 加载 **unibestX-skill 分册 6**；页面目录结构与分层命名 → **分册 5**。
