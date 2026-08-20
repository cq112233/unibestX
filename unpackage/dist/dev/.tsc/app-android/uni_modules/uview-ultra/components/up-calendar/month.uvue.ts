import { ref, watch, onMounted, getCurrentInstance, nextTick } from 'vue'
import { addUnit, upGetRect, getWindowInfo } from '../../libs/function/index'
import { formatMonthTitle } from '../../libs/i18n/index.uts'
import { colorGradient } from '../../libs/function/colorGradient'
import { array as testArray } from '../../libs/function/test'
import { dayuts } from '@/uni_modules/lime-dayuts'
import { UPCalendarMonthsItemDate, CalendarMonthItem } from './types.uts'


const __sfc__ = defineComponent({
  __name: 'month',
name: 'up-calendar-month',
  props: {
	showMark: {
		type: Boolean,
		default: true
	},
	color: {
		type: String,
		default: '#3c9cff'
	},
	months: {
		type: Array as PropType<Array<CalendarMonthItem>>,
		default: () => [] as Array<CalendarMonthItem>
	},
	mode: {
		type: String,
		default: 'single'
	},
	rowHeight: {
		type: [String, Number],
		default: 58
	},
	maxCount: {
		type: [String, Number],
		default: 999
	},
	startText: {
		type: String,
		default: '开始'
	},
	endText: {
		type: String,
		default: '结束'
	},
	defaultDate: {
		type: [Array, String, Date],
		default: null
	},
	minDate: {
		type: [String, Number],
		default: 0
	},
	maxDate: {
		type: [String, Number],
		default: 0
	},
	maxMonth: {
		type: [String, Number],
		default: 2
	},
	readonly: {
		type: Boolean,
		default: false
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
	todayDate: {
		type: String,
		default: ''
	}
},
  emits: ['monthSelected', 'updateMonthTop'],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()

const width = ref<number>(0)
const monthsInner = ref<Array<CalendarMonthItem>>([])
const selected = ref<Array<string>>([])

function getMonthTitle(item: CalendarMonthItem): string {
	return formatMonthTitle(item.year, item.month)
}

function dateSame(date1: string, date2: string): boolean {
	return dayuts(date1).isSame(dayuts(date2))
}

function isRangeMiddle(item: UPCalendarMonthsItemDate): boolean {
	if (props.mode != 'range' || selected.value.length < 2) return false
	const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date'] as any).format("YYYY-MM-DD"))
	const len = selected.value.length - 1
	return dayuts(date).isAfter(dayuts(selected.value[0])) && dayuts(date).isBefore(dayuts(selected.value[len]))
}

function rangeBgStyle(item: UPCalendarMonthsItemDate): UTSJSONObject {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 154, 8), } as UTSJSONObject
	if (props.color != '#3c9cff') {
		style['backgroundColor'] = colorGradient(props.color, '#ffffff', 100)[90]
		style['opacity'] = 0.7
	}
	return style
}

function isSelected(item: UPCalendarMonthsItemDate): boolean {
	const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date'] as any).format("YYYY-MM-DD"))
	const sameDate = (element: string): boolean => dateSame(element, date)
	if (!selected.value.some(sameDate)) return false
	if (props.mode == 'range' && selected.value.length >= 2) {
		const len = selected.value.length - 1
		return dateSame(date, selected.value[0]) || dateSame(date, selected.value[len])
	}
	return true
}

function isToday(item: UPCalendarMonthsItemDate): boolean {
	const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date'] as any).format("YYYY-MM-DD"))
	const sameDate = (element: string): boolean => dateSame(element, date)
	return props.todayDate != '' && dateSame(date, props.todayDate) && !selected.value.some(sameDate)
}

function dayStyle(index1: number, index2: number, item: UPCalendarMonthsItemDate): UTSJSONObject {
	const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 180, 8), } as UTSJSONObject
	if (item != null) {
		let week: number = item.week
		style['height'] = addUnit(props.rowHeight)
		if (index2 == 0) {
			week = (week == 0 ? 7 : week) - 1
			style['marginLeft'] = `${(week / 7) * 100}%`
		}
	}
	if (props.mode == 'range') {
		style['padding'] = 0
	}
	return style
}

