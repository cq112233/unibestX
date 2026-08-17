import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import { computed } from 'vue'
import { addStyle, addUnit, getPx, bem, deepMerge } from '../../libs/function/index'
import { throttle } from '../../libs/function/throttle'
import config from '../../libs/config/config'


const __sfc__ = defineComponent({
  __name: 'up-button',
name: 'up-button',
  props: {
    hairline: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'info'
    },
    size: {
        type: String,
        default: 'normal'
    },
    shape: {
        type: String,
        default: 'square'
    },
    plain: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    loadingText: {
        type: String,
        default: ''
    },
    loadingMode: {
        type: String,
        default: 'spinner'
    },
    loadingSize: {
        type: Number,
        default: 15
    },
    openType: {
        type: String,
        default: ''
    },
    formType: {
        type: String,
        default: ''
    },
    appParameter: {
        type: String,
        default: ''
    },
    hoverStopPropagation: {
        type: Boolean,
        default: false
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
    dataName: {
        type: String,
        default: ''
    },
    throttleTime: {
        type: [String, Number],
        default: 0
    },
    hoverStartTime: {
        type: [String, Number],
        default: 20
    },
    hoverStayTime: {
        type: [String, Number],
        default: 70
    },
    text: {
        type: [String, Number],
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    iconColor: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    customStyle: {
        type: Object,
        default: () => ({})
    }
},
  emits: ['click', 'getphonenumber', 'getuserinfo', 'error', 'opensetting', 'launchapp'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const bemClass = computed(() => {
    let ret = ""
    if (props.color == '') {
        ret = bem(
            "button",
            [props.type, props.shape, props.size] ,
            [
                ["disabled", props.disabled],
                ["plain", props.plain],
                ["hairline", props.hairline],
            ]
        );
    } else {
        ret = bem(
            "button",
            [props.shape, props.size] ,
            [
                ["disabled", props.disabled],
                ["plain", props.plain],
                ["hairline", props.hairline],
            ]
        );
    }
    return ret
});

const textColorCom = computed<string>(() => {
    if (props.color != '') {
        return props.plain ? props.color : '#ffffff'
    }
    if (props.plain) {
        if (props.type == 'primary') return 'var(--theme-color, #0957de)'
        if (props.type == 'info') return '#000000'
        if (props.type == 'success') return '#5ac725'
        if (props.type == 'error') return '#f56c6c'
        if (props.type == 'warning') return '#f56c6c'
        return '#323233'
    }
    if (props.type == 'info') {
        return '#323233'
    }
    return '#ffffff'
})

const loadingColor = computed(() => {
    if (props.plain) {
        return props.color != ''
            ? props.color
            : config.getString(`color.up-${props.type}`) as string;
    }
    if (props.type == "info") {
        return "#c9c9c9";
    }
    return "rgb(200, 200, 200)";
});

const iconColorCom = computed(() => {
    if (props.iconColor != '') return props.iconColor;
    if (props.plain) {
        return props.color != '' ? props.color : props.type;
    } else {
        return "";
    }
});

const baseColor = computed(() => {
    let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-button/up-button.uvue", 259, 9), } as UTSJSONObject;
    if (props.color != '') {
        if (!props.plain) {
            style["backgroundColor"] = props.color;
        }
        if ((props.color.toString()).indexOf("gradient") != -1) {
            style['borderWidth'] = 0;
            if (!props.plain) {
                style['backgroundImage'] = props.color;
            }
        } else {
            style['borderColor'] = props.color;
            style['borderWidth'] = "1px";
            style['borderStyle'] = "solid";
        }
    }
    return style;
});

const textSize = computed(() => {
    let fontSize = '14';
    if (props.size === "large") fontSize = '16';
    if (props.size === "normal") fontSize = '14';
    if (props.size === "small") fontSize = '12';
    if (props.size === "mini") fontSize = '10';
    return fontSize;
});

const buttonRootStyle = computed((): UTSJSONObject => {
    const custom = addStyle(props.customStyle) as UTSJSONObject
    return deepMerge(baseColor.value, custom) as UTSJSONObject
});

const loadingIconSize = computed((): string => {
    return addUnit(props.loadingSize * 1.15)
});

const textStyle = computed((): UTSJSONObject => {
    return {
        fontSize: textSize.value + 'px',
        color: textColorCom.value
    } as UTSJSONObject
});

const iconSizeComputed = computed((): string => {
    return addUnit(parseInt(getPx(textSize.value)) * 1.35)
});

const clickHandler = (): void => {
    if (!props.disabled && !props.loading) {
        throttle(() => {
            emit("click")
        }, parseInt(props.throttleTime.toString()))
    }
};

const getphonenumber = (res: UniEvent): void => {
    emit("getphonenumber", res)
};

const getuserinfo = (res: UniEvent): void => {
    emit("getuserinfo", res)
};

const error = (res: UniEvent): void => {
    emit("error", res)
};

const opensetting = (res: UniEvent): void => {
    emit("opensetting", res)
};

const launchapp = (res: UniEvent): void => {
    emit("launchapp", res)
};

return (): any | null => {

const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    style: _nS([_uM({"position":"relative"}), buttonRootStyle.value]),
    class: _nC(["up-button", bemClass.value]),
    "hover-class": !_ctx.disabled && !_ctx.loading ? 'up-button--active' : ''
  }), [
    isTrue(_ctx.loading)
      ? _cE(Fragment, _uM({ key: 0 }), [
          _cV(_component_up_loading_icon, _uM({
            mode: _ctx.loadingMode,
            size: loadingIconSize.value,
            color: loadingColor.value
          }), null, 8 /* PROPS */, ["mode", "size", "color"]),
          _cE("text", _uM({
            class: "up-button__text up-button__loading-text",
            style: _nS(textStyle.value)
          }), _tD(_ctx.loadingText != '' ? _ctx.loadingText : _ctx.text), 5 /* TEXT, STYLE */)
        ], 64 /* STABLE_FRAGMENT */)
      : _cE(Fragment, _uM({ key: 1 }), [
          _ctx.icon != ''
            ? _cV(_component_up_icon, _uM({
                key: 0,
                name: _ctx.icon,
                color: iconColorCom.value,
                size: iconSizeComputed.value,
                customStyle: { marginRight: '2px' }
              }), null, 8 /* PROPS */, ["name", "color", "size"])
            : _cC("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, (): any[] => [
            _cE("text", _uM({
              class: "up-button__text",
              style: _nS(textStyle.value)
            }), _tD(_ctx.text), 5 /* TEXT, STYLE */)
          ])
        ], 64 /* STABLE_FRAGMENT */),
    _cE("button", _uM({
      "hover-start-time": _ctx.hoverStartTime,
      "hover-stay-time": _ctx.hoverStayTime,
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      lang: _ctx.lang,
      "data-name": _ctx.dataName,
      "session-from": _ctx.sessionFrom,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onGetphonenumber: getphonenumber,
      onGetuserinfo: getuserinfo,
      onError: error,
      onOpensetting: opensetting,
      onLaunchapp: launchapp,
      loading: _ctx.loading,
      "hover-class": !_ctx.disabled && !_ctx.loading ? 'up-button__button--active' : '',
      style: _nS(_uM({"background":"#fff","position":"absolute","top":"0","bottom":"0","left":"0","right":"0","opacity":"0"})),
      class: "up-reset-button",
      onClick: clickHandler
    }), null, 44 /* STYLE, PROPS, NEED_HYDRATION */, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "loading", "hover-class"])
  ], 14 /* CLASS, STYLE, PROPS */, ["hover-class"])
}
}

})
export default __sfc__
export type UpButtonComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpButtonUpButtonStyles = [_uM([["up-button", _pS(_uM([["height", 40], ["position", "relative"], ["boxSizing", "border-box"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["up-button__text", _pS(_uM([["fontSize", 15], ["color", "#ffffff"]]))], ["up-button__loading-text", _pS(_uM([["fontSize", 15], ["marginLeft", 4]]))], ["up-button--large", _pS(_uM([["width", "100%"], ["height", 50], ["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))], ["up-button--normal", _pS(_uM([["paddingTop", 0], ["paddingRight", 12], ["paddingBottom", 0], ["paddingLeft", 12]]))], ["up-button--small", _pS(_uM([["minWidth", 60], ["height", 30], ["paddingTop", 0], ["paddingRight", 8], ["paddingBottom", 0], ["paddingLeft", 8]]))], ["up-button--mini", _pS(_uM([["height", 22], ["minWidth", 50], ["paddingTop", 0], ["paddingRight", 8], ["paddingBottom", 0], ["paddingLeft", 8]]))], ["up-button--disabled", _pS(_uM([["opacity", 0.5]]))], ["up-button--active", _pS(_uM([["opacity", 0.75]]))], ["up-button--info", _pS(_uM([["!backgroundColor", "#ffffff"], ["!borderTopColor", "#ebedf0"], ["!borderRightColor", "#ebedf0"], ["!borderBottomColor", "#ebedf0"], ["!borderLeftColor", "#ebedf0"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--success", _pS(_uM([["!backgroundColor", "#5ac725"], ["!borderTopColor", "#5ac725"], ["!borderRightColor", "#5ac725"], ["!borderBottomColor", "#5ac725"], ["!borderLeftColor", "#5ac725"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--primary", _pS(_uM([["!backgroundColor", "var(--theme-color, #0957de)"], ["!borderTopColor", "var(--theme-color, #0957de)"], ["!borderRightColor", "var(--theme-color, #0957de)"], ["!borderBottomColor", "var(--theme-color, #0957de)"], ["!borderLeftColor", "var(--theme-color, #0957de)"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--error", _pS(_uM([["!backgroundColor", "#f56c6c"], ["!borderTopColor", "#f56c6c"], ["!borderRightColor", "#f56c6c"], ["!borderBottomColor", "#f56c6c"], ["!borderLeftColor", "#f56c6c"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--warning", _pS(_uM([["!backgroundColor", "#f9ae3d"], ["!borderTopColor", "#f9ae3d"], ["!borderRightColor", "#f9ae3d"], ["!borderBottomColor", "#f9ae3d"], ["!borderLeftColor", "#f9ae3d"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--block", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["width", "100%"]]))], ["up-button--circle", _pS(_uM([["borderTopRightRadius", 100], ["borderTopLeftRadius", 100], ["borderBottomLeftRadius", 100], ["borderBottomRightRadius", 100]]))], ["up-button--square", _pS(_uM([["borderBottomLeftRadius", 3], ["borderBottomRightRadius", 3], ["borderTopLeftRadius", 3], ["borderTopRightRadius", 3]]))], ["up-button__icon", _pS(_uM([["minWidth", 4]]))], ["up-button--plain", _pS(_uM([["!backgroundColor", "#ffffff"]]))], ["up-button--hairline", _pS(_uM([["!borderTopWidth", 0.5], ["!borderRightWidth", 0.5], ["!borderBottomWidth", 0.5], ["!borderLeftWidth", 0.5]]))]])]
