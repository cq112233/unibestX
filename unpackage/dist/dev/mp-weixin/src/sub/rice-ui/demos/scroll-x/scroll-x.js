"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_scroll_x_1 = common_vendor.resolveComponent("rice-scroll-x");
  (_easycom_NavBar_1 + _easycom_rice_scroll_x_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_scroll_x = () => "../../../../../uni_modules/rice-ui/components/rice-scroll-x/rice-scroll-x.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_scroll_x + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "scroll-x",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "ScrollX 横向滚动",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-d20738d8"
        }),
        b: currentTheme.value,
        c: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        d: currentTheme.value,
        e: common_vendor.p({
          ["indicator-active-color"]: currentTheme.value,
          class: "data-v-d20738d8"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d20738d8"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d20738d8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/scroll-x/scroll-x.js.map
