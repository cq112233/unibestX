"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upOverlay_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-overlay",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upOverlay_props.propsOverlay],
  computed: {
    overlayStyle() {
      const style = new common_vendor.UTSJSONObject({
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: this.zIndex,
        bottom: 0,
        "backgroundColor": `rgba(0, 0, 0, ${this.opacity})`
      });
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
    }
  },
  emits: ["click"],
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
});
if (!Array) {
  const _easycom_up_transition2 = common_vendor.resolveComponent("up-transition");
  _easycom_up_transition2();
}
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  _easycom_up_transition();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.gei(_ctx, ""),
    b: common_vendor.o($options.clickHandler, "63"),
    c: common_vendor.p({
      show: _ctx.show,
      ["custom-class"]: "up-overlay",
      duration: _ctx.duration,
      ["custom-style"]: $options.overlayStyle,
      id: common_vendor.gei(_ctx, ""),
      class: "data-v-f77d7420"
    }),
    d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f77d7420"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-overlay/up-overlay.js.map
