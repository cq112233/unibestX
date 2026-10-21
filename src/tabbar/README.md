# src/tabbar 底部导航栏（配置驱动 · 五种模式 · 构建期自动生成）

底部 TabBar 采用**配置驱动**：所有 Tab 项（文字、图标、路径、角标、鼓包）集中在 [config.uts](config.uts) 一处声明，剩下的交给构建期插件 `tabbarViewsPlugin` 与运行时驱动层自动完成——**你基本不写 tabbar 的渲染代码**。

三种模式（原生 / 自定义 / 单页容器）共用同一份配置，切换只改 `.env` 里的 `VITE_TABBAR_MODE`，业务代码不用动。

> 🚨 **只改 [config.uts](config.uts)，不要手改 `pages.json`。** 根目录的 `pages.json` 是构建期生成的产物（[pages.config.json](../../pages.config.json) + 页面 `definePage` + 本配置共同生成），手改会在下次编译被覆盖。

---

## 三方关系：谁负责什么

```text
src/tabbar/config.uts        ← 你改这里（唯一真源）
        │
        ├──► plugins/vite-plugin-tabbar-views.ts   （构建期：解析配置 → 生成代码）
        │        ├─ 自动补全 src/pages/<tab>/views/<Xxx>View.uvue 脚手架
        │        ├─ 自动生成 src/tabbar/components/TabViews.uvue（单页模式的调度容器）
        │        └─ 从各 Tab 页面的 definePage 同步 title / hideNavbar / 下拉刷新等
        │
        └──► src/tabbar/internal/*        （运行时：状态、切换、生命周期、主题、尺寸）
                 └─ 由 src/tabbar/index.uts 单层门面统一转发
```

| 环节 | 文件 | 什么时候跑 |
| :--- | :--- | :--- |
| 配置声明 | [config.uts](config.uts) | 人写 |
| 代码生成 | [plugins/vite-plugin-tabbar-views.ts](../../plugins/vite-plugin-tabbar-views.ts) | dev 启动 + 配置/页面/pages.json 变更时 |
| 运行时 | [internal/](internal/) + [ui/](ui/) | 应用运行期 |

---

## 目录结构

```text
src/tabbar/
├── index.uts                     # 门面：单层转发 config / types / internal 全部公开符号（业务侧 import 入口）
├── config.uts                    # ⭐ 唯一真源：Tab 列表、颜色、形态、midButton
├── types.uts                     # 契约类型：TabBarConfig / CustomTabBarItem / TabBarMidButton
├── tabbar.uvue                   # TabBar 渲染入口（按 config.type 分发到具体 UI 形态）
├── internal/                     # 运行时实现（业务侧不要直接引）
│   ├── state.uts                 #   tabbarList / curIdx / onTabShow / 角标 / 路径判断
│   ├── strategy.uts              #   五种模式解析 + 各模式开关量
│   ├── navigate.uts              #   switchTabbar() / handleTabbarClick() / 原生鼓包事件
│   ├── lifecycle.uts             #   onTabPageShow() / 页面可见性通知
│   ├── metrics.uts               #   TabBar 高度、安全区、底部预留内边距
│   ├── tab-key.uts               #   业务标识(tabType) ⇄ 下标 的解析
│   ├── theme.uts                 #   明暗主题色
│   ├── i18n.uts                  #   Tab 文案国际化
│   └── native.uts                #   隐藏原生 tabBar
├── components/
│   ├── TabViews.uvue             # ⚠️ 构建期自动生成（单页模式的 Tab 调度容器），勿手改
│   ├── TabContent.uvue           #   单个 Tab 的容器（负责页面配置与下拉刷新包裹）
│   └── TabbarPlaceholder.uvue    #   占位（配合 navbar 布局预留高度）
└── ui/
    ├── template.uvue             # 新 UI 形态的模板（复制它来扩展）
    ├── capsule/index.uvue        # 悬浮胶囊岛屿形态（type: 'capsule'，支持 glassEffect）
    └── default/                  # 标准贴底形态（type: 'default'，支持 glassEffect）
        ├── index.uvue
        └── TabbarItem.uvue
```

