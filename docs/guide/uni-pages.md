# 文件路由与页面配置 (uni-pages)

`unibestX` 内置了强大的页面路由与配置插件 **`vite-plugin-uni-pages`**（位于 `plugins/vite-plugin-uni-pages.ts`）。

它让你彻底告别在 `pages.json` 中繁琐的手动配置页面路径与样式的传统方式，实现**代码与路由配置同源**的现代化开发体验。

---

## 核心特性

1. **自动扫描注册**：自动递归扫描 `src/pages` 主包与 `src/sub` 分包下的所有 `.uvue` 页面，自动生成并实时维护 `pages.json`。
2. **`definePage` 编译宏**：直接在页面代码中声明标题、导航栏样式、首页标记、布局等元数据，享有极速的 IDE 类型提示。
3. **动态首页置顶**：声明 `type: 'home'` 即可将该页面自动提升为应用启动首页（排在 `pages.json` 的第 1 项 `pages[0]`）。
4. **与 Layout 深度联动**：支持通过 `layout: 'default' | 'empty' | false` 动态切换或禁用页面的布局组件。
5. **实时热更新**：保存页面代码时，`pages.json` 毫秒级自动同步更新，并在语法错误时具备防崩缓存兜底。

---

## `definePage` 使用指南

在页面单文件组件 (`.uvue`) 的 `<script lang="uts" setup>` 中，直接使用 `definePage` 宏：

```html
<script lang="uts" setup>
definePage({
  // 1. 首页声明（全工程仅 1 个页面声明，自动置顶排在 pages.json 的第 1 位）
  type: 'home',

  // 2. Layout 布局模版选择
  // - 'default': 使用 src/layouts/default.uvue
  // - 'empty': 使用 src/layouts/empty.uvue（全屏无边距布局）
  // - false: 禁用任何 Layout 包裹
  layout: 'default',

  // 3. 原生窗口样式配置（直接映射至 pages.json 的 style）
  style: {
    navigationBarTitleText: '首页',           // 导航栏标题文字
    navigationStyle: 'default',               // 'default' (系统默认) | 'custom' (自定义导航栏)
    navigationBarBackgroundColor: '#ffffff',   // 导航栏背景颜色
    navigationBarTextStyle: 'black',          // 导航栏文字颜色 ('black' | 'white')
    backgroundColor: '#F8F8F8',               // 页面下拉露出背景色
    backgroundColorContent: '#F8F8F8',        // 页面内容区域背景色
    disableScroll: false,                     // 是否禁用整屏滚动（如使用 z-paging 时设为 true）
    enablePullDownRefresh: false,             // 是否开启原生下拉刷新
    onReachBottomDistance: 50,                // 触底事件触发距离 (px)
  },

  // 4. 路由鉴权标记（配合路由守卫使用）
  needLogin: false,
})
</script>

<template>
  <view class="p-20px">
    <text>页面内容</text>
  </view>
</template>

<style lang="scss" scoped>
// 样式隔离 2.0 scoped
</style>
```

> 💡 **提示**：`definePage` 是由编译插件在构建期提取元数据的编译宏，不会打包进运行时产物，因此无需手动 `import`。

---

## 基础全局配置 (`pages.config.json`)

如果你需要配置全局 `globalStyle`、`tabBar`、`easycom` 等全局属性，可以在根目录的 **`pages.config.json`** 中进行统一定义：

```json
{
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "unibestX",
    "navigationBarBackgroundColor": "#ffffff",
    "backgroundColor": "#F8F8F8",
    "backgroundColorContent": "#F8F8F8"
  },
  "tabBar": {
    "custom": true,
    "color": "#999999",
    "selectedColor": "#1890ff",
    "backgroundColor": "#F8F8F8",
    "list": [
      { "pagePath": "src/pages/index/index", "text": "首页" },
      { "pagePath": "src/pages/basic/basic", "text": "基础" },
      { "pagePath": "src/pages/function/function", "text": "功能" },
      { "pagePath": "src/pages/me/me", "text": "我的" }
    ]
  }
}
```

插件会自动将 `pages.config.json` 的全局配置与扫描到的各个页面元数据深度合并，输出最终合规的 `pages.json`。

---

## 样式隔离 2.0 最佳实践

`unibestX` 全面启用了 `uni-app X` 样式隔离 2.0 架构：

- **页面样式**：页面底部使用 `<style lang="scss" scoped>`，样式自动作用于当前页面，不污染全局；
- **组件样式**：组件使用 `defineOptions({ styleIsolation: 'isolated' })`，确保组件样式完全隔离，不受外部与上层样式干扰。

---

## VS Code / HBuilderX 代码片段

在编辑器中直接输入以下快捷缩写，即可一键生成规范的页面或组件模板：

| 快捷键 | 功能说明 | 包含内容 |
| :--- | :--- | :--- |
| **`v3`** | 生成标准 **页面** SFC | 包含 `<script>`、`definePage`、`<template>`、`scoped` 样式块 |
| **`v3c`** | 生成标准 **组件** SFC | 包含 `defineOptions({ styleIsolation: 'isolated' })`、`<template>`、`scoped` 样式块 |
| **`sc`** | 生成页面 Script 块 | 包含 `definePage` 配置骨架 |
| **`scc`** | 生成组件 Script 块 | 包含 `defineOptions` 隔离声明 |
