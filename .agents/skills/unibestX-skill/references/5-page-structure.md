# 5 页面结构编排标准（业务模块 · 页面 · 视图 · 数据归属）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：规划页面目录、确定业务模块归属、拆分页面区块、判断组件放在哪、决定谁可以发请求、确定接口文件落位时。
>
> **与其它分册的分工**：页面与组件的代码怎么写看**分册 4**；接口函数内部怎么写看**分册 6**；`http` / Query hooks 怎么用看**分册 10**。本分册只回答：**文件放哪、谁能取数、数据怎么流**。
>
> **30 秒速记**：TabBar 页与普通页一样，由 `src/pages/<page>/<page>.uvue` 直接承担根组件职责，**没有 `views/`**；非 TabBar 多页面可建议按业务模块聚合，但**已有页面不得擅自迁移、合并或改 URL**；`components/`、`common/`、`modules/` 全部按需创建，简单业务默认只写根页面；`modules/` 仅用于有独立状态或取数职责的复杂业务区块；只有根组件和模块组件能发请求；`modules/` 下不设 `common`；超过 2 个页面复用才提升到 `src/components/`；API 按业务模块聚合。

---

## 5.1 四层心智模型

```text
业务模块
  └── 页面
      └── 页面内业务区块
          └── 纯展示视图
```

其中 **TabBar 页面采用单页形态**：它不参与“同一业务模块多页面聚合”，目录与根组件写法仍和非 TabBar 页面一致。

```text
TabBar 页面        = 单页结构，根组件为 src/pages/<page>/<page>.uvue
非 TabBar 单页     = 直接放在 src/sub/<page>/
非 TabBar 多页面   = 聚合到 src/sub/<business-module>/<page>/
API                = 始终按业务模块聚合到 src/api/<business-module>/
```

---

## 5.2 三类页面与目录

### 1. TabBar 页面

TabBar 页面是单页业务，不建 `src/sub/<module>/` 式页面分组。

简单 TabBar 页面：

```text
src/pages/home/
└── home.uvue                    # 根组件：definePage + Tab 语义 + 页面内容 + 接口
```

页面较大、确实需要拆视图时：

```text
src/pages/order/
├── order.uvue                    # 根组件：页面结构 + Tab 语义 + 多模块共享接口
├── components/                   # 根组件直属视图，纯展示
│   ├── OrderHeader.uvue
│   └── OrderFilter.uvue
└── common/                       # 可选：页面级通用视图，纯展示
    ├── StatusTag.uvue
    └── SectionTitle.uvue
```

只有多个独立业务区块各自维护状态或请求时，才增加：

```text
src/pages/order/
└── modules/
    ├── order-list/
    │   ├── OrderListModule.uvue  # 模块组件，可调本模块接口
    │   └── components/           # 模块直属视图，纯展示
    │       ├── OrderCell.uvue
    │       └── OrderActions.uvue
    └── order-filter/
        ├── OrderFilterModule.uvue
        └── components/
            └── FilterChip.uvue
```

规则：

1. `order.uvue` 就是页面根组件，**可以发 HTTP**，不再拆入口薄壳。
2. TabBar 页不存在 `views/` 目录，也不生成 `views/<Page>View.uvue`。
3. 模式 4 的 Tab 页面用 `useTabPageShell(tabType)` 兼容“真实页面 / Tab 子页”双身份，用 `useTabPage()` 获取页面生命周期与虚拟路由。
4. 只有宿主首页使用 `TabPageHost` 承载全部 Tab；普通 Tab 页面不挂载 `TabPageHost` / `Tabbar`。
5. `modules/<block>/` 是页面内业务区块，不是独立页面，也不是业务模块目录。
6. `modules/` 下**不允许出现 `common/`**。
7. `components/`、`common/`、`modules/` 都是按需创建，不能为了结构完整提前建空目录。

### 2. 非 TabBar 单页

只有一个页面、没有同业务模块的其他页面时，直接放在 `src/sub/<page>/`。

简单页面默认只有根组件：

```text
src/sub/login/
└── login.uvue                    # 根组件：页面结构 + 接口
```

页面变大、但仍只有一个业务块，且确有复用或独立维护价值时，才拆纯展示视图；没有拆分需求时仍只保留 `login.uvue`：

