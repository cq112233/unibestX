import Card from './Card.uvue'
import { dayuts } from '@/uni_modules/lime-dayuts'
import { computed, onMounted, onUnmounted, ref } from 'vue'

// 实时时间状态

const __sfc__ = defineComponent({
  __name: 'TimeDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const currentFullTime = ref('')
let timerId = 0

// 偏移时间计算
const offsetDays = ref(0)

// 实时时钟更新
function updateClock() {
  currentFullTime.value = dayuts().format('YYYY-MM-DD HH:mm:ss.SSS dddd')
}

// 偏移量调节
function adjustOffset(days: number) {
  offsetDays.value += days
}

// 计算属性：目标偏移时间
const targetOffsetTime = computed((): string => {
  return dayuts().add(offsetDays.value, 'day').format('YYYY-MM-DD HH:mm:ss')
})

// 计算属性：本月首日
const startOfMonth = computed((): string => {
  return dayuts().startOf('month').format('YYYY-MM-DD')
})

// 计算属性：本月尾日
const endOfMonth = computed((): string => {
  return dayuts().endOf('month').format('YYYY-MM-DD')
})

// 计算属性：是否为闰年
const isLeapYear = computed((): boolean => {
  return dayuts().isLeapYear()
})

// 计算属性：距离今年底的天数
const daysToYearEnd = computed((): number => {
  const endOfYear = dayuts().endOf('year')
  const diffVal = endOfYear.diff(dayuts(), 'day')
  return Math.ceil(diffVal)
})

onMounted(() => {
  updateClock()
  timerId = setInterval(() => {
    updateClock()
  }, 100)
})

onUnmounted(() => {
  if (timerId != 0) {
    clearInterval(timerId)
  }
})

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "时间日期操作 (lime-dayuts)" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-13px wtu-vz692z-0 wtu-gj97zx-1 mb-8px" }), "实时高精度时钟 (更新于每一百毫秒)"),
        _cE("text", _uM({
          class: "text-24px wtu-vz692z-0 wtu-1x9jm-2 mb-6px",
          style: _nS(_uM({"font-family":"monospace"}))
        }), _tD(currentFullTime.value), 5 /* TEXT, STYLE */),
        _cE("text", _uM({ class: "text-12px wtu-yykwf6-3" }), " 格式模板: YYYY-MM-DD HH:mm:ss.SSS dddd ")
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-13px wtu-vz692z-0 wtu-gj97zx-1 mb-12px" }), "日期偏移操作"),
        _cE("view", _uM({ class: "wtu-8hd5b6-4 wtu-1dpx42e-5 wtu-v612y1-6 mb-12px" }), [
          _cE("text", _uM({ class: "text-14px wtu-19lgge-7" }), "当前偏移天数:"),
          _cE("text", _uM({ class: "text-16px wtu-vz692z-0 wtu-kavqiq-8" }), _tD(offsetDays.value > 0 ? '+' : '') + _tD(offsetDays.value) + " 天", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-8hd5b6-4 wtu-v612y1-6 mb-12px" }), [
          _cE("view", _uM({ class: "wtu-99vqkt-9 mr-8px" }), [
            _cE("view", _uM({
              class: "wtu-1loqchx-a h-36px rounded-8px wtu-v93s27-b wtu-13u4cxj-c wtu-8hd5b6-4 wtu-1dpx42e-5 wtu-kcpjyy-d",
              onClick: () => {adjustOffset(-7)}
            }), [
              _cE("text", _uM({ class: "wtu-plt9py-e text-12px wtu-vz692z-0" }), "-7 天")
            ], 8 /* PROPS */, ["onClick"])
          ]),
          _cE("view", _uM({ class: "wtu-99vqkt-9 mr-8px" }), [
            _cE("view", _uM({
              class: "wtu-1loqchx-a h-36px rounded-8px wtu-v93s27-b wtu-13u4cxj-c wtu-8hd5b6-4 wtu-1dpx42e-5 wtu-kcpjyy-d",
              onClick: () => {adjustOffset(-1)}
            }), [
              _cE("text", _uM({ class: "wtu-plt9py-e text-12px wtu-vz692z-0" }), "-1 天")
            ], 8 /* PROPS */, ["onClick"])
          ]),
          _cE("view", _uM({ class: "wtu-99vqkt-9 mr-8px" }), [
            _cE("view", _uM({
              class: "wtu-1loqchx-a h-36px rounded-8px wtu-v93s27-b wtu-13u4cxj-c wtu-8hd5b6-4 wtu-1dpx42e-5 wtu-kcpjyy-d",
              onClick: () => {adjustOffset(1)}
            }), [
              _cE("text", _uM({ class: "wtu-plt9py-e text-12px wtu-vz692z-0" }), "+1 天")
            ], 8 /* PROPS */, ["onClick"])
          ]),
          _cE("view", _uM({ class: "wtu-99vqkt-9" }), [
            _cE("view", _uM({
              class: "wtu-1loqchx-a h-36px rounded-8px wtu-v93s27-b wtu-13u4cxj-c wtu-8hd5b6-4 wtu-1dpx42e-5 wtu-kcpjyy-d",
              onClick: () => {adjustOffset(7)}
            }), [
              _cE("text", _uM({ class: "wtu-plt9py-e text-12px wtu-vz692z-0" }), "+7 天")
            ], 8 /* PROPS */, ["onClick"])
          ])
        ]),
        _cE("view", _uM({ class: "border-top-width-1px border-top-style-solid border-top-color-[#e2e8f0] pt-8px mt-8px" }), [
          _cE("text", _uM({ class: "text-12px wtu-yykwf6-3 mb-4px" }), "计算得到的目标时间:"),
          _cE("text", _uM({ class: "text-14px wtu-vz692z-0 wtu-kavqiq-8" }), _tD(targetOffsetTime.value), 1 /* TEXT */)
        ])
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-13px wtu-vz692z-0 wtu-gj97zx-1 mb-12px" }), "常用日期边界与区间计算"),
        _cE("view", _uM({ class: "wtu-8hd5b6-4 wtu-v612y1-6 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-19lgge-7" }), "本月第一天"),
          _cE("text", _uM({ class: "text-14px wtu-1cr1vpz-f wtu-kavqiq-8" }), _tD(startOfMonth.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-8hd5b6-4 wtu-v612y1-6 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-19lgge-7" }), "本月最后一天"),
          _cE("text", _uM({ class: "text-14px wtu-1cr1vpz-f wtu-kavqiq-8" }), _tD(endOfMonth.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-8hd5b6-4 wtu-v612y1-6 mb-8px" }), [
          _cE("text", _uM({ class: "text-14px wtu-19lgge-7" }), "今年天数"),
          _cE("text", _uM({ class: "text-14px wtu-1cr1vpz-f wtu-kavqiq-8" }), _tD(isLeapYear.value ? '366天 (闰年)' : '365天 (平年)'), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-8hd5b6-4 wtu-v612y1-6" }), [
          _cE("text", _uM({ class: "text-14px wtu-19lgge-7" }), "距离今年底倒计时"),
          _cE("text", _uM({ class: "text-14px wtu-vz692z-0 wtu-1aoq6yw-g" }), _tD(daysToYearEnd.value) + " 天", 1 /* TEXT */)
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsTimeDemoCardStyles = [_uM([["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["font-medium", _pS(_uM([["--tw-font-weight", "500"], ["fontWeight", 500]]))], ["wtu-vz692z-0", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-gj97zx-1", _pS(_uM([["color", "#1e293b"]]))], ["wtu-1x9jm-2", _pS(_uM([["color", "var(--theme-color)"]]))], ["wtu-yykwf6-3", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-8hd5b6-4", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1dpx42e-5", _pS(_uM([["alignItems", "center"]]))], ["wtu-v612y1-6", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-19lgge-7", _pS(_uM([["color", "#64748b"]]))], ["wtu-kavqiq-8", _pS(_uM([["color", "#334155"]]))], ["wtu-99vqkt-9", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1loqchx-a", _pS(_uM([["width", "100%"]]))], ["wtu-v93s27-b", _pS(_uM([["backgroundColor", "#e0edff"]]))], ["wtu-13u4cxj-c", _pS(_uM([["display", "flex"]]))], ["wtu-kcpjyy-d", _pS(_uM([["justifyContent", "center"]]))], ["wtu-plt9py-e", _pS(_uM([["color", "#3b82f6"]]))], ["wtu-1cr1vpz-f", _pS(_uM([["--tw-font-weight", "500"], ["fontWeight", 500]]))], ["wtu-1aoq6yw-g", _pS(_uM([["color", "#f43f5e"]]))]])]
