import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_badge from '@/uni_modules/uview-ultra/components/up-badge/up-badge.uvue'
import { ref, computed, watch, onMounted, getCurrentInstance, nextTick } from 'vue'
import badgeProps from '../../components/up-badge/badge'
import { addUnit, addStyle, deepMerge, getPx, sleep, getWindowInfo, upGetRect } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-tabs',
name: 'up-tabs',
  props: {
	duration: {
		type: Number,
		default: 200
	},
	list: {
		type: Array as PropType<Array<UTSJSONObject>>,
		default: () => [] as Array<UTSJSONObject>
	},
	lineColor: {
		type: String,
		default: '#3c9cff'
	},
	activeStyle: {
		type: [String, Object],
		default: () => ({
			color: '#303133'
		})
	},
	inactiveStyle: {
		type: [String, Object],
		default: () => ({
			color: '#606266'
		})
	},
	lineWidth: {
		type: [String, Number],
		default: '20px'
	},
	lineHeight: {
		type: [String, Number],
		default: '3px'
	},
	lineBgSize: {
		type: String,
		default: 'cover'
	},
	itemStyle: {
		type: [String, Object],
		default: () => ({
			height: '44px'
		})
	},
	scrollable: {
		type: Boolean,
		default: true
	},
	current: {
		type: [Number, String],
		default: 0
	},
	keyName: {
		type: String,
		default: 'name'
	},
	iconStyle: {
		type: [String, Object],
		default: () => ({})
	},
	height: {
		type: [String, Number],
		default: '44px'
	}
},
  emits: ['click', 'longPress', 'change', 'update:current'],
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

const firstTime = ref<boolean>(true)
const scrollLeft = ref<number>(0)
const scrollViewWidth = ref<number>(0)
const lineOffsetLeft = ref<number>(0)
const tabsRect = ref<NodeInfo>({
	left: 0,
	right: 0,
} as NodeInfo)
const innerCurrent = ref<number>(0)
const retryCount = ref<number>(0)
const itemRects = ref<Array<NodeInfo>>([])

const tabsWrapperStyle = computed((): UTSJSONObject => {
	return {
		height: addUnit(props.height)
	} as UTSJSONObject
})

const iconCustomStyle = computed((): UTSJSONObject => {
	return addStyle(props.iconStyle) as UTSJSONObject
})

const propsBadge = computed<UTSJSONObject>(() => {
	return badgeProps['badge'] as UTSJSONObject
})

const lineStyle = computed<UTSJSONObject>(() => {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue", 184, 8), } as UTSJSONObject
	style['width'] = addUnit(props.lineWidth)
	style['transform'] = 'translateX(' + (lineOffsetLeft.value) + 'px)'
	style['transitionDuration'] = `${firstTime.value ? 0 : props.duration}ms`
	style['height'] = addUnit(props.lineHeight)
	style['backgroundSize'] = props.lineBgSize
	if (props.lineColor != '#3c9cff') {
		style['backgroundColor'] = props.lineColor
	}
	return style
})

function getShowValue(itemObj: UTSJSONObject): boolean {
	if (itemObj['badge'] != null) {
		let itemObjBadge = itemObj['badge'] as UTSJSONObject
		if (itemObjBadge['show'] != null && (itemObjBadge['show'] as boolean)
			|| (itemObjBadge['isDot'] != null && (itemObjBadge['isDot'] as boolean))
			|| itemObjBadge['value'] != null) {
			return true
		}
	}
	return false
}

function getBadgePropValue(itemObj: UTSJSONObject, name: string): any {
	if (itemObj != null && itemObj['badge'] != null) {
		let itemObjBadge = itemObj['badge'] as UTSJSONObject
		if (itemObjBadge != null && itemObjBadge[name] != null) {
			return (itemObjBadge[name] != null ? itemObjBadge[name] : '') as any
		} else {
			return (propsBadge.value != null && propsBadge.value[name] != null ? propsBadge.value[name] : '') as any
		}
	}
	return ''
}

function textStyle(index: number): any {
	const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue", 221, 8),}
	const customeStyle = (index == innerCurrent.value)
		? addStyle(props.activeStyle)
		: addStyle(props.inactiveStyle)
	if (props.list[index]['disabled'] != null && (props.list[index]['disabled'] as boolean)) {
		style['color'] = '#c8c9cc'
	}
	return deepMerge(customeStyle, style)
}

