// @ts-nocheck

// ============================================
// useTimeout Hook - 延时执行回调函数
// ============================================

// #ifndef UNI-APP-X
import { toValue, shallowRef, shallowReadonly, onUnmounted } from '@/uni_modules/lime-shared/vue';
import type { MaybeRefOrGetter, ShallowRef, ShallowReadonly } from '@/uni_modules/lime-shared/vue';
// #endif

// #ifdef UNI-APP-X
import type { MaybeRefOrGetter } from '../shared/types';
// type ShallowReadonly<T> = T//ShallowRef<T>//安卓无法实现
type ShallowRef<T> = Ref<T>
// #endif

/**
 * useTimeout 配置选项
 * @property immediate - 是否组件挂载后立即启动定时器，默认为 false
 * @property immediateCallback - 启动定时器时是否立即执行一次回调，默认为 false
 */
export type UseTimeoutOptions = {
	immediate?: boolean
	immediateCallback?: boolean
}

/**
 * useTimeout 返回值
 * @property isPending - 只读的定时器状态，true 表示定时器正在运行
 * @property start - 启动定时器
 * @property stop - 停止定时器
 */
// 优化点：直接使用 ShallowRef，避免依赖全局 Ref 类型，且与内部实现一致
export type UseTimeoutReturn<CallbackFn extends () => void> = {
	// isPending: ShallowReadonly<ShallowRef<boolean>>
	isPending: ShallowRef<boolean>
	start: () => void
	stop: () => void
}

/**
 * 延时执行 Hook
 * 用于在指定延迟后执行回调函数（一次性）
 * 
 * @param cb - 定时器到期时执行的回调函数
 * @param interval - 延迟时间（毫秒），支持响应式引用或 getter 函数
 * @param options - 配置选项
 * @returns 包含状态和控制方法的对象
 * 
 * @example
 * const { isPending, start, stop } = useTimeout(() => {
 *   console.log('延迟执行了！')
 * }, 1000)
 * 
 * start() // 启动
 * stop()  // 停止
 */
export function useTimeout<CallbackFn extends () => void>(
	cb: CallbackFn,
	interval: MaybeRefOrGetter<number>,
	options: UseTimeoutOptions = {},
): UseTimeoutReturn<CallbackFn> {
	const { 
		immediate = false, 
		immediateCallback = false 
	} = options

	const isPending = shallowRef(false)
	
	let timer: number | null = null

	const clear = () => {
		if (timer !== null) {
			clearTimeout(timer!)
			timer = null
		}
	}

	const stop = () => {
		isPending.value = false
		clear()
	}

	const start = () => {
		// 如果需要立即执行回调
		if (immediateCallback) {
			cb()
		}
		
		clear()
		isPending.value = true
		
		// 获取具体的延迟数值
		const timeoutValue = toValue<number>(interval)
		
		// 防御性编程：防止负数或非数字导致意外行为
		if (timeoutValue < 0) {
			console.warn('[useTimeout] Interval value cannot be negative.')
			isPending.value = false
			return
		}

		timer = setTimeout(() => {
			isPending.value = false
			timer = null
			cb()
		}, timeoutValue)
	}

	if (immediate) {
		start()
	}

	onUnmounted(() => {
		stop()
	})

	return {
		isPending: shallowReadonly(isPending),
		start,
		stop,
	} as UseTimeoutReturn<CallbackFn>
}