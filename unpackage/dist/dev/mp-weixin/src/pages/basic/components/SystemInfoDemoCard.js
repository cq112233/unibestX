"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_utils_systemInfo = require("../../../utils/systemInfo.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SystemInfoDemoCard",
  setup(__props) {
    const screenWidth = common_vendor.computed(() => {
      var _a, _b;
      return (_b = (_a = src_utils_systemInfo.systemInfo.value) === null || _a === void 0 ? null : _a.screenWidth) !== null && _b !== void 0 ? _b : 0;
    });
    const screenHeight = common_vendor.computed(() => {
      var _a, _b;
      return (_b = (_a = src_utils_systemInfo.systemInfo.value) === null || _a === void 0 ? null : _a.screenHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const windowWidth = common_vendor.computed(() => {
      var _a, _b;
      return (_b = (_a = src_utils_systemInfo.systemInfo.value) === null || _a === void 0 ? null : _a.windowWidth) !== null && _b !== void 0 ? _b : 0;
    });
    const windowHeight = common_vendor.computed(() => {
      var _a, _b;
      return (_b = (_a = src_utils_systemInfo.systemInfo.value) === null || _a === void 0 ? null : _a.windowHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const statusBarHeight = common_vendor.computed(() => {
      var _a, _b;
      return (_b = (_a = src_utils_systemInfo.systemInfo.value) === null || _a === void 0 ? null : _a.statusBarHeight) !== null && _b !== void 0 ? _b : 0;
    });
    const pixelRatio = common_vendor.computed(() => {
      var _a, _b;
      return (_b = (_a = src_utils_systemInfo.systemInfo.value) === null || _a === void 0 ? null : _a.pixelRatio) !== null && _b !== void 0 ? _b : 1;
    });
    const safeAreaTop = common_vendor.computed(() => {
      return src_utils_systemInfo.safeAreaInsets.value != null ? `${src_utils_systemInfo.safeAreaInsets.value.top}px` : "N/A";
    });
    const safeAreaBottom = common_vendor.computed(() => {
      return src_utils_systemInfo.safeAreaInsets.value != null ? `${src_utils_systemInfo.safeAreaInsets.value.bottom}px` : "N/A";
    });
    const safeAreaLeft = common_vendor.computed(() => {
      return src_utils_systemInfo.safeAreaInsets.value != null ? `${src_utils_systemInfo.safeAreaInsets.value.left}px` : "N/A";
    });
    const safeAreaRight = common_vendor.computed(() => {
      return src_utils_systemInfo.safeAreaInsets.value != null ? `${src_utils_systemInfo.safeAreaInsets.value.right}px` : "N/A";
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(safeAreaTop.value),
        b: common_vendor.t(safeAreaBottom.value),
        c: common_vendor.t(safeAreaLeft.value),
        d: common_vendor.t(safeAreaRight.value),
        e: common_vendor.t(screenWidth.value),
        f: common_vendor.t(screenHeight.value),
        g: common_vendor.t(windowWidth.value),
        h: common_vendor.t(windowHeight.value),
        i: common_vendor.t(statusBarHeight.value),
        j: common_vendor.t(pixelRatio.value),
        k: common_vendor.gei(_ctx, ""),
        l: common_vendor.p({
          title: "系统与安全区域信息",
          id: common_vendor.gei(_ctx, "")
        }),
        m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/SystemInfoDemoCard.js.map
