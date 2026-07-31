"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = common_vendor.defineComponent({
  styleIsolation: "app"
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_assets._imports_0$2,
    b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    c: `${_ctx.u_s_b_h}px`,
    d: `${_ctx.u_s_a_i_b}px`,
    e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/components/WeappTailwindcss.js.map
