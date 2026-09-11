import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
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
const __className = "GenSrcSubUviewUltraDemosLoadingIconLoadingIcon";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/loading-icon/loading-icon.uvue",
  __name: "loading-icon",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosLoadingIconLoadingIconSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosLoadingIconLoadingIconSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const loadingShow = ref(true);
    return () => {
      "raw js";
      const _component_up_loading_icon = __easycom_0;
      const _component_up_button = __easycom_1;
      const n60 = _createSharedDataComponent(AppKu, "282c037e", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "LoadingIcon 加载图标", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n59 = _createSharedDataComponent(LayoutComponent, "cd391cce", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "LoadingIcon 加载图标", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "cd38f73c", { class: "mr-_b20px_B my-_b10px_B" });
              _setSharedData(__sharedData, 2, n1?.sharedData);
              const n5 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "cd38e0b4", {
                mode: "circle",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 3, n5?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9eabeb0", {
                mode: "semicircle",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 4, n6?.sharedData);
              const n10 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9eaa298", {
                size: "16",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 5, n10?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9eaa098", {
                size: "24",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 6, n11?.sharedData);
              const n12 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9ea9958", {
                size: "40",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 7, n12?.sharedData);
              const n13 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9ea9218", {
                size: "60",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 8, n13?.sharedData);
              const n17 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9ea7b50", {
                color: "#2979ff",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 9, n17?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e9d630", {
                color: "#19be6b",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 10, n18?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e9cee4", {
                color: "#fa3534",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 11, n19?.sharedData);
              const n20 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e9c798", {
                color: "#ff9900",
                mode: "circle",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 12, n20?.sharedData);
              const n24 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e9ab14", {
                text: "加载中...",
                class: "mr-_b24px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 13, n24?.sharedData);
              const n25 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e9a8e2", {
                text: "正在提交",
                color: "#2979ff",
                class: "mr-_b24px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 14, n25?.sharedData);
              const n26 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e9a154", {
                text: "请求失败",
                color: "#fa3534",
                mode: "circle",
                class: "mr-_b24px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 15, n26?.sharedData);
              const n30 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e8e6dc", {
                vertical: "",
                text: "加载中",
                class: "mr-_b30px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 16, n30?.sharedData);
              const n31 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e8df5e", {
                vertical: "",
                text: "请稍候",
                color: "#19be6b",
                mode: "circle",
                class: "mr-_b30px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 17, n31?.sharedData);
              const n32 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e8d726", {
                vertical: "",
                text: "拼命加载中",
                color: "#ff9900",
                size: "36",
                class: "mr-_b30px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 18, n32?.sharedData);
              const n36 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e8ba4a", {
                text: "大号文字",
                "text-size": "20",
                "text-color": "#2979ff",
                class: "mr-_b24px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 19, n36?.sharedData);
              const n37 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e8b216", {
                text: "小号文字",
                "text-size": "12",
                "text-color": "#909193",
                class: "mr-_b24px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 20, n37?.sharedData);
              const n41 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e7f720", {
                mode: "circle",
                color: "#fa3534",
                "inactive-color": "#fbd6d8",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 21, n41?.sharedData);
              const n42 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e7eede", {
                mode: "circle",
                color: "#2979ff",
                "inactive-color": "#d4e2fd",
                class: "mr-_b20px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 22, n42?.sharedData);
              const n46 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e7d15c", {
                duration: "600",
                text: "快 600",
                class: "mr-_b24px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 23, n46?.sharedData);
              const n47 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e7c9ce", {
                duration: "1200",
                text: "标准 1200",
                class: "mr-_b24px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 24, n47?.sharedData);
              const n48 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e7c210", {
                duration: "2400",
                text: "慢 2400",
                class: "mr-_b24px_B my-_b10px_B"
              });
              _setSharedData(__sharedData, 25, n48?.sharedData);
              const n52 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "d9e70cea", {
                show: () => {
                  return loadingShow.value;
                },
                text: "切换下方按钮查看效果",
                color: "#2979ff"
              });
              _setSharedData(__sharedData, 26, n52?.sharedData);
              const _on_click = () => {
                return loadingShow.value = !loadingShow.value;
              };
              const n54 = _createSharedDataComponentWithFallback(_component_up_button, "d9e6fea6", {
                type: "primary",
                size: "mini",
                text: () => {
                  return loadingShow.value ? "隐藏加载动画" : "显示加载动画";
                },
                onClick: () => {
                  return _on_click;
                }
              });
              _setSharedData(__sharedData, 27, n54?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n59.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n60.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"mr-_b20px_B":{"":{"marginRight":20}},"my-_b10px_B":{"":{"marginBlock":10}},"mr-_b24px_B":{"":{"marginRight":24}},"mr-_b30px_B":{"":{"marginRight":30}}};
const _style_1 = {};
const loadingIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  loadingIcon as default
};
