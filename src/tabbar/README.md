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
        │        ├─ 自动生成 src/tabbar/components/TabViews.uvue（单页模式的调度容器）
        │        ├─ 普通 Tab 直接复用各自的页面 .uvue，不再生成 views/*View.uvue
        │        ├─ 宿主页（默认 src/pages/index/index）通过 #tabHost slot 注入，避免自引用
        │        └─ 从各 Tab 页面的 definePage 同步 title / hideNavbar / 下拉刷新等
        │
        └──► src/tabbar/core/*            （运行时：状态、切换、生命周期、尺寸）
                 └─ 通过 src/tabbar/adapters/* 读取主题、i18n、navbar、系统与业务配置
                    └─ 由 src/tabbar/index.uts 单层门面统一转发
```

| 环节 | 文件 | 什么时候跑 |
| :--- | :--- | :--- |
| 配置声明 | [config.uts](config.uts) | 人写 |
| 代码生成 | [plugins/vite-plugin-tabbar-views.ts](../../plugins/vite-plugin-tabbar-views.ts) | dev 启动 + 配置/页面/pages.json 变更时 |
| 运行时 | [core/](core/) + [adapters/](adapters/) + [ui/](ui/) | 应用运行期 |

---

## 目录结构

```text
src/tabbar/
├── index.uts                     # 门面：单层转发 config / core / adapters 的公开符号（业务侧 import 入口）
├── config.uts                    # ⭐ 唯一真源：Tab 列表、颜色、形态、midButton
├── tabbar.uvue                   # TabBar 渲染入口（按 config.type 分发到具体 UI 形态）
├── core/                         # 核心运行逻辑（业务无关注入点尽量放这里）
│   ├── types.uts                 #   契约类型：TabBarConfig / CustomTabBarItem / TabBarMidButton
│   ├── state.uts                 #   tabbarList / curIdx / onTabShow / 角标 / 路径判断
│   ├── strategy.uts              #   五种模式解析 + 各模式开关量
│   ├── navigate.uts              #   switchTabbar() / handleTabbarClick() / 原生鼓包事件
│   ├── tab-navigation.uts        #   Tab 切换前置钩子（来源上下文 / 同步或异步放行）
│   ├── lifecycle.uts             #   onTabPageShow() / 页面可见性通知
│   ├── metrics.uts               #   TabBar 高度、安全区、底部预留内边距
│   ├── tab-key.uts               #   业务标识(tabType) ⇄ 下标 的解析
│   ├── path.uts                  #   路径规范化与当前路由读取
│   └── native.uts                #   隐藏原生 tabBar
├── adapters/                     # 业务桥接层（唯一允许依赖宿主业务的位置）
│   ├── config.uts                #   注入 Tab 业务配置
│   ├── theme.uts                 #   明暗主题色
│   ├── i18n.uts                  #   Tab 文案国际化
│   ├── navbar.uts                #   navbar 显隐 / 下拉刷新桥接
│   ├── tab-navigation.uts        #   Tab 切换前置处理入口（第三方接入 / 数据预取）
│   ├── platform.uts              #   H5 / 支付宝小程序等平台判断
│   └── system.uts                #   安全区与系统尺寸
├── hooks/                        # 组合式 API（业务侧推荐入口）
│   ├── useTabbar.uts             #   全局状态、模式与导航动作
│   ├── useTabbarPage.uts         #   onTabShow / onTabPageShow / 页面可见性
│   ├── useTabPage.uts            #   模式 4：当前 Tab 的虚拟路由与页面生命周期
│   ├── useTabPageShell.uts       #   页面文件双身份适配（真实页面 / Tab 子页）
│   ├── useTabbarTheme.uts        #   明暗主题令牌
│   ├── useTabbarMetrics.uts      #   高度、安全区与底部预留
│   └── useTabbarI18n.uts         #   文案国际化与原生 TabBar 同步
├── components/
│   ├── TabViews.uvue             # ⚠️ 构建期自动生成（单页模式的 Tab 调度容器），勿手改
│   ├── TabPageHost.uvue          #   模式 4 宿主页壳：挂载 TabViews / Tabbar，普通模式直接透传内容
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
| 页面里切 Tab / 监听 Tab | [index.uts](index.uts) 导出的 `useTabbar()` / `useTabbarPage()`（底层函数仍兼容） |
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

2. 保存。插件会重新生成 [components/TabViews.uvue](components/TabViews.uvue)；普通 Tab 直接导入 `pagePath` 对应的页面 `.uvue`。
3. 直接在页面 `.uvue` 里写业务内容。模式 4 下同一个文件既是真实页面，也是 Tab 子组件，不再维护 `views/*View.uvue`。
4. 页面需要模式 4 的虚拟路由 / 生命周期时调用 `useTabPage()`；需要同时兼容真实页面与 Tab 子页身份时，再调用 `useTabPageShell('该 Tab 的 tabType')`。

> 💡 **`tabType` 是业务标识**，供 `onTabShow('index', ...)` 这类订阅使用。它不随 `list` 顺序调整（增删 Tab、插 `midButton`）而失效，比写下标稳。建议全小写、全列表唯一；不配则回退 `tab-${下标}`。

### 2. 中间鼓包按钮 `midButton`

`config.uts` 里那段 `midButton` 默认是**注释掉的**——解开注释即启用，插件会自动把它按居中位置插进列表并直接挂载对应页面；再注释掉即停用。

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
| `4` | 单页容器 TabBar | ✅ 天然保活、零闪烁 | 切容器内索引，**不跳路由** | **无 `tabBar` 节点，且仅宿主页注册真实路由**，[src/pages/index/index.uvue](../pages/index/index.uvue) 渲染 |

本项目默认 `4`。模式解析在 [core/strategy.uts](core/strategy.uts)，业务侧判断当前模式用导出的 `isSinglePageTabbar` / `isNativeTabbar` / `customTabbarEnable` / `needTabbarBottomPadding`。模式 1 / 2 的 `tabBar` 节点由 [plugins/vite-plugin-uni-pages.ts](../../plugins/vite-plugin-uni-pages.ts) 从 [config.uts](config.uts) 生成。

> ⚠️ **模式 4 的入口页面只有一个**（`src/pages/index/index.uvue`），其余 Tab 页面在该模式下不参与路由，而是由 `TabViews.uvue` 直接导入页面 `.uvue` 作为子组件挂载。这也是它「零闪烁、状态天然保活」的原因；宿主页自身则通过 `TabPageHost` 的 `#tabHost` slot 注入，避免 `index.uvue → TabViews → index.uvue` 循环引用。
>
> 构建插件会把非宿主 Tab 页从 `pages.json` 的主包页面表中移除，只作为组件编译；否则支付宝小程序会为同一个 `.uvue` 同时生成 `createPage` 与 `createComponent`，并报「无 Component() 构造器调用，但 Page() 页面构造器被错误调用」。这些页面的配置仍会写入 `virtual:uni-pages-route-table`，因此 `useTabPage().route.meta / name` 不受影响。

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
  configFile: 'src/tabbar/config.uts',
  hostPage: 'src/pages/index/index'   // 模式 4 宿主页；通过 #tabHost slot 提供自身内容
})
```

**它做的事**：

| 行为 | 细节 |
| :--- | :--- |
| 解析配置 | 读 `config.uts`，剥掉全部注释后解析 `list` 与 `midButton` |
| 复用页面文件 | 按 `pagePath` 直接导入 `src/pages/<tab>/<tab>.uvue`，不再探测或生成 `views/*View.uvue`；模式 4 下非宿主 Tab 页会自动从 `pages.json` 路由中移除，只作为组件编译 |
| 宿主页 slot | 检测到 `hostPage` 时不在 `TabViews` 中 import 宿主页，改为渲染 `<slot name="tabHost" />`，由 `TabPageHost` 注入内容 |
| 避免重复包裹 | `uni-layouts-plugin` 与 `root-plugin` 在模式 4 都会跳过 `TabViews` 直接引用的 Tab 页面：前者不重复包 navbar，后者不重复包 `AppRoot`；宿主页自身仍保留唯一布局与根骨架 |
| 生成调度容器 | 重写 [components/TabViews.uvue](components/TabViews.uvue)，按配置顺序（含 `midButton` 居中）排列 `<TabContent>` |
| 同步页面配置 | 优先从 `pages-meta-cache.ts` 的跨进程快照恢复完整多平台 `definePage` 变体，再以 `pages.json` 与页面源码兜底；把 `title` / `showBack` / `hideNavbar` / `hideStatusBar` / `enablePullDownRefresh` / `customPageClass` / `customPageStyle` 写进 `<TabContent>`，切换 Tab 时动态同步到宿主页唯一的 navbar |
| 幂等写入 | 内容无变化时不写文件，不触发热重载 |

**触发时机**：dev 启动时；以及这三个文件变更后（100ms 防抖）——`src/tabbar/config.uts`、各 Tab 主页面文件（如 `src/pages/me/me.uvue`）、根目录 `pages.json`。

**模式 0 下插件整体跳过**（`NO_TABBAR` 不生成任何东西）。

> ⚠️ **[components/TabViews.uvue](components/TabViews.uvue) 是生成物**，手改会在下次触发时被覆盖。要改调度行为请改 `TabContent.uvue` 或插件本身。

---

## Hooks 用法（推荐）

所有 hooks 都从 [index.uts](index.uts) 门面导入。它们读取的是**同一份全局 TabBar 状态**，不需要 `provide/inject`，也不会因为多个组件分别调用 `useTabbar()` 而产生多份 `curIdx`：

```uts
import {
  useTabPage,
  useTabbar,
  useTabbarPage,
  useTabbarTheme,
  useTabbarMetrics,
  useTabbarI18n
} from '@/src/tabbar/index.uts';
```

### 1. `useTabbar()`：状态、模式与导航

适合页面、Navbar、自定义 TabBar UI 读取当前激活项，或执行 Tab 切换、角标更新等操作。

```uts
import { useTabbar } from '@/src/tabbar/index.uts';

const {
  curIdx,
  tabbarList,
  activeTabTitle,
  isSinglePageTabbar,
  switchTabbar,
  handleTabbarClick,
  setTabbarItemBadge
} = useTabbar();
```

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `curIdx` | `Ref<number>` | 当前激活的 Tab 下标，包含中间鼓包项 |
| `tabbarList` | `CustomTabBarItem[]` | 完整 Tab 列表，已合并鼓包项并补齐 `pagePath` 前导 `/` |
| `activeTabTitle` | `Ref<string>` | 当前激活 Tab 的标题，供 Navbar 联动 |
| `customTabbarConfig` | `TabBarConfig` | TabBar 原始配置 |
| `isSinglePageTabbar` | `boolean` | 是否为模式 4 单页保活 |
| `isNativeTabbar` | `boolean` | 是否为模式 1 原生 TabBar |
| `customTabbarEnable` | `boolean` | 是否需要渲染自定义 TabBar |
| `needTabbarBottomPadding` | `boolean` | 页面是否需要底部预留空间 |
| `tabbarType` | `string` | 当前 UI 形态，`default` / `capsule` |
| `setCurIdx(idx)` | `void` | 直接设置激活下标并持久化，不跳路由 |
| `setCurIdxByKey(key)` | `void` | 按业务标识设置激活项，推荐用于避免写死下标 |
| `setCurIdxByPath(path)` | `void` | 按页面路径设置激活项 |
| `syncCurIdxByCurrentPage()` | `void` | 根据当前页面路径同步激活项；模式 4 下为空操作（宿主页路径无法代表当前 Tab） |
| `setTabbarItemBadge(idx, badge)` | `void` | 设置数字角标或 `'dot'` 红点 |
| `isPageTabbar(path)` | `boolean` | 判断路径是否为 TabBar 页面 |
| `switchTabbar(url)` | `void` | 按当前模式切换 Tab（单页切索引，多页面走 `switchTab` / `redirectTo`） |
| `handleTabbarClick(index)` | `void` | 自定义 TabBar UI 的统一点击处理，内置防连击 |
| `resetTabSwitchThrottle()` | `void` | 重置切换节流锁，通常在 TabBar 卸载时调用 |
| `initNativeMidButtonTap()` | `void` | 初始化原生中间按钮点击监听 |
| `safeHideNativeTabBar()` | `void` | 安全隐藏系统原生 TabBar |
| `safeRestoreNativeTabBar()` | `void` | 安全恢复系统原生 TabBar |

**点击切换示例：**

```uts
/** 自定义 TabBar 点击：交给统一处理器完成模式判断与防连击 */
function onTabClick(index: number): void {
  handleTabbarClick(index);
}

