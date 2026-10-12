// @ts-nocheck
export type * from './types'
import type { UsePopupStackReturn, UsePageBackPressReturn } from './types'
import { uniqid } from '@/uni_modules/lime-shared/uniqid'; //'../shared/identity'
import { getCurrentPath } from '../shared/getCurrentPath'
// #ifndef UNI-APP-X
import {
	computed,
	onMounted,
	onUnmounted,
	ref,
	toValue,
	watch,
	type MaybeRefOrGetter,
} from '@/uni_modules/lime-shared/vue';
// #endif
// #ifdef UNI-APP-X
import type { MaybeRefOrGetter } from '../shared/types';
// #endif

// 全局弹窗堆叠栈
const popupStack = ref<string[]>([])

// 按页面分组的弹窗堆叠栈
const pagesPopupStack = new Map<string, string[]>()

// 辅助 ref 用于触发 Map 变化的响应式更新
const popupStackVersion = ref(0)

/**
 * 弹窗堆栈管理组合式函数
 * 用于注册弹窗到全局堆栈，判断当前弹窗是否为顶层
 * @param visible - 弹窗是否可见（响应式引用或 getter）
 * @param disabled - 是否禁用（响应式引用或 getter）
 * @param callback - 隐藏回调函数
 * @returns 返回包含 isTopLayer 计算属性的对象
 */
export function usePopupStack(
	visible : MaybeRefOrGetter<boolean>,
	disabled : MaybeRefOrGetter<boolean> = false,
	callback : (() => void)|null=null) : UsePopupStackReturn {
	const uid = uniqid()

	// 是否禁用的计算属性
	const isDisabled = computed(() => toValue(disabled))

	// 当前页面路径
	const currentPath = getCurrentPath()
	if (currentPath !== '' && !pagesPopupStack.has(currentPath)) {
		pagesPopupStack.set(currentPath, [])
	}

	// 将弹窗添加到堆叠栈
	const add = () => {
		if (!popupStack.value.includes(uid)) {
			popupStack.value.push(uid)
		}

		if (currentPath == '') return
		const currentPathStack = pagesPopupStack.get(currentPath)
		if (currentPathStack != null && !currentPathStack.includes(uid)) {
			currentPathStack.push(uid)
			popupStackVersion.value++
		}
	}

	// 从堆叠栈中移除弹窗
	const remove = () => {
		const index = popupStack.value.indexOf(uid)
		if (index != -1) {
			popupStack.value.splice(index, 1)
		}

		if (currentPath == '') return
		const currentPathStack = pagesPopupStack.get(currentPath)
		if (currentPathStack != null) {
			const pIndex = currentPathStack.indexOf(uid)
			if (pIndex != -1) {
				currentPathStack.splice(pIndex, 1)
				popupStackVersion.value++
			}
		}
	}

	// 监听可见性变化，管理弹窗堆叠
	watch(
		():boolean => toValue(visible),
		(visible: boolean) => {
			if (isDisabled.value) return
			
			if (visible) {
				add()
			} else {
				remove()
			}
		},
		{
			immediate: true,
		},
	)

	// 隐藏弹窗回调
	const hidePopup = () => {
		if (!isDisabled.value && toValue(visible)) {
			callback?.()
		}
	}

	// 挂载时监听隐藏事件
	onMounted(() => {
		uni.$on(uid, hidePopup)
	})

	// 卸载时清理
	onUnmounted(() => {
		remove()
		uni.$off(uid, hidePopup)
	})

	// 当前弹窗是否为顶层弹窗
	const isTopLayer = computed(() => {
		// 依赖 popupStackVersion 以触发响应式更新
		popupStackVersion.value
		if (popupStack.value.length > 0) {
			return popupStack.value[popupStack.value.length - 1] == uid
		}
		return false
	})

	return {
		isTopLayer,
	}
}

/**
 * 页面返回键控制组合式函数
 * 用于在页面中控制返回键行为，配合弹窗使用
 * @returns 返回包含 shouldStopBack 计算属性和 hidePopup 方法的对象
 */
export function usePageBackPress() : UsePageBackPressReturn {
	const currentPath = getCurrentPath()

	// 是否应该阻止返回（当前页面有打开的弹窗）
	const shouldStopBack = computed(() => {
		// 依赖 popupStackVersion 以触发响应式更新
		popupStackVersion.value
		if (currentPath == '') return false
		const currentPathStack = pagesPopupStack.get(currentPath)
		return currentPathStack ? currentPathStack.length > 0 : false
	})

	// 隐藏当前页面顶层弹窗
	const hidePopup = () => {
		if (currentPath == '') return
		const currentPathStack = pagesPopupStack.get(currentPath)
		if (currentPathStack != null && currentPathStack.length > 0) {
			const uid = currentPathStack[currentPathStack.length - 1]
			if (uid != '') {
				uni.$emit(uid)
			}
		}
	}

	return {
		shouldStopBack,
		hidePopup,
	}
}
