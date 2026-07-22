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
const _sfc_defineComponent = common_vendor.defineComponent({
  __name: "back-top",
  setup(__props) {
    const scrollTop = common_vendor.ref(0);
    common_vendor.onPageScroll((e = null) => {
      scrollTop.value = e.scrollTop;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Back Top 返回顶部",
          ["auto-back"]: true,
          class: "data-v-6fec05f2"
        }),
        b: common_vendor.p({
          ["scroll-top"]: scrollTop.value,
          class: "data-v-6fec05f2"
        }),
        c: common_vendor.p({
          ["navigation-bar-title-text"]: "Back Top 返回顶部",
          ["navigation-style"]: "custom",
          class: "data-v-6fec05f2"
        }),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6fec05f2"
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
_sfc_defineComponent.__runtimeHooks = 1;
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_defineComponent, [["__scopeId", "data-v-6fec05f2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/back-top/back-top.js.map
