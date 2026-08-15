"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  (_easycom_NavBar_1 + _easycom_up_icon_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_icon = () => "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_icon + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "icon",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Icon 图标",
          ["auto-back"]: true,
          class: "data-v-80ca8434"
        }),
        b: common_vendor.p({
          name: "photo",
          size: "28",
          class: "mr-15px mb-15px data-v-80ca8434"
        }),
        c: common_vendor.p({
          name: "lock",
          size: "28",
          class: "mr-15px mb-15px data-v-80ca8434"
        }),
        d: common_vendor.p({
          name: "star",
          size: "28",
          class: "mr-15px mb-15px data-v-80ca8434"
        }),
        e: common_vendor.p({
          name: "heart-fill",
          color: "#fa3534",
          size: "28",
          class: "mr-15px mb-15px data-v-80ca8434"
        }),
        f: common_vendor.p({
          name: "github-circle-fill",
          color: "#19be6b",
          size: "28",
          class: "mr-15px mb-15px data-v-80ca8434"
        }),
        g: common_vendor.p({
          name: "google-circle-fill",
          color: "#2979ff",
          size: "28",
          class: "mr-15px mb-15px data-v-80ca8434"
        }),
        h: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-icon 图标",
          class: "data-v-80ca8434"
        }),
        i: common_vendor.gei(_ctx, ""),
        j: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-80ca8434"
        }),
        k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80ca8434"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/icon/icon.js.map
