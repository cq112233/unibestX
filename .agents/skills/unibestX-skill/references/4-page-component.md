# 4 页面与组件手册（结构边界 · 页面骨架 · `definePage` · 业务页 · 组件）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：新建 / 改造页面或组件时。
>
> **本分册负责**：页面和组件文件怎么写、页面如何取数、`definePage` 如何配置、组件 Props / Emits 如何声明、交付前检查什么。
>
> **目录放哪、是否拆分、组件何时提升、API 文件怎么组织**：看 [分册 5](./5-page-structure.md)。本分册只保留写代码必需的边界摘要，不重复目录树全量规则。
>
> **接口函数内部怎么写**：看 [分册 6](./6-api-spec.md)；`useQuery` / `useMutation` 的完整契约与网络错误处理：看 [分册 10](./10-http-spec.md)。

---

## 4.0 先记住这 10 条

1. 简单业务默认只写根页面，`components/` 可选，`modules/` 可选，**不要为了拆而拆**。
2. `modules/` 下没有 `common/`。
3. 只有**页面根组件**和 **`modules/<block>/<Block>Module.uvue`** 可以发请求。
4. `components/`、`common/`、`modules/<block>/components/`、`src/components/` 只做纯展示：接收 Props、抛出 Emits。
5. 两个模块共用同一接口时，由页面根组件请求一次，再通过 Props 下发。
6. 同一组件被**超过 2 个页面**使用，也就是从第 3 个页面开始，才提升到 `src/components/`。
7. 每个页面都写 `name`、`debug: false`、`debugHome: false` 和 `navigationStyle: 'custom'`。
8. `enablePullDownRefresh` 默认 `false`；只有明确需要页面下拉刷新才写 `true`，并闭环停止刷新。
9. Query / Mutation 解构出的状态本身是 Ref：模板直接写 `listPending`，不写 `listPending.value`；script 内读值才写 `.value`。
10. 不为纯转发创建 `computed`。只有字段转换、组合、过滤、排序等真实派生才用 `computed`。

---

## 4.1 页面与组件职责

### 4.1.1 可选结构

```text
<page>/
├── <page>.uvue                  # 非 TabBar 页根组件；TabBar 页这里是薄壳
├── views/<Page>View.uvue        # 仅 TabBar 页：真正的页面根组件
├── components/                  # 可选：根组件直属纯展示视图
├── common/                      # 可选：页面内多处复用的纯展示视图
└── modules/                     # 可选：复杂页面的独立业务区块
    └── <block>/
        ├── <Block>Module.uvue   # 模块组件：可发本模块请求
        └── components/          # 模块直属纯展示视图
```

`components/`、`common/`、`modules/` 都是按需创建，不是页面脚手架。

### 4.1.2 拆分顺序

| 页面情况 | 推荐做法 |
| :--- | :--- |
| 单一业务块，内容不多 | 只写根页面 |
| 单一业务块，但局部 UI 确有复用或独立维护价值 | 根页面 + `components/` |
| 同一页面有多个独立业务区块，各区块需要独立状态 / 接口 / 分页 | 根页面 + `modules/<block>/` |
| 多个模块使用同一接口 | 根组件请求一次，Props 下发 |
| 组件被 3 个及以上页面使用 | 提升到 `src/components/` |
| 组件只在 1 或 2 个页面使用 | 留在页面内部，不提升 |

不要因为页面里有列表、筛选、表单，就自动创建 `modules/`。先判断它们是不是同一个业务块。

### 4.1.3 取数边界

| 文件位置 | 能否调用 API / `useQuery` / `useMutation` | 职责 |
| :--- | :--- | :--- |
| 页面根组件 | ✅ | 页面数据、单业务块请求、多个模块共享接口 |
| `modules/<block>/<Block>Module.uvue` | ✅ 仅本模块接口 | 本模块 loading、分页、筛选、变更 |
| `components/` | ❌ | 纯展示，Props / Emits |
| `common/` | ❌ | 纯展示，Props / Emits |
| `modules/<block>/components/` | ❌ | 纯展示，Props / Emits |
| `src/components/` | ❌ | 跨页面公共纯展示组件 |

TabBar 入口薄壳只做 `definePage`、Tab 联动和生命周期，不发 HTTP；请求放在 `views/<Page>View.uvue`。

---

## 4.2 页面骨架

### 4.2.1 根节点与滚动

页面根节点统一使用：

```html
<view class="flex flex-col flex-1">
  <!-- 页面内容 -->
</view>
```

- 根节点不要用 `<scroll-view>`。
- 不要用 `100vh` / `100%` 硬算页面高度。
- 分页、长列表优先 `<z-paging-x>`。
- 普通非长列表滚动区才在根节点内部使用 `<scroll-view>`。
- `navbar` / `default` 布局接管整页滚动时，`onPageScroll` / `onReachBottom` 不触发，改用 `onNavbarPageScroll` / `onNavbarReachBottom`。

### 4.2.2 上固定 + 下滚动

