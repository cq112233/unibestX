function getRandomId() {
  return `chart_${Math.random().toString(36).substring(2, 16)}`;
}
function addUnitRpx(num) {
  return typeof num === "number" ? `${num}rpx` : num;
}
export {
  addUnitRpx as a,
  getRandomId as g
};
//# sourceMappingURL=util.js.map
