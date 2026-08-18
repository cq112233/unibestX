import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { g as getSystemEnv, a as getCurrentEnv, b as getEnvLabel, c as getEnvConfigFor, s as setCurrentEnv, r as resetEnv } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/env&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsEnvCard";
const { computed, ref } = globalThis.Vue;
const COLOR_DEV = "#10b981";
const COLOR_TEST = "#f59e0b";
const COLOR_PROD = "#ef4444";
const COLOR_BG = "#e2e8f0";
const COLOR_WHITE = "#ffffff";
const COLOR_DARK = "#475569";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "032ea384",
  __className,
  __filename: "src/pages/function/components/EnvCard.uvue",
  __name: "EnvCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsEnvCardSharedData", sharedDataClassId: 0 })));
    const systemEnv = getSystemEnv();
    const systemEnvLabel = computed(() => {
      return systemEnv === "development" ? "开发" : "生产";
    });
    const currentEnv = ref(getCurrentEnv());
    const isOverridden = computed(() => {
      return currentEnv.value !== systemEnv;
    });
    const currentEnvLabel = computed(() => {
      return getEnvLabel(currentEnv.value);
    });
    const envColor = computed(() => {
      if (currentEnv.value === "development") {
        return COLOR_DEV;
      }
      if (currentEnv.value === "test") {
        return COLOR_TEST;
      }
      return COLOR_PROD;
    });
    const envConfig = computed(() => {
      return getEnvConfigFor(currentEnv.value);
    });
    const devBtnBg = computed(() => {
      return currentEnv.value === "development" ? COLOR_DEV : COLOR_BG;
    });
    const devBtnText = computed(() => {
      return currentEnv.value === "development" ? COLOR_WHITE : COLOR_DARK;
    });
    const testBtnBg = computed(() => {
      return currentEnv.value === "test" ? COLOR_TEST : COLOR_BG;
    });
    const testBtnText = computed(() => {
      return currentEnv.value === "test" ? COLOR_WHITE : COLOR_DARK;
    });
    const prodBtnBg = computed(() => {
      return currentEnv.value === "production" ? COLOR_PROD : COLOR_BG;
    });
    const prodBtnText = computed(() => {
      return currentEnv.value === "production" ? COLOR_WHITE : COLOR_DARK;
    });
    function switchEnv(type) {
      const env = type;
      setCurrentEnv(env);
      currentEnv.value = env;
      const label = getEnvLabel(env);
      uni.showToast({
        title: `已切换至${label}环境`,
        icon: "none",
        duration: 1500
      });
    }
    function handleReset() {
      resetEnv();
      currentEnv.value = systemEnv;
      uni.showToast({
        title: "已重置为系统默认环境",
        icon: "none",
        duration: 1500
      });
    }
    return () => {
      "raw js";
      const n24 = _createSharedDataComponent(
        Card,
        "5df1cdee",
        { title: "环境变量" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, () => {
              return switchEnv("development");
            });
            _setSharedDataEvent(__sharedData, 2, () => {
              return switchEnv("test");
            });
            _setSharedDataEvent(__sharedData, 3, () => {
              return switchEnv("production");
            });
            _setSharedDataEvent(__sharedData, 4, handleReset);
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 5, _toDisplayString(systemEnvLabel.value));
              _setSharedDataStyle(__sharedData, 6, { color: envColor.value });
              _setSharedData(__sharedData, 7, _toDisplayString(currentEnvLabel.value));
              _setSharedData(__sharedData, 8, _toDisplayString(envConfig.value.baseURL));
              _setSharedData(__sharedData, 9, _toDisplayString(isOverridden.value ? "是" : "否"));
              _setSharedDataStyle(__sharedData, 10, { backgroundColor: devBtnBg.value });
              _setSharedDataStyle(__sharedData, 11, { color: devBtnText.value });
              _setSharedDataStyle(__sharedData, 12, { backgroundColor: testBtnBg.value });
              _setSharedDataStyle(__sharedData, 13, { color: testBtnText.value });
              _setSharedDataStyle(__sharedData, 14, { backgroundColor: prodBtnBg.value });
              _setSharedDataStyle(__sharedData, 15, { color: prodBtnText.value });
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n24.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const EnvCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  EnvCard as E
};
//# sourceMappingURL=EnvCard.js.map
