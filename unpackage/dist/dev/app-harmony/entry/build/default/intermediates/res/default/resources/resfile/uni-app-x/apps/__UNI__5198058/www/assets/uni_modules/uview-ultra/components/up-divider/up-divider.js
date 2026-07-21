import { _ as __easycom_0 } from "../up-line/up-line.js";
const { defineComponent, computed, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createVNode, toDisplayString, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { d as defProps } from "./divider.js";
import { a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-divider",
  props: {
    // 是否虚线
    dashed: {
      type: Boolean,
      default: defProps.getBoolean("divider.dashed")
    },
    // 是否细线
    hairline: {
      type: Boolean,
      default: defProps.getBoolean("divider.hairline")
    },
    // 是否以点替代文字，优先于text字段起作用
    dot: {
      type: Boolean,
      default: defProps.getBoolean("divider.dot")
    },
    // 内容文本的位置，left-左边，center-中间，right-右边
    textPosition: {
      type: String,
      default: defProps.getString("divider.textPosition")
    },
    // 文本内容
    text: {
      type: [String, Number],
      default: defProps.getString("divider.text")
    },
    // 文本大小
    textSize: {
      type: [String, Number],
      default: defProps.getNumber("divider.textSize")
    },
    // 文本颜色
    textColor: {
      type: String,
      default: defProps.getString("divider.textColor")
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: defProps.getString("divider.lineColor")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const textStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["fontSize"] = addUnit(props.textSize);
      style["color"] = props.textColor;
      return style;
    });
    const leftLineStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.textPosition === "left") {
        style["width"] = "80rpx";
      } else {
        style["flex"] = 1;
      }
      return style;
    });
    const rightLineStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.textPosition === "right") {
        style["width"] = "80rpx";
      } else {
        style["flex"] = 1;
      }
      return style;
    });
    const clickHandler = () => {
      emit("click");
    };
    const __returned__ = { props, emit, textStyle, leftLineStyle, rightLineStyle, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-divider": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginTop": 15, "marginRight": 0, "marginBottom": 15, "marginLeft": 0 } }, "up-divider__text": { "": { "marginTop": 0, "marginRight": 15, "marginBottom": 0, "marginLeft": 15 } }, "up-divider__dot": { "": { "fontSize": 12, "marginTop": 0, "marginRight": 12, "marginBottom": 0, "marginLeft": 12, "color": "#c0c4cc" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_0);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-divider",
      style: normalizeStyle([_ctx.$up.addStyle(_ctx.customStyle)]),
      onClick: $setup.clickHandler
    },
    [
      createVNode(_component_up_line, {
        color: $props.lineColor,
        customStyle: $setup.leftLineStyle,
        hairline: $props.hairline,
        dashed: $props.dashed
      }, null, 8, ["color", "customStyle", "hairline", "dashed"]),
      $props.dot ? (openBlock(), createElementBlock("text", {
        key: 0,
        class: "up-divider__dot"
      }, "●")) : $props.text ? (openBlock(), createElementBlock(
        "text",
        {
          key: 1,
          class: "up-divider__text",
          style: normalizeStyle([$setup.textStyle])
        },
        toDisplayString($props.text),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true),
      createVNode(_component_up_line, {
        color: $props.lineColor,
        customStyle: $setup.rightLineStyle,
        hairline: $props.hairline,
        dashed: $props.dashed
      }, null, 8, ["color", "customStyle", "hairline", "dashed"])
    ],
    4
    /* STYLE */
  );
}
const __easycom_42 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-divider/up-divider.uvue"]]);
export {
  __easycom_42 as _
};
//# sourceMappingURL=up-divider.js.map
