"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./types.js");
const uni_modules_uviewUltra_libs_mixin_touch = require("../../libs/mixin/touch.js");
const uni_modules_uviewUltra_components_upSwipeActionItem_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-swipe-action-item",
  emits: ["click", "update:show"],
  mixins: [
    uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin,
    uni_modules_uviewUltra_libs_mixin_mixin.mixin,
    uni_modules_uviewUltra_libs_mixin_touch.touchMixin,
    uni_modules_uviewUltra_components_upSwipeActionItem_props.propsSwipeActionItem
  ],
  data() {
    return {
      // 按钮的尺寸信息
      size: new UTSJSONObject({}),
      // 父组件up-swipe-action的参数
      parentData: new UTSJSONObject({
        autoClose: true
      }),
      // 当前状态，open-打开，close-关闭
      status: "",
      sliderStyle: new UTSJSONObject({}),
      state: new UTSJSONObject({
        moving: false,
        startX: 0,
        startY: 0,
        buttonsWidth: 0
      })
    };
  },
  watch: {
    // 由于wxs无法直接读取外部的值，需要在外部值变化时，重新执行赋值逻辑
    // wxsInit(newValue, oldValue) {
    // 	this.queryRect()
    // },
    show(newValue = null) {
      if (newValue) {
        this.status = "open";
      } else {
        this.status = "close";
      }
    },
    status(newValue, oldValue) {
      var _a;
      if (newValue === "open") {
        this.$emit("update:show", true);
        if (this.parent != null) {
          (_a = this.parent) === null || _a === void 0 ? null : _a.$callMethod("setOpendItem", 1);
        }
      } else {
        this.$emit("update:show", false);
      }
      if (this.disabled)
        return null;
      if (newValue === "close" && oldValue === "open") {
        this.closeSwipeAction();
      } else if (newValue === "open" && oldValue === "close") {
        this.openSwipeAction();
      }
    },
    options() {
      this.getBtnWidth();
    }
  },
  computed: {
    // wxsInit() {
    // 	return [this.disabled, this.autoClose, this.threshold, this.options, this.duration]
    // }
  },
  mounted() {
    this.init();
    uni_modules_uviewUltra_libs_function_index.sleep(100).then(() => {
      this.getBtnWidth();
    });
  },
  beforeUnmount() {
    this.closeHandler();
  },
  methods: {
    // 安全获取 option 的 style 对象
    getOptionStyle(item) {
      const style = item["style"];
      if (style == null)
        return null;
      if (common_vendor.UTS.isInstanceOf(style, UTSJSONObject))
        return style;
      try {
        const m = style;
        const obj = new UTSJSONObject({});
        m.forEach((value = null, key) => {
          obj[key] = value;
        });
        return obj;
      } catch (_e) {
        return null;
      }
    },
    // 安全获取 style 中的某个属性
    getOptionStyleProp(item, prop, defaultVal) {
      const style = this.getOptionStyle(item);
      if (style != null && style[prop] != null) {
        return style[prop];
      }
      return defaultVal;
    },
    // 外层按钮样式
    getButtonStyle(item) {
      const style = this.getOptionStyle(item);
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
    },
    // 内层 wrapper 样式
    getWrapperStyle(item) {
      const style = this.getOptionStyle(item);
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
      if (style != null) {
        style.toMap().forEach((value = null, key) => {
          if (key != "backgroundColor") {
            result[key] = value;
          }
        });
      }
      return result;
    },
    // 文字样式
    getTextStyle(item) {
      const style = this.getOptionStyle(item);
      return new UTSJSONObject({
        color: style != null && style["color"] != null ? style["color"] : "#ffffff",
        fontSize: style != null && style["fontSize"] != null ? style["fontSize"] : "16px",
        lineHeight: style != null && style["fontSize"] != null ? style["fontSize"] : "16px"
      });
    },
    // 图标尺寸
    getOptionIconSize(item) {
      if (item["iconSize"] != null) {
        return uni_modules_uviewUltra_libs_function_index.addUnit(item["iconSize"]);
      }
      const style = this.getOptionStyle(item);
      if (style != null && style["fontSize"] != null) {
        return uni_modules_uviewUltra_libs_function_index.addUnit(style["fontSize"]);
      }
      return 17;
    },
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    getPx(e = null, s = false) {
      return uni_modules_uviewUltra_libs_function_index.getPx(e, s);
    },
    init() {
      this.updateParentData();
      uni_modules_uviewUltra_libs_function_index.sleep().then(() => {
        this.queryRect();
      });
    },
    updateParentData() {
      this.getParentData("up-swipe-action");
    },
    // 查询节点
    queryRect() {
    },
    // 按钮被点击
    buttonClickHandler(item = null, index) {
      this.$emit("click", new UTSJSONObject({
        index,
        name: this.name
      }), () => {
      });
      if (this.closeOnClick) {
        this.closeHandler();
      }
    },
    clickHandler() {
    },
    closeHandler() {
      this.closeSwipeAction();
    },
    setStatus(status) {
      this.status = status;
    },
    getBtnWidth() {
      let view = common_vendor.index.createSelectorQuery().in(this).select(".up-swipe-action-item__right");
      view.fields(new UTSJSONObject({
        size: true,
        scrollOffset: true
      }), (data = null) => {
        this.state["buttonsWidth"] = data.width;
      }).exec();
    },
    // 开始触摸
    touchstart(event) {
      var _a;
      this.state["moving"] = true;
      var touches = event.touches;
      this.state["startX"] = touches[0].pageX;
      this.state["startY"] = touches[0].pageY;
      this.getBtnWidth();
      if (this.parent != null) {
        (_a = this.parent) === null || _a === void 0 ? null : _a.$callMethod("closeOther", this);
      }
    },
    touchmove(event) {
      var _a, _b;
      if (this.disabled || this.state["moving"] == null)
        return null;
      var touches = event.touches;
      var pageX = touches[0].pageX;
      var pageY = touches[0].pageY;
      var moveX = pageX - this.state["startX"];
      var moveY = pageY - this.state["startY"];
      if (Math.abs(moveX) > Math.abs(moveY) || Math.abs(moveX) > this.threshold) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (Math.abs(moveX) < Math.abs(moveY))
        return null;
      if (this.status === "open") {
        if (moveX < 0)
          moveX = 0;
        const btnW = (_a = this.state["buttonsWidth"]) !== null && _a !== void 0 ? _a : 0;
        if (moveX > btnW)
          moveX = btnW;
        this.moveSwipeAction(0 - btnW + moveX);
      } else {
        if (moveX > 0)
          moveX = 0;
        const btnW = (_b = this.state["buttonsWidth"]) !== null && _b !== void 0 ? _b : 0;
        if (Math.abs(moveX) > btnW)
          moveX = 0 - btnW;
        this.moveSwipeAction(moveX);
      }
    },
    touchend(event) {
      if (this.state["moving"] == false || this.disabled)
        return null;
      this.state["moving"] = false;
      var touches = event.changedTouches[0];
      var pageX = touches.pageX;
      touches.pageY;
      var moveX = pageX - this.state["startX"];
      if (this.status === "open") {
        if (moveX < 0)
          return null;
        if (moveX === 0) {
          return this.closeSwipeAction();
        }
        if (Math.abs(moveX) < this.threshold) {
          this.openSwipeAction();
        } else {
          this.closeSwipeAction();
        }
      } else {
        if (moveX > 0)
          return null;
        if (Math.abs(moveX) < this.threshold) {
          this.closeSwipeAction();
        } else {
          this.openSwipeAction();
        }
      }
    },
    touchcancel(event) {
      if (this.state["moving"] == false || this.disabled)
        return null;
      this.state["moving"] = false;
      if (this.status === "open") {
        this.openSwipeAction();
      } else {
        this.closeSwipeAction();
      }
    },
    // 一次性展开滑动菜单
    openSwipeAction() {
      var duration = this.getDuration(this.duration);
      var buttonsWidth = 0 - this.state["buttonsWidth"];
      this.sliderStyle = new UTSJSONObject({
        "transition": "transform " + duration,
        "transform": "translateX(" + buttonsWidth + "px)",
        "-webkit-transform": "translateX(" + buttonsWidth + "px)"
      });
      this.setStatus("open");
    },
    // 一次性收起滑动菜单
    closeSwipeAction() {
      var duration = this.getDuration(this.duration);
      this.sliderStyle = new UTSJSONObject(
        {
          "transition": "transform " + duration,
          "transform": "translateX(0px)"
        }
        // 设置各个隐藏的按钮为收起的状态
        // for (var i = this.state.buttonsWidth - 1; i >= 0; i--) {
        // 	buttons[i].setStyle({
        // 		'transition': 'transform ' + duration,
        // 		'transform': 'translateX(0px)',
        // 		'-webkit-transform': 'translateX(0px)'
        // 	})
        // }
      );
      this.setStatus("close");
    },
    // 移动滑动选择器内容区域，同时显示出其隐藏的菜单
    moveSwipeAction(moveX) {
      this.sliderStyle = new UTSJSONObject({
        "transition": "none",
        transform: "translateX(" + moveX + "px)",
        "-webkit-transform": "translateX(" + moveX + "px)"
      });
    },
    // 获取过渡时间
    getDuration(value = null) {
      if (value.toString().indexOf("s") >= 0)
        return value;
      return parseInt(value.toString()) > 30 ? value.toString() + "ms" : value.toString() + "s";
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.f(_ctx.options, (item, index, i0) => {
      return common_vendor.e({
        a: item["icon"]
      }, item["icon"] ? {
        b: "79a90a86-0-" + i0,
        c: common_vendor.p({
          name: item["icon"],
          color: $options.getOptionStyleProp(item, "color", "#ffffff"),
          size: $options.getOptionIconSize(item),
          customStyle: {
            marginRight: item["text"] != null ? "2px" : 0
          },
          class: "data-v-79a90a86"
        })
      } : {}, {
        d: item["text"]
      }, item["text"] ? {
        e: common_vendor.t(item["text"]),
        f: common_vendor.s($options.getTextStyle(item))
      } : {}, {
        g: $options.getOptionStyleProp(item, "backgroundColor", "") == "primary" ? 1 : "",
        h: common_vendor.s($options.getWrapperStyle(item)),
        i: common_vendor.sei("r0-79a90a86-" + index, "view", `up-swipe-action-item__right__button-${index}`, {
          "f": 1
        }),
        j: index,
        k: `up-swipe-action-item__right__button-${index}`,
        l: common_vendor.s($options.getButtonStyle(item)),
        m: common_vendor.o(($event) => $options.buttonClickHandler(item, index), index)
      });
    }),
    b: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "cd"),
    c: common_vendor.o((...args) => $options.touchstart && $options.touchstart(...args), "68"),
    d: common_vendor.o((...args) => $options.touchmove && $options.touchmove(...args), "8d"),
    e: common_vendor.o((...args) => $options.touchend && $options.touchend(...args), "5f"),
    f: common_vendor.o((...args) => $options.touchcancel && $options.touchcancel(...args), "7f"),
    g: common_vendor.s($data.sliderStyle),
    h: common_vendor.sei(common_vendor.gei(_ctx, "", "r1-79a90a86"), "view", "up-swipe-action-item"),
    i: `${_ctx.u_s_b_h}px`,
    j: `${_ctx.u_s_a_i_b}px`,
    k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-79a90a86"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.js.map
