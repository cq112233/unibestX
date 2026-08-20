import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-collapse/up-collapse.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../../../uni_modules/uview-ultra/components/up-cell/cell.js";
import "../../../../../uni_modules/uview-ultra/components/up-collapse/collapse.js";
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
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosCollapseCollapse";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "3f517ba4",
  __className,
  __filename: "src/sub/uview-ultra/demos/collapse/collapse.uvue",
  __name: "collapse",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCollapseCollapseSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCollapseCollapseSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const collapseValue = ref("1");
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_collapse_item = __easycom_1;
      const _component_up_collapse = __easycom_2;
      const n16 = _createSharedDataComponent(AppKu, "59d01b7b", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n15 = _createSharedDataComponent(LayoutComponent, "3f99584a", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-collapse 折叠面板"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "26372838", {
                title: "up-collapse 折叠面板",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_collapse, "2637329b", {
                value: () => {
                  return collapseValue.value;
                },
                accordion: true
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n3 = _createSharedDataComponentWithFallback(_component_up_collapse_item, "2637335a", {
                    title: "第一项",
                    name: "1"
                  }, {
                    "default": () => {
                    }
                  });
                  _setSharedData(__sharedData, 4, n3?.sharedData);
                  const n5 = _createSharedDataComponentWithFallback(_component_up_collapse_item, "26373a80", {
                    title: "第二项",
                    name: "2"
                  }, {
                    "default": () => {
                    }
                  });
                  _setSharedData(__sharedData, 5, n5?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n6?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_collapse, "26374582", { value: ["1"] }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n10 = _createSharedDataComponentWithFallback(_component_up_collapse_item, "263745fd", {
                    title: "第一项",
                    name: "1",
                    icon: "star"
                  }, {
                    "default": () => {
                    }
                  });
                  _setSharedData(__sharedData, 7, n10?.sharedData);
                })
              });
              _setSharedData(__sharedData, 6, n11?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n15.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n16.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const collapse = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  collapse as default
};
//# sourceMappingURL=collapse.js.map
