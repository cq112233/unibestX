import { u as useTokenStore } from "../store/token.js";
var _a, _b;
class UploadFileOptions extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          url: { type: String, optional: true },
          filePath: { type: String, optional: false },
          name: { type: String, optional: true },
          header: { type: "Unknown", optional: true },
          formData: { type: "Unknown", optional: true },
          ignoreAuth: { type: Boolean, optional: true },
          onProgress: { type: "Unknown", optional: true }
        };
      }
    };
  }
  constructor(options, metadata = UploadFileOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.url = this.__props__.url;
    this.filePath = this.__props__.filePath;
    this.name = this.__props__.name;
    this.header = this.__props__.header;
    this.formData = this.__props__.formData;
    this.ignoreAuth = this.__props__.ignoreAuth;
    this.onProgress = this.__props__.onProgress;
    delete this.__props__;
  }
}
const DEFAULT_FALLBACK_BASE_URL = "https://xxx.com";
const DEFAULT_FALLBACK_UPLOAD_PATH = "/gateway/user/sys/oss/upload/xxx";
const DEFAULT_OSS_BASE_URL = `${(_a = "https://xxx.com") !== null && _a !== void 0 ? _a : DEFAULT_FALLBACK_BASE_URL}`;
const DEFAULT_OSS_UPLOAD_PATH = `${(_b = "/gateway/user/sys/oss/upload/xxx") !== null && _b !== void 0 ? _b : DEFAULT_FALLBACK_UPLOAD_PATH}`;
const DEFAULT_OSS_UPLOAD_URL = `${DEFAULT_OSS_BASE_URL}${DEFAULT_OSS_UPLOAD_PATH}`;
function uploadFile(options) {
  return new Promise((resolve, reject) => {
    var _a2, _b2, _c, _d;
    let finalUrl = (_a2 = options.url) !== null && _a2 !== void 0 ? _a2 : DEFAULT_OSS_UPLOAD_URL;
    if (finalUrl.startsWith("/")) {
      finalUrl = `${DEFAULT_OSS_BASE_URL}${finalUrl}`;
    }
    const header = (_b2 = options.header) !== null && _b2 !== void 0 ? _b2 : new UTSJSONObject({});
    if (options.ignoreAuth != true) {
      const tokenStore = useTokenStore();
      const token = tokenStore.getToken();
      if (token != "") {
        header.token = token;
      }
    }
    const uploadTask = uni.uploadFile({
      url: finalUrl,
      filePath: options.filePath,
      name: (_c = options.name) !== null && _c !== void 0 ? _c : "file",
      header,
      formData: (_d = options.formData) !== null && _d !== void 0 ? _d : new UTSJSONObject({}),
      success: (res) => {
        const statusCode = res.statusCode;
        if (statusCode != 200) {
          reject(new Error(`上传请求失败，HTTP 状态码: ${statusCode}`));
          return null;
        }
        try {
          const url = parseUploadResult(res.data);
          resolve(url);
        } catch (e) {
          reject(UTS.isInstanceOf(e, Error) ? e : new Error(`${e}`));
        }
      },
      fail: (err) => {
        var _a3;
        uni.__f__("error", "at src/utils/upload.uts:87", "uni.uploadFile fail:", err);
        reject(new Error((_a3 = err.errMsg) !== null && _a3 !== void 0 ? _a3 : "文件上传失败"));
      }
    });
    if (options.onProgress != null) {
      uploadTask.onProgressUpdate((res) => {
        options.onProgress(res.progress);
      });
    }
  });
}
function parseUploadResult(raw) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _j;
  const trimmed = raw.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  const obj = UTS.JSON.parseObject(trimmed);
  if (obj == null) {
    return trimmed;
  }
  const successVal = obj.getBoolean("success");
  if (successVal == false) {
    const msg = (_b2 = (_a2 = obj.getString("msg")) !== null && _a2 !== void 0 ? _a2 : obj.getString("message")) !== null && _b2 !== void 0 ? _b2 : "上传业务失败";
    const code = (_c = obj.getString("code")) !== null && _c !== void 0 ? _c : obj.getNumber("code") != null ? `${obj.getNumber("code")}` : "";
    throw new Error(`上传失败${code != "" ? `[${code}]` : ""}：${msg}`);
  }
  if (successVal != true) {
    const numCode = obj.getNumber("code");
    const strCode = obj.getString("code");
    let isFailed = false;
    let codeStr = "";
    if (numCode != null) {
      codeStr = `${numCode}`;
      if (numCode != 200 && numCode != 0 && numCode != 1e4) {
        isFailed = true;
      }
    } else if (strCode != null) {
      codeStr = strCode;
      if (strCode != "200" && strCode != "0" && strCode != "10000" && strCode != "000000" && strCode != "SUCCESS" && strCode != "OK") {
        isFailed = true;
      }
    }
    if (isFailed) {
      const msg = (_e = (_d = obj.getString("msg")) !== null && _d !== void 0 ? _d : obj.getString("message")) !== null && _e !== void 0 ? _e : "上传失败";
      throw new Error(`上传失败[${codeStr}]：${msg}`);
    }
  }
  const topUrl = obj.getString("url");
  if (topUrl != null && topUrl != "") {
    return topUrl;
  }
  const data = obj.get("data");
  if (data != null) {
    if (typeof data == "string") {
      const dataStr = data.trim();
      if (dataStr != "" && dataStr != "null") {
        return dataStr;
      }
    }
    const dataObj = data;
    const dataUrl = (_j = (_h = (_g = (_f = dataObj.getString("url")) !== null && _f !== void 0 ? _f : dataObj.getString("fileUrl")) !== null && _g !== void 0 ? _g : dataObj.getString("ossUrl")) !== null && _h !== void 0 ? _h : dataObj.getString("path")) !== null && _j !== void 0 ? _j : dataObj.getString("link");
    if (dataUrl != null && dataUrl != "") {
      return dataUrl;
    }
  }
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    throw new Error("上传成功但未能从响应中解析出文件 URL 地址");
  }
  return trimmed;
}
export {
  DEFAULT_OSS_UPLOAD_PATH as D,
  UploadFileOptions as U,
  DEFAULT_OSS_BASE_URL as a,
  uploadFile as u
};