```html
<template>
  <view class="flex flex-col flex-1 bg-[#f8fafc]">
    <view class="w-full px-[16px] pt-[12px] pb-[8px]">
      <text class="text-[16px] font-bold text-[#1e293b]">订单列表</text>
    </view>

    <scroll-view direction="vertical" class="flex-1 flex flex-col">
      <view class="flex flex-col">
        <!-- 非长列表内容 -->
      </view>
    </scroll-view>
  </view>
</template>
```

### 4.2.3 整页自然滚动

```html
<template>
  <view class="flex flex-col px-[16px] pt-[12px]">
    <!-- 内容交给 navbar / default 布局滚动 -->
  </view>
</template>
```

```uts
import {
  onNavbarPageScroll,
  onNavbarReachBottom
} from '@/src/layouts/navbar/utils/index.uts';
import type { PageScrollDetail } from '@/src/layouts/navbar/utils/index.uts';

/**
 * 监听布局滚动
 * @param e 布局滚动详情
 */
onNavbarPageScroll((e: PageScrollDetail): void => {
  console.log('scrollTop', e.scrollTop);
});

/** 布局触底后加载下一页 */
onNavbarReachBottom((): void => {
  // 加载下一页
});
```

### 4.2.4 TabBar 页薄壳

```html
<!-- src/pages/basic/basic.uvue -->
<template>
  <BasicView />
</template>

<script setup lang="uts">
import BasicView from './views/BasicView.uvue';
import {
  notifyPageHide,
  notifyPageShow,
  setCurIdxByKey
} from '@/src/tabbar/index.uts';

definePage({
  name: 'basic',
  debug: false,
  debugHome: false,
  layout: 'navbar',
  showBack: false,
  hideStatusBar: false,
  hideNavbar: false,
  enablePullDownRefresh: false,
  style: {
    navigationBarTitleText: '基础',
    navigationStyle: 'custom'
  }
});

onShow((): void => {
  setCurIdxByKey('basic');
  notifyPageShow();
});

onHide((): void => {
  notifyPageHide();
});
</script>
```

TabBar 是独立单页，没有“业务模块式”的多页分组；页面内容放在 `views/<Page>View.uvue`。

---

## 4.3 `definePage`

### 4.3.1 标准写法

每个页面都要显式写完整配置：

```uts
definePage({
  name: 'orderList',
  debug: false,
  debugHome: false,
  layout: 'navbar',
  showBack: true,
  hideStatusBar: false,
  hideNavbar: false,
  enablePullDownRefresh: false,
  style: {
    navigationBarTitleText: '订单列表',
    navigationStyle: 'custom'
  }
});
```

### 4.3.2 字段规则

| 字段 | 规则 |
| :--- | :--- |
| `name` | 每页必填且唯一，成为 `useRoute().name` |
| `debug` | 每页显式写 `false`；只有单页沙盒调试时临时改 `true` |
| `debugHome` | 每页显式写 `false`；沙盒调试需要指定启动页时才改 `true`，全局最多 1 页 |
| `layout` | 按页面布局选择 `navbar` / `default` / `empty` |
| `showBack` | 默认 `true`；TabBar 页写 `false`；登录、隐私授权等禁止返回的入口页可写 `false` |
| `hideStatusBar` | 默认 `false`；只有明确自定义 navbar 且不要状态栏，或纯空白页才写 `true` |
| `hideNavbar` | 默认 `false`；只有明确自定义 navbar 才写 `true` |
| `enablePullDownRefresh` | 默认 `false`；只有明确要求页面下拉刷新才写 `true` |
| `style.navigationBarTitleText` | 页面标题 |
| `style.navigationStyle` | 每页必须写 `'custom'` |
| `type: 'home'` | 只用于首页，不放进通用模板 |
| `customPageClass` / `customPageStyle` | 只有布局确需自定义根容器时才写 |

### 4.3.3 下拉刷新闭环

```uts
import {
  onNavbarPullDownRefresh,
  stopNavbarPullDownRefresh
} from '@/src/layouts/navbar/utils/index.uts';

/** 页面下拉刷新 */
onNavbarPullDownRefresh((): void => {
  // 这里执行页面刷新逻辑
  // 请求成功或失败后都必须收起刷新动画
  stopNavbarPullDownRefresh();
});
```

- 只有 `enablePullDownRefresh: true` 的页面才注册该监听。
- 加载结束后必须调用 `stopNavbarPullDownRefresh()`，否则刷新动画不会收起。
- 不要同时写 `style.enablePullDownRefresh`。

### 4.3.4 常见误写

```uts
// ❌ 缺 name / debug / debugHome / navigationStyle
definePage({
  layout: 'navbar',
  style: { navigationBarTitleText: '订单列表' }
});

// ❌ 普通页默认关闭返回
definePage({
  name: 'orderList',
  debug: false,
  debugHome: false,
  showBack: false,
  style: { navigationBarTitleText: '订单列表', navigationStyle: 'custom' }
});

// ❌ 没有下拉刷新需求却开启
definePage({
  name: 'orderList',
  debug: false,
  debugHome: false,
  enablePullDownRefresh: true,
  style: { navigationBarTitleText: '订单列表', navigationStyle: 'custom' }
});
```

