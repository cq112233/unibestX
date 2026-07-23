"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../basic/components/Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SystemInfoCard",
  setup(__props) {
    const sysBrand = common_vendor.ref("");
    const sysModel = common_vendor.ref("");
    const sysSystem = common_vendor.ref("");
    const sysPlatform = common_vendor.ref("");
    function fetchSystemInfo() {
      var _a, _b, _c, _d;
      try {
        const info = common_vendor.index.getSystemInfoSync();
        sysBrand.value = (_a = info.brand) !== null && _a !== void 0 ? _a : "";
        sysModel.value = (_b = info.model) !== null && _b !== void 0 ? _b : "";
        sysSystem.value = (_c = info.system) !== null && _c !== void 0 ? _c : "";
        sysPlatform.value = (_d = info.uniPlatform) !== null && _d !== void 0 ? _d : "";
      } catch (err) {
        common_vendor.index.__f__("error", "at src/pages/function/components/SystemInfoCard.uvue:45", err);
      }
    }
    common_vendor.onMounted(() => {
      fetchSystemInfo();
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(sysBrand.value !== "" ? sysBrand.value : "暂无数据"),
        b: common_vendor.t(sysModel.value !== "" ? sysModel.value : "暂无数据"),
        c: common_vendor.t(sysSystem.value !== "" ? sysSystem.value : "暂无数据"),
        d: common_vendor.t(sysPlatform.value !== "" ? sysPlatform.value : "暂无数据"),
        e: common_vendor.o(fetchSystemInfo, "12"),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          title: "设备系统信息",
          id: common_vendor.gei(_ctx, "")
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/SystemInfoCard.js.map