function daySelectStyle(index1: number, index2: number, item: UPCalendarMonthsItemDate): UTSJSONObject {
	let date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date'] as any).format("YYYY-MM-DD"))
	let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 197, 6), } as UTSJSONObject
	const sameDate = (element: string): boolean => dateSame(element, date)
	if (selected.value.some(sameDate)) {
		let shouldActiveBg = true
		if (props.mode == 'range' && selected.value.length >= 2) {
			const len = selected.value.length - 1
			if (!dateSame(date, selected.value[0]) && !dateSame(date, selected.value[len])) {
				shouldActiveBg = false
			}
		}
		if (shouldActiveBg) {
			if (props.color != '#3c9cff') {
				style['backgroundColor'] = props.color
			}
		}
	}
	if (props.todayDate != '' && dateSame(date, props.todayDate) && !selected.value.some(sameDate)) {
		if (props.color != '#3c9cff') {
			style['border'] = `1px solid ${props.color}`
		}
		style['boxSizing'] = 'border-box'
	}
	if (props.mode == 'single') {
		if (selected.value.length > 0 && date == selected.value[0]) {
			style['borderRadius'] = '3px'
		}
	} else if (props.mode == 'range') {
		if (selected.value.length >= 2) {
			const len = selected.value.length - 1
			if (dateSame(date, selected.value[0])) {
				style['borderTopLeftRadius'] = '3px'
				style['borderBottomLeftRadius'] = '3px'
			}
			if (dateSame(date, selected.value[len])) {
				style['borderTopRightRadius'] = '3px'
				style['borderBottomRightRadius'] = '3px'
			}
		} else if (selected.value.length == 1) {
			style['borderTopLeftRadius'] = '3px'
			style['borderBottomLeftRadius'] = '3px'
		}
	} else {
		if (selected.value.some(sameDate)) {
			style['borderRadius'] = '3px'
		}
	}
	return style
}

function textStyle(item: UPCalendarMonthsItemDate): UTSJSONObject {
	const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date'] as any).format("YYYY-MM-DD"))
	let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 248, 6), } as UTSJSONObject
	const sameDate = (element: string): boolean => dateSame(element, date)
	if (selected.value.some(sameDate)) {
		style['color'] = '#ffffff'
	}
	if (props.mode === 'range') {
		const len = selected.value.length - 1
		if (dayuts(date).isAfter(dayuts(selected.value[0])) && dayuts(date).isBefore(dayuts(selected.value[len]))) {
			if (props.color != '#3c9cff') {
				style['color'] = props.color
			}
		}
	}
	return style
}

function getBottomInfo(index1: number, index2: number, item: UPCalendarMonthsItemDate): string {
	const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date'] as any).format("YYYY-MM-DD"))
	let bottomInfo = ''
	if (item['bottomInfo'] != null) {
		bottomInfo = item['bottomInfo']!.toString()
	}
	if (props.mode === 'range' && selected.value.length > 0) {
		if (selected.value.length == 1) {
			if (dateSame(date, selected.value[0])) return props.startText
			else return bottomInfo
		} else {
			const len = selected.value.length - 1
			if (dateSame(date, selected.value[0]) && dateSame(date, selected.value[1]) && len == 1) {
				return `${props.startText}/${props.endText}`
			} else if (dateSame(date, selected.value[0])) {
				return props.startText
			} else if (dateSame(date, selected.value[len])) {
				return props.endText
			} else {
				return bottomInfo
			}
		}
	}
	return bottomInfo
}

