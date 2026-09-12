# 单页面 TabBar 容器模式（VITE_TABBAR_MODE=4）设计规格说明书

- **日期**：2026-09-11
- **状态**：已批准（Approved）
- **参考实现**：`rice-ui`（`pages/tabbar/index/index.uvue` + `tab-content.uvue`）

---

## 1. 背景与目标

### 1.1 现状分析
在 uni-app X 跨端（App-Android/iOS、Web、微信小程序）开发中，目前 `unibestX` 支持 4 种 TabBar 策略：
- `0: NO_TABBAR`（无 TabBar）
- `1: NATIVE_TABBAR`（原生 TabBar，pages.json 原生配置，使用 `uni.switchTab`）
- `2: CUSTOM_TABBAR_WITH_NATIVE`（自定义 TabBar，pages.json `custom:true` 原生配置并隐藏，保留页面缓存，使用 `uni.switchTab`）
- `3: CUSTOM_TABBAR_WITHOUT_NATIVE`（不带原生配置的自定义 TabBar，使用 `uni.redirectTo`，每次重新加载页面）

在跨页面切换（`uni.switchTab` 或 `uni.redirectTo`）时，由于底层原生视图或 WebView 发生页面级路由切换与容器销毁/重绘，容易产生瞬间的视觉闪烁、白屏或 TabBar 高度微小跳动。

### 1.2 建设目标
新增第 5 种模式：**`VITE_TABBAR_MODE=4`（`SINGLE_PAGE_TABBAR` 单页面容器切换 TabBar 模式）**：
1. **0ms 秒切与零闪烁**：所有 Tab 视图驻留在同一个单页面（`src/pages/index/index.uvue`）中，底部 TabBar 点击仅触发响应式索引变更，不发生跨页面路由跳转。
2. **Tab 状态天然保活与首屏懒加载**：参考 `rice-ui` 的 `tab-content` 机制，首屏按需挂载（`v-if="hasRendered"`），一旦挂载后通过 `visibility: visible/hidden` 与 `display: flex/none` 切换，页面表单数据、滚动位置与组件状态绝不丢失。
3. **NavBar 动态联动与多语言适配**：顶部自定义导航栏（NavBar）标题跟随当前激活 Tab 实时切换（如“首页”、“基础”、“功能”、“我的”），支持国际化 `$t()`。
4. **全模式兼容与代码复用**：各 Tab 核心视图抽离为独立 View 组件，独立页面与单页容器 100% 共享一套业务逻辑，可在 `.env` 中无缝切回模式 0、1、2、3。

---

## 2. 架构蓝图与数据流

```mermaid
graph TD
    A[用户点击底部 TabBar] --> B{判断 TabBar 模式}
    B -- 模式 1/2/3 --> C[路由跳转: switchTab / redirectTo]
    B -- 模式 4 (SINGLE_PAGE_TABBAR) --> D[更新响应式状态: curIdx = index]
    D --> E[TabBar 本地响应式高亮切换 (无路由跳转, 零闪烁)]
    D --> F[顶部 NavBar 标题响应式联动: currentTitle]
    D --> G[TabContent 容器更新]
    G --> H{对应 Tab 是否已挂载?}
    H -- 否 (首次切换到该Tab) --> I[实例化渲染组件 (Lazy Render)]
    H -- 是 (此前已挂载过) --> J[仅切换 visibility / display 显隐 (Keep-Alive 保活)]
```

---

## 3. 详细设计与技术方案

### 3.1 环境变量与构建插件 (`plugins/vite-plugin-uni-pages.ts`)
1. **`.env` 配置扩充**：
   ```properties
   # 4: SINGLE_PAGE_TABBAR（单页面容器切换 TabBar：无跨页面路由跳转，零闪烁，页面状态天然保活，参考 rice-ui）
   VITE_TABBAR_MODE=4
   ```
2. **`pages.json` 自动生成逻辑**：
   - 当 `VITE_TABBAR_MODE === '4' || VITE_TABBAR_MODE === 'SINGLE_PAGE_TABBAR'` 时，与模式 3 一样，**不向 `pages.json` 输出 `tabBar` 原生节点**，避免系统原生底层注入多余的原生 TabBar 容器。
   - 宿主首页 `pages/index/index` 保持为启动页。

### 3.2 策略枚举与运行时状态 (`src/tabbar/helper/index.uts`)
1. **更新策略映射表与解析方法**：
   ```uts
   export type TabbarStrategyType = {
     NO_TABBAR: number;
     NATIVE_TABBAR: number;
     CUSTOM_TABBAR_WITH_NATIVE: number;
     CUSTOM_TABBAR_WITHOUT_NATIVE: number;
     SINGLE_PAGE_TABBAR: number;
     CUSTOM_TABBAR: number;
   };

   export const TABBAR_STRATEGY_MAP: TabbarStrategyType = {
     NO_TABBAR: 0,
     NATIVE_TABBAR: 1,
     CUSTOM_TABBAR_WITH_NATIVE: 2,
     CUSTOM_TABBAR_WITHOUT_NATIVE: 3,
     SINGLE_PAGE_TABBAR: 4,
     CUSTOM_TABBAR: 2
   };
   ```
