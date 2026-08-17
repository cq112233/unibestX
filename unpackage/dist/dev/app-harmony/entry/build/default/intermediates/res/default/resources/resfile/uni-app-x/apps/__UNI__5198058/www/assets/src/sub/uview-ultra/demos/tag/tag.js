import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosTagTag";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "5ce37980",
  __className,
  __filename: "src/sub/uview-ultra/demos/tag/tag.uvue",
  __name: "tag",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTagTagSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTagTagSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const showTag = ref(true);
    function closeTag() {
      showTag.value = false;
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_tag = __easycom_1;
      const n33 = _createSharedDataComponent(_sfc_main$1, "584b9f21", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n32 = _createSharedDataComponent(LayoutComponent, "9daf7616", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-tag 标签"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "73e05a3b", {
                title: "up-tag 标签",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_tag, "73e06520", {
                text: "标签",
                type: "primary",
                size: "normal",
                class: "mr-10px mb-10px"
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_tag, "73e068c3", {
                text: "成功",
                type: "success",
                size: "normal",
                class: "mr-10px mb-10px"
              });
              _setSharedData(__sharedData, 4, n3?.sharedData);
              const n4 = _createSharedDataComponentWithFallback(_component_up_tag, "73e06c66", {
                text: "警告",
                type: "warning",
                size: "normal",
                class: "mr-10px mb-10px"
              });
              _setSharedData(__sharedData, 5, n4?.sharedData);
              const n5 = _createSharedDataComponentWithFallback(_component_up_tag, "73e07009", {
                text: "危险",
                type: "error",
                size: "normal",
                class: "mr-10px mb-10px"
              });
              _setSharedData(__sharedData, 6, n5?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_tag, "73e07845", {
                text: "镂空",
                type: "primary",
                plain: true,
                size: "normal",
                class: "mr-10px"
              });
              _setSharedData(__sharedData, 7, n9?.sharedData);
              const n10 = _createSharedDataComponentWithFallback(_component_up_tag, "082ad38c", {
                text: "镂空",
                type: "success",
                plain: true,
                size: "normal",
                class: "mr-10px"
              });
              _setSharedData(__sharedData, 8, n10?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_tag, "082ade70", {
                text: "大尺寸",
                size: "large",
                type: "primary",
                class: "mr-10px"
              });
              _setSharedData(__sharedData, 9, n14?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_up_tag, "082ae1f6", {
                text: "普通",
                size: "normal",
                type: "success",
                class: "mr-10px"
              });
              _setSharedData(__sharedData, 10, n15?.sharedData);
              const n16 = _createSharedDataComponentWithFallback(_component_up_tag, "082ae57c", {
                text: "迷你",
                size: "mini",
                type: "warning",
                class: "mr-10px"
              });
              _setSharedData(__sharedData, 11, n16?.sharedData);
              const n20 = _createSharedDataComponentWithFallback(_component_up_tag, "082aed9b", {
                text: "半圆角",
                shape: "circle",
                type: "primary",
                class: "mr-10px"
              });
              _setSharedData(__sharedData, 12, n20?.sharedData);
              const n21 = _createSharedDataComponentWithFallback(_component_up_tag, "082af138", {
                text: "直角",
                shape: "square",
                type: "primary",
                class: "mr-10px"
              });
              _setSharedData(__sharedData, 13, n21?.sharedData);
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 14, _toSharedDataBoolean(showTag.value));
              }, () => {
                const n27 = _createSharedDataComponentWithFallback(_component_up_tag, "082b4830", {
                  text: "点击关闭",
                  type: "primary",
                  closable: "",
                  class: "mr-10px",
                  onClose: () => {
                    return closeTag;
                  }
                });
                _setSharedData(__sharedData, 15, n27?.sharedData);
              });
            })
          });
          _setSharedData(__sharedData, 1, n32.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n33.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  tag as default
};
//# sourceMappingURL=tag.js.map
