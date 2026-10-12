// @ts-nocheck
export * from './presets'
export type * from './types'
import type { UseTransitionOptions } from './types'
import type { MaybeRefOrGetter } from '../shared/types';
import { promiseTimeout } from '../shared/promiseTimeout'
import { transition } from './base'
// 条件编译：排除UNI-APP-X环境
// #ifndef UNI-APP-X
// 导入Vue响应式API和计算属性
import { shallowRef, computed, toValue, watch } from '@/uni_modules/lime-shared/vue';
// 导入类型定义
import type { Ref, ComputedRef } from '@/uni_modules/lime-shared/vue';
// #endif

/**
 * 创建一个过渡效果的计算属性，当源值变化时，会平滑过渡到新值。
 *
 * @param source 源值，可以是普通值、ref 或 getter 函数
 * @param options 过渡选项
 * @returns 带有过渡效果的计算属性
 */
export function useTransition<T>(
	source: MaybeRefOrGetter<T>,
	options: UseTransitionOptions<T> = {}): ComputedRef<T> {
	let currentId = 0	
	/**
	 * 获取源值的当前值
	 * 如果源值是数组且没有指定插值函数，则会递归获取数组中每个元素的当前值
	 */
	const sourceVal = (): T => {
		const v = toValue<T>(source) 

		return options.interpolation == null && Array.isArray(v)
			? (v as any[]).map((item) => toValue(item)) as T
			: v as T
	}	
	const outputRef = shallowRef(sourceVal())
	
	watch(sourceVal, (to: T) => {
		const disabled = toValue<boolean>(options.disabled ?? false)
		if (disabled == true) {
			return
		}

		const id = ++currentId

		/**
		 * 处理过渡效果的异步函数
		 * 1. 检查是否需要延迟
		 * 2. 检查过渡是否已被取消
		 * 3. 调用开始回调
		 * 4. 执行过渡动画
		 * 5. 调用结束回调
		 */
		const handleTransition = async () => {
			if (options.delay != null) {
				await promiseTimeout(toValue(options.delay))
			}
	
			if (id != currentId) {
				return
			}
	
			if (options.onStarted != null && typeof options.onStarted == 'function') {
				options.onStarted()
			}
			// #ifdef UNI-APP-X && APP
			let newOptions:UseTransitionOptions<T> = {} as UseTransitionOptions<T>
			
			if(options != null) {
				for (let key in options){
					newOptions[key] = options[key]
				}
			}
			// #endif
			// #ifndef UNI-APP-X && APP
			let newOptions:UseTransitionOptions<T> = {...options}
			// #endif
			newOptions.abort = (): boolean => id != currentId || (options.abort != null && typeof options.abort == 'function' && options.abort!())
			
			await transition(outputRef, outputRef.value, to, newOptions!)
	
			if (options.onFinished != null && typeof options.onFinished == 'function') {
				options.onFinished()
			}
		}
	
		handleTransition()
	}, { deep: true })
	
	return computed(():T => {
		const disabled = toValue(options.disabled ?? false) as boolean
		return disabled == true ? sourceVal() : outputRef.value
	})
}