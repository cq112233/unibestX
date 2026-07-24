"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_divider_1 = common_vendor.resolveComponent("up-divider");
  (_easycom_NavBar_1 + _easycom_up_divider_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_divider = () => "../../../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_divider + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "divider",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Divider 分割线",
          ["auto-back"]: true,
          class: "data-v-9451d49b"
        }),
        b: common_vendor.p({
          text: "分割线",
          class: "data-v-9451d49b"
        }),
        c: common_vendor.p({
          text: "虚线分割",
          dashed: true,
          class: "data-v-9451d49b"
        }),
        d: common_vendor.p({
          text: "半截",
          ["half-width"]: true,
          class: "data-v-9451d49b"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-divider 分割线",
          class: "data-v-9451d49b"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-9451d49b"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9451d49b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/divider/divider.js.map
