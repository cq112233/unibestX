"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Card",
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(__props.title),
        b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        c: common_vendor.s({
          backgroundColor: "var(--card-bg, #ffffff)",
          borderColor: "var(--border-color, #edf2f7)"
        }),
        d: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        }),
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d033e87"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/Card.js.map
