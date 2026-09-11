import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-color-picker/up-color-picker.js";
import { _ as __easycom_1$1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/helper/index.js";
import "../../../../tabbar/helper/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../utils/systemInfo.js";
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
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../tabbar/custom/index.js";
import "../../../../utils/toast.js";
import "../../../../components/NavBar/NavBar.js";
import "../../../../utils/pageScroll.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataStyle: _setSharedDataStyle, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosColorPickerColorPicker";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/color-picker/color-picker.uvue",
  __name: "color-picker",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosColorPickerColorPickerSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosColorPickerColorPickerSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const color1 = ref("#ff0000");
    const color2 = ref("#2979ff");
    const color3 = ref("#19be6b");
    const gradientColor = ref("linear-gradient(to right, #ff0000, #0000ff)");
    const customColors = ref([
      "#2979ff",
      "#fa3534",
      "#19be6b",
      "#ff9900",
      "#ff00ff",
      "#00ffff"
    ]);
    const apiLog = ref("");
    const colorPickerRef = ref(null);
    function onOpenPicker() {
      const picker = colorPickerRef.value;
      if (picker != null) {
        picker.$callMethod("open");
        apiLog.value = "已调用 open()";
      }
    }
    function onConfirm(color) {
      apiLog.value = `confirm => ${color}`;
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_title = __easycom_0;
      const _component_up_color_picker = __easycom_1;
      const _component_up_button = __easycom_1$1;
      const n29 = _createSharedDataComponent(AppKu, "5bba88c1", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-color-picker 颜色选择", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n28 = _createSharedDataComponent(LayoutComponent, "573b5c1d", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-color-picker 颜色选择", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_title, "573b6b1e", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 2, n1?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_color_picker, "573b729f", {
                modelValue: () => {
                  return color1.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return color1.value = _value;
                  };
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 11, _toDisplayString(color1.value));
              });
              const n7 = _createSharedDataComponentWithFallback(_component_up_title, "df9ff498", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 4, n7?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_color_picker, "df9fe5a4", {
                modelValue: () => {
                  return color2.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return color2.value = _value;
                  };
                },
                "common-colors": () => {
                  return customColors.value;
                }
              });
              _setSharedData(__sharedData, 5, n8?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 12, _toDisplayString(color2.value));
              });
              const n13 = _createSharedDataComponentWithFallback(_component_up_title, "df9fcf58", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 6, n13?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_color_picker, "df9fc052", {
                modelValue: () => {
                  return gradientColor.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return gradientColor.value = _value;
                  };
                }
              });
              _setSharedData(__sharedData, 7, n14?.sharedData);
              _renderSharedDataEffect(() => {
                const _gradientColor = gradientColor.value;
                _setSharedData(__sharedData, 13, _toDisplayString(_gradientColor));
                _setSharedDataStyle(__sharedData, 14, { background: _gradientColor });
              });
              const n20 = _createSharedDataComponentWithFallback(_component_up_title, "df9f04d4", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 8, n20?.sharedData);
              const n21 = _createSharedDataComponentWithFallback(_component_up_color_picker, "df9ef5d2", {
                modelValue: () => {
                  return color3.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return color3.value = _value;
                  };
                },
                onConfirm: () => {
                  return onConfirm;
                }
              });
              _setSharedData(__sharedData, 9, n21?.sharedData);
              _setTemplateRef(n21, colorPickerRef, null, "colorPickerRef");
              const n22 = _createSharedDataComponentWithFallback(_component_up_button, "df9eee1c", {
                text: "打开选择器",
                type: "primary",
                size: "small",
                class: "demo-btn ml-_b12px_B",
                onClick: () => {
                  return onOpenPicker;
                }
              });
              _setSharedData(__sharedData, 10, n22?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 15, _toDisplayString(apiLog.value));
              });
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
const _style_0 = {"ml-_b12px_B":{"":{"marginLeft":12}}};
const _style_1 = {};
const colorPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  colorPicker as default
};
