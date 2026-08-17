class RefresherTimeTextMapType extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: false },
          none: { type: String, optional: false },
          today: { type: String, optional: false },
          yesterday: { type: String, optional: false }
        };
      },
      name: "RefresherTimeTextMapType"
    };
  }
  constructor(options, metadata = RefresherTimeTextMapType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.none = this.__props__.none;
    this.today = this.__props__.today;
    this.yesterday = this.__props__.yesterday;
    delete this.__props__;
  }
}
const refresherTimeStorageKey = "Z-PAGING-X-REFRESHER-TIME-STORAGE-KEY";
const refresherTimeTextMap = new RefresherTimeTextMapType({
  title: "最后更新：",
  none: "无",
  today: "今天",
  yesterday: "昨天"
});
function updateRefesrherTime(key) {
  var _a;
  const datas = (_a = _getRefesrherTime()) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
  datas[key] = getTime();
  uni.setStorageSync(refresherTimeStorageKey, datas);
}
function getRefesrherFormatTimeByKey(key) {
  const time = _getRefesrherTimeByKey(key);
  const timeText = time != null ? _timeFormat(time) : refresherTimeTextMap.none;
  return `${refresherTimeTextMap.title}${timeText}`;
}
function getTime() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function _getRefesrherTime() {
  const result = uni.getStorageSync(refresherTimeStorageKey);
  return result != null && UTS.isInstanceOf(result, UTSJSONObject) ? result : null;
}
function _getRefesrherTimeByKey(key) {
  const datas = _getRefesrherTime();
  if (datas != null) {
    return datas.getNumber(key);
  }
  return null;
}
function _timeFormat(time) {
  const date = new Date(time);
  const currentDate = /* @__PURE__ */ new Date();
  const dateDay = _onlyKeepDateDay(new Date(time));
  const currentDateDay = _onlyKeepDateDay(/* @__PURE__ */ new Date());
  const disTime = dateDay.getTime() - currentDateDay.getTime();
  let dayStr;
  const timeStr = _dateTimeFormat(date);
  if (disTime == 0) {
    dayStr = refresherTimeTextMap.today;
  } else if (disTime == -864e5) {
    dayStr = refresherTimeTextMap.yesterday;
  } else {
    dayStr = _dateDayFormat(date, date.getFullYear() !== currentDate.getFullYear());
  }
  return `${dayStr} ${timeStr}`;
}
function _onlyKeepDateDay(date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}
function _dateDayFormat(date, showYear = true) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return showYear ? `${year}-${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}` : `${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}`;
}
function _dateTimeFormat(date) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${_fullZeroToTwo(hour)}:${_fullZeroToTwo(minute)}`;
}
function _fullZeroToTwo(value) {
  const str = value.toString();
  return str.length == 1 ? "0" + str : str;
}
export {
  getTime as a,
  getRefesrherFormatTimeByKey as g,
  updateRefesrherTime as u
};
//# sourceMappingURL=index.js.map
