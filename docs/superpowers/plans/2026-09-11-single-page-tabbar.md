# 单页面 TabBar 容器模式（VITE_TABBAR_MODE=4）实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 实现 `VITE_TABBAR_MODE=4`（单页面 TabBar 容器模式），将 4 个 Tab 视图整合于宿主首页 `src/pages/index/index.uvue` 中，通过 `TabContent` 容器实现懒加载与常驻保活，消除跨页面 TabBar 切换时的白屏与闪烁，并使 NavBar 标题动态跟随当前 Tab。

**架构：** 在 `plugins/vite-plugin-uni-pages.ts` 中模式 4 不生成 `pages.json` 原生 `tabBar` 节点；抽离各 Tab 视图为独立 `View` 组件并被原独立页面和宿主单页共同复用；使用 `TabContent` 容器控制懒加载与显隐；重构 `handleTabbarClick` 与 `switchTabbar` 保证单页内 0ms 响应且兼容二级页面跳转。

**技术栈：** uni-app X、UTS (无 interface，全部使用 type)、Vue 3 Setup、Tailwind CSS (weapp-tailwindcss)、Vite 插件。

---

## 文件结构规划

- **配置与策略层**：
  - 修改：`.env`（添加 `VITE_TABBAR_MODE=4` 说明）
  - 修改：`plugins/vite-plugin-uni-pages.ts`（适配模式 4 不输出 `tabBar` 节点）
  - 修改：`src/tabbar/helper/index.uts`（扩展策略类型、映射、单页点击逻辑与路由跳转兼容）
- **容器组件层**：
  - 创建：`src/tabbar/components/TabContent.uvue`（懒加载与视图保活容器）
- **视图组件层**：
  - 创建：`src/pages/index/views/HomeView.uvue`（原首页视图）
  - 创建：`src/pages/basic/views/BasicView.uvue`（原基础视图）
  - 创建：`src/pages/function/views/FunctionView.uvue`（原功能视图）
  - 创建：`src/pages/me/views/MeView.uvue`（原我的视图）
- **宿主与页面层**：
  - 修改：`src/pages/index/index.uvue`（单页 TabBar 宿主容器 + 动态 NavBar 标题联动）
  - 修改：`src/pages/basic/basic.uvue`（复用 BasicView）
  - 修改：`src/pages/function/function.uvue`（复用 FunctionView）
  - 修改：`src/pages/me/me.uvue`（复用 MeView）

---

### 任务 1：配置层与策略映射扩展

**文件：**
- 修改：`.env`
- 修改：`plugins/vite-plugin-uni-pages.ts:990-1000`
- 修改：`src/tabbar/helper/index.uts:19-58, 160-185, 123-157`

- [ ] **步骤 1：修改 `.env` 注释说明**
在 `.env` 中增加对 `VITE_TABBAR_MODE=4` 的说明与测试设置：
```properties
# 4: SINGLE_PAGE_TABBAR（单页面容器切换 TabBar：无跨页面路由跳转，零闪烁，页面状态天然保活，参考 rice-ui）
```

- [ ] **步骤 2：在 `plugins/vite-plugin-uni-pages.ts` 中支持模式 4**
找到 `tabbarMode === '3'` 的处理位置，扩展对模式 4 的支持：
```ts
else if (tabbarMode === '3' || tabbarMode === 'CUSTOM_TABBAR_WITHOUT_NATIVE' || tabbarMode === '4' || tabbarMode === 'SINGLE_PAGE_TABBAR') {
  // 模式3（纯自定义无原生配置）与 模式4（单页面 TabBar 容器模式）：完全删除 pages.json 中的 tabBar
  delete output.tabBar;
}
```

