// @ts-nocheck
/**
 * usePopupStack 返回值类型
 */
export type UsePopupStackReturn = {
	// 当前弹窗是否为顶层弹窗
	isTopLayer: ComputedRef<boolean>
}

/**
 * usePageBackPress 返回值类型
 */
export type UsePageBackPressReturn = {
	// 是否应该阻止返回（当前页面有打开的弹窗）
	shouldStopBack: ComputedRef<boolean>
	// 隐藏当前页面顶层弹窗的方法
	hidePopup: () => void
}
