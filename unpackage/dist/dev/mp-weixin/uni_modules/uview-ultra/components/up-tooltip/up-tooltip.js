"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_overlay_1 = common_vendor.resolveComponent("up-overlay");
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_overlay_1 + _easycom_up_line_1 + _easycom_up_transition_1)();
}
const _easycom_up_overlay = () => "../up-overlay/up-overlay.js";
const _easycom_up_line = () => "../up-line/up-line.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_overlay + _easycom_up_line + _easycom_up_transition)();
}
const screenGap = 12;
const indicatorWidth = 14;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-tooltip"
}, { __name: "up-tooltip", props: {
  text: {
    type: [String, Number],
    default: ""
  },
  copyText: {
    type: [String, Number],
    default: ""
  },
  size: {
    type: [String, Number],
    default: 14
  },
  color: {
    type: String,
    default: "#606266"
  },
  bgColor: {
    type: String,
    default: "transparent"
  },
  popupBgColor: {
    type: String,
    default: "#060607"
  },
  direction: {
    type: String,
    default: "top"
  },
  placement: {
    type: String,
    default: ""
  },
  zIndex: {
    type: [String, Number],
    default: 10071
  },
  showCopy: {
    type: Boolean,
    default: true
  },
  buttons: {
    type: Array,
    default: () => {
      return [];
    }
  },
  overlay: {
    type: Boolean,
    default: true
  },
  showToast: {
    type: Boolean,
    default: true
  },
  show: {
    type: Boolean,
    default: false
  },
  triggerMode: {
    type: String,
    default: "click"
  },
  forcePosition: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["click", "open", "close"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  function createRectInfo() {
    const info = new common_vendor.UTSJSONObject({});
    info["width"] = 0;
    info["left"] = 0;
    info["right"] = 0;
    return info;
  }
  function normalizeBool(value = null) {
    return value == true;
  }
  function normalizeNumber(value = null, fallback = 0) {
    if (typeof value === "number") {
      return value;
    }
    if (value == null) {
      return fallback;
    }
    const parsed = parseFloat(value.toString());
    return isNaN(parsed) ? fallback : parsed;
  }
  function getObjNumber(obj = null, key, fallback = 0) {
    if (obj == null) {
      return fallback;
    }
    return normalizeNumber(obj[key], fallback);
  }
  const innerShow = common_vendor.ref(false);
  const lastLongpressTime = common_vendor.ref(0);
  const lastClickTime = common_vendor.ref(0);
  const openTime = common_vendor.ref(0);
  const textId = common_vendor.ref(uni_modules_uviewUltra_libs_function_index.guid());
  const tooltipId = common_vendor.ref(uni_modules_uviewUltra_libs_function_index.guid());
  const tooltipInfo = common_vendor.ref(createRectInfo());
  const textInfo = common_vendor.ref(createRectInfo());
  const displayText = common_vendor.computed(() => {
    return props.text == null ? "" : props.text.toString();
  });
  const hasText = common_vendor.computed(() => {
    return displayText.value != "";
  });
  const currentDirection = common_vendor.computed(() => {
    if (props.placement != "") {
      if (props.placement.indexOf("bottom") != -1) {
        return "bottom";
      }
      if (props.placement.indexOf("top") != -1) {
        return "top";
      }
    }
    return props.direction == "bottom" ? "bottom" : "top";
  });
  const displayShow = common_vendor.computed(() => {
    return props.show || innerShow.value;
  });
  const rootStyle = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
  });
  const buttonItems = common_vendor.computed(() => {
    return props.buttons;
  });
  const buttonCount = common_vendor.computed(() => {
    return buttonItems.value.length;
  });
  const overlayShow = common_vendor.computed(() => {
    return displayShow.value == true && normalizeBool(props.overlay);
  });
  const showIndicator = common_vendor.computed(() => {
    return normalizeBool(props.showCopy) || buttonCount.value > 0;
  });
  const showCopyLine = common_vendor.computed(() => {
    return normalizeBool(props.showCopy) && buttonCount.value > 0;
  });
  const showCopyButton = common_vendor.computed(() => {
    return normalizeBool(props.showCopy);
  });
  const textStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.size);
    style["color"] = props.color;
    style["borderRadius"] = "4px";
    style["padding"] = "2px 4px";
    style["backgroundColor"] = props.bgColor != "" && props.bgColor != "transparent" && displayShow.value == true ? props.bgColor : "transparent";
    return style;
  });
  const popupListStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.popupBgColor != "" && props.popupBgColor != "transparent") {
      style["backgroundColor"] = props.popupBgColor;
    }
    return style;
  });
  const indicatorStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    const sysInfo = uni_modules_uviewUltra_libs_function_index.sys();
    const tInfo = tooltipInfo.value;
    const txInfo = textInfo.value;
    const tooltipWidth = getObjNumber(tInfo, "width");
    const textWidth = getObjNumber(txInfo, "width");
    const textLeft = getObjNumber(txInfo, "left");
    const windowWidth = normalizeNumber(sysInfo.windowWidth, 0);
    if (props.popupBgColor != "" && props.popupBgColor != "transparent") {
      style["backgroundColor"] = props.popupBgColor;
    }
    if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
      const textCenter = textLeft + textWidth / 2;
      const idealPopupLeftScreen = textCenter - tooltipWidth / 2;
      let actualPopupLeftScreen = idealPopupLeftScreen;
      if (idealPopupLeftScreen < screenGap) {
        actualPopupLeftScreen = screenGap;
      } else if (idealPopupLeftScreen + tooltipWidth > windowWidth - screenGap) {
        actualPopupLeftScreen = windowWidth - screenGap - tooltipWidth;
      }
      const textCenterInPopup = textCenter - actualPopupLeftScreen;
      let indicatorLeftRelative = textCenterInPopup - indicatorWidth / 2;
      const minLeft = 8;
      const maxLeft = tooltipWidth - indicatorWidth - 8;
      if (indicatorLeftRelative < minLeft) {
        indicatorLeftRelative = minLeft;
      } else if (indicatorLeftRelative > maxLeft) {
        indicatorLeftRelative = maxLeft;
      }
      style["left"] = uni_modules_uviewUltra_libs_function_index.addUnit(indicatorLeftRelative);
    } else {
      style["left"] = "50%";
      style["marginLeft"] = "-" + uni_modules_uviewUltra_libs_function_index.addUnit(indicatorWidth / 2);
    }
    if (currentDirection.value === "top") {
      style["bottom"] = "-4px";
    } else {
      style["top"] = "-4px";
    }
    return style;
  });
  const tooltipStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    const sysInfo = uni_modules_uviewUltra_libs_function_index.sys();
    const tInfo = tooltipInfo.value;
    const txInfo = textInfo.value;
    const tooltipWidth = getObjNumber(tInfo, "width");
    const textWidth = getObjNumber(txInfo, "width");
    const textLeft = getObjNumber(txInfo, "left");
    const windowWidth = normalizeNumber(sysInfo.windowWidth, 0);
    let isCentered = false;
    if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
      const textCenter = textLeft + textWidth / 2;
      const idealPopupLeftScreen = textCenter - tooltipWidth / 2;
      let actualPopupLeftScreen = idealPopupLeftScreen;
      if (idealPopupLeftScreen < screenGap) {
        actualPopupLeftScreen = screenGap;
      } else if (idealPopupLeftScreen + tooltipWidth > windowWidth - screenGap) {
        actualPopupLeftScreen = windowWidth - screenGap - tooltipWidth;
      }
      const popupLeftRelative = actualPopupLeftScreen - textLeft;
      style["left"] = uni_modules_uviewUltra_libs_function_index.addUnit(popupLeftRelative);
    } else {
      style["left"] = "50%";
      isCentered = true;
    }
    if (currentDirection.value === "top") {
      style["top"] = "0px";
      style["transform"] = isCentered ? "translate(-50%, -100%)" : "translateY(-100%)";
      style["marginTop"] = "-10px";
    } else {
      style["top"] = "100%";
      style["transform"] = isCentered ? "translate(-50%, 0%)" : "translateY(0%)";
      style["marginTop"] = "10px";
    }
    return style;
  });
  const transitionStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["position"] = "absolute";
    style["zIndex"] = props.zIndex;
    const ts = tooltipStyle.value;
    common_vendor.UTSJSONObject.keys(ts).forEach((key) => {
      style[key] = ts[key];
    });
    return style;
  });
  const indicatorMergedStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    const isStyle = indicatorStyle.value;
    common_vendor.UTSJSONObject.keys(isStyle).forEach((key) => {
      style[key] = isStyle[key];
    });
    style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(indicatorWidth);
    style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(indicatorWidth);
    return style;
  });
  function queryRect(refName) {
    return uni_modules_uviewUltra_libs_function_index.upGetRect(`#${refName}`, false, instance === null || instance === void 0 ? null : instance.proxy);
  }
  function getElRect() {
    queryRect(tooltipId.value).then((size = null) => {
      if (size != null) {
        tooltipInfo.value = size;
      }
    });
    queryRect(textId.value).then((size = null) => {
      if (size != null) {
        textInfo.value = size;
      }
    });
  }
  function triggerPopup() {
    innerShow.value = !innerShow.value;
    if (innerShow.value) {
      openTime.value = Date.now();
      emit("open");
      uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
        getElRect();
      });
    } else {
      emit("close");
    }
  }
  function longpressHandler() {
    lastLongpressTime.value = Date.now();
    triggerPopup();
  }
  function clickHandler() {
    if (Date.now() - lastLongpressTime.value < 500)
      return null;
    if (Date.now() - lastClickTime.value < 300)
      return null;
    lastClickTime.value = Date.now();
    if (props.triggerMode == "click" || props.triggerMode == "hover") {
      triggerPopup();
    }
  }
  function overlayClickHandler() {
    if (Date.now() - openTime.value < 200)
      return null;
    innerShow.value = false;
    emit("close");
  }
  function btnClickHandler(index) {
    innerShow.value = false;
    emit("close");
    emit("click", props.showCopy ? index + 1 : index);
  }
  function getCopyData() {
    const copyText = props.copyText;
    if (copyText != null && copyText.toString() != "") {
      return copyText.toString();
    }
    return displayText.value;
  }
  function setClipboardData() {
    innerShow.value = false;
    emit("close");
    emit("click", 0);
    common_vendor.index.setClipboardData({
      data: getCopyData(),
      success: () => {
        if (props.showToast == true) {
          uni_modules_uviewUltra_libs_function_index.toast("复制成功");
        }
      },
      fail: () => {
        if (props.showToast == true) {
          uni_modules_uviewUltra_libs_function_index.toast("复制失败");
        }
      }
    });
  }
  common_vendor.watch(() => {
    return props.show;
  }, (newVal) => {
    innerShow.value = newVal;
    if (newVal) {
      getElRect();
    }
  });
  common_vendor.watch(displayShow, (newVal) => {
    if (newVal) {
      common_vendor.nextTick$1(() => {
        getElRect();
        uni_modules_uviewUltra_libs_function_index.sleep(50).then(() => {
          getElRect();
        });
        uni_modules_uviewUltra_libs_function_index.sleep(150).then(() => {
          getElRect();
        });
      });
    }
  });
  common_vendor.onMounted(() => {
    if (props.show) {
      innerShow.value = true;
    }
    getElRect();
  });
  __expose({
    open: () => {
      innerShow.value = true;
      openTime.value = Date.now();
      emit("open");
      uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
        getElRect();
      });
    },
    close: () => {
      innerShow.value = false;
      emit("close");
    }
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.o(overlayClickHandler, "36"),
      b: common_vendor.p({
        show: overlayShow.value,
        opacity: 0,
        class: "data-v-caa13167"
      }),
      c: hasText.value
    }, hasText.value ? {
      d: common_vendor.t(displayText.value),
      e: common_vendor.sei(textId.value !== "" ? textId.value : "r0-caa13167", "text", textId.value),
      f: textId.value,
      g: common_vendor.o(longpressHandler, "92"),
      h: common_vendor.o(clickHandler, "a4"),
      i: common_vendor.s(textStyle.value)
    } : {
      j: common_vendor.sei(textId.value !== "" ? textId.value : "r1-caa13167", "view", textId.value),
      k: textId.value,
      l: common_vendor.o(longpressHandler, "bb"),
      m: common_vendor.o(clickHandler, "28")
    }, {
      n: showIndicator.value
    }, showIndicator.value ? {
      o: common_vendor.s(indicatorMergedStyle.value)
    } : {}, {
      p: showCopyButton.value
    }, showCopyButton.value ? {
      q: common_vendor.o(setClipboardData, "b7")
    } : {}, {
      r: showCopyLine.value
    }, showCopyLine.value ? {
      s: common_vendor.p({
        direction: "column",
        color: "#8d8e90",
        length: "18",
        class: "data-v-caa13167"
      })
    } : {}, {
      t: common_vendor.f(buttonItems.value, (item, index, i0) => {
        return common_vendor.e({
          a: common_vendor.t(item),
          b: common_vendor.o(($event) => {
            return btnClickHandler(index);
          }, index),
          c: index < buttonCount.value - 1
        }, index < buttonCount.value - 1 ? {
          d: "caa13167-3-" + i0 + ",caa13167-1",
          e: common_vendor.p({
            direction: "column",
            color: "#8d8e90",
            length: "18",
            class: "data-v-caa13167"
          })
        } : {}, {
          f: index
        });
      }),
      v: common_vendor.s(popupListStyle.value),
      w: common_vendor.sei(tooltipId.value !== "" ? tooltipId.value : "r2-caa13167", "view", tooltipId.value),
      x: tooltipId.value,
      y: common_vendor.p({
        mode: "fade",
        show: displayShow.value,
        duration: "300",
        customStyle: transitionStyle.value,
        class: "data-v-caa13167"
      }),
      z: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      A: common_vendor.s(rootStyle.value),
      B: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      C: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-caa13167"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js.map