---

## 4.4 标准业务页

以下示例演示一个页面的完整数据流：读取路由参数 → `useQuery` 读列表 → `useMutation` 写入 → 成功后失效缓存。

> 接口函数本身放在 `src/api/order/list.uts`，页面只精准导入具体文件。

### 4.4.1 模板

```html
<template>
  <view class="flex flex-col flex-1 bg-[#f8fafc]">
    <view class="w-full px-[16px] pt-[12px] pb-[8px]">
      <view class="w-full bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] rounded-[8px] p-[16px]">
        <text class="text-[16px] font-bold text-[#1e293b]">订单列表</text>
        <text class="text-[12px] leading-[18px] text-[#64748b] mt-[4px]">
          来源：{{ fromPage }} · 共 {{ listData != null ? listData.length : 0 }} 单
        </text>
        <input
          v-model="keywordInput"
          class="h-[36px] bg-[#f8fafc] rounded-[8px] px-[12px] mt-[10px] text-[13px] text-[#334155]"
          placeholder="输入关键字后搜索"
          @confirm="onSearch"
        />
        <view class="flex flex-row mt-[10px]">
          <view
            class="flex-1 h-[34px] rounded-[8px] bg-[#2563eb] items-center justify-center mr-[8px]"
            @click="onSearch"
          >
            <text class="text-[13px] font-bold text-[#ffffff]">搜索</text>
          </view>
          <view
            class="flex-1 h-[34px] rounded-[8px] bg-[#0d9488] items-center justify-center"
            @click="onCreate"
          >
            <text class="text-[13px] font-bold text-[#ffffff]">
              {{ creating ? '创建中…' : '新建订单' }}
            </text>
          </view>
        </view>
      </view>
    </view>

    <scroll-view direction="vertical" class="flex-1 flex flex-col">
      <view v-if="listPending" class="flex flex-col items-center py-[48px]">
        <text class="text-[13px] text-[#94a3b8]">正在加载…</text>
      </view>

      <view v-else-if="listError" class="flex flex-col items-center py-[48px]">
        <text class="text-[13px] text-[#94a3b8]">{{ errorText }}</text>
        <view
          class="h-[32px] px-[16px] rounded-[16px] bg-[#2563eb] items-center justify-center mt-[12px]"
          @click="onRetry"
        >
          <text class="text-[13px] text-[#ffffff]">重试</text>
        </view>
      </view>

      <view
        v-else-if="listData != null && listData.length == 0"
        class="flex flex-col items-center py-[48px]"
      >
        <text class="text-[13px] text-[#94a3b8]">暂无订单</text>
      </view>

      <view v-else-if="listData != null" class="flex flex-col">
        <view
          v-for="item in listData"
          :key="item.id"
          class="flex flex-col bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] rounded-[8px] p-[14px] mx-[16px] mb-[10px]"
          @click="onOpenDetail(item)"
        >
          <view class="flex flex-row items-center justify-between">
            <text class="text-[14px] font-semibold text-[#1e293b]">{{ item.title }}</text>
            <text class="text-[14px] font-bold text-[#2563eb]">¥{{ item.amount }}</text>
          </view>
          <view class="flex flex-row items-center justify-between mt-[6px]">
            <text class="text-[12px] text-[#94a3b8]">{{ item.createdText }}</text>
            <view
              class="h-[26px] px-[10px] rounded-[13px] bg-[#fee2e2] items-center justify-center"
              @click.stop="onDelete(item)"
            >
              <text class="text-[12px] text-[#b91c1c]">删除</text>
            </view>
          </view>
        </view>
      </view>

      <view class="flex flex-col items-center py-[16px]">
        <text class="text-[12px] text-[#94a3b8]">
          {{ listFetching ? '同步中…' : '没有更多了' }}
        </text>
      </view>
    </scroll-view>
  </view>
</template>
```

### 4.4.2 脚本

