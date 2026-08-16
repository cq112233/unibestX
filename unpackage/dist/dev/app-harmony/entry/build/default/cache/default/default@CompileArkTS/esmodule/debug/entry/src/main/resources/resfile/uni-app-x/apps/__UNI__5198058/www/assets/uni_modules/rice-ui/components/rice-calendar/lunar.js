const lunarYears = [
  19416,
  // 1901-2000
  19168,
  42352,
  21717,
  53856,
  55632,
  91476,
  22176,
  39632,
  21970,
  19168,
  42422,
  42192,
  53840,
  119381,
  46400,
  54944,
  44450,
  38320,
  84343,
  18800,
  42160,
  46261,
  27216,
  27968,
  109396,
  11104,
  38256,
  21234,
  18800,
  25958,
  54432,
  59984,
  92821,
  23248,
  11104,
  100067,
  37600,
  116951,
  51536,
  54432,
  120998,
  46416,
  22176,
  107956,
  9680,
  37584,
  53938,
  43344,
  46423,
  27808,
  46416,
  86869,
  19872,
  42416,
  83315,
  21168,
  43432,
  59728,
  27296,
  44710,
  43856,
  19296,
  43748,
  42352,
  21088,
  62051,
  55632,
  23383,
  22176,
  38608,
  19925,
  19152,
  42192,
  54484,
  53840,
  54616,
  46400,
  46752,
  103846,
  38320,
  18864,
  43380,
  42160,
  45690,
  27216,
  27968,
  44870,
  43872,
  38256,
  19189,
  18800,
  25776,
  29859,
  59984,
  27480,
  23232,
  43872,
  38613,
  37600,
  51552,
  // 2001-2100
  55636,
  54432,
  55888,
  30034,
  22176,
  43959,
  9680,
  37584,
  51893,
  43344,
  46240,
  47780,
  44368,
  21977,
  19360,
  42416,
  86390,
  21168,
  43312,
  31060,
  27296,
  44368,
  23378,
  19296,
  42726,
  42208,
  53856,
  60005,
  54576,
  23200,
  30371,
  38608,
  19195,
  19152,
  42192,
  118966,
  53840,
  54560,
  56645,
  46496,
  22224,
  21938,
  18864,
  42359,
  42160,
  43600,
  111189,
  27936,
  44448,
  84835,
  37744,
  18936,
  18800,
  25776,
  92326,
  59984,
  27424,
  108228,
  43744,
  37600,
  53987,
  51552,
  54615,
  54432,
  55888,
  23893,
  22176,
  42704,
  21972,
  21200,
  43448,
  43344,
  46240,
  46758,
  44368,
  21920,
  43940,
  42416,
  21168,
  45683,
  26928,
  29495,
  27296,
  44368,
  84821,
  19296,
  42352,
  21732,
  53600,
  59752,
  54560,
  55968,
  92838,
  22224,
  19168,
  43476,
  41680,
  53584,
  62034,
  54560
];
const N_STR_3 = ["月", "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
const N_STR_1 = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const N_STR_2 = ["初", "十", "廿", "卅", "闰"];
class InfoType extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          lunarY: { type: Number, optional: false },
          lunarM: { type: Number, optional: false },
          lunarD: { type: Number, optional: false },
          isLeap: { type: Boolean, optional: false }
        };
      },
      name: "InfoType"
    };
  }
  constructor(options, metadata = InfoType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.lunarY = this.__props__.lunarY;
    this.lunarM = this.__props__.lunarM;
    this.lunarD = this.__props__.lunarD;
    this.isLeap = this.__props__.isLeap;
    delete this.__props__;
  }
}
class LunarInfoType extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          lYear: { type: Number, optional: false },
          lMonth: { type: Number, optional: false },
          lDay: { type: Number, optional: false },
          IMonthCn: { type: String, optional: false },
          IDayCn: { type: String, optional: false },
          cYear: { type: Number, optional: false },
          cMonth: { type: Number, optional: false },
          cDay: { type: Number, optional: false },
          gzYear: { type: String, optional: true },
          gzMonth: { type: String, optional: true },
          gzDay: { type: String, optional: true },
          isToday: { type: Boolean, optional: false },
          isLeap: { type: Boolean, optional: false },
          nWeek: { type: Number, optional: true },
          ncWeek: { type: String, optional: true },
          isTerm: { type: Boolean, optional: true },
          Term: { type: String, optional: true },
          astro: { type: String, optional: true }
        };
      },
      name: "LunarInfoType"
    };
  }
  constructor(options, metadata = LunarInfoType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.lYear = this.__props__.lYear;
    this.lMonth = this.__props__.lMonth;
    this.lDay = this.__props__.lDay;
    this.IMonthCn = this.__props__.IMonthCn;
    this.IDayCn = this.__props__.IDayCn;
    this.cYear = this.__props__.cYear;
    this.cMonth = this.__props__.cMonth;
    this.cDay = this.__props__.cDay;
    this.gzYear = this.__props__.gzYear;
    this.gzMonth = this.__props__.gzMonth;
    this.gzDay = this.__props__.gzDay;
    this.isToday = this.__props__.isToday;
    this.isLeap = this.__props__.isLeap;
    this.nWeek = this.__props__.nWeek;
    this.ncWeek = this.__props__.ncWeek;
    this.isTerm = this.__props__.isTerm;
    this.Term = this.__props__.Term;
    this.astro = this.__props__.astro;
    delete this.__props__;
  }
}
class Lunar {
  constructor() {
    this.lunarYearDaysMap = /* @__PURE__ */ new Map();
    this.lunarMonthDaysMap = /* @__PURE__ */ new Map();
  }
  /**
      * 传入农历数字月份返回汉语通俗表示法
      * @param lunar month
      * @return Cn string
      * @eg:let cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
      */
  toChinaMonth(m, leap = false) {
    m = Math.max(1, m);
    return leap ? N_STR_3[4] + N_STR_3[m] + N_STR_3[0] : N_STR_3[m] + N_STR_3[0];
  }
  /**
      * 传入农历日期数字返回汉字表示法
      * @param lunar day
      * @return Cn string
      * @eg:let cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
      */
  toChinaDay(d) {
    let s;
    switch (d) {
      case 10:
        s = "初十";
        break;
      case 20:
        s = "二十";
        break;
      case 30:
        s = "三十";
        break;
      default:
        s = N_STR_2[Math.floor(d / 10)];
        s += N_STR_1[d % 10];
    }
    return s;
  }
  /**
      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:let leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
  leapMonth(year) {
    return lunarYears[year - 1900] & 15;
  }
  /**
      * 返回农历y年闰月的天数 若该年没有闰月则返回0
      * @param lunar Year
      * @return Number (0、29、30)
      * @eg:let leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
  leapDays(year) {
    if (this.leapMonth(year) > 0) {
      return (lunarYears[year - 1900] & 65536) != 0 ? 30 : 29;
    }
    return 0;
  }
  // 某年份农历各月天数
  lunarMonthDays(year) {
    let monthDays = UTS.mapGet(this.lunarMonthDaysMap, year);
    if (monthDays != null) {
      return monthDays;
    }
    monthDays = [];
    let lunarYear = lunarYears[year - 1900];
    for (let i = 15; i >= 4; i--) {
      let monthDay = (lunarYear >> i & 1) != 0 ? 30 : 29;
      monthDays.push(monthDay);
    }
    let leapM = this.leapMonth(year);
    if (leapM > 0)
      monthDays.splice(leapM, 0, this.leapDays(year));
    this.lunarMonthDaysMap.set(year, monthDays);
    return monthDays;
  }
  // 某年农历天数
  lunarYearDays(year) {
    if (this.lunarYearDaysMap.has(year)) {
      return UTS.mapGet(this.lunarYearDaysMap, year);
    }
    let num = 0;
    this.lunarMonthDays(year).forEach((item) => {
      num += item;
    });
    this.lunarYearDaysMap.set(year, num);
    return num;
  }
  /**
      * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
      * @param y  solar year
      * @param m  solar month
      * @param d  solar day
      * @return JSON object
      * @eg:uni.__f__('log','at uni_modules/rice-ui/components/rice-calendar/lunar.uts:196',calendar.solar2lunar(1987,11,01));
      */
  solar2lunar(y, m, d) {
    let moonDay = this.solar_date(y, m, d);
    let lYear = moonDay.lunarY;
    let lMonth = moonDay.lunarM;
    let lDay = moonDay.lunarD;
    let isLeap = moonDay.isLeap;
    const IMonthCn = this.toChinaMonth(lMonth, isLeap);
    let IDayCn = lDay == 1 ? IMonthCn : this.toChinaDay(lDay);
    let isTodayObj = /* @__PURE__ */ new Date();
    let isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    let info = new LunarInfoType({
      gzYear: null,
      gzMonth: null,
      gzDay: null,
      nWeek: null,
      ncWeek: null,
      isTerm: null,
      Term: null,
      astro: null,
      "lYear": lYear,
      "lMonth": lMonth,
      "lDay": lDay,
      "IMonthCn": IMonthCn,
      "IDayCn": IDayCn,
      "cYear": y,
      "cMonth": m,
      "cDay": d,
      "isToday": isToday,
      "isLeap": isLeap
    });
    return info;
  }
  solar_date(y, m, d) {
    let date = new Date(y, m - 1, d);
    let offset = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(1901, 1, 19)) / 864e5;
    let temp = 0;
    let i;
    for (i = 1901; i < 2101 && offset > 0; i++) {
      temp = this.lunarYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }
    let isLeap = false;
    let j = 0;
    let monthDays = this.lunarMonthDays(i);
    let leapM = this.leapMonth(i);
    if (offset > 0) {
      for (j = 0; j < monthDays.length && offset > 0; j++) {
        temp = monthDays[j];
        offset -= temp;
      }
      if (offset == 0) {
        j++;
      }
      if (offset < 0) {
        offset += temp;
      }
    } else {
      if (offset == -23) {
        new InfoType({
          lunarY: i,
          lunarM: 12,
          lunarD: 8,
          isLeap: false
        });
      }
    }
    if (leapM > 0) {
      if (j == leapM + 1) {
        isLeap = true;
      }
      if (j >= leapM + 1) {
        j--;
      }
    }
    const info = new InfoType({
      lunarY: i,
      lunarM: j,
      lunarD: ++offset,
      isLeap
    });
    return info;
  }
}
export {
  Lunar as L
};
//# sourceMappingURL=lunar.js.map
