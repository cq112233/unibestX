import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/navbar.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { o as onNavbarPullDownRefresh, s as stopNavbarPullDownRefresh } from "../../utils/refresh.js";
import { a as systemInfo } from "../../utils/systemInfo.js";
import { o as onNavbarPageScroll, b as onNavbarReachBottom } from "../../utils/pageScroll.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../tabbar/index.js";
import "../../tabbar/helper/index.js";
import "../../tabbar/helper/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../tabbar/custom/index.js";
import "../../utils/toast.js";
import "../../components/NavBar/NavBar.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenSrcPagesIndexIndex";
const { computed } = globalThis.Vue;
const { onBackPress } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/index/index.uvue",
  __name: "index",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesIndexIndexSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcPagesIndexIndexSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const systemInfo$1 = computed(() => {
      return systemInfo.value;
    });
    onNavbarPullDownRefresh(() => {
      setTimeout(() => {
        stopNavbarPullDownRefresh();
      }, 1e3);
    });
    onNavbarPageScroll((_a) => {
      var scrollTop = _a.scrollTop;
      uni.__f__("log", "at src/pages/index/index.uvue:239", "onNavbarPageScroll 触发，当前滚动距离:", scrollTop);
    });
    onNavbarReachBottom(() => {
      uni.__f__("log", "at src/pages/index/index.uvue:244", "onNavbarReachBottom 触发，已滑动到底部");
    });
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    return () => {
      "raw js";
      const n74 = _createSharedDataComponent(AppKu, "05e1f953", {
        "custom-page-class": "border-radius-12",
        "custom-page-style": "background-color: transparent;",
        layout: "navbar",
        "show-back": false,
        "hide-navbar": false,
        "enable-pull-down-refresh": true,
        "page-style": { "navigationBarBackgroundColor": "#ffffff", "navigationBarTitleText": "首页", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n73 = _createSharedDataComponent(LayoutComponent, "1548f6b6", {
            "custom-page-class": "border-radius-12",
            "custom-page-style": "background-color: transparent;",
            "show-back": false,
            "hide-navbar": false,
            "enable-pull-down-refresh": true,
            "page-style": { "navigationBarBackgroundColor": "#ffffff", "navigationBarTitleText": "首页", "navigationStyle": "custom" }
          }, {
            "default": () => {
              _renderSharedDataEffect(() => {
                const _systemInfo = systemInfo$1.value;
                const _systemInfo_env = _systemInfo.env;
                _setSharedData(__sharedData, 2, _toDisplayString(_systemInfo?.appTitle ?? ""));
                _setSharedData(__sharedData, 3, _toDisplayString(_systemInfo?.platformName ?? ""));
                _setSharedDataStyle(__sharedData, 4, { color: _systemInfo_env == "test" ? "#d97706" : _systemInfo_env == "production" ? "#dc2626" : "#059669" });
                _setSharedData(__sharedData, 5, _toDisplayString(_systemInfo?.envName ?? ""));
                _setSharedData(__sharedData, 6, _toDisplayString(_systemInfo?.isVapor == true ? "Vapor" : "VDOM"));
                _setSharedData(__sharedData, 7, _toDisplayString(_systemInfo?.appVersion ?? ""));
                _setSharedData(__sharedData, 8, _toDisplayString(_systemInfo?.compilerVersion ?? ""));
              });
            }
          });
          _setSharedData(__sharedData, 1, n73.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n74.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  index as default
};
