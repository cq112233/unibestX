"use strict";
const common_vendor = require("../../../common/vendor.js");
const uni_modules_limeRequest_utssdk_interface = require("../utssdk/interface.js");
const uni_modules_limeRequest_common_urlQuery = require("./url-query.js");
function mergeConfig(...configs) {
  return configs.reduce((result, config) => {
    const _result = result;
    for (let key in config) {
      if (config[key] != null) {
        _result[key] = config[key];
      }
    }
    return _result;
  }, new uni_modules_limeRequest_utssdk_interface.LimeRequestConfig({
    baseURL: null,
    params: null,
    getTask: null,
    data: null,
    extra: null,
    url: null,
    header: null,
    method: null,
    timeout: null,
    dataType: null,
    responseType: null,
    sslVerify: null,
    withCredentials: null,
    firstIpv4: null,
    enableHttp2: null,
    enableQuic: null,
    enableCache: null,
    enableHttpDNS: null,
    httpDNSServiceId: null,
    enableChunked: null,
    forceCellularNetwork: null,
    enableCookie: null,
    cloudCache: null,
    defer: null,
    files: null,
    fileType: null,
    filePath: null,
    name: null,
    formData: null
  }));
}
function mergeSearchParams(search, query) {
  const originalParams = new uni_modules_limeRequest_common_urlQuery.URLSearchParams(search);
  const mergedParams = new uni_modules_limeRequest_common_urlQuery.URLSearchParams();
  originalParams.entries().forEach((_a) => {
    var _b = common_vendor.__read(_a, 2), key = _b[0], value = _b[1];
    mergedParams.append(key, value);
  });
  query.entries().forEach((_a) => {
    var _b = common_vendor.__read(_a, 2), key = _b[0], value = _b[1];
    if (mergedParams.has(key)) {
      mergedParams.set(key, value);
    } else {
      mergedParams.append(key, value);
    }
  });
  return mergedParams.toString();
}
function mergeUrl(baseURL = null, url = null, params = null) {
  let _baseURL = baseURL !== null && baseURL !== void 0 ? baseURL : "";
  let _url = url !== null && url !== void 0 ? url : "";
  let mergedUrl = "";
  if (/^(https?:)?\/\//.test(_url)) {
    mergedUrl = url !== null && url !== void 0 ? url : "";
  } else if (_baseURL != "" && _url != "") {
    mergedUrl = _baseURL.replace(/\/*$/, "") + _url;
  } else if (_baseURL != "") {
    mergedUrl = _baseURL;
  } else if (_url != "") {
    mergedUrl = _url;
  }
  if (params != null) {
    const query = new uni_modules_limeRequest_common_urlQuery.URLSearchParams(params);
    const index = mergedUrl.indexOf("?");
    if (index != -1) {
      const originPath = mergedUrl.slice(0, index);
      const search = mergedUrl.slice(index);
      mergedUrl = originPath + "?" + mergeSearchParams(search, query);
    } else {
      mergedUrl += "?" + query.toString();
    }
  }
  return mergedUrl;
}
function reducerFactory() {
  const handlers = [];
  const use = (onFulfilled, onRejected = null) => {
    handlers.push(new uni_modules_limeRequest_utssdk_interface.LimeRequestHandler({
      fulfilled: onFulfilled,
      rejected: onRejected
    }));
  };
  const resolve = (data) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      var e_1, _a;
      let _data = data;
      try {
        for (var handlers_1 = common_vendor.__values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
          var fulfilled = handlers_1_1.value.fulfilled;
          try {
            _data = yield fulfilled(data);
          } catch (err) {
            const error = new uni_modules_limeRequest_utssdk_interface.LimeRequestFail({
              source: null,
              errCode: 0,
              errSubject: "lime-request",
              data: null,
              cause: err,
              errMsg: err.message
              //?? '未知错误',
            });
            return Promise.reject(error);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (handlers_1_1 && !handlers_1_1.done && (_a = handlers_1.return))
            _a.call(handlers_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return Promise.resolve(_data);
    });
  };
  const reject = (error) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      var e_2, _a;
      try {
        for (var handlers_2 = common_vendor.__values(handlers), handlers_2_1 = handlers_2.next(); !handlers_2_1.done; handlers_2_1 = handlers_2.next()) {
          var rejected = handlers_2_1.value.rejected;
          try {
            if (rejected != null) {
              const data = yield rejected(error);
              return Promise.resolve(data);
            }
          } catch (newError) {
            error = new uni_modules_limeRequest_utssdk_interface.LimeRequestFail({
              source: null,
              errCode: 0,
              errSubject: "lime-request",
              data: null,
              cause: newError,
              errMsg: newError.message
            });
          }
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (handlers_2_1 && !handlers_2_1.done && (_a = handlers_2.return))
            _a.call(handlers_2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      return Promise.reject(error);
    });
  };
  return new uni_modules_limeRequest_utssdk_interface.LimeReducerFactoryResult({
    use,
    resolve,
    reject
  });
}
function createInterceptors() {
  return new uni_modules_limeRequest_utssdk_interface.LimeInterceptors({
    request: reducerFactory(),
    response: reducerFactory()
  });
}
function isJSON(str) {
  const trimmed = str.trim();
  if (!(trimmed.startsWith("{") || trimmed.startsWith("["))) {
    return false;
  }
  if (!/^[\{\[\}\],:"]/.test(trimmed)) {
    return false;
  }
  try {
    common_vendor.UTS.JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
exports.createInterceptors = createInterceptors;
exports.isJSON = isJSON;
exports.mergeConfig = mergeConfig;
exports.mergeUrl = mergeUrl;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/lime-request/common/utils.js.map
