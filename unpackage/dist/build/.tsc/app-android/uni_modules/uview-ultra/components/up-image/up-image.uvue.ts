import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { nextTick, ref, computed, onMounted, watch } from 'vue'
	import { addUnit, addStyle, deepMerge } from '../../libs/function/index'
	import defProps from './image'
	
	// 定义 props
	
const __sfc__ = defineComponent({
  __name: 'up-image',
  props: {
		src: {
			type: String,
			default: () => defProps.getString('image.src')
		},
		mode: {
			type: String,
			default: () => defProps.getString('image.mode')
		},
		width: {
			type: String,
			default: () => defProps.getString('image.width')
		},
		height: {
			type: String,
			default: () => defProps.getString('image.height')
		},
		shape: {
			type: String,
			default: () => defProps.getString('image.shape')
		},
		radius: {
			type: String,
			default: () => defProps.getString('image.radius')
		},
		lazyLoad: {
			type: Boolean,
			default: () => defProps.getBoolean('image.lazyLoad')
		},
		showMenuByLongpress: {
			type: Boolean,
			default: () => defProps.getBoolean('image.showMenuByLongpress')
		},
		loadingIcon: {
			type: String,
			default: () => defProps.getString('image.loadingIcon')
		},
		errorIcon: {
			type: String,
			default: () => defProps.getString('image.errorIcon')
		},
		showLoading: {
			type: Boolean,
			default: () => defProps.getBoolean('image.showLoading')
		},
		showError: {
			type: Boolean,
			default: () => defProps.getBoolean('image.showError')
		},
		fade: {
			type: Boolean,
			default: () => defProps.getBoolean('image.fade')
		},
		webp: {
			type: Boolean,
			default: () => defProps.getBoolean('image.webp')
		},
		duration: {
			type: Number,
			default: () => defProps.getNumber('image.duration')
		},
		bgColor: {
			type: String,
			default: () => defProps.getString('image.bgColor')
		},
		customStyle: {
			type: [Object, String],
			default: () => ({})
		}
	},
  emits: ['click', 'error', 'load'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const props = __props
	
	// 图片是否加载错误，如果是，则显示错误占位图
	const isError = ref(true)
	// 初始化组件时，默认为加载中状态
	const loading = ref(true)
	// 不透明度，为了实现淡入淡出的效果
	const opacity = ref(1)
	// 图片加载完成时，去掉背景颜色，用于淡入淡出效果
	const backgroundStyle = ref({})
	// 用于fade模式的控制组件显示与否
	const show = ref(false)

	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

	const realSrc = computed((): string => {
		if (props.src == '') return ''
		return props.src
	})
	
	const wrapStyle = computed(() => {
		let style = {};
		// 通过调用addUnit()方法，如果有单位，如百分比，px单位等，直接返回，如果是纯粹的数值，则加上rpx单位
		style['width'] = addUnit(props.width)
		style['height'] = addUnit(props.height)
		// 如果是显示圆形，设置一个很多的半径值即可
		style['borderRadius'] = props.shape == 'circle' ? '10000px' : addUnit(props.radius)
		// 如果设置圆角，必须要有hidden，否则可能圆角无效
		if (props.radius != null) {
			style['overflow'] = parseInt(props.radius as string) > 0 ? 'hidden' : 'visible'
		}
		return deepMerge(style, {})
	})

	const mergedCustomStyle = computed((): UTSJSONObject => {
		return addStyle(props.customStyle) as UTSJSONObject
	})

	const imageStyle = computed((): UTSJSONObject => {
		return {
			borderRadius: props.shape == 'circle' ? '10000px' : addUnit(props.radius),
			width: addUnit(props.width),
			height: addUnit(props.height)
		} as UTSJSONObject
	})

	const loadingStyle = computed((): UTSJSONObject => {
		return {
			borderRadius: props.shape == 'circle' ? '50%' : addUnit(props.radius),
			backgroundColor: props.bgColor,
			width: addUnit(props.width),
			height: addUnit(props.height)
		} as UTSJSONObject
	})

	const errorStyle = computed((): UTSJSONObject => {
		return {
			borderRadius: props.shape == 'circle' ? '50%' : addUnit(props.radius),
			width: addUnit(props.width),
			height: addUnit(props.height)
		} as UTSJSONObject
	})
	
	const initLoading = (src: string) => {
		if (src == '') {
			// 如果传入null或者''，或者false，或者undefined，标记为错误状态
			isError.value = true
			loading.value = false
		} else {
			isError.value = false
			// 如果不是网络图片 (http/https开头)，就认为是本地/base64资源，直接关闭 loading 遮罩
			if (!src.startsWith('http://') && !src.startsWith('https://')) {
				loading.value = false
			} else {
				loading.value = true
			}
		}
	}

	watch((): string => props.src, (newVal: string) => {
		initLoading(newVal)
	})

	onMounted(() => {
		show.value = true
		initLoading(props.src as string)
	})
	
	// 点击图片
	const onClick = () => {
		emit('click')
	}
	
	// 图片加载失败
	const onErrorHandler = (err: any) => {
		loading.value = false
		isError.value = true
		emit('error', err)
	}
	
	// 移除图片的背景色
	const removeBgColor = () => {
		// 淡入动画过渡完成后，将背景设置为透明色，否则png图片会看到灰色的背景
		backgroundStyle.value = {
			backgroundColor: 'transparent'
		}
	}
	
	// 图片加载完成，标记loading结束
	const onLoadHandler = (event: any) => {
		loading.value = false
		isError.value = false
		emit('load', event)
		removeBgColor()
	}
	
	// 监听 src 属性变化
	__expose({
		onClick,
		onErrorHandler,
		onLoadHandler
	})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    mode: "fade",
    show: show.value,
    duration: _ctx.fade ? 1000 : 0
  }), [
    _cE("view", _uM({
      class: "up-image",
      onClick: onClick,
      style: _nS([wrapStyle.value, backgroundStyle.value, mergedCustomStyle.value])
    }), [
      _cE("image", _uM({
        src: realSrc.value,
        mode: _ctx.mode,
        onError: onErrorHandler,
        onLoad: onLoadHandler,
        "lazy-load": _ctx.lazyLoad,
        class: "up-image__image",
        style: _nS(imageStyle.value)
      }), null, 44 /* STYLE, PROPS, NEED_HYDRATION */, ["src", "mode", "lazy-load"]),
      isTrue(_ctx.showLoading && loading.value)
        ? _cE("view", _uM({
            key: 0,
            class: "up-image__loading",
            style: _nS(loadingStyle.value)
          }), [
            renderSlot(_ctx.$slots, "loading", {}, (): any[] => [
              _cV(_component_up_icon, _uM({
                name: _ctx.loadingIcon,
                width: _ctx.width,
                height: _ctx.height
              }), null, 8 /* PROPS */, ["name", "width", "height"])
            ])
          ], 4 /* STYLE */)
        : _cC("v-if", true),
      isTrue(_ctx.showError && isError.value && !loading.value)
        ? _cE("view", _uM({
            key: 1,
            class: "up-image__error",
            style: _nS(errorStyle.value)
          }), [
            renderSlot(_ctx.$slots, "error", {}, (): any[] => [
              _cV(_component_up_icon, _uM({
                name: _ctx.errorIcon,
                width: _ctx.width,
                height: _ctx.height
              }), null, 8 /* PROPS */, ["name", "width", "height"])
            ])
          ], 4 /* STYLE */)
        : _cC("v-if", true)
    ], 4 /* STYLE */)
  ], 8 /* PROPS */, ["show", "duration"])
}
}

})
export default __sfc__
export type UpImageComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpImageUpImageStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-image", _pS(_uM([["position", "relative"], ["transitionProperty", "opacity"], ["transitionDuration", "0.5s"], ["transitionTimingFunction", "ease-in-out"]]))], ["up-image__image", _pS(_uM([["width", "100%"], ["height", "100%"]]))], ["up-image__loading", _pS(_uM([["position", "absolute"], ["top", 0], ["left", 0], ["width", "100%"], ["height", "100%"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["backgroundColor", "#f3f4f6"]]))], ["up-image__error", _pS(_uM([["position", "absolute"], ["top", 0], ["left", 0], ["width", "100%"], ["height", "100%"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["backgroundColor", "#f3f4f6"]]))], ["@TRANSITION", _uM([["up-image", _uM([["property", "opacity"], ["duration", "0.5s"], ["timingFunction", "ease-in-out"]])]])]])]
