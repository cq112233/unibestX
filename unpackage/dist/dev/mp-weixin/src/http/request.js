"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_limeRequest_common_index = require("../../uni_modules/lime-request/common/index.js");
const uni_modules_limeRequest_utssdk_interface = require("../../uni_modules/lime-request/utssdk/interface.js");
const src_store_token = require("../store/token.js");
const src_utils_toLoginPage = require("../utils/toLoginPage.js");
const src_http_tools_enum = require("./tools/enum.js");
const defaultUrl = "https://ukw0y1.laf.run";
const secondaryUrl = "https://ukw0y1.laf.run";
class ApiDomainConfig extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          DEFAULT: { type: String, optional: false },
          SECONDARY: { type: String, optional: false }
        };
      },
      name: "ApiDomainConfig"
    };
  }
  constructor(options, metadata = ApiDomainConfig.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.DEFAULT = this.__props__.DEFAULT;
    this.SECONDARY = this.__props__.SECONDARY;
    delete this.__props__;
  }
}
const API_DOMAINS = new ApiDomainConfig(
  {
    DEFAULT: defaultUrl,
    SECONDARY: secondaryUrl
  }
  // ==========================================
  // 创建底层 lime-request 实例
  // ==========================================
);
const requestInstance = new uni_modules_limeRequest_common_index.Request(new uni_modules_limeRequest_utssdk_interface.LimeRequestConfig({
  params: null,
  getTask: null,
  data: null,
  extra: null,
  url: null,
  method: null,
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
  formData: null,
  baseURL: API_DOMAINS.DEFAULT,
  timeout: 5e3,
  header: new UTSJSONObject({
    "Content-Type": src_http_tools_enum.ContentTypeEnum.AppJson,
    "Accept": "application/json, text/plain, */*"
  })
}));
requestInstance.interceptors.request.use((config) => {
  if (config.header === null) {
    config.header = new UTSJSONObject({});
  }
  const header = config.header;
  if (header["Content-Type"] == null) {
    header["Content-Type"] = src_http_tools_enum.ContentTypeEnum.AppJson;
  }
  if (header["Accept"] == null) {
    header["Accept"] = "application/json, text/plain, */*";
  }
  const extra = config.extra;
  let ignoreAuth = false;
  if (extra !== null) {
    const authVal = extra.getBoolean("ignoreAuth");
    if (authVal == true) {
      ignoreAuth = true;
    }
  }
  if (!ignoreAuth) {
    const tokenStore = src_store_token.useTokenStore();
    const token = tokenStore.getToken();
    if (token === "") {
      throw new Error("[请求错误]：未登录");
    }
    header["token"] = token;
  }
  if (extra !== null) {
    const domain = extra["domain"];
    if (domain != null) {
      config.baseURL = domain;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
requestInstance.interceptors.response.use((response) => {
  const config = response.config;
  const extra = config.extra;
  const method = config.method;
  if (method === "UPLOAD" || method === "DOWNLOAD") {
    return response;
  }
  const statusCode = response.statusCode;
  if (statusCode != 200) {
    const errorMessage = src_http_tools_enum.ShowMessage(statusCode);
    common_vendor.index.__f__("error", "at src/http/request.uts:108", "errorMessage===>", errorMessage);
    common_vendor.index.showToast({ title: errorMessage, icon: "error" });
    if (statusCode == 401) {
      const tokenStore = src_store_token.useTokenStore();
      tokenStore.clearToken();
      src_utils_toLoginPage.toLoginPage(new UTSJSONObject({ mode: "reLaunch" }));
    }
    throw new Error(`${errorMessage}：${response.errMsg}`);
  }
  const rawData = response.data;
  if (rawData === null) {
    throw new Error("返回的响应数据为空");
  }
  const resultObj = common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(rawData));
  if (resultObj !== null) {
    const code = resultObj.getNumber("code");
    const msgByKey = resultObj["message"];
    const msgByMsg = resultObj["msg"];
    const message = msgByKey != null ? msgByKey : msgByMsg != null ? msgByMsg : "未知错误";
    if (code !== null) {
      const codeVal = code;
      if (codeVal !== src_http_tools_enum.ResultEnum.Success0 && codeVal !== src_http_tools_enum.ResultEnum.Success200) {
        let toastEnabled = true;
        if (extra !== null) {
          const toastVal = extra.getBoolean("toast");
          if (toastVal == false) {
            toastEnabled = false;
          }
        }
        if (toastEnabled) {
          common_vendor.index.showToast({ title: message, icon: "none" });
        }
        if (codeVal === src_http_tools_enum.ResultEnum.Unauthorized) {
          const tokenStore = src_store_token.useTokenStore();
          tokenStore.clearToken();
          src_utils_toLoginPage.toLoginPage(new UTSJSONObject({ mode: "reLaunch" }));
        }
        throw new Error(`请求错误[${codeVal}]：${message}`);
      }
    }
  }
  return response;
}, (error) => {
  common_vendor.index.__f__("error", "at src/http/request.uts:156", "request error ===>", error);
  common_vendor.index.showToast({ title: "网络错误，请稍后再试", icon: "none" });
  return Promise.reject(error);
});
class HttpClient {
  request(config) {
    return requestInstance.request(config).then((res) => {
      const rawData = res.data;
      if (rawData === null) {
        throw new Error("响应数据为空");
      }
      const obj = common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(rawData));
      if (obj !== null) {
        const code = obj.getNumber("code");
        if (code !== null) {
          const innerData = obj.get("data");
          if (innerData !== null) {
            const innerStr = common_vendor.UTS.JSON.stringify(innerData);
            const parsedData = common_vendor.UTS.JSON.parse(innerStr);
            if (parsedData !== null) {
              return parsedData;
            } else {
              throw new Error("响应 data 字段无法解析为指定的类型，请检查数据结构是否匹配。数据：" + innerStr);
            }
          }
          throw new Error("响应结构包含 code，但 data 字段为空");
        }
      }
      const rawStr = common_vendor.UTS.JSON.stringify(rawData);
      const parsedRaw = common_vendor.UTS.JSON.parse(rawStr);
      if (parsedRaw !== null) {
        return parsedRaw;
      }
      throw new Error("原始响应数据无法解析为指定类型。原始数据：" + rawStr);
    });
  }
  get(url, config = null) {
    const _config = config !== null && config !== void 0 ? config : new UTSJSONObject({});
    _config.url = url;
    _config.method = "GET";
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
}
const http = new HttpClient();
exports.API_DOMAINS = API_DOMAINS;
exports.http = http;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/http/request.js.map
