import "./lunar.js";
class CalendarData extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          fullDate: { type: String, optional: false },
          year: { type: Number, optional: false },
          month: { type: Number, optional: false },
          date: { type: Number, optional: false },
          day: { type: Number, optional: false },
          lunarInfo: { type: "Unknown", optional: true },
          isToday: { type: Boolean, optional: false },
          text: { type: String, optional: true },
          topInfo: { type: String, optional: true },
          topInfoColor: { type: String, optional: true },
          bottomInfo: { type: String, optional: true },
          bottomInfoColor: { type: String, optional: true },
          badge: { type: Boolean, optional: true },
          disabled: { type: Boolean, optional: true },
          isCurrentMonth: { type: Boolean, optional: true }
        };
      },
      name: "CalendarData"
    };
  }
  constructor(options, metadata = CalendarData.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.fullDate = this.__props__.fullDate;
    this.year = this.__props__.year;
    this.month = this.__props__.month;
    this.date = this.__props__.date;
    this.day = this.__props__.day;
    this.lunarInfo = this.__props__.lunarInfo;
    this.isToday = this.__props__.isToday;
    this.text = this.__props__.text;
    this.topInfo = this.__props__.topInfo;
    this.topInfoColor = this.__props__.topInfoColor;
    this.bottomInfo = this.__props__.bottomInfo;
    this.bottomInfoColor = this.__props__.bottomInfoColor;
    this.badge = this.__props__.badge;
    this.disabled = this.__props__.disabled;
    this.isCurrentMonth = this.__props__.isCurrentMonth;
    delete this.__props__;
  }
}
class GridItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          y: { type: Number, optional: false },
          width: { type: Number, optional: false },
          height: { type: Number, optional: false },
          data: { type: CalendarData, optional: false }
        };
      },
      name: "GridItem"
    };
  }
  constructor(options, metadata = GridItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.data = this.__props__.data;
    delete this.__props__;
  }
}
class CalendarPanelChangeResult extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          firstDate: { type: String, optional: false },
          lastDate: { type: String, optional: false },
          panelDate: { type: String, optional: false },
          prevMonthFirstDate: { type: String, optional: false },
          nextMonthLastDate: { type: String, optional: false },
          week: { type: Number, optional: false }
        };
      },
      name: "CalendarPanelChangeResult"
    };
  }
  constructor(options, metadata = CalendarPanelChangeResult.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.firstDate = this.__props__.firstDate;
    this.lastDate = this.__props__.lastDate;
    this.panelDate = this.__props__.panelDate;
    this.prevMonthFirstDate = this.__props__.prevMonthFirstDate;
    this.nextMonthLastDate = this.__props__.nextMonthLastDate;
    this.week = this.__props__.week;
    delete this.__props__;
  }
}
class CalendarProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          mode: { type: "Unknown", optional: true },
          date: { type: "Any", optional: true },
          switchMode: { type: "Unknown", optional: true },
          minDate: { type: String, optional: true },
          maxDate: { type: String, optional: true },
          lunar: { type: Boolean, optional: true },
          title: { type: String, optional: true },
          showTitle: { type: Boolean, optional: true },
          color: { type: String, optional: true },
          formatter: { type: "Unknown", optional: true },
          showSubtitle: { type: Boolean, optional: true },
          showConfirmBtn: { type: Boolean, optional: true },
          confirmText: { type: String, optional: true },
          confirmDisabledText: { type: String, optional: true },
          maxRange: { type: Number, optional: true },
          rangePrompt: { type: String, optional: true },
          showRangePrompt: { type: Boolean, optional: true },
          allowSameDay: { type: Boolean, optional: true },
          rowHeight: { type: "Unknown", optional: true },
          readonly: { type: Boolean, optional: true },
          firstDayOfWeek: { type: Number, optional: true },
          closeable: { type: Boolean, optional: true },
          closeIcon: { type: String, optional: true },
          usePopup: { type: Boolean, optional: true },
          closeOnClickClose: { type: Boolean, optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          safeAreaInsetBottom: { type: Boolean, optional: true },
          zIndex: { type: Number, optional: true },
          weeklyCalendar: { type: Boolean, optional: true },
          showWeeklyText: { type: Boolean, optional: true },
          showFullDate: { type: Boolean, optional: true },
          showMonthMark: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "CalendarProps"
    };
  }
  constructor(options, metadata = CalendarProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.mode = this.__props__.mode;
    this.date = this.__props__.date;
    this.switchMode = this.__props__.switchMode;
    this.minDate = this.__props__.minDate;
    this.maxDate = this.__props__.maxDate;
    this.lunar = this.__props__.lunar;
    this.title = this.__props__.title;
    this.showTitle = this.__props__.showTitle;
    this.color = this.__props__.color;
    this.formatter = this.__props__.formatter;
    this.showSubtitle = this.__props__.showSubtitle;
    this.showConfirmBtn = this.__props__.showConfirmBtn;
    this.confirmText = this.__props__.confirmText;
    this.confirmDisabledText = this.__props__.confirmDisabledText;
    this.maxRange = this.__props__.maxRange;
    this.rangePrompt = this.__props__.rangePrompt;
    this.showRangePrompt = this.__props__.showRangePrompt;
    this.allowSameDay = this.__props__.allowSameDay;
    this.rowHeight = this.__props__.rowHeight;
    this.readonly = this.__props__.readonly;
    this.firstDayOfWeek = this.__props__.firstDayOfWeek;
    this.closeable = this.__props__.closeable;
    this.closeIcon = this.__props__.closeIcon;
    this.usePopup = this.__props__.usePopup;
    this.closeOnClickClose = this.__props__.closeOnClickClose;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.safeAreaInsetBottom = this.__props__.safeAreaInsetBottom;
    this.zIndex = this.__props__.zIndex;
    this.weeklyCalendar = this.__props__.weeklyCalendar;
    this.showWeeklyText = this.__props__.showWeeklyText;
    this.showFullDate = this.__props__.showFullDate;
    this.showMonthMark = this.__props__.showMonthMark;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  CalendarPanelChangeResult as C,
  GridItem as G,
  CalendarData as a
};
//# sourceMappingURL=type.js.map
