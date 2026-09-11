import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-signature/up-signature.js";
import { _ as __easycom_1$1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-slider/up-slider.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosSignatureSignature";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/signature/signature.uvue",
  __name: "signature",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSignatureSignatureSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSignatureSignatureSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const bgColor = ref("#ffffff");
    const sigRef1 = ref(null);
    const sigRef2 = ref(null);
    const exportPath = ref("");
    const eventLog = ref("绘制完成后点击工具栏对勾导出，confirm 事件返回图片路径");
    function onConfirm(path) {
      exportPath.value = path;
      eventLog.value = `confirm => ${path}`;
    }
    function onError(msg = null) {
      const text = msg == null ? "unknown" : msg.toString();
      eventLog.value = `error => ${text}`;
    }
    function onClear() {
      eventLog.value = "clear => 已清空";
    }
    function clearSig2() {
      const sig = sigRef2.value;
      if (sig != null) {
        sig.$callMethod("clearCanvas");
        eventLog.value = "clear => 第二块签名已清空";
      }
    }
    function exportSig2() {
      const sig = sigRef2.value;
      if (sig != null) {
        sig.$callMethod("exportSignature");
      }
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_title = __easycom_0;
      const _component_up_signature = __easycom_1;
      const _component_up_button = __easycom_1$1;
      const n27 = _createSharedDataComponent(AppKu, "0aa56861", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-signature 签名", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n26 = _createSharedDataComponent(LayoutComponent, "12265890", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-signature 签名", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_title, "12263ac2", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 5, n1?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_signature, "12262cf4", {
                width: 300,
                height: 200,
                "bg-color": () => {
                  return bgColor.value;
                },
                onConfirm: () => {
                  return onConfirm;
                },
                onError: () => {
                  return onError;
                },
                onClear: () => {
                  return onClear;
                }
              });
              _setSharedData(__sharedData, 6, n2?.sharedData);
              _setTemplateRef(n2, sigRef1, null, "sigRef1");
              const n5 = _createSharedDataComponentWithFallback(_component_up_title, "32a4fb68", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 7, n5?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_signature, "32a4edd2", {
                width: 300,
                height: 160,
                "bg-color": "#fff7e6",
                color: "#ff4d4f",
                thickness: 5,
                "show-toolbar": false,
                onConfirm: () => {
                  return onConfirm;
                },
                onError: () => {
                  return onError;
                }
              });
              _setSharedData(__sharedData, 8, n6?.sharedData);
              _setTemplateRef(n6, sigRef2, null, "sigRef2");
              const n7 = _createSharedDataComponentWithFallback(_component_up_button, "32a4d652", {
                text: "清空",
                type: "primary",
                plain: "",
                size: "small",
                class: "sig-btn",
                onClick: () => {
                  return clearSig2;
                }
              });
              _setSharedData(__sharedData, 9, n7?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_button, "32a4ce8c", {
                text: "导出",
                type: "primary",
                size: "small",
                class: "sig-btn",
                onClick: () => {
                  return exportSig2;
                }
              });
              _setSharedData(__sharedData, 10, n8?.sharedData);
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 2, _toSharedDataBoolean(exportPath.value != ""));
              }, () => {
                const n14 = _createSharedDataComponentWithFallback(_component_up_title, "32a4b948", { class: "demo-title" }, {
                  "default": () => {
                  }
                });
                _setSharedData(__sharedData, 3, n14?.sharedData);
                _renderSharedDataEffect(() => {
                  return _setSharedDataAttr(__sharedData, 4, _toSharedDataString(exportPath.value));
                });
              });
              const n18 = _createSharedDataComponentWithFallback(_component_up_title, "32a4050e", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 11, n18?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 12, _toDisplayString(eventLog.value));
              });
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
const signature = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  signature as default
};
