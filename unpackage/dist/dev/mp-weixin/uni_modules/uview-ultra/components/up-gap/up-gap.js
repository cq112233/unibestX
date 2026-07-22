"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useMp.js");
const uni_modules_uviewUltra_components_upGap_gap = require("./gap.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  // ...mpSharedMpOptions,
  name: "up-gap"
}, { __name: "up-gap", props: {
  // 背景颜色（默认 'transparent' ）
  bgColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upGap_gap.defProps.getString("gap.bgColor")
  },
  // 分割槽高度，单位px（默认 20 ）
  height: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upGap_gap.defProps.getNumber("gap.height")
  },
  // 与前一个组件的距离，单位px（ 默认 0 ）
  marginTop: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upGap_gap.defProps.getNumber("gap.marginTop")
  },
  // 与后一个组件的距离，单位px （默认 0 ）
  marginBottom: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upGap_gap.defProps.getNumber("gap.marginBottom")
  }
}, setup(__props) {
  const props = __props;
  const gapStyle = common_vendor.computed(() => {
    return new UTSJSONObject({
      backgroundColor: props.bgColor,
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height),
      marginTop: uni_modules_uviewUltra_libs_function_index.addUnit(props.marginTop),
      marginBottom: uni_modules_uviewUltra_libs_function_index.addUnit(props.marginBottom)
    });
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.s(gapStyle.value),
      c: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f8648adf"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-gap/up-gap.js.map
