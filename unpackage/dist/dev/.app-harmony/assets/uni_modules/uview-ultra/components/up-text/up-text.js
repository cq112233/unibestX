import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createVNode, createBlock, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1 } from "../up-link/up-link.js";
import { p as propsText } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit, d as deepMerge, b as addStyle, f as error, v as priceFormat, w as timeFormat } from "../../libs/function/index.js";
import { d as date, u as url } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-text",
  mixins: [mpMixin, mixin, propsText],
  emits: ["click"],
  computed: {
    valueStyle() {
      let style = new UTSJSONObject({
        textDecoration: this.decoration,
        fontWeight: this.bold ? "bold" : "normal",
        wordWrap: this.wordWrap,
        fontSize: addUnit(this.size)
      });
      if (this.type == "") {
        style["color"] = this.color;
      }
      if (this.lines != "") {
        style["lines"] = this.lines;
      }
      if (this.lineHeight != "") {
        style["lineHeight"] = addUnit(this.lineHeight);
      }
      if (this.block) {
        style["display"] = "block";
      }
      return deepMerge(style, addStyle(this.customStyle));
    },
    // 经处理后需要显示的值
    value() {
      let _a = this, text = _a.text, mode = _a.mode, format = _a.format, href = _a.href;
      let textStr = text.toString();
      if (mode === "price") {
        if (!/^\d+(\.\d+)?$/.test(textStr)) {
          error("金额模式下，text参数需要为金额格式");
        }
        return priceFormat(textStr, 2);
      }
      if (mode === "date") {
        if (!date(textStr)) {
          error("日期模式下，text参数需要为日期或时间戳格式" + textStr);
        }
        if (format != "") {
          return timeFormat(textStr, format.toString());
        }
        return timeFormat(textStr, "yyyy-mm-dd");
      }
      if (mode === "phone") {
        if (format === "encrypt") {
          return `${textStr.substring(0, 3)}****${textStr.substring(7)}`;
        }
        return textStr;
      }
      if (mode === "name") {
        if (!(typeof textStr === "string")) {
          error("姓名模式下，text参数需要为字符串格式");
        }
        if (format === "encrypt") {
          return this.formatName(textStr);
        }
        return textStr;
      }
      if (mode === "link") {
        if (!url(href)) {
          error("超链接模式下，href参数需要为URL格式");
        }
        return textStr;
      }
      return textStr;
    },
    isMp() {
      let mp = false;
      return mp;
    }
  },
  data() {
    return {};
  },
  methods: {
    addStyle(style = null) {
      return addStyle(style);
    },
    clickHandler() {
      if (this.call && this.mode === "phone")
        ;
      this.$emit("click");
    },
    // 默认的姓名脱敏规则
    formatName(name) {
      let value = "";
      if (name.length == 2) {
        value = name.substring(0, 1) + "*";
      } else if (name.length > 2) {
        let char = "";
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += "*";
        }
        value = name.substring(0, 1) + char + name.substring(-1, 1);
      } else {
        value = name;
      }
      return value;
    },
    onGetUserInfo() {
    },
    onContact() {
    },
    onGetPhoneNumber() {
    },
    onError() {
    },
    onLaunchApp() {
    },
    onOpenSetting() {
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-text": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "flexWrap": "nowrap", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "width": "100%" } }, "up-text__price": { "": { "fontSize": 14, "color": "#606266" } }, "up-text__value": { "": { "fontSize": 14, "color": "#606266", "textOverflow": "ellipsis" } }, "up-text__value--primary": { "": { "color": "var(--theme-color, #0957de)" } }, "up-text__value--warning": { "": { "color": "#f9ae3d" } }, "up-text__value--success": { "": { "color": "#5ac725" } }, "up-text__value--info": { "": { "color": "#909399" } }, "up-text__value--error": { "": { "color": "#f56c6c" } }, "up-text__value--main": { "": { "color": "#303133" } }, "up-text__value--content": { "": { "color": "#606266" } }, "up-text__value--tips": { "": { "color": "#909193" } }, "up-text__value--light": { "": { "color": "#c0c4cc" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_link = resolveEasycom(resolveDynamicComponent("up-link"), __easycom_1);
  return _ctx.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["up-text", [_ctx.customClass]]),
      style: normalizeStyle({
        margin: _ctx.margin,
        justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
      }),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    },
    [
      _ctx.mode === "price" ? (openBlock(), createElementBlock(
        "text",
        {
          key: 0,
          class: normalizeClass(["up-text__price", `up-text__value--${_ctx.type}`]),
          style: normalizeStyle([$options.valueStyle])
        },
        "￥",
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      _ctx.prefixIcon ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "up-text__prefix-icon"
      }, [
        createVNode(_component_up_icon, {
          name: _ctx.prefixIcon,
          customStyle: $options.addStyle(_ctx.iconStyle)
        }, null, 8, ["name", "customStyle"])
      ])) : createCommentVNode("v-if", true),
      _ctx.mode === "link" ? (openBlock(), createBlock(_component_up_link, {
        key: 2,
        class: normalizeClass(["up-text__value", [`up-text__value--${_ctx.type}`, `up-line-${_ctx.lines}`]]),
        style: normalizeStyle({ fontWeight: $options.valueStyle["fontWeight"], wordWrap: $options.valueStyle["wordWrap"], fontSize: $options.valueStyle["fontSize"] }),
        text: $options.value,
        href: _ctx.href,
        underLine: ""
      }, null, 8, ["style", "class", "text", "href"])) : _ctx.openType != "" && $options.isMp ? (openBlock(), createElementBlock("button", {
        key: 3,
        class: "up-reset-button up-text__value",
        style: normalizeStyle([$options.valueStyle]),
        "data-index": "index",
        openType: _ctx.openType,
        onGetuserinfo: _cache[0] || (_cache[0] = (...args) => $options.onGetUserInfo && $options.onGetUserInfo(...args)),
        onContact: _cache[1] || (_cache[1] = (...args) => $options.onContact && $options.onContact(...args)),
        onGetphonenumber: _cache[2] || (_cache[2] = (...args) => $options.onGetPhoneNumber && $options.onGetPhoneNumber(...args)),
        onError: _cache[3] || (_cache[3] = (...args) => $options.onError && $options.onError(...args)),
        onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.onLaunchApp && $options.onLaunchApp(...args)),
        onOpensetting: _cache[5] || (_cache[5] = (...args) => $options.onOpenSetting && $options.onOpenSetting(...args)),
        lang: _ctx.lang,
        "session-from": _ctx.sessionFrom,
        "send-message-title": _ctx.sendMessageTitle,
        "send-message-path": _ctx.sendMessagePath,
        "send-message-img": _ctx.sendMessageImg,
        "show-message-card": _ctx.showMessageCard,
        "app-parameter": _ctx.appParameter
      }, toDisplayString($options.value), 45, ["openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (openBlock(), createElementBlock(
        "text",
        {
          key: 4,
          class: normalizeClass(["up-text__value", [
            `up-text__value--${_ctx.type}`,
            `up-line-${_ctx.lines}`
          ]]),
          style: normalizeStyle([$options.valueStyle])
        },
        toDisplayString($options.value),
        7
        /* TEXT, CLASS, STYLE */
      )),
      _ctx.suffixIcon != "" ? (openBlock(), createElementBlock("view", {
        key: 5,
        class: "up-text__suffix-icon"
      }, [
        createVNode(_component_up_icon, {
          name: _ctx.suffixIcon,
          customStyle: $options.addStyle(_ctx.iconStyle)
        }, null, 8, ["name", "customStyle"])
      ])) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-text/up-text.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-text.js.map
