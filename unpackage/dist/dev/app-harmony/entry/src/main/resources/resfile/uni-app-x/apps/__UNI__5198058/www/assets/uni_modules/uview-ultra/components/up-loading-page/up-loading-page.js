import { _ as __easycom_1 } from "../up-loading-icon/up-loading-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-transition/up-transition.js";
import { a as addUnit, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-loading-page"
  },
  __name: "up-loading-page",
  props: {
    loadingText: {
      type: [String, Number],
      default: "正在加载"
    },
    image: {
      type: String,
      default: ""
    },
    loadingMode: {
      type: String,
      default: "circle"
    },
    loading: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    color: {
      type: String,
      default: "#C8C8C8"
    },
    fontSize: {
      type: [String, Number],
      default: 19
    },
    iconSize: {
      type: [String, Number],
      default: 28
    },
    loadingColor: {
      type: String,
      default: "#C8C8C8"
    },
    zIndex: {
      type: [Number],
      default: 10
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
    const imageSizeStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(props.iconSize),
        height: addUnit(props.iconSize)
      });
    });
    const formattedIconSize = computed(() => {
      return addUnit(props.iconSize);
    });
    const textStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.fontSize),
        color: props.color
      });
    });
    const transitionStyle = computed(() => {
      const base = new UTSJSONObject({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: props.bgColor,
        display: "flex",
        zIndex: props.zIndex
      });
      return deepMerge(base, addStyle(props.customStyle));
    });
    const __returned__ = { props, imageSizeStyle, formattedIconSize, textStyle, transitionStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-loading-page": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "alignItems": "center", "justifyContent": "center" } }, "up-loading-page__warpper": { "": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "up-loading-page__warpper__loading-icon": { "": { "marginBottom": 10 } }, "up-loading-page__warpper__loading-icon__img": { "": { "width": 40, "height": 40 } }, "up-loading-page__warpper__text": { "": { "fontSize": 19, "color": "#c8c8c8" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createBlock: _createBlock, createElementVNode: _createElementVNode, renderSlot: _renderSlot, toDisplayString: _toDisplayString, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1);
  const _component_up_transition = resolveEasycom(__resolveDynamicComponent("up-transition"), __easycom_1$1);
  return _openBlock(), _createBlock(_component_up_transition, {
    show: $props.loading,
    "custom-style": $setup.transitionStyle
  }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "up-loading-page" }, [
        _createElementVNode("view", { class: "up-loading-page__warpper" }, [
          _createElementVNode("view", { class: "up-loading-page__warpper__loading-icon" }, [
            $props.image != "" ? (_openBlock(), _createElementBlock("image", {
              key: 0,
              src: $props.image,
              class: "up-loading-page__warpper__loading-icon__img",
              mode: "widthFix",
              style: _normalizeStyle($setup.imageSizeStyle)
            }, null, 12, ["src"])) : (_openBlock(), _createBlock(_component_up_loading_icon, {
              key: 1,
              mode: $props.loadingMode,
              size: $setup.formattedIconSize,
              color: $props.loadingColor
            }, null, 8, ["mode", "size", "color"]))
          ]),
          _renderSlot(_ctx.$slots, "default", {}, () => [
            _createElementVNode(
              "text",
              {
                class: "up-loading-page__warpper__text",
                style: _normalizeStyle($setup.textStyle)
              },
              _toDisplayString($props.loadingText),
              5
              /* TEXT, STYLE */
            )
          ])
        ])
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "custom-style"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-loading-page/up-loading-page.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-loading-page.js.map
