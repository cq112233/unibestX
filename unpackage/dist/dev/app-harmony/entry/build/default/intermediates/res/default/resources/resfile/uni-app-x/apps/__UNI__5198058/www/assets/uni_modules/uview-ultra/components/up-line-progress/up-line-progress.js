const { defineComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot, toDisplayString, createCommentVNode } = globalThis.Vue
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { h as range, a as addUnit, b as addStyle, s as sleep, u as upGetRect } from "../../libs/function/index.js";
import { d as defProps } from "./lineProgress.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
let crtProp = defProps["lineProgress"];
function normalizeNumber(value = null, defaultValue = 0) {
  if (typeof value === "number") {
    return value;
  }
  if (value == null) {
    return defaultValue;
  }
  const parsed = parseFloat(value.toString());
  return isNaN(parsed) ? defaultValue : parsed;
}
const _sfc_main = defineComponent({
  name: "up-line-progress",
  mixins: [mpMixin, mixin],
  props: {
    activeColor: {
      type: String,
      default: crtProp["activeColor"]
    },
    inactiveColor: {
      type: String,
      default: crtProp["inactiveColor"]
    },
    percentage: {
      type: [String, Number],
      default: crtProp["percentage"]
    },
    showText: {
      type: Boolean,
      default: crtProp["showText"]
    },
    height: {
      type: [String, Number],
      default: crtProp["height"]
    }
  },
  data() {
    return {
      lineWidth: "0px"
    };
  },
  watch: {
    percentage() {
      this.resizeProgressWidth();
    },
    height() {
      this.resizeProgressWidth();
    }
  },
  computed: {
    percentageValue() {
      return normalizeNumber(this.percentage, 0);
    },
    innerPercentage() {
      return range(0, 100, this.percentageValue);
    },
    backgroundStyle() {
      return new UTSJSONObject({
        backgroundColor: this.inactiveColor,
        height: addUnit(this.height)
      });
    },
    progressStyle() {
      return new UTSJSONObject({
        width: this.lineWidth,
        backgroundColor: this.activeColor,
        height: addUnit(this.height)
      });
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    addStyle(e = null) {
      return addStyle(e);
    },
    init() {
      sleep(20).then(() => {
        this.resizeProgressWidth();
      });
    },
    resizeProgressWidth() {
      upGetRect(".up-line-progress__background", false, this).then((size) => {
        const width = size.width != null ? size.width : 0;
        this.lineWidth = (width * this.innerPercentage / 100).toString() + "px";
      });
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-line-progress": { "": { "alignItems": "stretch", "position": "relative", "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "overflow": "hidden", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-line-progress__background": { "": { "backgroundColor": "#ececec", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-line-progress__line": { "": { "position": "absolute", "top": 0, "left": 0, "bottom": 0, "alignItems": "center", "display": "flex", "flexDirection": "row", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "transitionProperty": "width", "transitionDuration": "0.5s", "transitionTimingFunction": "ease", "justifyContent": "flex-end" } }, "up-line-progress__text": { "": { "fontSize": 10, "textAlign": "right", "color": "#FFFFFF", "marginRight": 5, "transform": "scale(0.9)" } }, "@TRANSITION": { "up-line-progress__line": { "property": "width", "duration": "0.5s", "timingFunction": "ease" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-line-progress",
      style: normalizeStyle([$options.addStyle(_ctx.customStyle)])
    },
    [
      createElementVNode(
        "view",
        {
          class: "up-line-progress__background",
          style: normalizeStyle([$options.backgroundStyle])
        },
        null,
        4
        /* STYLE */
      ),
      createElementVNode(
        "view",
        {
          class: "up-line-progress__line",
          style: normalizeStyle([$options.progressStyle])
        },
        [
          renderSlot(_ctx.$slots, "default", {}, () => [
            $props.showText && $options.percentageValue >= 10 ? (openBlock(), createElementBlock(
              "text",
              {
                key: 0,
                class: "up-line-progress__text"
              },
              toDisplayString($options.innerPercentage + "%"),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ])
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const __easycom_45 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-line-progress/up-line-progress.uvue"]]);
export {
  __easycom_45 as _
};
//# sourceMappingURL=up-line-progress.js.map
