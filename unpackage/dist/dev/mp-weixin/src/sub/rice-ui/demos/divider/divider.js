"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_divider_1 = common_vendor.resolveComponent("rice-divider");
  (_easycom_NavBar_1 + _easycom_rice_divider_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_divider = () => "../../../../../uni_modules/rice-ui/components/rice-divider/rice-divider.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_divider + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "divider",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Divider 分割线",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-3891949e"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          class: "data-v-3891949e"
        }),
        d: currentTheme.value,
        e: common_vendor.p({
          text: "没有更多了",
          class: "data-v-3891949e"
        }),
        f: currentTheme.value,
        g: common_vendor.p({
          text: "猜你喜欢",
          dashed: true,
          ["line-color"]: currentTheme.value,
          ["text-color"]: currentTheme.value,
          class: "data-v-3891949e"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-3891949e"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3891949e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/divider/divider.js.map
