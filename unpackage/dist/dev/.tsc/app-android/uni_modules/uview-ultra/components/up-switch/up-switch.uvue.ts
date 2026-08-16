import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import { computed, nextTick } from 'vue'
import { addStyle, getPx, addUnit, deepMerge } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-switch',
name: 'up-switch',
  props: {
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: [String, Number],
    default: 25
  },
  activeColor: {
    type: String,
    default: '#2979ff'
  },
  inactiveColor: {
    type: String,
    default: '#ffffff'
  },
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  asyncChange: {
    type: Boolean,
    default: false
  },
  space: {
    type: [String, Number],
    default: 0
  },
  customStyle: {
    type: Object,
    default: () => ({})
  }
},
  emits: ['update:modelValue', 'change'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const isActive = computed<boolean>(() => {
  return props.modelValue == props.activeValue
})

const customInactiveColor = computed<boolean>(() => {
  return props.inactiveColor != '#fff' && props.inactiveColor != '#ffffff'
})

const loadingIconSize = computed((): number => {
  return parseInt(getPx(props.size)) * 0.6
})

const switchClass = computed<string>(() => {
  let classes = ['up-switch', 'cursor-pointer']
  if (props.disabled) {
    classes.push('up-switch--disabled')
  }
  if (isActive.value) {
    classes.push('up-switch--on')
  } else {
    classes.push('up-switch--off')
  }
  return classes.join(' ')
})

const switchStyle = computed<UTSJSONObject>(() => {
  let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-switch/up-switch.uvue", 118, 7), } as UTSJSONObject
  if (props.size.toString() != '25') {
    style['width'] = addUnit(parseInt(props.size.toString()) * 2 + 2)
    style['height'] = addUnit(parseInt(props.size.toString()) + 2)
  }
  if (isActive.value) {
    style['borderColor'] = 'rgba(0, 0, 0, 0)'
  } else {
    if (customInactiveColor.value) {
      style['borderColor'] = 'rgba(0, 0, 0, 0)'
    } else {
      style['borderColor'] = 'rgba(0, 0, 0, 0.12)'
    }
  }
  return style
})

const mergedSwitchStyle = computed((): UTSJSONObject => {
  return deepMerge(switchStyle.value, addStyle(props.customStyle)) as UTSJSONObject
})

const bgActiveStyle = computed<UTSJSONObject>(() => {
  let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-switch/up-switch.uvue", 140, 7), } as UTSJSONObject
  style['width'] = addUnit(parseInt(props.size.toString()) * 2 + 2)
  style['height'] = addUnit(parseInt(props.size.toString()) + 2)
  if (props.activeColor != '#2979ff') {
    style['backgroundColor'] = props.activeColor
  }
  return style
})

const nodeStyle = computed<UTSJSONObject>(() => {
  let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-switch/up-switch.uvue", 150, 7), } as UTSJSONObject
  const sizeVal = parseInt(props.size.toString())
  const spaceVal = parseInt(props.space.toString())
  style['width'] = addUnit(sizeVal - spaceVal)
  style['height'] = addUnit(sizeVal - spaceVal)
  const translateX = isActive.value ? addUnit(props.space) : addUnit(props.size)
  style['transform'] = `translateX(-${translateX})`
  return style
})

const bgStyle = computed<UTSJSONObject>(() => {
  let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-switch/up-switch.uvue", 161, 7), } as UTSJSONObject
  style['width'] = addUnit(parseInt(props.size.toString()) * 2)
  style['height'] = addUnit(parseInt(props.size.toString()))
  style['backgroundColor'] = props.inactiveColor
  style['transform'] = `scale(${isActive.value ? 0 : 1})`
  return style
})

function clickHandler() {
  if (!props.disabled && !props.loading) {
    const oldValue = isActive.value ? props.inactiveValue : props.activeValue
    if (!props.asyncChange) {
      emit('update:modelValue', oldValue)
    }
    nextTick(() => {
      emit('change', oldValue)
    })
  }
}

return (): any | null => {

const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)

  return _cE("view", _uM({
    class: _nC(switchClass.value),
    style: _nS(mergedSwitchStyle.value),
    onClick: clickHandler
  }), [
    isTrue(isActive.value)
      ? _cE("view", _uM({
          key: 0,
          class: "up-switch__bg-active",
          style: _nS(bgActiveStyle.value)
        }), null, 4 /* STYLE */)
      : _cC("v-if", true),
    isTrue(!isActive.value)
      ? _cE("view", _uM({
          key: 1,
          class: "up-switch__bg",
          style: _nS(bgStyle.value)
        }), null, 4 /* STYLE */)
      : _cC("v-if", true),
    _cE("view", _uM({
      class: _nC(["up-switch__node", [_ctx.modelValue == _ctx.activeValue ? 'up-switch__node--on' : '']]),
      style: _nS(nodeStyle.value)
    }), [
      _cV(_component_up_loading_icon, _uM({
        show: _ctx.loading,
        mode: "circle",
        timingFunction: "linear",
        color: _ctx.modelValue == _ctx.activeValue ? _ctx.activeColor : '#AAABAD',
        size: loadingIconSize.value
      }), null, 8 /* PROPS */, ["show", "color", "size"])
    ], 6 /* CLASS, STYLE */)
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpSwitchComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpSwitchUpSwitchStyles = [_uM([["up-switch", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["position", "relative"], ["backgroundColor", "rgba(0,0,0,0)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["transitionProperty", "backgroundColor"], ["transitionDuration", "0.4s"], ["borderTopColor", "rgba(0,0,0,0.12)"], ["borderRightColor", "rgba(0,0,0,0.12)"], ["borderBottomColor", "rgba(0,0,0,0.12)"], ["borderLeftColor", "rgba(0,0,0,0.12)"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["justifyContent", "flex-end"], ["alignItems", "center"], ["overflow", "hidden"], ["width", 52], ["height", 27]]))], ["up-switch__bg-active", _pS(_uM([["position", "absolute"], ["top", -1], ["left", -1], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["backgroundColor", "var(--theme-color, #0957de)"], ["width", 52], ["height", 27]]))], ["up-switch__node", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["backgroundColor", "#ffffff"], ["boxShadow", "1px 1px 1px 0 rgba(0, 0, 0, 0.25)"], ["transitionProperty", "transform"], ["transitionDuration", "0.4s"], ["transitionTimingFunction", "cubic-bezier(0.3,1.05,0.4,1.05)"]]))], ["up-switch__bg", _pS(_uM([["position", "absolute"], ["borderTopLeftRadius", 0], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 0], ["backgroundColor", "#FFFFFF"], ["transitionProperty", "transform"], ["transitionDuration", "0.4s"], ["transitionTimingFunction", "ease"]]))], ["up-switch--disabled", _pS(_uM([["opacity", 0.6]]))], ["@TRANSITION", _uM([["up-switch", _uM([["property", "backgroundColor"], ["duration", "0.4s"]])], ["up-switch__node", _uM([["property", "transform"], ["duration", "0.4s"], ["timingFunction", "cubic-bezier(0.3,1.05,0.4,1.05)"]])], ["up-switch__bg", _uM([["property", "transform"], ["duration", "0.4s"], ["timingFunction", "ease"]])]])]])]
