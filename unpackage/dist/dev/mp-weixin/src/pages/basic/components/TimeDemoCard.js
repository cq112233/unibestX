"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_limeDayuts_common_index = require("../../../../uni_modules/lime-dayuts/common/index.js");
require("../../../../uni_modules/lime-dayuts/common/use.js");
require("../../../../uni_modules/lime-dayuts/utssdk/interface.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TimeDemoCard",
  setup(__props) {
    const currentFullTime = common_vendor.ref("");
    let timerId = 0;
    const offsetDays = common_vendor.ref(0);
    function updateClock() {
      currentFullTime.value = uni_modules_limeDayuts_common_index.dayuts().format("YYYY-MM-DD HH:mm:ss.SSS dddd");
    }
    function adjustOffset(days) {
      offsetDays.value += days;
    }
    const targetOffsetTime = common_vendor.computed(() => {
      return uni_modules_limeDayuts_common_index.dayuts().add(offsetDays.value, "day").format("YYYY-MM-DD HH:mm:ss");
    });
    const startOfMonth = common_vendor.computed(() => {
      return uni_modules_limeDayuts_common_index.dayuts().startOf("month").format("YYYY-MM-DD");
    });
    const endOfMonth = common_vendor.computed(() => {
      return uni_modules_limeDayuts_common_index.dayuts().endOf("month").format("YYYY-MM-DD");
    });
    const isLeapYear = common_vendor.computed(() => {
      return uni_modules_limeDayuts_common_index.dayuts().isLeapYear();
    });
    const daysToYearEnd = common_vendor.computed(() => {
      const endOfYear = uni_modules_limeDayuts_common_index.dayuts().endOf("year");
      const diffVal = endOfYear.diff(uni_modules_limeDayuts_common_index.dayuts(), "day");
      return Math.ceil(diffVal);
    });
    common_vendor.onMounted(() => {
      updateClock();
      timerId = setInterval(() => {
        updateClock();
      }, 100);
    });
    common_vendor.onUnmounted(() => {
      if (timerId != 0) {
        clearInterval(timerId);
      }
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(currentFullTime.value),
        b: common_vendor.t(offsetDays.value > 0 ? "+" : ""),
        c: common_vendor.t(offsetDays.value),
        d: common_vendor.o(($event) => {
          return adjustOffset(-7);
        }, "42"),
        e: common_vendor.o(($event) => {
          return adjustOffset(-1);
        }, "33"),
        f: common_vendor.o(($event) => {
          return adjustOffset(1);
        }, "7f"),
        g: common_vendor.o(($event) => {
          return adjustOffset(7);
        }, "a3"),
        h: common_vendor.t(targetOffsetTime.value),
        i: common_vendor.t(startOfMonth.value),
        j: common_vendor.t(endOfMonth.value),
        k: common_vendor.t(isLeapYear.value ? "366天 (闰年)" : "365天 (平年)"),
        l: common_vendor.t(daysToYearEnd.value),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          title: "时间日期操作 (lime-dayuts)",
          id: common_vendor.gei(_ctx, "")
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/TimeDemoCard.js.map
