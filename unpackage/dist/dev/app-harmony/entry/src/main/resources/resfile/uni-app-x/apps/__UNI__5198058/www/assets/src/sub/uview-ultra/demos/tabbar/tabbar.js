import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-tabbar/up-tabbar.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-badge/up-badge.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
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
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosTabbarTabbar";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "7070c1e0",
  __className,
  __filename: "src/sub/uview-ultra/demos/tabbar/tabbar.uvue",
  __name: "tabbar",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTabbarTabbarSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTabbarTabbarSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const value1 = ref(0);
    const value2 = ref(0);
    const value3 = ref(0);
    function change1(index = null) {
      value1.value = parseInt(index.toString());
    }
    function change2(index = null) {
      value2.value = parseInt(index.toString());
    }
    function change3(index = null) {
      value3.value = parseInt(index.toString());
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_tabbar_item = __easycom_1;
      const _component_up_tabbar = __easycom_2;
      const n23 = _createSharedDataComponent(_sfc_main$1, "c6e98246", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n22 = _createSharedDataComponent(LayoutComponent, "1646c68e", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-tabbar 底部导航"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "b2920a08", {
                title: "Tabbar 底部导航",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_tabbar, "b291facc", {
                value: () => {
                  return value1.value;
                },
                fixed: false,
                "safe-area-inset-bottom": false,
                onChange: () => {
                  return change1;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n2 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291f344", {
                    text: "首页",
                    icon: "home"
                  });
                  _setSharedData(__sharedData, 4, n2?.sharedData);
                  const n3 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291ec84", {
                    text: "放映厅",
                    icon: "photo"
                  });
                  _setSharedData(__sharedData, 5, n3?.sharedData);
                  const n4 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291e5c0", {
                    text: "直播",
                    icon: "play-right"
                  });
                  _setSharedData(__sharedData, 6, n4?.sharedData);
                  const n5 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291e40a", {
                    text: "我的",
                    icon: "account"
                  });
                  _setSharedData(__sharedData, 7, n5?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n6?.sharedData);
              const n12 = _createSharedDataComponentWithFallback(_component_up_tabbar, "b291d540", {
                value: () => {
                  return value2.value;
                },
                fixed: false,
                "safe-area-inset-bottom": false,
                onChange: () => {
                  return change2;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n9 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "b291cdb8", {
                    text: "首页",
                    icon: "home",
                    badge: "5"
                  });
                  _setSharedData(__sharedData, 9, n9?.sharedData);
                  const n10 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "30284a34", {
                    text: "消息",
                    icon: "chat",
                    dot: true
                  });
                  _setSharedData(__sharedData, 10, n10?.sharedData);
                  const n11 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "30284db5", {
                    text: "我的",
                    icon: "account"
                  });
                  _setSharedData(__sharedData, 11, n11?.sharedData);
                })
              });
              _setSharedData(__sharedData, 8, n12?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_tabbar, "30285517", {
                value: () => {
                  return value3.value;
                },
                fixed: false,
                "safe-area-inset-bottom": false,
                "active-color": "#fa3534",
                "inactive-color": "#909399",
                onChange: () => {
                  return change3;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n15 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "30285974", {
                    text: "发现",
                    icon: "search"
                  });
                  _setSharedData(__sharedData, 13, n15?.sharedData);
                  const n16 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "30285cd6", {
                    text: "购物车",
                    icon: "shopping-cart"
                  });
                  _setSharedData(__sharedData, 14, n16?.sharedData);
                  const n17 = _createSharedDataComponentWithFallback(_component_up_tabbar_item, "30286040", {
                    text: "我的",
                    icon: "account"
                  });
                  _setSharedData(__sharedData, 15, n17?.sharedData);
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
const tabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  tabbar as default
};
//# sourceMappingURL=tabbar.js.map
