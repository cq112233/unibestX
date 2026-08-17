import { f as range, a as addUnit, b as addStyle, u as upGetRect, s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-line-progress"
  },
  __name: "up-line-progress",
  props: {
    activeColor: {
      type: String,
      default: "#19be6b"
    },
    inactiveColor: {
      type: String,
      default: "#ececec"
    },
    percentage: {
      type: [String, Number],
      default: 0
    },
    showText: {
      type: Boolean,
      default: true
    },
    height: {
      type: [String, Number],
      default: 12
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
      if (typeof value === "number") {
        return value;
      }
      if (value == null) {
        return defaultValue;
      }
      const parsed = parseFloat(value.toString());
      return isNaN(parsed) ? defaultValue : parsed;
    }
    const props = __props;
    const instance = getCurrentInstance();
    const lineWidth = ref("0px");
    const percentageValue = computed(() => {
      return normalizeNumber(props.percentage, 0);
    });
    const innerPercentage = computed(() => {
      return range(0, 100, percentageValue.value);
    });
    const backgroundStyle = computed(() => {
      return new UTSJSONObject({
        backgroundColor: props.inactiveColor,
        height: addUnit(props.height)
      });
    });
    const progressStyle = computed(() => {
      return new UTSJSONObject({
        width: lineWidth.value,
        backgroundColor: props.activeColor,
        height: addUnit(props.height)
      });
    });
    const customLineProgressStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    function resizeProgressWidth() {
      upGetRect(".up-line-progress__background", false, instance === null || instance === void 0 ? null : instance.proxy).then((size) => {
        const width = size.width != null ? size.width : 0;
        lineWidth.value = (width * innerPercentage.value / 100).toString() + "px";
      });
    }
    function init() {
      sleep(20).then(() => {
        resizeProgressWidth();
      });
    }
    watch(() => {
      return props.percentage;
    }, () => {
      resizeProgressWidth();
    });
    watch(() => {
      return props.height;
    }, () => {
      resizeProgressWidth();
    });
    onMounted(() => {
      init();
    });
    const __returned__ = { normalizeNumber, props, instance, lineWidth, percentageValue, innerPercentage, backgroundStyle, progressStyle, customLineProgressStyle, resizeProgressWidth, init };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-line-progress": { "": { "alignItems": "stretch", "position": "relative", "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "overflow": "hidden", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-line-progress__background": { "": { "backgroundColor": "#ececec", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-line-progress__line": { "": { "position": "absolute", "top": 0, "left": 0, "bottom": 0, "alignItems": "center", "display": "flex", "flexDirection": "row", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "transitionProperty": "width", "transitionDuration": "0.5s", "transitionTimingFunction": "ease", "justifyContent": "flex-end" } }, "up-line-progress__text": { "": { "fontSize": 10, "textAlign": "right", "color": "#FFFFFF", "marginRight": 5, "transform": "scale(0.9)" } }, "@TRANSITION": { "up-line-progress__line": { "property": "width", "duration": "0.5s", "timingFunction": "ease" } } };
const { normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, renderSlot: _renderSlot, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-line-progress",
      style: _normalizeStyle($setup.customLineProgressStyle)
    },
    [
      _createElementVNode(
        "view",
        {
          class: "up-line-progress__background",
          style: _normalizeStyle($setup.backgroundStyle)
        },
        null,
        4
        /* STYLE */
      ),
      _createElementVNode(
        "view",
        {
          class: "up-line-progress__line",
          style: _normalizeStyle($setup.progressStyle)
        },
        [
          _renderSlot(_ctx.$slots, "default", {}, () => [
            $props.showText && $setup.percentageValue >= 10 ? (_openBlock(), _createElementBlock(
              "text",
              {
                key: 0,
                class: "up-line-progress__text"
              },
              _toDisplayString($setup.innerPercentage + "%"),
              1
              /* TEXT */
            )) : _createCommentVNode("v-if", true)
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
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-line-progress/up-line-progress.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-line-progress.js.map
