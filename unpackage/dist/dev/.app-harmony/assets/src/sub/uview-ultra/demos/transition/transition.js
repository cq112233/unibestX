import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import { _ as _sfc_main$2 } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
import "../../../../store/app.js";
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
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosTransitionTransition";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "6e5e5348",
  __className,
  __filename: "src/sub/uview-ultra/demos/transition/transition.uvue",
  __name: "transition",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTransitionTransitionSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTransitionTransitionSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const transitionShow = ref(true);
    const slideMode = ref("slide-up");
    const slideShow = ref(false);
    function triggerSlide(mode) {
      slideMode.value = mode;
      slideShow.value = true;
      setTimeout(() => {
        slideShow.value = false;
      }, 1500);
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_transition = __easycom_1;
      const _component_up_button = __easycom_2;
      const n29 = _createSharedDataComponent(_sfc_main$1, "5d80d4ea", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n28 = _createSharedDataComponent(_sfc_main$2, "56b31bcb", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-transition 动画"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "7fb05e41", {
                title: "Transition 动画",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n4 = _createSharedDataComponentWithFallback(_component_up_transition, "7fb0690f", {
                show: () => {
                  return transitionShow.value;
                },
                mode: "fade"
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 3, n4?.sharedData);
              const _on_click = () => {
                return transitionShow.value = !transitionShow.value;
              };
              const n5 = _createSharedDataComponentWithFallback(_component_up_button, "7fb0742f", {
                type: "primary",
                text: () => {
                  return transitionShow.value ? "隐藏动画" : "显示动画";
                },
                size: "mini",
                onClick: () => {
                  return _on_click;
                }
              });
              _setSharedData(__sharedData, 4, n5?.sharedData);
              const n12 = _createSharedDataComponentWithFallback(_component_up_transition, "765b4ca9", {
                show: () => {
                  return transitionShow.value;
                },
                mode: "zoom"
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 5, n12?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_transition, "765b5bc5", {
                show: () => {
                  return slideShow.value;
                },
                mode: () => {
                  return slideMode.value;
                }
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 6, n18?.sharedData);
              const _on_click1 = () => {
                return triggerSlide("slide-up");
              };
              const n20 = _createSharedDataComponentWithFallback(_component_up_button, "765b674d", {
                type: "primary",
                text: "上滑",
                size: "mini",
                onClick: () => {
                  return _on_click1;
                },
                "custom-style": "margin: 0 4px;"
              });
              _setSharedData(__sharedData, 7, n20?.sharedData);
              const _on_click2 = () => {
                return triggerSlide("slide-down");
              };
              const n21 = _createSharedDataComponentWithFallback(_component_up_button, "765b6e10", {
                type: "success",
                text: "下滑",
                size: "mini",
                onClick: () => {
                  return _on_click2;
                },
                "custom-style": "margin: 0 4px;"
              });
              _setSharedData(__sharedData, 8, n21?.sharedData);
              const _on_click3 = () => {
                return triggerSlide("slide-left");
              };
              const n22 = _createSharedDataComponentWithFallback(_component_up_button, "765bc10a", {
                type: "warning",
                text: "左滑",
                size: "mini",
                onClick: () => {
                  return _on_click3;
                },
                "custom-style": "margin: 0 4px;"
              });
              _setSharedData(__sharedData, 9, n22?.sharedData);
              const _on_click4 = () => {
                return triggerSlide("slide-right");
              };
              const n23 = _createSharedDataComponentWithFallback(_component_up_button, "765bc544", {
                type: "error",
                text: "右滑",
                size: "mini",
                onClick: () => {
                  return _on_click4;
                },
                "custom-style": "margin: 0 4px;"
              });
              _setSharedData(__sharedData, 10, n23?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n28.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n29.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const transition = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  transition as default
};
//# sourceMappingURL=transition.js.map
