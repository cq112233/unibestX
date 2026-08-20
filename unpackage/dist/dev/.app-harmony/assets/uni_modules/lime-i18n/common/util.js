import "./errors.js";
import "./warnings.js";
function getAllKeys(map) {
  let keys = [];
  map.forEach((_, key) => {
    keys.push(key);
  });
  return keys;
}
function isObject(obj = null) {
  return obj != null && typeof obj == "object";
}
export {
  getAllKeys as g,
  isObject as i
};
//# sourceMappingURL=util.js.map
