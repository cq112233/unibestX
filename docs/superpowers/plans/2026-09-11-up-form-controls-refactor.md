# up-radio / up-checkbox / up-switch / up-rate / up-picker 架构重构实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 把 `up-radio` / `up-checkbox` / `up-switch` / `up-rate` / `up-picker` 及其 group 从 `UTSJSONObject` 字符串下标协议重构为强类型契约架构，对外保持 uview-plus API 零破坏，Vapor 与 VDOM 双模式均可编译。

**架构：** 每个组件新增 `type.uts` 声明 Props / Provide 契约；group 用 `computed` 组装强类型 provide 对象并下发，item 用 `inject<T | null>(KEY, null)` 读取；无 group 时降级为本地 `ref`。样式保留 uview 的 BEM 类名与 `$up-` 变量，仅把 `@include flex(...)` 展开为字面 CSS。

**技术栈：** uni-app X、UTS、Vue 3 `<script setup lang="uts">`、HBuilderX CLI 5.24

**依据规格：** `docs/superpowers/specs/2026-09-11-up-form-controls-refactor-design.md`

---

## 0. 执行前必读

### 0.1 本项目没有测试框架

`package.json` 无 `test` 脚本，无 vitest / jest，无任何 `*.test.ts` / `*.spec.ts`。**不存在单元测试可写。**

因此本计划中的「验证」步骤一律是**编译验证 + 产物核对**，而非单元测试。不要凭空创建测试文件——它们无处可跑。

### 0.2 唯一的构建验证命令

`npx uni build` **在本项目不可用**：它要求 `src/manifest.json`，而本项目 `manifest.json` 在项目根目录。加 `UNI_INPUT_DIR=.` 也不行——会在干净代码树上就报 `"injectHook" is not exported` 而失败（实测 2026-09-11）。

**唯一可靠的构建路径是 HBuilderX CLI**：

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
LOG=/tmp/taskN-build.log
/Applications/HBuilderX.app/Contents/MacOS/cli publish app-android \
  --type appResource \
  --project /Users/chenqi/Documents/chenqi-front/unibestX > "$LOG" 2>&1
