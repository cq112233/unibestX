"use strict";
const common_vendor = require("../../common/vendor.js");
const src_http_request = require("../http/request.js");
const uni_modules_limeRequest_utssdk_interface = require("../../uni_modules/lime-request/utssdk/interface.js");
const MOCK_FOO_LIST = [
  { id: 1, name: "unix" },
  { id: 2, name: "UnibestX" },
  { id: 3, name: "lime-request" }
];
function getFooList(params = null) {
  return Promise.resolve(MOCK_FOO_LIST);
}
function foo() {
  const res = src_http_request.http.get("/foo", new uni_modules_limeRequest_utssdk_interface.LimeRequestConfig({
    getTask: null,
    data: null,
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
    formData: null,
    params: new common_vendor.UTSJSONObject({
      name: "unix",
      page: 1,
      pageSize: 10
    }),
    baseURL: src_http_request.API_DOMAINS.SECONDARY,
    extra: new common_vendor.UTSJSONObject({
      ignoreAuth: true
      // 此接口不需要鉴权
    })
  }));
  common_vendor.index.__f__("log", "at src/api/foo.uts:66", res, "res112233");
  return res;
}
exports.foo = foo;
exports.getFooList = getFooList;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/api/foo.js.map
