import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { d as defDirection, a as defShape, b as defIconPosition, r as radioGroupInjectKey } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-radio-group/index&";
import { R as RadioGroupProvide } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-radio-group/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceRadioGroupRiceRadioGroup";
const { provide, toRef, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-radio-group",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "9a3f4f50",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-radio-group/rice-radio-group.uvue",
  __name: "rice-radio-group",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    direction: { default: defDirection, type: String },
    checkedColor: { type: String },
    iconSize: { type: [String, Number] },
    labelSize: { type: [String, Number] },
    labelColor: { type: String },
    shape: { default: defShape, type: String },
    iconPosition: { default: defIconPosition, type: String },
    spaceBetween: { type: Boolean, default: false },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customClass: { type: String }
  }), new UTSJSONObject({
    "modelValue": {
      type: [String, Number, Boolean],
      default: false
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceRadioGroupRiceRadioGroupSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("radio-group");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const updateValue = (value) => {
      modelValue.value = value;
      emit("change", value);
    };
    provide(radioGroupInjectKey, new RadioGroupProvide({
      modelValue,
      disabled: toRef(() => {
        return props.disabled;
      }),
      readonly: toRef(() => {
        return props.readonly;
      }),
      direction: toRef(() => {
        return props.direction;
      }),
      iconPosition: toRef(() => {
        return props.iconPosition;
      }),
      spaceBetween: toRef(() => {
        return props.spaceBetween;
      }),
      iconSize: toRef(() => {
        return props.iconSize;
      }),
      labelSize: toRef(() => {
        return props.labelSize;
      }),
      labelColor: toRef(() => {
        return props.labelColor;
      }),
      checkedColor: toRef(() => {
        return props.checkedColor;
      }),
      shape: toRef(() => {
        return props.shape;
      }),
      updateValue
    }));
    const rootClass = computed(() => {
      return [
        ns.b(""),
        ns.m(props.direction),
        ns.theme()
      ];
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, _unref(rootClass));
        _setSharedDataStyle(__sharedData, 1, __props.customStyle);
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
//# sourceMappingURL=rice-radio-group.js.map
