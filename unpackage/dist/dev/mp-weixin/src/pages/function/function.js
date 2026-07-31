"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(SystemInfoCard) + common_vendor.unref(HapticsCard) + common_vendor.unref(MediaCard) + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const SystemInfoCard = () => "./components/SystemInfoCard.js";
const HapticsCard = () => "./components/HapticsCard.js";
const MediaCard = () => "./components/MediaCard.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "function",
  setup(__props) {
    common_vendor.onBackPress((options) => {
      return false;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          ["navigation-bar-title-text"]: "功能"
        }),
        b: common_vendor.gei(_ctx, ""),
        c: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/function/function.js.map
