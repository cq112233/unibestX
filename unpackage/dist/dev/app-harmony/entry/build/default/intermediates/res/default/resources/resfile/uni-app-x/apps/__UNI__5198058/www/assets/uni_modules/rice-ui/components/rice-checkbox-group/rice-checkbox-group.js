import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { C as CheckboxGroupProvide } from "./type.js";
import { d as defCheckboxDirection, a as defCheckboxShape, b as defCheckboxIconPosition, c as checkboxGroupInjectKey } from "./index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCheckboxGroupRiceCheckboxGroup";
const { provide, toRef, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-checkbox-group",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "b0c89b40",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-checkbox-group/rice-checkbox-group.uvue",
  __name: "rice-checkbox-group",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    max: { type: Number },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    direction: { default: defCheckboxDirection, type: String },
    checkedColor: { type: String },
    iconSize: { type: [String, Number] },
    labelSize: { type: [String, Number] },
    labelColor: { type: String },
    shape: { default: defCheckboxShape, type: String },
    iconPosition: { default: defCheckboxIconPosition, type: String },
    spaceBetween: { type: Boolean, default: false },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "modelValue": {
      type: Array,
      default: () => {
        return [];
      }
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCheckboxGroupRiceCheckboxGroupSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("checkbox-group");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const updateValue = (value) => {
      modelValue.value = value.slice(0);
      emit("change", value);
    };
    provide(checkboxGroupInjectKey, new CheckboxGroupProvide({
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
      max: toRef(() => {
        return props.max;
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
//# sourceMappingURL=rice-checkbox-group.js.map
