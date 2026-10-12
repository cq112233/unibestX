// @ts-nocheck

// #ifdef APP-VUE
import { onPageScroll } from '@dcloudio/uni-app'
// #endif

// #ifndef APP-VUE
// #ifndef UNI-APP-X && APP
// #ifndef UNI-APP-X && WEB
import { getCurrentPage } from '../shared/getCurrentPage'
import { isDef } from '@/uni_modules/lime-shared/isDef';
import { isFunction } from '@/uni_modules/lime-shared/isFunction'
import { onBeforeUnmount } from '@/uni_modules/lime-shared/vue'

type Scroller = (event?: IPageScrollOption) => void

function onPageScroll(event ?: IPageScrollOption) {
	const { pageScroller = [] } = getCurrentPage() as { pageScroller : Scroller[] };
	pageScroller.forEach((scroller : Scroller) => {
		if (isFunction(scroller)) {
			// @ts-ignore
			scroller(event);
		}
	});
}
// #endif
// #endif
// #endif


// #ifndef UNI-APP-X && APP
// #ifndef UNI-APP-X && WEB
type OnPageScrollOptions = {
	/**
	 * 页面在垂直方向已滚动的距离（单位 px）
	 */
	scrollTop: number;
}
export type OnPageScroll = (options : OnPageScrollOptions) => void
// #endif
// #endif


/**
 * 页面滚动监听组合式函数
 * 用于监听页面滚动事件，兼容 APP-VUE、UNI-APP-X 和其他平台
 * @param handler - 滚动事件处理函数
 */
export function usePageScroll(handler : OnPageScroll) {

	// #ifdef APP-VUE
	onPageScroll(handler)
	// #endif

	// #ifdef UNI-APP-X && APP
	onPageScroll(handler)
	// #endif

	// #ifdef UNI-APP-X && WEB
	onPageScroll(handler)
	// #endif

	// #ifndef APP-VUE
	// #ifndef UNI-APP-X && APP
	// #ifndef UNI-APP-X && WEB

	// #ifndef WEB
	const page = getCurrentPage()
	if (!isDef(page)) return
	const { pageScroller = [] } = page;
	if (isFunction(page.onPageScrol) && page.onPageScroll !== onPageScroll) {
		pageScroller.push(page.onPageScroll.bind(page));
	}
	pageScroller.push(handler);
	page.pageScroller = pageScroller;
	page.onPageScroll = onPageScroll;
	// #endif

	// #ifdef WEB
	const onScroll = () => {
		const { scrollTop, scrollLeft } = document.documentElement
		handler({ scrollTop, scrollLeft })
	}
	window.addEventListener('scroll', onScroll);
	// #endif

	onBeforeUnmount(() => {
		// #ifndef WEB
		if (!isDef(page) || !isDef(page.pageScroller)) {
			return;
		}
		const index = pageScroller.findIndex((v : Scroller) => v === handler);
		if (index > -1) {
			page.pageScroller.splice(index, 1);
		}
		// #endif

		// #ifdef WEB
		window.removeEventListener('scroll', onScroll);
		// #endif
		handler = null as any;
	})

	// #endif
	// #endif
	// #endif
}
