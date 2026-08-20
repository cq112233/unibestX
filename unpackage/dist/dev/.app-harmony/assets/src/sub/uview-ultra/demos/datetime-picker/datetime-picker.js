import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-input/up-input.js";
import "../../../../../uni_modules/uview-ultra/components/up-input/input.js";
import "../../../../../uni_modules/uview-ultra/components/up-picker/up-picker.js";
import "../../../../../uni_modules/uview-ultra/components/up-toolbar/up-toolbar.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../../../uni_modules/lime-dayuts/common/index.js";
import "../../../../../uni_modules/lime-dayuts/utssdk/interface.js";
import "../../../../../uni_modules/lime-dayuts/common/constant.js";
import "../../../../../uni_modules/lime-dayuts/common/utils.js";
import "../../../../../uni_modules/lime-dayuts/common/use.js";
import "../../../../../uni_modules/lime-dayuts/common/locale/en/index.js";
import "../../../../../uni_modules/lime-dayuts/common/locale/zh-cn/index.js";
import "../../../../../uni_modules/uview-ultra/components/up-datetime-picker/datetimePicker.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "datetime-picker",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const dtShow1 = ref(false);
    const dtShow2 = ref(false);
    const dtShow3 = ref(false);
    const dtShow4 = ref(false);
    const dtShowMinMaxDate = ref(false);
    const dtShowMinMaxTime = ref(false);
    const dtShowStart = ref(false);
    const dtShowEnd = ref(false);
    const dtValue1 = ref(Date.parse("2026-08-10 08:30:00"));
    const dtValue2 = ref(Date.parse("2026-08-10 00:00:00"));
    const dtValue3 = ref(Date.parse("2026-08-10 00:00:00"));
    const dtValue4 = ref("08:30");
    const limitMinDate = Date.parse("2026-08-01 00:00:00");
    const limitMaxDate = Date.parse("2026-08-31 00:00:00");
    const dtValueMinMaxDate = ref(Date.parse("2026-08-10 00:00:00"));
    const dtValueMinMaxTime = ref("09:30");
    const dtValueStart = ref(Date.parse("2026-08-10 00:00:00"));
    const dtValueEnd = ref(Date.parse("2026-08-20 00:00:00"));
    function formatDate(timestamp) {
      const d = new Date(timestamp);
      const year = d.getFullYear();
      const month = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
      const date = (d.getDate() < 10 ? "0" : "") + d.getDate();
      const hours = (d.getHours() < 10 ? "0" : "") + d.getHours();
      const minutes = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
      return `${year}-${month}-${date} ${hours}:${minutes}`;
    }
    function formatDateOnly(timestamp) {
      const d = new Date(timestamp);
      const year = d.getFullYear();
      const month = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
      const date = (d.getDate() < 10 ? "0" : "") + d.getDate();
      return `${year}-${month}-${date}`;
    }
    function formatYearMonth(timestamp) {
      const d = new Date(timestamp);
      const year = d.getFullYear();
      const month = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
      return `${year}-${month}`;
    }
    function onConfirm1(e) {
      const val = e["value"];
      if (val != null) {
        dtValue1.value = val;
      }
      dtShow1.value = false;
    }
    function onConfirm2(e) {
      const val = e["value"];
      if (val != null) {
        dtValue2.value = val;
      }
      dtShow2.value = false;
    }
    function onConfirm3(e) {
      const val = e["value"];
      if (val != null) {
        dtValue3.value = val;
      }
      dtShow3.value = false;
    }
    function onConfirm4(e) {
      const val = e["value"];
      if (val != null) {
        dtValue4.value = val.toString();
      }
      dtShow4.value = false;
    }
    function onConfirmMinMaxDate(e) {
      const val = e["value"];
      if (val != null) {
        dtValueMinMaxDate.value = val;
      }
      dtShowMinMaxDate.value = false;
    }
    function onConfirmMinMaxTime(e) {
      const val = e["value"];
      if (val != null) {
        dtValueMinMaxTime.value = val.toString();
      }
      dtShowMinMaxTime.value = false;
    }
    function onConfirmStart(e) {
      const val = e["value"];
      if (val != null) {
        dtValueStart.value = val;
      }
      dtShowStart.value = false;
    }
    function onConfirmEnd(e) {
      const val = e["value"];
      if (val != null) {
        dtValueEnd.value = val;
      }
      dtShowEnd.value = false;
    }
    const __returned__ = { dtShow1, dtShow2, dtShow3, dtShow4, dtShowMinMaxDate, dtShowMinMaxTime, dtShowStart, dtShowEnd, dtValue1, dtValue2, dtValue3, dtValue4, limitMinDate, limitMaxDate, dtValueMinMaxDate, dtValueMinMaxTime, dtValueStart, dtValueEnd, formatDate, formatDateOnly, formatYearMonth, onConfirm1, onConfirm2, onConfirm3, onConfirm4, onConfirmMinMaxDate, onConfirmMinMaxTime, onConfirmStart, onConfirmEnd, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"demo-block":{"":{"marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#ffffff","borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"demo-label":{"":{"fontSize":14,"fontWeight":"bold","color":"#606266","marginBottom":10,"paddingLeft":4,"borderLeftWidth":3,"borderLeftStyle":"solid","borderLeftColor":"#2979ff"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"pb-_b30px_B":{"":{"paddingBottom":30}},"p-_b16px_B":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"padding":16}},"flex-row":{"":{"flexDirection":"row"}},"items-center":{"":{"alignItems":"center"}},"justify-between":{"":{"justifyContent":"space-between"}},"text-_b13px_B":{"":{"fontSize":13}},"text-gray-500":{"":{"color":"var(--color-gray-500)"}},"mt-_b12px_B":{"":{"marginTop":12}},"mb-_b8px_B":{"":{"marginBottom":8}},"text-gray-700":{"":{"color":"var(--color-gray-700)"}},"ml-_b10px_B":{"":{"marginLeft":10}},"min-h-screen":{"":{"minHeight":"100vh"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_button = resolveEasycom(__resolveDynamicComponent("up-button"), __easycom_2);
  const _component_up_datetime_picker = resolveEasycom(__resolveDynamicComponent("up-datetime-picker"), __easycom_2$1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-datetime-picker 时间选择"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }, [
            _createVNode(_component_NavBar, {
              title: "up-datetime-picker 时间选择",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            _createElementVNode("view", { class: "p-_b16px_B" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "完整时间"),
                _createElementVNode("view", { class: "flex-row items-center justify-between" }, [
                  _createVNode(_component_up_button, {
                    type: "primary",
                    text: "年月日时分",
                    size: "mini",
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.dtShow1 = true)
                  }),
                  _createElementVNode(
                    "text",
                    { class: "text-_b13px_B text-gray-500" },
                    _toDisplayString($setup.formatDate($setup.dtValue1)),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "仅选日期"),
                _createElementVNode("view", { class: "flex-row items-center justify-between" }, [
                  _createVNode(_component_up_button, {
                    type: "success",
                    text: "年月日",
                    size: "mini",
                    onClick: _cache[1] || (_cache[1] = ($event) => $setup.dtShow2 = true)
                  }),
                  _createElementVNode(
                    "text",
                    { class: "text-_b13px_B text-gray-500" },
                    _toDisplayString($setup.formatDateOnly($setup.dtValue2)),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "年月选择"),
                _createElementVNode("view", { class: "flex-row items-center justify-between" }, [
                  _createVNode(_component_up_button, {
                    type: "warning",
                    text: "年月",
                    size: "mini",
                    onClick: _cache[2] || (_cache[2] = ($event) => $setup.dtShow3 = true)
                  }),
                  _createElementVNode(
                    "text",
                    { class: "text-_b13px_B text-gray-500" },
                    _toDisplayString($setup.formatYearMonth($setup.dtValue3)),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "仅选时间"),
                _createElementVNode("view", { class: "flex-row items-center justify-between" }, [
                  _createVNode(_component_up_button, {
                    type: "error",
                    text: "时分",
                    size: "mini",
                    onClick: _cache[3] || (_cache[3] = ($event) => $setup.dtShow4 = true)
                  }),
                  _createElementVNode(
                    "text",
                    { class: "text-_b13px_B text-gray-500" },
                    _toDisplayString($setup.dtValue4),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "限制最大最小日期 (2026-08-01 ~ 2026-08-31)"),
                _createElementVNode("view", { class: "flex-row items-center justify-between" }, [
                  _createVNode(_component_up_button, {
                    type: "primary",
                    text: "选择当月日期",
                    size: "mini",
                    onClick: _cache[4] || (_cache[4] = ($event) => $setup.dtShowMinMaxDate = true)
                  }),
                  _createElementVNode(
                    "text",
                    { class: "text-_b13px_B text-gray-500" },
                    _toDisplayString($setup.formatDateOnly($setup.dtValueMinMaxDate)),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "限制工作时间 (09:00 ~ 18:00)"),
                _createElementVNode("view", { class: "flex-row items-center justify-between" }, [
                  _createVNode(_component_up_button, {
                    type: "warning",
                    text: "选择时分范围",
                    size: "mini",
                    onClick: _cache[5] || (_cache[5] = ($event) => $setup.dtShowMinMaxTime = true)
                  }),
                  _createElementVNode(
                    "text",
                    { class: "text-_b13px_B text-gray-500" },
                    _toDisplayString($setup.dtValueMinMaxTime),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "开始与结束时间联动 (结束不早于开始)"),
                _createElementVNode("view", { class: "flex-row items-center justify-between mb-_b8px_B" }, [
                  _createElementVNode("text", { class: "text-_b13px_B text-gray-700" }, "开始日期："),
                  _createElementVNode("view", { class: "flex-row items-center" }, [
                    _createVNode(_component_up_button, {
                      type: "primary",
                      text: "选择开始",
                      size: "mini",
                      onClick: _cache[6] || (_cache[6] = ($event) => $setup.dtShowStart = true)
                    }),
                    _createElementVNode(
                      "text",
                      { class: "ml-_b10px_B text-_b13px_B text-gray-500" },
                      _toDisplayString($setup.formatDateOnly($setup.dtValueStart)),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                _createElementVNode("view", { class: "flex-row items-center justify-between" }, [
                  _createElementVNode("text", { class: "text-_b13px_B text-gray-700" }, "结束日期："),
                  _createElementVNode("view", { class: "flex-row items-center" }, [
                    _createVNode(_component_up_button, {
                      type: "success",
                      text: "选择结束",
                      size: "mini",
                      onClick: _cache[7] || (_cache[7] = ($event) => $setup.dtShowEnd = true)
                    }),
                    _createElementVNode(
                      "text",
                      { class: "ml-_b10px_B text-_b13px_B text-gray-500" },
                      _toDisplayString($setup.formatDateOnly($setup.dtValueEnd)),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ]),
            _createVNode(_component_up_datetime_picker, {
              modelValue: $setup.dtValue1,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.dtValue1 = $event),
              show: $setup.dtShow1,
              mode: "datetime",
              onConfirm: $setup.onConfirm1,
              onCancel: _cache[9] || (_cache[9] = ($event) => $setup.dtShow1 = false)
            }, null, 8, ["modelValue", "show"]),
            _createVNode(_component_up_datetime_picker, {
              modelValue: $setup.dtValue2,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.dtValue2 = $event),
              show: $setup.dtShow2,
              mode: "date",
              onConfirm: $setup.onConfirm2,
              onCancel: _cache[11] || (_cache[11] = ($event) => $setup.dtShow2 = false)
            }, null, 8, ["modelValue", "show"]),
            _createVNode(_component_up_datetime_picker, {
              modelValue: $setup.dtValue3,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.dtValue3 = $event),
              show: $setup.dtShow3,
              mode: "year-month",
              onConfirm: $setup.onConfirm3,
              onCancel: _cache[13] || (_cache[13] = ($event) => $setup.dtShow3 = false)
            }, null, 8, ["modelValue", "show"]),
            _createVNode(_component_up_datetime_picker, {
              modelValue: $setup.dtValue4,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.dtValue4 = $event),
              show: $setup.dtShow4,
              mode: "time",
              onConfirm: $setup.onConfirm4,
              onCancel: _cache[15] || (_cache[15] = ($event) => $setup.dtShow4 = false)
            }, null, 8, ["modelValue", "show"]),
            _createVNode(_component_up_datetime_picker, {
              modelValue: $setup.dtValueMinMaxDate,
              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.dtValueMinMaxDate = $event),
              show: $setup.dtShowMinMaxDate,
              mode: "date",
              "min-date": $setup.limitMinDate,
              "max-date": $setup.limitMaxDate,
              onConfirm: $setup.onConfirmMinMaxDate,
              onCancel: _cache[17] || (_cache[17] = ($event) => $setup.dtShowMinMaxDate = false)
            }, null, 8, ["modelValue", "show", "min-date", "max-date"]),
            _createVNode(_component_up_datetime_picker, {
              modelValue: $setup.dtValueMinMaxTime,
              "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.dtValueMinMaxTime = $event),
              show: $setup.dtShowMinMaxTime,
              mode: "time",
              "min-hour": 9,
              "max-hour": 18,
              onConfirm: $setup.onConfirmMinMaxTime,
              onCancel: _cache[19] || (_cache[19] = ($event) => $setup.dtShowMinMaxTime = false)
            }, null, 8, ["modelValue", "show"]),
            _createVNode(_component_up_datetime_picker, {
              modelValue: $setup.dtValueStart,
              "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.dtValueStart = $event),
              show: $setup.dtShowStart,
              mode: "date",
              "max-date": $setup.dtValueEnd,
              onConfirm: $setup.onConfirmStart,
              onCancel: _cache[21] || (_cache[21] = ($event) => $setup.dtShowStart = false)
            }, null, 8, ["modelValue", "show", "max-date"]),
            _createVNode(_component_up_datetime_picker, {
              modelValue: $setup.dtValueEnd,
              "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $setup.dtValueEnd = $event),
              show: $setup.dtShowEnd,
              mode: "date",
              "min-date": $setup.dtValueStart,
              onConfirm: $setup.onConfirmEnd,
              onCancel: _cache[23] || (_cache[23] = ($event) => $setup.dtShowEnd = false)
            }, null, 8, ["modelValue", "show", "min-date"])
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
const datetimePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/datetime-picker/datetime-picker.uvue"]]);
export {
  datetimePicker as default
};
//# sourceMappingURL=datetime-picker.js.map
