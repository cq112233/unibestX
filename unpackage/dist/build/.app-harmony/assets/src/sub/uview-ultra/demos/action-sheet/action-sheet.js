import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_4 } from "../../../../../uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useButton.js";
import "../../../../../uni_modules/uview-ultra/components/up-action-sheet/types.js";
import "../../../../../uni_modules/uview-ultra/components/up-action-sheet/actionSheet.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosActionSheetActionSheet";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue",
  __name: "action-sheet",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosActionSheetActionSheetSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosActionSheetActionSheetSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const actionSheetShow = ref(false);
    const actionSheetShow2 = ref(false);
    const actionSheetShow3 = ref(false);
    const actionList = ref([
      new UTSJSONObject({ name: "拍照" }),
      new UTSJSONObject({ name: "从相册选择" })
    ]);
    const actionListComplex = ref([
      new UTSJSONObject({ name: "着色选项", color: "#ffaa33" }),
      new UTSJSONObject({ name: "禁用选项", disabled: true }),
      new UTSJSONObject({ name: "带副标题选项", subname: "我是副标题" })
    ]);
    function onActionSelect(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue:83", "action select", e);
      actionSheetShow.value = false;
      actionSheetShow2.value = false;
      actionSheetShow3.value = false;
    }
    return () => {
      "raw js";
      const _component_up_button = __easycom_1;
      const _component_up_action_sheet = __easycom_4;
      const n18 = _createSharedDataComponent(AppKu, "038b847e", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-action-sheet 动作面板", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n17 = _createSharedDataComponent(LayoutComponent, "58a1d11d", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-action-sheet 动作面板", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const _on_click = () => {
                return actionSheetShow.value = true;
              };
              const n1 = _createSharedDataComponentWithFallback(_component_up_button, "58a1e3e0", {
                type: "primary",
                text: "弹出面板",
                size: "mini",
                onClick: () => {
                  return _on_click;
                }
              });
              _setSharedData(__sharedData, 5, n1?.sharedData);
              const _on_click1 = () => {
                return actionSheetShow2.value = true;
              };
              const n5 = _createSharedDataComponentWithFallback(_component_up_button, "88cf9f98", {
                type: "success",
                text: "带取消按钮",
                size: "mini",
                onClick: () => {
                  return _on_click1;
                }
              });
              _setSharedData(__sharedData, 6, n5?.sharedData);
              const _on_click2 = () => {
                return actionSheetShow3.value = true;
              };
              const n9 = _createSharedDataComponentWithFallback(_component_up_button, "88cf888e", {
                type: "warning",
                text: "复杂面板",
                size: "mini",
                onClick: () => {
                  return _on_click2;
                }
              });
              _setSharedData(__sharedData, 7, n9?.sharedData);
              const _on_close = () => {
                return actionSheetShow.value = false;
              };
              const n13 = _createSharedDataComponentWithFallback(_component_up_action_sheet, "88cf7fe6", {
                show: () => {
                  return actionSheetShow.value;
                },
                actions: () => {
                  return actionList.value;
                },
                title: "请选择操作",
                onClose: () => {
                  return _on_close;
                },
                onSelect: () => {
                  return onActionSelect;
                }
              });
              _setSharedData(__sharedData, 2, n13?.sharedData);
              const _on_close1 = () => {
                return actionSheetShow2.value = false;
              };
              const n14 = _createSharedDataComponentWithFallback(_component_up_action_sheet, "88cf711a", {
                show: () => {
                  return actionSheetShow2.value;
                },
                actions: () => {
                  return actionList.value;
                },
                title: "请选择操作",
                "cancel-text": "取消",
                onClose: () => {
                  return _on_close1;
                },
                onSelect: () => {
                  return onActionSelect;
                }
              });
              _setSharedData(__sharedData, 3, n14?.sharedData);
              const _on_close2 = () => {
                return actionSheetShow3.value = false;
              };
              const n15 = _createSharedDataComponentWithFallback(_component_up_action_sheet, "88cf619e", {
                show: () => {
                  return actionSheetShow3.value;
                },
                actions: () => {
                  return actionListComplex.value;
                },
                title: "请选择操作",
                description: "这是一段描述信息",
                "cancel-text": "取消",
                onClose: () => {
                  return _on_close2;
                },
                onSelect: () => {
                  return onActionSelect;
                }
              });
              _setSharedData(__sharedData, 4, n15?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n17.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n18.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const actionSheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  actionSheet as default
};
