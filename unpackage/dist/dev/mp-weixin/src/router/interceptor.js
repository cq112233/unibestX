"use strict";
const common_vendor = require("../../common/vendor.js");
const src_store_token = require("../store/token.js");
const src_tabbar_store = require("../tabbar/store.js");
const src_router_config = require("./config.js");
class Interceptor extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          invoke: { type: "Unknown", optional: false },
          success: { type: "Unknown", optional: true },
          fail: { type: "Unknown", optional: true },
          complete: { type: "Unknown", optional: true }
        };
      },
      name: "Interceptor"
    };
  }
  constructor(options, metadata = Interceptor.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.invoke = this.__props__.invoke;
    this.success = this.__props__.success;
    this.fail = this.__props__.fail;
    this.complete = this.__props__.complete;
    delete this.__props__;
  }
}
class UrlObj extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          path: { type: String, optional: false },
          query: { type: "Unknown", optional: false }
        };
      },
      name: "UrlObj"
    };
  }
  constructor(options, metadata = UrlObj.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.path = this.__props__.path;
    this.query = this.__props__.query;
    delete this.__props__;
  }
}
function parseUrlToObj(url) {
  var _a;
  const parts = url.split("?");
  const path = parts[0];
  const query = /* @__PURE__ */ new Map();
  if (parts.length > 1) {
    const queryStr = parts[1];
    const pairs = queryStr.split("&");
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split("=");
      if (pair.length > 1) {
        const key = pair[0];
        let value = pair[1];
        if (value.indexOf("%") >= 0) {
          value = (_a = decodeURIComponent(value)) !== null && _a !== void 0 ? _a : "";
        }
        query.set(key, value);
      } else if (pair.length > 0) {
        query.set(pair[0], "");
      }
    }
  }
  return new UrlObj({ path, query });
}
function judgeIsExcludePath(path) {
  let normalizedPath = path;
  if (normalizedPath.startsWith("src/")) {
    normalizedPath = "/" + normalizedPath;
  }
  return src_router_config.EXCLUDE_LOGIN_PATH_LIST.indexOf(normalizedPath) >= 0;
}
function doIntercept(url) {
  common_vendor.index.__f__("log", "at src/router/interceptor.uts:72", "doIntercept url:", url);
  if (url == null || url == "") {
    return true;
  }
  const urlObj = parseUrlToObj(url);
  let path = urlObj.path;
  const query = urlObj.query;
  if (path.startsWith("src/")) {
    path = "/" + path;
  }
  if (!path.startsWith("/") && !path.startsWith("plugin://") && !path.startsWith("http://") && !path.startsWith("https://")) {
    const pages = getCurrentPages();
    let currentPath = "";
    if (pages.length > 0) {
      currentPath = pages[pages.length - 1].route;
    }
    let normalizedCurrentPath = currentPath;
    if (normalizedCurrentPath.startsWith("src/")) {
      normalizedCurrentPath = "/" + normalizedCurrentPath;
    }
    if (!normalizedCurrentPath.startsWith("/")) {
      normalizedCurrentPath = "/" + normalizedCurrentPath;
    }
    const lastSlashIdx = normalizedCurrentPath.lastIndexOf("/");
    let baseDir = "";
    if (lastSlashIdx >= 0) {
      baseDir = normalizedCurrentPath.substring(0, lastSlashIdx);
    }
    path = `${baseDir}/${path}`;
  }
  if (path.startsWith("src/")) {
    path = "/" + path;
  }
  common_vendor.index.__f__("log", "at src/router/interceptor.uts:113", "doIntercept normalized path:", path);
  const tokenStore = src_store_token.useTokenStore();
  const hasLogin = tokenStore.hasValidLogin();
  common_vendor.index.__f__("log", "at src/router/interceptor.uts:118", "doIntercept login status - hasLogin:", hasLogin);
  if (hasLogin) {
    if (path !== src_router_config.LOGIN_PAGE) {
      return true;
    } else {
      const redirect = common_vendor.UTS.mapGet(query, "redirect");
      const redirectUrl_1 = redirect != null && redirect != "" ? redirect : "/src/pages/index/index";
      if (src_tabbar_store.isPageTabbar(redirectUrl_1)) {
        src_tabbar_store.setCurIdxByPath(redirectUrl_1);
        common_vendor.index.switchTab({ url: redirectUrl_1 });
      } else {
        common_vendor.index.navigateTo({ url: redirectUrl_1 });
      }
      return false;
    }
  }
  let fullPath = path;
  if (query.size > 0) {
    const paramsList = [];
    query.forEach((val, key) => {
      paramsList.push(`${key}=${val}`);
    });
    fullPath += `?${paramsList.join("&")}`;
  }
  const redirectUrl = `${src_router_config.LOGIN_PAGE}?redirect=${encodeURIComponent(fullPath)}`;
  if (src_router_config.isNeedLoginMode) {
    if (judgeIsExcludePath(path)) {
      return true;
    } else {
      if (path === src_router_config.LOGIN_PAGE) {
        return true;
      }
      common_vendor.index.__f__("log", "at src/router/interceptor.uts:158", "doIntercept: redirecting to login page", redirectUrl);
      common_vendor.index.navigateTo({ url: redirectUrl });
      return false;
    }
  } else {
    if (judgeIsExcludePath(path)) {
      common_vendor.index.__f__("log", "at src/router/interceptor.uts:166", "doIntercept: blacklisted path, redirecting to login page", redirectUrl);
      common_vendor.index.navigateTo({ url: redirectUrl });
      return false;
    }
    return true;
  }
}
const navigateToInterceptor = new Interceptor({
  success: null,
  fail: null,
  complete: null,
  invoke: function(options = null) {
    let url = "";
    if (options != null) {
      const urlObj = options;
      url = urlObj["url"] != null ? urlObj["url"] : "";
    }
    return doIntercept(url);
  }
});
const redirectToInterceptor = new Interceptor({
  success: null,
  fail: null,
  complete: null,
  invoke: function(options = null) {
    let url = "";
    if (options != null) {
      const urlObj = options;
      url = urlObj["url"] != null ? urlObj["url"] : "";
    }
    return doIntercept(url);
  }
});
const reLaunchInterceptor = new Interceptor({
  success: null,
  fail: null,
  complete: null,
  invoke: function(options = null) {
    let url = "";
    if (options != null) {
      const urlObj = options;
      url = urlObj["url"] != null ? urlObj["url"] : "";
    }
    return doIntercept(url);
  }
});
const switchTabInterceptor = new Interceptor({
  success: null,
  fail: null,
  complete: null,
  invoke: function(options = null) {
    let url = "";
    if (options != null) {
      const urlObj = options;
      url = urlObj["url"] != null ? urlObj["url"] : "";
    }
    return doIntercept(url);
  }
});
const chooseLocationInterceptor = new Interceptor({
  success: null,
  fail: null,
  complete: null,
  invoke: function(options = null) {
    return true;
  }
});
const installRouteInterceptor = () => {
  common_vendor.index.addInterceptor("navigateTo", navigateToInterceptor);
  common_vendor.index.addInterceptor("reLaunch", reLaunchInterceptor);
  common_vendor.index.addInterceptor("redirectTo", redirectToInterceptor);
  common_vendor.index.addInterceptor("switchTab", switchTabInterceptor);
  common_vendor.index.addInterceptor("chooseLocation", chooseLocationInterceptor);
};
function checkDirectEntry(options = null) {
  if (options != null) {
    const pathVal = options["path"];
    if (pathVal != null && pathVal != "") {
      let url = `/${pathVal}`;
      navigateToInterceptor.invoke({ url });
    }
  }
}
exports.checkDirectEntry = checkDirectEntry;
exports.installRouteInterceptor = installRouteInterceptor;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/router/interceptor.js.map
