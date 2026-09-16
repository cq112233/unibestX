# 六、AI 页面层级与组件设计规范（页面内聚 · 容器/视图分离 · Mock 接口化 · 真实接口映射）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：当 AI 助手或开发者**规划新页面结构、拆分复杂页面组件、组织页面级公共视图、编写模块私有视图，以及设计 Mock 模拟数据或对接后端真实接口时**，必须首先阅读并严格遵循本分册。
>
> **核心定位**：针对 AI 容易陷入的“万行单文件”或“过度碎裂拆分”两大极端，制定出**「高内聚自包含、最多三级封顶、容器与展示视图严格解耦、Mock 接口契约化、后端接口同名收拢」**的标准架构范式。

---

## 6.1 核心设计哲学与六大铁律

```mermaid
graph TD
    Page[L0: 页面入口 Page/View<br>definePage / 布局接管 / 下拉刷新]
    Page --> Common[L-Common: 页面通用纯展示<br>components/common/<br>卡片外壳/标题栏/装饰器<br>❌ 严禁调接口 ❌ 不做业务逻辑]
    Page --> ModuleA[L1: 模块 A 业务容器<br>components/A/A.uvue<br>✅ 允许调接口 (mock.uts / src/api/)<br>✅ 状态管理 / loading / 分页]
    Page --> ModuleB[L1: 模块 B 业务容器<br>components/B/B.uvue<br>✅ 允许调接口 (mock.uts / src/api/)<br>✅ 状态管理 / loading / 分页]

    ModuleA --> A1[L2: 模块 A 私有视图 1<br>A/components/A-1.uvue<br>纯展示 / Props 接收]
    ModuleA --> A2[L2: 模块 A 私有视图 2<br>A/components/A-2.uvue<br>纯展示 / Emits 抛出]

    ModuleB --> B1[L2: 模块 B 私有视图 1<br>B/components/B-1.uvue<br>纯展示 / Props 接收]
    ModuleB --> B2[L2: 模块 B 私有视图 2<br>B/components/B-2.uvue<br>纯展示 / Emits 抛出]

    MockData[(契约蓝本: 页面模拟接口<br>src/pages/page/mock.uts<br>纯 UTS 仿后端 Promise 异步)] -.->|开发调试期| ModuleA
    RealApi[(生产接口: 全局 API 层<br>src/api/page/page.uts<br>http.get / http.post 真实请求)] -.->|后端就绪无缝迁移| ModuleA
```

### 铁律 1：页面高内聚、自包含（Zero External Component Leaks）

- **尽量一个页面中不要用外部的公共组件**：除全项目通用的组件库（`uni_modules` 中的 `uni-icons`、`e-chart`、`z-paging-x` 等）以及全局通用布局（`NavBar`）外，所有页面业务相关的组件必须**严格内聚在当前页面自身的 `components/` 目录下**。
- **严禁跨页面借用组件**：严禁在 `src/pages/index/` 中通过相对路径引用 `src/pages/mall/components/` 或 `src/pages/ai/components/` 中的零碎业务组件。如果发现某组件需要在 3 个以上不同业务页面完全无差别复用，方可由资深架构师评估后提升至 `src/components/`。

### 铁律 2：严禁过度拆分组件（三级封顶，防套娃碎裂）

- 页面组件拆分必须克制，层级**严格限制为最多 3 级**：
  $$\text{页面入口 (Page)} \longrightarrow \text{业务模块容器 (A / B)} \longrightarrow \text{私有叶子视图 (A-1 / A-2)}$$
- **严禁在叶子视图下方继续嵌套组件目录**（如严禁创建 `A-1/components/A-1-1.uvue`）；
- 单个组件代码行数在 **150 ~ 250 行以内**时，强烈建议直接写在单一组件内部，避免过度抽象带来的 Props 钻孔（Props Drilling）与调试定位困难。

### 铁律 3：容器与展示视图严格分离（Smart Container vs Dumb View）

- **L1 业务容器（`A.uvue`、`B.uvue`）**：
  - 是业务模块的**唯一决策中心**；
  - **唯一允许调用接口**（调用当前页面 `mock.uts` 或 `src/api/<page>/<page>.uts` 的 Promise 异步函数）；
  - 维护局部响应式状态（`loading`、`list`、`page`、`tabIndex` 等）；
  - 向下通过 Props 单向分发纯净数据，通过监听 Emits 事件响应子组件的用户交互。
