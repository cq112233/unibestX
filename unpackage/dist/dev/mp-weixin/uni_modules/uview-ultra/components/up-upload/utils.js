"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
require("./types.js");
function pickExclude(objOri, keys) {
  let obj = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(objOri));
  return UTSJSONObject.keys(obj).reduce((prev, key) => {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }
    return prev;
  }, new UTSJSONObject({}));
}
function formatImage(res) {
  return res.tempFiles.map((item) => {
    let tmp = new UTSJSONObject(Object.assign(Object.assign({}, pickExclude(item, ["path"])), { type: "image", url: item.path, thumb: item.path, size: item.size, name: common_vendor.UTS.arrayPop(item.path.split("/")) + ".png" }));
    return common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(tmp));
  });
}
function formatVideo(res) {
  var _a, _b;
  let tmp = new UTSJSONObject(Object.assign(Object.assign({}, pickExclude(res, ["tempFilePath", "thumbTempFilePath", "errMsg"])), {
    type: "video",
    url: res.tempFilePath,
    // thumb: res.thumbTempFilePath,
    thumb: "",
    size: res.size,
    width: (_a = res.width) !== null && _a !== void 0 ? _a : 0,
    height: (_b = res.height) !== null && _b !== void 0 ? _b : 0,
    name: common_vendor.UTS.arrayPop(res.tempFilePath.split("/")) + ".mp4"
  }));
  return [
    common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(tmp))
  ];
}
function formatMedia(res) {
  return res.tempFiles.map((item) => {
    let tmp = new UTSJSONObject(Object.assign(Object.assign({}, pickExclude(item, ["fileType", "thumbTempFilePath", "tempFilePath"])), { type: res.type, url: item.tempFilePath, thumb: res.type === "video" ? item.thumbTempFilePath : item.tempFilePath, size: item.size, name: common_vendor.UTS.arrayPop(item.tempFilePath.split("/")) + (res.type === "video" ? ".mp4" : ".png") }));
    return common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(tmp));
  });
}
function formatFile(res) {
  return res.tempFiles.map((item) => {
    let tmp = new UTSJSONObject(Object.assign(Object.assign({}, pickExclude(item, ["path"])), { url: item.path, size: item.size }));
    return common_vendor.UTS.JSON.parseObject(common_vendor.UTS.JSON.stringify(tmp));
  });
}
function chooseFile(_a) {
  var accept = _a.accept, multiple = _a.multiple, capture = _a.capture, compressed = _a.compressed, maxDuration = _a.maxDuration, sizeType = _a.sizeType, camera = _a.camera, maxCount = _a.maxCount, extension = _a.extension;
  let captureList = [];
  try {
    captureList = uni_modules_uviewUltra_libs_function_test.array(capture) ? capture : capture.toString().split(",");
  } catch (e) {
  }
  return new Promise((resolve, reject) => {
    switch (accept) {
      case "image":
        common_vendor.index.chooseImage(new UTSJSONObject({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: captureList,
          sizeType,
          // @ts-ignore
          success: (res) => {
            return resolve(formatImage(res));
          },
          fail: reject
        }));
        break;
      case "media":
        common_vendor.wx$1.chooseMedia(new UTSJSONObject({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: captureList,
          maxDuration,
          sizeType,
          camera,
          success: (res) => {
            return resolve(formatMedia(res));
          },
          fail: reject
        }));
        break;
      case "video":
        common_vendor.index.chooseVideo(new UTSJSONObject({
          sourceType: captureList,
          compressed,
          maxDuration,
          // @ts-ignore
          camera,
          // @ts-ignore
          success: (res) => {
            return resolve(formatVideo(res));
          },
          fail: reject
        }));
        break;
      case "file":
        let params = new UTSJSONObject(
          {
            count: multiple ? maxCount : 1,
            type: accept,
            // @ts-ignore
            success: (res = null) => {
              return resolve(formatFile(res));
            },
            fail: reject
          }
          // Array<string>根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤。
        );
        if (extension != null && extension.length && extension.length > 0) {
          params.extension = extension;
        }
        common_vendor.wx$1.chooseMessageFile(params);
        break;
      default:
        common_vendor.wx$1.chooseMessageFile(new UTSJSONObject({
          count: multiple ? maxCount : 1,
          type: "all",
          success: (res = null) => {
            return resolve(formatFile(res));
          },
          fail: reject
        }));
    }
  });
}
exports.chooseFile = chooseFile;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-upload/utils.js.map
