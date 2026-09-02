import Card from '../../basic/components/Card.uvue';
import { dayuts } from '@/uni_modules/lime-dayuts';
import { computed, onMounted, onUnmounted, ref } from 'vue';

// 实时时间状态

const __sfc__ = defineComponent({
  __name: 'TimeDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const currentFullTime = ref('');
let timerId = 0;

// 偏移时间计算
const offsetDays = ref(0);

// 实时时钟更新
function updateClock() {
  currentFullTime.value = dayuts().format('YYYY-MM-DD HH:mm:ss.SSS dddd');
}

// 偏移量调节
function adjustOffset(days: number) {
  offsetDays.value += days;
}

// 计算属性：目标偏移时间
const targetOffsetTime = computed((): string => {
  return dayuts().add(offsetDays.value, 'day').format('YYYY-MM-DD HH:mm:ss');
});

// 计算属性：本月首日
const startOfMonth = computed((): string => {
  return dayuts().startOf('month').format('YYYY-MM-DD');
});

// 计算属性：本月尾日
const endOfMonth = computed((): string => {
  return dayuts().endOf('month').format('YYYY-MM-DD');
});

// 计算属性：是否为闰年
const isLeapYear = computed((): boolean => {
  return dayuts().isLeapYear();
});

// 计算属性：距离今年底的天数
const daysToYearEnd = computed((): number => {
  const endOfYear = dayuts().endOf('year');
  const diffVal = endOfYear.diff(dayuts(), 'day');
  return Math.ceil(diffVal);
});

onMounted(() => {
  updateClock();
  timerId = setInterval(() => {
    updateClock();
  }, 100);
});

onUnmounted(() => {
  if (timerId != 0) {
    clearInterval(timerId);
  }
});

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "时间日期操作 (lime-dayuts)" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-dtibgf-2 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5" }), [
        _cE("text", _uM({ class: "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-c3b92s-9" }), "实时高精度时钟 (更新于每一百毫秒)"),
        _cE("text", _uM({
          class: "wtu-110ukgw-a wtu-1oju4iv-7 wtu-i1z22m-b wtu-1mdi86u-c",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(currentFullTime.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "wtu-19je0nn-d wtu-1bwkk92-e" }), " 格式模板: YYYY-MM-DD HH:mm:ss.SSS dddd ")
      ]),
      _cE("view", _uM({ class: "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-dtibgf-2 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5" }), [
        _cE("text", _uM({ class: "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-136pgjf-f" }), "日期偏移操作"),
        _cE("view", _uM({ class: "wtu-av7f06-g wtu-484t6y-h wtu-avfu85-i wtu-136pgjf-f" }), [
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-v9onga-k" }), "当前偏移天数:"),
          _cE("text", _uM({ class: "wtu-1r68wxj-l wtu-1oju4iv-7 wtu-lavu4m-m" }), _tD(offsetDays.value > 0 ? '+' : '') + _tD(offsetDays.value) + " 天", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-av7f06-g wtu-avfu85-i wtu-136pgjf-f" }), [
          _cE("view", _uM({ class: "wtu-1qpd44h-n wtu-1oyi3ms-o" }), [
            _cE("view", _uM({
              class: "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u",
              onClick: () => {adjustOffset(-7)}
            }), [
              _cE("text", _uM({ class: "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7" }), "-7 天")
            ], 8 /* PROPS */, ["onClick"])
          ]),
          _cE("view", _uM({ class: "wtu-1qpd44h-n wtu-1oyi3ms-o" }), [
            _cE("view", _uM({
              class: "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u",
              onClick: () => {adjustOffset(-1)}
            }), [
              _cE("text", _uM({ class: "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7" }), "-1 天")
            ], 8 /* PROPS */, ["onClick"])
          ]),
          _cE("view", _uM({ class: "wtu-1qpd44h-n wtu-1oyi3ms-o" }), [
            _cE("view", _uM({
              class: "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u",
              onClick: () => {adjustOffset(1)}
            }), [
              _cE("text", _uM({ class: "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7" }), "+1 天")
            ], 8 /* PROPS */, ["onClick"])
          ]),
          _cE("view", _uM({ class: "wtu-1qpd44h-n" }), [
            _cE("view", _uM({
              class: "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u",
              onClick: () => {adjustOffset(7)}
            }), [
              _cE("text", _uM({ class: "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7" }), "+7 天")
            ], 8 /* PROPS */, ["onClick"])
          ])
        ]),
        _cE("view", _uM({ class: "wtu-1xfhmhe-w wtu-lhlnxb-x wtu-vpqmae-y" })),
        _cE("view", null, [
          _cE("text", _uM({ class: "wtu-19je0nn-d wtu-1bwkk92-e wtu-c0eg5k-z" }), "计算得到的目标时间:"),
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-1oju4iv-7 wtu-lavu4m-m" }), _tD(targetOffsetTime.value), 1 /* TEXT */)
        ])
      ]),
      _cE("view", _uM({ class: "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5" }), [
        _cE("text", _uM({ class: "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-136pgjf-f" }), "常用日期边界与区间计算"),
        _cE("view", _uM({ class: "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9" }), [
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-v9onga-k" }), "本月第一天"),
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m" }), _tD(startOfMonth.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9" }), [
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-v9onga-k" }), "本月最后一天"),
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m" }), _tD(endOfMonth.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9" }), [
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-v9onga-k" }), "今年天数"),
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m" }), _tD(isLeapYear.value ? '366天 (闰年)' : '365天 (平年)'), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-av7f06-g wtu-avfu85-i" }), [
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-v9onga-k" }), "距离今年底倒计时"),
          _cE("text", _uM({ class: "wtu-2fc1j5-j wtu-1oju4iv-7 wtu-kluce4-11" }), _tD(daysToYearEnd.value) + " 天", 1 /* TEXT */)
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsTimeDemoCardStyles = [_uM([["wtu-4kmwrd-0", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-1jdh43a-1", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["wtu-dtibgf-2", _pS(_uM([["marginBottom", 16]]))], ["wtu-1h5kt0c-3", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-4rnkc-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-11f339e-5", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-1iqtm2m-6", _pS(_uM([["fontSize", 13]]))], ["wtu-1oju4iv-7", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-115tbw1-8", _pS(_uM([["color", "#1e293b"]]))], ["wtu-c3b92s-9", _pS(_uM([["marginBottom", 8]]))], ["wtu-110ukgw-a", _pS(_uM([["fontSize", 24]]))], ["wtu-i1z22m-b", _pS(_uM([["color", "var(--theme-color)"]]))], ["wtu-1mdi86u-c", _pS(_uM([["marginBottom", 6]]))], ["wtu-19je0nn-d", _pS(_uM([["fontSize", 12]]))], ["wtu-1bwkk92-e", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-136pgjf-f", _pS(_uM([["marginBottom", 12]]))], ["wtu-av7f06-g", _pS(_uM([["flexDirection", "row"]]))], ["wtu-484t6y-h", _pS(_uM([["alignItems", "center"]]))], ["wtu-avfu85-i", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-2fc1j5-j", _pS(_uM([["fontSize", 14]]))], ["wtu-v9onga-k", _pS(_uM([["color", "#64748b"]]))], ["wtu-1r68wxj-l", _pS(_uM([["fontSize", 16]]))], ["wtu-lavu4m-m", _pS(_uM([["color", "#334155"]]))], ["wtu-1qpd44h-n", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1oyi3ms-o", _pS(_uM([["marginRight", 8]]))], ["wtu-173zvjd-p", _pS(_uM([["width", "100%"]]))], ["wtu-t2tdnc-q", _pS(_uM([["height", 36]]))], ["wtu-1qs4qj6-r", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["wtu-16xqvqb-s", _pS(_uM([["backgroundColor", "#e0edff"]]))], ["wtu-1jd3mn7-t", _pS(_uM([["display", "flex"]]))], ["wtu-7vso4e-u", _pS(_uM([["justifyContent", "center"]]))], ["wtu-ee1xhe-v", _pS(_uM([["color", "#3b82f6"]]))], ["wtu-1xfhmhe-w", _pS(_uM([["height", 1]]))], ["wtu-lhlnxb-x", _pS(_uM([["backgroundColor", "#e2e8f0"]]))], ["wtu-vpqmae-y", _pS(_uM([["marginTop", 10], ["marginBottom", 10]]))], ["wtu-c0eg5k-z", _pS(_uM([["marginBottom", 4]]))], ["wtu-quefir-10", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-kluce4-11", _pS(_uM([["color", "#f43f5e"]]))]])]
