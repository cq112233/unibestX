"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../../store/index.js");
const src_store_app = require("../../../store/app.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ThemeSwitchCard",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const colorOptions = [
      "#37c2bc",
      "#0957DE",
      "#10b981",
      "#f43f5e",
      "#f97316"
    ];
    function changeTheme(color) {
      appStore.setTheme(color);
      common_vendor.index.showToast({
        title: "主题切换成功",
        icon: "none",
        duration: 1500
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.unref(appStore).state.theme,
        b: common_vendor.f(colorOptions, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.unref(appStore).state.theme === item
          }, common_vendor.unref(appStore).state.theme === item ? {} : {}, {
            b: index,
            c: item,
            d: common_vendor.unref(appStore).state.theme === item ? "3px" : "0px",
            e: common_vendor.o(($event) => {
              return changeTheme(item);
            }, index)
          });
        }),
        c: common_vendor.gei(_ctx, ""),
        d: common_vendor.p({
          title: "主题设置",
          id: common_vendor.gei(_ctx, "")
        }),
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/ThemeSwitchCard.js.map
