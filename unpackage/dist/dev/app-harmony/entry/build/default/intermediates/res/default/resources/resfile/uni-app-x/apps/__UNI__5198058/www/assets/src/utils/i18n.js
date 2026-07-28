import { i as i18n } from "../i18n/index.js";
function t(key, named = null) {
  if (named != null) {
    return i18n.global.t(key, named);
  }
  return i18n.global.t(key);
}
export {
  t
};
//# sourceMappingURL=i18n.js.map
