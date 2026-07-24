"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSticky_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_config_zIndex = require("../../libs/config/zIndex.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-sticky",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSticky_props.propsSticky],
  props: {
    scrollTop: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    paddingArray() {
      const top = parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(this.offsetTop)) + parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(this.customNavHeight));
      return [top, 0, 0, 0];
    },
    webMpStyle() {
      const style = new UTSJSONObject({});
      if (!this.disabled) {
        style["position"] = "sticky";
        const top_1 = parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(this.offsetTop));
        style["top"] = top_1 + "px";
        style["zIndex"] = this.uZindex;
      } else {
        style["position"] = "relative";
      }
      if (this.bgColor != "") {
        style["backgroundColor"] = this.bgColor;
      }
      return uni_modules_uviewUltra_libs_function_index.deepMerge(uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle), style);
    },
    uZindex() {
      var _a;
      const zVal = this.$props["zIndex"];
      if (zVal != null && zVal.toString() != "") {
        const parsed = parseInt(zVal.toString());
        if (!isNaN(parsed)) {
          return parsed;
        }
      }
      return (_a = uni_modules_uviewUltra_libs_config_zIndex.zIndexConfig["sticky"]) !== null && _a !== void 0 ? _a : 999;
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    b: common_vendor.s($options.webMpStyle),
    c: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d941f132"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-sticky/up-sticky.js.map
