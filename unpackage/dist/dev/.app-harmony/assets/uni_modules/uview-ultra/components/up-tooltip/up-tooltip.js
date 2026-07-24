import { _ as __easycom_2 } from "../up-overlay/up-overlay.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createVNode, createElementVNode, withModifiers, toDisplayString, renderSlot, withCtx, createCommentVNode, createBlock, Fragment, renderList } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0 } from "../up-line/up-line.js";
import { _ as __easycom_1$1 } from "../up-transition/up-transition.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { j as guid, s as sleep, b as addStyle, a as addUnit, y as sys, t as toast } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
  if (UTS.isInstanceOf(obj, Map)) {
    const m = obj;
    return normalizeNumber(UTS.mapGet(m, key), fallback);
  }
  return normalizeNumber(obj[key], fallback);
}
const _sfc_main = defineComponent({
  name: "up-tooltip",
  mixins: [mpMixin, mixin],
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
      default() {
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
      default() {
        return new UTSJSONObject({});
      }
    },
    customStyle: {
      type: Object,
      default() {
        return new UTSJSONObject({});
      }
    }
  },
  data() {
    return {
      // 内部控制是否展示气泡
      innerShow: false,
      // 上次长按时间戳，防范长按手势松开时系统合成点击事件导致瞬间关闭
      lastLongpressTime: 0,
      // 上次点击时间戳，防范重复响应
      lastClickTime: 0,
      // 开启时间戳，防止点击触发时瞬间穿透到 overlay 导致立刻关闭
      openTime: 0,
      // 生成唯一id，防止一个页面多个组件，造成干扰
      textId: guid(),
      tooltipId: guid(),
      // 气泡的位置信息
      tooltipInfo: createRectInfo(),
      // 文本的位置信息
      textInfo: createRectInfo(),
      // 气泡在可能超出屏幕边沿范围时，重新定位后，距离屏幕边沿的距离
      screenGap: 12,
      // 三角形指示器的宽高
      indicatorWidth: 14
    };
  },
  watch: {
    propsChange() {
      this.getElRect();
    },
    show(newVal) {
      this.innerShow = newVal;
      if (newVal) {
        this.getElRect();
      }
    },
    displayShow(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.getElRect();
          sleep(50).then(() => {
            this.getElRect();
          });
          sleep(150).then(() => {
            this.getElRect();
          });
        });
      }
    }
  },
  computed: {
    propsChange() {
      return this.displayText + "-" + this.buttonCount.toString() + "-" + this.currentDirection;
    },
    displayText() {
      const text = this.text;
      return text == null ? "" : text.toString();
    },
    hasText() {
      return this.displayText != "";
    },
    currentDirection() {
      if (this.placement != "") {
        if (this.placement.indexOf("bottom") != -1) {
          return "bottom";
        }
        if (this.placement.indexOf("top") != -1) {
          return "top";
        }
      }
      return this.direction == "bottom" ? "bottom" : "top";
    },
    displayShow() {
      return this.show || this.innerShow;
    },
    rootStyle() {
      const customStyle = this.customStyle != null ? this.customStyle : new UTSJSONObject({});
      return addStyle(customStyle);
    },
    buttonItems() {
      return this.buttons != null ? this.buttons : [];
    },
    buttonCount() {
      return this.buttonItems.length;
    },
    overlayShow() {
      return this.displayShow == true && normalizeBool(this.overlay);
    },
    showIndicator() {
      return normalizeBool(this.showCopy) || this.buttonCount > 0 || this.$slots["content"] != null;
    },
    showCopyLine() {
      return normalizeBool(this.showCopy) && this.buttonCount > 0;
    },
    showCopyButton() {
      return normalizeBool(this.showCopy);
    },
    textStyle() {
      const style = new UTSJSONObject({});
      style["fontSize"] = addUnit(this.size);
      style["color"] = this.color;
      style["borderRadius"] = "4px";
      style["padding"] = "2px 4px";
      style["backgroundColor"] = this.bgColor != "" && this.bgColor != "transparent" && this.displayShow == true ? this.bgColor : "transparent";
      return style;
    },
    popupListStyle() {
      const style = new UTSJSONObject({});
      if (this.popupBgColor != "" && this.popupBgColor != "transparent") {
        style["backgroundColor"] = this.popupBgColor;
      }
      return style;
    },
    indicatorStyle() {
      const style = new UTSJSONObject({});
      const sysInfo = sys();
      const tooltipInfo = this.tooltipInfo;
      const textInfo = this.textInfo;
      const tooltipWidth = getObjNumber(tooltipInfo, "width");
      const textWidth = getObjNumber(textInfo, "width");
      const textLeft = getObjNumber(textInfo, "left");
      const windowWidth = normalizeNumber(sysInfo.windowWidth, 0);
      if (this.popupBgColor != "" && this.popupBgColor != "transparent") {
        style["backgroundColor"] = this.popupBgColor;
      }
      if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
        const textCenter = textLeft + textWidth / 2;
        const idealPopupLeftScreen = textCenter - tooltipWidth / 2;
        let actualPopupLeftScreen = idealPopupLeftScreen;
        if (idealPopupLeftScreen < this.screenGap) {
          actualPopupLeftScreen = this.screenGap;
        } else if (idealPopupLeftScreen + tooltipWidth > windowWidth - this.screenGap) {
          actualPopupLeftScreen = windowWidth - this.screenGap - tooltipWidth;
        }
        const textCenterInPopup = textCenter - actualPopupLeftScreen;
        let indicatorLeftRelative = textCenterInPopup - this.indicatorWidth / 2;
        const minLeft = 8;
        const maxLeft = tooltipWidth - this.indicatorWidth - 8;
        if (indicatorLeftRelative < minLeft) {
          indicatorLeftRelative = minLeft;
        } else if (indicatorLeftRelative > maxLeft) {
          indicatorLeftRelative = maxLeft;
        }
        style["left"] = addUnit(indicatorLeftRelative);
      } else {
        style["left"] = "50%";
        style["marginLeft"] = "-" + addUnit(this.indicatorWidth / 2);
      }
      if (this.currentDirection === "top") {
        style["bottom"] = "-4px";
      } else {
        style["top"] = "-4px";
      }
      return style;
    },
    tooltipStyle() {
      const style = new UTSJSONObject({});
      const sysInfo = sys();
      const tooltipInfo = this.tooltipInfo;
      const textInfo = this.textInfo;
      const tooltipWidth = getObjNumber(tooltipInfo, "width");
      const textWidth = getObjNumber(textInfo, "width");
      const textLeft = getObjNumber(textInfo, "left");
      const windowWidth = normalizeNumber(sysInfo.windowWidth, 0);
      let isCentered = false;
      if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
        const textCenter = textLeft + textWidth / 2;
        const idealPopupLeftScreen = textCenter - tooltipWidth / 2;
        let actualPopupLeftScreen = idealPopupLeftScreen;
        if (idealPopupLeftScreen < this.screenGap) {
          actualPopupLeftScreen = this.screenGap;
        } else if (idealPopupLeftScreen + tooltipWidth > windowWidth - this.screenGap) {
          actualPopupLeftScreen = windowWidth - this.screenGap - tooltipWidth;
        }
        const popupLeftRelative = actualPopupLeftScreen - textLeft;
        style["left"] = addUnit(popupLeftRelative);
      } else {
        style["left"] = "50%";
        isCentered = true;
      }
      if (this.currentDirection === "top") {
        style["top"] = "0px";
        style["transform"] = isCentered ? "translate(-50%, -100%)" : "translateY(-100%)";
        style["marginTop"] = "-10px";
      } else {
        style["top"] = "100%";
        style["transform"] = isCentered ? "translate(-50%, 0%)" : "translateY(0%)";
        style["marginTop"] = "10px";
      }
      return style;
    },
    transitionStyle() {
      const style = new UTSJSONObject({});
      style["position"] = "absolute";
      style["zIndex"] = this.zIndex;
      const ts = this.tooltipStyle;
      UTSJSONObject.keys(ts).forEach((key) => {
        style[key] = ts[key];
      });
      return style;
    },
    indicatorMergedStyle() {
      const style = new UTSJSONObject({});
      const isStyle = this.indicatorStyle;
      UTSJSONObject.keys(isStyle).forEach((key) => {
        style[key] = isStyle[key];
      });
      style["width"] = addUnit(this.indicatorWidth);
      style["height"] = addUnit(this.indicatorWidth);
      return style;
    }
  },
  mounted() {
    if (this.show) {
      this.innerShow = true;
    }
    this.init();
  },
  emits: ["click", "open", "close"],
  methods: {
    init() {
      this.getElRect();
    },
    open() {
      this.innerShow = true;
      this.openTime = Date.now();
      this.$emit("open");
      sleep(30).then(() => {
        this.getElRect();
      });
    },
    close() {
      this.innerShow = false;
      this.$emit("close");
    },
    triggerPopup() {
      this.innerShow = !this.innerShow;
      if (this.innerShow) {
        this.openTime = Date.now();
        this.$emit("open");
        sleep(30).then(() => {
          this.getElRect();
        });
      } else {
        this.$emit("close");
      }
    },
    // 长按触发事件
    longpressHandler() {
      this.lastLongpressTime = Date.now();
      this.triggerPopup();
    },
    // 点击触发事件
    clickHandler() {
      if (Date.now() - this.lastLongpressTime < 500) {
        return null;
      }
      if (Date.now() - this.lastClickTime < 300) {
        return null;
      }
      this.lastClickTime = Date.now();
      if (this.triggerMode == "click" || this.triggerMode == "hover") {
        this.triggerPopup();
      }
    },
    // 点击透明遮罩
    overlayClickHandler() {
      if (Date.now() - this.openTime < 200) {
        return null;
      }
      this.innerShow = false;
      this.$emit("close");
    },
    // 点击弹出按钮
    btnClickHandler(index) {
      this.innerShow = false;
      this.$emit("close");
      this.$emit("click", this.showCopy ? index + 1 : index);
    },
    // 查询内容高度
    queryRect(ref) {
      return new Promise((resolve) => {
        this.$uGetRect(`#${ref}`).then((size) => {
          resolve(size);
        });
      });
    },
    // 元素尺寸
    getElRect() {
      this.queryRect(this.tooltipId.toString()).then((size = null) => {
        if (size != null) {
          this.tooltipInfo = size;
        }
      });
      this.queryRect(this.textId.toString()).then((size = null) => {
        if (size != null) {
          this.textInfo = size;
        }
      });
    },
    getCopyData() {
      const copyText = this.copyText;
      if (copyText != null && copyText.toString() != "") {
        return copyText.toString();
      }
      return this.displayText;
    },
    // 复制文本到粘贴板
    setClipboardData() {
      this.innerShow = false;
      this.$emit("close");
      this.$emit("click", 0);
      uni.setClipboardData({
        data: this.getCopyData(),
        success: () => {
          if (this.showToast == true) {
            toast("复制成功");
          }
        },
        fail: () => {
          if (this.showToast == true) {
            toast("复制失败");
          }
        },
        complete: () => {
          this.innerShow = false;
        }
      });
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tooltip": { "": { "position": "relative", "display": "flex", "flexDirection": "row" } }, "up-tooltip__wrapper": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "whiteSpace": "nowrap" } }, "up-tooltip__wrapper__text": { "": { "fontSize": 14 } }, "up-tooltip__wrapper__trigger": { "": { "display": "flex", "flexDirection": "row" } }, "up-tooltip__wrapper__popup": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center" } }, "up-tooltip__wrapper__popup__list": { "": { "backgroundColor": "#060607", "position": "relative", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomRightRadius": 5, "borderBottomLeftRadius": 5, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "up-tooltip__wrapper__popup__list__btn": { "": { "paddingTop": 11, "paddingRight": 13, "paddingBottom": 11, "paddingLeft": 13 } }, "up-tooltip__wrapper__popup__list__btn--hover": { "": { "backgroundColor": "#58595B" } }, "up-tooltip__wrapper__popup__list__btn__text": { "": { "lineHeight": "12px", "fontSize": 13, "color": "#FFFFFF" } }, "up-tooltip__wrapper__popup__indicator": { "": { "position": "absolute", "backgroundColor": "#060607", "width": 14, "height": 14, "bottom": -4, "transform": "rotate(45deg)", "borderTopLeftRadius": 2, "borderTopRightRadius": 2, "borderBottomRightRadius": 2, "borderBottomLeftRadius": 2, "zIndex": -1 } }, "up-tooltip__wrapper__popup__indicator--hover": { "": { "backgroundColor": "#58595B" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_overlay = resolveEasycom(resolveDynamicComponent("up-overlay"), __easycom_2);
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_0);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_1$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-tooltip",
      style: normalizeStyle([$options.rootStyle])
    },
    [
      createVNode(_component_up_overlay, {
        show: $options.overlayShow,
        opacity: 0,
        onClick: $options.overlayClickHandler
      }, null, 8, ["show", "onClick"]),
      createElementVNode("view", { class: "up-tooltip__wrapper" }, [
        $options.hasText ? (openBlock(), createElementBlock("text", {
          key: 0,
          class: "up-tooltip__wrapper__text",
          id: $data.textId,
          ref: $data.textId,
          userSelect: false,
          selectable: false,
          onLongpress: _cache[0] || (_cache[0] = withModifiers((...args) => $options.longpressHandler && $options.longpressHandler(...args), ["stop"])),
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.clickHandler && $options.clickHandler(...args), ["stop"])),
          style: normalizeStyle([$options.textStyle])
        }, toDisplayString($options.displayText), 45, ["id"])) : (openBlock(), createElementBlock("view", {
          key: 1,
          class: "up-tooltip__wrapper__trigger",
          id: $data.textId,
          ref: $data.textId,
          onLongpress: _cache[2] || (_cache[2] = withModifiers((...args) => $options.longpressHandler && $options.longpressHandler(...args), ["stop"])),
          onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.clickHandler && $options.clickHandler(...args), ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "trigger", {}, () => [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 40, ["id"])),
        createVNode(_component_up_transition, {
          mode: "fade",
          show: $options.displayShow,
          duration: "300",
          customStyle: $options.transitionStyle
        }, {
          default: withCtx(() => [
            createElementVNode("view", {
              class: "up-tooltip__wrapper__popup",
              id: $data.tooltipId,
              ref: $data.tooltipId
            }, [
              $options.showIndicator ? (openBlock(), createElementBlock(
                "view",
                {
                  key: 0,
                  class: "up-tooltip__wrapper__popup__indicator",
                  "hover-class": "up-tooltip__wrapper__popup__indicator--hover",
                  style: normalizeStyle([$options.indicatorMergedStyle])
                },
                [
                  createCommentVNode(" 由于nvue不支持三角形绘制，这里就做一个四方形，再旋转45deg，得到露出的一个三角 ")
                ],
                4
                /* STYLE */
              )) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "content", {}, () => [
                createElementVNode(
                  "view",
                  {
                    class: "up-tooltip__wrapper__popup__list",
                    style: normalizeStyle([$options.popupListStyle])
                  },
                  [
                    $options.showCopyButton ? (openBlock(), createElementBlock("view", {
                      key: 0,
                      class: "up-tooltip__wrapper__popup__list__btn",
                      "hover-class": "up-tooltip__wrapper__popup__list__btn--hover",
                      onClick: _cache[4] || (_cache[4] = (...args) => $options.setClipboardData && $options.setClipboardData(...args))
                    }, [
                      createElementVNode("text", { class: "up-tooltip__wrapper__popup__list__btn__text" }, "复制")
                    ])) : createCommentVNode("v-if", true),
                    $options.showCopyLine ? (openBlock(), createBlock(_component_up_line, {
                      key: 1,
                      direction: "column",
                      color: "#8d8e90",
                      length: "18"
                    })) : createCommentVNode("v-if", true),
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($options.buttonItems, (item, index) => {
                        return openBlock(), createElementBlock(
                          Fragment,
                          { key: index },
                          [
                            createElementVNode("view", {
                              class: "up-tooltip__wrapper__popup__list__btn",
                              "hover-class": "up-tooltip__wrapper__popup__list__btn--hover",
                              onClick: ($event) => $options.btnClickHandler(index)
                            }, [
                              createElementVNode(
                                "text",
                                { class: "up-tooltip__wrapper__popup__list__btn__text" },
                                toDisplayString(item),
                                1
                                /* TEXT */
                              )
                            ], 8, ["onClick"]),
                            index < $options.buttonCount - 1 ? (openBlock(), createBlock(_component_up_line, {
                              key: 0,
                              direction: "column",
                              color: "#8d8e90",
                              length: "18"
                            })) : createCommentVNode("v-if", true)
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