function getItemStyle(): UTSJSONObject {
	const custom = addStyle(props.itemStyle) as UTSJSONObject
	const base = { __$originalPosition: new UTSSourceMapPosition("base", "uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue", 233, 8), 
		flex: props.scrollable ? 'none' : '1'
	} as UTSJSONObject
	return deepMerge(base, custom) as UTSJSONObject
}

function isListEqual(list1: Array<UTSJSONObject>, list2: Array<UTSJSONObject>): boolean {
	if (list1.length != list2.length) {
		return false
	}
	for (let i = 0; i < list1.length; i++) {
		const item1 = list1[i]
		const item2 = list2[i]
		if (item1[props.keyName] != item2[props.keyName]) {
			return false
		}
	}
	return true
}

function getTabsRect(): Promise<NodeInfo> {
	return upGetRect('.up-tabs__wrapper__scroll-view', false, instance?.proxy)
}

function getAllItemRect(): Promise<Array<NodeInfo>> {
	return new Promise((resolve: (res: Array<NodeInfo>) => void) => {
		const total = props.list.length
		if (total == 0) {
			resolve([] as Array<NodeInfo>)
			return
		}
		let results: Array<NodeInfo> = []
		let count = 0
		for (let i = 0; i < total; i++) {
			const idx = i
			upGetRect(`.up-tabs__wrapper__nav__item-${idx}`, false, instance?.proxy).then((size: NodeInfo) => {
				results.push(size)
				count++
				if (count == total) {
					resolve(results)
				}
			})
		}
	})
}

function setLineLeft() {
	if (itemRects.value.length <= innerCurrent.value) {
		return
	}
	const tabItem = itemRects.value[innerCurrent.value]
	if (tabItem == null) {
		return
	}
	let totalOffset = itemRects.value
		.slice(0, innerCurrent.value)
		.reduce((total: number, curr: NodeInfo) => {
			return total + (curr.width ?? 0)
		}, 0)
	const lineWidthVal = parseFloat(getPx(props.lineWidth))
	const tabWidth = tabItem.width ?? 0
	const offset = tabWidth > 0 ? (tabWidth - lineWidthVal) / 2 : 0
	lineOffsetLeft.value = totalOffset + offset

	if (firstTime.value) {
		setTimeout(() => {
			firstTime.value = false
		}, 30)
	}
}

function setScrollLeft() {
	if (innerCurrent.value < 0) {
		innerCurrent.value = 0
	}
	if (itemRects.value.length <= innerCurrent.value) {
		return
	}
	const tabRect = itemRects.value[innerCurrent.value]
	if (tabRect == null) {
		return
	}
	const offsetLeft = itemRects.value
		.slice(0, innerCurrent.value)
		.reduce((total: number, curr: NodeInfo) => {
			return total + (curr.width ?? 0)
		}, 0)
	const windowWidth = getWindowInfo().windowWidth
	let nextScrollLeft = offsetLeft - ((tabsRect.value.width ?? 0) - (tabRect.width ?? 0)) / 2 - (windowWidth - (tabsRect.value.right ?? 0)) / 2 + (tabsRect.value.left ?? 0) / 2
	nextScrollLeft = Math.min(nextScrollLeft, scrollViewWidth.value - (tabsRect.value.width ?? 0))
	scrollLeft.value = Math.max(0, nextScrollLeft)
}

