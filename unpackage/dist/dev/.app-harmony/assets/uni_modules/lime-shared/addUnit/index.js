import { i as isNumeric } from "../isNumeric/index.js";
import { i as isDef } from "../isDef/index.js";
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
