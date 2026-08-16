"use strict";
const common_vendor = require("../../../../common/vendor.js");
function debugWarn(scope, mess) {
  {
    const err = `[RiceUI] ${scope}:` + mess;
    common_vendor.index.__f__("warn", "at uni_modules/rice-ui/libs/utils/debug.uts:4", err);
  }
}
exports.debugWarn = debugWarn;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/utils/debug.js.map
