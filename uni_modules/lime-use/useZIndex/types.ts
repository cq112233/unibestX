// @ts-nocheck
/**
 * useZIndex 返回值类型
 */
export type UseZIndexReturn = {
	// z-index 响应式引用
	zIndex : Ref<number>
	// 增加 z-index 值的方法
	increase : () => void
	// 减少 z-index 值的方法
	decrease : () => void
	// 调整系统对话框 z-index 的方法
	adjustSystemDialogZIndex : () => void
}