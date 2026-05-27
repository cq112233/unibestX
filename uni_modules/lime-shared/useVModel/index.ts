// @ts-nocheck
import {ref, watch, type Ref, ComputedRef } from '../vue'
type UseVModelOptions<T> = {
  value: ComputedRef<T> | (() => T)
  // 默认值
  defaultValue: T
  // 变化回调
  onChange?: (value: T) => void
  // 格式化函数（用于get时格式化返回值）
  onFormat?: (value: T) => T
  // 是否深度监听
  deep?: boolean
  // 是否立即触发监听
  immediate?: boolean
  // 事件名称
  eventName?: string
  // 属性名称
  propName?: string
}

export function useVModel<T>(options: UseVModelOptions<T>):Ref<T> {
	const { value, defaultValue, onChange, onFormat } = options
	const innerValue = ref<T>(value.value || defaultValue);
	
	watch(value, (newVal:T) => {
			innerValue.value = onFormat?.(newVal) ?? newVal
		},
		{ immediate: true }
	)
	watch(
		innerValue,
		(newVal: T) => {
			onChange?.(newVal)
		}
	)
	
	return innerValue
}