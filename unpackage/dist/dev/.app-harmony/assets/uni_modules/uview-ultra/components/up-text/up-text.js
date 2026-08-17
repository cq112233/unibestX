import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1 } from "../up-link/up-link.js";
import { a as addUnit, d as deepMerge, b as addStyle, i as error, v as priceFormat, w as timeFormat } from "../../libs/function/index.js";
import { d as date, u as url } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-text"
  },
  __name: "up-text",
  props: {
    type: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    },
    text: {
      type: [String, Number],
      default: ""
    },
    prefixIcon: {
      type: String,
      default: ""
    },
    suffixIcon: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    format: {
      type: [String, Function],
      default: ""
    },
    call: {
      type: Boolean,
      default: false
    },
    openType: {
      type: String,
      default: ""
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
      default: ""
    },
    color: {
      type: String,
      default: "#303133"
    },
    size: {
      type: [String, Number],
      default: "15px"
    },
    iconStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({ fontSize: "15px" });
      }
    },
    decoration: {
      type: String,
      default: "none"
    },
    margin: {
      type: [Object, String, Number],
      default: "0"
    },
    lineHeight: {
      type: [String, Number],
      default: ""
    },
    align: {
      type: String,
      default: "left"
    },
    wordWrap: {
      type: String,
      default: "normal"
    },
    customClass: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
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
    appParameter: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const isMp = computed(() => {
      let mp = false;
      return mp;
    });
    const valueStyle = computed(() => {
      let style = new UTSJSONObject({
        textDecoration: props.decoration,
        fontWeight: props.bold ? "bold" : "normal",
        wordWrap: props.wordWrap,
        fontSize: addUnit(props.size)
      });
      if (props.type == "") {
        style["color"] = props.color;
      }
      if (props.lines.toString() != "") {
        style["lines"] = props.lines;
      }
      if (props.lineHeight.toString() != "") {
        style["lineHeight"] = addUnit(props.lineHeight);
      }
      if (props.block) {
        style["display"] = "block";
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    const customIconStyle = computed(() => {
      return addStyle(props.iconStyle);
    });
    function formatName(name) {
      let val = "";
      if (name.length == 2) {
        val = name.substring(0, 1) + "*";
      } else if (name.length > 2) {
        let char = "";
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += "*";
        }
        val = name.substring(0, 1) + char + name.substring(name.length - 1);
      } else {
        val = name;
      }
      return val;
    }
    const value = computed(() => {
      const textStr = props.text.toString();
      if (props.mode === "price") {
        if (!/^\d+(\.\d+)?$/.test(textStr)) {
          error("金额模式下，text参数需要为金额格式");
        }
        return priceFormat(textStr, 2);
      }
      if (props.mode === "date") {
        if (!date(textStr)) {
          error("日期模式下，text参数需要为日期或时间戳格式" + textStr);
        }
        if (props.format != null && props.format.toString() != "") {
          return timeFormat(textStr, props.format.toString());
        }
        return timeFormat(textStr, "yyyy-mm-dd");
      }
      if (props.mode === "phone") {
        if (props.format === "encrypt") {
          return `${textStr.substring(0, 3)}****${textStr.substring(7)}`;
        }
        return textStr;
      }
      if (props.mode === "name") {
        if (props.format === "encrypt") {
          return formatName(textStr);
        }
        return textStr;
      }
      if (props.mode === "link") {
        if (!url(props.href)) {
          error("超链接模式下，href参数需要为URL格式");
        }
        return textStr;
      }
      return textStr;
    });
    function clickHandler() {
      emit("click");
    }
    function onGetUserInfo() {
    }
    function onContact() {
    }
    function onGetPhoneNumber() {
    }
    function onError() {
    }
    function onLaunchApp() {
    }
    function onOpenSetting() {
    }
    const __returned__ = { props, emit, isMp, valueStyle, customIconStyle, formatName, value, clickHandler, onGetUserInfo, onContact, onGetPhoneNumber, onError, onLaunchApp, onOpenSetting };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-text": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "flexWrap": "nowrap", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "width": "100%" } }, "up-text__price": { "": { "fontSize": 14, "color": "#606266" } }, "up-text__value": { "": { "fontSize": 14, "color": "#606266", "textOverflow": "ellipsis", "display": "flex", "flexDirection": "row", "alignItems": "center", "flexWrap": "nowrap" } }, "up-text__value--primary": { "": { "color": "var(--theme-color, #0957de)" } }, "up-text__value--warning": { "": { "color": "#f9ae3d" } }, "up-text__value--success": { "": { "color": "#5ac725" } }, "up-text__value--info": { "": { "color": "#909399" } }, "up-text__value--error": { "": { "color": "#f56c6c" } }, "up-text__value--main": { "": { "color": "#303133" } }, "up-text__value--content": { "": { "color": "#606266" } }, "up-text__value--tips": { "": { "color": "#909193" } }, "up-text__value--light": { "": { "color": "#c0c4cc" } }, "up-text__prefix-icon": { "": { "marginRight": 5 } }, "up-text__suffix-icon": { "": { "marginLeft": 5 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, createBlock: _createBlock, toDisplayString: _toDisplayString } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_link = resolveEasycom(__resolveDynamicComponent("up-link"), __easycom_1);
  return $props.show ? (_openBlock(), _createElementBlock(
    "view",
    {
      key: 0,
      class: _normalizeClass(["up-text", [$props.customClass]]),
      style: _normalizeStyle({
        margin: $props.margin,
        justifyContent: $props.align === "left" ? "flex-start" : $props.align === "center" ? "center" : "flex-end"
      }),
      onClick: $setup.clickHandler
    },
    [
      $props.mode === "price" ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 0,
          class: _normalizeClass(["up-text__price", `up-text__value--${$props.type}`]),
          style: _normalizeStyle($setup.valueStyle)
        },
        "￥",
        6
        /* CLASS, STYLE */
      )) : _createCommentVNode("v-if", true),
      $props.prefixIcon != "" ? (_openBlock(), _createElementBlock("view", {
        key: 1,
        class: "up-text__prefix-icon"
      }, [
        _createVNode(_component_up_icon, {
          name: $props.prefixIcon,
          customStyle: $setup.customIconStyle
        }, null, 8, ["name", "customStyle"])
      ])) : _createCommentVNode("v-if", true),
      $props.mode === "link" ? (_openBlock(), _createBlock(_component_up_link, {
        key: 2,
        class: _normalizeClass(["up-text__value", [`up-text__value--${$props.type}`, `up-line-${$props.lines}`]]),
        style: _normalizeStyle({ fontWeight: $setup.valueStyle["fontWeight"], wordWrap: $setup.valueStyle["wordWrap"], fontSize: $setup.valueStyle["fontSize"] }),
        text: $setup.value,
        href: $props.href,
        underLine: ""
      }, null, 8, ["style", "class", "text", "href"])) : $props.openType != "" && $setup.isMp ? (_openBlock(), _createElementBlock("button", {
        key: 3,
        class: "up-reset-button up-text__value",
        style: _normalizeStyle($setup.valueStyle),
        "data-index": "index",
        openType: $props.openType,
        onGetuserinfo: $setup.onGetUserInfo,
        onContact: $setup.onContact,
        onGetphonenumber: $setup.onGetPhoneNumber,
        onError: $setup.onError,
        onLaunchapp: $setup.onLaunchApp,
        onOpensetting: $setup.onOpenSetting,
        lang: $props.lang,
        "session-from": $props.sessionFrom,
        "send-message-title": $props.sendMessageTitle,
        "send-message-path": $props.sendMessagePath,
        "send-message-img": $props.sendMessageImg,
        "show-message-card": $props.showMessageCard,
        "app-parameter": $props.appParameter
      }, _toDisplayString($setup.value), 45, ["openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (_openBlock(), _createElementBlock(
        "text",
        {
          key: 4,
          class: _normalizeClass(["up-text__value", [
            `up-text__value--${$props.type}`,
            `up-line-${$props.lines}`
          ]]),
          style: _normalizeStyle($setup.valueStyle)
        },
        _toDisplayString($setup.value),
        7
        /* TEXT, CLASS, STYLE */
      )),
      $props.suffixIcon != "" ? (_openBlock(), _createElementBlock("view", {
        key: 5,
        class: "up-text__suffix-icon"
      }, [
        _createVNode(_component_up_icon, {
          name: $props.suffixIcon,
          customStyle: $setup.customIconStyle
        }, null, 8, ["name", "customStyle"])
      ])) : _createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  )) : _createCommentVNode("v-if", true);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-text/up-text.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-text.js.map
