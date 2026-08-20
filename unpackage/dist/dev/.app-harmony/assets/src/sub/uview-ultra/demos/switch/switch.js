import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-switch/up-switch.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosSwitchSwitch";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "5e282ba8",
  __className,
  __filename: "src/sub/uview-ultra/demos/switch/switch.uvue",
  __name: "switch",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwitchSwitchSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwitchSwitchSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const switchValue1 = ref(true);
    const switchValue2 = ref(true);
    const switchValue3 = ref(true);
    const switchValue4 = ref(true);
    const switchValue5 = ref(true);
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_switch = __easycom_1;
      const n26 = _createSharedDataComponent(AppKu, "369ee909", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n25 = _createSharedDataComponent(LayoutComponent, "c5838fe6", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-switch 开关"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "0a88ca42", {
                title: "up-switch 开关",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_switch, "0a88d50f", {
                modelValue: () => {
                  return switchValue1.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return switchValue1.value = _value;
                  };
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 9, _toDisplayString(switchValue1.value ? "已开启" : "已关闭"));
              });
              const n7 = _createSharedDataComponentWithFallback(_component_up_switch, "0a88e08a", {
                modelValue: () => {
                  return switchValue2.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return switchValue2.value = _value;
                  };
                },
                disabled: true
              });
              _setSharedData(__sharedData, 4, n7?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_switch, "46905fcb", {
                modelValue: () => {
                  return switchValue3.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return switchValue3.value = _value;
                  };
                },
                loading: ""
              });
              _setSharedData(__sharedData, 5, n11?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_up_switch, "469067ab", {
                modelValue: () => {
                  return switchValue4.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return switchValue4.value = _value;
                  };
                },
                "active-color": "#fa3534",
                "inactive-color": "#f56c6c"
              });
              _setSharedData(__sharedData, 6, n15?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_switch, "46907291", {
                modelValue: () => {
                  return switchValue5.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return switchValue5.value = _value;
                  };
                },
                size: "20",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 7, n19?.sharedData);
              const n20 = _createSharedDataComponentWithFallback(_component_up_switch, "469073a5", {
                modelValue: () => {
                  return switchValue5.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return switchValue5.value = _value;
                  };
                },
                size: "28"
              });
              _setSharedData(__sharedData, 8, n20?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n25.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n26.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"mr-_b10px_B":{"":{"marginRight":10}}};
const _switch = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  _switch as default
};
//# sourceMappingURL=switch.js.map
