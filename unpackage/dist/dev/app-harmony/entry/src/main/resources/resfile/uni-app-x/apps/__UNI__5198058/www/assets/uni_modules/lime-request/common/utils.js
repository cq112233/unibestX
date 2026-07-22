import { _ as __read, a as __values } from "../../e-chart/components/e-chart/uts/WebviewEchart.js";
import { L as LimeRequestConfig, b as LimeInterceptors, c as LimeReducerFactoryResult, d as LimeRequestHandler, a as LimeRequestFail } from "../utssdk/interface.js";
import { U as URLSearchParams } from "./url-query.js";
function mergeConfig(...configs) {
  return configs.reduce((result, config) => {
    const _result = result;
    for (let key in config) {
      if (config[key] != null) {
        _result[key] = config[key];
      }
    }
    return _result;
  }, new LimeRequestConfig({
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
  const originalParams = new URLSearchParams(search);
  const mergedParams = new URLSearchParams();
  originalParams.entries().forEach((_a) => {
    var _b = __read(_a, 2), key = _b[0], value = _b[1];
    mergedParams.append(key, value);
  });
  query.entries().forEach((_a) => {
    var _b = __read(_a, 2), key = _b[0], value = _b[1];
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
    const query = new URLSearchParams(params);
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
    handlers.push(new LimeRequestHandler({
      fulfilled: onFulfilled,
      rejected: onRejected
    }));
  };
  const resolve = async (data) => {
    var e_1, _a;
    let _data = data;
    try {
      for (var handlers_1 = __values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
        var fulfilled = handlers_1_1.value.fulfilled;
        try {
          _data = await fulfilled(data);
        } catch (err) {
          const error = new LimeRequestFail({
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
  };
  const reject = async (error) => {
    var e_2, _a;
    try {
      for (var handlers_2 = __values(handlers), handlers_2_1 = handlers_2.next(); !handlers_2_1.done; handlers_2_1 = handlers_2.next()) {
        var rejected = handlers_2_1.value.rejected;
        try {
          if (rejected != null) {
            const data = await rejected(error);
            return Promise.resolve(data);
          }
        } catch (newError) {
          error = new LimeRequestFail({
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
  };
  return new LimeReducerFactoryResult({
    use,
    resolve,
    reject
  });
}
function createInterceptors() {
  return new LimeInterceptors({
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
    UTS.JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
export {
  mergeUrl as a,
  createInterceptors as c,
  isJSON as i,
  mergeConfig as m
};
//# sourceMappingURL=utils.js.map
