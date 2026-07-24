import { d as dayuts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/common/use&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-dayuts/utssdk/interface&";
new UTSJSONObject({
  methods: new UTSJSONObject({
    // 设置月份数据
    setMonth() {
      const day = dayuts(this.date).date(1).day();
      const start = day == 0 ? 6 : day - 1;
      const days = dayuts(this.date).endOf("month").format("D");
      const prevDays = dayuts(this.date).endOf("month").subtract(1, "month").format("D");
      const arr = [];
      this.month = [];
      arr.push(
        ...new Array(start).fill(1).map((e, i) => {
          const day2 = prevDays - start + i + 1;
          return new UTSJSONObject({
            value: day2,
            disabled: true,
            date: dayuts(this.date).subtract(1, "month").date(day2).format("YYYY-MM-DD")
          });
        })
      );
      arr.push(
        ...new Array(days - 0).fill(1).map((e, i) => {
          const day2 = i + 1;
          return new UTSJSONObject({
            value: day2,
            date: dayuts(this.date).date(day2).format("YYYY-MM-DD")
          });
        })
      );
      arr.push(
        ...new Array(42 - days - start).fill(1).map((e, i) => {
          const day2 = i + 1;
          return new UTSJSONObject({
            value: day2,
            disabled: true,
            // @ts-ignore
            date: dayuts(this.date).add(1, "month").date(day2).format("YYYY-MM-DD")
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
          return {
            // @ts-ignore
            ...e,
            ...custom
          };
        }));
      }
    }
  })
});
//# sourceMappingURL=util.js.map
