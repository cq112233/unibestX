# TabBar 专题

项目的 TabBar 不是一组散落在页面里的导航按钮，而是一套**配置驱动 + 构建期生成 + 运行时 hooks** 的基础设施：

```text
src/tabbar/config.uts              唯一配置源（人改）
        │
        ├─► Vite 插件
        │     ├─ 生成 pages.json 的 tabBar 节点（模式 1 / 2）
        │     ├─ 生成 src/tabbar/components/TabViews.uvue（模式 4）
        │     └─ 补建缺失的 Tab 页面、同步页面配置
        │
        └─► 运行时
              ├─ core/       状态、模式、导航、生命周期、尺寸
              ├─ adapters/   主题、i18n、navbar、平台差异
              ├─ hooks/      业务推荐入口
              └─ ui/         default / capsule 两种视觉形态
```

业务只需要记住三件事：

1. **只改 `src/tabbar/config.uts`**，不要手改 `pages.json` 和 `TabViews.uvue`。
2. **业务导入统一走 `@/src/tabbar/index.uts`**，不要直接引用 `core/`、`adapters/` 内部文件。
3. **Tab 页面使用统一 hooks 写法**：`useTabPageShell()`、`useTabPage()`、`useTabbar()`。

> 当前仓库 `.env` 使用 `VITE_TABBAR_MODE=4`。代码在变量缺失时会回退到原生模式 `1`，因此不要删除这行配置。

## 能力一览

| 能力 | 说明 |
| :--- | :--- |
| 五种运行模式 | 无 TabBar、原生、原生底座 + 自定义 UI、纯自定义、单页容器 |
| 配置驱动 | Tab 文案、图标、路径、角标、鼓包、主题色全部集中在 `config.uts` |
| 自动生成 | 根据配置生成 `pages.json` tabBar 节点和模式 4 的 `TabViews.uvue` |
| 页面保活 | 模式 4 首次激活后按 Tab 保活，切回不重新创建页面 |
| 生命周期 | `onLoad` / `onShow` / `onHide` / `onUnload` 与普通页面保持一致 |
| 虚拟路由 | 模式 4 的每个 Tab 拥有独立 `path`、`query`、`meta`、`name` |
| 导航守卫 | 模式 4 的 Tab 切换有独立前置守卫，可做来源处理、参数换取与预取 |
| 主题与 i18n | 明暗主题、激活色、Tab 文案国际化统一从 hooks 获取 |
| 安全区适配 | 底部占位、安全区、胶囊与鼓包高度统一由 metrics 计算 |

## 分层与目录

```text
src/tabbar/
├── index.uts                     # 业务门面：统一导出 hooks、配置与底层兼容 API
├── config.uts                    # ⭐ 唯一配置真源
├── tabbar.uvue                   # TabBar 渲染入口，按 type 分发 UI 形态
├── core/
│   ├── types.uts                 # TabBarConfig / CustomTabBarItem / TabBarMidButton
│   ├── state.uts                 # curIdx、tabbarList、角标、Tab 订阅
│   ├── strategy.uts              # VITE_TABBAR_MODE 解析与模式开关量
│   ├── navigate.uts              # switchTabbar、点击处理、原生鼓包事件
│   ├── tab-navigation.uts        # 模式 4 的 Tab 前置守卫
│   ├── lifecycle.uts             # onTabPageShow、页面可见性通知
│   ├── metrics.uts               # 高度、安全区、底部预留
│   ├── tab-key.uts               # tabType ⇄ 下标解析
│   ├── path.uts                  # 路径规范化与当前路由读取
│   ├── tab-page.uts              # 模式 4 虚拟路由与 query
│   └── native.uts                # 原生 TabBar 隐藏 / 恢复
├── adapters/                     # 主题、i18n、navbar、平台、系统适配
├── hooks/                        # 业务组合式 API
├── components/
│   ├── TabViews.uvue             # ⚠️ 构建期生成，禁止手改
│   ├── TabContent.uvue           # 单个 Tab 视图的保活与滚动容器
│   ├── TabPageHost.uvue          # 模式 4 宿主页壳
│   └── TabbarPlaceholder.uvue    # 底部自适应占位
└── ui/
    ├── default/                  # 标准贴底底座
    ├── capsule/                  # 悬浮胶囊
    └── template.uvue             # 新增 UI 形态的模板
```

### 职责边界

| 层 | 位置 | 能否直接改 | 说明 |
| :--- | :--- | :---: | :--- |
| 配置层 | `src/tabbar/config.uts` | ✅ | Tab 列表、`midButton`、形态、玻璃效果 |
| 生成层 | `pages.json` | ❌ | 由 `pages.config.json`、`definePage`、Tab 配置共同生成 |
| 生成层 | `src/tabbar/components/TabViews.uvue` | ❌ | 由 `vite-plugin-tabbar-views.ts` 重写 |
| 运行时核心 | `src/tabbar/core/` | ⚠️ 框架维护 | 业务不要绕过门面直接导入 |
| 业务适配 | `src/tabbar/adapters/` | ⚠️ 谨慎 | 未来抽离模块时优先替换这一层 |
| 业务入口 | `src/tabbar/index.uts` | ✅ | 新业务统一从这里导入 |
| UI 层 | `src/tabbar/ui/` | ✅ | 改样式或增加新形态 |

业务页面、Navbar 和自定义 TabBar UI 都不要自己维护另一份 `curIdx`。`useTabbar()` 读取的是同一份全局状态，不需要 `provide/inject`。

## 快速开始

### 1. 选择运行模式

在 `.env` 中设置：

```dotenv
VITE_TABBAR_MODE=4
```

