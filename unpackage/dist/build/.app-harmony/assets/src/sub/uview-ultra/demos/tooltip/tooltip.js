import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
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
const __className = "GenSrcSubUviewUltraDemosTooltipTooltip";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/tooltip/tooltip.uvue",
  __name: "tooltip",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosTooltipTooltipSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosTooltipTooltipSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const tooltipButtons = ref(["编辑", "删除"]);
    const multiButtons = ref(["转发", "收藏", "删除"]);
    function handleBtnClick(index) {
      uni.showToast({
        title: `点击了第 ${index} 个按钮`,
        icon: "none"
      });
    }
    return () => {
      "raw js";
      const _component_up_tooltip = __easycom_0;
      const _component_up_button = __easycom_1;
      const n34 = _createSharedDataComponent(AppKu, "2c37d7fe", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-tooltip 长按提示", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n33 = _createSharedDataComponent(LayoutComponent, "012f1758", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-tooltip 长按提示", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_tooltip, "012f2dc3", {
                text: "长按此处复制文本",
                direction: "top"
              });
              _setSharedData(__sharedData, 2, n1?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_tooltip, "012f348b", {
                text: "长按显示操作",
                direction: "top",
                "show-copy": false,
                buttons: () => {
                  return tooltipButtons.value;
                },
                onClick: () => {
                  return handleBtnClick;
                }
              });
              _setSharedData(__sharedData, 3, n3?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_tooltip, "24b3be2e", {
                text: "长按文本，上方提示",
                direction: "top"
              });
              _setSharedData(__sharedData, 4, n8?.sharedData);
              const n10 = _createSharedDataComponentWithFallback(_component_up_tooltip, "24b3c4f7", {
                text: "长按文本，下方提示",
                direction: "bottom"
              });
              _setSharedData(__sharedData, 5, n10?.sharedData);
              const n15 = _createSharedDataComponentWithFallback(_component_up_tooltip, "24b3d0b4", {
                text: "长按文本，显示背景色",
                "bg-color": "#d1fae5",
                direction: "top"
              });
              _setSharedData(__sharedData, 6, n15?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_tooltip, "24b42b11", {
                text: "显示多个扩展按钮",
                "show-copy": true,
                buttons: () => {
                  return multiButtons.value;
                },
                onClick: () => {
                  return handleBtnClick;
                }
              });
              _setSharedData(__sharedData, 7, n19?.sharedData);
              const n24 = _createSharedDataComponentWithFallback(_component_up_tooltip, "24b43cfc", {
                "show-copy": false,
                buttons: ["设置", "赞"],
                direction: "top",
                onClick: () => {
                  return handleBtnClick;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n23 = _createSharedDataComponentWithFallback(_component_up_button, "24b440db", {
                    type: "primary",
                    size: "small",
                    text: "点击/长按触发"
                  });
                  _setSharedData(__sharedData, 9, n23?.sharedData);
                })
              });
              _setSharedData(__sharedData, 8, n24?.sharedData);
              const n27 = _createSharedDataComponentWithFallback(_component_up_tooltip, "24b447fa", {
                "show-copy": true,
                buttons: ["自定义操作"],
                direction: "bottom",
                onClick: () => {
                  return handleBtnClick;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n26 = _createSharedDataComponentWithFallback(_component_up_button, "24b49aae", {
                    type: "warning",
                    size: "small",
                    text: "下方弹出"
                  });
                  _setSharedData(__sharedData, 11, n26?.sharedData);
                })
              });
              _setSharedData(__sharedData, 10, n27?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n33.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n34.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  tooltip as default
};
