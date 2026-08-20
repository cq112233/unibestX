import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-picker/up-picker.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-toolbar/up-toolbar.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosPickerPicker";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "55edb20a",
  __className,
  __filename: "src/sub/uview-ultra/demos/picker/picker.uvue",
  __name: "picker",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosPickerPickerSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosPickerPickerSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const pickerShow1 = ref(false);
    const pickerShow2 = ref(false);
    const pickerShow3 = ref(false);
    const columns1 = ref([
      ["中国", "美国", "日本", "英国"]
    ]);
    const columns2 = ref([
      ["亚洲", "欧洲"],
      ["中国", "英国"]
    ]);
    function showPicker1() {
      pickerShow1.value = true;
    }
    function showPicker2() {
      pickerShow2.value = true;
    }
    function showPicker3() {
      pickerShow3.value = true;
    }
    function onConfirm1(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:59", "picker 1 confirm", e);
      pickerShow1.value = false;
    }
    function onConfirm2(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:63", "picker 2 confirm", e);
      pickerShow2.value = false;
    }
    function onConfirm3(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/picker/picker.uvue:67", "picker 3 confirm", e);
      pickerShow3.value = false;
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_button = __easycom_2;
      const _component_up_picker = __easycom_2$1;
      const n19 = _createSharedDataComponent(AppKu, "b01eb986", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n18 = _createSharedDataComponent(LayoutComponent, "5623c459", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-picker 选择器"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "6e54c777", {
                title: "up-picker 选择器",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_button, "6e54d25a", {
                type: "primary",
                text: "单列选择",
                size: "mini",
                onClick: () => {
                  return showPicker1;
                }
              });
              _setSharedData(__sharedData, 6, n2?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_button, "6e54dd20", {
                type: "success",
                text: "多列选择",
                size: "mini",
                onClick: () => {
                  return showPicker2;
                }
              });
              _setSharedData(__sharedData, 7, n6?.sharedData);
              const n10 = _createSharedDataComponentWithFallback(_component_up_button, "6e54e546", {
                type: "warning",
                text: "加载中选择",
                size: "mini",
                onClick: () => {
                  return showPicker3;
                }
              });
              _setSharedData(__sharedData, 8, n10?.sharedData);
              const _on_cancel = () => {
                return pickerShow1.value = false;
              };
              const n14 = _createSharedDataComponentWithFallback(_component_up_picker, "5c440cd7", {
                show: () => {
                  return pickerShow1.value;
                },
                columns: () => {
                  return columns1.value;
                },
                onConfirm: () => {
                  return onConfirm1;
                },
                onCancel: () => {
                  return _on_cancel;
                }
              });
              _setSharedData(__sharedData, 3, n14?.sharedData);
              const _on_cancel1 = () => {
                return pickerShow2.value = false;
              };
              const n15 = _createSharedDataComponentWithFallback(_component_up_picker, "5c4410d6", {
                show: () => {
                  return pickerShow2.value;
                },
                columns: () => {
                  return columns2.value;
                },
                onConfirm: () => {
                  return onConfirm2;
                },
                onCancel: () => {
                  return _on_cancel1;
                }
              });
              _setSharedData(__sharedData, 4, n15?.sharedData);
              const _on_cancel2 = () => {
                return pickerShow3.value = false;
              };
              const n16 = _createSharedDataComponentWithFallback(_component_up_picker, "5c4414d5", {
                show: () => {
                  return pickerShow3.value;
                },
                columns: () => {
                  return columns1.value;
                },
                loading: true,
                onConfirm: () => {
                  return onConfirm3;
                },
                onCancel: () => {
                  return _on_cancel2;
                }
              });
              _setSharedData(__sharedData, 5, n16?.sharedData);
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
const picker = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  picker as default
};
//# sourceMappingURL=picker.js.map
