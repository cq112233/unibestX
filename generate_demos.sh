#!/bin/bash
demos=(
  "grid:Grid 宫格:grid"
  "line:Line 线条:minus"
  "album:Album 相册:photo"
  "gap:Gap 间隔槽:minus"
  "sticky:Sticky 吸顶:arrow-up"
  "keyboard:Keyboard 键盘:grid-fill"
  "dropdown:Dropdown 下拉菜单:arrow-down-fill"
  "swipe-action:SwipeAction 滑动操作:list"
  "circle-progress:CircleProgress 圆形进度条:reload"
  "line-progress:LineProgress 线型进度条:minus"
  "count-down:CountDown 倒计时:clock"
  "count-to:CountTo 数字滚动:play-right-fill"
  "navbar:Navbar 导航栏:arrow-left"
  "tabbar:Tabbar 底部导航:list"
  "tabs:Tabs 标签页:list"
  "subsection:Subsection 分段器:list"
  "index-list:IndexList 索引列表:list"
)

for item in "${demos[@]}"; do
  comp=$(echo $item | cut -d':' -f1)
  title=$(echo $item | cut -d':' -f2)
  icon=$(echo $item | cut -d':' -f3)

  mkdir -p "src/sub/uview-ultra/demos/$comp"
  cat << INNER_EOF > "src/sub/uview-ultra/demos/$comp/$comp.uvue"
<template>
  <view class="page-container bg-[#f8fafc] min-h-screen pb-30px">
    <NavBar title="$title" :auto-back="true" />
    <view class="p-16px">
      <view class="demo-block">
        <text class="demo-label">基础用法</text>
        <up-$comp></up-$comp>
      </view>
    </view>
  </view>
</template>

<script setup lang="uts">
</script>

<style scoped>
.demo-block {
  margin-bottom: 12px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 8px;
}
.demo-label {
  font-size: 14px;
  font-weight: bold;
  color: #606266;
  margin-bottom: 10px;
  padding-left: 4px;
  border-left: 3px solid #2979ff;
}
</style>
INNER_EOF
done
