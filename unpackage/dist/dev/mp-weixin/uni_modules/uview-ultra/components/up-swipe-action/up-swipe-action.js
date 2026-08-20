"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-swipe-action"
}, { __name: "up-swipe-action", props: {
  autoClose: {
    type: Boolean,
    default: true
  }
}, setup(__props) {
  const props = __props;
  const activeItemId = common_vendor.ref(-1);
  function registerActive(id) {
    if (props.autoClose) {
      activeItemId.value = id;
    }
  }
  common_vendor.provide("upSwipeActionContext", new common_vendor.UTSJSONObject({
    autoClose: props.autoClose,
    activeItemId,
    registerActive
  }));
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: `${_ctx.u_s_b_h}px`,
      c: `${_ctx.u_s_a_i_b}px`,
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.js.map
