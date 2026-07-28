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
      return "开发";
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
    const envTypeItems = common_vendor.computed(() => {
      const types = ["development", "test", "production"];
      const result = [];
      for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const isActive = currentEnv.value === type;
        let bgColor = COLOR_BG;
        if (isActive) {
          if (type === "development") {
            bgColor = COLOR_DEV;
          } else if (type === "test") {
            bgColor = COLOR_TEST;
          } else {
            bgColor = COLOR_PROD;
          }
        }
        const item = new UTSJSONObject();
        item["type"] = type;
        item["label"] = src_utils_env.getEnvLabel(type);
        item["bgColor"] = bgColor;
        item["textColor"] = isActive ? COLOR_WHITE : COLOR_DARK;
        result.push(item);
      }
      return result;
    });
    function switchEnv(type) {
      src_utils_env.setCurrentEnv(type);
      currentEnv.value = type;
      const label = src_utils_env.getEnvLabel(type);
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
        f: common_vendor.f(envTypeItems.value, (item, _index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: item.textColor,
            c: item.type,
            d: item.bgColor,
            e: common_vendor.o(($event) => {
              return switchEnv(item.type);
            }, item.type)
          };
        }),
        g: common_vendor.o(handleReset, "8c"),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          title: "环境变量",
          id: common_vendor.gei(_ctx, "")
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/EnvCard.js.map
