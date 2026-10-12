// @ts-nocheck
// #ifndef UNI-APP-X
import { onHide, onShow } from '@dcloudio/uni-app'
import {
	computed,
	type ComputedRef,
	type MaybeRefOrGetter,
	onBeforeUnmount,
	onMounted,
	ref,
	toValue,
	watch,
} from '@/uni_modules/lime-shared/vue';
// #endif

import { getCurrentPath } from '../shared/getCurrentPath'

export type UseCurrentPageLockReturn = {
	isLocked : ComputedRef<boolean>
}


const globalScrollLockCounts = ref(0)

/**
 * 用于web端全局自动设置/移除阻止滚动的样式
 */
// #ifdef WEB
watch(globalScrollLockCounts, (count) => {
  if (count > 0) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
// #endif

const pageScrollLockCounts = new Map<string, number>()

/**
 * 滚动锁定组合式函数
 * 用于根据组件可见性自动管理页面滚动锁定状态
 * @param visible - 组件可见性（响应式引用或 getter）
 * @param lockScroll - 是否启用滚动锁定，默认为 true
 * @returns void
 */
export function useLockScroll(
  visible: MaybeRefOrGetter<boolean>,
  lockScroll = true,
): void {
	if (!lockScroll) return

	const currentPath = getCurrentPath()
	if (!pageScrollLockCounts.has(currentPath)) {
		pageScrollLockCounts.set(currentPath, 0)
	}

	const isVisible = computed(() => toValue(visible))

	let locked = false

	const lock = () => {
		if (!locked) {
			locked = true
			globalScrollLockCounts.value++
			pageScrollLockCounts.set(currentPath, (pageScrollLockCounts.get(currentPath) || 0) + 1)
		}
	}

	const unlock = () => {
		if (locked) {
			locked = false
			globalScrollLockCounts.value--
			pageScrollLockCounts.set(currentPath, (pageScrollLockCounts.get(currentPath) || 0) - 1)
		}
	}

	onMounted(() => {
		if (isVisible.value) {
			lock()
		}
	})

	onBeforeUnmount(() => {
		if (isVisible.value) {
			unlock()
		}
	})

	onShow(() => {
		if (isVisible.value) {
			lock()
		}
	})

	onHide(() => {
		if (isVisible.value) {
			unlock()
		}
	})

	watch(
		isVisible,
		(visible : boolean) => {
			if (visible) {
				lock()
			} else {
				unlock()
			}
		},
		{
			// 使用同步，避免 visible 为 false 且组件销毁时不执行 watch 回调，
			// 并因 visible 为 false，导致 onBeforeUnmount 中不能执行 unlock。
			flush: 'sync',
		},
	)
}

/**
 * 页面滚动锁定状态判断组合式函数
 * 用于小程序端判断 page-meta 是否应加上溢出隐藏
 * @returns 返回包含 isLocked 计算属性的对象
 */
export function useIsPageScrollLocked() : UseCurrentPageLockReturn {
	const currentPath = getCurrentPath()

	if (!pageScrollLockCounts.has(currentPath)) {
		pageScrollLockCounts.set(currentPath, 0)
	}

	const isLocked = computed(() => {
		globalScrollLockCounts.value
		const count = pageScrollLockCounts.get(currentPath) || 0
		// #ifdef MP
		return count > 0
		// #endif
		// #ifndef MP
		return false
		// #endif
	})

	return {
		isLocked,
	}
}