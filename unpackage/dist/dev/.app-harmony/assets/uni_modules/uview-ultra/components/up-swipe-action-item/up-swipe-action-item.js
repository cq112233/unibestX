import { _ as __easycom_1$1 } from "../up-icon/up-icon.js";
import { s as sleep, a as addUnit, u as upGetRect } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, createSharedDataSlot: _createSharedDataSlot, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSwipeActionItemUpSwipeActionItem";
const { ref, computed, watch, onMounted, onBeforeUnmount, inject, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-swipe-action-item"
  },
  __dynamicSharedData: true,
  __hash: "1d25e008",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.uvue",
  __name: "up-swipe-action-item",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    index: {
      type: [String, Number],
      default: ""
    },
    name: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 30
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    duration: {
      type: [String, Number],
      default: 350
    },
    closeOnClick: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click", "update:show", "open", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSwipeActionItemUpSwipeActionItemSharedData", sharedDataClassId: 0 })));
    let nextSwipeItemId = 0;
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const selfItemId = ++nextSwipeItemId;
    const parentContext = inject("upSwipeActionContext", null);
    const status = ref(props.show ? "open" : "close");
    const sliderStyle = ref(new UTSJSONObject({}));
    const buttonsWidth = ref(0);
    const isMoving = ref(false);
    const startX = ref(0);
    const startY = ref(0);
    function getIconCustomStyle(item) {
      return new UTSJSONObject({
        marginRight: item["text"] != null ? "2px" : "0px"
      });
    }
    function getOptionStyle(item) {
      const style = item["style"];
      if (style == null)
        return null;
      if (UTS.isInstanceOf(style, UTSJSONObject))
        return style;
      try {
        return style;
      } catch (_e) {
        return null;
      }
    }
    function getOptionStyleProp(item, prop, defaultVal) {
      const style = getOptionStyle(item);
      if (style != null && style[prop] != null) {
        return style[prop];
      }
      return defaultVal;
    }
    function getButtonStyle(item) {
      const style = getOptionStyle(item);
      const hasBorderRadius = style != null && style["borderRadius"] != null;
      let widthStr = "80px";
      if (style != null && style["width"] != null) {
        widthStr = style["width"];
      } else {
        let baseWidth = 30;
        if (item["text"] != null) {
          baseWidth += item["text"].length * 15;
        }
        if (item["icon"] != null) {
          baseWidth += 20;
        }
        widthStr = Math.max(80, baseWidth) + "px";
      }
      return new UTSJSONObject({
        alignItems: hasBorderRadius ? "center" : "stretch",
        width: widthStr,
        flexShrink: 0
      });
    }
    function getWrapperStyle(item) {
      const style = getOptionStyle(item);
      const hasBorderRadius = style != null && style["borderRadius"] != null;
      let bgColor = "#C7C6CD";
      if (style != null && style["backgroundColor"] != null) {
        const bg = style["backgroundColor"];
        if (bg == "primary") {
          bgColor = "";
        } else {
          bgColor = bg;
        }
      }
      const result = new UTSJSONObject({
        borderRadius: hasBorderRadius ? style["borderRadius"] : "0",
        padding: hasBorderRadius ? "0" : "0 15px",
        width: "100%",
        height: "100%"
      });
      if (bgColor != "") {
        result["backgroundColor"] = bgColor;
      }
      return result;
    }
    function getTextStyle(item) {
      const style = getOptionStyle(item);
      return new UTSJSONObject({
        color: style != null && style["color"] != null ? style["color"] : "#ffffff",
        fontSize: style != null && style["fontSize"] != null ? style["fontSize"] : "16px",
        lineHeight: style != null && style["fontSize"] != null ? style["fontSize"] : "16px"
      });
    }
    function getOptionIconSize(item) {
      if (item["iconSize"] != null) {
        return addUnit(item["iconSize"]);
      }
      const style = getOptionStyle(item);
      if (style != null && style["fontSize"] != null) {
        return addUnit(style["fontSize"]);
      }
      return 17;
    }
    function getDuration(value = null) {
      if (value.toString().indexOf("s") >= 0)
        return value;
      return parseInt(value.toString()) > 30 ? value.toString() + "ms" : value.toString() + "s";
    }
    function openSwipeAction() {
      var dur = getDuration(props.duration);
      var bWidth = 0 - buttonsWidth.value;
      sliderStyle.value = new UTSJSONObject({
        "transition": "transform " + dur,
        "transform": "translateX(" + bWidth + "px)",
        "-webkit-transform": "translateX(" + bWidth + "px)"
      });
      status.value = "open";
    }
    function closeSwipeAction() {
      var dur = getDuration(props.duration);
      sliderStyle.value = new UTSJSONObject({
        "transition": "transform " + dur,
        "transform": "translateX(0px)"
      });
      status.value = "close";
    }
    function moveSwipeAction(moveX) {
      sliderStyle.value = new UTSJSONObject({
        "transition": "none",
        "transform": "translateX(" + moveX + "px)",
        "-webkit-transform": "translateX(" + moveX + "px)"
      });
    }
    function closeHandler() {
      closeSwipeAction();
    }
    function buttonClickHandler(item = null, index) {
      emit("click", new UTSJSONObject({
        index,
        name: props.name
      }));
      if (props.closeOnClick) {
        closeHandler();
      }
    }
    function clickHandler() {
    }
    function getBtnWidth() {
      upGetRect(".up-swipe-action-item__right", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        var _a2;
        buttonsWidth.value = (_a2 = res.width) !== null && _a2 !== void 0 ? _a2 : 0;
      });
    }
    function touchstart(event) {
      isMoving.value = true;
      var touches = event.touches;
      startX.value = touches[0].pageX;
      startY.value = touches[0].pageY;
      getBtnWidth();
      if (parentContext != null && parentContext["registerActive"] != null) {
        const regFn = parentContext["registerActive"];
        regFn(selfItemId);
      }
    }
    function touchmove(event) {
      if (props.disabled || !isMoving.value)
        return null;
      var touches = event.touches;
      var pageX = touches[0].pageX;
      var pageY = touches[0].pageY;
      var moveX = pageX - startX.value;
      var moveY = pageY - startY.value;
      if (Math.abs(moveX) > Math.abs(moveY) || Math.abs(moveX) > props.threshold) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (Math.abs(moveX) < Math.abs(moveY))
        return null;
      if (status.value == "open") {
        if (moveX < 0)
          moveX = 0;
        const btnW = buttonsWidth.value;
        if (moveX > btnW)
          moveX = btnW;
        moveSwipeAction(0 - btnW + moveX);
      } else {
        if (moveX > 0)
          moveX = 0;
        const btnW = buttonsWidth.value;
        if (Math.abs(moveX) > btnW)
          moveX = 0 - btnW;
        moveSwipeAction(moveX);
      }
    }
    function touchend(event) {
      if (!isMoving.value || props.disabled)
        return null;
      isMoving.value = false;
      var touches = event.changedTouches[0];
      var pageX = touches.pageX;
      var moveX = pageX - startX.value;
      if (status.value == "open") {
        if (moveX < 0)
          return null;
        if (moveX == 0) {
          closeSwipeAction();
          return null;
        }
        if (Math.abs(moveX) < props.threshold) {
          openSwipeAction();
        } else {
          closeSwipeAction();
        }
      } else {
        if (moveX > 0)
          return null;
        if (Math.abs(moveX) < props.threshold) {
          closeSwipeAction();
        } else {
          openSwipeAction();
        }
      }
    }
    function touchcancel(event) {
      if (!isMoving.value || props.disabled)
        return null;
      isMoving.value = false;
      if (status.value == "open") {
        openSwipeAction();
      } else {
        closeSwipeAction();
      }
    }
    if (parentContext != null) {
      const activeItemIdRef = parentContext["activeItemId"];
      if (activeItemIdRef != null) {
        watch(() => {
          return activeItemIdRef.value;
        }, (newActiveId) => {
          if (newActiveId != selfItemId && status.value == "open") {
            closeHandler();
          }
        });
      }
    }
    watch(() => {
      return props.show;
    }, (newVal) => {
      status.value = newVal ? "open" : "close";
    });
    watch(status, (newValue, oldValue) => {
      if (newValue == "open") {
        emit("update:show", true);
        emit("open", props.index);
        if (parentContext != null && parentContext["registerActive"] != null) {
          const regFn = parentContext["registerActive"];
          regFn(selfItemId);
        }
      } else {
        emit("update:show", false);
        emit("close", props.index);
      }
      if (props.disabled)
        return null;
      if (newValue == "close" && oldValue == "open") {
        closeSwipeAction();
      } else if (newValue == "open" && oldValue == "close") {
        openSwipeAction();
      }
    });
    watch(() => {
      return props.options;
    }, () => {
      getBtnWidth();
    }, { deep: true });
    onMounted(() => {
      sleep(100).then(() => {
        getBtnWidth();
      });
    });
    onBeforeUnmount(() => {
      closeHandler();
    });
    __expose({
      open: openSwipeAction,
      close: closeSwipeAction
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_icon = __easycom_1$1;
      _createSharedDataSlot("button", null, null, () => {
        _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
        })), () => {
          return __props.options;
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          _renderSharedDataEffect(() => {
            const _item = _for_item0.value;
            _setSharedDataStyle(__sharedData_VFor0, 7, getButtonStyle(_item));
            _setSharedDataClass(__sharedData_VFor0, 8, ["up-swipe-action-item__right__button__wrapper", {
              "up-swipe-action-item__right__button__wrapper--primary": getOptionStyleProp(_item, "backgroundColor", "") == "primary"
            }]);
            _setSharedDataStyle(__sharedData_VFor0, 9, getWrapperStyle(_item));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_item0.value["icon"] != null));
          }, () => {
            const n6 = _createSharedDataComponentWithFallback(_component_up_icon, "091262b1-" + _for_key0.value, {
              name: () => {
                return _for_item0.value["icon"].toString();
              },
              color: () => {
                return getOptionStyleProp(_for_item0.value, "color", "#ffffff");
              },
              size: () => {
                return getOptionIconSize(_for_item0.value);
              },
              customStyle: () => {
                return getIconCustomStyle(_for_item0.value);
              }
            });
            _setSharedData(__sharedData_VFor0, 2, n6?.sharedData);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 3, _toSharedDataBoolean(_for_item0.value["text"] != null));
          }, () => {
            _renderSharedDataEffect(() => {
              const _item = _for_item0.value;
              _setSharedDataStyle(__sharedData_VFor0, 4, getTextStyle(_item));
              _setSharedData(__sharedData_VFor0, 5, _toDisplayString(_item["text"]));
            });
          });
          _setSharedDataEvent(__sharedData_VFor0, 6, () => {
            return buttonClickHandler(_for_item0.value, _for_key0.value);
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
        });
      });
      _setSharedDataTemplateRef(__sharedData, 1, (n12) => {
        _setTemplateRef(n12, "rightButtonsRef");
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 8, sliderStyle.value);
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataEvent(__sharedData, 2, clickHandler);
      _setSharedDataEvent(__sharedData, 3, touchstart);
      _setSharedDataEvent(__sharedData, 4, touchmove);
      _setSharedDataEvent(__sharedData, 5, touchend);
      _setSharedDataEvent(__sharedData, 6, touchcancel);
      _setSharedDataTemplateRef(__sharedData, 7, (n15) => {
        _setTemplateRef(n15, "swipeActionItemRef");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-swipe-action-item.js.map