```uts
<script setup lang="uts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from '@/uni_modules/route-bestX/index.uts';
import {
  useMutation,
  useQuery,
  useQueryClient
} from '@/uni_modules/request-bestX/index.uts';
import type {
  MutationOptions,
  QueryFunctionContext,
  QueryOptions
} from '@/uni_modules/request-bestX/index.uts';
import {
  createOrderApi,
  deleteOrderApi,
  fetchOrderListApi
} from '@/src/api/order/list.uts';
import type { OrderItem } from '@/src/api/order/types.uts';
import { toastSuccess } from '@/src/utils/toast/index.uts';

definePage({
  name: 'orderList',
  debug: false,
  debugHome: false,
  layout: 'navbar',
  showBack: true,
  hideStatusBar: false,
  hideNavbar: false,
  enablePullDownRefresh: false,
  style: {
    navigationBarTitleText: '订单列表',
    navigationStyle: 'custom'
  }
});

/** 当前路由 */
const route = useRoute();
/** 路由跳转 */
const router = useRouter();
/** 查询缓存客户端 */
const queryClient = useQueryClient();

/** 来源页 */
const fromPage = computed((): string => route.query.get('from') ?? '');
/** 已提交的搜索关键字 */
const keyword = ref<string>(route.query.get('keyword') ?? '');
/** 搜索框输入值 */
const keywordInput = ref<string>(route.query.get('keyword') ?? '');

// 列表查询：解构 + 业务别名；keyword 放进 queryKey，变化后自动重查
const {
  data: listData,
  isPending: listPending,
  isFetching: listFetching,
  isError: listError,
  lastError: listErrorObj,
  refetch: refetchList
} = useQuery<Array<OrderItem>>({
  queryKey: ['order', 'list', keyword],
  queryFn: (_ctx: QueryFunctionContext): Promise<Array<OrderItem>> => {
    return fetchOrderListApi(1, 20, keyword.value);
  }
} as QueryOptions<Array<OrderItem>>);

// 新建订单：解构 + 业务别名；成功后按 queryKey 前缀失效列表
const {
  isPending: creating,
  mutate: createOrder
} = useMutation<OrderItem, string>({
  mutationFn: (title: string): Promise<OrderItem> => {
    return createOrderApi(title);
  },
  onSuccess: (_created: OrderItem, _title: string, _ctx: any): void => {
    toastSuccess('创建成功');
    queryClient.invalidateQueries(['order', 'list']);
  }
} as MutationOptions<OrderItem, string>);

// 删除订单：解构 + 业务别名；成功后失效同一列表
const {
  isPending: deleting,
  mutate: deleteOrder
} = useMutation<boolean, OrderItem>({
  mutationFn: (item: OrderItem): Promise<boolean> => {
    return deleteOrderApi(item.id);
  },
  onSuccess: (_ok: boolean, _item: OrderItem, _ctx: any): void => {
    toastSuccess('已删除');
    queryClient.invalidateQueries(['order', 'list']);
  }
} as MutationOptions<boolean, OrderItem>);

/** 错误对象转展示文案：这是真实派生，保留 computed */
const errorText = computed((): string => {
  const err = listErrorObj.value;
  return err != null ? err.message : '加载失败';
});

/** 提交搜索：keyword 在 queryKey 中，赋值即自动重查 */
function onSearch(): void {
  keyword.value = keywordInput.value;
}

/** 重试列表查询 */
function onRetry(): void {
  refetchList();
}

/** 创建订单 */
function onCreate(): void {
  if (creating.value) {
    return;
  }
  createOrder('新订单');
}

/**
 * 删除订单
 * @param item 待删除的订单
 */
function onDelete(item: OrderItem): void {
  if (deleting.value) {
    return;
  }
  deleteOrder(item);
}

/**
 * 打开订单详情
 * @param item 被点击的订单
 */
function onOpenDetail(item: OrderItem): void {
  router.push({
    path: '/src/sub/order/order-detail/order-detail',
    query: { id: item.id }
  });
}
</script>

<style></style>
```

### 4.4.3 五段职责

| 段落 | 做什么 | 关键约束 |
| :--- | :--- | :--- |
| 页面配置 | `definePage` | 字段齐全，`name` 唯一 |
| 路由与客户端 | `useRoute()` / `useRouter()` / `useQueryClient()` | 跳转和取参不用原生 API |
| 查询 | `useQuery` 解构 + 业务别名 | 动态参数放进 `queryKey` |
| 变更 | `useMutation` 解构 + 业务别名 | 成功后 `invalidateQueries` |
| 交互 | 改状态 / `mutate()` / `router.push()` | 页面不手写 HTTP、不维护列表副本 |

---

## 4.5 Query / Mutation 状态用法

### 4.5.1 状态字段

| 字段 | 含义 |
| :--- | :--- |
| `isPending` | 首次查询尚未完成；有 `initialData` 时可能直接为 `false` |
| `isFetching` | 任意网络拉取进行中，包含后台刷新、轮询和重新激活 |
| `isError` | 最近一次查询是否失败 |
| `lastError` | 错误对象，字段名不是 `error` |
| `data` | 查询结果，类型为 `Ref<T \| null>` |
| `refetch` | 手动重新请求 |

### 4.5.2 模板直接使用 Ref

```html
<view v-if="listPending">加载中</view>
<view v-else-if="listError">{{ errorText }}</view>
<view v-else-if="listData != null && listData.length == 0">暂无数据</view>
<view v-else-if="listData != null">
  <view v-for="item in listData" :key="item.id">{{ item.title }}</view>
  <text>{{ listFetching ? '同步中…' : '没有更多了' }}</text>
</view>
```

- Vue 模板会自动解包 Ref，不能写 `{{ listPending.value }}`。
- script 内读取 Ref 才写 `.value`。
- 列表长度直接写 `listData.length`，不要再包一层 `listLength`。

### 4.5.3 不写纯转发 `computed`

```uts
// ❌ 纯转发：没有新增语义，只多一层依赖
const isLoading = computed((): boolean => listPending.value == true);
const isFetching = computed((): boolean => listFetching.value == true);
const isError = computed((): boolean => listError.value == true);

// ✅ 模板直接用
// v-if="listPending"
// v-else-if="listError"
// {{ listFetching ? '同步中…' : '没有更多了' }}
```