修改后重启开发服务，让构建插件重新生成页面配置。

### 2. 在配置中新增 Tab

打开 `src/tabbar/config.uts`，在 `customTabbarConfig.list` 中加入一项：

```uts
{
  tabType: 'order',
  text: 'tabbar.order',
  pagePath: 'src/pages/order/order',
  iconType: 'icon',
  icon: 'list',
  iconActive: 'list-filled',
  iconPath: 'static/tabbar/order.png',
  selectedIconPath: 'static/tabbar/order_fill.png',
  badge: null,
  isBulge: false
}
```

如果 `src/pages/order/order.uvue` 不存在，`tabbarViewsPlugin` 会自动补建一个页面骨架。插件只会新建缺失文件，**不会覆盖已有页面，也不会因为删除配置而删除页面文件**。

### 3. 使用标准页面骨架

普通 Tab 页面推荐保持下面的结构：

```vue
<template>
  <view class="flex flex-col p-[16px]">
    <text class="text-[18px] font-bold">订单</text>
    <text class="mt-[8px] text-[13px]">当前路径：{{ route.path }}</text>
  </view>
</template>

<script setup lang="uts">
import { useTabPage, useTabPageShell } from '@/src/tabbar/index.uts';

definePage({
  layout: 'navbar',
  showBack: false,
  enablePullDownRefresh: true,
  hideStatusBar: false,
  hideNavbar: false,
  style: {
    navigationBarTitleText: 'tabbar.order',
    navigationStyle: 'custom'
  }
});

// Tab 页面文件的双身份适配：真实页面 / 模式 4 Tab 子组件
useTabPageShell('order');

const {
  route,
  onLoad,
  onShow,
  onHide,
  onUnload
} = useTabPage();

onLoad((): void => {
  console.log('首次进入订单 Tab', route.value.fullPath);
});

onShow((): void => {
  // 切回该 Tab、从子页面返回、App 回到前台都会触发
  console.log('订单 Tab 显示', route.value.query.get('id') ?? '');
});

onHide((): void => {
  console.log('订单 Tab 隐藏');
});

onUnload((): void => {
  console.log('订单 Tab 卸载');
});
</script>
```

注意：

- `useTabPageShell()` 每个 Tab 页面只调用一次，参数必须是配置中的 `tabType`。
- `useTabPage()` 负责虚拟路由和统一生命周期，普通非 Tab 页面调用时会自动退化为原生页面生命周期。
- 模式 4 的 **宿主页** `src/pages/index/index.uvue` 需要额外使用 `<TabPageHost>` 包裹页面内容；其他 Tab 页面不需要。
- 不要再手写 `activateTabPageFromHostQuery()`、`setCurIdxByKey()`、`notifyPageShow()`、`notifyPageHide()`、`useBackPressExit()`，这些已经由 `useTabPageShell()` 统一处理。

## 配置字段

### `list` 单项

| 字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :---: | :--- |
| `tabType` | `string` | 推荐 | 业务唯一标识，订阅、角标、深链都优先用它 |
| `text` | `string` | ✅ | i18n key 或直接展示的文案 |
| `pagePath` | `string` | ✅ | 页面路径，**不要写前导 `/`** |
| `iconType` | `'icon' \| 'image'` | ✅ | 字体图标或本地图片 |
| `icon` | `string` | ✅ | `uni-icons` 名称；图片模式时作为路径 |
| `iconActive` | `string` | ✅ | 选中态图标 |
| `iconPath` | `string` | 可选 | 原生 TabBar 图标路径 |
| `selectedIconPath` | `string` | 可选 | 原生 TabBar 选中图标路径 |
| `badge` | `number \| 'dot' \| null` | ✅ | 数字角标、小红点或空 |
| `isBulge` | `boolean` | ✅ | 是否作为中间鼓包项处理 |

`tabType` 建议全小写且全列表唯一。它是 `onTabShow('order', ...)`、`setCurIdxByKey('order')` 和 H5 `?tab=order` 的稳定键；未配置时会回退为 `tab-${下标}`，但下标会随列表顺序变化，不推荐依赖。

### 顶层配置

| 字段 | 说明 |
| :--- | :--- |
| `type` | UI 形态：`default` 或 `capsule` |
| `color` / `selectedColor` | 默认文字色 / 选中文字色 |
| `backgroundColor` | TabBar 背景色 |
| `borderStyle` / `borderColor` | 边框样式与边框色 |
| `glassEffect` | 是否开启液态玻璃效果 |
| `glassStyle` | `regular` / `clear`，仅 iOS 26+ |
| `interactive` | 液态玻璃交互行为，仅 iOS 26+ |
| `tintColor` | 液态玻璃着色，仅 iOS 26+ |
| `height` | 原生 TabBar 高度相关配置 |
| `fontSize` / `iconWidth` / `spacing` | 原生 TabBar 文本、图标尺寸与间距 |
| `midButton` | 中间鼓包按钮配置 |
| `list` | Tab 列表，原生 TabBar 最少 2 项、最多 5 项 |

自定义 UI 还会读取 `type`、`glassEffect` 与主题令牌；原生 pages.json 专属字段是否生效取决于当前模式和平台。

### 中间鼓包 `midButton`

`config.uts` 中的 `midButton` 默认是注释状态，**通过注释启停是官方支持的方式**。插件解析配置前会先剥掉 `//` 和 `/* */` 注释。

```uts
midButton: {
  tabType: 'publish',
  width: '50px',
  height: '50px',
  text: 'tabbar.publish',
  pagePath: 'src/pages/publish/publish',
  iconType: 'icon',
  icon: 'plus',
  iconActive: 'plus-filled',
  badge: null,
  isBulge: true
}
```