/** 明确跳转到某个 Tab 页时也可以直接调用 */
function goMe(): void {
  switchTabbar('/src/pages/me/me');
}
```

**角标示例：**

```uts
import { useTabbar, useTabbarPage } from '@/src/tabbar/index.uts';

const { setTabbarItemBadge } = useTabbar();
const { resolveTabIndexByKey } = useTabbarPage();

/** 通过业务标识找下标，避免增删 Tab 后数字下标失效 */
const meIndex = resolveTabIndexByKey('me');
if (meIndex >= 0) {
  setTabbarItemBadge(meIndex, 6);
}
```

### 2. `useTabbarPage()`：页面显示与 Tab 生命周期

用于监听某个 Tab 被激活、页面重新显示，以及向上通知宿主页面的可见性变化。

```uts
import { useTabbarPage } from '@/src/tabbar/index.uts';

const { onTabShow, onTabPageShow } = useTabbarPage();

onTabShow('index', (): void => {
  console.log('首页 Tab 被切换激活');
});

onTabPageShow('me', (): void => {
  console.log('我的 Tab 页面重新显示');
}, true);
```

| 返回字段 | 说明 |
| :--- | :--- |
| `isPageVisible` | 当前宿主页面是否可见 |
| `pageShowTimes` | 当前页面累计显示次数 |
| `notifyPageShow()` | 通知 TabBar：宿主页面已显示 |
| `notifyPageHide()` | 通知 TabBar：宿主页面已隐藏 |
| `onTabShow(target, callback, immediate?)` | 监听某个 Tab 被切换激活 |
| `onTabPageShow(target, callback, immediate?)` | 监听某个 Tab 页面重新显示，覆盖从子页返回、App 回前台等场景 |
| `resolveTabIndexByKey(key)` | 将业务标识解析为完整列表下标 |

- **`target` 推荐写业务标识**：例如 `'index'`、`'me'`；也兼容数字下标、`pagePath` 和下标字符串。
- **优先使用 `onTabPageShow()`**：它覆盖范围比 `onTabShow()` 更完整。尤其是从子页面返回时，前者会等宿主页面真正重新显示后再补发回调。
- **`immediate = true`**：订阅时如果目标 Tab 已经处于激活且页面可见，会立即执行一次回调；默认 `false`。
- **`notifyPageShow/Hide()` 只给宿主页面调用**：单页模式通常由 `src/pages/index/index.uvue` 的 `onShow` / `onHide` 桥接；普通 Tab 子视图不要重复通知。

宿主页面桥接示例：

```uts
import { onHide, onShow } from '@dcloudio/uni-app';
import { useTabbar, useTabbarPage } from '@/src/tabbar/index.uts';

