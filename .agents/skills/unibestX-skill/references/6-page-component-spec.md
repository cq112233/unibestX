# 六、AI 页面层级与组件设计规范（页面内聚 · 容器/视图分离 · Mock 接口化）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：当 AI 助手或开发者**规划新页面结构、拆分复杂页面组件、组织页面级公共视图、编写模块私有视图，以及对接或设计 Mock 模拟数据时**，必须首先阅读并严格遵循本分册。
>
> **核心定位**：针对 AI 容易陷入的“万行单文件”或“过度碎裂拆分”两大极端，制定出**「高内聚自包含、最多三级封顶、容器与视图严格解耦、Mock 接口契约化」**的标准架构范式。

---

## 6.1 核心设计哲学与四大铁律

```mermaid
graph TD
    Page[L0: 页面入口 Page/View<br>definePage / 布局接管 / 下拉刷新]
    Page --> Common[L-Common: 页面通用纯展示<br>components/common/<br>卡片外壳/标题栏/装饰器<br>❌ 严禁调接口 ❌ 不做业务逻辑]
    Page --> ModuleA[L1: 模块 A 业务容器<br>components/A/A.uvue<br>✅ 允许调接口 (mock.uts/API)<br>✅ 状态管理 / loading / 分页]
    Page --> ModuleB[L1: 模块 B 业务容器<br>components/B/B.uvue<br>✅ 允许调接口 (mock.uts/API)<br>✅ 状态管理 / loading / 分页]

    ModuleA --> A1[L2: 模块 A 私有视图 1<br>A/components/A-1.uvue<br>纯展示 / Props 接收]
    ModuleA --> A2[L2: 模块 A 私有视图 2<br>A/components/A-2.uvue<br>纯展示 / Emits 抛出]

    ModuleB --> B1[L2: 模块 B 私有视图 1<br>B/components/B-1.uvue<br>纯展示 / Props 接收]
    ModuleB --> B2[L2: 模块 B 私有视图 2<br>B/components/B-2.uvue<br>纯展示 / Emits 抛出]

    Data[(Data: 模拟接口层<br>mock.uts / src/api/<br>统一返回 Promise)] -.->|异步拉取| ModuleA
    Data -.->|异步拉取| ModuleB
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
  - **唯一允许调用接口**（调用当前页面 `mock.uts` 或 `src/api/` 的 Promise 异步函数）；
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
- 页面私有模拟数据统一收敛在 `src/pages/<page>/mock.uts`（如 `src/pages/ai/mock.uts`）或全局 `src/api/`；
- 模拟数据必须使用 `type` 定义强类型契约，并封装为**返回 `Promise<T>` 的标准接口函数**（如 `Promise.resolve(MOCK_DATA)`）；
- 容器组件调用 `mock.uts` 与调用真实后端接口写法 100% 一致。后期后端接口就绪时，页面业务逻辑层 0 改动，仅需在数据层无缝切换为真实 `http.get/post`。

---

## 6.2 标准目录拓扑结构

以首页 `src/pages/index/`（或 `src/pages/ai/`）为例，标准层级与文件职责划分如下：

```text
src/pages/index/
├── index.uvue                      # 【L0: 页面入口】definePage 声明、布局接管、下拉刷新调度、全局生命周期
├── mock.uts                        # 【Data: 模拟接口层】数据模型 type 与返回 Promise 的仿后端接口函数
├── views/                          # 【可选视图承载】复杂主视图组件 (如 IndexView.uvue)
└── components/                     # 【页面内聚组件根目录】(严禁暴露给外部页面)
    ├── common/                     # 【L-Common: 页面级公共纯展示组件】(多个业务模块复用)
    │   ├── common1.uvue            #   例：通用的卡片包边壳 (CardWrapper)
    │   └── common2.uvue            #   例：通用的分段小标题栏 (SectionHeader)
    ├── A/                          # 【L1: 业务模块 A】(如：Banner 与金刚区快捷导航)
    │   ├── A.uvue                  #   ★ 业务容器：可调用 mock 接口，维护状态，组装 common 与子视图
    │   └── components/             # 【L2: 模块 A 私有子视图】(不供其他模块使用)
    │       ├── A-1.uvue            #     例：顶部 Banner 轮播展示
    │       └── A-2.uvue            #     例：金刚区快捷入口网格
    └── B/                          # 【L1: 业务模块 B】(如：热销瀑布流推荐列表)
        ├── B.uvue                  #   ★ 业务容器：可调用 mock 接口，维护分页与 loading，组装子视图
        └── components/             # 【L2: 模块 B 私有子视图】(不供其他模块使用)
            ├── B-1.uvue            #     例：瀑布流筛选分类栏
            └── B-2.uvue            #     例：商品双列卡片瀑布流
```

---

## 6.3 标杆代码落地参考范式

### 1. 【Data 层】`src/pages/ai/mock.uts`（模拟数据抽离为后端接口）

```uts
// 1. 数据模型定义（全部使用 type，严禁 interface！）
export type IModuleAItem = {
  id: number;
  name: string;
  badge: string;
  imageUrl: string;
};

export type IModuleAQuery = {
  category?: string | null;
};

