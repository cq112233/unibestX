---
trigger: glob
description: 页面硬性契约 —— definePage 必填、根容器骨架、数据只走接口层
globs: src/**/*.uts,src/**/*.ts,src/**/*.vue,src/**/*.uvue
---

# page-standard（Glob：`src/**/*.{uts,ts,vue,uvue}`）

> 只写「页面必须长什么样」。`definePage` 全字段、完整骨架、真实案例 → **unibestX-skill 分册 4 / 5**。

## MUST

- **每个页面必须有 `definePage({...})`**，写在 `<script setup lang="uts">` 顶部，至少包含：`layout: 'navbar'`、`showBack`、`hideNavbar`、`enablePullDownRefresh`、`style.navigationBarTitleText`、`style.navigationStyle: 'custom'`。
- **根容器是 `<view class="flex flex-col flex-1">`**；滚动区域在根内部自写 `<scroll-view direction="vertical">`。
- **高度用 `flex-1` 撑满**，不写 `100vh` / `100%` 硬算高度。
- **页面状态显式标注 UTS 类型**：`ref<Array<XxxItem>>([])`、`ref<boolean>(false)`、`ref<number>(0)`。
- **下拉刷新开了就必须闭环**：配 `onNavbarPullDownRefresh` + `stopNavbarPullDownRefresh`，且只写在 `definePage` 顶层。
- **分页 / 长列表一律优先用 `<z-paging-x>`**（内置 `list-view` 虚拟复用、触底自动追加、下拉刷新、空态与 loading）；只有 `<z-paging-x>` 覆盖不了的场景（非分页的纯长列表、瀑布流特殊布局）才手写 `<list-view>` + `<list-item>`。**严禁用 `<scroll-view>` 承载长列表。**
- **组件库优先**：`uni_modules/*/components/` 与根 `components/` 的组件直接写短横线标签，不手动 import；**页面私有组件（`src/pages/*/components/`）必须手动 import**。
- **数据一律经接口层**：页面 / 组件只调 `@/src/api/<page>/<page>.uts` 的 `fetchXxx()`，不直接 `http.get`、不写死假数据。
- **路由参数用 `useRoute()` 读**（`query` 已是解码态 `Map`），禁止 `onLoad((options) => ...)`。

## MUST NOT

- **不用 `<scroll-view>` 当页面根**（与布局滚动容器双重冲突）。
- **不在页面里直接 `uni.showToast` / `uni.getSystemInfoSync` / 读 `process.env`**（走项目封装）。
- **不内联 `env(safe-area-inset-*)`**，用 `p-safe` / `pt-safe` / `pb-safe`。
- **不在原生 `<button>` 上挂 flex 对齐类**，不在 `<view>` 上挂文字颜色。

---

> 📖 需要「上固定 + 下滚动」完整骨架、TabBar 页薄壳、加载 / 空 / 错误三态、`definePage` 全字段说明 → 加载 **unibestX-skill 分册 4**（`.claude/skills/unibestX-skill/references/4-page-component.md`）。
