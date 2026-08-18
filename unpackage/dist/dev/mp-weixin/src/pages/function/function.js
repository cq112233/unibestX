"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(EnvCard) + common_vendor.unref(ZPagingDemoCard) + common_vendor.unref(SystemInfoCard) + common_vendor.unref(HapticsCard) + common_vendor.unref(ToastCard) + common_vendor.unref(MediaCard) + common_vendor.unref(LodashDemoCard) + common_vendor.unref(CryptoDemoCard) + common_vendor.unref(TimeDemoCard) + common_vendor.unref(SignatureCard) + common_vendor.unref(EchartsDemoCard) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const EnvCard = () => "./components/EnvCard.js";
const SystemInfoCard = () => "./components/SystemInfoCard.js";
const HapticsCard = () => "./components/HapticsCard.js";
const ToastCard = () => "./components/ToastCard.js";
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
        a: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        b: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        c: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        d: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        e: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        f: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        g: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        h: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        i: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        j: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        k: common_vendor.p({
          class: "data-v-8f9e56dc"
        }),
        l: common_vendor.gei(_ctx, ""),
        m: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-8f9e56dc"
        }),
        n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8f9e56dc"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/function/function.js.map
