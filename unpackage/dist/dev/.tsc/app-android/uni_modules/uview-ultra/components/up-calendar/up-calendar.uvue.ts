
import uHeader from './header.uvue'
import { UPCalendarMonthsItemDate } from './types.uts'
import uMonth, { monthsItem } from './month.uvue'
import { propsCalendar } from './props.uts'
import util from './util'
import {dayuts} from '@/uni_modules/lime-dayuts';
import { t as $t } from '../../libs/i18n/index.uts'
// import Calendar from '../../libs/util/calendar'
import { mpMixin } from '../../libs/mixin/mpMixin'
import { mixin } from '../../libs/mixin/mixin'
import { addUnit, range, error, padZero } from '../../libs/function/index';
import { number as testNumber, array as testArray } from '../../libs/function/test';
/**
 * Calendar 日历
 * @description  此组件用于单个选择日期，范围选择日期等，日历被包裹在底部弹起的容器中.
 * @tutorial https://ijry.github.io/uview-plus/components/calendar.html
 *
 * @property {String}				title				标题内容 (默认 日期选择 )
 * @property {Boolean}				showTitle			是否显示标题  (默认 true )
 * @property {Boolean}				showSubtitle		是否显示副标题	(默认 true )
 * @property {String}				mode				日期类型选择  single-选择单个日期，multiple-可以选择多个日期，range-选择日期范围 （ 默认 'single' )
 * @property {String}				startText			mode=range时，第一个日期底部的提示文字  (默认 '开始' )
 * @property {String}				endText				mode=range时，最后一个日期底部的提示文字 (默认 '结束' )
 * @property {Array}				customList			自定义列表
 * @property {String}				color				主题色，对底部按钮和选中日期有效  (默认 ‘#3c9cff' )
 * @property {String | Number}		minDate				最小的可选日期	 (默认 0 )
 * @property {String | Number}		maxDate				最大可选日期  (默认 0 )
 * @property {Array | String| Date}	defaultDate			默认选中的日期，mode为multiple或range是必须为数组格式
 * @property {String | Number}		maxCount			mode=multiple时，最多可选多少个日期  (默认 	Number.MAX_SAFE_INTEGER  )
 * @property {String | Number}		rowHeight			日期行高 (默认 56 )
 * @property {Function}				formatter			日期格式化函数
 * @property {Boolean}				showLunar			是否显示农历  (默认 false )
 * @property {Boolean}				showMark			是否显示月份背景色 (默认 true )
 * @property {String}				confirmText			确定按钮的文字 (默认 '确定' )
 * @property {String}				confirmDisabledText	确认按钮处于禁用状态时的文字 (默认 '确定' )
 * @property {Boolean}				show				是否显示日历弹窗 (默认 false )
 * @property {Boolean}				closeOnClickOverlay	是否允许点击遮罩关闭日历 (默认 false )
 * @property {Boolean}				readonly	        是否为只读状态，只读状态下禁止选择日期 (默认 false )
 * @property {String | Number}		maxRange	        日期区间最多可选天数，默认无限制，mode = range时有效
 * @property {String}				rangePrompt	        范围选择超过最多可选天数时的提示文案，mode = range时有效
 * @property {Boolean}				showRangePrompt	    范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效 (默认 true )
 * @property {Boolean}				allowSameDay	    是否允许日期范围的起止时间为同一天，mode = range时有效 (默认 false )
 * @property {String}				rangeResultMode	    区间模式下确认返回值格式，all-返回区间内所有日期，boundary-仅返回起止日期 (默认 'all' )
 * @property {Number|String}	    round				圆角值，默认无圆角  (默认 0 )
 * @property {Number|String}	    monthNum			最多展示的月份数量  (默认 3 )
 * @property {Boolean}	            monthSwitch			是否启用非滚动的单月切换模式  (默认 false )
 *
 * @event {Function()} confirm 		点击确定按钮时触发		选择日期相关的返回参数
 * @event {Function()} close 		日历关闭时触发			可定义页面关闭时的回调事件
 * @example <up-calendar  :defaultDate="defaultDateMultiple" :show="show" mode="multiple" @confirm="confirm">
	</up-calendar>
 * */
