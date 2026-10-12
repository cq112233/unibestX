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
