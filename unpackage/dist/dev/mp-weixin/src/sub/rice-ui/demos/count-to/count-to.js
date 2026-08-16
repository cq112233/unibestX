"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_count_to_1 = common_vendor.resolveComponent("rice-count-to");
  (_easycom_NavBar_1 + _easycom_rice_count_to_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_count_to = () => "../../../../../uni_modules/rice-ui/components/rice-count-to/rice-count-to.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_count_to + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "count-to",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "CountTo 数字滚动",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-62d76bee"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          ["start-val"]: 0,
          ["end-val"]: 12345,
          ["font-size"]: "32px",
          color: currentTheme.value,
          bold: true,
          class: "data-v-62d76bee"
        }),
        d: currentTheme.value,
        e: common_vendor.p({
          ["start-val"]: 0,
          ["end-val"]: 3688.88,
          decimals: 2,
          duration: 2500,
          ["font-size"]: "30px",
          color: "#07c160",
          bold: true,
          class: "data-v-62d76bee"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-62d76bee"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-62d76bee"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/count-to/count-to.js.map
