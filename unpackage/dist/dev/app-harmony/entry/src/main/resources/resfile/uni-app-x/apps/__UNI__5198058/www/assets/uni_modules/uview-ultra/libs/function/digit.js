import { _ as __read } from "../../../e-chart/components/e-chart/uts/WebviewEchart.js";
let _boundaryCheckingState = true;
function strip(num = null, precision = 15) {
  return +parseFloat(num.toPrecision(precision));
}
function digitLength(num) {
  const eSplit = num.toString().split(/[eE]/);
  let tmp = eSplit[0].split(".")[1];
  if (tmp != "") {
    tmp = "";
  }
  let tmp2 = eSplit[1];
  let tmp2Number = 0;
  if (tmp2 != "") {
    tmp2Number = parseInt(tmp2);
  }
  const len = tmp.length - +tmp2Number;
  return len > 0 ? len : 0;
}
function float2Fixed(num) {
  if (num.toString().indexOf("e") === -1) {
    return parseInt(num.toString().replace(".", ""));
  }
  const dLen = digitLength(num);
  return dLen > 0 ? strip(num * Math.pow(10, dLen)) : num;
}
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_VALUE || num < Number.MIN_VALUE) {
      uni.__f__("warn", "at uni_modules/uview-ultra/libs/function/digit.uts:55", `${num} 超出了精度限制，结果可能不正确`);
    }
  }
}
function iteratorOperation(arr, operation) {
  const _a = __read(arr), num1 = _a[0], num2 = _a[1], others = _a.slice(2);
  let res = operation(num1, num2);
  others.forEach((num) => {
    res = operation(res, num);
  });
  return res;
}
function times(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }
  const _a = __read(nums, 2), num1 = _a[0], num2 = _a[1];
  const num1Changed = float2Fixed(num1);
  const num2Changed = float2Fixed(num2);
  const baseNum = digitLength(num1) + digitLength(num2);
  const leftValue = num1Changed * num2Changed;
  checkBoundary(leftValue);
  return leftValue / Math.pow(10, baseNum);
}
function plus(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }
  const _a = __read(nums, 2), num1 = _a[0], num2 = _a[1];
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}
function minus(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }
  const _a = __read(nums, 2), num1 = _a[0], num2 = _a[1];
  const baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}
function divide(...nums) {
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }
  const _a = __read(nums, 2), num1 = _a[0], num2 = _a[1];
  const num1Changed = float2Fixed(num1);
  const num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}
function round(num, ratio) {
  const base = Math.pow(10, ratio);
  let result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  return result;
}
function enableBoundaryChecking(flag = true) {
  _boundaryCheckingState = flag;
}
new UTSJSONObject({
  times,
  plus,
  minus,
  divide,
  round,
  enableBoundaryChecking
});
//# sourceMappingURL=digit.js.map
