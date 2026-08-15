import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-keyboard/up-keyboard.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import { _ as _sfc_main$2 } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-car-keyboard/carKeyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosKeyboardKeyboard";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "434894cf",
  __className,
  __filename: "src/sub/uview-ultra/demos/keyboard/keyboard.uvue",
  __name: "keyboard",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosKeyboardKeyboardSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosKeyboardKeyboardSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const showNumber = ref(false);
    const valNumber = ref("");
    const onNumberChange = (val) => {
      valNumber.value += val;
    };
    const onNumberBackspace = () => {
      if (valNumber.value.length > 0) {
        valNumber.value = valNumber.value.substring(0, valNumber.value.length - 1);
      }
    };
    const showCard = ref(false);
    const valCard = ref("");
    const onCardChange = (val) => {
      valCard.value += val;
    };
    const onCardBackspace = () => {
      if (valCard.value.length > 0) {
        valCard.value = valCard.value.substring(0, valCard.value.length - 1);
      }
    };
    const showCar = ref(false);
    const valCar = ref("");
    const onCarChange = (val) => {
      valCar.value += val;
    };
    const onCarBackspace = () => {
      if (valCar.value.length > 0) {
        valCar.value = valCar.value.substring(0, valCar.value.length - 1);
      }
    };
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_keyboard = __easycom_1;
      const n19 = _createSharedDataComponent(_sfc_main$1, "319014ef", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n18 = _createSharedDataComponent(_sfc_main$2, "007288e7", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-keyboard 键盘"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "0dde948e", {
                title: "Keyboard 键盘",
                "auto-back": true
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              _setSharedDataEvent(__sharedData, 6, () => {
                return showNumber.value = true;
              });
              _renderSharedDataEffect(() => {
                const _valNumber = valNumber.value;
                _setSharedDataClass(__sharedData, 9, _valNumber ? "mock-input-text" : "mock-input-placeholder");
                _setSharedData(__sharedData, 10, _toDisplayString(_valNumber || "请点击输入数字"));
              });
              const _on_close = () => {
                return showNumber.value = false;
              };
              const _on_cancel = () => {
                return showNumber.value = false;
              };
              const _on_confirm = () => {
                return showNumber.value = false;
              };
              const n4 = _createSharedDataComponentWithFallback(_component_up_keyboard, "0ddea3cf", {
                mode: "number",
                show: () => {
                  return showNumber.value;
                },
                onChange: () => {
                  return onNumberChange;
                },
                onBackspace: () => {
                  return onNumberBackspace;
                },
                onClose: () => {
                  return _on_close;
                },
                onCancel: () => {
                  return _on_cancel;
                },
                onConfirm: () => {
                  return _on_confirm;
                }
              });
              _setSharedData(__sharedData, 3, n4?.sharedData);
              _setSharedDataEvent(__sharedData, 7, () => {
                return showCard.value = true;
              });
              _renderSharedDataEffect(() => {
                const _valCard = valCard.value;
                _setSharedDataClass(__sharedData, 11, _valCard ? "mock-input-text" : "mock-input-placeholder");
                _setSharedData(__sharedData, 12, _toDisplayString(_valCard || "请点击输入身份证"));
              });
              const _on_close1 = () => {
                return showCard.value = false;
              };
              const _on_cancel1 = () => {
                return showCard.value = false;
              };
              const _on_confirm1 = () => {
                return showCard.value = false;
              };
              const n9 = _createSharedDataComponentWithFallback(_component_up_keyboard, "a4182cb6", {
                mode: "card",
                show: () => {
                  return showCard.value;
                },
                onChange: () => {
                  return onCardChange;
                },
                onBackspace: () => {
                  return onCardBackspace;
                },
                onClose: () => {
                  return _on_close1;
                },
                onCancel: () => {
                  return _on_cancel1;
                },
                onConfirm: () => {
                  return _on_confirm1;
                }
              });
              _setSharedData(__sharedData, 4, n9?.sharedData);
              _setSharedDataEvent(__sharedData, 8, () => {
                return showCar.value = true;
              });
              _renderSharedDataEffect(() => {
                const _valCar = valCar.value;
                _setSharedDataClass(__sharedData, 13, _valCar ? "mock-input-text" : "mock-input-placeholder");
                _setSharedData(__sharedData, 14, _toDisplayString(_valCar || "请点击输入车牌号"));
              });
              const _on_close2 = () => {
                return showCar.value = false;
              };
              const _on_cancel2 = () => {
                return showCar.value = false;
              };
              const _on_confirm2 = () => {
                return showCar.value = false;
              };
              const n14 = _createSharedDataComponentWithFallback(_component_up_keyboard, "a4180530", {
                mode: "car",
                show: () => {
                  return showCar.value;
                },
                onChange: () => {
                  return onCarChange;
                },
                onBackspace: () => {
                  return onCarBackspace;
                },
                onClose: () => {
                  return _on_close2;
                },
                onCancel: () => {
                  return _on_cancel2;
                },
                onConfirm: () => {
                  return _on_confirm2;
                }
              });
              _setSharedData(__sharedData, 5, n14?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n18.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n19.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const keyboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  keyboard as default
};
//# sourceMappingURL=keyboard.js.map
