import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-calendar/up-calendar.js";
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
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-calendar/header.js";
import "../../../../../uni_modules/uview-ultra/components/up-calendar/month.js";
import "../../../../../uni_modules/lime-dayuts/common/index.js";
import "../../../../../uni_modules/lime-dayuts/utssdk/interface.js";
import "../../../../../uni_modules/lime-dayuts/common/constant.js";
import "../../../../../uni_modules/lime-dayuts/common/utils.js";
import "../../../../../uni_modules/lime-dayuts/common/use.js";
import "../../../../../uni_modules/lime-dayuts/common/locale/en/index.js";
import "../../../../../uni_modules/lime-dayuts/common/locale/zh-cn/index.js";
import "../../../../../uni_modules/uview-ultra/components/up-calendar/types.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "calendar",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
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
      uni.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:62", "single", e);
      calendarShow1.value = false;
    }
    function onConfirm2(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:66", "multiple", e);
      calendarShow2.value = false;
    }
    function onConfirm3(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:70", "range", e);
      calendarShow3.value = false;
    }
    function onConfirm4(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/calendar/calendar.uvue:74", "custom color", e);
      calendarShow4.value = false;
    }
    const __returned__ = { calendarShow1, calendarShow2, calendarShow3, calendarShow4, showCalendar1, showCalendar2, showCalendar3, showCalendar4, onConfirm1, onConfirm2, onConfirm3, onConfirm4, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"demo-block":{"":{"marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#ffffff","borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"demo-label":{"":{"fontSize":14,"fontWeight":"bold","color":"#606266","marginBottom":10,"paddingLeft":4,"borderLeftWidth":3,"borderLeftStyle":"solid","borderLeftColor":"#2979ff"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"pb-_b30px_B":{"":{"paddingBottom":30}},"p-_b16px_B":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"padding":16}},"flex-row":{"":{"flexDirection":"row"}},"items-center":{"":{"alignItems":"center"}},"mt-_b12px_B":{"":{"marginTop":12}},"min-h-screen":{"":{"minHeight":"100vh"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_button = resolveEasycom(__resolveDynamicComponent("up-button"), __easycom_2);
  const _component_up_calendar = resolveEasycom(__resolveDynamicComponent("up-calendar"), __easycom_2$1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-calendar 日历"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }, [
            _createVNode(_component_NavBar, {
              title: "up-calendar 日历",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            _createElementVNode("view", { class: "p-_b16px_B" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "基础用法"),
                _createElementVNode("view", { class: "flex-row items-center" }, [
                  _createVNode(_component_up_button, {
                    type: "primary",
                    text: "单选模式",
                    size: "mini",
                    onClick: $setup.showCalendar1
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "多选模式"),
                _createElementVNode("view", { class: "flex-row items-center" }, [
                  _createVNode(_component_up_button, {
                    type: "success",
                    text: "多选日期",
                    size: "mini",
                    onClick: $setup.showCalendar2
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "范围选择"),
                _createElementVNode("view", { class: "flex-row items-center" }, [
                  _createVNode(_component_up_button, {
                    type: "warning",
                    text: "范围选择",
                    size: "mini",
                    onClick: $setup.showCalendar3
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "自定义主题颜色"),
                _createElementVNode("view", { class: "flex-row items-center" }, [
                  _createVNode(_component_up_button, {
                    type: "error",
                    text: "自定义颜色",
                    size: "mini",
                    onClick: $setup.showCalendar4
                  })
                ])
              ])
            ]),
            _createVNode(_component_up_calendar, {
              show: $setup.calendarShow1,
              mode: "single",
              onConfirm: $setup.onConfirm1,
              onClose: _cache[0] || (_cache[0] = ($event) => $setup.calendarShow1 = false)
            }, null, 8, ["show"]),
            _createVNode(_component_up_calendar, {
              show: $setup.calendarShow2,
              mode: "multiple",
              onConfirm: $setup.onConfirm2,
              onClose: _cache[1] || (_cache[1] = ($event) => $setup.calendarShow2 = false)
            }, null, 8, ["show"]),
            _createVNode(_component_up_calendar, {
              show: $setup.calendarShow3,
              mode: "range",
              onConfirm: $setup.onConfirm3,
              onClose: _cache[2] || (_cache[2] = ($event) => $setup.calendarShow3 = false)
            }, null, 8, ["show"]),
            _createVNode(_component_up_calendar, {
              show: $setup.calendarShow4,
              mode: "single",
              color: "#fa3534",
              onConfirm: $setup.onConfirm4,
              onClose: _cache[3] || (_cache[3] = ($event) => $setup.calendarShow4 = false)
            }, null, 8, ["show"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/calendar/calendar.uvue"]]);
export {
  calendar as default
};
//# sourceMappingURL=calendar.js.map
