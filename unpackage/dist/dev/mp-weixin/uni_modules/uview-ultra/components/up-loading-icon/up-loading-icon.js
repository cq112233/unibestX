"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upLoadingIcon_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_colorGradient = require("../../libs/function/colorGradient.js");
const __default__ = common_vendor.defineComponent({
  name: "up-loading-icon",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upLoadingIcon_props.propsLoadicon],
  data() {
    return {
      array12: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
      // 在iOS nvue上，则会一开始默认执行两个周期的动画
      aniAngel: 360,
      webviewHide: false,
      loading: false,
      degree: 0,
      transform: "",
      spinnerStyle: [
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 }),
        new UTSJSONObject({ left: 0, top: 0 })
      ],
      animationFrame: 0
    };
  },
  computed: {
    // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
    // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
    // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
    otherBorderColor() {
      const lightColor = uni_modules_uviewUltra_libs_function_colorGradient.colorGradient(this.color, "#ffffff", 100)[80];
      if (this.mode === "circle") {
        return this.inactiveColor != "" ? this.inactiveColor : lightColor;
      } else {
        return "transparent";
      }
    }
  },
  watch: {
    show(nVal) {
      if (nVal) {
        this.startRotate();
      } else {
        this.stopRotate();
      }
    }
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.stopRotate();
  },
  methods: {
    addStyle(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(val);
    },
    addUnit(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(val);
    },
    getSpinnerDotStyle(index) {
      const style = new UTSJSONObject({});
      style["backgroundColor"] = this.color;
      style["transform"] = `rotate(${((index + 1) * 30).toString()}deg)`;
      style["opacity"] = 1 - 0.0625 * index;
      return style;
    },
    rotateLoader() {
      this.degree = (this.degree + this.getRotateStep()) % 360;
      this.transform = `rotate(${this.degree.toString()}deg)`;
    },
    init() {
      this.calcSpinnerTopAndLeft();
      this.startRotate();
    },
    getRotateDuration() {
      const durationValue = this.$props["duration"];
      const durationNumber = parseInt(durationValue.toString());
      return durationNumber > 0 ? durationNumber : 1200;
    },
    getRotateStep() {
      return 360 * 16 / this.getRotateDuration();
    },
    startRotate() {
      if (!this.show || this.animationFrame > 0) {
        return null;
      }
      this.animationFrame = setInterval(() => {
        this.rotateLoader();
      }, 16);
    },
    stopRotate() {
      if (this.animationFrame > 0) {
        clearInterval(this.animationFrame);
        this.animationFrame = 0;
      }
    },
    calculateSquareRadius(sideLength) {
      const diagonalLength = Math.sqrt(sideLength * sideLength + sideLength * sideLength);
      const radius = diagonalLength / 2;
      return radius;
    },
    // 因为uni-app-x不支持:before所以实现Spinner得用JS计算坐标
    calcSpinnerTopAndLeft() {
      this.array12.forEach((ele, index) => {
        const angle = index * (360 / 12);
        const angleRad = angle * (Math.PI / 180);
        const banjing = this.calculateSquareRadius(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(parseInt(this.$props["size"].toString()) * 2)));
        const xOffset = banjing * Math.cos(angleRad);
        const yOffset = banjing * Math.sin(angleRad);
        this.spinnerStyle[index]["left"] = `${Math.round(45 + xOffset).toString()}%`;
        this.spinnerStyle[index]["top"] = `${Math.round(34 + yOffset).toString()}%`;
      });
    }
  }
});
const __injectCSSVars__ = () => {
  common_vendor.useCssVars((_ctx = null) => {
    return new UTSJSONObject({
      "31cef3a4": _ctx.size
    });
  });
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: !$data.webviewHide
  }, !$data.webviewHide ? common_vendor.e({
    c: _ctx.mode === "spinner"
  }, _ctx.mode === "spinner" ? {
    d: common_vendor.f($data.array12, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.s($data.spinnerStyle[index]),
        c: common_vendor.s($options.getSpinnerDotStyle(index))
      };
    })
  } : {}, {
    e: common_vendor.sei("r0-41713c06", "view", "ani"),
    f: common_vendor.n(`up-loading-icon__spinner--${_ctx.mode}`),
    g: $data.transform,
    h: $options.addUnit(_ctx.size),
    i: $options.addUnit(_ctx.size),
    j: _ctx.color,
    k: $options.otherBorderColor,
    l: $options.otherBorderColor,
    m: $options.otherBorderColor
  }) : {}, {
    n: _ctx.text != ""
  }, _ctx.text != "" ? {
    o: common_vendor.t(_ctx.text),
    p: $options.addUnit(_ctx.textSize),
    q: _ctx.textColor
  } : {}, {
    r: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    s: common_vendor.s($options.addStyle(_ctx.customStyle)),
    t: common_vendor.s(_ctx.__cssVars()),
    v: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    w: common_vendor.n(_ctx.vertical ? "up-loading-icon--vertical" : ""),
    x: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(__default__, [["render", _sfc_render], ["__scopeId", "data-v-41713c06"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js.map
