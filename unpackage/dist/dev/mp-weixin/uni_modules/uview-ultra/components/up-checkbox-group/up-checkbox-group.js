"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-checkbox-group"
}, { __name: "up-checkbox-group", props: {
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
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["update:modelValue", "change"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const bemClass = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.bem("checkbox-group", [props.placement], []);
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
    uni_modules_uviewUltra_libs_function_index.formValidate(instance === null || instance === void 0 ? null : instance.proxy, "change");
  }
  common_vendor.provide("upCheckboxGroup", new common_vendor.UTSJSONObject({
    props,
    onCheckboxToggle
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-60ba2806"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js.map
