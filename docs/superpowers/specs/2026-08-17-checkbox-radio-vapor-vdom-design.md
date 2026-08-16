# Checkbox & Radio 组件兼容 Vapor 与 VDOM 双模式设计规格

## 1. 概述

本项目 uni-app X 需在两种编译运行模式下运行良好：
1. **VDOM 模式**：基于虚拟 DOM 的传统渲染模式。
2. **Vapor 模式**：基于 Vue Vapor 机制的无虚拟 DOM 高性能模式。

当前 `up-checkbox` / `up-checkbox-group` 与 `up-radio` / `up-radio-group` 在跨组件通信中存在对 `$parent`、`$children`、`$callMethod` 和 Options API `mixins` 的强依赖，导致在 Vapor 模式下父子状态无法同步。

本设计将上述两组组件重构为基于 Vue 3 核心 `provide / inject` 响应式状态下发与事件通知架构，同时保持全部原有 API、props、插槽及样式兼容。

---

## 2. 架构设计

### 2.1 数据流与通信机制

- **父级 Group（`up-radio-group` / `up-checkbox-group`）**：
  - 维护自身 `props`（`modelValue` 等）。
  - 通过 `provide(GROUP_PROPS_KEY, parentData)` 下发响应式只读状态。
  - 通过 `provide(GROUP_HANDLER_KEY, handler)` 下发回调函数。
  - 通过 `emit('update:modelValue', val)` 与 `emit('change', val)` 响应外界 `v-model`。
- **子级 Item（`up-radio` / `up-checkbox`）**：
  - 通过 `inject(GROUP_PROPS_KEY)` 获取父级配置。
  - `isChecked`、`elDisabled`、`elSize`、`elActiveColor` 等属性均通过 `computed` 响应式派生。
  - 点击时优先调用 `inject(GROUP_HANDLER_KEY)` 回调通知父组件，父组件更新 `modelValue` 后子组件自动触发响应式重绘。
  - 如果未处于 Group 容器内（如单独使用 `usedAlone`），则降级为组件内部本地 `ref` 驱动。

---

## 3. 组件详细设计

### 3.1 `up-radio-group`
- 使用 `<script setup lang="uts">`。
- Props：`modelValue`, `disabled`, `shape`, `activeColor`, `inactiveColor`, `name`, `size`, `placement`, `label`, `labelColor`, `labelSize`, `labelDisabled`, `iconColor`, `iconSize`, `borderBottom`, `iconPlacement`, `customStyle`。
- Emits：`['update:modelValue', 'change']`。
- Provide 键名：
  - `'upRadioGroupProps'`: `ComputedRef<UTSJSONObject>`
  - `'upRadioGroupChange'`: `(name: any) => void`

### 3.2 `up-radio`
- 使用 `<script setup lang="uts">`。
- Props：`name`, `shape`, `disabled`, `labelDisabled`, `activeColor`, `inactiveColor`, `iconSize`, `labelSize`, `label`, `size`, `iconColor`, `labelColor`, `customStyle`, `usedAlone`。
- Emits：`['change', 'update:checked']`。
- Inject：
  - `'upRadioGroupProps'`
  - `'upRadioGroupChange'`
- 状态派生：
  - `isChecked`: 若存在 group 则判断 `parentProps.value['modelValue'] == props.name`；否则使用本地 `selfChecked`。

### 3.3 `up-checkbox-group`
- 使用 `<script setup lang="uts">`。
- Props：`name`, `modelValue`, `shape`, `disabled`, `activeColor`, `inactiveColor`, `size`, `placement`, `labelSize`, `labelColor`, `labelDisabled`, `iconColor`, `iconSize`, `iconPlacement`, `borderBottom`, `customStyle`。
- Emits：`['update:modelValue', 'change']`。
- Provide 键名：
  - `'upCheckboxGroupProps'`: `ComputedRef<UTSJSONObject>`
  - `'upCheckboxGroupToggle'`: `(name: string, checked: boolean) => void`

### 3.4 `up-checkbox`
- 使用 `<script setup lang="uts">`。
- Props：`name`, `shape`, `size`, `checked`, `disabled`, `activeColor`, `inactiveColor`, `iconSize`, `iconColor`, `label`, `labelColor`, `labelSize`, `labelDisabled`, `customStyle`, `usedAlone`。
- Emits：`['change', 'update:checked']`。
- Inject：
  - `'upCheckboxGroupProps'`
  - `'upCheckboxGroupToggle'`
- 状态派生：
  - `isChecked`: 若存在 group 则判断 `(parentProps.value['modelValue'] as any[]).includes(props.name)`；否则使用本地 `selfChecked`。

---

## 4. 验证计划
1. 运行 checkbox demo 页面（`src/sub/uview-ultra/demos/checkbox/checkbox.uvue`）。
2. 运行 radio demo 页面（`src/sub/uview-ultra/demos/radio/radio.uvue`）。
3. 检查控制台与交互日志，验证全平台 UTS 编译无类型与语法报错。