import defProps from './calendar.uts';
let calendarProp = defProps['calendar'] as UTSJSONObject;
const __sfc__ = defineComponent({
	name: 'up-calendar',
	mixins: [mpMixin, mixin],
	// mixins: [mpMixin, mixin, propsCalendar],
	components: {
		uHeader,
		uMonth
	},
	props: {
	    // 日历顶部标题
	    title: {
	        type: String,
	        default: calendarProp['title']
	    },
	    // 是否显示标题
	    showTitle: {
	        type: Boolean,
	        default: calendarProp['showTitle']
	    },
	    // 是否显示副标题
	    showSubtitle: {
	        type: Boolean,
	        default: calendarProp['showSubtitle']
	    },
	    // 日期类型选择，single-选择单个日期，multiple-可以选择多个日期，range-选择日期范围
	    mode: {
	        type: String,
	        default: calendarProp['mode']
	    },
	    // mode=range时，第一个日期底部的提示文字
	    startText: {
	        type: String,
	        default: calendarProp['startText']
	    },
	    // mode=range时，最后一个日期底部的提示文字
	    endText: {
	        type: String,
	        default: calendarProp['endText']
	    },
	    // 自定义列表
	    customList: {
	        type: Array,
	        default: calendarProp['customList']
	    },
	    // 主题色，对底部按钮和选中日期有效
	    color: {
	        type: String,
	        default: calendarProp['color']
	    },
	    // 最小的可选日期
	    minDate: {
	        type: [String, Number],
	        default: calendarProp['minDate']
	    },
	    // 最大可选日期
	    maxDate: {
	        type: [String, Number],
	        default: calendarProp['maxDate']
	    },
	    // 默认选中的日期，mode为multiple或range是必须为数组格式
		// @ts-ignore
	    defaultDate: {
	        type: [Array, String, Date, null],
	        default: calendarProp['defaultDate']
	    },
	    // mode=multiple时，最多可选多少个日期
	    maxCount: {
	        type: [String, Number],
	        default: calendarProp['maxCount']
	    },
	    // 日期行高
	    rowHeight: {
	        type: [String, Number],
	        default: calendarProp['rowHeight']
	    },
	    // 日期格式化函数
		// @ts-ignore
	    formatter: {
	        type: [Function, null],
	        default: calendarProp['formatter']
	    },
	    // 是否显示农历
	    showLunar: {
	        type: Boolean,
	        default: calendarProp['showLunar']
	    },
	    // 是否显示月份背景色
	    showMark: {
	        type: Boolean,
	        default: calendarProp['showMark']
	    },
	    // 确定按钮的文字
	    confirmText: {
	        type: String,
	        default: calendarProp['confirmText']
	    },
	    // 确认按钮处于禁用状态时的文字
	    confirmDisabledText: {
	        type: String,
	        default: calendarProp['confirmDisabledText']
	    },
	    // 是否显示日历弹窗
	    show: {
	        type: Boolean,
	        default: calendarProp['show']
	    },
	    // 是否允许点击遮罩关闭日历
	    closeOnClickOverlay: {
	        type: Boolean,
	        default: calendarProp['closeOnClickOverlay']
	    },
	    // 是否为只读状态，只读状态下禁止选择日期
	    readonly: {
	        type: Boolean,
	        default: calendarProp['readonly']
	    },
	    // 	是否展示确认按钮
	    showConfirm: {
	        type: Boolean,
	        default: calendarProp['showConfirm']
	    },
	    // 日期区间最多可选天数，默认无限制，mode = range时有效
	    maxRange: {
	        type: [Number, String],
	        default: calendarProp['maxRange']
	    },
	    // 范围选择超过最多可选天数时的提示文案，mode = range时有效
	    rangePrompt: {
	        type: String,
	        default: calendarProp['rangePrompt']
	    },
	    // 范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效
	    showRangePrompt: {
	        type: Boolean,
	        default: calendarProp['showRangePrompt']
	    },
	    // 是否允许日期范围的起止时间为同一天，mode = range时有效
	    allowSameDay: {
	        type: Boolean,
	        default: calendarProp['allowSameDay']
	    },
		// 区间模式下确认返回值格式，all-返回区间内所有日期，boundary-仅返回起止日期
		rangeResultMode: {
			type: String,
			default: calendarProp['rangeResultMode']
		},
		// 圆角值
		round: {
		    type: [Boolean, String, Number],
		    default: calendarProp['round']
		},
		// 最多展示月份数量
		monthNum: {
			type: [Number, String],
			default: 3
		},
		// 是否启用非滚动的单月切换模式
		monthSwitch: {
			type: Boolean,
			default: calendarProp['monthSwitch']
		},
		// 是否显示今天按钮
		showToday: {
			type: Boolean,
			default: calendarProp['showToday']
		},
		// 是否为iPhoneX留出底部安全距离
		safeAreaInsetBottom: {
			type: Boolean,
			default: (calendarProp['safeAreaInsetBottom'] ?? true) as boolean
		}
	},
	data() {
		return {
			start: 0,
			inited: false,
			// 需要显示的月份的数组
			months: [] as monthsItem[],
			// 在月份滚动区域中，当前视图中月份的index索引
			monthIndex: 0,
			// 月份滚动区域的高度
			listHeight: 0,
			// month组件中选择的日期数组
			selected: [] as Array<string>,
			scrollIntoView: '',
			scrollIntoViewScroll: '',
			scrollTop:0,
			// 过滤处理方法
			innerFormatter: (value: UPCalendarMonthsItemDate):UPCalendarMonthsItemDate => value
		}
	},
	watch: {
		defaultDate: {
			handler() {
				// @ts-ignore
				if (this.inited) this.setMonth()
			}
		},
		// @ts-ignore
		selectedChange: {
			handler() {
				// @ts-ignore
				if (this.inited) this.setMonth()
			}
		},
		// 打开弹窗时，设置月份数据
		show: {
			immediate: true,
			handler(nval) {
				if (nval) {
					// @ts-ignore
					this.init()
				} else {
					// 关闭时重置scrollIntoView，否则会出现二次打开日历，当前月份数据显示不正确。
					// scrollIntoView需要有一个值变动过程，才会产生作用。
					// @ts-ignore
					this.scrollIntoView = ''
				}
			}
		}
	},
	computed: {
		// 由于maxDate和minDate可以为字符串(2021-10-10)，或者数值(时间戳)，但是dayuts如果接受字符串形式的时间戳会有问题，这里进行处理
		innerMaxDate(): string {
			// @ts-ignore
			return testNumber(this.maxDate)
			// @ts-ignore
				? (this.maxDate as number).toString()
				// @ts-ignore
				: this.maxDate.toString()
		},
		innerMinDate(): string {
			// @ts-ignore
			return testNumber(this.minDate)
			// @ts-ignore
				? (this.minDate as number).toString()
				// @ts-ignore
				: this.minDate.toString()
		},
		todayDate(): string {
			return dayuts().format('YYYY-MM-DD')
		},
		todayText(): string {
			return $t('up.calendar.today', {} as UTSJSONObject)
		},
		todayDisabled(): boolean {
			let today = dayuts(this.todayDate as any as string)
			let innerMinDate = this.innerMinDate as any as string
			let innerMaxDate = this.innerMaxDate as any as string
			if (innerMinDate != '' && innerMinDate != '0' && today.isBefore(dayuts(innerMinDate), 'day')) {
				return true
			}
			if (innerMaxDate != '' && innerMaxDate != '0' && today.isAfter(dayuts(innerMaxDate), 'day')) {
				return true
			}
			return false
		},
		// 多个条件的变化，会引起选中日期的变化，这里统一管理监听
		selectedChange(): Array<string> {
			// @ts-ignore
			return [this.innerMinDate, this.innerMaxDate]
		},
		subtitle() {
			// 初始化时，this.months为空数组，所以需要特别判断处理
			// @ts-ignore
			if (this.months.length > 0) {
				// @ts-ignore
				let monthIndex: number = this.monthIndex as number
				// @ts-ignore
				return `${this.months[monthIndex]['year']}年${
					// @ts-ignore
					this.months[monthIndex]['month']
				}月`
			} else {
				return ''
			}
		},
		currentMonths(): Array<monthsItem> {
			// @ts-ignore
			if (this.monthSwitch && this.months.length > 0) {
				// @ts-ignore
				return [this.months[this.monthIndex] as monthsItem]
			}
			// @ts-ignore
			return this.months as Array<monthsItem>
		},
		switchPrevDisabled(): boolean {
			// @ts-ignore
			return this.monthIndex <= 0
		},
		switchNextDisabled(): boolean {
			// @ts-ignore
			return this.monthIndex >= this.months.length - 1
		},
		switchPrevYearDisabled(): boolean {
			// @ts-ignore
			return this.monthIndex - 12 < 0
		},
		switchNextYearDisabled(): boolean {
			// @ts-ignore
			return this.monthIndex + 12 > this.months.length - 1
		},
		buttonDisabled() {
			// 如果为range类型，且选择的日期个数不足1个时，让底部的按钮出于disabled状态
			// @ts-ignore
			if (this.mode === 'range') {
				// @ts-ignore
				if (this.selected.length <= 1) {
					return true
				} else {
					return false
				}
			} else {
				return false
			}
		}
	},
	mounted() {
		// @ts-ignore
		this.start = Date.now()
	},
	emits: ["confirm", "close"],
	methods: {
		addUnit(e: any) {
			return addUnit(e)
		},
		getConfirmValue(selected: Array<string> | null = null): Array<string> {
			// @ts-ignore
			const sel = selected ?? (this.selected as Array<string>)
			// @ts-ignore
			if (this.mode == 'range' && this.rangeResultMode == 'boundary' && sel.length >= 2) {
				let len = sel.length - 1
				return [sel[0], sel[len]]
			}
			return sel
		},
		// 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
		setFormatter(e: object)  {
			// @ts-ignore
			this.innerFormatter = e as ((val: UPCalendarMonthsItemDate) => UPCalendarMonthsItemDate)
		},
		// month组件内部选择日期后，通过事件通知给父组件
		monthSelectedM(e: Array<string>, scene: string) {
			// @ts-ignore
			this.selected = e
			// @ts-ignore
			if (!this.showConfirm) {
				// 在不需要确认按钮的情况下，如果为单选，或者范围多选且已选长度大于2，则直接进行返还
				if (
					// @ts-ignore
					this.mode === 'multiple' ||
					// @ts-ignore
					this.mode === 'single' ||
					// @ts-ignore
					(this.mode === 'range' && this.selected.length >= 2)
				) {
				   if( scene === 'init'){
					 return
				   }
				   if( scene === 'tap') {
					   // @ts-ignore
					 this.$emit('confirm', this.getConfirmValue())
				   }
				}
			}
		},
		init() {
			// 校验maxDate，不能小于minDate。
			if (
				// @ts-ignore
				this.innerMaxDate != '0' && this.innerMaxDate != '' &&
				// @ts-ignore
                this.innerMinDate != '0' && this.innerMinDate != '' &&
				// @ts-ignore
				new Date(this.innerMaxDate).getTime() < new Date(this.innerMinDate).getTime()
			) {
				// @ts-ignore
				console.log(this.innerMaxDate, " at uni_modules/uview-ultra/components/up-calendar/up-calendar.uvue:541")
				return error('maxDate不能小于minDate时间')
			}
			// 滚动区域的高度
			// @ts-ignore
			this.listHeight = (this.rowHeight as number) * (this.monthSwitch ? 6 : 5) + 30
			this.setMonth()
			// @ts-ignore
			this.inited = true
		},
		close() {
			// @ts-ignore
			this.$emit('close')
		},
		// 点击确定按钮
		confirm() {
			// @ts-ignore
			if (!this.buttonDisabled) {
				// @ts-ignore
				this.$emit('confirm', this.getConfirmValue())
			}
		},
		// 获得两个日期之间的月份数
		getMonths(minDate: any, maxDate: any): number {
			const minYear = dayuts(minDate).year()
			const minMonth = dayuts(minDate).month() + 1
			const maxYear = dayuts(maxDate).year()
			const maxMonth = dayuts(maxDate).month() + 1
			return (maxYear - minYear) * 12 + (maxMonth - minMonth) + 1
		},
		// 设置月份数据
		setMonth() {
			// 最小日期的毫秒数
			// @ts-ignore
			const minDate = (this.innerMinDate != '' && this.innerMinDate != '0') ? this.innerMinDate : dayuts().valueOf()
			// 如果没有指定最大日期，则往后推3个月
			const maxDate =
			// @ts-ignore
				(this.innerMaxDate != '' && this.innerMaxDate != '0') ? this.innerMaxDate :
				dayuts(minDate)
				// @ts-ignore
					.add((this.monthNum as number) - 1, 'month')
					.valueOf()
			// 最大最小月份之间的共有多少个月份，
			const months = range(
				1,
				// @ts-ignore
				this.monthNum as number,
				this.getMonths(minDate, maxDate)
			)
			// 先清空数组
			// @ts-ignore
			this.months = [] as monthsItem[]
			const minDateStr = dayuts(minDate).format('YYYY-MM-DD')
			const maxDateStr = dayuts(maxDate).format('YYYY-MM-DD')
			for (let i = 0; i < months; i++) {
				// 缓存当月的 dayuts 实例，避免重复创建
				const monthBase = dayuts(minDate).add(i, 'month')
				const daysInMonth = monthBase.daysInMonth()
				const monthValue = monthBase.month() + 1
				const yearValue = monthBase.year()
				let cdate: Array<UPCalendarMonthsItemDate> = []
				for (let day = 1; day <= daysInMonth; day++) {
					const dayBase = monthBase.date(day)
					const date = dayBase.format('YYYY-MM-DD')
					const week = dayBase.day()
					let bottomInfo = ''
					let config = {
						day: day.toString(),
						week,
						disabled: date < minDateStr || date > maxDateStr,
						date: new Date(date),
						dateStr: date,
						bottomInfo,
						dot: false,
						month: monthValue
					} as UPCalendarMonthsItemDate
					cdate.push(config)
				}
				let md:monthsItem = {
					top: 0,
					date: cdate,
					// 当前所属的月份
					month: monthValue.toString(),
					// 当前年份
					year: yearValue.toString()
				}
				// @ts-ignore
				this.months.push(md)
			}
			// @ts-ignore
			if (this.monthSwitch) {
				// @ts-ignore
				this.monthIndex = this.getDefaultMonthIndex()
			}
		},
		getDefaultMonthIndex(): number {
			let selected = dayuts().format('YYYY-MM')
			// @ts-ignore
			if (this.defaultDate != null) {
				// @ts-ignore
				if (!testArray(this.defaultDate)) {
					// @ts-ignore
					selected = dayuts(this.defaultDate).format('YYYY-MM')
				// @ts-ignore
				} else if ((this.defaultDate as Array<any>).length > 0) {
					// @ts-ignore
					selected = dayuts((this.defaultDate as Array<any>)[0]).format('YYYY-MM')
				}
			}
			// @ts-ignore
			const index = this.months.findIndex(({ year, month }): boolean => {
				month = padZero(month)
				return `${year}-${month}` === selected
			})
			return index == -1 ? 0 : index
		},
		prevMonth() {
			// @ts-ignore
			if (!this.switchPrevDisabled) {
				// @ts-ignore
				this.monthIndex -= 1
			}
		},
		nextMonth() {
			// @ts-ignore
			if (!this.switchNextDisabled) {
				// @ts-ignore
				this.monthIndex += 1
			}
		},
		prevYear() {
			// @ts-ignore
			if (!this.switchPrevYearDisabled) {
				// @ts-ignore
				this.monthIndex -= 12
			}
		},
		nextYear() {
			// @ts-ignore
			if (!this.switchNextYearDisabled) {
				// @ts-ignore
				this.monthIndex += 12
			}
		},
		jumpToToday() {
			// @ts-ignore
			if (this.todayDisabled) {
				return
			}
			// @ts-ignore
			const targetMonth = dayuts(this.todayDate).format('YYYY-MM')
			// @ts-ignore
			if (this.monthSwitch) {
				// @ts-ignore
				const todayMonthIndex = this.months.findIndex(({ year, month }): boolean => {
					month = padZero(month)
					return `${year}-${month}` == targetMonth
				})
				if (todayMonthIndex != -1) {
					// @ts-ignore
					this.monthIndex = todayMonthIndex
				}
				return
			}
			this.scrollIntoDefaultMonth(targetMonth)
		},
		// 滚动到默认设置的月份
		scrollIntoDefaultMonth(selected: string) {
			// 查询默认日期在可选列表的下标
			// @ts-ignore
			const _index = this.months.findIndex(({
				  year,
				  month
			  }): boolean => {
				month = padZero(month)
				return `${year}-${month}` === selected
			})
			if (_index != -1) {

				// @ts-ignore
				this.$nextTick(() => {
					// @ts-ignore
					this.scrollIntoView = ''
					// @ts-ignore
					this.scrollIntoView = `month-${_index}`
					// @ts-ignore
					this.scrollIntoViewScroll = this.scrollIntoView
				})




			}
		},
		// scroll-view滚动监听
		onScroll(event: UniScrollEvent) {
			// 不允许小于0的滚动值，如果scroll-view到顶了，继续下拉，会出现负数值
			const scrollTop = Math.max(0, event.detail.scrollTop)
			// 将当前滚动条数值，除以滚动区域的高度，可以得出当前滚动到了哪一个月份的索引
			// @ts-ignore
			for (let i = 0; i < this.months.length; i++) {
				// @ts-ignore
				if (scrollTop >= (this.months[i].top > 0 ? this.months[i].top : this.listHeight)) {
					// @ts-ignore
					this.monthIndex = i
					// @ts-ignore
					this.scrollIntoViewScroll = `month-${i}`
				}
			}
		},
		// 更新月份的top值
		onUpdateMonthTopM(topArr: Array<number>) {
			// @ts-ignore
			if (this.monthSwitch) {
				return
			}
			this.updateMonthTopM(topArr)
		},
		updateMonthTopM(topArr: Array<number>) {
			// 设置对应月份的top值，用于onScroll方法更新月份
			topArr.map((item, index) => {
				// @ts-ignore
				this.months[index]['top'] = item
			})

			// 获取默认日期的下标
			// @ts-ignore
			if (this.defaultDate == null) {
				// 如果没有设置默认日期，则将当天日期设置为默认选中的日期
				const select = dayuts().format("YYYY-MM")
				this.scrollIntoDefaultMonth(select)
				return
			}
			let selected = dayuts().format("YYYY-MM");
			// 单选模式，可以是字符串或数组，Date对象等
			// @ts-ignore
			if (!testArray(this.defaultDate)) {
				// @ts-ignore
				selected = dayuts(this.defaultDate).format("YYYY-MM")
			} else {
				// @ts-ignore
				selected = dayuts((this.defaultDate as Array<any>)[0]).format("YYYY-MM");
			}
			this.scrollIntoDefaultMonth(selected)
		}
	}
})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpCalendarUpCalendarRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_uHeader = resolveComponent("uHeader")
const _component_uMonth = resolveComponent("uMonth")
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_popup = resolveEasyComponent("up-popup",_easycom_up_popup)

  return _cV(_component_up_popup, _uM({
    show: _ctx.show,
    mode: "bottom",
    closeable: "",
    onClose: _ctx.close,
    round: _ctx.round,
    closeOnClickOverlay: _ctx.closeOnClickOverlay,
    safeAreaInsetBottom: _ctx.safeAreaInsetBottom
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "up-calendar" }), [
        _cV(_component_uHeader, _uM({
          title: _ctx.title,
          subtitle: _ctx.subtitle,
          showSubtitle: _ctx.showSubtitle,
          showTitle: _ctx.showTitle,
          showSwitch: _ctx.monthSwitch,
          showToday: _ctx.showToday,
          todayText: _ctx.todayText,
          todayDisabled: _ctx.todayDisabled,
          prevDisabled: _ctx.switchPrevDisabled,
          nextDisabled: _ctx.switchNextDisabled,
          prevYearDisabled: _ctx.switchPrevYearDisabled,
          nextYearDisabled: _ctx.switchNextYearDisabled,
          onPrev: _ctx.prevMonth,
          onNext: _ctx.nextMonth,
          onPrevYear: _ctx.prevYear,
          onNextYear: _ctx.nextYear,
          onToday: _ctx.jumpToToday
        }), null, 8 /* PROPS */, ["title", "subtitle", "showSubtitle", "showTitle", "showSwitch", "showToday", "todayText", "todayDisabled", "prevDisabled", "nextDisabled", "prevYearDisabled", "nextYearDisabled", "onPrev", "onNext", "onPrevYear", "onNextYear", "onToday"]),
        isTrue(!_ctx.monthSwitch)
          ? _cE("scroll-view", _uM({
              key: 0,
              style: _nS(_uM({height: _ctx.addUnit(_ctx.listHeight)})),
              direction: "vertical",
              onScroll: _ctx.onScroll,
              "scroll-top": _ctx.scrollTop,
              scrollIntoView: _ctx.scrollIntoView
            }), [
              _cV(_component_uMonth, _uM({
                color: _ctx.color,
                rowHeight: _ctx.rowHeight,
                showMark: _ctx.showMark,
                months: _ctx.months,
                mode: _ctx.mode,
                maxCount: _ctx.maxCount,
                startText: _ctx.startText,
                endText: _ctx.endText,
                defaultDate: _ctx.defaultDate,
                minDate: _ctx.innerMinDate,
                maxDate: _ctx.innerMaxDate,
                maxMonth: _ctx.monthNum,
                readonly: _ctx.readonly,
                maxRange: _ctx.maxRange,
                rangePrompt: _ctx.rangePrompt,
                showRangePrompt: _ctx.showRangePrompt,
                allowSameDay: _ctx.allowSameDay,
                todayDate: _ctx.todayDate,
                ref: "month",
                onMonthSelected: _ctx.monthSelectedM,
                onUpdateMonthTop: _ctx.onUpdateMonthTopM
              }), null, 8 /* PROPS */, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "todayDate", "onMonthSelected", "onUpdateMonthTop"])
            ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["onScroll", "scroll-top", "scrollIntoView"])
          : _cE("view", _uM({
              key: 1,
              style: _nS(_uM({height: _ctx.addUnit(_ctx.listHeight)}))
            }), [
              _cV(_component_uMonth, _uM({
                color: _ctx.color,
                rowHeight: _ctx.rowHeight,
                showMark: _ctx.showMark,
                months: _ctx.currentMonths,
                mode: _ctx.mode,
                maxCount: _ctx.maxCount,
                startText: _ctx.startText,
                endText: _ctx.endText,
                defaultDate: _ctx.defaultDate,
                minDate: _ctx.innerMinDate,
                maxDate: _ctx.innerMaxDate,
                maxMonth: _ctx.monthNum,
                readonly: _ctx.readonly,
                maxRange: _ctx.maxRange,
                rangePrompt: _ctx.rangePrompt,
                showRangePrompt: _ctx.showRangePrompt,
                allowSameDay: _ctx.allowSameDay,
                todayDate: _ctx.todayDate,
                ref: "month",
                onMonthSelected: _ctx.monthSelectedM,
                onUpdateMonthTop: _ctx.onUpdateMonthTopM
              }), null, 8 /* PROPS */, ["color", "rowHeight", "showMark", "months", "mode", "maxCount", "startText", "endText", "defaultDate", "minDate", "maxDate", "maxMonth", "readonly", "maxRange", "rangePrompt", "showRangePrompt", "allowSameDay", "todayDate", "onMonthSelected", "onUpdateMonthTop"])
            ], 4 /* STYLE */),
        isTrue(_ctx.showConfirm)
          ? renderSlot(_ctx.$slots, "footer", _uM({ key: 2 }), (): any[] => [
              _cE("view", _uM({ class: "up-calendar__confirm" }), [
                _cV(_component_up_button, _uM({
                  shape: "circle",
                  text: 
                            _ctx.buttonDisabled ? _ctx.confirmDisabledText : _ctx.confirmText
                        ,
                  color: _ctx.color == '#3c9cff' ? '' : _ctx.color,
                  type: _ctx.color == '#3c9cff' ? 'primary' : '',
                  onClick: _ctx.confirm,
                  disabled: _ctx.buttonDisabled
                }), null, 8 /* PROPS */, ["text", "color", "type", "onClick", "disabled"])
              ])
            ])
          : _cC("v-if", true)
      ])
    ]),
    _: 3 /* FORWARDED */
  }), 8 /* PROPS */, ["show", "onClose", "round", "closeOnClickOverlay", "safeAreaInsetBottom"])
}
export type UpCalendarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpCalendarUpCalendarStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-calendar__confirm", _pS(_uM([["paddingTop", 12], ["paddingRight", 18], ["paddingBottom", 16], ["paddingLeft", 18]]))]])]

import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_popup from '@/uni_modules/uview-ultra/components/up-popup/up-popup.uvue'
