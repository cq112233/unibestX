# 三、项目代码生成规范（流程 · 标准模板 · 维护机制）

> **本文件是 `unibestX-skill` 的参考分册**，由 [SKILL.md](../SKILL.md) 按需引用。
>
> **何时读本文件**：新增页面 / 组件前走生成流程、需要复制标准页面模板、或需要按四维分类回写本 Skill 时。
> 注意：**3.3 快速排查对照表**与**3.4 代码生成红线清单**常驻在 [SKILL.md](../SKILL.md) 中，不在本文件。
>
> **回写规则**：新增页面范式与生成流程变更写入本文件对应小节；硬性致命错误同步追加到 [SKILL.md](../SKILL.md) 的 3.4 红线清单。

当 AI 助手或开发者在项目中**创建新页面、生成新组件或修改既有业务代码**时，必须严格遵照本生成规范执行。

## 3.1 新增页面的生成流程与必须要素

```mermaid
graph TD
    A[确定页面类型] --> B{是否为 TabBar 页面?}
    B -->|是| C1[配置 showBack: false]
    B -->|否| C2[配置 showBack: true]
    C1 --> D[声明 definePage 顶层 enablePullDownRefresh: true]
    C2 --> D
    D --> E[引入 refresh.uts 注册下拉刷新闭环]
    E --> F[搭建页面根容器: view + flex flex-col flex-1]
    F --> G[在内部自写 scroll-view 实现滚动]
    G --> H[组件库优先: 引用 uni-icons 等成熟组件]
    H --> I[红线自检: 检查 interface/undefined/color on view/过度阴影]
```

### 必须要素清单

1. **显式 `definePage` 声明**：每一个 `.uvue` 页面必须在 `<script setup lang="uts">` 最顶部显式书写 `definePage({...})`，统一使用 `navbar` 布局接管；
2. **默认开启自定义下拉刷新**：顶层显式设置 `enablePullDownRefresh: true`，严禁在 `style` 内部开原生下拉；
3. **闭环刷新逻辑**：引入 `onNavbarPullDownRefresh` 与 `stopNavbarPullDownRefresh`，在数据拉取结束后必须调用 `stopNavbarPullDownRefresh()`；
4. **根容器骨架铁律**：页面根节点一律为 `<view class="flex flex-col flex-1">`，严禁使用 `<scroll-view>` 作为页面根；
5. **滚动区域实现**：需要滚动的区域在根内自写 `<scroll-view direction="vertical" class="flex-1 flex flex-col">`；
6. **组件库优先**：界面图标使用 `<uni-icons>`，分页列表使用 `<z-paging-x>`，折叠面板使用 `<uni-collapse-x>`，严禁手动 import easycom 范围内的组件。

---

## 3.2 页面代码生成标准模板

### 模板 1：标准二级/子包/功能页面（常用模板，直接复制落地）

```uts
<template>
  <!-- 页面根容器：view + flex-1 弹性撑满可用高度 -->
  <view class="flex flex-col flex-1 px-[16px] pt-[12px]">

    <!-- 顶部固定区域（可选） -->
    <view class="w-full mb-[12px] bg-white rounded-[12px] p-[16px]">
      <text class="text-[15px] font-semibold text-[#1e293b]">顶部标题区</text>
      <text class="text-[12px] text-[#64748b] mt-[2px]">说明文本</text>
    </view>

    <!-- 内部自写 scroll-view 弹性占满剩余空间 -->
    <scroll-view
      direction="vertical"
      class="flex-1 flex flex-col"
      :lower-threshold="50"
      @scroll="handleScroll"
      @scrolltolower="handleScrollToLower"
    >
      <view class="flex flex-col">
        <!-- 列表或主要内容区域 -->
        <view
          v-for="(item, index) in dataList"
          :key="index"
          class="w-full bg-white rounded-[8px] p-[12px] mb-[8px] flex flex-col"
        >
          <text class="text-[14px] text-[#334155]">{{ item }}</text>
        </view>
      </view>
    </scroll-view>

  </view>
</template>

<script setup lang="uts">
import { ref } from 'vue';
import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/utils/refresh/index.uts';

// 1. 显式声明页面布局与导航栏配置
definePage({
  layout: 'navbar',
  showBack: true,
  hideNavbar: false,
  enablePullDownRefresh: true, // 开启自定义下拉刷新
  style: {
    navigationBarTitleText: '页面标题',
    navigationStyle: 'custom'
  }
});

// 2. 状态变量显式类型声明（禁 undefined，数字/数组显式声明）
const dataList = ref<Array<string>>(['数据项 1', '数据项 2', '数据项 3']);
const scrollTop = ref<number>(0);

// 3. 注册下拉刷新
onNavbarPullDownRefresh(() => {
  // 执行刷新请求
  setTimeout(() => {
    stopNavbarPullDownRefresh();
  }, 1000);
});

// 4. 滚动事件监听
function handleScroll(e: UniScrollEvent): void {
  scrollTop.value = Math.ceil(e.detail.scrollTop);
}

function handleScrollToLower(): void {
  console.log('触底加载更多');
}
</script>

<style></style>
```