`computed` 只用于真实转换、组合、过滤、排序等场景，例如：

```uts
/** 错误对象转展示文案 */
const errorText = computed((): string => {
  const err = listErrorObj.value;
  return err != null ? err.message : '加载失败';
});

/** 只展示待付款订单 */
const unpaidOrders = computed((): Array<OrderItem> => {
  const list = listData.value;
  if (list == null) {
    return [];
  }
  return list.filter((item: OrderItem): boolean => item.status == 'unpaid');
});
```

### 4.5.4 `initialData` 的边界

- `initialData` 只用于确实需要稳定默认结构的对象或配置。
- `initialData` 仍会正常发起首轮请求，不等于关闭请求。
- **需要首屏加载态的列表不要写 `initialData: []`**：有 `initialData` 的查询初始状态会变成 `success`，`isPending` 为 `false`。
- 列表直接判 `listData != null`；空列表判 `listData.length == 0`。

```uts
/** 概览空结构：首屏可立即展示完整强类型数据 */
const EMPTY_SUMMARY: TaskSummary = {
  total: 0,
  pending: 0,
  done: 0,
  completionRate: 0
};

// 概览查询：使用稳定空结构占位
const {
  data: summaryData,
  refetch: refetchSummary
} = useQuery<TaskSummary>({
  queryKey: ['taskCenter', 'summary'],
  queryFn: (_ctx: QueryFunctionContext): Promise<TaskSummary> => {
    return fetchTaskSummaryApi();
  },
  initialData: EMPTY_SUMMARY
} as QueryOptions<TaskSummary>);

// ✅ 模板直接使用 summaryData.pending
// ❌ 不要再写 const summary = computed(() => summaryData.value ?? EMPTY_SUMMARY)
```

### 4.5.5 查询与变更选择

| 场景 | 使用 |
| :--- | :--- |
| 列表 / 详情 / 配置读取 | `useQuery` |
| 搜索 / 筛选 / 分页 | `useQuery`，动态参数放进 `queryKey` |
| 新建 / 修改 / 删除 / 上传 | `useMutation` |
| 轮询 | `useQuery({ refetchInterval })`，不要自己写 `setInterval` |
| 手动触发的一次性读取 | `useQuery({ enabled: false })` + `refetch()` |

### 4.5.6 可空详情查询

```uts
// 详情查询：泛型使用非空类型，把“查无数据”转为 rejection
const {
  data: detailData,
  isPending: detailPending,
  lastError: detailErrorObj
} = useQuery<OrderItem>({
  queryKey: ['order', 'detail', orderId],
  queryFn: (_ctx: QueryFunctionContext): Promise<OrderItem> => {
    const id = orderId.value;
    return fetchOrderDetailApi(id).then(
      (detail: OrderItem | null): Promise<OrderItem> => {
        if (detail == null) {
          return Promise.reject(new Error('订单不存在')) as Promise<OrderItem>;
        }
        return Promise.resolve(detail);
      }
    );
  },
  enabled: (): boolean => orderId.value > 0
} as QueryOptions<OrderItem>);
```

---

## 4.6 Easycom 与组件引用

### 4.6.1 直接使用短横线标签

`uni_modules/*/components/` 与根 `components/` 在 Easycom 扫描范围内：

```html
<uni-icons type="info" size="20" color="#3b82f6" />
```

不需要手动 import。

### 4.6.2 页面私有组件手动导入

页面私有 `components/` 不在 Easycom 扫描范围：

```uts
import OrderHeader from './components/OrderHeader.uvue';
import OrderFilter from './components/OrderFilter.uvue';
```

```html
<OrderHeader :title="title" />
<OrderFilter :active-key="activeKey" @change="onFilterChange" />
```

### 4.6.3 组件选择顺序

1. 先找项目已有公共组件与 `uni_modules/` 生态组件。
2. 长列表 / 分页优先 `<z-paging-x>`。
3. 图标优先 `<uni-icons>` / `<lime-icon>`。
4. 覆盖不了再写页面私有组件。

---

## 4.7 组件写法

### 4.7.1 纯展示组件模板

```html
<template>
  <!-- 订单卡片：数据由父级传入，点击后抛 select -->
  <view
    class="flex flex-col bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] rounded-[8px] p-[14px]"
    @click="onClick"
  >
    <text class="text-[14px] font-semibold text-[#1e293b]">{{ order.title }}</text>
    <text v-if="showTime" class="text-[12px] text-[#94a3b8] mt-[4px]">
      {{ order.createdText }}
    </text>
  </view>
</template>

<script setup lang="uts">
import { computed } from 'vue';
import type { OrderItem } from '@/src/api/order/types.uts';

/** 组件入参 */
const props = defineProps({
  /** 订单数据 */
  order: {
    type: Object,
    required: true
  },
  /** 是否展示创建时间 */
  showTime: {
    type: Boolean,
    default: false
  }
});

/** 订单数据：运行时 prop 在组件内断言为强类型 */
const order = computed((): OrderItem => props.order as OrderItem);

/** 组件事件 */
const emit = defineEmits<{
  (e: 'select', order: OrderItem): void;
}>();

/** 点击卡片 */
function onClick(): void {
  emit('select', order.value);
}
</script>

<style></style>
```

