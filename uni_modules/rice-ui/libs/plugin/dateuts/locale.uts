// import { Locale } from "./type.uts"

type Locale = {
	weekdays : string[]
	weekdaysShort : string[]
	weekdaysMin : string[]
	months : string[]
	monthsShort : string[]
	ordinal : (number : number, period : string) => string | null
	weekStart : number,
	yearStart : number,
	meridiem : (hour : number, minute : number) => string
}

export const local = {
	weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	weekdaysMin: ['日', '一', '二', '三', '四', '五', '六'],
	months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	ordinal: (number : number, period : string) => {
		switch (period) {
			case 'W':
				return `${number}周`
			default:
				return `${number}日`
		}
	},
	weekStart: 1,
	yearStart: 4,
	meridiem: (hour : number, minute : number) => {
		const hm = (hour * 100) + minute
		if (hm < 600) {
			return '凌晨'
		} else if (hm < 900) {
			return '早上'
		} else if (hm < 1100) {
			return '上午'
		} else if (hm < 1300) {
			return '中午'
		} else if (hm < 1800) {
			return '下午'
		}
		return '晚上'
	}
} as Locale