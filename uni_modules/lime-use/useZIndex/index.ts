// @ts-nocheck
export type * from './types'
import type { UseZIndexReturn } from './types'
// #ifndef UNI-APP-X
import { ref } from '@/uni_modules/lime-shared/vue';
// #endif

// 初始的 z-index 值（固定层级从 900 开始，最高 990，保留 999 给官方）
const initialZIndex = 998

// 当前使用的 z-index 值
let currentZIndex = 0

/**
 * z-index 管理组合式函数
 * @returns 返回包含 zIndex 响应式引用、increase 方法、decrease 方法和 adjustSystemDialogZIndex 方法的对象
 */
export function useZIndex() : UseZIndexReturn {
	// 如果当前 z-index 未初始化，则使用初始值
	if (currentZIndex == 0) {
		currentZIndex = initialZIndex
	}
	// 创建响应式的 z-index 引用
	const zIndex = ref<number>(currentZIndex)

	// 增加 z-index 值的方法
	const increase = () => {
		zIndex.value = currentZIndex + 1
		currentZIndex = currentZIndex + 1
	}

	// 减少 z-index 值的方法
	const decrease = () => {
		if (currentZIndex > initialZIndex) {
			zIndex.value = currentZIndex - 1
			currentZIndex = currentZIndex - 1
		}
	}
	
	// 调整系统对话框 z-index 的方法
	const adjustSystemDialogZIndex = () => {
		// 查找系统对话框节点
		// #ifdef WEB
		if (typeof document !== 'undefined') {
			const systemDialog_1 = document.querySelector('uni-page[data-page="uni:uniModal"]'); // uniappx web
			const systemDialog_2 = document.querySelector('uni-modal'); // uniapp web
			if (systemDialog_1 || systemDialog_2) {
				// 设置系统对话框的 z-index 为当前 z-index + 1
				if(systemDialog_1) systemDialog_1.style.zIndex = (zIndex.value + 1).toString();
				if(systemDialog_2) systemDialog_2.style.zIndex = (zIndex.value + 1).toString();
			}
		}
		// #endif
	}

	// 返回 z-index 引用、增加方法、减少方法和调整系统对话框 z-index 方法
	return {
		zIndex,
		increase,
		decrease,
		adjustSystemDialogZIndex
	}
}
