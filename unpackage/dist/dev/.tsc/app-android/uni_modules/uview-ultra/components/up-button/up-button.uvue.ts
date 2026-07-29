import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import defProps from './button'
import { computed } from 'vue'
import { addStyle, addUnit, getPx, bem } from '../../libs/function/index'
import { throttle } from '../../libs/function/throttle'
import config from '../../libs/config/config'

const __sfc__ = defineComponent({
  __name: 'up-button',
  props: {
    // 是否显示按钮的细边框
    hairline: {
        type: Boolean,
        default: () => defProps.getBoolean('button.hairline')
    },
    // 按钮的预置样式，info，primary，error，warning，success
    type: {
        type: String,
        default: () => defProps.getString('button.type')
    },
    // 按钮尺寸，large，normal，mini
    size: {
        type: String,
        default: () => defProps.getString('button.size')
    },
    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
        type: String,
        default: () => defProps.getString('button.shape')
    },
    // 按钮是否镂空，背景色透明
    plain: {
        type: Boolean,
        default: () => defProps.getBoolean('button.plain')
    },
    // 是否禁用
    disabled: {
        type: Boolean,
        default: () => defProps.getBoolean('button.disabled')
    },
    // 按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈)
    loading: {
        type: Boolean,
        default: () => defProps.getBoolean('button.loading')
    },
    // 加载中提示文字
    loadingText: {
        type: String,
        default: () => defProps.getString('button.loadingText')
    },
    // 加载状态图标类型
    loadingMode: {
        type: String,
        default: () => defProps.getString('button.loadingMode')
    },
    // 加载图标大小
    loadingSize: {
        type: Number,
        default: () => defProps.getNumber('button.loadingSize')
    },
    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    openType: {
        type: String,
        default: () => defProps.getString('button.openType')
    },
    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    formType: {
        type: String,
        default: () => defProps.getString('button.formType')
    },
    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    appParameter: {
        type: String,
        default: () => defProps.getString('button.appParameter')
    },
    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
        type: Boolean,
        default: () => defProps.getBoolean('button.hoverStopPropagation')
    },
    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
    lang: {
        type: String,
        default: () => defProps.getString('button.lang')
    },
    // 会话来源，openType="contact"时有效
    sessionFrom: {
        type: String,
        default: () => defProps.getString('button.sessionFrom')
    },
    // 会话内消息卡片标题，openType="contact"时有效
    sendMessageTitle: {
        type: String,
        default: () => defProps.getString('button.sendMessageTitle')
    },
    // 会话内消息卡片点击跳转小程序路径，openType="contact"时有效
    sendMessagePath: {
        type: String,
        default: () => defProps.getString('button.sendMessagePath')
    },
    // 会话内消息卡片图片，openType="contact"时有效
    sendMessageImg: {
        type: String,
        default: () => defProps.getString('button.sendMessageImg')
    },
    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效
    showMessageCard: {
        type: Boolean,
        default: () => defProps.getBoolean('button.showMessageCard')
    },
    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
        type: String,
        default: () => defProps.getString('button.dataName')
    },
    // 节流，一定时间内只能触发一次
    throttleTime: {
        type: [String, Number],
        default: () => defProps.getNumber('button.throttleTime')
    },
    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
        type: [String, Number],
        default: () => defProps.getNumber('button.hoverStartTime')
    },
    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
        type: [String, Number],
        default: () => defProps.getNumber('button.hoverStayTime')
    },
    // 按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
    text: {
        type: [String, Number],
        default: () => defProps.getString('button.text')
    },
    // 按钮图标
    icon: {
        type: String,
        default: () => defProps.getString('button.icon')
    },
    // 按钮图标颜色
    iconColor: {
        type: String,
        default: () => defProps.getString('button.iconColor')
    },
    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
        type: String,
        default: () => defProps.getString('button.color')
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

// 生成bem风格的类名
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
        // 由于nvue的原因，在有color参数时，不需要传入type，否则会生成type相关的类型，影响最终的样式
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

