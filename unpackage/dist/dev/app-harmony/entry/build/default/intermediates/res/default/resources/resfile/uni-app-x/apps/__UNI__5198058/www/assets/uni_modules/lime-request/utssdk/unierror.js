import "./interface.js";
class LimeResponseImpl {
  /**
   * 需要基础库： `2.10.4`
   *
   * 网络请求过程中一些调试信息，[查看详细说明](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/network.html)
   */
  // profile ?: UniApp.RequestProfile
  constructor(data = null, statusCode, header = null, cookies, config, errMsg, tempFilePath, apFilePath, filePath, fileContent = null) {
    this.data = data;
    this.statusCode = statusCode;
    this.header = header;
    this.cookies = cookies;
    this.config = config;
    this.errMsg = errMsg;
    this.tempFilePath = tempFilePath;
    this.apFilePath = apFilePath;
    this.filePath = filePath;
    this.fileContent = fileContent;
  }
}
export {
  LimeResponseImpl as L
};
//# sourceMappingURL=unierror.js.map