插件会把 `midButton` 插入完整列表的居中位置。注意：

- `curIdx` 统计的是**包含鼓包项的完整列表下标**，不是原始 `list` 下标。
- 订阅与角标优先使用 `tabType` 或 `pagePath` 解析，不要写死数字。
- 原生 `midButton` 在微信小程序、鸿蒙、iOS Vapor 上不支持。
- 需要全端一致的鼓包效果时，使用模式 `2` 或 `4`，由组件层绘制。

## 五种运行模式

模式由 `.env` 的 `VITE_TABBAR_MODE` 决定。模式切换不改业务页面代码，只影响路由注册、页面缓存与渲染方式。

| 值 | 模式 | 页面缓存 | 切换方式 | 是否生成 tabBar 节点 |
| :---: | :--- | :---: | :--- | :---: |
| `0` | 无 TabBar | — | 不渲染 | 否 |
| `1` | 原生 TabBar | ✅ | `uni.switchTab` | 是，原生渲染 |
| `2` | 自定义 UI + 原生底座 | ✅ | `uni.switchTab` | 是，`custom: true` |
| `3` | 纯自定义 TabBar | ❌ | `uni.redirectTo` | 否 |
| `4` | 单页容器 TabBar | ✅ 天然保活 | 切换容器索引 | 否 |

### 模式 0：无 TabBar

适合纯内容型应用、后台子应用或需要临时关闭底部导航的版本。插件不会生成 TabBar，也不会生成模式 4 的调度容器。

### 模式 1：原生 TabBar

使用 uni-app 原生能力，兼容性最好、页面缓存由框架负责。UI 受系统原生 TabBar 能力限制，复杂动效与全端一致的自定义样式空间较小。

### 模式 2：自定义 UI + 原生底座

`pages.json` 保留原生 tabBar 节点，但设置为自定义模式；页面切换仍使用 `uni.switchTab`，所以保留页面缓存。适合：

- 需要自定义 TabBar 外观；
- 希望保留原生页面缓存；
- 不使用原生 `midButton`，鼓包由组件绘制。

### 模式 3：纯自定义 TabBar

`pages.json` 不生成 tabBar 节点，切换使用 `redirectTo`，页面不会缓存。适合页面本身很轻、每次进入都希望重新加载的场景。

### 模式 4：单页容器 TabBar

项目默认推荐模式。只有一个真实宿主页面，其他 Tab 是宿主页内的保活视图：

- 切换时没有页面跳转，零白屏、零闪烁；
- 已经访问过的 Tab 会保活，状态不会丢失；
- 适合复杂交互、长列表、表单和需要保持滚动位置的页面；
- 需要理解虚拟路由与 Tab 级守卫。

### 如何选择

| 需求 | 推荐模式 |
| :--- | :---: |
| 最简单、完全使用系统原生 TabBar | `1` |
| 自定义外观但保留原生页面缓存 | `2` |
| 不需要页面缓存，愿意每次重新加载 | `3` |
| 追求零闪烁和状态保活 | `4` |
| 全端一致的中间鼓包 | `2` 或 `4` |
| 不显示底部导航 | `0` |

业务代码判断当前模式时，不要重复读取环境变量，使用 `useTabbar()`：

```uts
const {
  isSinglePageTabbar,
  isNativeTabbar,
  customTabbarEnable,
  needTabbarBottomPadding
} = useTabbar();
```

## 模式 4 工作原理

### 只有一个真实路由

模式 4 下，**Tab 范围内只有宿主页注册为真实路由**；普通业务子页面仍然会正常压入系统页面栈：

```text
src/pages/index/index.uvue          ← 唯一真实路由
        │
        └─ TabPageHost
              ├─ TabViews
              │    ├─ TabContent(index)    → #tabHost slot
              │    ├─ TabContent(basic)    → basic.uvue
              │    ├─ TabContent(function) → function.uvue
              │    └─ TabContent(me)       → me.uvue
              └─ Tabbar
```

- 宿主页通过 `<TabPageHost>` 提供自己的业务内容；
- 其他 Tab 页面由 `TabViews.uvue` 直接 import 成组件；
- `TabContent` 首次激活一个 Tab 时才创建视图，之后常驻保活；
- 非激活 Tab 通过移出视口和可见性控制隐藏，不会销毁页面状态。

因此，**模式 4 下不要用 `navigateTo` 打开另一个 Tab 页面**。它不是一个独立页面，正确入口是 `switchTabbar()` 或命中 Tab 路径的 `router.push()`。

### 为什么不会出现支付宝的 Page / Component 冲突

支付宝小程序不允许同一个 `.uvue` 同时被当作页面和组件编译。构建插件在模式 4 会把非宿主 Tab 页从 `pages.json` 主包页面表中移除，只让它们作为组件编译，从而避免：

```text
无 Component() 构造器调用，但 Page() 页面构造器被错误调用
```

这些页面的 `definePage` 配置仍会进入虚拟路由表，所以 `useTabPage().route.meta / name` 仍然可用。

### 模式 4 下读哪个路由

这是最常见的误区：

| 场景 | 正确写法 | 说明 |
| :--- | :--- | :--- |
| 读取当前 Tab 的虚拟路由 | `useTabPage().route` | 包含当前 Tab 自己的 `path`、`query`、`meta`、`name` |
| 页面跳转 | `useRouter()` | 命中 Tab 路径时会自动转到 `switchTabbar()` |
| 读取宿主页真实路由 | `useRoute()` | 模式 4 下通常始终是宿主页，不适合判断当前 Tab |

