import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_0$1 } from "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import { _ as __easycom_0$2 } from "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
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
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosOverlayOverlay";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "251d4230",
  __className,
  __filename: "src/sub/uview-ultra/demos/overlay/overlay.uvue",
  __name: "overlay",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosOverlayOverlaySharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosOverlayOverlaySharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const overlayShow = ref(false);
    const overlayOpacity = ref(0.5);
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_button = __easycom_2;
      const _component_up_loading_icon = __easycom_0$1;
      const _component_up_overlay = __easycom_0$2;
      const n15 = _createSharedDataComponent(AppKu, "57f1bb61", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n14 = _createSharedDataComponent(LayoutComponent, "b3749e96", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-overlay 遮罩层"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "2270669c", {
                title: "up-overlay 遮罩层",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const _on_click = () => {
                return overlayShow.value = true;
              };
              const n2 = _createSharedDataComponentWithFallback(_component_up_button, "22707180", {
                type: "primary",
                text: "显示遮罩",
                size: "mini",
                onClick: () => {
                  return _on_click;
                }
              });
              _setSharedData(__sharedData, 6, n2?.sharedData);
              const _on_click1 = () => {
                overlayOpacity.value = 0.3;
                overlayShow.value = true;
              };
              const n4 = _createSharedDataComponentWithFallback(_component_up_button, "227075c1", {
                type: "warning",
                text: "半透明遮罩",
                size: "mini",
                onClick: () => {
                  return _on_click1;
                }
              });
              _setSharedData(__sharedData, 7, n4?.sharedData);
              const _on_click2 = () => {
                return overlayShow.value = false;
              };
              const n12 = _createSharedDataComponentWithFallback(_component_up_overlay, "22707cc7", {
                show: () => {
                  return overlayShow.value;
                },
                opacity: () => {
                  return overlayOpacity.value;
                },
                onClick: () => {
                  return _on_click2;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n8 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "227084c6", { mode: "circle" });
                  _setSharedData(__sharedData, 4, n8?.sharedData);
                  _setSharedDataEvent(__sharedData, 5, () => {
                  });
                })
              });
              _setSharedData(__sharedData, 3, n12?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n14.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n15.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const overlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  overlay as default
};
//# sourceMappingURL=overlay.js.map
