"use strict";
const common_vendor = require("../../../common/vendor.js");
const src_utils_systemInfo = require("../../utils/systemInfo.js");
if (!Math) {
  (common_vendor.unref(UViewUltraDemoCard) + common_vendor.unref(ThemeSwitchCard) + common_vendor.unref(RouterDemoCard) + common_vendor.unref(LangSwitchCard) + common_vendor.unref(IconDemoCard) + common_vendor.unref(HttpDemoCard) + common_vendor.unref(ToastDemoCard) + common_vendor.unref(PropsDemoCard) + common_vendor.unref(SystemInfoDemoCard) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const ToastDemoCard = () => "./components/ToastDemoCard.js";
const PropsDemoCard = () => "./components/PropsDemoCard.js";
const IconDemoCard = () => "./components/IconDemoCard.js";
const LangSwitchCard = () => "./components/LangSwitchCard.js";
const ThemeSwitchCard = () => "./components/ThemeSwitchCard.js";
const RouterDemoCard = () => "./components/RouterDemoCard.js";
const HttpDemoCard = () => "./components/HttpDemoCard.js";
const UViewUltraDemoCard = () => "./components/UViewUltraDemoCard.js";
const SystemInfoDemoCard = () => "./components/SystemInfoDemoCard.js";
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
        a: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        b: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        c: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        d: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        e: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        f: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        g: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        h: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        i: common_vendor.p({
          class: "data-v-b9b8a39c"
        }),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-b9b8a39c"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b9b8a39c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/basic/basic.js.map
