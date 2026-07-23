import { h as http, A as API_DOMAINS } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/http/request&";
import { L as LimeRequestConfig } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-request/utssdk/interface&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/e-chart/components/e-chart/uts/WebviewEchart&";

class IFoo extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.name = this.__props__.name;
    delete this.__props__;
  }
}
class IFooList extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          list: { type: UTS.UTSType.withGenerics(Array, [IFoo]), optional: false },
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
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
  const res = http.get("/foo", new LimeRequestConfig({
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
    baseURL: API_DOMAINS.SECONDARY,
    extra: new UTSJSONObject({
      ignoreAuth: true
      // 此接口不需要鉴权
    })
  }));
  uni.__f__("log", "at src/api/foo.uts:66", res, "res112233");
  return res;
}
export {
  foo as f,
  getFooList as g
};
//# sourceMappingURL=foo.js.map
