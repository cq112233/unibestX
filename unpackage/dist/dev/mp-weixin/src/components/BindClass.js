"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      condition: true,
      extra: "text-[93.54rpx] bg-[#d2e252]",
      flag: true,
      toggled: true
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.n($data.flag ? "bg-[#123456] mb-[12.32px]" : "bg-[#d7700a]"),
    b: common_vendor.n($data.extra),
    c: common_vendor.n({
      "text-[#ff0000]": $data.toggled
    }),
    d: common_vendor.n($data.condition ? "bg-[#f205f6] text-[#70ed0a]" : ""),
    e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    f: `${_ctx.u_s_b_h}px`,
    g: `${_ctx.u_s_a_i_b}px`,
    h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-46d81bc2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/components/BindClass.js.map