```uts
import { useTabPage } from '@/src/tabbar/index.uts';

const { route } = useTabPage();

const id = route.value.query.get('id') ?? '';
const tabPath = route.value.path;
const tabName = route.value.name ?? '';
```

`route` 是 `ComputedRef`，脚本中读取要写 `.value`；模板中可以直接写 `route.path`。

### H5 地址栏与深链

模式 4 会把当前 Tab 同步到 H5 地址栏，例如：

```text
#/?tab=me&id=1001
```

`tab` 支持 `tabType` 或完整 `pagePath`，其余 query 会写入目标 Tab 的虚拟路由。刷新页面时会根据入口 query 恢复 Tab 和参数。

宿主页的深链处理已经由 `useTabPageShell()` 统一完成，业务不要重复调用 `activateTabPageFromHostQuery()`。

### 虚拟 query 规则

- 每个 Tab 各自维护一份 query，不会因为切换到别的 Tab 而互相覆盖。
- query 值始终是 `string`，数字和布尔值需要显式转换。
- 只有 URL 显式带 `?` 时才覆盖该 Tab 的 query；普通点击 Tab 不会清空上次参数。
- H5 地址栏同步使用 `replaceState`，不会触发新的页面导航。

```uts
router.push({
  path: '/src/pages/order/order',
  query: {
    id: 1001,
    status: 'pending'
  }
});
```

目标 Tab 内读取时：

```uts
const idText = route.value.query.get('id') ?? '0';
const id = parseInt(idText, 10);
```

## UI 形态与液态玻璃

### default

标准贴底底座，支持普通布局和中间鼓包。适合大多数业务应用，底部交互区域稳定，页面内容避让规则清晰。

### capsule

悬浮胶囊形态，视觉上脱离屏幕底边，适合偏展示型或年轻化产品。胶囊尺寸、底部偏移和安全区由 `useTabbarMetrics()` 统一计算。

### 组件级覆盖 `type`

`src/tabbar/tabbar.uvue` 支持通过 prop 临时覆盖全局形态：

```vue
<Tabbar type="default" />
```

优先级：

```text
<Tabbar type="...">  →  config.uts 的 type  →  default 兜底
```

业务一般不传 `type`，只改 `config.uts`。只有局部预览或特殊页面需要临时覆盖时才使用 prop。

### glassEffect

液态玻璃**不是独立 UI 形态**，而是叠加在 `default` 或 `capsule` 上的背景效果：

```uts
glassEffect: true,
glassStyle: 'regular',
interactive: true,
tintColor: '#ffffff22'
```

跨端行为：

| 端 | 行为 |
| :--- | :--- |
| iOS | 使用原生 `glass-effect-view`；`glassStyle`、`interactive`、`tintColor` 主要面向 iOS 26+ |
| Web / 微信小程序 | 使用 `backdrop-filter` 毛玻璃降级 |
| 其他端 | 使用半透明底色与边框降级，不保证真实模糊 |
| 原生 TabBar 模式 | `glassEffect` 写入 pages.json，效果受系统能力限制 |

不要再新增 `type: 'glass'` 分支。需要玻璃效果时打开 `glassEffect`，需要新造型时新增 UI 目录。

### 新增第三种 UI 形态

1. 复制 `src/tabbar/ui/template.uvue` 到 `src/tabbar/ui/<new-type>/index.uvue`；
2. 在 `src/tabbar/tabbar.uvue` 增加一个 `v-else-if` 分支；
3. 把 `config.uts` 的 `type` 改为新值。

自定义 UI 的点击必须交给 `handleTabbarClick(index)`，不要自己同时维护 `curIdx` 和路由跳转。

## Hooks 总览

所有 hooks 都从同一个门面导入：

```uts
import {
  useTabbar,
  useTabbarPage,
  useTabPage,
  useTabPageShell,
  useTabbarTheme,
  useTabbarMetrics,
  useTabbarI18n
} from '@/src/tabbar/index.uts';
```

| Hook | 解决什么问题 |
| :--- | :--- |
| `useTabbar()` | 全局状态、模式判断、切换、角标、原生 TabBar 控制 |
| `useTabbarPage()` | Tab 切换 / 页面重新显示订阅、可见性通知 |
| `useTabPage()` | 模式 4 的虚拟路由与统一页面生命周期 |
| `useTabPageShell()` | 页面文件双身份适配、入口深链、返回键、支付宝返回首页按钮 |
| `useTabbarTheme()` | 明暗模式、主题令牌、激活色 |
| `useTabbarMetrics()` | 高度、安全区、底部预留 |
| `useTabbarI18n()` | 文案翻译与原生 TabBar 文案同步 |

### `useTabbar()`

