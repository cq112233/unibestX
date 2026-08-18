import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.js";
import { _ as _sfc_main$2 } from "../../../../../uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.js";
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
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
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
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosSwipeActionSwipeAction";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "4a245dcf",
  __className,
  __filename: "src/sub/uview-ultra/demos/swipe-action/swipe-action.uvue",
  __name: "swipe-action",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwipeActionSwipeActionSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosSwipeActionSwipeActionSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const options1 = ref([
      new UTSJSONObject({
        text: "删除",
        style: new UTSJSONObject({
          backgroundColor: "#f56c6c"
        })
      })
    ]);
    const options2 = ref([
      new UTSJSONObject({
        text: "置顶",
        style: new UTSJSONObject({
          backgroundColor: "#2979ff"
        })
      }),
      new UTSJSONObject({
        text: "删除",
        style: new UTSJSONObject({
          backgroundColor: "#f56c6c"
        })
      })
    ]);
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_swipe_action_item = __easycom_1;
      const _component_up_swipe_action = _sfc_main$2;
      const n14 = _createSharedDataComponent(_sfc_main$1, "a989d93e", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n13 = _createSharedDataComponent(LayoutComponent, "87b14e96", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-swipe-action 滑动操作"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "6e7882ca", {
                title: "SwipeAction 滑动操作",
                "auto-back": true
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n4 = _createSharedDataComponentWithFallback(_component_up_swipe_action, "6e7874b4", null, {
                "default": _withSharedDataVaporCtx(() => {
                  const n3 = _createSharedDataComponentWithFallback(_component_up_swipe_action_item, "6e7873fe", { options: () => {
                    return options1.value;
                  } }, {
                    "default": () => {
                    }
                  });
                  _setSharedData(__sharedData, 4, n3?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n4?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_swipe_action, "6e785d00", null, {
                "default": _withSharedDataVaporCtx(() => {
                  const n8 = _createSharedDataComponentWithFallback(_component_up_swipe_action_item, "6e785734", { options: () => {
                    return options2.value;
                  } }, {
                    "default": () => {
                    }
                  });
                  _setSharedData(__sharedData, 6, n8?.sharedData);
                })
              });
              _setSharedData(__sharedData, 5, n9?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n13.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n14.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const swipeAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  swipeAction as default
};
//# sourceMappingURL=swipe-action.js.map
