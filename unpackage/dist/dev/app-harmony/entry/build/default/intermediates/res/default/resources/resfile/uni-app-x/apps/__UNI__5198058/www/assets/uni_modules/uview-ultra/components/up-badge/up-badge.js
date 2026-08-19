import { a as addUnit, b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-badge"
  },
  __name: "up-badge",
  props: {
    isDot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: ""
    },
    modelValue: {
      type: [Number, String],
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    },
    max: {
      type: [Number, String],
      default: 999
    },
    type: {
      type: String,
      default: "error"
    },
    showZero: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ffffff"
    },
    shape: {
      type: String,
      default: "circle"
    },
    numberType: {
      type: String,
      default: "overflow"
    },
    offset: {
      type: Array,
      default: () => {
        return [];
      }
    },
    inverted: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const badgeStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.color != "") {
        style["color"] = props.color;
      }
      if (props.bgColor != "" && !props.inverted) {
        style["backgroundColor"] = props.bgColor;
      }
      if (props.absolute) {
        style["position"] = "absolute";
        let offsetArray = props.offset;
        if (offsetArray.length > 0) {
          const top_1 = offsetArray[0];
          style["top"] = addUnit(top_1);
          if (offsetArray.length == 2) {
            style["right"] = addUnit(offsetArray[1]);
          } else {
            style["right"] = addUnit(top_1);
          }
        }
      }
      return style;
    });
    const computedBadgeStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const badge = badgeStyle.value;
      return deepMerge(badge, custom);
    });
    const showValue = computed(() => {
      let valueReturn = "";
      const valStr = props.value != "" ? props.value.toString() : props.modelValue != "" ? props.modelValue.toString() : "0";
      switch (props.numberType.toString()) {
        case "overflow":
          valueReturn = parseInt(valStr) > parseInt(props.max.toString()) ? props.max.toString() + "+" : valStr;
          break;
        case "ellipsis":
          valueReturn = parseInt(valStr) > parseInt(props.max.toString()) ? "..." : valStr;
          break;
        case "limit":
          valueReturn = parseInt(valStr) > 999 ? parseInt(valStr) >= 9999 ? (Math.floor(parseInt(valStr) / 1e4 * 100) / 100).toString() + "w" : (Math.floor(parseInt(valStr) / 1e3 * 100) / 100).toString() + "k" : valStr;
          break;
        default:
          valueReturn = valStr;
      }
      return valueReturn;
    });
    const __returned__ = { props, badgeStyle, computedBadgeStyle, showValue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-badge": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "lineHeight": "11px", "textAlign": "center", "fontSize": 11, "color": "#FFFFFF" } }, "up-badge--dot": { "": { "height": 8, "width": 8 } }, "up-badge--inverted": { "": { "fontSize": 13 } }, "up-badge--not-dot": { "": { "paddingTop": 2, "paddingRight": 5, "paddingBottom": 2, "paddingLeft": 5 } }, "up-badge--horn": { "": { "borderBottomLeftRadius": 0 } }, "up-badge--primary": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-badge--primary--inverted": { "": { "color": "var(--theme-color, #0957de)" } }, "up-badge--error": { "": { "backgroundColor": "#f56c6c" } }, "up-badge--error--inverted": { "": { "color": "#f56c6c" } }, "up-badge--success": { "": { "backgroundColor": "#5ac725" } }, "up-badge--success--inverted": { "": { "color": "#5ac725" } }, "up-badge--info": { "": { "backgroundColor": "#909399" } }, "up-badge--info--inverted": { "": { "color": "#909399" } }, "up-badge--warning": { "": { "backgroundColor": "#f9ae3d" } }, "up-badge--warning--inverted": { "": { "color": "#f9ae3d" } } };
const { toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show && ((parseInt($props.value.toString()) == 0 ? $props.showZero : true) || $props.isDot) ? (_openBlock(), _createElementBlock(
    "text",
    {
      key: 0,
      class: _normalizeClass(["up-badge", [
        $props.isDot ? "up-badge--dot" : "up-badge--not-dot",
        $props.inverted ? "up-badge--inverted" : "",
        $props.shape === "horn" ? "up-badge--horn" : "",
        $props.inverted ? `up-badge--${$props.type}--inverted` : `up-badge--${$props.type}`
      ]]),
      style: _normalizeStyle($setup.computedBadgeStyle)
    },
    _toDisplayString($props.isDot ? "" : $setup.showValue),
    7
    /* TEXT, CLASS, STYLE */
  )) : _createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-badge/up-badge.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-badge.js.map