echo "EXIT=$?"
grep -c "编译成功" "$LOG"
```

**预期成功输出**（实测基线，**单次约 3 分 03 秒**）：

```text
项目 unibestX 编译成功。
项目 unibestX 正在导出...
项目 unibestX 导出 android 成功，路径为：/Users/chenqi/Documents/chenqi-front/unibestX/unpackage/resources/app-android
```

判定标准：`EXIT=0` **且** `grep -c "编译成功"` 输出 `1`。

**失败判定**：`grep -E "编译失败|Build failed|错误：" "$LOG"` 有输出。

### 0.3 编译器是渐进报错的

UTS 编译器**每次只暴露部分错误**。如果逐行试错，每次 3 分钟的构建只换来一个新错误。

**因此每个任务必须整体重写目标文件后一次性构建，禁止逐行改动反复构建。** 同一文件内的所有改动点在一次编辑中全部落地。

### 0.4 基线中有两条既有告警，不要误判为自己引入

以下两条在**改动前的干净代码树**上就存在：

1. `lime-i18n/common/composer-class.uts (4:9): "ComputedRefImpl" is not exported by .../types.uts` — 与本次重构无关。
2. `[plugin:uni:app-uvue-css] WARNING: cursor is not a standard property name (may not be supported)` — 共 9 条，由 tailwind 的 `cursor-pointer` 经 weapp-tailwindcss 生成 `.wtu-*` 工具类并**内联进组件的 scoped style** 触发：

   ```
   at uni_modules/uview-ultra/components/up-radio/up-radio.uvue:64:3
   62 |  }
   63 |  .wtu-dmb0mx-0 {
   64 |    cursor: pointer;
   ```

   **本次重构不处理它，也不要试图用 `#ifdef WEB` 处理它。**

   > **实测结论（2026-09-11，已验证）**：把 `cursor-pointer` 从模板类名挪进 `#ifdef WEB` 包裹的 computed **完全无效**。原因是 weapp-tailwindcss 扫描的是 `.uvue` 的**源文本**，不区分模板还是脚本——只要 `'cursor-pointer'` 这个字符串还出现在文件里（哪怕是 `#ifdef WEB` 分支内），工具类照旧生成。这是实测证伪，不是推测。
   >
   > 该告警是**构建期提示**（native 不支持 `cursor` 属性），不影响组件功能，重构前即存在。根治点在于 tailwind / weapp-tailwindcss 配置（让 native 端不生成 `cursor` 工具类），属于独立于本次重构的另一件事。
   >
   > 因此：**保持 `cursor-pointer` 原样**（`class="up-radio cursor-pointer"` 这种静态写法），不动一个字。

### 0.5 命名冲突红线（来自实测踩坑）

uni-app X App-Android 会把模块源码编到同一 Kotlin 包，**顶层导出函数同名会冲突**。已知 `t` / `$t` 已经踩过。

因此：`type.uts` 中的顶层导出常量必须带组件前缀（`RADIO_GROUP_KEY`、`CHECKBOX_GROUP_KEY`）；`<script setup>` 内的辅助函数（如 `pick`）是组件作用域，不是顶层导出，不会冲突。

### 0.6 可空性必须就地封口

UTS 中对 `any | null` 调用 `.toString()` 返回 `String?`，可空性会沿模板字符串和三元分支传播，最终在 `computed((): string => ...)` 处报
`返回类型不匹配：预期类型为 'String'，实际类型为 'String?'`。

**所有取值助手必须用 `?? ''` 封口**，见 0.7 的 `pick` 实现。

### 0.7 空串是「未设置」的信号（最关键的行为契约）

本组组件的 props 默认值大量使用**空字符串 `''`**，`''` 表示「未设置，请向 group 取值」。例如 `up-radio` 的 `disabled` 默认是 `''` 而不是 `false`，判定逻辑为 `disabled.toString() != ''`。

**如果把这些默认值改成 `false` / 数字等具体值，`false.toString()` 得到 `'false'`，不等于 `''`，组件将不再向 group 取值——父子联动静默失效。**

各任务中给出的 `withDefaults` 默认值**必须逐字照抄，不得「优化」**。

### 0.8 统一的取值助手

每个 item 组件在 `<script setup>` 内定义此函数（组件作用域，各组件各自一份，互不冲突）：

```uts
/**
 * prop 优先，其次取 group 下发值，最后回落默认值。
 * 空串与 null 一律视为「未设置」——这是本组组件 props 默认值的既定契约。
 */
function pick(own : any | null, parent : any | null, fallback : string) : string {
	const o = own == null ? '' : (own.toString() ?? '')
	if (o != '') return o
	const p = parent == null ? '' : (parent.toString() ?? '')
	if (p != '') return p
	return fallback
}
```

`?? ''` 是必需的封口，理由见 0.6。

### 0.9 样式改动的唯一内容

只做一件事：把 `@include flex(...)` 替换为等价字面 CSS。
`libs/css/mixin.scss` 中该 mixin 展开为：

```scss
/* #ifndef APP-NVUE */
display: flex;
/* #endif */
flex-direction: $direction;
```

即 `@include flex(row)` → `display: flex;` + `flex-direction: row;`。

**`@import "../../libs/css/components.scss"` 保留不动**（原规格写的是移除，此处改为保留：该 import 无害，移除它不在本任务收益范围内，多动一处多一分风险）。

`flex` 简写（如 `flex: 1`）**保持原样**——本项目 `flex-1` 在页面层大量使用且 Vapor 下工作正常，不属已知问题构造。

---

## 任务 1：`up-radio-group` + `up-radio`（架构探针，必须最先做）

本任务验证整套架构假设：`defineProps<T>()` 的联合类型能否编译、`computed(() => props.x)` 能否作为 `Ref<T>` 下发、typed `inject` 能否跨组件工作。

> **为什么用 `computed` 而不是 `toRef(() => props.x)`**：group 下发的这些字段对 item 全是**只读**的，`computed` 完全够用，且返回的 `ComputedRef<T>` 可直接赋给 `Ref<T>`，契约类型无需改动。`toRef` 的 getter 重载是 Vue 3.3+ 才有的，uni-app X 运行时是否支持没有任何证据，用它是不必要的赌注。同理也在任务 2 适用。

**若本任务构建失败于联合类型**，按规格 4.3 回退：把 `type.uts` 中的 `string | number | boolean` 改为 `any`，`string | number` 改为 `any`，其余结构不变，再构建。

**文件：**
- 创建：`uni_modules/uview-ultra/components/up-radio-group/type.uts`
- 修改：`uni_modules/uview-ultra/components/up-radio-group/up-radio-group.uvue`
- 创建：`uni_modules/uview-ultra/components/up-radio/type.uts`
- 修改：`uni_modules/uview-ultra/components/up-radio/up-radio.uvue`
- 不动：两个目录下的 `props.uts`、`radioGroup.uts`、`radio.uts`、`*.vue`

- [ ] **步骤 1：创建 `up-radio-group/type.uts`**

```uts
import type { Ref } from 'vue'

/** radio / radio-group 绑定的值 */
export type RadioValue = string | number | boolean

/** up-radio-group 的 props 契约（默认值见 up-radio-group.uvue 的 withDefaults） */
export type RadioGroupProps = {
	/** 标识符 */
	name ?: string,
	/** 绑定的值，通过 v-model 传入 */
	modelValue ?: RadioValue,
	/** 形状，circle-圆形，square-方形 */
	shape ?: string,
	/** 是否禁用全部 radio */
	disabled ?: boolean,
	/** 选中状态下的颜色 */
	activeColor ?: string,
	/** 未选中的颜色 */
	inactiveColor ?: string,
	/** 整个组件的尺寸，单位 px */
	size ?: string | number,
	/** 布局方式，row-横向，column-纵向 */
	placement ?: string,
	/** label 的字体大小，单位 px */
	labelSize ?: string | number,
	/** label 的字体颜色 */
	labelColor ?: string,
	/** 是否禁止点击文本操作 */
	labelDisabled ?: boolean,
	/** 图标颜色 */
	iconColor ?: string,
	/** 图标的大小，单位 px */
	iconSize ?: string | number,
	/** 勾选图标的对齐方式，left-左边，right-右边 */
	iconPlacement ?: string,
	/** placement 为 column 时，是否显示下边框 */
	borderBottom ?: boolean,
}

/**
 * up-radio-group 通过 provide 下发给 up-radio 的响应式契约。
 * 协议由 group 拥有，up-radio 反向 import 本类型。
 */
export type RadioGroupProvide = {
	modelValue : Ref<RadioValue>,
	shape : Ref<string>,
	disabled : Ref<boolean>,
	activeColor : Ref<string>,
	inactiveColor : Ref<string>,
	size : Ref<string | number>,
	placement : Ref<string>,
	labelSize : Ref<string | number>,
	labelColor : Ref<string>,
	labelDisabled : Ref<boolean>,
	iconColor : Ref<string>,
	iconSize : Ref<string | number>,
	iconPlacement : Ref<string>,
	borderBottom : Ref<boolean>,
	/** up-radio 选中时回调；由 group 更新 modelValue 并派发 change */
	select : (name : RadioValue) => void,
}

/** provider / inject 之间唯一的协议标识 */
export const RADIO_GROUP_KEY = 'upRadioGroup'
```

- [ ] **步骤 2：重写 `up-radio-group/up-radio-group.uvue`**

整体替换文件内容为：

```vue
<template>
	<view
	    class="up-radio-group"
	    :class="bemClass"
	>
		<slot></slot>
	</view>
</template>

<script setup lang="uts">
	import { computed, provide } from 'vue'
	import { bem } from '../../libs/function/index'
	import { RADIO_GROUP_KEY } from './type.uts'
	import type { RadioGroupProps, RadioGroupProvide, RadioValue } from './type.uts'

	defineOptions({
		name: 'up-radio-group'
	})

	// 默认值逐字对齐 components/up-radio-group/radioGroup.uts，勿改（见 0.7）
	const props = withDefaults(defineProps<RadioGroupProps>(), {
		name: '',
		modelValue: '',
		shape: 'circle',
		disabled: false,
		activeColor: '#2979ff',
		inactiveColor: '#c8c9cc',
		size: 18,
		placement: 'row',
		labelSize: 14,
		labelColor: '#303133',
		labelDisabled: false,
		iconColor: '#ffffff',
		iconSize: 12,
		iconPlacement: 'left',
		borderBottom: false
	})

	const emit = defineEmits(['update:modelValue', 'change'])

	// 可写 computed：既是下发给子组件的响应式源，也承担 v-model 回写
	const modelValue = computed<RadioValue>({
		get(): RadioValue {
			return props.modelValue
		},
		set(v : RadioValue) {
			emit('update:modelValue', v)
		}
	})

	const select = (name : RadioValue) => {
		if (name == null) {
			modelValue.value = ''
			emit('change', '')
			return
		}
		modelValue.value = name
		emit('change', name)
	}

	provide(RADIO_GROUP_KEY, {
		modelValue,
		shape: computed(() => props.shape),
		disabled: computed(() => props.disabled),
		activeColor: computed(() => props.activeColor),
		inactiveColor: computed(() => props.inactiveColor),
		size: computed(() => props.size),
		placement: computed(() => props.placement),
		labelSize: computed(() => props.labelSize),
		labelColor: computed(() => props.labelColor),
		labelDisabled: computed(() => props.labelDisabled),
		iconColor: computed(() => props.iconColor),
		iconSize: computed(() => props.iconSize),
		iconPlacement: computed(() => props.iconPlacement),
		borderBottom: computed(() => props.borderBottom),
		select
	} as RadioGroupProvide)

	const bemClass = computed(() => {
		return bem('radio-group', [props.placement], [])
	})
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";

	.up-radio-group {
		flex: 1;

		&--row {
			display: flex;
			flex-flow: row wrap;
		}

		&--column {
			display: flex;
			flex-direction: column;
		}
	}
</style>
```

**删除说明（对照原文件确认已全部消失）：** `useUltraUI()` / `getChildren` / `addChild` / `unCheckedOther` / `getProps` / `getRefs` / `defineExpose` / `getCurrentInstance` / `defProps` / `parentDataSelf` 的 `UTSJSONObject` 组装。

- [ ] **步骤 3：创建 `up-radio/type.uts`**

```uts
import type { RadioValue } from '../up-radio-group/type.uts'

/** up-radio 的 props 契约（默认值见 up-radio.uvue 的 withDefaults） */
export type RadioProps = {
	/** radio 的名称，与 group 的 modelValue 比对判定选中 */
	name ?: RadioValue,
	/** 形状，square-方形，circle-圆型 */
	shape ?: string,
	/** 是否禁用。默认 '' 表示未设置，将向 group 取值 */
	disabled ?: string | boolean,
	/** 是否禁止点击提示语选中单选框。默认 '' 表示未设置，将向 group 取值 */
	labelDisabled ?: string | boolean,
	/** 选中状态下的颜色，设置此值将覆盖 group 的 activeColor */
	activeColor ?: string,
	/** 未选中的颜色 */
	inactiveColor ?: string,
	/** 图标的大小，单位 px */
	iconSize ?: string | number,
	/** label 的字体大小，px 单位 */
	labelSize ?: string | number,
	/** label 提示文字 */
	label ?: string | number,
	/** 整体的大小 */
	size ?: string | number,
	/** 图标颜色 */
	iconColor ?: string,
	/** label 的颜色 */
	labelColor ?: string,
	/** 定义需要用到的外部样式 */
	customStyle ?: UTSJSONObject,
	/** 是否独立使用（不依赖 group） */
	usedAlone ?: boolean,
}
```

- [ ] **步骤 4：重写 `up-radio/up-radio.uvue`**

整体替换文件内容为：

```vue
<template>
	<view
	    class="up-radio cursor-pointer"
	    :class="[iconPlacementClass, borderBottomClass]"
	    :style="radioStyle"
	    @tap.stop="wrapperClickHandler"
	>
		<view
		    class="up-radio__icon-wrap cursor-pointer"
		    :class="iconClasses"
		    :style="iconWrapStyle"
		    @tap.stop="iconClickHandler"
		>
			<slot name="icon">
				<up-icon
				    class="up-radio__icon-wrap__icon"
				    name="checkbox-mark"
				    :size="elIconSize"
				    :color="elIconColor"
				/>
			</slot>
		</view>
		<slot name="label" :label="label" :elDisabled="elDisabled">
			<text
				class="up-radio__label"
				:class="[elDisabled ? 'up-radio__label--disabled' : '']"
				:style="labelStyle"
				@tap.stop="labelClickHandler"
			>{{label}}</text>
		</slot>
	</view>
</template>

<script setup lang="uts">
	import { computed, inject, ref } from 'vue'
	import { addUnit, addStyle, os, deepMerge, error } from '../../libs/function/index'
	import { RADIO_GROUP_KEY } from '../up-radio-group/type.uts'
	import type { RadioGroupProvide } from '../up-radio-group/type.uts'
	import type { RadioProps } from './type.uts'

	defineOptions({
		name: "up-radio"
	})

	// 默认值逐字对齐 components/up-radio/radio.uts，空串表示「未设置」（见 0.7），勿改
	const props = withDefaults(defineProps<RadioProps>(), {
		name: '',
		shape: '',
		disabled: '',
		labelDisabled: '',
		activeColor: '',
		inactiveColor: '',
		iconSize: '',
		labelSize: '',
		label: '',
		size: '',
		iconColor: '',
		labelColor: '',
		customStyle: () : UTSJSONObject => ({}),
		usedAlone: false
	})

	const emit = defineEmits(['change', 'update:checked'])

	const group = inject<RadioGroupProvide | null>(RADIO_GROUP_KEY, null)

	/** 未处于 group 内时的本地选中态（usedAlone 场景） */
	const selfChecked = ref<boolean>(false)

	/**
	 * prop 优先，其次取 group 下发值，最后回落默认值。
	 * 空串与 null 一律视为「未设置」。`?? ''` 封口见 0.6。
	 */
	function pick(own : any | null, parent : any | null, fallback : string) : string {
		const o = own == null ? '' : (own.toString() ?? '')
		if (o != '') return o
		const p = parent == null ? '' : (parent.toString() ?? '')
		if (p != '') return p
		return fallback
	}

	/** group 存在且非独立使用时，读取 group 的某个字段 */
	function fromGroup(key : string) : any | null {
		if (props.usedAlone || group == null) return null
		if (key == 'modelValue') return group!.modelValue.value
		if (key == 'shape') return group!.shape.value
		if (key == 'disabled') return group!.disabled.value
		if (key == 'activeColor') return group!.activeColor.value
		if (key == 'inactiveColor') return group!.inactiveColor.value
		if (key == 'size') return group!.size.value
		if (key == 'placement') return group!.placement.value
		if (key == 'labelSize') return group!.labelSize.value
		if (key == 'labelColor') return group!.labelColor.value
		if (key == 'labelDisabled') return group!.labelDisabled.value
		if (key == 'iconColor') return group!.iconColor.value
		if (key == 'iconSize') return group!.iconSize.value
		if (key == 'iconPlacement') return group!.iconPlacement.value
		if (key == 'borderBottom') return group!.borderBottom.value
		return null
	}

	const isChecked = computed<boolean>((): boolean => {
		if (props.usedAlone || group == null) return selfChecked.value
		const parentVal = group!.modelValue.value
		if (parentVal == null || props.name == null) return false
		return parentVal.toString() == props.name!.toString()
	})

	const elDisabled = computed<boolean>((): boolean => {
		const v = pick(props.disabled, fromGroup('disabled'), 'false')
		return v == 'true'
	})

	const elLabelDisabled = computed<boolean>((): boolean => {
		const v = pick(props.labelDisabled, fromGroup('labelDisabled'), 'false')
		return v == 'true'
	})

	const elSize = computed<string>((): string => {
		return pick(props.size, fromGroup('size'), '21')
	})

	const elIconSize = computed<string>((): string => {
		return pick(props.iconSize, fromGroup('iconSize'), '12')
	})

	const elActiveColor = computed<string>((): string => {
		return pick(props.activeColor, fromGroup('activeColor'), '#2979ff')
	})

	const elInactiveColor = computed<string>((): string => {
		return pick(props.inactiveColor, fromGroup('inactiveColor'), '#c8c9cc')
	})

	const elLabelColor = computed<string>((): string => {
		return pick(props.labelColor, fromGroup('labelColor'), '#606266')
	})

	const elShape = computed<string>((): string => {
		return pick(props.shape, fromGroup('shape'), 'circle')
	})

	const elLabelSize = computed<string>((): string => {
		return addUnit(pick(props.labelSize, fromGroup('labelSize'), '15'))
	})

	const elIconColor = computed<string>((): string => {
		const iconColorStr = pick(props.iconColor, fromGroup('iconColor'), '#ffffff')
		if (elDisabled.value) {
			return isChecked.value ? elInactiveColor.value : 'transparent'
		}
		return isChecked.value ? iconColorStr : 'transparent'
	})

	const iconClasses = computed<string>((): string => {
		let classes : string[] = []
		classes.push('up-radio__icon-wrap--' + elShape.value)
		if (elDisabled.value) {
			classes.push('up-radio__icon-wrap--disabled')
		}
		if (isChecked.value && elDisabled.value) {
			classes.push('up-radio__icon-wrap--disabled--checked')
		}
		if (isChecked.value && !elDisabled.value && elActiveColor.value == '#2979ff') {
			classes.push('up-radio__icon-wrap--active')
		}
		return classes.join(' ')
	})

	const iconWrapStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		if (isChecked.value && !elDisabled.value) {
			if (elActiveColor.value != '#2979ff') {
				style['backgroundColor'] = elActiveColor.value
				style['borderColor'] = elActiveColor.value
			}
		} else {
			style['backgroundColor'] = '#ffffff'
			style['borderColor'] = elInactiveColor.value
		}
		style['width'] = addUnit(elSize.value)
		style['height'] = addUnit(elSize.value)
		const parentPlacement = fromGroup('iconPlacement')
		if (parentPlacement != null && parentPlacement.toString() == 'right') {
			style['marginRight'] = 0
		}
		return style
	})

	const labelStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		style['color'] = elDisabled.value ? elInactiveColor.value : elLabelColor.value
		style['fontSize'] = elLabelSize.value
		style['lineHeight'] = elLabelSize.value
		return style
	})

	const radioStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		const borderBottom = fromGroup('borderBottom')
		const placement = fromGroup('placement')
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'row') {
			error('检测到您将borderBottom设置为true，需要同时将up-radio-group的placement设置为column才有效')
		}
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'column') {
			style['paddingBottom'] = os() == 'ios' ? '12px' : '8px'
		}
		return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
	})

	const iconPlacementClass = computed<string>((): string => {
		const p = fromGroup('iconPlacement')
		if (p != null && p.toString() != '') {
			return 'up-radio-label--' + p.toString()
		}
		return 'up-radio-label--left'
	})

	const borderBottomClass = computed<string>((): string => {
		const borderBottom = fromGroup('borderBottom')
		const placement = fromGroup('placement')
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'column') {
			return 'up-border-bottom'
		}
		return ''
	})

	function emitEvent() {
		if (!isChecked.value) {
			emit('change', props.name)
			if (props.usedAlone) {
				emit('update:checked', true)
			}
		}
	}

	function setRadioCheckedStatus() {
		emitEvent()
		if (!props.usedAlone && group != null) {
			group!.select(props.name)
		} else {
			selfChecked.value = true
		}
	}

	function iconClickHandler(e : UniEvent) {
		e.stopPropagation()
		if (!elDisabled.value) {
			setRadioCheckedStatus()
		}
	}

	function wrapperClickHandler(e : UniEvent) {
		const p = fromGroup('iconPlacement')
		if (p != null && p.toString() == 'right') {
			iconClickHandler(e)
		}
	}

	function labelClickHandler(e : UniEvent) {
		e.stopPropagation()
		if (!elLabelDisabled.value && !elDisabled.value) {
			setRadioCheckedStatus()
		}
	}

	const init = function() {}

	const getInternalState = () : UTSJSONObject => {
		return {
			name: props.name,
			isChecked: isChecked.value
		} as UTSJSONObject
	}

	defineExpose({
		init,
		getInternalState
	})
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";
	$up-radio-wrap-margin-right:6px !default;
	$up-radio-wrap-font-size:20px !default;
	$up-radio-wrap-border-width:1px !default;
	$up-radio-wrap-border-color: #c8c9cc !default;
	$up-radio-line-height:0 !default;
	$up-radio-circle-border-radius:50px !default;
	$up-radio-square-border-radius:3px !default;
	$up-radio-checked-color:#fff !default;
	$up-radio-checked-background-color:red !default;
	$up-radio-checked-border-color: #2979ff !default;
	$up-radio-disabled-background-color:#ebedf0 !default;
	$up-radio-disabled--checked-color:#c8c9cc !default;
	$up-radio-label-margin-left: 5px !default;
	$up-radio-label-margin-right:12px !default;
	$up-radio-label-color:$up-content-color !default;
	$up-radio-label-font-size:15px !default;
	$up-radio-label-disabled-color:#c8c9cc !default;

	.up-radio {
		display: flex;
		flex-direction: row;
		overflow: hidden;
		align-items: center;
		margin-bottom: 5px;
		margin-top: 5px;

		&-label--left {
			flex-direction: row;
		}

		&-label--right {
			flex-direction: row-reverse;
			justify-content: space-between;
		}

		&__icon-wrap {
			/* #ifndef APP */
			box-sizing: border-box;
			transition-property: border-color, background-color, color;
			transition-duration: 0.2s;
			/* #endif */
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			margin-right: $up-radio-wrap-margin-right;
			border-width: $up-radio-wrap-border-width;
			border-color: $up-radio-wrap-border-color;
			border-style: solid;

			/* #ifdef MP-TOUTIAO */
			&__icon {
				line-height: $up-radio-line-height;
			}
			/* #endif */

			&--circle {
				border-radius: $up-radio-circle-border-radius;
			}

			&--square {
				border-radius: $up-radio-square-border-radius;
			}

			&--checked {
				background-color: $up-radio-checked-background-color;
				border-color: $up-radio-checked-border-color;
			}

			&--active {
				background-color: $up-primary;
				border-color: $up-primary;
			}

			&--disabled {
				background-color: $up-radio-disabled-background-color !important;
			}
		}

		&__label {
			margin-left: $up-radio-label-margin-left;
			margin-right: $up-radio-label-margin-right;
			color: $up-radio-label-color;
			font-size: $up-radio-label-font-size;

			&--disabled {
				color: $up-radio-label-disabled-color;
			}
		}
	}
</style>
```

**行为保持要点（逐条对照原文件核对）：**

| 原行为 | 新实现 |
|---|---|
| `isChecked` 仅在非 usedAlone 且 group 存在时比对 group 值 | 同左 |
| `emit('change', name)` **仅在未选中时**触发 | `emitEvent()` 内 `if (!isChecked.value)` |
| `emit('update:checked', true)` 仅 usedAlone | 同左 |
| `setTimeout(formValidate)` | **删除**——该函数是空函数（见规格 7.2） |
| `iconClickHandler` / `wrapperClickHandler` / `labelClickHandler` 三个分支条件 | 逐条照搬 |
| `radioStyle` 的 borderBottom 告警与 paddingBottom | 逐条照搬 |
| `defineExpose({ init, getInternalState })` | 保留 |

- [ ] **步骤 5：构建验证**

运行 0.2 的构建命令（`LOG=/tmp/task1-build.log`）。
预期：`EXIT=0`，`grep -c "编译成功"` 输出 `1`。

额外核对：确认本次改动没有引入新的告警。

```bash
tr '\r' '\n' < /tmp/task1-build.log | sed 's/\x1b\[[0-9;]*m//g' \
  | grep -E "正在编译.*components/|not a standard property" \
  | awk '/正在编译/{f=$0; sub(/.*components\//,"",f); sub(/\.\.\..*/,"",f)} /not a standard property/{print f}' \
  | sort | uniq -c
```

预期：列出了 `up-radio` / `up-checkbox` / `up-switch` / `up-rate` / `up-picker` 等组件及其 cursor 告警条数——**这是既有的、与本次重构无关的告警（见 0.4），不做处理，只要条数没变多即可**。

> 不要尝试消除它。已实测证伪：把 `cursor-pointer` 挪进 `#ifdef WEB` 无效，详见 0.4。

若失败：`grep -E "错误：|Build failed" -A 3 /tmp/task1-build.log`，按 0.3 一次性修复所有同源问题后重建，不要逐行试错。

- [ ] **步骤 6：Commit**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
git add uni_modules/uview-ultra/components/up-radio-group/type.uts \
        uni_modules/uview-ultra/components/up-radio-group/up-radio-group.uvue \
        uni_modules/uview-ultra/components/up-radio/type.uts \
        uni_modules/uview-ultra/components/up-radio/up-radio.uvue
git commit -m "refactor(up-radio): 迁移到强类型 provide/inject 契约

新增 type.uts 声明 RadioGroupProps/RadioGroupProvide，
group 以 computed 组装响应式 provide，item 以 typed inject 读取。
删除 useUltraUI/\$callMethod/unCheckedOther 遗留链与空函数 formValidate 调用。
@include flex 改为字面 CSS。对外 API 不变。"
```

---

## 任务 2：`up-checkbox-group` + `up-checkbox`

与任务 1 同构，但有三处**必须保留的差异**，不要照抄 radio：

| 差异点 | radio | checkbox |
| :--- | :--- | :--- |
| `change` 事件触发时机 | 仅未选中时触发 | **每次都触发**，载荷是新布尔值 |
| `modelValue` 类型 | 单值 | **数组** |
| `elShape` 回落值 | `'circle'` | `'circle'`（但 group 默认 `'square'`） |
| `checkboxStyle` 的 paddingBottom | `os() == 'ios' ? '12px' : '8px'` | 固定 `'8px'`，无 `os()` 分支 |
| label 的 `<text>` | 有 `class="up-radio__label"` | **无 class**，仅内联 style |

**文件：**
- 创建：`uni_modules/uview-ultra/components/up-checkbox-group/type.uts`
- 修改：`uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.uvue`
- 创建：`uni_modules/uview-ultra/components/up-checkbox/type.uts`
- 修改：`uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue`

- [ ] **步骤 1：创建 `up-checkbox-group/type.uts`**

```uts
import type { Ref } from 'vue'

/** up-checkbox-group 的 props 契约（默认值见 up-checkbox-group.uvue 的 withDefaults） */
export type CheckboxGroupProps = {
	/** 标识符 */
	name ?: string,
	/** 绑定的值，数组，通过 v-model 传入 */
	modelValue ?: any[],
	/** 形状，circle-圆形，square-方形 */
	shape ?: string,
	/** 是否禁用全部 checkbox */
	disabled ?: boolean,
	/** 选中状态下的颜色 */
	activeColor ?: string,
	/** 未选中的颜色 */
	inactiveColor ?: string,
	/** 整个组件的尺寸，单位 px */
	size ?: string | number,
	/** 布局方式，row-横向，column-纵向 */
	placement ?: string,
	/** label 的字体大小，单位 px */
	labelSize ?: string | number,
	/** label 的字体颜色 */
	labelColor ?: string,
	/** 是否禁止点击文本操作 */
	labelDisabled ?: boolean,
	/** 图标颜色 */
	iconColor ?: string,
	/** 图标的大小，单位 px */
	iconSize ?: string | number,
	/** 勾选图标的对齐方式，left-左边，right-右边 */
	iconPlacement ?: string,
	/** placement 为 column 时，是否显示下边框 */
	borderBottom ?: boolean,
}

/**
 * up-checkbox-group 通过 provide 下发给 up-checkbox 的响应式契约。
 * 协议由 group 拥有，up-checkbox 反向 import 本类型。
 */
export type CheckboxGroupProvide = {
	modelValue : Ref<any[]>,
	shape : Ref<string>,
	disabled : Ref<boolean>,
	activeColor : Ref<string>,
	inactiveColor : Ref<string>,
	size : Ref<string | number>,
	placement : Ref<string>,
	labelSize : Ref<string | number>,
	labelColor : Ref<string>,
	labelDisabled : Ref<boolean>,
	iconColor : Ref<string>,
	iconSize : Ref<string | number>,
	iconPlacement : Ref<string>,
	borderBottom : Ref<boolean>,
	/** up-checkbox 切换时回调；group 增删数组元素并派发 update:modelValue + change */
	toggle : (name : string, checked : boolean) => void,
}

/** provider / inject 之间唯一的协议标识 */
export const CHECKBOX_GROUP_KEY = 'upCheckboxGroup'
```

- [ ] **步骤 2：重写 `up-checkbox-group/up-checkbox-group.uvue`**

整体替换文件内容为（**注意根节点没有 `flex: 1`**，与 radio-group 不同——原文件如此）：

```vue
<template>
	<view
	    class="up-checkbox-group"
	    :class="bemClass"
	>
		<slot></slot>
	</view>
</template>

<script setup lang="uts">
	import { computed, provide } from 'vue'
	import { bem } from '../../libs/function/index'
	import { CHECKBOX_GROUP_KEY } from './type.uts'
	import type { CheckboxGroupProps, CheckboxGroupProvide } from './type.uts'

	defineOptions({
		name: 'up-checkbox-group'
	})

	// 默认值逐字对齐 components/up-checkbox-group/checkboxGroup.uts，勿改（见 0.7）
	const props = withDefaults(defineProps<CheckboxGroupProps>(), {
		name: '',
		modelValue: () : any[] => [],
		shape: 'square',
		disabled: false,
		activeColor: '#2979ff',
		inactiveColor: '#c8c9cc',
		size: 18,
		placement: 'row',
		labelSize: 14,
		labelColor: '#303133',
		labelDisabled: false,
		iconColor: '#ffffff',
		iconSize: 12,
		iconPlacement: 'left',
		borderBottom: false
	})

	const emit = defineEmits(['update:modelValue', 'change'])

	// 可写 computed：既是下发给子组件的响应式源，也承担 v-model 回写
	const modelValue = computed<any[]>({
		get(): any[] {
			return props.modelValue
		},
		set(v : any[]) {
			emit('update:modelValue', v)
		}
	})

	/**
	 * 按值查找索引 → push / splice。与重构前 toggleCheckbox 语义逐行一致。
	 * childName 是 up-checkbox 传下来的 name.toString()。
	 */
	function toggle(name : string, checked : boolean) {
		let currentValues : any[] = []
		if (props.modelValue != null) {
			const rawArr = props.modelValue as any[]
			currentValues = rawArr.slice()
		}
		let foundIndex = -1
		for (let i = 0; i < currentValues.length; i++) {
			if (currentValues[i] != null && currentValues[i].toString() == name.toString()) {
				foundIndex = i
				break
			}
		}
		if (checked) {
			if (foundIndex == -1) {
				currentValues.push(name)
			}
		} else {
			if (foundIndex != -1) {
				currentValues.splice(foundIndex, 1)
			}
		}
		modelValue.value = currentValues
		emit('change', currentValues)
	}

	provide(CHECKBOX_GROUP_KEY, {
		modelValue,
		shape: computed(() => props.shape),
		disabled: computed(() => props.disabled),
		activeColor: computed(() => props.activeColor),
		inactiveColor: computed(() => props.inactiveColor),
		size: computed(() => props.size),
		placement: computed(() => props.placement),
		labelSize: computed(() => props.labelSize),
		labelColor: computed(() => props.labelColor),
		labelDisabled: computed(() => props.labelDisabled),
		iconColor: computed(() => props.iconColor),
		iconSize: computed(() => props.iconSize),
		iconPlacement: computed(() => props.iconPlacement),
		borderBottom: computed(() => props.borderBottom),
		toggle
	} as CheckboxGroupProvide)

	const bemClass = computed(() => {
		return bem('checkbox-group', [props.placement], [])
	})
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";

	.up-checkbox-group {

		&--row {
			display: flex;
			flex-flow: row wrap;
		}

		&--column {
			display: flex;
			flex-direction: column;
		}
	}
</style>
```

**删除说明：** `useUltraUI()` / `getChildren` / `addChild` / `unCheckedOther` / `getProps` / `getRefs` / `defineExpose` / `watch(parentDataSelf, …, { deep: true })` / `parentDataSelf` / `getCurrentInstance`。

- [ ] **步骤 3：创建 `up-checkbox/type.uts`**

```uts
/** up-checkbox 的 props 契约（默认值见 up-checkbox.uvue 的 withDefaults） */
export type CheckboxProps = {
	/** checkbox 的标识符，与 group 的 modelValue 数组元素比对判定选中 */
	name ?: string | number | boolean,
	/** 形状，square-方形，circle-圆型 */
	shape ?: string,
	/** 整体的大小 */
	size ?: string | number,
	/** 是否默认选中 */
	checked ?: boolean,
	/** 是否禁用。默认 '' 表示未设置，将向 group 取值 */
	disabled ?: string | boolean,
	/** 选中状态下的颜色，设置此值将覆盖 group 的 activeColor */
	activeColor ?: string,
	/** 未选中的颜色 */
	inactiveColor ?: string,
	/** 图标的大小，单位 px */
	iconSize ?: string | number,
	/** 图标颜色 */
	iconColor ?: string,
	/** label 提示文字 */
	label ?: string | number,
	/** label 的颜色 */
	labelColor ?: string,
	/** label 的字体大小，px 单位 */
	labelSize ?: string | number,
	/** 是否禁止点击提示语选中复选框 */
	labelDisabled ?: string | boolean,
	/** 定义需要用到的外部样式 */
	customStyle ?: UTSJSONObject,
	/** 是否独立使用 */
	usedAlone ?: boolean,
}
```

- [ ] **步骤 4：重写 `up-checkbox/up-checkbox.uvue`**

整体替换文件内容为：

```vue
<template>
	<view
	    class="up-checkbox cursor-pointer"
	    :class="[iconPlacementClass, borderBottomClass]"
	    :style="checkboxStyle"
	    @tap.stop="wrapperClickHandler"
	>
		<view
		    class="up-checkbox__icon-wrap cursor-pointer"
		    :class="iconClasses"
		    @tap.stop="iconClickHandler"
		    :style="iconWrapStyle"
		>
			<slot name="icon">
				<up-icon
				    class="up-checkbox__icon-wrap__icon"
				    name="checkbox-mark"
				    :size="elIconSize"
				    :color="elIconColor"
				/>
			</slot>
		</view>
		<slot name="label" :label="label" :elDisabled="elDisabled">
			<text
				@tap.stop="labelClickHandler"
				:style="labelStyle"
			>{{label}}</text>
		</slot>
	</view>
</template>

<script setup lang="uts">
	import { computed, inject, ref, watch } from 'vue'
	import { addStyle, addUnit, deepMerge, error } from '../../libs/function/index'
	import { CHECKBOX_GROUP_KEY } from '../up-checkbox-group/type.uts'
	import type { CheckboxGroupProvide } from '../up-checkbox-group/type.uts'
	import type { CheckboxProps } from './type.uts'

	defineOptions({
		name: 'up-checkbox'
	})

	// 默认值逐字对齐 components/up-checkbox/checkbox.uts，空串表示「未设置」（见 0.7），勿改
	const props = withDefaults(defineProps<CheckboxProps>(), {
		name: '',
		shape: '',
		size: '',
		checked: false,
		disabled: '',
		activeColor: '',
		inactiveColor: '',
		iconSize: '',
		iconColor: '',
		label: '',
		labelColor: '',
		labelSize: '',
		labelDisabled: '',
		customStyle: () : UTSJSONObject => ({}),
		usedAlone: false
	})

	const emit = defineEmits(['change', 'update:checked'])

	const group = inject<CheckboxGroupProvide | null>(CHECKBOX_GROUP_KEY, null)

	/** 未处于 group 内时的本地选中态 */
	const selfChecked = ref<boolean>(props.checked)

	/**
	 * prop 优先，其次取 group 下发值，最后回落默认值。
	 * 空串与 null 一律视为「未设置」。`?? ''` 封口见 0.6。
	 */
	function pick(own : any | null, parent : any | null, fallback : string) : string {
		const o = own == null ? '' : (own.toString() ?? '')
		if (o != '') return o
		const p = parent == null ? '' : (parent.toString() ?? '')
		if (p != '') return p
		return fallback
	}

	/** group 存在且非独立使用时，读取 group 的某个字段 */
	function fromGroup(key : string) : any | null {
		if (props.usedAlone || group == null) return null
		if (key == 'modelValue') return group!.modelValue.value
		if (key == 'shape') return group!.shape.value
		if (key == 'disabled') return group!.disabled.value
		if (key == 'activeColor') return group!.activeColor.value
		if (key == 'inactiveColor') return group!.inactiveColor.value
		if (key == 'size') return group!.size.value
		if (key == 'placement') return group!.placement.value
		if (key == 'labelSize') return group!.labelSize.value
		if (key == 'labelColor') return group!.labelColor.value
		if (key == 'labelDisabled') return group!.labelDisabled.value
		if (key == 'iconColor') return group!.iconColor.value
		if (key == 'iconSize') return group!.iconSize.value
		if (key == 'iconPlacement') return group!.iconPlacement.value
		if (key == 'borderBottom') return group!.borderBottom.value
		return null
	}

	/** group 的 modelValue 是数组，判定「数组是否包含 props.name」 */
	const isChecked = computed<boolean>((): boolean => {
		const val = fromGroup('modelValue')
		if (val != null) {
			const arr = val as any[]
			if (props.name != null) {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i] != null && arr[i].toString() == props.name!.toString()) {
						return true
					}
				}
			}
			return false
		}
		return selfChecked.value
	})

	const elDisabled = computed<boolean>((): boolean => {
		const v = pick(props.disabled, fromGroup('disabled'), 'false')
		return v == 'true'
	})

	const elLabelDisabled = computed<boolean>((): boolean => {
		const v = pick(props.labelDisabled, fromGroup('labelDisabled'), 'false')
		return v == 'true'
	})

	const elSize = computed<string>((): string => {
		return pick(props.size, fromGroup('size'), '21')
	})

	const elIconSize = computed<string>((): string => {
		return pick(props.iconSize, fromGroup('iconSize'), '12')
	})

	const elActiveColor = computed<string>((): string => {
		return pick(props.activeColor, fromGroup('activeColor'), '#2979ff')
	})

	const elInactiveColor = computed<string>((): string => {
		return pick(props.inactiveColor, fromGroup('inactiveColor'), '#c8c9cc')
	})

	const elLabelColor = computed<string>((): string => {
		return pick(props.labelColor, fromGroup('labelColor'), '#606266')
	})

	const elShape = computed<string>((): string => {
		return pick(props.shape, fromGroup('shape'), 'circle')
	})

	const elLabelSize = computed<string>((): string => {
		return addUnit(pick(props.labelSize, fromGroup('labelSize'), '15'))
	})

	const elIconColor = computed<string>((): string => {
		const iconColorStr = pick(props.iconColor, fromGroup('iconColor'), '#ffffff')
		if (elDisabled.value) {
			return isChecked.value ? elInactiveColor.value : 'transparent'
		}
		return isChecked.value ? iconColorStr : 'transparent'
	})

	const iconClasses = computed<string>((): string => {
		let classes : string[] = []
		classes.push('up-checkbox__icon-wrap--' + elShape.value)
		if (elDisabled.value) {
			classes.push('up-checkbox__icon-wrap--disabled')
		}
		if (isChecked.value && elDisabled.value) {
			classes.push('up-checkbox__icon-wrap--disabled--checked')
		}
		if (isChecked.value && !elDisabled.value && elActiveColor.value == '#2979ff') {
			classes.push('up-checkbox__icon-wrap--active')
		}
		return classes.join(' ')
	})

	const iconWrapStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		if (isChecked.value && !elDisabled.value) {
			if (elActiveColor.value != '#2979ff') {
				style['backgroundColor'] = elActiveColor.value
				style['borderColor'] = elActiveColor.value
			}
		} else {
			style['backgroundColor'] = '#ffffff'
			style['borderColor'] = elInactiveColor.value
		}
		style['width'] = addUnit(elSize.value)
		style['height'] = addUnit(elSize.value)
		const iconPlacement = fromGroup('iconPlacement')
		if (iconPlacement != null && iconPlacement.toString() == 'right') {
			style['marginRight'] = 0
		}
		return style
	})

	const labelStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		style['color'] = elDisabled.value ? elInactiveColor.value : elLabelColor.value
		style['fontSize'] = elLabelSize.value
		style['lineHeight'] = elLabelSize.value
		return style
	})

	const checkboxStyle = computed<UTSJSONObject>((): UTSJSONObject => {
		const style = {} as UTSJSONObject
		const borderBottom = fromGroup('borderBottom')
		const placement = fromGroup('placement')
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'row') {
			error('检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效')
		}
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'column') {
			style['paddingBottom'] = '8px'
		}
		return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
	})

	const iconPlacementClass = computed<string>((): string => {
		const p = fromGroup('iconPlacement')
		if (p != null && p.toString() != '') {
			return 'up-checkbox-label--' + p.toString()
		}
		return 'up-checkbox-label--left'
	})

	const borderBottomClass = computed<string>((): string => {
		const borderBottom = fromGroup('borderBottom')
		const placement = fromGroup('placement')
		if (borderBottom != null && borderBottom.toString() == 'true' && placement != null && placement.toString() == 'column') {
			return 'up-border-bottom'
		}
		return ''
	})

	/**
	 * checkbox 与 radio 的关键差异：**无论选中还是取消，都派发 change**，
	 * 载荷是新状态布尔值。不要照抄 radio 的 `if (!isChecked.value)`。
	 */
	function setCheckboxStatus() {
		const targetChecked = !isChecked.value
		if (!props.usedAlone && group != null) {
			group!.toggle(props.name != null ? props.name!.toString() : '', targetChecked)
		} else {
			selfChecked.value = targetChecked
		}
		emit('change', targetChecked)
		if (props.usedAlone) {
			emit('update:checked', targetChecked)
		}
	}

	function iconClickHandler(e : UniEvent) {
		e.stopPropagation()
		if (!elDisabled.value) {
			setCheckboxStatus()
		}
	}

	/** 横向两端排列时，点击组件即可触发选中事件 */
	function wrapperClickHandler(e : UniEvent) {
		const iconPlacement = fromGroup('iconPlacement')
		if (iconPlacement != null && iconPlacement.toString() == 'right') {
			iconClickHandler(e)
		}
	}

	function labelClickHandler(e : UniEvent) {
		e.stopPropagation()
		if (!elLabelDisabled.value && !elDisabled.value) {
			setCheckboxStatus()
		}
	}

	// 监听 checked 属性变化
	watch((): boolean => props.checked, (newVal : boolean) => {
		if (newVal != selfChecked.value) {
			selfChecked.value = newVal
		}
	})

	/** 保留 defineExpose 契约；原实现中的 parentData 初始化已随遗留机制删除 */
	const init = function() {}

	const getInternalState = () : UTSJSONObject => {
		return {
			name: props.name,
			isChecked: isChecked.value
		} as UTSJSONObject
	}

	defineExpose({
		init,
		getInternalState
	})
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";
	$up-checkbox-icon-wrap-margin-right:6px !default;
	$up-checkbox-icon-wrap-font-size:6px !default;
	$up-checkbox-icon-wrap-border-width:1px !default;
	$up-checkbox-icon-wrap-border-color:#c8c9cc !default;
	$up-checkbox-icon-wrap-icon-line-height:0 !default;
	$up-checkbox-icon-wrap-circle-border-radius:99px !default;
	$up-checkbox-icon-wrap-square-border-radius:3px !default;
	$up-checkbox-icon-wrap-checked-color:#fff !default;
	$up-checkbox-icon-wrap-checked-background-color:red !default;
	$up-checkbox-icon-wrap-checked-border-color:#2979ff !default;
	$up-checkbox-icon-wrap-disabled-background-color:#ebedf0 !default;
	$up-checkbox-icon-wrap-disabled-checked-color:#c8c9cc !default;
	$up-checkbox-label-margin-left:5px !default;
	$up-checkbox-label-margin-right:12px !default;
	$up-checkbox-label-color:$up-content-color !default;
	$up-checkbox-label-font-size:15px !default;
	$up-checkbox-label-disabled-color:#c8c9cc !default;

	.up-checkbox {
		display: flex;
		flex-direction: row;
		overflow: hidden;
		flex-direction: row;
		align-items: center;
		margin-bottom: 5px;
		margin-top: 5px;

		&-label--left {
			flex-direction: row;
		}

		&-label--right {
			flex-direction: row-reverse;
			justify-content: space-between;
		}

		&__icon-wrap {
			/* #ifndef APP */
			box-sizing: border-box;
			transition-property: border-color, background-color, color;
			transition-duration: 0.2s;
			/* #endif */
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			margin-right: $up-checkbox-icon-wrap-margin-right;
			border-width: $up-checkbox-icon-wrap-border-width;
			border-color: $up-checkbox-icon-wrap-border-color;
			border-style: solid;

			/* #ifdef MP-TOUTIAO */
			&__icon {
				line-height: $up-checkbox-icon-wrap-icon-line-height;
			}

			/* #endif */

			&--circle {
				border-radius: $up-checkbox-icon-wrap-circle-border-radius;
			}

			&--square {
				border-radius: $up-checkbox-icon-wrap-square-border-radius;
			}

			&--checked {
				color: $up-checkbox-icon-wrap-checked-color;
				background-color: $up-checkbox-icon-wrap-checked-background-color;
				border-color: $up-checkbox-icon-wrap-checked-border-color;
			}

			&--active {
				background-color: $up-primary;
				border-color: $up-primary;
			}

			&--disabled {
				background-color: $up-checkbox-icon-wrap-disabled-background-color !important;
			}

			&--disabled--checked {
				color: $up-checkbox-icon-wrap-disabled-checked-color !important;
			}
		}

		&__label {
			margin-left: $up-checkbox-label-margin-left;
			margin-right: $up-checkbox-label-margin-right;
			color: $up-checkbox-label-color;
			font-size: $up-checkbox-label-font-size;

			&--disabled {
				color: $up-checkbox-label-disabled-color;
			}
		}
	}
