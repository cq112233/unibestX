"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_progress_1 = common_vendor.resolveComponent("rice-progress");
  (_easycom_NavBar_1 + _easycom_rice_progress_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_progress = () => "../../../../../uni_modules/rice-ui/components/rice-progress/rice-progress.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_progress + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "progress",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Progress 进度条",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-36b3e70e"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          percentage: 50,
          color: currentTheme.value,
          class: "data-v-36b3e70e"
        }),
        d: currentTheme.value,
        e: common_vendor.p({
          percentage: 75,
          ["stroke-width"]: "8px",
          color: currentTheme.value,
          class: "data-v-36b3e70e"
        }),
        f: common_vendor.p({
          percentage: 90,
          ["stroke-width"]: "12px",
          color: "#ee0a24",
          class: "data-v-36b3e70e"
        }),
        g: common_vendor.p({
          percentage: 60,
          color: "linear-gradient(to right, #ff6034, #ee0a24)",
          class: "data-v-36b3e70e"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-36b3e70e"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-36b3e70e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/progress/progress.js.map
