import { computed, ref, watch, onMounted, getCurrentInstance } from 'vue'
import { addStyle, getPx, sleep, upGetRect } from '../../libs/function/index.uts'

type barStyleType = { __$originalPosition?: UTSSourceMapPosition<"barStyleType", "uni_modules/uview-ultra/components/up-slider/up-slider.uvue", 84, 6>;
  width: string,
  transition?: string
}
type sliderRectType = { __$originalPosition?: UTSSourceMapPosition<"sliderRectType", "uni_modules/uview-ultra/components/up-slider/up-slider.uvue", 88, 6>;
  left: number,
  width: number
}


const __sfc__ = defineComponent({
  __name: 'up-slider',
name: 'up-slider',
  props: {
  min: {
    type: [Number, String],
    default: 0
  },
  max: {
    type: [Number, String],
    default: 100
  },
  step: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: [Number],
    default: 0
  },
  isRange: {
    type: Boolean,
    default: false
  },
  rangeValue: {
    type: Array as PropType<Array<number>>,
    default: () => [0, 0] as Array<number>
  },
  activeColor: {
    type: String,
    default: '#2979ff'
  },
  inactiveColor: {
    type: String,
    default: '#c0c4cc'
  },
  blockSize: {
    type: [Number, String],
    default: 30
  },
  blockColor: {
    type: String,
    default: '#ffffff'
  },
  blockStyle: {
    type: Object,
    default: () => ({})
  },
  disabled: {
    type: Boolean,
    default: false
  },
  height: {
    type: [Number, String],
    default: '6rpx'
  },
  showValue: {
    type: Boolean,
    default: false
  },
  useNative: {
    type: Boolean,
    default: false
  },
  innerStyle: {
    type: Object,
    default: () => ({})
  },
  customStyle: {
    type: Object,
    default: () => ({})
  }
},
  emits: ['start', 'changing', 'change', 'update:modelValue'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()

const startX = ref<number>(0)
const status = ref<string>('end')
const newValue = ref<number>(0)
const distanceX = ref<number>(0)
const startValue0 = ref<number>(0)
const startValue = ref<number>(0)

const barStyle0 = ref<barStyleType>({
  width: '0px'
} as barStyleType)

const barStyle = ref<barStyleType>({
  width: '0px',
  transition: ''
} as barStyleType)

const sliderRect = ref<sliderRectType>({
  left: 0,
  width: 0
} as sliderRectType)

const innerStyleCpu = computed<UTSJSONObject>(() => {
  const style = (props.innerStyle ?? {}) as UTSJSONObject
  style['height'] = (props.isRange && props.showValue)
    ? (parseFloat(getPx(props.blockSize)) + 24).toString() + 'px'
    : (getPx(props.blockSize)) + 'px'
  return style
})

const sliderCustomStyle = computed((): UTSJSONObject => {
  return addStyle(props.customStyle) as UTSJSONObject
})

const computedBlockSize = computed((): number => {
  return parseFloat(getPx(props.blockSize))
})

const baseStyleCpu = computed<UTSJSONObject>(() => {
  return {
    height: props.height,
    backgroundColor: props.inactiveColor
  } as UTSJSONObject
})

const rangeGap0StyleCpu = computed<UTSJSONObject>(() => {
  return {
    width: barStyle0.value.width,
    transition: barStyle0.value.transition ?? '',
    height: props.height,
    marginTop: '-' + props.height,
    backgroundColor: props.inactiveColor
  } as UTSJSONObject
})

const blockStyleCpu = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-slider/up-slider.uvue", 222, 9), } as UTSJSONObject
  if (props.blockStyle != null) {
    UTSJSONObject.assign(style, props.blockStyle as UTSJSONObject)
  }
  style['height'] = getPx(props.blockSize, true)
  style['width'] = getPx(props.blockSize, true)
  style['backgroundColor'] = props.blockColor
  return style
})

const gapStyleCpu = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-slider/up-slider.uvue", 233, 9), } as UTSJSONObject
  style['width'] = barStyle.value.width
  style['transition'] = barStyle.value.transition ?? ''
  style['height'] = props.height
  style['marginTop'] = '-' + props.height
  if (props.activeColor != '#2979ff') {
    style['backgroundColor'] = props.activeColor
  }
  return style
})

const btnWrapStyle0 = computed((): UTSJSONObject => {
  const leftVal = (parseFloat(getPx(barStyle0.value.width)) + parseFloat(getPx(props.blockSize)) / 2).toString() + 'px'
  return {
    left: leftVal
  } as UTSJSONObject
})