const { setCurIdxByKey } = useTabbar();
const { notifyPageShow, notifyPageHide } = useTabbarPage();

onShow((): void => {
  setCurIdxByKey('index');
  notifyPageShow();
});

onHide((): void => {
  notifyPageHide();
});
```

### 3. `useTabPage()`：模式 4 的普通页面开发体验

模式 4 仍是单页保活，不会为每个 Tab 创建真实页面；但 Tab 页面 `.uvue` 可以通过 `useTabPage()` 获得与普通页面一致的页面语义：

- `route.path` / `route.fullPath` / `route.query` / `route.meta` / `route.name` 都是**当前 Tab 自己的**，不是宿主页 `/src/pages/index/index`；
- `onLoad` 首次进入执行一次，`onShow` 每次切回、从子页返回、App 回前台执行，`onHide` 切走 / 进子页 / 切后台执行，`onUnload` 在视图卸载时执行；
- 跳转继续使用 `useRouter()`，命中 TabBar 路径时自动切 Tab，并把 query 写入该 Tab 的虚拟路由。

```uts
import { useRouter } from '@/uni_modules/route-bestX/index.uts';
import { useTabPage } from '@/src/tabbar/index.uts';

const router = useRouter();
const {
  route,
  onLoad,
  onShow,
  onHide,
  onUnload
} = useTabPage();