```text
src/sub/login/
├── login.uvue                    # 根组件：页面结构 + 接口
└── components/
    ├── LoginForm.uvue            # 纯展示，Props / Emits
    └── LoginField.uvue           # 纯展示，Props / Emits
```

登录页通常只有一个业务块，**不要创建 `modules/login-form/`**。`modules/` 只留给确实存在多个独立业务区块、且各区块需要独立状态或请求的复杂页面。

### 3. 非 TabBar 多页面业务模块

新建页面时，如果它与**已存在的页面**同属一个业务模块，推荐结构是聚合到 `src/sub/<business-module>/`；但**必须先询问开发者是否采用聚合结构**，不得自行把存量页面搬进新模块目录。

> 🚨 **存量页面保护（强制）**：已有页面的路径就是线上 URL 契约。移动页面、修改目录层级或把多个页面合并到同一业务模块，都会改变 `pages.json` 中的路由；除非开发者明确同意，否则默认保持原路径不动。

询问时必须同时说明影响，例如：

```text
检测到已有页面 src/sub/order-list/order-list.uvue，新页面与它同属订单模块。
是否把新页面放到 src/sub/order/order-detail/？
现有页面默认不迁移，URL 保持 /src/sub/order-list/order-list；如需迁移旧页面，会改变 URL 并影响历史链接、分享地址和埋点。
```

开发者确认聚合后，推荐结构：

```text
src/sub/order/
├── list/
│   ├── list.uvue                 # 根组件
│   └── components/               # 可选：列表页私有视图
├── detail/
│   ├── detail.uvue               # 根组件
│   └── components/               # 可选：详情页私有视图
└── edit/
    ├── edit.uvue                 # 根组件
    └── components/               # 可选：编辑页私有视图
```

这里的 `list`、`detail`、`edit` 是三个页面，不是三个业务模块。

开发者选择不聚合时，新页面保持独立目录，不能为了结构整齐强行迁移存量页面；`src/api/<module>/` 仍可按业务模块统一组织，页面路径与 API 目录相互独立。

### 4. 页面形态总表

| 页面形态 | 页面目录 | 根组件 | 是否有 `views/` |
| :--- | :--- | :--- | :--- |
| TabBar 页面 | `src/pages/<page>/` | `<page>.uvue` | ❌ |
| 非 TabBar 单页 | `src/sub/<page>/` | `<page>.uvue` | ❌ |
| 非 TabBar 多页面 | `src/sub/<module>/<page>/` | `<page>.uvue` | ❌ |

---

## 5.3 页面内可选结构

页面内部只有以下位置，但**不要求每个页面都创建**：

```text
<page>/
├── <page>.uvue                  # 页面根组件（普通页与 TabBar 页相同）
├── components/                  # 可选：根组件直属视图，纯展示
├── common/                      # 可选：页面级通用视图，纯展示
└── modules/                     # 可选：复杂业务区块
    └── <block>/
        ├── <Block>Module.uvue   # 模块组件，可发本模块请求
        └── components/          # 模块直属视图，纯展示
```

### 1. 先做拆分决策

| 页面情况 | 推荐结构 | `components/` | `modules/` |
| :--- | :--- | :--- | :--- |
| 单一业务块，内容不多 | 只写根页面 | 不创建 | 不创建 |
| 单一业务块，但局部 UI 确有复用或独立维护价值 | 根页面 + `components/` 纯展示视图 | 按需创建 | 不创建 |
| 同一页面内有多个独立业务区块，各区块有独立状态 / 接口 / 分页 | 根页面 + `modules/<block>/` | 根组件仍有直属视图时才创建 | 创建 |
| 多个区块共用同一接口 | 根页面请求，Props 下发给各区块 | 按需创建 | 仅在区块确需独立业务职责时创建 |

判定顺序：

1. 先问是否只有一个业务块。是，则默认留在根页面；确有可复用或可独立维护的 UI 时才拆到 `components/`。
2. 再问拆出的区块是否需要独立请求、独立 loading、分页或筛选状态。否，则仍是纯展示视图；只有确有拆分价值时才放 `components/`。
3. 只有“多个独立业务区块 + 各自维护业务状态或取数”同时成立，才创建 `modules/`。
4. 不能因为页面有列表、表单、筛选区就机械创建 `modules/`；它们仍可能属于同一个业务块。

### 2. 目录职责

禁止：

```text
modules/common/                  # ❌ modules 下没有 common
common/<Block>Module.uvue        # ❌ common 不能承载业务模块
```

