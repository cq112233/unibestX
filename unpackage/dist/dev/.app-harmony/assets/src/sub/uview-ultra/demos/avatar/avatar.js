import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-avatar/up-avatar.js";
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
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-text/up-text.js";
import "../../../../../uni_modules/uview-ultra/components/up-link/up-link.js";
import "../../../../../uni_modules/uview-ultra/components/up-link/link.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosAvatarAvatar";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "1dde8880",
  __className,
  __filename: "src/sub/uview-ultra/demos/avatar/avatar.uvue",
  __name: "avatar",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosAvatarAvatarSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosAvatarAvatarSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_avatar = __easycom_1;
      const n26 = _createSharedDataComponent(AppKu, "7aad1313", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n25 = _createSharedDataComponent(LayoutComponent, "4a15617a", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-avatar 头像"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "f896cc68", {
                title: "up-avatar 头像",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_avatar, "f896b6ce", {
                src: "/static/logo.png",
                size: "40",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_avatar, "f896af90", {
                text: "U",
                size: "40",
                "bg-color": "#2979ff",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 4, n3?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_up_avatar, "f8969f1e", {
                src: "/static/logo.png",
                shape: "circle",
                size: "40",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 5, n7?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_avatar, "f8969798", {
                src: "/static/logo.png",
                shape: "square",
                size: "40"
              });
              _setSharedData(__sharedData, 6, n8?.sharedData);
              const n12 = _createSharedDataComponentWithFallback(_component_up_avatar, "1a42f484", {
                src: "/static/logo.png",
                size: "50",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 7, n12?.sharedData);
              const n13 = _createSharedDataComponentWithFallback(_component_up_avatar, "1a42ed70", {
                src: "/static/logo.png",
                size: "40",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 8, n13?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_avatar, "1a42e632", {
                src: "/static/logo.png",
                size: "30",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 9, n14?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_avatar, "1a42d5c0", {
                icon: "level",
                size: "40",
                "bg-color": "#fa3534",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 10, n18?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_avatar, "1a42ce70", {
                icon: "photo",
                size: "40",
                "bg-color": "#ff9900",
                class: "mr-_b10px_B"
              });
              _setSharedData(__sharedData, 11, n19?.sharedData);
              const n20 = _createSharedDataComponentWithFallback(_component_up_avatar, "1a42c6f6", {
                text: "张",
                size: "40",
                "bg-color": "#19be6b"
              });
              _setSharedData(__sharedData, 12, n20?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n25.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n26.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"mr-_b10px_B":{"":{"marginRight":10}}};
const avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  avatar as default
};
//# sourceMappingURL=avatar.js.map
