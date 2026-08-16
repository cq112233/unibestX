"use strict";
require("./constant.js");
require("./type.js");
function fillArr(arr) {
  while (arr.length < 4) {
    arr.push("");
  }
  return arr;
}
function splitColorStr(str, parseNum) {
  var _a;
  const match = (_a = str.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g)) !== null && _a !== void 0 ? _a : [];
  const m = fillArr(match);
  let numList = m.map((item) => {
    return parseFloat(item);
  });
  for (let i = 0; i < 3; i += 1) {
    numList[i] = parseNum(numList[i], m[i], i);
  }
  if (m[3] != "") {
    numList[3] = m[3].includes("%") ? numList[3] / 100 : numList[3];
  } else {
    numList[3] = 1;
  }
  return numList;
}
function limitRange(value, max = 255) {
  const mergedMax = max || 255;
  if (value > mergedMax) {
    return mergedMax;
  }
  if (value < 0) {
    return 0;
  }
  return value;
}
const parseHSVorHSL = (num, _, index) => {
  return index === 0 ? num : num / 100;
};
exports.limitRange = limitRange;
exports.parseHSVorHSL = parseHSVorHSL;
exports.splitColorStr = splitColorStr;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/plugin/coloruts/utils.js.map
