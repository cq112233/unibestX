import { _ as __easycom_2 } from "../up-overlay/up-overlay.js";
import { _ as __easycom_0 } from "../up-line/up-line.js";
import { _ as __easycom_1$1 } from "../up-transition/up-transition.js";
import { j as guid, b as addStyle, a as addUnit, z as sys, s as sleep, t as toast, u as upGetRect } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toDisplayString: _toDisplayString, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTooltipUpTooltip";
const { ref, computed, watch, onMounted, getCurrentInstance, nextTick } = globalThis.Vue;
const screenGap = 12;
const indicatorWidth = 14;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-tooltip"
  },
  __dynamicSharedData: true,
  __hash: "4613a563",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue",
  __name: "up-tooltip",
  props: {
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
        return new UTSJSONObject({});
      }
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click", "open", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTooltipUpTooltipSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    function createRectInfo() {
      const info = new UTSJSONObject({});
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
    const innerShow = ref(false);
    const lastLongpressTime = ref(0);
    const lastClickTime = ref(0);
    const openTime = ref(0);
    const textId = ref(guid());
    const tooltipId = ref(guid());
    const tooltipInfo = ref(createRectInfo());
    const textInfo = ref(createRectInfo());
    const displayText = computed(() => {
      return props.text == null ? "" : props.text.toString();
    });
    const hasText = computed(() => {
      return displayText.value != "";
    });
    const currentDirection = computed(() => {
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
    const displayShow = computed(() => {
      return props.show || innerShow.value;
    });
    const rootStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const buttonItems = computed(() => {
      return props.buttons;
    });
    const buttonCount = computed(() => {
      return buttonItems.value.length;
    });
    const overlayShow = computed(() => {
      return displayShow.value == true && normalizeBool(props.overlay);
    });
    const showIndicator = computed(() => {
      return normalizeBool(props.showCopy) || buttonCount.value > 0;
    });
    const showCopyLine = computed(() => {
      return normalizeBool(props.showCopy) && buttonCount.value > 0;
    });
    const showCopyButton = computed(() => {
      return normalizeBool(props.showCopy);
    });
    const textStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["fontSize"] = addUnit(props.size);
      style["color"] = props.color;
      style["borderRadius"] = "4px";
      style["padding"] = "2px 4px";
      style["backgroundColor"] = props.bgColor != "" && props.bgColor != "transparent" && displayShow.value == true ? props.bgColor : "transparent";
      return style;
    });
    const popupListStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.popupBgColor != "" && props.popupBgColor != "transparent") {
        style["backgroundColor"] = props.popupBgColor;
      }
      return style;
    });
    const indicatorStyle = computed(() => {
      const style = new UTSJSONObject({});
      const sysInfo = sys();
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
        style["left"] = addUnit(indicatorLeftRelative);
      } else {
        style["left"] = "50%";
        style["marginLeft"] = "-" + addUnit(indicatorWidth / 2);
      }
      if (currentDirection.value === "top") {
        style["bottom"] = "-4px";
      } else {
        style["top"] = "-4px";
      }
      return style;
    });
    const tooltipStyle = computed(() => {
      const style = new UTSJSONObject({});
      const sysInfo = sys();
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
        style["left"] = addUnit(popupLeftRelative);
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
    const transitionStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["position"] = "absolute";
      style["zIndex"] = props.zIndex;
      const ts = tooltipStyle.value;
      UTSJSONObject.keys(ts).forEach((key) => {
        style[key] = ts[key];
      });
      return style;
    });
    const indicatorMergedStyle = computed(() => {
      const style = new UTSJSONObject({});
      const isStyle = indicatorStyle.value;
      UTSJSONObject.keys(isStyle).forEach((key) => {
        style[key] = isStyle[key];
      });
      style["width"] = addUnit(indicatorWidth);
      style["height"] = addUnit(indicatorWidth);
      return style;
    });
    function queryRect(refName) {
      return upGetRect(`#${refName}`, false, instance === null || instance === void 0 ? null : instance.proxy);
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
        sleep(30).then(() => {
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
      uni.setClipboardData({
        data: getCopyData(),
        success: () => {
          if (props.showToast == true) {
            toast("复制成功");
          }
        },
        fail: () => {
          if (props.showToast == true) {
            toast("复制失败");
          }
        }
      });
    }
    watch(() => {
      return props.show;
    }, (newVal) => {
      innerShow.value = newVal;
      if (newVal) {
        getElRect();
      }
    });
    watch(displayShow, (newVal) => {
      if (newVal) {
        nextTick(() => {
          getElRect();
          sleep(50).then(() => {
            getElRect();
          });
          sleep(150).then(() => {
            getElRect();
          });
        });
      }
    });
    onMounted(() => {
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
        sleep(30).then(() => {
          getElRect();
        });
      },
      close: () => {
        innerShow.value = false;
        emit("close");
      }
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_overlay = __easycom_2;
      const _component_up_line = __easycom_0;
      const _component_up_transition = __easycom_1$1;
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 23, [rootStyle.value]);
      });
      const n0 = _createSharedDataComponentWithFallback(_component_up_overlay, "5f52d03a", {
        show: () => {
          return overlayShow.value;
        },
        opacity: 0,
        onClick: () => {
          return overlayClickHandler;
        }
      });
      _setSharedData(__sharedData, 0, n0?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean(hasText.value));
      }, () => {
        _setSharedDataEvent(__sharedData, 2, longpressHandler);
        _setSharedDataEvent(__sharedData, 3, clickHandler);
        _renderSharedDataEffect(() => {
          const _textId = textId.value;
          _setSharedDataAttr(__sharedData, 4, _toSharedDataString(_textId));
          _setSharedDataStyle(__sharedData, 5, [textStyle.value]);
          _setSharedData(__sharedData, 6, _toDisplayString(displayText.value));
          _setSharedDataTemplateRef(__sharedData, 7, (n3) => {
            _setTemplateRef(n3, textId, null, "textId");
          });
        });
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataAttr(__sharedData, 10, _toSharedDataString(textId.value));
        });
        _createSharedDataSlot("trigger", null, null, () => {
          _createSharedDataSlot("default", null, null);
        });
        _setSharedDataEvent(__sharedData, 8, longpressHandler);
        _setSharedDataEvent(__sharedData, 9, clickHandler);
        _renderSharedDataEffect(() => {
          return _setSharedDataTemplateRef(__sharedData, 11, (n8) => {
            _setTemplateRef(n8, textId, null, "textId");
          });
        });
      }, 261);
      const n30 = _createSharedDataComponentWithFallback(_component_up_transition, "3a7c6892", {
        mode: "fade",
        show: () => {
          return displayShow.value;
        },
        duration: "300",
        customStyle: () => {
          return transitionStyle.value;
        }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _renderSharedDataEffect(() => {
            return _setSharedDataAttr(__sharedData, 21, _toSharedDataString(tooltipId.value));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 13, _toSharedDataBoolean(showIndicator.value));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 14, [indicatorMergedStyle.value]);
            });
          });
          _createSharedDataSlot("content", null, null, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 20, [popupListStyle.value]);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 15, _toSharedDataBoolean(showCopyButton.value));
            }, () => {
              _setSharedDataEvent(__sharedData, 16, setClipboardData);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 17, _toSharedDataBoolean(showCopyLine.value));
            }, () => {
              const n20 = _createSharedDataComponentWithFallback(_component_up_line, "150e58a2", {
                direction: "column",
                color: "#8d8e90",
                length: "18"
              });
              _setSharedData(__sharedData, 18, n20?.sharedData);
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 19, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return buttonItems.value;
            }, (__sharedData_VFor0, _for_item0, _for_key0) => {
              _setSharedDataEvent(__sharedData_VFor0, 3, () => {
                return btnClickHandler(_for_key0.value);
              });
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData_VFor0, 4, _toDisplayString(_for_item0.value));
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_key0.value < buttonCount.value - 1));
              }, () => {
                const n27 = _createSharedDataComponentWithFallback(_component_up_line, "150eba5d-" + _for_key0.value, {
                  direction: "column",
                  color: "#8d8e90",
                  length: "18"
                });
                _setSharedData(__sharedData_VFor0, 2, n27?.sharedData);
              }, null, 10);
              return null;
            }, (__sharedData_VFor0, item, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            });
          });
          _renderSharedDataEffect(() => {
            return _setSharedDataTemplateRef(__sharedData, 22, (n29) => {
              _setTemplateRef(n29, tooltipId, null, "tooltipId");
            });
          });
        })
      });
      _setSharedData(__sharedData, 12, n30?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-tooltip.js.map
