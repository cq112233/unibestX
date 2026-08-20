import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsSystemInfoCard";
const { onMounted, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "4bf6f70d",
  __className,
  __filename: "src/pages/function/components/SystemInfoCard.uvue",
  __name: "SystemInfoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsSystemInfoCardSharedData", sharedDataClassId: 0 })));
    const sysBrand = ref("");
    const sysModel = ref("");
    const sysSystem = ref("");
    const sysPlatform = ref("");
    function fetchSystemInfo() {
      var _a, _b, _c, _d;
      try {
        const info = uni.getSystemInfoSync();
        sysBrand.value = (_a = info.brand) !== null && _a !== void 0 ? _a : "";
        sysModel.value = (_b = info.model) !== null && _b !== void 0 ? _b : "";
        sysSystem.value = (_c = info.system) !== null && _c !== void 0 ? _c : "";
        sysPlatform.value = (_d = info.uniPlatform) !== null && _d !== void 0 ? _d : "";
      } catch (err) {
        uni.__f__("error", "at src/pages/function/components/SystemInfoCard.uvue:45", err);
      }
    }
    onMounted(() => {
      fetchSystemInfo();
    });
    return () => {
      "raw js";
      const n15 = _createSharedDataComponent(
        Card,
        "031f20ce",
        { title: "设备系统信息" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, fetchSystemInfo);
            _renderSharedDataEffect(() => {
              const _sysBrand = sysBrand.value;
              const _sysModel = sysModel.value;
              const _sysSystem = sysSystem.value;
              const _sysPlatform = sysPlatform.value;
              _setSharedData(__sharedData, 2, _toDisplayString(_sysBrand !== "" ? _sysBrand : "暂无数据"));
              _setSharedData(__sharedData, 3, _toDisplayString(_sysModel !== "" ? _sysModel : "暂无数据"));
              _setSharedData(__sharedData, 4, _toDisplayString(_sysSystem !== "" ? _sysSystem : "暂无数据"));
              _setSharedData(__sharedData, 5, _toDisplayString(_sysPlatform !== "" ? _sysPlatform : "暂无数据"));
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n15.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const SystemInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  SystemInfoCard as S
};
//# sourceMappingURL=SystemInfoCard.js.map
