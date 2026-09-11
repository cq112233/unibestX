import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-barcode/up-barcode.js";
import { _ as __easycom_1$1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosBarcodeBarcode";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/barcode/barcode.uvue",
  __name: "barcode",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosBarcodeBarcodeSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosBarcodeBarcodeSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const barcodeValue = ref("123456789012");
    const eventLog = ref("");
    const barcodeRef = ref(null);
    function onRendered(event) {
      const format = event.format;
      eventLog.value = `rendered => format: ${format == null ? "" : format.toString()}`;
    }
    function onError(event) {
      const message = event.message;
      eventLog.value = `error => ${message == null ? "" : message.toString()}`;
    }
    function onRegenerate() {
      const barcode2 = barcodeRef.value;
      if (barcode2 != null) {
        barcode2.$callMethod("generateBarcode");
        eventLog.value = "已调用 generateBarcode()";
      }
    }
    function onChangeValue() {
      barcodeValue.value = barcodeValue.value == "123456789012" ? "987654321098" : "123456789012";
      eventLog.value = `value 已改为 ${barcodeValue.value}`;
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_title = __easycom_0;
      const _component_up_barcode = __easycom_1;
      const _component_up_button = __easycom_1$1;
      const n34 = _createSharedDataComponent(AppKu, "4c772561", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-barcode 条形码", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n33 = _createSharedDataComponent(LayoutComponent, "0b4350b7", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-barcode 条形码", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_title, "0b435f9d", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 2, n1?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_barcode, "0b4366e8", { value: "123456789012" });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_title, "0b436e0c", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 4, n6?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_barcode, "5d26a92d", {
                value: "6922233612192",
                format: "EAN13"
              });
              _setSharedData(__sharedData, 5, n8?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_barcode, "5d26b0cb", {
                value: "UVIEW-ULTRA",
                format: "CODE39"
              });
              _setSharedData(__sharedData, 6, n11?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_barcode, "5d26b851", {
                value: "012345678905",
                format: "UPCA"
              });
              _setSharedData(__sharedData, 7, n14?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_title, "5d26bf99", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 8, n18?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_barcode, "5d26c713", {
                value: "20260820",
                format: "CODE128",
                width: 260,
                height: 90,
                margin: 12,
                background: "#f0f9ff",
                "line-color": "#0957de",
                "text-position": "top",
                "font-size": 12
              });
              _setSharedData(__sharedData, 9, n19?.sharedData);
              const n23 = _createSharedDataComponentWithFallback(_component_up_title, "5d272531", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 10, n23?.sharedData);
              const n24 = _createSharedDataComponentWithFallback(_component_up_barcode, "5d272c92", {
                value: () => {
                  return barcodeValue.value;
                },
                format: "CODE128",
                onRendered: () => {
                  return onRendered;
                },
                onError: () => {
                  return onError;
                }
              });
              _setSharedData(__sharedData, 11, n24?.sharedData);
              _setTemplateRef(n24, barcodeRef, null, "barcodeRef");
              const n26 = _createSharedDataComponentWithFallback(_component_up_button, "5d273795", {
                text: "重新生成",
                type: "primary",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onRegenerate;
                }
              });
              _setSharedData(__sharedData, 12, n26?.sharedData);
              const n27 = _createSharedDataComponentWithFallback(_component_up_button, "5d273b78", {
                text: "换一个值",
                type: "primary",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onChangeValue;
                }
              });
              _setSharedData(__sharedData, 13, n27?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 14, _toDisplayString(eventLog.value));
              });
            })
          });
          _setSharedData(__sharedData, 1, n33.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n34.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const barcode = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  barcode as default
};
