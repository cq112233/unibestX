# up-radio / up-checkbox / up-switch / up-rate / up-picker 架构重构设计

## 1. 背景

2026-08-17 的《Checkbox & Radio 组件兼容 Vapor 与 VDOM 双模式设计》已把 `up-radio` / `up-checkbox` 及其 group 从 Options API 的 `$parent` / `$children` / `$callMethod` 改造为 `provide` / `inject`，解决了 Vapor 模式下父子状态不同步的问题。

但那一轮的产物采用了 `ComputedRef<UTSJSONObject>` 作为跨组件协议：子组件通过 `parentProps!.value['modelValue']` 字符串下标读取父级状态。这带来一组新的可维护性问题（见第 3 节），且其余三个组件（`up-switch` / `up-rate` / `up-picker`）尚未纳入统一架构。

本设计将上述五个组件及其 group 统一重构为**强类型契约架构**，参照 `uni_modules/rice-ui`（外部参考实现，未安装到本项目）的类型组织方式，同时**完整保留 uview-plus 的对外 API**。

## 2. 目标与非目标

### 目标

1. 五个组件及其 group 采用统一的强类型契约架构。
2. 对外 API **零破坏**：props 名称、类型、默认值、事件名与载荷、slot、`defineExpose` 方法全部不变，demo 页面一行不改。
3. 在 Vapor（`vapor: true`）与 VDOM（`vapor: false`）两种模式下均可编译通过。
4. 消除已知的脆弱构造（见 5.7 节第 3 项）。

### 非目标

1. **不改变组件行为**。本轮是内部实现重构，不是功能迭代。
2. **不更换样式体系**。保留 uview 的 BEM 类名与 `$up-` 编译期变量体系。
3. **不重构 picker 的渲染内核**。`up-picker` 保留现有的双渲染路径（APP 自研 `scroll-view` 滚轮 / 非 APP 原生 `picker-view`）。
4. **不动 `.vue` 文件**。每个组件目录下的 `props.uts` / `radio.uts` / `up-radio.vue` 等属于非 uni-app X 构建路径（H5 等），本重构不触碰，避免波及 H5 产物。

## 3. 现状诊断

| # | 问题 | 位置 |
| :--- | :--- | :--- |
| 1 | props 默认值通过 `defProps.getString('radio.name')` 运行期字符串取值，类型信息丢失 | 各组件 `defineProps` |
| 2 | 13 个 computed 是同一套「prop 有值取 prop，否则取 parent，否则用常量」样板 | `up-radio.uvue:141-265` |
| 3 | 跨组件协议为 `ComputedRef<UTSJSONObject>`，取值返回 `Any?`，需 `as boolean` 强转，有 ClassCastException 风险 | `up-radio.uvue:125-139` |
| 4 | 为绕开 UTS 的 `===` 限制，比较普遍走 `.toString()`，`name` 传 number 时语义脆弱 | 各组件 |
| 5 | 全无 vapor 条件编译，双模式差异未被显式处理 | 五个组件 |
| 6 | 遗留的 `$callMethod` 机制（`useUltraUI` / `unCheckedOther` / `watch + init`）已无消费者 | radio-group / checkbox-group |
| 7 | `@include flex(...)` 展开为被条件编译注释包裹的 `display: flex`，是已知的样式丢失构造 | 各组件 style 块 |

## 4. 架构设计

### 4.1 文件布局

每个组件目录新增一个 `type.uts`，遵循项目规范「一律禁止 `interface`，统一使用 `type`」。

```
up-radio-group/
  type.uts              ← 新增：RadioValue / RadioGroupProps / RadioGroupProvide / RADIO_GROUP_KEY
  up-radio-group.uvue   ← 重写
  props.uts / radioGroup.uts / up-radio-group.vue   ← 原样不动
```

### 4.2 契约归属

**由 group 拥有协议，item 反向 import**：`RadioGroupProvide` 定义在 `up-radio-group/type.uts`，`up-radio.uvue` 从 `../up-radio-group/type.uts` 引入。父子协议只有一处定义，任一侧改动都会在编译期暴露不一致。

注入键使用命名空间化的稳定字符串常量（如 `'upRadioGroup'`），从 `type.uts` 导出，不使用 Symbol（UTS 兼容性未知）。

### 4.3 类型写法

优先使用具体字面量联合以获得类型校验与编辑器补全：

```uts
export type RadioValue = string | number | boolean
export type RadioShape = 'circle' | 'square'
```

> **风险与回退**：`.agents/rules/uniappx.md` §6 记载「UTS 联合类型仅支持与 null 联合，不支持 `string | number`」。但参考实现 rice-ui 在 `defineProps` 泛型位置的 `type.uts` 中大量使用此类联合。判断该限制针对运行期变量而非类型别名。**若构建报错，退化为 `any`**，语义与现状的 `[String, Number, Boolean]` 一致。

### 4.4 数据流

