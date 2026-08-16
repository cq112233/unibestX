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
const uni_modules_riceUi_components_riceRadioGroup_index = require("./index.js");
const uni_modules_riceUi_components_riceRadioGroup_type = require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-radio-group",
  styleIsolation: "app-and-page"
}, { __name: "rice-radio-group", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  direction: { default: uni_modules_riceUi_components_riceRadioGroup_index.defDirection },
  checkedColor: {},
  iconSize: {},
  labelSize: {},
  labelColor: {},
  shape: { default: uni_modules_riceUi_components_riceRadioGroup_index.defShape },
  iconPosition: { default: uni_modules_riceUi_components_riceRadioGroup_index.defIconPosition },
  spaceBetween: { type: Boolean, default: false },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  customClass: {}
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: [String, Number, Boolean],
    default: false
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("radio-group");
  const emit = __emit;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const updateValue = (value) => {
    modelValue.value = value;
    emit("change", value);
  };
  common_vendor.provide(uni_modules_riceUi_components_riceRadioGroup_index.radioGroupInjectKey, new uni_modules_riceUi_components_riceRadioGroup_type.RadioGroupProvide({
    modelValue,
    disabled: common_vendor.toRef(() => {
      return props.disabled;
    }),
    readonly: common_vendor.toRef(() => {
      return props.readonly;
    }),
    direction: common_vendor.toRef(() => {
      return props.direction;
    }),
    iconPosition: common_vendor.toRef(() => {
      return props.iconPosition;
    }),
    spaceBetween: common_vendor.toRef(() => {
      return props.spaceBetween;
    }),
    iconSize: common_vendor.toRef(() => {
      return props.iconSize;
    }),
    labelSize: common_vendor.toRef(() => {
      return props.labelSize;
    }),
    labelColor: common_vendor.toRef(() => {
      return props.labelColor;
    }),
    checkedColor: common_vendor.toRef(() => {
      return props.checkedColor;
    }),
    shape: common_vendor.toRef(() => {
      return props.shape;
    }),
    updateValue
  }));
  const rootClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.m(props.direction),
      ns.theme()
    ];
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.n(common_vendor.unref(rootClass)),
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-24c3cbf5"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-radio-group/rice-radio-group.js.map