const loadingColor = computed(() => {
    if (props.plain) {
        // 如果有设置color值，则用color值，否则使用type主题颜色
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
    // 如果是镂空状态，设置了color就用color值，否则使用主题颜色，
    // up-icon的color能接受一个主题颜色的值
    if (props.iconColor != '') return props.iconColor;
    if (props.plain) {
        return props.color != '' ? props.color : props.type;
    } else {
        return "";
    }
});

const baseColor = computed(() => {
    let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-button/up-button.uvue", 269, 9), 
    } as UTSJSONObject;
    if (props.color != '') {
        // 针对自定义了color颜色的情况，镂空状态下，就是用自定义的颜色
        // style['color'] = props.plain ? props.color : "white";
        if (!props.plain) {
            // 非镂空，背景色使用自定义的颜色
            style["backgroundColor"] = props.color;
        }
        if ((props.color.toString()).indexOf("gradient") != -1) {
            // 如果自定义的颜色为渐变色，不显示边框，以及通过backgroundImage设置渐变色
            // weex文档说明可以写borderWidth的形式，为什么这里需要分开写？
            // 因为weex是阿里巴巴为了部门业绩考核而做的你懂的东西，所以需要这么写才有效
            style['borderWidth'] = 0;
            if (!props.plain) {
                style['backgroundImage'] = props.color;
            }
        } else {
            // 非渐变色，则设置边框相关的属性
            style['borderColor'] = props.color;
            style['borderWidth'] = "1px";
            style['borderStyle'] = "solid";
        }
    }
    return style;
});

// 字体大小
const textSize = computed(() => {
    let fontSize = '14px';
    if (props.size === "large") fontSize = '16px';
    if (props.size === "normal") fontSize = '14px';
    if (props.size === "small") fontSize = '12px';
    if (props.size === "mini") fontSize = '10px';
    return fontSize;
});

const clickHandler = (): void => {
    // 非禁止并且非加载中，才能点击
    if (!props.disabled && !props.loading) {
        // 进行节流控制，每throttle毫秒内，只在开始处执行
        throttle(() => {
            emit("click")
        }, parseInt(props.throttleTime.toString()))
    } else {
        console.log('禁止点击', " at uni_modules/uview-ultra/components/up-button/up-button.uvue:314")
    }
};

