"use strict";
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../../../common/vendor.js");
require("./type.js");
let fileId = 1;
const getFileId = () => {
  return `${Date.now() + fileId++}`;
};
const getFileExtension = (url) => {
  const lastDotIndex = url.lastIndexOf(".");
  if (lastDotIndex == -1 || lastDotIndex == url.length - 1) {
    return "";
  }
  return url.slice(lastDotIndex + 1);
};
const getFileType = (file) => {
  if (file.fileType != null && file.fileType != "")
    return file.fileType;
  if (uni_modules_riceUi_libs_utils_basic.isImage(file.url))
    return "image";
  if (uni_modules_riceUi_libs_utils_basic.isVideo(file.url))
    return "video";
  return getFileExtension(file.url);
};
exports.getFileId = getFileId;
exports.getFileType = getFileType;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-uploader/utils.js.map
