"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../../store/index.js");
const src_utils_i18n = require("../../../utils/i18n.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../../../uni_modules/rice-ui/libs/store/useConfig.js");
require("../../../../uni_modules/rice-ui/libs/use/useCountDown/index.js");
require("../../../../uni_modules/rice-ui/libs/use/useNamespace/index.js");
require("../../../../uni_modules/rice-ui/libs/use/usePopup/index.js");
require("../../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js");
require("../../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js");
require("../../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js");
require("../../../../uni_modules/rice-ui/libs/use/useTouch/index.js");
require("../../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js");
require("../../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js");
require("../../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js");
require("../../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js");
require("../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js");
require("../../../../uni_modules/rice-ui/components/rice-action-sheet/api.js");
require("../../../../uni_modules/rice-ui/components/rice-button/type.js");
require("../../../../uni_modules/rice-ui/components/rice-calendar/type.js");
require("../../../../uni_modules/rice-ui/components/rice-cascader/type.js");
require("../../../../uni_modules/rice-ui/components/rice-dialog/type.js");
require("../../../../uni_modules/rice-ui/components/rice-dialog/api.js");
require("../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js");
require("../../../../uni_modules/rice-ui/components/rice-float-fab/type.js");
require("../../../../uni_modules/rice-ui/components/rice-loading/type.js");
require("../../../../uni_modules/rice-ui/components/rice-picker/type.js");
require("../../../../uni_modules/rice-ui/libs/utils/basic.js");
require("../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js");
require("../../../../uni_modules/rice-ui/components/rice-tabs/type.js");
require("../../../../uni_modules/rice-ui/components/rice-icon/font.js");
require("../../../../uni_modules/rice-ui/components/rice-uploader/type.js");
require("../../../../uni_modules/rice-ui/components/rice-form/index.js");
require("../../../../uni_modules/rice-ui/components/rice-radio/type.js");
require("../../../../uni_modules/rice-ui/components/rice-radio-group/index.js");
require("../../../../uni_modules/rice-ui/components/rice-checkbox/type.js");
require("../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js");
require("../../../../uni_modules/rice-ui/components/rice-code-input/type.js");
require("../../../../uni_modules/rice-ui/components/rice-qrcode/type.js");
const src_store_app = require("../../../store/app.js");
if (!Array) {
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  const _easycom_rice_tag_1 = common_vendor.resolveComponent("rice-tag");
  const _easycom_rice_switch_1 = common_vendor.resolveComponent("rice-switch");
  (_easycom_rice_button_1 + _easycom_rice_tag_1 + _easycom_rice_switch_1)();
}
const _easycom_rice_button = () => "../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
const _easycom_rice_tag = () => "../../../../uni_modules/rice-ui/components/rice-tag/rice-tag.js";
const _easycom_rice_switch = () => "../../../../uni_modules/rice-ui/components/rice-switch/rice-switch.js";
if (!Math) {
  (_easycom_rice_button + _easycom_rice_tag + _easycom_rice_switch + common_vendor.unref(Card))();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ThemeSwitchCard",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const switchVal = common_vendor.ref(true);
    const cardTitle = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.themeTitle");
    });
    const themePreviewText = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.themePreview");
    });
    const themeButtonText = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.themeButton");
    });
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const isDarkMode = common_vendor.computed(() => {
      return uni_modules_riceUi_libs_store_useConfig.isDark.value;
    });
    const colorOptions = [
      "#37c2bc",
      "#0957DE",
      "#10b981",
      "#f43f5e",
      "#f97316"
    ];
    function toggleDarkMode() {
      if (isDarkMode.value) {
        uni_modules_riceUi_libs_store_useConfig.setTheme("light");
      } else {
        uni_modules_riceUi_libs_store_useConfig.setTheme("dark");
      }
    }
    function onSwitchChange(val) {
      switchVal.value = val;
    }
    function changeTheme(color) {
      appStore.setTheme(color);
      common_vendor.index.showToast({
        title: src_utils_i18n.t("basic.themeSuccess", null),
        icon: "none",
        duration: 1500
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(themePreviewText.value),
        b: common_vendor.p({
          type: "primary",
          size: "small",
          color: currentTheme.value
        }),
        c: common_vendor.p({
          type: "primary",
          color: currentTheme.value
        }),
        d: common_vendor.o(onSwitchChange, "e6"),
        e: common_vendor.p({
          ["model-value"]: switchVal.value,
          ["active-color"]: currentTheme.value
        }),
        f: common_vendor.t(themeButtonText.value),
        g: currentTheme.value,
        h: common_vendor.t(isDarkMode.value ? "🌙" : "☀️"),
        i: common_vendor.t(isDarkMode.value ? "当前：暗黑模式" : "当前：明亮模式"),
        j: common_vendor.t(isDarkMode.value ? "切换为明亮" : "切换为暗黑"),
        k: common_vendor.n(isDarkMode.value ? "text-white" : "text-__475569_"),
        l: common_vendor.n(isDarkMode.value ? "bg-__3b82f6_" : "bg-__e2e8f0_"),
        m: common_vendor.o(toggleDarkMode, "34"),
        n: common_vendor.f(colorOptions, (item, index, i0) => {
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
        o: common_vendor.gei(_ctx, ""),
        p: common_vendor.p({
          title: cardTitle.value,
          id: common_vendor.gei(_ctx, "")
        }),
        q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/ThemeSwitchCard.js.map
