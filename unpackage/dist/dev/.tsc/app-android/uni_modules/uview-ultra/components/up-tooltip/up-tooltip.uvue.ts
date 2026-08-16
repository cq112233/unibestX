import _easycom_up_overlay from '@/uni_modules/uview-ultra/components/up-overlay/up-overlay.uvue'
import _easycom_up_line from '@/uni_modules/uview-ultra/components/up-line/up-line.uvue'
import _easycom_up_transition from '@/uni_modules/uview-ultra/components/up-transition/up-transition.uvue'
import { ref, computed, watch, onMounted, getCurrentInstance, nextTick } from 'vue'
import { addStyle, addUnit, guid, toast, sleep, sys, upGetRect } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-tooltip',
name: 'up-tooltip',
  props: {
	text: {
		type: [String, Number],
		default: ''
	},
	copyText: {
		type: [String, Number],
		default: ''
	},
	size: {
		type: [String, Number],
		default: 14
	},
	color: {
		type: String,
		default: '#606266'
	},
	bgColor: {
		type: String,
		default: 'transparent'
	},
	popupBgColor: {
		type: String,
		default: '#060607'
	},
	direction: {
		type: String,
		default: 'top'
	},
	placement: {
		type: String,
		default: ''
	},
	zIndex: {
		type: [String, Number],
		default: 10071
	},
	showCopy: {
		type: Boolean,
		default: true
	},
	buttons: {
		type: Array as PropType<Array<string>>,
		default: () => [] as Array<string>
	},
	overlay: {
		type: Boolean,
		default: true
	},
	showToast: {
		type: Boolean,
		default: true
	},
	show: {
		type: Boolean,
		default: false
	},
	triggerMode: {
		type: String,
		default: 'click'
	},
	forcePosition: {
		type: Object,
		default: () => ({})
	},
	customStyle: {
		type: Object,
		default: () => ({})
	}
},
  emits: ["click", "open", "close"],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()

function createRectInfo(): UTSJSONObject {
	const info = { __$originalPosition: new UTSSourceMapPosition("info", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 178, 8), } as UTSJSONObject
	info['width'] = 0
	info['left'] = 0
	info['right'] = 0
	return info
}

function normalizeBool(value: any | null): boolean {
	return value == true
}

function normalizeNumber(value: any | null, fallback: number = 0): number {
	if (typeof value === 'number') {
		return value as number
	}
	if (value == null) {
		return fallback
	}
	const parsed = parseFloat(value.toString())
	return isNaN(parsed) ? fallback : parsed
}

function getObjNumber(obj: any | null, key: string, fallback: number = 0): number {
	if (obj == null) {
		return fallback
	}
	return normalizeNumber((obj as UTSJSONObject)[key], fallback)
}

const innerShow = ref<boolean>(false)
const lastLongpressTime = ref<number>(0)
const lastClickTime = ref<number>(0)
const openTime = ref<number>(0)
const textId = ref<string>(guid())
const tooltipId = ref<string>(guid())
const tooltipInfo = ref<UTSJSONObject>(createRectInfo())
const textInfo = ref<UTSJSONObject>(createRectInfo())
const screenGap = 12
const indicatorWidth = 14

const displayText = computed<string>(() => {
	return props.text == null ? '' : props.text.toString()
})

const hasText = computed<boolean>(() => {
	return displayText.value != ''
})

const currentDirection = computed<string>(() => {
	if (props.placement != '') {
		if (props.placement.indexOf('bottom') != -1) {
			return 'bottom'
		}
		if (props.placement.indexOf('top') != -1) {
			return 'top'
		}
	}
	return props.direction == 'bottom' ? 'bottom' : 'top'
})

const displayShow = computed<boolean>(() => {
	return props.show || innerShow.value
})

const rootStyle = computed<UTSJSONObject>(() => {
	return addStyle(props.customStyle) as UTSJSONObject
})

const buttonItems = computed<Array<string>>(() => {
	return props.buttons
})

const buttonCount = computed<number>(() => {
	return buttonItems.value.length
})

const overlayShow = computed<boolean>(() => {
	return displayShow.value == true && normalizeBool(props.overlay)
})

const showIndicator = computed<boolean>(() => {
	return normalizeBool(props.showCopy) || buttonCount.value > 0
})

const showCopyLine = computed<boolean>(() => {
	return normalizeBool(props.showCopy) && buttonCount.value > 0
})

const showCopyButton = computed<boolean>(() => {
	return normalizeBool(props.showCopy)
})

const textStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 271, 8), } as UTSJSONObject
	style['fontSize'] = addUnit(props.size)
	style['color'] = props.color
	style['borderRadius'] = '4px'
	style['padding'] = '2px 4px'
	style['backgroundColor'] = props.bgColor != '' && props.bgColor != 'transparent' && displayShow.value == true ? props.bgColor : 'transparent'
	return style
})

const popupListStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 281, 8), } as UTSJSONObject
	if (props.popupBgColor != '' && props.popupBgColor != 'transparent') {
		style['backgroundColor'] = props.popupBgColor
	}
	return style
})

const indicatorStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 289, 8), } as UTSJSONObject
	const sysInfo = sys()
	const tInfo = tooltipInfo.value
	const txInfo = textInfo.value
	const tooltipWidth = getObjNumber(tInfo, 'width')
	const textWidth = getObjNumber(txInfo, 'width')
	const textLeft = getObjNumber(txInfo, 'left')
	const windowWidth = normalizeNumber(sysInfo.windowWidth, 0)

	if (props.popupBgColor != '' && props.popupBgColor != 'transparent') {
		style['backgroundColor'] = props.popupBgColor
	}

	if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
		const textCenter = textLeft + textWidth / 2
		const idealPopupLeftScreen = textCenter - tooltipWidth / 2
		let actualPopupLeftScreen = idealPopupLeftScreen

		if (idealPopupLeftScreen < screenGap) {
			actualPopupLeftScreen = screenGap
		} else if (idealPopupLeftScreen + tooltipWidth > windowWidth - screenGap) {
			actualPopupLeftScreen = windowWidth - screenGap - tooltipWidth
		}

		const textCenterInPopup = textCenter - actualPopupLeftScreen
		let indicatorLeftRelative = textCenterInPopup - indicatorWidth / 2

		const minLeft = 8
		const maxLeft = tooltipWidth - indicatorWidth - 8
		if (indicatorLeftRelative < minLeft) {
			indicatorLeftRelative = minLeft
		} else if (indicatorLeftRelative > maxLeft) {
			indicatorLeftRelative = maxLeft
		}

		style['left'] = addUnit(indicatorLeftRelative)
	} else {
		style['left'] = '50%'
		style['marginLeft'] = '-' + addUnit(indicatorWidth / 2)
	}

	if (currentDirection.value === 'top') {
		style['bottom'] = '-4px'
	} else {
		style['top'] = '-4px'
	}
	return style
})

const tooltipStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 339, 8), } as UTSJSONObject
	const sysInfo = sys()
	const tInfo = tooltipInfo.value
	const txInfo = textInfo.value
	const tooltipWidth = getObjNumber(tInfo, 'width')
	const textWidth = getObjNumber(txInfo, 'width')
	const textLeft = getObjNumber(txInfo, 'left')
	const windowWidth = normalizeNumber(sysInfo.windowWidth, 0)

	let isCentered = false

	if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
		const textCenter = textLeft + textWidth / 2
		const idealPopupLeftScreen = textCenter - tooltipWidth / 2
		let actualPopupLeftScreen = idealPopupLeftScreen

		if (idealPopupLeftScreen < screenGap) {
			actualPopupLeftScreen = screenGap
		} else if (idealPopupLeftScreen + tooltipWidth > windowWidth - screenGap) {
			actualPopupLeftScreen = windowWidth - screenGap - tooltipWidth
		}

		const popupLeftRelative = actualPopupLeftScreen - textLeft
		style['left'] = addUnit(popupLeftRelative)
	} else {
		style['left'] = '50%'
		isCentered = true
	}

	if (currentDirection.value === 'top') {
		style['top'] = '0px'
		style['transform'] = isCentered ? 'translate(-50%, -100%)' : 'translateY(-100%)'
		style['marginTop'] = '-10px'
	} else {
		style['top'] = '100%'
		style['transform'] = isCentered ? 'translate(-50%, 0%)' : 'translateY(0%)'
		style['marginTop'] = '10px'
	}
	return style
})

const transitionStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 381, 8), } as UTSJSONObject
	style['position'] = 'absolute'
	style['zIndex'] = props.zIndex
	const ts = tooltipStyle.value
	UTSJSONObject.keys(ts).forEach((key: string) => {
		style[key] = ts[key]
	})
	return style
})

const indicatorMergedStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 392, 8), } as UTSJSONObject
	const isStyle = indicatorStyle.value
	UTSJSONObject.keys(isStyle).forEach((key: string) => {
		style[key] = isStyle[key]
	})
	style['width'] = addUnit(indicatorWidth)
	style['height'] = addUnit(indicatorWidth)
	return style
})