| 你要做的事 | 去哪个文件 |
| :--- | :--- |
| 加 / 删 Tab、换文字图标路径 | [config.uts](config.uts) |
| 切换 TabBar 模式（原生 / 自定义 / 单页） | [.env](../../.env) 的 `VITE_TABBAR_MODE` |
| 切换 UI 形态（胶囊 / 贴底） | [config.uts](config.uts) 的 `type` |
| 开关液态玻璃效果 | [config.uts](config.uts) 的 `glassEffect`（iOS 原生，其他端毛玻璃降级） |
| 扩展第四种 UI 形态 | 复制 [ui/template.uvue](ui/template.uvue) → 在 [tabbar.uvue](tabbar.uvue) 加分支 |
| 页面里切 Tab / 监听 Tab | [index.uts](index.uts) 导出的 `switchTabbar` / `onTabShow` / `onTabPageShow` |
| 改 Tab 页面标题、是否显示导航栏、下拉刷新 | 对应页面的 `definePage`（插件会自动同步进 `TabViews.uvue`） |
| 调整生成行为（关掉自动建脚手架等） | [vite.config.ts](../../vite.config.ts) 里 `tabbarViewsPlugin({...})` |

---

## 快速上手

### 1. 加一个 Tab

1. 在 [config.uts](config.uts) 的 `list` 数组里追加一项：

   ```uts
   {
     tabType: 'me',                              // ⭐ 业务标识，见下文
     text: 'tabbar.me',                          // 文案（走 i18n key，或直接写中文）
     pagePath: 'src/pages/me/me',                // 不带前导 /
     iconType: 'icon',                           // 'icon' = uni-icons 字体图标；'image' = 本地图片
     icon: 'person',
     iconActive: 'person-filled',
     iconPath: 'static/tabbar/people.png',       // iconType 为 'image' 时用这两个
     selectedIconPath: 'static/tabbar/people_fill.png',
     badge: null,                                // number | 'dot' | null
     isBulge: false
   }
   ```

2. 保存。插件会自动为该 `pagePath` 生成页面目录下的 `views/<Xxx>View.uvue` 脚手架（若还没有），并重新生成 [components/TabViews.uvue](components/TabViews.uvue)。
3. 直接在生成的 `views/*View.uvue` 里写业务代码——**不用手写路由容器，也不用在任何地方注册**。

> 💡 **`tabType` 是业务标识**，供 `onTabShow('index', ...)` 这类订阅使用。它不随 `list` 顺序调整（增删 Tab、插 `midButton`）而失效，比写下标稳。建议全小写、全列表唯一；不配则回退 `tab-${下标}`。

### 2. 中间鼓包按钮 `midButton`

`config.uts` 里那段 `midButton` 默认是**注释掉的**——解开注释即启用，插件会自动把它按居中位置插进列表并生成对应视图组件；再注释掉即停用。

**插件的注释处理**：解析前会剥掉 `//` 行注释与 `/* */` 块注释，所以**用注释来启停 `midButton` 是官方支持的写法**，不会污染生成的代码。

> ⚠️ **`midButton` 的跨端限制**（官方原生底层能力）：
>
> | 端 | 支持 |
> | :--- | :--- |
> | Web 4.0+ | ✅ |
> | Android(VDOM) / iOS(VDOM) | ✅ |
> | 微信小程序 / 鸿蒙 / iOS(Vapor) | ❌ |
>
> 若业务必须全端一致的鼓包效果，把 `VITE_TABBAR_MODE` 设为 `2`（自定义 TabBar）——**组件层渲染的鼓包是 100% 全端一致的**，不依赖原生能力。

### 3. 五种模式（`.env` 的 `VITE_TABBAR_MODE`）

| 值 | 模式 | 是否有页面缓存 | 切换方式 | `pages.json` 节点 + 谁渲染 |
| :--- | :--- | :--- | :--- | :--- |
| `0` | 无 TabBar | — | — | 无节点，什么都不渲染 |
| `1` | 原生 TabBar | ✅ | `uni.switchTab` | 生成原生 `tabBar` 节点，由框架渲染 |
| `2` | 自定义 TabBar（带原生底座） | ✅ | `uni.switchTab` | 生成 `tabBar: { custom: true }`（原生被隐藏），[App.ku.uvue](../../App.ku.uvue) 渲染自定义 UI |
| `3` | 纯自定义 TabBar | ❌ 每次重载 | `uni.redirectTo` | **无 `tabBar` 节点**，[App.ku.uvue](../../App.ku.uvue) 渲染 |
| `4` | 单页容器 TabBar | ✅ 天然保活、零闪烁 | 切容器内索引，**不跳路由** | **无 `tabBar` 节点**，[src/pages/index/index.uvue](../pages/index/index.uvue) 渲染 |