```uts
import { useTabbar } from '@/src/tabbar/index.uts';

const {
  curIdx,
  tabbarList,
  activeTabTitle,
  switchTabbar,
  handleTabbarClick
} = useTabbar();
```

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `curIdx` | `Ref<number>` | 当前激活下标，包含 `midButton` |
| `tabbarList` | `CustomTabBarItem[]` | 完整列表，`pagePath` 已补前导 `/` |
| `activeTabTitle` | `Ref<string>` | 当前 Tab 标题，供 Navbar 联动 |
| `customTabbarConfig` | `TabBarConfig` | 原始 TabBar 配置 |
| `isSinglePageTabbar` | `boolean` | 是否模式 4 |
| `isNativeTabbar` | `boolean` | 是否模式 1 |
| `customTabbarEnable` | `boolean` | 是否模式 2 / 3 |
| `needTabbarBottomPadding` | `boolean` | 是否需要底部预留 |
| `tabbarType` | `string` | 当前 UI 形态 |
| `setCurIdx(idx)` | `void` | 只改状态，不跳页面 |
| `setCurIdxByKey(key)` | `void` | 按 `tabType` 设置激活项 |
| `setCurIdxByPath(path)` | `void` | 按页面路径设置激活项 |
| `setTabbarItemBadge(idx, badge)` | `void` | 设置数字角标或小红点 |
| `syncCurIdxByCurrentPage()` | `void` | 按当前真实页面同步激活项 |
| `isPageTabbar(path)` | `boolean` | 判断路径是否属于 TabBar |
| `switchTabbar(url)` | `void` | 统一 Tab 跳转入口 |
| `handleTabbarClick(index)` | `void` | 自定义 UI 点击入口，内置 250ms 防连击 |
| `resetTabSwitchThrottle()` | `void` | 重置防连击锁 |
| `initNativeMidButtonTap()` | `void` | 注册原生中间按钮点击 |
| `safeHideNativeTabBar()` | `void` | 安全隐藏原生 TabBar |
| `safeRestoreNativeTabBar()` | `void` | 安全恢复原生 TabBar |

常用导航写法：

```uts
import { useRouter } from '@/src/router/index.uts';
import { useTabbar } from '@/src/tabbar/index.uts';

const router = useRouter();
const { switchTabbar } = useTabbar();

/** 普通页面跳转，命中 Tab 路径时由路由层自动分流 */
function openMeByRouter(): void {
  router.push('/src/pages/me/me');
}

/** 明确切换 Tab */
function openMeByTabbar(): void {
  switchTabbar('/src/pages/me/me');
}
```

两者都遵守同一条 Tab 导航链路。区别是：`switchTabbar()` 更明确地表达“我要切 Tab”，`router.push()` 更适合普通页面统一跳转。

> `setCurIdx()` 只设置状态，不会触发路由或容器切换。只写它会出现“高亮变了但页面没变”的假切换。

### `useTabbarPage()`

```uts
import { useTabbarPage } from '@/src/tabbar/index.uts';

const {
  isPageVisible,
  pageShowTimes,
  notifyPageShow,
  notifyPageHide,
  onTabShow,
  onTabPageShow,
  resolveTabIndexByKey
} = useTabbarPage();
```

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `isPageVisible` | `Ref<boolean>` | 宿主页面当前是否可见 |
| `pageShowTimes` | `Ref<number>` | 页面累计显示次数 |
| `notifyPageShow()` | `void` | 通知宿主页面已显示 |
| `notifyPageHide()` | `void` | 通知宿主页面已隐藏 |
| `onTabShow(target, cb, immediate?)` | `void` | Tab 被选中时触发 |
| `onTabPageShow(target, cb, immediate?)` | `void` | Tab 页面真正可见时触发 |
| `resolveTabIndexByKey(key)` | `number` | 把 `tabType` 解析为完整列表下标 |

`onTabShow()` 和 `onTabPageShow()` 的区别：

| API | 触发时机 | 适用场景 |
| :--- | :--- | :--- |
| `onTabShow()` | `curIdx` 变成目标 Tab | 埋点、轻量 UI 同步 |
| `onTabPageShow()` | 目标 Tab 激活 **且页面真正可见** | 数据刷新、重新拉取、恢复播放 |

数据刷新优先使用 `onTabPageShow()`，因为它覆盖：

- 切换 Tab；
- 从子页面 `navigateBack` 返回；
- App 从后台回到前台；
- 页面重新可见。

```uts
import { useTabbarPage } from '@/src/tabbar/index.uts';

const { onTabPageShow } = useTabbarPage();

onTabPageShow('order', (): void => {
  // 刷新订单列表
}, true);
```

`immediate = true` 只会在注册时目标 Tab 已激活且页面可见的情况下立即补发一次。订阅应在 `<script setup>` 顶层同步注册，不要放进异步回调或条件分支。

普通 Tab 子视图**不要**调用 `notifyPageShow()` / `notifyPageHide()`。可见性只由宿主页或真实页面外壳通知，重复通知会导致回调被多次触发。

### `useTabPage()`

模式 4 的虚拟页面语义：

```uts
import { useTabPage } from '@/src/tabbar/index.uts';

const {
  route,
  path,
  query,
  name,
  meta,
  isActive,
  isPageVisible,
  onLoad,
  onShow,
  onHide,
  onUnload
} = useTabPage();
```

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `route` | `ComputedRef<RouteLocation>` | 当前 Tab 的完整虚拟路由 |
| `path` | `ComputedRef<string>` | 当前 Tab 路径 |
| `query` | `ComputedRef<Map<string, string>>` | 当前 Tab 已解码 query |
| `name` | `ComputedRef<string \| null>` | 页面声明的 name，未声明时为路径末段 |
| `meta` | `ComputedRef<UTSJSONObject \| null>` | `definePage` / `pages.json` 元信息 |
| `isActive` | `ComputedRef<boolean>` | 当前 Tab 是否被选中 |
| `isPageVisible` | `Ref<boolean>` | 宿主页面是否可见 |
| `onLoad(cb)` | `void` | 首次进入该 Tab 时执行一次 |
| `onShow(cb)` | `void` | 每次重新显示时执行 |
| `onHide(cb)` | `void` | 切走、进入子页、切后台时执行 |
| `onUnload(cb)` | `void` | Tab 视图卸载时执行 |

模式 4 的生命周期与普通页面尽量保持同构：