- **L2 模块私有叶子视图（`A/components/A-1.uvue`、`B/components/B-1.uvue`）**：
  - **只做视图，不做逻辑**；
  - **严禁调用任何接口与异步请求**；
  - 纯粹通过 `defineProps` 接收数据并完成排版、CSS 样式渲染；通过 `defineEmits` 向上反馈交互事件。
- **L-Common 页面级公共组件（`components/common/common1.uvue`）**：
  - 仅用于在**当前页面内部**被模块 A、模块 B 等多处复用（如通用的卡片外壳 Card、通用的标题装饰栏 SectionHeader、通用空状态 Empty）；
  - **只做视图，不做逻辑，严禁调用接口**；保持高度纯粹，不绑定任何特定业务模型。

### 铁律 4：模拟数据（Mock）必须抽离成后端接口方式

- 模拟数据严禁在 `.uvue` 组件或页面内部直接通过 `ref([...])` 硬编码写死；
- 页面私有模拟数据统一收敛在 `src/pages/<page>/mock.uts`（如 `src/pages/ai/mock.uts`）；
- 模拟数据必须使用 `type` 定义强类型契约，并封装为**返回 `Promise<T>` 的标准仿后端接口函数**（如 `Promise.resolve(MOCK_DATA)`）；
- 容器组件调用 `mock.uts` 与调用真实后端接口写法 100% 一致。后期后端接口就绪时，页面业务逻辑层 0 改动，实现无缝演进。

### 铁律 5：生成的代码，逻辑代码必须全部加上清晰中文注释

- **所有生成的业务逻辑代码，必须附带结构清晰的中文注释**：
  - **响应式状态（ref / computed）**：必须注明该状态的业务含义（如：`// 是否处于下拉刷新状态`、`// 当前选中的分类 key`）；
  - **业务逻辑与异步函数**：必须使用 JSDoc 或单行注释说明其职责、入参及调用时序（如：`/** 加载本模块商品列表，支持分页追加 */`）；
  - **核心分支与边界处理**：`if-else` 兜底、错误捕获（`catch`）、事件回调的执行逻辑必须有明确意图说明；
  - **组件属性与通信声明**：`defineProps` 与 `defineEmits` 的每个字段与事件必须附带中文说明；
- 严禁生成毫无注释的“裸逻辑”代码，确保代码资产具备工业级的可维护性与易读性。

### 铁律 6：生态工具与模块方法优先（Utils & uni_modules First）

- **在实现任何业务功能或页面交互时，凡是 `src/utils/` 和 `uni_modules/` 中已有现成方法或能力的，必须绝对优先使用，严禁自行重复造轮子**：
  - **基础与业务工具（`src/utils/`）**：
    - 路由跳转与传参：优先使用 `src/utils/route/index.uts`（`router.push`、`router.replace`、`router.back`）；
    - 主题色读取与切换：优先使用 `src/utils/theme/index.uts`（`themeColor`、`setTheme`）；
    - 弹窗与交互反馈：优先使用 `src/utils/toast/index.uts`（`showSuccess`、`showError`、`showLoading` 等）；
    - 国际化文案读取：优先使用 `src/utils/i18n/index.uts`（`$t`、`t`）；
    - 视口与安全区尺寸：优先使用 `src/utils/systemInfo/index.uts`（`availableHeight`、`systemInfo`）；
    - 下拉刷新与触底：优先使用 `src/utils/refresh/index.uts`（`onNavbarPullDownRefresh`、`stopNavbarPullDownRefresh`）；
    - 物理返回键接管：优先使用 `src/utils/backPress/index.uts`（`handleBackPressExit`）；
    - 文件/图片上传：优先使用 `src/utils/upload/index.uts`（`uploadFile`）；
    - 防抖/节流与响应式流：优先使用 `src/utils/rxjs-lite/index.uts`；
  - **组件库生态（`uni_modules/`）**：
    - 图标：优先使用 `<uni-icons>` 或 `<lime-icon>`；
    - 标签与滑动列表：优先使用 `<up-tabs>`、`<up-scroll-list>`；
    - 复杂图表：优先使用 `<e-chart>`；
    - 分页下拉/触底：优先使用 `<z-paging-x>`；
    - 富文本渲染与编辑：优先使用 `<mp-html>` 与 `<sp-editor>`；
    - 二维码与手写签名：优先使用 `<lime-qrcode>` 与 `<lime-signature>`；
    - 折叠面板与评分：优先使用 `<uni-collapse-x>` 与 `<uni-rate-x>`。
