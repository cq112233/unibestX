import { computed, ref, watch, onMounted, nextTick, getCurrentInstance } from 'vue'
import { addStyle, addUnit, sleep, deepMerge } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-subsection',
name: 'up-subsection',
  props: {
  list: {
    type: Array as PropType<Array<any>>,
    default: () => [] as Array<any>
  },
  current: {
    type: [String, Number],
    default: 0
  },
  activeColor: {
    type: String,
    default: '#3c9cff'
  },
  inactiveColor: {
    type: String,
    default: '#303133'
  },
  mode: {
    type: String,
    default: 'button'
  },
  fontSize: {
    type: [String, Number],
    default: 12
  },
  bold: {
    type: Boolean,
    default: true
  },
  bgColor: {
    type: String,
    default: '#eeeeef'
  },
  keyName: {
    type: String,
    default: 'name'
  },
  activeColorKeyName: {
    type: String,
    default: 'activeColor'
  },
  inactiveColorKeyName: {
    type: String,
    default: 'inactiveColor'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  customStyle: {
    type: Object,
    default: () => ({})
  }
},
  emits: ['change'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()

const innerCurrent = ref<number>(parseInt(props.current.toString()))
const componentWidth = ref<number>(0)
const firstTime = ref<boolean>(true)

watch((): any => props.current, (n: any) => {
  const nn = parseInt(n.toString())
  if (nn != innerCurrent.value) {
    innerCurrent.value = nn
  }
})

watch((): Array<any> => props.list, () => {
  init()
})

const wrapperStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 136, 9), } as UTSJSONObject
  if (props.mode == 'button') {
    style['backgroundColor'] = props.bgColor
  }
  return style
})

const computedRootStyle = computed((): UTSJSONObject => {
  const custom = addStyle(props.customStyle) as UTSJSONObject
  const wrapper = wrapperStyle.value
  return deepMerge(wrapper, custom) as UTSJSONObject
})

const barStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 150, 9), } as UTSJSONObject
  if (componentWidth.value > 0) {
    const itemWidth = componentWidth.value / props.list.length
    style['width'] = itemWidth.toString() + 'px'
    style['transform'] = `translateX(${innerCurrent.value * itemWidth}px)`
  } else {
    if (props.list.length > 0) {
      style['width'] = (100.0 / props.list.length).toString() + '%'
    }
    style['transform'] = `translateX(${innerCurrent.value * 100}%)`
  }
  if (firstTime.value) {
    style['transitionDuration'] = '0ms'
  } else {
    style['transitionDuration'] = '300ms'
  }
  style['left'] = '0px'
  style['top'] = '0px'
  style['bottom'] = '0px'
  return style
})

const innerBarStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 173, 9), } as UTSJSONObject
  if (props.mode === 'subsection') {
    if (props.activeColor != '#3c9cff') {
      style['backgroundColor'] = props.activeColor
    }
  }
  return style
})

function getWrapperRect(): Promise<NodeInfo | null> {
  return new Promise((resolve) => {
    uni.createSelectorQuery()
      .in(instance?.proxy)
      .select('.up-subsection')
      .boundingClientRect()
      .exec((rect) => {
        if (rect != null && rect.length > 0) {
          resolve(rect[0] as NodeInfo)
        } else {
          resolve(null)
        }
      })
  })
}

function resize() {
  getWrapperRect().then((rect: NodeInfo | null) => {
    if (rect != null && rect.width != null && rect.width! > 0) {
      componentWidth.value = rect.width!
      if (firstTime.value) {
        nextTick(() => {
          setTimeout(() => {
            firstTime.value = false
          }, 50)
        })
      }
    }
  })
}

function init() {
  innerCurrent.value = parseInt(props.current.toString())
  nextTick(() => {
    resize()
  })
}

function itemStyle(index: number): UTSJSONObject {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 221, 9), } as UTSJSONObject
  if (props.mode === 'subsection') {
    if (props.activeColor != '#3c9cff') {
      style['borderColor'] = props.activeColor
    }
    style['borderWidth'] = '1px'
    style['borderStyle'] = 'solid'
  }
  return style
}

function textStyle(index: number): UTSJSONObject {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue", 233, 9), } as UTSJSONObject
  if (props.disabled) {
    style['fontWeight'] = 'normal'
    style['fontSize'] = addUnit(props.fontSize)
    style['color'] = '#c8c9cc'
    return style
  }
  style['fontWeight'] = props.bold && innerCurrent.value === index ? 'bold' : 'normal'
  style['fontSize'] = addUnit(props.fontSize)
  const item = props.list[index]
  const activeColorTemp =
    typeof item == 'object' && item != null
      ? (((item as UTSJSONObject)[props.activeColorKeyName] ?? '') as string)
      : ''
  const inactiveColorTemp =
    typeof item === 'object' && item != null
      ? (((item as UTSJSONObject)[props.inactiveColorKeyName] ?? '') as string)
      : ''
  if (props.mode === 'subsection') {
    style['color'] =
      innerCurrent.value === index ? (activeColorTemp != '' ? activeColorTemp : '#fff') : (inactiveColorTemp != '' ? inactiveColorTemp : props.inactiveColor)
  } else {
    const c = activeColorTemp != '' ? activeColorTemp : props.activeColor
    if (innerCurrent.value == index) {
      if (c != '#3c9cff') {
        style['color'] = c
      }
    } else {
      style['color'] = inactiveColorTemp != '' ? inactiveColorTemp : props.inactiveColor
    }
  }
  return style
}

function getText(item: any | null): string | null {
  if (typeof item === 'string') {
    return item as string
  } else if (typeof item === 'object' && item != null) {
    let temp = UTSAndroid.consoleDebugError(JSON.parse(JSON.stringify(item)), " at uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue:271") as UTSJSONObject
    return temp.getString(props.keyName)
  } else {
    return 'error'
  }
}

