"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upLink_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-link",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upLink_props.propsLink],
  computed: {
    linkStyle() {
      const style = new common_vendor.UTSJSONObject(
        {
          color: this.color,
          fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(this.fontSize),
          // line-height设置为比字体大小多2px
          lineHeight: uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(this.fontSize)) + 2),
          textDecoration: this.underLine ? "underline" : "none"
        }
        // if (this.underLine) {
        // 	style.borderBottomColor = this.lineColor || this.color
        // 	style.borderBottomWidth = '1px'
        // }
      );
      return style;
    }
  },
  emits: ["click"],
  methods: {
    addStyle(style = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(style);
    },
    openLink() {
      this.$emit("click");
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.t(_ctx.text),
    b: common_vendor.sei(common_vendor.gei(_ctx, ""), "text"),
    c: common_vendor.o((...args) => $options.openLink && $options.openLink(...args), "cd"),
    d: common_vendor.s($options.linkStyle),
    e: common_vendor.s($options.addStyle(_ctx.customStyle)),
    f: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b6767399"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-link/up-link.js.map
