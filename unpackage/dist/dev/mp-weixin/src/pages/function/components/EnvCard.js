"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../basic/components/Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "EnvCard",
  setup(__props) {
    var _a, _b;
    const appTitle = `${"unibestX"}`;
    const appVersion = `${"1.0.0"}`;
    const buildEnvType = `${(_a = "development") !== null && _a !== void 0 ? _a : ""}`;
    const systemEnv = buildEnvType == "test" ? "test" : "development";
    const apiBaseUrl = `${(_b = "https://ukw0y1.laf.run") !== null && _b !== void 0 ? _b : "https://ukw0y1.laf.run"}`;
    const envTypeText = systemEnv;
    const envLabel = common_vendor.computed(() => {
      if (systemEnv === "test") {
        return "测试";
      }
      if (systemEnv === "production") {
        return "生产";
      }
      return "开发";
    });
    const envColor = common_vendor.computed(() => {
      if (systemEnv === "test") {
        return "#f59e0b";
      }
      if (systemEnv === "production") {
        return "#ef4444";
      }
      return "#10b981";
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(appTitle),
        b: common_vendor.t(appVersion),
        c: common_vendor.t(envLabel.value),
        d: envColor.value,
        e: common_vendor.t(common_vendor.unref(envTypeText)),
        f: common_vendor.t(apiBaseUrl),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          title: "环境变量",
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-f293d664"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f293d664"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/EnvCard.js.map