- 严禁脱离项目现成成熟资产去手写原生重复实现或引入未经兼容性验证的外部库。

---

## 6.2 标准目录拓扑与接口文件映射

以首页 `src/pages/index/` 与商城页 `src/pages/mall/` 为例，标准目录层级、文件职责及与 `src/api/` 的映射关系如下：

```text
src/
├── api/                            # 【全局生产接口目录】
│   ├── index/                      # 对应 src/pages/index 页面
│   │   └── index.uts               # ★ 根据页面名称命名的后端真实接口文件
│   └── mall/                       # 对应 src/pages/mall 页面
│       └── mall.uts                # ★ 根据页面名称命名的后端真实接口文件
│
└── pages/
    └── index/
        ├── index.uvue              # 【L0: 页面入口】definePage 声明、布局接管、下拉刷新调度、全局生命周期
        ├── mock.uts                # 【Data: 模拟接口层】契约蓝本，提供 type 定义与仿后端 Promise 异步接口
        ├── views/                  # 【可选视图承载】复杂主视图组件 (如 IndexView.uvue)
        └── components/             # 【页面内聚组件根目录】(严禁暴露给外部页面)
            ├── common/             # 【L-Common: 页面级公共纯展示组件】(只做视图，不做逻辑，严禁调接口)
            │   ├── common1.uvue    #   例：通用的卡片包边壳 (CardWrapper)
            │   └── common2.uvue    #   例：通用的分段小标题栏 (SectionHeader)
            ├── A/                  # 【L1: 业务模块 A 容器】(可调接口，管理局部状态)
            │   ├── A.uvue          #   ★ 业务容器：调用 mock/api 接口，组装 common 与私有子视图
            │   └── components/     # 【L2: 模块 A 私有子视图】(只做视图，不做逻辑，严禁调接口)
            │       ├── A-1.uvue    #     例：顶部 Banner 轮播展示
            │       └── A-2.uvue    #     例：金刚区快捷入口网格
            └── B/                  # 【L1: 业务模块 B 容器】(可调接口，管理局部状态)
                ├── B.uvue          #   ★ 业务容器：调用 mock/api 接口，维护分页与 loading，组装子视图
                └── components/     # 【L2: 模块 B 私有子视图】(只做视图，不做逻辑，严禁调接口)
                    ├── B-1.uvue    #     例：瀑布流筛选分类栏
                    └── B-2.uvue    #     例：商品双列卡片瀑布流
```

---

## 6.3 标杆代码落地参考范式

### 1. 【Data 层】`src/pages/index/mock.uts`（模拟数据抽离为后端接口契约）

```uts
// ==========================================
// 1. 数据模型定义（全部使用 type，严禁使用 interface 避免原生编译报错）
// ==========================================

/** 模块 A 单项数据结构 */
export type IModuleAItem = {
  id: number;
  name: string;
  badge: string;
  imageUrl: string;
};

/** 模块 A 查询入参结构 */
export type IModuleAQuery = {
  category?: string | null;
};

// ==========================================
// 2. 本地模拟数据集（集中私有化管理，严禁在 UI 组件内硬编码）
// ==========================================

const MOCK_A_LIST: IModuleAItem[] = [
  { id: 1, name: 'AI 问答助手', badge: 'NEW', imageUrl: '/static/icons/ai.png' },
  { id: 2, name: '文生图画廊', badge: 'HOT', imageUrl: '/static/icons/draw.png' },
  { id: 3, name: '代码助手', badge: 'PRO', imageUrl: '/static/icons/code.png' }
];

// ==========================================
// 3. 仿后端接口函数（统一返回 Promise<T>，与真实 API 签名 100% 对齐）
// ==========================================

/**
 * 获取模块 A 列表数据（模拟接口）
 * @param _query 查询过滤入参
 * @returns 包含模块 A 列表的 Promise
 */
export function fetchModuleAList(_query: IModuleAQuery | null = null): Promise<IModuleAItem[]> {
  // 返回 Promise，完全拟真网络异步延迟与通信规范
  return Promise.resolve(MOCK_A_LIST);
}
```

