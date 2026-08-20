import { f as range, a as addUnit, b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-circle-progress"
  },
  __name: "up-circle-progress",
  props: {
    percentage: {
      type: [String, Number],
      default: 30
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: "#e5e9f2"
    },
    width: {
      type: [String, Number],
      default: 80
    },
    strokeWidth: {
      type: [String, Number],
      default: 6
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
    function normalizeNumber(value = null, defaultValue = 0) {
      if (typeof value == "number") {
        return value;
      }
      if (value == null) {
        return defaultValue;
      }
      const parsed = parseFloat(value.toString());
      return isNaN(parsed) ? defaultValue : parsed;
    }
    const props = __props;
    const isDefaultColor = computed(() => {
      return props.activeColor == "";
    });
    const percent = computed(() => {
      return range(0, 100, normalizeNumber(props.percentage, 30));
    });
    const size = computed(() => {
      return addUnit(props.width);
    });
    const stroke = computed(() => {
      return addUnit(props.strokeWidth);
    });
    const rootStyle = computed(() => {
      const base = new UTSJSONObject({});
      base["width"] = size.value;
      base["height"] = size.value;
      const custom = addStyle(props.customStyle);
      return deepMerge(base, custom);
    });
    const trackStyle = computed(() => {
      return new UTSJSONObject({
        width: size.value,
        height: size.value,
        borderWidth: stroke.value,
        borderColor: props.inactiveColor
      });
    });
    const textStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.activeColor != "") {
        style["color"] = props.activeColor;
      }
      return style;
    });
    function buildFillStyle(deg) {
      const style = new UTSJSONObject({});
      style["width"] = size.value;
      style["height"] = size.value;
      style["borderWidth"] = stroke.value;
      if (props.activeColor != "") {
        style["borderTopColor"] = props.activeColor;
        style["borderRightColor"] = props.activeColor;
      }
      style["borderBottomColor"] = "transparent";
      style["borderLeftColor"] = "transparent";
      style["transform"] = `rotate(${deg.toString()}deg)`;
      return style;
    }
    const rightStyle = computed(() => {
      let deg = percent.value * 3.6 - 135;
      if (deg > 45) {
        deg = 45;
      }
      if (deg < -135) {
        deg = -135;
      }
      return buildFillStyle(deg);
    });
    const leftStyle = computed(() => {
      let deg = percent.value * 3.6 - 135;
      if (deg < 45) {
        deg = 45;
      }
      if (deg > 225) {
        deg = 225;
      }
      return buildFillStyle(deg);
    });
    const __returned__ = { normalizeNumber, props, isDefaultColor, percent, size, stroke, rootStyle, trackStyle, textStyle, buildFillStyle, rightStyle, leftStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"up-circle-progress":{"":{"position":"relative","display":"flex","alignItems":"center","justifyContent":"center","boxSizing":"border-box"}},"up-circle-progress__track":{"":{"position":"absolute","top":0,"left":0,"boxSizing":"border-box","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"up-circle-progress__mask":{"":{"position":"absolute","top":0,"width":"50%","height":"100%","overflow":"hidden","boxSizing":"border-box"}},"up-circle-progress__mask--right":{"":{"right":0}},"up-circle-progress__mask--left":{"":{"left":0}},"up-circle-progress__fill":{"":{"position":"absolute","top":0,"boxSizing":"border-box","borderTopLeftRadius":"50%","borderTopRightRadius":"50%","borderBottomRightRadius":"50%","borderBottomLeftRadius":"50%","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderBottomColor":"rgba(0,0,0,0)","borderLeftColor":"rgba(0,0,0,0)"}},"up-circle-progress__fill--primary":{"":{"borderTopColor":"var(--theme-color, #0957de)","borderRightColor":"var(--theme-color, #0957de)"}},"up-circle-progress__fill--right":{"":{"right":0}},"up-circle-progress__fill--left":{"":{"left":0}},"up-circle-progress__content":{"":{"position":"relative","display":"flex","alignItems":"center","justifyContent":"center","zIndex":2}},"up-circle-progress__text":{"":{"fontSize":14,"fontWeight":500}},"up-circle-progress__text--primary":{"":{"color":"var(--theme-color, #0957de)"}},"relative":{"":{"position":"relative"}},"flex":{"":{"display":"flex"}}};
const { normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, toDisplayString: _toDisplayString } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-circle-progress",
      style: _normalizeStyle($setup.rootStyle)
    },
    [
      _createElementVNode(
        "view",
        {
          class: "up-circle-progress__track",
          style: _normalizeStyle($setup.trackStyle)
        },
        null,
        4
        /* STYLE */
      ),
      $setup.percent > 0 ? (_openBlock(), _createElementBlock("view", {
        key: 0,
        class: "up-circle-progress__mask up-circle-progress__mask--right"
      }, [
        _createElementVNode(
          "view",
          {
            class: _normalizeClass(["up-circle-progress__fill up-circle-progress__fill--right", [$setup.isDefaultColor ? "up-circle-progress__fill--primary" : ""]]),
            style: _normalizeStyle($setup.rightStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )
      ])) : _createCommentVNode("v-if", true),
      $setup.percent > 50 ? (_openBlock(), _createElementBlock("view", {
        key: 1,
        class: "up-circle-progress__mask up-circle-progress__mask--left"
      }, [
        _createElementVNode(
          "view",
          {
            class: _normalizeClass(["up-circle-progress__fill up-circle-progress__fill--left", [$setup.isDefaultColor ? "up-circle-progress__fill--primary" : ""]]),
            style: _normalizeStyle($setup.leftStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )
      ])) : _createCommentVNode("v-if", true),
      _createElementVNode("view", { class: "up-circle-progress__content" }, [
        _renderSlot(_ctx.$slots, "default", {}, () => [
          _createElementVNode(
            "text",
            {
              class: _normalizeClass(["up-circle-progress__text", [$setup.isDefaultColor ? "up-circle-progress__text--primary" : ""]]),
              style: _normalizeStyle($setup.textStyle)
            },
            _toDisplayString($setup.percent) + "%",
            7
            /* TEXT, CLASS, STYLE */
          )
        ])
      ])
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-circle-progress/up-circle-progress.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-circle-progress.js.map
