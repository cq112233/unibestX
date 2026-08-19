import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { computed, ref, watch, onMounted, nextTick } from 'vue'
import { getPx, addUnit } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-number-box',
name: 'up-number-box',
  props: {
  name: {
    type: [String, Number],
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number],
    default: 1
  },
  max: {
    type: [String, Number],
    default: 999999999
  },
  step: {
    type: [String, Number],
    default: 1
  },
  integer: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disabledInput: {
    type: Boolean,
    default: false
  },
  asyncChange: {
    type: Boolean,
    default: false
  },
  inputWidth: {
    type: [String, Number],
    default: 35
  },
  showMinus: {
    type: Boolean,
    default: true
  },
  showPlus: {
    type: Boolean,
    default: true
  },
  decimalLength: {
    type: [String, Number],
    default: 0
  },
  longPress: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: '#323233'
  },
  buttonWidth: {
    type: [String, Number],
    default: 35
  },
  buttonSize: {
    type: [String, Number],
    default: 30
  },
  buttonRadius: {
    type: String,
    default: '4px'
  },
  bgColor: {
    type: String,
    default: '#EBECEE'
  },
  disabledBgColor: {
    type: String,
    default: '#f7f8fa'
  },
  inputBgColor: {
    type: String,
    default: ''
  },
  cursorSpacing: {
    type: [String, Number],
    default: 100
  },
  disablePlus: {
    type: Boolean,
    default: false
  },
  disableMinus: {
    type: Boolean,
    default: false
  },
  iconStyle: {
    type: [Object, String],
    default: () => ({})
  },
  miniMode: {
    type: Boolean,
    default: false
  }
},
  emits: ['update:modelValue', 'focus', 'blur', 'overlimit', 'change', 'plus', 'minus'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const type = ref<string>('')
const currentValue = ref<string | number>('')
const longPressTimer = ref<number | null>(null)

const hideMinus = computed<boolean>(() => {
  return currentValue.value.toString() == '0' && props.miniMode == true
})

const getCursorSpacing = computed<string>(() => {
  return getPx(props.cursorSpacing)
})

const inputStyle = computed<UTSJSONObject>(() => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue", 225, 9), 
    color: props.color,
    backgroundColor: props.inputBgColor != '' ? props.inputBgColor : props.bgColor,
    height: addUnit(props.buttonSize),
    width: addUnit(props.inputWidth)
  } as UTSJSONObject
  return style
})

function filter(value: string | number): string {
  let val = value.toString()
  val = val.replace(/[^0-9.-]/g, '')
  if (props.integer && val.indexOf('.') != -1) {
    val = val.split('.')[0]
  }
  return val
}

function format(value: string): number {
  const filtered = filter(value)
  let valueNum: number = filtered == '' ? 0 : parseFloat(filtered)
  const minVal = parseFloat(props.min.toString())
  const maxVal = parseFloat(props.max.toString())
  valueNum = Math.max(Math.min(maxVal, valueNum), minVal)
  const decimalLen = parseInt(props.decimalLength.toString())
  if (decimalLen != 0 && valueNum != 0) {
    valueNum = parseFloat(valueNum.toFixed(decimalLen))
  }
  return valueNum
}

function isDisabled(btnType: string): boolean {
  if (btnType === 'plus') {
    return props.disabled || props.disablePlus
  }
  return (
    props.disabled ||
    props.disableMinus ||
    parseFloat(currentValue.value.toString()) <= parseFloat(props.min.toString())
  )
}

function buttonStyle(btnType: string): UTSJSONObject {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-number-box/up-number-box.uvue", 268, 9), 
    backgroundColor: props.bgColor,
    width: addUnit(props.buttonWidth),
    height: addUnit(props.buttonSize),
    borderRadius: props.buttonRadius
  } as UTSJSONObject
  if (isDisabled(btnType)) {
    style['backgroundColor'] = props.disabledBgColor
  }
  return style
}

function emitChange(value: string | number, changeType: string = '') {
  if (!props.asyncChange) {
    nextTick(() => {
      emit('update:modelValue', value)
      currentValue.value = value
    })
  }
  emit('change', {
    value: parseFloat(value.toString()),
    name: props.name,
    type: changeType
  } as UTSJSONObject)
}