### 4.7.2 Props

```uts
/** 组件入参 */
const props = defineProps({
  /** 弹窗显隐 */
  visible: {
    type: Boolean,
    default: false
  },
  /** 订单数据 */
  order: {
    type: Object,
    required: true
  }
});

/** 订单数据：对象型 prop 转强类型 */
const order = computed((): OrderItem => props.order as OrderItem);
```

- 使用运行时对象 `defineProps({...})`。
- 一个业务对象一个 prop，不把对象字段摊平成一串 prop。
- 必填写 `required: true`；布尔默认 `false`；字符串默认 `''`；对象默认值使用工厂函数。
- 对象型 prop 在组件内用 `computed` 断言为强类型。
- 不使用 `interface` 描述 Props。
- 全局状态（主题、语言等）不由页面逐层透传，组件内直接读对应 store。

### 4.7.3 Emits

```uts
/** 组件事件 */
const emit = defineEmits<{
  (e: 'select', order: OrderItem): void;
  (e: 'update:visible', visible: boolean): void;
}>();
```

- 组件不直接修改 props。
- 需要修改父级状态时抛出事件。
- `v-model` 使用 `update:xxx` 约定。
- uni-app X 中驼峰和短横线是两种事件名；确实需要同时兼容时，两种都声明并 emit。

### 4.7.4 Expose

```uts
/** 滚动到顶部 */
function scrollToTop(): void {
  // 组件内部实现
}

defineExpose({
  scrollToTop
});
```

父级获取组件实例时保持强类型：

```uts
/** 卡片组件实例 */
const cardRef = ref<ComponentPublicInstance | null>(null);

/** 调用卡片组件暴露的方法 */
function onScrollTop(): void {
  cardRef.value?.$callMethod('scrollToTop');
}
```

只暴露父级必须调用的方法，不通过 expose 读写内部状态。

### 4.7.5 纯展示组件边界

```uts
// ✅ 父级请求，组件展示
const listData = ref<Array<OrderItem> | null>(null);

// ❌ 组件内请求
const { data: listData } = useQuery(...);
```

```html
<!-- ✅ 父级通过 Props 下发共享接口数据 -->
<OrderListModule :summary="summary" />
<CouponModule :summary="summary" />
```

- `components/`、`common/`、模块 `components/`、`src/components/` 不调用 API，不使用 Query hooks。
- 需要交互结果时抛出 Emits；需要刷新数据时让父级处理。
- 公共组件只有纯展示职责。

### 4.7.6 注释要求

- 顶层变量使用一行普通说明注释。
- 每个方法使用 JSDoc：一句职责，必要时写 `@param` 与 `@returns`。
- `useQuery` / `useMutation` 使用 `//` 普通注释说明用途与别名。
- 不在方法体逐行解释显而易见的实现。

```uts
/** 搜索关键字 */
const keyword = ref<string>('');

// 列表查询：关键字变化时自动重查
const {
  data: listData,
  isPending: listPending
} = useQuery<Array<OrderItem>>({
  queryKey: ['order', 'list', keyword],
  queryFn: (_ctx: QueryFunctionContext): Promise<Array<OrderItem>> => {
    return fetchOrderListApi(1, 20, keyword.value);
  }
} as QueryOptions<Array<OrderItem>>);

/**
 * 计算订单总价
 * @param list 订单明细
 * @returns 总价，空列表返回 0
 */
function calcTotal(list: Array<OrderItem>): number {
  return list.reduce((total: number, item: OrderItem): number => total + item.amount, 0);
}
```

### 4.7.7 纯文本插槽必须由 `<text>` 承载

组件契约是“接收一段纯文本”时，必须在组件侧提供 `<text>` 作为文本宿主，默认文案放在 `<slot>` 内部：

```html
<!-- ❌ 错误：父级传入的裸文本没有 <text> 宿主 -->
<slot>11</slot>

<!-- ✅ 正确：纯文本插槽由 <text> 承载 -->
<text class="text-[14px] text-[#1e293b]"><slot>11</slot></text>
```

调用方直接传入文本：

```html
<MyText>11</MyText>
```

注意：

- 纯文本插槽应成对使用 `<text>` 与 `<slot>`，不要在同一个 `<text>` 中混写固定前缀和插槽，如 `<text>前缀<slot /></text>`。这会违反 `<text>` 只能包含一个文本节点的限制。
- 需要固定文案与插槽内容混排时，使用兄弟 `<text>`，并由外层 `<view>` 承载：

```html
<view class="flex flex-row">
  <text>前缀</text>
  <text><slot /></text>
</view>
```

- 如果插槽设计为接收任意节点，例如完整 `<text>` 或 `<view>`，组件侧保持 `<slot />`，由调用方自行提供节点，不要把节点插槽统一包进 `<text>`。
- 具名插槽同样按内容类型判断：纯文本具名插槽由 `<text>` 承载，任意节点具名插槽保持裸 `<slot name="xxx" />`。

