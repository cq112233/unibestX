import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_transition from '@/uni_modules/uview-ultra/components/up-transition/up-transition.uvue'
import { computed } from 'vue'
import { image as testImage } from '../../libs/function/test.uts'
import { deepMerge } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-tag',
name: 'up-tag',
  props: {
  type: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: [Boolean, String],
    default: false
  },
  size: {
    type: String,
    default: 'medium'
  },
  shape: {
    type: String,
    default: 'square'
  },
  text: {
    type: [String, Number],
    default: ''
  },
  bgColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  closeColor: {
    type: String,
    default: '#C6C7CB'
  },
  name: {
    type: [String, Number],
    default: ''
  },
  plainFill: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
  show: {
    type: Boolean,
    default: true
  },
  icon: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: ''
  }
},
  emits: ['click', 'close'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const style = computed<UTSJSONObject>(() => {
  const s = { __$originalPosition: new UTSSourceMapPosition("s", "uni_modules/uview-ultra/components/up-tag/up-tag.uvue", 138, 9), } as UTSJSONObject
  if (props.bgColor != '') {
    s['backgroundColor'] = props.bgColor
  }
  if (props.color != '') {
    s['color'] = props.color
  }
  if (props.borderColor != '') {
    s['borderColor'] = props.borderColor
  }
  return s
})

const tagMergedStyle = computed<UTSJSONObject>(() => {
  const marginObj = { __$originalPosition: new UTSSourceMapPosition("marginObj", "uni_modules/uview-ultra/components/up-tag/up-tag.uvue", 152, 9), 
    marginRight: props.closable ? '10px' : '0px',
    marginTop: props.closable ? '10px' : '0px'
  } as UTSJSONObject
  return deepMerge(marginObj, style.value) as UTSJSONObject
})

const textColor = computed<UTSJSONObject>(() => {
  const s = { __$originalPosition: new UTSSourceMapPosition("s", "uni_modules/uview-ultra/components/up-tag/up-tag.uvue", 160, 9), } as UTSJSONObject
  if (props.color != '') {
    s['color'] = props.color
  }
  return s
})

const closeStyle = computed<UTSJSONObject>(() => {
  return {
    backgroundColor: props.closeColor
  } as UTSJSONObject
})

const isImageIcon = computed<boolean>(() => {
  return testImage(props.icon)
})

const imgStyle = computed<UTSJSONObject>(() => {
  const width = props.size == 'large' ? '17px' : props.size == 'medium' ? '15px' : '13px'
  return {
    width,
    height: width
  } as UTSJSONObject
})

const closeSize = computed<string>(() => {
  return props.size == 'large' ? '15px' : props.size == 'medium' ? '13px' : '12px'
})

const iconSize = computed<string>(() => {
  return props.size == 'large' ? '21px' : props.size == 'medium' ? '19px' : '16px'
})

const elIconColor = computed<string>(() => {
  return props.iconColor != '' ? props.iconColor : props.plain ? props.type : '#ffffff'
})

function closeHandler(): void {
  emit('close', props.name.toString())
}

function clickHandler(): void {
  emit('click', props.name.toString())
}

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_transition = resolveEasyComponent("up-transition",_easycom_up_transition)

  return _cV(_component_up_transition, _uM({
    mode: "fade",
    show: _ctx.show,
    style: _nS(_uM({"display":"flex"}))
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "up-tag-wrapper cursor-pointer" }), [
        _cE("view", _uM({
          class: _nC(["up-tag", [`up-tag--${_ctx.shape}`, !_ctx.plain ? `up-tag--${_ctx.type}` : '', _ctx.plain ? `up-tag--${_ctx.type}--plain` : '', `up-tag--${_ctx.size}`, (_ctx.plain && _ctx.plainFill) ?  `up-tag--${_ctx.type}--plain--fill` : '']]),
          onClick: withModifiers(clickHandler, ["stop"]),
          style: _nS(tagMergedStyle.value)
        }), [
          renderSlot(_ctx.$slots, "icon", {}, (): any[] => [
            _ctx.icon != ''
              ? _cE("view", _uM({
                  key: 0,
                  class: "up-tag__icon"
                }), [
                  isTrue(isImageIcon.value)
                    ? _cE("image", _uM({
                        key: 0,
                        src: _ctx.icon,
                        style: _nS(imgStyle.value)
                      }), null, 12 /* STYLE, PROPS */, ["src"])
                    : _cV(_component_up_icon, _uM({
                        key: 1,
                        color: elIconColor.value,
                        name: _ctx.icon,
                        size: iconSize.value
                      }), null, 8 /* PROPS */, ["color", "name", "size"])
                ])
              : _cC("v-if", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, (): any[] => [
            _cE("text", _uM({
              class: _nC(["up-tag__text", [`up-tag__text--${_ctx.type}`, _ctx.plain ? `up-tag__text--${_ctx.type}--plain` : '', `up-tag__text--${_ctx.size}`]]),
              style: _nS(textColor.value)
            }), _tD(_ctx.text), 7 /* TEXT, CLASS, STYLE */)
          ])
        ], 6 /* CLASS, STYLE */),
        isTrue(_ctx.closable)
          ? _cE("view", _uM({
              key: 0,
              class: _nC(["up-tag__close", [`up-tag__close--${_ctx.size}`]]),
              onClick: withModifiers(closeHandler, ["stop"]),
              style: _nS(closeStyle.value)
            }), [
              _cV(_component_up_icon, _uM({
                name: "close",
                size: closeSize.value,
                color: "#ffffff"
              }), null, 8 /* PROPS */, ["size"])
            ], 6 /* CLASS, STYLE */)
          : _cC("v-if", true)
      ])
    ]),
    _: 3 /* FORWARDED */
  }), 8 /* PROPS */, ["show", "style"])
}
}

})
export default __sfc__
export type UpTagComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTagUpTagStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tag-wrapper", _pS(_uM([["position", "relative"]]))], ["up-tag", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["up-tag--circle", _pS(_uM([["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100]]))], ["up-tag--square", _pS(_uM([["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-tag__icon", _pS(_uM([["marginRight", 4]]))], ["up-tag__text--mini", _pS(_uM([["fontSize", 12], ["lineHeight", "12px"]]))], ["up-tag__text--medium", _pS(_uM([["fontSize", 13], ["lineHeight", "13px"]]))], ["up-tag__text--large", _pS(_uM([["fontSize", 15], ["lineHeight", "15px"]]))], ["up-tag--primary", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["up-tag--primary--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["up-tag--primary--plain--fill", _pS(_uM([["backgroundColor", "#ecf5ff"]]))], ["up-tag__text--primary", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--primary--plain", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-tag--error", _pS(_uM([["backgroundColor", "#f56c6c"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f56c6c"], ["borderRightColor", "#f56c6c"], ["borderBottomColor", "#f56c6c"], ["borderLeftColor", "#f56c6c"]]))], ["up-tag--error--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f56c6c"], ["borderRightColor", "#f56c6c"], ["borderBottomColor", "#f56c6c"], ["borderLeftColor", "#f56c6c"]]))], ["up-tag--error--plain--fill", _pS(_uM([["backgroundColor", "#fef0f0"]]))], ["up-tag__text--error", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--error--plain", _pS(_uM([["color", "#f56c6c"]]))], ["up-tag--warning", _pS(_uM([["backgroundColor", "#f9ae3d"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f9ae3d"], ["borderRightColor", "#f9ae3d"], ["borderBottomColor", "#f9ae3d"], ["borderLeftColor", "#f9ae3d"]]))], ["up-tag--warning--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f9ae3d"], ["borderRightColor", "#f9ae3d"], ["borderBottomColor", "#f9ae3d"], ["borderLeftColor", "#f9ae3d"]]))], ["up-tag--warning--plain--fill", _pS(_uM([["backgroundColor", "#fdf6ec"]]))], ["up-tag__text--warning", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--warning--plain", _pS(_uM([["color", "#f9ae3d"]]))], ["up-tag--success", _pS(_uM([["backgroundColor", "#5ac725"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#5ac725"], ["borderRightColor", "#5ac725"], ["borderBottomColor", "#5ac725"], ["borderLeftColor", "#5ac725"]]))], ["up-tag--success--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#5ac725"], ["borderRightColor", "#5ac725"], ["borderBottomColor", "#5ac725"], ["borderLeftColor", "#5ac725"]]))], ["up-tag--success--plain--fill", _pS(_uM([["backgroundColor", "#f5fff0"]]))], ["up-tag__text--success", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--success--plain", _pS(_uM([["color", "#5ac725"]]))], ["up-tag--info", _pS(_uM([["backgroundColor", "#909399"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#909399"], ["borderRightColor", "#909399"], ["borderBottomColor", "#909399"], ["borderLeftColor", "#909399"]]))], ["up-tag--info--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#909399"], ["borderRightColor", "#909399"], ["borderBottomColor", "#909399"], ["borderLeftColor", "#909399"]]))], ["up-tag--info--plain--fill", _pS(_uM([["backgroundColor", "#f4f4f5"]]))], ["up-tag__text--info", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--info--plain", _pS(_uM([["color", "#909399"]]))], ["up-tag--mini", _pS(_uM([["height", 19], ["lineHeight", "19px"], ["paddingTop", 0], ["paddingRight", 5], ["paddingBottom", 0], ["paddingLeft", 5]]))], ["up-tag--medium", _pS(_uM([["height", 22], ["lineHeight", "22px"], ["paddingTop", 0], ["paddingRight", 7], ["paddingBottom", 0], ["paddingLeft", 7]]))], ["up-tag--large", _pS(_uM([["height", 25], ["lineHeight", "25px"], ["paddingTop", 0], ["paddingRight", 10], ["paddingBottom", 0], ["paddingLeft", 10]]))], ["up-tag__close", _pS(_uM([["position", "absolute"], ["zIndex", 999], ["top", 10], ["right", 10], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["backgroundColor", "#C6C7CB"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["transform", "scale(0.6) translate(80%, -80%)"]]))], ["up-tag__close--mini", _pS(_uM([["width", 18], ["height", 18]]))], ["up-tag__close--medium", _pS(_uM([["width", 22], ["height", 22]]))], ["up-tag__close--large", _pS(_uM([["width", 25], ["height", 25]]))]])]
