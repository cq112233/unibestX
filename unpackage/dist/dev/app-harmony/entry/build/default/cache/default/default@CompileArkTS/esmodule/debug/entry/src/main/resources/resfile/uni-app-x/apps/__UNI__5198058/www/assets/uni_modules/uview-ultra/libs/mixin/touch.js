
const MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
}
const touchMixin = {
  data() {
    return {
      direction: "",
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      startX: 0,
      startY: 0
    };
  },
  methods: {
    getTouchPoint(e) {
      if (e == null) {
        return new UTSJSONObject({
          x: 0,
          y: 0
        });
      }
      if (e.touches.length > 0 && e.touches[0] != null) {
        return new UTSJSONObject({
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        });
      }
      if (e.changedTouches.length > 0 && e.changedTouches[0] != null) {
        return new UTSJSONObject({
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY
        });
      }
      return new UTSJSONObject({
        x: 0,
        y: 0
      });
    },
    resetTouchStatus() {
      this.direction = "";
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    touchStart(event) {
      this.resetTouchStatus();
      const touch = this.getTouchPoint(event);
      this.startX = touch["x"];
      this.startY = touch["y"];
    },
    touchMove(event) {
      const touch = this.getTouchPoint(event);
      this.deltaX = touch["x"] - this.startX;
      this.deltaY = touch["y"] - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction != "" ? this.direction : getDirection(this.offsetX, this.offsetY);
    }
  }
};
export {
  touchMixin as t
};
//# sourceMappingURL=touch.js.map
