import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-signature/up-signature.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-slider/up-slider.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosSignatureSignature";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "1c379186",
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
      const _component_NavBar = __easycom_0;
      const _component_up_title = __easycom_1;
      const _component_up_signature = __easycom_2;
      const _component_up_button = __easycom_3;
      const n28 = _createSharedDataComponent(AppKu, "0aa56861", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n27 = _createSharedDataComponent(LayoutComponent, "4a07a3b5", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-signature 签名"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "122658c6", { title: "up-signature 签名" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_title, "12264b40", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 6, n2?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_signature, "122642fc", {
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
              _setSharedData(__sharedData, 7, n3?.sharedData);
              _setTemplateRef(n3, sigRef1, null, "sigRef1");
              const n6 = _createSharedDataComponentWithFallback(_component_up_title, "12262bf6", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 8, n6?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_up_signature, "12261eaa", {
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
              _setSharedData(__sharedData, 9, n7?.sharedData);
              _setTemplateRef(n7, sigRef2, null, "sigRef2");
              const n8 = _createSharedDataComponentWithFallback(_component_up_button, "32a4ed8c", {
                text: "清空",
                type: "primary",
                plain: "",
                size: "small",
                class: "sig-btn",
                onClick: () => {
                  return clearSig2;
                }
              });
              _setSharedData(__sharedData, 10, n8?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_button, "32a4e59c", {
                text: "导出",
                type: "primary",
                size: "small",
                class: "sig-btn",
                onClick: () => {
                  return exportSig2;
                }
              });
              _setSharedData(__sharedData, 11, n9?.sharedData);
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 3, _toSharedDataBoolean(exportPath.value != ""));
              }, () => {
                const n15 = _createSharedDataComponentWithFallback(_component_up_title, "32a4d5e2", { class: "demo-title" }, {
                  "default": () => {
                  }
                });
                _setSharedData(__sharedData, 4, n15?.sharedData);
                _renderSharedDataEffect(() => {
                  return _setSharedDataAttr(__sharedData, 5, _toSharedDataString(exportPath.value));
                });
              });
              const n19 = _createSharedDataComponentWithFallback(_component_up_title, "32a4c010", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 12, n19?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 13, _toDisplayString(eventLog.value));
              });
            })
          });
          _setSharedData(__sharedData, 1, n27.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n28.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const signature = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  signature as default
};
//# sourceMappingURL=signature.js.map
