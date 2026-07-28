const { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode } = globalThis.Vue
import { a as addUnit } from "../../libs/function/index.js";
import { b as badgeProps } from "./badge.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-badge"
  },
  __name: "up-badge",
  props: {
    // 是否显示圆点
    isDot: {
      type: Boolean,
      default: badgeProps.getBoolean("badge.isDot")
    },
    // 显示的内容
    value: {
      type: [Number, String],
      default: badgeProps.getString("badge.value")
    },
    // 显示的内容
    modelValue: {
      type: [Number, String],
      default: badgeProps.getString("badge.modelValue")
    },
    // 是否显示
    show: {
      type: Boolean,
      default: badgeProps.getBoolean("badge.show")
    },
    // 最大值，超过最大值会显示 '{max}+'
    max: {
      type: [Number, String],
      default: badgeProps.getNumber("badge.max")
    },
    // 主题类型，error|warning|success|primary
    type: {
      type: String,
      default: badgeProps.getString("badge.type")
    },
    // 当数值为 0 时，是否展示 Badge
    showZero: {
      type: Boolean,
      default: badgeProps.getBoolean("badge.showZero")
    },
    // 背景颜色，优先级比type高，如设置，type参数会失效
    bgColor: {
      type: String,
      default: badgeProps.getString("badge.bgColor")
    },
    // 字体颜色
    color: {
      type: String,
      default: badgeProps.getString("badge.color")
    },
    // 徽标形状，circle-四角均为圆角，horn-左下角为直角
    shape: {
      type: String,
      default: badgeProps.getString("badge.shape")
    },
    // 设置数字的显示方式，overflow|ellipsis|limit
    // overflow会根据max字段判断，超出显示`${max}+`
    // ellipsis会根据max判断，超出显示`${max}...`
    // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
    numberType: {
      type: String,
      default: badgeProps.getString("badge.numberType")
    },
    // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
    offset: {
      type: Array,
      default: badgeProps.getArray("badge.offset")
    },
    // 是否反转背景和字体颜色
    inverted: {
      type: Boolean,
      default: badgeProps.getBoolean("badge.inverted")
    },
    // 是否绝对定位
    absolute: {
      type: Boolean,
      default: badgeProps.getBoolean("badge.absolute")
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
    const showValue = computed(() => {
      let valueReturn = "";
      switch (props.numberType.toString()) {
        case "overflow":
          valueReturn = parseInt(props.value.toString()) > parseInt(props.max.toString()) ? props.max.toString() + "+" : props.value.toString();
          break;
        case "ellipsis":
          valueReturn = parseInt(props.value.toString()) > parseInt(props.max.toString()) ? "..." : props.value.toString();
          break;
        case "limit":
          valueReturn = parseInt(props.value.toString()) > 999 ? parseInt(props.value.toString()) >= 9999 ? (Math.floor(parseInt(props.value.toString()) / 1e4 * 100) / 100).toString() + "w" : (Math.floor(parseInt(props.value.toString()) / 1e3 * 100) / 100).toString() + "k" : props.value.toString();
          break;
        default:
          valueReturn = props.value.toString();
      }
      return valueReturn;
    });
    const __returned__ = { props, badgeStyle, showValue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-badge": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "lineHeight": "11px", "textAlign": "center", "fontSize": 11, "color": "#FFFFFF" } }, "up-badge--dot": { "": { "height": 8, "width": 8 } }, "up-badge--inverted": { "": { "fontSize": 13 } }, "up-badge--not-dot": { "": { "paddingTop": 2, "paddingRight": 5, "paddingBottom": 2, "paddingLeft": 5 } }, "up-badge--horn": { "": { "borderBottomLeftRadius": 0 } }, "up-badge--primary": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-badge--primary--inverted": { "": { "color": "var(--theme-color, #0957de)" } }, "up-badge--error": { "": { "backgroundColor": "#f56c6c" } }, "up-badge--error--inverted": { "": { "color": "#f56c6c" } }, "up-badge--success": { "": { "backgroundColor": "#5ac725" } }, "up-badge--success--inverted": { "": { "color": "#5ac725" } }, "up-badge--info": { "": { "backgroundColor": "#909399" } }, "up-badge--info--inverted": { "": { "color": "#909399" } }, "up-badge--warning": { "": { "backgroundColor": "#f9ae3d" } }, "up-badge--warning--inverted": { "": { "color": "#f9ae3d" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show && ((parseInt($props.value.toString()) == 0 ? $props.showZero : true) || $props.isDot) ? (openBlock(), createElementBlock(
    "text",
    {
      key: 0,
      class: normalizeClass(["up-badge", [
        $props.isDot ? "up-badge--dot" : "up-badge--not-dot",
        $props.inverted ? "up-badge--inverted" : "",
        $props.shape === "horn" ? "up-badge--horn" : "",
        $props.inverted ? `up-badge--${$props.type}--inverted` : `up-badge--${$props.type}`
      ]]),
      style: normalizeStyle([_ctx.$upAddStyle(_ctx.customStyle), $setup.badgeStyle])
    },
    toDisplayString($props.isDot ? "" : $setup.showValue),
    7
    /* TEXT, CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-badge/up-badge.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-badge.js.map
