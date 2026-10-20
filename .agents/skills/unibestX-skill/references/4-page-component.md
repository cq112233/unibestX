# 4 页面与组件手册（骨架 · `definePage` · 标准业务页 · 组件写法 · 交付）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：**新建 / 改造页面或组件时**。有接口的页面直接抄 4.3；骨架与 `definePage` 看 4.1 / 4.2；组件引用看 4.4、**组件写法看 4.5**；流程与交付看 4.6。
>
> **与其它分册的分工**：本分册讲**「页面与组件的文件怎么写」**。**组件放在哪个目录 → 分册 5.2**；页面目录怎么分层、数据归谁 → 分册 5；接口函数怎么写 → 分册 6；样式为什么这么写 → 分册 2；跨端差异 → 分册 3；`useRoute` / `useRouter` 细节 → 分册 8。
>
> **30 秒速记**：`definePage` 写全 → 根 `view + flex flex-col flex-1` → 内部 `scroll-view` → 读用 `useQuery`、写用 `useMutation`、成功后 `invalidateQueries` → 跳转 `useRouter()` → 同批建 `src/api/<page>/`。**组件：单根节点 + 运行时 props + `defineEmits<{...}>`。**
>
> 📌 **4.1 页面骨架** → **4.2 `definePage`** → **4.3 标准业务页（含 4.3.5 假数据写法）** → **4.4 组件引用** → **4.5 组件写法** → **4.6 流程与交付** → **4.7 坑点** → **4.8 速查** → **4.9 红线**。**新建页面抄 4.1 + 4.3，新建组件抄 4.5。**

---

## 4.1 页面骨架（三种形态）

### 4.1.1 上固定 + 下滚动（最常用）

```html
<template>
  <view class="flex flex-col flex-1 bg-[#f8fafc]">
    <!-- 顶部固定区：天然高度，不随列表滚动 -->
    <view class="w-full px-[16px] pt-[12px] pb-[8px]">
      <view class="w-full bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] rounded-[12px] p-[16px]">
        <text class="text-[16px] font-bold text-[#1e293b]">页面标题</text>
      </view>
    </view>

    <!-- 内部自写 scroll-view：弹性撑满剩余高度 -->
    <scroll-view direction="vertical" class="flex-1 flex flex-col" :lower-threshold="50" @scrolltolower="onLoadMore">
      <view class="flex flex-col"><!-- 内容 --></view>
    </scroll-view>
  </view>
</template>
```

- **根必须是 `view`**，不能用 `scroll-view`（布局已用 scroll-view 包住页面，会双重滚动）。
- 根带 `flex flex-col flex-1` 才撑满开发高度；内部 `scroll-view` 才有可分配空间。
- 高度**不写 `100vh` / `100%`**；确实需要像素值时用 `availableHeight`。

### 4.1.2 整页自然滚动

```html
<!-- 根不加 flex-1，滚动交给 navbar 布局 -->
<view class="flex flex-col px-[16px] pt-[12px]"><!-- 内容 --></view>
```

```uts
import { onNavbarPageScroll, onNavbarReachBottom } from '@/src/layouts/navbar/utils/index.uts';
import type { PageScrollDetail } from '@/src/layouts/navbar/utils/index.uts';

onNavbarPageScroll((e: PageScrollDetail): void => {
  console.log('scrollTop', e.scrollTop);
});
onNavbarReachBottom((): void => {
  // 加载更多
});
```

> `navbar` 布局下原生 `onPageScroll` / `onReachBottom` **不会触发**，必须用上面的封装。

### 4.1.3 TabBar 页薄壳

