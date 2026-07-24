"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_lazy_load_1 = common_vendor.resolveComponent("up-lazy-load");
  (_easycom_NavBar_1 + _easycom_up_lazy_load_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_lazy_load = () => "../../../../../uni_modules/uview-ultra/components/up-lazy-load/up-lazy-load.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_lazy_load + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "lazy-load",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Lazy Load 懒加载",
          ["auto-back"]: true,
          class: "data-v-a6458579"
        }),
        b: common_vendor.p({
          image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
          class: "data-v-a6458579"
        }),
        c: common_vendor.p({
          image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
          ["is-effect"]: true,
          duration: "300",
          class: "data-v-a6458579"
        }),
        d: common_vendor.p({
          image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
          ["border-radius"]: "20",
          height: "150",
          width: "200",
          class: "data-v-a6458579"
        }),
        e: common_vendor.p({
          image: "https://error.url/not-found.jpg",
          ["error-img"]: "https://cdn.uviewui.com/uview/empty/error.png",
          class: "data-v-a6458579"
        }),
        f: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-lazy-load 懒加载",
          class: "data-v-a6458579"
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-a6458579"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a6458579"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/lazy-load/lazy-load.js.map