onLoad((): void => {
  // 普通页面 onLoad：当前 Tab 自己的路径和参数
  const id = route.value.query.get('id') ?? '';
  console.log(route.value.path, id);
});

onShow((): void => {
  // 切回当前 Tab / 从子页返回 / App 回前台
});

onHide((): void => {
  // 切走当前 Tab / 进入子页 / App 切后台
});

onUnload((): void => {
  // Tab 视图卸载
});

/** 普通页面写法跳转到另一个 Tab，并带上该 Tab 自己的 query */
function openBasic(): void {
  router.push({
    path: '/src/pages/basic/basic',
    query: { id: 1 }
  });
}
```

- 在模板里直接写 `{{ route.path }}` / `{{ route.query.get('id') }}`；在 `<script>` 中读取 `route.value`。
- 该 hook 用于 Tab 页面 `.uvue`：普通 Tab 页面（如 `src/pages/basic/basic.uvue`）的下标由外层 `TabContent` 注入；模式 4 宿主首页则自动按自身路由匹配 Tab，无需额外传参。非 Tab 的普通页面调用时会自动回退到原生 `onLoad / onShow / onHide`，因此也可统一使用这套页面生命周期写法。
- 页面入口深链使用 `?tab=basic&id=1`：`tab` 支持 `tabType` 或完整 `pagePath`，其余参数写入目标 Tab 的虚拟 query。
- H5 下切换 Tab 会同步浏览器地址栏为 `?tab=basic&id=1`，刷新页面仍会恢复当前 Tab 及其 query；App / 小程序没有浏览器地址栏，不受影响。
- 模式 4 的 Tab 切换和入口深链不触发 `router.beforeEach`，但会在写入虚拟状态前执行 Tab 导航前置钩子。钩子可读取来源 Tab、目标 Tab、query 与触发方式，并支持异步完成第三方接入、参数换取或数据预取；从 Tab 进入普通页面时，全局守卫看到的 `from` 仍是真实宿主页 `/src/pages/index/index`。
- 模式 4 仍是“页面语义仿真”：系统级独立 URL、独立页面栈、原生分享地址和页面级原生路由转场仍不存在；需要这些能力时只能使用真实多页面模式。当前方案解决的问题是**业务开发写法**与**生命周期 / 参数读取**，不是伪造系统页面栈。

#### 模式 4 的 Tab 切换前置钩子

默认前置处理入口在 [adapters/tab-navigation.uts](adapters/tab-navigation.uts)，业务也可以直接注册自己的处理函数：

```uts
import type { TabNavigationContext, TabNavigationNext } from '@/src/tabbar/index.uts';
import { registerTabNavigationGuard } from '@/src/tabbar/index.uts';

