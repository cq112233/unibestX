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
  if (common_vendor.UTS.isInstanceOf(obj, NodeInfo)) {
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
      textId: uni_modules_uviewUltra_libs_function_index.guid(),
      tooltipId: uni_modules_uviewUltra_libs_function_index.guid(),
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
      return uni_modules_uviewUltra_libs_function_index.addStyle(customStyle);
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
      style["top"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.tooltipTop);
      style["zIndex"] = this.zIndex;
      return UTSJSONObject.assign(style, this.tooltipStyle != null ? this.tooltipStyle : new UTSJSONObject({}));
    },
    indicatorMergedStyle() {
      const indicatorStyle = this.indicatorStyle;
      const style = UTSJSONObject.assign(new UTSJSONObject({}), indicatorStyle);
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.indicatorWidth);
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.indicatorWidth);
      return style;
    },
    // 计算气泡和指示器的位置信息
    tooltipStyle() {
      const style = new UTSJSONObject({});
      style["transform"] = this.direction === "top" ? "translateY(-100%)" : "translateY(100%)";
      const sysInfo = uni_modules_uviewUltra_libs_function_index.sys();
      const tooltipInfo = this.tooltipInfo;
      const textInfo = this.textInfo;
      const tooltipWidth = getObjNumber(tooltipInfo, "width");
      const textWidth = getObjNumber(textInfo, "width");
      const textLeft = getObjNumber(textInfo, "left");
      const textRight = getObjNumber(textInfo, "right");
      const windowWidth = normalizeNumber(sysInfo.windowWidth, 0);
      if (tooltipWidth / 2 > textLeft + textWidth / 2 - this.screenGap) {
        this.indicatorStyle = emptyStyle();
        const left = "-" + uni_modules_uviewUltra_libs_function_index.addUnit(textLeft - this.screenGap);
        style["left"] = left;
        const indicatorStyle = this.indicatorStyle;
        indicatorStyle["left"] = uni_modules_uviewUltra_libs_function_index.addUnit(textWidth / 2 - normalizeNumber(uni_modules_uviewUltra_libs_function_index.getPx(left), 0) - this.indicatorWidth / 2);
      } else if (tooltipWidth / 2 > windowWidth - textRight + textWidth / 2 - this.screenGap) {
        this.indicatorStyle = emptyStyle();
        const right = "-" + uni_modules_uviewUltra_libs_function_index.addUnit(windowWidth - textRight - this.screenGap);
        style["right"] = right;
        const indicatorStyle = this.indicatorStyle;
        indicatorStyle["right"] = uni_modules_uviewUltra_libs_function_index.addUnit(textWidth / 2 - normalizeNumber(uni_modules_uviewUltra_libs_function_index.getPx(right), 0) - this.indicatorWidth / 2);
      } else {
        const left = Math.abs(textWidth / 2 - tooltipWidth / 2);
        style["left"] = textWidth > tooltipWidth ? uni_modules_uviewUltra_libs_function_index.addUnit(left) : "-" + uni_modules_uviewUltra_libs_function_index.addUnit(left);
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
    longpressHandler() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        this.tooltipTop = 0;
        this.showTooltip = true;
      });
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
        this.$uGetRect(`#${ref}`).then((size = null) => {
          resolve(size);
        });
      });
    },
    // 元素尺寸
    getElRect() {
      this.showTooltip = true;
      this.tooltipTop = -1e4;
      uni_modules_uviewUltra_libs_function_index.sleep(500).then(() => {
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
      common_vendor.index.setClipboardData({
        // 优先使用copyText字段，如果没有，则默认使用text字段当做复制的内容
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
          this.showTooltip = false;
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
    a: common_vendor.o($options.overlayClickHandler, "3e"),
    b: common_vendor.p({
      show: $options.overlayShow,
      customStyle: "backgroundColor: rgba(0, 0, 0, 0)",
      class: "data-v-caa13167"
    }),
    c: common_vendor.t($options.displayText),
    d: common_vendor.sei($data.textId !== "" ? $data.textId : "r0-caa13167", "text", $data.textId),
    e: $data.textId,
    f: common_vendor.o((...args) => $options.longpressHandler && $options.longpressHandler(...args), "88"),
    g: common_vendor.s($options.textStyle),
    h: $options.showIndicator
  }, $options.showIndicator ? {
    i: common_vendor.s($options.indicatorMergedStyle)
  } : {}, {
    j: $options.showCopyButton
  }, $options.showCopyButton ? {
    k: common_vendor.o((...args) => $options.setClipboardData && $options.setClipboardData(...args), "4e")
  } : {}, {
    l: $options.showCopyLine
  }, $options.showCopyLine ? {
    m: common_vendor.p({
      direction: "column",
      color: "#8d8e90",
      length: "18",
      class: "data-v-caa13167"
    })
  } : {}, {
    n: common_vendor.f($options.buttonItems, (item, index, i0) => {
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
    o: common_vendor.sei($data.tooltipId !== "" ? $data.tooltipId : "r1-caa13167", "view", $data.tooltipId),
    p: $data.tooltipId,
    q: common_vendor.p({
      mode: "fade",
      show: $data.showTooltip,
      duration: "300",
      customStyle: $options.transitionStyle,
      class: "data-v-caa13167"
    }),
    r: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    s: common_vendor.s($options.rootStyle),
    t: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-caa13167"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js.map
