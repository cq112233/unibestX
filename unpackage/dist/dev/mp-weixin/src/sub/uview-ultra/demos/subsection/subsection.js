"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_subsection_1 = common_vendor.resolveComponent("up-subsection");
  (_easycom_NavBar_1 + _easycom_up_subsection_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_subsection = () => "../../../../../uni_modules/uview-ultra/components/up-subsection/up-subsection.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_subsection + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "subsection",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Subsection 分段器",
          ["auto-back"]: true,
          class: "data-v-fb1955cb"
        }),
        b: common_vendor.p({
          list: ["待付款", "待发货", "待收货"],
          current: 1,
          class: "data-v-fb1955cb"
        }),
        c: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-subsection 分段器",
          class: "data-v-fb1955cb"
        }),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-fb1955cb"
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fb1955cb"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/subsection/subsection.js.map
