import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-color-picker/up-color-picker.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataStyle: _setSharedDataStyle, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosColorPickerColorPicker";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "62ec8288",
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
      const _component_NavBar = __easycom_0;
      const _component_up_title = __easycom_1;
      const _component_up_color_picker = __easycom_2;
      const _component_up_button = __easycom_3;
      const n30 = _createSharedDataComponent(AppKu, "5bba88c1", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n29 = _createSharedDataComponent(LayoutComponent, "1b968f55", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-color-picker 颜色选择"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "573b5c17", { title: "up-color-picker 颜色选择" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_title, "573b62df", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_color_picker, "573b6761", {
                modelValue: () => {
                  return color1.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return color1.value = _value;
                  };
                }
              });
              _setSharedData(__sharedData, 4, n3?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 12, _toDisplayString(color1.value));
              });
              const n8 = _createSharedDataComponentWithFallback(_component_up_title, "573b71e3", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 5, n8?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_color_picker, "573b765e", {
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
              _setSharedData(__sharedData, 6, n9?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 13, _toDisplayString(color2.value));
              });
              const n14 = _createSharedDataComponentWithFallback(_component_up_title, "df9fed24", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 7, n14?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_up_color_picker, "df9fdedc", {
                modelValue: () => {
                  return gradientColor.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return gradientColor.value = _value;
                  };
                }
              });
              _setSharedData(__sharedData, 8, n15?.sharedData);
              _renderSharedDataEffect(() => {
                const _gradientColor = gradientColor.value;
                _setSharedData(__sharedData, 14, _toDisplayString(_gradientColor));
                _setSharedDataStyle(__sharedData, 15, { background: _gradientColor });
              });
              const n21 = _createSharedDataComponentWithFallback(_component_up_title, "df9fc750", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 9, n21?.sharedData);
              const n22 = _createSharedDataComponentWithFallback(_component_up_color_picker, "df9fb90c", {
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
              _setSharedData(__sharedData, 10, n22?.sharedData);
              _setTemplateRef(n22, colorPickerRef, null, "colorPickerRef");
              const n23 = _createSharedDataComponentWithFallback(_component_up_button, "df9fb180", {
                text: "打开选择器",
                type: "primary",
                size: "small",
                class: "demo-btn ml-_b12px_B",
                onClick: () => {
                  return onOpenPicker;
                }
              });
              _setSharedData(__sharedData, 11, n23?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 16, _toDisplayString(apiLog.value));
              });
            })
          });
          _setSharedData(__sharedData, 1, n29.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n30.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"ml-_b12px_B":{"":{"marginLeft":12}}};
const colorPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  colorPicker as default
};
//# sourceMappingURL=color-picker.js.map