function check() {
  const val = format(currentValue.value.toString())
  if (val !== currentValue.value) {
    currentValue.value = val
    emitChange(val)
  }
}

function add(num1: number, num2: number): number {
  const cardinal = Math.pow(10, 10)
  return Math.round((num1 + num2) * cardinal) / cardinal
}

function onChange() {
  const crtType = type.value
  if (isDisabled(crtType)) {
    emit('overlimit', crtType)
    return
  }
  const stepVal = parseFloat(props.step.toString())
  const diff = crtType === 'minus' ? -stepVal : stepVal
  const value = format(add(parseFloat(currentValue.value.toString()), diff).toString())
  emitChange(value, crtType)
  if (crtType == 'plus') {
    emit('plus')
  } else if (crtType == 'minus') {
    emit('minus')
  }
}

function clearTimeoutHandler() {
  if (longPressTimer.value != null) {
    clearTimeout(longPressTimer.value!)
    longPressTimer.value = null
  }
}

function longPressStep() {
  clearTimeoutHandler()
  longPressTimer.value = setTimeout(() => {
    onChange()
    longPressStep()
  }, 250)
}

function onTouchStart(btnType: string) {
  if (!props.longPress) return
  clearTimeoutHandler()
  type.value = btnType
  longPressTimer.value = setTimeout(() => {
    onChange()
    longPressStep()
  }, 600)
}

function clickHandler(btnType: string): void {
  type.value = btnType
  onChange()
}

function onFocus(event: UniInputFocusEvent) {
  emit('focus', {
    ...event.detail,
    name: props.name,
  } as UTSJSONObject)
}

function onBlur(event: UniInputBlurEvent) {
  const value = format(event.detail.value)
  emitChange(value)
  emit('blur', {
    ...event.detail,
    name: props.name,
  } as UTSJSONObject)
}

function onInput(e: UniInputEvent) {
  const value = e.detail.value
  if (value === '') {
    currentValue.value = ''
    return
  }
  let formatted = filter(value.toString())
  emitChange(value)
  const decimalLen = parseInt(props.decimalLength.toString())
  if (formatted.indexOf('.') != -1 && decimalLen > 0) {
    const pair = formatted.split('.')
    formatted = `${pair[0]}.${pair[1].slice(0, decimalLen)}`
  }
  const formatted2 = format(formatted)
  emitChange(formatted2)
}

function init() {
  currentValue.value = format(props.modelValue != null ? props.modelValue.toString() : '0')
}

watch((): any => props.modelValue, (newV: string | number) => {
  if (newV !== currentValue.value) {
    currentValue.value = format(newV.toString())
  }
})

watch((): Array<any | null> => [props.integer, props.decimalLength, props.min, props.max] as Array<any | null>, () => {
  check()
})