</style>
```

**行为保持要点：**

| 原行为 | 新实现 |
|---|---|
| `change` 每次都发，载荷为 `targetChecked` 布尔 | `setCheckboxStatus()` 末尾无条件 `emit('change', targetChecked)` |
| `update:checked` 仅 usedAlone | 同左 |
| `group.toggle(name.toString(), targetChecked)` | 同签名 |
| `init()` 里的 `parentData` 初始化 + `getParentData(...)` | **删除**（遗留机制）；`props.checked` → `selfChecked` 已由 `ref(props.checked)` + `watch` 覆盖 |
| `$callMethod('unCheckedOther', ...)` | **删除**（无消费者） |
| `setTimeout(formValidate)` | **删除**（空函数） |
| `onMounted(() => init())` | **删除**（`init` 现在是空操作，onMounted 已无意义） |

- [ ] **步骤 5：构建验证**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
LOG=/tmp/task2-build.log
/Applications/HBuilderX.app/Contents/MacOS/cli publish app-android \
  --type appResource \
  --project /Users/chenqi/Documents/chenqi-front/unibestX > "$LOG" 2>&1
echo "EXIT=$?"
grep -c "编译成功" "$LOG"
```

预期：`EXIT=0`，`grep -c` 输出 `1`。
失败时：`grep -E "错误：|Build failed" -A 3 "$LOG"`，按 0.3 一次性修复。

