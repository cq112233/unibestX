"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_ricePicker_type = require("../rice-picker/type.js");
require("./type.js");
const DATE_MODES = ["year", "month", "day"];
const TIME_MODES = ["hour", "minute", "second"];
const FULL_MODES = [...DATE_MODES, ...TIME_MODES];
const startOfMaps = new common_vendor.UTSJSONObject({
  year: "year",
  month: "month",
  date: "date",
  minute: "minute",
  time: "second",
  datehour: "hour",
  dateminute: "minute",
  datetime: "second"
});
const unitMaps = new common_vendor.UTSJSONObject({
  year: ["year"],
  month: ["year", "month"],
  date: DATE_MODES,
  minute: ["hour", "minute"],
  time: TIME_MODES,
  datehour: [...DATE_MODES, "hour"],
  dateminute: [...DATE_MODES, "hour", "minute"],
  datetime: FULL_MODES
  //年月日时分秒
});
const isFun = (val = null) => {
  return val != null && typeof val == "function";
};
const getMode = (type) => {
  const maps = unitMaps[type];
  return maps !== null && maps !== void 0 ? maps : unitMaps["date"];
};
const getOptions = (min, max, type, formatter = null, filter = null) => {
  if (min > max)
    min = max;
  const n = max - min + 1;
  let options = [];
  for (let i = 0; i < n; i++) {
    const value = min + i;
    let option = new uni_modules_riceUi_components_ricePicker_type.PickerOption({
      disabled: null,
      children: null,
      value,
      text: uni_modules_riceUi_libs_utils_basic.padZero(value),
      extend: new common_vendor.UTSJSONObject({
        type
      })
    });
    if (isFun(formatter)) {
      option = formatter(type, option);
    }
    options.push(option);
  }
  return isFun(filter) ? filter(type, options) : options;
};
const isTime = (val = null) => {
  if (val == null)
    return false;
  const timeRegex = /^(0?[0-9]|1[0-9]|2[0-3])([:]([0-5]?[0-9])){1,2}$/;
  return timeRegex.test(val);
};
const isRightDate = (val = null) => {
  const reg = /^(?:\d{2,4})(?:[-\/](?:0?[1-9]|1[0-2])(?:[-\/](?:0?[1-9]|[12][0-9]|3[01])(?:\s(?:[01]?[0-9]|2[0-3])(?::[0-5]?[0-9](?::[0-5]?[0-9])?)?)?)?)?$/;
  const flag = val == null ? false : reg.test(val);
  return flag;
};
exports.FULL_MODES = FULL_MODES;
exports.getMode = getMode;
exports.getOptions = getOptions;
exports.isRightDate = isRightDate;
exports.isTime = isTime;
exports.startOfMaps = startOfMaps;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-datetime-picker/utils.js.map
