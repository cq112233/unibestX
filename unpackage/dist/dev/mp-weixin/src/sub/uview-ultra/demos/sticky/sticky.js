"use strict";
const common_vendor = require("../../../../../common/vendor.js");
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
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Sticky 吸顶",
          ["auto-back"]: true,
          class: "data-v-e56ada73"
        }),
        b: common_vendor.p({
          type: "primary",
          text: "吸顶按钮",
          class: "data-v-e56ada73",
          style: "width:150px"
        }),
        c: common_vendor.p({
          class: "data-v-e56ada73"
        }),
        d: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-sticky 吸顶",
          class: "data-v-e56ada73"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-e56ada73"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e56ada73"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/sticky/sticky.js.map
