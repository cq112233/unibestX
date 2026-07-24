import { _ as __easycom_1 } from "../up-loading-icon/up-loading-icon.js";
const { defineComponent, computed, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, normalizeClass, Fragment, createVNode, createElementVNode, toDisplayString, createBlock, createCommentVNode, renderSlot } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { d as defProps } from "./button.js";
import { c as bem } from "../../libs/function/index.js";
import { t as throttle } from "../../libs/function/throttle.js";
import { c as config } from "../../libs/config/config.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-button",
  props: {
    // 是否显示按钮的细边框
    hairline: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("button.hairline");
      }
    },
    // 按钮的预置样式，info，primary，error，warning，success
    type: {
      type: String,
      default: () => {
        return defProps.getString("button.type");
      }
    },
    // 按钮尺寸，large，normal，mini
    size: {
      type: String,
      default: () => {
        return defProps.getString("button.size");
      }
    },
    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: () => {
        return defProps.getString("button.shape");
      }
    },
    // 按钮是否镂空，背景色透明
    plain: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("button.plain");
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("button.disabled");
      }
    },
    // 按钮名称前是否带 loading 图标(App-nvue 平台，在 ios 上为雪花，Android上为圆圈)
    loading: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("button.loading");
      }
    },
    // 加载中提示文字
    loadingText: {
      type: String,
      default: () => {
        return defProps.getString("button.loadingText");
      }
    },
    // 加载状态图标类型
    loadingMode: {
      type: String,
      default: () => {
        return defProps.getString("button.loadingMode");
      }
    },
    // 加载图标大小
    loadingSize: {
      type: Number,
      default: () => {
        return defProps.getNumber("button.loadingSize");
      }
    },
    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    openType: {
      type: String,
      default: () => {
        return defProps.getString("button.openType");
      }
    },
    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    formType: {
      type: String,
      default: () => {
        return defProps.getString("button.formType");
      }
    },
    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    appParameter: {
      type: String,
      default: () => {
        return defProps.getString("button.appParameter");
      }
    },
    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("button.hoverStopPropagation");
      }
    },
    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
    lang: {
      type: String,
      default: () => {
        return defProps.getString("button.lang");
      }
    },
    // 会话来源，openType="contact"时有效
    sessionFrom: {
      type: String,
      default: () => {
        return defProps.getString("button.sessionFrom");
      }
    },
    // 会话内消息卡片标题，openType="contact"时有效
    sendMessageTitle: {
      type: String,
      default: () => {
        return defProps.getString("button.sendMessageTitle");
      }
    },
    // 会话内消息卡片点击跳转小程序路径，openType="contact"时有效
    sendMessagePath: {
      type: String,
      default: () => {
        return defProps.getString("button.sendMessagePath");
      }
    },
    // 会话内消息卡片图片，openType="contact"时有效
    sendMessageImg: {
      type: String,
      default: () => {
        return defProps.getString("button.sendMessageImg");
      }
    },
    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("button.showMessageCard");
      }
    },
    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: () => {
        return defProps.getString("button.dataName");
      }
    },
    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("button.throttleTime");
      }
    },
    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("button.hoverStartTime");
      }
    },
    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("button.hoverStayTime");
      }
    },
    // 按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）
    text: {
      type: [String, Number],
      default: () => {
        return defProps.getString("button.text");
      }
    },
    // 按钮图标
    icon: {
      type: String,
      default: () => {
        return defProps.getString("button.icon");
      }
    },
    // 按钮图标颜色
    iconColor: {
      type: String,
      default: () => {
        return defProps.getString("button.iconColor");
      }
    },
    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
      type: String,
      default: () => {
        return defProps.getString("button.color");
      }
    }
  },
  emits: ["click", "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const bemClass = computed(() => {
      let ret = "";
      if (props.color == "") {
        ret = bem("button", [props.type, props.shape, props.size], [
          ["disabled", props.disabled],
          ["plain", props.plain],
          ["hairline", props.hairline]
        ]);
      } else {
        ret = bem("button", [props.shape, props.size], [
          ["disabled", props.disabled],
          ["plain", props.plain],
          ["hairline", props.hairline]
        ]);
      }
      return ret;
    });
    const loadingColor = computed(() => {
      if (props.plain) {
        return props.color != "" ? props.color : config.getString(`color.up-${props.type}`);
      }
      if (props.type == "info") {
        return "#c9c9c9";
      }
      return "rgb(200, 200, 200)";
    });
    const iconColorCom = computed(() => {
      if (props.iconColor != "")
        return props.iconColor;
      if (props.plain) {
        return props.color != "" ? props.color : props.type;
      } else {
        return "";
      }
    });
    const baseColor = computed(() => {
      let style = new UTSJSONObject({});
      if (props.color != "") {
        if (!props.plain) {
          style["backgroundColor"] = props.color;
        }
        if (props.color.toString().indexOf("gradient") != -1) {
          style["borderWidth"] = 0;
          if (!props.plain) {
            style["backgroundImage"] = props.color;
          }
        } else {
          style["borderColor"] = props.color;
          style["borderWidth"] = "1px";
          style["borderStyle"] = "solid";
        }
      }
      return style;
    });
    const textSize = computed(() => {
      let fontSize = "14px";
      if (props.size === "large")
        fontSize = "16px";
      if (props.size === "normal")
        fontSize = "14px";
      if (props.size === "small")
        fontSize = "12px";
      if (props.size === "mini")
        fontSize = "10px";
      return fontSize;
    });
    const clickHandler = () => {
      if (!props.disabled && !props.loading) {
        throttle(() => {
          emit("click");
        }, parseInt(props.throttleTime.toString()));
      } else {
        uni.__f__("log", "at uni_modules/uview-ultra/components/up-button/up-button.uvue:314", "禁止点击");
      }
    };
    const getphonenumber = (res) => {
      emit("getphonenumber", res);
    };
    const getuserinfo = (res) => {
      emit("getuserinfo", res);
    };
    const error = (res) => {
      emit("error", res);
    };
    const opensetting = (res) => {
      emit("opensetting", res);
    };
    const launchapp = (res) => {
      emit("launchapp", res);
    };
    const __returned__ = { props, emit, bemClass, loadingColor, iconColorCom, baseColor, textSize, clickHandler, getphonenumber, getuserinfo, error, opensetting, launchapp };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-button": { "": { "height": 40, "position": "relative", "boxSizing": "border-box", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "position:before": "absolute", "top:before": "50%", "left:before": "50%", "width:before": "100%", "height:before": "100%", "transform:before": "translate(-50%, -50%)", "opacity:before": 0, "!backgroundColor:before": "#000000", "!borderTopColor:before": "#000000", "!borderRightColor:before": "#000000", "!borderBottomColor:before": "#000000", "!borderLeftColor:before": "#000000" } }, "up-button__text": { "": { "fontSize": 15, "color": "#ffffff" }, ".up-button--normal ": { "fontSize": 14 }, ".up-button--small ": { "fontSize": 12 }, ".up-button--mini ": { "fontSize": 10 }, ".up-button--info ": { "color": "#323233" }, ".up-button--success ": { "color": "#ffffff" }, ".up-button--primary ": { "color": "#ffffff" }, ".up-button--error ": { "color": "#ffffff" }, ".up-button--warning ": { "color": "#ffffff" }, ".up-button--plain.up-button--primary ": { "color": "var(--theme-color, #0957de)" }, ".up-button--plain.up-button--info ": { "color": "#000000" }, ".up-button--plain.up-button--success ": { "color": "#5ac725" }, ".up-button--plain.up-button--error ": { "color": "#f56c6c" }, ".up-button--plain.up-button--warning ": { "color": "#f56c6c" } }, "up-button__loading-text": { "": { "fontSize": 15, "marginLeft": 4 } }, "up-button--large": { "": { "width": "100%", "height": 50, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "up-button--normal": { "": { "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12 } }, "up-button--small": { "": { "minWidth": 60, "height": 30, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8 } }, "up-button--mini": { "": { "height": 22, "minWidth": 50, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8 } }, "up-button--disabled": { "": { "opacity": 0.5 } }, "up-button--active": { "": { "opacity": 0.75 } }, "up-button--info": { "": { "!backgroundColor": "#ffffff", "!borderTopColor": "#ebedf0", "!borderRightColor": "#ebedf0", "!borderBottomColor": "#ebedf0", "!borderLeftColor": "#ebedf0", "!borderTopWidth": 1, "!borderRightWidth": 1, "!borderBottomWidth": 1, "!borderLeftWidth": 1, "!borderTopStyle": "solid", "!borderRightStyle": "solid", "!borderBottomStyle": "solid", "!borderLeftStyle": "solid" } }, "up-button--success": { "": { "!backgroundColor": "#5ac725", "!borderTopColor": "#5ac725", "!borderRightColor": "#5ac725", "!borderBottomColor": "#5ac725", "!borderLeftColor": "#5ac725", "!borderTopWidth": 1, "!borderRightWidth": 1, "!borderBottomWidth": 1, "!borderLeftWidth": 1, "!borderTopStyle": "solid", "!borderRightStyle": "solid", "!borderBottomStyle": "solid", "!borderLeftStyle": "solid" } }, "up-button--primary": { "": { "!backgroundColor": "var(--theme-color, #0957de)", "!borderTopColor": "var(--theme-color, #0957de)", "!borderRightColor": "var(--theme-color, #0957de)", "!borderBottomColor": "var(--theme-color, #0957de)", "!borderLeftColor": "var(--theme-color, #0957de)", "!borderTopWidth": 1, "!borderRightWidth": 1, "!borderBottomWidth": 1, "!borderLeftWidth": 1, "!borderTopStyle": "solid", "!borderRightStyle": "solid", "!borderBottomStyle": "solid", "!borderLeftStyle": "solid" } }, "up-button--error": { "": { "!backgroundColor": "#f56c6c", "!borderTopColor": "#f56c6c", "!borderRightColor": "#f56c6c", "!borderBottomColor": "#f56c6c", "!borderLeftColor": "#f56c6c", "!borderTopWidth": 1, "!borderRightWidth": 1, "!borderBottomWidth": 1, "!borderLeftWidth": 1, "!borderTopStyle": "solid", "!borderRightStyle": "solid", "!borderBottomStyle": "solid", "!borderLeftStyle": "solid" } }, "up-button--warning": { "": { "!backgroundColor": "#f9ae3d", "!borderTopColor": "#f9ae3d", "!borderRightColor": "#f9ae3d", "!borderBottomColor": "#f9ae3d", "!borderLeftColor": "#f9ae3d", "!borderTopWidth": 1, "!borderRightWidth": 1, "!borderBottomWidth": 1, "!borderLeftWidth": 1, "!borderTopStyle": "solid", "!borderRightStyle": "solid", "!borderBottomStyle": "solid", "!borderLeftStyle": "solid" } }, "up-button--block": { "": { "display": "flex", "flexDirection": "row", "width": "100%" } }, "up-button--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100 } }, "up-button--square": { "": { "borderBottomLeftRadius": 3, "borderBottomRightRadius": 3, "borderTopLeftRadius": 3, "borderTopRightRadius": 3 } }, "up-button__icon": { "": { "minWidth": 4 } }, "up-button--plain": { "": { "!backgroundColor": "#ffffff" } }, "up-button--hairline": { "": { "!borderTopWidth": 0.5, "!borderRightWidth": 0.5, "!borderBottomWidth": 0.5, "!borderLeftWidth": 0.5 } }, "up-button__button--active": { "": { "!opacity": 0.2, "opacity:before": 0.15 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_1);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    style: normalizeStyle([{ "position": "relative" }, [$setup.baseColor, _ctx.$upAddStyle(_ctx.customStyle)]]),
    class: normalizeClass(["up-button", $setup.bemClass]),
    "hover-class": !$props.disabled && !$props.loading ? "up-button--active" : ""
  }, [
    $props.loading ? (openBlock(), createElementBlock(
      Fragment,
      { key: 0 },
      [
        createVNode(_component_up_loading_icon, {
          mode: $props.loadingMode,
          size: _ctx.$up.addUnit($props.loadingSize * 1.15),
          color: $setup.loadingColor
        }, null, 8, ["mode", "size", "color"]),
        createElementVNode(
          "text",
          {
            class: "up-button__text up-button__loading-text",
            style: normalizeStyle([{ fontSize: $setup.textSize + "px" }])
          },
          toDisplayString($props.loadingText != "" ? $props.loadingText : $props.text),
          5
          /* TEXT, STYLE */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    )) : (openBlock(), createElementBlock(
      Fragment,
      { key: 1 },
      [
        $props.icon != "" ? (openBlock(), createBlock(_component_up_icon, {
          key: 0,
          name: $props.icon,
          color: $setup.iconColorCom,
          size: _ctx.$up.addUnit(parseInt(_ctx.$up.getPx($setup.textSize)) * 1.35),
          customStyle: { marginRight: "2px" }
        }, null, 8, ["name", "color", "size"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          createElementVNode(
            "text",
            {
              class: "up-button__text",
              style: normalizeStyle([{ fontSize: $setup.textSize + "px" }])
            },
            toDisplayString($props.text),
            5
            /* TEXT, STYLE */
          )
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    )),
    createElementVNode("button", {
      "hover-start-time": $props.hoverStartTime,
      "hover-stay-time": $props.hoverStayTime,
      "form-type": $props.formType,
      "open-type": $props.openType,
      "app-parameter": $props.appParameter,
      "hover-stop-propagation": $props.hoverStopPropagation,
      "send-message-title": $props.sendMessageTitle,
      "send-message-path": $props.sendMessagePath,
      lang: $props.lang,
      "data-name": $props.dataName,
      "session-from": $props.sessionFrom,
      "send-message-img": $props.sendMessageImg,
      "show-message-card": $props.showMessageCard,
      onGetphonenumber: $setup.getphonenumber,
      onGetuserinfo: $setup.getuserinfo,
      onError: $setup.error,
      onOpensetting: $setup.opensetting,
      onLaunchapp: $setup.launchapp,
      loading: $props.loading,
      "hover-class": !$props.disabled && !$props.loading ? "up-button__button--active" : "",
      style: { "background": "#fff", "position": "absolute", "top": "0", "bottom": "0", "left": "0", "right": "0", "opacity": "0" },
      class: "up-reset-button",
      onClick: $setup.clickHandler
    }, null, 40, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "loading", "hover-class"])
  ], 14, ["hover-class"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-button/up-button.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-button.js.map
