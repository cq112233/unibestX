// @ts-nocheck
// #ifndef UNI-APP-X
import { ref, shallowRef, computed, Ref, ShallowRef, ComputedRef, onUnmounted, onMounted, onScopeDispose, nextTick } from '@/uni_modules/lime-shared/vue'
import type { ComponentPublicInstance } from '@/uni_modules/lime-shared/vue'
// #endif

import { createCanvasContextAsync, type LimeCanvasInstance } from '@/uni_modules/lime-shared/createCanvasContextAsync'
export type { LimeCanvasInstance } from '@/uni_modules/lime-shared/createCanvasContextAsync'

/**
 * useCanvas返回值类型
 */
export type UseCanvastReturn = {
	/**
	 * 加载
	 */
	load : () => void
	/**
	 * 销毁Canvas上下文
	 */
	destroy : () => void;
	/**
	 * Canvas是否准备就绪
	 */
	isReady : ComputedRef<boolean>;
	/**
	 * Canvas是否正在加载
	 */
	isLoading : Ref<boolean>;
	/**
	 * Canvas上下文对象
	 */
	canvas : Ref<LimeCanvasInstance | null>;
}
/**
 * 创建并管理Canvas上下文的Composition API
 * 这个hook会自动处理uni-app不同平台的Canvas上下文创建
 * 
 * @param canvasId - Canvas元素的id选择器，如"myCanvas"
 * @param component - Vue组件实例，用于查询组件内的Canvas元素
 * @returns 响应式的Canvas上下文对象，包含context、canvasElement和renderingContext
 * 
 */



export type UseCanvastOptions = {
	/**
	 * 是否立即初始化
	 * @default false
	 */
	immediate ?: boolean;

	/**
	 * 是否自动清理
	 * @default true
	 */
	autoCleanup ?: boolean;
}

export function useCanvas(
	canvasId : string,
	component : ComponentPublicInstance,
	options : UseCanvastOptions = {} as UseCanvastOptions
) : UseCanvastReturn {
	const { immediate = false, autoCleanup = true } = options

	const isLoading = ref(false) // 初始为false，表示未开始
	const canvas = shallowRef<LimeCanvasInstance | null>(null)
	const isReady = computed(() => !isLoading.value && canvas.value != null)

	// 初始化方法
	const load = () => {
		// 防止重复初始化
		if (isLoading.value) {
			return
		}

		// 如果已存在，直接返回
		if (canvas.value != null) {
			return
		}

		isLoading.value = true
		createCanvasContextAsync(canvasId, component).then(result => {
			canvas.value = result
			isLoading.value = false
		}).catch(error => {
			console.error('Canvas上下文初始化失败:', error)
			canvas.value = null
		}).finally(()=> {
			isLoading.value = false
		}) 
	}

	// 清理方法
	const destroy = () => {
		canvas.value = null
	}

	// 自动初始化
	onMounted(() => {
		nextTick(() => {
			if (!immediate) return
			load()
		})
	})

	// 自动清理
	if (autoCleanup) {
		onUnmounted(destroy)
		onScopeDispose(destroy)
	}

	return {
		load,
		destroy,
		isReady,
		isLoading,
		canvas
	} as UseCanvastReturn
}