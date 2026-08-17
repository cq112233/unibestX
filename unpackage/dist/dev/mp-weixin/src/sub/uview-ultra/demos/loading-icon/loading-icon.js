"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  (_easycom_NavBar_1 + _easycom_up_loading_icon_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_loading_icon = () => "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_loading_icon + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "loading-icon",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "LoadingIcon 加载图标",
          ["auto-back"]: true,
          class: "data-v-15c717f5"
        }),
        b: common_vendor.p({
          class: "my-10px data-v-15c717f5"
        }),
        c: common_vendor.p({
          mode: "circle",
          class: "my-10px data-v-15c717f5"
        }),
        d: common_vendor.p({
          mode: "semicircle",
          class: "my-10px data-v-15c717f5"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-loading-icon 加载图标",
          class: "data-v-15c717f5"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-15c717f5"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-15c717f5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/loading-icon/loading-icon.js.map
