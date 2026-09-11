import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_0$1 } from "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-list/up-list.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { o as onNavbarPullDownRefresh, s as stopNavbarPullDownRefresh } from "../../../../utils/refresh.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataFor: _createSharedDataFor, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosListList";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/list/list.uvue",
  __name: "list",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosListListSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosListListSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
    onNavbarPullDownRefresh(() => {
      setTimeout(() => {
        stopNavbarPullDownRefresh();
      }, 1e3);
    });
    const listItems = ref([
      new UTSJSONObject({ title: "列表 1 - 项目 01", desc: "支持下拉刷新与触底加载" }),
      new UTSJSONObject({ title: "列表 1 - 项目 02", desc: "基于 scroll-view 封装" }),
      new UTSJSONObject({ title: "列表 1 - 项目 03", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 04", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 05", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 06", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 07", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 08", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 09", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 10", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 11", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 12", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 13", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 14", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 15", desc: "支持单指内部滚动" })
    ]);
    const staticListItems = ref([
      new UTSJSONObject({ title: "列表 2 - 项目 01", desc: "静态列表第 1 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 02", desc: "静态列表第 2 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 03", desc: "静态列表第 3 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 04", desc: "静态列表第 4 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 05", desc: "静态列表第 5 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 06", desc: "静态列表第 6 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 07", desc: "静态列表第 7 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 08", desc: "静态列表第 8 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 09", desc: "静态列表第 9 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 10", desc: "静态列表第 10 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 11", desc: "静态列表第 11 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 12", desc: "静态列表第 12 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 13", desc: "静态列表第 13 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 14", desc: "静态列表第 14 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 15", desc: "静态列表第 15 项内容" })
    ]);
    const listLoading = ref(false);
    const listRefreshing = ref(false);
    let listLoadCount = 1;
    function onListLoadMore() {
      if (listLoading.value)
        return null;
      listLoading.value = true;
      setTimeout(() => {
        listLoadCount += 1;
        const newItems = [];
        for (let i = 1; i <= 3; i++) {
          newItems.push(new UTSJSONObject({
            title: `加载项 ${listLoadCount}-${i}`,
            desc: `这是第 ${listLoadCount} 批加载的第 ${i} 条数据`
          }));
        }
        listItems.value = listItems.value.concat(newItems);
        listLoading.value = false;
        uni.showToast({ title: `加载了 ${newItems.length} 条`, icon: "none", duration: 1500 });
      }, 1e3);
    }
    function onListRefresh() {
      listRefreshing.value = true;
      setTimeout(() => {
        listRefreshing.value = false;
        uni.showToast({ title: "刷新完成", icon: "none", duration: 1500 });
      }, 1500);
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_loading_icon = __easycom_0$1;
      const _component_up_list = __easycom_2;
      const n29 = _createSharedDataComponent(AppKu, "6921ca46", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-list 双列表嵌套", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n28 = _createSharedDataComponent(LayoutComponent, "a7d8519c", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-list 双列表嵌套", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n14 = _createSharedDataComponentWithFallback(_component_up_list, "a7d81eb4", {
                height: 580,
                "lower-threshold": 20,
                "refresher-enabled": true,
                "refresher-triggered": () => {
                  return listRefreshing.value;
                },
                class: "bg-white rounded-_b8px_B shadow-xs",
                onScrolltolower: () => {
                  return onListLoadMore;
                },
                onRefresherrefresh: () => {
                  return onListRefresh;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
                    return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
                  })), () => {
                    return listItems.value;
                  }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                    const n3 = _createSharedDataComponentWithFallback(_component_up_icon, "53320e0a-" + _for_key0.value, {
                      name: "account",
                      size: "20",
                      color: "#ffffff"
                    });
                    _setSharedData(__sharedData_VFor0, 1, n3?.sharedData);
                    _renderSharedDataEffect(() => {
                      const _item = _for_item0.value;
                      _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_item.title));
                      _setSharedData(__sharedData_VFor0, 3, _toDisplayString(_item.desc));
                    });
                    return null;
                  }, (__sharedData_VFor0, item, idx) => {
                    return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(idx));
                  }, 32);
                  _createSharedDataIf(() => {
                    return _setSharedData(__sharedData, 4, _toSharedDataBoolean(listLoading.value));
                  }, () => {
                    const n11 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "5331e7c8", {
                      mode: "circle",
                      size: "20"
                    });
                    _setSharedData(__sharedData, 5, n11?.sharedData);
                  }, null, 129);
                })
              });
              _setSharedData(__sharedData, 2, n14?.sharedData);
              const n24 = _createSharedDataComponentWithFallback(_component_up_list, "533123e0", {
                height: 280,
                class: "bg-white rounded-_b8px_B shadow-xs"
              }, {
                "default": () => {
                  _createSharedDataFor(_setSharedDataScoped(__sharedData, 7, _createSharedDataVFor(__sharedDataScope, () => {
                    return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                  })), () => {
                    return staticListItems.value;
                  }, (__sharedData_VFor1, _for_item1, _for_key1) => {
                    _renderSharedDataEffect(() => {
                      const _item = _for_item1.value;
                      _setSharedData(__sharedData_VFor1, 1, _toDisplayString(_item.title));
                      _setSharedData(__sharedData_VFor1, 2, _toDisplayString(_item.desc));
                    });
                    return null;
                  }, (__sharedData_VFor1, item, idx) => {
                    return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(idx));
                  }, 32);
                }
              });
              _setSharedData(__sharedData, 6, n24?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n28.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n29.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"bg-white":{"":{"backgroundColor":"var(--color-white)"}},"rounded-_b8px_B":{"":{"borderRadius":8}},"shadow-xs":{"":{"-TwShadow":"0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,0.05))","boxShadow":"var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"}}};
const _style_1 = {};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  list as default
};
