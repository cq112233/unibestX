"use strict";
const src_i18n_index = require("../i18n/index.js");
function t(key, named = null) {
  if (named != null) {
    return src_i18n_index.i18n.global.t(key, named);
  }
  return src_i18n_index.i18n.global.t(key);
}
exports.t = t;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/utils/i18n.js.map
