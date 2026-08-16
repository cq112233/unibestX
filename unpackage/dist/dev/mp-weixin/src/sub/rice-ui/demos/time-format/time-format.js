"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_time_format_1 = common_vendor.resolveComponent("rice-time-format");
  (_easycom_NavBar_1 + _easycom_rice_time_format_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_time_format = () => "../../../../../uni_modules/rice-ui/components/rice-time-format/rice-time-format.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_time_format + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "time-format",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const now = Date.now();
    const fiveMinsAgo = now - 5 * 60 * 1e3;
    const yesterday = now - 24 * 60 * 60 * 1e3;
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "TimeFormat 时间格式化",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-4e6be6c0"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          timestamp: common_vendor.unref(now),
          format: "YYYY-MM-DD",
          class: "data-v-4e6be6c0"
        }),
        d: common_vendor.p({
          timestamp: common_vendor.unref(now),
          format: "YYYY-MM-DD HH:mm:ss",
          class: "data-v-4e6be6c0"
        }),
        e: common_vendor.p({
          timestamp: fiveMinsAgo,
          format: "relative",
          class: "data-v-4e6be6c0"
        }),
        f: common_vendor.p({
          timestamp: yesterday,
          format: "relative",
          class: "data-v-4e6be6c0"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-4e6be6c0"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4e6be6c0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/time-format/time-format.js.map
