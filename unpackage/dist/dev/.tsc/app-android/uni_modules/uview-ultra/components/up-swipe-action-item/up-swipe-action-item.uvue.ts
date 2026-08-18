import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { ref, computed, watch, onMounted, onBeforeUnmount, inject, getCurrentInstance } from 'vue'
import type { Ref } from 'vue'
import { addUnit, getPx, sleep, upGetRect } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-swipe-action-item',
name: 'up-swipe-action-item',
  props: {
	show: {
		type: Boolean,
		default: false
	},
	index: {
		type: [String, Number],
		default: ''
	},
	name: {
		type: [String, Number],
		default: ''
	},
	disabled: {
		type: Boolean,
		default: false
	},
	autoClose: {
		type: Boolean,
		default: true
	},
	threshold: {
		type: Number,
		default: 30
	},
	options: {
		type: Array as PropType<Array<UTSJSONObject>>,
		default: () => [] as Array<UTSJSONObject>
	},
	duration: {
		type: [String, Number],
		default: 350
	},
	closeOnClick: {
		type: Boolean,
		default: true
	}
},
  emits: ['click', 'update:show', 'open', 'close'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

let nextSwipeItemId = 0



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()
const selfItemId = ++nextSwipeItemId

const parentContext = inject<UTSJSONObject | null>('upSwipeActionContext', null)

const status = ref<string>(props.show ? 'open' : 'close')
const sliderStyle = ref<UTSJSONObject>({} as UTSJSONObject)
const buttonsWidth = ref<number>(0)
const isMoving = ref<boolean>(false)
const startX = ref<number>(0)
const startY = ref<number>(0)

function getIconCustomStyle(item: UTSJSONObject): UTSJSONObject {
	return {
		marginRight: item['text'] != null ? '2px' : '0px'
	} as UTSJSONObject
}

function getOptionStyle(item: UTSJSONObject): UTSJSONObject | null {
	const style = item['style']
	if (style == null) return null
	if (style instanceof UTSJSONObject) return style as UTSJSONObject
	try {
		return style as UTSJSONObject
	} catch (_e) {
		return null
	}
}

function getOptionStyleProp(item: UTSJSONObject, prop: string, defaultVal: string): string {
	const style = getOptionStyle(item)
	if (style != null && style[prop] != null) {
		return style[prop] as string
	}
	return defaultVal
}

function getButtonStyle(item: UTSJSONObject): UTSJSONObject {
	const style = getOptionStyle(item)
	const hasBorderRadius = style != null && style['borderRadius'] != null
	let widthStr = '80px'
	if (style != null && style['width'] != null) {
		widthStr = style['width'] as string
	} else {
		let baseWidth = 30
		if (item['text'] != null) {
			baseWidth += (item['text'] as string).length * 15
		}
		if (item['icon'] != null) {
			baseWidth += 20
		}
		widthStr = Math.max(80, baseWidth) + 'px'
	}
	return {
		alignItems: hasBorderRadius ? 'center' : 'stretch',
		width: widthStr,
		flexShrink: 0
	} as UTSJSONObject
}

function getWrapperStyle(item: UTSJSONObject): UTSJSONObject {
	const style = getOptionStyle(item)
	const hasBorderRadius = style != null && style['borderRadius'] != null
	let bgColor = '#C7C6CD'
	if (style != null && style['backgroundColor'] != null) {
		const bg = style['backgroundColor'] as string
		if (bg == 'primary') {
			bgColor = ''
		} else {
			bgColor = bg
		}
	}
	const result = { __$originalPosition: new UTSSourceMapPosition("result", "uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.uvue", 150, 8), 
		borderRadius: hasBorderRadius ? style!['borderRadius'] as string : '0',
		padding: hasBorderRadius ? '0' : '0 15px',
		width: '100%',
		height: '100%'
	} as UTSJSONObject
	if (bgColor != '') {
		result['backgroundColor'] = bgColor
	}
	return result
}

function getTextStyle(item: UTSJSONObject): UTSJSONObject {
	const style = getOptionStyle(item)
	return {
		color: style != null && style['color'] != null ? style['color'] as string : '#ffffff',
		fontSize: style != null && style['fontSize'] != null ? style['fontSize'] as string : '16px',
		lineHeight: style != null && style['fontSize'] != null ? style['fontSize'] as string : '16px',
	} as UTSJSONObject
}

function getOptionIconSize(item: UTSJSONObject): any {
	if (item['iconSize'] != null) {
		return addUnit(item['iconSize'])
	}
	const style = getOptionStyle(item)
	if (style != null && style['fontSize'] != null) {
		return addUnit(style['fontSize'])
	}
	return 17
}

function getDuration(value: any): string {
	if (value.toString().indexOf('s') >= 0) return value as string
	return parseInt(value.toString()) > 30 ? value.toString() + 'ms' : value.toString() + 's'
}

function openSwipeAction() {
	var dur = getDuration(props.duration)
	var bWidth = 0 - buttonsWidth.value
	sliderStyle.value = {
		'transition': 'transform ' + dur,
		'transform': 'translateX(' + bWidth + 'px)',
		'-webkit-transform': 'translateX(' + bWidth + 'px)',
	} as UTSJSONObject
	status.value = 'open'
}

function closeSwipeAction() {
	var dur = getDuration(props.duration)
	sliderStyle.value = {
		'transition': 'transform ' + dur,
		'transform': 'translateX(0px)'
	} as UTSJSONObject
	status.value = 'close'
}

function moveSwipeAction(moveX: number) {
	sliderStyle.value = {
		'transition': 'none',
		'transform': 'translateX(' + moveX + 'px)',
		'-webkit-transform': 'translateX(' + moveX + 'px)'
	} as UTSJSONObject
}

function closeHandler() {
	closeSwipeAction()
}

function buttonClickHandler(item: any, index: number) {
	emit('click', {
		index,
		name: props.name
	})
	if (props.closeOnClick) {
		closeHandler()
	}
}

function clickHandler() {}

function getBtnWidth() {
	upGetRect('.up-swipe-action-item__right', false, instance?.proxy).then((res: NodeInfo) => {
		buttonsWidth.value = res.width ?? 0
	})
}

function touchstart(event: UniTouchEvent) {
	isMoving.value = true
	var touches = event.touches
	startX.value = touches[0].pageX
	startY.value = touches[0].pageY
	getBtnWidth()
	if (parentContext != null && (parentContext as UTSJSONObject)['registerActive'] != null) {
		const regFn = (parentContext as UTSJSONObject)['registerActive'] as ((id: number) => void)
		regFn(selfItemId)
	}
}

function touchmove(event: UniTouchEvent) {
	if (props.disabled || !isMoving.value) return
	var touches = event.touches
	var pageX = touches[0].pageX
	var pageY = touches[0].pageY
	var moveX = pageX - startX.value
	var moveY = pageY - startY.value

	if (Math.abs(moveX) > Math.abs(moveY) || Math.abs(moveX) > props.threshold) {
		event.preventDefault()
		event.stopPropagation()
	}
	if (Math.abs(moveX) < Math.abs(moveY)) return

	if (status.value == 'open') {
		if (moveX < 0) moveX = 0
		const btnW = buttonsWidth.value
		if (moveX > btnW) moveX = btnW
		moveSwipeAction(0 - btnW + moveX)
	} else {
		if (moveX > 0) moveX = 0
		const btnW = buttonsWidth.value
		if (Math.abs(moveX) > btnW) moveX = 0 - btnW
		moveSwipeAction(moveX)
	}
}

function touchend(event: UniTouchEvent) {
	if (!isMoving.value || props.disabled) return
	isMoving.value = false
	var touches: UniTouch = event.changedTouches[0] as UniTouch
	var pageX = touches.pageX
	var moveX = pageX - startX.value
	if (status.value == 'open') {
		if (moveX < 0) return
		if (moveX == 0) {
			closeSwipeAction()
			return
		}
		if (Math.abs(moveX) < props.threshold) {
			openSwipeAction()
		} else {
			closeSwipeAction()
		}
	} else {
		if (moveX > 0) return
		if (Math.abs(moveX) < props.threshold) {
			closeSwipeAction()
		} else {
			openSwipeAction()
		}
	}
}

function touchcancel(event: UniTouchEvent) {
	if (!isMoving.value || props.disabled) return
	isMoving.value = false
	if (status.value == 'open') {
		openSwipeAction()
	} else {
		closeSwipeAction()
	}
}

if (parentContext != null) {
	const activeItemIdRef = (parentContext as UTSJSONObject)['activeItemId'] as Ref<number> | null
	if (activeItemIdRef != null) {
		watch((): number => activeItemIdRef!.value, (newActiveId: number) => {
			if (newActiveId != selfItemId && status.value == 'open') {
				closeHandler()
			}
		})
	}
}

watch((): boolean => props.show, (newVal: boolean) => {
	status.value = newVal ? 'open' : 'close'
})

watch(status, (newValue: string, oldValue: string) => {
	if (newValue == 'open') {
		emit('update:show', true)
		emit('open', props.index)
		if (parentContext != null && (parentContext as UTSJSONObject)['registerActive'] != null) {
			const regFn = (parentContext as UTSJSONObject)['registerActive'] as ((id: number) => void)
			regFn(selfItemId)
		}
	} else {
		emit('update:show', false)
		emit('close', props.index)
	}
	if (props.disabled) return
	if (newValue == 'close' && oldValue == 'open') {
		closeSwipeAction()
	} else if (newValue == 'open' && oldValue == 'close') {
		openSwipeAction()
	}
})

watch((): Array<UTSJSONObject> => props.options, () => {
	getBtnWidth()
}, { deep: true })

onMounted(() => {
	sleep(100).then(() => {
		getBtnWidth()
	})
})

onBeforeUnmount(() => {
	closeHandler()
})

__expose({
	open: openSwipeAction,
	close: closeSwipeAction
})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: "up-swipe-action-item",
    ref: "swipeActionItemRef"
  }), [
    _cE("view", _uM({
      class: "up-swipe-action-item__right",
      ref: "rightButtonsRef"
    }), [
      renderSlot(_ctx.$slots, "button", {}, (): any[] => [
        _cE(Fragment, null, RenderHelpers.renderList(_ctx.options, (item, index, __index, _cached): any => {
          return _cE("view", _uM({
            key: index,
            class: "up-swipe-action-item__right__button",
            style: _nS(getButtonStyle(item)),
            onClick: () => {buttonClickHandler(item, index)}
          }), [
            _cE("view", _uM({
              class: _nC(["up-swipe-action-item__right__button__wrapper", _uM({
						'up-swipe-action-item__right__button__wrapper--primary': getOptionStyleProp(item, 'backgroundColor', '') == 'primary'
					})]),
              style: _nS(getWrapperStyle(item))
            }), [
              item['icon'] != null
                ? _cV(_component_up_icon, _uM({
                    key: 0,
                    name: item['icon']!.toString(),
                    color: getOptionStyleProp(item, 'color', '#ffffff'),
                    size: getOptionIconSize(item),
                    customStyle: getIconCustomStyle(item)
                  }), null, 8 /* PROPS */, ["name", "color", "size", "customStyle"])
                : _cC("v-if", true),
              item['text'] != null
                ? _cE("text", _uM({
                    key: 1,
                    class: "up-swipe-action-item__right__button__wrapper__text up-line-1",
                    style: _nS(getTextStyle(item))
                  }), _tD(item['text']), 5 /* TEXT, STYLE */)
                : _cC("v-if", true)
            ], 6 /* CLASS, STYLE */)
          ], 12 /* STYLE, PROPS */, ["onClick"])
        }), 128 /* KEYED_FRAGMENT */)
      ])
    ], 512 /* NEED_PATCH */),
    _cE("view", _uM({
      class: "up-swipe-action-item__content",
      onClick: clickHandler,
      onTouchstart: touchstart,
      onTouchmove: touchmove,
      onTouchend: touchend,
      onTouchcancel: touchcancel,
      style: _nS(sliderStyle.value)
    }), [
      renderSlot(_ctx.$slots, "default")
    ], 36 /* STYLE, NEED_HYDRATION */)
  ], 512 /* NEED_PATCH */)
}
}

})
export default __sfc__
export type UpSwipeActionItemComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpSwipeActionItemUpSwipeActionItemStyles = [_uM([["up-swipe-action-item", _pS(_uM([["position", "relative"], ["overflow", "hidden"], ["display", "flex"], ["flexDirection", "column"]]))], ["up-swipe-action-item__content", _pS(_uM([["transform", "translateX(0px)"], ["backgroundColor", "#FFFFFF"], ["zIndex", 10], ["width", "100%"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-swipe-action-item__right", _pS(_uM([["position", "absolute"], ["top", 0], ["bottom", 0], ["right", 0], ["display", "flex"], ["flexDirection", "row"], ["zIndex", 1]]))], ["up-swipe-action-item__right__button", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["overflow", "hidden"], ["alignItems", "center"]]))], ["up-swipe-action-item__right__button__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))], ["up-swipe-action-item__right__button__wrapper--primary", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"]]))], ["up-swipe-action-item__right__button__wrapper__text", _pS(_uM([["color", "#FFFFFF"], ["fontSize", 15], ["textAlign", "center"]]))]])]
