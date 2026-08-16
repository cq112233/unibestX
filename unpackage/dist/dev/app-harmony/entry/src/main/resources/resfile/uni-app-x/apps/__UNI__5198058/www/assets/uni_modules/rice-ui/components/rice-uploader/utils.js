import { n as isImage, o as isVideo } from "../../libs/utils/basic.js";
import "./type.js";
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
  if (isImage(file.url))
    return "image";
  if (isVideo(file.url))
    return "video";
  return getFileExtension(file.url);
};
export {
  getFileType as a,
  getFileId as g
};
//# sourceMappingURL=utils.js.map
