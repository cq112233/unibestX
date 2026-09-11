import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_14 } from "../../../../../uni_modules/uview-ultra/components/up-calendar/up-calendar.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-calendar/header.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-calendar/month.js";
import "../../../../../uni_modules/lime-dayuts/common/index.js";
import "../../../../../uni_modules/lime-dayuts/utssdk/interface.js";
import "../../../../../uni_modules/lime-dayuts/common/constant.js";
import "../../../../../uni_modules/lime-dayuts/common/utils.js";
import "../../../../../uni_modules/lime-dayuts/common/use.js";
import "../../../../../uni_modules/lime-dayuts/common/locale/en/index.js";
import "../../../../../uni_modules/lime-dayuts/common/locale/zh-cn/index.js";
import "../../../../../uni_modules/uview-ultra/components/up-calendar/types.js";
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
const __className = "GenSrcSubUviewUltraDemosCalendarCalendar";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/calendar/calendar.uvue",
  __name: "calendar",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosCalendarCalendarSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosCalendarCalendarSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const calendarShow1 = ref(false);
    const calendarShow2 = ref(false);
    const calendarShow3 = ref(false);
    const calendarShow4 = ref(false);
    function showCalendar1() {
      calendarShow1.value = true;
    }
    function showCalendar2() {
      calendarShow2.value = true;
    }
    function showCalendar3() {
      calendarShow3.value = true;
    }
    function showCalendar4() {
      calendarShow4.value = true;
    }
    function onConfirm1(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:77", "single", e);
      calendarShow1.value = false;
    }
    function onConfirm2(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:81", "multiple", e);
      calendarShow2.value = false;
    }
    function onConfirm3(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:85", "range", e);
      calendarShow3.value = false;
    }
    function onConfirm4(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:89", "custom color", e);
      calendarShow4.value = false;
    }
    return () => {
      "raw js";
      const _component_up_button = __easycom_1;
      const _component_up_calendar = __easycom_14;
      const n23 = _createSharedDataComponent(AppKu, "5238a91d", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-calendar 日历", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n22 = _createSharedDataComponent(LayoutComponent, "b29a551a", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-calendar 日历", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n1 = _createSharedDataComponentWithFallback(_component_up_button, "b29a2fca", {
                type: "primary",
                text: "单选模式",
                size: "mini",
                onClick: () => {
                  return showCalendar1;
                }
              });
              _setSharedData(__sharedData, 6, n1?.sharedData);
              const n5 = _createSharedDataComponentWithFallback(_component_up_button, "b29a1908", {
                type: "success",
                text: "多选日期",
                size: "mini",
                onClick: () => {
                  return showCalendar2;
                }
              });
              _setSharedData(__sharedData, 7, n5?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_button, "2fa7c279", {
                type: "warning",
                text: "范围选择",
                size: "mini",
                onClick: () => {
                  return showCalendar3;
                }
              });
              _setSharedData(__sharedData, 8, n9?.sharedData);
              const n13 = _createSharedDataComponentWithFallback(_component_up_button, "2fa7cddd", {
                type: "error",
                text: "自定义颜色",
                size: "mini",
                onClick: () => {
                  return showCalendar4;
                }
              });
              _setSharedData(__sharedData, 9, n13?.sharedData);
              const _on_close = () => {
                return calendarShow1.value = false;
              };
              const n17 = _createSharedDataComponentWithFallback(_component_up_calendar, "2fa7d1fc", {
                show: () => {
                  return calendarShow1.value;
                },
                mode: "single",
                onConfirm: () => {
                  return onConfirm1;
                },
                onClose: () => {
                  return _on_close;
                }
              });
              _setSharedData(__sharedData, 2, n17?.sharedData);
              const _on_close1 = () => {
                return calendarShow2.value = false;
              };
              const n18 = _createSharedDataComponentWithFallback(_component_up_calendar, "2fa7d5fc", {
                show: () => {
                  return calendarShow2.value;
                },
                mode: "multiple",
                onConfirm: () => {
                  return onConfirm2;
                },
                onClose: () => {
                  return _on_close1;
                }
              });
              _setSharedData(__sharedData, 3, n18?.sharedData);
              const _on_close2 = () => {
                return calendarShow3.value = false;
              };
              const n19 = _createSharedDataComponentWithFallback(_component_up_calendar, "2fa7d9fe", {
                show: () => {
                  return calendarShow3.value;
                },
                mode: "range",
                onConfirm: () => {
                  return onConfirm3;
                },
                onClose: () => {
                  return _on_close2;
                }
              });
              _setSharedData(__sharedData, 4, n19?.sharedData);
              const _on_close3 = () => {
                return calendarShow4.value = false;
              };
              const n20 = _createSharedDataComponentWithFallback(_component_up_calendar, "2fa82f5d", {
                show: () => {
                  return calendarShow4.value;
                },
                mode: "single",
                color: "#fa3534",
                onConfirm: () => {
                  return onConfirm4;
                },
                onClose: () => {
                  return _on_close3;
                }
              });
              _setSharedData(__sharedData, 5, n20?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n22.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n23.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  calendar as default
};