---

### 2. 【L-Common 页面公共纯展示组件】`components/common/common1.uvue`

```html
<template>
  <!-- 通用卡片外壳：只负责卡片圆角、背景、微边框与统一边距，严禁任何接口调用或复杂业务状态 -->
  <view class="w-full bg-[#ffffff] rounded-[12px] p-[14px] border-[1px] border-solid border-[#f1f5f9] mb-[12px]">
    <!-- 标题栏区域 -->
    <view v-if="title != null && title!.length > 0" class="flex flex-row items-center justify-between mb-[10px]">
      <text class="text-[15px] font-bold text-[#1e293b]">{{ title }}</text>
      <!-- 右侧扩展插槽（如“更多”按钮、状态标签等） -->
      <slot name="extra" />
    </view>
    <!-- 内容默认插槽 -->
    <slot />
  </view>
</template>

<script setup lang="uts">
// 只接收纯展示所需的属性，不做业务判断
defineProps<{
  /** 卡片标题文本 */
  title?: string | null;
}>();
</script>
```

---

### 3. 【L2 模块私有纯展示视图】`components/A/components/A-1.uvue`

```html
<template>
  <!-- 纯展示视图：仅依据 props 进行排版渲染，用户交互统一向外 emit，严禁直接修改数据 -->
  <view class="flex flex-row flex-wrap">
    <view
      v-for="item in items"
      :key="item.id"
      class="flex flex-row items-center px-[10px] py-[6px] bg-[#f8fafc] rounded-[8px] mr-[8px] mb-[8px]"
      @click="handleItemClick(item)"
    >
      <text class="text-[13px] text-[#334155]">{{ item.name }}</text>
      <text class="text-[10px] text-[#2563eb] font-bold ml-[4px]">{{ item.badge }}</text>
    </view>
  </view>
</template>

<script setup lang="uts">
import type { IModuleAItem } from '../../mock.uts';

// 1. 严格通过 defineProps 接收来自容器分发的数据
defineProps<{
  /** 待渲染的功能项列表 */
  items: Array<IModuleAItem>;
}>();

// 2. 交互向外抛出事件，子组件内部严禁修改上层传递的数据
const emit = defineEmits<{
  /** 点击某个功能项时向父级容器抛出 */
  (e: 'select', item: IModuleAItem): void;
}>();

/**
 * 处理单项点击交互
 * @param item 当前点击的项数据
 */
function handleItemClick(item: IModuleAItem): void {
  emit('select', item);
}
</script>
```

---

### 4. 【L1 模块业务容器】`components/A/A.uvue`

```html
<template>
  <!-- 复用页面公共卡片组件 common1 -->
  <common1 title="AI 功能矩阵">
    <!-- 状态 1: 数据正在加载中 -->
    <view v-if="loading" class="py-[16px] items-center justify-center">
      <text class="text-[12px] text-[#94a3b8]">正在加载数据...</text>
    </view>

    <!-- 状态 2: 加载完成，组装私有子视图 A-1，单向灌入数据并监听交互事件 -->
    <A1
      v-else
      :items="listData"
      @select="onItemSelect"
    />
  </common1>
</template>

<script setup lang="uts">
import { ref, onMounted } from 'vue';
// 引入页面公共展示组件与模块私有展示组件
import common1 from '../common/common1.uvue';
import A1 from './components/A-1.uvue';

// 引入接口层（开发阶段自 mock.uts 导入；对接后端时可直接无缝切换为 @/src/api/index/index.uts）
import { fetchModuleAList } from '../../mock.uts';
import type { IModuleAItem } from '../../mock.uts';

// 引入项目全局现成工具（优先使用 utils）
import { showSuccess } from '@/src/utils/toast/index.uts';

// ==========================================
// 业务响应式状态管理（由 L1 容器组件唯一切入掌控）
// ==========================================

/** 是否正在加载接口数据 */
const loading = ref<boolean>(false);

/** 模块 A 的数据列表 */
const listData = ref<Array<IModuleAItem>>([]);

// ==========================================
// 业务逻辑与接口调用
// ==========================================

/**
 * 发起接口请求，拉取模块 A 业务数据
 */
function loadData(): void {
  loading.value = true;
  fetchModuleAList()
    .then((data: Array<IModuleAItem>): void => {
      // 成功获取数据，更新状态
      listData.value = data;
    })
    .catch((err: any): void => {
      // 异常兜底捕获与日志记录
      console.error('模块 A 数据加载失败:', err);
    })
    .finally((): void => {
      // 结束加载中状态
      loading.value = false;
    });
}

/**
 * 响应私有子视图 A-1 的选择事件
 * @param item 用户选中的条目
 */
function onItemSelect(item: IModuleAItem): void {
  // 使用项目现有 utils 弹窗提示，避免手写或重复造轮子
  showSuccess(`点击了: ${item.name}`);
}

// 容器组件挂载时，主动触发业务初始化与数据加载
onMounted((): void => {
  loadData();
});
</script>
```

