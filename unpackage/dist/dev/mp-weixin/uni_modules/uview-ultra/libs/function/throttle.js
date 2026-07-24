"use strict";
function throttle(func, wait = 500, immediate = true) {
  let flag = false;
  if (immediate) {
    if (!flag) {
      flag = true;
      if (typeof func == "function") {
        func();
      }
      setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    setTimeout(() => {
      flag = false;
      if (typeof func == "function") {
        func();
      }
    }, wait);
  }
}
exports.throttle = throttle;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/libs/function/throttle.js.map
