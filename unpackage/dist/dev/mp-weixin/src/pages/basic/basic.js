"use strict";
const common_vendor = require("../../../common/vendor.js");
const src_utils_systemInfo = require("../../utils/systemInfo.js");
if (!Math) {
  (common_vendor.unref(ThemeSwitchCard) + common_vendor.unref(RiceUIDemoCard) + common_vendor.unref(LodashDemoCard) + common_vendor.unref(CryptoDemoCard) + common_vendor.unref(PropsDemoCard) + common_vendor.unref(ZPagingDemoCard) + common_vendor.unref(SystemInfoDemoCard) + common_vendor.unref(IconDemoCard) + common_vendor.unref(LangSwitchCard) + common_vendor.unref(TimeDemoCard) + common_vendor.unref(RouterDemoCard) + common_vendor.unref(HttpDemoCard) + common_vendor.unref(EchartsDemoCard) + common_vendor.unref(SignatureCard) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const PropsDemoCard = () => "./components/PropsDemoCard.js";
const IconDemoCard = () => "./components/IconDemoCard.js";
const LangSwitchCard = () => "./components/LangSwitchCard.js";
const ThemeSwitchCard = () => "./components/ThemeSwitchCard.js";
const TimeDemoCard = () => "./components/TimeDemoCard.js";
const RouterDemoCard = () => "./components/RouterDemoCard.js";
const HttpDemoCard = () => "./components/HttpDemoCard.js";
const EchartsDemoCard = () => "./components/EchartsDemoCard.js";
const SignatureCard = () => "./components/SignatureCard.js";
const LodashDemoCard = () => "./components/LodashDemoCard.js";
const CryptoDemoCard = () => "./components/CryptoDemoCard.js";
const SystemInfoDemoCard = () => "./components/SystemInfoDemoCard.js";
const ZPagingDemoCard = () => "./components/ZPagingDemoCard.js";
const RiceUIDemoCard = () => "./components/RiceUIDemoCard.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "basic",
  setup(__props) {
    common_vendor.onBackPress((options) => {
      return false;
    });
    common_vendor.onResize(() => {
      src_utils_systemInfo.updateSystemInfo();
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
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/basic/basic.js.map
