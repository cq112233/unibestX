import "./swipterIndicator.js";
import { a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-swiper-indicator"
  },
  __name: "up-swiper-indicator",
  props: {
    length: {
      type: [String, Number],
      default: 0
    },
    current: {
      type: [String, Number],
      default: 0
    },
    indicatorActiveColor: {
      type: String,
      default: "#FFFFFF"
    },
    indicatorInactiveColor: {
      type: String,
      default: "rgba(255, 255, 255, 0.35)"
    },
    indicatorMode: {
      type: String,
      default: "line"
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const lineWidth = ref(22);
    const lengthArray = computed(() => {
      const list = [];
      const len = parseInt(props.length.toString());
      for (let index = 0; index < len; index++) {
        list.push(index.toString());
      }
      return list;
    });
    const lineStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["width"] = addUnit(lineWidth.value);
      style["transform"] = `translateX(${addUnit(parseInt(props.current.toString()) * lineWidth.value)})`;
      style["backgroundColor"] = props.indicatorActiveColor;
      return style;
    });
    const lineWrapperStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(lineWidth.value * parseInt(props.length.toString())),
        backgroundColor: props.indicatorInactiveColor
      });
    });
    function dotStyle(index) {
      const style = new UTSJSONObject({});
      style["backgroundColor"] = index === parseInt(props.current.toString()) ? props.indicatorActiveColor : props.indicatorInactiveColor;
      return style;
    }
    const __returned__ = { props, lineWidth, lengthArray, lineStyle, lineWrapperStyle, dotStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-swiper-indicator__wrapper": { "": { "display": "flex", "flexDirection": "row" } }, "up-swiper-indicator__wrapper--line": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "height": 4 } }, "up-swiper-indicator__wrapper--line__bar": { "": { "width": 22, "height": 4, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#FFFFFF", "transitionProperty": "transform", "transitionDuration": "0.3s" } }, "up-swiper-indicator__wrapper__dot": { "": { "width": 5, "height": 5, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "marginTop": 0, "marginRight": 4, "marginBottom": 0, "marginLeft": 4 } }, "up-swiper-indicator__wrapper__dot--active": { "": { "width": 12 } }, "@TRANSITION": { "up-swiper-indicator__wrapper--line__bar": { "property": "transform", "duration": "0.3s" } } };
const { normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderList: _renderList, Fragment: _Fragment } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "up-swiper-indicator" }, [
    $props.indicatorMode === "line" ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 0,
        class: _normalizeClass(["up-swiper-indicator__wrapper", [`up-swiper-indicator__wrapper--${$props.indicatorMode}`]]),
        style: _normalizeStyle($setup.lineWrapperStyle)
      },
      [
        _createElementVNode(
          "view",
          {
            class: "up-swiper-indicator__wrapper--line__bar",
            style: _normalizeStyle($setup.lineStyle)
          },
          null,
          4
          /* STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    )) : _createCommentVNode("v-if", true),
    $props.indicatorMode === "dot" ? (_openBlock(), _createElementBlock("view", {
      key: 1,
      class: "up-swiper-indicator__wrapper"
    }, [
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList($setup.lengthArray, (item, index) => {
          return _openBlock(), _createElementBlock(
            "view",
            {
              class: _normalizeClass(["up-swiper-indicator__wrapper__dot", [index === parseInt($props.current.toString()) ? "up-swiper-indicator__wrapper__dot--active" : ""]]),
              key: index,
              style: _normalizeStyle($setup.dotStyle(index))
            },
            null,
            6
            /* CLASS, STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ])) : _createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-swiper-indicator.js.map
