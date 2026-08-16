"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_empty_1 = common_vendor.resolveComponent("up-empty");
  (_easycom_NavBar_1 + _easycom_up_empty_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_empty = () => "../../../../../uni_modules/uview-ultra/components/up-empty/up-empty.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_empty + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "empty",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Empty 空白页",
          ["auto-back"]: true,
          class: "data-v-bb1f1a09"
        }),
        b: common_vendor.p({
          mode: "data",
          class: "my-20px data-v-bb1f1a09"
        }),
        c: common_vendor.p({
          mode: "car",
          class: "my-20px data-v-bb1f1a09"
        }),
        d: common_vendor.p({
          mode: "list",
          class: "my-20px data-v-bb1f1a09"
        }),
        e: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-empty 空白页",
          class: "data-v-bb1f1a09"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-bb1f1a09"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bb1f1a09"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/empty/empty.js.map
