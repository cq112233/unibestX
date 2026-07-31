"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_no_network_1 = common_vendor.resolveComponent("up-no-network");
  (_easycom_NavBar_1 + _easycom_up_no_network_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_no_network = () => "../../../../../uni_modules/uview-ultra/components/up-no-network/up-no-network.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_no_network + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "no-network",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "up-no-network 无网络提示",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-de3e5b46"
        }),
        b: common_vendor.p({
          class: "data-v-de3e5b46"
        }),
        c: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-no-network 无网络",
          class: "data-v-de3e5b46"
        }),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-de3e5b46"
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-de3e5b46"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/no-network/no-network.js.map