| 实际场景 | `onLoad` | `onShow` | `onHide` |
| :--- | :---: | :---: | :---: |
| 第一次进入 Tab | ✅ | ✅ | — |
| 切到其他 Tab | — | — | ✅ |
| 切回已访问 Tab | — | ✅ | — |
| 从子页面返回 | — | ✅ | — |
| App 从后台回前台 | — | ✅ | — |
| 进入普通子页面 | — | — | ✅ |

在非 Tab 页面调用 `useTabPage()` 时，内部会回退到原生 `onLoad` / `onShow` / `onHide`，所以同一套页面模板可以复用到普通页面。

### `useTabPageShell()`

```uts
useTabPageShell('order');
```

它解决的是“同一个 `.uvue` 文件在两种身份之间切换”：

- 模式 0-3：文件是真实路由页面；
- 模式 4：文件是被 `TabContent` 引入的子组件。

内部职责：

1. 模式 4 宿主页读取入口 query，恢复目标 Tab；
2. 非模式 4 时用 `tabType` 同步当前 Tab；
3. 桥接页面 `onShow` / `onHide` 到 TabBar 可见性；
4. 注册 Android 返回键退出逻辑；
5. 支付宝小程序隐藏原生“返回首页”按钮；
6. 检测自己是否作为 Tab 子页嵌套，嵌套时不做重复的页面级注册。

调用约束：

- 每个 Tab 页面调用一次，参数与 `config.uts` 的 `tabType` 一致；
- 宿主页 `index.uvue` 也要调用；
- 不要在 Tab 子页中再手动调用 `notifyPageShow()` / `notifyPageHide()`；
- 不要在页面内重复写入口深链解析。

返回值 `boolean` 表示当前是否作为模式 4 的 Tab 子页被嵌套，一般业务不需要使用。

### `useTabbarTheme()`

```uts
import { useTabbarTheme } from '@/src/tabbar/index.uts';

const { isDark, themeTokens, activeThemeColor } = useTabbarTheme();
```

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `isDark` | `Ref<boolean>` | 当前是否深色模式 |
| `themeTokens` | `Ref<ThemeTokens>` | 当前主题下的 TabBar 颜色令牌 |
| `activeThemeColor` | `Ref<string>` | 当前激活项的主题高亮色 |

注意：`activeThemeColor` **不属于** `useTabbar()`。从 `useTabbar()` 解构会报“`UseTabbarResult` 上不存在该属性”。

主题色来自业务主题系统，切换主题后所有使用这些响应式值的 UI 会自动更新。

### `useTabbarMetrics()`

```uts
import { useTabbarMetrics } from '@/src/tabbar/index.uts';

const {
  TABBAR_HEIGHT,
  TABBAR_CONTAINER_HEIGHT,
  hasTabbarBulge,
  safeAreaBottom,
  tabbarPlaceholderHeight,
  tabbarBottomPaddingHeight,
  tabbarBottomPaddingClass
} = useTabbarMetrics();
```

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `TABBAR_HEIGHT` | `number` | TabBar 交互区基准高度（不含安全区） |
| `TABBAR_CONTAINER_HEIGHT` | `number` | 包含鼓包的总容器高度 |
| `hasTabbarBulge` | `boolean` | 当前是否配置了鼓包 |
| `safeAreaBottom` | `Ref<number>` | 底部安全区高度 |
| `tabbarPlaceholderHeight` | `Ref<number>` | TabBar 自身占位高度 |
| `tabbarBottomPaddingHeight` | `Ref<number>` | 页面内容需要额外预留的高度 |
| `tabbarBottomPaddingClass` | `string` | 可选工具类，如 `pb-[80px]` |

底部避让统一使用组件或 hook，不要硬编码 `80px`、`50px` 或 `env(safe-area-inset-bottom)`。安全区和鼓包高度会随机型、形态、模式变化。

### `useTabbarI18n()`

```uts
import { useTabbarI18n } from '@/src/tabbar/index.uts';

const { formatTabbarText, setTabbarItem } = useTabbarI18n();
```

| 返回字段 | 说明 |
| :--- | :--- |
| `formatTabbarText(text)` | 把 i18n key 或普通文案转换为当前语言文案 |
| `setTabbarItem()` | 把当前语言文案同步到原生 TabBar |

新增 Tab 文案时，在 `src/i18n/locales/zh-CN.json` 和 `src/i18n/locales/en-US.json` 中同步增加 key：

```json
{
  "tabbar": {
    "order": "订单"
  }
}
```

`config.uts` 中写 key：

```uts
text: 'tabbar.order'
```

模式 1 / 2 的原生 TabBar 文本由 `setTabbarItem()` 同步；App 启动和语言切换后需要确保重新调用。模式 3 / 4 的自定义 UI 在渲染时通过 `formatTabbarText()` 获取当前语言文案。

## Tab 角标

配置中可以直接声明初始角标：

```uts
badge: 6
```

或只显示小红点：

```uts
badge: 'dot'
```

运行时更新：

```uts
import { useTabbar, useTabbarPage } from '@/src/tabbar/index.uts';

const { setTabbarItemBadge } = useTabbar();
const { resolveTabIndexByKey } = useTabbarPage();

const orderIndex = resolveTabIndexByKey('order');
if (orderIndex >= 0) {
  setTabbarItemBadge(orderIndex, 6);
}
```

不要写死下标。增加中间按钮或调整 Tab 顺序后，数字下标会变化。

`setTabbarItemBadge()` 更新的是统一 TabBar 列表；模式 2/3/4 的自定义 UI 会立即响应。模式 1 使用系统原生 TabBar，若业务需要原生角标，请通过官方 `uni.setTabBarBadge` 做额外封装，并与自定义列表状态保持一致。