registerTabNavigationGuard((context: TabNavigationContext, next: TabNavigationNext): void => {
  if (context.api == 'hostQuery' && context.query.get('from') == 'third-party') {
    prepareThirdPartyEntry(context.query).then((_res: any): void => {
      next(true);
    }, (_err: any): void => {
      next(false);
    });
    return;
  }
  next(true);
});
```

- `context.from` / `context.fromPath`：来源虚拟 Tab；普通点击时就是当前 Tab。
- `context.to` / `context.toPath` / `context.query`：目标 Tab 与目标参数。
- `context.api`：`tabClick`（TabBar 点击）、`router`（路由跳转）、`hostQuery`（`?tab=xxx` 入口深链）、`switchTabbar`（业务直接调用）。
- 外部第三方来源通常从 `context.query` 读取（例如 `from=third-party`）；同时可用 `context.api == 'hostQuery'` 判断是否为入口直链。
- 前置操作完成前不会修改当前 Tab、虚拟 query 或 H5 地址栏；异步操作必须调用且只调用一次 `next(true)` / `next(false)`。

### 4. `useTabPageShell()`：页面文件双身份适配

Tab 页面 `.uvue` 会同时承担「真实路由页面」与「模式 4 Tab 子组件」两种身份。`useTabPageShell()` 会自动区分：

- 被 `TabContent` 嵌套时：跳过页面级 `onShow` / `onHide`，交给 `useTabPage()` 派发；
- 作为模式 0-3 的真实页面运行时：同步 Tab 下标、通知页面可见性，并安装 Android 返回键处理；
- 作为模式 4 的宿主页运行时：自动承接 `?tab=basic&id=1` 入口深链、通知页面可见性并安装 Android 返回键处理，不按宿主路由重置当前 Tab；
- 支付宝小程序中同时隐藏原生「返回首页」按钮。

```uts
import { useTabPageShell } from '@/src/tabbar/index.uts';

