"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_loading_icon_1 + _easycom_up_transition_1)();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_transition)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-loading-page"
}, { __name: "up-loading-page", props: {
  loadingText: {
    type: [String, Number],
    default: "正在加载"
  },
  image: {
    type: String,
    default: ""
  },
  loadingMode: {
    type: String,
    default: "circle"
  },
  loading: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: "#ffffff"
  },
  color: {
    type: String,
    default: "#C8C8C8"
  },
  fontSize: {
    type: [String, Number],
    default: 19
  },
  iconSize: {
    type: [String, Number],
    default: 28
  },
  loadingColor: {
    type: String,
    default: "#C8C8C8"
  },
  zIndex: {
    type: [Number],
    default: 10
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props) {
  const props = __props;
  const transitionStyle = common_vendor.computed(() => {
    const base = new common_vendor.UTSJSONObject({
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: props.bgColor,
      display: "flex",
      zIndex: props.zIndex
    });
    return uni_modules_uviewUltra_libs_function_index.deepMerge(base, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.image != ""
    }, __props.image != "" ? {
      b: __props.image,
      c: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.iconSize),
      d: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.iconSize)
    } : {
      e: common_vendor.p({
        mode: __props.loadingMode,
        size: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.iconSize),
        color: __props.loadingColor,
        class: "data-v-bae480a6"
      })
    }, {
      f: common_vendor.t(__props.loadingText),
      g: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.fontSize),
      h: __props.color,
      i: common_vendor.gei(_ctx, ""),
      j: common_vendor.p({
        show: __props.loading,
        ["custom-style"]: transitionStyle.value,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-bae480a6"
      }),
      k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bae480a6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-loading-page/up-loading-page.js.map
