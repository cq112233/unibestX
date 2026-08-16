import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_popup from '@/uni_modules/uview-ultra/components/up-popup/up-popup.uvue'
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import uHeader from './header.uvue'
import uMonth from './month.uvue'
import { UPCalendarMonthsItemDate, CalendarMonthItem } from './types.uts'
import { dayuts } from '@/uni_modules/lime-dayuts'
import { t as $t, formatMonthTitle } from '../../libs/i18n/index.uts'
import { addUnit, range, error, padZero } from '../../libs/function/index'
import { number as testNumber, array as testArray } from '../../libs/function/test'


const __sfc__ = defineComponent({
  __name: 'up-calendar',
name: 'up-calendar',
  props: {
	title: {
		type: String,
		default: ''
	},
	showTitle: {
		type: Boolean,
		default: true
	},
	showSubtitle: {
		type: Boolean,
		default: true
	},
	mode: {
		type: String,
		default: 'single'
	},
	startText: {
		type: String,
		default: '开始'
	},
	endText: {
		type: String,
		default: '结束'
	},
	customList: {
		type: Array as PropType<Array<any>>,
		default: () => [] as Array<any>
	},
	color: {
		type: String,
		default: '#3c9cff'
	},
	minDate: {
		type: [String, Number],
		default: 0
	},
	maxDate: {
		type: [String, Number],
		default: 0
	},
	defaultDate: {
		type: [Array, String, Date],
		default: null
	},
	maxCount: {
		type: [String, Number],
		default: 999
	},
	rowHeight: {
		type: [String, Number],
		default: 56
	},
	formatter: {
		type: Function,
		default: null
	},
	showLunar: {
		type: Boolean,
		default: false
	},
	showMark: {
		type: Boolean,
		default: true
	},
	confirmText: {
		type: String,
		default: '确定'
	},
	confirmDisabledText: {
		type: String,
		default: '确定'
	},
	show: {
		type: Boolean,
		default: false
	},
	closeOnClickOverlay: {
		type: Boolean,
		default: false
	},
	readonly: {
		type: Boolean,
		default: false
	},
	showConfirm: {
		type: Boolean,
		default: true
	},
	maxRange: {
		type: [Number, String],
		default: 365
	},
	rangePrompt: {
		type: String,
		default: ''
	},
	showRangePrompt: {
		type: Boolean,
		default: true
	},
	allowSameDay: {
		type: Boolean,
		default: false
	},
	rangeResultMode: {
		type: String,
		default: 'all'
	},
	round: {
		type: [Boolean, String, Number],
		default: 0
	},
	monthNum: {
		type: [Number, String],
		default: 3
	},
	monthSwitch: {
		type: Boolean,
		default: false
	},
	showToday: {
		type: Boolean,
		default: true
	},
	safeAreaInsetBottom: {
		type: Boolean,
		default: true
	}
},
  emits: ['confirm', 'close'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const inited = ref<boolean>(false)
const months = ref<Array<CalendarMonthItem>>([])
const monthIndex = ref<number>(0)
const listHeight = ref<number>(0)
const listStyle = computed((): UTSJSONObject => {
	return {
		height: addUnit(listHeight.value)
	} as UTSJSONObject
})
const selected = ref<Array<string>>([])
const scrollIntoView = ref<string>('')
const scrollTop = ref<number>(0)

const innerMaxDate = computed<string>(() => {
	return props.maxDate.toString()
})

const innerMinDate = computed<string>(() => {
	return props.minDate.toString()
})

const todayDate = computed<string>(() => {
	return dayuts().format('YYYY-MM-DD')
})

const todayText = computed<string>(() => {
	return $t('up.calendar.today', {} as UTSJSONObject)
})

const todayDisabled = computed<boolean>(() => {
	let today = dayuts(todayDate.value)
	let minD = innerMinDate.value
	let maxD = innerMaxDate.value
	if (minD != '' && minD != '0' && today.isBefore(dayuts(minD), 'day')) {
		return true
	}
	if (maxD != '' && maxD != '0' && today.isAfter(dayuts(maxD), 'day')) {
		return true
	}
	return false
})

const elTitle = computed<string>(() => {
	if (props.title != '' && props.title != '日期选择') {
		return props.title
	}
	return $t('up.calendar.chooseDates', {} as UTSJSONObject)
})

const elConfirmText = computed<string>(() => {
	if (props.confirmText != '' && props.confirmText != '确定') {
		return props.confirmText
	}
	return $t('up.common.confirm', {} as UTSJSONObject)
})

const elConfirmDisabledText = computed<string>(() => {
	if (props.confirmDisabledText != '' && props.confirmDisabledText != '确定') {
		return props.confirmDisabledText
	}
	return $t('up.common.confirm', {} as UTSJSONObject)
})

const elStartText = computed<string>(() => {
	if (props.startText != '' && props.startText != '开始') {
		return props.startText
	}
	return $t('up.common.start', {} as UTSJSONObject)
})

const elEndText = computed<string>(() => {
	if (props.endText != '' && props.endText != '结束') {
		return props.endText
	}
	return $t('up.common.end', {} as UTSJSONObject)
})

const subtitle = computed<string>(() => {
	if (months.value.length > 0) {
		const item = months.value[monthIndex.value]
		return formatMonthTitle(item.year, item.month)
	}
	return ''
})

const currentMonths = computed<Array<CalendarMonthItem>>(() => {
	if (props.monthSwitch && months.value.length > 0) {
		return [months.value[monthIndex.value]]
	}
	return months.value
})

const switchPrevDisabled = computed<boolean>(() => {
	return monthIndex.value <= 0
})

const switchNextDisabled = computed<boolean>(() => {
	return monthIndex.value >= months.value.length - 1
})

const switchPrevYearDisabled = computed<boolean>(() => {
	return monthIndex.value - 12 < 0
})

const switchNextYearDisabled = computed<boolean>(() => {
	return monthIndex.value + 12 > months.value.length - 1
})

const buttonDisabled = computed<boolean>(() => {
	if (props.mode === 'range') {
		return selected.value.length <= 1
	}
	return false
})

function getConfirmValue(selParam: Array<string> | null = null): Array<string> {
	const sel = selParam ?? selected.value
	if (props.mode == 'range' && props.rangeResultMode == 'boundary' && sel.length >= 2) {
		let len = sel.length - 1
		return [sel[0], sel[len]]
	}
	return sel
}

function monthSelectedM(e: Array<string>, scene: string) {
	selected.value = e
	if (!props.showConfirm) {
		if (
			props.mode === 'multiple' ||
			props.mode === 'single' ||
			(props.mode === 'range' && selected.value.length >= 2)
		) {
			if (scene === 'tap') {
				emit('confirm', getConfirmValue())
			}
		}
	}
}

function getMonths(minD: any, maxD: any): number {
	const minYear = dayuts(minD).year()
	const minMonth = dayuts(minD).month() + 1
	const maxYear = dayuts(maxD).year()
	const maxMonth = dayuts(maxD).month() + 1
	return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1
}

function getDefaultMonthIndex(): number {
	let sel = dayuts().format('YYYY-MM')
	if (props.defaultDate != null) {
		if (!testArray(props.defaultDate)) {
			sel = dayuts(props.defaultDate).format('YYYY-MM')
		} else if ((props.defaultDate as Array<any>).length > 0) {
			sel = dayuts((props.defaultDate as Array<any>)[0]).format('YYYY-MM')
		}
	}
	const idx = months.value.findIndex(({ year, month }): boolean => {
		month = padZero(month)
		return `${year}-${month}` === sel
	})
	return idx == -1 ? 0 : idx
}

function setMonth() {
	const minD = (innerMinDate.value != '' && innerMinDate.value != '0') ? innerMinDate.value : dayuts().valueOf()
	const maxD = (innerMaxDate.value != '' && innerMaxDate.value != '0')
		? innerMaxDate.value
		: dayuts(minD).add(parseInt(props.monthNum.toString()) - 1, 'month').valueOf()
	const monthCount = range(1, parseInt(props.monthNum.toString()), getMonths(minD, maxD))
	let newMonths = [] as Array<CalendarMonthItem>
	const minDateStr = dayuts(minD).format('YYYY-MM-DD')
	const maxDateStr = dayuts(maxD).format('YYYY-MM-DD')
	for (let i = 0; i < monthCount; i++) {
		const monthBase = dayuts(minD).add(i, 'month')
		const daysInMonth = monthBase.daysInMonth()
		const monthValue = monthBase.month() + 1
		const yearValue = monthBase.year()
		let cdate: Array<UPCalendarMonthsItemDate> = []
		for (let day = 1; day <= daysInMonth; day++) {
			const dayBase = monthBase.date(day)
			const date = dayBase.format('YYYY-MM-DD')
			const week = dayBase.day()
			let config = {
				day: day.toString(),
				week,
				disabled: date < minDateStr || date > maxDateStr,
				date: new Date(date),
				dateStr: date,
				bottomInfo: '',
				dot: false,
				month: monthValue
			} as UPCalendarMonthsItemDate
			cdate.push(config)
		}
		let md: CalendarMonthItem = {
			top: 0,
			date: cdate,
			month: monthValue.toString(),
			year: yearValue.toString()
		}
		newMonths.push(md)
	}
	months.value = newMonths
	if (props.monthSwitch) {
		monthIndex.value = getDefaultMonthIndex()
	}
}

function scrollIntoDefaultMonth(selMonth: string) {
	const _index = months.value.findIndex(({ year, month }): boolean => {
		month = padZero(month)
		return `${year}-${month}` === selMonth
	})
	if (_index != -1) {
		nextTick(() => {
			scrollIntoView.value = ''
			scrollIntoView.value = `month-${_index}`
		})
	}
}

function jumpToToday() {
	if (todayDisabled.value) return
	const targetMonth = dayuts(todayDate.value).format('YYYY-MM')
	if (props.monthSwitch) {
		const todayMonthIdx = months.value.findIndex(({ year, month }): boolean => {
			month = padZero(month)
			return `${year}-${month}` == targetMonth
		})
		if (todayMonthIdx != -1) {
			monthIndex.value = todayMonthIdx
		}
		return
	}
	scrollIntoDefaultMonth(targetMonth)
}

function updateMonthTopM(topArr: Array<number>) {
	topArr.map((item, index) => {
		if (index < months.value.length) {
			months.value[index].top = item
		}
	})
	if (props.defaultDate == null) {
		const sel = dayuts().format("YYYY-MM")
		scrollIntoDefaultMonth(sel)
		return
	}
	let sel = dayuts().format("YYYY-MM")
	if (!testArray(props.defaultDate)) {
		sel = dayuts(props.defaultDate).format("YYYY-MM")
	} else {
		sel = dayuts((props.defaultDate as Array<any>)[0]).format("YYYY-MM")
	}
	scrollIntoDefaultMonth(sel)
}

function onUpdateMonthTopM(topArr: Array<number>) {
	if (props.monthSwitch) return
	updateMonthTopM(topArr)
}

function onScroll(event: UniScrollEvent) {
	const curScrollTop = Math.max(0, event.detail.scrollTop)
	for (let i = 0; i < months.value.length; i++) {
		if (curScrollTop >= (months.value[i].top > 0 ? months.value[i].top : listHeight.value)) {
			monthIndex.value = i
		}
	}
}

function init() {
	listHeight.value = parseInt(props.rowHeight.toString()) * (props.monthSwitch ? 6 : 5) + 30
	setMonth()
	inited.value = true
}

function close() {
	emit('close')
}

function confirm() {
	if (!buttonDisabled.value) {
		emit('confirm', getConfirmValue())
	}
}

function prevMonth() {
	if (!switchPrevDisabled.value) {
		monthIndex.value -= 1
	}
}

function nextMonth() {
	if (!switchNextDisabled.value) {
		monthIndex.value += 1
	}
}

function prevYear() {
	if (!switchPrevYearDisabled.value) {
		monthIndex.value -= 12
	}
}

function nextYear() {
	if (!switchNextYearDisabled.value) {
		monthIndex.value += 12
	}
}

watch((): boolean => props.show, (nval: boolean) => {
	if (nval) {
		init()
	} else {
		scrollIntoView.value = ''
	}
}, { immediate: true })

watch((): Array<any | null> => [props.defaultDate, innerMinDate.value, innerMaxDate.value] as Array<any | null>, () => {
	if (inited.value) setMonth()
})

onMounted(() => {
	init()
})

__expose({
	init,
	setMonth,
	confirm,
	close
})

return (): any | null => {

const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_popup = resolveEasyComponent("up-popup",_easycom_up_popup)

  return _cV(_component_up_popup, _uM({
    show: _ctx.show,
    mode: "bottom",
    closeable: "",
    onClose: close,
    round: _ctx.round,
    closeOnClickOverlay: _ctx.closeOnClickOverlay,
    safeAreaInsetBottom: _ctx.safeAreaInsetBottom
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "up-calendar" }), [
        _cV(unref(uHeader), _uM({
          title: elTitle.value,
          subtitle: subtitle.value,
          showSubtitle: _ctx.showSubtitle,
          showTitle: _ctx.showTitle,
          showSwitch: _ctx.monthSwitch,
          showToday: _ctx.showToday,
          todayText: todayText.value,
          todayDisabled: todayDisabled.value,
          prevDisabled: switchPrevDisabled.value,
          nextDisabled: switchNextDisabled.value,
          prevYearDisabled: switchPrevYearDisabled.value,
          nextYearDisabled: switchNextYearDisabled.value,
          onPrev: prevMonth,
          onNext: nextMonth,
          onPrevYear: prevYear,
          onNextYear: nextYear,
          onToday: jumpToToday
        }), null, 8 /* PROPS */, ["title", "subtitle", "showSubtitle", "showTitle", "showSwitch", "showToday", "todayText", "todayDisabled", "prevDisabled", "nextDisabled", "prevYearDisabled", "nextYearDisabled"]),
        isTrue(!_ctx.monthSwitch)
          ? _cE("scroll-view", _uM({
              key: 0,
              style: _nS(listStyle.value),
              direction: "vertical",
              onScroll: onScroll,
              "scroll-top": scrollTop.value,
              "scroll-into-view": scrollIntoView.value
            }), [
              _cV(unref(uMonth), _uM({
                color: _ctx.color,
                rowHeight: _ctx.rowHeight,
                showMark: _ctx.showMark,
                months: months.value,
                mode: _ctx.mode,
                maxCount: _ctx.maxCount,
                startText: elStartText.value,
                endText: elEndText.value,
                defaultDate: _ctx.defaultDate,
                minDate: innerMinDate.value,
                maxDate: innerMaxDate.value,
                maxMonth: _ctx.monthNum,
                readonly: _ctx.readonly,
                maxRange: _ctx.maxRange,
                rangePrompt: _ctx.rangePrompt,
                showRangePrompt: _ctx.showRangePrompt,
                allowSameDay: _ctx.allowSameDay,
                todayDate: todayDate.value,
                ref: "month",
                onMonthSelected: monthSelectedM,
                onUpdateMonthTop: onUpdateMonthTopM
              }), null, 8 /* PROPS */, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "todayDate"])
            ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["scroll-top", "scroll-into-view"])
          : _cE("view", _uM({
              key: 1,
              style: _nS(listStyle.value)
            }), [
              _cV(unref(uMonth), _uM({
                color: _ctx.color,
                rowHeight: _ctx.rowHeight,
                showMark: _ctx.showMark,
                months: currentMonths.value,
                mode: _ctx.mode,
                maxCount: _ctx.maxCount,
                startText: elStartText.value,
                endText: elEndText.value,
                defaultDate: _ctx.defaultDate,
                minDate: innerMinDate.value,
                maxDate: innerMaxDate.value,
                maxMonth: _ctx.monthNum,
                readonly: _ctx.readonly,
                maxRange: _ctx.maxRange,
                rangePrompt: _ctx.rangePrompt,
                showRangePrompt: _ctx.showRangePrompt,
                allowSameDay: _ctx.allowSameDay,
                todayDate: todayDate.value,
                ref: "month",
                onMonthSelected: monthSelectedM,
                onUpdateMonthTop: onUpdateMonthTopM
              }), null, 8 /* PROPS */, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "todayDate"])
            ], 4 /* STYLE */),
        isTrue(_ctx.showConfirm)
          ? renderSlot(_ctx.$slots, "footer", _uM({ key: 2 }), (): any[] => [
              _cE("view", _uM({ class: "up-calendar__confirm" }), [
                _cV(_component_up_button, _uM({
                  shape: "circle",
                  text: 
                            buttonDisabled.value ? elConfirmDisabledText.value : elConfirmText.value
                        ,
                  color: _ctx.color == '#3c9cff' ? '' : _ctx.color,
                  type: _ctx.color == '#3c9cff' ? 'primary' : '',
                  onClick: confirm,
                  disabled: buttonDisabled.value,
                  customStyle: "min-width:120px;"
                }), null, 8 /* PROPS */, ["text", "color", "type", "disabled"])
              ])
            ])
          : _cC("v-if", true)
      ])
    ]),
    _: 3 /* FORWARDED */
  }), 8 /* PROPS */, ["show", "round", "closeOnClickOverlay", "safeAreaInsetBottom"])
}
}

})
export default __sfc__
export type UpCalendarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCalendarUpCalendarStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-calendar__confirm", _pS(_uM([["paddingTop", 12], ["paddingRight", 18], ["paddingBottom", 16], ["paddingLeft", 18]]))]])]
