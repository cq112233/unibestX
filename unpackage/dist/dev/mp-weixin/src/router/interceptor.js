"use strict";
const common_vendor = require("../../common/vendor.js");
const src_store_token = require("../store/token.js");
const src_tabbar_store = require("../tabbar/store.js");
const src_router_config = require("./config.js");
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
        if (value.includes("%")) {
          value = (_a = decodeURIComponent(value)) !== null && _a !== void 0 ? _a : "";
        }
        query.set(key, value);
      } else if (pair.length > 0) {
        query.set(pair[0], "");
      }
    }
  }
  return { path, query };
}
function judgeIsExcludePath(path) {
  let normalizedPath = path;
  if (normalizedPath.startsWith("src/")) {
    normalizedPath = `/${normalizedPath}`;
  }
  return src_router_config.EXCLUDE_LOGIN_PATH_LIST.includes(normalizedPath);
}
function doIntercept(url) {
  common_vendor.index.__f__("log", "at src/router/interceptor.uts:70", "doIntercept url:", url);
  if (url == null || url == "") {
    return true;
  }
  const urlObj = parseUrlToObj(url);
  let path = urlObj.path;
  const query = urlObj.query;
  if (path.startsWith("src/")) {
    path = `/${path}`;
  }
  if (!path.startsWith("/") && !path.startsWith("plugin://") && !path.startsWith("http://") && !path.startsWith("https://")) {
    const pages = getCurrentPages();
    let currentPath = "";
    if (pages.length > 0) {
      currentPath = pages[pages.length - 1].route;
    }
    let normalizedCurrentPath = currentPath;
    if (normalizedCurrentPath.startsWith("src/")) {
      normalizedCurrentPath = `/${normalizedCurrentPath}`;
    }
    if (!normalizedCurrentPath.startsWith("/")) {
      normalizedCurrentPath = `/${normalizedCurrentPath}`;
    }
    const lastSlashIdx = normalizedCurrentPath.lastIndexOf("/");
    let baseDir = "";
    if (lastSlashIdx >= 0) {
      baseDir = normalizedCurrentPath.substring(0, lastSlashIdx);
    }
    path = `${baseDir}/${path}`;
  }
  if (path.startsWith("src/")) {
    path = `/${path}`;
  }
  common_vendor.index.__f__("log", "at src/router/interceptor.uts:111", "doIntercept normalized path:", path);
  const tokenStore = src_store_token.useTokenStore();
  const hasLogin = tokenStore.hasValidLogin();
  common_vendor.index.__f__("log", "at src/router/interceptor.uts:116", "doIntercept login status - hasLogin:", hasLogin);
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
      common_vendor.index.__f__("log", "at src/router/interceptor.uts:159", "doIntercept: redirecting to login page", redirectUrl);
      common_vendor.index.navigateTo({ url: redirectUrl });
      return false;
    }
  } else {
    if (judgeIsExcludePath(path)) {
      common_vendor.index.__f__("log", "at src/router/interceptor.uts:167", "doIntercept: blacklisted path, redirecting to login page", redirectUrl);
      common_vendor.index.navigateTo({ url: redirectUrl });
      return false;
    }
    return true;
  }
}
const navigateToInterceptor = {
  invoke(options = null) {
    let url = "";
    if (options != null) {
      const urlObj = options;
      url = urlObj.url != null ? urlObj.url : "";
    }
    return doIntercept(url);
  }
};
const redirectToInterceptor = {
  invoke(options = null) {
    let url = "";
    if (options != null) {
      const urlObj = options;
      url = urlObj.url != null ? urlObj.url : "";
    }
    return doIntercept(url);
  }
};
const reLaunchInterceptor = {
  invoke(options = null) {
    let url = "";
    if (options != null) {
      const urlObj = options;
      url = urlObj.url != null ? urlObj.url : "";
    }
    return doIntercept(url);
  }
};
const switchTabInterceptor = {
  invoke(options = null) {
    let url = "";
    if (options != null) {
      const urlObj = options;
      url = urlObj.url != null ? urlObj.url : "";
    }
    return doIntercept(url);
  }
};
const chooseLocationInterceptor = {
  invoke(options = null) {
    return true;
  }
};
function installRouteInterceptor() {
  common_vendor.index.addInterceptor("navigateTo", navigateToInterceptor);
  common_vendor.index.addInterceptor("reLaunch", reLaunchInterceptor);
  common_vendor.index.addInterceptor("redirectTo", redirectToInterceptor);
  common_vendor.index.addInterceptor("switchTab", switchTabInterceptor);
  common_vendor.index.addInterceptor("chooseLocation", chooseLocationInterceptor);
}
function checkDirectEntry(options = null) {
  if (options != null) {
    const pathVal = options.path;
    if (pathVal != null && pathVal != "") {
      let url = `/${pathVal}`;
      navigateToInterceptor.invoke({ url });
    }
  }
}
exports.checkDirectEntry = checkDirectEntry;
exports.installRouteInterceptor = installRouteInterceptor;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/router/interceptor.js.map
