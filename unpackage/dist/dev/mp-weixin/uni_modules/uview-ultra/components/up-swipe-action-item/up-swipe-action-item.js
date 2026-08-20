"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-swipe-action-item"
}, { __name: "up-swipe-action-item", props: {
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
}, emits: ["click", "update:show", "open", "close"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  let nextSwipeItemId = 0;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const selfItemId = ++nextSwipeItemId;
  const parentContext = common_vendor.inject("upSwipeActionContext", null);
  const status = common_vendor.ref(props.show ? "open" : "close");
  const sliderStyle = common_vendor.ref(new common_vendor.UTSJSONObject({}));
  const buttonsWidth = common_vendor.ref(0);
  const isMoving = common_vendor.ref(false);
  const startX = common_vendor.ref(0);
  const startY = common_vendor.ref(0);
  function getIconCustomStyle(item) {
    return new common_vendor.UTSJSONObject({
      marginRight: item["text"] != null ? "2px" : "0px"
    });
  }
  function getOptionStyle(item) {
    const style = item["style"];
    if (style == null)
      return null;
    if (common_vendor.UTS.isInstanceOf(style, common_vendor.UTSJSONObject))
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
    return new common_vendor.UTSJSONObject({
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
    const result = new common_vendor.UTSJSONObject({
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
    return new common_vendor.UTSJSONObject({
      color: style != null && style["color"] != null ? style["color"] : "#ffffff",
      fontSize: style != null && style["fontSize"] != null ? style["fontSize"] : "16px",
      lineHeight: style != null && style["fontSize"] != null ? style["fontSize"] : "16px"
    });
  }
  function getOptionIconSize(item) {
    if (item["iconSize"] != null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(item["iconSize"]);
    }
    const style = getOptionStyle(item);
    if (style != null && style["fontSize"] != null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(style["fontSize"]);
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
    sliderStyle.value = new common_vendor.UTSJSONObject({
      "transition": "transform " + dur,
      "transform": "translateX(" + bWidth + "px)",
      "-webkit-transform": "translateX(" + bWidth + "px)"
    });
    status.value = "open";
  }
  function closeSwipeAction() {
    var dur = getDuration(props.duration);
    sliderStyle.value = new common_vendor.UTSJSONObject({
      "transition": "transform " + dur,
      "transform": "translateX(0px)"
    });
    status.value = "close";
  }
  function moveSwipeAction(moveX) {
    sliderStyle.value = new common_vendor.UTSJSONObject({
      "transition": "none",
      "transform": "translateX(" + moveX + "px)",
      "-webkit-transform": "translateX(" + moveX + "px)"
    });
  }
  function closeHandler() {
    closeSwipeAction();
  }
  function buttonClickHandler(item = null, index) {
    emit("click", new common_vendor.UTSJSONObject({
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
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-swipe-action-item__right", false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
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
      common_vendor.watch(() => {
        return activeItemIdRef.value;
      }, (newActiveId) => {
        if (newActiveId != selfItemId && status.value == "open") {
          closeHandler();
        }
      });
    }
  }
  common_vendor.watch(() => {
    return props.show;
  }, (newVal) => {
    status.value = newVal ? "open" : "close";
  });
  common_vendor.watch(status, (newValue, oldValue) => {
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
  common_vendor.watch(() => {
    return props.options;
  }, () => {
    getBtnWidth();
  }, { deep: true });
  common_vendor.onMounted(() => {
    uni_modules_uviewUltra_libs_function_index.sleep(100).then(() => {
      getBtnWidth();
    });
  });
  common_vendor.onBeforeUnmount(() => {
    closeHandler();
  });
  __expose({
    open: openSwipeAction,
    close: closeSwipeAction
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(__props.options, (item, index, i0) => {
        return common_vendor.e({
          a: item["icon"] != null
        }, item["icon"] != null ? {
          b: "79a90a86-0-" + i0,
          c: common_vendor.p({
            name: item["icon"].toString(),
            color: getOptionStyleProp(item, "color", "#ffffff"),
            size: getOptionIconSize(item),
            customStyle: getIconCustomStyle(item),
            class: "data-v-79a90a86"
          })
        } : {}, {
          d: item["text"] != null
        }, item["text"] != null ? {
          e: common_vendor.t(item["text"]),
          f: common_vendor.s(getTextStyle(item))
        } : {}, {
          g: getOptionStyleProp(item, "backgroundColor", "") == "primary" ? 1 : "",
          h: common_vendor.s(getWrapperStyle(item)),
          i: index,
          j: common_vendor.s(getButtonStyle(item)),
          k: common_vendor.o(($event) => {
            return buttonClickHandler(item, index);
          }, index)
        });
      }),
      b: common_vendor.sei("r0-79a90a86", "view", "rightButtonsRef"),
      c: common_vendor.o(clickHandler, "52"),
      d: common_vendor.o(touchstart, "5a"),
      e: common_vendor.o(touchmove, "26"),
      f: common_vendor.o(touchend, "b3"),
      g: common_vendor.o(touchcancel, "8d"),
      h: common_vendor.s(sliderStyle.value),
      i: common_vendor.sei(common_vendor.gei(_ctx, "", "r1-79a90a86"), "view", "swipeActionItemRef"),
      j: `${_ctx.u_s_b_h}px`,
      k: `${_ctx.u_s_a_i_b}px`,
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-79a90a86"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.js.map
