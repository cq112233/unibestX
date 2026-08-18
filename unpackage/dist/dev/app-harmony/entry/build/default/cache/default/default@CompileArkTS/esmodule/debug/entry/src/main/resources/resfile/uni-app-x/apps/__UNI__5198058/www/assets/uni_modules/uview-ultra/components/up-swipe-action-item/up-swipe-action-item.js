import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { s as sleep, u as upGetRect, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, watch, onMounted, onBeforeUnmount, inject, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-swipe-action-item"
  },
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
    const __returned__ = { get nextSwipeItemId() {
      return nextSwipeItemId;
    }, set nextSwipeItemId(v) {
      nextSwipeItemId = v;
    }, props, emit, instance, selfItemId, parentContext, status, sliderStyle, buttonsWidth, isMoving, startX, startY, getIconCustomStyle, getOptionStyle, getOptionStyleProp, getButtonStyle, getWrapperStyle, getTextStyle, getOptionIconSize, getDuration, openSwipeAction, closeSwipeAction, moveSwipeAction, closeHandler, buttonClickHandler, clickHandler, getBtnWidth, touchstart, touchmove, touchend, touchcancel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"up-swipe-action-item":{"":{"position":"relative","overflow":"hidden","display":"flex","flexDirection":"column"}},"up-swipe-action-item__content":{"":{"transform":"translateX(0px)","backgroundColor":"#FFFFFF","zIndex":10,"width":"100%","flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"up-swipe-action-item__right":{"":{"position":"absolute","top":0,"bottom":0,"right":0,"display":"flex","flexDirection":"row","zIndex":1}},"up-swipe-action-item__right__button":{"":{"display":"flex","flexDirection":"row","justifyContent":"center","overflow":"hidden","alignItems":"center"}},"up-swipe-action-item__right__button__wrapper":{"":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","paddingTop":0,"paddingRight":15,"paddingBottom":0,"paddingLeft":15}},"up-swipe-action-item__right__button__wrapper--primary":{"":{"backgroundColor":"var(--theme-color, #0957de)"}},"up-swipe-action-item__right__button__wrapper__text":{"":{"color":"#FFFFFF","fontSize":15,"textAlign":"center"}},"flex":{"":{"display":"flex"}},"up-line-1":{"":{"overflow":"hidden"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createBlock: _createBlock, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-swipe-action-item",
      ref: "swipeActionItemRef"
    },
    [
      _createElementVNode(
        "view",
        {
          class: "up-swipe-action-item__right",
          ref: "rightButtonsRef"
        },
        [
          _renderSlot(_ctx.$slots, "button", {}, () => [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList($props.options, (item, index) => {
                return _openBlock(), _createElementBlock("view", {
                  key: index,
                  class: "up-swipe-action-item__right__button",
                  style: _normalizeStyle($setup.getButtonStyle(item)),
                  onClick: ($event) => $setup.buttonClickHandler(item, index)
                }, [
                  _createElementVNode(
                    "view",
                    {
                      class: _normalizeClass(["up-swipe-action-item__right__button__wrapper", {
                        "up-swipe-action-item__right__button__wrapper--primary": $setup.getOptionStyleProp(item, "backgroundColor", "") == "primary"
                      }]),
                      style: _normalizeStyle($setup.getWrapperStyle(item))
                    },
                    [
                      item["icon"] != null ? (_openBlock(), _createBlock(_component_up_icon, {
                        key: 0,
                        name: item["icon"].toString(),
                        color: $setup.getOptionStyleProp(item, "color", "#ffffff"),
                        size: $setup.getOptionIconSize(item),
                        customStyle: $setup.getIconCustomStyle(item)
                      }, null, 8, ["name", "color", "size", "customStyle"])) : _createCommentVNode("v-if", true),
                      item["text"] != null ? (_openBlock(), _createElementBlock(
                        "text",
                        {
                          key: 1,
                          class: "up-swipe-action-item__right__button__wrapper__text up-line-1",
                          style: _normalizeStyle($setup.getTextStyle(item))
                        },
                        _toDisplayString(item["text"]),
                        5
                        /* TEXT, STYLE */
                      )) : _createCommentVNode("v-if", true)
                    ],
                    6
                    /* CLASS, STYLE */
                  )
                ], 12, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        512
        /* NEED_PATCH */
      ),
      _createElementVNode(
        "view",
        {
          class: "up-swipe-action-item__content",
          onClick: $setup.clickHandler,
          onTouchstart: $setup.touchstart,
          onTouchmove: $setup.touchmove,
          onTouchend: $setup.touchend,
          onTouchcancel: $setup.touchcancel,
          style: _normalizeStyle($setup.sliderStyle)
        },
        [
          _renderSlot(_ctx.$slots, "default")
        ],
        36
        /* STYLE, NEED_HYDRATION */
      )
    ],
    512
    /* NEED_PATCH */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-swipe-action-item.js.map
