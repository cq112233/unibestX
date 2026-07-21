import { p as propsLoadicon } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { b as addStyle, a as addUnit, f as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { c as colorGradient } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/colorGradient&";
const { defineComponent, useCssVars, openBlock, createElementBlock, normalizeClass, normalizeStyle, Fragment, renderList, createCommentVNode, toDisplayString } = globalThis.Vue
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const __default__ = defineComponent({
  name: "up-loading-icon",
  mixins: [mpMixin, mixin, propsLoadicon],
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
      const lightColor = colorGradient(this.color, "#ffffff", 100)[80];
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
      return addStyle(val);
    },
    addUnit(val = null) {
      return addUnit(val);
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
        const banjing = this.calculateSquareRadius(parseInt(getPx(parseInt(this.$props["size"].toString()) * 2)));
        const xOffset = banjing * Math.cos(angleRad);
        const yOffset = banjing * Math.sin(angleRad);
        this.spinnerStyle[index]["left"] = `${Math.round(45 + xOffset).toString()}%`;
        this.spinnerStyle[index]["top"] = `${Math.round(34 + yOffset).toString()}%`;
      });
    }
  }
});
const __injectCSSVars__ = () => {
  useCssVars((_ctx = null) => {
    return new UTSJSONObject({
      "41713c06-size": _ctx.size
    });
  });
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-loading-icon": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "up-loading-icon__text": { "": { "marginLeft": 4, "color": "#606266", "fontSize": 14, "lineHeight": "20px", "display:empty": "none" }, ".up-loading-icon--vertical ": { "marginTop": 6, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "color": "#606266" } }, "up-loading-icon__spinner": { "": { "width": 30, "height": 30, "position": "relative", "boxSizing": "border-box" } }, "up-loading-icon__spinner--semicircle": { "": { "borderTopWidth": 2, "borderRightWidth": 2, "borderBottomWidth": 2, "borderLeftWidth": 2, "borderTopColor": "rgba(0,0,0,0)", "borderRightColor": "rgba(0,0,0,0)", "borderBottomColor": "rgba(0,0,0,0)", "borderLeftColor": "rgba(0,0,0,0)", "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-loading-icon__spinner--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderTopWidth": 2, "borderRightWidth": 2, "borderBottomWidth": 2, "borderLeftWidth": 2, "borderTopColor": "#e5e5e5", "borderRightColor": "#e5e5e5", "borderBottomColor": "#e5e5e5", "borderLeftColor": "#e5e5e5", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-loading-icon--vertical": { "": { "flexDirection": "column" } }, "up-loading-icon__dot": { "": { "position": "absolute", "width": 2, "height": "25%", "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: normalizeClass(["up-loading-icon", [_ctx.vertical ? "up-loading-icon--vertical" : ""]]),
      style: normalizeStyle([$options.addStyle(_ctx.customStyle)])
    },
    [
      !$data.webviewHide ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["up-loading-icon__spinner", [`up-loading-icon__spinner--${_ctx.mode}`]]),
          ref: "ani",
          style: normalizeStyle({
            transform: $data.transform,
            width: $options.addUnit(_ctx.size),
            height: $options.addUnit(_ctx.size),
            borderTopColor: _ctx.color,
            borderBottomColor: $options.otherBorderColor,
            borderLeftColor: $options.otherBorderColor,
            borderRightColor: $options.otherBorderColor
            // 'animation-duration': `${duration}ms`,
            // 'animation-timing-function': (mode === 'semicircle' || mode === 'circle') ? timingFunction : ''
          })
        },
        [
          _ctx.mode === "spinner" ? (openBlock(true), createElementBlock(
            Fragment,
            { key: 0 },
            renderList($data.array12, (item, index) => {
              return openBlock(), createElementBlock(
                "view",
                {
                  key: index,
                  class: "up-loading-icon__dot",
                  style: normalizeStyle([$data.spinnerStyle[index], $options.getSpinnerDotStyle(index)])
                },
                null,
                4
                /* STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      _ctx.text != "" ? (openBlock(), createElementBlock(
        "text",
        {
          key: 1,
          class: "up-loading-icon__text",
          style: normalizeStyle({
            fontSize: $options.addUnit(_ctx.textSize),
            color: _ctx.textColor
          })
        },
        toDisplayString(_ctx.text),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(__default__, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-loading-icon.js.map