- [ ] **步骤 3：在 `src/tabbar/helper/index.uts` 中增加模式 4 策略与逻辑**
1. 扩展 `TabbarStrategyType` 与 `TABBAR_STRATEGY_MAP`，添加 `SINGLE_PAGE_TABBAR: 4`；
2. 扩展 `parseTabbarStrategy()`，识别 `'4'` 或 `'SINGLE_PAGE_TABBAR'`；
3. 导出 `isSinglePageTabbar: boolean = (selectedTabbarStrategy == TABBAR_STRATEGY_MAP.SINGLE_PAGE_TABBAR)`；
4. 在 `handleTabbarClick(index: number)` 中：
```uts
if (isSinglePageTabbar) {
  setCurIdx(index);
  return;
}
```
5. 在 `switchTabbar(url: string)` 中：
```uts
if (isSinglePageTabbar) {
  setCurIdxByPath(url);
  const pages = getCurrentPages();
  const isCurrentlyAtHome = pages.length > 0 && (pages[pages.length - 1].route == 'pages/index/index' || pages[pages.length - 1].route == '/pages/index/index');
  if (!isCurrentlyAtHome) {
    uni.redirectTo({
      url: '/src/pages/index/index'
    });
  }
  return;
}
```

- [ ] **步骤 4：Commit 任务 1**
```bash
git add .env plugins/vite-plugin-uni-pages.ts src/tabbar/helper/index.uts
git commit -m "feat(tabbar): support SINGLE_PAGE_TABBAR strategy in config and helper"
```

---

### 任务 2：创建 `TabContent` 容器组件

**文件：**
- 创建：`src/tabbar/components/TabContent.uvue`

- [ ] **步骤 1：创建 `src/tabbar/components/TabContent.uvue`**
严格遵循 uni-app X 与 UTS 规范，一律使用 `type`，编写懒挂载与保活逻辑：
```html
<template>
  <view v-if="hasRendered" :style="rootStyle" class="tab-content-wrapper">
    <slot />
  </view>
</template>

<script setup lang="uts">
import { computed, onMounted, ref, watch } from 'vue';
import { curIdx } from '@/src/tabbar/helper';

const props = defineProps({
  /** 对应的 TabBar 索引（0, 1, 2, 3 等） */
  contentIndex: {
    type: Number,
    required: true
  }
});

const hasRendered = ref(false);
const isActive = computed<boolean>((): boolean => curIdx.value == props.contentIndex);

const rootStyle = computed<UTSJSONObject>((): UTSJSONObject => {
  return {
    visibility: isActive.value ? 'visible' : 'hidden',
    display: isActive.value ? 'flex' : 'none',
    zIndex: isActive.value ? 1 : 0
  } as UTSJSONObject;
});

onMounted(() => {
  if (curIdx.value == props.contentIndex) {
    hasRendered.value = true;
  }
});

watch(isActive, (newVal: boolean) => {
  if (newVal && !hasRendered.value) {
    hasRendered.value = true;
  }
});
</script>

<style scoped>
.tab-content-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>
```

- [ ] **步骤 2：Commit 任务 2**
```bash
git add src/tabbar/components/TabContent.uvue
git commit -m "feat(tabbar): add TabContent container component for view keep-alive"
```

---

### 任务 3：拆分各 Tab 视图组件并保持独立页面兼容

**文件：**
- 创建：`src/pages/index/views/HomeView.uvue`
- 创建：`src/pages/basic/views/BasicView.uvue`
- 创建：`src/pages/function/views/FunctionView.uvue`
- 创建：`src/pages/me/views/MeView.uvue`
- 修改：`src/pages/basic/basic.uvue`
- 修改：`src/pages/function/function.uvue`
- 修改：`src/pages/me/me.uvue`

- [ ] **步骤 1：创建 `HomeView.uvue`**
将 `src/pages/index/index.uvue` 中的核心内容模板与逻辑封装至 `HomeView.uvue`。

- [ ] **步骤 2：创建 `BasicView.uvue` 并重构 `basic.uvue`**
将 `src/pages/basic/basic.uvue` 中的卡片组件与业务逻辑封装为 `BasicView.uvue`；原 `basic.uvue` 保留 `definePage` 声明并渲染 `<BasicView />`。