// 普通 Tab 页面：放在 <script setup> 顶层，参数与 config.uts 中的 tabType 一致
useTabPageShell('basic');

// 模式 4 宿主页：同样只调用这一处，入口深链与生命周期都由 hook 处理
useTabPageShell('index');
```

- 不要在页面里重复写 `activateTabPageFromHostQuery()`、`setCurIdxByKey()`、`notifyPageShow/Hide()` 或 `useBackPressExit()`。
- 普通真实页面不需要调用；只有同时作为 Tab 页面的 `.uvue` 才使用。

### 5. `useTabbarTheme()`：主题与高亮色

```uts
import { useTabbarTheme } from '@/src/tabbar/index.uts';

const { isDark, themeTokens, activeThemeColor } = useTabbarTheme();
```

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `isDark` | `Ref<boolean>` | 当前是否为深色模式 |
| `themeTokens` | `Ref<ThemeTokens>` | TabBar 背景、边框、文字等颜色令牌 |
| `activeThemeColor` | `Ref<string>` | 当前激活项使用的高亮主题色 |

> ⚠️ **`activeThemeColor` 属于 `useTabbarTheme()`，不属于 `useTabbar()`。** 从错误的 hook 解构会报「`UseTabbarResult` 上不存在属性 `activeThemeColor`」。

### 6. `useTabbarMetrics()`：尺寸、安全区与底部预留

```uts
import { useTabbarMetrics } from '@/src/tabbar/index.uts';

const {
  TABBAR_HEIGHT,
  safeAreaBottom,
  tabbarPlaceholderHeight,
  tabbarBottomPaddingHeight,
  tabbarBottomPaddingClass
} = useTabbarMetrics();
```

| 返回字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `TABBAR_HEIGHT` | `number` | 交互区基准高度，不含底部安全区 |
| `TABBAR_CONTAINER_HEIGHT` | `number` | 容器总高度，包含鼓包突出部分 |
| `hasTabbarBulge` | `boolean` | 当前是否配置了鼓包按钮 |
| `safeAreaBottom` | `Ref<number>` | 底部安全区高度 |
| `tabbarPlaceholderHeight` | `Ref<number>` | TabBar 自身的占位高度 |
| `tabbarBottomPaddingHeight` | `Ref<number>` | 页面内容需要额外预留的底部高度 |
| `tabbarBottomPaddingClass` | `string` | 页面底部预留工具类名，如 `pb-[80px]` |

- 模板中可直接写 `{{ tabbarPlaceholderHeight }}`，Vue 会自动解包 Ref。
- 在 `.uts` 脚本中读取响应式尺寸要写 `safeAreaBottom.value`。
- 页面底部避让优先使用 `<TabbarPlaceholder>`，不要自己重复手算高度。

### 7. `useTabbarI18n()`：文案国际化与原生同步

```uts
import { useTabbarI18n } from '@/src/tabbar/index.uts';

const { formatTabbarText, setTabbarItem } = useTabbarI18n();

