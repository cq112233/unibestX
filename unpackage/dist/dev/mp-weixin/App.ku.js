"use strict";
const common_vendor = require("./common/vendor.js");
require("./src/store/index.js");
const src_tabbar_store = require("./src/tabbar/store.js");
const uni_modules_riceUi_libs_store_useConfig = require("./uni_modules/rice-ui/libs/store/useConfig.js");
require("./uni_modules/rice-ui/libs/use/useCountDown/index.js");
require("./uni_modules/rice-ui/libs/use/useNamespace/index.js");
require("./uni_modules/rice-ui/libs/use/usePopup/index.js");
require("./uni_modules/rice-ui/libs/use/useRelation/useChildren.js");
require("./uni_modules/rice-ui/libs/use/useRelation/useParent.js");
require("./uni_modules/rice-ui/libs/use/useSafeArea/index.js");
require("./uni_modules/rice-ui/libs/use/useTouch/index.js");
require("./uni_modules/rice-ui/libs/plugin/coloruts/constant.js");
require("./uni_modules/rice-ui/libs/plugin/coloruts/type.js");
require("./uni_modules/rice-ui/libs/plugin/dateuts/type.js");
require("./uni_modules/rice-ui/libs/plugin/dateuts/locale.js");
require("./uni_modules/rice-ui/components/rice-action-sheet/type.js");
require("./uni_modules/rice-ui/components/rice-action-sheet/api.js");
require("./uni_modules/rice-ui/components/rice-button/type.js");
require("./uni_modules/rice-ui/components/rice-calendar/type.js");
require("./uni_modules/rice-ui/components/rice-cascader/type.js");
require("./uni_modules/rice-ui/components/rice-dialog/type.js");
require("./uni_modules/rice-ui/components/rice-dialog/api.js");
require("./uni_modules/rice-ui/components/rice-datetime-picker/type.js");
require("./uni_modules/rice-ui/components/rice-float-fab/type.js");
require("./uni_modules/rice-ui/components/rice-loading/type.js");
require("./uni_modules/rice-ui/components/rice-picker/type.js");
require("./uni_modules/rice-ui/libs/utils/basic.js");
require("./uni_modules/rice-ui/components/rice-swipe-actions-item/type.js");
require("./uni_modules/rice-ui/components/rice-tabs/type.js");
require("./uni_modules/rice-ui/components/rice-icon/font.js");
require("./uni_modules/rice-ui/components/rice-uploader/type.js");
require("./uni_modules/rice-ui/components/rice-form/index.js");
require("./uni_modules/rice-ui/components/rice-radio/type.js");
require("./uni_modules/rice-ui/components/rice-radio-group/index.js");
require("./uni_modules/rice-ui/components/rice-checkbox/type.js");
require("./uni_modules/rice-ui/components/rice-checkbox-group/index.js");
require("./uni_modules/rice-ui/components/rice-code-input/type.js");
require("./uni_modules/rice-ui/components/rice-qrcode/type.js");
const src_store_app = require("./src/store/app.js");
if (!Math) {
  common_vendor.unref(Tabbar)();
}
const Tabbar = () => "./src/tabbar/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App.ku",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const isDarkMode = common_vendor.computed(() => {
      return uni_modules_riceUi_libs_store_useConfig.isDark.value;
    });
    const currentThemeClass = common_vendor.computed(() => {
      const theme = appStore.state.theme;
      if (theme == "#37c2bc") {
        return "theme-teal";
      }
      if (theme == "#0957DE" || theme == "#0957de") {
        return "theme-blue";
      }
      if (theme == "#10b981") {
        return "theme-green";
      }
      if (theme == "#f43f5e") {
        return "theme-rose";
      }
      if (theme == "#f97316") {
        return "theme-orange";
      }
      return "theme-teal";
    });
    const rootThemeStyle = common_vendor.computed(() => {
      const theme = appStore.state.theme;
      return new common_vendor.UTSJSONObject({
        "--theme-color": theme,
        "--rice-primary-color": theme
      });
    });
    const isCurrentPageTabbar = common_vendor.ref(false);
    common_vendor.onBeforeMount(() => {
      const pages = getCurrentPages();
      if (pages.length > 0) {
        const route = pages[pages.length - 1].route;
        if (route != null && route.length > 0) {
          const path = route.startsWith("/") ? route : `/${route}`;
          const isTabbar = src_tabbar_store.isPageTabbar(path);
          isCurrentPageTabbar.value = isTabbar;
          if (isTabbar) {
            src_tabbar_store.syncCurIdxByCurrentPage();
          }
        }
      }
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: isCurrentPageTabbar.value
      }, isCurrentPageTabbar.value ? {} : {}, {
        b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        c: common_vendor.n(isDarkMode.value ? "rice-theme-dark rice-variables" : "rice-theme-light rice-variables"),
        d: common_vendor.n(currentThemeClass.value),
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
        f: common_vendor.s(rootThemeStyle.value),
        g: common_vendor.s({
          "--status-bar-height": `${_ctx.u_s_b_h}px`,
          "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
        })
      });
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../.sourcemap/mp-weixin/App.ku.js.map
