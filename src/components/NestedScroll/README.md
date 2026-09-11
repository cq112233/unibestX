# NestedScroll 嵌套滚动容器组件

`NestedScroll` 是专为 `uni-app X` 打造的高性能全端跨平台嵌套滚动组件。在 App 原生平台（Android / iOS）深度整合官方原生嵌套滚动引擎（`scroll-view type="nested"`），在 Web / H5 / 微信小程序平台自适应平滑降级，彻底解决多层滚动死锁、手势拦截冲突、双重滚动条以及下拉刷新手势断层等顽疾。

---

## 核心特性

- ⚡ **原生级双向手势联动**：App 端依托原生嵌套滚动，外层与内层手势无缝衔接，杜绝事件卡死。
- 📌 **支持粘性吸顶（Sticky Layout）**：原生支持 `#sticky` 插槽与 `:sticky-header="true"`，向上滑动列表时头部平滑吸附在视口顶端，不随列表滚出。
- 🔄 **完善的下拉刷新生态**：内置标准回弹与保底复位机制，支持原生黑圈样式与 `#refresher` 自定义下拉动画。
- 📊 **全生命周期状态机**：内置加载中（Loading）、失败重试（Error）、没有更多（Finished）与空数据（Empty）状态条与插槽。
- 🌐 **多端自动平滑降级**：非 App 平台（Web / H5 / 小程序）自动降级为标准滚动容器，API 保持 100% 一致。

---

## 快速上手

### 1. 基础列表与触底加载

```html
<template>
  <view class="flex-1 flex flex-col h-full">
    <NestedScroll
      ref="scrollRef"
      v-model:refreshing="refreshing"
      v-model:loading="loading"
      :finished="finished"
      :error="isError"
      :empty="list.length === 0"
      @refresh="onRefresh"
      @load-more="onLoadMore"
    >
      <!-- 数据项（App 端必须使用 list-item） -->
      <list-item v-for="item in list" :key="item.id">
        <view class="p-[14px] bg-white border-b-[1px] border-slate-100">
          <text class="text-[14px] font-bold">{{ item.title }}</text>
        </view>
      </list-item>
    </NestedScroll>
  </view>
</template>

<script setup lang="uts">
import { ref } from 'vue';
import NestedScroll from '@/src/components/NestedScroll/NestedScroll.uvue';

const refreshing = ref<boolean>(false);
const loading = ref<boolean>(false);
const finished = ref<boolean>(false);
const isError = ref<boolean>(false);
const list = ref<Array<any>>([]);

function onRefresh() {
  setTimeout(() => {
    // 重新拉取数据
    refreshing.value = false;
  }, 800);
}

function onLoadMore() {
  setTimeout(() => {
    // 追加分页数据
    loading.value = false;
  }, 800);
}
</script>
```

---

### 2. 开启粘性吸顶（Sticky Header）

当希望操作栏、分类 Tab 或控制卡片在向上滚动时**始终吸附在顶部**，配置 `:sticky-header="true"` 或使用 `#sticky` 插槽即可：

```html
<NestedScroll
  :sticky-header="true"
  @refresh="onRefresh"
  @load-more="onLoadMore"
>
  <!-- 粘性吸顶卡片：向上滑动列表时吸附在顶部不滚出视野 -->
  <template #sticky>
    <view class="p-[14px] bg-white border-b-[1px] border-slate-200">
      <text class="text-[14px] font-bold">📌 吸顶分类导航 / 操作面板</text>
    </view>
  </template>

  <!-- 列表数据项 -->
  <list-item v-for="item in list" :key="item.id">
    <view class="p-[14px]">
      <text>{{ item.title }}</text>
    </view>
  </list-item>
</NestedScroll>
```

---

### 3. 自定义四大状态插槽

组件支持高度自定义的 UI 插槽拓展：

```html
<NestedScroll ...>
  <!-- 1. 自定义下拉刷新插槽 -->
  <template #refresher>
    <view class="w-full py-[16px] items-center justify-center flex flex-row">
      <text class="text-[12px] text-blue-600 font-bold">🚀 数据极速同步中...</text>
    </view>
  </template>

  <!-- 数据项 -->
  <list-item v-for="item in list" :key="item.id"> ... </list-item>

  <!-- 2. 自定义加载中 -->
  <template #loading>
    <view class="py-[12px] items-center justify-center">
      <text class="text-[12px] text-slate-400">⚡ 正在流式加载...</text>
    </view>
  </template>

  <!-- 3. 自定义加载报错与重试 -->
  <template #error>
    <view class="py-[12px] items-center justify-center flex flex-row" @click="onLoadMore">
      <text class="text-[12px] text-red-500 mr-[6px]">服务连接中断</text>
      <text class="text-[12px] text-blue-600 font-bold">点击重试</text>
    </view>
  </template>

  <!-- 4. 自定义没有更多数据 -->
  <template #finished>
    <view class="py-[16px] items-center justify-center">
      <text class="text-[12px] text-slate-300">— 已加载完全部数据 —</text>
    </view>
  </template>

  <!-- 5. 自定义空数据状态 -->
  <template #empty>
    <view class="py-[48px] items-center justify-center">
      <text class="text-[32px] mb-[8px]">📭</text>
      <text class="text-[13px] text-slate-400">暂无任何数据记录</text>
    </view>
  </template>
</NestedScroll>
```

