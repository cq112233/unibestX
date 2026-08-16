import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/rice-ui/components/rice-back-top/rice-back-top.js";
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
import "../../../../../uni_modules/rice-ui/components/rice-back-top/type.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString, setSharedDataClass: _setSharedDataClass, setSharedDataAttr: _setSharedDataAttr, toSharedDataNumber: _toSharedDataNumber, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosBackTopBackTop";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "37a5c168",
  __className,
  __filename: "src/sub/rice-ui/demos/back-top/back-top.uvue",
  __name: "back-top",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosBackTopBackTopSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosBackTopBackTopSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const currentMode = ref("round");
    const scrollTop = ref(0);
    const targetScrollTop = ref(0);
    function onScroll(e) {
      scrollTop.value = e.detail.scrollTop;
    }
    function scrollToDistance(top) {
      if (top == 0) {
        targetScrollTop.value = targetScrollTop.value == 0 ? 1e-4 : 0;
      } else {
        targetScrollTop.value = top;
      }
    }
    function onBackTopClick() {
      targetScrollTop.value = targetScrollTop.value == 0 ? 1e-4 : 0;
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_rice_back_top = __easycom_1;
      const n30 = _createSharedDataComponent(_sfc_main$1, "fdffc134", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "c1f863b2", {
            title: "BackTop 返回顶部",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _setSharedDataEvent(__sharedData, 4, () => {
            return currentMode.value = "round";
          });
          _setSharedDataEvent(__sharedData, 5, () => {
            return currentMode.value = "half-round";
          });
          _setSharedDataEvent(__sharedData, 6, () => {
            return scrollToDistance(600);
          });
          _setSharedDataEvent(__sharedData, 7, () => {
            return scrollToDistance(0);
          });
          _renderSharedDataEffect(() => {
            const _currentTheme = currentTheme.value;
            const _currentMode = currentMode.value;
            const __borderLeftColor_currentTheme = { borderLeftColor: _currentTheme };
            _setSharedDataStyle(__sharedData, 9, __borderLeftColor_currentTheme);
            _setSharedDataStyle(__sharedData, 10, { color: _currentTheme });
            _setSharedData(__sharedData, 11, _toDisplayString(Math.round(scrollTop.value)));
            _setSharedDataClass(__sharedData, 12, ["px-10px py-4px rounded-4px mr-6px", _currentMode == "round" ? "bg-__334155_" : "bg-__f1f5f9_"]);
            _setSharedDataClass(__sharedData, 13, ["text-12px", _currentMode == "round" ? "text-white" : "text-__64748b_"]);
            _setSharedDataClass(__sharedData, 14, ["px-10px py-4px rounded-4px", _currentMode == "half-round" ? "bg-__334155_" : "bg-__f1f5f9_"]);
            _setSharedDataClass(__sharedData, 15, ["text-12px", _currentMode == "half-round" ? "text-white" : "text-__64748b_"]);
            _setSharedDataStyle(__sharedData, 16, { backgroundColor: _currentTheme });
            _setSharedDataStyle(__sharedData, 17, __borderLeftColor_currentTheme);
            _setSharedDataAttr(__sharedData, 18, _toSharedDataNumber(targetScrollTop.value));
          });
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return 40;
          }, (__sharedData_VFor0, _for_item0) => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData_VFor0, 1, _toDisplayString(_for_item0.value));
            });
            return null;
          }, (__sharedData_VFor0, item) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(item));
          }, 5);
          _setSharedDataEvent(__sharedData, 8, onScroll);
          const n28 = _createSharedDataComponentWithFallback(_component_rice_back_top, "2572bdb0", {
            "disabled-page-scroll": true,
            "scroll-top": () => {
              return scrollTop.value;
            },
            offset: 100,
            mode: () => {
              return currentMode.value;
            },
            "bg-color": () => {
              return currentTheme.value;
            },
            "text-color": "#ffffff",
            text: "顶部",
            onClick: () => {
              return onBackTopClick;
            }
          });
          _setSharedData(__sharedData, 2, n28?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n30.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const backTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  backTop as default
};
//# sourceMappingURL=back-top.js.map
