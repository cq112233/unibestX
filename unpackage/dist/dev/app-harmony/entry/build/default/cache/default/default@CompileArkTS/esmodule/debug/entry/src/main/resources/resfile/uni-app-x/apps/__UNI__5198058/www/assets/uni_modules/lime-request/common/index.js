import { a as LimeRequestFail } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-request/utssdk/interface&";
import { m as mergeConfig, c as createInterceptors, a as mergeUrl, i as isJSON } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-request/common/utils&";
import { L as LimeResponseImpl } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-request/utssdk/unierror&";
const { isRef, unref, isReactive, toRaw } = globalThis.Vue
class Request {
  constructor(config) {
    const defaultRequestConfig = new UTSJSONObject({
      baseURL: ""
    });
    this.defaultConfig = mergeConfig(defaultRequestConfig, config);
    this.interceptors = createInterceptors();
  }
  request(config) {
    return new Promise((resolve, reject) => {
      let interceptors = this.interceptors;
      const _config = mergeConfig(this.defaultConfig, config);
      interceptors.request.resolve(_config).then((config2 = null) => {
        var _a, _b, _c;
        const _d = config2, baseURL = _d.baseURL, params = _d.params, getTask = _d.getTask, url = _d.url;
        const mergedUrl = mergeUrl(baseURL, url, params);
        let task = null;
        const errMsg = `lime-request ${config2.method} ok`;
        switch (config2.method) {
          case "DOWNLOAD":
            task = uni.downloadFile({
              url: mergedUrl,
              header: config2.header,
              filePath: config2.filePath,
              timeout: (_a = config2.timeout) !== null && _a !== void 0 ? _a : 12e4,
              // enableHttp2: config.enableHttp2,
              // enableProfile: config.enableProfile,
              // enableQuic: config.enableQuic,
              // useHighPerformanceMode: config.useHighPerformanceMode,
              success(result) {
                const tempFilePath = result.tempFilePath, statusCode = result.statusCode;
                const apFilePath = "";
                const filePath = "";
                const fileContent = "";
                const res = new LimeResponseImpl(
                  "",
                  statusCode,
                  "",
                  //header,
                  [],
                  // cookies,
                  config2,
                  errMsg,
                  tempFilePath,
                  apFilePath,
                  filePath,
                  fileContent
                );
                interceptors.response.resolve(res).then(resolve, reject);
              },
              fail(error) {
                const err = new LimeRequestFail({
                  source: null,
                  errCode: error.errCode,
                  errSubject: "lime-request",
                  data: error.data,
                  cause: error.cause,
                  errMsg: error.errMsg
                });
                interceptors.response.reject(err).then((res) => {
                  reject(res);
                }, reject);
              }
            });
            break;
          case "UPLOAD":
            task = uni.uploadFile({
              url: mergedUrl,
              filePath: config2.filePath,
              name: config2.name,
              files: config2.files,
              header: config2.header,
              formData: config2.formData,
              // enableHttp2: config.enableHttp2,
              // enableProfile: config.enableProfile,
              // enableQuic: config.enableQuic,
              // useHighPerformanceMode: config.useHighPerformanceMode,
              timeout: (_b = config2.timeout) !== null && _b !== void 0 ? _b : 6e4,
              success(result) {
                const data2 = result.data, statusCode = result.statusCode;
                const tempFilePath = "";
                const apFilePath = "";
                const filePath = "";
                const fileContent = "";
                const res = new LimeResponseImpl(
                  data2,
                  statusCode,
                  "",
                  //header,
                  [],
                  // cookies,
                  config2,
                  errMsg,
                  tempFilePath,
                  apFilePath,
                  filePath,
                  fileContent
                );
                interceptors.response.resolve(res).then(resolve, reject);
              },
              fail(error) {
                const err = new LimeRequestFail({
                  source: null,
                  errCode: error.errCode,
                  errSubject: "lime-request",
                  data: error.data,
                  cause: error.cause,
                  errMsg: error.errMsg
                });
                interceptors.response.reject(err).then((res) => {
                  reject(res);
                }, reject);
              }
            });
            break;
          default:
            let data = config2.data;
            if (isRef(data)) {
              data = unref(data);
            }
            if (isReactive(data)) {
              data = new UTSJSONObject({ ...toRaw(data) });
            }
            task = uni.request({
              url: mergedUrl,
              data,
              header: config2.header,
              method: config2.method,
              timeout: (_c = config2.timeout) !== null && _c !== void 0 ? _c : 6e4,
              withCredentials: config2.withCredentials,
              firstIpv4: config2.firstIpv4,
              enableChunked: config2.enableChunked,
              success(result) {
                const _a2 = result, data2 = _a2.data, statusCode = _a2.statusCode, header = _a2.header, cookies = _a2.cookies;
                const tempFilePath = "";
                const apFilePath = "";
                const filePath = "";
                const fileContent = "";
                let parsedData = data2;
                if (typeof data2 == "string") {
                  try {
                    if (isJSON(data2)) {
                      parsedData = UTS.JSON.parse(data2);
                    }
                  } catch (error) {
                  }
                }
                const res = new LimeResponseImpl(parsedData, statusCode, header, cookies, config2, errMsg, tempFilePath, apFilePath, filePath, fileContent);
                interceptors.response.resolve(res).then(resolve, reject);
              },
              fail(error) {
                const source = new UTSJSONObject({
                  url: mergedUrl,
                  baseURL,
                  path: url,
                  method: config2.method
                });
                const err = new LimeRequestFail({
                  errCode: error.errCode,
                  errSubject: "lime-request",
                  data: error.data,
                  cause: error.cause,
                  errMsg: error.errMsg,
                  source
                });
                interceptors.response.reject(err).then((res) => {
                  reject(res);
                }, reject);
                reject(err);
              }
            });
            break;
        }
        if (getTask != null) {
          getTask(task);
        }
      }).catch(reject);
    });
  }
  get(url, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.method = "GET";
    return this.request(_config);
  }
  head(url, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.method = "HEAD";
    return this.request(_config);
  }
  connect(url, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.method = "CONNECT";
    return this.request(_config);
  }
  trace(url, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.method = "TRACE";
    return this.request(_config);
  }
  post(url, data = null, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.data = data;
    _config.method = "POST";
    return this.request(_config);
  }
  put(url, data = null, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.data = data;
    _config.method = "PUT";
    return this.request(_config);
  }
  delete(url, data = null, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.data = data;
    _config.method = "DELETE";
    return this.request(_config);
  }
  options(url, data = null, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.data = data;
    _config.method = "OPTIONS";
    return this.request(_config);
  }
  upload(url, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.method = "UPLOAD";
    return this.request(_config);
  }
  download(url, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.method = "DOWNLOAD";
    return this.request(_config);
  }
}
export {
  Request as R
};
//# sourceMappingURL=index.js.map
