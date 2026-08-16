import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
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
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosButtonButton";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "2ff145ed",
  __className,
  __filename: "src/sub/rice-ui/demos/button/button.uvue",
  __name: "button",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosButtonButtonSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosButtonButtonSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_rice_button = __easycom_1;
      const n61 = _createSharedDataComponent(_sfc_main$1, "2435daec", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "628580fa", {
            title: "Button 按钮",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 23, { borderLeftColor: currentTheme.value });
          });
          const n2 = _createSharedDataComponentWithFallback(_component_rice_button, "08eaa20f", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            text: "主要按钮"
          });
          _setSharedData(__sharedData, 2, n2?.sharedData);
          const n4 = _createSharedDataComponentWithFallback(_component_rice_button, "08eaa62b", {
            type: "success",
            text: "成功按钮"
          });
          _setSharedData(__sharedData, 3, n4?.sharedData);
          const n6 = _createSharedDataComponentWithFallback(_component_rice_button, "08eaaa07", {
            type: "warning",
            text: "警告按钮"
          });
          _setSharedData(__sharedData, 4, n6?.sharedData);
          const n8 = _createSharedDataComponentWithFallback(_component_rice_button, "08eaadce", {
            type: "error",
            text: "危险按钮"
          });
          _setSharedData(__sharedData, 5, n8?.sharedData);
          const n10 = _createSharedDataComponentWithFallback(_component_rice_button, "08eab1a8", {
            type: "info",
            text: "信息按钮"
          });
          _setSharedData(__sharedData, 6, n10?.sharedData);
          const n12 = _createSharedDataComponentWithFallback(_component_rice_button, "08eab56c", {
            type: "default",
            text: "默认按钮"
          });
          _setSharedData(__sharedData, 7, n12?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 24, { borderLeftColor: currentTheme.value });
          });
          const n17 = _createSharedDataComponentWithFallback(_component_rice_button, "1468462a", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            text: "朴素主要",
            plain: true
          });
          _setSharedData(__sharedData, 8, n17?.sharedData);
          const n19 = _createSharedDataComponentWithFallback(_component_rice_button, "14684a86", {
            type: "success",
            text: "朴素成功",
            plain: true
          });
          _setSharedData(__sharedData, 9, n19?.sharedData);
          const n21 = _createSharedDataComponentWithFallback(_component_rice_button, "14684e8d", {
            type: "warning",
            text: "朴素警告",
            plain: true
          });
          _setSharedData(__sharedData, 10, n21?.sharedData);
          const n23 = _createSharedDataComponentWithFallback(_component_rice_button, "14685517", {
            type: "error",
            text: "朴素危险",
            plain: true
          });
          _setSharedData(__sharedData, 11, n23?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 25, { borderLeftColor: currentTheme.value });
          });
          const n28 = _createSharedDataComponentWithFallback(_component_rice_button, "1468af8a", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            text: "大号按钮 (large)",
            size: "large"
          });
          _setSharedData(__sharedData, 12, n28?.sharedData);
          const n30 = _createSharedDataComponentWithFallback(_component_rice_button, "1468b3e5", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            text: "普通按钮 (normal)",
            size: "normal"
          });
          _setSharedData(__sharedData, 13, n30?.sharedData);
          const n32 = _createSharedDataComponentWithFallback(_component_rice_button, "1468bb69", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            text: "小型按钮 (small)",
            size: "small"
          });
          _setSharedData(__sharedData, 14, n32?.sharedData);
          const n34 = _createSharedDataComponentWithFallback(_component_rice_button, "1468c20c", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            text: "迷你 (mini)",
            size: "mini"
          });
          _setSharedData(__sharedData, 15, n34?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 26, { borderLeftColor: currentTheme.value });
          });
          const n40 = _createSharedDataComponentWithFallback(_component_rice_button, "1468d0f1", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            icon: "search",
            text: "搜索"
          });
          _setSharedData(__sharedData, 16, n40?.sharedData);
          const n42 = _createSharedDataComponentWithFallback(_component_rice_button, "14692420", {
            type: "success",
            icon: "plus",
            text: "添加"
          });
          _setSharedData(__sharedData, 17, n42?.sharedData);
          const n44 = _createSharedDataComponentWithFallback(_component_rice_button, "14692823", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            loading: true,
            "loading-text": "加载中..."
          });
          _setSharedData(__sharedData, 18, n44?.sharedData);
          const n46 = _createSharedDataComponentWithFallback(_component_rice_button, "14692f0e", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            disabled: true,
            text: "禁用状态"
          });
          _setSharedData(__sharedData, 19, n46?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 27, { borderLeftColor: currentTheme.value });
          });
          const n51 = _createSharedDataComponentWithFallback(_component_rice_button, "14693df0", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            shape: "round",
            text: "圆形按钮"
          });
          _setSharedData(__sharedData, 20, n51?.sharedData);
          const n53 = _createSharedDataComponentWithFallback(_component_rice_button, "1469424c", {
            color: "#7232dd",
            text: "单色按钮"
          });
          _setSharedData(__sharedData, 21, n53?.sharedData);
          const n55 = _createSharedDataComponentWithFallback(_component_rice_button, "14694629", {
            color: "linear-gradient(to right, #ff6034, #ee0a24)",
            text: "渐变按钮"
          });
          _setSharedData(__sharedData, 22, n55?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n61.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  button as default
};
//# sourceMappingURL=button.js.map
