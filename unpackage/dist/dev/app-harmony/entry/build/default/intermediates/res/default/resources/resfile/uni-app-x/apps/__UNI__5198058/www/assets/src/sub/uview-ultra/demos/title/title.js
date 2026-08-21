import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_1$1 } from "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import "../../../../store/index.js";
import { u as useAppStore } from "../../../../store/app.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
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
import "../../../../utils/toast.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
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
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosTitleTitle";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "16ef53fc",
  __className,
  __filename: "src/sub/uview-ultra/demos/title/title.uvue",
  __name: "title",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTitleTitleSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTitleTitleSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const themeColor = computed(() => {
      return appStore.state.theme;
    });
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_title = __easycom_1;
      const _component_up_icon = __easycom_1$1;
      const n39 = _createSharedDataComponent(AppKu, "0e2eef3e", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n38 = _createSharedDataComponent(LayoutComponent, "242883b5", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-title 标题"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "60e7f399", { title: "up-title 标题" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_title, "60e7fa43", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n4 = _createSharedDataComponentWithFallback(_component_up_title, "60e7fe40", null, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 4, n4?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_up_title, "60e80565", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 5, n7?.sharedData);
              const n12 = _createSharedDataComponentWithFallback(_component_up_title, "60e80966", null, {
                "prefix": () => {
                  _renderSharedDataEffect(() => {
                    return _setSharedDataStyle(__sharedData, 7, { backgroundColor: themeColor.value });
                  });
                },
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 6, n12?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_up_title, "87d33592", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 8, n15?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_title, "87d32d90", null, {
                "default": _withSharedDataVaporCtx(() => {
                  const n16 = _createSharedDataComponentWithFallback(_component_up_icon, "87d32d12", {
                    name: "bell",
                    size: "18",
                    color: () => {
                      return themeColor.value;
                    }
                  });
                  _setSharedData(__sharedData, 10, n16?.sharedData);
                })
              });
              _setSharedData(__sharedData, 9, n18?.sharedData);
              const n21 = _createSharedDataComponentWithFallback(_component_up_title, "87d31d62", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 11, n21?.sharedData);
              const n23 = _createSharedDataComponentWithFallback(_component_up_title, "87d31556", null, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 12, n23?.sharedData);
              const n26 = _createSharedDataComponentWithFallback(_component_up_title, "87d307d0", null, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 13, n26?.sharedData);
              const n29 = _createSharedDataComponentWithFallback(_component_up_title, "87d2ffc6", null, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 14, n29?.sharedData);
              const n33 = _createSharedDataComponentWithFallback(_component_up_title, "87d2539e", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 15, n33?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n38.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n39.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const title = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  title as default
};
//# sourceMappingURL=title.js.map