- [ ] **步骤 6：Commit**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
git add uni_modules/uview-ultra/components/up-checkbox-group/type.uts \
        uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.uvue \
        uni_modules/uview-ultra/components/up-checkbox/type.uts \
        uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue
git commit -m "refactor(up-checkbox): 迁移到强类型 provide/inject 契约

新增 type.uts 声明 CheckboxGroupProps/CheckboxGroupProvide，
group 以 computed 组装响应式 provide，item 以 typed inject 读取。
数组型 modelValue 的增删语义与 change 事件时机保持不变。
删除 useUltraUI/\$callMethod/unCheckedOther/watch+init 遗留链。
@include flex 改为字面 CSS。对外 API 不变。"
```

---

## 任务 3：`up-switch`

**形态 B：独立双向绑定**——无跨组件协议，工作集中在类型化、消除 `props.x.toString()` 往返、以及条件编译。

**文件：**
- 创建：`uni_modules/uview-ultra/components/up-switch/type.uts`
- 修改：`uni_modules/uview-ultra/components/up-switch/up-switch.uvue`

- [ ] **步骤 1：创建 `up-switch/type.uts`**

```uts
/** switch 的值域 */
export type SwitchValue = string | number | boolean

/** up-switch 的 props 契约（默认值见 up-switch.uvue 的 withDefaults） */
export type SwitchProps = {
	/** 是否处于加载中 */
	loading ?: boolean,
	/** 是否禁用 */
	disabled ?: boolean,
	/** 开关尺寸，单位 px */
	size ?: string | number,
	/** 打开时的背景色 */
	activeColor ?: string,
	/** 关闭时的背景色 */
	inactiveColor ?: string,
	/** 通过 v-model 双向绑定的值 */
	modelValue ?: SwitchValue,
	/** switch 打开时的值 */
	activeValue ?: SwitchValue,
	/** switch 关闭时的值 */
	inactiveValue ?: SwitchValue,
	/** 是否开启异步变更，开启后需要手动控制 modelValue */
	asyncChange ?: boolean,
	/** node 与容器边框的间距 */
	space ?: string | number,
	/** 自定义外部样式 */
	customStyle ?: UTSJSONObject,
}
```

- [ ] **步骤 2：重写 `up-switch/up-switch.uvue`**

整体替换文件内容为（模板未改动，仅 `<script>` 与 `<style>` 有变化）：

```vue
<template>
	<view
	    :class="switchClass"
	    :style="mergedSwitchStyle"
	    @tap="clickHandler"
	>
		<view
			class="up-switch__bg-active"
			:style="bgActiveStyle"
			v-if="isActive"
		>
		</view>
		<view
		    class="up-switch__bg"
		    :style="bgStyle"
			v-if="!isActive"
		>
		</view>
		<view
		    class="up-switch__node"
		    :class="[modelValue == activeValue ? 'up-switch__node--on' : '']"
		    :style="nodeStyle"
		>
			<up-loading-icon
			    :show="loading"
			    mode="circle"
			    timingFunction='linear'
				:color="loadingColor"
			    :size="loadingIconSize"
			/>
		</view>
	</view>
