"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-dragsort",
  styleIsolation: "app-and-page"
}, { __name: "up-dragsort", props: {
  initialList: {
    type: Array,
    required: true,
    default: () => {
      return [];
    }
  },
  draggable: {
    type: Boolean,
    default: true
  },
  vibrate: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: "vertical"
  },
  columns: {
    type: Number,
    default: 3
  },
  handleDrag: {
    type: Boolean,
    default: false
  },
  handlerPosition: {
    type: String,
    default: "right"
  }
}, emits: ["drag-end"], setup(__props, _a) {
  var __emit = _a.emit;
  function createDragList() {
    return [];
  }
  function copyObject(item) {
    const copied = new common_vendor.UTSJSONObject({});
    const keys = common_vendor.UTSJSONObject.keys(item);
    for (let i = 0; i < keys.length; i++) {
      copied[keys[i]] = item[keys[i]];
    }
    return copied;
  }
  function copyList(list2) {
    const copied = [];
    for (let i = 0; i < list2.length; i++) {
      copied.push(copyObject(list2[i]));
    }
    return copied;
  }
  function normalizeNumber(value = null, defaultValue = 0) {
    if (typeof value == "number") {
      return value;
    }
    if (value == null) {
      return defaultValue;
    }
    const parsed = parseFloat(value.toString());
    return isNaN(parsed) ? defaultValue : parsed;
  }
  function stringValue(value = null) {
    return value == null ? "" : value.toString();
  }
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  function getItemKey(item, index) {
    if (item["id"] != null) {
      return item["id"];
    }
    return index;
  }
  function getItemLabel(item) {
    return stringValue(item["label"]);
  }
  function getItemX(item) {
    return normalizeNumber(item["x"], 0);
  }
  function getItemY(item) {
    return normalizeNumber(item["y"], 0);
  }
  function isItemDisabled(item) {
    const draggableValue = item["draggable"];
    return draggableValue != null && draggableValue.toString() == "false";
  }
  const slots = common_vendor.useSlots();
  const hasHandlerSlot = common_vendor.computed(() => {
    return slots["handler"] != null;
  });
  const list = common_vendor.ref(createDragList());
  const dragIndex = common_vendor.ref(-1);
  const sortChanged = common_vendor.ref(false);
  const itemHeight = common_vendor.ref(0);
  const itemWidth = common_vendor.ref(0);
  const areaWidth = common_vendor.ref(0);
  const areaHeight = common_vendor.ref(0);
  const currentX = common_vendor.ref(0);
  const currentY = common_vendor.ref(0);
  let timer = 0;
  let handlerTouchIndex = -1;
  const typedList = common_vendor.computed(() => {
    return list.value;
  });
  const movableAreaStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    const l = typedList.value;
    if (props.direction === "vertical") {
      style["height"] = itemHeight.value > 0 ? `${l.length * itemHeight.value}px` : "auto";
      style["width"] = "100%";
      return style;
    }
    if (props.direction === "horizontal") {
      style["height"] = itemHeight.value > 0 ? `${itemHeight.value}px` : "auto";
      style["width"] = itemWidth.value > 0 ? `${l.length * itemWidth.value}px` : "auto";
      return style;
    }
    const rows = Math.ceil(l.length / props.columns);
    style["height"] = itemHeight.value > 0 ? `${rows * itemHeight.value}px` : "auto";
    style["width"] = "100%";
    return style;
  });
  function getDetailNumber(detail, key) {
    return normalizeNumber(detail[key], 0);
  }
  function buildItemPosition(item, index) {
    const nextItem = copyObject(item);
    let x = 0;
    let y = 0;
    if (props.direction === "horizontal" && itemWidth.value > 0) {
      x = index * itemWidth.value;
    } else if (props.direction === "vertical" && itemHeight.value > 0) {
      y = index * itemHeight.value;
    } else if (itemWidth.value > 0 && itemHeight.value > 0) {
      const col = index % props.columns;
      const row = Math.floor(index / props.columns);
      x = col * itemWidth.value;
      y = row * itemHeight.value;
    }
    nextItem["x"] = x;
    nextItem["y"] = y;
    return nextItem;
  }
  function updatePositions(isDragging = false) {
    const nextList = [];
    const l = typedList.value;
    for (let i = 0; i < l.length; i++) {
      const currentItem = l[i];
      if (isDragging && dragIndex.value === i) {
        nextList.push(copyObject(currentItem));
      } else {
        nextList.push(buildItemPosition(currentItem, i));
      }
    }
    list.value = nextList;
  }
  function initList() {
    const nextList = [];
    const source = props.initialList;
    for (let i = 0; i < source.length; i++) {
      nextList.push(buildItemPosition(source[i], i));
    }
    list.value = nextList;
  }
  function calculateItemSize() {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield uni_modules_uviewUltra_libs_function_index.sleep(30);
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select(".up-dragsort-item-content").boundingClientRect((res = null) => {
          const rect = res;
          if (rect != null) {
            itemHeight.value = rect.height != null ? rect.height : 40;
            itemWidth.value = rect.width != null ? rect.width : 80;
            updatePositions();
          }
          resolve(rect);
        }).exec();
      });
    });
  }
  function calculateAreaSize() {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield uni_modules_uviewUltra_libs_function_index.sleep(30);
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select(".up-dragsort-area").boundingClientRect((res = null) => {
          const rect = res;
          if (rect != null) {
            areaWidth.value = rect.width != null ? rect.width : 300;
            areaHeight.value = rect.height != null ? rect.height : 300;
          }
          resolve(rect);
        }).exec();
      });
    });
  }
  function onHandlerTouchStart(index, e = null) {
    handlerTouchIndex = index;
    onTouchStart(index, e);
  }
  function onTouchStart(index, e = null) {
    if ((props.handleDrag || hasHandlerSlot.value) && handlerTouchIndex != index) {
      return null;
    }
    handlerTouchIndex = -1;
    const l = typedList.value;
    if (index >= 0 && index < l.length && isItemDisabled(l[index])) {
      return null;
    }
    if (timer > 0) {
      clearTimeout(timer);
      timer = 0;
    }
    sortChanged.value = false;
    dragIndex.value = index;
  }
  function onTouchMove(e = null) {
    if (dragIndex.value != -1) {
      const event = e;
      event.stopPropagation();
      event.preventDefault();
    }
  }
  function reorderItems(fromIndex, toIndex) {
    const l = typedList.value;
    if (fromIndex < 0 || toIndex < 0 || fromIndex >= l.length || toIndex >= l.length) {
      return null;
    }
    const movedItems = l.splice(fromIndex, 1);
    if (movedItems.length == 0) {
      return null;
    }
    l.splice(toIndex, 0, movedItems[0]);
    list.value = l;
    dragIndex.value = toIndex;
    sortChanged.value = true;
    updatePositions(true);
  }
  function handleAllModeChange(index) {
    if (itemWidth.value <= 0 || itemHeight.value <= 0) {
      return null;
    }
    const col = Math.max(0, Math.min(Math.round(currentX.value / itemWidth.value), props.columns - 1));
    const row = Math.max(0, Math.round(currentY.value / itemHeight.value));
    let targetIndex = row * props.columns + col;
    const l = typedList.value;
    targetIndex = Math.max(0, Math.min(targetIndex, l.length - 1));
    if (targetIndex !== index) {
      reorderItems(index, targetIndex);
    }
  }
  function onChange(index, event = null) {
    const customEvent = event;
    if (customEvent.detail == null || stringValue(customEvent.detail["source"]) != "touch") {
      return null;
    }
    const l = typedList.value;
    currentX.value = getDetailNumber(customEvent.detail, "x");
    currentY.value = getDetailNumber(customEvent.detail, "y");
    if (props.direction === "all") {
      handleAllModeChange(index);
      return null;
    }
    let itemSize = 0;
    let targetIndex = index;
    if (props.direction === "vertical") {
      itemSize = itemHeight.value;
      if (itemSize > 0) {
        targetIndex = Math.max(0, Math.min(Math.round(currentY.value / itemSize), l.length - 1));
      }
    } else if (props.direction === "horizontal") {
      itemSize = itemWidth.value;
      if (itemSize > 0) {
        targetIndex = Math.max(0, Math.min(Math.round(currentX.value / itemSize), l.length - 1));
      }
    }
    if (targetIndex !== index) {
      reorderItems(index, targetIndex);
    }
  }
  function onTouchEnd() {
    handlerTouchIndex = -1;
    if (dragIndex.value == -1) {
      return null;
    }
    const l = typedList.value;
    const dragItem = l[dragIndex.value];
    if (props.direction === "horizontal") {
      dragItem["x"] = currentX.value + 1e-3;
    } else {
      dragItem["x"] = currentX.value + 1e-3;
      dragItem["y"] = currentY.value + 1e-3;
    }
    list.value = l;
    uni_modules_uviewUltra_libs_function_index.sleep(50).then(() => {
      updatePositions();
      if (sortChanged.value) {
        emit("drag-end", copyList(typedList.value));
        sortChanged.value = false;
      }
      timer = setTimeout(() => {
        dragIndex.value = -1;
        timer = 0;
      }, 600);
    });
  }
  common_vendor.watch(() => {
    return props.initialList;
  }, () => {
    common_vendor.nextTick$1(() => {
      initList();
    });
  }, { deep: true });
  common_vendor.watch(() => {
    return props.direction;
  }, () => {
    common_vendor.nextTick$1(() => {
      initList();
      calculateItemSize();
      calculateAreaSize();
    });
  });
  common_vendor.watch(() => {
    return props.columns;
  }, () => {
    if (props.direction === "all") {
      common_vendor.nextTick$1(() => {
        initList();
        updatePositions();
      });
    }
  });
  common_vendor.onMounted(() => {
    common_vendor.nextTick$1(() => {
      initList();
      calculateItemSize();
      calculateAreaSize();
    });
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(typedList.value, (item, index, i0) => {
        return {
          a: "handler-" + i0,
          b: common_vendor.r("handler", {
            item,
            index
          }, i0),
          c: common_vendor.o(($event) => {
            return onHandlerTouchStart(index, $event);
          }, getItemKey(item, index)),
          d: common_vendor.t(getItemLabel(item)),
          e: "d-" + i0,
          f: common_vendor.r("d", {
            item,
            index
          }, i0),
          g: common_vendor.sei(`up-dragsort-item-${index}`, "movable-view"),
          h: getItemKey(item, index),
          i: dragIndex.value == index ? 1 : "",
          j: !__props.draggable || isItemDisabled(item) ? 1 : "",
          k: getItemX(item),
          l: getItemY(item),
          m: !__props.draggable || dragIndex.value != index || isItemDisabled(item),
          n: common_vendor.o(($event) => {
            return onChange(index, $event);
          }, getItemKey(item, index)),
          o: common_vendor.o(($event) => {
            return onTouchStart(index, $event);
          }, getItemKey(item, index)),
          p: common_vendor.o(onTouchEnd, getItemKey(item, index)),
          q: common_vendor.o(onTouchEnd, getItemKey(item, index)),
          r: common_vendor.o(onTouchMove, getItemKey(item, index))
        };
      }),
      b: common_vendor.n(__props.handleDrag || hasHandlerSlot.value ? "ui-dragSort-item-handler--enabled" : ""),
      c: common_vendor.n(__props.handlerPosition == "left" ? "ui-dragSort-item-handler--left" : ""),
      d: __props.direction == "vertical" ? 1 : "",
      e: __props.direction == "horizontal" ? 1 : "",
      f: __props.direction == "all" ? 1 : "",
      g: __props.direction === "all" ? "all" : __props.direction,
      h: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      i: common_vendor.n(__props.direction == "horizontal" ? "up-dragsort--horizontal" : ""),
      j: common_vendor.n(__props.direction == "vertical" ? "up-dragsort--vertical" : ""),
      k: common_vendor.n(__props.direction == "all" ? "up-dragsort--all" : ""),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      m: common_vendor.s(movableAreaStyle.value),
      n: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c77c530d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-dragsort/up-dragsort.js.map
