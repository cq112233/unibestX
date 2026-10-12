// @ts-nocheck
// 条件编译：排除UNI-APP-X环境
// #ifndef UNI-APP-X
// 导入Vue响应式API和计算属性
import { toValue, unref, onMounted, onUnmounted } from '@/uni_modules/lime-shared/vue';
// 导入类型定义
import type { MaybeRefOrGetter } from '@/uni_modules/lime-shared/vue';
// #endif

// #ifdef UNI-APP-X
// 导入类型定义
import type { MaybeRefOrGetter } from '../shared/types';
// #endif

import { getCurrentPage } from '../shared/getCurrentPage'
import { getCurrentPath } from '../shared/getCurrentPath'

// useClickAway返回类型
export type UseClickAwayReturn = {
	/**
	 * 停止监听点击外部区域
	 */
	stop: () => void
}

// 全局点击事件监听器管理
// #ifdef UNI-APP-X && APP
const clickAwayListeners = new Map<string, Set<(event: UniEvent) => void>>()
const pageEventListeners = new Map<string, UniCallbackWrapper>()
// #endif

// #ifdef WEB
const clickAwayListenersWeb = new Set<(event: UniEvent) => void>()
// #endif

// #ifndef UNI-APP-X && APP || WEB
// 其他平台的监听器管理
const clickAwayListenersOther = new Set<(event: UniEvent) => void>()
// #endif


/**
 * 判断一个元素是否包含另一个元素
 * @param parent 父元素
 * @param child 子元素
 * @returns 如果父元素包含子元素返回 true，否则返回 false
 */
function isElementContains(parent : UniElement|null, child : UniElement|null) : boolean {
	if (parent == null || child == null) return false;
	// 确保child是UniElement类型
	const childElement = child as UniElement;

	// 1. 是元素本身
	if (parent == childElement) return true;

	// 2. 尝试使用标准 contains 方法
	// #ifdef WEB
	// if ('contains' in parent && typeof parent.contains == 'function' && !(childElement instanceof Node)) {
	// 	return parent.contains(childElement);
	// }
	 if (
	    parent instanceof Node &&
	    childElement instanceof Node &&
	    typeof parent.contains === 'function'
	  ) {
	    return parent.contains(childElement);
	  }
	// #endif
	
	// 3. 向上查找最多5层级
	let current : UniElement | null = childElement;
	let level = 0;
	const maxLevel = 5;
	
	while (current != null && level < maxLevel) {
		current = current.parentElement;
		if (current == parent) return true;
		level++;
	}

	return false;
}

/**
 * 处理点击外部区域的事件
 * @param event 点击事件对象
 * @description 手动触发点击外部区域的事件处理逻辑，适用于不支持自动绑定的平台
 */
export const handleClickAway = (event: UniEvent) => {
	// #ifdef UNI-APP-X && APP
	const currentPath = getCurrentPath()
	if (currentPath == '') return
	
	const listeners = clickAwayListeners.get(currentPath)
	if (listeners == null) return
	
	listeners.forEach((callback) => {
		callback(event)
	})
	// #endif
	
	// #ifdef WEB
	clickAwayListenersWeb.forEach((callback) => {
		callback(event)
	})
	// #endif
	
	// #ifndef UNI-APP-X && APP || WEB
	// 其他平台的处理逻辑
	clickAwayListenersOther.forEach((callback) => {
		callback(event)
	})
	// #endif
}

// 为页面注册全局点击事件监听器
function registerPageEventListener(pagePath?: string) {
	// #ifdef UNI-APP-X && APP
	if (pageEventListeners.has(pagePath!)) return
	
	const page = getCurrentPage()
	if (page?.vm?.$el != null) {
		// 直接存储addEventListener的返回值
		const callbackWrapper = page!.vm!.$el!.addEventListener('click', handleClickAway)
		pageEventListeners.set(pagePath!, callbackWrapper)
	}
	// #endif
	
	// #ifdef WEB
	window.addEventListener('click', handleClickAway)
	// #endif
}

// 为页面移除全局点击事件监听器
function unregisterPageEventListener(pagePath?: string) {
	// #ifdef UNI-APP-X && APP
	if (!pageEventListeners.has(pagePath!)) return
	
	const listeners = clickAwayListeners.get(pagePath!)
	if (listeners != null && listeners.size == 0) {
		const page = getCurrentPage()
		if (page?.vm?.$el != null) {
			const listenerWrapper = pageEventListeners.get(pagePath!)
			// UniApp X App端需要使用UniCallbackWrapper
			if (listenerWrapper != null) {
				page!.vm!.$el!.removeEventListener('click', listenerWrapper)
			}
			pageEventListeners.delete(pagePath!)
		}
	}
	// #endif
	
	// #ifdef WEB
	window.removeEventListener('click', handleClickAway)
	// #endif
}

/**
 * 监听点击外部区域的事件
 * @param target 目标元素或元素数组，可以是 ref、reactive 或普通值
 * @param listener 点击外部区域时触发的回调函数
 * @returns 返回一个包含 stop 方法的对象，用于手动停止监听
 */
export function useClickAway(target : MaybeRefOrGetter<UniElement | null>, listener : (event : UniEvent) => void) : UseClickAwayReturn {
	// 生成点击事件处理函数
	const onClick = (event : UniEvent) => {
		if (target == null) return
		
		const el = toValue<UniElement>(target)
		const targets = (Array.isArray(el) ? el : [el]) as UniElement[];
		const isClickAway = targets.every((item) => {
			const element = unref(item);
			if (element == null) return false
			let el = element
			// #ifdef WEB
			if(element.$el) {
				el = element.$el
			}
			// #endif
			return !isElementContains(el, event.target)
		});
		// #ifdef APP || WEB
		if (isClickAway) {
			listener(event);
		}
		// #endif
		// #ifndef APP || WEB
		listener(event);
		// #endif
	};

	// 添加监听器到全局管理
	const addListener = () => {
		// #ifdef UNI-APP-X && APP
		const path = getCurrentPath()
		if (path == '') return
		if (!clickAwayListeners.has(path)) {
			clickAwayListeners.set(path, new Set())
		}
		
		const listeners = clickAwayListeners.get(path)
		if (listeners != null) {
			listeners.add(onClick)
			// 为页面注册全局事件监听器
			registerPageEventListener(path)
		}
		// #endif
		
		// #ifdef WEB
		clickAwayListenersWeb.add(onClick)
		// 为Web端注册全局事件监听器
		registerPageEventListener()
		// #endif
		
		// #ifndef UNI-APP-X && APP || WEB
		// 其他平台的监听器管理
		clickAwayListenersOther.add(onClick)
		// #endif
	}

	// 从全局管理中移除监听器
	const removeListener = () => {
		// #ifdef UNI-APP-X && APP
		const path = getCurrentPath()
		if (path == '') return
		
		const listeners = clickAwayListeners.get(path)
		if (listeners != null) {
			listeners.delete(onClick)
			// 检查是否需要移除页面事件监听器
			unregisterPageEventListener(path)
		}
		// #endif
		
		// #ifdef WEB
		clickAwayListenersWeb.delete(onClick)
		// 检查是否需要移除Web端事件监听器
		unregisterPageEventListener()
		// #endif
		
		// #ifndef UNI-APP-X && APP || WEB
		// 其他平台的监听器管理
		clickAwayListenersOther.delete(onClick)
		// #endif
	}

	onMounted(() => {
		addListener()
	})

	onUnmounted(() => {
		removeListener()
	})

	return {
		stop: removeListener
	}

}