| 位置 | 职责 | 能否发 HTTP | 能否持有业务状态 |
| :--- | :--- | :--- | :--- |
| 页面根组件 | 页面结构、分区、跳转、单业务块取数、多区块共享接口 | ✅ | ✅ 页面数据 + 结构级状态 |
| `components/` | 可选：根组件直属视图，承接确有拆分价值的纯 UI | ❌ | ❌ |
| `common/` | 可选：当前页面内多处复用的纯展示视图 | ❌ | ❌ |
| `modules/<block>/<Block>Module.uvue` | 本区块接口、loading、分页、筛选 | ✅ 仅本区块接口 | ✅ 本区块数据 |
| `modules/<block>/components/` | 模块直属视图 | ❌ | ❌ |
| `src/components/` | 跨页面公共视图 | ❌ | ❌ |

---

## 5.4 取数边界

### 1. 只有两类文件可以发请求

```text
页面根组件
modules/<block>/<Block>Module.uvue
```

“发请求”包括直接调用 `src/api` 接口函数，也包括使用 `useQuery` / `useMutation`。

以下位置**一律禁止**调用接口、使用请求 hooks 或持有业务数据：

```text
components/
common/
modules/<block>/components/
src/components/
```

它们只接收 Props、抛出 Emits。

### 2. 单业务块接口

页面只有一个业务块时，由页面根组件直接请求，不为了请求再创建模块组件：

```text
login.uvue
├── useMutation(fetchLoginApi)
├── 持有表单提交状态
└── Props / v-model -> components/LoginForm.uvue
```

根组件保留页面数据与业务状态；`components/LoginForm.uvue` 只负责展示和抛事件。表单不复杂时直接写在 `login.uvue`，不创建 `components/`。

### 3. 复杂页面内的单模块接口

页面已经存在多个独立业务区块，且接口只服务其中一个模块时，才由该模块组件自己请求：

```text
OrderListModule.uvue
├── useQuery(fetchOrderListApi)
├── 持有 list / loading / page / hasMore
├── Props -> modules/order-list/components/OrderCell.uvue
└── Props -> common/StatusTag.uvue
```

根组件不代持该模块的 `list`、`loading`、分页或筛选条件。

### 4. 多模块共用接口

两个及以上模块使用同一个接口时，由页面根组件统一请求一次，再通过 Props 下发：

```text
OrderView.uvue
├── useQuery(fetchOrderSummaryApi)
├── Props -> OrderListModule(summary)
└── Props -> CouponModule(summary)
```

规则：

1. 根组件只请求一次，各模块不得重复请求同一接口。
2. 根组件持有共享接口的返回值。
3. 共享数据需要刷新时，由根组件重新请求，再下发新 Props。
4. 模块仍只维护自己的私有状态。

### 5. 页面之间的接口共享

两个页面使用同一接口不等于使用同一组件。接口可以共享，视图仍各自实现。

```text
src/sub/order/list/list.uvue
src/sub/order/detail/detail.uvue
        │
        └── 都可以调用 src/api/order/order.uts
```

---

## 5.5 组件拆分与提升

### 1. 组件位置

| 使用范围 | 位置 |
| :--- | :--- |
| 根组件专属视图 | 页面 `components/`（按需） |
| 当前页面多个视图共用 | 页面 `common/`（可选） |
| 页面内某个业务区块专属 | `modules/<block>/components/` |
| 页面内业务区块容器 | `modules/<block>/<Block>Module.uvue` |
| 超过 2 个页面共用 | `src/components/<Name>/<Name>.uvue` |

### 2. 超过 2 个页面才提升

按**独立页面数**计算，不按模板循环渲染次数计算。

| 页面数 | 处理方式 |
| :--- | :--- |
| 1 个页面 | 留在页面内部 |
| 2 个页面 | 不提升，继续留在各自页面内部 |
| 3 个及以上页面 | 提升到 `src/components/` |

`src/components/` 中全部是纯视图组件：

- 只接收 Props、抛出 Emits；
- 不调用接口；
- 不使用 `useQuery` / `useMutation`；
- 不持有业务数据。

如果只是接口相同、UI 不同，只共享 API，不抽公共组件。

### 3. 自定义弹窗

自定义 modal、dialog、drawer、action-sheet、遮罩详情弹窗必须抽成独立组件：

