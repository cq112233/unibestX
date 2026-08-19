import { computed } from 'vue'
import { t } from '../../libs/i18n/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-toolbar',
name: 'up-toolbar',
  props: {
  show: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  cancelColor: {
    type: String,
    default: '#909193'
  },
  confirmColor: {
    type: String,
    default: '#3c9cff'
  },
  title: {
    type: String,
    default: ''
  },
  rightSlot: {
    type: Boolean,
    default: false
  }
},
  emits: ['confirm', 'cancel'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const elCancelText = computed<string>(() => {
  if (props.cancelText == '取消' || props.cancelText == '') {
    return t('up_common_cancel', {} as UTSJSONObject)
  }
  return props.cancelText
})

const elConfirmText = computed<string>(() => {
  if (props.confirmText == '确认' || props.confirmText == '确定' || props.confirmText == '') {
    return t('up_common_confirm', {} as UTSJSONObject)
  }
  return props.confirmText
})

const cancelStyle = computed<UTSJSONObject>(() => {
  let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-toolbar/up-toolbar.uvue", 103, 7), } as UTSJSONObject
  if (props.cancelColor != '') {
    style['color'] = props.cancelColor
  }
  return style
})

const confirmStyle = computed<UTSJSONObject>(() => {
  let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-toolbar/up-toolbar.uvue", 111, 7), } as UTSJSONObject
  if (props.confirmColor != '' && props.confirmColor != '#3c9cff') {
    style['color'] = props.confirmColor
  }
  return style
})

function noop() {}

function cancel(): void {
  emit('cancel')
}

function confirm(): void {
  emit('confirm')
}

return (): any | null => {

  return isTrue(_ctx.show)
    ? _cE("view", _uM({
        key: 0,
        class: "up-toolbar",
        onTouchmove: withModifiers(noop, ["stop"])
      }), [
        _cE("view", _uM({ class: "up-toolbar__left" }), [
          _cE("view", _uM({
            class: "up-toolbar__cancel__wrapper",
            "hover-class": "up-hover-class"
          }), [
            _cE("text", _uM({
              class: "up-toolbar__wrapper__cancel",
              onClick: cancel,
              style: _nS(cancelStyle.value)
            }), _tD(elCancelText.value), 5 /* TEXT, STYLE */)
          ])
        ]),
        _ctx.title != ''
          ? _cE("text", _uM({
              key: 0,
              class: "up-toolbar__title up-line-1"
            }), _tD(_ctx.title), 1 /* TEXT */)
          : _cC("v-if", true),
        _cE("view", _uM({ class: "up-toolbar__right" }), [
          isTrue(!_ctx.rightSlot)
            ? _cE("view", _uM({
                key: 0,
                class: "up-toolbar__confirm__wrapper",
                "hover-class": "up-hover-class"
              }), [
                _cE("text", _uM({
                  class: "up-toolbar__wrapper__confirm",
                  onClick: confirm,
                  style: _nS(confirmStyle.value)
                }), _tD(elConfirmText.value), 5 /* TEXT, STYLE */)
              ])
            : renderSlot(_ctx.$slots, "right", _uM({ key: 1 }))
        ])
      ], 32 /* NEED_HYDRATION */)
    : _cC("v-if", true)
}
}

})
export default __sfc__
export type UpToolbarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpToolbarUpToolbarStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-toolbar", _pS(_uM([["height", 42], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "space-between"], ["alignItems", "center"]]))], ["up-toolbar__wrapper__cancel", _pS(_uM([["color", "#909193"], ["fontSize", 15], ["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))], ["up-toolbar__title", _pS(_uM([["color", "#303133"], ["paddingTop", 0], ["paddingRight", "60rpx"], ["paddingBottom", 0], ["paddingLeft", "60rpx"], ["fontSize", 16], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["textAlign", "center"]]))], ["up-toolbar__wrapper__left", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["up-toolbar__wrapper__right", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["up-toolbar__wrapper__confirm", _pS(_uM([["color", "var(--theme-color, #0957de)"], ["fontSize", 15], ["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))]])]