function queryRect(refName: string): Promise<NodeInfo> {
	return upGetRect(`#${refName}`, false, instance?.proxy)
}

function getElRect() {
	queryRect(tooltipId.value).then((size: NodeInfo) => {
		tooltipInfo.value = size as UTSJSONObject
	})
	queryRect(textId.value).then((size: NodeInfo) => {
		textInfo.value = size as UTSJSONObject
	})
}

function triggerPopup() {
	innerShow.value = !innerShow.value
	if (innerShow.value) {
		openTime.value = Date.now()
		emit('open')
		sleep(30).then(() => {
			getElRect()
		})
	} else {
		emit('close')
	}
}

function longpressHandler() {
	lastLongpressTime.value = Date.now()
	triggerPopup()
}

function clickHandler() {
	if (Date.now() - lastLongpressTime.value < 500) return
	if (Date.now() - lastClickTime.value < 300) return
	lastClickTime.value = Date.now()
	if (props.triggerMode == 'click' || props.triggerMode == 'hover') {
		triggerPopup()
	}
}

function overlayClickHandler() {
	if (Date.now() - openTime.value < 200) return
	innerShow.value = false
	emit('close')
}

function btnClickHandler(index: number): void {
	innerShow.value = false
	emit('close')
	emit('click', props.showCopy ? index + 1 : index)
}

function getCopyData(): string {
	const copyText = props.copyText
	if (copyText != null && copyText.toString() != '') {
		return copyText.toString()
	}
	return displayText.value
}

function setClipboardData() {
	innerShow.value = false
	emit('close')
	emit('click', 0)
	uni.setClipboardData({
		data: getCopyData(),
		success: () => {
			if (props.showToast == true) {
				toast('复制成功')
			}
		},
		fail: () => {
			if (props.showToast == true) {
				toast('复制失败')
			}
		}
	})
}

watch((): boolean => props.show, (newVal: boolean) => {
	innerShow.value = newVal
	if (newVal) {
		getElRect()
	}
})

watch(displayShow, (newVal: boolean) => {
	if (newVal) {
		nextTick(() => {
			getElRect()
			sleep(50).then(() => {
				getElRect()
			})
			sleep(150).then(() => {
				getElRect()
			})
		})
	}
})

onMounted(() => {
	if (props.show) {
		innerShow.value = true
	}
	getElRect()
})

__expose({
	open: () => {
		innerShow.value = true
		openTime.value = Date.now()
		emit('open')
		sleep(30).then(() => {
			getElRect()
		})
	},
	close: () => {
		innerShow.value = false
		emit('close')
	}
})

