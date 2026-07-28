"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
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
const _sfc_main = common_vendor.defineComponent({
  name: "up-tooltip",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin],
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
      textId: uni_modules_uviewUltra_libs_function_index.guid(),
      tooltipId: uni_modules_uviewUltra_libs_function_index.guid(),
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
          uni_modules_uviewUltra_libs_function_index.sleep(50).then(() => {
            this.getElRect();
          });
          uni_modules_uviewUltra_libs_function_index.sleep(150).then(() => {
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
      return uni_modules_uviewUltra_libs_function_index.addStyle(customStyle);
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
      style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.size);
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
      const sysInfo = uni_modules_uviewUltra_libs_function_index.sys();
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
        style["left"] = uni_modules_uviewUltra_libs_function_index.addUnit(indicatorLeftRelative);
      } else {
        style["left"] = "50%";
        style["marginLeft"] = "-" + uni_modules_uviewUltra_libs_function_index.addUnit(this.indicatorWidth / 2);
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
      const sysInfo = uni_modules_uviewUltra_libs_function_index.sys();
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
        style["left"] = uni_modules_uviewUltra_libs_function_index.addUnit(popupLeftRelative);
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
      Object.assign(style, ts);
      return style;
    },
    indicatorMergedStyle() {
      const style = new UTSJSONObject({});
      const isStyle = this.indicatorStyle;
      Object.assign(style, isStyle);
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.indicatorWidth);
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.indicatorWidth);
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
      uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
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
        uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
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
        this.$uGetRect(`#${ref}`).then((size = null) => {
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
      common_vendor.index.setClipboardData({
        data: this.getCopyData(),
        success: () => {
          if (this.showToast == true) {
            uni_modules_uviewUltra_libs_function_index.toast("复制成功");
          }
        },
        fail: () => {
          if (this.showToast == true) {
            uni_modules_uviewUltra_libs_function_index.toast("复制失败");
          }
        },
        complete: () => {
          this.innerShow = false;
        }
      });
    }
  }
});
if (!Array) {
  const _easycom_up_overlay2 = common_vendor.resolveComponent("up-overlay");
  const _easycom_up_line2 = common_vendor.resolveComponent("up-line");
  const _easycom_up_transition2 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_overlay2 + _easycom_up_line2 + _easycom_up_transition2)();
}
const _easycom_up_overlay = () => "../up-overlay/up-overlay.js";
const _easycom_up_line = () => "../up-line/up-line.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_overlay + _easycom_up_line + _easycom_up_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: common_vendor.o($options.overlayClickHandler, "ae"),
    b: common_vendor.p({
      show: $options.overlayShow,
      opacity: 0,
      class: "data-v-caa13167"
    }),
    c: $options.hasText
  }, $options.hasText ? {
    d: common_vendor.t($options.displayText),
    e: common_vendor.sei($data.textId !== "" ? $data.textId : "r0-caa13167", "text", $data.textId),
    f: $data.textId,
    g: common_vendor.o((...args) => $options.longpressHandler && $options.longpressHandler(...args), "0f"),
    h: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "56"),
    i: common_vendor.s($options.textStyle)
  } : {
    j: common_vendor.sei($data.textId !== "" ? $data.textId : "r1-caa13167", "view", $data.textId),
    k: $data.textId,
    l: common_vendor.o((...args) => $options.longpressHandler && $options.longpressHandler(...args), "41"),
    m: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "00")
  }, {
    n: $options.showIndicator
  }, $options.showIndicator ? {
    o: common_vendor.s($options.indicatorMergedStyle)
  } : {}, {
    p: $options.showCopyButton
  }, $options.showCopyButton ? {
    q: common_vendor.o((...args) => $options.setClipboardData && $options.setClipboardData(...args), "fd")
  } : {}, {
    r: $options.showCopyLine
  }, $options.showCopyLine ? {
    s: common_vendor.p({
      direction: "column",
      color: "#8d8e90",
      length: "18",
      class: "data-v-caa13167"
    })
  } : {}, {
    t: common_vendor.f($options.buttonItems, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item),
        b: common_vendor.o(($event) => $options.btnClickHandler(index), index),
        c: index < $options.buttonCount - 1
      }, index < $options.buttonCount - 1 ? {
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
    v: common_vendor.s($options.popupListStyle),
    w: common_vendor.sei($data.tooltipId !== "" ? $data.tooltipId : "r2-caa13167", "view", $data.tooltipId),
    x: $data.tooltipId,
    y: common_vendor.p({
      mode: "fade",
      show: $options.displayShow,
      duration: "300",
      customStyle: $options.transitionStyle,
      class: "data-v-caa13167"
    }),
    z: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    A: common_vendor.s($options.rootStyle),
    B: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    C: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-caa13167"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js.map
