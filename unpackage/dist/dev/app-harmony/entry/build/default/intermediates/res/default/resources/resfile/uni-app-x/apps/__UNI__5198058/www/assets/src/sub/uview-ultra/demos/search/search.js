import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-search/up-search.js";
import { A as AppKu } from "../../../../../App.ku.js";
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
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
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
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosSearchSearch";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "610f7513",
  __className,
  __filename: "src/sub/uview-ultra/demos/search/search.uvue",
  __name: "search",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSearchSearchSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSearchSearchSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const searchValue1 = ref("");
    const searchValue2 = ref("");
    const searchValue3 = ref("");
    const searchValue4 = ref("");
    const searchValue5 = ref("");
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_search = __easycom_1;
      const n19 = _createSharedDataComponent(AppKu, "441ec4f1", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n18 = _createSharedDataComponent(LayoutComponent, "3fb9d925", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-search 搜索"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "90fd67e4", {
                title: "up-search 搜索",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_search, "90fd586e", {
                modelValue: () => {
                  return searchValue1.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return searchValue1.value = _value;
                  };
                },
                placeholder: "请输入搜索关键字"
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n5 = _createSharedDataComponentWithFallback(_component_up_search, "90fd49e6", {
                modelValue: () => {
                  return searchValue2.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return searchValue2.value = _value;
                  };
                },
                placeholder: "隐藏操作按钮",
                "show-action": false
              });
              _setSharedData(__sharedData, 4, n5?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_search, "90fd3adc", {
                modelValue: () => {
                  return searchValue3.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return searchValue3.value = _value;
                  };
                },
                shape: "square",
                "search-icon-color": "#fa3534",
                placeholder: "方形搜索框"
              });
              _setSharedData(__sharedData, 5, n8?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_search, "90fd2b5a", {
                modelValue: () => {
                  return searchValue4.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return searchValue4.value = _value;
                  };
                },
                "action-text": "搜一下"
              });
              _setSharedData(__sharedData, 6, n11?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_search, "38a81f64", {
                modelValue: () => {
                  return searchValue5.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return searchValue5.value = _value;
                  };
                },
                disabled: true,
                placeholder: "禁用输入"
              });
              _setSharedData(__sharedData, 7, n14?.sharedData);
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
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  search as default
};
//# sourceMappingURL=search.js.map
