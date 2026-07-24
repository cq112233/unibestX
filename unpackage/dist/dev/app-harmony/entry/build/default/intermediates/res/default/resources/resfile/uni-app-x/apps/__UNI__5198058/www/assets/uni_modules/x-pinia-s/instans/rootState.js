import "./types.js";
let _activePinia = null;
function setActivePinia(pinia = null) {
  _activePinia = pinia;
}
function getActivePinia() {
  return _activePinia;
}
export {
  getActivePinia as g,
  setActivePinia as s
};
//# sourceMappingURL=rootState.js.map
