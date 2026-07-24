"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upLine_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-line",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upLine_props.propsLine],
  computed: {
    lineStyle() {
      const style = new UTSJSONObject({});
      style["margin"] = this.margin;
      if (this.direction === "row") {
        style["borderBottomWidth"] = "1px";
        style["borderBottomStyle"] = this.dashed ? "dashed" : "solid";
        style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.length);
        if (this.hairline)
          style["transform"] = "scaleY(0.5)";
      } else {
        style["borderLeftWidth"] = "1px";
        style["borderLeftStyle"] = this.dashed ? "dashed" : "solid";
        style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.length);
        if (this.hairline)
          style["transform"] = "scaleX(0.5)";
      }
      style["borderColor"] = this.color;
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    b: common_vendor.s($options.lineStyle),
    c: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-549a29ec"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-line/up-line.js.map
