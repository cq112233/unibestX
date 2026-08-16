"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_loading_1 = common_vendor.resolveComponent("rice-loading");
  (_easycom_NavBar_1 + _easycom_rice_loading_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_loading = () => "../../../../../uni_modules/rice-ui/components/rice-loading/rice-loading.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_loading + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "loading",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Loading 加载",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-9341d3f0"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          mode: "circular",
          size: "28px",
          color: currentTheme.value,
          class: "data-v-9341d3f0"
        }),
        d: common_vendor.p({
          mode: "spinner",
          size: "28px",
          color: "#07c160",
          class: "data-v-9341d3f0"
        }),
        e: currentTheme.value,
        f: common_vendor.p({
          size: "36px",
          color: "#ee0a24",
          class: "data-v-9341d3f0"
        }),
        g: common_vendor.p({
          size: "24px",
          text: "加载中...",
          color: currentTheme.value,
          class: "data-v-9341d3f0"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9341d3f0"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9341d3f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/loading/loading.js.map
