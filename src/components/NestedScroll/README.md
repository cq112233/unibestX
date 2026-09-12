# NestedScroll 嵌套滚动容器组件

`NestedScroll` 是专为 `uni-app X` 打造的高性能全端跨平台嵌套滚动组件。在 App 原生平台（Android / iOS）深度整合官方原生滚动引擎，在 Web / H5 / 微信小程序平台自适应平滑降级，彻底解决多层滚动死锁、手势拦截冲突、双重滚动条、吸顶失效以及下拉刷新手势断层等顽疾。

---

## 核心特性

- ⚡ **原生级双向手势联动**：App 端依托原生滚动机制，外层与内层手势无缝衔接，杜绝事件卡死。
- 📌 **自研固钉吸顶（Affix / Sticky Layout）**：原生支持 `#affix` 插槽与 `:affix-header="true"`，向上滑动列表时头部平滑吸附在视口顶端，不随列表滚出，摆脱原生平台不支持 `position: sticky` 的限制。
- 🔝 **内置一键返回顶部（Back To Top）**：支持开箱即用的悬浮回顶按钮，支持自定义滚动态阈值（`threshold`）、自定义底边距与右边距（`bottom` / `right`）、平滑动画以及 `#backToTop` 自定义胶囊插槽。
- 🔄 **完善的下拉刷新生态**：内置标准回弹与保底复位机制，支持原生刷新样式与 `#refresher` 自定义下拉动画。
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
      :show-back-to-top="true"
      :back-to-top-threshold="200"
      :back-to-top-bottom="120"
      @refresh="onRefresh"
      @load-more="onLoadMore"
    >
      <!-- 数据项 -->
      <view v-for="item in list" :key="item.id" class="p-[14px] bg-white border-b-[1px] border-slate-100">
        <text class="text-[14px] font-bold">{{ item.title }}</text>
      </view>
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

### 2. 开启固钉吸顶（Affix / Sticky Header）

当希望操作栏、分类 Tab 或控制卡片在向上滚动时**始终吸附在顶部**，配置 `:affix-header="true"` 或使用 `#affix` 插槽即可（向下兼容 `:sticky-header` 与 `#sticky`）：

```html
<NestedScroll
  :affix-header="true"
  @refresh="onRefresh"
  @load-more="onLoadMore"
>
  <!-- 固钉吸顶卡片：向上滑动列表时吸附在顶部不滚出视野 -->
  <template #affix>
    <view class="p-[14px] bg-white border-b-[1px] border-slate-200">
      <text class="text-[14px] font-bold">📌 吸顶分类导航 / 操作面板</text>
    </view>
  </template>

  <!-- 列表数据项 -->
  <view v-for="item in list" :key="item.id" class="p-[14px]">
    <text>{{ item.title }}</text>
  </view>
</NestedScroll>
```

---

### 3. 自定义一键返回顶部按钮

组件默认内置精美的圆形回顶按钮；若需要自定义胶囊或文案，使用 `#backToTop` 插槽即可：

```html
<NestedScroll
  :show-back-to-top="true"
  :back-to-top-threshold="200"
  :back-to-top-bottom="120"
  :back-to-top-right="20"
  @back-to-top="onBackToTop"
>
  <!-- 自定义胶囊样式回顶按钮 -->
  <template #backToTop>
    <view class="px-[12px] py-[8px] rounded-full flex flex-row items-center bg-[#0957de] shadow-md active:opacity-75">
      <uni-icons type="top" size="14" color="#ffffff" />
      <text class="text-[12px] text-white font-bold ml-[4px]">回顶</text>
    </view>
  </template>

  <!-- 列表内容 -->
  <view v-for="item in list" :key="item.id"> ... </view>
</NestedScroll>
```

---

### 4. 自定义全生命周期状态插槽

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
  <view v-for="item in list" :key="item.id"> ... </view>

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
| `affixHeader` / `stickyHeader` | `Boolean` | `false` | 是否将 header / affix 插槽内容在顶部固定吸附展示 |
| `showBackToTop` | `Boolean` | `true` | 是否显示一键返回顶部按钮 |
| `backToTopThreshold` | `Number` | `300` | 返回顶部按钮显示/隐藏的滚动距离阈值（单位 px） |
| `backToTopBottom` | `Number` | `100` | 返回顶部按钮距离底部的距离（单位 px，支持动态响应） |
| `backToTopRight` | `Number` | `20` | 返回顶部按钮距离右侧的距离（单位 px） |
| `scrollWithAnimation` | `Boolean` | `true` | 返回顶部是否启用平滑动画滚动 |
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
| `scroll` | `event: UniScrollEvent` | 列表滚动事件回调 |
| `backToTop` / `back-to-top` | - | 点击一键返回顶部按钮时派发 |

---

## 插槽列表 (Slots)

| 插槽名 | 作用域参数 | 说明 |
| :--- | :--- | :--- |
| `default` | - | 列表主体数据项 |
| `affix` / `sticky` | - | **固钉吸顶插槽**，向上滚动时始终吸附在顶部不移出视口 |
| `header` | - | 普通嵌套头部插槽（随滚动滚走；当 `affixHeader: true` 时亦吸顶） |
| `backToTop` | - | **一键返回顶部插槽**，自定义悬浮回顶按钮的外观样式与内容 |
| `refresher` | `{ refreshing: boolean }` | 自定义下拉刷新区域 |
| `loading` | - | 自定义底部加载中动画与文本 |
| `error` | - | 自定义加载异常与点击重试交互区域 |
| `finished` | - | 自定义加载全部完毕（没有更多）状态 |
| `empty` | - | 自定义空数据缺省界面 |
| `footer` | `{ loading, finished, error }` | 自定义底部状态条总容器插槽 |

---

## 组件暴露方法 (Expose)

可通过 `ref` 引用直接调用组件实例暴露的方法：

```uts
const scrollRef = ref<ComponentPublicInstance | null>(null);

// 1. 手动平滑滚动返回顶部（参数 animate 默认为 true）
scrollRef.value?.$callMethod('scrollToTop', true);

// 2. 手动结束下拉刷新
scrollRef.value?.$callMethod('endRefresh');

// 3. 手动结束触底加载中状态
scrollRef.value?.$callMethod('endLoadMore');
```

---

## 规范与最佳实践

1. **页面布局高度与滚动接管**：
   若页面使用了全局 `navbar` / `default` 布局，请在页面顶层 `definePage` 将 `enablePullDownRefresh` 设置为 `false`，并在页面挂载时调用 `setPageScrollEnabled(false)`，将滚动与手势完全交由 `NestedScroll` 接管，杜绝多层滚动冲突。
2. **禁止同步瞬间关闭下拉刷新**：
   在 `@refresh` 监听函数中，应保留真实的异步请求耗时（如 `setTimeout(..., 800)`），切勿在 0ms 内瞬间将 `refreshing` 置为 `false`，以保证原生回弹手势状态机的平滑收起。
3. **避免使用原生 `position: sticky`**：
   uni-app X 原生 App 平台（Android/iOS）仅支持 `relative`、`absolute` 与 `fixed`，不支持 `position: sticky`。需要吸顶效果时，请直接使用 `NestedScroll` 提供的 `#affix` 插槽或 `:affix-header="true"`，组件会自动处理容器层级吸顶。
