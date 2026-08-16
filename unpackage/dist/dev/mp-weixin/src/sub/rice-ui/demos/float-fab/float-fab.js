"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_float_fab_1 = common_vendor.resolveComponent("rice-float-fab");
  (_easycom_NavBar_1 + _easycom_rice_float_fab_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_float_fab = () => "../../../../../uni_modules/rice-ui/components/rice-float-fab/rice-float-fab.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_float_fab + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "float-fab",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    function onClickFab() {
      common_vendor.index.showToast({
        title: "点击了悬浮按钮！",
        icon: "none"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "FloatFab 悬浮按钮",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-38814ca9"
        }),
        b: currentTheme.value,
        c: common_vendor.o(onClickFab, "54"),
        d: common_vendor.p({
          icon: "plus",
          ["bg-color"]: currentTheme.value,
          ["icon-color"]: "#ffffff",
          class: "data-v-38814ca9"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-38814ca9"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-38814ca9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/float-fab/float-fab.js.map
