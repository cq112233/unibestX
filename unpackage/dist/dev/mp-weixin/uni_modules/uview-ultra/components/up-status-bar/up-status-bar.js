"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./statusBar.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-status-bar"
}, { __name: "up-status-bar", props: {
  bgColor: {
    type: String,
    default: "transparent"
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props) {
  const props = __props;
  const style = common_vendor.computed(() => {
    const s = new common_vendor.UTSJSONObject({});
    const statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    s["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(statusBarHeight, "px");
    s["backgroundColor"] = props.bgColor;
    return uni_modules_uviewUltra_libs_function_index.deepMerge(s, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.s(style.value),
      c: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2ad3f0f1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js.map
