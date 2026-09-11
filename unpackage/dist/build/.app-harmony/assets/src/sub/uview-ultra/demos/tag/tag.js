import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosTagTag";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
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
      const _component_up_tag = __easycom_0;
      const n32 = _createSharedDataComponent(AppKu, "584b9f21", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-tag 标签", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n31 = _createSharedDataComponent(LayoutComponent, "73e05a5d", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-tag 标签", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_tag, "73e06d1f", {
                text: "标签",
                type: "primary",
                size: "normal",
                class: "mr-_b10px_B mb-_b10px_B"
              });
              _setSharedData(__sharedData, 2, n1?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_tag, "73e070df", {
                text: "成功",
                type: "success",
                size: "normal",
                class: "mr-_b10px_B mb-_b10px_B"
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_tag, "73e0749f", {
                text: "警告",
                type: "warning",
                size: "normal",
                class: "mr-_b10px_B mb-_b10px_B"
              });
              _setSharedData(__sharedData, 4, n3?.sharedData);
              const n4 = _createSharedDataComponentWithFallback(_component_up_tag, "73e0785f", {
                text: "危险",
                type: "error",
                size: "normal",
                class: "mr-_b10px_B mb-_b10px_B"
              });
              _setSharedData(__sharedData, 5, n4?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_tag, "082addf4", {
                text: "镂空",
                type: "primary",
                plain: true,
                size: "normal",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 6, n8?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_tag, "082ae1b6", {
                text: "镂空",
                type: "success",
                plain: true,
                size: "normal",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 7, n9?.sharedData);
              const n13 = _createSharedDataComponentWithFallback(_component_up_tag, "082aed3b", {
                text: "大尺寸",
                size: "large",
                type: "primary",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 8, n13?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_tag, "082af0da", {
                text: "普通",
                size: "normal",
                type: "success",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 9, n14?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_up_tag, "082af1d9", {
                text: "迷你",
                size: "mini",
                type: "warning",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 10, n15?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_tag, "082b4e99", {
                text: "半圆角",
                shape: "circle",
                type: "primary",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 11, n19?.sharedData);
              const n20 = _createSharedDataComponentWithFallback(_component_up_tag, "082b4faf", {
                text: "直角",
                shape: "square",
                type: "primary",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 12, n20?.sharedData);
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 13, _toSharedDataBoolean(showTag.value));
              }, () => {
                const n26 = _createSharedDataComponentWithFallback(_component_up_tag, "082b5d9e", {
                  text: "点击关闭",
                  type: "primary",
                  closable: "",
                  class: "mr-_b10px_B",
                  onClose: () => {
                    return closeTag;
                  }
                });
                _setSharedData(__sharedData, 14, n26?.sharedData);
              });
            })
          });
          _setSharedData(__sharedData, 1, n31.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n32.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"mr-_b10px_B":{"":{"marginRight":10}},"mb-_b10px_B":{"":{"marginBottom":10}}};
const _style_1 = {};
const tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  tag as default
};
