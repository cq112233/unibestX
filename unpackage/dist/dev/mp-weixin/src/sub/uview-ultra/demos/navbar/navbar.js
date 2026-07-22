"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_navbar_1 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  (_easycom_NavBar_1 + _easycom_up_navbar_1 + _easycom_up_icon_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_navbar = () => "../../../../../uni_modules/uview-ultra/components/up-navbar/up-navbar.js";
const _easycom_up_icon = () => "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_navbar + _easycom_up_icon + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "navbar",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Navbar 导航栏",
          ["auto-back"]: true,
          class: "data-v-744b315c"
        }),
        b: common_vendor.p({
          title: "自定义标题",
          ["safe-area-inset-top"]: false,
          fixed: false,
          ["left-text"]: "返回",
          ["bg-color"]: "#f8fafc",
          class: "data-v-744b315c"
        }),
        c: common_vendor.p({
          name: "search",
          size: "14",
          color: "#909399",
          class: "data-v-744b315c"
        }),
        d: common_vendor.p({
          ["safe-area-inset-top"]: false,
          fixed: false,
          ["left-text"]: "返回",
          ["right-text"]: "设置",
          ["bg-color"]: "#f8fafc",
          class: "data-v-744b315c"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-navbar 导航栏",
          class: "data-v-744b315c"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-744b315c"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-744b315c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/navbar/navbar.js.map
