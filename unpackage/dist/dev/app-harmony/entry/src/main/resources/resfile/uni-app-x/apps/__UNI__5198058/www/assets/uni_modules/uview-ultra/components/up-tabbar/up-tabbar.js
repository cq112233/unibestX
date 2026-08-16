import { _ as __easycom_0 } from "../up-safe-bottom/up-safe-bottom.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { d as deepMerge, b as addStyle, s as sleep, u as upGetRect } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, provide, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-tabbar"
  },
  __name: "up-tabbar",
  props: {
    value: {
      type: [String, Number, null],
      default: null
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: ""
    },
    zIndex: {
      type: [String, Number],
      default: 1
    },
    activeColor: {
      type: String,
      default: "#1989fa"
    },
    inactiveColor: {
      type: String,
      default: "#7d7e80"
    },
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: "#ffffff"
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["change", "update:value"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const placeholderHeight = ref(0);
    const tabbarStyle = computed(() => {
      const style = new UTSJSONObject({
        zIndex: props.zIndex
      });
      if (props.borderColor != "") {
        style["borderColor"] = props.borderColor + " !important";
      }
      if (props.backgroundColor != "") {
        style["backgroundColor"] = props.backgroundColor;
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    provide("upTabbarProps", props);
    provide("upTabbarChange", (name) => {
      emit("update:value", name);
      emit("change", name);
    });
    async function setPlaceholderHeight() {
      if (!props.fixed || !props.placeholder)
        return Promise.resolve(null);
      await sleep(20);
      upGetRect(".up-tabbar__content", false, instance === null || instance === void 0 ? null : instance.proxy).then((size) => {
        var _a2;
        placeholderHeight.value = (_a2 = size.height) !== null && _a2 !== void 0 ? _a2 : 50;
      });
    }
    function noop() {
    }
    watch(() => {
      return [props.fixed, props.placeholder];
    }, () => {
      setPlaceholderHeight();
    });
    onMounted(() => {
      setPlaceholderHeight();
    });
    const __returned__ = { props, emit, instance, placeholderHeight, tabbarStyle, setPlaceholderHeight, noop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabbar": { "": { "display": "flex", "flexDirection": "column", "width": "100%" } }, "up-tabbar__content": { "": { "display": "flex", "flexDirection": "column", "backgroundColor": "#ffffff" } }, "up-tabbar__content__item-wrapper": { "": { "height": 50, "display": "flex", "flexDirection": "row", "justifyContent": "space-around", "alignItems": "stretch", "width": "100%" } }, "up-tabbar--fixed": { "": { "position": "fixed", "bottom": 0, "left": 0, "right": 0 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_safe_bottom = resolveEasycom(__resolveDynamicComponent("up-safe-bottom"), __easycom_0);
  return _openBlock(), _createElementBlock("view", { class: "up-tabbar" }, [
    _createElementVNode(
      "view",
      {
        class: _normalizeClass(["up-tabbar__content", [$props.border ? "up-border-top" : "", $props.fixed ? "up-tabbar--fixed" : ""]]),
        onTouchmove: _withModifiers($setup.noop, ["stop", "prevent"]),
        style: _normalizeStyle([$setup.tabbarStyle])
      },
      [
        _createElementVNode("view", { class: "up-tabbar__content__item-wrapper" }, [
          _renderSlot(_ctx.$slots, "default")
        ]),
        $props.safeAreaInsetBottom ? (_openBlock(), _createBlock(_component_up_safe_bottom, { key: 0 })) : _createCommentVNode("v-if", true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    ),
    $props.placeholder && $props.fixed ? (_openBlock(), _createElementBlock(
      "view",
      {
        key: 0,
        class: "up-tabbar__placeholder",
        style: _normalizeStyle({
          height: $setup.placeholderHeight + "px"
        })
      },
      null,
      4
      /* STYLE */
    )) : _createCommentVNode("v-if", true)
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tabbar/up-tabbar.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-tabbar.js.map
