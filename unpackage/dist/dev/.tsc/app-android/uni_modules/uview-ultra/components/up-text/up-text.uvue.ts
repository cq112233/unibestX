import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_link from '@/uni_modules/uview-ultra/components/up-link/up-link.uvue'
import { computed } from 'vue'
import { addStyle, addUnit, deepMerge, error, priceFormat, timeFormat } from '../../libs/function/index'
import { date as testDate, url as testUrl } from '../../libs/function/test'


const __sfc__ = defineComponent({
  __name: 'up-text',
name: 'up-text',
  props: {
  type: {
    type: String,
    default: ''
  },
  show: {
    type: Boolean,
    default: true
  },
  text: {
    type: [String, Number],
    default: ''
  },
  prefixIcon: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: String,
    default: ''
  },
  mode: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  format: {
    type: [String, Function],
    default: ''
  },
  call: {
    type: Boolean,
    default: false
  },
  openType: {
    type: String,
    default: ''
  },
  bold: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  lines: {
    type: [String, Number],
    default: ''
  },
  color: {
    type: String,
    default: '#303133'
  },
  size: {
    type: [String, Number],
    default: '15px'
  },
  iconStyle: {
    type: [Object, String],
    default: () => ({ fontSize: '15px' })
  },
  decoration: {
    type: String,
    default: 'none'
  },
  margin: {
    type: [Object, String, Number],
    default: '0'
  },
  lineHeight: {
    type: [String, Number],
    default: ''
  },
  align: {
    type: String,
    default: 'left'
  },
  wordWrap: {
    type: String,
    default: 'normal'
  },
  customClass: {
    type: String,
    default: ''
  },
  customStyle: {
    type: Object,
    default: () => ({})
  },
  lang: {
    type: String,
    default: 'en'
  },
  sessionFrom: {
    type: String,
    default: ''
  },
  sendMessageTitle: {
    type: String,
    default: ''
  },
  sendMessagePath: {
    type: String,
    default: ''
  },
  sendMessageImg: {
    type: String,
    default: ''
  },
  showMessageCard: {
    type: Boolean,
    default: false
  },
  appParameter: {
    type: String,
    default: ''
  }
},
  emits: ['click'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const isMp = computed<boolean>(() => {
  let mp = false



  return mp
})

const valueStyle = computed<UTSJSONObject>(() => {
  let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-text/up-text.uvue", 216, 7), 
    textDecoration: props.decoration,
    fontWeight: props.bold ? 'bold' : 'normal',
    wordWrap: props.wordWrap,
    fontSize: addUnit(props.size)
  } as UTSJSONObject
  if (props.type == '') {
    style['color'] = props.color
  }
  if (props.lines.toString() != '') {
    style['lines'] = props.lines
  }
  if (props.lineHeight.toString() != '') {
    style['lineHeight'] = addUnit(props.lineHeight)
  }
  if (props.block) {
    style['display'] = 'block'
  }
  return deepMerge(style, addStyle(props.customStyle)) as UTSJSONObject
})

const customIconStyle = computed((): UTSJSONObject => {
  return addStyle(props.iconStyle) as UTSJSONObject
})

function formatName(name: string): string {
  let val = ''
  if (name.length == 2) {
    val = name.substring(0, 1) + '*'
  } else if (name.length > 2) {
    let char = ''
    for (let i = 0, len = name.length - 2; i < len; i++) {
      char += '*'
    }
    val = name.substring(0, 1) + char + name.substring(name.length - 1)
  } else {
    val = name
  }
  return val
}

const value = computed<string>(() => {
  const textStr = props.text.toString()

  if (props.mode === 'price') {
    if (!/^\d+(\.\d+)?$/.test(textStr)) {
      error('金额模式下，text参数需要为金额格式')
    }
    return priceFormat(textStr, 2)
  }
  if (props.mode === 'date') {
    if (!testDate(textStr)) {
      error('日期模式下，text参数需要为日期或时间戳格式' + textStr)
    }
    if (props.format != null && props.format.toString() != '') {
      return timeFormat(textStr, props.format.toString())
    }
    return timeFormat(textStr, 'yyyy-mm-dd')
  }
  if (props.mode === 'phone') {
    if (props.format === 'encrypt') {
      return `${textStr.substring(0, 3)}****${textStr.substring(7)}`
    }
    return textStr
  }
  if (props.mode === 'name') {
    if (props.format === 'encrypt') {
      return formatName(textStr)
    }
    return textStr
  }
  if (props.mode === 'link') {
    if (!testUrl(props.href)) {
      error('超链接模式下，href参数需要为URL格式')
    }
    return textStr
  }
  return textStr
})

function clickHandler() {
  emit('click')
}

function onGetUserInfo() {}
function onContact() {}
function onGetPhoneNumber() {}
function onError() {}
function onLaunchApp() {}
function onOpenSetting() {}

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_link = resolveEasyComponent("up-link",_easycom_up_link)

  return isTrue(_ctx.show)
    ? _cE("view", _uM({
        key: 0,
        class: _nC(["up-text", [_ctx.customClass]]),
        style: _nS(_uM({
            margin: _ctx.margin,
			justifyContent: _ctx.align === 'left' ? 'flex-start' : _ctx.align === 'center' ? 'center' : 'flex-end'
        })),
        onClick: clickHandler
      }), [
        _ctx.mode === 'price'
          ? _cE("text", _uM({
              key: 0,
              class: _nC(['up-text__price', `up-text__value--${_ctx.type}`]),
              style: _nS(valueStyle.value)
            }), "￥", 6 /* CLASS, STYLE */)
          : _cC("v-if", true),
        _ctx.prefixIcon != ''
          ? _cE("view", _uM({
              key: 1,
              class: "up-text__prefix-icon"
            }), [
              _cV(_component_up_icon, _uM({
                name: _ctx.prefixIcon,
                customStyle: customIconStyle.value
              }), null, 8 /* PROPS */, ["name", "customStyle"])
            ])
          : _cC("v-if", true),
        _ctx.mode === 'link'
          ? _cV(_component_up_link, _uM({
              key: 2,
              class: _nC(["up-text__value", [`up-text__value--${_ctx.type}`,	`up-line-${_ctx.lines}`]]),
              style: _nS(_uM({fontWeight: valueStyle.value['fontWeight'], wordWrap: valueStyle.value['wordWrap'], fontSize: valueStyle.value['fontSize']})),
              text: value.value,
              href: _ctx.href,
              underLine: ""
            }), null, 8 /* PROPS */, ["style", "class", "text", "href"])
          : isTrue(_ctx.openType != '' && isMp.value)
            ? _cE("button", _uM({
                key: 3,
                class: "up-reset-button up-text__value",
                style: _nS(valueStyle.value),
                "data-index": "index",
                openType: _ctx.openType,
                onGetuserinfo: onGetUserInfo,
                onContact: onContact,
                onGetphonenumber: onGetPhoneNumber,
                onError: onError,
                onLaunchapp: onLaunchApp,
                onOpensetting: onOpenSetting,
                lang: _ctx.lang,
                "session-from": _ctx.sessionFrom,
                "send-message-title": _ctx.sendMessageTitle,
                "send-message-path": _ctx.sendMessagePath,
                "send-message-img": _ctx.sendMessageImg,
                "show-message-card": _ctx.showMessageCard,
                "app-parameter": _ctx.appParameter
              }), _tD(value.value), 45 /* TEXT, STYLE, PROPS, NEED_HYDRATION */, ["openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])
            : _cE("text", _uM({
                key: 4,
                class: _nC(["up-text__value", [
                `up-text__value--${_ctx.type}`,
                `up-line-${_ctx.lines}`
            ]]),
                style: _nS(valueStyle.value)
              }), _tD(value.value), 7 /* TEXT, CLASS, STYLE */),
        _ctx.suffixIcon != ''
          ? _cE("view", _uM({
              key: 5,
              class: "up-text__suffix-icon"
            }), [
              _cV(_component_up_icon, _uM({
                name: _ctx.suffixIcon,
                customStyle: customIconStyle.value
              }), null, 8 /* PROPS */, ["name", "customStyle"])
            ])
          : _cC("v-if", true)
      ], 6 /* CLASS, STYLE */)
    : _cC("v-if", true)
}
}

})
export default __sfc__
export type UpTextComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTextUpTextStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-text", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["flexWrap", "nowrap"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["width", "100%"]]))], ["up-text__price", _pS(_uM([["fontSize", 14], ["color", "#606266"]]))], ["up-text__value", _pS(_uM([["fontSize", 14], ["color", "#606266"], ["textOverflow", "ellipsis"]]))], ["up-text__value--primary", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-text__value--warning", _pS(_uM([["color", "#f9ae3d"]]))], ["up-text__value--success", _pS(_uM([["color", "#5ac725"]]))], ["up-text__value--info", _pS(_uM([["color", "#909399"]]))], ["up-text__value--error", _pS(_uM([["color", "#f56c6c"]]))], ["up-text__value--main", _pS(_uM([["color", "#303133"]]))], ["up-text__value--content", _pS(_uM([["color", "#606266"]]))], ["up-text__value--tips", _pS(_uM([["color", "#909193"]]))], ["up-text__value--light", _pS(_uM([["color", "#c0c4cc"]]))], ["up-text__prefix-icon", _pS(_uM([["marginRight", 5]]))], ["up-text__suffix-icon", _pS(_uM([["marginLeft", 5]]))]])]
