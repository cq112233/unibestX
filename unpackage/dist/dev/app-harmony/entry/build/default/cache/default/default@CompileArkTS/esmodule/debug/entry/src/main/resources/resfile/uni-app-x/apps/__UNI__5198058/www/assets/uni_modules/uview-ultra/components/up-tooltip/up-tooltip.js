import { _ as __easycom_8 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-overlay/up-overlay&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createVNode, createElementVNode, withModifiers, toDisplayString, withCtx, createCommentVNode, createBlock, Fragment, renderList } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { _ as __easycom_11 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { i as guid, b as addStyle, a as addUnit, x as sys, g as getPx, s as sleep, t as toast } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
function createRectInfo() {
  const info = new UTSJSONObject({});
  info["width"] = 0;
  info["left"] = 0;
  info["right"] = 0;
  return info;
}
function emptyStyle() {
  return new UTSJSONObject({});
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
  var _a, _b, _c, _d, _e, _f;
  if (obj == null) {
    return fallback;
  }
  if (UTS.isInstanceOf(obj, NodeInfo)) {
    const n = obj;
    if (key == "width")
      return (_a = n.width) !== null && _a !== void 0 ? _a : fallback;
    if (key == "left")
      return (_b = n.left) !== null && _b !== void 0 ? _b : fallback;
    if (key == "right")
      return (_c = n.right) !== null && _c !== void 0 ? _c : fallback;
    if (key == "top")
      return (_d = n.top) !== null && _d !== void 0 ? _d : fallback;
    if (key == "bottom")
      return (_e = n.bottom) !== null && _e !== void 0 ? _e : fallback;
    if (key == "height")
      return (_f = n.height) !== null && _f !== void 0 ? _f : fallback;
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
    direction: {
      type: String,
      default: "top"
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
    customStyle: {
      type: Object,
      default() {
        return new UTSJSONObject({});
      }
    }
  },
  data() {
    return {
      // 是否展示气泡
      showTooltip: true,
      // 生成唯一id，防止一个页面多个组件，造成干扰
      textId: guid(),
      tooltipId: guid(),
      // 初始时甚至为很大的值，让其移到屏幕外面，为了计算元素的尺寸
      tooltipTop: -1e4,
      // 气泡的位置信息
      tooltipInfo: createRectInfo(),
      // 文本的位置信息
      textInfo: createRectInfo(),
      // 三角形指示器的样式
      indicatorStyle: emptyStyle(),
      // 气泡在可能超出屏幕边沿范围时，重新定位后，距离屏幕边沿的距离
      screenGap: 12,
      // 三角形指示器的宽高，由于对元素进行了角度旋转，精确计算指示器位置时，需要用到其尺寸信息
      indicatorWidth: 14
    };
  },
  watch: {
    propsChange() {
      this.getElRect();
    }
  },
  computed: {
    // 特别处理H5的复制，因为H5浏览器是自带系统复制功能的，在H5环境
    // 当一些依赖参数变化时，需要重新计算气泡和指示器的位置信息
    propsChange() {
      return this.displayText + "-" + this.buttonCount.toString();
    },
    displayText() {
      const text = this.text;
      return text == null ? "" : text.toString();
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
      return this.showTooltip == true && this.tooltipTop !== -1e4 && normalizeBool(this.overlay);
    },
    showIndicator() {
      return normalizeBool(this.showCopy) || this.buttonCount > 0;
    },
    showCopyLine() {
      return normalizeBool(this.showCopy) && this.buttonCount > 0;
    },
    showCopyButton() {
      return normalizeBool(this.showCopy);
    },
    textStyle() {
      const style = new UTSJSONObject({});
      style["color"] = this.color;
      style["backgroundColor"] = this.bgColor != "" && this.showTooltip == true && this.tooltipTop !== -1e4 ? this.bgColor : "transparent";
      return style;
    },
    transitionStyle() {
      const style = new UTSJSONObject({});
      style["position"] = "absolute";
      style["top"] = addUnit(this.tooltipTop);
      style["zIndex"] = this.zIndex;
      return UTSJSONObject.assign(style, this.tooltipStyle != null ? this.tooltipStyle : new UTSJSONObject({}));
    },
    indicatorMergedStyle() {
      const indicatorStyle = this.indicatorStyle;
      const style = UTSJSONObject.assign(new UTSJSONObject({}), indicatorStyle);
      style["width"] = addUnit(this.indicatorWidth);
      style["height"] = addUnit(this.indicatorWidth);
      return style;
    },
    // 计算气泡和指示器的位置信息
    tooltipStyle() {
      const style = new UTSJSONObject({});
      style["transform"] = this.direction === "top" ? "translateY(-100%)" : "translateY(100%)";
      const sysInfo = sys();
      const tooltipInfo = this.tooltipInfo;
      const textInfo = this.textInfo;
      const tooltipWidth = getObjNumber(tooltipInfo, "width");
      const textWidth = getObjNumber(textInfo, "width");
      const textLeft = getObjNumber(textInfo, "left");
      const textRight = getObjNumber(textInfo, "right");
      const windowWidth = normalizeNumber(sysInfo.windowWidth, 0);
      if (tooltipWidth / 2 > textLeft + textWidth / 2 - this.screenGap) {
        this.indicatorStyle = emptyStyle();
        const left = "-" + addUnit(textLeft - this.screenGap);
        style["left"] = left;
        const indicatorStyle = this.indicatorStyle;
        indicatorStyle["left"] = addUnit(textWidth / 2 - normalizeNumber(getPx(left), 0) - this.indicatorWidth / 2);
      } else if (tooltipWidth / 2 > windowWidth - textRight + textWidth / 2 - this.screenGap) {
        this.indicatorStyle = emptyStyle();
        const right = "-" + addUnit(windowWidth - textRight - this.screenGap);
        style["right"] = right;
        const indicatorStyle = this.indicatorStyle;
        indicatorStyle["right"] = addUnit(textWidth / 2 - normalizeNumber(getPx(right), 0) - this.indicatorWidth / 2);
      } else {
        const left = Math.abs(textWidth / 2 - tooltipWidth / 2);
        style["left"] = textWidth > tooltipWidth ? addUnit(left) : "-" + addUnit(left);
        this.indicatorStyle = emptyStyle();
      }
      if (this.direction === "top") {
        style["marginTop"] = "-10px";
        const indicatorStyle = this.indicatorStyle;
        indicatorStyle["bottom"] = "-4px";
      } else {
        style["marginBottom"] = "-10px";
        const indicatorStyle = this.indicatorStyle;
        indicatorStyle["top"] = "-4px";
      }
      return style;
    }
  },
  mounted() {
    this.init();
  },
  emits: ["click"],
  methods: {
    init() {
      this.getElRect();
    },
    // 长按触发事件
    async longpressHandler() {
      this.tooltipTop = 0;
      this.showTooltip = true;
    },
    // 点击透明遮罩
    overlayClickHandler() {
      this.showTooltip = false;
    },
    // 点击弹出按钮
    btnClickHandler(index) {
      this.showTooltip = false;
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
      this.showTooltip = true;
      this.tooltipTop = -1e4;
      sleep(500).then(() => {
        this.queryRect(this.tooltipId.toString()).then((size = null) => {
          this.tooltipInfo = size;
          this.showTooltip = false;
        });
        this.queryRect(this.textId.toString()).then((size = null) => {
          this.textInfo = size;
        });
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
      this.showTooltip = false;
      this.$emit("click", 0);
      uni.setClipboardData({
        // 优先使用copyText字段，如果没有，则默认使用text字段当做复制的内容
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
          this.showTooltip = false;
        }
      });
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tooltip": { "": { "position": "relative", "display": "flex", "flexDirection": "row" } }, "up-tooltip__wrapper": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center" } }, "up-tooltip__wrapper__text": { "": { "fontSize": 14 } }, "up-tooltip__wrapper__popup": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center" } }, "up-tooltip__wrapper__popup__list": { "": { "backgroundColor": "#060607", "position": "relative", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "borderTopLeftRadius": 5, "borderTopRightRadius": 5, "borderBottomRightRadius": 5, "borderBottomLeftRadius": 5, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "up-tooltip__wrapper__popup__list__btn": { "": { "paddingTop": 11, "paddingRight": 13, "paddingBottom": 11, "paddingLeft": 13 } }, "up-tooltip__wrapper__popup__list__btn--hover": { "": { "backgroundColor": "#58595B" } }, "up-tooltip__wrapper__popup__list__btn__text": { "": { "lineHeight": "12px", "fontSize": 13, "color": "#FFFFFF" } }, "up-tooltip__wrapper__popup__indicator": { "": { "position": "absolute", "backgroundColor": "#060607", "width": 14, "height": 14, "bottom": -4, "transform": "rotate(45deg)", "borderTopLeftRadius": 2, "borderTopRightRadius": 2, "borderBottomRightRadius": 2, "borderBottomLeftRadius": 2, "zIndex": -1 } }, "up-tooltip__wrapper__popup__indicator--hover": { "": { "backgroundColor": "#58595B" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_overlay = resolveEasycom(resolveDynamicComponent("up-overlay"), __easycom_8);
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_0);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_11);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-tooltip",
      style: normalizeStyle($options.rootStyle)
    },
    [
      createVNode(_component_up_overlay, {
        show: $options.overlayShow,
        customStyle: "backgroundColor: rgba(0, 0, 0, 0)",
        onClick: $options.overlayClickHandler
      }, null, 8, ["show", "onClick"]),
      createElementVNode("view", { class: "up-tooltip__wrapper" }, [
        createElementVNode("text", {
          class: "up-tooltip__wrapper__text",
          id: $data.textId,
          ref: $data.textId,
          userSelect: false,
          selectable: false,
          onLongpress: _cache[0] || (_cache[0] = withModifiers((...args) => $options.longpressHandler && $options.longpressHandler(...args), ["stop"])),
          style: normalizeStyle($options.textStyle)
        }, toDisplayString($options.displayText), 45, ["id"]),
        createVNode(_component_up_transition, {
          mode: "fade",
          show: $data.showTooltip,
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
                  style: normalizeStyle($options.indicatorMergedStyle)
                },
                [
                  createCommentVNode(" 由于nvue不支持三角形绘制，这里就做一个四方形，再旋转45deg，得到露出的一个三角 ")
                ],
                4
                /* STYLE */
              )) : createCommentVNode("v-if", true),
              createElementVNode("view", { class: "up-tooltip__wrapper__popup__list" }, [
                $options.showCopyButton ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "up-tooltip__wrapper__popup__list__btn",
                  "hover-class": "up-tooltip__wrapper__popup__list__btn--hover",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.setClipboardData && $options.setClipboardData(...args))
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
                          "hover-class": "up-tooltip__wrapper__popup__list__btn--hover"
                        }, [
                          createElementVNode("text", {
                            class: "up-tooltip__wrapper__popup__list__btn__text",
                            onClick: ($event) => $options.btnClickHandler(index)
                          }, toDisplayString(item), 9, ["onClick"])
                        ]),
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
              ])
            ], 8, ["id"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show", "customStyle"])
      ])
    ],
    4
    /* STYLE */
  );
}
const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue"]]);
export {
  __easycom_5 as _
};
//# sourceMappingURL=up-tooltip.js.map
