import { ref, computed, provide } from 'vue'
import { addUnit, addStyle, deepMerge, sleep, getWindowInfo } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-list',
name: 'up-list',
  props: {
	showScrollbar: {
		type: Boolean,
		default: false
	},
	lowerThreshold: {
		type: [String, Number],
		default: 50
	},
	upperThreshold: {
		type: [String, Number],
		default: 0
	},
	scrollTop: {
		type: [String, Number],
		default: 0
	},
	scrollable: {
		type: Boolean,
		default: true
	},
	scrollIntoView: {
		type: String,
		default: ''
	},
	scrollWithAnimation: {
		type: Boolean,
		default: false
	},
	height: {
		type: [String, Number],
		default: 0
	},
	width: {
		type: [String, Number],
		default: 0
	},
	refresherEnabled: {
		type: Boolean,
		default: false
	},
	refresherThreshold: {
		type: Number,
		default: 45
	},
	refresherDefaultStyle: {
		type: String,
		default: 'black'
	},
	refresherBackground: {
		type: String,
		default: '#FFF'
	},
	refresherTriggered: {
		type: Boolean,
		default: false
	},
	customStyle: {
		type: Object,
		default: () => ({})
	}
},
  emits: [
	"scroll", "scrolltolower", "scroll-to-lower", "scrolltoupper", "scroll-to-upper",
	"refresherpulling", "refresherrefresh", "refresherrestore", "refresherabort"
],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const innerScrollTop = ref<number>(0)
const offset = ref<number>(0)
const sys = getWindowInfo()

const listStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-list/up-list.uvue", 112, 8), } as UTSJSONObject
	if (props.width != 0) style['width'] = addUnit(props.width)
	if (props.height != 0) style['height'] = addUnit(props.height)
	if (style['height'] == null) style['height'] = addUnit(sys.windowHeight, 'px')
	return deepMerge(style, addStyle(props.customStyle))
})

provide('upListContext', {
	innerScrollTop,
	updateOffsetFromChild: (top: number) => {
		offset.value = top
	}
})

function onScroll(e: UniScrollEvent) {
	let top = e.detail.scrollTop
	innerScrollTop.value = top
	emit('scroll', top)
}

function scrolltolower(e: UniScrollToLowerEvent) {
	sleep(30).then(() => {
		emit('scrolltolower')
		emit('scroll-to-lower')
	})
}

function scrolltoupper(e: UniScrollToUpperEvent) {
	sleep(30).then(() => {
		emit('scrolltoupper')
		emit('scroll-to-upper')
		offset.value = 0
	})
}

function refresherpulling(e: UniRefresherEvent) {
	emit('refresherpulling', e)
}

function refresherrefresh(e: UniRefresherEvent) {
	emit('refresherrefresh', e)
}

function refresherrestore(e: UniRefresherEvent) {
	emit('refresherrestore', e)
}

function refresherabort(e: UniRefresherEvent) {
	emit('refresherabort', e)
}

return (): any | null => {

  return _cE("scroll-view", _uM({
    class: "up-list",
    direction: "vertical",
    "scroll-into-view": _ctx.scrollIntoView,
    style: _nS([listStyle.value]),
    "scroll-top": parseFloat(_ctx.scrollTop.toString()),
    "lower-threshold": parseFloat(_ctx.lowerThreshold.toString()),
    "upper-threshold": parseFloat(_ctx.upperThreshold.toString()),
    "show-scrollbar": _ctx.showScrollbar,
    "scroll-with-animation": _ctx.scrollWithAnimation,
    onScroll: onScroll,
    onScrolltolower: scrolltolower,
    onScrolltoupper: scrolltoupper,
    "refresher-enabled": _ctx.refresherEnabled,
    "refresher-threshold": _ctx.refresherThreshold,
    "refresher-default-style": _ctx.refresherDefaultStyle,
    "refresher-background": _ctx.refresherBackground,
    "refresher-triggered": _ctx.refresherTriggered,
    onRefresherpulling: refresherpulling,
    onRefresherrefresh: refresherrefresh,
    onRefresherrestore: refresherrestore,
    onRefresherabort: refresherabort
  }), [
    _cE("view", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["scroll-into-view", "scroll-top", "lower-threshold", "upper-threshold", "show-scrollbar", "scroll-with-animation", "refresher-enabled", "refresher-threshold", "refresher-default-style", "refresher-background", "refresher-triggered"])
}
}

})
export default __sfc__
export type UpListComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpListUpListStyles = [_uM([["up-list", _pS(_uM([["flexDirection", "column"]]))]])]