2. **导出单页模式判断标识**：
   ```uts
   /** 是否为单页面容器 TabBar 模式（模式 4） */
   export const isSinglePageTabbar: boolean = selectedTabbarStrategy == TABBAR_STRATEGY_MAP.SINGLE_PAGE_TABBAR;
   ```
3. **点击切换逻辑重构 (`handleTabbarClick`)**：
   ```uts
   export function handleTabbarClick(index: number): void {
     if (index == curIdx.value) return;
     const list = tabbarList;
     if (list.length <= index) return;
     
     // 鼓包特殊按钮（如 AI）保持页面跳转
     if (list[index].isBulge) {
       handleClickBulge(list[index].pagePath.length > 0 ? list[index].pagePath : '/src/pages/ai/ai');
       return;
     }

     // 模式 4：单页面模式，直接原地修改 curIdx，不触发任何路由跳转
     if (isSinglePageTabbar) {
       setCurIdx(index);
       return;
     }

     // 模式 1/2/3：保持原路由跳转逻辑
     isSwitchingTab = true;
     setCurIdx(index);
     switchTabbar(list[index].pagePath);
     setTimeout(() => {
       isSwitchingTab = false;
     }, 250);
   }
   ```

### 3.3 TabContent 容器组件 (`src/tabbar/components/TabContent.uvue`)
参考 `rice-ui` 的最佳实践，构建符合 UTS 强类型规范与原生 Flex 排版的容器组件：
- **`contentIndex`**: 必填数字属性，代表该容器对应的 Tab 索引。
- **`hasRendered`**: 首次激活时设为 `true`，激活后常驻。
- **`rootStyle`**: 绝对定位充满容器，未激活时 `visibility: hidden; display: none;`，激活时 `visibility: visible; display: flex;`。

### 3.4 各 Tab 视图组件化拆分
为保证现有页面和单页容器均可复用业务代码，将 4 个 Tab 视图抽离为独立 View：
- `src/pages/index/views/HomeView.uvue`
- `src/pages/basic/views/BasicView.uvue`
- `src/pages/function/views/FunctionView.uvue`
- `src/pages/me/views/MeView.uvue`

原有的 `src/pages/basic/basic.uvue`、`function.uvue`、`me.uvue` 仅保留 `definePage` 声明与对应 View 组件引入，当切回模式 1-3 时可继续作为独立页面正常运行。

### 3.5 宿主页面与 NavBar 动态联动 (`src/pages/index/index.uvue`)
1. **宿主页面结构**：
   - 模式 4 下渲染由 4 个 `<TabContent>` 组成的堆叠容器，底部挂载 `<Tabbar />`。
   - 模式 0-3 下降级仅渲染 `<HomeView />`，底部由 `App.ku` 调度。
2. **NavBar 标题联动**：
   - 绑定响应式属性 `displayTitle`：
     ```uts
     const displayTitle = computed<string>((): string => {
       if (isSinglePageTabbar && curIdx.value >= 0 && curIdx.value < tabbarList.length) {
         return $t(tabbarList[curIdx.value].text);
       }
       return systemInfo?.appTitle ?? '首页';
     });
     ```

### 3.6 外部路由跳转兼容 (`switchTabbar`)
当外部页面或拦截器调用 `switchTabbar(targetUrl)` 时：
1. 若当前在宿主页，直接执行 `setCurIdxByPath(targetUrl)`，无路由跳转；
2. 若当前在二级分包或独立页面，重定向至宿主首页 `/pages/index/index`，并设置 `curIdx`。

---

## 4. 验证与测试方案

### 4.1 自动化与类型检查
- 运行 UTS 类型校验与静态语法检查，确保无 `UTS110111163`、`ClassCastException` 等问题。
- 构建各平台（H5、微信小程序、App）无编译报错。

### 4.2 场景验证矩阵
1. **TabBar 切换验证**：
   - 点击 4 个 Tab，观察是否 0ms 瞬间切换、无路由跳转、底部 TabBar 无任何闪烁。
2. **数据与状态保活验证**：
   - 在“基础”Tab 中进行操作（如滚动列表、切换开关），切换到“首页”后再切回“基础”，验证状态依然保持。
3. **顶部 NavBar 联动验证**：
   - 切换 Tab 时，验证顶部 NavBar 标题是否实时同步为对应 Tab 标题。
   - 切换系统语言（中/英），验证 NavBar 标题与 TabBar 文字是否同步响应式更新。
4. **回退兼容性验证**：
   - 将 `.env` 中的 `VITE_TABBAR_MODE` 切换回 `1`、`2`、`3`，验证原有页面模式一切正常。
