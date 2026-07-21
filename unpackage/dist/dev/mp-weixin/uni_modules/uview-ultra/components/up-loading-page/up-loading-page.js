"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upLoadingPage_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-loading-page",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upLoadingPage_props.propsLoadingPage],
  data() {
    return {};
  },
  computed: {
    customStyleParse() {
      return this.customStyle;
    }
  },
  methods: {
    addUnit(str = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(str);
    }
  }
});
if (!Array) {
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_transition2 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_loading_icon2 + _easycom_up_transition2)();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.image
  }, _ctx.image ? {
    b: _ctx.image,
    c: $options.addUnit(_ctx.iconSize),
    d: $options.addUnit(_ctx.iconSize)
  } : {
    e: common_vendor.p({
      mode: _ctx.loadingMode,
      size: $options.addUnit(_ctx.iconSize),
      color: _ctx.loadingColor,
      class: "data-v-bae480a6"
    })
  }, {
    f: common_vendor.t(_ctx.loadingText),
    g: $options.addUnit(_ctx.fontSize),
    h: _ctx.color,
    i: common_vendor.gei(_ctx, ""),
    j: common_vendor.p({
      show: _ctx.loading,
      ["custom-style"]: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: _ctx.bgColor,
        display: "flex",
        zIndex: _ctx.zIndex,
        ...$options.customStyleParse
      },
      id: common_vendor.gei(_ctx, ""),
      class: "data-v-bae480a6"
    }),
    k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bae480a6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-loading-page/up-loading-page.js.map
