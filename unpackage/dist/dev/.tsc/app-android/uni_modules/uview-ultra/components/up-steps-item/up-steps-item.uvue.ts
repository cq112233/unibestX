import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { computed, inject, ref, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'


const __sfc__ = defineComponent({
  __name: 'up-steps-item',
name: 'up-steps-item',
  props: {
  title: {
    type: [String, Number],
    default: ''
  },
  desc: {
    type: [String, Number],
    default: ''
  },
  iconSize: {
    type: [String, Number],
    default: 17
  },
  error: {
    type: Boolean,
    default: false
  },
  index: {
    type: [Number, String],
    default: null
  },
  itemStyle: {
    type: Object,
    default: () => ({})
  }
},
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

const parentProps = inject<ComputedRef<UTSJSONObject> | null>('upStepsProps', null)
const registerStep = inject<(() => number) | null>('upStepsRegister', null)
const totalSteps = inject<Ref<number> | null>('upStepsItemCount', null)

const internalIndex = ref<number>(0)

onMounted(() => {
  if (props.index != null) {
    internalIndex.value = parseInt(props.index!.toString())
  } else if (registerStep != null) {
    internalIndex.value = registerStep()
  }
})

function getParentProp(key: string, defaultVal: any): any {
  if (parentProps == null) return defaultVal
  const obj = parentProps!.value
  if (obj != null && obj[key] != null) {
    return (obj[key] ?? defaultVal) as any
  }
  return defaultVal
}

const stepIndex = computed<number>((): number => {
  if (props.index != null) return parseInt(props.index!.toString())
  return internalIndex.value
})

const childLength = computed<number>((): number => {
  return totalSteps?.value ?? 0
})

const direction = computed<string>((): string => {
  return getParentProp('direction', 'row').toString()
})

const currentStep = computed<number>((): number => {
  const c = getParentProp('current', 0)
  return parseInt(c.toString())
})

const activeColor = computed<string>((): string => {
  return getParentProp('activeColor', '#3c9cff').toString()
})

const inactiveColor = computed<string>((): string => {
  return getParentProp('inactiveColor', '#969799').toString()
})

const activeIcon = computed<string>((): string => {
  return getParentProp('activeIcon', '').toString()
})

const inactiveIcon = computed<string>((): string => {
  return getParentProp('inactiveIcon', '').toString()
})

const isDot = computed<boolean>((): boolean => {
  return (getParentProp('dot', false) as boolean | null) ?? false
})

const statusClass = computed<string>((): string => {
  if (props.error) return 'error'
  if (stepIndex.value < currentStep.value) return 'finish'
  if (stepIndex.value == currentStep.value) return 'process'
  return 'wait'
})

const itemContainerStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 196, 9), } as UTSJSONObject
  if (direction.value == 'row') {
    style['flex'] = '1'
  } else {
    style['width'] = '100%'
  }
  return style
})

const itemStyleInner = computed((): UTSJSONObject => {
  return (props.itemStyle ?? {}) as UTSJSONObject
})

const contentStyle = computed((): UTSJSONObject => {
  return {} as UTSJSONObject
})

// 水平左连接线（连接上一节点）
const lineLeftStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 215, 9), } as UTSJSONObject
  if (stepIndex.value <= currentStep.value) {
    style['backgroundColor'] = activeColor.value
  } else {
    style['backgroundColor'] = inactiveColor.value
  }
  return style
})

// 水平右连接线（连接下一节点）
const lineRightStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 226, 9), } as UTSJSONObject
  if (stepIndex.value < currentStep.value) {
    style['backgroundColor'] = activeColor.value
  } else {
    style['backgroundColor'] = inactiveColor.value
  }
  return style
})

// 垂直上连接线
const lineColTopStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 237, 9), } as UTSJSONObject
  if (stepIndex.value <= currentStep.value) {
    style['backgroundColor'] = activeColor.value
  } else {
    style['backgroundColor'] = inactiveColor.value
  }
  return style
})

// 垂直下连接线
const lineColBottomStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 248, 9), } as UTSJSONObject
  if (stepIndex.value < currentStep.value) {
    style['backgroundColor'] = activeColor.value
  } else {
    style['backgroundColor'] = inactiveColor.value
  }
  return style
})

const dotStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 258, 9), } as UTSJSONObject
  if (statusClass.value == 'finish' || statusClass.value == 'process') {
    style['backgroundColor'] = activeColor.value
  } else {
    style['backgroundColor'] = inactiveColor.value
  }
  return style
})

const circleStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 268, 9), } as UTSJSONObject
  if (statusClass.value == 'process') {
    style['backgroundColor'] = activeColor.value
    style['borderColor'] = activeColor.value
  } else if (statusClass.value == 'finish') {
    style['backgroundColor'] = '#ffffff'
    style['borderColor'] = activeColor.value
  } else if (statusClass.value == 'error') {
    style['backgroundColor'] = '#ffffff'
    style['borderColor'] = '#f56c6c'
  } else {
    style['backgroundColor'] = '#ffffff'
    style['borderColor'] = inactiveColor.value
  }
  return style
})

const circleTextStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 286, 9), } as UTSJSONObject
  if (statusClass.value == 'process') {
    style['color'] = '#ffffff'
  } else {
    style['color'] = inactiveColor.value
  }
  return style
})

const titleStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 296, 9), } as UTSJSONObject
  if (statusClass.value == 'process' || statusClass.value == 'finish') {
    style['color'] = '#303133'
    style['fontWeight'] = 'bold'
  } else {
    style['color'] = inactiveColor.value
  }
  return style
})

const descStyle = computed((): UTSJSONObject => {
  const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue", 307, 9), } as UTSJSONObject
  style['color'] = '#909399'
  return style
})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: _nC(["up-steps-item", [`up-steps-item--${direction.value}`]]),
    style: _nS(itemContainerStyle.value)
  }), [
    isTrue(direction.value == 'row' && stepIndex.value > 0)
      ? _cE("view", _uM({
          key: 0,
          class: "up-steps-item__line up-steps-item__line--row-left",
          style: _nS(lineLeftStyle.value)
        }), null, 4 /* STYLE */)
      : _cC("v-if", true),
    isTrue(direction.value == 'row' && (childLength.value == 0 || stepIndex.value < childLength.value - 1))
      ? _cE("view", _uM({
          key: 1,
          class: "up-steps-item__line up-steps-item__line--row-right",
          style: _nS(lineRightStyle.value)
        }), null, 4 /* STYLE */)
      : _cC("v-if", true),
    isTrue(direction.value == 'column' && stepIndex.value > 0)
      ? _cE("view", _uM({
          key: 2,
          class: "up-steps-item__line up-steps-item__line--col-top",
          style: _nS(lineColTopStyle.value)
        }), null, 4 /* STYLE */)
      : _cC("v-if", true),
    isTrue(direction.value == 'column' && (childLength.value == 0 || stepIndex.value < childLength.value - 1))
      ? _cE("view", _uM({
          key: 3,
          class: "up-steps-item__line up-steps-item__line--col-bottom",
          style: _nS(lineColBottomStyle.value)
        }), null, 4 /* STYLE */)
      : _cC("v-if", true),
    _cE("view", _uM({
      class: _nC(["up-steps-item__wrapper", [`up-steps-item__wrapper--${direction.value}`, isDot.value ? `up-steps-item__wrapper--${direction.value}--dot` : '']]),
      style: _nS(itemStyleInner.value)
    }), [
      renderSlot(_ctx.$slots, "icon", {}, (): any[] => [
        isTrue(isDot.value)
          ? _cE("view", _uM({
              key: 0,
              class: "up-steps-item__wrapper__dot",
              style: _nS(dotStyle.value)
            }), null, 4 /* STYLE */)
          : isTrue(activeIcon.value != '' || inactiveIcon.value != '')
            ? _cE("view", _uM({
                key: 1,
                class: "up-steps-item__wrapper__icon"
              }), [
                _cV(_component_up_icon, _uM({
                  name: stepIndex.value <= currentStep.value ? (activeIcon.value != '' ? activeIcon.value : inactiveIcon.value) : (inactiveIcon.value != '' ? inactiveIcon.value : activeIcon.value),
                  size: _ctx.iconSize,
                  color: stepIndex.value <= currentStep.value ? (activeColor.value != '' ? activeColor.value : '#3c9cff') : inactiveColor.value
                }), null, 8 /* PROPS */, ["name", "size", "color"])
              ])
            : _cE("view", _uM({
                key: 2,
                class: "up-steps-item__wrapper__circle",
                style: _nS(circleStyle.value)
              }), [
                isTrue(statusClass.value == 'process' || statusClass.value == 'wait')
                  ? _cE("text", _uM({
                      key: 0,
                      class: "up-steps-item__wrapper__circle__text",
                      style: _nS(circleTextStyle.value)
                    }), _tD(stepIndex.value + 1), 5 /* TEXT, STYLE */)
                  : _cV(_component_up_icon, _uM({
                      key: 1,
                      color: statusClass.value == 'error' ? '#f56c6c' : (activeColor.value != '' ? activeColor.value : '#3c9cff'),
                      size: "12",
                      name: statusClass.value == 'error' ? 'close' : 'checkmark'
                    }), null, 8 /* PROPS */, ["color", "name"])
              ], 4 /* STYLE */)
      ])
    ], 6 /* CLASS, STYLE */),
    _cE("view", _uM({
      class: _nC(["up-steps-item__content", [`up-steps-item__content--${direction.value}`]]),
      style: _nS(contentStyle.value)
    }), [
      renderSlot(_ctx.$slots, "content", _uM({ index: stepIndex.value }), (): any[] => [
        renderSlot(_ctx.$slots, "title", {}, (): any[] => [
          _cE("text", _uM({
            class: "up-steps-item__content__title-text",
            style: _nS(titleStyle.value)
          }), _tD(_ctx.title.toString()), 5 /* TEXT, STYLE */)
        ]),
        renderSlot(_ctx.$slots, "desc", {}, (): any[] => [
          _ctx.desc.toString() != ''
            ? _cE("text", _uM({
                key: 0,
                class: "up-steps-item__content__desc-text",
                style: _nS(descStyle.value)
              }), _tD(_ctx.desc.toString()), 5 /* TEXT, STYLE */)
            : _cC("v-if", true)
        ])
      ])
    ], 6 /* CLASS, STYLE */)
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type UpStepsItemComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItemStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-steps-item", _pS(_uM([["position", "relative"], ["display", "flex"]]))], ["up-steps-item--row", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["flexDirection", "column"], ["alignItems", "center"], ["justifyContent", "flex-start"]]))], ["up-steps-item--column", _pS(_uM([["flexDirection", "row"], ["alignItems", "flex-start"], ["width", "100%"], ["minHeight", 60]]))], ["up-steps-item__wrapper", _pS(_uM([["display", "flex"], ["justifyContent", "center"], ["alignItems", "center"], ["position", "relative"], ["backgroundColor", "#ffffff"], ["zIndex", 2]]))], ["up-steps-item__wrapper--row", _pS(_uM([["height", 24], ["width", 24]]))], ["up-steps-item__wrapper--row--dot", _pS(_uM([["width", 16], ["height", 16]]))], ["up-steps-item__wrapper--column", _pS(_uM([["width", 24], ["height", 24], ["marginRight", 10]]))], ["up-steps-item__wrapper--column--dot", _pS(_uM([["height", 16], ["width", 16]]))], ["up-steps-item__wrapper__circle", _pS(_uM([["width", 20], ["height", 20], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["up-steps-item__wrapper__circle__text", _pS(_uM([["fontSize", 11], ["textAlign", "center"], ["lineHeight", "11px"]]))], ["up-steps-item__wrapper__dot", _pS(_uM([["width", 8], ["height", 8], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100]]))], ["up-steps-item__content", _pS(_uM([["display", "flex"]]))], ["up-steps-item__content--row", _pS(_uM([["flexDirection", "column"], ["alignItems", "center"], ["textAlign", "center"], ["marginTop", 6], ["width", "100%"]]))], ["up-steps-item__content--column", _pS(_uM([["flexDirection", "column"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["paddingBottom", 16]]))], ["up-steps-item__content__title-text", _pS(_uM([["fontSize", 13], ["lineHeight", "18px"], ["textAlign", "center"]]))], ["up-steps-item__content__desc-text", _pS(_uM([["fontSize", 11], ["lineHeight", "16px"], ["marginTop", 2], ["textAlign", "center"]]))], ["up-steps-item__line", _pS(_uM([["position", "absolute"], ["zIndex", 1]]))], ["up-steps-item__line--row-left", _pS(_uM([["top", 11], ["left", 0], ["width", "50%"], ["height", 2]]))], ["up-steps-item__line--row-right", _pS(_uM([["top", 11], ["left", "50%"], ["width", "50%"], ["height", 2]]))], ["up-steps-item__line--col-top", _pS(_uM([["top", 0], ["left", 11], ["width", 2], ["height", 12]]))], ["up-steps-item__line--col-bottom", _pS(_uM([["top", 12], ["bottom", 0], ["left", 11], ["width", 2]]))]])]
