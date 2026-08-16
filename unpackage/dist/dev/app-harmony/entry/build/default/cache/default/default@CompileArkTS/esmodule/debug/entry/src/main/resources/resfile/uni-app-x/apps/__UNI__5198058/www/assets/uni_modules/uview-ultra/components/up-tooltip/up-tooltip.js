import { _ as __easycom_2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-overlay/up-overlay&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import { j as guid, b as addStyle, a as addUnit, z as sys, s as sleep, u as upGetRect, t as toast } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, watch, onMounted, getCurrentInstance, nextTick } = globalThis.Vue;
const screenGap = 12;
const indicatorWidth = 14;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-tooltip"
  },
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
    const __returned__ = { props, emit, instance, createRectInfo, normalizeBool, normalizeNumber, getObjNumber, innerShow, lastLongpressTime, lastClickTime, openTime, textId, tooltipId, tooltipInfo, textInfo, screenGap, indicatorWidth, displayText, hasText, currentDirection, displayShow, rootStyle, buttonItems, buttonCount, overlayShow, showIndicator, showCopyLine, showCopyButton, textStyle, popupListStyle, indicatorStyle, tooltipStyle, transitionStyle, indicatorMergedStyle, queryRect, getElRect, triggerPopup, longpressHandler, clickHandler, overlayClickHandler, btnClickHandler, getCopyData, setClipboardData };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tooltip": { "": { "position": "relative", "display": "flex", "flexDirection": "row" } }, "up-tooltip__wrapper": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "whiteSpace": "nowrap" } }, "up-tooltip__wrapper__text": { "": { "fontSize": 14 } }, "up-tooltip__wrapper__trigger": { "": { "display": "flex", "flexDirection": "row" } }, "up-tooltip__wrapper__popup": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center" } }, "up-tooltip__wrapper__popup__list": { "": { "backgroundColor": "#060607", "position": "relative", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomRightRadius": 5, "borderBottomLeftRadius": 5, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "up-tooltip__wrapper__popup__list__btn": { "": { "paddingTop": 11, "paddingRight": 13, "paddingBottom": 11, "paddingLeft": 13 } }, "up-tooltip__wrapper__popup__list__btn--hover": { "": { "backgroundColor": "#58595B" } }, "up-tooltip__wrapper__popup__list__btn__text": { "": { "lineHeight": "12px", "fontSize": 13, "color": "#FFFFFF" } }, "up-tooltip__wrapper__popup__indicator": { "": { "position": "absolute", "backgroundColor": "#060607", "width": 14, "height": 14, "bottom": -4, "transform": "rotate(45deg)", "borderTopLeftRadius": 2, "borderTopRightRadius": 2, "borderBottomRightRadius": 2, "borderBottomLeftRadius": 2, "zIndex": -1 } }, "up-tooltip__wrapper__popup__indicator--hover": { "": { "backgroundColor": "#58595B" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, withModifiers: _withModifiers, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, createElementVNode: _createElementVNode, createBlock: _createBlock, renderList: _renderList, Fragment: _Fragment, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_overlay = resolveEasycom(__resolveDynamicComponent("up-overlay"), __easycom_2);
  const _component_up_line = resolveEasycom(__resolveDynamicComponent("up-line"), __easycom_0);
  const _component_up_transition = resolveEasycom(__resolveDynamicComponent("up-transition"), __easycom_1$1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-tooltip",
      style: _normalizeStyle([$setup.rootStyle])
    },
    [
      _createVNode(_component_up_overlay, {
        show: $setup.overlayShow,
        opacity: 0,
        onClick: $setup.overlayClickHandler
      }, null, 8, ["show"]),
      _createElementVNode("view", { class: "up-tooltip__wrapper" }, [
        $setup.hasText ? (_openBlock(), _createElementBlock("text", {
          key: 0,
          class: "up-tooltip__wrapper__text",
          id: $setup.textId,
          ref: $setup.textId,
          selectable: false,
          onLongpress: _withModifiers($setup.longpressHandler, ["stop"]),
          onClick: _withModifiers($setup.clickHandler, ["stop"]),
          style: _normalizeStyle([$setup.textStyle])
        }, _toDisplayString($setup.displayText), 45, ["id"])) : (_openBlock(), _createElementBlock("view", {
          key: 1,
          class: "up-tooltip__wrapper__trigger",
          id: $setup.textId,
          ref: $setup.textId,
          onLongpress: _withModifiers($setup.longpressHandler, ["stop"]),
          onClick: _withModifiers($setup.clickHandler, ["stop"])
        }, [
          _renderSlot(_ctx.$slots, "trigger", {}, () => [
            _renderSlot(_ctx.$slots, "default")
          ])
        ], 40, ["id"])),
        _createVNode(_component_up_transition, {
          mode: "fade",
          show: $setup.displayShow,
          duration: "300",
          customStyle: $setup.transitionStyle
        }, {
          default: _withCtx(() => [
            _createElementVNode("view", {
              class: "up-tooltip__wrapper__popup",
              id: $setup.tooltipId,
              ref: $setup.tooltipId
            }, [
              $setup.showIndicator ? (_openBlock(), _createElementBlock(
                "view",
                {
                  key: 0,
                  class: "up-tooltip__wrapper__popup__indicator",
                  "hover-class": "up-tooltip__wrapper__popup__indicator--hover",
                  style: _normalizeStyle([$setup.indicatorMergedStyle])
                },
                null,
                4
                /* STYLE */
              )) : _createCommentVNode("v-if", true),
              _renderSlot(_ctx.$slots, "content", {}, () => [
                _createElementVNode(
                  "view",
                  {
                    class: "up-tooltip__wrapper__popup__list",
                    style: _normalizeStyle([$setup.popupListStyle])
                  },
                  [
                    $setup.showCopyButton ? (_openBlock(), _createElementBlock("view", {
                      key: 0,
                      class: "up-tooltip__wrapper__popup__list__btn",
                      "hover-class": "up-tooltip__wrapper__popup__list__btn--hover",
                      onClick: $setup.setClipboardData
                    }, [
                      _createElementVNode("text", { class: "up-tooltip__wrapper__popup__list__btn__text" }, "复制")
                    ])) : _createCommentVNode("v-if", true),
                    $setup.showCopyLine ? (_openBlock(), _createBlock(_component_up_line, {
                      key: 1,
                      direction: "column",
                      color: "#8d8e90",
                      length: "18"
                    })) : _createCommentVNode("v-if", true),
                    (_openBlock(true), _createElementBlock(
                      _Fragment,
                      null,
                      _renderList($setup.buttonItems, (item, index) => {
                        return _openBlock(), _createElementBlock(
                          _Fragment,
                          { key: index },
                          [
                            _createElementVNode("view", {
                              class: "up-tooltip__wrapper__popup__list__btn",
                              "hover-class": "up-tooltip__wrapper__popup__list__btn--hover",
                              onClick: ($event) => $setup.btnClickHandler(index)
                            }, [
                              _createElementVNode(
                                "text",
                                { class: "up-tooltip__wrapper__popup__list__btn__text" },
                                _toDisplayString(item),
                                1
                                /* TEXT */
                              )
                            ], 8, ["onClick"]),
                            index < $setup.buttonCount - 1 ? (_openBlock(), _createBlock(_component_up_line, {
                              key: 0,
                              direction: "column",
                              color: "#8d8e90",
                              length: "18"
                            })) : _createCommentVNode("v-if", true)
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                )
              ])
            ], 8, ["id"])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["show", "customStyle"])
      ])
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-tooltip.js.map
