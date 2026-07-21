const { defineComponent, nextTick, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode } = globalThis.Vue
import { p as propsTransition } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { b as addStyle, s as sleep } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const getClassNames = function(name) {
  return new UTSJSONObject({
    "enter": `up-${name}-enter up-${name}-enter-active`,
    "enter-to": `up-${name}-enter-to up-${name}-enter-active`,
    "leave": `up-${name}-leave up-${name}-leave-active`,
    "leave-to": `up-${name}-leave-to up-${name}-leave-active`
  });
};
const _sfc_main = defineComponent(
  {
    name: "up-transition",
    data() {
      return {
        inited: false,
        viewStyle: new UTSJSONObject({}),
        status: "",
        transitionEnded: false,
        display: false,
        classes: ""
        // 应用的类名
      };
    },
    emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
    computed: {
      mergeStyle() {
        var _a;
        const _b = this, viewStyle = _b.viewStyle, customStyle = _b.customStyle;
        const modeVal = ((_a = this.$props["mode"]) !== null && _a !== void 0 ? _a : "fade").toString();
        const durationVal = this.$props["duration"];
        const duration = durationVal != null ? durationVal.toString() : "0";
        let transitionProp = "all";
        if (modeVal === "fade") {
          transitionProp = "opacity";
        } else if (modeVal.startsWith("slide")) {
          transitionProp = "transform";
        } else if (modeVal.startsWith("fade-zoom") || modeVal === "zoom" || modeVal.startsWith("fade-up") || modeVal.startsWith("fade-down") || modeVal.startsWith("fade-left") || modeVal.startsWith("fade-right")) {
          transitionProp = "transform, opacity";
        }
        return new UTSJSONObject({
          transitionProperty: transitionProp,
          transitionDuration: `${duration}ms`,
          // display: `${this.display ? '' : 'none'}`,
          transitionTimingFunction: this.timingFunction,
          // 避免自定义样式影响到动画属性，所以写在viewStyle前面
          ...addStyle(customStyle),
          ...viewStyle
        });
      }
    },
    // 将mixin挂在到组件中，实际上为一个vue格式对象。
    mixins: [mpMixin, mixin, propsTransition],
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.vueEnter();
          } else {
            this.vueLeave();
          }
        },
        // 表示同时监听初始化时的props的show的意思
        immediate: true
      }
    },
    methods: {
      // 组件被点击发出事件
      clickHandler() {
        this.$emit("click");
      },
      // vue版本的组件进场处理
      async vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames["enter"].toString();
        this.viewStyle = getModeStyle(this.mode, "enter");
        await nextTick();
        await sleep(20);
        this.$emit("enter");
        this.transitionEnded = false;
        this.$emit("afterEnter");
        this.classes = classNames["enter-to"].toString();
        this.viewStyle = getModeStyle(this.mode, "enter-to");
      },
      // 动画离场处理
      async vueLeave() {
        if (!this.display)
          return Promise.resolve(null);
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames["leave"].toString();
        this.viewStyle = getModeStyle(this.mode, "leave");
        await nextTick();
        this.transitionEnded = false;
        this.$emit("leave");
        setTimeout(this.onTransitionEnd, parseInt(this.duration != null ? this.$props["duration"].toString() : "0"));
        this.classes = classNames["leave-to"].toString();
        this.viewStyle = getModeStyle(this.mode, "leave-to");
      },
      // 完成过渡后触发
      onTransitionEnd() {
        if (this.transitionEnded)
          return null;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  }
  // 定义不同模式和状态下的行内样式，用于在原生App端更可靠地触发过渡动画
);
const getModeStyle = function(mode, state) {
  const style = new UTSJSONObject({});
  if (state === "enter" || state === "leave-to") {
    if (mode === "fade") {
      style["opacity"] = 0;
    } else if (mode === "zoom") {
      style["transform"] = "scale(0.95)";
    } else if (mode === "fade-zoom") {
      style["transform"] = "scale(0.95)";
      style["opacity"] = 0;
    } else if (mode === "fade-up") {
      style["transform"] = "translateY(100%)";
      style["opacity"] = 0;
    } else if (mode === "fade-down") {
      style["transform"] = "translateY(-100%)";
      style["opacity"] = 0;
    } else if (mode === "fade-left") {
      style["transform"] = "translateX(-100%)";
      style["opacity"] = 0;
    } else if (mode === "fade-right") {
      style["transform"] = "translateX(100%)";
      style["opacity"] = 0;
    } else if (mode === "slide-up") {
      style["transform"] = "translateY(100%)";
    } else if (mode === "slide-down") {
      style["transform"] = "translateY(-100%)";
    } else if (mode === "slide-left") {
      style["transform"] = "translateX(-100%)";
    } else if (mode === "slide-right") {
      style["transform"] = "translateX(100%)";
    }
  } else if (state === "enter-to" || state === "leave") {
    if (mode === "fade") {
      style["opacity"] = 1;
    } else if (mode === "zoom") {
      style["transform"] = "scale(1)";
    } else if (mode === "fade-zoom") {
      style["transform"] = "scale(1)";
      style["opacity"] = 1;
    } else if (mode === "fade-up" || mode === "fade-down" || mode === "fade-left" || mode === "fade-right" || mode === "slide-up" || mode === "slide-down" || mode === "slide-left" || mode === "slide-right") {
      style["transform"] = "translate(0, 0)";
      if (mode.startsWith("fade")) {
        style["opacity"] = 1;
      }
    }
  }
  return style;
};
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-fade-enter-active": { "": { "transitionProperty": "opacity" } }, "up-fade-leave-active": { "": { "transitionProperty": "opacity" } }, "up-fade-enter": { "": { "opacity": 0 } }, "up-fade-leave-to": { "": { "opacity": 0 } }, "up-fade-zoom-enter": { "": { "transform": "scale(0.95)", "opacity": 0 } }, "up-fade-zoom-leave-to": { "": { "transform": "scale(0.95)", "opacity": 0 } }, "up-fade-zoom-enter-active": { "": { "transitionProperty": "transform,opacity" } }, "up-fade-zoom-leave-active": { "": { "transitionProperty": "transform,opacity" } }, "up-fade-down-enter-active": { "": { "transitionProperty": "opacity,transform" } }, "up-fade-down-leave-active": { "": { "transitionProperty": "opacity,transform" } }, "up-fade-left-enter-active": { "": { "transitionProperty": "opacity,transform" } }, "up-fade-left-leave-active": { "": { "transitionProperty": "opacity,transform" } }, "up-fade-right-enter-active": { "": { "transitionProperty": "opacity,transform" } }, "up-fade-right-leave-active": { "": { "transitionProperty": "opacity,transform" } }, "up-fade-up-enter-active": { "": { "transitionProperty": "opacity,transform" } }, "up-fade-up-leave-active": { "": { "transitionProperty": "opacity,transform" } }, "up-fade-up-enter": { "": { "transform": "translateY(100%)", "opacity": 0 } }, "up-fade-up-leave-to": { "": { "transform": "translateY(100%)", "opacity": 0 } }, "up-fade-down-enter": { "": { "transform": "translateY(-100%)", "opacity": 0 } }, "up-fade-down-leave-to": { "": { "transform": "translateY(-100%)", "opacity": 0 } }, "up-fade-left-enter": { "": { "transform": "translateX(-100%)", "opacity": 0 } }, "up-fade-left-leave-to": { "": { "transform": "translateX(-100%)", "opacity": 0 } }, "up-fade-right-enter": { "": { "transform": "translateX(100%)", "opacity": 0 } }, "up-fade-right-leave-to": { "": { "transform": "translateX(100%)", "opacity": 0 } }, "up-slide-down-enter-active": { "": { "transitionProperty": "transform" } }, "up-slide-down-leave-active": { "": { "transitionProperty": "transform" } }, "up-slide-left-enter-active": { "": { "transitionProperty": "transform" } }, "up-slide-left-leave-active": { "": { "transitionProperty": "transform" } }, "up-slide-right-enter-active": { "": { "transitionProperty": "transform" } }, "up-slide-right-leave-active": { "": { "transitionProperty": "transform" } }, "up-slide-up-enter-active": { "": { "transitionProperty": "transform" } }, "up-slide-up-leave-active": { "": { "transitionProperty": "transform" } }, "up-slide-up-enter": { "": { "transform": "translateY(100%)" } }, "up-slide-up-leave-to": { "": { "transform": "translateY(100%)" } }, "up-slide-down-enter": { "": { "transform": "translateY(-100%)" } }, "up-slide-down-leave-to": { "": { "transform": "translateY(-100%)" } }, "up-slide-left-enter": { "": { "transform": "translateX(-100%)" } }, "up-slide-left-leave-to": { "": { "transform": "translateX(-100%)" } }, "up-slide-right-enter": { "": { "transform": "translateX(100%)" } }, "up-slide-right-leave-to": { "": { "transform": "translateX(100%)" } }, "up-zoom-enter-active": { "": { "transitionProperty": "transform" } }, "up-zoom-leave-active": { "": { "transitionProperty": "transform" } }, "up-zoom-enter": { "": { "transform": "scale(0.95)" } }, "up-zoom-leave-to": { "": { "transform": "scale(0.95)" } }, "@TRANSITION": { "up-fade-enter-active": { "property": "opacity" }, "up-fade-leave-active": { "property": "opacity" }, "up-fade-zoom-enter-active": { "property": "transform,opacity" }, "up-fade-zoom-leave-active": { "property": "transform,opacity" }, "up-fade-down-enter-active": { "property": "opacity,transform" }, "up-fade-down-leave-active": { "property": "opacity,transform" }, "up-fade-left-enter-active": { "property": "opacity,transform" }, "up-fade-left-leave-active": { "property": "opacity,transform" }, "up-fade-right-enter-active": { "property": "opacity,transform" }, "up-fade-right-leave-active": { "property": "opacity,transform" }, "up-fade-up-enter-active": { "property": "opacity,transform" }, "up-fade-up-leave-active": { "property": "opacity,transform" }, "up-slide-down-enter-active": { "property": "transform" }, "up-slide-down-leave-active": { "property": "transform" }, "up-slide-left-enter-active": { "property": "transform" }, "up-slide-left-leave-active": { "property": "transform" }, "up-slide-right-enter-active": { "property": "transform" }, "up-slide-right-leave-active": { "property": "transform" }, "up-slide-up-enter-active": { "property": "transform" }, "up-slide-up-leave-active": { "property": "transform" }, "up-zoom-enter-active": { "property": "transform" }, "up-zoom-leave-active": { "property": "transform" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.inited ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["up-transition", $data.classes]),
      ref: "up-transition",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      style: normalizeStyle([$options.mergeStyle])
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-transition/up-transition.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-transition.js.map
