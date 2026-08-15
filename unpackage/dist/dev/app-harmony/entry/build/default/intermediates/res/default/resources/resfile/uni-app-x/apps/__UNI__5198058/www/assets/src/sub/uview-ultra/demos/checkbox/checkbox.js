import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import { _ as _sfc_main$2 } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
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
const __className = "GenSrcSubUviewUltraDemosCheckboxCheckbox";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "f5bff11e",
  __className,
  __filename: "src/sub/uview-ultra/demos/checkbox/checkbox.uvue",
  __name: "checkbox",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCheckboxCheckboxSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCheckboxCheckboxSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const checkboxValue1 = ref(["apple"]);
    const checkboxValue2 = ref(["apple"]);
    const checkboxValue3 = ref(["circle"]);
    const checkboxValue4 = ref([]);
    function checkboxChange(n) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/checkbox/checkbox.uvue:48", "checkbox change", n);
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_checkbox = __easycom_1;
      const _component_up_checkbox_group = __easycom_2;
      const n23 = _createSharedDataComponent(_sfc_main$1, "53588ab2", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n22 = _createSharedDataComponent(_sfc_main$2, "17b8cba2", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-checkbox 复选框"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "df60a772", {
                title: "up-checkbox 复选框",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n4 = _createSharedDataComponentWithFallback(_component_up_checkbox_group, "df6097f6", {
                modelValue: () => {
                  return checkboxValue1.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return checkboxValue1.value = _value;
                  };
                },
                onChange: () => {
                  return checkboxChange;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n2 = _createSharedDataComponentWithFallback(_component_up_checkbox, "df6090f0", {
                    name: "apple",
                    label: "苹果",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 4, n2?.sharedData);
                  const n3 = _createSharedDataComponentWithFallback(_component_up_checkbox, "df6089b4", {
                    name: "banana",
                    label: "香蕉",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 5, n3?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n4?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_checkbox_group, "df607a6a", {
                modelValue: () => {
                  return checkboxValue2.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return checkboxValue2.value = _value;
                  };
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n7 = _createSharedDataComponentWithFallback(_component_up_checkbox, "df6073ea", {
                    name: "apple",
                    label: "苹果(禁用)",
                    disabled: true,
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 7, n7?.sharedData);
                  const n8 = _createSharedDataComponentWithFallback(_component_up_checkbox, "df606c5a", {
                    name: "banana",
                    label: "香蕉(未禁用)",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 8, n8?.sharedData);
                })
              });
              _setSharedData(__sharedData, 6, n9?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_checkbox_group, "79a5c5e8", {
                modelValue: () => {
                  return checkboxValue3.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return checkboxValue3.value = _value;
                  };
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n12 = _createSharedDataComponentWithFallback(_component_up_checkbox, "79a5c913", {
                    name: "circle",
                    label: "圆形",
                    shape: "circle",
                    "active-color": "#fa3534",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 10, n12?.sharedData);
                  const n13 = _createSharedDataComponentWithFallback(_component_up_checkbox, "79a5cd2c", {
                    name: "square",
                    label: "方形",
                    shape: "square",
                    "active-color": "#ff9900",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 11, n13?.sharedData);
                })
              });
              _setSharedData(__sharedData, 9, n14?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_checkbox_group, "79a5d54f", {
                modelValue: () => {
                  return checkboxValue4.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return checkboxValue4.value = _value;
                  };
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n17 = _createSharedDataComponentWithFallback(_component_up_checkbox, "79a5d88f", {
                    name: "label",
                    label: "只能点框框",
                    "label-disabled": true,
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 13, n17?.sharedData);
                })
              });
              _setSharedData(__sharedData, 12, n18?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n22.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n23.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  checkbox as default
};
//# sourceMappingURL=checkbox.js.map