const btnWrapStyle1 = computed((): UTSJSONObject => {
  const leftVal = (parseFloat(getPx(barStyle.value.width)) + parseFloat(getPx(props.blockSize)) / 2).toString() + 'px'
  return {
    left: leftVal
  } as UTSJSONObject
})

function format(value: number, index = 1): number {
  const minVal = parseFloat(props.min.toString())
  const maxVal = parseFloat(props.max.toString())
  const stepVal = parseFloat(props.step.toString())

  if (props.isRange) {
    switch (index) {
      case 0:
        return Math.round(
          Math.max(minVal, Math.min(value, parseFloat(props.rangeValue[1].toString()) - stepVal, maxVal)) / stepVal
        ) * stepVal
      case 1:
        return Math.round(
          Math.max(minVal, parseFloat(props.rangeValue[0].toString()) + stepVal, Math.min(value, maxVal)) / stepVal
        ) * stepVal
      default:
        break
    }
  } else {
    return Math.round(
      Math.max(minVal, Math.min(value, maxVal)) / stepVal
    ) * stepVal
  }
  return 0
}

function updateValue(value: number, drag: boolean, index = 1): any {
  let valueFormat: number = format(value, index)
  const maxVal = parseFloat(props.max.toString())
  const minVal = parseFloat(props.min.toString())
  if (valueFormat > maxVal) {
    valueFormat = maxVal
  }
  const width = Math.min((valueFormat - minVal) / (maxVal - minVal) * sliderRect.value.width, sliderRect.value.width)
  const bStyle = {
    width: width.toString() + 'px',
    transition: drag ? 'none' : ''
  } as barStyleType

  if (props.isRange) {
    props.rangeValue[index] = valueFormat
    emit('update:modelValue', props.rangeValue)
  } else {
    emit('update:modelValue', valueFormat)
  }

  switch (index) {
    case 0:
      barStyle0.value.width = bStyle.width
      break
    case 1:
      barStyle.value.width = bStyle.width
      break
    default:
      break
  }
  return props.isRange ? props.rangeValue : valueFormat
}

function init() {
  if (props.isRange) {
    updateValue(parseFloat(props.rangeValue[0].toString()), false, 0)
    updateValue(parseFloat(props.rangeValue[1].toString()), false, 1)
  } else {
    updateValue(props.modelValue, false, 1)
  }
}

function changingHandler(e: UniSliderChangeEvent) {
  const value = e.detail.value
  emit('update:modelValue', value)
  emit('changing', value)
}

function changeHandler(e: UniSliderChangeEvent) {
  const value = e.detail.value
  emit('update:modelValue', value)
  emit('change', value)
}

function onTouchStart(e: any, index = 1) {
  const event = e as UniTouchEvent
  if (props.disabled) return
  startX.value = 0
  const touches = event.touches[0]
  startX.value = touches.clientX
  if (props.isRange) {
    startValue0.value = format(parseFloat(props.rangeValue[0].toString()), 0)
    startValue.value = format(parseFloat(props.rangeValue[1].toString()), 1)
  } else {
    startValue.value = format(props.modelValue)
  }
  status.value = 'start'
  let clientX = touches.clientX
  distanceX.value = clientX - sliderRect.value.left
  const minVal = parseFloat(props.min.toString())
  const maxVal = parseFloat(props.max.toString())
  newValue.value = ((distanceX.value / sliderRect.value.width) * (maxVal - minVal)) + minVal
  status.value = 'moving'
  const crtFmt = updateValue(newValue.value, true, index)
  emit('changing', crtFmt)
}

function onTouchMove(e: any, index = 1) {
  const event = e as UniTouchEvent
  if (props.disabled) return
  if (status.value == 'start') emit('start')
  const touches = event.touches[0]
  let clientX = touches.clientX
  distanceX.value = clientX - sliderRect.value.left
  const minVal = parseFloat(props.min.toString())
  const maxVal = parseFloat(props.max.toString())
  newValue.value = ((distanceX.value / sliderRect.value.width) * (maxVal - minVal)) + minVal
  status.value = 'moving'
  const crtFmt = updateValue(newValue.value, true, index)
  emit('changing', crtFmt)
}

