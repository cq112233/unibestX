import { c as bem, i as formValidate, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, provide, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-checkbox-group"
  },
  __name: "up-checkbox-group",
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Array,
      default: () => {
        return [];
      }
    },
    shape: {
      type: String,
      default: "circle"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: "#c8c9cc"
    },
    size: {
      type: [String, Number],
      default: 18
    },
    placement: {
      type: String,
      default: "row"
    },
    labelSize: {
      type: [String, Number],
      default: 14
    },
    labelColor: {
      type: String,
      default: "#303133"
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
    iconPlacement: {
      type: String,
      default: "left"
    },
    borderBottom: {
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
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const bemClass = computed(() => {
      return bem("checkbox-group", [props.placement], []);
    });
    function onCheckboxToggle(name = null) {
      const currentList = [...props.modelValue];
      const idx = currentList.findIndex((item = null) => {
        return item.toString() == name.toString();
      });
      if (idx > -1) {
        currentList.splice(idx, 1);
      } else {
        currentList.push(name);
      }
      emit("update:modelValue", currentList);
      emit("change", currentList);
      formValidate(instance === null || instance === void 0 ? null : instance.proxy, "change");
    }
    provide("upCheckboxGroup", new UTSJSONObject({
      props,
      onCheckboxToggle
    }));
    const __returned__ = { props, emit, instance, bemClass, onCheckboxToggle, get addStyle() {
      return addStyle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-checkbox-group": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-checkbox-group--row": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "up-checkbox-group--column": { "": { "display": "flex", "flexDirection": "column" } } };
const { renderSlot: _renderSlot, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-checkbox-group", $setup.bemClass]),
      style: _normalizeStyle($setup.addStyle($props.customStyle))
    },
    [
      _renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-checkbox-group.js.map