**形态 A：group + item 组合（radio / checkbox）**

```
up-radio-group                              up-radio
  defineModel<RadioValue>()                   inject<RadioGroupProvide|null>(KEY, null)
  provide(KEY, {                              isChecked = group != null
    modelValue,                                 ? isSame(group.modelValue.value, props.name)
    disabled: toRef(() => props.disabled),      : selfChecked
    ...
    select(v) {                               select() 时调用 group.select(props.name)
      modelValue.value = v
      emit('change', v)
    }
  } as RadioGroupProvide)
```

保留 `usedAlone` 单独使用时降级为本地 `selfChecked` 的行为（这是有意设计的 API，非遗留物）。

**形态 B：独立双向绑定（switch / rate）**——本就为 v-model 直连，无跨组件协议。工作集中在类型化，以及消除 `parseInt(props.size.toString())` 这类字符串往返。

**形态 C：弹层型（picker）**——保留现有双渲染路径与 `up-popup` 外壳，仅做类型化。详见 5.6 节。

## 5. 各组件设计

### 5.1 `pick()` 取值助手

当前各组件中的样板 computed 收敛为一个助手函数：

```uts
function pick(own: string | null, parent: string | null, fallback: string): string {
  if (own != null && own != '') return own
  if (parent != null && parent != '') return parent
  return fallback
}
```

每个 computed 由约 8 行降至 1 行。`up-radio.uvue` 预计从 300 行降至约 150 行。

### 5.2 `up-radio-group` / `up-radio`

- group 新增 `type.uts`：`RadioValue`、`RadioGroupProps`、`RadioGroupProvide`、`RADIO_GROUP_KEY`。
- group 以 `defineModel` + `toRef` 组装强类型 provide 对象。
- item 以 `inject<RadioGroupProvide | null>(RADIO_GROUP_KEY, null)` 获取，属性经 `pick()` 派生。
- 删除项见第 7 节。

### 5.3 `up-checkbox-group` / `up-checkbox`

同 5.2。差异：`modelValue` 为数组，选中判定为「数组是否包含 `props.name`」，toggle 逻辑保持现有的「按值查找索引 → push / splice」语义不变。

### 5.4 `up-switch`

- 新增 `type.uts` 定义 `SwitchProps` / `SwitchValue`。
- 消除 `props.size.toString()` / `props.space.toString()` 的字符串往返解析。
- `loading` 状态下点击无效、`asyncChange` 时不发 `update:modelValue` 的现有行为保持不变。
- `config.getString('color.up-primary')` 的取值路径保持。

### 5.5 `up-rate`

- 新增 `type.uts` 定义 `RateProps`。
- 半星计算、`getRateItemRect` / `getRateIconWrapRect` 的 DOM 测量逻辑保持不变。
- `allowHalf` 的 `Math.floor` / `Math.ceil` 比较逻辑保持不变。

### 5.6 `up-picker`

按「档 1：类型化 + 清死代码」执行：

- 新增 `type.uts` 定义 `PickerProps` / `PickerColumn` / `PickerChangeEvent` / `PickerConfirmEvent`。
- `defineProps<PickerProps>()` + `withDefaults`，19 个 props 的名称、类型、默认值逐一保持。
- 事件载荷由 `as UTSJSONObject` 断言改为强类型 `type`，**字段名与结构不变**：
  - `change`：`{ value, index, indexs, values, columnIndex }`
  - `confirm`：`{ indexs, value, values }`
- `keyName` 动态键取值（`up-picker.uvue` 的 `(item as UTSJSONObject)[props.keyName]`）**保留**，收敛到单个取值助手函数中并注明原因——强类型无法表达动态键，这是保留 API 契约的必要代价。同时保留现有硬编码的 `'id'` 取值行为。
- 7 个 `defineExpose` 命令式方法全部保留。
- 针对 Vapor 模式补充条件编译（按实测需要，不预铺）。
- 删除 `up-picker-column` 目录（见 7.1）。

### 5.7 样式处理

1. **保留** BEM 类名与 `$up-` 变量体系。
2. `:style` 的**数组绑定改为单对象**（现为 `:style="[radioStyle]"`），与参考实现一致，降低 Vapor 下的风险面。
3. **`@include flex(...)` 全部改写为字面 CSS**，并移除不再需要的 `@import "../../libs/css/components.scss"`。

   改写依据：`libs/css/mixin.scss` 中该 mixin 展开为

   ```scss
   @mixin flex($direction: row) {
     /* #ifndef APP-NVUE */
     display: flex;
     /* #endif */
     flex-direction: $direction;
   }
   ```

   即被条件编译注释包裹的 `display: flex`——这正是历史故障「鸿蒙 VDOM 下组件尺寸塌陷、产物中 `"display"` 出现 0 次」的构造。该历史故障的根因（weapp-tailwindcss 5.4.1 使用纯 CSS 解析器重写 scoped SCSS）已随依赖对齐至 5.5.3 而消除，本项为双保险。

