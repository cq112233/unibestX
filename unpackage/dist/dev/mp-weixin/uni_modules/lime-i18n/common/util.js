"use strict";
require("../../../common/vendor.js");
require("./errors.js");
require("./warnings.js");
function getAllKeys(map) {
  let keys = [];
  map.forEach((_, key) => {
    keys.push(key);
  });
  return keys;
}
function isObject(obj = null) {
  return obj != null && typeof obj == "object";
}
exports.getAllKeys = getAllKeys;
exports.isObject = isObject;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-i18n/common/util.js.map
