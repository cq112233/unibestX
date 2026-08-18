"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  _easycom_up_transition_1();
}
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  _easycom_up_transition();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-overlay"
}, { __name: "up-overlay", props: {
  show: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [String, Number],
    default: 10070
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  opacity: {
    type: [String, Number],
    default: 0.5
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const overlayStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: props.zIndex,
      bottom: 0,
      backgroundColor: `rgba(0, 0, 0, ${props.opacity})`
    });
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  function clickHandler() {
    emit("click");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.gei(_ctx, ""),
      b: common_vendor.o(clickHandler, "c5"),
      c: common_vendor.p({
        show: __props.show,
        ["custom-class"]: "up-overlay",
        duration: __props.duration,
        ["custom-style"]: overlayStyle.value,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-f77d7420"
      }),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f77d7420"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-overlay/up-overlay.js.map