---

## 属性列表 (Props)

| 属性名 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `enablePullDown` | `Boolean` | `true` | 是否启用下拉刷新 |
| `enableLoadMore` | `Boolean` | `true` | 是否启用触底加载更多 |
| `refreshing` | `Boolean` | `false` | 下拉刷新激活状态（支持 `v-model:refreshing`） |
| `loading` | `Boolean` | `false` | 上拉加载激活状态（支持 `v-model:loading`） |
| `finished` | `Boolean` | `false` | 是否已加载完所有数据（没有更多了） |
| `error` | `Boolean` | `false` | 是否加载失败（展示错误态与重试按钮） |
| `empty` | `Boolean` | `false` | 是否处于空数据状态 |
| `stickyHeader` | `Boolean` | `false` | 是否将 header / sticky 插槽内容在顶部粘性吸附展示 |
| `refresherThreshold` | `Number` | `60` | 下拉刷新触发阈值（单位 px） |
| `refresherBackground` | `String` | `'transparent'` | 下拉刷新区域背景颜色 |
| `emptyText` | `String` | `'暂无数据'` | 缺省状态提示文案 |
| `loadingText` | `String` | `'正在加载中...'` | 上拉触底加载中文案 |
| `finishedText` | `String` | `'— 没有更多了 —'` | 没有更多数据文案 |
| `errorText` | `String` | `'加载失败'` | 加载失败提示文案 |
| `showScrollbar` | `Boolean` | `false` | 是否显示滚动条 |
| `bounces` | `Boolean` | `true` | 是否开启原生回弹效果（仅限支持端） |

---

## 事件列表 (Emits)

| 事件名 | 参数 | 说明 |
| :--- | :--- | :--- |
| `refresh` | - | 用户下拉达到阈值并松手触发刷新时派发 |
| `loadMore` / `load-more` | - | 列表滚动触底或点击重试时派发加载下一页 |
| `update:refreshing` | `val: boolean` | 下拉刷新状态更新回调 |
| `update:loading` | `val: boolean` | 加载更多状态更新回调 |

---

## 插槽列表 (Slots)

| 插槽名 | 作用域参数 | 说明 |
| :--- | :--- | :--- |
| `default` | - | 列表主体内容（App 端直接子级需为 `<list-item>`） |
| `sticky` | - | **粘性吸顶插槽**，向上滚动时始终吸附在顶部不移出视口 |
| `header` | - | 普通嵌套头部插槽（随滚动滚走；当 `stickyHeader: true` 时亦吸顶） |
| `refresher` | `{ refreshing: boolean }` | 自定义下拉刷新区域 |
| `loading` | - | 自定义底部加载中动画与文本 |
| `error` | - | 自定义加载异常与点击重试交互区域 |
| `finished` | - | 自定义加载全部完毕（没有更多）状态 |
| `empty` | - | 自定义空数据缺省界面 |
| `footer` | `{ loading, finished, error }` | 自定义底部状态条总容器插槽 |

---

## 组件暴露方法 (Expose)

可通过 `ref` 引用调用组件实例上的方法：

```uts
const scrollRef = ref<ComponentPublicInstance | null>(null);

// 手动结束下拉刷新
scrollRef.value?.$callMethod('endRefresh');

// 手动结束触底加载中状态
scrollRef.value?.$callMethod('endLoadMore');
```

---

## 规范与最佳实践

1. **列表项必须使用 `<list-item>`**：
   在 App 原生平台下，`NestedScroll` 的主体内部由 `<list-view>` 支撑，所有数据迭代项建议使用 `<list-item>` 包裹，以充分发挥原生视图回收机制，保证千万级长列表流畅不卡顿。
2. **页面布局高度与滚动接管**：
   若页面使用了全局 `navbar` / `default` 布局，请在页面顶层 `definePage` 将 `enablePullDownRefresh` 设置为 `false`，并在页面挂载时调用 `setPageScrollEnabled(false)`，将滚动与手势完全交由 `NestedScroll` 接管，杜绝多层滚动冲突。
3. **禁止同步瞬间关闭下拉刷新**：
   在 `@refresh` 监听函数中，应保留真实的异步请求耗时（如 `setTimeout(..., 800)`），切勿在 0ms 内瞬间将 `refreshing` 置为 `false`，以保证原生回弹手势状态机的平滑收起。
