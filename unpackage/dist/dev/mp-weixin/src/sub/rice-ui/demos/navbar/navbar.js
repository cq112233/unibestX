"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_navbar_1 = common_vendor.resolveComponent("rice-navbar");
  (_easycom_NavBar_1 + _easycom_rice_navbar_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_navbar = () => "../../../../../uni_modules/rice-ui/components/rice-navbar/rice-navbar.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_navbar + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "navbar",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    function onClickRight() {
      common_vendor.index.showToast({
        title: "点击了右侧分享",
        icon: "none"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Navbar 导航栏",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-0aab2f91"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          title: "标题",
          ["left-arrow"]: true,
          ["left-text"]: "返回",
          fixed: false,
          class: "data-v-0aab2f91"
        }),
        d: currentTheme.value,
        e: common_vendor.o(onClickRight, "9c"),
        f: common_vendor.p({
          title: "商品详情",
          ["left-arrow"]: true,
          ["right-text"]: "分享",
          fixed: false,
          class: "data-v-0aab2f91"
        }),
        g: currentTheme.value,
        h: common_vendor.p({
          title: "品牌主页",
          ["left-arrow"]: true,
          ["arrow-color"]: "#ffffff",
          ["bg-color"]: currentTheme.value,
          fixed: false,
          class: "data-v-0aab2f91"
        }),
        i: common_vendor.gei(_ctx, ""),
        j: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-0aab2f91"
        }),
        k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0aab2f91"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/navbar/navbar.js.map
