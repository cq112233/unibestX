"use strict";
const common_vendor = require("../../common/vendor.js");
let lastRedirectTime = 0;
function toLoginPage(options = null) {
  var _a, _b;
  const now = Date.now();
  if (now - lastRedirectTime < 1e3) {
    return null;
  }
  lastRedirectTime = now;
  const opts = options !== null && options !== void 0 ? options : new UTSJSONObject({});
  const mode = (_a = opts["mode"]) !== null && _a !== void 0 ? _a : "navigateTo";
  const queryString = (_b = opts["queryString"]) !== null && _b !== void 0 ? _b : "";
  const LOGIN_PAGE = "/src/pages/auth/login";
  const url = `${LOGIN_PAGE}${queryString}`;
  const pages = getCurrentPages();
  if (pages.length > 0) {
    const currentRoute = pages[pages.length - 1].route;
    const currentPath = currentRoute.startsWith("/") ? currentRoute : `/${currentRoute}`;
    if (currentPath === LOGIN_PAGE) {
      return null;
    }
  }
  if (mode === "navigateTo") {
    common_vendor.index.navigateTo({ url });
  } else {
    common_vendor.index.reLaunch({ url });
  }
}
exports.toLoginPage = toLoginPage;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/utils/toLoginPage.js.map
