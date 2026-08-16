import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { h as hasStrValue } from "../../libs/utils/basic.js";
import { b as formInjectKey, c as formDataInjectKey, f as formDisabledInjectKey, a as formReadonlyInjectKey } from "./index.js";
import { f as formItemContextInjectKey } from "../rice-form-item/index.js";
import { u as useFormData } from "./useForm.js";
import { b as FormItemContextProvide, c as FormValidateErrors } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceFormRiceForm";
const { ref, watch, provide, toRef, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-form",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "5d3424d0",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-form/rice-form.uvue",
  __name: "rice-form",
  props: {
    model: { type: null },
    rules: { type: Map },
    labelWidth: { type: [String, Number] },
    labelPosition: { default: "left", type: String },
    labelStyle: { type: null },
    showRequired: { type: Boolean, default: null },
    requiredPosition: { default: "left", type: String },
    showError: { type: Boolean, default: true },
    borderBottom: { type: Boolean, default: true },
    errorBottom: { type: Boolean, default: false },
    scrollToError: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    errorStyle: { type: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceFormRiceFormSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("form");
    const props = __props;
    const formData = ref(new UTSJSONObject({}));
    const formItems = ref([]);
    const addField = (field) => {
      formItems.value.push(field);
    };
    const removeField = (field) => {
      if (hasStrValue(field.name)) {
        formItems.value.splice(formItems.value.indexOf(field), 1);
      }
    };
    const filterFields = (fields, normalized) => {
      if (normalized.length == 0)
        return fields;
      return fields.filter((field) => {
        return hasStrValue(field.name) && normalized.includes(field.name) && typeof field.validate == "function";
      });
    };
    const getValidateFields = (normalized) => {
      if (formItems.value.length == 0)
        return [];
      return filterFields(formItems.value, normalized);
    };
    const scrollToField = (name) => {
      const field = UTS.arrayFind(formItems.value, (v) => {
        return v.name == name;
      });
      field === null || field === void 0 ? null : field.scrollToField();
    };
    const runValidateField = async (normalized) => {
      const fields = getValidateFields(normalized);
      if (fields.length == 0)
        return true;
      const promises = fields.map((item) => {
        return item.validate("all");
      });
      const results = await Promise.all(promises);
      const errors = results.filter((field) => {
        return field.rule != null && field.status != "passed";
      }).map((field) => {
        return new FormValidateErrors({
          name: field.name,
          rule: field.rule,
          message: field.validateMessage,
          label: field.label
        });
      });
      if (props.scrollToError == true && errors.length > 0) {
        scrollToField(errors[0].name);
      }
      return errors.length == 0 ? true : errors;
    };
    watch(() => {
      return props.model;
    }, (newVal = null) => {
      const newData = useFormData(newVal);
      newData.toMap().forEach((value = null, key) => {
        if (formData.value[key] != value) {
          formData.value[key] = value;
        }
      });
    }, {
      deep: true,
      immediate: true
    });
    provide(formInjectKey, props);
    provide(formDataInjectKey, formData);
    provide(formDisabledInjectKey, toRef(() => {
      return props.disabled;
    }));
    provide(formReadonlyInjectKey, toRef(() => {
      return props.readonly;
    }));
    provide(formItemContextInjectKey, new FormItemContextProvide({
      formItems,
      addField,
      removeField
    }));
    const validate = async () => {
      return await runValidateField([]);
    };
    const validateFields = async (params) => {
      return await runValidateField(params);
    };
    const clearValidate = (params) => {
      formItems.value.filter((field) => {
        return hasStrValue(field.name) && params.includes(field.name);
      }).map((field) => {
        return field.clearValidate();
      });
    };
    const clearAllValidate = () => {
      formItems.value.map((field) => {
        return field.clearValidate();
      });
    };
    const formClass = computed(() => {
      return [
        ns.b(""),
        ns.theme()
      ];
    });
    __expose({
      validate,
      validateFields,
      scrollToField,
      clearValidate,
      clearAllValidate
      // 清除全部的校验信息
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, _unref(formClass));
        _setSharedDataStyle(__sharedData, 1, __props.customStyle);
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=rice-form.js.map