## 页面底部避让

TabBar 遮挡页面底部按钮通常不是页面内容的问题，而是占位方式不一致。

### 推荐做法

在 `navbar` 布局或自定义滚动容器中使用：

```vue
<TabbarPlaceholder />
```

项目默认的 `src/layouts/navbar/navbar.uvue` 和模式 4 的 `TabContent.uvue` 已经内置了占位，业务页面通常不需要重复添加。

### 自定义布局

```vue
<template>
  <view class="flex flex-col h-full">
    <scroll-view class="flex-1" direction="vertical">
      <slot />
      <TabbarPlaceholder />
    </scroll-view>
  </view>
</template>

<script setup lang="uts">
import TabbarPlaceholder from '@/src/tabbar/components/TabbarPlaceholder.uvue';
</script>
```

### 需要精确间距时

```uts
import { computed } from 'vue';

const { tabbarBottomPaddingHeight } = useTabbarMetrics();

const bottomStyle = computed((): string => {
  return `padding-bottom: ${tabbarBottomPaddingHeight.value}px;`;
});
```

不要：

- 在所有页面写固定的 `padding-bottom: 80px`；
- 用 `env(safe-area-inset-bottom)` 替代统一安全区工具；
- 在模式 4 的 Tab 子视图里再放一个固定高度的假占位；
- 只在某一个端手动补偿，导致 H5 与 App 的底部位置不一致。

## 模式 4 的 Tab 切换守卫

模式 4 的 Tab 切换不调用 `uni.switchTab`，所以不会触发 route-bestX 的全局 `beforeEach` / `afterEach`。需要按来源做前置操作时，使用 Tab 级导航守卫。

默认注册入口在 `src/tabbar/adapters/tab-navigation.uts`，由 `src/router/index.uts` 的 `setupTabNavigationGuard()` 在路由初始化时安装。

```uts
import type {
  TabNavigationContext,
  TabNavigationNext
} from '@/src/tabbar/index.uts';
import { registerTabNavigationGuard } from '@/src/tabbar/index.uts';

registerTabNavigationGuard((
  context: TabNavigationContext,
  next: TabNavigationNext
): void => {
  if (context.api == 'hostQuery' && context.query.get('from') == 'third-party') {
    // exchangeThirdPartySession 为业务函数示例
    exchangeThirdPartySession(context.query).then((_res: any): void => {
      next(true);
    }, (_err: any): void => {
      next(false);
    });
    return;
  }
  next(true);
});
```

上下文字段：

| 字段 | 说明 |
| :--- | :--- |
| `from` / `fromPath` | 来源 Tab 的完整 URL / path，没有来源时为空 |
| `to` / `toPath` | 目标 Tab 的完整 URL / path |
| `query` | 目标 query，值已解码 |
| `api` | 触发来源：`tabClick` / `router` / `hostQuery` / `switchTabbar` |

约束：

- 必须且只能调用一次 `next(true)` 或 `next(false)`；
- 支持同步和异步；异步完成后才能决定是否切换；
- 未注册守卫时默认放行；
- 连续快速切换时，前一次异步结果会自动失效；
- 该守卫只处理模式 4 的 Tab 到 Tab，不替代登录守卫；
- Tab 到普通页面（例如“我的 → 登录”）仍走全局路由守卫；
- 注册一次即可，不要在页面 `onMounted` 或条件分支里重复注册。

如果要读取来源做业务操作，优先使用 `context.fromPath` 或 `context.from`，不要依赖页面栈猜测来源。

## 构建期插件做了什么

`tabbarViewsPlugin()` 在 `vite.config.ts` 中注册，并且排在 `uniPagesPlugin()` 之前：

```ts
tabbarViewsPlugin({
  enabled: true,
  configFile: 'src/tabbar/config.uts'
})
```

主要行为：

| 行为 | 说明 |
| :--- | :--- |
| 解析配置 | 读取 `config.uts`，剥离注释后解析 `list` 与 `midButton` |
| 补建页面 | `pagePath` 对应文件不存在时生成标准骨架 |
| 生成调度容器 | 重写 `src/tabbar/components/TabViews.uvue` |
| 复用页面文件 | Tab 页面直接 import 各自的 `.uvue`，不再生成 `views/*View.uvue` |
| 宿主 slot | 宿主页通过 `#tabHost` slot 注入，避免循环引用 |
| 同步页面配置 | 把 `title`、`showBack`、`hideNavbar`、`hideStatusBar`、下拉刷新等同步到 `TabContent` |
| 裁剪模式 4 路由 | 非宿主 Tab 从 pages.json 路由移除，只作为组件编译 |
| 幂等写入 | 内容没变化时不写文件，避免无意义热更新 |

触发时机：

- dev 启动时；
- `src/tabbar/config.uts` 修改后；
- 任意 Tab 主页面文件修改后；
- 根目录 `pages.json` 变化后。

模式 0 下插件整体跳过，不生成任何 TabBar 内容。

> 如果页面需要重新排序或改变调度行为，改 `config.uts`、`TabContent.uvue` 或插件本身，不要直接编辑 `TabViews.uvue`。

## 常见场景

### 从普通页面切换到指定 Tab

```uts
import { useRouter } from '@/src/router/index.uts';

const router = useRouter();

function goToOrder(): void {
  router.push({
    path: '/src/pages/order/order',
    query: { id: 1001 }
  });
}
```

### 自定义 TabBar 点击

```uts
function onTabClick(index: number): void {
  handleTabbarClick(index);
}
```

不要自己写两套逻辑：

