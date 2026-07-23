"use strict";
const common_vendor = require("../../../common/vendor.js");
const ResultEnum = new common_vendor.UTSJSONObject(
  {
    Success0: 0,
    Success200: 200,
    RequestError: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    RequestTimeout: 408,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505
  }
  /**
   * Content-Type 类型枚举
   * 注意：UTS 中 JSON 是内置全局对象，不能作为对象属性 key，故重命名为 AppJson。
   */
);
const ContentTypeEnum = new common_vendor.UTSJSONObject(
  {
    AppJson: "application/json;charset=UTF-8",
    FormUrlEncoded: "application/x-www-form-urlencoded;charset=UTF-8",
    FormData: "multipart/form-data;charset=UTF-8"
  }
  /**
   * 根据状态码，生成对应的错误信息
   * @param status 状态码
   * @returns 错误信息
   */
);
function ShowMessage(status) {
  let message;
  switch (status) {
    case 400:
      message = "请求错误(400)";
      break;
    case 401:
      message = "未授权，请重新登录(401)";
      break;
    case 403:
      message = "拒绝访问(403)";
      break;
    case 404:
      message = "请求出错(404)";
      break;
    case 408:
      message = "请求超时(408)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    case 501:
      message = "服务未实现(501)";
      break;
    case 502:
      message = "网络错误(502)";
      break;
    case 503:
      message = "服务不可用(503)";
      break;
    case 504:
      message = "网络超时(504)";
      break;
    case 505:
      message = "HTTP版本不受支持(505)";
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
}
exports.ContentTypeEnum = ContentTypeEnum;
exports.ResultEnum = ResultEnum;
exports.ShowMessage = ShowMessage;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/http/tools/enum.js.map
