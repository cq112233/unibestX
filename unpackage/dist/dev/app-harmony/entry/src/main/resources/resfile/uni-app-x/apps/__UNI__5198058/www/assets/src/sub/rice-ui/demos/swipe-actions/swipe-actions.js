import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/rice-swipe-actions-item.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/rice-ui/components/rice-swipe-actions/rice-swipe-actions.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "../../../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "../../../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useTouch/index.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../../../uni_modules/rice-ui/libs/utils/basic.js";
import { S as SwipeActionsMenu } from "../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/font.js";
import "../../../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
import { u as useAppStore } from "../../../../store/app.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-swipe-actions/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-swipe-actions/type.js";
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
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosSwipeActionsSwipeActions";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "c57e2d2e",
  __className,
  __filename: "src/sub/rice-ui/demos/swipe-actions/swipe-actions.uvue",
  __name: "swipe-actions",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosSwipeActionsSwipeActionsSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosSwipeActionsSwipeActionsSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const leftOptions = computed(() => {
      return [
        new SwipeActionsMenu({
          icon: null,
          iconSize: null,
          disabled: null,
          text: "已读",
          style: new UTSJSONObject({
            backgroundColor: "#10b981",
            color: "#ffffff"
          })
        })
      ];
    });
    const rightOptions = computed(() => {
      return [
        new SwipeActionsMenu({
          icon: null,
          iconSize: null,
          disabled: null,
          text: "收藏",
          style: new UTSJSONObject({
            backgroundColor: currentTheme.value,
            color: "#ffffff"
          })
        }),
        new SwipeActionsMenu({
          icon: null,
          iconSize: null,
          disabled: null,
          text: "删除",
          style: new UTSJSONObject({
            backgroundColor: "#f56c6c",
            color: "#ffffff"
          })
        })
      ];
    });
    function onClickAction(e) {
      if (e.position == "cell") {
        return null;
      }
      uni.showToast({
        title: `点击了${e.position == "left" ? "左侧" : "右侧"}第 ${e.index + 1} 个操作`,
        icon: "none"
      });
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_rice_swipe_actions_item = __easycom_1;
      const _component_rice_swipe_actions = __easycom_2;
      const n26 = _createSharedDataComponent(_sfc_main$1, "3c4959ec", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "4ce1e461", {
            title: "SwipeActions 滑动单元格",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 7, { borderLeftColor: currentTheme.value });
          });
          const n14 = _createSharedDataComponentWithFallback(_component_rice_swipe_actions, "4f5a95cb", null, {
            "default": _withSharedDataVaporCtx(() => {
              const n7 = _createSharedDataComponentWithFallback(_component_rice_swipe_actions_item, "4f5a98b4", {
                "right-menu": () => {
                  return rightOptions.value;
                },
                onClick: () => {
                  return onClickAction;
                }
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 3, n7?.sharedData);
              const n13 = _createSharedDataComponentWithFallback(_component_rice_swipe_actions_item, "c811bff0", {
                "right-menu": () => {
                  return rightOptions.value;
                },
                onClick: () => {
                  return onClickAction;
                }
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 4, n13?.sharedData);
            })
          });
          _setSharedData(__sharedData, 2, n14?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 8, { borderLeftColor: currentTheme.value });
          });
          const n22 = _createSharedDataComponentWithFallback(_component_rice_swipe_actions, "c8118b26", null, {
            "default": _withSharedDataVaporCtx(() => {
              const n21 = _createSharedDataComponentWithFallback(_component_rice_swipe_actions_item, "c8118a6a", {
                "left-menu": () => {
                  return leftOptions.value;
                },
                "right-menu": () => {
                  return rightOptions.value;
                },
                onClick: () => {
                  return onClickAction;
                }
              }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 6, n21?.sharedData);
            })
          });
          _setSharedData(__sharedData, 5, n22?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n26.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const swipeActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  swipeActions as default
};
//# sourceMappingURL=swipe-actions.js.map