---

## 6.4 从 mock.uts 到真实后端接口的无缝对接规范（`src/api/<page>/<page>.uts`）

当服务端接口研发就绪，需要将前端从开发调试期的 `mock.uts` 正式迁移并对接真实后端接口时，**必须以当前页面的 `mock.uts` 作为契约蓝本，在 `src/api/` 下按照页面名称创建同名目录与同名 `.uts` 文件进行统一收拢与管理**。

### 1. 目录与文件名严格对齐规则

- **路径映射规则**：在 `src/api/` 下**根据页面名称建立同名目录与同名 `.uts` 文件**：
  $$\text{页面目录: } \texttt{src/pages/<page_name>/} \quad \Longrightarrow \quad \text{后端接口文件: } \texttt{src/api/<page_name>/<page_name>.uts}$$
- **标准用例映射**：
  - 首页 `src/pages/index/` $\Longrightarrow$ `src/api/index/index.uts`
  - 商城页 `src/pages/mall/` $\Longrightarrow$ `src/api/mall/mall.uts`
  - AI 助手页 `src/pages/ai/` $\Longrightarrow$ `src/api/ai/ai.uts`
  - 用户中心页 `src/pages/user/` $\Longrightarrow$ `src/api/user/user.uts`

### 2. 标准对接实施三步法

#### 第一步：以 `mock.uts` 为契约蓝本，在 `src/api/` 中实现真实接口

直接复用或迁移 `mock.uts` 中已调通并验证的数据模型 `type` 与参数类型，引入全局网络请求单例 `http`（来自 `@/src/http/request.uts`），编写强类型的真实 API 函数：

```uts
// ==========================================
// 文件位置：src/api/index/index.uts
// 对应页面：src/pages/index/
// ==========================================

import { http } from '@/src/http/request.uts';
import type { LimeRequestConfig } from '@/uni_modules/lime-request';

// ------------------------------------------
// 1. 复用或从 mock.uts 迁移数据模型（统一使用 type，严禁 interface）
// ------------------------------------------

/** 模块 A 单项数据结构 */
export type IModuleAItem = {
  id: number;
  name: string;
  badge: string;
  imageUrl: string;
};

/** 模块 A 列表查询参数 */
export type IModuleAQuery = {
  category?: string | null;
};

// ------------------------------------------
// 2. 真实后端接口函数（入参、出参签名与 mock.uts 保持 100% 一致）
// ------------------------------------------

/**
 * 获取模块 A 列表数据（真实后端接口）
 * @param query 筛选与分页查询参数
 * @returns 返回后端响应的数据 Promise
 */
export function fetchModuleAList(query: IModuleAQuery | null = null): Promise<IModuleAItem[]> {
  // 调用全局封装的 http 单例发起 GET 请求
  return http.get<UTSJSONObject[]>('/api/v1/index/module-a/list', {
    params: (query ?? {}) as any
  } as LimeRequestConfig).then((data: UTSJSONObject[]): IModuleAItem[] => {
    // 统一进行 UTS 原生安全取值转换与类型断言，防止 ClassCastException
    return data.map((item: UTSJSONObject): IModuleAItem => {
      return {
        id: item.getNumber('id') ?? 0,
        name: item.getString('name') ?? '',
        badge: item.getString('badge') ?? '',
        imageUrl: item.getString('imageUrl') ?? ''
      } as IModuleAItem;
    });
  });
}
```

#### 第二步：页面 L1 业务容器平滑切换 import 来源

