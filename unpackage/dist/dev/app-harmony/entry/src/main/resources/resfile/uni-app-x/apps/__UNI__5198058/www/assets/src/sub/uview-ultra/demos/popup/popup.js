import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../components/layouts/default.js";
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
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosPopupPopup";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "63559944",
  __className,
  __filename: "src/sub/uview-ultra/demos/popup/popup.uvue",
  __name: "popup",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosPopupPopupSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosPopupPopupSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const popupShow = ref(false);
    const popupMode = ref("bottom");
    function openPopup(mode) {
      popupMode.value = mode;
      popupShow.value = true;
    }
    function onPopupClose() {
      popupShow.value = false;
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_button = __easycom_2;
      const _component_up_popup = __easycom_2$1;
      const n22 = _createSharedDataComponent(AppKu, "69dd3ce1", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n21 = _createSharedDataComponent(LayoutComponent, "5c6b4196", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-popup 弹出层"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "6781881a", {
                title: "up-popup 弹出层",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const _on_click = () => {
                return openPopup("top");
              };
              const n2 = _createSharedDataComponentWithFallback(_component_up_button, "678192e7", {
                type: "primary",
                text: "顶部弹出",
                size: "mini",
                onClick: () => {
                  return _on_click;
                }
              });
              _setSharedData(__sharedData, 5, n2?.sharedData);
              const _on_click1 = () => {
                return openPopup("bottom");
              };
              const n4 = _createSharedDataComponentWithFallback(_component_up_button, "6781973b", {
                type: "primary",
                text: "底部弹出",
                size: "mini",
                onClick: () => {
                  return _on_click1;
                }
              });
              _setSharedData(__sharedData, 6, n4?.sharedData);
              const _on_click2 = () => {
                return openPopup("left");
              };
              const n8 = _createSharedDataComponentWithFallback(_component_up_button, "6781a20a", {
                type: "success",
                text: "左侧弹出",
                size: "mini",
                onClick: () => {
                  return _on_click2;
                }
              });
              _setSharedData(__sharedData, 7, n8?.sharedData);
              const _on_click3 = () => {
                return openPopup("right");
              };
              const n10 = _createSharedDataComponentWithFallback(_component_up_button, "eea1461a", {
                type: "success",
                text: "右侧弹出",
                size: "mini",
                onClick: () => {
                  return _on_click3;
                }
              });
              _setSharedData(__sharedData, 8, n10?.sharedData);
              const _on_click4 = () => {
                return openPopup("center");
              };
              const n12 = _createSharedDataComponentWithFallback(_component_up_button, "eea13d98", {
                type: "success",
                text: "居中弹出",
                size: "mini",
                onClick: () => {
                  return _on_click4;
                }
              });
              _setSharedData(__sharedData, 9, n12?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_popup, "eea13522", {
                show: () => {
                  return popupShow.value;
                },
                mode: () => {
                  return popupMode.value;
                },
                closeable: true,
                round: 10,
                onClose: () => {
                  return onPopupClose;
                }
              }, {
                "default": () => {
                  _renderSharedDataEffect(() => {
                    return _setSharedData(__sharedData, 4, _toDisplayString(popupMode.value));
                  });
                }
              });
              _setSharedData(__sharedData, 3, n19?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n21.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n22.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  popup as default
};
//# sourceMappingURL=popup.js.map
