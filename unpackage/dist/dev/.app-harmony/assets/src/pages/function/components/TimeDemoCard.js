import { C as Card } from "../../basic/components/Card.js";
import { d as dayuts } from "../../../../uni_modules/lime-dayuts/common/index.js";
import "../../../../uni_modules/lime-dayuts/common/use.js";
import "../../../../uni_modules/lime-dayuts/utssdk/interface.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataEvent: _setSharedDataEvent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsTimeDemoCard";
const { computed, onMounted, onUnmounted, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "7cb7f926",
  __className,
  __filename: "src/pages/function/components/TimeDemoCard.uvue",
  __name: "TimeDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsTimeDemoCardSharedData", sharedDataClassId: 0 })));
    const currentFullTime = ref("");
    let timerId = 0;
    const offsetDays = ref(0);
    function updateClock() {
      currentFullTime.value = dayuts().format("YYYY-MM-DD HH:mm:ss.SSS dddd");
    }
    function adjustOffset(days) {
      offsetDays.value += days;
    }
    const targetOffsetTime = computed(() => {
      return dayuts().add(offsetDays.value, "day").format("YYYY-MM-DD HH:mm:ss");
    });
    const startOfMonth = computed(() => {
      return dayuts().startOf("month").format("YYYY-MM-DD");
    });
    const endOfMonth = computed(() => {
      return dayuts().endOf("month").format("YYYY-MM-DD");
    });
    const isLeapYear = computed(() => {
      return dayuts().isLeapYear();
    });
    const daysToYearEnd = computed(() => {
      const endOfYear = dayuts().endOf("year");
      const diffVal = endOfYear.diff(dayuts(), "day");
      return Math.ceil(diffVal);
    });
    onMounted(() => {
      updateClock();
      timerId = setInterval(() => {
        updateClock();
      }, 100);
    });
    onUnmounted(() => {
      if (timerId != 0) {
        clearInterval(timerId);
      }
    });
    return () => {
      "raw js";
      const n39 = _createSharedDataComponent(
        Card,
        "9709093e",
        { title: "时间日期操作 (lime-dayuts)" },
        {
          "default": () => {
            _setSharedDataEvent(__sharedData, 1, () => {
              return adjustOffset(-7);
            });
            _setSharedDataEvent(__sharedData, 2, () => {
              return adjustOffset(-1);
            });
            _setSharedDataEvent(__sharedData, 3, () => {
              return adjustOffset(1);
            });
            _setSharedDataEvent(__sharedData, 4, () => {
              return adjustOffset(7);
            });
            _renderSharedDataEffect(() => {
              const _offsetDays = offsetDays.value;
              _setSharedData(__sharedData, 5, _toDisplayString(currentFullTime.value));
              _setSharedData(__sharedData, 6, _toDisplayString(_offsetDays > 0 ? "+" : ""));
              _setSharedData(__sharedData, 7, _toDisplayString(_offsetDays));
              _setSharedData(__sharedData, 8, _toDisplayString(targetOffsetTime.value));
              _setSharedData(__sharedData, 9, _toDisplayString(startOfMonth.value));
              _setSharedData(__sharedData, 10, _toDisplayString(endOfMonth.value));
              _setSharedData(__sharedData, 11, _toDisplayString(isLeapYear.value ? "366天 (闰年)" : "365天 (平年)"));
              _setSharedData(__sharedData, 12, _toDisplayString(daysToYearEnd.value));
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n39.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const TimeDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  TimeDemoCard as T
};
//# sourceMappingURL=TimeDemoCard.js.map
