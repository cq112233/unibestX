"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_back_top_1 = common_vendor.resolveComponent("up-back-top");
  (_easycom_NavBar_1 + _easycom_up_back_top_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_back_top = () => "../../../../../uni_modules/uview-ultra/components/up-back-top/up-back-top.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_back_top + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "back-top",
  setup(__props) {
    const currentScrollTop = common_vendor.ref(0);
    const scrollTop = common_vendor.ref(0);
    const windowHeight = common_vendor.ref(common_vendor.index.getWindowInfo().windowHeight);
    function handleScroll(e) {
      currentScrollTop.value = e.detail.scrollTop;
      scrollTop.value = e.detail.scrollTop;
    }
    function scrollToTop() {
      scrollTop.value = 0;
      currentScrollTop.value = 0;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Back Top 返回顶部",
          ["auto-back"]: true,
          class: "data-v-6fec05f2"
        }),
        b: common_vendor.t(currentScrollTop.value),
        c: common_vendor.f(20, (i, k0, i0) => {
          return {
            a: common_vendor.t(i),
            b: i
          };
        }),
        d: scrollTop.value,
        e: common_vendor.o(handleScroll, "9a"),
        f: common_vendor.o(scrollToTop, "d4"),
        g: common_vendor.p({
          ["scroll-top"]: currentScrollTop.value,
          top: 100,
          bottom: 80,
          right: 20,
          class: "data-v-6fec05f2"
        }),
        h: `${windowHeight.value}px`,
        i: common_vendor.p({
          ["navigation-bar-title-text"]: "Back Top 返回顶部",
          ["navigation-style"]: "custom",
          class: "data-v-6fec05f2"
        }),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6fec05f2"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6fec05f2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/back-top/back-top.js.map