return (): any | null => {

const _component_up_overlay = resolveEasyComponent("up-overlay",_easycom_up_overlay)
const _component_up_line = resolveEasyComponent("up-line",_easycom_up_line)
const _component_up_transition = resolveEasyComponent("up-transition",_easycom_up_transition)

  return _cE("view", _uM({
    class: "up-tooltip",
    style: _nS([rootStyle.value])
  }), [
    _cV(_component_up_overlay, _uM({
      show: overlayShow.value,
      opacity: 0,
      onClick: overlayClickHandler
    }), null, 8 /* PROPS */, ["show"]),
    _cE("view", _uM({ class: "up-tooltip__wrapper" }), [
      isTrue(hasText.value)
        ? _cE("text", _uM({
            key: 0,
            class: "up-tooltip__wrapper__text",
            id: textId.value,
            ref: textId.value,
            selectable: false,
            onLongpress: withModifiers(longpressHandler, ["stop"]),
            onClick: withModifiers(clickHandler, ["stop"]),
            style: _nS([textStyle.value])
          }), _tD(displayText.value), 45 /* TEXT, STYLE, PROPS, NEED_HYDRATION */, ["id"])
        : _cE("view", _uM({
            key: 1,
            class: "up-tooltip__wrapper__trigger",
            id: textId.value,
            ref: textId.value,
            onLongpress: withModifiers(longpressHandler, ["stop"]),
            onClick: withModifiers(clickHandler, ["stop"])
          }), [
            renderSlot(_ctx.$slots, "trigger", {}, (): any[] => [
              renderSlot(_ctx.$slots, "default")
            ])
          ], 40 /* PROPS, NEED_HYDRATION */, ["id"]),
      _cV(_component_up_transition, _uM({
        mode: "fade",
        show: displayShow.value,
        duration: "300",
        customStyle: transitionStyle.value
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({
            class: "up-tooltip__wrapper__popup",
            id: tooltipId.value,
            ref: tooltipId.value
          }), [
            isTrue(showIndicator.value)
              ? _cE("view", _uM({
                  key: 0,
                  class: "up-tooltip__wrapper__popup__indicator",
                  "hover-class": "up-tooltip__wrapper__popup__indicator--hover",
                  style: _nS([indicatorMergedStyle.value])
                }), null, 4 /* STYLE */)
              : _cC("v-if", true),
            renderSlot(_ctx.$slots, "content", {}, (): any[] => [
              _cE("view", _uM({
                class: "up-tooltip__wrapper__popup__list",
                style: _nS([popupListStyle.value])
              }), [
                isTrue(showCopyButton.value)
                  ? _cE("view", _uM({
                      key: 0,
                      class: "up-tooltip__wrapper__popup__list__btn",
                      "hover-class": "up-tooltip__wrapper__popup__list__btn--hover",
                      onClick: setClipboardData
                    }), [
                      _cE("text", _uM({ class: "up-tooltip__wrapper__popup__list__btn__text" }), "复制")
                    ])
                  : _cC("v-if", true),
                isTrue(showCopyLine.value)
                  ? _cV(_component_up_line, _uM({
                      key: 1,
                      direction: "column",
                      color: "#8d8e90",
                      length: "18"
                    }))
                  : _cC("v-if", true),
                _cE(Fragment, null, RenderHelpers.renderList(buttonItems.value, (item, index, __index, _cached): any => {
                  return _cE(Fragment, _uM({ key: index }), [
                    _cE("view", _uM({
                      class: "up-tooltip__wrapper__popup__list__btn",
                      "hover-class": "up-tooltip__wrapper__popup__list__btn--hover",
                      onClick: () => {btnClickHandler(index)}
                    }), [
                      _cE("text", _uM({ class: "up-tooltip__wrapper__popup__list__btn__text" }), _tD(item), 1 /* TEXT */)
                    ], 8 /* PROPS */, ["onClick"]),
                    index < buttonCount.value - 1
                      ? _cV(_component_up_line, _uM({
                          key: 0,
                          direction: "column",
                          color: "#8d8e90",
                          length: "18"
                        }))
                      : _cC("v-if", true)
                  ], 64 /* STABLE_FRAGMENT */)
                }), 128 /* KEYED_FRAGMENT */)
              ], 4 /* STYLE */)
            ])
          ], 8 /* PROPS */, ["id"])
        ]),
        _: 3 /* FORWARDED */
      }), 8 /* PROPS */, ["show", "customStyle"])
    ])
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpTooltipComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTooltipUpTooltipStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tooltip", _pS(_uM([["position", "relative"], ["display", "flex"], ["flexDirection", "row"]]))], ["up-tooltip__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["whiteSpace", "nowrap"]]))], ["up-tooltip__wrapper__text", _pS(_uM([["fontSize", 14]]))], ["up-tooltip__wrapper__trigger", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["up-tooltip__wrapper__popup", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"]]))], ["up-tooltip__wrapper__popup__list", _pS(_uM([["backgroundColor", "#060607"], ["position", "relative"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["borderTopLeftRadius", 5], ["borderTopRightRadius", 5], ["borderBottomRightRadius", 5], ["borderBottomLeftRadius", 5], ["paddingTop", 0], ["paddingRight", 0], ["paddingBottom", 0], ["paddingLeft", 0], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["overflow", "hidden"]]))], ["up-tooltip__wrapper__popup__list__btn", _pS(_uM([["paddingTop", 11], ["paddingRight", 13], ["paddingBottom", 11], ["paddingLeft", 13]]))], ["up-tooltip__wrapper__popup__list__btn--hover", _pS(_uM([["backgroundColor", "#58595B"]]))], ["up-tooltip__wrapper__popup__list__btn__text", _pS(_uM([["lineHeight", "12px"], ["fontSize", 13], ["color", "#FFFFFF"]]))], ["up-tooltip__wrapper__popup__indicator", _pS(_uM([["position", "absolute"], ["backgroundColor", "#060607"], ["width", 14], ["height", 14], ["bottom", -4], ["transform", "rotate(45deg)"], ["borderTopLeftRadius", 2], ["borderTopRightRadius", 2], ["borderBottomRightRadius", 2], ["borderBottomLeftRadius", 2], ["zIndex", -1]]))], ["up-tooltip__wrapper__popup__indicator--hover", _pS(_uM([["backgroundColor", "#58595B"]]))]])]
