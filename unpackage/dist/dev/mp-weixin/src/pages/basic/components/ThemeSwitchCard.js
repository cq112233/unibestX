"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../../store/index.js");
const src_utils_i18n = require("../../../utils/i18n.js");
const src_store_app = require("../../../store/app.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
class ThemeModeOption extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          value: { type: String, optional: false },
          label: { type: String, optional: false }
        };
      },
      name: "ThemeModeOption"
    };
  }
  constructor(options, metadata = ThemeModeOption.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.value = this.__props__.value;
    this.label = this.__props__.label;
    delete this.__props__;
  }
}
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
    const themeModeLabel = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.themeModeTitle");
    });
    const themeModeOptions = common_vendor.computed(() => {
      return [
        new ThemeModeOption({ value: "auto", label: src_utils_i18n.$t("basic.themeModeAuto") }),
        new ThemeModeOption({ value: "light", label: src_utils_i18n.$t("basic.themeModeLight") }),
        new ThemeModeOption({ value: "dark", label: src_utils_i18n.$t("basic.themeModeDark") })
      ];
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
    function changeThemeMode(value) {
      appStore.setThemeMode(value);
      common_vendor.index.showToast({
        title: src_utils_i18n.$t("basic.themeModeSuccess"),
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
        e: common_vendor.t(themeModeLabel.value),
        f: common_vendor.f(themeModeOptions.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.label),
            b: common_vendor.unref(appStore).state.themeMode == item.value ? "#ffffff" : "var(--text-secondary, #64748b)",
            c: index,
            d: common_vendor.unref(appStore).state.themeMode == item.value ? common_vendor.unref(appStore).state.theme : "transparent",
            e: common_vendor.o(($event) => {
              return changeThemeMode(item.value);
            }, index)
          };
        }),
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          title: themeTitle.value,
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-6f3d2a74"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6f3d2a74"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/ThemeSwitchCard.js.map