function setSelected(sel: Array<string>, shouldEmit = true) {
	selected.value = sel
	if (shouldEmit) {
		emit('monthSelected', selected.value, 'tap')
	}
}

function clickHandler(index1: number, index21: number, item: UPCalendarMonthsItemDate) {
	if (props.readonly) return
	const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date'] as any).format("YYYY-MM-DD"))
	let disabled = item.disabled ?? false
	if (disabled) return
	let curSelected = [...selected.value]
	if (props.mode === 'single') {
		curSelected = [date]
	} else if (props.mode === 'multiple') {
		const sameDate = (element: string): boolean => dateSame(element, date)
		if (curSelected.some(sameDate)) {
			const itemIndex = curSelected.findIndex((it: string): boolean => it === date)
			curSelected.splice(itemIndex, 1)
		} else {
			if (curSelected.length < parseInt(props.maxCount.toString())) {
				curSelected.push(date)
			}
		}
	} else {
		if (curSelected.length == 0 || curSelected.length >= 2) {
			curSelected = [date]
		} else if (curSelected.length == 1) {
			const existsDate = curSelected[0]
			if (dayuts(date).isBefore(existsDate)) {
				curSelected = [date]
			} else if (dayuts(date).isAfter(existsDate)) {
				curSelected.push(date)
				const startDate = curSelected[0]
				const endDate = curSelected[1]
				const arr = [] as Array<string>
				let i = 0
				do {
					arr.push(dayuts(startDate).add(i, 'day').format("YYYY-MM-DD"))
					i++
				} while (dayuts(startDate).add(i, 'day').isBefore(dayuts(endDate)))
				arr.push(endDate)
				curSelected = arr
			} else {
				if (curSelected[0] === date && !props.allowSameDay) return
				curSelected.push(date)
			}
		}
	}
	setSelected(curSelected)
}

function setDefaultDate() {
	if (props.defaultDate == null) {
		const sel = [dayuts().format("YYYY-MM-DD")]
		setSelected(sel, false)
		return
	}
	let defDate = [] as Array<string>
	let minDateData = props.minDate.toString()
	let maxDateData = props.maxDate.toString()
	const minDate = minDateData != '' ? minDateData : dayuts().format("YYYY-MM-DD")
	const maxDate = maxDateData != '' ? maxDateData : dayuts(minDate as any).add(parseInt(props.maxMonth.toString()) - 1, 'month').format("YYYY-MM-DD")
	if (props.mode === 'single') {
		if (!testArray(props.defaultDate)) {
			defDate = [dayuts(props.defaultDate as any).format("YYYY-MM-DD")]
		} else {
			let tmp = dayuts((props.defaultDate as Array<any>)[0] as any).format("YYYY-MM-DD")
			defDate = [tmp]
		}
	} else {
		if (!testArray(props.defaultDate)) return
		defDate = props.defaultDate as Array<string>
	}
	defDate = defDate.filter(it => {
		return dayuts(it as any).isAfter(dayuts(minDate as any).subtract(1, 'day')) && dayuts(it as any).isBefore(dayuts(maxDate as any).add(1, 'day'))
	})
	setSelected(defDate, false)
}

function getWrapperWidth() {
	upGetRect('.up-calendar-month-wrapper', false, instance?.proxy).then((res) => {
		let size = res as NodeInfo
		let w = size.width ?? 0
		if (w <= 0) {
			w = getWindowInfo().windowWidth
		}
		width.value = w
	})
}

function getMonthRect() {
	const promiseAllArr = props.months.map((item: CalendarMonthItem, index: number): Promise<NodeInfo> => {
		return upGetRect(`.up-calendar-month-${index}`, false, instance?.proxy)
	})
	Promise.all(promiseAllArr).then((res) => {
		let sizes = res as NodeInfo[]
		let height = 1
		const topArr = [] as Array<number>
		for (let i = 0; i < props.months.length; i++) {
			topArr.push(height)
			height += sizes[i].height ?? 0
		}
		emit('updateMonthTop', topArr)
	})
}

