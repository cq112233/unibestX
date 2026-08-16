"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_count_down_1 = common_vendor.resolveComponent("rice-count-down");
  (_easycom_NavBar_1 + _easycom_rice_count_down_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_count_down = () => "../../../../../uni_modules/rice-ui/components/rice-count-down/rice-count-down.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_count_down + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "count-down",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "CountDown 倒计时",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-80576596"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          time: 30 * 1e3,
          class: "data-v-80576596"
        }),
        d: currentTheme.value,
        e: common_vendor.p({
          time: 2 * 60 * 60 * 1e3,
          format: "HH:mm:ss",
          class: "data-v-80576596"
        }),
        f: currentTheme.value,
        g: common_vendor.p({
          time: 30 * 1e3,
          millisecond: true,
          format: "mm:ss:SS",
          class: "data-v-80576596"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-80576596"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80576596"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/count-down/count-down.js.map
