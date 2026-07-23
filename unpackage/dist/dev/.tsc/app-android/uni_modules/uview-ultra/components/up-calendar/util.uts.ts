import {dayuts} from '@/uni_modules/lime-dayuts';
export default {
    methods: {
        // 设置月份数据
        setMonth() {
            // 月初是周几
            const day = dayuts(this.date).date(1).day()
            const start = day == 0 ? 6 : day - 1

            // 本月天数
            const days = dayuts(this.date).endOf('month').format('D')

            // 上个月天数
            const prevDays = dayuts(this.date).endOf('month').subtract(1, 'month').format('D')

            // 日期数据
            const arr = []
            // 清空表格
            this.month = []

            // 添加上月数据
            arr.push(
			// @ts-ignore
                ...new Array(start).fill(1).map((e, i) => {
					// @ts-ignore
                    const day = prevDays - start + i + 1

                    return {
                        value: day,
                        disabled: true,
                        date: dayuts(this.date).subtract(1, 'month').date(day).format('YYYY-MM-DD')
                    }
                })
            )

            // 添加本月数据
            arr.push(
			// @ts-ignore
                ...new Array(days - 0).fill(1).map((e, i) => {
                    const day = i + 1

                    return {
                        value: day,
                        date: dayuts(this.date).date(day).format('YYYY-MM-DD')
                    }
                })
            )

            // 添加下个月
            arr.push(
				// @ts-ignore
                ...new Array(42 - days - start).fill(1).map((e, i) => {
                    const day = i + 1

                    return {
                        value: day,
                        disabled: true,
						// @ts-ignore
                        date: dayuts(this.date).add(1, 'month').date(day).format('YYYY-MM-DD')
                    }
                })
            )

            // 分割数组
            for (let n = 0; n < arr.length; n += 7) {
                this.month.push(
                    arr.slice(n, n + 7).map((e, i) => {
						// @ts-ignore
                        e.index = i + n

                        // 自定义信息
						// @ts-ignore
                        const custom = this.customList.find((c) => c.date == e.date)

                        // 农历
                        if (this.lunar) {
							// @ts-ignore
                            const { IDayCn, IMonthCn } = this.getLunar(e.date)
							// @ts-ignore
                            e.lunar = IDayCn == '初一' ? IMonthCn : IDayCn
                        }

                        return {
							// @ts-ignore
                            ...e,
                            ...custom
                        }
                    })
                )
            }
        }
    }
}
