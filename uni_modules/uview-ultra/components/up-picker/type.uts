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
	/** 各列的数据：外层是「列」，内层是每列的选项。与重构前 PropType<Array<Array<any>>> 一致 */
	columns ?: Array<Array<any>>,
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
