const SECONDS_A_MINUTE = 60;
const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
const SECONDS_A_DAY = SECONDS_A_HOUR * 24;
const SECONDS_A_WEEK = SECONDS_A_DAY * 7;
const MILLISECONDS_A_SECOND = 1e3;
const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
const MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
const MS = "millisecond";
const S = "second";
const MIN = "minute";
const H = "hour";
const D = "day";
const W = "week";
const M = "month";
const Q = "quarter";
const Y = "year";
const DATE = "date";
const FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
const INVALID_DATE_STRING = "Invalid Date";
const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
export {
  D,
  FORMAT_DEFAULT as F,
  H,
  INVALID_DATE_STRING as I,
  M,
  Q,
  REGEX_FORMAT as R,
  S,
  W,
  Y,
  DATE as a,
  MIN as b,
  MS as c,
  MILLISECONDS_A_MINUTE as d,
  REGEX_PARSE as e,
  MILLISECONDS_A_HOUR as f,
  MILLISECONDS_A_SECOND as g,
  MILLISECONDS_A_DAY as h,
  MILLISECONDS_A_WEEK as i
};
//# sourceMappingURL=constant.js.map