function init() {
	nextTick(() => {
		getWrapperWidth()
		getMonthRect()
	})
}

watch((): Array<any | null> => [props.minDate, props.maxDate, props.defaultDate] as Array<any | null>, () => {
	setDefaultDate()
}, { immediate: true })

watch((): Array<CalendarMonthItem> => props.months, (n: Array<CalendarMonthItem>) => {
	monthsInner.value = n
}, { immediate: true })

onMounted(() => {
	init()
})

__expose({
	init,
	setDefaultDate,
	setSelected
})

return (): any | null => {

  return _cE("view", _uM({
    class: "up-calendar-month-wrapper",
    ref: "up-calendar-month-wrapper"
  }), [
    _cE(Fragment, null, RenderHelpers.renderList(monthsInner.value, (item, index, __index, _cached): any => {
      return _cE("view", _uM({
        key: index,
        class: _nC([`up-calendar-month-` + index.toString()]),
        ref_for: true,
        ref: `up-calendar-month-` + index.toString(),
        id: `month-` + index.toString()
      }), [
        index != 0
          ? _cE("view", _uM({
              key: 0,
              class: "up-calendar-month__title"
            }), [
              _cE("text", _uM({ class: "up-calendar-month__title-text" }), _tD(getMonthTitle(item)), 1 /* TEXT */)
            ])
          : _cC("v-if", true),
        _cE("view", _uM({ class: "up-calendar-month__days" }), [
          isTrue(_ctx.showMark)
            ? _cE("view", _uM({
                key: 0,
                class: "up-calendar-month__days__month-mark-wrapper"
              }), [
                _cE("text", _uM({ class: "up-calendar-month__days__month-mark-wrapper__text" }), _tD(item['month']), 1 /* TEXT */)
              ])
            : _cC("v-if", true),
          _cE(Fragment, null, RenderHelpers.renderList(item.date, (item1, index1, __index, _cached): any => {
            return _cE("view", _uM({
              key: index1,
              class: "up-calendar-month__days__day",
              style: _nS(dayStyle(index, index1, item1)),
              onClick: () => {clickHandler(index, index1, item1)}
            }), [
              _cE("view", _uM({
                class: _nC(["up-calendar-month__days__day__select", _uM({
								'up-calendar-month__days__day__select--selected': isSelected(item1),
								'up-calendar-month__days__day__select--today': isToday(item1)
							})]),
                style: _nS(daySelectStyle(index, index1, item1))
              }), [
                isTrue(isRangeMiddle(item1))
                  ? _cE("view", _uM({
                      key: 0,
                      class: "up-calendar-month__days__day__select__range-bg",
                      style: _nS(rangeBgStyle(item1))
                    }), null, 4 /* STYLE */)
                  : _cC("v-if", true),
                _cE("text", _uM({
                  class: _nC(["up-calendar-month__days__day__select__info", _uM({
									'up-calendar-month__days__day__select__info--disabled': item1.disabled,
									'up-calendar-month__days__day__select__info--range-middle': isRangeMiddle(item1)
								})]),
                  style: _nS(textStyle(item1))
                }), _tD(item1['day']), 7 /* TEXT, CLASS, STYLE */),
                getBottomInfo(index, index1, item1) != ''
                  ? _cE("text", _uM({
                      key: 1,
                      class: _nC(["up-calendar-month__days__day__select__buttom-info", _uM({'up-calendar-month__days__day__select__buttom-info--disabled' : item1['disabled']})]),
                      style: _nS(textStyle(item1))
                    }), _tD(getBottomInfo(index, index1, item1)), 7 /* TEXT, CLASS, STYLE */)
                  : _cC("v-if", true),
                isTrue(item1['dot'])
                  ? _cE("text", _uM({
                      key: 2,
                      class: "up-calendar-month__days__day__select__dot"
                    }))
                  : _cC("v-if", true)
              ], 6 /* CLASS, STYLE */)
            ], 12 /* STYLE, PROPS */, ["onClick"])
          }), 128 /* KEYED_FRAGMENT */)
        ])
      ], 10 /* CLASS, PROPS */, ["id"])
    }), 128 /* KEYED_FRAGMENT */)
  ], 512 /* NEED_PATCH */)
}
}

})
export default __sfc__
const GenUniModulesUviewUltraComponentsUpCalendarMonthStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-calendar-month-wrapper", _pS(_uM([["marginTop", 4]]))], ["up-calendar-month__title", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["justifyContent", "center"], ["height", 42]]))], ["up-calendar-month__title-text", _pS(_uM([["fontSize", 14], ["lineHeight", "42px"], ["color", "#303133"], ["textAlign", "center"], ["fontWeight", "bold"]]))], ["up-calendar-month__days", _pS(_uM([["position", "relative"], ["display", "flex"], ["flexDirection", "row"], ["flexWrap", "wrap"]]))], ["up-calendar-month__days__month-mark-wrapper", _pS(_uM([["position", "absolute"], ["top", 0], ["bottom", 0], ["left", 0], ["right", 0], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"]]))], ["up-calendar-month__days__month-mark-wrapper__text", _pS(_uM([["fontSize", 155], ["color", "rgba(231,232,234,0.83)"]]))], ["up-calendar-month__days__day", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["paddingTop", 2], ["paddingRight", 2], ["paddingBottom", 2], ["paddingLeft", 2], ["width", "14.285%"]]))], ["up-calendar-month__days__day__select", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["position", "relative"]]))], ["up-calendar-month__days__day__select__range-bg", _pS(_uM([["position", "absolute"], ["top", 0], ["bottom", 0], ["left", 0], ["right", 0], ["zIndex", 1], ["backgroundColor", "var(--theme-color, #0957de)"], ["opacity", 0.15]]))], ["up-calendar-month__days__day__select__dot", _pS(_uM([["width", 7], ["height", 7], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["backgroundColor", "#f56c6c"], ["position", "absolute"], ["top", 12], ["right", 7], ["zIndex", 2]]))], ["up-calendar-month__days__day__select__buttom-info", _pS(_uM([["color", "#606266"], ["textAlign", "center"], ["position", "absolute"], ["bottom", 5], ["fontSize", 10], ["left", 0], ["right", 0], ["zIndex", 2]]))], ["up-calendar-month__days__day__select__buttom-info--selected", _pS(_uM([["color", "#ffffff"]]))], ["up-calendar-month__days__day__select__buttom-info--disabled", _pS(_uM([["color", "#cacbcd"]]))], ["up-calendar-month__days__day__select__info", _pS(_uM([["textAlign", "center"], ["fontSize", 16], ["position", "relative"], ["zIndex", 2]]))], ["up-calendar-month__days__day__select__info--selected", _pS(_uM([["color", "#ffffff"]]))], ["up-calendar-month__days__day__select__info--disabled", _pS(_uM([["color", "#cacbcd"]]))], ["up-calendar-month__days__day__select__info--range-middle", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-calendar-month__days__day__select--today", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"], ["boxSizing", "border-box"]]))], ["up-calendar-month__days__day__select--selected", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-calendar-month__days__day__select--range-selected", _pS(_uM([["opacity", 0.3], ["borderTopLeftRadius", 0], ["borderTopRightRadius", 0], ["borderBottomRightRadius", 0], ["borderBottomLeftRadius", 0]]))], ["up-calendar-month__days__day__select--range-start-selected", _pS(_uM([["borderTopRightRadius", 0], ["borderBottomRightRadius", 0]]))], ["up-calendar-month__days__day__select--range-end-selected", _pS(_uM([["borderTopLeftRadius", 0], ["borderBottomLeftRadius", 0]]))]])]
