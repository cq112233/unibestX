"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_badge_1 = common_vendor.resolveComponent("up-badge");
  (_easycom_NavBar_1 + _easycom_up_badge_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_badge = () => "../../../../../uni_modules/uview-ultra/components/up-badge/up-badge.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_badge + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "badge",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-badge 徽标",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-d9137582"
        }),
        b: common_vendor.p({
          type: "error",
          value: 9,
          class: "mr-20px data-v-d9137582"
        }),
        c: common_vendor.p({
          type: "warning",
          value: 99,
          class: "mr-20px data-v-d9137582"
        }),
        d: common_vendor.p({
          type: "success",
          value: 100,
          max: "99",
          class: "data-v-d9137582"
        }),
        e: common_vendor.p({
          type: "error",
          ["is-dot"]: true,
          class: "data-v-d9137582"
        }),
        f: common_vendor.p({
          value: "新",
          ["bg-color"]: "#8a2be2",
          color: "#ffffff",
          class: "mr-20px data-v-d9137582"
        }),
        g: common_vendor.p({
          value: "热",
          ["bg-color"]: "#ff9900",
          color: "#ffffff",
          class: "mr-20px data-v-d9137582"
        }),
        h: common_vendor.p({
          ["is-dot"]: true,
          ["bg-color"]: "#000000",
          class: "mr-20px data-v-d9137582"
        }),
        i: common_vendor.p({
          type: "error",
          value: 5,
          absolute: true,
          offset: [-10, -10],
          class: "data-v-d9137582"
        }),
        j: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-badge 徽标",
          class: "data-v-d9137582"
        }),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-d9137582"
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d9137582"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/badge/badge.js.map
