import { i as isNumber } from "../isNumber/index.js";
import { i as isString } from "../isString/index.js";
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
