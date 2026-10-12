// @ts-nocheck
// #ifdef WEB
import { getWindowInfo } from '@/uni_modules/lime-shared/getWindowInfo'
// #endif

// #ifdef UNI-APP-X && APP
type MouseEvent = any
// #endif

/**
 * 鼠标事件处理回调类型
 */
export type MouseDownCallback = (event: UniTouchEvent) => void;

/**
 * useMouseDown 返回值类型
 */
export type UseMouseDownReturn = (event: MouseEvent) => void;

// #ifdef WEB
/**
 * 将 MouseEvent 转换为 TouchEvent
 * @param event 鼠标事件或触摸事件
 * @returns 转换后的触摸事件
 */
export function toTouchEvent(event: MouseEvent | UniTouchEvent) {
	
	if (!('touches' in event) || event.type.includes('mouse')) {
		const { windowTop } = getWindowInfo()
		let clientY = event.clientY //- windowTop
		// uniapp vue3 按下跟移动有差异
		// #ifndef UNI-APP-X
		if(event.type == 'mousedown'){
			clientY = clientY + windowTop
		}
		// #endif
		// #ifdef VUE2
		if(event.type == 'mousemove') {
			clientY = event.clientY //- windowTop
		} else {
			// clientY = event.clientY// - windowTop
		}
		// #endif
		const touches = [
			{
				clientX: event.clientX,
				clientY,
				pageY: event.pageY,
				pageX: event.pageX,
			},
		]
		;(event as any).changedTouches = touches
		;(event as any).touches = event.type === 'mouseup' ? [] : touches
	}
	return event as UniTouchEvent
}
// #endif

export function useMouseDown(
	startCallback: MouseDownCallback|null=null,
	moveCallback: MouseDownCallback|null=null,
	endCallback: MouseDownCallback|null=null): UseMouseDownReturn {
	
	return (event: MouseEvent) => {
		// #ifdef WEB
		if ('ontouchstart' in document) {
			return
		}
		startCallback?.(toTouchEvent(event))

		const moveHandler = (event: MouseEvent) => {
			event.preventDefault()
			moveCallback?.(toTouchEvent(event))
		}

		const upHandler = (event: MouseEvent) => {
			endCallback?.(toTouchEvent(event))
			document.removeEventListener('mousemove', moveHandler)
			document.removeEventListener('mouseup', upHandler)
		}

		document.addEventListener('mousemove', moveHandler)
		document.addEventListener('mouseup', upHandler)
		// #endif
	}
}
