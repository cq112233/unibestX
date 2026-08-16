"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_progress_circle_1 = common_vendor.resolveComponent("rice-progress-circle");
  (_easycom_NavBar_1 + _easycom_rice_progress_circle_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_progress_circle = () => "../../../../../uni_modules/rice-ui/components/rice-progress-circle/rice-progress-circle.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_progress_circle + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "progress-circle",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "ProgressCircle 圆环进度",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-3858ee87"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          percentage: 65,
          color: currentTheme.value,
          class: "data-v-3858ee87"
        }),
        d: common_vendor.p({
          percentage: 80,
          color: "#07c160",
          class: "data-v-3858ee87"
        }),
        e: common_vendor.p({
          percentage: 100,
          color: "#e6a23c",
          class: "data-v-3858ee87"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-3858ee87"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3858ee87"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/progress-circle/progress-circle.js.map
