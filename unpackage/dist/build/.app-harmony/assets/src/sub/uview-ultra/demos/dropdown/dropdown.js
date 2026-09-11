import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-dropdown/up-dropdown.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-cell/up-cell.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../../../uni_modules/uview-ultra/components/up-cell/cell.js";
import "../../../../../uni_modules/uview-ultra/components/up-cell-group/up-cell-group.js";
import "../../../../../uni_modules/uview-ultra/components/up-cell-group/cellGroup.js";
import "../../../../../uni_modules/uview-ultra/components/up-dropdown-item/dropdown-item.js";
import "../../../../../uni_modules/uview-ultra/components/up-dropdown/types.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosDropdownDropdown";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/dropdown/dropdown.uvue",
  __name: "dropdown",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosDropdownDropdownSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosDropdownDropdownSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const value1 = ref(1);
    const value2 = ref(2);
    const value3 = ref(1);
    const value4 = ref(2);
    const options1 = ref([
      new UTSJSONObject({ label: "默认", value: 1 }),
      new UTSJSONObject({ label: "最新", value: 2 }),
      new UTSJSONObject({ label: "最热", value: 3 })
    ]);
    const options2 = ref([
      new UTSJSONObject({ label: "默认排序", value: 1 }),
      new UTSJSONObject({ label: "距离优先", value: 2 }),
      new UTSJSONObject({ label: "价格优先", value: 3 })
    ]);
    const options3 = ref([
      new UTSJSONObject({ label: "全部", value: 1 }),
      new UTSJSONObject({ label: "中餐", value: 2 }),
      new UTSJSONObject({ label: "西餐", value: 3 })
    ]);
    return () => {
      "raw js";
      const _component_up_dropdown_item = __easycom_0;
      const _component_up_dropdown = __easycom_1;
      const n13 = _createSharedDataComponent(AppKu, "2060b37a", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "Dropdown 下拉菜单", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n12 = _createSharedDataComponent(LayoutComponent, "3a7f2118", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "Dropdown 下拉菜单", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n3 = _createSharedDataComponentWithFallback(_component_up_dropdown, "3a7f32ed", null, {
                "default": _withSharedDataVaporCtx(() => {
                  const n1 = _createSharedDataComponentWithFallback(_component_up_dropdown_item, "3a7f3344", {
                    modelValue: () => {
                      return value1.value;
                    },
                    "onUpdate:modelValue": () => {
                      return (_value) => {
                        return value1.value = _value;
                      };
                    },
                    title: "属性",
                    options: () => {
                      return options1.value;
                    }
                  });
                  _setSharedData(__sharedData, 3, n1?.sharedData);
                  const n2 = _createSharedDataComponentWithFallback(_component_up_dropdown_item, "3a7f36ec", {
                    modelValue: () => {
                      return value2.value;
                    },
                    "onUpdate:modelValue": () => {
                      return (_value) => {
                        return value2.value = _value;
                      };
                    },
                    title: "排序",
                    options: () => {
                      return options2.value;
                    }
                  });
                  _setSharedData(__sharedData, 4, n2?.sharedData);
                })
              });
              _setSharedData(__sharedData, 2, n3?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_dropdown, "3a7f3f23", { "active-color": "#fa3534" }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n6 = _createSharedDataComponentWithFallback(_component_up_dropdown_item, "1564e0cb", {
                    modelValue: () => {
                      return value3.value;
                    },
                    "onUpdate:modelValue": () => {
                      return (_value) => {
                        return value3.value = _value;
                      };
                    },
                    title: "排序",
                    options: () => {
                      return options2.value;
                    }
                  });
                  _setSharedData(__sharedData, 6, n6?.sharedData);
                  const n7 = _createSharedDataComponentWithFallback(_component_up_dropdown_item, "1564e473", {
                    modelValue: () => {
                      return value4.value;
                    },
                    "onUpdate:modelValue": () => {
                      return (_value) => {
                        return value4.value = _value;
                      };
                    },
                    title: "筛选",
                    options: () => {
                      return options3.value;
                    }
                  });
                  _setSharedData(__sharedData, 7, n7?.sharedData);
                })
              });
              _setSharedData(__sharedData, 5, n8?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n12.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n13.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const dropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  dropdown as default
};