function resize() {
	if (props.list.length == 0) {
		return
	}
	getTabsRect().then((tRect: NodeInfo) => {
		getAllItemRect().then((iRect: Array<NodeInfo>) => {
			const firstWidth = (iRect.length > 0 && iRect[0] != null) ? (iRect[0].width ?? 0) : 0
			let minWidthExpected = 30
			if (props.list.length > 0) {
				const firstItemName = props.list[0][props.keyName]
				if (firstItemName != null) {
					const nameStr = firstItemName.toString()
					minWidthExpected = nameStr.length * 12 + 20
				}
			}
			if ((firstWidth < minWidthExpected) && retryCount.value < 5) {
				retryCount.value++
				setTimeout(() => {
					resize()
				}, 50)
				return
			}
			if ((tRect.left ?? 0) > (tRect.width ?? 0)) {
				tRect.right = (tRect.right ?? 0) - Math.floor((tRect.left ?? 0) / (tRect.width ?? 0)) * (tRect.width ?? 0)
				tRect.left = (tRect.left ?? 0) % (tRect.width ?? 1)
			}
			tabsRect.value = tRect
			itemRects.value = iRect
			scrollViewWidth.value = 0
			for (let i = 0; i < iRect.length; i++) {
				const item = iRect[i]
				if (item != null) {
					scrollViewWidth.value = scrollViewWidth.value + (item.width ?? 0)
				}
			}
			setLineLeft()
			setScrollLeft()
		})
	})
}

function clickHandler(item: any, index: number) {
	emit('click', {
		...item as UTSJSONObject,
		index
	}, index)
	if (item['disabled'] != null && (item['disabled'] as boolean)) return
	if (innerCurrent.value == index) return
	innerCurrent.value = index
	nextTick(() => {
		const hasRect = itemRects.value.length > 0 && itemRects.value.length == props.list.length && (itemRects.value[0].width ?? 0) > 0
		if (hasRect) {
			setLineLeft()
			setScrollLeft()
		} else {
			resize()
		}
	})
	emit('update:current', index)
	emit('change', {
		...item as UTSJSONObject,
		index
	}, index)
}

function longPressHandler(item: UTSJSONObject, index: number) {
	emit('longPress', {
		...item,
		index
	})
}

function init() {
	retryCount.value = 0
	sleep(30).then(() => {
		resize()
	})
}

watch((): any => props.current, (newValue: any) => {
	let num = typeof newValue == 'string' ? parseInt(newValue.toString()) : (newValue as number)
	if (num != innerCurrent.value) {
		innerCurrent.value = num
		nextTick(() => {
			const hasRect = itemRects.value.length > 0 && itemRects.value.length == props.list.length && (itemRects.value[0].width ?? 0) > 0
			if (hasRect) {
				setLineLeft()
				setScrollLeft()
			} else {
				resize()
			}
		})
	}
}, { immediate: true })

watch((): Array<UTSJSONObject> => props.list, (newValue: Array<UTSJSONObject>, oldValue: Array<UTSJSONObject> | null) => {
	if (oldValue != null && isListEqual(newValue, oldValue)) {
		return
	}
	nextTick(() => {
		resize()
	})
})

onMounted(() => {
	init()
})