- [ ] **步骤 3：创建 `FunctionView.uvue` 并重构 `function.uvue`**
将 `src/pages/function/function.uvue` 中的业务逻辑封装为 `FunctionView.uvue`；原 `function.uvue` 保留 `definePage` 声明并渲染 `<FunctionView />`。

- [ ] **步骤 4：创建 `MeView.uvue` 并重构 `me.uvue`**
将 `src/pages/me/me.uvue` 中的业务逻辑封装为 `MeView.uvue`；原 `me.uvue` 保留 `definePage` 声明并渲染 `<MeView />`。

- [ ] **步骤 5：Commit 任务 3**
```bash
git add src/pages/index/views/ src/pages/basic/ src/pages/function/ src/pages/me/
git commit -m "refactor(pages): extract tab views for Home, Basic, Function, and Me"
```

---

### 任务 4：重构宿主页面 `src/pages/index/index.uvue` 实现零闪烁单页容器

**文件：**
- 修改：`src/pages/index/index.uvue`

- [ ] **步骤 1：重构 `src/pages/index/index.uvue`**
1. 引入 `TabContent`、`HomeView`、`BasicView`、`FunctionView`、`MeView`；
2. 引入 `Tabbar`、`CustomCapsuleTabbar`、`isSinglePageTabbar`、`isCapsuleTabbar`、`curIdx`、`tabbarList`；
3. 动态联动计算标题：
```uts
const currentNavTitle = computed<string>((): string => {
  if (isSinglePageTabbar && curIdx.value >= 0 && curIdx.value < tabbarList.length) {
    return $t(tabbarList[curIdx.value].text);
  }
  return systemInfo?.appTitle ?? '首页';
});
```
4. 模板结构：
```html
<template>
  <view class="flex flex-col flex-1 relative overflow-hidden" style="flex: 1; height: 100%;">
    <!-- 模式 4：单页面 TabBar 容器模式 -->
    <template v-if="isSinglePageTabbar">
      <!-- 各 Tab 视图堆叠保活区 -->
      <view class="flex-1 relative" style="flex: 1; position: relative;">
        <TabContent :content-index="0">
          <HomeView />
        </TabContent>
        <TabContent :content-index="1">
          <BasicView />
        </TabContent>
        <TabContent :content-index="2">
          <FunctionView />
        </TabContent>
        <TabContent :content-index="3">
          <MeView />
        </TabContent>
      </view>
      <!-- 底部常驻 TabBar (与 rice-ui 相同，同页渲染零跳转) -->
      <CustomCapsuleTabbar v-if="isCapsuleTabbar" />
      <Tabbar v-else />
    </template>

    <!-- 模式 0-3：独立页面模式 -->
    <HomeView v-else />
  </view>
</template>
```
5. 下拉刷新时，分发给当前激活的 Tab。

- [ ] **步骤 2：Commit 任务 4**
```bash
git add src/pages/index/index.uvue
git commit -m "feat(pages): integrate single page tabbar container with dynamic navbar in index.uvue"
```

---

### 任务 5：完整构建验证与跨模式回退测试

**文件：**
- 验证相关文件

- [ ] **步骤 1：开启 `VITE_TABBAR_MODE=4` 并运行编译验证**
运行构建命令检查 UTS 强类型与 Vite 插件：
`pnpm build:h5`
预期：构建成功，无 UTS 强类型错误。

- [ ] **步骤 2：验证 Tab 切换与保活效果**
检查单页面切换逻辑，确认无跨页路由跳转。

- [ ] **步骤 3：验证回退到 `VITE_TABBAR_MODE=2`**
切回模式 2，验证独立页面与原生/自定义 TabBar 配置仍然正常编译工作。

- [ ] **步骤 4：Commit 任务 5**
```bash
git commit --allow-empty -m "chore: verify single page tabbar mode and backward compatibility"
```
