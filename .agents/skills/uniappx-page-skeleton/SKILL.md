---
name: uniappx-page-skeleton
description: 编写/修改 uni-app X 页面骨架时使用——根容器用 view（勿用 scroll-view 当根）、flex-1 撑满开发高度、可用高度直接写 computedAvailableHeight、滚动区域在内部自写 scroll-view、navbar/default 布局托管整页滚动与滚动/触底事件
---

# uni-app X 页面骨架约定

## 核心约定

1. **根容器用 `view`，不要用 `scroll-view` 当根**
   navbar / default 布局已用自身 `scroll-view`（`flex-1 flex flex-col`）包住页面 `<slot />` 接管滚动（`src/layouts/navbar.uvue` / `src/layouts/default.uvue`）。页面再叠一个 scroll-view 当根会双重滚动冲突。
2. **常用写法 `<view class="flex flex-col flex-1">`**：`flex-1` 即撑满开发高度（= `computedAvailableHeight`），navbar / default 通用。
3. **可用高度 `computedAvailableHeight` 就是你要写的高度**：框架已按当前布局算好状态栏 / 导航栏 / tabbar，其余不用开发者操心。
4. **`VITE_TABBAR_MODE=1`（原生 TabBar）**：`availableHeight` 不含底部 tabbar 区域（底部非编辑区，无需计入）。

## 滚动区域的两种写法

### ⭐ 内部自写 scroll-view（常用）
顶部固定、列表在剩余区域滚动：
```html
<view class="flex flex-col flex-1 px-[16px]">
  <!-- 顶部固定内容（各自天然高度） -->
  <!-- 剩余区域由内部 scroll-view 接管 -->
  <scroll-view direction="vertical" class="flex-1 flex flex-col" :lower-threshold="50"
    @scroll="handleScroll" @scrolltolower="handleScrollToLower">
    <view class="flex flex-col">
      <!-- 列表项 / 滚动内容 -->
    </view>
  </scroll-view>
</view>
```
脚本用内部 scroll-view 的自己事件：
```ts
const scrollTop = ref(0);
const reachBottomCount = ref(0);
function handleScroll(e: UniScrollEvent): void {
  scrollTop.value = e.detail.scrollTop;
}
function handleScrollToLower(): void {
  reachBottomCount.value++;
}
```

### 整页按内容高度滚动
根用 `view class="flex flex-col"`（**不加 flex-1**），整页由布局 `scroll-view` 接管，页面用 `onNavbarPageScroll` / `onNavbarReachBottom`（`src/utils/pageScroll.uts`）监听，替代原生 `onPageScroll` / `onReachBottom`。

## ⚠️ 坑

- **`<text>` 只能有一个文本节点**：不要在一个 `<text>` 里混「裸文本 + 嵌套 `<text>` + 裸文本」（编译报 `A <text> element can only contain one text node`）。做内联高亮改用「兄弟 `<text>`」放进 `flex flex-row flex-wrap` 容器：
  ```html
  <view class="flex flex-row flex-wrap">
    <text class="text-[13px] text-[#475569]">根容器 </text>
    <text class="text-[13px] text-[#1d4ed8]">view + flex flex-col flex-1</text>
    <text class="text-[13px] text-[#475569]">，flex-1 撑满开发高度。</text>
  </view>
  ```
- **`flex-1` 与滚动**：根 `flex-1` 会把高度撑满视口；若指望布局 scroll-view 滚动**整页**会失效（没有溢出可滚）。要么整页用内容高度根（不带 flex-1），要么在 flex-1 根内自写 scroll-view。
- **颜色只放 `<text>`**、**border 拆分**、**禁 font-mono/sans/serif**、**高度不支持 vh/vw**——完整规范见 `.agents/rules/uniappx.md`。

## 参考
- 实时可运行示例：`src/sub/layoutDemo/layoutDemo.uvue`
- 完整规范：`.agents/rules/uniappx.md`
