"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_utils_env = require("../../../utils/env.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "../../basic/components/Card.js";
const COLOR_DEV = "#10b981";
const COLOR_TEST = "#f59e0b";
const COLOR_PROD = "#ef4444";
const COLOR_BG = "#e2e8f0";
const COLOR_WHITE = "#ffffff";
const COLOR_DARK = "#475569";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "EnvCard",
  setup(__props) {
    const systemEnv = src_utils_env.getSystemEnv();
    const systemEnvLabel = common_vendor.computed(() => {
      return systemEnv === "development" ? "开发" : "生产";
    });
    const currentEnv = common_vendor.ref(src_utils_env.getCurrentEnv());
    const isOverridden = common_vendor.computed(() => {
      return currentEnv.value !== systemEnv;
    });
    const currentEnvLabel = common_vendor.computed(() => {
      return src_utils_env.getEnvLabel(currentEnv.value);
    });
    const envColor = common_vendor.computed(() => {
      if (currentEnv.value === "development") {
        return COLOR_DEV;
      }
      if (currentEnv.value === "test") {
        return COLOR_TEST;
      }
      return COLOR_PROD;
    });
    const envConfig = common_vendor.computed(() => {
      return src_utils_env.getEnvConfigFor(currentEnv.value);
    });
    const devBtnBg = common_vendor.computed(() => {
      return currentEnv.value === "development" ? COLOR_DEV : COLOR_BG;
    });
    const devBtnText = common_vendor.computed(() => {
      return currentEnv.value === "development" ? COLOR_WHITE : COLOR_DARK;
    });
    const testBtnBg = common_vendor.computed(() => {
      return currentEnv.value === "test" ? COLOR_TEST : COLOR_BG;
    });
    const testBtnText = common_vendor.computed(() => {
      return currentEnv.value === "test" ? COLOR_WHITE : COLOR_DARK;
    });
    const prodBtnBg = common_vendor.computed(() => {
      return currentEnv.value === "production" ? COLOR_PROD : COLOR_BG;
    });
    const prodBtnText = common_vendor.computed(() => {
      return currentEnv.value === "production" ? COLOR_WHITE : COLOR_DARK;
    });
    function switchEnv(type) {
      const env = type;
      src_utils_env.setCurrentEnv(env);
      currentEnv.value = env;
      const label = src_utils_env.getEnvLabel(env);
      common_vendor.index.showToast({
        title: `已切换至${label}环境`,
        icon: "none",
        duration: 1500
      });
    }
    function handleReset() {
      src_utils_env.resetEnv();
      currentEnv.value = systemEnv;
      common_vendor.index.showToast({
        title: "已重置为系统默认环境",
        icon: "none",
        duration: 1500
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(systemEnvLabel.value),
        b: common_vendor.t(currentEnvLabel.value),
        c: envColor.value,
        d: common_vendor.t(envConfig.value.baseURL),
        e: common_vendor.t(isOverridden.value ? "是" : "否"),
        f: devBtnText.value,
        g: devBtnBg.value,
        h: common_vendor.o(($event) => {
          return switchEnv("development");
        }, "78"),
        i: testBtnText.value,
        j: testBtnBg.value,
        k: common_vendor.o(($event) => {
          return switchEnv("test");
        }, "3c"),
        l: prodBtnText.value,
        m: prodBtnBg.value,
        n: common_vendor.o(($event) => {
          return switchEnv("production");
        }, "0f"),
        o: common_vendor.o(handleReset, "b9"),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          title: "环境变量",
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-f293d664"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f293d664"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/EnvCard.js.map
