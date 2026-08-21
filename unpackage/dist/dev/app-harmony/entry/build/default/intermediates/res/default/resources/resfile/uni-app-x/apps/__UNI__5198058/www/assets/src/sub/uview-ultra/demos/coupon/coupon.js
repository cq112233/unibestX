import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-title/up-title.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-coupon/up-coupon.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
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
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosCouponCoupon";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "61cf30b3",
  __className,
  __filename: "src/sub/uview-ultra/demos/coupon/coupon.uvue",
  __name: "coupon",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCouponCouponSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCouponCouponSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const eventLog = ref("点击优惠券查看事件");
    function onClick() {
      eventLog.value = "click => 点击了优惠券";
    }
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_title = __easycom_1;
      const _component_up_coupon = __easycom_2;
      const n37 = _createSharedDataComponent(AppKu, "ed0cb726", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n36 = _createSharedDataComponent(LayoutComponent, "b48a2dae", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-coupon 优惠券"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "11a23ca7", { title: "up-coupon 优惠券" });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_title, "11a24353", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n3 = _createSharedDataComponentWithFallback(_component_up_coupon, "11a24733", {
                amount: "50",
                title: "新人专享优惠券",
                desc: "满 100 元可用",
                time: "有效期至 2026-12-31",
                "action-text": "立即领取",
                onClick: () => {
                  return onClick;
                }
              });
              _setSharedData(__sharedData, 4, n3?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_up_title, "11a25254", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 5, n6?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_up_coupon, "11a2568d", {
                amount: "20",
                title: "信封样式",
                shape: "envelope",
                onClick: () => {
                  return onClick;
                }
              });
              _setSharedData(__sharedData, 6, n7?.sharedData);
              const n8 = _createSharedDataComponentWithFallback(_component_up_coupon, "11a25aca", {
                class: "mt-_b12px_B",
                amount: "30",
                title: "卡片样式",
                desc: "全场通用",
                shape: "card",
                onClick: () => {
                  return onClick;
                }
              });
              _setSharedData(__sharedData, 7, n8?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_title, "22a54221", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 8, n11?.sharedData);
              const n12 = _createSharedDataComponentWithFallback(_component_up_coupon, "22a54643", {
                amount: "10",
                title: "小型",
                size: "small",
                onClick: () => {
                  return onClick;
                }
              });
              _setSharedData(__sharedData, 9, n12?.sharedData);
              const n13 = _createSharedDataComponentWithFallback(_component_up_coupon, "22a54cf0", {
                class: "mt-_b12px_B",
                amount: "10",
                title: "中型",
                size: "medium",
                onClick: () => {
                  return onClick;
                }
              });
              _setSharedData(__sharedData, 10, n13?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_coupon, "22a55185", {
                class: "mt-_b12px_B",
                amount: "10",
                title: "大型",
                size: "large",
                onClick: () => {
                  return onClick;
                }
              });
              _setSharedData(__sharedData, 11, n14?.sharedData);
              const n17 = _createSharedDataComponentWithFallback(_component_up_title, "22a55c2f", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 12, n17?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_up_coupon, "22a5af02", {
                amount: "99",
                title: "已失效优惠券",
                "action-text": "已过期",
                disabled: "",
                onClick: () => {
                  return onClick;
                }
              });
              _setSharedData(__sharedData, 13, n18?.sharedData);
              const n19 = _createSharedDataComponentWithFallback(_component_up_coupon, "22a5b60a", {
                class: "mt-_b12px_B",
                amount: "15",
                title: "自定义背景",
                "bg-color": "#eef7ff",
                "action-text": "去使用",
                onClick: () => {
                  return onClick;
                }
              });
              _setSharedData(__sharedData, 14, n19?.sharedData);
              const n22 = _createSharedDataComponentWithFallback(_component_up_title, "22a5c12a", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 15, n22?.sharedData);
              const n26 = _createSharedDataComponentWithFallback(_component_up_coupon, "22a5c50d", {
                amount: "88",
                title: "大额优惠券",
                desc: "自定义右侧按钮",
                onClick: () => {
                  return onClick;
                }
              }, {
                "action": () => {
                }
              });
              _setSharedData(__sharedData, 16, n26?.sharedData);
              const n29 = _createSharedDataComponentWithFallback(_component_up_title, "22a622a6", { class: "demo-title" }, {
                "default": () => {
                }
              });
              _setSharedData(__sharedData, 17, n29?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 18, _toDisplayString(eventLog.value));
              });
            })
          });
          _setSharedData(__sharedData, 1, n36.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n37.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"mt-_b12px_B":{"":{"marginTop":12}}};
const coupon = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  coupon as default
};
//# sourceMappingURL=coupon.js.map