- 页面级弹窗放页面 `components/`（没有该目录时随弹窗一起创建）；
- 模块专属弹窗放 `modules/<block>/components/`；
- 弹窗不取数，只接收 Props、抛出 `@close` / `@save` 等事件。

### 4. 单文件上限

- 页面 / 组件单文件不超过 **500 行**。
- 超过 500 行时向下拆私有视图，或把纯逻辑抽到同目录 `.uts`。
- `src/api/` 接口文件不设行数上限，按接口域拆分。

---

## 5.6 API 目录结构

API 始终按**业务模块**聚合，不按 TabBar / 非 TabBar 分叉，也不按每个页面机械复制一套。

### 1. 单页业务

```text
src/api/login/
└── login.uts
```

### 2. 多页面业务模块

```text
src/api/order/
├── types.uts          # 被多个文件共用的类型
├── order.uts          # 多个页面共用的接口
├── list.uts           # 仅订单列表页使用
├── detail.uts         # 仅订单详情页使用
└── edit.uts           # 仅订单编辑页使用
```

对应关系：

```text
src/sub/order/list/list.uvue
    -> @/src/api/order/list.uts

src/sub/order/detail/detail.uvue
    -> @/src/api/order/detail.uts

src/sub/order/edit/edit.uvue
    -> @/src/api/order/edit.uts

多个页面共用
    -> @/src/api/order/order.uts
```

### 3. 拆分规则

| 场景 | 文件位置 |
| :--- | :--- |
| 业务模块只有一个页面 | `src/api/<module>/<module>.uts` |
| 某接口只服务一个页面 | `src/api/<module>/<page>.uts` |
| 多个页面共用同一组接口 | `src/api/<module>/<module>.uts` |
| 类型被两个以上文件共用 | `src/api/<module>/types.uts` |
| 接口域需要独立演进 | `src/api/<module>/<domain>.uts` |

禁止：

- 为了页面整齐把每个接口函数拆成单独文件；
- 所有页面接口都堆进一个巨型文件；
- 建立 `src/api/<module>/index.uts` 聚合入口；
- 页面目录内出现 `mock.uts` 或数据集文件。

所有引用一律精准导入：

```uts
import { fetchOrderListApi } from '@/src/api/order/list.uts';
import { fetchOrderDetailApi } from '@/src/api/order/detail.uts';
import type { OrderItem } from '@/src/api/order/types.uts';
```

---

## 5.7 路径与命名

### 1. 路径引用

- 页面目录内部使用相对路径，如 `./components/OrderHeader.uvue`。
- 页面目录之外一律使用 `@/src/...`。
- API 引用必须使用别名，如 `@/src/api/order/list.uts`。
- 第三方模块只从其公开入口导入。

### 2. 命名

| 对象 | 约定 | 示例 |
| :--- | :--- | :--- |
| 业务模块目录 | kebab-case | `src/sub/order/`、`src/api/order/` |
| 页面目录 | kebab-case | `src/sub/order/order-detail/` |
| 页面入口 | 与页面目录同名 | `order-detail.uvue` |
| 模块目录 | kebab-case | `modules/order-list/` |
| 模块组件 | PascalCase + `Module` | `OrderListModule.uvue` |
| 视图组件 | PascalCase | `OrderCell.uvue` |
| 接口文件 | 与页面或接口域同名 | `list.uts`、`detail.uts` |
| 接口函数 | `Api` 后缀 | `fetchOrderListApi` |

---

## 5.8 简单页面豁免

结构树不是强制脚手架。简单页面遵守以下规则：

1. 单一业务块默认内容直接写在根组件中；不超过 500 行时不拆。
2. 不提前创建空的 `components/`、`common/`、`modules/`。
3. 自定义弹窗仍必须抽组件。
4. 超过 500 行或局部 UI 复杂时，优先拆到页面 `components/`，不要因此创建 `modules/`。
5. 只有出现多个独立业务区块，且区块需要独立状态或取数时，才创建 `modules/`。
6. 拆完后根组件仍要保留页面骨架，不能只剩一个模块标签。

---

## 5.9 结构速查