// 对接uniapp官方按钮开放能力事件回调
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
    style: _nS([_uM({"position":"relative"}), [baseColor.value, _ctx.$upAddStyle(_ctx.customStyle)]]),
    class: _nC(["up-button", bemClass.value]),
    "hover-class": !_ctx.disabled && !_ctx.loading ? 'up-button--active' : ''
  }), [
    isTrue(_ctx.loading)
      ? _cE(Fragment, _uM({ key: 0 }), [
          _cV(_component_up_loading_icon, _uM({
            mode: _ctx.loadingMode,
            size: _ctx.$up.addUnit(_ctx.loadingSize * 1.15),
            color: loadingColor.value
          }), null, 8 /* PROPS */, ["mode", "size", "color"]),
          _cE("text", _uM({
            class: "up-button__text up-button__loading-text",
            style: _nS([_uM({ fontSize: textSize.value + 'px' })])
          }), _tD(_ctx.loadingText != '' ? _ctx.loadingText : _ctx.text), 5 /* TEXT, STYLE */)
        ], 64 /* STABLE_FRAGMENT */)
      : _cE(Fragment, _uM({ key: 1 }), [
          _ctx.icon != ''
            ? _cV(_component_up_icon, _uM({
                key: 0,
                name: _ctx.icon,
                color: iconColorCom.value,
                size: _ctx.$up.addUnit(parseInt(_ctx.$up.getPx(textSize.value)) * 1.35),
                customStyle: { marginRight: '2px' }
              }), null, 8 /* PROPS */, ["name", "color", "size"])
            : _cC("v-if", true),
          renderSlot(_ctx.$slots, "default", {}, (): any[] => [
            _cE("text", _uM({
              class: "up-button__text",
              style: _nS([_uM({ fontSize: textSize.value + 'px'})])
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
const GenUniModulesUviewUltraComponentsUpButtonUpButtonStyles = [_uM([["up-button", _pS(_uM([["height", 40], ["position", "relative"], ["boxSizing", "border-box"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["position:before", "absolute"], ["top:before", "50%"], ["left:before", "50%"], ["width:before", "100%"], ["height:before", "100%"], ["transform:before", "translate(-50%, -50%)"], ["opacity:before", 0], ["!backgroundColor:before", "#000000"], ["!borderTopColor:before", "#000000"], ["!borderRightColor:before", "#000000"], ["!borderBottomColor:before", "#000000"], ["!borderLeftColor:before", "#000000"]]))], ["up-button__text", _uM([["", _uM([["fontSize", 15], ["color", "#ffffff"]])], [".up-button--normal ", _uM([["fontSize", 14]])], [".up-button--small ", _uM([["fontSize", 12]])], [".up-button--mini ", _uM([["fontSize", 10]])], [".up-button--info ", _uM([["color", "#323233"]])], [".up-button--success ", _uM([["color", "#ffffff"]])], [".up-button--primary ", _uM([["color", "#ffffff"]])], [".up-button--error ", _uM([["color", "#ffffff"]])], [".up-button--warning ", _uM([["color", "#ffffff"]])], [".up-button--plain.up-button--primary ", _uM([["color", "var(--theme-color, #0957de)"]])], [".up-button--plain.up-button--info ", _uM([["color", "#000000"]])], [".up-button--plain.up-button--success ", _uM([["color", "#5ac725"]])], [".up-button--plain.up-button--error ", _uM([["color", "#f56c6c"]])], [".up-button--plain.up-button--warning ", _uM([["color", "#f56c6c"]])]])], ["up-button__loading-text", _pS(_uM([["fontSize", 15], ["marginLeft", 4]]))], ["up-button--large", _pS(_uM([["width", "100%"], ["height", 50], ["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))], ["up-button--normal", _pS(_uM([["paddingTop", 0], ["paddingRight", 12], ["paddingBottom", 0], ["paddingLeft", 12]]))], ["up-button--small", _pS(_uM([["minWidth", 60], ["height", 30], ["paddingTop", 0], ["paddingRight", 8], ["paddingBottom", 0], ["paddingLeft", 8]]))], ["up-button--mini", _pS(_uM([["height", 22], ["minWidth", 50], ["paddingTop", 0], ["paddingRight", 8], ["paddingBottom", 0], ["paddingLeft", 8]]))], ["up-button--disabled", _pS(_uM([["opacity", 0.5]]))], ["up-button--active", _pS(_uM([["opacity", 0.75]]))], ["up-button--info", _pS(_uM([["!backgroundColor", "#ffffff"], ["!borderTopColor", "#ebedf0"], ["!borderRightColor", "#ebedf0"], ["!borderBottomColor", "#ebedf0"], ["!borderLeftColor", "#ebedf0"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--success", _pS(_uM([["!backgroundColor", "#5ac725"], ["!borderTopColor", "#5ac725"], ["!borderRightColor", "#5ac725"], ["!borderBottomColor", "#5ac725"], ["!borderLeftColor", "#5ac725"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--primary", _pS(_uM([["!backgroundColor", "var(--theme-color, #0957de)"], ["!borderTopColor", "var(--theme-color, #0957de)"], ["!borderRightColor", "var(--theme-color, #0957de)"], ["!borderBottomColor", "var(--theme-color, #0957de)"], ["!borderLeftColor", "var(--theme-color, #0957de)"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--error", _pS(_uM([["!backgroundColor", "#f56c6c"], ["!borderTopColor", "#f56c6c"], ["!borderRightColor", "#f56c6c"], ["!borderBottomColor", "#f56c6c"], ["!borderLeftColor", "#f56c6c"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--warning", _pS(_uM([["!backgroundColor", "#f9ae3d"], ["!borderTopColor", "#f9ae3d"], ["!borderRightColor", "#f9ae3d"], ["!borderBottomColor", "#f9ae3d"], ["!borderLeftColor", "#f9ae3d"], ["!borderTopWidth", 1], ["!borderRightWidth", 1], ["!borderBottomWidth", 1], ["!borderLeftWidth", 1], ["!borderTopStyle", "solid"], ["!borderRightStyle", "solid"], ["!borderBottomStyle", "solid"], ["!borderLeftStyle", "solid"]]))], ["up-button--block", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["width", "100%"]]))], ["up-button--circle", _pS(_uM([["borderTopRightRadius", 100], ["borderTopLeftRadius", 100], ["borderBottomLeftRadius", 100], ["borderBottomRightRadius", 100]]))], ["up-button--square", _pS(_uM([["borderBottomLeftRadius", 3], ["borderBottomRightRadius", 3], ["borderTopLeftRadius", 3], ["borderTopRightRadius", 3]]))], ["up-button__icon", _pS(_uM([["minWidth", 4]]))], ["up-button--plain", _pS(_uM([["!backgroundColor", "#ffffff"]]))], ["up-button--hairline", _pS(_uM([["!borderTopWidth", 0.5], ["!borderRightWidth", 0.5], ["!borderBottomWidth", 0.5], ["!borderLeftWidth", 0.5]]))], ["up-button__button--active", _pS(_uM([["!opacity", 0.2], ["opacity:before", 0.15]]))]])]