// 2. 模拟数据集（集中私有化管理）
const MOCK_A_LIST: IModuleAItem[] = [
  { id: 1, name: 'AI 问答助手', badge: 'NEW', imageUrl: '/static/icons/ai.png' },
  { id: 2, name: '文生图画廊', badge: 'HOT', imageUrl: '/static/icons/draw.png' },
  { id: 3, name: '代码助手', badge: 'PRO', imageUrl: '/static/icons/code.png' }
];

// 3. 仿后端接口函数（统一返回 Promise<T>）
export function fetchModuleAList(_query: IModuleAQuery | null = null): Promise<IModuleAItem[]> {
  // 返回 Promise，完全拟真网络异步过程
  return Promise.resolve(MOCK_A_LIST);
}
```

---

### 2. 【L-Common 页面公共纯展示组件】`components/common/common1.uvue`

```html
<template>
  <!-- 通用卡片外壳：只管卡片圆角、背景、微边框与边距，无任何接口调用 -->
  <view class="w-full bg-[#ffffff] rounded-[12px] p-[14px] border-[1px] border-solid border-[#f1f5f9] mb-[12px]">
    <!-- 标题栏区域 -->
    <view v-if="title != null && title!.length > 0" class="flex flex-row items-center justify-between mb-[10px]">
      <text class="text-[15px] font-bold text-[#1e293b]">{{ title }}</text>
      <slot name="extra" />
    </view>
    <!-- 内容插槽 -->
    <slot />
  </view>
</template>

<script setup lang="uts">
// 只接收展示所需的基础类型属性
defineProps<{
  title?: string | null;
}>();
</script>
```

---

### 3. 【L2 模块私有纯展示视图】`components/A/components/A-1.uvue`

```html
<template>
  <!-- 纯视图：只根据 props 遍历渲染，交互向外 emit -->
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

// 严格通过 defineProps 接收上层数据
defineProps<{
  items: Array<IModuleAItem>;
}>();

// 交互向外抛出事件，严禁子组件内自改数据
const emit = defineEmits<{
  (e: 'select', item: IModuleAItem): void;
}>();

function handleItemClick(item: IModuleAItem): void {
  emit('select', item);
}
</script>
```

---

### 4. 【L1 模块业务容器】`components/A/A.uvue`

```html
<template>
  <!-- 复用页面公共卡片 common1 -->
  <common1 title="AI 功能矩阵">
    <!-- 状态 1: 加载中 -->
    <view v-if="loading" class="py-[16px] items-center justify-center">
      <text class="text-[12px] text-[#94a3b8]">正在加载数据...</text>
    </view>

    <!-- 状态 2: 组装私有子视图 A-1，灌入数据，监听事件 -->
    <A1
      v-else
      :items="listData"
      @select="onItemSelect"
    />
  </common1>
</template>

<script setup lang="uts">
import { ref, onMounted } from 'vue';
import common1 from '../common/common1.uvue';
import A1 from './components/A-1.uvue';
import { fetchModuleAList } from '../../mock.uts';
import type { IModuleAItem } from '../../mock.uts';

// 容器组件持有该模块的局部业务状态
const loading = ref<boolean>(false);
const listData = ref<Array<IModuleAItem>>([]);

// 业务容器负责发起接口调用
function loadData(): void {
  loading.value = true;
  fetchModuleAList().then((data: Array<IModuleAItem>): void => {
    listData.value = data;
  }).catch((err: any): void => {
    console.error('加载失败:', err);
  }).finally((): void => {
    loading.value = false;
  });
}

// 接收子视图交互事件，执行业务动作
function onItemSelect(item: IModuleAItem): void {
  uni.showToast({
    title: `点击了: ${item.name}`,
    icon: 'none'
  });
}

onMounted((): void => {
  loadData();
});
</script>
```

---

## 6.4 AI 代码生成自检红线清单

在为当前项目生成页面和组件代码时，必须严格执行以下红线自检：

- [ ] **1. 严禁跨页面引用业务组件**：`src/pages/index/` 严禁通过相对路径引入 `src/pages/ai/` 或其他页面的业务组件；
- [ ] **2. 严禁组件拆分超过 3 层**：层级截止于 `Module/components/Leaf.uvue`，严禁在叶子组件内再开 `components/` 目录；
- [ ] **3. 严禁在纯展示组件中调用接口**：`components/common/` 以及 `A/components/`、`B/components/` 内部**严禁出现任何 `http` 调用、`fetch*` 函数或异步定时器**；
- [ ] **4. 严禁在组件内硬编码假数据**：模拟数据必须统一在当前页面 `mock.uts` 中使用 `type` 声明，并以返回 `Promise<T>` 的接口函数暴露；
- [ ] **5. 单向数据流动**：数据自容器通过 Props 向下灌入，子组件事件通过 Emits 向上通知，子组件禁止直接修改 Props 数据；
- [ ] **6. 严禁滥用 JS 动态计算高度（Flex-1 绝对优先）**：页面与模块滚动区域一律使用原生 Flex 弹性盒模型（`flex flex-col flex-1`）自适应撑满，严禁在页面与组件中滥用 `getScrollHeight()` 动态绑定 `:style="{ height: ... }"`。
