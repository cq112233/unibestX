import { h as http, A as API_DOMAINS } from "../http/request.js";
import { L as LimeRequestConfig } from "../../uni_modules/lime-request/utssdk/interface.js";
import "../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
const MOCK_FOO_LIST = [
  { id: 1, name: "unix" },
  { id: 2, name: "UnibestX" },
  { id: 3, name: "lime-request" }
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
