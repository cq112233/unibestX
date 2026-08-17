class DayutsConfig extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          date: { type: "Any", optional: true },
          format: { type: String, optional: true },
          locale: { type: String, optional: true }
        };
      },
      name: "DayutsConfig"
    };
  }
  constructor(options, metadata = DayutsConfig.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.date = this.__props__.date;
    this.format = this.__props__.format;
    this.locale = this.__props__.locale;
    delete this.__props__;
  }
}
class DayutsFormats extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          LT: { type: String, optional: false },
          LTS: { type: String, optional: false },
          L: { type: String, optional: false },
          LL: { type: String, optional: false },
          LLL: { type: String, optional: false },
          LLLL: { type: String, optional: false },
          l: { type: String, optional: false },
          ll: { type: String, optional: false },
          lll: { type: String, optional: false },
          llll: { type: String, optional: false }
        };
      },
      name: "DayutsFormats"
    };
  }
  constructor(options, metadata = DayutsFormats.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.LT = this.__props__.LT;
    this.LTS = this.__props__.LTS;
    this.L = this.__props__.L;
    this.LL = this.__props__.LL;
    this.LLL = this.__props__.LLL;
    this.LLLL = this.__props__.LLLL;
    this.l = this.__props__.l;
    this.ll = this.__props__.ll;
    this.lll = this.__props__.lll;
    this.llll = this.__props__.llll;
    delete this.__props__;
  }
}
class DayutsRelativeTime extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          future: { type: String, optional: false },
          past: { type: String, optional: false },
          s: { type: String, optional: false },
          m: { type: String, optional: false },
          mm: { type: String, optional: false },
          h: { type: String, optional: false },
          hh: { type: String, optional: false },
          d: { type: String, optional: false },
          dd: { type: String, optional: false },
          M: { type: String, optional: false },
          MM: { type: String, optional: false },
          y: { type: String, optional: false },
          yy: { type: String, optional: false }
        };
      },
      name: "DayutsRelativeTime"
    };
  }
  constructor(options, metadata = DayutsRelativeTime.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.future = this.__props__.future;
    this.past = this.__props__.past;
    this.s = this.__props__.s;
    this.m = this.__props__.m;
    this.mm = this.__props__.mm;
    this.h = this.__props__.h;
    this.hh = this.__props__.hh;
    this.d = this.__props__.d;
    this.dd = this.__props__.dd;
    this.M = this.__props__.M;
    this.MM = this.__props__.MM;
    this.y = this.__props__.y;
    this.yy = this.__props__.yy;
    delete this.__props__;
  }
}
class DayutsLocale extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: false },
          weekdays: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
          weekdaysShort: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
          weekdaysMin: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
          months: { type: UTS.UTSType.withGenerics(Array, [String]), optional: false },
          monthsShort: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
          ordinal: { type: "Unknown", optional: false },
          weekStart: { type: Number, optional: true },
          yearStart: { type: Number, optional: true },
          formats: { type: DayutsFormats, optional: true },
          relativeTime: { type: DayutsRelativeTime, optional: true },
          meridiem: { type: "Unknown", optional: true }
        };
      },
      name: "DayutsLocale"
    };
  }
  constructor(options, metadata = DayutsLocale.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.weekdays = this.__props__.weekdays;
    this.weekdaysShort = this.__props__.weekdaysShort;
    this.weekdaysMin = this.__props__.weekdaysMin;
    this.months = this.__props__.months;
    this.monthsShort = this.__props__.monthsShort;
    this.ordinal = this.__props__.ordinal;
    this.weekStart = this.__props__.weekStart;
    this.yearStart = this.__props__.yearStart;
    this.formats = this.__props__.formats;
    this.relativeTime = this.__props__.relativeTime;
    this.meridiem = this.__props__.meridiem;
    delete this.__props__;
  }
}
class DayutsObject extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          years: { type: Number, optional: false },
          months: { type: Number, optional: false },
          date: { type: Number, optional: false },
          hours: { type: Number, optional: false },
          minutes: { type: Number, optional: false },
          seconds: { type: Number, optional: false },
          milliseconds: { type: Number, optional: false }
        };
      },
      name: "DayutsObject"
    };
  }
  constructor(options, metadata = DayutsObject.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.years = this.__props__.years;
    this.months = this.__props__.months;
    this.date = this.__props__.date;
    this.hours = this.__props__.hours;
    this.minutes = this.__props__.minutes;
    this.seconds = this.__props__.seconds;
    this.milliseconds = this.__props__.milliseconds;
    delete this.__props__;
  }
}
//# sourceMappingURL=interface.js.map
