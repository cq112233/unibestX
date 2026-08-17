import { i as isNumber } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-shared/isNumber/index&";
import { i as isString } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-shared/isString/index&";
function isNumeric(value) {
  if (value == null) {
    return false;
  }
  if (isNumber(value)) {
    return true;
  } else if (isString(value)) {
    const regex = new RegExp("^(-)?\\d+(\\.\\d+)?$");
    return regex.test(value);
  }
  return false;
}
export {
  isNumeric as i
};
//# sourceMappingURL=index.js.map
