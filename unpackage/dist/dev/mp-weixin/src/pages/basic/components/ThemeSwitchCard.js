"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../../store/index.js");
const src_utils_i18n = require("../../../utils/i18n.js");
const src_store_app = require("../../../store/app.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ThemeSwitchCard",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const themeTitle = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.themeTitle");
    });
    const themePreview = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.themePreview");
    });
    const themeButton = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.themeButton");
    });
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
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
        title: src_utils_i18n.$t("basic.themeSuccess"),
        icon: "none",
        duration: 1500
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(themePreview.value),
        b: common_vendor.t(themeButton.value),
        c: currentTheme.value,
        d: common_vendor.f(colorOptions, (item, index, i0) => {
          return common_vendor.e({
            a: currentTheme.value == item
          }, currentTheme.value == item ? {} : {}, {
            b: index,
            c: item,
            d: currentTheme.value == item ? "3px" : "0px",
            e: common_vendor.o(($event) => {
              return changeTheme(item);
            }, index)
          });
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          title: themeTitle.value,
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6f3d2a74"
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6f3d2a74"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/ThemeSwitchCard.js.map
