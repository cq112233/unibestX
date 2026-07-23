"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_loading_page_1 = common_vendor.resolveComponent("up-loading-page");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_loading_page_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_loading_page = () => "../../../../../uni_modules/uview-ultra/components/up-loading-page/up-loading-page.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_loading_page + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "loading-page",
  setup(__props) {
    const loadingPageShow = common_vendor.ref(false);
    function triggerLoadingPage() {
      loadingPageShow.value = true;
      setTimeout(() => {
        loadingPageShow.value = false;
      }, 2e3);
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-loading-page 加载页",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-d347fcfa"
        }),
        b: common_vendor.o(triggerLoadingPage, "1e"),
        c: common_vendor.p({
          type: "primary",
          text: "触发全屏加载",
          size: "mini",
          class: "data-v-d347fcfa"
        }),
        d: common_vendor.p({
          loading: loadingPageShow.value,
          ["loading-text"]: "页面正在加载中...",
          ["loading-mode"]: "circle",
          class: "data-v-d347fcfa"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-loading-page 加载页",
          class: "data-v-d347fcfa"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d347fcfa"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d347fcfa"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/loading-page/loading-page.js.map