```uts
// ❌ 只改状态，不切换页面
setCurIdx(index);

// ❌ 直接调用会绕过选中态、守卫和防连击
uni.switchTab({ url });
```

### 判断当前是否是 Tab 页面

```uts
import { isPageTabbar } from '@/src/tabbar/index.uts';

const isTabPage = isPageTabbar('/src/pages/me/me');
```

### 监听 Tab 页面重新显示

```uts
const { onTabPageShow } = useTabbarPage();

onTabPageShow('me', (): void => {
  refreshUserInfo();
}, true);
```

### 订阅 Tab 选中

```uts
const { onTabShow } = useTabbarPage();

onTabShow('me', (): void => {
  reportTabClick('me');
}, true);
```

### 页面内读取 Tab 配置

```uts
import { customTabbarConfig } from '@/src/tabbar/config.uts';

const firstTab = customTabbarConfig.list[0];
```

只读配置可以直接导入 `config.uts`；需要运行时状态和操作时使用 hooks。

## 常见问题

| 现象 | 根因 | 处理 |
| :--- | :--- | :--- |
| 改了 `pages.json` 后又被覆盖 | `pages.json` 是生成物 | 改 `config.uts`、`definePage` 或插件 |
| 改了 `TabViews.uvue` 没效果 | 构建期会重写 | 改 `TabContent.uvue` 或插件 |
| `activeThemeColor` 报不存在 | 解构错了 hook | 从 `useTabbarTheme()` 获取 |
| 高亮变了但页面没变 | 只调用了 `setCurIdx()` | 使用 `switchTabbar()` 或 `handleTabbarClick()` |
| 点击 Tab 绕过登录拦截 | 直接调用了 `uni.switchTab` / `navigateTo` | 统一使用 `router` / `switchTabbar()` |
| 模式 4 页面里 `useRoute()` 永远是首页 | 模式 4 只有宿主真实路由 | 用 `useTabPage().route` |
| 从子页返回后数据没刷新 | 只监听了 `onTabShow()` | 改用 `onTabPageShow()` |
| 回调执行多次 | Tab 子视图重复 `notifyPageShow()` | 只由宿主页或页面外壳通知 |
| 底部按钮被遮挡 | 固定高度写错或占位缺失 | 使用 `TabbarPlaceholder` / metrics |
| H5 与 App 底部位置不同 | 不同端使用了不同占位策略 | 统一使用模式 4 + `TabbarPlaceholder` |
| 新增了 `type: 'glass'` 但没有样式 | 玻璃不是独立形态 | 使用 `glassEffect` 叠加当前形态 |
| 支付宝小程序报 Page / Component 冲突 | 同一个文件同时生成页面和组件 | 不要手改 pages.json，交给模式 4 插件裁剪 |
| 快速连点后 Tab 错乱 | 自定义 UI 自己维护切换逻辑 | 使用 `handleTabbarClick()` |
| 新增 Tab 页面没有上线 | 页面不存在或未重新启动插件 | 检查 `pagePath`，重启 dev |

## 红线清单

- 只改 `src/tabbar/config.uts`，不手改 `pages.json` 和 `TabViews.uvue`。
- 业务导入统一从 `@/src/tabbar/index.uts`，保留 `.uts` 后缀。
- 不直接从 `src/tabbar/core/` 或 `src/tabbar/adapters/` 导入。
- `tabType` 全列表唯一，订阅、角标、深链都用它，不用写死下标。
- `pagePath` 不带前导 `/`。
- Tab 页面调用一次 `useTabPageShell(tabType)`，不要重复写导航壳逻辑。
- 模式 4 Tab 页面用 `useTabPage().route` 读取虚拟路由。
- 数据刷新优先 `onTabPageShow()`。
- 页面跳转只走 `useRouter()` / `switchTabbar()`。
- 自定义 TabBar 点击走 `handleTabbarClick()`。
- 底部避让使用 `<TabbarPlaceholder>` 或 `useTabbarMetrics()`。
- 不新增 `type: 'glass'`，玻璃统一由 `glassEffect` 控制。
- 不手写 `env(safe-area-inset-bottom)` 和固定 `80px` 底部高度。
- hooks 在 `<script setup>` 顶层同步调用，不放进条件分支或异步回调。
- 禁止用 `uni.switchTab`、`uni.navigateTo`、`uni.redirectTo` 绕过 TabBar 与路由守卫。

## 验证

修改 TabBar 后至少验证：

```bash
pnpm dev:web
pnpm dev:mp-weixin
pnpm dev:app-android
pnpm docs:build
```

重点检查：

1. 新增 Tab 后 `pages.json` 和 `TabViews.uvue` 是否自动更新；
2. 模式 4 下切换 Tab 是否零闪烁、状态是否保留；
3. `?tab=xxx` 刷新后是否能恢复 Tab 和 query；
4. 普通页面 → Tab、Tab → 普通页面、Tab → Tab 三条链路是否都经过预期守卫；
5. 鼓包、胶囊、安全区和底部按钮是否没有被遮挡；
6. 微信、支付宝、H5、App 是否只有预期的 TabBar，没有重复或空白页面；
7. 切换语言和深色模式后，Tab 文案、图标和激活色是否同步。

## 相关文档

- [路由篇](/guide/route)：`useRoute`、`useRouter`、全局守卫与登录回跳
- [请求篇](/guide/request)：`useQuery`、`useMutation` 与接口层
- [多语言篇](/guide/i18n)：语言包与运行时切换
- [样式篇](/guide/style)：Tailwind CSS 与页面布局
- [src/tabbar 源码说明](https://github.com/cq112233/unibestX/blob/main/src/tabbar/README.md)
