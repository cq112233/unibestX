import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { c as bem, b as addStyle, d as deepMerge, a as addUnit, g as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { t as throttle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/throttle&";
import { c as config } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-button"
  },
  __name: "up-button",
  props: {
    hairline: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "info"
    },
    size: {
      type: String,
      default: "normal"
    },
    shape: {
      type: String,
      default: "square"
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
      default: ""
    },
    loadingMode: {
      type: String,
      default: "spinner"
    },
    loadingSize: {
      type: Number,
      default: 15
    },
    openType: {
      type: String,
      default: ""
    },
    formType: {
      type: String,
      default: ""
    },
    appParameter: {
      type: String,
      default: ""
    },
    hoverStopPropagation: {
      type: Boolean,
      default: false
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: ""
    },
    sendMessagePath: {
      type: String,
      default: ""
    },
    sendMessageImg: {
      type: String,
      default: ""
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    dataName: {
      type: String,
      default: ""
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
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
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
    const textColorCom = computed(() => {
      if (props.color != "") {
        return props.plain ? props.color : "#ffffff";
      }
      if (props.plain) {
        if (props.type == "primary")
          return "var(--theme-color, #0957de)";
        if (props.type == "info")
          return "#000000";
        if (props.type == "success")
          return "#5ac725";
        if (props.type == "error")
          return "#f56c6c";
        if (props.type == "warning")
          return "#f56c6c";
        return "#323233";
      }
      if (props.type == "info") {
        return "#323233";
      }
      return "#ffffff";
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
      let fontSize = "14";
      if (props.size === "large")
        fontSize = "16";
      if (props.size === "normal")
        fontSize = "14";
      if (props.size === "small")
        fontSize = "12";
      if (props.size === "mini")
        fontSize = "10";
      return fontSize;
    });
    const buttonRootStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      return deepMerge(baseColor.value, custom);
    });
    const loadingIconSize = computed(() => {
      return addUnit(props.loadingSize * 1.15);
    });
    const textStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: textSize.value + "px",
        color: textColorCom.value
      });
    });
    const iconSizeComputed = computed(() => {
      return addUnit(parseInt(getPx(textSize.value)) * 1.35);
    });
    const clickHandler = () => {
      if (!props.disabled && !props.loading) {
        throttle(() => {
          emit("click");
        }, parseInt(props.throttleTime.toString()));
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
    const __returned__ = { props, emit, bemClass, textColorCom, loadingColor, iconColorCom, baseColor, textSize, buttonRootStyle, loadingIconSize, textStyle, iconSizeComputed, clickHandler, getphonenumber, getuserinfo, error, opensetting, launchapp };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"up-button":{"":{"height":40,"position":"relative","boxSizing":"border-box","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center"}},"up-button__text":{"":{"fontSize":15,"color":"#ffffff"}},"up-button__loading-text":{"":{"fontSize":15,"marginLeft":4}},"up-button--large":{"":{"width":"100%","height":50,"paddingTop":0,"paddingRight":15,"paddingBottom":0,"paddingLeft":15}},"up-button--normal":{"":{"paddingTop":0,"paddingRight":12,"paddingBottom":0,"paddingLeft":12}},"up-button--small":{"":{"minWidth":60,"height":30,"paddingTop":0,"paddingRight":8,"paddingBottom":0,"paddingLeft":8}},"up-button--mini":{"":{"height":22,"minWidth":50,"paddingTop":0,"paddingRight":8,"paddingBottom":0,"paddingLeft":8}},"up-button--disabled":{"":{"opacity":0.5}},"up-button--active":{"":{"opacity":0.75}},"up-button--info":{"":{"!backgroundColor":"#ffffff","!borderTopColor":"#ebedf0","!borderRightColor":"#ebedf0","!borderBottomColor":"#ebedf0","!borderLeftColor":"#ebedf0","!borderTopWidth":1,"!borderRightWidth":1,"!borderBottomWidth":1,"!borderLeftWidth":1,"!borderTopStyle":"solid","!borderRightStyle":"solid","!borderBottomStyle":"solid","!borderLeftStyle":"solid"}},"up-button--success":{"":{"!backgroundColor":"#5ac725","!borderTopColor":"#5ac725","!borderRightColor":"#5ac725","!borderBottomColor":"#5ac725","!borderLeftColor":"#5ac725","!borderTopWidth":1,"!borderRightWidth":1,"!borderBottomWidth":1,"!borderLeftWidth":1,"!borderTopStyle":"solid","!borderRightStyle":"solid","!borderBottomStyle":"solid","!borderLeftStyle":"solid"}},"up-button--primary":{"":{"!backgroundColor":"var(--theme-color, #0957de)","!borderTopColor":"var(--theme-color, #0957de)","!borderRightColor":"var(--theme-color, #0957de)","!borderBottomColor":"var(--theme-color, #0957de)","!borderLeftColor":"var(--theme-color, #0957de)","!borderTopWidth":1,"!borderRightWidth":1,"!borderBottomWidth":1,"!borderLeftWidth":1,"!borderTopStyle":"solid","!borderRightStyle":"solid","!borderBottomStyle":"solid","!borderLeftStyle":"solid"}},"up-button--error":{"":{"!backgroundColor":"#f56c6c","!borderTopColor":"#f56c6c","!borderRightColor":"#f56c6c","!borderBottomColor":"#f56c6c","!borderLeftColor":"#f56c6c","!borderTopWidth":1,"!borderRightWidth":1,"!borderBottomWidth":1,"!borderLeftWidth":1,"!borderTopStyle":"solid","!borderRightStyle":"solid","!borderBottomStyle":"solid","!borderLeftStyle":"solid"}},"up-button--warning":{"":{"!backgroundColor":"#f9ae3d","!borderTopColor":"#f9ae3d","!borderRightColor":"#f9ae3d","!borderBottomColor":"#f9ae3d","!borderLeftColor":"#f9ae3d","!borderTopWidth":1,"!borderRightWidth":1,"!borderBottomWidth":1,"!borderLeftWidth":1,"!borderTopStyle":"solid","!borderRightStyle":"solid","!borderBottomStyle":"solid","!borderLeftStyle":"solid"}},"up-button--block":{"":{"display":"flex","flexDirection":"row","width":"100%"}},"up-button--circle":{"":{"borderTopRightRadius":100,"borderTopLeftRadius":100,"borderBottomLeftRadius":100,"borderBottomRightRadius":100}},"up-button--square":{"":{"borderBottomLeftRadius":3,"borderBottomRightRadius":3,"borderTopLeftRadius":3,"borderTopRightRadius":3}},"up-button__icon":{"":{"minWidth":4}},"up-button--plain":{"":{"!backgroundColor":"#ffffff"}},"up-button--hairline":{"":{"!borderTopWidth":0.5,"!borderRightWidth":0.5,"!borderBottomWidth":0.5,"!borderLeftWidth":0.5}},"flex":{"":{"display":"flex"}},"up-reset-button":{"":{"padding":"0","backgroundColor":"transparent"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, createBlock: _createBlock, renderSlot: _renderSlot, normalizeClass: _normalizeClass } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock("view", {
    style: _normalizeStyle([{ "position": "relative" }, $setup.buttonRootStyle]),
    class: _normalizeClass(["up-button", $setup.bemClass]),
    "hover-class": !$props.disabled && !$props.loading ? "up-button--active" : ""
  }, [
    $props.loading ? (_openBlock(), _createElementBlock(
      _Fragment,
      { key: 0 },
      [
        _createVNode(_component_up_loading_icon, {
          mode: $props.loadingMode,
          size: $setup.loadingIconSize,
          color: $setup.loadingColor
        }, null, 8, ["mode", "size", "color"]),
        _createElementVNode(
          "text",
          {
            class: "up-button__text up-button__loading-text",
            style: _normalizeStyle($setup.textStyle)
          },
          _toDisplayString($props.loadingText != "" ? $props.loadingText : $props.text),
          5
          /* TEXT, STYLE */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    )) : (_openBlock(), _createElementBlock(
      _Fragment,
      { key: 1 },
      [
        $props.icon != "" ? (_openBlock(), _createBlock(_component_up_icon, {
          key: 0,
          name: $props.icon,
          color: $setup.iconColorCom,
          size: $setup.iconSizeComputed,
          customStyle: { marginRight: "2px" }
        }, null, 8, ["name", "color", "size"])) : _createCommentVNode("v-if", true),
        _renderSlot(_ctx.$slots, "default", {}, () => [
          _createElementVNode(
            "text",
            {
              class: "up-button__text",
              style: _normalizeStyle($setup.textStyle)
            },
            _toDisplayString($props.text),
            5
            /* TEXT, STYLE */
          )
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    )),
    _createElementVNode("button", {
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
