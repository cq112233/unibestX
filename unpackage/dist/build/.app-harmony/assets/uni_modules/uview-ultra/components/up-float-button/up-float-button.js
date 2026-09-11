import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpFloatButtonUpFloatButton";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-float-button"
  },
  __dynamicSharedData: true,
  __className,
  __filename: "uni_modules/uview-ultra/components/up-float-button/up-float-button.uvue",
  __name: "up-float-button",
  props: {
    backgroundColor: {
      type: String,
      default: "#2979ff"
    },
    color: {
      type: String,
      default: "#fff"
    },
    width: {
      type: String,
      default: "50px"
    },
    height: {
      type: String,
      default: "50px"
    },
    borderColor: {
      type: String,
      default: ""
    },
    right: {
      type: [String, Number],
      default: "30px"
    },
    top: {
      type: [String, Number],
      default: ""
    },
    bottom: {
      type: [String, Number],
      default: ""
    },
    isMenu: {
      type: Boolean,
      default: false
    },
    // 开启后可以按住主按钮拖到屏幕任意位置。
    // 关闭时（默认）位置完全由 top / bottom / right 决定，与老版本行为一致
    draggable: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ["click", "item-click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpFloatButtonUpFloatButtonSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const showList = ref(false);
    const windowInfo = uni.getWindowInfo();
    const dragLeft = ref(0);
    const dragTop = ref(0);
    let dragging = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let originLeft = 0;
    let originTop = 0;
    let movedDistance = 0;
    function numberValue(value) {
      const n = parseFloat(value.toString());
      return isNaN(n) ? 0 : n;
    }
    function clampNumber(value, min, max) {
      if (value < min) {
        return min;
      }
      if (value > max) {
        return max;
      }
      return value;
    }
    function resolveDragOrigin() {
      const btnW = numberValue(props.width);
      const btnH = numberValue(props.height);
      const topStr = props.top.toString();
      const bottomStr = props.bottom.toString();
      let y = windowInfo.windowHeight - btnH;
      if (topStr != "") {
        y = numberValue(topStr);
      } else if (bottomStr != "") {
        y = windowInfo.windowHeight - numberValue(bottomStr) - btnH;
      }
      dragTop.value = y;
      dragLeft.value = windowInfo.windowWidth - numberValue(props.right) - btnW;
    }
    if (props.draggable) {
      resolveDragOrigin();
    }
    const rootStyle = computed(() => {
      if (props.draggable) {
        return new UTSJSONObject({
          position: "fixed",
          left: dragLeft.value.toString() + "px",
          top: dragTop.value.toString() + "px"
        });
      }
      return new UTSJSONObject({
        position: "fixed",
        top: props.top,
        bottom: props.bottom,
        right: props.right
      });
    });
    function onDragStart(e) {
      if (!props.draggable || e.touches.length == 0) {
        return null;
      }
      touchStartX = e.touches[0].pageX;
      touchStartY = e.touches[0].pageY;
      originLeft = dragLeft.value;
      originTop = dragTop.value;
      movedDistance = 0;
      dragging = true;
    }
    function onDragMove(e) {
      if (!props.draggable || !dragging || e.touches.length == 0) {
        return null;
      }
      const dx = e.touches[0].pageX - touchStartX;
      const dy = e.touches[0].pageY - touchStartY;
      const moved = Math.abs(dx) + Math.abs(dy);
      if (moved > movedDistance) {
        movedDistance = moved;
      }
      dragLeft.value = clampNumber(originLeft + dx, 0, windowInfo.windowWidth - numberValue(props.width));
      dragTop.value = clampNumber(originTop + dy, 0, windowInfo.windowHeight - numberValue(props.height));
    }
    function onDragEnd() {
      if (!props.draggable) {
        return null;
      }
      dragging = false;
    }
    function stringValue(value = null) {
      return value == null ? "" : value.toString();
    }
    function copyObject(item) {
      const copied = new UTSJSONObject({});
      const keys = UTSJSONObject.keys(item);
      for (let i = 0; i < keys.length; i++) {
        copied[keys[i]] = item[keys[i]];
      }
      return copied;
    }
    function getItemBackgroundColor(item) {
      const value = stringValue(item["backgroundColor"]);
      return value == "" ? props.backgroundColor : value;
    }
    function getItemColor(item) {
      const value = stringValue(item["color"]);
      return value == "" ? props.color : value;
    }
    function getItemBorderColor(item) {
      const value = stringValue(item["borderColor"]);
      return value == "" ? props.borderColor : value;
    }
    function getItemName(item) {
      return stringValue(item["name"]);
    }
    function getItemStyle(item) {
      const style = new UTSJSONObject({});
      style["backgroundColor"] = getItemBackgroundColor(item);
      style["display"] = "flex";
      style["flexDirection"] = "row";
      style["justifyContent"] = "center";
      style["alignItems"] = "center";
      style["width"] = props.width;
      style["height"] = props.height;
      style["borderRadius"] = "50%";
      style["borderColor"] = getItemBorderColor(item);
      return style;
    }
    function clickHandler(e) {
      if (props.draggable && movedDistance > 8) {
        movedDistance = 0;
        return null;
      }
      movedDistance = 0;
      if (props.isMenu) {
        showList.value = !showList.value;
      }
      emit("click", e);
    }
    function itemClick(item, index) {
      const payload = copyObject(item);
      payload["index"] = index;
      emit("item-click", payload);
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0$1;
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 10, rootStyle.value);
        _setSharedDataStyle(__sharedData, 11, {
          backgroundColor: __props.backgroundColor,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: __props.width,
          height: __props.height,
          borderRadius: "50%",
          borderColor: __props.borderColor,
          overflow: "visible"
        });
      });
      _createSharedDataSlot("default", { showList: () => {
        return showList.value;
      } }, (data) => {
        return _setSharedData(__sharedData, 3, data);
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_icon, "74964f8c", {
          class: () => {
            return ["wtu-1bvspap-0", { "show-list": showList.value }];
          },
          name: "plus",
          color: () => {
            return __props.color;
          }
        });
        _setSharedData(__sharedData, 4, n2?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 5, clickHandler);
      _setSharedDataEvent(__sharedData, 6, onDragStart);
      _setSharedDataEvent(__sharedData, 7, onDragMove);
      _setSharedDataEvent(__sharedData, 8, onDragEnd);
      _setSharedDataEvent(__sharedData, 9, onDragEnd);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(showList.value));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 2, {
            bottom: __props.height
          });
        });
        _createSharedDataSlot("list", null, null, () => {
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 1, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return __props.list;
          }, (__sharedData_VFor0, _for_item0, _for_key0) => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor0, 3, getItemStyle(_for_item0.value));
            });
            const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "1e39eec2-" + _for_key0.value, {
              name: () => {
                return getItemName(_for_item0.value);
              },
              color: () => {
                return getItemColor(_for_item0.value);
              }
            });
            _setSharedData(__sharedData_VFor0, 1, n10?.sharedData);
            _setSharedDataEvent(__sharedData_VFor0, 2, () => {
              return itemClick(_for_item0.value, _for_key0.value);
            });
            return null;
          }, (__sharedData_VFor0, item, index) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
          });
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"fixed":{"":{"position":"fixed"}},"flex":{"":{"display":"flex"}}};
const _style_1 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  __easycom_0 as _
};
