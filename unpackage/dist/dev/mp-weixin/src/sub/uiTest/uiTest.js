"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Math) {
  common_vendor.unref(AppKu)();
}
const AppKu = () => "../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "uiTest",
  setup(__props) {
    const logoSrc = common_assets._imports_0$1;
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_assets._imports_0$1,
        b: common_assets._imports_0,
        c: common_vendor.unref(logoSrc),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/uiTest/uiTest.js.map
