import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-th/up-th.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-tr/up-tr.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-td/up-td.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-table/up-table.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../../../uni_modules/uview-ultra/components/up-table/table.js";
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
const __className = "GenSrcSubUviewUltraDemosTableTable";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/table/table.uvue",
  __name: "table",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTableTableSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTableTableSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    return () => {
      "raw js";
      const _component_up_th = __easycom_0;
      const _component_up_tr = __easycom_1;
      const _component_up_td = __easycom_2;
      const _component_up_table = __easycom_3;
      const n30 = _createSharedDataComponent(AppKu, "15f49221", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "Table 表格", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n29 = _createSharedDataComponent(LayoutComponent, "6b188d5c", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "Table 表格", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n13 = _createSharedDataComponentWithFallback(_component_up_table, "6b189f2c", null, {
                "default": _withSharedDataVaporCtx(() => {
                  const n4 = _createSharedDataComponentWithFallback(_component_up_tr, "6b189f6b", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n1 = _createSharedDataComponentWithFallback(_component_up_th, "6b189fa9", { text: "学校" });
                      _setSharedData(__sharedData, 4, n1?.sharedData);
                      const n2 = _createSharedDataComponentWithFallback(_component_up_th, "6b18a023", { text: "班级" });
                      _setSharedData(__sharedData, 5, n2?.sharedData);
                      const n3 = _createSharedDataComponentWithFallback(_component_up_th, "6b18a328", { text: "年龄" });
                      _setSharedData(__sharedData, 6, n3?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 3, n4?.sharedData);
                  const n8 = _createSharedDataComponentWithFallback(_component_up_tr, "6b18a3dd", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n5 = _createSharedDataComponentWithFallback(_component_up_td, "6b18a6a6", { text: "浙江大学" });
                      _setSharedData(__sharedData, 8, n5?.sharedData);
                      const n6 = _createSharedDataComponentWithFallback(_component_up_td, "6b18a722", { text: "二年级" });
                      _setSharedData(__sharedData, 9, n6?.sharedData);
                      const n7 = _createSharedDataComponentWithFallback(_component_up_td, "6b18a788", { text: "22" });
                      _setSharedData(__sharedData, 10, n7?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 7, n8?.sharedData);
                  const n12 = _createSharedDataComponentWithFallback(_component_up_tr, "6b18aac8", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n9 = _createSharedDataComponentWithFallback(_component_up_td, "6b18ab06", { text: "清华大学" });
                      _setSharedData(__sharedData, 12, n9?.sharedData);
                      const n10 = _createSharedDataComponentWithFallback(_component_up_td, "6b18ab82", { text: "05班" });
                      _setSharedData(__sharedData, 13, n10?.sharedData);
                      const n11 = _createSharedDataComponentWithFallback(_component_up_td, "100dffde", { text: "24" });
                      _setSharedData(__sharedData, 14, n11?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 11, n12?.sharedData);
                })
              });
              _setSharedData(__sharedData, 2, n13?.sharedData);
              const n25 = _createSharedDataComponentWithFallback(_component_up_table, "100df0a2", { border: false }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n18 = _createSharedDataComponentWithFallback(_component_up_tr, "100defda", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n16 = _createSharedDataComponentWithFallback(_component_up_th, "100def5e", { text: "名称" });
                      _setSharedData(__sharedData, 17, n16?.sharedData);
                      const n17 = _createSharedDataComponentWithFallback(_component_up_th, "100de954", { text: "类型" });
                      _setSharedData(__sharedData, 18, n17?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 16, n18?.sharedData);
                  const n21 = _createSharedDataComponentWithFallback(_component_up_tr, "100de7ea", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n19 = _createSharedDataComponentWithFallback(_component_up_td, "100de258", { text: "uview-ultra" });
                      _setSharedData(__sharedData, 20, n19?.sharedData);
                      const n20 = _createSharedDataComponentWithFallback(_component_up_td, "100de152", { text: "UI库" });
                      _setSharedData(__sharedData, 21, n20?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 19, n21?.sharedData);
                  const n24 = _createSharedDataComponentWithFallback(_component_up_tr, "100ddad0", null, {
                    "default": _withSharedDataVaporCtx(() => {
                      const n22 = _createSharedDataComponentWithFallback(_component_up_td, "100dda54", { text: "uni-app X" });
                      _setSharedData(__sharedData, 23, n22?.sharedData);
                      const n23 = _createSharedDataComponentWithFallback(_component_up_td, "100dd952", { text: "框架" });
                      _setSharedData(__sharedData, 24, n23?.sharedData);
                    })
                  });
                  _setSharedData(__sharedData, 22, n24?.sharedData);
                })
              });
              _setSharedData(__sharedData, 15, n25?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n29.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n30.sharedData);
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