</template>

<script setup lang="uts">
	import { computed, nextTick } from 'vue'
	import { addStyle, getPx, addUnit, deepMerge } from '../../libs/function/index.uts'
	import config from '../../libs/config/config'
	import type { SwitchProps } from './type.uts'

	defineOptions({
	  name: 'up-switch'
	})

	// 默认值与重构前 defineProps 内联默认值逐字一致
	const props = withDefaults(defineProps<SwitchProps>(), {
		loading: false,
		disabled: false,
		size: 25,
		activeColor: '#2979ff',
		inactiveColor: '#ffffff',
		modelValue: false,
		activeValue: true,
		inactiveValue: false,
		asyncChange: false,
		space: 0,
		customStyle: () : UTSJSONObject => ({})
	})

	const emit = defineEmits(['update:modelValue', 'change'])

	/**
	 * size / space 可能是 string 也可能是 number，统一收敛为 number，
	 * 消除 `parseInt(props.x.toString())` 的字符串往返。
	 */
	function toNum(value : any | null, fallback : number) : number {
		if (value == null) return fallback
		const n = parseInt(value.toString() ?? '')
		return isNaN(n) ? fallback : n
	}

	const isActive = computed<boolean>(() => {
	  return props.modelValue == props.activeValue
	})

	const customInactiveColor = computed<boolean>(() => {
	  return props.inactiveColor != '#fff' && props.inactiveColor != '#ffffff'
	})

	const loadingIconSize = computed((): number => {
	  return parseInt(getPx(props.size)) * 0.6
	})

	const loadingColor = computed((): string => {
	  if (isActive.value) {
	    if (props.activeColor != '' && props.activeColor != '#2979ff') {
	      return props.activeColor
	    }
	    return config.getString('color.up-primary') as string
	  }
	  return '#AAABAD'
	})

	const switchClass = computed<string>(() => {
	  let classes = ['up-switch', 'cursor-pointer']
	  if (props.disabled) {
	    classes.push('up-switch--disabled')
	  }
	  if (isActive.value) {
	    classes.push('up-switch--on')
	  } else {
	    classes.push('up-switch--off')
	  }
	  return classes.join(' ')
	})

	const switchStyle = computed<UTSJSONObject>(() => {
	  let style = {} as UTSJSONObject
	  const sizeNum = toNum(props.size, 25)
	  if (sizeNum != 25) {
	    style['width'] = addUnit(sizeNum * 2 + 2)
	    style['height'] = addUnit(sizeNum + 2)
	  }
	  if (isActive.value) {
	    style['borderColor'] = 'rgba(0, 0, 0, 0)'
	  } else {
	    if (customInactiveColor.value) {
	      style['borderColor'] = 'rgba(0, 0, 0, 0)'
	    } else {
	      style['borderColor'] = 'rgba(0, 0, 0, 0.12)'
	    }
	  }
	  return style
	})

	const mergedSwitchStyle = computed((): UTSJSONObject => {
	  return deepMerge(switchStyle.value, addStyle(props.customStyle)) as UTSJSONObject
	})

	const bgActiveStyle = computed<UTSJSONObject>(() => {
	  let style = {} as UTSJSONObject
	  const sizeNum = toNum(props.size, 25)
	  style['width'] = addUnit(sizeNum * 2 + 2)
	  style['height'] = addUnit(sizeNum + 2)
	  if (props.activeColor != '#2979ff') {
	    style['backgroundColor'] = props.activeColor
	  }
	  return style
	})

	const nodeStyle = computed<UTSJSONObject>(() => {
	  let style = {} as UTSJSONObject
	  const sizeVal = toNum(props.size, 25)
	  const spaceVal = toNum(props.space, 0)
	  style['width'] = addUnit(sizeVal - spaceVal)
	  style['height'] = addUnit(sizeVal - spaceVal)
	  const translateX = isActive.value ? addUnit(props.space) : addUnit(props.size)
	  style['transform'] = `translateX(-${translateX})`
	  return style
	})

	const bgStyle = computed<UTSJSONObject>(() => {
	  let style = {} as UTSJSONObject
	  const sizeNum = toNum(props.size, 25)
	  style['width'] = addUnit(sizeNum * 2)
	  style['height'] = addUnit(sizeNum)
	  style['backgroundColor'] = props.inactiveColor
	  style['transform'] = `scale(${isActive.value ? 0 : 1})`
	  return style
	})

	function clickHandler() {
	  if (!props.disabled && !props.loading) {
	    const oldValue = isActive.value ? props.inactiveValue : props.activeValue
	    if (!props.asyncChange) {
	      emit('update:modelValue', oldValue)
	    }
	    nextTick(() => {
	      emit('change', oldValue)
	    })
	  }
	}
</script>

<style lang="scss" scoped>
	.up-switch {
		display: flex;
		flex-direction: row;
		/* #ifndef APP */
		box-sizing: border-box;
		/* #endif */
		position: relative;
		background-color: rgba(0, 0, 0, 0);
		border-width: 1px;
		border-radius: 100px;
		transition: background-color 0.4s;
		border-color: rgba(0, 0, 0, 0.12);
		border-style: solid;
		justify-content: flex-end;
		align-items: center;
		overflow: hidden;

		width: 52px;
		height: 27px;

		&__bg-active {
			position: absolute;
			top: -1px;
			left: -1px;
			border-radius: 100px;
			background-color: $up-primary;
			width: 52px;
			height: 27px;
		}

		&__node {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			border-radius: 100px;
			background-color: #fff;
			border-radius: 100px;
			box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.25);
			transition-property: transform;
			transition-duration: 0.4s;
			transition-timing-function: cubic-bezier(0.3, 1.05, 0.4, 1.05);
		}

		&__bg {
			position: absolute;
			border-radius: 100px;
			background-color: #FFFFFF;
			transition-property: transform;
			transition-duration: 0.4s;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			transition-timing-function: ease;
		}

		&--disabled {
			opacity: 0.6;
		}
	}
