"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      condition: true,
      extra: "wtu-1hb5u6g-g wtu-1ht3hqg-h",
      flag: true,
      toggled: true
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.n($data.flag ? "wtu-6mro4v-a wtu-g3slxv-b" : "wtu-zbeef1-c"),
    b: common_vendor.n($data.extra),
    c: common_vendor.n({
      "wtu-c5hw0m-d": $data.toggled
    }),
    d: common_vendor.n($data.condition ? "wtu-2jxb3j-e wtu-9251zl-f" : ""),
    e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    f: `${_ctx.u_s_b_h}px`,
    g: `${_ctx.u_s_a_i_b}px`,
    h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-46d81bc2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/components/BindClass.js.map