本项目默认 `4`。模式解析在 [internal/strategy.uts](internal/strategy.uts)，业务侧判断当前模式用导出的 `isSinglePageTabbar` / `isNativeTabbar` / `customTabbarEnable` / `needTabbarBottomPadding`。模式 1 / 2 的 `tabBar` 节点由 [plugins/vite-plugin-uni-pages.ts](../../plugins/vite-plugin-uni-pages.ts) 从 [config.uts](config.uts) 生成。

> ⚠️ **模式 4 的入口页面只有一个**（`src/pages/index/index.uvue`），其余 Tab 页面在该模式下不参与路由，只作为视图组件被 `TabViews.uvue` 挂载。这也是它「零闪烁、状态天然保活」的原因。

### 4. UI 形态（`config.uts` 的 `type`）

| 值 | 形态 | 实现 |
| :--- | :--- | :--- |
| `'capsule'` | 悬浮胶囊岛屿 | [ui/capsule/index.uvue](ui/capsule/index.uvue) |
| `'default'` | 标准贴底底座 | [ui/default/index.uvue](ui/default/index.uvue) |

分发逻辑在 [tabbar.uvue](tabbar.uvue)：按 `type` 选分支，未命中则回落到 `default`。要加第三种形态：

1. 复制 [ui/template.uvue](ui/template.uvue) 到 `ui/<你的形态>/index.uvue`；
2. 在 [tabbar.uvue](tabbar.uvue) 加一个 `v-else-if` 分支；
3. 把 `config.uts` 的 `type` 改成新值。

`<Tabbar>` 支持 `type` prop 做形态局部覆盖（不传则读 `config.uts`）；液态玻璃统一由 `config.uts` 的 `glassEffect` 控制。

---

## 插件配合细节（`tabbarViewsPlugin`）

插件在 [vite.config.ts](../../vite.config.ts) 注册：

```ts
tabbarViewsPlugin({
  enabled: true,
  autoCreateViews: !isBuild,          // 构建时不再新建文件（避免产物里凭空多出脚手架）
  configFile: 'src/tabbar/config.uts'
})
```

**它做的事**：

| 行为 | 细节 |
| :--- | :--- |
| 解析配置 | 读 `config.uts`，剥掉全部注释后解析 `list` 与 `midButton` |
| 补齐页面脚手架 | 若某 Tab 页面目录下**没有任何 `.uvue`**，生成 `<Xxx>View.uvue`（含 `onTabShow` + 下拉刷新示例） |
| 选已有组件 | 已有 `.uvue` 时优先取 `HomeView.uvue`（仅 `index` 目录）、其次同名 `<Xxx>View.uvue`、最后取第一个 |
| 生成调度容器 | 重写 [components/TabViews.uvue](components/TabViews.uvue)，按配置顺序（含 `midButton` 居中）排列 `<TabContent>` |
| 同步页面配置 | 从 `pages.json` 与页面 `definePage` 源码里取 `title` / `hideNavbar` / `hideStatusBar` / `enablePullDownRefresh` / `customPageClass` / `customPageStyle`，写进 `<TabContent>` 的属性 |
| 幂等写入 | 内容无变化时不写文件，不触发热重载 |

**触发时机**：dev 启动时；以及这三个文件变更后（100ms 防抖）——`src/tabbar/config.uts`、各 Tab 主页面文件（如 `src/pages/me/me.uvue`）、根目录 `pages.json`。

**模式 0 下插件整体跳过**（`NO_TABBAR` 不生成任何东西）。

> ⚠️ **[components/TabViews.uvue](components/TabViews.uvue) 是生成物**，手改会在下次触发时被覆盖。要改调度行为请改 `TabContent.uvue` 或插件本身。

---

## 运行时 API

统一从门面导入：

```uts
import { switchTabbar, onTabShow, onTabPageShow, curIdx } from '@/src/tabbar/index.uts';
```

