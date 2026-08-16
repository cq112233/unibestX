"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_navbar_mini_1 = common_vendor.resolveComponent("up-navbar-mini");
  (_easycom_NavBar_1 + _easycom_up_navbar_mini_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_navbar_mini = () => "../../../../../uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_navbar_mini + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "navbar-mini",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Navbar Mini 迷你导航栏",
          ["auto-back"]: true,
          class: "data-v-a5703d85"
        }),
        b: common_vendor.p({
          ["safe-area-inset-top"]: false,
          fixed: false,
          ["bg-color"]: "#3c9cff",
          ["icon-color"]: "#ffffff",
          class: "data-v-a5703d85"
        }),
        c: common_vendor.p({
          ["safe-area-inset-top"]: false,
          fixed: false,
          ["left-icon"]: "arrow-left",
          ["bg-color"]: "#e2e8f0",
          ["icon-color"]: "#334155",
          ["home-url"]: "/pages/index/index",
          class: "data-v-a5703d85"
        }),
        d: common_vendor.p({
          ["safe-area-inset-top"]: false,
          fixed: false,
          ["bg-color"]: "#fa3534",
          ["icon-color"]: "#ffffff",
          class: "data-v-a5703d85"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-navbar-mini 迷你导航栏",
          class: "data-v-a5703d85"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-a5703d85"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5703d85"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/navbar-mini/navbar-mini.js.map
