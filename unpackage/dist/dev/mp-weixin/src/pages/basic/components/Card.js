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
        c: `${_ctx.u_s_b_h}px`,
        d: `${_ctx.u_s_a_i_b}px`,
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/Card.js.map
