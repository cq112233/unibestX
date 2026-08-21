import { s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataDataset: _setSharedDataDataset, setSharedDataElementCallback: _setSharedDataElementCallback, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpDragsortUpDragsort";
const { ref, computed, watch, onMounted, nextTick, getCurrentInstance, useSlots } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-dragsort",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "c74abfa2",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-dragsort/up-dragsort.uvue",
  __name: "up-dragsort",
  props: {
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
  },
  emits: ["drag-end"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpDragsortUpDragsortSharedData", sharedDataClassId: 0 })));
    function createDragList() {
      return [];
    }
    function copyObject(item) {
      const copied = new UTSJSONObject({});
      const keys = UTSJSONObject.keys(item);
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
    const instance = getCurrentInstance();
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
    const slots = useSlots();
    const hasHandlerSlot = computed(() => {
      return slots["handler"] != null;
    });
    const list = ref(createDragList());
    const dragIndex = ref(-1);
    const sortChanged = ref(false);
    const itemHeight = ref(0);
    const itemWidth = ref(0);
    const areaWidth = ref(0);
    const areaHeight = ref(0);
    const dragStartX = ref(0);
    const dragStartY = ref(0);
    const dragOffsetX = ref(0);
    const dragOffsetY = ref(0);
    let timer = 0;
    let dragTouchId = -1;
    const typedList = computed(() => {
      return list.value;
    });
    const movableAreaStyle = computed(() => {
      const style = new UTSJSONObject({});
      const l = typedList.value;
      if (props.direction == "vertical") {
        style["height"] = itemHeight.value > 0 ? `${l.length * itemHeight.value}px` : "auto";
        style["width"] = "100%";
        return style;
      }
      if (props.direction == "horizontal") {
        style["height"] = itemHeight.value > 0 ? `${itemHeight.value}px` : "auto";
        style["width"] = itemWidth.value > 0 ? `${l.length * itemWidth.value}px` : "auto";
        return style;
      }
      const rows = Math.ceil(l.length / props.columns);
      style["height"] = itemHeight.value > 0 ? `${rows * itemHeight.value}px` : "auto";
      style["width"] = "100%";
      return style;
    });
    function buildItemPosition(item, index) {
      const nextItem = copyObject(item);
      let x = 0;
      let y = 0;
      if (props.direction == "horizontal" && itemWidth.value > 0) {
        x = index * itemWidth.value;
      } else if (props.direction == "vertical" && itemHeight.value > 0) {
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
        if (isDragging && dragIndex.value == i) {
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
    async function calculateItemSize() {
      await sleep(30);
      return new Promise((resolve) => {
        uni.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select(".up-dragsort-item-content").boundingClientRect((res = null) => {
          const rect = res;
          if (rect != null) {
            itemHeight.value = rect.height != null ? rect.height : 40;
            itemWidth.value = rect.width != null ? rect.width : 80;
            updatePositions();
          }
          resolve(rect);
        }).exec();
      });
    }
    async function calculateAreaSize() {
      await sleep(30);
      return new Promise((resolve) => {
        uni.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select(".up-dragsort-area").boundingClientRect((res = null) => {
          const rect = res;
          if (rect != null) {
            areaWidth.value = rect.width != null ? rect.width : 300;
            areaHeight.value = rect.height != null ? rect.height : 300;
          }
          resolve(rect);
        }).exec();
      });
    }
    function getItemStyle(item, index) {
      const style = new UTSJSONObject({});
      let x = getItemX(item);
      let y = getItemY(item);
      if (dragIndex.value == index) {
        x = x + dragOffsetX.value;
        y = y + dragOffsetY.value;
      }
      style["left"] = `${x}px`;
      style["top"] = `${y}px`;
      return style;
    }
    function findTouchByIdentifier(touches, identifier) {
      for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        if (touch.identifier == identifier) {
          return touch;
        }
      }
      return null;
    }
    function beginDrag(index, e) {
      const l = typedList.value;
      if (!props.draggable || index < 0 || index >= l.length || isItemDisabled(l[index])) {
        return null;
      }
      if (dragTouchId != -1) {
        return null;
      }
      if (timer > 0) {
        clearTimeout(timer);
        timer = 0;
      }
      let startTouch = null;
      if (e.changedTouches.length > 0) {
        startTouch = e.changedTouches[0];
      } else if (e.touches.length > 0) {
        startTouch = e.touches[0];
      }
      if (startTouch == null) {
        return null;
      }
      sortChanged.value = false;
      dragIndex.value = index;
      dragTouchId = startTouch.identifier;
      dragStartX.value = startTouch.pageX;
      dragStartY.value = startTouch.pageY;
      dragOffsetX.value = 0;
      dragOffsetY.value = 0;
    }
    function onItemTouchStart(index, e) {
      if (props.handleDrag || hasHandlerSlot.value) {
        return null;
      }
      beginDrag(index, e);
    }
    function onHandlerTouchStart(index, e) {
      beginDrag(index, e);
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
      if (props.vibrate) {
        uni.vibrateShort({ type: "light" });
      }
    }
    function updateDragTarget(index) {
      const l = typedList.value;
      if (l.length <= 1) {
        return null;
      }
      const currentX = getItemX(l[index]) + dragOffsetX.value;
      const currentY = getItemY(l[index]) + dragOffsetY.value;
      let targetIndex = index;
      if (props.direction == "vertical") {
        if (itemHeight.value > 0) {
          targetIndex = Math.max(0, Math.min(Math.round(currentY / itemHeight.value), l.length - 1));
        }
      } else if (props.direction == "horizontal") {
        if (itemWidth.value > 0) {
          targetIndex = Math.max(0, Math.min(Math.round(currentX / itemWidth.value), l.length - 1));
        }
      } else {
        if (itemWidth.value > 0 && itemHeight.value > 0) {
          const col = Math.max(0, Math.min(Math.round(currentX / itemWidth.value), props.columns - 1));
          const row = Math.max(0, Math.round(currentY / itemHeight.value));
          targetIndex = row * props.columns + col;
          targetIndex = Math.max(0, Math.min(targetIndex, l.length - 1));
        }
      }
      if (targetIndex != index) {
        reorderItems(index, targetIndex);
      }
    }
    function onTouchMove(e) {
      if (dragIndex.value == -1) {
        return null;
      }
      let touch = findTouchByIdentifier(e.changedTouches, dragTouchId);
      if (touch == null) {
        touch = findTouchByIdentifier(e.touches, dragTouchId);
      }
      if (touch == null) {
        return null;
      }
      e.stopPropagation();
      e.preventDefault();
      let offsetX = touch.pageX - dragStartX.value;
      let offsetY = touch.pageY - dragStartY.value;
      if (props.direction == "vertical") {
        offsetX = 0;
      } else if (props.direction == "horizontal") {
        offsetY = 0;
      }
      dragOffsetX.value = offsetX;
      dragOffsetY.value = offsetY;
      updateDragTarget(dragIndex.value);
    }
    function onTouchEnd(e) {
      if (dragIndex.value == -1) {
        return null;
      }
      const endTouch = findTouchByIdentifier(e.changedTouches, dragTouchId);
      if (endTouch != null) {
        let offsetX = endTouch.pageX - dragStartX.value;
        let offsetY = endTouch.pageY - dragStartY.value;
        if (props.direction == "vertical") {
          offsetX = 0;
        } else if (props.direction == "horizontal") {
          offsetY = 0;
        }
        dragOffsetX.value = offsetX;
        dragOffsetY.value = offsetY;
        updateDragTarget(dragIndex.value);
      }
      dragTouchId = -1;
      updatePositions();
      dragOffsetX.value = 0;
      dragOffsetY.value = 0;
      if (sortChanged.value) {
        emit("drag-end", copyList(typedList.value));
        sortChanged.value = false;
      }
      timer = setTimeout(() => {
        dragIndex.value = -1;
        timer = 0;
      }, 600);
    }
    watch(() => {
      return props.initialList;
    }, () => {
      nextTick(() => {
        initList();
      });
    }, { deep: true });
    watch(() => {
      return props.direction;
    }, () => {
      nextTick(() => {
        initList();
        calculateItemSize();
        calculateAreaSize();
      });
    });
    watch(() => {
      return props.columns;
    }, () => {
      if (props.direction == "all") {
        nextTick(() => {
          initList();
          updatePositions();
        });
      }
    });
    onMounted(() => {
      nextTick(() => {
        initList();
        calculateItemSize();
        calculateAreaSize();
      });
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        const _direction = __props.direction;
        _setSharedDataClass(__sharedData, 1, ["up-dragsort", [
          _direction == "horizontal" ? "up-dragsort--horizontal" : "",
          _direction == "vertical" ? "up-dragsort--vertical" : "",
          _direction == "all" ? "up-dragsort--all" : ""
        ]]);
        _setSharedDataStyle(__sharedData, 2, movableAreaStyle.value);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return typedList.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          const _index = _for_key0.value;
          const _item = _for_item0.value;
          const _direction = __props.direction;
          _setSharedDataAttr(__sharedData_VFor0, 10, _toSharedDataString(`up-dragsort-item-${_index}`));
          _setSharedDataClass(__sharedData_VFor0, 11, ["up-dragsort-item", {
            dragging: dragIndex.value == _index,
            disabled: !__props.draggable || isItemDisabled(_item),
            "up-dragsort-item--vertical": _direction == "vertical",
            "up-dragsort-item--horizontal": _direction == "horizontal",
            "up-dragsort-item--all": _direction == "all"
          }]);
          _setSharedDataStyle(__sharedData_VFor0, 12, getItemStyle(_item, _index));
          _setSharedDataClass(__sharedData_VFor0, 13, ["ui-dragSort-item-handler", [__props.handleDrag || hasHandlerSlot.value ? "ui-dragSort-item-handler--enabled" : "", __props.handlerPosition == "left" ? "ui-dragSort-item-handler--left" : ""]]);
        });
        _createSharedDataSlot("handler", {
          item: () => {
            return _for_item0.value;
          },
          index: () => {
            return _for_key0.value;
          }
        }, (data) => {
          return _setSharedData(__sharedData_VFor0, 3, data);
        });
        _setSharedDataEvent(__sharedData_VFor0, 4, ($event) => {
          return onHandlerTouchStart(_for_key0.value, $event);
        });
        _setSharedDataElementCallback(__sharedData_VFor0, 5, _setSharedDataDataset({ "action": "handler" }));
        _createSharedDataSlot("default", {
          item: () => {
            return _for_item0.value;
          },
          index: () => {
            return _for_key0.value;
          }
        }, (data) => {
          return _setSharedData(__sharedData_VFor0, 1, data);
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData_VFor0, 2, _toDisplayString(getItemLabel(_for_item0.value)));
          });
        });
        _setSharedDataEvent(__sharedData_VFor0, 6, ($event) => {
          return onItemTouchStart(_for_key0.value, $event);
        });
        _setSharedDataEvent(__sharedData_VFor0, 7, ($event) => {
          return onTouchMove($event);
        });
        _setSharedDataEvent(__sharedData_VFor0, 8, ($event) => {
          return onTouchEnd($event);
        });
        _setSharedDataEvent(__sharedData_VFor0, 9, ($event) => {
          return onTouchEnd($event);
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(getItemKey(item, index)));
      }, 1);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-dragsort.js.map
