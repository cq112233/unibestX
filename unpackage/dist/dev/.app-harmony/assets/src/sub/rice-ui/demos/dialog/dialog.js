import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/rice-ui/components/rice-dialog/rice-dialog.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import "../../../../store/index.js";
import { u as useAppStore } from "../../../../store/app.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/rice-loading.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
import "../../../../../uni_modules/rice-ui/libs/utils/basic.js";
import "../../../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "../../../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "../../../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useTouch/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/font.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/conversion.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/utils.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/useLoading.js";
import "../../../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-button/utils.js";
import "../../../../../uni_modules/rice-ui/components/rice-overlay/rice-overlay.js";
import "../../../../../uni_modules/rice-ui/components/rice-overlay/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/type.js";
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
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, unref: _unref, isRef: _isRef, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosDialogDialog";
const { computed } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "d34057ce",
  __className,
  __filename: "src/sub/rice-ui/demos/dialog/dialog.uvue",
  __name: "dialog",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosDialogDialogSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosDialogDialogSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const showDialog1 = ref(false);
    const showDialog2 = ref(false);
    function onConfirm() {
      uni.showToast({
        title: "已确认操作",
        icon: "success"
      });
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_rice_button = __easycom_1;
      const _component_rice_dialog = __easycom_2;
      const n11 = _createSharedDataComponent(_sfc_main$1, "70631b36", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "c7ff6752", {
            title: "Dialog 对话框",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 6, { borderLeftColor: currentTheme.value });
          });
          const _on_click = () => {
            return showDialog1.value = true;
          };
          const n2 = _createSharedDataComponentWithFallback(_component_rice_button, "37eda74c", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            text: "打开确认对话框",
            onClick: () => {
              return _on_click;
            }
          });
          _setSharedData(__sharedData, 2, n2?.sharedData);
          const n3 = _createSharedDataComponentWithFallback(_component_rice_dialog, "37ed9f98", {
            show: () => {
              return _unref(showDialog1);
            },
            "onUpdate:show": () => {
              return (_value) => {
                return _isRef(showDialog1) ? showDialog1.value = _value : null;
              };
            },
            title: "系统提示",
            message: "是否确认退出当前登录状态？",
            "confirm-button-color": () => {
              return currentTheme.value;
            },
            "show-cancel-button": true,
            onConfirm: () => {
              return onConfirm;
            }
          });
          _setSharedData(__sharedData, 3, n3?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 7, { borderLeftColor: currentTheme.value });
          });
          const _on_click1 = () => {
            return showDialog2.value = true;
          };
          const n6 = _createSharedDataComponentWithFallback(_component_rice_button, "37ed818e", {
            type: "success",
            text: "打开圆角对话框",
            onClick: () => {
              return _on_click1;
            }
          });
          _setSharedData(__sharedData, 4, n6?.sharedData);
          const n7 = _createSharedDataComponentWithFallback(_component_rice_dialog, "37ed7a84", {
            show: () => {
              return _unref(showDialog2);
            },
            "onUpdate:show": () => {
              return (_value) => {
                return _isRef(showDialog2) ? showDialog2.value = _value : null;
              };
            },
            title: "恭喜完成",
            message: "恭喜您已成功完成全部设置！",
            "button-theme": "round",
            "confirm-button-color": () => {
              return currentTheme.value;
            },
            "show-cancel-button": false
          });
          _setSharedData(__sharedData, 5, n7?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n11.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  dialog as default
};
//# sourceMappingURL=dialog.js.map
