import { u as useTokenStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/token&";
import { i as isPageTabbar, a as setCurIdxByPath } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/tabbar/store&";
import { L as LOGIN_PAGE, i as isNeedLoginMode, E as EXCLUDE_LOGIN_PATH_LIST } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/router/config&";
class UrlObj extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
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
  return EXCLUDE_LOGIN_PATH_LIST.indexOf(normalizedPath) >= 0;
}
function doIntercept(url) {
  uni.__f__("log", "at src/router/interceptor.uts:72", "doIntercept url:", url);
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
  uni.__f__("log", "at src/router/interceptor.uts:113", "doIntercept normalized path:", path);
  const tokenStore = useTokenStore();
  const hasLogin = tokenStore.hasValidLogin();
  uni.__f__("log", "at src/router/interceptor.uts:118", "doIntercept login status - hasLogin:", hasLogin);
  if (hasLogin) {
    if (path !== LOGIN_PAGE) {
      return true;
    } else {
      const redirect = UTS.mapGet(query, "redirect");
      const redirectUrl_1 = redirect != null && redirect != "" ? redirect : "/src/pages/index/index";
      if (isPageTabbar(redirectUrl_1)) {
        setCurIdxByPath(redirectUrl_1);
        uni.switchTab({ url: redirectUrl_1 });
      } else {
        uni.navigateTo({ url: redirectUrl_1 });
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
  const redirectUrl = `${LOGIN_PAGE}?redirect=${encodeURIComponent(fullPath)}`;
  if (isNeedLoginMode) {
    if (judgeIsExcludePath(path)) {
      return true;
    } else {
      if (path === LOGIN_PAGE) {
        return true;
      }
      uni.__f__("log", "at src/router/interceptor.uts:158", "doIntercept: redirecting to login page", redirectUrl);
      uni.navigateTo({ url: redirectUrl });
      return false;
    }
  } else {
    if (judgeIsExcludePath(path)) {
      uni.__f__("log", "at src/router/interceptor.uts:166", "doIntercept: blacklisted path, redirecting to login page", redirectUrl);
      uni.navigateTo({ url: redirectUrl });
      return false;
    }
    return true;
  }
}
const navigateToInterceptor = new UTSJSONObject({
  invoke: function(options = null) {
    let url = "";
    if (options != null) {
      const opt = options;
      url = opt.url;
    }
    return doIntercept(url);
  }
});
const redirectToInterceptor = new UTSJSONObject({
  invoke: function(options = null) {
    let url = "";
    if (options != null) {
      const opt = options;
      url = opt.url;
    }
    return doIntercept(url);
  }
});
const reLaunchInterceptor = new UTSJSONObject({
  invoke: function(options = null) {
    let url = "";
    if (options != null) {
      const opt = options;
      url = opt.url;
    }
    return doIntercept(url);
  }
});
const switchTabInterceptor = new UTSJSONObject(
  {
    invoke: function(options = null) {
      let url = "";
      if (options != null) {
        const opt = options;
        url = opt.url;
      }
      return doIntercept(url);
    }
  }
  /**
   * 地图选点调用拦截器（默认直接放行）
   */
);
const chooseLocationInterceptor = new UTSJSONObject(
  {
    invoke: function(options = null) {
      return true;
    }
  }
  /**
   * 全局路由拦截安装器
   */
);
const installRouteInterceptor = () => {
  uni.addInterceptor("navigateTo", navigateToInterceptor);
  uni.addInterceptor("reLaunch", reLaunchInterceptor);
  uni.addInterceptor("redirectTo", redirectToInterceptor);
  uni.addInterceptor("switchTab", switchTabInterceptor);
  uni.addInterceptor("chooseLocation", chooseLocationInterceptor);
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
export {
  checkDirectEntry as c,
  installRouteInterceptor as i
};
//# sourceMappingURL=interceptor.js.map
