import { a as array } from "../../libs/function/test.js";
import "./types.js";
function pickExclude(objOri, keys) {
  let obj = UTS.JSON.parse(UTS.JSON.stringify(objOri));
  return UTSJSONObject.keys(obj).reduce((prev, key) => {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }
    return prev;
  }, new UTSJSONObject({}));
}
function formatImage(res) {
  return res.tempFiles.map((item) => {
    let tmp = new UTSJSONObject({
      ...pickExclude(item, ["path"]),
      type: "image",
      url: item.path,
      thumb: item.path,
      size: item.size,
      name: UTS.arrayPop(item.path.split("/")) + ".png"
    });
    return UTS.JSON.parseObject(UTS.JSON.stringify(tmp));
  });
}
function formatVideo(res) {
  var _a, _b;
  let tmp = new UTSJSONObject({
    // @ts-ignore
    ...pickExclude(res, ["tempFilePath", "thumbTempFilePath", "errMsg"]),
    type: "video",
    url: res.tempFilePath,
    // thumb: res.thumbTempFilePath,
    thumb: "",
    size: res.size,
    width: (_a = res.width) !== null && _a !== void 0 ? _a : 0,
    height: (_b = res.height) !== null && _b !== void 0 ? _b : 0,
    name: UTS.arrayPop(res.tempFilePath.split("/")) + ".mp4"
  });
  return [
    UTS.JSON.parseObject(UTS.JSON.stringify(tmp))
  ];
}
function chooseFile(_a) {
  var accept = _a.accept, multiple = _a.multiple, capture = _a.capture, compressed = _a.compressed, maxDuration = _a.maxDuration, sizeType = _a.sizeType, camera = _a.camera, maxCount = _a.maxCount;
  _a.extension;
  let captureList = [];
  try {
    captureList = array(capture) ? capture : capture.toString().split(",");
  } catch (e) {
  }
  return new Promise((resolve, reject) => {
    switch (accept) {
      case "image":
        uni.chooseImage(new UTSJSONObject({
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
      case "video":
        uni.chooseVideo(new UTSJSONObject({
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
    }
  });
}
export {
  chooseFile as c
};
//# sourceMappingURL=utils.js.map
