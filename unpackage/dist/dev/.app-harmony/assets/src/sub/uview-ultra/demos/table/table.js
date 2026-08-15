import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-th/up-th.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-tr/up-tr.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-td/up-td.js";
import { _ as _sfc_main$3 } from "../../../../../uni_modules/uview-ultra/components/up-table/up-table.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import { _ as _sfc_main$2 } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../../../uni_modules/uview-ultra/components/up-table/table.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
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
const __className = "GenSrcSubUviewUltraDemosTableTable";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "f2db8afc",
  __className,
  __filename: "src/sub/uview-ultra/demos/table/table.uvue",
  __name: "table",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTableTableSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTableTableSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_th = __easycom_1;
      const _component_up_tr = __easycom_2;
      const _component_up_td = __easycom_3;
      const _component_up_table = _sfc_main$3;
      const n46 = _createSharedDataComponent(_sfc_main$1, "15f49221", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n45 = _createSharedDataComponent(_sfc_main$2, "aec49c16", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-table 表格"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "6b188d3d", {
                title: "Table 表格",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n23 = _createSharedDataComponentWithFallback(_component_up_table, "6b1894df", null, {
                "default": _withSharedDataVaporCtx(() => {
                  const n8 = _createSharedDataComponentWithFallback(_component_up_tr, "6b1897a9", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n3 = _createSharedDataComponentWithFallback(_component_up_th, "6b1897e7", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 5, n3?.sharedData);
                      const n5 = _createSharedDataComponentWithFallback(_component_up_th, "6b189844", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 6, n5?.sharedData);
                      const n7 = _createSharedDataComponentWithFallback(_component_up_th, "6b1898a1", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 7, n7?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 4, n8?.sharedData);
                  const n15 = _createSharedDataComponentWithFallback(_component_up_tr, "6b189bc4", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n10 = _createSharedDataComponentWithFallback(_component_up_td, "6b189c02", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 9, n10?.sharedData);
                      const n12 = _createSharedDataComponentWithFallback(_component_up_td, "6b189c61", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 10, n12?.sharedData);
                      const n14 = _createSharedDataComponentWithFallback(_component_up_td, "6b189f4a", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 11, n14?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 8, n15?.sharedData);
                  const n22 = _createSharedDataComponentWithFallback(_component_up_tr, "6b189fe2", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n17 = _createSharedDataComponentWithFallback(_component_up_td, "6b18a020", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 13, n17?.sharedData);
                      const n19 = _createSharedDataComponentWithFallback(_component_up_td, "6b18a30a", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 14, n19?.sharedData);
                      const n21 = _createSharedDataComponentWithFallback(_component_up_td, "6b18a368", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 15, n21?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 12, n22?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n23?.sharedData);
              const n41 = _createSharedDataComponentWithFallback(_component_up_table, "6b18aa86", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n30 = _createSharedDataComponentWithFallback(_component_up_tr, "6b18aaea", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n27 = _createSharedDataComponentWithFallback(_component_up_th, "6b18ab28", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 18, n27?.sharedData);
                      const n29 = _createSharedDataComponentWithFallback(_component_up_th, "6b18ab85", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 19, n29?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 17, n30?.sharedData);
                  const n35 = _createSharedDataComponentWithFallback(_component_up_tr, "100dff9e", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n32 = _createSharedDataComponentWithFallback(_component_up_td, "100dff22", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 21, n32?.sharedData);
                      const n34 = _createSharedDataComponentWithFallback(_component_up_td, "100df916", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 22, n34?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 20, n35?.sharedData);
                  const n40 = _createSharedDataComponentWithFallback(_component_up_tr, "100df7e4", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n37 = _createSharedDataComponentWithFallback(_component_up_td, "100df768", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 24, n37?.sharedData);
                      const n39 = _createSharedDataComponentWithFallback(_component_up_td, "100df18a", null, {
                        "default": _withSharedDataVaporCtx(() => {
                        }, "string")
                      });
                      _setSharedData(__sharedData, 25, n39?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 23, n40?.sharedData);
                })
              });
              _setSharedData(__sharedData, 16, n41?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n45.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n46.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const table = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  table as default
};
//# sourceMappingURL=table.js.map
