"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const MIN_DISTANCE = 10;
const LOCK_DIRECTION_DISTANCE = 10;
const TAP_OFFSET = 5;
class ClientXY extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          clientX: { type: Number, optional: false },
          clientY: { type: Number, optional: false }
        };
      },
      name: "ClientXY"
    };
  }
  constructor(options, metadata = ClientXY.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.clientX = this.__props__.clientX;
    this.clientY = this.__props__.clientY;
    delete this.__props__;
  }
}
class UseTouch extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          startX: { type: "Unknown", optional: false },
          startY: { type: "Unknown", optional: false },
          deltaX: { type: "Unknown", optional: false },
          deltaY: { type: "Unknown", optional: false },
          offsetX: { type: "Unknown", optional: false },
          offsetY: { type: "Unknown", optional: false },
          direction: { type: "Unknown", optional: false },
          isTap: { type: "Unknown", optional: false },
          skipMove: { type: "Unknown", optional: false },
          dragging: { type: "Unknown", optional: false },
          start: { type: "Unknown", optional: false },
          move: { type: "Unknown", optional: false },
          end: { type: "Unknown", optional: false },
          changeDragging: { type: "Unknown", optional: false },
          getClientXY: { type: "Unknown", optional: false }
        };
      },
      name: "UseTouch"
    };
  }
  constructor(options, metadata = UseTouch.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.startX = this.__props__.startX;
    this.startY = this.__props__.startY;
    this.deltaX = this.__props__.deltaX;
    this.deltaY = this.__props__.deltaY;
    this.offsetX = this.__props__.offsetX;
    this.offsetY = this.__props__.offsetY;
    this.direction = this.__props__.direction;
    this.isTap = this.__props__.isTap;
    this.skipMove = this.__props__.skipMove;
    this.dragging = this.__props__.dragging;
    this.start = this.__props__.start;
    this.move = this.__props__.move;
    this.end = this.__props__.end;
    this.changeDragging = this.__props__.changeDragging;
    this.getClientXY = this.__props__.getClientXY;
    delete this.__props__;
  }
}
function getSlideDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }
  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  const startX = common_vendor.ref(0);
  const startY = common_vendor.ref(0);
  const deltaX = common_vendor.ref(0);
  const deltaY = common_vendor.ref(0);
  const offsetX = common_vendor.ref(0);
  const offsetY = common_vendor.ref(0);
  const direction = common_vendor.ref("");
  const isTap = common_vendor.ref(false);
  const dragging = common_vendor.ref(false);
  const skipMove = common_vendor.ref(false);
  const getClientXY = (e) => {
    let clientX;
    let clientY;
    if (e.type.startsWith("touch")) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientX;
    }
    return new ClientXY({
      clientX,
      clientY
    });
  };
  const reset = () => {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = "";
    isTap.value = true;
    dragging.value = true;
    skipMove.value = false;
  };
  const start = (e) => {
    const touches = getClientXY(e);
    reset();
    startX.value = touches.clientX;
    startY.value = touches.clientY;
  };
  const move = (e) => {
    const touches = getClientXY(e);
    deltaX.value = touches.clientX - startX.value;
    deltaY.value = touches.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    if (direction.value == "" || offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE) {
      direction.value = getSlideDirection(offsetX.value, offsetY.value);
    }
    if (isTap.value && (offsetX.value > TAP_OFFSET || offsetY.value > TAP_OFFSET)) {
      isTap.value = false;
    }
    if (direction.value == "vertical") {
      skipMove.value = true;
    }
  };
  const end = () => {
    dragging.value = false;
  };
  const changeDragging = (flag) => {
    dragging.value = flag;
  };
  return new UseTouch({
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isTap,
    dragging,
    skipMove,
    start,
    move,
    end,
    changeDragging,
    getClientXY
  });
}
exports.useTouch = useTouch;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/use/useTouch/index.js.map
