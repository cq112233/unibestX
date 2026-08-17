import { i as isNumeric } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-shared/isNumeric/index&";
import { i as isDef } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-shared/isDef/index&";
function addUnit(value) {
  if (!isDef(value)) {
    return null;
  }
  value = `${value}`;
  return isNumeric(value) ? `${value}px` : value;
}
export {
  addUnit as a
};
//# sourceMappingURL=index.js.map
