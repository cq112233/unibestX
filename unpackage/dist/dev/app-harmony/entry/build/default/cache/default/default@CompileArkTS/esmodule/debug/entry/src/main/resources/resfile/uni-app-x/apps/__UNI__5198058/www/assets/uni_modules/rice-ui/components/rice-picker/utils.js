import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-picker/type&";
import { e as isSameValue } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
const isSameValueArr = (left, right) => {
  if (left.length != right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (!isSameValue(left[i], right[i])) {
      return false;
    }
  }
  return true;
};
const isSameIndexArray = (left, right) => {
  if (left.length != right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] != right[i]) {
      return false;
    }
  }
  return true;
};
const getFirstEnabledIndex = (options) => {
  if (options.length == 0) {
    return 0;
  }
  const enabledIndex = options.findIndex((option) => {
    return option.disabled != true;
  });
  return enabledIndex > -1 ? enabledIndex : 0;
};
const getColumnsType = (columns) => {
  if (columns.length > 1)
    return "multiple";
  const firstColumn = columns.length > 0 ? columns[0] : null;
  if (firstColumn != null) {
    if (Array.isArray(firstColumn[0].children))
      return "cascade";
  }
  return "default";
};
export {
  isSameIndexArray as a,
  getFirstEnabledIndex as b,
  getColumnsType as g,
  isSameValueArr as i
};
//# sourceMappingURL=utils.js.map
