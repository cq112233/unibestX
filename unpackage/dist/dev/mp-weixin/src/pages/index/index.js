"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  _easycom_NavBar_1();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
if (!Math) {
  (_easycom_NavBar + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.onBackPress((options) => {
      return false;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "首页",
          ["show-back"]: false,
          class: "data-v-55cb847e"
        }),
        b: common_assets._imports_0,
        c: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "首页",
          class: "data-v-55cb847e"
        }),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-55cb847e"
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-55cb847e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/index/index.js.map