</style>
```

**行为保持要点：**

| 原行为 | 新实现 |
|---|---|
| `loading` 或 `disabled` 时点击无响应 | `clickHandler` 首行判断不变 |
| `asyncChange` 为 true 时不发 `update:modelValue`，但**仍发 `change`** | 不变，且 `change` 在 `nextTick` 内 |
| `size.toString() != '25'` 才写 width/height | 改为 `toNum(props.size, 25) != 25`，对纯数字语义相同 |
| `customInactiveColor` 对 `#fff` / `#ffffff` 的判定 | 不变 |
| `config.getString('color.up-primary') as string` | 不变 |

> **注意**：新实现对 `size = '25px'` 这类字符串会走 `parseInt` 得 25，从而不再进入 width/height 分支；原实现 `'25px' != '25'` 会进入。`size` 的文档值域是数字，这是可接受的收敛。若你判断有真实调用方传 `'25px'`，把这两行改回 `props.size.toString() != '25'` 即可。

- [ ] **步骤 3：构建验证**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
LOG=/tmp/task3-build.log
/Applications/HBuilderX.app/Contents/MacOS/cli publish app-android \
  --type appResource \
  --project /Users/chenqi/Documents/chenqi-front/unibestX > "$LOG" 2>&1
echo "EXIT=$?"
grep -c "编译成功" "$LOG"
```

预期：`EXIT=0`，`grep -c` 输出 `1`。

- [ ] **步骤 4：Commit**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
git add uni_modules/uview-ultra/components/up-switch/type.uts \
        uni_modules/uview-ultra/components/up-switch/up-switch.uvue
git commit -m "refactor(up-switch): 类型化 props 并收敛尺寸解析

新增 type.uts 声明 SwitchProps/SwitchValue；
size/space 的 parseInt(x.toString()) 往返收敛为 toNum 助手。
@include flex 改为字面 CSS。
对外 API 与交互行为不变。"
```

---

## 任务 4：`up-rate`

**形态 B**，同样是独立双向绑定。除类型化外，本任务**顺手修掉一处项目规范违规**：`up-rate.uvue:292` 使用了 `os() === 'ios'`，而 `.agents/rules/uniappx.md` §6 明确禁止对字符串使用 `===`。

**文件：**
- 创建：`uni_modules/uview-ultra/components/up-rate/type.uts`
- 修改：`uni_modules/uview-ultra/components/up-rate/up-rate.uvue`

- [ ] **步骤 1：创建 `up-rate/type.uts`**

```uts
/** up-rate 的 props 契约（默认值见 up-rate.uvue 的 withDefaults） */
export type RateProps = {
	/** 星级绑定的值，通过 v-model 传入 */
	modelValue ?: string | number,
	/** 星星的总数 */
	count ?: string | number,
	/** 是否禁用 */
	disabled ?: boolean,
	/** 是否只读，只读时不可点击 */
	readonly ?: boolean,
	/** 图标的大小，单位 px */
	size ?: string | number,
	/** 未选中星星的颜色 */
	inactiveColor ?: string,
	/** 选中星星的颜色 */
	activeColor ?: string,
	/** 未选中星星的图标名 */
	inactiveIcon ?: string,
	/** 选中星星的图标名 */
	activeIcon ?: string,
	/** 星星之间的间距，单位 px */
	gutter ?: string | number,
	/** 最少选中的数量 */
	minCount ?: string | number,
	/** 是否允许半星 */
	allowHalf ?: boolean,
	/** 是否允许滑动选择 */
	touchable ?: boolean,
	/** 定义需要用到的外部样式 */
	customStyle ?: UTSJSONObject,
}
```

- [ ] **步骤 2：重写 `up-rate/up-rate.uvue`**

**模板完全不动。** 包括 `class="up-rate__content__item cursor-pointer"` 里的 `cursor-pointer`——见 0.4，它是 tailwind 扫源文本生成的，动它无效且只会让 diff 变大。

> 两个 `up-icon` 分支及其 `Math.floor` / `Math.ceil` / `activeColor == '#FA3534'` 表达式、`halfWidthStyle`、`customRateStyle` 同样逐字不动。

`<script setup>` 整体替换为：

```uts
	import { computed, ref, watch, onMounted, getCurrentInstance } from 'vue'
	import { addUnit, addStyle, guid, sleep, range, os, upGetRect } from '../../libs/function/index.uts'
	import type { RateProps } from './type.uts'

	defineOptions({
	  name: 'up-rate'
	})

	// 默认值与重构前 defineProps 内联默认值逐字一致
	const props = withDefaults(defineProps<RateProps>(), {
		modelValue: 1,
		count: 5,
		disabled: false,
		readonly: false,
		size: 18,
		inactiveColor: '#b2b2b2',
		activeColor: '#FA3534',
		inactiveIcon: 'star-fill',
		activeIcon: 'star-fill',
		gutter: 4,
		minCount: 0,
		allowHalf: false,
		touchable: true,
		customStyle: () : UTSJSONObject => ({})
	})

	const emit = defineEmits(['update:modelValue', 'change'])
	const instance = getCurrentInstance()

	const elId = ref<string>(guid())
	const elClass = ref<string>(guid())
	const rateBoxLeft = ref<number>(0)
	const activeIndex = ref<number>(0)
	const rateWidth = ref<number>(0)
	const moving = ref<boolean>(false)

	const customRateStyle = computed((): UTSJSONObject => {
	  return addStyle(props.customStyle) as UTSJSONObject
	})

	const iconPaddingStyle = computed((): UTSJSONObject => {
	  return {
	    padding: `0 ${addUnit(toNumber(props.gutter, 0) / 2)}`
	  } as UTSJSONObject
	})

	const halfWidthStyle = computed((): UTSJSONObject => {
	  return {
	    width: addUnit(rateWidth.value / 2)
	  } as UTSJSONObject
	})

	function toNumber(value: any, fallback: number = 0): number {
	  if (value == null) return fallback
	  const num = parseFloat(value.toString() ?? '')
	  return isNaN(num) ? fallback : num
	}

	function getMinCountValue(): number {
	  return toNumber(props.minCount, 0)
	}

	function getCountValue(): number {
	  return toNumber(props.count, 0)
	}

	function normalizeActiveIndex(value: any): number {
	  let normalized = toNumber(value, getMinCountValue())
	  const minCount = getMinCountValue()
	  const count = getCountValue()
	  if (normalized < minCount) normalized = minCount
	  if (count > 0 && normalized > count) normalized = count
	  return normalized
	}

	function getFallbackRateWidth(): number {
	  const size = toNumber(props.size, 18)
	  const gutter = toNumber(props.gutter, 0)
	  const width = size + gutter
	  return width > 0 ? width : 18
	}

	function getRateIconWrapRect() {
	  upGetRect('.' + elClass.value, false, instance?.proxy).then((res: NodeInfo) => {
	    const width = res.width ?? NaN
	    if (!isNaN(width) && width > 0) {
	      rateWidth.value = width
	    }
	  })
	}

	async function getRateItemRect() {
	  await sleep()
	  upGetRect('#' + elId.value, false, instance?.proxy).then((res: NodeInfo) => {
	    const left = res.left ?? NaN
	    if (!isNaN(left)) {
	      rateBoxLeft.value = left
	    }
	  })
	}

	function ensureRateMetrics(): boolean {
	  if (isNaN(rateBoxLeft.value)) {
	    rateBoxLeft.value = 0
	  }
	  if (isNaN(rateWidth.value) || rateWidth.value <= 0) {
	    rateWidth.value = getFallbackRateWidth()
	    getRateIconWrapRect()
	  }
	  return !isNaN(rateWidth.value) && rateWidth.value > 0
	}

	function emitEvent() {
	  const normalizedValue = normalizeActiveIndex(activeIndex.value)
	  if (normalizedValue != activeIndex.value) {
	    activeIndex.value = normalizedValue
	    return
	  }
	  emit('change', normalizedValue)
	  emit('update:modelValue', normalizedValue)
	}

	function getActiveIndex(x: number, isClick = false) {
	  if (props.disabled || props.readonly) {
	    return
	  }
	  if (!ensureRateMetrics()) {
	    return
	  }
	  const count = getCountValue()
	  if (count <= 0 || isNaN(x)) {
	    return
	  }
	  const allRateWidth = rateWidth.value * count + rateBoxLeft.value
	  x = range(rateBoxLeft.value, allRateWidth, x) - rateBoxLeft.value
	  const distance = x
	  let index = 0
	  if (props.allowHalf) {
	    index = Math.floor(distance / rateWidth.value)
	    const decimal = distance % rateWidth.value
	    if (decimal <= rateWidth.value / 2 && decimal > 0) {
	      index += 0.5
	    } else if (decimal > rateWidth.value / 2) {
	      index++
	    }
	  } else {
	    index = Math.floor(distance / rateWidth.value)
	    const decimal = distance % rateWidth.value
	    if (isClick) {
	      if (decimal > 0) index++
	    } else {
	      if (decimal > rateWidth.value / 2) index++
	    }
	  }
	  activeIndex.value = normalizeActiveIndex(Math.min(index, count))
	  if (activeIndex.value < getMinCountValue()) {
	    activeIndex.value = getMinCountValue()
	  }
	  emitEvent()

	  setTimeout(() => {
	    moving.value = true
	  }, 10)
	  setTimeout(() => {
	    moving.value = false
	  }, 10)
	}

	function touchMove(e: UniTouchEvent) {
	  if (!props.touchable) return
	  ensureRateMetrics()
	  const x = e.changedTouches[0].pageX
	  getActiveIndex(x)
	}

	function touchEnd(e: UniTouchEvent) {
	  if (!props.touchable) return
	  ensureRateMetrics()
	  const x = e.changedTouches[0].pageX
	  getActiveIndex(x)
	}

	function clickHandler(e: any, index: number) {
	  const ee = e as UniPointerEvent
	  // 原为 os() === 'ios'，项目规范 §6 禁止字符串用 ===，此处修正为 ==
	  if (os() == 'ios' && moving.value) {
	    return
	  }
	  ensureRateMetrics()
	  const x = ee.pageX
	  getActiveIndex(x, true)
	}

	function init() {
	  const modelVal = toNumber(props.modelValue, NaN)
	  const defaultActive = toNumber(props.minCount, 0)
	  activeIndex.value = isNaN(modelVal) ? defaultActive : (modelVal == 0 ? defaultActive : modelVal)
	  sleep().then(() => {
	    getRateItemRect()
	    getRateIconWrapRect()
	  })
	}

	watch((): any => props.modelValue, (val: any) => {
	  activeIndex.value = normalizeActiveIndex(val)
	})

	onMounted(() => {
	  init()
	})
```

`<style>` 整体替换为（三处 `@include flex` 展开）：

```scss
	$up-rate-margin: 0 !default;
	$up-rate-padding: 0 !default;
	$up-rate-item-icon-wrap-half-top: 0 !default;
	$up-rate-item-icon-wrap-half-left: 0 !default;

	.up-rate {
	    display: flex;
	    flex-direction: row;
	    align-items: center;
	    margin: $up-rate-margin;
	    padding: $up-rate-padding;

	    &__content {
	        display: flex;
	        flex-direction: row;

			&__item {
			    position: relative;

			    &__icon-wrap {
			        &--half {
			            position: absolute;
			            overflow: hidden;
			            top: $up-rate-item-icon-wrap-half-top;
			            left: $up-rate-item-icon-wrap-half-left;
			        }
			    }
			}
	    }
	}

	.up-icon {
	    box-sizing: border-box;
	}
```

**行为保持要点：**