function onTouchEnd(e: any, index = 1) {
  if (props.disabled) return
  if (status.value === 'moving') {
    const crtFmt = updateValue(newValue.value, false, index)
    emit('change', crtFmt)
  }
  status.value = 'end'
}

function onTouchStart2(e: any, index = 1) {}
function onTouchMove2(e: any, index = 1) {}
function onTouchEnd2(e: any, index = 1) {}

function onClick(event: UniPointerEvent) {
  if (props.disabled) return
  const clientX = event.x - sliderRect.value.left
  const minVal = parseFloat(props.min.toString())
  const maxVal = parseFloat(props.max.toString())
  newValue.value = ((clientX / sliderRect.value.width) * (maxVal - minVal)) + minVal
  updateValue(newValue.value, false, 1)
}

watch((): number => props.modelValue, (n: number) => {
  if (status.value == 'end') {
    const crtFmt = updateValue(props.modelValue, false, 1)
    emit('change', crtFmt)
  }
})

watch((): Array<number> => props.rangeValue, (n: Array<number>) => {
  if (status.value == 'end') {
    updateValue(n[0], false, 0)
    updateValue(n[1], false, 1)
    emit('change', n)
  }
}, { deep: true })

onMounted(() => {
  if (!props.useNative) {
    upGetRect('.up-slider__base', false, instance?.proxy).then((rect: NodeInfo) => {
      sliderRect.value.width = rect.width ?? 0
      sliderRect.value.left = rect.left ?? 0
      init()
    })
  }
})

