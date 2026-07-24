"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_tabbar_item_1 = common_vendor.resolveComponent("up-tabbar-item");
  const _easycom_up_tabbar_1 = common_vendor.resolveComponent("up-tabbar");
  (_easycom_NavBar_1 + _easycom_up_tabbar_item_1 + _easycom_up_tabbar_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_tabbar_item = () => "../../../../../uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.js";
const _easycom_up_tabbar = () => "../../../../../uni_modules/uview-ultra/components/up-tabbar/up-tabbar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_tabbar_item + _easycom_up_tabbar + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabbar",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Tabbar 底部导航",
          ["auto-back"]: true,
          class: "data-v-6c6d21f6"
        }),
        b: common_vendor.p({
          text: "首页",
          icon: "home",
          class: "data-v-6c6d21f6"
        }),
        c: common_vendor.p({
          text: "我的",
          icon: "account",
          class: "data-v-6c6d21f6"
        }),
        d: common_vendor.p({
          value: 0,
          fixed: false,
          ["safe-area-inset-bottom"]: false,
          class: "data-v-6c6d21f6"
        }),
        e: common_vendor.p({
          text: "发现",
          icon: "search",
          class: "data-v-6c6d21f6"
        }),
        f: common_vendor.p({
          text: "我的",
          icon: "account",
          class: "data-v-6c6d21f6"
        }),
        g: common_vendor.p({
          value: 0,
          fixed: false,
          ["safe-area-inset-bottom"]: false,
          ["active-color"]: "#fa3534",
          class: "data-v-6c6d21f6"
        }),
        h: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-tabbar 底部导航",
          class: "data-v-6c6d21f6"
        }),
        i: common_vendor.gei(_ctx, ""),
        j: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6c6d21f6"
        }),
        k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6c6d21f6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/tabbar/tabbar.js.map
