"use strict";
require("./types.js");
let _activePinia = null;
function setActivePinia(pinia = null) {
  _activePinia = pinia;
}
function getActivePinia() {
  return _activePinia;
}
exports.getActivePinia = getActivePinia;
exports.setActivePinia = setActivePinia;
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uni_modules/x-pinia-s/instans/rootState.js.map