---

## 4.8 数据来源与 API 接入

### 4.8.1 有后端数据

```text
页面根组件 / 模块组件
  -> src/api/<module>/<file>.uts
  -> src/http
```

```uts
import { fetchOrderListApi } from '@/src/api/order/list.uts';
import type { OrderItem } from '@/src/api/order/types.uts';
```

- 页面和纯展示组件不直接调用 `http.get` / `http.post`。
- 页面目录不放 `mock.uts` 或数据集文件。
- 页面和组件不使用 `ref([...])` 伪造业务数据。
- 接口函数内部写法看分册 6，HTTP 细节看分册 10。

### 4.8.2 接口尚未就绪

接口函数签名先定型，假数据放在 `src/api/<module>/<file>.uts`，函数体用 `new Promise` + 延迟返回。

```uts
/** 订单列表假数据 */
const MOCK_ORDER_LIST: Array<OrderItem> = [
  { id: 1, title: '洗护套装', amount: 199, status: 'paid', createdText: '2026-10-20 09:12' },
  { id: 2, title: '咖啡豆 500g', amount: 89, status: 'done', createdText: '2026-10-19 18:40' },
  { id: 3, title: '蓝牙耳机', amount: 329, status: 'unpaid', createdText: '2026-10-18 21:05' }
];

/**
 * 分页获取订单列表
 * @param pageNo 页码，从 1 开始
 * @param pageSize 单页条数，默认 10
 * @param keyword 标题关键词，空串表示不筛选
 * @returns 当前页订单
 */
export function fetchOrderListApi(
  pageNo: number = 1,
  pageSize: number = 10,
  keyword: string = ''
): Promise<Array<OrderItem>> {
  // TODO 后端就绪后只替换函数体，签名保持不变
  return new Promise<Array<OrderItem>>((resolve) => {
    setTimeout((): void => {
      resolve(MOCK_ORDER_LIST);
    }, 300);
  });
}
```

- 数组假数据给 3 条，对象假数据给一个完整实例。
- 延迟至少 300ms，才能观察 loading / 空态 / 错误态。
- 后端就绪时只替换函数体，页面调用不变。
- 无后端数据的纯展示页不伪造业务数据，也不强行创建空接口文件。

---

## 4.9 页面与组件交付

### 4.9.1 新增页面流程

```text
确定页面形态与目录
  -> 写完整 definePage
  -> 搭根 view 与滚动区
  -> 按需拆 components / modules
  -> 接入 src/api
  -> 页面根组件或模块组件取数
  -> 纯展示层只传 Props / 接 Emits
  -> 验证
```

### 4.9.2 交付清单

| 项目 | 要求 |
| :--- | :--- |
| 页面入口 | `definePage` 字段齐全，`name` 唯一 |
| 页面骨架 | 根节点为 `view`，滚动结构合理 |
| 目录 | 简单页面不创建空目录；`modules/` 下无 `common/` |
| 取数 | 只有页面根组件和模块组件发请求 |
| 共享接口 | 根组件请求一次，Props 下发 |
| 组件提升 | 超过 2 个页面才进入 `src/components/` |
| 组件职责 | 纯展示，Props / Emits，不调用 API |
| 数据 | 有后端数据接入 `src/api`，页面无假数据 |
| 验证 | 运行类型检查与差异检查，原生相关另跑真机 |

```bash
git diff --check
pnpm typecheck
```

`pnpm typecheck` 不等于 UTS 原生编译通过；涉及 Kotlin 禁令、原生组件或真机行为时，必须另跑 HBuilderX / 真机验证。

---

## 4.10 高频坑点

