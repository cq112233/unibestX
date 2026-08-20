"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-steps"
}, { __name: "up-steps", props: {
  direction: {
    type: String,
    default: "row"
  },
  current: {
    type: [String, Number],
    default: 0
  },
  activeColor: {
    type: String,
    default: "#3c9cff"
  },
  inactiveColor: {
    type: String,
    default: "#969799"
  },
  activeIcon: {
    type: String,
    default: ""
  },
  inactiveIcon: {
    type: String,
    default: ""
  },
  dot: {
    type: Boolean,
    default: false
  }
}, setup(__props) {
  const props = __props;
  const parentState = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      direction: props.direction,
      current: props.current,
      activeColor: props.activeColor,
      inactiveColor: props.inactiveColor,
      activeIcon: props.activeIcon,
      inactiveIcon: props.inactiveIcon,
      dot: props.dot
    });
  });
  common_vendor.provide("upStepsProps", parentState);
  const itemCount = common_vendor.ref(0);
  const registerStepItem = () => {
    const currentIndex = itemCount.value;
    itemCount.value = itemCount.value + 1;
    return currentIndex;
  };
  common_vendor.provide("upStepsRegister", registerStepItem);
  common_vendor.provide("upStepsItemCount", itemCount);
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.n(`up-steps--${__props.direction}`),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: `${_ctx.u_s_b_h}px`,
      e: `${_ctx.u_s_a_i_b}px`
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ed2353e1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-steps/up-steps.js.map
