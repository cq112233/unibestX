import { c as bem, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, provide } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-radio-group"
  },
  __name: "up-radio-group",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: "circle"
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: "#c8c9cc"
    },
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: 18
    },
    placement: {
      type: String,
      default: "row"
    },
    label: {
      type: String,
      default: ""
    },
    labelColor: {
      type: String,
      default: "#303133"
    },
    labelSize: {
      type: [String, Number],
      default: 14
    },
    labelDisabled: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: "#ffffff"
    },
    iconSize: {
      type: [String, Number],
      default: 12
    },
    borderBottom: {
      type: Boolean,
      default: false
    },
    iconPlacement: {
      type: String,
      default: "left"
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const bemClass = computed(() => {
      return bem("radio-group", [props.placement], []);
    });
    function onRadioSelected(val = null) {
      emit("update:modelValue", val);
      emit("change", val);
    }
    provide("upRadioGroup", new UTSJSONObject({
      props,
      onRadioSelected
    }));
    const __returned__ = { props, emit, bemClass, onRadioSelected, get addStyle() {
      return addStyle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-radio-group": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-radio-group--row": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "up-radio-group--column": { "": { "display": "flex", "flexDirection": "column" } } };
const { renderSlot: _renderSlot, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-radio-group", $setup.bemClass]),
      style: _normalizeStyle($setup.addStyle($props.customStyle))
    },
    [
      _renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-radio-group/up-radio-group.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-radio-group.js.map