| 问题 | 答案 |
| :--- | :--- |
| TabBar 页面怎么放？ | `src/pages/<page>/<page>.uvue` 直接作为根组件 |
| TabBar 页面有 `views/` 吗？ | 没有；与普通页一致，不拆入口薄壳 |
| TabBar 页面能发 HTTP 吗？ | 可以；它就是页面根组件 |
| TabBar 页面怎么接页面语义？ | 用 `useTabPageShell(tabType)` + `useTabPage()` |
| 模式 4 的宿主容器放哪？ | 只在宿主首页使用 `TabPageHost`；普通 Tab 页不挂载 |
| 非 TabBar 单页怎么放？ | `src/sub/<page>/<page>.uvue` |
| 同一业务模块多个非 TabBar 页面怎么放？ | `src/sub/<module>/<page>/<page>.uvue` |
| 新增页面与已有页面同属一个业务模块怎么办？ | 先询问是否聚合；已有页面默认原位保留，未经确认不得移动或改 URL |
| 简单页面要建哪些目录？ | 只建根页面，不预建空目录 |
| 页面变大但只有一个业务块怎么办？ | 默认仍写根页面；确有可复用或可独立维护的 UI 时才用 `components/` |
| 什么时候创建 `modules/`？ | 多个独立业务区块各自需要状态或取数时 |
| 页面根组件直属视图放哪？ | `components/` |
| 页面级通用视图放哪？ | `common/`（可选） |
| 页面内业务区块放哪？ | `modules/<block>/<Block>Module.uvue` |
| 模块直属视图放哪？ | `modules/<block>/components/` |
| `modules/` 下有 `common` 吗？ | 没有 |
| 谁能发 HTTP？ | 页面根组件、模块组件 |
| 两个模块共用接口怎么办？ | 根组件请求一次，Props 下发 |
| 组件何时提升到 `src/components/`？ | 超过 2 个页面使用，即第 3 个页面开始 |
| 公共组件能发请求吗？ | 不能，只做纯展示 |
| API 怎么组织？ | 按业务模块聚合到 `src/api/<module>/` |
| API 目录能建 `index.uts` 聚合吗？ | 不能，使用精准导入 |
| 页面 / 组件最大多少行？ | 500 行 |

---

## 5.10 自检红线清单

- [ ] **1. 页面形态判定**：TabBar 页与普通页都由 `<page>.uvue` 承担根组件，均没有 `views/`。
- [ ] **2. TabBar 根组件**：`src/pages/<page>/<page>.uvue` 可直接发 HTTP，并用 `useTabPageShell(tabType)` + `useTabPage()` 接入 TabBar 页面语义。
- [ ] **3. 业务模块聚合**：新增页面可按 `src/sub/<module>/` 聚合，但已有页面未经开发者确认不得迁移或合并。
- [ ] **4. 页面内结构**：只使用 `components / common / modules` 这些约定位置；三者均按需创建，简单页可以只有根组件。
- [ ] **5. 模块目录**：`modules/` 下只有业务区块，不存在 `common/`。
- [ ] **6. 取数边界**：只有页面根组件与模块组件调用接口或使用请求 hooks。
- [ ] **7. 纯展示边界**：`components/`、`common/`、模块 `components/`、`src/components/` 都不取数。
- [ ] **8. 共享接口上提**：两个及以上模块共用接口时，由根组件请求一次并 Props 下发。
- [ ] **9. 模块数据自持**：使用 `modules/` 时，模块独有接口、loading、分页、筛选只由该模块维护；单业务块仍由根页面维护。
- [ ] **10. 组件提升门槛**：超过 2 个页面使用才进入 `src/components/`。
- [ ] **11. 公共组件纯展示**：`src/components/` 只接收 Props、抛出 Emits。
- [ ] **12. API 按模块聚合**：接口位于 `src/api/<module>/`，不按页面机械复制目录。
- [ ] **13. API 精准导入**：使用具体 `.uts` 文件，不建 `index.uts` 聚合入口。
- [ ] **14. 无页面数据集**：页面目录无 `mock.uts`，页面 / 组件无硬编码假数据。
- [ ] **15. 不为拆而拆**：单一业务块默认留在根页面；`components/` 也只在确有复用或独立维护价值时创建，不为了拆视图而创建 `modules/`。
- [ ] **16. 弹窗组件化**：自定义弹窗放在对应 `components/` 中，不内联在根组件。
- [ ] **17. 文件行数**：页面 / 组件不超过 500 行；API 文件按接口域拆分。
- [ ] **18. 存量页面保护**：新增页面与已有页面同属业务模块时，必须先询问是否聚合；未经明确同意，不得移动存量页面、修改其目录层级或改变既有 URL。
