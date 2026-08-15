import { c as bem, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpRadioGroupUpRadioGroup";
const { computed, provide } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-radio-group"
  },
  __dynamicSharedData: true,
  __hash: "2187d704",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-radio-group/up-radio-group.uvue",
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
      default: "#2979ff"
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
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpRadioGroupUpRadioGroupSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, ["up-radio-group", bemClass.value]);
        _setSharedDataStyle(__sharedData, 1, _unref(addStyle)(__props.customStyle));
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-radio-group.js.map
