"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "BindClass",
  setup(__props) {
    const condition = common_vendor.ref(true);
    const extra = common_vendor.ref("wtu-1026j5x-g wtu-1cznegj-h");
    const flag = common_vendor.ref(true);
    const toggled = common_vendor.ref(true);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.n(common_vendor.unref(flag) ? "wtu-uj646o-a wtu-v1dixk-b" : "wtu-s9xl9u-c"),
        b: common_vendor.n(common_vendor.unref(extra)),
        c: common_vendor.n({
          "wtu-1l82hkd-d": common_vendor.unref(toggled)
        }),
        d: common_vendor.n(common_vendor.unref(condition) ? "wtu-1hf1vho-e wtu-6xzka-f" : ""),
        e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        f: `${_ctx.u_s_b_h}px`,
        g: `${_ctx.u_s_a_i_b}px`,
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-96770822"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/sub/tailwindcss/components/BindClass.js.map
