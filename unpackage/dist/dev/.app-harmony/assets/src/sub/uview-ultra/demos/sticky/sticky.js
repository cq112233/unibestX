import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-sticky/up-sticky.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { s as safeAreaInsets, a as systemInfo } from "../../../../utils/systemInfo.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-sticky/sticky.js";
import "../../../../../uni_modules/uview-ultra/libs/config/zIndex.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosStickySticky";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "1046a800",
  __className,
  __filename: "src/sub/uview-ultra/demos/sticky/sticky.uvue",
  __name: "sticky",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosStickyStickySharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosStickyStickySharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
    const scrollTop = ref(0);
    const windowHeight = ref(uni.getWindowInfo().windowHeight);
    const navHeight = computed(() => {
      var _a, _b, _c, _d;
      const top = (_d = (_b = (_a = safeAreaInsets.value) === null || _a === void 0 ? null : _a.top) !== null && _b !== void 0 ? _b : (_c = systemInfo.value) === null || _c === void 0 ? null : _c.statusBarHeight) !== null && _d !== void 0 ? _d : 0;
      return top + 44;
    });
    function handleScroll(e) {
      scrollTop.value = e.detail.scrollTop;
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_button = __easycom_2;
      const _component_up_sticky = __easycom_2$1;
      const n18 = _createSharedDataComponent(AppKu, "631e8033", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n17 = _createSharedDataComponent(LayoutComponent, "00b18623", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-sticky 吸顶"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData, 7, { height: `${windowHeight.value}px` });
              });
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "157f3f0e", {
                title: "Sticky 吸顶",
                "auto-back": true
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_sticky, "157f58d9", {
                "offset-top": 0,
                "custom-nav-height": () => {
                  return navHeight.value;
                },
                "scroll-top": () => {
                  return scrollTop.value;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n7 = _createSharedDataComponentWithFallback(_component_up_button, "cb2ef700", {
                    size: "small",
                    type: "warning",
                    text: "立即体验",
                    class: "w-90px"
                  });
                  _setSharedData(__sharedData, 4, n7?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n9?.sharedData);
              _createSharedDataFor(_setSharedDataScoped(__sharedData, 5, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return 25;
              }, (__sharedData_VFor0, _for_item0) => {
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData_VFor0, 1, _toDisplayString(_for_item0.value));
                });
                return null;
              }, (__sharedData_VFor0, i) => {
                return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(i));
              }, 4);
              _setSharedDataEvent(__sharedData, 6, handleScroll);
            })
          });
          _setSharedData(__sharedData, 1, n17.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n18.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const sticky = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  sticky as default
};
//# sourceMappingURL=sticky.js.map