| 原行为 | 新实现 |
|---|---|
| `change` 先于 `update:modelValue` 派发 | 保持该顺序（与 switch 相反） |
| `emitEvent` 中「归一化后与当前值不同则只更新不回传」的短路 | 不变 |
| `getActiveIndex` 的 `allowHalf` 半星 `Math.floor` / 其余分支 | 逐行不变 |
| `os() === 'ios'` | 改为 `os() == 'ios'`（规范修正） |
| `init()` 中 `modelVal == 0 ? defaultActive : modelVal` 的三元 | 不变 |
| `watch(props.modelValue)` 与 `onMounted(init)` | 不变 |

- [ ] **步骤 3：构建验证**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
LOG=/tmp/task4-build.log
/Applications/HBuilderX.app/Contents/MacOS/cli publish app-android \
  --type appResource \
  --project /Users/chenqi/Documents/chenqi-front/unibestX > "$LOG" 2>&1
echo "EXIT=$?"
grep -c "编译成功" "$LOG"
```

预期：`EXIT=0`，`grep -c` 输出 `1`。

- [ ] **步骤 4：Commit**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
git add uni_modules/uview-ultra/components/up-rate/type.uts \
        uni_modules/uview-ultra/components/up-rate/up-rate.uvue
git commit -m "refactor(up-rate): 类型化 props 并修正 === 违规

新增 type.uts 声明 RateProps；
os() === 'ios' 修正为 ==，符合项目规范 §6。
@include flex 改为字面 CSS。
半星计算与 DOM 测量逻辑保持不变。"
```

---

## 任务 5：删除 `up-picker-column` 目录

**依据**（规格 7.1）：仓库内零引用，且组件本体是空壳——`up-picker-column.uvue` 只含空的 `picker-view-column`，`props.uts` 的 props 为空对象，`up-picker.uvue` 从未使用它。

**文件：**
- 删除：`uni_modules/uview-ultra/components/up-picker-column/`（整个目录，4 个文件）

- [ ] **步骤 1：删除前复验「零引用」**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
grep -rn "up-picker-column\|upPickerColumn" \
  --include='*.uvue' --include='*.vue' --include='*.uts' --include='*.ts' \
  --include='*.js' --include='*.json' \
  src uni_modules pages.config.json pages.json 2>/dev/null | grep -v '^uni_modules/uview-ultra/components/up-picker-column/'
```

预期：**无输出**。

**如果这条命令有任何输出，停下来**——说明存在引用，不要删除，把输出发给用户决策。

- [ ] **步骤 2：删除目录**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
git rm -r uni_modules/uview-ultra/components/up-picker-column
```

- [ ] **步骤 3：构建验证**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
LOG=/tmp/task5-build.log
/Applications/HBuilderX.app/Contents/MacOS/cli publish app-android \
  --type appResource \
  --project /Users/chenqi/Documents/chenqi-front/unibestX > "$LOG" 2>&1
echo "EXIT=$?"
grep -c "编译成功" "$LOG"
```

预期：`EXIT=0`，`grep -c` 输出 `1`。

- [ ] **步骤 4：Commit**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
git commit -m "chore(up-picker-column): 删除全仓库零引用的空壳组件

该目录仅含空的 picker-view-column，props 为空对象，
up-picker.uvue 从未引用。删除前已 grep 复验零引用。"
```

---

## 任务 6：`up-picker` 类型化（档 1：类型化 + 清死代码）

**严格限定改动面**：只动 props 声明、取值助手、事件载荷类型、`@include flex`。

**不动**：双渲染路径（`#ifdef APP` 的 `scroll-view` 滚轮 / `#ifndef APP` 的 `picker-view`）、滚动同步逻辑、7 个 `defineExpose` 命令式方法、`keyName` 动态键机制。

**文件：**
- 创建：`uni_modules/uview-ultra/components/up-picker/type.uts`
- 修改：`uni_modules/uview-ultra/components/up-picker/up-picker.uvue`

- [ ] **步骤 1：创建 `up-picker/type.uts`**

```uts
/** 一列选项 */
export type PickerColumn = any[]

/** up-picker 的 props 契约（默认值见 up-picker.uvue 的 withDefaults） */
export type PickerProps = {
	/** 选中的值（对象中 id 字段组成的数组） */
	modelValue ?: any[],
	/** 是否显示为输入框样式 */
	hasInput ?: boolean,
	/** 输入框 placeholder */
	placeholder ?: string,
	/** 是否显示弹窗 */
	show ?: boolean,
	/** 弹窗模式 */
	popupMode ?: string,
	/** 是否内嵌在页面中 */
	pageInline ?: boolean,
	/** 是否显示工具栏 */
	showToolbar ?: boolean,
	/** 工具栏右侧插槽 */
	toolbarRightSlot ?: boolean,
	/** 工具栏底部插槽 */
	toolbarBottomSlot ?: boolean,
	/** 标题 */
	title ?: string,
	/** 各列的数据 */
	columns ?: any[],
	/** 是否显示加载中 */
	loading ?: boolean,
	/** 每项的高度，单位 px */
	itemHeight ?: string | number,
	/** 取消按钮文字 */
	cancelText ?: string,
	/** 确定按钮文字 */
	confirmText ?: string,
	/** 取消按钮颜色 */
	cancelColor ?: string,
	/** 确定按钮颜色 */
	confirmColor ?: string,
	/** 可见的选项数量，必须是奇数 */
	visibleItemCount ?: string | number,
	/** 选项对象中用于显示的键名 */
	keyName ?: string,
	/** 点击遮罩是否关闭 */
	closeOnClickOverlay ?: boolean,
	/** 默认选中的索引 */
	defaultIndex ?: number[],
	/** 是否在手指拖动时即时触发 change */
	immediateChange ?: boolean,
}

/** change 事件载荷，字段名与重构前 `as UTSJSONObject` 的键逐一对应 */
export type PickerChangeEvent = {
	/** 当前各列选中的原始对象 */
	value : any[],
	/** 本次发生变化的索引 */
	index : number,
	/** 各列当前选中的索引 */
	indexs : number[],
	/** 当前各列的完整数据 */
	values : any[],
	/** 发生变化的列下标 */
	columnIndex : number,
}

/** confirm 事件载荷，字段名与重构前 `as UTSJSONObject` 的键逐一对应 */
export type PickerConfirmEvent = {
	/** 各列当前选中的索引 */
	indexs : number[],
	/** 当前各列选中的原始对象 */
	value : any[],
	/** 当前各列的完整数据 */
	values : any[],
}
```

- [ ] **步骤 2：替换 `up-picker.uvue` 的 props 声明**

把 `<script setup>` 中从 `const props = defineProps({` 到对应的 `})`（原文件 154–243 行）整段替换为：

```uts
	// 默认值逐字对齐 components/up-picker/picker.uts 与重构前的内联默认值
	const props = withDefaults(defineProps<PickerProps>(), {
		modelValue: () : any[] => [],
		hasInput: false,
		placeholder: '请选择',
		show: false,
		popupMode: 'bottom',
		pageInline: false,
		showToolbar: true,
		toolbarRightSlot: false,
		toolbarBottomSlot: false,
		title: '',
		columns: () : any[] => [],
		loading: false,
		itemHeight: 44,
		cancelText: '取消',
		confirmText: '确定',
		cancelColor: '#909193',
		confirmColor: '#3c9cff',
		visibleItemCount: 5,
		keyName: 'text',
		closeOnClickOverlay: false,
		defaultIndex: () : number[] => [],
		immediateChange: true
	})
```

并在 import 区追加：

```uts
	import type { PickerProps, PickerChangeEvent, PickerConfirmEvent } from './type.uts'
```

- [ ] **步骤 3：新增编号与取值助手，替换字符串往返**

在 `const itemHeightNumber = ...` 之前插入：

```uts
	/** itemHeight / visibleItemCount 可能是 string 也可能是 number，统一收敛为 number */
	function toNumber(value : any | null, fallback : number) : number {
		if (value == null) return fallback
		const n = parseInt(value.toString() ?? '')
		return isNaN(n) ? fallback : n
	}

	/**
	 * 取选项对象的某个键的文本值。
	 * 强类型无法表达 `props.keyName` 这样的动态键——这是保留 uview-plus API 契约的
	 * 必要代价，全文件仅此一处出现 `(x as UTSJSONObject)[key]` 下标访问，便于审查。
	 */
	function getKeyedText(element : any, key : string) : string | null {
		if (element == null || typeof element != 'object') return null
		const v = (element as UTSJSONObject)[key]
		if (v == null) return null
		const s = v.toString()
		if (s == null) return null
		return s
	}
```

然后把 `itemHeightNumber` 与 `visibleCountNumber` 两个 computed 替换为：

```uts
	const itemHeightNumber = computed<number>(() => {
		const h = toNumber(props.itemHeight, 44)
		return h <= 0 ? 44 : h
	})

	const visibleCountNumber = computed<number>(() => {
		const c = toNumber(props.visibleItemCount, 5)
		return c <= 0 ? 5 : c
	})
```

- [ ] **步骤 4：收敛 `inputLabel` / `inputValue` / `getItemText` 的动态键取值**

`inputLabel`（原 290–310 行）替换为：

```uts
	const inputLabel = computed<string[]>(() => {
		let items: Array<any> = []
		innerColumns.value.map((item, index) => {
			const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0
			if (idx < item.length) {
				items.push(item[idx])
			}
		})
		let res: string[] = []
		items.forEach((element : any) => {
			if (typeof element == 'object' && element != null) {
				const t = getKeyedText(element, props.keyName)
				if (t != null) {
					res.push(t!)
				}
			} else if (element != null) {
				res.push(element.toString() ?? '')
			}
		})
		return res
	})
```

`inputValue`（原 312–330 行）替换为（**保留硬编码的 `'id'`**，这是既有 API 行为）：

```uts
	const inputValue = computed<string[]>(() => {
		let items: Array<any> = []
		innerColumns.value.map((item, index) => {
			const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0
			if (idx < item.length) {
				items.push(item[idx])
			}
		})
		let res: string[] = []
		items.forEach((element : any) => {
			const t = getKeyedText(element, 'id')
			if (t != null) {
				res.push(t!)
			}
		})
		return res
	})
```

`getItemText`（原 332–341 行）替换为：

```uts
	function getItemText(item : any) : string {
		if (typeof item == 'object' && item != null) {
			const t = getKeyedText(item, props.keyName)
			return t != null ? t! : ''
		}
		return item != null ? (item.toString() ?? '') : ''
	}
```

> **注意 `getItemText` 与 `inputLabel` 的分支差异**：`getItemText` 在对象缺少 `keyName` 字段时返回 `''`（不回落到 `toString()`）；`inputLabel` 对非对象元素会 `toString()` 后入栈。两者互不相同，上面的实现逐条保留了原分支。

- [ ] **步骤 5：事件载荷改为强类型**

`notifyChange` 中的 `emit('change', {...} as UTSJSONObject)` 替换为：

```uts
		emit('change', {
			value: valueOrigin,
			index: changedItemIdx,
			indexs: innerIndex.value,
			values: values as any[],
			columnIndex: colIdx
		} as PickerChangeEvent)
```

`changeHandler` 中的 `emit('change', {...} as UTSJSONObject)` 替换为：

```uts
		emit('change', {
			value: valueOrigin,
			index,
			indexs: val,
			values: innerColumns.value as any[],
			columnIndex: colIdx
		} as PickerChangeEvent)
```

`confirm` 中的 `emit('confirm', {...} as UTSJSONObject)` 替换为：

```uts
		emit('confirm', {
			indexs: innerIndex.value,
			value: confirmValues,
			values: innerColumns.value as any[]
		} as PickerConfirmEvent)
```

> **回退**：若 UTS 对 `as PickerChangeEvent` / `as PickerConfirmEvent` 报错，改回 `as UTSJSONObject` 即可——运行期载荷完全一致，只是失去编译期字段校验。这是规格 4.3 同款回退策略。

> **已取消的步骤**：原计划此处有一条「把模板里 `up-picker-input` 的 `cursor-pointer` 条件化」。**实测证伪，已取消**——`up-picker` 的 `cursor-pointer` 保持原样不动。理由见 0.4。