### 模板 2：TabBar 主页面模板

```uts
<template>
  <view class="flex flex-col flex-1 px-[16px] pt-[12px]">
    <scroll-view direction="vertical" class="flex-1 flex flex-col">
      <view class="flex flex-col">
        <view class="bg-white rounded-[12px] p-[16px] mb-[12px]">
          <text class="text-[16px] font-bold text-[#1e293b]">TabBar 模块标题</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="uts">
import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/utils/refresh/index.uts';

definePage({
  layout: 'navbar',
  showBack: false, // 👈 TabBar 页面无返回按钮
  hideNavbar: false,
  enablePullDownRefresh: true,
  style: {
    navigationBarTitleText: '首页模块',
    navigationStyle: 'custom'
  }
});

onNavbarPullDownRefresh(() => {
  setTimeout(() => {
    stopNavbarPullDownRefresh();
  }, 1000);
});
</script>

<style></style>
```

---

---

## 3.5 VDOM 与 Vapor 差异自动分类与 Skill 维护规范

所有智能体（AI / Agent）在维护和使用本项目时，必须严格执行以下闭环同步机制：

> 📁 **本 Skill 为分册式结构**：入口 `SKILL.md` 只常驻「概述 + 导航 + 3.3 对照表 + 3.4 红线清单」，正文细节分装在 `references/` 下的 7 个分册中。回写时必须写进**对应分册**，并同步入口的导航与速查表。

1. **自动归类与写入准则**：当发现某项 UTS 语法、Vue 响应式机制、组件属性、CSS 样式或 API 在 VDOM 模式与 Vapor 模式下表现不一致或报错时，**必须立即按照以下四维分类自动追加**：
   - **语法与类型层不通用**（如特定响应式解构、类型推断、事件参数）：追加到 **`references/1.1-uts-syntax.md`（1.1 语法核心铁律）**，编号续接 `1.1.20`、`1.1.21`…；
   - **样式与渲染层不通用**（如阴影 Elevation、特定 CSS 属性继承、边框裁切）：追加到 **`references/1.2-styling.md`（1.2 样式与原生渲染铁律）**，编号续接 `1.2.19`、`1.2.20`…；
   - **运行时与编译引擎不通用**（如 TabBar 配置、反射获取未声明字段、生命周期差异）：追加到 **`references/1.3-runtime.md`（1.3 跨端运行时约束）**，编号续接 `1.3.21`、`1.3.22`…；
   - **排查表与红线同步**：同步向入口 `SKILL.md` 的 **3.3 快速排查表** 追加正反例，并将硬性致命错误追加至 **3.4 红线清单**（两条常驻入口，不在分册里）。
2. **标杆案例持续扩充**：若在业务开发中沉淀了更好的 VDOM/Vapor 双模式通用的骨架、组件组合或页面范式，同步收录至 **`references/2-examples.md`（第二部分 项目正确案例）**，编号续接 `2.6`、`2.7`…。
3. **内置工具库同步**：`src/utils/` 下新增模块、或既有模块新增导出 / 改变调用姿势（含新增 API、参数语义变化、新增跨端限制）时，同步更新 **`references/4-utils.md`（第四部分 项目内置工具库）**，编号续接 `4.11`、`4.12`…，并同步入口 `SKILL.md` 导航表中该行的模块清单。
4. **页面与应用基础设施同步**：`src/http/`、`src/router/`、`src/layouts/`、`src/i18n/` 四个目录新增导出、改变调用姿势或新增跨端限制（含请求错误契约变化、新增拦截器、布局新增 `definePage` 字段、语言包命名空间调整）时，同步更新 **`references/5-infra.md`（第五部分 页面与应用基础设施）**，编号续接 `5.6`、`5.7`…；若某条属**静默致命**级别（如 5.4 的 `navigationStyle: 'custom'`），同时追加到入口 `SKILL.md` 的 **3.4 红线清单**。
5. **跨端环境同步保证**：`.claude/skills/unibestX-skill/` 与 `.agents/skills/unibestX-skill/` 是同一套 Skill 的两份副本，**两边的 `SKILL.md` 与 `references/` 下全部 7 个分册必须逐字保持一致**。任一环境（含新增 / 改名分册、调整导航表）发生改动时，必须把整个目录同步过去，保证全 agent 工具链标准统一。
