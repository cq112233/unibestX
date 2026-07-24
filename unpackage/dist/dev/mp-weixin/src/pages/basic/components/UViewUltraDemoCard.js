"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "UViewUltraDemoCard",
  setup(__props) {
    let isNavigating = false;
    function copyWebsiteUrl() {
      common_vendor.index.setClipboardData({
        data: "https://uview-ultra.lingyun.net/",
        success: () => {
          common_vendor.index.showToast({
            title: "官网网址已复制到剪贴板",
            icon: "none"
          });
        }
      });
    }
    function navigateToShowcase() {
      if (isNavigating) {
        return null;
      }
      isNavigating = true;
      common_vendor.index.navigateTo({
        url: "/src/sub/uview-ultra/uview-ultra",
        complete: () => {
          setTimeout(() => {
            isNavigating = false;
          }, 500);
        }
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.o(copyWebsiteUrl, "39"),
        b: common_vendor.o(navigateToShowcase, "a8"),
        c: common_vendor.gei(_ctx, ""),
        d: common_vendor.p({
          title: "uview-ultra 组件库",
          id: common_vendor.gei(_ctx, "")
        }),
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/UViewUltraDemoCard.js.map
