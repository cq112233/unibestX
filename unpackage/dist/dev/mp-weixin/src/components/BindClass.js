"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "BindClass",
  setup(__props) {
    const condition = common_vendor.ref(true);
    const extra = common_vendor.ref("wtu-1hb5u6g-g wtu-1ht3hqg-h");
    const flag = common_vendor.ref(true);
    const toggled = common_vendor.ref(true);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.n(common_vendor.unref(flag) ? "wtu-6mro4v-a wtu-g3slxv-b" : "wtu-zbeef1-c"),
        b: common_vendor.n(common_vendor.unref(extra)),
        c: common_vendor.n({
          "wtu-c5hw0m-d": common_vendor.unref(toggled)
        }),
        d: common_vendor.n(common_vendor.unref(condition) ? "wtu-2jxb3j-e wtu-9251zl-f" : ""),
        e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        f: `${_ctx.u_s_b_h}px`,
        g: `${_ctx.u_s_a_i_b}px`,
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-46d81bc2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/components/BindClass.js.map
