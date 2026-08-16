"use strict";
const common_vendor = require("../../../../../common/vendor.js");
class CurrentTime extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          days: { type: Number, optional: false },
          hours: { type: Number, optional: false },
          minutes: { type: Number, optional: false },
          seconds: { type: Number, optional: false },
          milliseconds: { type: Number, optional: false },
          remainTime: { type: Number, optional: false }
        };
      },
      name: "CurrentTime"
    };
  }
  constructor(options, metadata = CurrentTime.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.days = this.__props__.days;
    this.hours = this.__props__.hours;
    this.minutes = this.__props__.minutes;
    this.seconds = this.__props__.seconds;
    this.milliseconds = this.__props__.milliseconds;
    this.remainTime = this.__props__.remainTime;
    delete this.__props__;
  }
}
class UseCountDownOptions extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          time: { type: Number, optional: false },
          millisecond: { type: Boolean, optional: true },
          onChange: { type: "Unknown", optional: true },
          onFinish: { type: "Unknown", optional: true }
        };
      },
      name: "UseCountDownOptions"
    };
  }
  constructor(options, metadata = UseCountDownOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.time = this.__props__.time;
    this.millisecond = this.__props__.millisecond;
    this.onChange = this.__props__.onChange;
    this.onFinish = this.__props__.onFinish;
    delete this.__props__;
  }
}
class UseCountDownResult extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          current: { type: "Unknown", optional: false },
          start: { type: "Unknown", optional: false },
          pause: { type: "Unknown", optional: false },
          reset: { type: "Unknown", optional: false }
        };
      },
      name: "UseCountDownResult"
    };
  }
  constructor(options, metadata = UseCountDownResult.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.current = this.__props__.current;
    this.start = this.__props__.start;
    this.pause = this.__props__.pause;
    this.reset = this.__props__.reset;
    delete this.__props__;
  }
}
const SECOND = 1e3;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const parseTime = (time) => {
  const days = Math.floor(time / DAY);
  const hours = Math.floor(time % DAY / HOUR);
  const minutes = Math.floor(time % HOUR / MINUTE);
  const seconds = Math.floor(time % MINUTE / SECOND);
  const milliseconds = Math.floor(time % SECOND);
  return new CurrentTime({
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    remainTime: time
  });
};
const isSameSecond = (time1, time2) => {
  return Math.floor(time1 / 1e3) == Math.floor(time2 / 1e3);
};
function useCountDown(options) {
  let timerId = common_vendor.ref(null);
  const runing = common_vendor.ref(false);
  const remainTime = common_vendor.ref(options.time);
  const endTime = common_vendor.ref(0);
  const current = common_vendor.computed(() => {
    return parseTime(remainTime.value);
  });
  const clearTimer = () => {
    if (timerId.value != null) {
      clearTimeout(timerId.value);
      timerId.value = null;
    }
  };
  const pause = () => {
    runing.value = false;
    clearTimer();
  };
  const setRemainTime = (remain) => {
    var _a, _b;
    remainTime.value = remain;
    (_a = options.onChange) === null || _a === void 0 ? null : _a.call(options, current.value);
    if (remain <= 0) {
      pause();
      (_b = options.onFinish) === null || _b === void 0 ? null : _b.call(options);
    }
  };
  const getRemainTime = () => {
    return Math.max(endTime.value - Date.now(), 0);
  };
  let millisecondTick = null;
  let secondTick = null;
  millisecondTick = () => {
    clearTimer();
    timerId.value = setTimeout(() => {
      setRemainTime(getRemainTime());
      if (remainTime.value > 0) {
        millisecondTick();
      }
    }, 30);
  };
  secondTick = () => {
    clearTimer();
    timerId.value = setTimeout(() => {
      const remain = getRemainTime();
      if (!isSameSecond(remain, remainTime.value) || remain == 0) {
        setRemainTime(remain);
      }
      if (remainTime.value > 0) {
        secondTick();
      }
    }, 30);
  };
  const toTick = () => {
    if (options.millisecond == true) {
      millisecondTick();
    } else {
      secondTick();
    }
  };
  const start = () => {
    if (!runing.value) {
      endTime.value = Date.now() + remainTime.value;
      runing.value = true;
      toTick();
    }
  };
  function reset(totalTime = null) {
    if (totalTime == null)
      totalTime = options.time;
    pause();
    remainTime.value = totalTime;
  }
  common_vendor.onUnmounted(() => {
    clearTimer();
  });
  return new UseCountDownResult({
    start,
    reset: (totalTime = null) => {
      return reset(totalTime);
    },
    pause,
    current
  });
}
exports.UseCountDownOptions = UseCountDownOptions;
exports.useCountDown = useCountDown;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/use/useCountDown/index.js.map