__expose({
	init,
	resize
})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_badge = resolveEasyComponent("up-badge",_easycom_up_badge)

  return _cE("view", _uM({ class: "up-tabs" }), [
    _cE("view", _uM({
      class: "up-tabs__wrapper",
      style: _nS(tabsWrapperStyle.value)
    }), [
      renderSlot(_ctx.$slots, "left"),
      _cE("view", _uM({ class: "up-tabs__wrapper__scroll-view-wrapper" }), [
        _cE("scroll-view", _uM({
          direction: _ctx.scrollable ? 'horizontal' : 'none',
          "scroll-left": scrollLeft.value,
          "scroll-with-animation": "",
          class: "up-tabs__wrapper__scroll-view",
          "show-scrollbar": false,
          ref: "up-tabs__wrapper__scroll-view",
          style: _nS(tabsWrapperStyle.value)
        }), [
          _cE("view", _uM({
            class: "up-tabs__wrapper__nav",
            ref: "up-tabs__wrapper__nav",
            style: _nS(tabsWrapperStyle.value)
          }), [
            _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, (item, index, __index, _cached): any => {
              return _cE("view", _uM({
                class: _nC(["up-tabs__wrapper__nav__item", [`up-tabs__wrapper__nav__item-${index}`,
								(item['disabled'] != null && (item['disabled'] as boolean)) ? 'up-tabs__wrapper__nav__item--disabled' : '',
								innerCurrent.value == index ? 'up-tabs__wrapper__nav__item-active' : '']]),
                key: index,
                onClick: () => {clickHandler(item, index)},
                onLongpress: () => {longPressHandler(item, index)},
                ref_for: true,
                ref: `up-tabs__wrapper__nav__item-${index}`,
                style: _nS(getItemStyle())
              }), [
                isTrue(_ctx.$slots['icon'])
                  ? renderSlot(_ctx.$slots, "icon", _uM({
                      key: 0,
                      item: item,
                      keyName: _ctx.keyName,
                      index: index
                    }))
                  : _cE(Fragment, _uM({ key: 1 }), [
                      item['icon'] != null
                        ? _cE("view", _uM({
                            key: 0,
                            class: "up-tabs__wrapper__nav__item__prefix-icon"
                          }), [
                            _cV(_component_up_icon, _uM({
                              name: item['icon'],
                              customStyle: iconCustomStyle.value
                            }), null, 8 /* PROPS */, ["name", "customStyle"])
                          ])
                        : _cC("v-if", true)
                    ], 64 /* STABLE_FRAGMENT */),
                _ctx.$slots['content'] != null
                  ? renderSlot(_ctx.$slots, "content", _uM({
                      key: 2,
                      item: item,
                      keyName: _ctx.keyName,
                      index: index
                    }))
                  : isTrue(_ctx.$slots['content'] == null && (_ctx.$slots['default'] != null || _ctx.$slots['$default'] != null))
                    ? renderSlot(_ctx.$slots, "default", _uM({
                        key: 3,
                        item: item,
                        keyName: _ctx.keyName,
                        index: index
                      }))
                    : _cE("text", _uM({
                        key: 4,
                        class: _nC([[(item['disabled'] != null && (item['disabled'] as boolean)) ? 'up-tabs__wrapper__nav__item__text--disabled' : ''], "up-tabs__wrapper__nav__item__text"]),
                        style: _nS(textStyle(index))
                      }), _tD(item[_ctx.keyName]), 7 /* TEXT, CLASS, STYLE */),
                _cV(_component_up_badge, _uM({
                  show: getShowValue(item),
                  isDot: getBadgePropValue(item, 'isDot'),
                  value: getBadgePropValue(item, 'value'),
                  max: getBadgePropValue(item, 'max'),
                  type: getBadgePropValue(item, 'type'),
                  showZero: getBadgePropValue(item, 'showZero'),
                  bgColor: getBadgePropValue(item, 'bgColor'),
                  color: getBadgePropValue(item, 'color'),
                  shape: getBadgePropValue(item, 'shape'),
                  numberType: getBadgePropValue(item, 'numberType'),
                  inverted: getBadgePropValue(item, 'inverted'),
                  customStyle: "margin-left: 4px;"
                }), null, 8 /* PROPS */, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
              ], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, ["onClick", "onLongpress"])
            }), 128 /* KEYED_FRAGMENT */),
            _cE("view", _uM({
              class: "up-tabs__wrapper__nav__line",
              ref: "up-tabs__wrapper__nav__line",
              style: _nS(lineStyle.value)
            }), null, 4 /* STYLE */)
          ], 4 /* STYLE */)
        ], 12 /* STYLE, PROPS */, ["direction", "scroll-left"])
      ]),
      renderSlot(_ctx.$slots, "right")
    ], 4 /* STYLE */)
  ])
}
}

})
export default __sfc__
export type UpTabsComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTabsUpTabsStyles = [_uM([["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["width", "100%"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["position", "relative"], ["height", "100%"]]))], ["up-tabs__wrapper__nav__item", _pS(_uM([["paddingTop", 0], ["paddingRight", 11], ["paddingBottom", 0], ["paddingLeft", 11], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["flexShrink", 0], ["height", "100%"]]))], ["up-tabs__wrapper__nav__item__text", _pS(_uM([["fontSize", 15], ["color", "#606266"], ["!whiteSpace", "nowrap"]]))], ["up-tabs__wrapper__nav__item__text--disabled", _pS(_uM([["!color", "#c8c9cc"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["height", 3], ["backgroundColor", "var(--theme-color, #0957de)"], ["width", 30], ["position", "absolute"], ["bottom", 2], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["transitionProperty", "transform"], ["transitionDuration", "300ms"]]))], ["@TRANSITION", _uM([["up-tabs__wrapper__nav__line", _uM([["property", "transform"], ["duration", "300ms"]])]])]])]
