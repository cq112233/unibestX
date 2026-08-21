import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsEnvCard";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "42258f9a",
  __className,
  __filename: "src/pages/function/components/EnvCard.uvue",
  __name: "EnvCard",
  setup(__props) {
    var _a, _b;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsEnvCardSharedData", sharedDataClassId: 0 })));
    const appTitle = `${"unibestX"}`;
    const appVersion = `${"1.0.0"}`;
    const buildEnvType = `${(_a = "development") !== null && _a !== void 0 ? _a : ""}`;
    const systemEnv = buildEnvType == "test" ? "test" : "development";
    const apiBaseUrl = `${(_b = "https://ukw0y1.laf.run") !== null && _b !== void 0 ? _b : "https://ukw0y1.laf.run"}`;
    const envTypeText = systemEnv;
    const envLabel = computed(() => {
      if (systemEnv === "test") {
        return "测试";
      }
      if (systemEnv === "production") {
        return "生产";
      }
      return "开发";
    });
    const envColor = computed(() => {
      if (systemEnv === "test") {
        return "#f59e0b";
      }
      if (systemEnv === "production") {
        return "#ef4444";
      }
      return "#10b981";
    });
    return () => {
      "raw js";
      const n16 = _createSharedDataComponent(
        Card,
        "5df1cdee",
        { title: "环境变量" },
        {
          "default": () => {
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 1, _toDisplayString(appTitle));
              _setSharedData(__sharedData, 2, _toDisplayString(appVersion));
              _setSharedDataStyle(__sharedData, 3, { color: envColor.value });
              _setSharedData(__sharedData, 4, _toDisplayString(envLabel.value));
              _setSharedData(__sharedData, 5, _toDisplayString(_unref(envTypeText)));
              _setSharedData(__sharedData, 6, _toDisplayString(apiBaseUrl));
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n16.sharedData);
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
