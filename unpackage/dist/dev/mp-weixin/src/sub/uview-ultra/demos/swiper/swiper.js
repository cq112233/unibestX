"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_swiper_1 = common_vendor.resolveComponent("up-swiper");
  (_easycom_NavBar_1 + _easycom_up_swiper_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_swiper = () => "../../../../../uni_modules/uview-ultra/components/up-swiper/up-swiper.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_swiper + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "swiper",
  setup(__props) {
    const swiperList = common_vendor.ref([
      new UTSJSONObject({ image: "/static/logo.png", title: "uview-ultra 组件演示" }),
      new UTSJSONObject({ image: "/static/logo.png", title: "高品质 UI 组件库" }),
      new UTSJSONObject({ image: "/static/logo.png", title: "多端适配 · 开箱即用" })
    ]);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Swiper 轮播图",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-2f2f3336"
        }),
        b: common_vendor.p({
          list: swiperList.value,
          ["key-name"]: "image",
          indicator: true,
          ["indicator-mode"]: "dot",
          circular: true,
          autoplay: true,
          interval: 3e3,
          height: "180",
          ["show-title"]: true,
          class: "data-v-2f2f3336"
        }),
        c: common_vendor.p({
          list: swiperList.value,
          ["key-name"]: "image",
          indicator: true,
          ["indicator-mode"]: "line",
          circular: true,
          ["previous-margin"]: 30,
          ["next-margin"]: 30,
          height: "160",
          class: "data-v-2f2f3336"
        }),
        d: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-swiper 轮播图",
          class: "data-v-2f2f3336"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-2f2f3336"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f2f3336"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/swiper/swiper.js.map
