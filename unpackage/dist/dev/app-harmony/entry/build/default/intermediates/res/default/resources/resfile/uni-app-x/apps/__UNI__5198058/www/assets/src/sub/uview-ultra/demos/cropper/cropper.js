import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_3$1 } from "../../../../../uni_modules/uview-ultra/components/up-cropper/up-cropper.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
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
const __className = "GenSrcSubUviewUltraDemosCropperCropper";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "7dd46f82",
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
      const _component_NavBar = __easycom_0;
      const _component_up_title = __easycom_1;
      const _component_up_button = __easycom_3;
      const _component_up_cropper = __easycom_3$1;
      const n25 = _createSharedDataComponent(AppKu, "da84d67e", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n24 = _createSharedDataComponent(LayoutComponent, "7615f956", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-cropper 裁剪"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "4ca9300a", { title: "up-cropper 裁剪" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_title, "4ca922b2", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 4, n2?.sharedData);
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 5, _toSharedDataBoolean(croppedPath.value.length > 0));
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedDataAttr(__sharedData, 6, _toSharedDataString(croppedPath.value));
                });
              }, () => {
              }, 261);
              const n10 = _createSharedDataComponentWithFallback(_component_up_button, "4ca902fa", {
                text: "选择图片",
                type: "primary",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onChoose;
                }
              });
              _setSharedData(__sharedData, 7, n10?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_button, "4ca8fb3c", {
                text: "清空结果",
                type: "primary",
                plain: "",
                size: "small",
                class: "demo-btn",
                onClick: () => {
                  return onReset;
                }
              });
              _setSharedData(__sharedData, 8, n11?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 10, _toDisplayString(eventLog.value));
              });
              const n16 = _createSharedDataComponentWithFallback(_component_up_title, "5bc17d55", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 9, n16?.sharedData);
              const n22 = _createSharedDataComponentWithFallback(_component_up_cropper, "5bc188b5", {
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
              _setSharedData(__sharedData, 3, n22?.sharedData);
              _setTemplateRef(n22, cropperRef, null, "cropperRef");
            })
          });
          _setSharedData(__sharedData, 1, n24.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n25.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const cropper = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  cropper as default
};
//# sourceMappingURL=cropper.js.map
