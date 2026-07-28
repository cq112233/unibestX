"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upTransition_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const getClassNames = function(name) {
  return new UTSJSONObject({
    "enter": `up-${name}-enter up-${name}-enter-active`,
    "enter-to": `up-${name}-enter-to up-${name}-enter-active`,
    "leave": `up-${name}-leave up-${name}-leave-active`,
    "leave-to": `up-${name}-leave-to up-${name}-leave-active`
  });
};
const _sfc_main = common_vendor.defineComponent(
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
        return new UTSJSONObject(Object.assign(Object.assign({
          transitionProperty: transitionProp,
          transitionDuration: `${duration}ms`,
          // display: `${this.display ? '' : 'none'}`,
          transitionTimingFunction: this.timingFunction
        }, uni_modules_uviewUltra_libs_function_index.addStyle(customStyle)), viewStyle));
      }
    },
    // 将mixin挂在到组件中，实际上为一个vue格式对象。
    mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upTransition_props.propsTransition],
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
      vueEnter() {
        return common_vendor.__awaiter(this, void 0, void 0, function* () {
          const classNames = getClassNames(this.mode);
          this.status = "enter";
          this.$emit("beforeEnter");
          this.inited = true;
          this.display = true;
          this.classes = classNames["enter"].toString();
          this.viewStyle = getModeStyle(this.mode, "enter");
          yield common_vendor.nextTick$1();
          yield uni_modules_uviewUltra_libs_function_index.sleep(20);
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"].toString();
          this.viewStyle = getModeStyle(this.mode, "enter-to");
        });
      },
      // 动画离场处理
      vueLeave() {
        return common_vendor.__awaiter(this, void 0, void 0, function* () {
          if (!this.display)
            return Promise.resolve(null);
          const classNames = getClassNames(this.mode);
          this.status = "leave";
          this.$emit("beforeLeave");
          this.classes = classNames["leave"].toString();
          this.viewStyle = getModeStyle(this.mode, "leave");
          yield common_vendor.nextTick$1();
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, parseInt(this.duration != null ? this.$props["duration"].toString() : "0"));
          this.classes = classNames["leave-to"].toString();
          this.viewStyle = getModeStyle(this.mode, "leave-to");
        });
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $data.inited
  }, $data.inited ? {
    b: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-52d65444"), "view", "up-transition"),
    c: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "83"),
    d: common_vendor.n($data.classes),
    e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    f: common_vendor.s($options.mergeStyle),
    g: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-52d65444"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-transition/up-transition.js.map
