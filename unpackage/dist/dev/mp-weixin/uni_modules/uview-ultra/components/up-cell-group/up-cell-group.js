"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCellGroup_cellGroup = require("./cellGroup.js");
if (!Array) {
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  _easycom_up_line_1();
}
const _easycom_up_line = () => "../up-line/up-line.js";
if (!Math) {
  _easycom_up_line();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-cell-group"
}, { __name: "up-cell-group", props: {
  title: {
    type: String,
    default: uni_modules_uviewUltra_components_upCellGroup_cellGroup.defProps.getString("cellGroup.title")
  },
  border: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCellGroup_cellGroup.defProps.getBoolean("cellGroup.border")
  }
}, setup(__props) {
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.title
    }, __props.title ? {
      b: common_vendor.t(__props.title)
    } : {}, {
      c: __props.border
    }, __props.border ? {
      d: common_vendor.p({
        class: "data-v-c8474935"
      })
    } : {}, {
      e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      f: common_vendor.s(_ctx.$up.addStyle(_ctx.customStyle)),
      g: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      h: common_vendor.n(_ctx.customClass),
      i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c8474935"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js.map