- [ ] **步骤 6：`@include flex` 改为字面 CSS**

`<style>` 中五处替换：

| 位置 | 原 | 新 |
| :--- | :--- | :--- |
| `&__columns` | `@include flex;` | `display: flex;` + `flex-direction: row;` |
| `&__item` | `@include flex;` | `display: flex;` + `flex-direction: row;` |
| `&__view__column` | `@include flex;` | `display: flex;` + `flex-direction: row;` |
| `&__view__column__item` | `@include flex;` | `display: flex;` + `flex-direction: row;` |
| `&--loading` | `@include flex;` | `display: flex;` + `flex-direction: row;` |

即把每处 `@include flex;`（无参数，等价于 `@include flex(row)`）替换为两行：

```scss
			display: flex;
			flex-direction: row;
```

缩进对齐该规则块内已有属性。**`&__column { flex: 1 }` 与 `&__view__column { flex: 1 }` 保持不动**（见 0.9）。

- [ ] **步骤 7：构建验证**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
LOG=/tmp/task6-build.log
/Applications/HBuilderX.app/Contents/MacOS/cli publish app-android \
  --type appResource \
  --project /Users/chenqi/Documents/chenqi-front/unibestX > "$LOG" 2>&1
echo "EXIT=$?"
grep -c "编译成功" "$LOG"
```

预期：`EXIT=0`，`grep -c` 输出 `1`。

- [ ] **步骤 8：Commit**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
git add uni_modules/uview-ultra/components/up-picker/type.uts \
        uni_modules/uview-ultra/components/up-picker/up-picker.uvue
git commit -m "refactor(up-picker): 类型化 props 与事件载荷

新增 type.uts 声明 PickerProps/PickerChangeEvent/PickerConfirmEvent；
事件载荷由 as UTSJSONObject 改为强类型，字段名与结构不变。
动态键取值收敛为单点 getKeyedText 助手，保留 keyName 契约与硬编码 id。
@include flex 改为字面 CSS。
双渲染路径与 7 个 defineExpose 方法均未改动。"
```

---

## 任务 7：双模式验证与产物核对

前六个任务都在 `vapor: true`（蒸汽模式 / 字节码）下构建。本任务补上 VDOM 分支与产物回归。

**文件：**
- 临时修改：`manifest.json` 的 `uni-app-x.vapor`、`uni-app-x.vapor-render-target`

> **改前必须备份，改后必须恢复。**`manifest.json` 是工作区文件，本任务结束后它必须回到原值。

- [ ] **步骤 1：记录并备份当前 vapor 配置**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
cp manifest.json /tmp/manifest.json.bak
grep -n -A 4 '"uni-app-x"' manifest.json
```

把输出的 `vapor` 与 `vapor-render-target` 原值抄在下表，步骤 4 要还原（预期是 `vapor: true` / `vapor-render-target: "bytecode"`）：

| 字段 | 原值（构建后回填） |
| :--- | :--- |
| `vapor` | |
| `vapor-render-target` | |

- [ ] **步骤 2：切到 VDOM 模式构建**

把 `manifest.json` 中 `"vapor": true` 改为 `"vapor": false`，`"vapor-render-target"` 保持原值不动。然后：

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
LOG=/tmp/task7-vdom-build.log
/Applications/HBuilderX.app/Contents/MacOS/cli publish app-android \
  --type appResource \
  --project /Users/chenqi/Documents/chenqi-front/unibestX > "$LOG" 2>&1
echo "EXIT=$?"
grep -c "编译成功" "$LOG"
```

预期：`EXIT=0`，`grep -c` 输出 `1`。

- [ ] **步骤 3：flex 产物回归**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
grep -rc '"display"' unpackage/dist/build/web/assets/*.css 2>/dev/null | head
grep -rl "up-radio" unpackage/dist/build/web/assets/*.css 2>/dev/null
```

判据（规格 8.4）：含 `up-radio` / `up-checkbox` / `up-switch` / `up-rate` / `up-picker` 样式的产物中，`"display"` 或 `display:` 出现次数 **> 0**。

若为 0，说明 `@include flex` 的替换没有生效，或 `weapp-tailwindcss` 又丢掉了 SCSS 产物——对照记忆 `uniappx-weapp-tailwindcss-drops-sass-output` 排查。

> 注意：`unpackage/dist/build/web/` 是 H5 构建产物目录。如果本次 `publish app-android` 没有刷新它，先跑一次 Web 构建（`pnpm build:h5`，若该脚本存在）再核对。

- [ ] **步骤 4：恢复 `manifest.json`**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
cp /tmp/manifest.json.bak manifest.json
git diff --stat manifest.json
```

预期：`git diff --stat` **无输出**（文件与备份前完全一致）。

若仍有差异，手工把步骤 1 记下的 `vapor` / `vapor-render-target` 改回原值。

- [ ] **步骤 5：确认无遗留产物被误提交**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
git status --short
```

预期：只有本次重构涉及的 `uni_modules/uview-ultra/components/` 下的文件，以及既有的未跟踪构建产物（`unpackage/`、`pnpm-lock.yaml` 等，这些本来就在仓库里未跟踪）。**不要 `git add` 任何 `unpackage/` 下的内容。**

- [ ] **步骤 6：构建告警回归核对**

```bash
cd /Users/chenqi/Documents/chenqi-front/unibestX
for f in /tmp/task1-build.log /tmp/task6-build.log; do
  echo "=== $f ==="
  tr '\r' '\n' < "$f" | sed 's/\x1b\[[0-9;]*m//g' | grep -c "not a standard property"
  tr '\r' '\n' < "$f" | sed 's/\x1b\[[0-9;]*m//g' | grep -i "error\|错误：" || echo "无编译错误"
done
```

预期：两次构建的 cursor 告警**条数都不超过基线（9 条）**，且无编译错误。

> **不要期待它归零**——见 0.4，本计划不处理该告警，只要求「没变多」。

- [ ] **步骤 7：人工真机确认（不可省略）**

规格第 8 节的验证边界写得很明确：本地 `cli publish` 只能验证**编译期**正确性，**无法断言渲染期行为**。历史上「云打包后组件消失」正是编译通过而运行时暴露的问题。

请人工在真机/模拟器上打开以下 demo 页，两种模式下各确认一次：

- radio / radio-group 联动（点击切换、禁用态、label 点击）
- checkbox / checkbox-group 联动（多选、取消勾选、change 事件）
- switch 开关与 asyncChange
- rate 点击与半星滑动
- picker 打开、滚动、确认、取消

**这一步没有自动化替代方案。** 在它完成之前，「重构成功」这个结论只覆盖编译层面。

---

## 自检

### 1. 规格覆盖度

| 规格章节 | 对应任务 |
| :--- | :--- |
| 4.1 文件布局（每组件一个 `type.uts`） | 任务 1/2/3/4/6 各步骤 1 |
| 4.2 契约归属（group 拥有，item 反向 import） | 任务 1 步骤 3、任务 2 步骤 3 |
| 4.3 类型写法（联合类型 + 回退 `any`） | 任务 1 开头说明，任务 6 步骤 5 回退注记 |
| 4.4 形态 A（group + item） | 任务 1、任务 2 |
| 4.4 形态 B（switch / rate） | 任务 3、任务 4 |
| 4.4 形态 C（picker） | 任务 6 |
| 5.1 `pick()` 助手 | 0.8 统一定义，任务 1 步骤 4、任务 2 步骤 4 |
| 5.7 样式：`:style` 数组改单对象 | 任务 1 步骤 4、任务 2 步骤 4 |
| 5.7 `@include flex` 改字面 CSS | 任务 1/2/3/4/6 各 style 步骤 |
| 6 条件编译 | **已按实测收缩**：原规格要求把 `cursor-pointer` 归入 `#ifdef WEB`，实测证伪（见 0.4），本计划不实现该条。其余条件编译仅在确有差异处添加 |
| 7.1 删除 `up-picker-column` | 任务 5 |
| 7.2 删除 `$callMethod` 机制与空 `formValidate` | 任务 1 步骤 4、任务 2 步骤 4 |
| 8 验证（Vapor / VDOM / flex 产物） | 任务 7 |
| 10 影响范围（7 个 `.uvue` + 7 个 `type.uts` + 删 1 目录） | 任务 1–6 文件清单 |

**偏差说明（有意为之，需用户知悉）：**

1. 规格 5.7 第 3 项要求「移除不再需要的 `@import "../../libs/css/components.scss"`」，本计划**保留**该 import（见 0.9）。理由：该 import 无害，移除它不在本任务收益范围内，多动一处多一分风险。
2. 规格 4.3 提到用 `'circle' | 'square'` 这类字面量联合。本计划在 props 的类型别名中用了 `string`（如 `RadioProps.shape ?: string`）而非字面量联合——因为原 props 接受任意字符串且运行期按字符串比较，收紧成字面量联合会**在编译期拒绝既有合法调用**（例如 `shape=""` 这一「未设置」哨兵值），构成对外 API 破坏。这与「对外 API 零破坏」目标冲突，故采用 `string`。

### 2. 占位符扫描

计划中不存在「待定」「TODO」「后续实现」「类似任务 N」等占位表述。所有代码块均为可直接落盘的完整内容。

唯一的占位是任务 7 步骤 1 中供执行者回填的两格「原值」表格——这是**运行时才可知的环境值**（须由执行者从 `manifest.json` 读出），不是未决的设计内容。

### 3. 类型一致性

- `RADIO_GROUP_KEY` / `CHECKBOX_GROUP_KEY`：任务 1 步骤 1 定义，任务 1 步骤 4 与任务 2 步骤 1、步骤 4 使用，名称一致。
- `RadioGroupProvide` / `CheckboxGroupProvide`：定义于各 group 的 `type.uts`，item 通过 `import type` 反向引入，字段名（`modelValue`/`shape`/`disabled`/`activeColor`/`inactiveColor`/`size`/`placement`/`labelSize`/`labelColor`/`labelDisabled`/`iconColor`/`iconSize`/`iconPlacement`/`borderBottom`）与 group `provide` 处逐字对应。
- `select`（radio group）与 `toggle`（checkbox group）：名称不同是**有意区分**——radio 传单值 `RadioValue`，checkbox 传 `(string, boolean)`。任务 1 步骤 4 调用 `group!.select(props.name)`，任务 2 步骤 4 调用 `group!.toggle(props.name!.toString(), targetChecked)`，与各自 group 的签名匹配。
- `pick()`：任务 1 与任务 2 各自定义一份（组件作用域，不冲突），签名 `(any | null, any | null, string) : string` 一致。
- `toNum`（switch）/ `toNumber`（rate、picker）：**命名不一致是刻意的**——rate 与 picker 原本已有 `toNumber`，沿用可减少 diff；switch 原本没有，取名 `toNum` 以免与其它工具名混淆。三者互不 import，不构成冲突。
- `PickerChangeEvent` / `PickerConfirmEvent`：字段名与任务 6 步骤 5 中三处 `emit` 的字面量键逐字对应（原有键）。

### 4. 需要在实施中留意的两处语义收紧

| 位置 | 收紧点 | 如判断有风险的回退方式 |
| :--- | :--- | :--- |
| 任务 3 `switchStyle` | `size='25px'` 从「进入尺寸分支」变为「不进入」 | 改回 `props.size.toString() != '25'` |
| 任务 4 `iconPaddingStyle` | `gutter='4px'` 从 `parseInt('4px')=4` 变为 `parseFloat` 同为 4，无差异 | 无需回退 |

---

## 执行顺序与依赖

任务 1 → 2 → 3 → 4 → 5 → 6 基本线性，但 3、4、5、6 **互相独立**，任务 1 完成后可以并行（见 superpowers:dispatching-parallel-agents）。

**但不要并行构建**：HBuilderX CLI 会争用 `unpackage/` 目录。并行只适用于编辑，构建必须串行。

任务 7 必须在全部编辑完成后执行。

总计 7 次构建 × 约 3 分 03 秒 ≈ **22 分钟**纯构建时间（任务 7 两次），加上编辑时间。
