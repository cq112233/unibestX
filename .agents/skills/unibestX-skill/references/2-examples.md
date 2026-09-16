# 二、项目正确案例（5 个生产级标杆案例）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：按骨架新建页面、搭「上固定 + 下滚动」布局、算可用高度 `computedAvailableHeight`、写主包 TabBar 页与自定义下拉刷新、写二级 / 子包页面、写整页自然滚动、用 Easycom 引用组件库时 —— 优先照抄这里的范式，不要自创结构。
>
> **回写规则**：若沉淀出更好的 VDOM / Vapor 双模式通用骨架、组件组合或页面范式，一律追加到本文件，编号续接 `2.6`、`2.7`…；并同步更新 [SKILL.md](../SKILL.md) 的导航表。

以下案例均源自 unibestX 本地工程中已验证、可直接编译运行的真实生产级代码。

## 2.1 标杆案例 1：标准“上固定 + 下滚动”骨架与可用高度

> 真实参考源：[src/sub/layoutDemo/layoutDemo.uvue](file:///Users/chenqi/Desktop/unibestX/src/sub/layoutDemo/layoutDemo.uvue)

**设计要点**：

- 页面根容器为 `view` + `flex flex-col flex-1`，自动撑满可用高度；
- 严禁以 `scroll-view` 作为页面根，避免与 `navbar` 布局外层滚动容器发生手势冲突；
- 顶部固定说明卡片拥有天然高度，不随列表滚动；
- 内部自写 `<scroll-view>` 挂载 `flex-1 flex flex-col` 弹性撑满剩余空间，并通过 `@scroll` 与 `@scrolltolower` 独立响应滚动与触底；
- 可用视口高度直接通过 `computedAvailableHeight` 消费框架系统变量。

```html
<template>
  <!-- 1. 页面根容器：普通 view + flex-1，撑满开发高度 -->
  <view class="flex flex-col items-center px-[16px] pt-[8px]">

    <!-- 2. 顶部固定说明区（各自天然高度，不随列表滚动） -->
    <view class="w-full mb-[16px]" :style="{ maxWidth: '520px' }">
      <view class="w-full bg-white rounded-[12px] p-[16px] flex flex-col">
        <view class="flex-row items-center mb-[10px]">
          <view class="w-[6px] h-[16px] rounded-[3px] bg-[#3b82f6] mr-[8px]" />
          <text class="text-[16px] font-bold text-[#1e293b]">布局骨架演示</text>
        </view>
        <text class="text-[13px] text-[#64748b] leading-[19px]">
          根容器用 view + flex-1，滚动区域在内部自写 scroll-view，内容高度直接用 computedAvailableHeight。
        </text>
      </view>
    </view>

    <!-- 3. 内部自写 scroll-view：弹性占满剩余视口 -->
    <scroll-view
      direction="vertical"
      class="w-full flex flex-col flex-1"
      :style="{ maxWidth: '520px' }"
      :lower-threshold="50"
      @scroll="handleScroll"
      @scrolltolower="handleScrollToLower"
    >
      <view class="flex flex-col">
        <!-- 滚动内容列表项 -->
        <view
          v-for="(item, index) in demoItems"
          :key="index"
          class="w-full bg-white rounded-[12px] p-[16px] mb-[12px] flex flex-col"
        >
          <text class="text-[15px] font-semibold text-[#1e293b]">{{ item.title }}</text>
          <text class="text-[13px] text-[#475569] leading-[19px] mt-[4px]">{{ item.desc }}</text>
        </view>

        <view class="flex-col items-center py-[16px]">
          <text class="text-[12px] text-[#94a3b8]">已触底 {{ reachBottomCount }} 次 · 内容结束</text>
        </view>
      </view>
    </scroll-view>

  </view>
</template>

<script setup lang="uts">
import { computed, ref } from 'vue';
import { availableHeight } from '@/src/utils/systemInfo/index.uts';

definePage({
  layout: 'navbar',
  showBack: true,
  hideNavbar: false,
  enablePullDownRefresh: false,
  style: {
    navigationBarTitleText: '布局页面示例',
    navigationStyle: 'custom'
  }
});

/**
 * 开发者可用视口高度（框架已扣除状态栏、导航栏、底部 TabBar，navbar / default 通用）
 */
const computedAvailableHeight = computed<number>((): number => availableHeight.value ?? 0);

type DemoItem = {
  title: string;
  desc: string;
};

const demoItems: Array<DemoItem> = [
  { title: '规则 1', desc: '根容器用 view，禁止用 scroll-view 当根' },
  { title: '规则 2', desc: '要滚动的区域在根内自写 scroll-view' },
  { title: '规则 3', desc: '内容高度直接使用 computedAvailableHeight' }
];

const scrollTop = ref<number>(0);
const reachBottomCount = ref<number>(0);

function handleScroll(e: UniScrollEvent): void {
  scrollTop.value = Math.ceil(e.detail.scrollTop);
}

function handleScrollToLower(): void {
  reachBottomCount.value++;
}
</script>
```

---

## 2.2 标杆案例 2：主包 TabBar 页面与自定义平滑下拉刷新

> 真实参考源：[src/pages/basic/basic.uvue](file:///Users/chenqi/Desktop/unibestX/src/pages/basic/basic.uvue) / [src/pages/index/index.uvue](file:///Users/chenqi/Desktop/unibestX/src/pages/index/index.uvue)

**设计要点**：

- `definePage` 中 `showBack: false`（主 TabBar 页面无需返回箭头）；
- 顶层配置 `enablePullDownRefresh: true` 开启自定义平滑下拉刷新；
- 统一从 `@/src/utils/refresh/index.uts` 引入 `onNavbarPullDownRefresh` 与 `stopNavbarPullDownRefresh`；
- （仅限首页配置 `type: 'home'`，其余 TabBar 页面不填）。

```uts
<script setup lang="uts">
import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/utils/refresh/index.uts';

definePage({
  layout: 'navbar',
  showBack: false, // 👈 TabBar 页面不展示返回箭头
  hideNavbar: false,
  enablePullDownRefresh: true, // 👈 顶层开启由 navbar 驱动的自定义下拉刷新
  style: {
    navigationBarTitleText: '基础功能',
    navigationStyle: 'custom'
  }
});

onNavbarPullDownRefresh(() => {
  // 1. 发起网络请求或刷新数据
  console.log('执行 TabBar 页面刷新数据');

  // 2. 数据获取完毕后手动停止刷新动画
  setTimeout(() => {
    stopNavbarPullDownRefresh();
  }, 1000);
});
</script>
```

---

## 2.3 标杆案例 3：二级页面 / 子包分包页面标准实现

> 真实参考源：[src/sub/time/time.uvue](file:///Users/chenqi/Desktop/unibestX/src/sub/time/time.uvue) / [src/sub/device/device.uvue](file:///Users/chenqi/Desktop/unibestX/src/sub/device/device.uvue)

**设计要点**：

- `definePage` 中 `showBack: true` 自动渲染返回按钮与手势返回；
- 页面内部滚动通过自写 `scroll-view` 完成；
- 刷新事件响应与关闭机制严密闭环。

```uts
<template>
  <view class="flex flex-col flex-1 px-[16px] pt-[12px]">
    <scroll-view direction="vertical" class="flex-1 flex flex-col">
      <view class="flex flex-col">
        <view class="bg-white rounded-[12px] p-[16px] mb-[12px]">
          <text class="text-[14px] font-semibold text-[#1e293b]">详情页内容卡片</text>
          <text class="text-[12px] text-[#64748b] mt-[4px]">二级页面支持点击返回导航</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="uts">
import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/utils/refresh/index.uts';

definePage({
  layout: 'navbar',
  showBack: true, // 👈 开启返回上一页按钮
  hideNavbar: false,
  enablePullDownRefresh: true,
  style: {
    navigationBarTitleText: '功能详情',
    navigationStyle: 'custom'
  }
});

onNavbarPullDownRefresh(() => {
  setTimeout(() => {
    stopNavbarPullDownRefresh();
  }, 1000);
});
</script>
```

---

## 2.4 标杆案例 4：整页按内容高度自然滚动

> 真实参考源：[src/utils/refresh/index.uts](file:///Users/chenqi/Desktop/unibestX/src/utils/refresh/index.uts)

**设计要点**：

- 页面根容器使用 `<view class="flex flex-col">`（**不加 `flex-1`**）；
- 滚动完全由 `navbar` 布局的外层 `scroll-view` 容器接管；
- 监听滚动与触底必须使用框架封装的 `onNavbarPageScroll` 与 `onNavbarReachBottom`，替代原生 `onPageScroll` / `onReachBottom`。

```uts
<script setup lang="uts">
import { onNavbarPageScroll, onNavbarReachBottom, PageScrollDetail } from '@/src/utils/refresh/index.uts';

definePage({
  layout: 'navbar',
  showBack: true,
  hideNavbar: false,
  enablePullDownRefresh: true,
  style: {
    navigationBarTitleText: '整页滚动',
    navigationStyle: 'custom'
  }
});

onNavbarPageScroll((e: PageScrollDetail) => {
  console.log('整页滚动位置 scrollTop:', e.scrollTop);
});

onNavbarReachBottom(() => {
  console.log('整页触底，触发上拉加载');
});
</script>
```

---

## 2.5 标杆案例 5：组件与生态库优先原则（Component Library First）

> 真实参考源：[src/pages/function/views/FunctionView.uvue](file:///Users/chenqi/Desktop/unibestX/src/pages/function/views/FunctionView.uvue)

**设计要点与优先原则**：

1. **功能匹配优先采用原则**：编写 UI 页面或实现业务需求时，若需求功能与 `uni_modules/` 下已内置的成熟组件/插件匹配，**必须优先使用**，严禁脱离生态手写重复且低效的原生结构。
   - **图标库**：`<uni-icons>`、`<lime-icon>`
   - **图表展示**：`<e-chart>`
   - **下拉刷新与分页/虚拟列表**：`<z-paging-x>`、`<uni-refresh-box>`
   - **富文本展示与富文本编辑**：`<mp-html>`、`<sp-editor>`
   - **二维码生成与手写签名**：`<lime-qrcode>`、`<lime-signature>`
   - **常用基础组件**：`<uni-rate-x>`（评分）、`<uni-collapse-x>`（折叠面板）、`<uni-badge-view>`（角标）、`<uni-number-box-x>`（数字步进器）、`<uni-link-x>`（超链接）、`<uni-fab-button>`（悬浮按钮）、`<uni-time-format>`（时间格式化）等
2. **Easycom 自动导入规范**：模板中直接以短横线小写标签（如 `<uni-icons>`、`<e-chart>`）调用，**严禁在 `<script>` 中手动 `import`**。
3. **避免手写繁琐原生结构**，保证全平台（Android、iOS、Web、微信小程序）的高性能与渲染一致性。

```html
<template>
  <view class="flex flex-row items-center p-[12px] bg-white rounded-[8px]">
    <!-- ✅ 直接使用 Easycom 自动导入的 uni-icons 组件，无需 import -->
    <uni-icons type="info" size="20" color="#3b82f6" />
    <text class="text-[14px] text-[#1e293b] ml-[8px]">组件库优先示例</text>
  </view>
</template>
```