| # | 错误 | 正确做法 |
| :--- | :--- | :--- |
| 1 | 简单页面先建 `components/`、`common/`、`modules/` | 默认只写根页面，按需拆分 |
| 2 | 在 `modules/` 下建 `common/` | `modules/` 下没有 `common/` |
| 3 | 纯展示组件里使用 `useQuery` | 由根组件或模块组件取数，Props 下发 |
| 4 | 两个模块各自请求同一接口 | 根组件请求一次，Props 下发 |
| 5 | 两个页面复用的组件就放进 `src/components/` | 超过 2 个页面，即第 3 个页面开始才提升 |
| 6 | 根容器使用 `<scroll-view>` | 根用 `<view>`，滚动区放内部 |
| 7 | 用 `100vh` / `100%` 算页面高度 | 使用 `flex-1` / `availableHeight` |
| 8 | 长列表用 `<scroll-view>` 承载 | 优先 `<z-paging-x>` |
| 9 | 缺 `name` / `debug` / `debugHome` / `navigationStyle` | `definePage` 字段写全 |
| 10 | 普通页随意 `showBack: false` | 默认 `true`；只有 TabBar 页和禁止返回的入口页才 `false` |
| 11 | 没有需求却开启下拉刷新 | 默认 `false`，明确需要才 `true` |
| 12 | 开启下拉刷新却不停止 | 调用 `stopNavbarPullDownRefresh()` 闭环 |
| 13 | 同时写顶层与 `style.enablePullDownRefresh` | 只写顶层字段 |
| 14 | 页面私有组件直接写短横线标签 | 页面 `components/` 必须手动 import |
| 15 | 页面里用 `ref([...])` 写死业务数据 | 数据走 `src/api` |
| 16 | 页面直接调用 `http` 或 `uni.request` | 页面 → `src/api` → `src/http` |
| 17 | 用 `onLoad(options)` 取参数 | 使用 `useRoute().query` |
| 18 | 直接调用 `uni.navigateTo` | 使用 `useRouter()` |
| 19 | 页面自己维护 `loading` / `list` 副本 | 直接使用 Query / Mutation 状态 |
| 20 | 修改 `queryKey` 中的 Ref 后又手动 `refetch` | 赋值即自动重查 |
| 21 | 从 Hook 解构 `error` | 字段是 `lastError` |
| 22 | 模板写 `{{ listPending.value }}` | 模板直接写 `{{ listPending }}` |
| 23 | 为 `listPending` / `listFetching` / `listError` 包 `computed` | 模板直接使用 Ref |
| 24 | 列表写 `initialData: []` 还期待首屏 loading | 需要 loading 就不要设置 `initialData` |
| 25 | 组件直接修改 props | 抛出 Emits，由父级修改 |
| 26 | 纯文本插槽直接写 `<slot>11</slot>` | 用 `<text><slot>11</slot></text>` 承载纯文本；任意节点插槽保持 `<slot />` |

---

## 4.11 速查

| 我要做什么 | 去哪里 |
| :--- | :--- |
| 判断页面要哪些目录 | 分册 5 |
| 判断组件放哪、何时提升 | 分册 5 |
| 确认谁能发请求 | 本分册 4.1.3、分册 5 |
| 写页面骨架 | 本分册 4.2 |
| 写 `definePage` | 本分册 4.3 |
| 写标准业务页 | 本分册 4.4 |
| 使用 Query / Mutation 状态 | 本分册 4.5、分册 10 |
| 引用 Easycom 组件 | 本分册 4.6 |
| 新建纯展示组件 | 本分册 4.7 |
| 写接口函数 | 分册 6 |
| 组织 API 目录 | 分册 5.6 |
| 处理路由参数与跳转 | 分册 8 |
| 处理下拉刷新与整页滚动 | 分册 7、本分册 4.2 / 4.3 |

---

## 4.12 自检清单

- [ ] 简单业务没有为了拆而拆，`components/` 和 `modules/` 都是按需创建。
- [ ] `modules/` 下没有 `common/`。
- [ ] 只有页面根组件和 `modules/<block>/<Block>Module.uvue` 调用 API / Query hooks。
- [ ] `components/`、`common/`、模块 `components/`、`src/components/` 都只接收 Props、抛出 Emits。
- [ ] 两个模块共用接口时，由根组件请求一次，Props 下发。
- [ ] 同一组件被超过 2 个页面使用后才进入 `src/components/`。
- [ ] 页面根节点为 `<view class="flex flex-col flex-1">`。
- [ ] 没有用 `100vh` / `100%` 硬算页面高度。
- [ ] 分页 / 长列表优先 `<z-paging-x>`。
- [ ] 每个页面都有唯一 `name`、`debug: false`、`debugHome: false`、`navigationStyle: 'custom'`。
- [ ] `showBack` 默认 `true`；TabBar 页和禁止返回的入口页才 `false`。
- [ ] `hideStatusBar` / `hideNavbar` 默认 `false`，只在明确自定义 navbar 场景调整。
- [ ] `enablePullDownRefresh` 默认 `false`；开启后有 `stopNavbarPullDownRefresh()` 闭环。
- [ ] 页面没有直接调用 HTTP，业务数据来自 `src/api`。
- [ ] 页面没有 `ref([...])` 伪造业务数据。
- [ ] 路由参数使用 `useRoute()`，跳转使用 `useRouter()`。
- [ ] Query / Mutation 解构字段使用业务别名。
- [ ] 模板直接使用 `listPending` / `listFetching` / `listError`，没有 `.value`。
- [ ] 没有为纯转发状态创建 `computed`。
- [ ] 错误字段使用 `lastError`。
- [ ] 需要首屏加载态的列表没有设置 `initialData: []`。
- [ ] 写操作成功后按前缀 `invalidateQueries`。
- [ ] Easycom 范围内组件没有手动 import；页面私有组件已手动 import。
- [ ] 组件只有一个根节点，使用 `<script setup lang="uts">`。
- [ ] Props 使用运行时对象，一个业务对象一个 prop；Emits 使用类型字面量。
- [ ] 组件没有直接修改 props。
- [ ] 变量有一行说明注释，方法有 JSDoc，Query / Mutation 使用普通注释。
- [ ] 纯文本插槽由 `<text>` 承载；任意节点插槽保持 `<slot />`，没有被误包进 `<text>`。
- [ ] 已运行 `git diff --check` 与 `pnpm typecheck`；原生相关另做真机验证。
