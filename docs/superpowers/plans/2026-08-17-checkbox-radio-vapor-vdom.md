# Checkbox 与 Radio 组件兼容 Vapor / VDOM 双模式实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 将 `up-checkbox` / `up-checkbox-group` 与 `up-radio` / `up-radio-group` 重构为基于 `provide / inject` 的响应式通信，彻底兼容 uni-app X 的 Vapor 模式和 VDOM 模式。

**架构：** 在父组件 Group 中通过 `provide` 下发响应式 `parentState` 及变更回调函数，子组件通过 `inject` 读取并派生选中态 `isChecked` 与各种视觉属性，点击时回调通知父组件修改 `modelValue`。

**技术栈：** Vue 3 Composition API (`<script setup lang="uts">`), UTS, uni-app X, UnoCSS / SCSS。

---

## 任务 1：重构 `up-radio-group` 与 `up-radio`

**文件：**

- 修改：`uni_modules/uview-ultra/components/up-radio-group/up-radio-group.uvue`
- 修改：`uni_modules/uview-ultra/components/up-radio/up-radio.uvue`

- [x] **步骤 1：将 `up-radio-group.uvue` 重构为 `<script setup lang="uts">` 并 provide 响应式状态和事件回调**
- [x] **步骤 2：将 `up-radio.uvue` 重构为 `<script setup lang="uts">` 并 inject 父级状态与回调**
- [x] **步骤 3：自测 `up-radio` 单独使用及 group 组合使用**

---

## 任务 2：重构 `up-checkbox-group` 与 `up-checkbox`

**文件：**

- 修改：`uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.uvue`
- 修改：`uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue`

- [x] **步骤 1：在 `up-checkbox-group.uvue` 中加入 provide 响应式状态与 toggle 回调**
- [x] **步骤 2：在 `up-checkbox.uvue` 中加入 inject 响应式判断与 toggle 回调**
- [x] **步骤 3：自测 `up-checkbox` 单独使用及 group 组合使用**

---

## 任务 3：验证与测试

**文件：**

- 检查：`src/sub/uview-ultra/demos/checkbox/checkbox.uvue`
- 检查：`src/sub/uview-ultra/demos/radio/radio.uvue`

- [x] **步骤 1：检查类型与编译正确性**
- [x] **步骤 2：验证 Demo 交互无报错**
