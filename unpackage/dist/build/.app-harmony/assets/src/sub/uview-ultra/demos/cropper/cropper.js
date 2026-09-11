import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-cropper/up-cropper.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosCropperCropper";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/cropper/cropper.uvue",
  __name: "cropper",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCropperCropperSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCropperCropperSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const croppedPath = ref("");
    const eventLog = ref("");
    const cropperRef = ref(null);
    function onChoose() {
      const cropper2 = cropperRef.value;
      if (cropper2 == null)
        return null;
      cropper2.$callMethod("chooseImage", 0, new UTSJSONObject({}), null);
      eventLog.value = "正在选择图片...";
    }
    function onReset() {
      croppedPath.value = "";
      eventLog.value = "已清空结果";
    }
    function onConfirm(event) {
      const path = event.path;
      croppedPath.value = path == null ? "" : path.toString();
      const len = croppedPath.value.length;
      const prefix = len > 24 ? `${croppedPath.value.substring(0, 24)}...` : croppedPath.value;
      eventLog.value = `confirm => 图片长度 ${len}，前缀 ${prefix}`;
    }
    function onCancel() {
      eventLog.value = "cancel => 已取消裁剪";
    }
    function onError(event) {
      const message = event.message;
      eventLog.value = `error => ${message == null ? "裁剪失败" : message.toString()}`;
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_title = __easycom_0;
      const _component_up_button = __easycom_1;
      const _component_up_cropper = __easycom_2;
      const n24 = _createSharedDataComponent(AppKu, "da84d67e", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-cropper 裁剪", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n23 = _createSharedDataComponent(LayoutComponent, "4ca92fd4", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-cropper 裁剪", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_title, "4ca9120a", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 3, n1?.sharedData);
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 4, _toSharedDataBoolean(croppedPath.value.length > 0));
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedDataAttr(__sharedData, 5, _toSharedDataString(croppedPath.value));
                });
              }, () => {
              }, 261);
              const n9 = _createSharedDataComponentWithFallback(_component_up_button, "5bc17d19", {
                text: "选择图片",
                type: "primary",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onChoose;
                }
              });
              _setSharedData(__sharedData, 6, n9?.sharedData);
              const n10 = _createSharedDataComponentWithFallback(_component_up_button, "5bc180f8", {
                text: "清空结果",
                type: "primary",
                plain: "",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onReset;
                }
              });
              _setSharedData(__sharedData, 7, n10?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 9, _toDisplayString(eventLog.value));
              });
              const n15 = _createSharedDataComponentWithFallback(_component_up_title, "5bc18c16", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 8, n15?.sharedData);
              const n21 = _createSharedDataComponentWithFallback(_component_up_cropper, "5bc197d5", {
                "can-change-size": true,
                onConfirm: () => {
                  return onConfirm;
                },
                onCancel: () => {
                  return onCancel;
                },
                onError: () => {
                  return onError;
                }
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 2, n21?.sharedData);
              _setTemplateRef(n21, cropperRef, null, "cropperRef");
            })
          });
          _setSharedData(__sharedData, 1, n23.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n24.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const cropper = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  cropper as default
};
