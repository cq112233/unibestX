"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_limeDayuts_common_index = require("../../../lime-dayuts/common/index.js");
require("../../../lime-dayuts/common/use.js");
require("../../../lime-dayuts/utssdk/interface.js");
new common_vendor.UTSJSONObject({
  methods: new common_vendor.UTSJSONObject({
    // 设置月份数据
    setMonth() {
      const day = uni_modules_limeDayuts_common_index.dayuts(this.date).date(1).day();
      const start = day == 0 ? 6 : day - 1;
      const days = uni_modules_limeDayuts_common_index.dayuts(this.date).endOf("month").format("D");
      const prevDays = uni_modules_limeDayuts_common_index.dayuts(this.date).endOf("month").subtract(1, "month").format("D");
      const arr = [];
      this.month = [];
      arr.push(
        ...new Array(start).fill(1).map((e, i) => {
          const day2 = prevDays - start + i + 1;
          return new common_vendor.UTSJSONObject({
            value: day2,
            disabled: true,
            date: uni_modules_limeDayuts_common_index.dayuts(this.date).subtract(1, "month").date(day2).format("YYYY-MM-DD")
          });
        })
      );
      arr.push(
        ...new Array(days - 0).fill(1).map((e, i) => {
          const day2 = i + 1;
          return new common_vendor.UTSJSONObject({
            value: day2,
            date: uni_modules_limeDayuts_common_index.dayuts(this.date).date(day2).format("YYYY-MM-DD")
          });
        })
      );
      arr.push(
        ...new Array(42 - days - start).fill(1).map((e, i) => {
          const day2 = i + 1;
          return new common_vendor.UTSJSONObject({
            value: day2,
            disabled: true,
            // @ts-ignore
            date: uni_modules_limeDayuts_common_index.dayuts(this.date).add(1, "month").date(day2).format("YYYY-MM-DD")
          });
        })
      );
      for (let n = 0; n < arr.length; n += 7) {
        this.month.push(arr.slice(n, n + 7).map((e, i) => {
          e.index = i + n;
          const custom = this.customList.find((c = null) => {
            return c.date == e.date;
          });
          if (this.lunar) {
            const _a = this.getLunar(e.date), IDayCn = _a.IDayCn, IMonthCn = _a.IMonthCn;
            e.lunar = IDayCn == "初一" ? IMonthCn : IDayCn;
          }
          return Object.assign(Object.assign({}, e), custom);
        }));
      }
    }
  })
});
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-calendar/util.js.map