return (): any | null => {

const _component_slider = resolveComponent("slider")

  return _cE("view", _uM({
    class: "up-slider",
    style: _nS(sliderCustomStyle.value)
  }), [
    isTrue(!_ctx.useNative || _ctx.isRange)
      ? _cE(Fragment, _uM({ key: 0 }), [
          _cE("view", _uM({
            ref: "upSliderInnerRef",
            class: _nC(["up-slider-inner", [_ctx.disabled ? 'up-slider--disabled' : '']]),
            onClick: onClick,
            "on:onTouchStart": ($event: any) => {onTouchStart2($event, 1)},
            onTouchmove: ($event: any) => {onTouchMove2($event, 1)},
            onTouchend: ($event: any) => {onTouchEnd2($event, 1)},
            onTouchcancel: ($event: any) => {onTouchEnd2($event, 1)},
            style: _nS(innerStyleCpu.value)
          }), [
            _cE("view", _uM({
              class: "up-slider__base",
              style: _nS(baseStyleCpu.value)
            }), null, 4 /* STYLE */),
            _cE("view", _uM({
              onClick: onClick,
              class: "up-slider__gap",
              style: _nS(gapStyleCpu.value)
            }), null, 4 /* STYLE */),
            isTrue(_ctx.isRange)
              ? _cE("view", _uM({
                  key: 0,
                  class: "up-slider__gap up-slider__gap-0",
                  style: _nS(rangeGap0StyleCpu.value)
                }), null, 4 /* STYLE */)
              : _cC("v-if", true),
            isTrue(_ctx.isRange && _ctx.showValue)
              ? _cE("text", _uM({
                  key: 1,
                  class: "up-slider__show-range-value",
                  style: _nS(btnWrapStyle0.value)
                }), _tD(_ctx.rangeValue[0] ?? ''), 5 /* TEXT, STYLE */)
              : _cC("v-if", true),
            isTrue(_ctx.isRange && _ctx.showValue)
              ? _cE("text", _uM({
                  key: 2,
                  class: "up-slider__show-range-value",
                  style: _nS(btnWrapStyle1.value)
                }), _tD(_ctx.rangeValue[1] ?? ''), 5 /* TEXT, STYLE */)
              : _cC("v-if", true),
            isTrue(_ctx.isRange)
              ? _cE("view", _uM({
                  key: 3,
                  class: "up-slider__button-wrap up-slider__button-wrap-0",
                  onTouchstart: ($event: any) => {onTouchStart($event, 0)},
                  onTouchmove: ($event: any) => {onTouchMove($event, 0)},
                  onTouchend: ($event: any) => {onTouchEnd($event, 0)},
                  onTouchcancel: ($event: any) => {onTouchEnd($event, 0)},
                  style: _nS(btnWrapStyle0.value)
                }), [
                  _ctx.$slots['min'] != null
                    ? renderSlot(_ctx.$slots, "min", _uM({ key: 0 }))
                    : _cE("view", _uM({
                        key: 1,
                        class: "up-slider__button",
                        style: _nS(blockStyleCpu.value)
                      }), null, 4 /* STYLE */)
                ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"])
              : _cC("v-if", true),
            _cE("view", _uM({
              class: "up-slider__button-wrap",
              onTouchstart: ($event: any) => {onTouchStart($event, 1)},
              onTouchmove: ($event: any) => {onTouchMove($event, 1)},
              onTouchend: ($event: any) => {onTouchEnd($event, 1)},
              onTouchcancel: ($event: any) => {onTouchEnd($event, 1)},
              style: _nS(btnWrapStyle1.value)
            }), [
              isTrue(_ctx.isRange && _ctx.$slots['max'] != null)
                ? renderSlot(_ctx.$slots, "max", _uM({ key: 0 }))
                : _ctx.$slots['default'] != null
                  ? renderSlot(_ctx.$slots, "default", _uM({ key: 1 }))
                  : _cE("view", _uM({
                      key: 2,
                      class: "up-slider__button",
                      style: _nS(blockStyleCpu.value)
                    }), null, 4 /* STYLE */)
            ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"])
          ], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, ["on:onTouchStart", "onTouchmove", "onTouchend", "onTouchcancel"]),
          isTrue(_ctx.showValue && !_ctx.isRange)
            ? _cE("view", _uM({
                key: 0,
                class: "up-slider__show-value"
              }), _tD(_ctx.modelValue), 1 /* TEXT */)
            : _cC("v-if", true)
        ], 64 /* STABLE_FRAGMENT */)
      : _cV(_component_slider, _uM({
          key: 1,
          class: "up-slider__native",
          min: parseFloat(_ctx.min.toString()),
          max: parseFloat(_ctx.max.toString()),
          step: parseFloat(_ctx.step.toString()),
          value: parseFloat(_ctx.modelValue.toString()),
          activeColor: _ctx.activeColor,
          backgroundColor: _ctx.inactiveColor,
          blockSize: computedBlockSize.value,
          blockColor: _ctx.blockColor,
          showValue: _ctx.showValue,
          disabled: _ctx.disabled,
          onChanging: changingHandler,
          onChange: changeHandler
        }), null, 8 /* PROPS */, ["min", "max", "step", "value", "activeColor", "backgroundColor", "blockSize", "blockColor", "showValue", "disabled"])
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpSliderComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpSliderUpSliderStyles = [_uM([["up-slider", _pS(_uM([["position", "relative"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"]]))], ["up-slider__native", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-slider-inner", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "column"], ["position", "relative"], ["borderTopLeftRadius", 999], ["borderTopRightRadius", 999], ["borderBottomRightRadius", 999], ["borderBottomLeftRadius", 999], ["paddingTop", 10], ["paddingRight", 18], ["paddingBottom", 10], ["paddingLeft", 18], ["justifyContent", "center"]]))], ["up-slider__show-value", _pS(_uM([["marginTop", 10], ["marginRight", 18], ["marginBottom", 10], ["marginLeft", 0]]))], ["up-slider__show-range-value", _pS(_uM([["paddingTop", 2], ["fontSize", 12], ["lineHeight", "12px"], ["position", "absolute"], ["bottom", 0]]))], ["up-slider__base", _pS(_uM([["backgroundColor", "#ebedf0"]]))], ["up-slider__gap", _pS(_uM([["position", "relative"], ["borderTopLeftRadius", 999], ["borderTopRightRadius", 999], ["borderBottomRightRadius", 999], ["borderBottomLeftRadius", 999], ["transitionProperty", "width"], ["transitionDuration", "0.2s"], ["backgroundColor", "var(--theme-color, #0957de)"], ["alignSelf", "flex-start"]]))], ["up-slider__button", _pS(_uM([["width", 24], ["height", 24], ["borderTopLeftRadius", 999], ["borderTopRightRadius", 999], ["borderBottomRightRadius", 999], ["borderBottomLeftRadius", 999], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#d0d0d0"], ["borderRightColor", "#d0d0d0"], ["borderBottomColor", "#d0d0d0"], ["borderLeftColor", "#d0d0d0"], ["backgroundColor", "#ffffff"]]))], ["up-slider__button-wrap", _pS(_uM([["position", "absolute"]]))], ["up-slider--disabled", _pS(_uM([["opacity", 0.5]]))], ["@TRANSITION", _uM([["up-slider__gap", _uM([["property", "width"], ["duration", "0.2s"]])]])]])]
