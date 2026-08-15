"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-radio-group"
}, { __name: "up-radio-group", props: {
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
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["update:modelValue", "change"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const bemClass = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.bem("radio-group", [props.placement], []);
  });
  function onRadioSelected(val = null) {
    emit("update:modelValue", val);
    emit("change", val);
  }
  common_vendor.provide("upRadioGroup", new common_vendor.UTSJSONObject({
    props,
    onRadioSelected
  }));
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.n(bemClass.value),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      e: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4a896d15"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js.map
