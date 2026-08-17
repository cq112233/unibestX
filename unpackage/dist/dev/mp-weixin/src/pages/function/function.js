"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(EnvCard) + common_vendor.unref(ZPagingDemoCard) + common_vendor.unref(SystemInfoCard) + common_vendor.unref(HapticsCard) + common_vendor.unref(MediaCard) + common_vendor.unref(LodashDemoCard) + common_vendor.unref(CryptoDemoCard) + common_vendor.unref(TimeDemoCard) + common_vendor.unref(SignatureCard) + common_vendor.unref(EchartsDemoCard) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const EnvCard = () => "./components/EnvCard.js";
const SystemInfoCard = () => "./components/SystemInfoCard.js";
const HapticsCard = () => "./components/HapticsCard.js";
const MediaCard = () => "./components/MediaCard.js";
const LodashDemoCard = () => "./components/LodashDemoCard.js";
const CryptoDemoCard = () => "./components/CryptoDemoCard.js";
const TimeDemoCard = () => "./components/TimeDemoCard.js";
const SignatureCard = () => "./components/SignatureCard.js";
const EchartsDemoCard = () => "./components/EchartsDemoCard.js";
const ZPagingDemoCard = () => "./components/ZPagingDemoCard.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "function",
  setup(__props) {
    common_vendor.onBackPress((options) => {
      return false;
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.gei(_ctx, ""),
        b: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/function/function.js.map