## 6. 条件编译策略

原则：平台差异一律显式声明，不写「靠运气能跑」的代码；但只在确有差异处添加，不预先铺设。

| 类别 | 写法 | 依据 |
| :--- | :--- | :--- |
| `cursor` / `transition` / `box-sizing` / hover 态 | `#ifdef WEB` 或 `#ifndef APP` | 原生端无鼠标语义 |
| `flex` 简写（`flex: 1`、`flex: 0 1 auto`） | `#ifndef VUE3-VAPOR` | 参考实现中该类条件编译全部用于包裹 flex 简写 |
| `opacity` 分档 | APP-HARMONY 单独一档 | 参考实现实测差异 |
| 非全端 API（如 `uni.vibrateShort`） | `#ifdef MP-WEIXIN` | `.agents/rules/uniappx.md` §6 |

具体问题：`up-radio` 根节点挂有 tailwind 的 `cursor-pointer`，原生端无指针设备，重构时归入 `#ifdef WEB`。

`APP-ANDROID && !VUE3-VAPOR` 这类交叉条件**实测需要时才加**。

## 7. 删除清单

### 7.1 `up-picker-column` 目录

仓库内**零引用**（`src/` 与 `uni_modules/` 全量 grep 无命中），且该组件本体为空壳：`up-picker-column.uvue` 仅含空的 `picker-view-column`，`props.uts` 的 props 为空对象，`up-picker.uvue` 从未使用它。

### 7.2 遗留的 `$callMethod` 机制

以下均已在全仓库确认无外部消费者：

| 删除项 | 依据 |
| :--- | :--- |
| `useUltraUI()` / `getChildren` / `addChild` / `defineExpose(getProps, getRefs, ...)` | 仅 group 自身引用；`$callMethod` 遍历的是 `form-item` 而非 radio |
| `unCheckedOther()` | 注释自述「兼容旧版 VDOM 模式」，该路径已被 provide/inject 取代 |
| `watch(parentDataSelf, { deep: true })` → `child.$callMethod('init')` | 同批遗留物 |
| `formValidate(instance, 'change')` | `libs/function/index.uts:729` 函数体全被注释，是空函数 |

> `up-form` 的校验遍历的是通过 `useUltraUI` 注册的 `up-form-item`，与本组组件无关，删除上述内容不影响表单校验。

## 8. 验证方案

| # | 验证项 | 方法 | 证据形式 |
| :--- | :--- | :--- | :--- |
| 1 | Vapor 模式构建 | `manifest.json` 保持 `vapor: true` → `cli publish --platform app-android` | 退出码 + 无 UTS 类型报错 |
| 2 | VDOM 模式构建 | `vapor: false` → 同上 | 同上 |
| 3 | Web/H5 构建 | `pnpm build:h5` | 同上 |
| 4 | flex 产物回归 | 对八个组件产物执行 `grep -c '"display"'` | 出现次数 > 0 |
| 5 | demo 渲染 | 五个 demo 页在两种模式下打开并截图 | 截图 |

构建必须走 HBuilderX CLI：纯 `uni build` 的产物不完整（uni-app X 分包页面不会编译进去）。

`manifest.json` 为工作区文件，验证 1/2 需切换其 `vapor` 字段，**改前备份、改后恢复**。

### 验证边界

`vapor: true` 下 uni-app X 的最终产物为 app-service 字节码，本地 `cli publish` 可验证**编译期**正确性（类型、语法、条件编译分支），但**无法断言渲染期行为**（组件是否真正绘制、点击是否响应）。历史上「云打包后组件消失」即为编译通过而运行时暴露的问题。因此第 4、5 项是必要但不充分的证据，**真机结论需由人工确认**。

## 9. 已知风险

| 风险 | 影响 | 应对 |
| :--- | :--- | :--- |
| UTS 联合类型限制 | `type.uts` 中的 `string \| number \| boolean` 可能编译失败 | 退化为 `any`（见 4.3） |
| `toRef(() => props.x)` 在 UTS 下的支持 | provide 对象组装可能失败 | 退化为 `computed` + `.value` 读取 |
| `@include flex` 改写面较大 | 八个组件样式块均需改动 | 逐组件对照原样式，改后做产物回归（第 8 节第 4 项） |
| picker 双渲染路径 | 类型化可能触碰 APP 分支的既有行为 | 本轮不改渲染逻辑，仅类型化；改动面严格限制在 props / 事件载荷 |

## 10. 影响范围

- 修改：`up-radio` / `up-radio-group` / `up-checkbox` / `up-checkbox-group` / `up-switch` / `up-rate` / `up-picker` 共 7 个 `.uvue`
- 新增：对应 7 个 `type.uts`
- 删除：`up-picker-column` 目录
- 不动：所有 `.vue` / `props.uts` / 组件配置 `.uts`、demo 页面、`uni_modules` 其他组件
