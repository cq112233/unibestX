import { c as bem, b as addStyle, i as formValidate } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroup";
const { computed, provide, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-checkbox-group"
  },
  __dynamicSharedData: true,
  __hash: "3fdee1da",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.uvue",
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
      default: "#2979ff"
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
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroupSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, ["up-checkbox-group", bemClass.value]);
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
//# sourceMappingURL=up-checkbox-group.js.map
