"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../../store/index.js");
const src_store_app = require("../../../store/app.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "RiceUIDemoCard",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    function copyWebsiteUrl() {
      common_vendor.index.setClipboardData({
        data: "https://riceui.cn/",
        success: () => {
          common_vendor.index.showToast({
            title: "官网网址已复制到剪贴板",
            icon: "none"
          });
        }
      });
    }
    function navigateToShowcase() {
      common_vendor.index.navigateTo({
        url: "/src/sub/rice-ui/rice-ui",
        fail: (err) => {
          common_vendor.index.__f__("error", "at src/pages/basic/components/RiceUIDemoCard.uvue:64", "navigateToShowcase fail:", err);
        }
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.o(copyWebsiteUrl, "3c"),
        b: currentTheme.value,
        c: common_vendor.o(navigateToShowcase, "64"),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          title: "Rice UI 组件库",
          id: common_vendor.gei(_ctx, "")
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/RiceUIDemoCard.js.map
