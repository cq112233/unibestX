import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_0$1 } from "../../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/rice-ui/components/rice-badge/rice-badge.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import "../../../../store/index.js";
import { u as useAppStore } from "../../../../store/app.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
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
import "../../../../../uni_modules/rice-ui/components/rice-badge/type.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosBadgeBadge";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "99118184",
  __className,
  __filename: "src/sub/rice-ui/demos/badge/badge.uvue",
  __name: "badge",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosBadgeBadgeSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosBadgeBadgeSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_rice_icon = __easycom_0$1;
      const _component_rice_badge = __easycom_2;
      const n22 = _createSharedDataComponent(_sfc_main$1, "2174d8f4", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "0d2643f2", {
            title: "Badge 徽标",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 12, { borderLeftColor: currentTheme.value });
          });
          const n4 = _createSharedDataComponentWithFallback(_component_rice_badge, "342ed40d", { value: 5 }, {
            "default": _withSharedDataVaporCtx(() => {
              const n2 = _createSharedDataComponentWithFallback(_component_rice_icon, "342ed847", {
                name: "chat",
                size: "24px",
                color: "#475569"
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
            })
          });
          _setSharedData(__sharedData, 2, n4?.sharedData);
          const n7 = _createSharedDataComponentWithFallback(_component_rice_badge, "342edc25", {
            value: 99,
            max: "99"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n5 = _createSharedDataComponentWithFallback(_component_rice_icon, "342ee309", {
                name: "volume",
                size: "24px",
                color: "#475569"
              });
              _setSharedData(__sharedData, 5, n5?.sharedData);
            })
          });
          _setSharedData(__sharedData, 4, n7?.sharedData);
          const n10 = _createSharedDataComponentWithFallback(_component_rice_badge, "342ee6e9", { "is-dot": true }, {
            "default": _withSharedDataVaporCtx(() => {
              const n8 = _createSharedDataComponentWithFallback(_component_rice_icon, "51aa4906", {
                name: "user",
                size: "24px",
                color: "#475569"
              });
              _setSharedData(__sharedData, 7, n8?.sharedData);
            })
          });
          _setSharedData(__sharedData, 6, n10?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 13, { borderLeftColor: currentTheme.value });
          });
          const n14 = _createSharedDataComponentWithFallback(_component_rice_badge, "51aa5775", {
            value: "HOT",
            type: "error",
            single: true
          });
          _setSharedData(__sharedData, 8, n14?.sharedData);
          const n15 = _createSharedDataComponentWithFallback(_component_rice_badge, "51aa5849", {
            value: "NEW",
            type: "success",
            single: true
          });
          _setSharedData(__sharedData, 9, n15?.sharedData);
          const n16 = _createSharedDataComponentWithFallback(_component_rice_badge, "51aa5b95", {
            value: "VIP",
            type: "warning",
            single: true
          });
          _setSharedData(__sharedData, 10, n16?.sharedData);
          const n17 = _createSharedDataComponentWithFallback(_component_rice_badge, "51aa5ef6", {
            value: 12,
            color: () => {
              return currentTheme.value;
            },
            single: true
          });
          _setSharedData(__sharedData, 11, n17?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n22.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  badge as default
};
//# sourceMappingURL=badge.js.map