由于真实接口函数与 `mock.uts` 的**函数名、入参签名、返回 Promise 类型 100% 严密对齐**，L1 业务容器（如 `components/A/A.uvue`）内部的 `ref` 响应式状态、`loadData` 逻辑、`onMounted` 触发流程以及 template **完全不需要改动任何一行代码**，只需将 import 路径平滑切换至 `src/api`：

```uts
// ==========================================
// 在 L1 容器组件 components/A/A.uvue 中切换导入：
// ==========================================

// 【对接前】从当前页面本地 mock.uts 导入：
// import { fetchModuleAList } from '../../mock.uts';
// import type { IModuleAItem } from '../../mock.uts';

// 【对接后】直接切换为导入全局统一的 src/api 接口：
import { fetchModuleAList } from '@/src/api/index/index.uts';
import type { IModuleAItem } from '@/src/api/index/index.uts';
```

#### 第三步（最佳优雅解耦方案）：在 `mock.uts` 中直接 re-export 转发

为达到更极致的平滑解耦，当后端接口联调就绪后，也可以在 `mock.uts` 中直接通过 `re-export` 方式重定向至 `src/api/`，此时**页面内所有的组件代码连 import 路径都无需修改任何一个字符**：

```uts
// ==========================================
// 文件位置：src/pages/index/mock.uts
// 联调期通过 re-export 转发，业务组件零改动即刻对接生产接口
// ==========================================

export { fetchModuleAList } from '@/src/api/index/index.uts';
export type { IModuleAItem, IModuleAQuery } from '@/src/api/index/index.uts';
```

---

## 6.5 AI 代码生成自检红线清单

在为本项目生成页面、组件或网络接口代码时，必须严格执行以下红线自检：

- [ ] **1. 严禁跨页面引用业务组件**：`src/pages/index/` 严禁通过相对路径引入 `src/pages/mall/` 或其他页面的业务组件；
- [ ] **2. 严禁组件拆分超过 3 层**：层级严格截止于 `Module/components/Leaf.uvue`，严禁在叶子组件内再开 `components/` 目录；
- [ ] **3. 严禁在纯展示组件中调用接口**：`components/common/` 以及 `A/components/`、`B/components/` 内部**严禁出现任何 `http` 调用、`fetch*` 函数或异步定时器**；
- [ ] **4. 严禁在组件内硬编码假数据**：模拟数据必须统一在当前页面 `mock.uts` 中使用 `type` 声明，并以返回 `Promise<T>` 的接口函数暴露；
- [ ] **5. 单向数据流动**：数据自容器通过 Props 向下灌入，子组件事件通过 Emits 向上通知，子组件禁止直接修改 Props 数据；
- [ ] **6. 严禁滥用 JS 动态计算高度（Flex-1 绝对优先）**：页面与模块滚动区域一律使用原生 Flex 弹性盒模型（`flex flex-col flex-1`）自适应撑满，严禁在页面与组件中滥用 `getScrollHeight()` 动态绑定 `:style="{ height: ... }"`；
- [ ] **7. 逻辑代码必须附带完整中文注释**：所有状态定义（ref/computed）、业务函数、异步请求链路、事件回调与组件 Props/Emits 必须全部附带清晰中文注释，严禁生成无注释逻辑代码；
- [ ] **8. 必须优先使用 utils 和 uni_modules 现成方法与组件**：凡是 `src/utils/`（路由/主题/弹窗/国际化/安全区/刷新）与 `uni_modules/`（图标/标签/图表/分页/富文本等）中已有能力的，严禁脱离现有体系手写重复轮子；
- [ ] **9. 后端接口按页面同名收拢在 `src/api/<page>/<page>.uts`**：对接真实后端接口时，必须以 `mock.uts` 为契约蓝本，在 `src/api/` 下按页面名称创建同名目录与同名文件（如 `src/api/index/index.uts`、`src/api/mall/mall.uts`），严禁跨页面混写或在组件内直接写裸请求；
- [ ] **10. 长列表/商品流必须使用 `<list-view>` 严禁使用 `<scroll-view>`**：任何动态追加、分页加载、商品瀑布流或长数据列表，一律强制使用具备原生节点回收复用池机制的 `<list-view>`（直接子项为 `<list-item>`）或高级组件 `<z-paging-x>`；`<scroll-view>` 仅限短内容或横向滑块，严禁在长列表场景中使用 `<scroll-view>` 导致原生内存暴增或 OOM 崩溃。