/** 将多语言 key 转成当前语言文案 */
const homeText = formatTabbarText('tabbar.home');
```

| 返回字段 | 说明 |
| :--- | :--- |
| `formatTabbarText(text)` | 将多语言 key 转成当前语言文案 |
| `setTabbarItem()` | 将当前语言文案同步到系统原生 TabBar，通常由 `App.uvue` 调用 |

### 8. 按场景选择 Hook

| 场景 | 推荐入口 |
| :--- | :--- |
| 读取当前 Tab 下标 / Tab 列表 | `useTabbar().curIdx` / `useTabbar().tabbarList` |
| 切 Tab、更新角标、同步索引 | `useTabbar()` |
| 监听切 Tab、从子页返回、App 回前台 | `useTabbarPage().onTabPageShow()` |
| 模式 4 下按普通页面方式读路由 / 生命周期 | `useTabPage()` |
| 页面文件同时兼容真实页面与模式 4 Tab 子页 | `useTabPageShell(tabType)` |
| 读取明暗模式、主题令牌、高亮色 | `useTabbarTheme()` |
| 计算 TabBar 高度、安全区、底部占位 | `useTabbarMetrics()` |
| 转换 Tab 文案、同步原生 TabBar 文案 | `useTabbarI18n()` |

**使用约束：**

- hooks 在页面 / 组件的 `<script setup>` 中同步调用，不要放进条件分支或异步回调。
- `onTabShow()` / `onTabPageShow()` 会注册订阅，同一次 `setup` 中只注册需要的事件，避免重复回调。
- 业务代码统一从 `@/src/tabbar/index.uts` 导入；不要直接引用 `core/` 或 `adapters/` 内部文件。

---

## 底层 API（兼容入口）

hooks 是对底层 API 的组合封装。以下具名函数仍保留导出，兼容已有页面与框架级代码；新业务代码优先使用 hooks。

```uts
import { switchTabbar, onTabShow, onTabPageShow, curIdx } from '@/src/tabbar/index.uts';
```

| API | 说明 |
| :--- | :--- |
| `switchTabbar(url: string, api?: string)` | **全局统一 Tab 跳转**。单页模式先执行前置钩子，再更新虚拟 Tab 状态、query 与地址栏；多页面模式自动选 `switchTab` / `redirectTo`。`api` 用于标记 `tabClick` / `router` / `hostQuery` 等来源 |
| `registerTabNavigationGuard(guard)` | 注册模式 4 的 Tab 切换前置钩子；传入 `null` 可移除 |
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
| [src/tabbar/components/TabPageHost.uvue](components/TabPageHost.uvue) | 模式 4：渲染 `<TabViews>` + `<Tabbar>`，并把宿主页业务内容注入 `#tabHost` slot |
| [src/pages/index/index.uvue](../pages/index/index.uvue) | 模式 4 宿主页：通过 `<TabPageHost>` 提供唯一一份首页业务内容 |
| [App.uvue](../../App.uvue) | 调用 `initNativeMidButtonTap()` / `setTabbarItem()` |
| [src/layouts/navbar/navbar.uvue](../layouts/navbar/navbar.uvue) | 用 `<TabbarPlaceholder>` 预留底部高度 |

业务页面**不需要**再挂载任何 TabBar 相关组件。

---

## 导入约定

| 你要的 | 从哪拿 |
| :--- | :--- |
| 切 Tab / 监听 Tab / 读激活项 | `@/src/tabbar/index.uts` 的 `useTabbar()` / `useTabbarPage()`（门面，hooks 优先） |
| 主题 / 尺寸 / 文案转换 | `@/src/tabbar/index.uts` 的 `useTabbarTheme()` / `useTabbarMetrics()` / `useTabbarI18n()` |
| 只读配置项（如 `customTabbarConfig`） | `@/src/tabbar/config.uts`（精准导入，避免拉进整包） |
| TabBar 组件本体 | `@/src/tabbar/tabbar.uvue` |
| 模式 4 宿主页壳 | `@/src/tabbar/components/TabPageHost.uvue` |
| 单页调度容器 | `@/src/tabbar/components/TabViews.uvue` |
| 高度占位 | `@/src/tabbar/components/TabbarPlaceholder.uvue` |

- ⚠️ **`.uts` / `.uvue` 后缀必须保留**（`@/src/tabbar/index.uts`，不是 `@/src/tabbar`）：去掉后缀 TS 侧会丢补全并报 TS2307。`@` 指向项目根。
- ⚠️ **[core/](core/) 与 [adapters/](adapters/) 下的模块不要从业务代码直接引**：统一走门面，避免绕过公开 API 与形成反向依赖；`adapters/` 是宿主业务桥接层，未来抽成 `uni_modules` 时优先替换这里。
- ⚠️ **页面跳转一律走 `useRouter()` / `switchTabbar()`**，不要直接写 `uni.switchTab` / `uni.navigateTo`——绕过守卫会让登录拦截、TabBar 分流、路由状态同步同时失效。详见 `uni_modules/route-bestX`。
