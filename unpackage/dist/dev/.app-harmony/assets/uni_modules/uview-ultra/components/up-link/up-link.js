import "./link.js";
import { a as addUnit, g as getPx, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-link"
  },
  __name: "up-link",
  props: {
    color: {
      type: String,
      default: "#3c9cff"
    },
    fontSize: {
      type: [String, Number],
      default: "15px"
    },
    underLine: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ""
    },
    mpTips: {
      type: String,
      default: "链接已复制，请在浏览器打开"
    },
    lineColor: {
      type: String,
      default: ""
    },
    text: {
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
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const linkStyle = computed(() => {
      const style = new UTSJSONObject({
        color: props.color,
        fontSize: addUnit(props.fontSize),
        lineHeight: addUnit(parseInt(getPx(props.fontSize)) + 2),
        textDecoration: props.underLine ? "underline" : "none"
      });
      return style;
    });
    function openLink() {
      emit("click");
    }
    const __returned__ = { props, emit, linkStyle, openLink, get addStyle() {
      return addStyle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-link": { "": { "lineHeight": 1 } } };
const { toDisplayString: _toDisplayString, withModifiers: _withModifiers, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "text",
    {
      class: "up-link",
      onClick: _withModifiers($setup.openLink, ["stop"]),
      style: _normalizeStyle([$setup.linkStyle, $setup.addStyle($props.customStyle)])
    },
    _toDisplayString($props.text),
    5
    /* TEXT, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-link/up-link.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-link.js.map
