const fs = require('fs');
const path = 'src/sub/uview-ultra/uview-ultra.uvue';
let code = fs.readFileSync(path, 'utf8');

// 1. 基础与展示组件
const basicAdd = `
        <up-cell title="Grid 宫格" is-link @click="goToDemo('grid')">
          <template #icon><up-icon name="grid" color="#2979ff" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="Line 线条" is-link @click="goToDemo('line')">
          <template #icon><up-icon name="minus" color="#2979ff" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="Album 相册" is-link @click="goToDemo('album')">
          <template #icon><up-icon name="photo" color="#2979ff" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="Gap 间隔槽" is-link @click="goToDemo('gap')">
          <template #icon><up-icon name="minus" color="#2979ff" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="Sticky 吸顶" is-link @click="goToDemo('sticky')">
          <template #icon><up-icon name="arrow-up" color="#2979ff" size="20" class="mr-8px"></up-icon></template>
        </up-cell>`;

// 2. 表单与交互组件
const formAdd = `
        <up-cell title="Keyboard 键盘" is-link @click="goToDemo('keyboard')">
          <template #icon><up-icon name="grid-fill" color="#19be6b" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="Dropdown 下拉菜单" is-link @click="goToDemo('dropdown')">
          <template #icon><up-icon name="arrow-down-fill" color="#19be6b" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="SwipeAction 滑动操作" is-link @click="goToDemo('swipe-action')">
          <template #icon><up-icon name="list" color="#19be6b" size="20" class="mr-8px"></up-icon></template>
        </up-cell>`;

// 3. 反馈与提示组件
const feedbackAdd = `
        <up-cell title="CircleProgress 圆形进度" is-link @click="goToDemo('circle-progress')">
          <template #icon><up-icon name="reload" color="#ff9900" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="LineProgress 线型进度" is-link @click="goToDemo('line-progress')">
          <template #icon><up-icon name="minus" color="#ff9900" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="CountDown 倒计时" is-link @click="goToDemo('count-down')">
          <template #icon><up-icon name="clock" color="#ff9900" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="CountTo 数字滚动" is-link @click="goToDemo('count-to')">
          <template #icon><up-icon name="play-right-fill" color="#ff9900" size="20" class="mr-8px"></up-icon></template>
        </up-cell>`;

// 4. 导航组件
const navBlock = `
    <!-- 4. 导航组件 -->
    <view class="demo-group-card mt-12px">
      <text class="group-title">导航组件</text>
      <up-cell-group :border="false">
        <up-cell title="Navbar 导航栏" is-link @click="goToDemo('navbar')">
          <template #icon><up-icon name="arrow-left" color="#909399" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="Tabbar 底部导航" is-link @click="goToDemo('tabbar')">
          <template #icon><up-icon name="list" color="#909399" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="Tabs 标签页" is-link @click="goToDemo('tabs')">
          <template #icon><up-icon name="list" color="#909399" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="Subsection 分段器" is-link @click="goToDemo('subsection')">
          <template #icon><up-icon name="list" color="#909399" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
        <up-cell title="IndexList 索引列表" is-link @click="goToDemo('index-list')">
          <template #icon><up-icon name="list" color="#909399" size="20" class="mr-8px"></up-icon></template>
        </up-cell>
      </up-cell-group>
    </view>
`;

if (!code.includes('Grid 宫格')) {
  code = code.replace('<up-cell title="Table 表格"', basicAdd + '\n        <up-cell title="Table 表格"');
  code = code.replace('<up-cell title="CodeInput 验证码输入"', formAdd + '\n        <up-cell title="CodeInput 验证码输入"');
  code = code.replace('<up-cell title="Copy 文本复制"', feedbackAdd + '\n        <up-cell title="Copy 文本复制"');
  code = code.replace('  </view>\n</template>', navBlock + '\n  </view>\n</template>');
  fs.writeFileSync(path, code);
  console.log('uview-ultra.uvue updated');
} else {
  console.log('Already added');
}
