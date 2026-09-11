import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpDragsortUpDragsort";
const { ref, computed, watch, onMounted, nextTick, getCurrentInstance, useSlots } = globalThis.Vue;
class ItemLayout extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          left: { type: Number, optional: false },
          pageTop: { type: Number, optional: false },
          width: { type: Number, optional: false },
          height: { type: Number, optional: false },
          centerX: { type: Number, optional: false },
          centerY: { type: Number, optional: false }
        };
      }
    };
  }
  constructor(options, metadata = ItemLayout.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.left = this.__props__.left;
    this.pageTop = this.__props__.pageTop;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.centerX = this.__props__.centerX;
    this.centerY = this.__props__.centerY;
    delete this.__props__;
  }
}
class ContainerLayout extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          left: { type: Number, optional: false },
          pageTop: { type: Number, optional: false },
          width: { type: Number, optional: false },
          height: { type: Number, optional: false }
        };
      }
    };
  }
  constructor(options, metadata = ContainerLayout.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.left = this.__props__.left;
    this.pageTop = this.__props__.pageTop;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
const longPressDuration = 350;
const pressCancelDistance = 10;
const dragActiveScale = 1.12;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-dragsort",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
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
    function stringValue(value = null) {
      return value == null ? "" : value.toString();
    }
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const slots = useSlots();
    const list = ref([]);
    const itemIds = ref([]);
    const previewItemIds = ref([]);
    const nextItemId = ref(0);
    const dragging = ref(false);
    const settling = ref(false);
    const activeIndex = ref(-1);
    const hoverIndex = ref(-1);
    const pendingIndex = ref(-1);
    const dragOffsetX = ref(0);
    const dragOffsetY = ref(0);
    const startTouchX = ref(0);
    const startTouchY = ref(0);
    const layouts = ref([]);
    const containerLayout = ref(null);
    const gridColumnCenters = ref([]);
    const gridRowCenters = ref([]);
    let longPressTimer = 0;
    let touchVersion = 0;
    class TouchContext {
      constructor(index) {
        this.index = index;
        this.version = touchVersion;
      }
    }
    let currentTouchContext = null;
    const typedList = computed(() => {
      return list.value;
    });
    const columnCount = computed(() => {
      if (props.direction == "all") {
        const columns = Math.floor(props.columns);
        return columns > 0 ? columns : 1;
      }
      if (props.direction == "horizontal") {
        return 0;
      }
      return 1;
    });
    const handleModeEnabled = computed(() => {
      return props.handleDrag || slots["handler"] != null;
    });
    const containerStyle = computed(() => {
      const currentContainerLayout = containerLayout.value;
      if (dragging.value && currentContainerLayout != null) {
        return `height: ${currentContainerLayout.height}px;`;
      }
      return "";
    });
    function createIdentityOrder(length) {
      const order = [];
      for (let i = 0; i < length; i++) {
        order.push(i);
      }
      return order;
    }
    function buildIdList(length) {
      const ids = [];
      for (let i = 0; i < length; i++) {
        ids.push(nextItemId.value);
        nextItemId.value = nextItemId.value + 1;
      }
      return ids;
    }
    function applyPreviewOrder(order) {
      const nextPreviewItemIds = [];
      for (let i = 0; i < order.length; i++) {
        const sourceIndex = order[i];
        if (sourceIndex >= 0 && sourceIndex < itemIds.value.length) {
          nextPreviewItemIds.push(itemIds.value[sourceIndex]);
        }
      }
      previewItemIds.value = nextPreviewItemIds;
    }
    function findPreviewPosition(itemId) {
      for (let i = 0; i < previewItemIds.value.length; i++) {
        if (previewItemIds.value[i] == itemId) {
          return i;
        }
      }
      return -1;
    }
    function buildPreviewOrder(length, from, to) {
      const order = createIdentityOrder(length);
      if (from == to) {
        return order;
      }
      order.splice(from, 1);
      order.splice(to, 0, from);
      return order;
    }
    function getItemLabel(item) {
      return stringValue(item["label"]);
    }
    function isItemDisabled(item) {
      const draggableValue = item["draggable"];
      return draggableValue != null && draggableValue.toString() == "false";
    }
    function canDragItem(index) {
      if (!props.draggable) {
        return false;
      }
      if (index < 0 || index >= list.value.length) {
        return false;
      }
      return !isItemDisabled(list.value[index]);
    }
    function getItemClass(item, index) {
      let className = "";
      if (dragging.value && activeIndex.value == index) {
        className += " dragging";
      }
      if (!props.draggable || isItemDisabled(item)) {
        className += " disabled";
      }
      if (props.direction == "horizontal") {
        className += " up-dragsort-item--horizontal";
      } else if (props.direction == "all") {
        className += " up-dragsort-item--all";
      } else {
        className += " up-dragsort-item--vertical";
      }
      return className;
    }
    function rebuildGridAxisCache(nextLayouts) {
      const nextColumnCenters = [];
      const nextRowCenters = [];
      const length = nextLayouts.length;
      const columns = columnCount.value;
      if (columns > 0 && length > 0) {
        const actualColumns = Math.min(columns, length);
        for (let i = 0; i < actualColumns; i++) {
          nextColumnCenters.push(nextLayouts[i].centerX);
        }
        for (let i = 0; i < length; i += actualColumns) {
          nextRowCenters.push(nextLayouts[i].centerY);
        }
      }
      gridColumnCenters.value = nextColumnCenters;
      gridRowCenters.value = nextRowCenters;
    }
    function measureLayouts() {
      if (instance == null || instance.proxy == null) {
        return Promise.resolve();
      }
      const query = uni.createSelectorQuery().in(instance.proxy);
      query.select(".up-dragsort-area").boundingClientRect((rect = null) => {
        if (rect != null) {
          const containerRect = rect;
          let top_1 = containerRect.top != null ? containerRect.top : 0;
          const height = containerRect.height != null ? containerRect.height : 0;
          if (top_1 == 0 && containerRect.bottom != null) {
            top_1 = containerRect.bottom - height;
          }
          containerLayout.value = new ContainerLayout({
            left: containerRect.left != null ? containerRect.left : 0,
            pageTop: top_1,
            width: containerRect.width != null ? containerRect.width : 0,
            height
          });
        }
      });
      query.selectAll(".up-dragsort-item").boundingClientRect((rects = null) => {
        const nextLayouts = [];
        if (rects != null) {
          const rectList = rects;
          for (let i = 0; i < rectList.length; i++) {
            const rect = rectList[i];
            const left = rect.left != null ? rect.left : 0;
            let top_2 = rect.top != null ? rect.top : 0;
            const width = rect.width != null ? rect.width : 0;
            const height = rect.height != null ? rect.height : 0;
            if (top_2 == 0 && rect.bottom != null) {
              top_2 = rect.bottom - height;
            }
            nextLayouts.push(new ItemLayout({
              left,
              pageTop: top_2,
              width,
              height,
              centerX: left + width / 2,
              centerY: top_2 + height / 2
            }));
          }
        }
        layouts.value = nextLayouts;
        rebuildGridAxisCache(nextLayouts);
      });
      return new Promise((resolve) => {
        query.exec(() => {
          resolve();
        });
      });
    }
    function findNearestAxisIndex(centers, value) {
      let nearestIndex = 0;
      let nearestDistance = -1;
      for (let i = 0; i < centers.length; i++) {
        const distance = Math.abs(centers[i] - value);
        if (nearestDistance < 0 || distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = i;
        }
      }
      return nearestIndex;
    }
    function getGridHoverIndex(centerX, centerY) {
      const length = layouts.value.length;
      const columns = columnCount.value;
      if (columns <= 0 || length == 0) {
        return activeIndex.value;
      }
      const actualColumns = Math.min(columns, length);
      const columnIndex = findNearestAxisIndex(gridColumnCenters.value, centerX);
      const rowIndex = findNearestAxisIndex(gridRowCenters.value, centerY);
      const rowStart = rowIndex * actualColumns;
      const rowEnd = Math.min(rowStart + actualColumns, length);
      let targetIndex = rowStart + columnIndex;
      if (targetIndex >= rowEnd) {
        targetIndex = rowEnd - 1;
      }
      return targetIndex;
    }
    function updateHoverIndex() {
      const currentActiveIndex = activeIndex.value;
      if (currentActiveIndex < 0 || currentActiveIndex >= layouts.value.length) {
        return null;
      }
      const sourceLayout = layouts.value[currentActiveIndex];
      const centerX = sourceLayout.left + sourceLayout.width / 2 + dragOffsetX.value;
      const centerY = sourceLayout.pageTop + sourceLayout.height / 2 + dragOffsetY.value;
      let targetIndex = currentActiveIndex;
      if (columnCount.value > 0) {
        targetIndex = getGridHoverIndex(centerX, centerY);
      } else {
        let nearestDistance = -1;
        for (let i = 0; i < layouts.value.length; i++) {
          const layout = layouts.value[i];
          const deltaX = layout.centerX - centerX;
          const deltaY = layout.centerY - centerY;
          const distance = deltaX * deltaX + deltaY * deltaY;
          if (nearestDistance < 0 || distance < nearestDistance) {
            nearestDistance = distance;
            targetIndex = i;
          }
        }
      }
      if (targetIndex != hoverIndex.value) {
        hoverIndex.value = targetIndex;
        applyPreviewOrder(buildPreviewOrder(list.value.length, currentActiveIndex, targetIndex));
      }
    }
    function getItemStyle(index) {
      let widthStyle = "width: auto;";
      if (columnCount.value > 0) {
        widthStyle = `width: ${100 / columnCount.value}%;`;
      }
      let positionStyle = "";
      let zIndexStyle = "z-index: 1;";
      let transitionStyle = "transition-duration: 200ms;";
      let transformStyle = "translateX(0px) translateY(0px)";
      if (settling.value) {
        transitionStyle = "transition-duration: 0ms;";
      }
      const currentContainerLayout = containerLayout.value;
      if (dragging.value && index < layouts.value.length && currentContainerLayout != null) {
        const sourceLayout = layouts.value[index];
        const baseLeft = sourceLayout.left - currentContainerLayout.left;
        const baseTop = sourceLayout.pageTop - currentContainerLayout.pageTop;
        widthStyle = "";
        positionStyle = `position: absolute; left: ${baseLeft}px; top: ${baseTop}px; width: ${sourceLayout.width}px; height: ${sourceLayout.height}px;`;
        if (activeIndex.value == index) {
          transitionStyle = "transition-duration: 0ms;";
          zIndexStyle = "z-index: 30;";
          transformStyle = `translateX(${dragOffsetX.value}px) translateY(${dragOffsetY.value}px) scale(${dragActiveScale})`;
        } else {
          if (index < itemIds.value.length) {
            const currentItemId = itemIds.value[index];
            const targetPosition = findPreviewPosition(currentItemId);
            if (targetPosition >= 0 && targetPosition < layouts.value.length) {
              const targetLayout = layouts.value[targetPosition];
              const deltaX = targetLayout.left - sourceLayout.left;
              const deltaY = targetLayout.pageTop - sourceLayout.pageTop;
              transformStyle = `translateX(${deltaX}px) translateY(${deltaY}px)`;
            }
          }
        }
      } else if (index != activeIndex.value) {
        transitionStyle = "transition-duration: 0ms;";
      }
      return `${widthStyle}${positionStyle}${zIndexStyle}${transitionStyle}transform: ${transformStyle};`;
    }
    function clearLongPressTimer() {
      if (longPressTimer != 0) {
        clearTimeout(longPressTimer);
        longPressTimer = 0;
      }
    }
    function cancelPendingPress() {
      clearLongPressTimer();
      pendingIndex.value = -1;
    }
    function resetDragState() {
      clearLongPressTimer();
      dragging.value = false;
      activeIndex.value = -1;
      hoverIndex.value = -1;
      pendingIndex.value = -1;
      dragOffsetX.value = 0;
      dragOffsetY.value = 0;
      applyPreviewOrder(createIdentityOrder(list.value.length));
    }
    function beginDrag(index, clientX, clientY) {
      if (layouts.value.length != list.value.length || index >= layouts.value.length) {
        cancelPendingPress();
        return null;
      }
      if (!canDragItem(index)) {
        cancelPendingPress();
        return null;
      }
      clearLongPressTimer();
      pendingIndex.value = -1;
      startTouchX.value = clientX;
      startTouchY.value = clientY;
      dragOffsetX.value = 0;
      dragOffsetY.value = 0;
      settling.value = false;
      dragging.value = true;
      activeIndex.value = index;
      hoverIndex.value = index;
      applyPreviewOrder(createIdentityOrder(list.value.length));
      if (props.vibrate) {
        uni.vibrateShort({ type: "light" });
      }
    }
    function scheduleLongPress(context, clientX, clientY) {
      clearLongPressTimer();
      pendingIndex.value = context.index;
      startTouchX.value = clientX;
      startTouchY.value = clientY;
      longPressTimer = setTimeout(() => {
        longPressTimer = 0;
        measureLayouts().then(() => {
          if (touchVersion != context.version) {
            return null;
          }
          beginDrag(context.index, clientX, clientY);
        });
      }, longPressDuration);
    }
    function moveDrag(clientX, clientY) {
      if (dragging.value && activeIndex.value >= 0) {
        dragOffsetX.value = clientX - startTouchX.value;
        dragOffsetY.value = clientY - startTouchY.value;
        updateHoverIndex();
        return null;
      }
      if (pendingIndex.value >= 0) {
        const deltaX = clientX - startTouchX.value;
        const deltaY = clientY - startTouchY.value;
        if (deltaX * deltaX + deltaY * deltaY > pressCancelDistance * pressCancelDistance) {
          cancelPendingPress();
        }
      }
    }
    function finishDrag() {
      if (pendingIndex.value >= 0) {
        cancelPendingPress();
        return null;
      }
      if (!dragging.value || activeIndex.value < 0) {
        return null;
      }
      const currentActiveIndex = activeIndex.value;
      const targetIndex = hoverIndex.value;
      if (targetIndex < 0 || targetIndex == currentActiveIndex) {
        resetDragState();
        return null;
      }
      const nextList = list.value.slice();
      const movedItem = nextList.splice(currentActiveIndex, 1)[0];
      nextList.splice(targetIndex, 0, movedItem);
      const nextItemIds = itemIds.value.slice();
      const movedItemId = nextItemIds.splice(currentActiveIndex, 1)[0];
      nextItemIds.splice(targetIndex, 0, movedItemId);
      settling.value = true;
      resetDragState();
      list.value = nextList;
      itemIds.value = nextItemIds;
      applyPreviewOrder(createIdentityOrder(nextItemIds.length));
      emit("drag-end", copyList(nextList));
      nextTick(() => {
        settling.value = false;
      });
    }
    function onItemTouchStart(index, event) {
      if (handleModeEnabled.value) {
        return null;
      }
      if (dragging.value) {
        return null;
      }
      if (!canDragItem(index)) {
        return null;
      }
      if (event.touches.length == 0) {
        return null;
      }
      const touch = event.touches[0];
      const context = new TouchContext(index);
      currentTouchContext = context;
      scheduleLongPress(context, touch.clientX, touch.clientY);
    }
    function onItemTouchMove(index, event) {
      if (!dragging.value && pendingIndex.value < 0) {
        return null;
      }
      if (event.touches.length == 0) {
        return null;
      }
      const touch = event.touches[0];
      if (dragging.value) {
        event.preventDefault();
        if (index != activeIndex.value) {
          return null;
        }
      }
      moveDrag(touch.clientX, touch.clientY);
    }
    function onItemTouchEnd(index, _event) {
      if (currentTouchContext != null && currentTouchContext.index == index) {
        touchVersion++;
        currentTouchContext = null;
      }
      cancelPendingPress();
      if (!dragging.value) {
        return null;
      }
      if (index != activeIndex.value) {
        return null;
      }
      finishDrag();
    }
    function onHandleTouchStart(index, event) {
      if (!handleModeEnabled.value) {
        return null;
      }
      if (!canDragItem(index)) {
        return null;
      }
      if (event.touches.length == 0) {
        return null;
      }
      const touch = event.touches[0];
      const context = new TouchContext(index);
      currentTouchContext = context;
      measureLayouts().then(() => {
        if (touchVersion != context.version) {
          return null;
        }
        beginDrag(context.index, touch.clientX, touch.clientY);
      });
    }
    function onHandleTouchEnd(index, _event) {
      if (currentTouchContext != null && currentTouchContext.index == index) {
        touchVersion++;
        currentTouchContext = null;
      }
      if (!dragging.value) {
        return null;
      }
      if (index != activeIndex.value) {
        return null;
      }
      finishDrag();
    }
    function syncFromModel() {
      if (dragging.value) {
        return null;
      }
      const source = props.initialList;
      const nextList = [];
      for (let i = 0; i < source.length; i++) {
        nextList.push(copyObject(source[i]));
      }
      list.value = nextList;
      itemIds.value = buildIdList(nextList.length);
      resetDragState();
    }
    watch(() => {
      return props.initialList;
    }, (_newList) => {
      nextTick(() => {
        syncFromModel();
      });
    }, { deep: true });
    watch(() => {
      return props.direction;
    }, (_newValue) => {
      nextTick(() => {
        syncFromModel();
      });
    });
    watch(() => {
      return props.columns;
    }, (_newValue) => {
      nextTick(() => {
        syncFromModel();
      });
    });
    onMounted(() => {
      nextTick(() => {
        syncFromModel();
      });
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        const _direction = __props.direction;
        _setSharedDataClass(__sharedData, 1, ["weapp-tw-border up-dragsort", [
          _direction == "horizontal" ? "up-dragsort--horizontal" : "",
          _direction == "vertical" ? "up-dragsort--vertical" : "",
          _direction == "all" ? "up-dragsort--all" : ""
        ]]);
        _setSharedDataClass(__sharedData, 2, ["weapp-tw-border up-dragsort-area", _direction == "horizontal" ? "up-dragsort-area--horizontal" : ""]);
        _setSharedDataStyle(__sharedData, 3, containerStyle.value);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return typedList.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          const _index = _for_key0.value;
          _setSharedDataClass(__sharedData_VFor0, 13, ["weapp-tw-border up-dragsort-item", getItemClass(_for_item0.value, _index)]);
          _setSharedDataStyle(__sharedData_VFor0, 14, getItemStyle(_index));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(handleModeEnabled.value));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataClass(__sharedData_VFor0, 6, ["weapp-tw-border ui-dragSort-item-handler", ["ui-dragSort-item-handler--enabled", __props.handlerPosition == "left" ? "ui-dragSort-item-handler--left" : ""]]);
          });
          _createSharedDataSlot("handler", {
            item: () => {
              return _for_item0.value;
            },
            index: () => {
              return _for_key0.value;
            }
          }, (data) => {
            return _setSharedData(__sharedData_VFor0, 2, data);
          });
          _setSharedDataEvent(__sharedData_VFor0, 3, ($event) => {
            return onHandleTouchStart(_for_key0.value, $event);
          });
          _setSharedDataEvent(__sharedData_VFor0, 4, ($event) => {
            return onHandleTouchEnd(_for_key0.value);
          });
          _setSharedDataEvent(__sharedData_VFor0, 5, ($event) => {
            return onHandleTouchEnd(_for_key0.value);
          });
        });
        _createSharedDataSlot("default", {
          item: () => {
            return _for_item0.value;
          },
          index: () => {
            return _for_key0.value;
          }
        }, (data) => {
          return _setSharedData(__sharedData_VFor0, 7, data);
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData_VFor0, 8, _toDisplayString(getItemLabel(_for_item0.value)));
          });
        });
        _setSharedDataEvent(__sharedData_VFor0, 9, ($event) => {
          return onItemTouchStart(_for_key0.value, $event);
        });
        _setSharedDataEvent(__sharedData_VFor0, 10, ($event) => {
          return onItemTouchMove(_for_key0.value, $event);
        });
        _setSharedDataEvent(__sharedData_VFor0, 11, ($event) => {
          return onItemTouchEnd(_for_key0.value);
        });
        _setSharedDataEvent(__sharedData_VFor0, 12, ($event) => {
          return onItemTouchEnd(_for_key0.value);
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(itemIds.value.length > index ? itemIds.value[index] : index));
      }, 1);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  __easycom_1 as _
};
