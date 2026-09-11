import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-tabs/up-tabs.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-badge/badge.js";
import "../../../../utils/systemInfo.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/helper/index.js";
import "../../../../tabbar/helper/store.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
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
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../tabbar/custom/index.js";
import "../../../../utils/toast.js";
import "../../../../components/NavBar/NavBar.js";
import "../../../../utils/pageScroll.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosTabsTabs";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/tabs/tabs.uvue",
  __name: "tabs",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTabsTabsSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTabsTabsSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const currentLong = ref(0);
    const longList = ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "电视剧" }),
      new UTSJSONObject({ name: "综艺" }),
      new UTSJSONObject({ name: "动漫" }),
      new UTSJSONObject({ name: "少儿" }),
      new UTSJSONObject({ name: "纪录片" }),
      new UTSJSONObject({ name: "体育" }),
      new UTSJSONObject({ name: "游戏" }),
      new UTSJSONObject({ name: "音乐" }),
      new UTSJSONObject({ name: "搞笑" }),
      new UTSJSONObject({ name: "科技" }),
      new UTSJSONObject({ name: "美食" })
    ]);
    const currentBase = ref(0);
    const baseList = ref([
      new UTSJSONObject({ name: "关注" }),
      new UTSJSONObject({ name: "推荐" }),
      new UTSJSONObject({ name: "电影" }),
      new UTSJSONObject({ name: "科技" })
    ]);
    const currentBadge = ref(0);
    const badgeList = ref([
      new UTSJSONObject({ name: "关注", badge: new UTSJSONObject({ isDot: true }) }),
      new UTSJSONObject({ name: "推荐", badge: new UTSJSONObject({ value: 5 }) }),
      new UTSJSONObject({ name: "消息", badge: new UTSJSONObject({ value: 99 }) }),
      new UTSJSONObject({ name: "热榜" })
    ]);
    const currentDisabled = ref(0);
    const disabledList = ref([
      new UTSJSONObject({ name: "国内新闻" }),
      new UTSJSONObject({ name: "国际焦点" }),
      new UTSJSONObject({ name: "付费专区", disabled: true }),
      new UTSJSONObject({ name: "数码测评" })
    ]);
    const currentCustom = ref(1);
    const customList = ref([
      new UTSJSONObject({ name: "最新发布" }),
      new UTSJSONObject({ name: "最热推荐" }),
      new UTSJSONObject({ name: "好评排行" }),
      new UTSJSONObject({ name: "折扣特惠" })
    ]);
    const currentEqual = ref(0);
    const equalList = ref([
      new UTSJSONObject({ name: "待付款" }),
      new UTSJSONObject({ name: "待发货" }),
      new UTSJSONObject({ name: "待收货" }),
      new UTSJSONObject({ name: "待评价" })
    ]);
    function onLongChange(item) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/tabs/tabs.uvue:161", "超长Tabs切换:", item);
    }
    function onBaseChange(item) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/tabs/tabs.uvue:165", "基础Tabs切换:", item);
    }
    return () => {
      "raw js";
      const _component_up_tabs = __easycom_0;
      const n27 = _createSharedDataComponent(AppKu, "84297ec6", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "Tabs 标签页", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n26 = _createSharedDataComponent(LayoutComponent, "1fc4e650", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "Tabs 标签页", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_tabs, "1fc4c1bc", {
                current: () => {
                  return currentLong.value;
                },
                "onUpdate:current": () => {
                  return (_value) => {
                    return currentLong.value = _value;
                  };
                },
                list: () => {
                  return longList.value;
                },
                onChange: () => {
                  return onLongChange;
                }
              });
              _setSharedData(__sharedData, 2, n1?.sharedData);
              _renderSharedDataEffect(() => {
                const _currentLong = currentLong.value;
                _setSharedData(__sharedData, 8, _toDisplayString(longList.value[_currentLong].name));
                _setSharedData(__sharedData, 9, _toDisplayString(_currentLong + 1));
              });
              const n7 = _createSharedDataComponentWithFallback(_component_up_tabs, "1393f418", {
                current: () => {
                  return currentBase.value;
                },
                "onUpdate:current": () => {
                  return (_value) => {
                    return currentBase.value = _value;
                  };
                },
                list: () => {
                  return baseList.value;
                },
                onChange: () => {
                  return onBaseChange;
                }
              });
              _setSharedData(__sharedData, 3, n7?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 10, _toDisplayString(baseList.value[currentBase.value].name));
              });
              const n13 = _createSharedDataComponentWithFallback(_component_up_tabs, "139406bc", {
                current: () => {
                  return currentBadge.value;
                },
                "onUpdate:current": () => {
                  return (_value) => {
                    return currentBadge.value = _value;
                  };
                },
                list: () => {
                  return badgeList.value;
                }
              });
              _setSharedData(__sharedData, 4, n13?.sharedData);
              const n16 = _createSharedDataComponentWithFallback(_component_up_tabs, "139411a2", {
                current: () => {
                  return currentDisabled.value;
                },
                "onUpdate:current": () => {
                  return (_value) => {
                    return currentDisabled.value = _value;
                  };
                },
                list: () => {
                  return disabledList.value;
                }
              });
              _setSharedData(__sharedData, 5, n16?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_tabs, "139468f4", {
                current: () => {
                  return currentCustom.value;
                },
                "onUpdate:current": () => {
                  return (_value) => {
                    return currentCustom.value = _value;
                  };
                },
                list: () => {
                  return customList.value;
                },
                "line-color": "#fa3534",
                "line-width": "32px",
                "line-height": "4px",
                "active-style": () => {
                  return { color: "#fa3534", fontWeight: "bold" };
                },
                "inactive-style": () => {
                  return { color: "#909399" };
                }
              });
              _setSharedData(__sharedData, 6, n19?.sharedData);
              const n22 = _createSharedDataComponentWithFallback(_component_up_tabs, "13947ebb", {
                current: () => {
                  return currentEqual.value;
                },
                "onUpdate:current": () => {
                  return (_value) => {
                    return currentEqual.value = _value;
                  };
                },
                list: () => {
                  return equalList.value;
                },
                scrollable: false,
                "line-color": "#19be6b",
                "active-style": () => {
                  return { color: "#19be6b", fontWeight: "bold" };
                }
              });
              _setSharedData(__sharedData, 7, n22?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n26.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n27.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  tabs as default
};
