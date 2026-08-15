"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const src_utils_systemInfo = require("../../../../utils/systemInfo.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_sticky_1 = common_vendor.resolveComponent("up-sticky");
  (_easycom_NavBar_1 + _easycom_up_button_1 + _easycom_up_sticky_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_button = () => "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_sticky = () => "../../../../../uni_modules/uview-ultra/components/up-sticky/up-sticky.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_button + _easycom_up_sticky + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "sticky",
  setup(__props) {
    const scrollTop = common_vendor.ref(0);
    const windowHeight = common_vendor.ref(common_vendor.index.getWindowInfo().windowHeight);
    const navHeight = common_vendor.computed(() => {
      var _a, _b, _c, _d;
      const top = (_d = (_b = (_a = src_utils_systemInfo.safeAreaInsets.value) === null || _a === void 0 ? null : _a.top) !== null && _b !== void 0 ? _b : (_c = src_utils_systemInfo.systemInfo.value) === null || _c === void 0 ? null : _c.statusBarHeight) !== null && _d !== void 0 ? _d : 0;
      return top + 44;
    });
    function handleScroll(e) {
      scrollTop.value = e.detail.scrollTop;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Sticky 吸顶",
          ["auto-back"]: true,
          class: "data-v-e56ada73"
        }),
        b: common_vendor.p({
          size: "small",
          type: "warning",
          text: "立即体验",
          class: "w-90px data-v-e56ada73"
        }),
        c: common_vendor.p({
          ["offset-top"]: 0,
          ["custom-nav-height"]: navHeight.value,
          ["scroll-top"]: scrollTop.value,
          class: "data-v-e56ada73"
        }),
        d: common_vendor.f(25, (i, k0, i0) => {
          return {
            a: common_vendor.t(i),
            b: i
          };
        }),
        e: common_vendor.o(handleScroll, "df"),
        f: `${windowHeight.value}px`,
        g: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-sticky 吸顶",
          class: "data-v-e56ada73"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e56ada73"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e56ada73"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/sticky/sticky.js.map
