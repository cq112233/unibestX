import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-notify/up-notify.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosNotifyNotify";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "16bd01f8",
  __className,
  __filename: "src/sub/uview-ultra/demos/notify/notify.uvue",
  __name: "notify",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosNotifyNotifySharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosNotifyNotifySharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const uNotify = ref(null);
    function showNotify(type) {
      const notify2 = uNotify.value;
      if (notify2 != null) {
        const msgs = new UTSJSONObject({
          primary: "主要通知消息",
          success: "操作成功通知",
          warning: "请注意安全通知",
          error: "发生错误通知"
        });
        notify2.$callMethod("show", new UTSJSONObject({
          message: msgs[type],
          type
        }));
      }
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_NavBar = __easycom_0;
      const _component_up_button = __easycom_2;
      const _component_up_notify = __easycom_2$1;
      const n17 = _createSharedDataComponent(AppKu, "60fc12f3", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n16 = _createSharedDataComponent(LayoutComponent, "82f3693a", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-notify 消息通知"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "124321ae", {
                title: "up-notify 消息通知",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const _on_click = () => {
                return showNotify("primary");
              };
              const n2 = _createSharedDataComponentWithFallback(_component_up_button, "12432c92", {
                type: "primary",
                text: "主要通知",
                size: "mini",
                onClick: () => {
                  return _on_click;
                }
              });
              _setSharedData(__sharedData, 4, n2?.sharedData);
              const _on_click1 = () => {
                return showNotify("success");
              };
              const n4 = _createSharedDataComponentWithFallback(_component_up_button, "12433376", {
                type: "success",
                text: "成功通知",
                size: "mini",
                onClick: () => {
                  return _on_click1;
                }
              });
              _setSharedData(__sharedData, 5, n4?.sharedData);
              const _on_click2 = () => {
                return showNotify("warning");
              };
              const n8 = _createSharedDataComponentWithFallback(_component_up_button, "12433bba", {
                type: "warning",
                text: "警告通知",
                size: "mini",
                onClick: () => {
                  return _on_click2;
                }
              });
              _setSharedData(__sharedData, 6, n8?.sharedData);
              const _on_click3 = () => {
                return showNotify("error");
              };
              const n10 = _createSharedDataComponentWithFallback(_component_up_button, "3620f5c3", {
                type: "error",
                text: "错误通知",
                size: "mini",
                onClick: () => {
                  return _on_click3;
                }
              });
              _setSharedData(__sharedData, 7, n10?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_notify, "3620f9fc");
              _setSharedData(__sharedData, 3, n14?.sharedData);
              _setTemplateRef(n14, uNotify, null, "uNotify");
            })
          });
          _setSharedData(__sharedData, 1, n16.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n17.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const notify = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  notify as default
};
//# sourceMappingURL=notify.js.map