| API | 说明 |
| :--- | :--- |
| `switchTabbar(url: string)` | **全局统一 Tab 跳转**。单页模式直接切索引，多页面模式自动选 `switchTab` / `redirectTo` |
| `onTabShow(target, cb, immediate?)` | 监听到**某个 Tab 被切换激活**。用于单页模式下补上子视图没有原生 `onShow` 的缺口（切回来时重新拉数据） |
| `onTabPageShow(target, cb, immediate?)` | 监听**某个 Tab 页面重新显示**。是 `onTabShow` 的超集：除切 Tab 外还覆盖「从子页返回」「App 回前台」。它还会修掉 `onTabShow` 的时序坑——在子页面里调 `switchTabbar` 时 `curIdx` 立即变化，`onTabShow` 会在容器页仍不可见时就回调，而 `onTabPageShow` 会推迟到页面真正返回时补发 |
| `curIdx` | 当前激活 Tab 的下标（响应式 `ref<number>`） |
| `tabbarList` | 完整 Tab 列表（含鼓包项，`pagePath` 已补前导 `/`），可用于自定义 UI |
| `setCurIdx(idx)` / `setCurIdxByKey(key)` / `setCurIdxByPath(path)` | 手动设置激活项（按业务标识 / 按路径） |
| `setTabbarItemBadge(idx, badge)` | 动态设置角标：`number` 或 `'dot'` |
| `isPageTabbar(path)` | 判断某路径是否属于 TabBar 页面（**全路径比对**，非子串） |
| `handleTabbarClick(index)` | Tab 点击的统一处理（自定义 UI 里调它）。**250ms 防连击锁在这里**：与当前项相同、下标越界、或落在锁内都会被静默忽略 |
| `initNativeMidButtonTap()` | 安装原生 `midButton` 的点击事件（已在 [App.uvue](../../App.uvue) 调用） |
| `safeHideNativeTabBar()` | 安全隐藏原生 tabBar（模式 2 用） |
| `TABBAR_HEIGHT` / `tabbarPlaceholderHeight` / `tabbarBottomPaddingClass` | 尺寸与底部预留（页面内容避让 TabBar 时用） |

**`target` 的三种写法**（`onTabShow` / `onTabPageShow` 通用）：业务标识字符串 `'index'`（**推荐**）、数字下标 `0`、或 `pagePath` / 下标字符串。标识解析不到时会在控制台告警。

---

## 谁在哪里渲染

| 文件 | 负责 |
| :--- | :--- |
| [App.ku.uvue](../../App.ku.uvue) | 模式 2 / 3：全局渲染 `<Tabbar>`（仅当前页是 Tab 页时） |
| [src/pages/index/index.uvue](../pages/index/index.uvue) | 模式 4：渲染 `<TabViews>` + `<Tabbar>` 的单页容器 |
| [App.uvue](../../App.uvue) | 调用 `initNativeMidButtonTap()` / `setTabbarItem()` |
| [src/layouts/navbar/navbar.uvue](../layouts/navbar/navbar.uvue) | 用 `<TabbarPlaceholder>` 预留底部高度 |

业务页面**不需要**再挂载任何 TabBar 相关组件。

---

## 导入约定

| 你要的 | 从哪拿 |
| :--- | :--- |
| 跳 Tab / 监听 Tab / 读激活项 | `@/src/tabbar/index.uts`（门面） |
| 只读配置项（如 `customTabbarConfig`） | `@/src/tabbar/config.uts`（精准导入，避免拉进整包） |
| TabBar 组件本体 | `@/src/tabbar/tabbar.uvue` |
| 单页调度容器 | `@/src/tabbar/components/TabViews.uvue` |
| 高度占位 | `@/src/tabbar/components/TabbarPlaceholder.uvue` |

- ⚠️ **`.uts` / `.uvue` 后缀必须保留**（`@/src/tabbar/index.uts`，不是 `@/src/tabbar`）：去掉后缀 TS 侧会丢补全并报 TS2307。`@` 指向项目根。
- ⚠️ **[internal/](internal/) 下的模块不要从业务代码直接引**：它们是运行时实现细节，且彼此之间已用精准导入互相引用（`./state.uts` / `../config.uts`），从门面反向穿透会形成自环，在 Kotlin 端表现为类初始化死锁。
- ⚠️ **页面跳转一律走 `useRouter()` / `switchTabbar()`**，不要直接写 `uni.switchTab` / `uni.navigateTo`——绕过守卫会让登录拦截、TabBar 分流、路由状态同步同时失效。详见 `uni_modules/route-bestX`。
