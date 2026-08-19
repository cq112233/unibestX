import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { a as systemInfo, s as safeAreaInsets } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/systemInfo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsSystemInfoDemoCard";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "2edd9536",
  __className,
  __filename: "src/pages/basic/components/SystemInfoDemoCard.uvue",
  __name: "SystemInfoDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsSystemInfoDemoCardSharedData", sharedDataClassId: 0 })));
    const screenWidth = computed(() => {
      var _a, _b;
      return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.screenWidth) !== null && _b !== void 0 ? _b : 0;
    });
    const screenHeight = computed(() => {
      var _a, _b;
      return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.screenHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const windowWidth = computed(() => {
      var _a, _b;
      return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.windowWidth) !== null && _b !== void 0 ? _b : 0;
    });
    const windowHeight = computed(() => {
      var _a, _b;
      return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.windowHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const statusBarHeight = computed(() => {
      var _a, _b;
      return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.statusBarHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const pixelRatio = computed(() => {
      var _a, _b;
      return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.pixelRatio) !== null && _b !== void 0 ? _b : 1;
    });
    const safeAreaTop = computed(() => {
      return safeAreaInsets.value != null ? `${safeAreaInsets.value.top}px` : "N/A";
    });
    const safeAreaBottom = computed(() => {
      return safeAreaInsets.value != null ? `${safeAreaInsets.value.bottom}px` : "N/A";
    });
    const safeAreaLeft = computed(() => {
      return safeAreaInsets.value != null ? `${safeAreaInsets.value.left}px` : "N/A";
    });
    const safeAreaRight = computed(() => {
      return safeAreaInsets.value != null ? `${safeAreaInsets.value.right}px` : "N/A";
    });
    return () => {
      "raw js";
      const n34 = _createSharedDataComponent(
        Card,
        "e90ea59a",
        { title: "系统与安全区域信息" },
        {
          "default": () => {
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 1, _toDisplayString(safeAreaTop.value));
              _setSharedData(__sharedData, 2, _toDisplayString(safeAreaBottom.value));
              _setSharedData(__sharedData, 3, _toDisplayString(safeAreaLeft.value));
              _setSharedData(__sharedData, 4, _toDisplayString(safeAreaRight.value));
              _setSharedData(__sharedData, 5, _toDisplayString(screenWidth.value));
              _setSharedData(__sharedData, 6, _toDisplayString(screenHeight.value));
              _setSharedData(__sharedData, 7, _toDisplayString(windowWidth.value));
              _setSharedData(__sharedData, 8, _toDisplayString(windowHeight.value));
              _setSharedData(__sharedData, 9, _toDisplayString(statusBarHeight.value));
              _setSharedData(__sharedData, 10, _toDisplayString(pixelRatio.value));
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n34.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const SystemInfoDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  SystemInfoDemoCard as S
};
//# sourceMappingURL=SystemInfoDemoCard.js.map
