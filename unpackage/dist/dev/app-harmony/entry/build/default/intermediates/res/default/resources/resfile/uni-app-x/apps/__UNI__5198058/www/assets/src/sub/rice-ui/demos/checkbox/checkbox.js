import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/rice-ui/components/rice-checkbox/rice-checkbox.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/rice-checkbox-group.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import "../../../../store/index.js";
import { u as useAppStore } from "../../../../store/app.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
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
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
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
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, unref: _unref, isRef: _isRef, withSharedDataVaporCtx: _withSharedDataVaporCtx, toDisplayString: _toDisplayString, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosCheckboxCheckbox";
const { computed } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "7958b08e",
  __className,
  __filename: "src/sub/rice-ui/demos/checkbox/checkbox.uvue",
  __name: "checkbox",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosCheckboxCheckboxSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosCheckboxCheckboxSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const checked1 = ref(true);
    const checked2 = ref(false);
    const checked3 = ref(true);
    const groupValues = ref(["apple"]);
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_rice_checkbox = __easycom_1;
      const _component_rice_checkbox_group = __easycom_2;
      const n26 = _createSharedDataComponent(_sfc_main$1, "b58e41a8", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "01e30721", {
            title: "Checkbox 复选框",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 10, { borderLeftColor: currentTheme.value });
          });
          const n2 = _createSharedDataComponentWithFallback(_component_rice_checkbox, "3a7dce4a", {
            modelValue: () => {
              return _unref(checked1);
            },
            "onUpdate:modelValue": () => {
              return (_value) => {
                return _isRef(checked1) ? checked1.value = _value : null;
              };
            },
            "checked-color": () => {
              return currentTheme.value;
            },
            label: "基础复选框 1"
          });
          _setSharedData(__sharedData, 2, n2?.sharedData);
          const n4 = _createSharedDataComponentWithFallback(_component_rice_checkbox, "3a7dd28d", {
            modelValue: () => {
              return _unref(checked2);
            },
            "onUpdate:modelValue": () => {
              return (_value) => {
                return _isRef(checked2) ? checked2.value = _value : null;
              };
            },
            label: "自定义颜色",
            "checked-color": "#ee0a24"
          });
          _setSharedData(__sharedData, 3, n4?.sharedData);
          const n6 = _createSharedDataComponentWithFallback(_component_rice_checkbox, "3a7dd953", {
            modelValue: () => {
              return _unref(checked3);
            },
            "onUpdate:modelValue": () => {
              return (_value) => {
                return _isRef(checked3) ? checked3.value = _value : null;
              };
            },
            "checked-color": () => {
              return currentTheme.value;
            },
            label: "方形复选框",
            shape: "square"
          });
          _setSharedData(__sharedData, 4, n6?.sharedData);
          const n8 = _createSharedDataComponentWithFallback(_component_rice_checkbox, "3a7ddd93", {
            disabled: true,
            value: true,
            "checked-color": () => {
              return currentTheme.value;
            },
            label: "禁用状态"
          });
          _setSharedData(__sharedData, 5, n8?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 11, { borderLeftColor: currentTheme.value });
          });
          const n19 = _createSharedDataComponentWithFallback(_component_rice_checkbox_group, "153a9726", {
            modelValue: () => {
              return _unref(groupValues);
            },
            "onUpdate:modelValue": () => {
              return (_value) => {
                return _isRef(groupValues) ? groupValues.value = _value : null;
              };
            },
            "checked-color": () => {
              return currentTheme.value;
            }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n13 = _createSharedDataComponentWithFallback(_component_rice_checkbox, "153a9b24", {
                value: "apple",
                label: "苹果 🍎",
                "checked-color": () => {
                  return currentTheme.value;
                }
              });
              _setSharedData(__sharedData, 7, n13?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_rice_checkbox, "153aa1eb", {
                value: "banana",
                label: "香蕉 🍌",
                "checked-color": () => {
                  return currentTheme.value;
                }
              });
              _setSharedData(__sharedData, 8, n15?.sharedData);
              const n17 = _createSharedDataComponentWithFallback(_component_rice_checkbox, "153aa5cc", {
                value: "orange",
                label: "橙子 🍊",
                "checked-color": () => {
                  return currentTheme.value;
                }
              });
              _setSharedData(__sharedData, 9, n17?.sharedData);
            })
          });
          _setSharedData(__sharedData, 6, n19?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 12, _toDisplayString(_unref(groupValues)));
          });
        })
      });
      _setSharedData(__sharedData, 0, n26.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  checkbox as default
};
//# sourceMappingURL=checkbox.js.map