onMounted(() => {
  init()
})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({ class: "up-number-box" }), [
    isTrue(_ctx.showMinus && !hideMinus.value && _ctx.$slots['minus'] != null)
      ? _cE("view", _uM({
          key: 0,
          class: "up-number-box__slot cursor-pointer",
          onClick: withModifiers(() => {clickHandler('minus')}, ["stop"]),
          onTouchstart: () => {onTouchStart('minus')},
          onTouchend: withModifiers(clearTimeoutHandler, ["stop"])
        }), [
          renderSlot(_ctx.$slots, "minus")
        ], 40 /* PROPS, NEED_HYDRATION */, ["onClick", "onTouchstart"])
      : isTrue(_ctx.showMinus && !hideMinus.value)
        ? _cE("view", _uM({
            key: 1,
            class: _nC(["up-number-box__minus cursor-pointer", _uM({'up-number-box__minus--disabled': isDisabled('minus') })]),
            onClick: withModifiers(() => {clickHandler('minus')}, ["stop"]),
            onTouchstart: () => {onTouchStart('minus')},
            onTouchend: withModifiers(clearTimeoutHandler, ["stop"]),
            "hover-class": "up-number-box__minus--hover",
            "hover-stay-time": "150",
            style: _nS(buttonStyle('minus'))
          }), [
            _cV(_component_up_icon, _uM({
              name: "minus",
              color: isDisabled('minus') ? '#c8c9cc' : '#323233',
              size: "15",
              bold: "",
              customStyle: _ctx.iconStyle
            }), null, 8 /* PROPS */, ["color", "customStyle"])
          ], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, ["onClick", "onTouchstart"])
        : _cC("v-if", true),
    isTrue(!hideMinus.value)
      ? renderSlot(_ctx.$slots, "input", _uM({ key: 2 }), (): any[] => [
          _cE("input", _uM({
            disabled: _ctx.disabledInput || _ctx.disabled,
            "cursor-spacing": getCursorSpacing.value,
            class: _nC([_uM({ 'up-number-box__input--disabled': _ctx.disabled || _ctx.disabledInput }), "up-number-box__input"]),
            modelValue: currentValue.value,
            onInput: [($event: UniInputEvent) => {(currentValue).value = $event.detail.value}, onInput] as Array<any | null>,
            onBlur: onBlur,
            onFocus: onFocus,
            type: "number",
            style: _nS(inputStyle.value)
          }), null, 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, ["disabled", "cursor-spacing", "modelValue", "onInput"])
        ])
      : _cC("v-if", true),
    isTrue(_ctx.showPlus && _ctx.$slots['plus'] != null)
      ? _cE("view", _uM({
          key: 3,
          class: "up-number-box__slot cursor-pointer",
          onClick: withModifiers(() => {clickHandler('plus')}, ["stop"]),
          onTouchstart: () => {onTouchStart('plus')},
          onTouchend: withModifiers(clearTimeoutHandler, ["stop"])
        }), [
          renderSlot(_ctx.$slots, "plus")
        ], 40 /* PROPS, NEED_HYDRATION */, ["onClick", "onTouchstart"])
      : isTrue(_ctx.showPlus)
        ? _cE("view", _uM({
            key: 4,
            class: _nC(["up-number-box__plus cursor-pointer", _uM({ 'up-number-box__minus--disabled': isDisabled('plus') })]),
            onClick: withModifiers(() => {clickHandler('plus')}, ["stop"]),
            onTouchstart: () => {onTouchStart('plus')},
            onTouchend: withModifiers(clearTimeoutHandler, ["stop"]),
            "hover-class": "up-number-box__plus--hover",
            "hover-stay-time": "150",
            style: _nS(buttonStyle('plus'))
          }), [
            _cV(_component_up_icon, _uM({
              name: "plus",
              color: isDisabled('plus') ? '#c8c9cc' : '#323233',
              size: "15",
              bold: "",
              customStyle: _ctx.iconStyle
            }), null, 8 /* PROPS */, ["color", "customStyle"])
          ], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, ["onClick", "onTouchstart"])
        : _cC("v-if", true)
  ])
}
}

})
export default __sfc__
export type UpNumberBoxComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBoxStyles = [_uM([["up-number-box", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"]]))], ["up-number-box__plus", _pS(_uM([["width", 35], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4]]))], ["up-number-box__minus", _pS(_uM([["width", 35], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["borderTopLeftRadius", 4], ["borderBottomLeftRadius", 4]]))], ["up-number-box__plus--hover", _pS(_uM([["!backgroundColor", "#E6E6E6"]]))], ["up-number-box__minus--hover", _pS(_uM([["!backgroundColor", "#E6E6E6"]]))], ["up-number-box__plus--disabled", _pS(_uM([["backgroundColor", "#f7f8fa"]]))], ["up-number-box__minus--disabled", _pS(_uM([["backgroundColor", "#f7f8fa"]]))], ["up-number-box__input", _pS(_uM([["textAlign", "center"], ["fontSize", 15], ["paddingTop", 0], ["paddingRight", 0], ["paddingBottom", 0], ["paddingLeft", 0], ["marginTop", 0], ["marginRight", 2], ["marginBottom", 0], ["marginLeft", 2]]))], ["up-number-box__input--disabled", _pS(_uM([["color", "#c8c9cc"], ["backgroundColor", "#f2f3f5"]]))]])]
