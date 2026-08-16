"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_libs_utils_debug = require("../../libs/utils/debug.js");
const uni_modules_riceUi_components_riceForm_index = require("./index.js");
const uni_modules_riceUi_components_riceFormItem_index = require("../rice-form-item/index.js");
const uni_modules_riceUi_components_riceForm_useForm = require("./useForm.js");
const uni_modules_riceUi_components_riceForm_type = require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-form",
  styleIsolation: "app-and-page"
}, { __name: "rice-form", props: {
  model: {},
  rules: {},
  labelWidth: {},
  labelPosition: { default: "left" },
  labelStyle: {},
  showRequired: { type: Boolean, default: null },
  requiredPosition: { default: "left" },
  showError: { type: Boolean, default: true },
  borderBottom: { type: Boolean, default: true },
  errorBottom: { type: Boolean, default: false },
  scrollToError: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  errorStyle: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, setup(__props, _a) {
  var __expose = _a.expose;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("form");
  const props = __props;
  const formData = common_vendor.ref(new common_vendor.UTSJSONObject({}));
  const formItems = common_vendor.ref([]);
  const addField = (field) => {
    formItems.value.push(field);
  };
  const removeField = (field) => {
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(field.name)) {
      formItems.value.splice(formItems.value.indexOf(field), 1);
    }
  };
  const filterFields = (fields, normalized) => {
    if (normalized.length == 0)
      return fields;
    return fields.filter((field) => {
      return uni_modules_riceUi_libs_utils_basic.hasStrValue(field.name) && normalized.includes(field.name) && typeof field.validate == "function";
    });
  };
  const getValidateFields = (normalized) => {
    if (formItems.value.length == 0)
      return [];
    return filterFields(formItems.value, normalized);
  };
  const scrollToField = (name) => {
    uni_modules_riceUi_libs_utils_debug.debugWarn("FormItem", "当前scrollToField仅支持APP端");
  };
  const runValidateField = (normalized) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const fields = getValidateFields(normalized);
      if (fields.length == 0)
        return true;
      const promises = fields.map((item) => {
        return item.validate("all");
      });
      const results = yield Promise.all(promises);
      const errors = results.filter((field) => {
        return field.rule != null && field.status != "passed";
      }).map((field) => {
        return new uni_modules_riceUi_components_riceForm_type.FormValidateErrors({
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
    });
  };
  common_vendor.watch(() => {
    return props.model;
  }, (newVal = null) => {
    const newData = uni_modules_riceUi_components_riceForm_useForm.useFormData(newVal);
    newData.toMap().forEach((value = null, key) => {
      if (formData.value[key] != value) {
        formData.value[key] = value;
      }
    });
  }, {
    deep: true,
    immediate: true
  });
  common_vendor.provide(uni_modules_riceUi_components_riceForm_index.formInjectKey, props);
  common_vendor.provide(uni_modules_riceUi_components_riceForm_index.formDataInjectKey, formData);
  common_vendor.provide(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, common_vendor.toRef(() => {
    return props.disabled;
  }));
  common_vendor.provide(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, common_vendor.toRef(() => {
    return props.readonly;
  }));
  common_vendor.provide(uni_modules_riceUi_components_riceFormItem_index.formItemContextInjectKey, new uni_modules_riceUi_components_riceForm_type.FormItemContextProvide({
    formItems,
    addField,
    removeField
  }));
  const validate = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      return yield runValidateField([]);
    });
  };
  const validateFields = (params) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      return yield runValidateField(params);
    });
  };
  const clearValidate = (params) => {
    formItems.value.filter((field) => {
      return uni_modules_riceUi_libs_utils_basic.hasStrValue(field.name) && params.includes(field.name);
    }).map((field) => {
      return field.clearValidate();
    });
  };
  const clearAllValidate = () => {
    formItems.value.map((field) => {
      return field.clearValidate();
    });
  };
  const formClass = common_vendor.computed(() => {
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
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.n(common_vendor.unref(formClass)),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: common_vendor.s(_ctx.customStyle),
      e: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d1555ea"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-form/rice-form.js.map
