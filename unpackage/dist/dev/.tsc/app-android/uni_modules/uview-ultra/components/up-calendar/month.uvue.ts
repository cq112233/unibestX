
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { addUnit, deepClone, toast, sleep, getWindowInfo } from '../../libs/function/index';
	import { getLocale, formatMonthTitle } from '../../libs/i18n/index.uts';
	import { colorGradient } from '../../libs/function/colorGradient';
	import { array as testArray } from '../../libs/function/test';
	import defProps from './calendar.uts';
	let calendarProp = defProps['calendar'] as UTSJSONObject;
	import {dayuts} from '@/uni_modules/lime-dayuts';
	import { UPCalendarMonthsItemDate } from './types.uts'
	export type monthsItem = { __$originalPosition?: UTSSourceMapPosition<"monthsItem", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 54, 14>;
	  top: number
	  year: string 
	  month: string 
	  date: Array<UPCalendarMonthsItemDate>
	}
	const __sfc__ = defineComponent({
		name: 'up-calendar-month',
		mixins: [mpMixin, mixin],
		props: {
			// 是否显示月份背景色
			showMark: {
				type: Boolean,
				default: true
			},
			// 主题色，对底部按钮和选中日期有效
			color: {
				type: String,
				default: '#3c9cff'
			},
			// 月份数据
			months: {
				type: Array<monthsItem>,
				default: [] as Array<monthsItem>
			},
			// 日期选择类型
			mode: {
				type: String,
				default: 'single'
			},
			// 日期行高
			rowHeight: {
				type: [String, Number],
				default: 58
			},
			// mode=multiple时，最多可选多少个日期
			maxCount: {
				type: [String, Number],
				default: Infinity
			},
			// mode=range时，第一个日期底部的提示文字
			startText: {
				type: String,
				default: '开始'
			},
			// mode=range时，最后一个日期底部的提示文字
			endText: {
				type: String,
				default: '结束'
			},
			// 默认选中的日期，mode为multiple或range是必须为数组格式
			defaultDate: {
				type: [Array<String>, String, Date],
				default: null
			},
			// 最小的可选日期
			minDate: {
				type: [String, Number],
				default: 0
			},
			// 最大可选日期
			maxDate: {
				type: [String, Number],
				default: 0
			},
			// 如果没有设置maxDate，则往后推多少个月
			maxMonth: {
				type: [String, Number],
				default: 2
			},
			// 是否为只读状态，只读状态下禁止选择日期
			readonly: {
				type: Boolean,
				default: () => calendarProp.getBoolean('readonly')
			},
			// 日期区间最多可选天数，默认无限制，mode = range时有效
			maxRange: {
				type: [Number, String],
				default: 365
			},
			// 范围选择超过最多可选天数时的提示文案，mode = range时有效
			rangePrompt: {
				type: String,
				default: ''
			},
			// 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
			showRangePrompt: {
				type: Boolean,
				default: true
			},
			// 是否允许日期范围的起止时间为同一天，mode = range时有效
			allowSameDay: {
				type: Boolean,
				default: false
			},
			// 今天日期，用于独立高亮
			todayDate: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				// 每个日期的宽度
				width: 0,
				// 当前选中的日期item
				item: null as UPCalendarMonthsItemDate | null,
				monthsInner: [] as Array<monthsItem>,
				selected: [] as Array<string>
			}
		},
		watch: {
			selectedChange: {
				immediate: true,
				handler() {
					this.setDefaultDate()
				}
			},
			months: {
				immediate: true,
				handler() {
					this.monthsInner = this.months
				}
			}
		},
		computed: {
			// 多个条件的变化，会引起选中日期的变化，这里统一管理监听
			selectedChange(): any {
				return [this.minDate, this.maxDate, this.defaultDate]
			},
			dayStyle() {
				return (index1: number, index2: number, item: UPCalendarMonthsItemDate):any => {
					const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 186, 12), } as UTSJSONObject
					if (item != null) {
						let week:number = item.week
						// 得出每个日期的宽度
						style['height'] = addUnit(this.rowHeight)
						if (index2 == 0) {
							// 获取当前为星期几，如果为0，则为星期天，减一为每月第一天时，需要向左偏移的item个数
							week = (week == 0 ? 7 : week) - 1
							style['marginLeft'] = `${(week / 7) * 100}%`
						}
					}
					if (this.mode == 'range') {
						style['padding'] = 0
					}
					return style
				}
			},
			daySelectStyle() {
				return (index1: number, index2: number, item: UPCalendarMonthsItemDate) => {
					let date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date']).format("YYYY-MM-DD")),
						style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 206, 7),}
					// 判断date是否在selected数组中，因为月份可能会需要补0，所以使用dateSame判断，而不用数组的includes判断
					const sameDate = (element: string): boolean => this.dateSame(element, date)
					if (this.selected.some(sameDate)) {
						let shouldActiveBg = true
						if (this.mode == 'range' && this.selected.length >= 2) {
							const len = this.selected.length - 1
							if (!this.dateSame(date, this.selected[0]) && !this.dateSame(date, this.selected[len])) {
								shouldActiveBg = false
							}
						}
						if (shouldActiveBg) {
							if (this.color != '#3c9cff') {
								style['backgroundColor'] = this.color
							}
						}
					}
					if (this.todayDate != '' && this.dateSame(date, this.todayDate) && !this.selected.some(sameDate)) {
						if (this.color != '#3c9cff') {
							style['border'] = `1px solid ${this.color}`
						}
						style['boxSizing'] = 'border-box'
					}
					if (this.mode == 'single') {
						if (this.selected.length > 0 && date == this.selected[0]) {
							// 因为需要对nvue的兼容，只能这么写，无法缩写，也无法通过类名控制等等
							style['borderRadius'] = '3px'
						}
					} else if (this.mode == 'range') {
						if (this.selected.length >= 2) {
							const len = this.selected.length - 1
							// 第一个日期设置左上角和左下角的圆角
							if (this.dateSame(date, this.selected[0])) {
								style['borderTopLeftRadius'] = '3px'
								style['borderBottomLeftRadius'] = '3px'
							}
							// 最后一个日期设置右上角 and 右下角的圆角
							if (this.dateSame(date, this.selected[len])) {
								style['borderTopRightRadius'] = '3px'
								style['borderBottomRightRadius'] = '3px'
							}
							// 处于第一和最后一个之间的日期由绝对定位背景层单独渲染以防止 opacity 影响文字
						} else if (this.selected.length == 1) {
							// 之所以需要这么写，是因为DCloud公司的iOS客户端的开发者能力有限导致的bug
							// 进行还原操作，否则在nvue的iOS，uni-app有bug，会导致诡异的表现
							style['borderTopLeftRadius'] = '3px'
							style['borderBottomLeftRadius'] = '3px'
						}
					} else {
						const sameDate = (element: string): boolean => this.dateSame(element, date)
						if (this.selected.some(sameDate)) {
							style['borderRadius'] = '3px'
						}
					}
					return style
				}
			},
			// 某个日期是否被选中
			textStyle() {
				return (item: UPCalendarMonthsItemDate) => {
					const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date']).format("YYYY-MM-DD")),
						style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 267, 7),}
					// 选中的日期，提示文字设置白色
					const sameDate = (element: string): boolean => this.dateSame(element, date)
					if (this.selected.some(sameDate)) {
						style['color'] = '#ffffff'
					}
					if (this.mode === 'range') {
						const len = this.selected.length - 1
						// 如果是范围选择模式，第一个和最后一个之间的日期，文字颜色设置为高亮的主题色
						if (dayuts(date).isAfter(dayuts(this.selected[0])) && dayuts(date).isBefore(dayuts(this
								.selected[len]))) {
							if (this.color != '#3c9cff') {
								style['color'] = this.color
							}
						}
					}
					return style
				}
			},
			// 获取底部的提示文字
			getBottomInfo() {
				return (index1: number, index2: number, item: UPCalendarMonthsItemDate): string  => {
					const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date']).format("YYYY-MM-DD"))
					let bottomInfo = ''
					if (item['bottomInfo'] != null) {
						bottomInfo = item['bottomInfo'].toString()
					}
					// 当为日期范围模式时，且选择的日期个数大于0时
					if (this.mode === 'range' && this.selected.length > 0) {
						if (this.selected.length == 1) {
							// 选择了一个日期时，如果当前日期为数组中的第一个日期，则显示底部文字为“开始”
							if (this.dateSame(date, this.selected[0])) return this.startText
							else return bottomInfo
						} else {
							const len = this.selected.length - 1
							// 如果数组中的日期大于2个时，第一个和最后一个显示为开始和结束日期
							if (this.dateSame(date, this.selected[0]) && this.dateSame(date, this.selected[1]) &&
								len == 1) {
								// 如果长度为2，且第一个等于第二个日期，则提示语放在同一个item中
								return `${this.startText}/${this.endText}`
							} else if (this.dateSame(date, this.selected[0])) {
								return this.startText
							} else if (this.dateSame(date, this.selected[len])) {
								return this.endText
							} else {
								return bottomInfo
							}
						}
					} else {
						return bottomInfo
					}
				}
			}
		},
		mounted() {
			this.init()
		},
		emits: ['monthSelected', 'updateMonthTop'],
		methods: {
			getMonthTitle(item: monthsItem): string {
				return formatMonthTitle(item.year, item.month)
			},
			isRangeMiddle(item: UPCalendarMonthsItemDate): boolean {
				if (this.mode != 'range' || this.selected.length < 2) return false
				const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date']).format("YYYY-MM-DD"))
				const len = this.selected.length - 1
				return dayuts(date).isAfter(dayuts(this.selected[0])) && dayuts(date).isBefore(dayuts(this.selected[len]))
			},
			rangeBgStyle(item: UPCalendarMonthsItemDate): any {
				const style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-calendar/month.uvue", 336, 11), } as UTSJSONObject
				if (this.color != '#3c9cff') {
					style['backgroundColor'] = colorGradient(this.color, '#ffffff', 100)[90]
					style['opacity'] = 0.7
				}
				return style
			},
			isSelected(item: UPCalendarMonthsItemDate): boolean {
				const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date']).format("YYYY-MM-DD"))
				const sameDate = (element: string): boolean => this.dateSame(element, date)
				if (!this.selected.some(sameDate)) return false
				if (this.mode == 'range' && this.selected.length >= 2) {
					const len = this.selected.length - 1
					return this.dateSame(date, this.selected[0]) || this.dateSame(date, this.selected[len])
				}
				return true
			},
			isToday(item: UPCalendarMonthsItemDate): boolean {
				const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date']).format("YYYY-MM-DD"))
				const sameDate = (element: string): boolean => this.dateSame(element, date)
				return this.todayDate != '' && this.dateSame(date, this.todayDate) && !this.selected.some(sameDate)
			},
			init() {
				// 初始化默认选中
				// this.$emit('monthSelected', this.selected, 'init')
				this.$nextTick(() => {
					// 这里需要另一个延时，因为获取宽度后，会进行月份数据渲染，只有渲染完成之后，才有真正的高度
					this.getWrapperWidth()
					this.getMonthRect()
				})
			},
			// 判断两个日期是否相等
			dateSame(date1: string, date2: string): boolean {
				return dayuts(date1).isSame(dayuts(date2))
			},
			// 获取月份数据区域的宽度，因为nvue不支持百分比，所以无法通过css设置每个日期item的宽度
			getWrapperWidth() {
				// @ts-ignore
				this.upGetRect('.up-calendar-month-wrapper', false).then((res) => {
					let size = res as NodeInfo;
					let width = size.width ?? 0
					if (width <= 0) {
						width = getWindowInfo().windowWidth
					}
					this.width = width
				})
			},
			getMonthRect() {
				// 获取每个月份数据的尺寸，用于父组件在scroll-view滚动事件中，监听当前滚动到了第几个月份
				const promiseAllArr: Array<Promise<NodeInfo>> = this.months.map((item: monthsItem, index):Promise<NodeInfo> => {
					return this.getMonthRectByPromise(`up-calendar-month-${index}`)
				})
				// 一次性返回
				Promise.all(promiseAllArr).then(
					(res) => {
						let sizes = res as NodeInfo[]
						let height = 1
						const topArr = [] as Array<number>
						for (let i = 0; i < this.months.length; i++) {
							// 添加到months数组中，供scroll-view滚动事件中，判断当前滚动到哪个月份
							topArr.push(height)
							height += sizes[i].height ?? 0
						}
						// 由于微信下，无法通过this.months[i].top的形式(引用类型)去修改父组件的month的top值，所以使用事件形式对外发出
						this.$emit('updateMonthTop', topArr)
					})
			},
			// 获取每个月份区域的尺寸
			getMonthRectByPromise(el: any): Promise<NodeInfo> {
				// upGetRect为uview-plus自带的节点查询简化方法，详见文档介绍：https://ijry.github.io/uview-plus/js/getRect.html
				// 组件内部一般用this.upGetRect
				// return new Promise(resolve => {
					// @ts-ignore
					return this.upGetRect(`.${el}`, false)
					// .then((res) => {
					// 	resolve(res)
					// })
				//})
			},
			// 点击某一个日期
			clickHandler(index1: number, index21: number, item: UPCalendarMonthsItemDate) {
				if (this.readonly) {
					return;
				}
				this.item = item
				const date = (item['dateStr'] != null ? item['dateStr'] as string : dayuts(item['date']).format("YYYY-MM-DD"))
				let disabled = item.disabled ?? false
				if (disabled) return
				// 对上一次选择的日期数组进行深度克隆
				// let selected = deepClone(this.selected)
				let selected = [...this.selected]
				if (this.mode === 'single') {
					// 单选情况下，让数组中的元素为当前点击的日期
					selected = [date]
				} else if (this.mode === 'multiple') {
					const sameDate = (element: string): boolean => this.dateSame(element, date)
					if (selected.some(sameDate)) {
						// 如果点击的日期已在数组中，则进行移除操作，也就是达到反选的效果
						const itemIndex = selected.findIndex((item: string): boolean => item === date)
						selected.splice(itemIndex, 1)
					} else {
						// 如果点击的日期不在数组中，且已有的长度小于总可选长度时，则添加到数组中去
						if (selected.length < (this.maxCount as number)) {
							selected.push(date)
						}
					}
				} else {
					// 选择区间形式
					if (selected.length == 0 || selected.length >= 2) {
						// 如果原来就为0或者大于2的长度，则当前点击的日期，就是开始日期
						selected = [date]
					} else if (selected.length == 1) {
						// 如果已经选择了开始日期
						const existsDate = selected[0]
						// 如果当前选择的日期小于上一次选择的日期，则当前的日期定为开始日期
						if (dayuts(date).isBefore(existsDate)) {
							selected = [date]
						} else if (dayuts(date).isAfter(existsDate)) {
							// 当前日期减去最大可选的日期天数，如果大于起始时间，则进行提示
							// if(dayuts(dayuts(date).subtract((this.maxRange as number), 'day'))
							// 	.isAfter(dayuts(selected[0])) && this.showRangePrompt) {
							// 	if(this.rangePrompt != '') {
							// 		toast(this.rangePrompt)
							// 	} else {
							// 		toast(`选择天数不能超过 ${this.maxRange.toString()} 天`)
							// 	}
							// 	return
							// }
							// 如果当前日期大于已有日期，将当前的添加到数组尾部
							selected.push(date)
							const startDate = selected[0]
							const endDate = selected[1]
							const arr = [] as Array<string>
							let i = 0
							do {
								// 将开始和结束日期之间的日期添加到数组中
								arr.push(dayuts(startDate).add(i, 'day').format("YYYY-MM-DD"))
								i++
								// 累加的日期小于结束日期时，继续下一次的循环
							} while (dayuts(startDate).add(i, 'day').isBefore(dayuts(endDate)))
							// 为了一次性修改数组，避免computed中多次触发，这里才用arr变量一次性赋值的方式，同时将最后一个日期添加近来
							arr.push(endDate)
							selected = arr
						} else {
							// 选择区间时，只有一个日期的情况下，且不允许选择起止为同一天的话，不允许选择自己
							if (selected[0] === date && !this.allowSameDay) return
							selected.push(date)
						}
					}
				}
				this.setSelected(selected)
			},
			// 设置默认日期
			setDefaultDate() {
				if (this.defaultDate == null) {
					// 如果没有设置默认日期，则将当天日期设置为默认选中的日期
					const selected = [dayuts().format("YYYY-MM-DD")]
					return this.setSelected(selected, false)
				}
				let defaultDate = [] as Array<string>
				let minDateData = this.minDate.toString()
				let maxDateData = this.maxDate.toString()
				const minDate = minDateData != '' ? minDateData : dayuts().format("YYYY-MM-DD")
				const maxDate = maxDateData != '' ? maxDateData : dayuts(minDate).add(this.maxMonth as number - 1, 'month').format("YYYY-MM-DD")
				if (this.mode === 'single') {
					// 单选模式，可以是字符串或数组，Date对象等
					if (!testArray(this.defaultDate)) {
						// @ts-ignore
						defaultDate = [dayuts(this.defaultDate).format("YYYY-MM-DD")]
					} else {
						// @ts-ignore
						let tmp = dayuts((this.defaultDate as Array<any>)[0]).format("YYYY-MM-DD");
						defaultDate = [tmp]
					}
				} else {
					// 如果为非数组，则不执行
					if (!testArray(this.defaultDate)) return
					// @ts-ignore
					defaultDate = this.defaultDate as Array<string>
				}
				// 过滤用户传递的默认数组，取出只在可允许最大值与最小值之间的元素
				defaultDate = defaultDate.filter(item => {
					return dayuts(item).isAfter(dayuts(minDate).subtract(1, 'day')) && dayuts(item).isBefore(dayuts(
						maxDate).add(1, 'day'))
				})
				this.setSelected(defaultDate, false)
			},
			setSelected(selected: Array<string>, event = true) {
				this.selected = selected
				if (event) {
					this.$emit('monthSelected', this.selected, 'tap')
				}
			}
		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpCalendarMonthRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({
    class: "up-calendar-month-wrapper",
    ref: "up-calendar-month-wrapper"
  }), [
    _cE(Fragment, null, RenderHelpers.renderList(_ctx.monthsInner, (item, index, __index, _cached): any => {
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
              _cE("text", _uM({ class: "up-calendar-month__title-text" }), _tD(_ctx.getMonthTitle(item)), 1 /* TEXT */)
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
              style: _nS([_ctx.dayStyle(index, index1, item1)]),
              onClick: () => {_ctx.clickHandler(index, index1, item1)}
            }), [
              _cE("view", _uM({
                class: _nC(["up-calendar-month__days__day__select", _uM({
								'up-calendar-month__days__day__select--selected': _ctx.isSelected(item1),
								'up-calendar-month__days__day__select--today': _ctx.isToday(item1)
							})]),
                style: _nS([_ctx.daySelectStyle(index, index1, item1)])
              }), [
                isTrue(_ctx.isRangeMiddle(item1))
                  ? _cE("view", _uM({
                      key: 0,
                      class: "up-calendar-month__days__day__select__range-bg",
                      style: _nS([_ctx.rangeBgStyle(item1)])
                    }), null, 4 /* STYLE */)
                  : _cC("v-if", true),
                _cE("text", _uM({
                  class: _nC(["up-calendar-month__days__day__select__info", _uM({
									'up-calendar-month__days__day__select__info--disabled': item1.disabled,
									'up-calendar-month__days__day__select__info--range-middle': _ctx.isRangeMiddle(item1)
								})]),
                  style: _nS([_ctx.textStyle(item1)])
                }), _tD(item1['day']), 7 /* TEXT, CLASS, STYLE */),
                isTrue(_ctx.getBottomInfo(index, index1, item1))
                  ? _cE("text", _uM({
                      key: 1,
                      class: _nC(["up-calendar-month__days__day__select__buttom-info", _uM({'up-calendar-month__days__day__select__buttom-info--disabled' : item1['disabled']})]),
                      style: _nS([_ctx.textStyle(item1)])
                    }), _tD(_ctx.getBottomInfo(index, index1, item1)), 7 /* TEXT, CLASS, STYLE */)
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
const GenUniModulesUviewUltraComponentsUpCalendarMonthStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-calendar-month-wrapper", _pS(_uM([["marginTop", 4]]))], ["up-calendar-month__title", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["justifyContent", "center"], ["height", 42]]))], ["up-calendar-month__title-text", _pS(_uM([["fontSize", 14], ["lineHeight", "42px"], ["color", "#303133"], ["textAlign", "center"], ["fontWeight", "bold"]]))], ["up-calendar-month__days", _pS(_uM([["position", "relative"], ["display", "flex"], ["flexDirection", "row"], ["flexWrap", "wrap"]]))], ["up-calendar-month__days__month-mark-wrapper", _pS(_uM([["position", "absolute"], ["top", 0], ["bottom", 0], ["left", 0], ["right", 0], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"]]))], ["up-calendar-month__days__month-mark-wrapper__text", _pS(_uM([["fontSize", 155], ["color", "rgba(231,232,234,0.83)"]]))], ["up-calendar-month__days__day", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["paddingTop", 2], ["paddingRight", 2], ["paddingBottom", 2], ["paddingLeft", 2], ["width", "14.285%"]]))], ["up-calendar-month__days__day__select", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["position", "relative"]]))], ["up-calendar-month__days__day__select__range-bg", _pS(_uM([["position", "absolute"], ["top", 0], ["bottom", 0], ["left", 0], ["right", 0], ["zIndex", 1], ["backgroundColor", "var(--theme-color, #0957de)"], ["opacity", 0.15]]))], ["up-calendar-month__days__day__select__dot", _pS(_uM([["width", 7], ["height", 7], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["backgroundColor", "#f56c6c"], ["position", "absolute"], ["top", 12], ["right", 7], ["zIndex", 2]]))], ["up-calendar-month__days__day__select__buttom-info", _pS(_uM([["color", "#606266"], ["textAlign", "center"], ["position", "absolute"], ["bottom", 5], ["fontSize", 10], ["left", 0], ["right", 0], ["zIndex", 2]]))], ["up-calendar-month__days__day__select__buttom-info--selected", _pS(_uM([["color", "#ffffff"]]))], ["up-calendar-month__days__day__select__buttom-info--disabled", _pS(_uM([["color", "#cacbcd"]]))], ["up-calendar-month__days__day__select__info", _pS(_uM([["textAlign", "center"], ["fontSize", 16], ["position", "relative"], ["zIndex", 2]]))], ["up-calendar-month__days__day__select__info--selected", _pS(_uM([["color", "#ffffff"]]))], ["up-calendar-month__days__day__select__info--disabled", _pS(_uM([["color", "#cacbcd"]]))], ["up-calendar-month__days__day__select__info--range-middle", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-calendar-month__days__day__select--today", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"], ["boxSizing", "border-box"]]))], ["up-calendar-month__days__day__select--selected", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-calendar-month__days__day__select--range-selected", _pS(_uM([["opacity", 0.3], ["borderTopLeftRadius", 0], ["borderTopRightRadius", 0], ["borderBottomRightRadius", 0], ["borderBottomLeftRadius", 0]]))], ["up-calendar-month__days__day__select--range-start-selected", _pS(_uM([["borderTopRightRadius", 0], ["borderBottomRightRadius", 0]]))], ["up-calendar-month__days__day__select--range-end-selected", _pS(_uM([["borderTopLeftRadius", 0], ["borderBottomLeftRadius", 0]]))]])]
