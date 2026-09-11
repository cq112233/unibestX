import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_calendar from '@/uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'calendar',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

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

function onConfirm1(e: string[]) {
  console.log('single', e);
  calendarShow1.value = false;
}
function onConfirm2(e: string[]) {
  console.log('multiple', e);
  calendarShow2.value = false;
}
function onConfirm3(e: string[]) {
  console.log('range', e);
  calendarShow3.value = false;
}
function onConfirm4(e: string[]) {
  console.log('custom color', e);
  calendarShow4.value = false;
}

return (): any | null => {

const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_calendar = resolveEasyComponent("up-calendar",_easycom_up_calendar)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'up-calendar 日历','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'up-calendar 日历','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "primary",
                    text: "单选模式",
                    size: "mini",
                    onClick: showCalendar1
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "多选模式"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "success",
                    text: "多选日期",
                    size: "mini",
                    onClick: showCalendar2
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "范围选择"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "warning",
                    text: "范围选择",
                    size: "mini",
                    onClick: showCalendar3
                  }))
                ])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border demo-block mt-_b12px_B" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "自定义主题颜色"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center" }), [
                  _cV(_component_up_button, _uM({
                    type: "error",
                    text: "自定义颜色",
                    size: "mini",
                    onClick: showCalendar4
                  }))
                ])
              ])
            ]),
            _cV(_component_up_calendar, _uM({
              show: calendarShow1.value,
              mode: "single",
              onConfirm: onConfirm1,
              onClose: () => {calendarShow1.value = false}
            }), null, 8 /* PROPS */, ["show", "onClose"]),
            _cV(_component_up_calendar, _uM({
              show: calendarShow2.value,
              mode: "multiple",
              onConfirm: onConfirm2,
              onClose: () => {calendarShow2.value = false}
            }), null, 8 /* PROPS */, ["show", "onClose"]),
            _cV(_component_up_calendar, _uM({
              show: calendarShow3.value,
              mode: "range",
              onConfirm: onConfirm3,
              onClose: () => {calendarShow3.value = false}
            }), null, 8 /* PROPS */, ["show", "onClose"]),
            _cV(_component_up_calendar, _uM({
              show: calendarShow4.value,
              mode: "single",
              color: "#fa3534",
              onConfirm: onConfirm4,
              onClose: () => {calendarShow4.value = false}
            }), null, 8 /* PROPS */, ["show", "onClose"])
          ])
        ]),
        _: 1 /* STABLE */
      }))
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcSubUviewUltraDemosCalendarCalendarStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
