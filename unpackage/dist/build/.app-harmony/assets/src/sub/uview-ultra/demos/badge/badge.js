import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-badge/up-badge.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../utils/systemInfo.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/helper/index.js";
import "../../../../tabbar/helper/store.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../tabbar/custom/index.js";
import "../../../../utils/toast.js";
import "../../../../components/NavBar/NavBar.js";
import "../../../../utils/pageScroll.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosBadgeBadge";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/badge/badge.uvue",
  __name: "badge",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosBadgeBadgeSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosBadgeBadgeSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    return () => {
      "raw js";
      const _component_up_badge = __easycom_1;
      const n24 = _createSharedDataComponent(AppKu, "52c5317e", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-badge 徽标", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n23 = _createSharedDataComponent(LayoutComponent, "b63ecb02", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-badge 徽标", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_badge, "b63ea5b8", {
                type: "error",
                value: 9,
                class: "mr-_b20px_B"
              });
              _setSharedData(__sharedData, 2, n1?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_badge, "b63e9eba", {
                type: "warning",
                value: 99,
                class: "mr-_b20px_B"
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_badge, "b63e97b6", {
                type: "success",
                value: 100,
                max: "99"
              });
              _setSharedData(__sharedData, 4, n3?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_up_badge, "119acb18", {
                type: "error",
                "is-dot": true
              });
              _setSharedData(__sharedData, 5, n7?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_badge, "119aba5a", {
                value: "新",
                "bg-color": "#8a2be2",
                color: "#ffffff",
                class: "mr-_b20px_B"
              });
              _setSharedData(__sharedData, 6, n11?.sharedData);
              const n12 = _createSharedDataComponentWithFallback(_component_up_badge, "119ab2de", {
                value: "热",
                "bg-color": "#ff9900",
                color: "#ffffff",
                class: "mr-_b20px_B"
              });
              _setSharedData(__sharedData, 7, n12?.sharedData);
              const n13 = _createSharedDataComponentWithFallback(_component_up_badge, "119aab62", {
                "is-dot": true,
                "bg-color": "#000000",
                class: "mr-_b20px_B"
              });
              _setSharedData(__sharedData, 8, n13?.sharedData);
              const n17 = _createSharedDataComponentWithFallback(_component_up_badge, "119a8d50", {
                type: "error",
                value: 5,
                absolute: "",
                offset: () => {
                  return [-10, -10];
                }
              });
              _setSharedData(__sharedData, 9, n17?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n23.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n24.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"mr-_b20px_B":{"":{"marginRight":20}}};
const _style_1 = {};
const badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  badge as default
};