function clickHandler(index: number) {
  if (props.disabled) return
  innerCurrent.value = index
  emit('change', index)
}

onMounted(() => {
  init()
})

return (): any | null => {

  return _cE("view", _uM({
    class: _nC(["up-subsection", [`up-subsection--${_ctx.mode}`]]),
    ref: "upSubsectionRef",
    style: _nS(computedRootStyle.value)
  }), [
    _cE("view", _uM({
      class: "up-subsection__bar cursor-pointer",
      style: _nS(barStyle.value)
    }), [
      _cE("view", _uM({
        class: _nC(["up-subsection__bar__inner", _uM({
					'up-subsection--button__bar': _ctx.mode == 'button',
					'up-subsection__bar__inner--button': _ctx.mode == 'button',
					'up-subsection__bar--first': (innerCurrent.value == 0 && _ctx.mode == 'subsection'),
					'up-subsection__bar--center': (innerCurrent.value > 0 && innerCurrent.value < _ctx.list.length - 1 && _ctx.mode == 'subsection'),
					'up-subsection__bar--last': (innerCurrent.value == _ctx.list.length - 1 && _ctx.mode == 'subsection')
				})]),
        style: _nS(innerBarStyle.value)
      }), null, 6 /* CLASS, STYLE */)
    ], 4 /* STYLE */),
    _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, (item, index, __index, _cached): any => {
      return _cE("view", _uM({
        class: _nC(["up-subsection__item cursor-pointer", [
	                `up-subsection__item--${index.toString()}`,
	                index < _ctx.list.length - 1 ? 
	                    'up-subsection__item--no-border-right' : '',
	                index == 0 ? 'up-subsection__item--first' : '',
	                index == _ctx.list.length - 1 ? 'up-subsection__item--last' : '',
					_ctx.disabled ? 'up-subsection__item--disabled' : ''
	            ]]),
        style: _nS(itemStyle(index)),
        onClick: () => {clickHandler(index)},
        key: index
      }), [
        renderSlot(_ctx.$slots, "item", _uM({
          item: item,
          index: index
        }), (): any[] => [
          _cE("text", _uM({
            class: _nC(["up-subsection__item__text", [
							_ctx.disabled ? 'up-subsection__item__text--disabled' : '',
							(innerCurrent.value == index && _ctx.mode == 'button' && _ctx.activeColor == '#3c9cff') ? 'up-subsection__item__text--active' : ''
						]]),
            style: _nS(textStyle(index))
          }), _tD(getText(item)), 7 /* TEXT, CLASS, STYLE */)
        ])
      ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
    }), 128 /* KEYED_FRAGMENT */)
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpSubsectionComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpSubsectionUpSubsectionStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-subsection", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["position", "relative"], ["overflow", "hidden"], ["width", "100%"], ["boxSizing", "border-box"]]))], ["up-subsection--button", _pS(_uM([["height", 32], ["backgroundColor", "#eeeeef"], ["paddingTop", 3], ["paddingRight", 3], ["paddingBottom", 3], ["paddingLeft", 3], ["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3], ["alignItems", "stretch"]]))], ["up-subsection--button__bar", _pS(_uM([["backgroundColor", "#ffffff"], ["!borderTopLeftRadius", 3], ["!borderTopRightRadius", 3], ["!borderBottomRightRadius", 3], ["!borderBottomLeftRadius", 3]]))], ["up-subsection--subsection", _pS(_uM([["height", 30]]))], ["up-subsection__bar", _pS(_uM([["position", "absolute"], ["transitionProperty", "transform,color"], ["transitionDuration", "0.3s"], ["transitionTimingFunction", "ease-in-out"]]))], ["up-subsection__bar--first", _pS(_uM([["borderTopLeftRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-subsection__bar--center", _pS(_uM([["borderTopLeftRadius", 0], ["borderBottomLeftRadius", 0]]))], ["up-subsection__bar--last", _pS(_uM([["borderTopRightRadius", 3], ["borderBottomRightRadius", 3]]))], ["up-subsection__bar__inner", _pS(_uM([["height", "100%"], ["backgroundColor", "var(--theme-color, #0957de)"]]))], ["up-subsection__bar__inner--button", _pS(_uM([["!borderTopLeftRadius", 3], ["!borderTopRightRadius", 3], ["!borderBottomRightRadius", 3], ["!borderBottomLeftRadius", 3], ["backgroundColor", "#ffffff"], ["boxShadow", "0 1px 3px rgba(0, 0, 0, 0.1)"]]))], ["up-subsection__item", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["textAlign", "center"], ["fontSize", 12], ["height", "100%"], ["alignItems", "center"], ["justifyContent", "center"], ["position", "relative"]]))], ["up-subsection__item--no-border-right", _pS(_uM([["!borderRightWidth", 0]]))], ["up-subsection__item--first", _pS(_uM([["borderTopLeftRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-subsection__item--last", _pS(_uM([["borderTopRightRadius", 3], ["borderBottomRightRadius", 3]]))], ["up-subsection__item__text", _pS(_uM([["fontSize", 12], ["lineHeight", "12px"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["transitionProperty", "color"], ["transitionDuration", "0.3s"]]))], ["up-subsection__item__text--active", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-subsection__item__text--disabled", _pS(_uM([["color", "#c8c9cc"]]))], ["@TRANSITION", _uM([["up-subsection__bar", _uM([["property", "transform,color"], ["duration", "0.3s"], ["timingFunction", "ease-in-out"]])], ["up-subsection__item__text", _uM([["property", "color"], ["duration", "0.3s"]])]])]])]
