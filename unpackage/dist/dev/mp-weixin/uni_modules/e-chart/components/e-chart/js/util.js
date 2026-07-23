"use strict";
const common_vendor = require("../../../../../common/vendor.js");
function getRandomId() {
  return `chart_${Math.random().toString(36).substring(2, 16)}`;
}
function addUnitRpx(num) {
  return isNaN(Number(num)) ? num : `${num}rpx`;
}
function getWindowInfo() {
  if (common_vendor.index.getWindowInfo && common_vendor.index.canIUse("getWindowInfo")) {
    return common_vendor.index.getWindowInfo();
  } else {
    return common_vendor.index.getSystemInfoSync();
  }
}
exports.addUnitRpx = addUnitRpx;
exports.getRandomId = getRandomId;
exports.getWindowInfo = getWindowInfo;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/e-chart/components/e-chart/js/util.js.map