```html
<!-- src/pages/<page>/<page>.uvue：只做 definePage 与 Tab 联动 -->
<template>
  <BasicView />
</template>

<script setup lang="uts">
import BasicView from './views/BasicView.uvue';
import { notifyPageHide, notifyPageShow, setCurIdxByKey } from '@/src/tabbar/index.uts';

definePage({
  layout: 'navbar',
  showBack: false,
  enablePullDownRefresh: true,
  style: { navigationBarTitleText: '基础', navigationStyle: 'custom' }
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

> `views/` 只给 TabBar 页用；普通页入口自己就是根视图。真实先例：`src/pages/basic/basic.uvue`。

---

## 4.2 `definePage` 全字段

每个页面**必须**在 `<script setup lang="uts">` 顶部写完整 `definePage`：

```uts
definePage({
  customPageClass: 'page-container',                    // 页面根容器自定义类名（配 layout 使用）
  customPageStyle: 'background-color: transparent;',     // 页面根容器行内样式（穿透样式隔离）
  name: 'orderList',                                     // 路由名 → useRoute().name；不写则取路径最后一段
  debug: false,                                          // 沙盒单页调试开关（调试完必须改回 false）
  debugHome: false,                                      // 沙盒模式下设为启动首页（全局仅 1 页可 true）
  type: 'home',                                          // 仅首页写 'home'，其余页面不写
  layout: 'navbar',                                      // 布局：navbar / default / empty
  showBack: true,                                        // 导航栏返回箭头（TabBar 页 false）
  hideStatusBar: false,                                  // 是否隐藏状态栏
  hideNavbar: false,                                     // 是否隐藏导航栏
  enablePullDownRefresh: false,                          // 自定义下拉刷新（只写在顶层，默认 false）
  style: {
    navigationBarTitleText: '订单列表',                    // 标题（支持 i18n key）
    navigationStyle: 'custom'                            // 必须写：隐藏系统原生导航栏
  }
});
```

| 字段 | 何时用 | 备注 |
| :--- | :--- | :--- |
| `type: 'home'` | **仅** `src/pages/index/index.uvue` | 全局唯一，自动排 `pages[0]` |
| `showBack` | TabBar 页 `false`，其它页 `true` | 缺省会渲染空返回箭头 |
| `enablePullDownRefresh` | 需要下拉刷新时 `true` | 必须在 `onNavbarPullDownRefresh` 里 `stopNavbarPullDownRefresh()` 闭环；**不要**再写 `style.enablePullDownRefresh`（两者并存时系统优先原生下拉） |
| `style.navigationStyle` | 每个页面都要 | 缺了会同时渲染系统导航栏与自定义导航栏 |
| `name` | 需要用 `router.push({ name })` 时 | 不写则回落到路径最后一段 |

> 首页使用函数式 `definePage((options) => {...})` 做多端标题 / 开关差异，见 `src/pages/index/index.uvue`；普通页用静态对象即可。

---

## 4.3 标准业务页：`useRoute` + `useRouter` + `useQuery` + `useMutation` + `useQueryClient`

> **这是「一个页面的标准形态」**：路由读参 → 声明式查询 → 声明式变更 → 缓存失效。
> 钩子签名见 [`uni_modules/request-bestX/readme.md`](../../../../uni_modules/request-bestX/readme.md)（二 / 三 / 四章）；接口函数见分册 6；**后端没就绪时的假数据写法见 4.3.5**；路由细节见分册 8。

### 4.3.1 完整页面

```html
<template>
  <view class="flex flex-col flex-1 bg-[#f8fafc]">

    <!-- 顶部：路由参数 + 搜索（结构级状态） -->
    <view class="w-full px-[16px] pt-[12px] pb-[8px]">
      <view class="w-full bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] rounded-[12px] p-[16px]">
        <text class="text-[16px] font-bold text-[#1e293b]">订单列表</text>
        <text class="text-[12px] leading-[18px] text-[#64748b] mt-[4px]">来源：{{ fromPage }} · 共 {{ total }} 单</text>
        <input
          v-model="keywordInput"
          class="h-[36px] bg-[#f8fafc] rounded-[8px] px-[12px] mt-[10px] text-[13px] text-[#334155]"
          placeholder="输入关键字后点搜索"
          @confirm="onSearch"
        />
        <view class="flex flex-row mt-[10px]">
          <view class="flex-1 h-[34px] rounded-[8px] bg-[#2563eb] items-center justify-center mr-[8px]" @click="onSearch">
            <text class="text-[13px] font-bold text-[#ffffff]">搜索</text>
          </view>
          <view class="flex-1 h-[34px] rounded-[8px] bg-[#0d9488] items-center justify-center" @click="onCreate">
            <text class="text-[13px] font-bold text-[#ffffff]">{{ creating ? '创建中…' : '新建订单' }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 列表：状态全部由 useQuery 驱动 -->
    <scroll-view direction="vertical" class="flex-1 flex flex-col" :lower-threshold="50">

      <view v-if="isLoading" class="flex flex-col items-center py-[48px]">
        <text class="text-[13px] text-[#94a3b8]">正在加载…</text>
      </view>

      <view v-else-if="isError" class="flex flex-col items-center py-[48px]">
        <text class="text-[13px] text-[#94a3b8]">{{ errorText }}</text>
        <view class="h-[32px] px-[16px] rounded-[16px] bg-[#2563eb] items-center justify-center mt-[12px]" @click="onRetry">
          <text class="text-[13px] text-[#ffffff]">重试</text>
        </view>
      </view>

      <view v-else-if="list.length == 0" class="flex flex-col items-center py-[48px]">
        <text class="text-[13px] text-[#94a3b8]">暂无订单</text>
      </view>

      <view v-else class="flex flex-col">
        <view
          v-for="item in list"
          :key="item.id"
          class="flex flex-col bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] rounded-[12px] p-[14px] mx-[16px] mb-[10px]"
          @click="onOpenDetail(item)"
        >
          <view class="flex flex-row items-center justify-between">
            <text class="text-[14px] font-semibold text-[#1e293b]">{{ item.title }}</text>
            <text class="text-[14px] font-bold text-[#2563eb]">¥{{ item.amount }}</text>
          </view>
          <view class="flex flex-row items-center justify-between mt-[6px]">
            <text class="text-[12px] text-[#94a3b8]">{{ item.createdText }}</text>
            <view class="h-[26px] px-[10px] rounded-[13px] bg-[#fee2e2] items-center justify-center" @click.stop="onDelete(item)">
              <text class="text-[12px] text-[#b91c1c]">删除</text>
            </view>
          </view>
        </view>
      </view>

      <view class="flex flex-col items-center py-[16px]">
        <text class="text-[12px] text-[#94a3b8]">{{ isFetching ? '同步中…' : '没有更多了' }}</text>
      </view>

    </scroll-view>

  </view>
</template>

<script setup lang="uts">
import { computed, ref } from 'vue';

// 1. 路由：读参数 / 跳转（分册 8）
import { useRoute, useRouter } from '@/uni_modules/route-bestX/index.uts';

// 2. 声明式请求：查询 / 变更 / 缓存（request-bestX 二、三、四章）
import { useQuery, useMutation, useQueryClient } from '@/uni_modules/request-bestX/index.uts';
import type { QueryFunctionContext, QueryOptions, MutationOptions } from '@/uni_modules/request-bestX/index.uts';

// 3. 数据来源：接口层（分册 6），页面不直接 http.get、不写死假数据
import { fetchOrderList, createOrder, deleteOrder } from '@/src/api/order/order.uts';
import type { OrderItem } from '@/src/api/order/order.uts';

import { toastSuccess, toastError } from '@/src/utils/toast/index.uts';

definePage({
  customPageClass: 'page-container',
  customPageStyle: 'background-color: transparent;',
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

const route = useRoute();
const router = useRouter();
const queryClient = useQueryClient();

// ==========================================
// 一、路由参数 → 业务状态
// ==========================================

/** 来源页：query 值恒为 string，缺失给空串 */
const fromPage = computed((): string => route.query.get('from') ?? '');

/** 搜索关键字：从路由参数初始化，之后由输入框接管 */
const keyword = ref<string>(route.query.get('keyword') ?? '');
const keywordInput = ref<string>(route.query.get('keyword') ?? '');

// ==========================================
// 二、useQuery：列表查询（queryKey 放 Ref 即自动重拉）
// ==========================================

const listQuery = useQuery<Array<OrderItem>>({
  queryKey: ['order', 'list', keyword],
  queryFn: (_ctx: QueryFunctionContext): Promise<Array<OrderItem>> => {
    return fetchOrderList(1, 20, keyword.value);
  },
  staleTime: 10000
} as QueryOptions<Array<OrderItem>>);

// ==========================================
// 三、useMutation：新建 / 删除（成功后失效缓存）
// ==========================================

const createMutation = useMutation<OrderItem, string>({
  mutationKey: ['orderCreate'],
  mutationFn: (title: string): Promise<OrderItem> => {
    return createOrder(title);
  },
  onSuccess: (_created: OrderItem, _title: string, _ctx: any): void => {
    toastSuccess('创建成功');
    // 失效前缀：所有以 ['order','list'] 开头的查询都会重拉
    queryClient.invalidateQueries(['order', 'list']);
  },
  onError: (err: Error, _title: string, _ctx: any): void => {
    toastError(err.message);
  }
} as MutationOptions<OrderItem, string>);

const deleteMutation = useMutation<boolean, OrderItem>({
  mutationKey: ['orderDelete'],
  mutationFn: (item: OrderItem): Promise<boolean> => {
    return deleteOrder(item.id);
  },
  onSuccess: (_ok: boolean, _item: OrderItem, _ctx: any): void => {
    toastSuccess('已删除');
    queryClient.invalidateQueries(['order', 'list']);
  },
  onError: (err: Error, _item: OrderItem, _ctx: any): void => {
    toastError(err.message);
  }
} as MutationOptions<boolean, OrderItem>);

// ==========================================
// 四、派生状态：全部从 hook 的 Ref 计算，页面不另存一份
// ==========================================

const isLoading = computed((): boolean => listQuery.isLoading.value == true);
const isFetching = computed((): boolean => listQuery.isFetching.value == true);
const isError = computed((): boolean => listQuery.isError.value == true);
const creating = computed((): boolean => createMutation.isPending.value == true);

const list = computed((): Array<OrderItem> => {
  const data = listQuery.data.value;
  return data != null ? data : [] as Array<OrderItem>;
});

const total = computed((): number => list.value.length);

const errorText = computed((): string => {
  const err = listQuery.error.value;
  return err != null ? err.message : '加载失败';
});

// ==========================================
// 五、交互：只改状态、调 mutate、走 router
// ==========================================

function onSearch(): void {
  keyword.value = keywordInput.value;   // keyword 在 queryKey 里，赋值即自动重拉
}

function onRetry(): void {
  listQuery.refetch();
}

function onCreate(): void {
  if (creating.value) {
    return;
  }
  createMutation.mutate('新订单');
}

function onDelete(item: OrderItem): void {
  deleteMutation.mutate(item);
}

function onOpenDetail(item: OrderItem): void {
  router.push({ path: '/src/sub/order-detail/order-detail', query: { id: item.id } });
}
</script>

<style></style>
```

### 4.3.2 五段职责

| 段落 | 做什么 | 关键约束 |
| :--- | :--- | :--- |
| 一 | `useRoute()` 读参 → `ref` | `query` 恒为 `string`，必须兜底 |
| 二 | `useQuery` 声明 `queryKey + queryFn` | **Ref 放 `queryKey` 即自动重拉**，不要再写 `watch + refetch` |
| 三 | `useMutation` + `onSuccess` 里 `invalidateQueries` | 传 queryKey **数组前缀**，不要拼字符串 |
| 四 | 用 `computed` 把 `Ref` 派生给模板 | 页面**不另存** `loading` / `list` 副本 |
| 五 | 交互只做：改状态 / `mutate()` / `router.push()` | 页面不写 `try/catch`，不写请求 |

### 4.3.3 UTS 写法要点

```uts
// ✅ 必须用 as QueryOptions<T> / as MutationOptions<TD, TV> 收口，泛型才推得出来
const q = useQuery<FooItem>({ queryKey: ['foo', id], queryFn: ... } as QueryOptions<FooItem>);

// ✅ 回调参数全标注；不用的参数加下划线前缀
onSuccess: (_data: FooItem, _vars: FooItem, _ctx: any): void => { ... }

// ✅ 可空详情：泛型用非空类型，把「查无数据」转成 rejection
queryFn: (_ctx: QueryFunctionContext): Promise<FooItem> => {
  return fetchFooById(id).then((detail: FooItem | null): Promise<FooItem> => {
    if (detail == null) {
      return Promise.reject(new Error('查无数据')) as Promise<FooItem>;
    }
    return Promise.resolve(detail);
  });
}

// ✅ 依赖查询：enabled 用 getter，条件不满足时不发请求
enabled: (): boolean => detailId.value > 0

// ❌ 不要在页面里自己维护 isLoading / isPending
const loading = ref<boolean>(false);      // hook 已接管，重复维护必然不同步

// ❌ 不要在 queryFn 里 try/catch 吞异常：失败交给 query.error
```

### 4.3.4 读用 `useQuery`，写用 `useMutation`

| 场景 | 用谁 |
| :--- | :--- |
| 列表 / 详情 / 配置读取 | `useQuery` |
| 搜索 / 筛选 / 分页（参数变即重查） | `useQuery`（Ref 放 `queryKey`） |
| 新建 / 修改 / 删除 / 上传 | `useMutation`，成功后 `invalidateQueries` |
| 轮询 | `useQuery({ refetchInterval })`，不要自己 `setInterval` |
| 断网恢复自动刷新 | `useQuery` 默认 `refetchOnReconnect: true` |
| 手动触发的一次性拉取 | `useQuery({ enabled: false })` + `refetch()` |
| **接口还没好** | 接口函数先定型，函数体用 `new Promise` + 假数据（4.3.5） |

> 真实先例：`src/sub/httpBasicDemo/components/CrudDemoCard.uvue`、`VueQueryDemoCard.uvue`。

---

### 4.3.5 接口还没好：预留函数位置 + `new Promise` 假数据

> 后端没就绪时**不要**在页面里写死数据、也不要改页面结构。正确做法是：**接口函数签名先定死，函数体用 `new Promise` 返回假数据**。后端好了只换函数体，页面一行不改。

**规则**：

1. 接口文件里**先写完整签名**（函数名 / 入参含默认值 / 返回 `Promise<T>`），这是契约，后端好了也不改；
2. **每个函数必须有 JSDoc**：一句职责 + `@param` 逐参写全（含义、默认值、不传时的行为）+ `@returns`（不显然时）；
3. 函数体统一用 `new Promise<T>((resolve) => { setTimeout(() => { resolve(MOCK) }, 300) })` —— **加 300ms 延迟**，才能验证页面的 loading / 骨架屏 / 空态；
4. 假数据形态：**数组给 3 条**、**对象给一个完整实例 `{}`**、**布尔给 `true`**；
5. 假数据常量放**本函数上方**，命名 `MOCK_<模块>_<用途>`，`Array<XxxItem>` 全量标注。

```uts
// ==========================================
// 文件位置：src/api/order/order.uts（后端未就绪时的完整写法）
// ==========================================
import type { OrderItem } from './types.uts';

// ---------- 假数据：数组给 3 条，字段与契约类型逐字对齐 ----------
const MOCK_ORDER_LIST: Array<OrderItem> = [
  { id: 1, title: '洗护套装', amount: 199, statusText: '待发货', createdText: '2026-10-20 09:12' },
  { id: 2, title: '咖啡豆 500g', amount: 89, statusText: '已完成', createdText: '2026-10-19 18:40' },
  { id: 3, title: '蓝牙耳机', amount: 329, statusText: '待付款', createdText: '2026-10-18 21:05' }
];

/**
 * 分页获取订单列表
 * @param pageNo 页码，从 1 开始计数（默认第 1 页）
 * @param pageSize 单页条数，默认 10
 * @param keyword 标题关键词，空串表示不筛选
 * @returns 订单数组；后端就绪后改为返回分页容器时需同步改签名
 */
export function fetchOrderList(pageNo: number = 1, pageSize: number = 10, keyword: string = ''): Promise<Array<OrderItem>> {
  // TODO 后端就绪后换成 http.get，签名不动
  return new Promise<Array<OrderItem>>((resolve) => {
    setTimeout((): void => {
      resolve(MOCK_ORDER_LIST);
    }, 300);
  });
}

// ---------- 详情：对象给一个完整实例 ----------
const MOCK_ORDER_DETAIL: OrderItem = {
  id: 1,
  title: '洗护套装',
  amount: 199,
  statusText: '待发货',
  createdText: '2026-10-20 09:12'
};

/**
 * 获取订单详情
 * @param id 订单主键（传 0 或负数时后端会返回 404，这里返回 null）
 * @returns 订单详情；不存在时为 null
 */
export function fetchOrderDetail(id: number): Promise<OrderItem | null> {
  // TODO 后端就绪后换成 http.get，签名不动
  return new Promise<OrderItem | null>((resolve) => {
    setTimeout((): void => {
      // 两个分支类型不同，用 if 而不是三元（分册 1.20）
      if (id > 0) {
        resolve(MOCK_ORDER_DETAIL);
        return;
      }
      resolve(null);
    }, 300);
  });
}

/**
 * 创建订单
 * @param title 订单标题，不能为空
 * @returns 创建后的订单（含后端生成的 id）
 */
export function createOrder(title: string): Promise<OrderItem> {
  // TODO 后端就绪后换成 http.post，签名不动
  return new Promise<OrderItem>((resolve) => {
    setTimeout((): void => {
      resolve({
        id: 4,
        title: title,
        amount: 0,
        statusText: '待付款',
        createdText: '2026-10-20 10:00'
      } as OrderItem);
    }, 300);
  });
}

/**
 * 删除订单
 * @param id 订单主键
 * @returns 是否删除成功
 */
export function deleteOrder(id: number): Promise<boolean> {
  // TODO 后端就绪后换成 http.delete，签名不动
  return new Promise<boolean>((resolve) => {
    setTimeout((): void => {
      resolve(true);
    }, 300);
  });
}
```

页面侧**完全不知道数据是假的**，4.3.1 的代码一行都不用改：

```uts
import { fetchOrderList, createOrder, deleteOrder } from '@/src/api/order/order.uts';
```

**后端就绪时只替换函数体**（签名 / JSDoc 全部保留）：

```uts
/**
 * 分页获取订单列表
 * @param pageNo 页码，从 1 开始计数（默认第 1 页）
 * @param pageSize 单页条数，默认 10
 * @param keyword 标题关键词，空串表示不筛选
 * @returns 订单数组
 */
export function fetchOrderList(pageNo: number = 1, pageSize: number = 10, keyword: string = ''): Promise<Array<OrderItem>> {
  return http.get<UTSJSONObject>('/api/v1/order/list', {
    params: { pageNo: pageNo, pageSize: pageSize, keyword: keyword } as UTSJSONObject
  } as HttpRequestConfig).then((data: UTSJSONObject): Array<OrderItem> => {
    const rawList = data.getArray<UTSJSONObject>('list', [] as Array<UTSJSONObject>);
    return rawList.map((raw: UTSJSONObject): OrderItem => {
      return {
        id: raw.getNumber('id') ?? 0,
        title: raw.getString('title') ?? '',
        amount: raw.getNumber('amount') ?? 0,
        statusText: raw.getString('statusText') ?? '',
        createdText: raw.getString('createdText') ?? ''
      } as OrderItem;
    });
  });
}
```

> ⚠️ 三条禁忌：① 假数据**不许写进 `.uvue`**（`ref([...])` 一律禁止）；② 假数据**不许删 JSDoc**（注释也是契约的一部分）；③ `new Promise` 里的 `setTimeout` **不要省略延迟** —— 没延迟就看不出 loading 态的 bug。

---

## 4.4 Easycom 与组件库优先

> 本节只讲**页面 / 组件里怎么引用组件**；**新建组件的写法**（`defineProps` / `defineEmits` / `defineExpose` / 取数边界）见 4.5，**放在哪个目录**见分册 5.2。

- `uni_modules/*/components/` 与根 `components/` 的组件，模板里**直接用短横线标签**，不手动 `import`：

  ```html
  <uni-icons type="info" size="20" color="#3b82f6" />
  ```

- **页面私有组件**（`src/pages/*/components/`、`src/sub/*/components/`）**不在扫描范围**，必须手动 `import`。
- 有现成能力就用：图标 `<uni-icons>` / `<lime-icon>`、图表 `<e-chart>`、分页列表 `<z-paging-x>`、富文本 `<mp-html>`、签名 `<lime-signature>`。
- **分页 / 长列表优先 `<z-paging-x>`**（内置 list-view 虚拟复用、触底追加、空态与 loading）；覆盖不了才手写 `<list-view>` + `<list-item>`；**严禁 `<scroll-view>` 承载长列表**。
- 改 easycom 配置改 `pages.config.json`（`pages.json` 是生成物），保留 `autoscan: true`。

---

## 4.5 组件写法标准（新建 / 改组件必读）

> 组件**放在哪个目录**由分册 5.2 规定；本节只讲**组件文件本身怎么写**。

### 4.5.1 文件骨架

```html
<template>
  <!-- 组件用途：订单卡片（纯展示，数据由父级传入，点击抛 select） -->
  <view class="flex flex-col bg-[#ffffff] border-[1px] border-solid border-[#e2e8f0] rounded-[12px] p-[14px]" @click="onClick">
    <text class="text-[14px] font-semibold text-[#1e293b]">{{ order.title }}</text>
    <text v-if="showTime" class="text-[12px] text-[#94a3b8] mt-[4px]">{{ order.createdText }}</text>
  </view>
</template>

<script setup lang="uts">
import { computed } from 'vue';
import type { OrderItem } from '@/src/api/order/order.uts';

const props = defineProps({
  /** 订单数据（一个业务对象一个 prop，不要摊平字段） */
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

// 运行时 props 是弱类型，统一在组件内断言成强类型再用
const order = computed((): OrderItem => props.order as OrderItem);

const emit = defineEmits<{
  (e: 'select', order: OrderItem): void;
}>();

function onClick(): void {
  emit('select', order.value);
}
</script>

<style></style>
```

- **模板只有一个根节点**：蒸汽模式下自定义组件的单根节点才能自动透传 `flatten`，多根会让它静默失效（分册 3.24）。
- **`<script setup lang="uts">`**：蒸汽模式不支持选项式 `<script>`（分册 3.25）。
- **`<style>` 能空就空**：能用原子类表达的别写样式表；必须写时加 `scoped` 并守 8 阶排序（分册 2.24）。

### 4.5.2 `defineProps`：运行时对象 + 一个业务对象一个 prop

```uts
// ✅ 仓库统一写法（NavBar / NestedScroll / TabbarMaskModal 等 14 处先例，全部是运行时对象）
const props = defineProps({
  /** 弹窗显隐控制 */
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

// 对象型 prop 用 computed 断言成强类型（仓库做法：TabbarItem / NavBar）
const order = computed((): OrderItem => props.order as OrderItem);

// ❌ 同一份数据的字段摊平成一串 prop：改一个字段，调用点全要改
// <OrderCard :id="o.id" :title="o.title" :created-text="o.createdText" />

// ✅ 一个对象搞定
// <OrderCard :order="o" />
```

- **必填写 `required: true`**；布尔默认 `false`，字符串默认 `''`，对象给 `default: () => ({})`。
- **对象型 prop 一律 `type: Object` + 组件内 `computed(() => props.x as XxxType)`** —— 仓库无 `PropType` 先例，运行时 props 本身就是弱类型。
- **结构级意图可以单独一个 prop**（`:activeId`、`:maxCount`）；全局态（主题 / 语言）**不传**，组件内直读 store（分册 5 铁律 4）。
- 不用 `interface` 描述 props（分册 1.1）。

### 4.5.3 `defineEmits`：类型字面量 + 双写事件名

```uts
const emit = defineEmits<{
  (e: 'select', order: OrderItem): void;
  (e: 'update:visible', visible: boolean): void;
}>();
```

- uni-app X 里**驼峰与短横线是两种事件名**，调用点可能写 `@loadMore` 也可能写 `@load-more`。两种都要支持时**两个都声明、两处都 emit**（先例：`src/components/NestedScroll/NestedScroll.uvue`）。
- `v-model` 用 `update:xxx` 约定。
- **组件内部不直接改 props**：要改就 emit，让父级改（单向数据流）。

### 4.5.4 `defineExpose`：只暴露父级必须调的方法

```uts
/** 滚到顶部 */
function scrollToTop(): void { /* ... */ }

defineExpose({
  scrollToTop
});
```

父级拿实例时必须用 `ComponentPublicInstance` 强类型，**严禁 `as any` 后调 `$callMethod`**（分册 1.23）：

```uts
const cardRef = ref<ComponentPublicInstance | null>(null);
cardRef.value?.$callMethod('scrollToTop');
```

只暴露必要方法；内部状态不要通过 expose 让父级读写。

### 4.5.5 取数边界

| 组件层 | 能否取数 | 说明 |
| :--- | :--- | :--- |
| L0 根视图（`views/XxxView.uvue` / 普通页入口） | ✅ | 仅**多模块共用**的接口；调一次后 Props 下发给各 L1 模块 |
| L1 模块容器（`components/<模块>/<模块>.uvue`） | ✅ | 本模块专属接口，数据自持（`OrderModule` 调 order，`CouponModule` 调 coupon） |
| L2 私有视图（`<模块>/components/*.uvue`） | ❌ | 只吃 Props、只抛 Emits |
| `components/common/` | ❌ | 纯展示外壳 |
| `src/components/`（全局组件） | ❌ | 同上；要请求能力就让调用方传回调 |

### 4.5.6 组件自检

- [ ] **单一根节点**，`<script setup lang="uts">`
- [ ] props 用运行时对象，**一个业务对象一个 prop**，必填 `required: true`、布尔默认 `false`
- [ ] 对象型 prop 在组件内 `computed(() => props.x as XxxType)`
- [ ] 事件用 `defineEmits<{...}>()`，需要时驼峰与短横线双写
- [ ] 不直接改 props；只有需要暴露方法时才 `defineExpose`
- [ ] L2 / common / 全局组件**不取数**；接口只在根视图（共用接口）与 L1 模块容器（专属接口）里调
- [ ] 组件顶部一句用途注释；模板功能块各一句；变量不写注释（分册 5 铁律 6）
- [ ] 单文件 ≤ 500 行，层级 ≤ 3 级（分册 5 铁律 2）

---

## 4.6 新增页面流程与交付

```text
定页面类型（TabBar / 普通 / 分包）
  → 写完整 definePage（4.2）
  → 根 view + flex-1，内部 scroll-view（4.1）
  → 数据：读 useQuery / 写 useMutation（4.3）
  → 组件：easycom 优先（4.4）
  → 同批建 src/api/<page>/<page>.uts（分册 6）
  → 跑验证 → 过红线
```

| 交付物 | 要求 |
| :--- | :--- |
| `src/sub/<page>/<page>.uvue` 或 `src/pages/<page>/<page>.uvue` | `definePage` 字段齐全 |
| `src/api/<page>/<page>.uts` | 与页面目录**逐字同名**，函数返回 `Promise<T>`，分页入参 `(pageNo = 1, pageSize = 10, keyword = '')` |
| TabBar 页额外 | `views/<Page>View.uvue` + `src/tabbar/config.uts` 新项 |

```bash
pnpm lint && pnpm lint:style && pnpm test && pnpm typecheck
```

> `pnpm typecheck` 只是 TS 类型层，**不等于 UTS 编译通过**；涉及 Kotlin 禁令时按分册 3.15 / 3.20 跑真机。未跑真机要**明确说明**。

---

## 4.7 坑点（高频）

| # | 坑 | 正确做法 |
| :--- | :--- | :--- |
| ① | 根容器用了 `scroll-view` | 根用 `view`，滚动区在根内部 |
| ② | 根忘了 `flex-1` | 内部 `scroll-view` 拿不到高度，页面只有一条 |
| ③ | `definePage` 缺 `navigationStyle: 'custom'` | 双导航栏、双标题 |
| ④ | `enablePullDownRefresh: true` 没配 `stopNavbarPullDownRefresh()` | 转圈卡死，后续无法再触发 |
| ⑤ | 同时写顶层与 `style.enablePullDownRefresh` | 系统优先原生下拉；只留顶层 |
| ⑥ | 手写 `100vh` / `100%` 算高度 | 用 `flex-1` / `availableHeight` |
| ⑦ | 页面私有组件当 easycom 直接用 | `src/pages/*/components/` 必须手动 import |
| ⑧ | 页面里 `ref([...])` 写死假数据 | 数据全部走 `src/api/<page>/` |
| ⑨ | 页面里直接 `uni.navigateTo` | 走 `useRouter()`（绕过守卫会导致登录拦截失效） |
| ⑩ | `onLoad(options)` 取参数 | 用 `useRoute().query` |
| ⑪ | 页面自己维护 `loading` / `list` 副本 | 从 `useQuery` / `useMutation` 的 Ref 派生 |
| ⑫ | 改了 `queryKey` 里的 Ref 又手动 `refetch` | 赋值即自动重拉，重复调用会多打一次请求 |

---

## 4.8 速查表

| 我要做什么 | 看哪节 | 真实文件 |
| :--- | :--- | :--- |
| 上固定 + 下滚动 | 4.1.1 | `src/sub/layoutBasicDemo/layoutBasicDemo.uvue` |
| 整页自然滚动 | 4.1.2 | `src/layouts/navbar/utils/index.uts` |
| TabBar 页薄壳 + `views/` | 4.1.3 | `src/pages/basic/basic.uvue` |
| `definePage` 全字段 | 4.2 | `src/pages/index/index.uvue` |
| **带接口的标准业务页** | **4.3** | `src/sub/httpBasicDemo/components/CrudDemoCard.uvue` |
| 查询 / 变更 / 缓存失效 | 4.3 | `VueQueryDemoCard.uvue` |
| easycom 与组件库 | 4.4 | `src/pages/function/views/FunctionView.uvue` |
| **新建 / 改造组件** | **4.5** | `src/components/TabbarMaskModal/TabbarMaskModal.uvue` |
| 生成与交付 | 4.6 | —— |

---

## 4.9 自检红线清单

- [ ] **1. `definePage` 完整** —— `layout`、`showBack`、`hideNavbar`、`hideStatusBar`、`enablePullDownRefresh`、`style.navigationBarTitleText`、`style.navigationStyle: 'custom'`
- [ ] **2. `type: 'home'` 唯一** —— 只在 `src/pages/index/index.uvue`
- [ ] **3. 根容器是 `view` + `flex flex-col flex-1`** —— 不是 `scroll-view`
- [ ] **4. 滚动区在根内部** —— 或整页自然滚动
- [ ] **5. 高度不硬算** —— 不写 `100vh` / `100%`
- [ ] **6. 下拉刷新闭环** —— 开了就有 `stopNavbarPullDownRefresh()`，且只写顶层
- [ ] **7. 滚动监听用封装** —— `onNavbarPageScroll` / `onNavbarReachBottom`
- [ ] **8. 分页 / 长列表优先 `<z-paging-x>`** —— 严禁 `<scroll-view>` 承载长列表
- [ ] **9. 读用 `useQuery`、写用 `useMutation`** —— 页面不另存 loading / 列表副本
- [ ] **10. 变更成功后 `invalidateQueries`** —— 传 queryKey 数组前缀
- [ ] **11. 数据来自接口层** —— 页面无假数据，同批建 `src/api/<page>/<page>.uts`
- [ ] **12. 接口没就绪时用假数据写法** —— 签名先定型、函数体 `new Promise` + 300ms 延迟、数组 3 条 / 对象一个完整实例（4.3.5）
- [ ] **13. 每个接口函数都有 JSDoc** —— 职责一句 + `@param` 逐参写全（含义 / 默认值）+ 返回值语义
- [ ] **14. 跳转与取参走 hooks** —— `useRouter()` / `useRoute()`
- [ ] **15. 三态齐全** —— 加载 / 空 / 错误互斥
- [ ] **16. easycom 优先** —— 页面私有组件手动 import
- [ ] **17. 组件写法合规** —— 单根节点、运行时 props、一个业务对象一个 prop、`defineEmits<{...}>`、不直接改 props（4.5）
- [ ] **18. 验证有输出** —— 声称完成前给出命令与结果；未跑真机要写明
