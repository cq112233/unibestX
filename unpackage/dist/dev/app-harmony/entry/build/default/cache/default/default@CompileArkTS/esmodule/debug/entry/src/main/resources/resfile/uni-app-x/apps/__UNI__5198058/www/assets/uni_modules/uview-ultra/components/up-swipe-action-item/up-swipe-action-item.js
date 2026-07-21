import { _ as __easycom_35 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, renderSlot, Fragment, renderList, normalizeStyle, normalizeClass, createBlock, createCommentVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swipe-action-item/types&";
import { t as touchMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/touch&";
import { p as propsSwipeActionItem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swipe-action-item/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { s as sleep, a as addUnit, g as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-swipe-action-item",
  emits: ["click", "update:show"],
  mixins: [
    mpMixin,
    mixin,
    touchMixin,
    propsSwipeActionItem
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
    sleep(100).then(() => {
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
      if (UTS.isInstanceOf(style, UTSJSONObject))
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
        return addUnit(item["iconSize"]);
      }
      const style = this.getOptionStyle(item);
      if (style != null && style["fontSize"] != null) {
        return addUnit(style["fontSize"]);
      }
      return 17;
    },
    addUnit(e = null) {
      return addUnit(e);
    },
    getPx(e = null, s = false) {
      return getPx(e, s);
    },
    init() {
      this.updateParentData();
      sleep().then(() => {
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
      let view = uni.createSelectorQuery().in(this).select(".up-swipe-action-item__right");
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
const _style_0 = { "up-swipe-action-item": { "": { "position": "relative", "overflow": "hidden", "display": "flex", "flexDirection": "column" } }, "up-swipe-action-item__content": { "": { "transform": "translateX(0px)", "backgroundColor": "#FFFFFF", "zIndex": 10, "width": "100%", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-swipe-action-item__right": { "": { "position": "absolute", "top": 0, "bottom": 0, "right": 0, "display": "flex", "flexDirection": "row", "zIndex": 1 } }, "up-swipe-action-item__right__button": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "overflow": "hidden", "alignItems": "center" } }, "up-swipe-action-item__right__button__wrapper": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "up-swipe-action-item__right__button__wrapper--primary": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-swipe-action-item__right__button__wrapper__text": { "": { "color": "#FFFFFF", "fontSize": 15, "textAlign": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  return openBlock(), createElementBlock(
    "view",
    {
      class: "up-swipe-action-item",
      ref: "up-swipe-action-item"
    },
    [
      createElementVNode("view", { class: "up-swipe-action-item__right" }, [
        renderSlot(_ctx.$slots, "button", {}, () => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.options, (item, index) => {
              return openBlock(), createElementBlock("view", {
                key: index,
                class: "up-swipe-action-item__right__button",
                ref_for: true,
                ref: `up-swipe-action-item__right__button-${index}`,
                style: normalizeStyle([$options.getButtonStyle(item)]),
                onClick: ($event) => $options.buttonClickHandler(item, index)
              }, [
                createElementVNode(
                  "view",
                  {
                    class: normalizeClass(["up-swipe-action-item__right__button__wrapper", {
                      "up-swipe-action-item__right__button__wrapper--primary": $options.getOptionStyleProp(item, "backgroundColor", "") == "primary"
                    }]),
                    style: normalizeStyle([$options.getWrapperStyle(item)])
                  },
                  [
                    item["icon"] ? (openBlock(), createBlock(_component_up_icon, {
                      key: 0,
                      name: item["icon"],
                      color: $options.getOptionStyleProp(item, "color", "#ffffff"),
                      size: $options.getOptionIconSize(item),
                      customStyle: {
                        marginRight: item["text"] != null ? "2px" : 0
                      }
                    }, null, 8, ["name", "color", "size", "customStyle"])) : createCommentVNode("v-if", true),
                    item["text"] ? (openBlock(), createElementBlock(
                      "text",
                      {
                        key: 1,
                        class: "up-swipe-action-item__right__button__wrapper__text up-line-1",
                        style: normalizeStyle([$options.getTextStyle(item)])
                      },
                      toDisplayString(item["text"]),
                      5
                      /* TEXT, STYLE */
                    )) : createCommentVNode("v-if", true)
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
      ]),
      createElementVNode(
        "view",
        {
          class: "up-swipe-action-item__content",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
          onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args)),
          onTouchmove: _cache[2] || (_cache[2] = (...args) => $options.touchmove && $options.touchmove(...args)),
          onTouchend: _cache[3] || (_cache[3] = (...args) => $options.touchend && $options.touchend(...args)),
          onTouchcancel: _cache[4] || (_cache[4] = (...args) => $options.touchcancel && $options.touchcancel(...args)),
          style: normalizeStyle($data.sliderStyle)
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        36
        /* STYLE, NEED_HYDRATION */
      )
    ],
    512
    /* NEED_PATCH */
  );
}
const __easycom_33 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.uvue"]]);
export {
  __easycom_33 as _
};
//# sourceMappingURL=up-swipe-action-item.js.map
