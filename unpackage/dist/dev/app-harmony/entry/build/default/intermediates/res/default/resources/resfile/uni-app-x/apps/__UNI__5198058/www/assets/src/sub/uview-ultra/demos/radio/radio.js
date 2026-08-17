import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-radio/up-radio.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-radio/radio.js";
import "../../../../../uni_modules/uview-ultra/components/up-radio-group/radioGroup.js";
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
import "../../../../utils/i18n.js";
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
const __className = "GenSrcSubUviewUltraDemosRadioRadio";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "d35e2134",
  __className,
  __filename: "src/sub/uview-ultra/demos/radio/radio.uvue",
  __name: "radio",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosRadioRadioSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosRadioRadioSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const radioValue = ref("apple");
    const radioValue2 = ref("apple");
    const radioValue3 = ref("square");
    const radioValue4 = ref("1");
    function radioChange(n) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/radio/radio.uvue:49", "radio change", n);
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_radio = __easycom_1;
      const _component_up_radio_group = __easycom_2;
      const n24 = _createSharedDataComponent(_sfc_main$1, "511dc37e", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n23 = _createSharedDataComponent(LayoutComponent, "16b2a9d5", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-radio 单选框"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "80badd44", {
                title: "up-radio 单选框",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n4 = _createSharedDataComponentWithFallback(_component_up_radio_group, "80bacdce", {
                modelValue: () => {
                  return radioValue.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return radioValue.value = _value;
                  };
                },
                onChange: () => {
                  return radioChange;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n2 = _createSharedDataComponentWithFallback(_component_up_radio, "80bac706", {
                    name: "apple",
                    label: "苹果",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 4, n2?.sharedData);
                  const n3 = _createSharedDataComponentWithFallback(_component_up_radio, "80bac000", {
                    name: "banana",
                    label: "香蕉",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 5, n3?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n4?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_radio_group, "80bab0f2", {
                modelValue: () => {
                  return radioValue2.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return radioValue2.value = _value;
                  };
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n7 = _createSharedDataComponentWithFallback(_component_up_radio, "80baafbe", {
                    name: "apple",
                    label: "苹果(禁用)",
                    disabled: true,
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 7, n7?.sharedData);
                  const n8 = _createSharedDataComponentWithFallback(_component_up_radio, "80baa83a", {
                    name: "banana",
                    label: "香蕉(未禁用)",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 8, n8?.sharedData);
                })
              });
              _setSharedData(__sharedData, 6, n9?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_radio_group, "34af8371", {
                modelValue: () => {
                  return radioValue3.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return radioValue3.value = _value;
                  };
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n12 = _createSharedDataComponentWithFallback(_component_up_radio, "34af83f6", {
                    name: "square",
                    label: "方形",
                    shape: "square",
                    "active-color": "#fa3534",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 10, n12?.sharedData);
                  const n13 = _createSharedDataComponentWithFallback(_component_up_radio, "34af87f4", {
                    name: "circle",
                    label: "圆形",
                    shape: "circle",
                    "active-color": "#ff9900",
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 11, n13?.sharedData);
                })
              });
              _setSharedData(__sharedData, 9, n14?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_radio_group, "34af9299", {
                modelValue: () => {
                  return radioValue4.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return radioValue4.value = _value;
                  };
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n17 = _createSharedDataComponentWithFallback(_component_up_radio, "34af9333", {
                    name: "1",
                    label: "选项1(只能点圈圈)",
                    "label-disabled": true,
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 13, n17?.sharedData);
                  const n18 = _createSharedDataComponentWithFallback(_component_up_radio, "34af9710", {
                    name: "2",
                    label: "选项2(只能点圈圈)",
                    "label-disabled": true,
                    class: "mb-10px mr-20px"
                  });
                  _setSharedData(__sharedData, 14, n18?.sharedData);
                })
              });
              _setSharedData(__sharedData, 12, n19?.sharedData);
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
const _style_0 = {};
const _style_1 = {};
const radio = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  radio as default
};
//# sourceMappingURL=radio.js.map
