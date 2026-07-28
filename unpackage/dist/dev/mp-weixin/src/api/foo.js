"use strict";
const common_vendor = require("../../common/vendor.js");
const src_http_request = require("../http/request.js");
const uni_modules_limeRequest_utssdk_interface = require("../../uni_modules/lime-request/utssdk/interface.js");
class IFoo extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: "Any", optional: false },
          name: { type: String, optional: false }
        };
      },
      name: "IFoo"
    };
  }
  constructor(options, metadata = IFoo.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.name = this.__props__.name;
    delete this.__props__;
  }
}
class IFooList extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          list: { type: common_vendor.UTS.UTSType.withGenerics(Array, [IFoo]), optional: false },
          total: { type: Number, optional: false },
          page: { type: Number, optional: false },
          pageSize: { type: Number, optional: false }
        };
      },
      name: "IFooList"
    };
  }
  constructor(options, metadata = IFooList.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.list = this.__props__.list;
    this.total = this.__props__.total;
    this.page = this.__props__.page;
    this.pageSize = this.__props__.pageSize;
    delete this.__props__;
  }
}
const MOCK_FOO_LIST = [
  new IFoo({ id: 1, name: "unix" }),
  new IFoo({ id: 2, name: "UnibestX" }),
  new IFoo({ id: 3, name: "lime-request" })
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
    params: new UTSJSONObject({
      name: "unix",
      page: 1,
      pageSize: 10
    }),
    baseURL: src_http_request.API_DOMAINS.SECONDARY,
    extra: new UTSJSONObject({
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
