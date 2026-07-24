
	import { propsList } from './props.uts';
	import { mpMixin } from '../../libs/mixin/mpMixin.uts';
	import { mixin } from '../../libs/mixin/mixin.uts';
	import { addUnit, addStyle, deepMerge, sleep, getWindowInfo } from '../../libs/function/index.uts';
	/**
	 * List 列表
	 * @description 该组件为高性能列表组件
	 * @tutorial https://uview-plus.jiangruyi.com/components/list.html
	 * @property {Boolean}			showScrollbar		控制是否出现滚动条，仅nvue有效 （默认 false ）
	 * @property {String ｜ Number}	lowerThreshold		距底部多少时触发scrolltolower事件 （默认 50 ）
	 * @property {String ｜ Number}	upperThreshold		距顶部多少时触发scrolltoupper事件，非nvue有效 （默认 0 ）
	 * @property {String ｜ Number}	scrollTop			设置竖向滚动条位置（默认 0 ）
	 * @property {String ｜ Number}	offsetAccuracy		控制 onscroll 事件触发的频率，仅nvue有效（默认 10 ）
	 * @property {Boolean}			enableFlex			启用 flexbox 布局。开启后，当前节点声明了display: flex就会成为flex container，并作用于其孩子节点，仅微信小程序有效（默认 false ）
	 * @property {Boolean}			pagingEnabled		是否按分页模式显示List，（默认 false ）
	 * @property {Boolean}			scrollable			是否允许List滚动（默认 true ）
	 * @property {String}			scrollIntoView		值应为某子元素id（id不能以数字开头）
	 * @property {Boolean}			scrollWithAnimation	在设置滚动条位置时使用动画过渡 （默认 false ）
	 * @property {Boolean}			enableBackToTop		iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效 （默认 false ）
	 * @property {String ｜ Number}	height				列表的高度 （默认 0 ）
	 * @property {String ｜ Number}	width				列表宽度 （默认 0 ）
	 * @property {String ｜ Number}	preLoadScreen		列表前后预渲染的屏数，1代表一个屏幕的高度，1.5代表1个半屏幕高度  （默认 1 ）
	 * @property {Object}			customStyle			定义需要用到的外部样式
	 *
	 * @example <up-list @scrolltolower="scrolltolower"></up-list>
	 */
	const __sfc__ = defineComponent({
		name: 'up-list',
		mixins: [mpMixin, mixin, propsList],
		watch: {
			scrollIntoView(n) {
				this.scrollIntoViewById(n)
			}
		},
		data() {
			return {
				// 记录内部滚动的距离
				innerScrollTop: 0,
				// vue下，scroll-view在上拉加载时的偏移值
				offset: 0,
				sys: getWindowInfo() as GetWindowInfoResult
			}
		},
		computed: {
			listStyle() {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-list/up-list.uvue", 79, 11),};
				if (this.width != 0) style['width'] = addUnit(this.width)
				if (this.height != 0) style['height'] = addUnit(this.height)
				// 如果没有定义列表高度，则默认使用屏幕高度
				if (style['height'] == null) style['height'] = addUnit(this.sys.windowHeight, 'px')
				return deepMerge(style, addStyle(this.customStyle))
			}
		},
		created() {
			// this.refs = []
		// 	this.children = []
		},
		mounted() {},
		emits: ["scroll", "scrolltolower", "scroll-to-lower", "scrolltoupper", "scroll-to-upper",
			"refresherpulling", "refresherrefresh", "refresherrestore", "refresherabort"],
		methods: {
			updateOffsetFromChild(top: number) {
				this.offset = top
			},
			onScroll(e: UniScrollEvent) {
				let scrollTop = 0
				scrollTop = e.detail.scrollTop
				this.innerScrollTop = scrollTop
				this.$emit('scroll', scrollTop)
			},
			scrollIntoViewById(id: string) {
			},
			// 滚动到底部触发事件
			scrolltolower(e: UniScrollToLowerEvent) {
				sleep(30).then(() => {
					this.$emit('scrolltolower')
					// 支付宝小程序奇怪无法触发scrolltolowerhttps://github.com/ijry/uview-plus/issues/422
					this.$emit('scroll-to-lower')
				})
			},
			// 滚动到底部时触发，非nvue有效
			scrolltoupper(e: UniScrollToUpperEvent) {
				sleep(30).then(() => {
					this.$emit('scrolltoupper')
					this.$emit('scroll-to-upper')
					// 这一句很重要，能绝对保证在性功能障碍的webview，滚动条到顶时，取消偏移值，让页面置顶
					this.offset = 0
				})
			},
			refresherpulling(e: UniRefresherEvent) {
				this.$emit('refresherpulling', e)
			},
			refresherrefresh(e: UniRefresherEvent) {
				this.$emit('refresherrefresh', e)
			},
			refresherrestore(e: UniRefresherEvent) {
				this.$emit('refresherrestore', e)
			},
			refresherabort(e: UniRefresherEvent) {
				this.$emit('refresherabort', e)
			}
		},
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpListUpListRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("scroll-view", _uM({
    class: "up-list",
    direction: "vertical",
    "custom-nested-scroll": _ctx.customNestedScroll,
    "scroll-into-view": _ctx.scrollIntoView,
    style: _nS([_ctx.listStyle]),
    "scroll-y": _ctx.scrollable,
    "scroll-top": parseFloat(_ctx.scrollTop.toString()),
    "lower-threshold": parseFloat(_ctx.lowerThreshold.toString()),
    "upper-threshold": parseFloat(_ctx.upperThreshold.toString()),
    "show-scrollbar": _ctx.showScrollbar,
    "scroll-with-animation": _ctx.scrollWithAnimation,
    onScroll: _ctx.onScroll,
    onScrolltolower: _ctx.scrolltolower,
    onScrolltoupper: _ctx.scrolltoupper,
    "refresher-enabled": _ctx.refresherEnabled,
    "refresher-threshold": _ctx.refresherThreshold,
    "refresher-default-style": _ctx.refresherDefaultStyle,
    "refresher-background": _ctx.refresherBackground,
    "refresher-triggered": _ctx.refresherTriggered,
    onRefresherpulling: _ctx.refresherpulling,
    onRefresherrefresh: _ctx.refresherrefresh,
    onRefresherrestore: _ctx.refresherrestore,
    onRefresherabort: _ctx.refresherabort
  }), [
    _cE("view", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["custom-nested-scroll", "scroll-into-view", "scroll-y", "scroll-top", "lower-threshold", "upper-threshold", "show-scrollbar", "scroll-with-animation", "onScroll", "onScrolltolower", "onScrolltoupper", "refresher-enabled", "refresher-threshold", "refresher-default-style", "refresher-background", "refresher-triggered", "onRefresherpulling", "onRefresherrefresh", "onRefresherrestore", "onRefresherabort"])
}
export type UpListComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpListUpListStyles = [_uM([["up-list", _pS(_uM([["flexDirection", "column"]]))]])]
