import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/loadingIcon&";
import { a as addUnit, b as addStyle, g as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { c as colorGradient } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/colorGradient&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, onBeforeUnmount } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-loading-icon"
  },
  __name: "up-loading-icon",
  props: {
    show: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#909193"
    },
    textColor: {
      type: String,
      default: "#909193"
    },
    vertical: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: "spinner"
    },
    size: {
      type: [String, Number],
      default: "24"
    },
    textSize: {
      type: [String, Number],
      default: "15"
    },
    text: {
      type: [String, Number],
      default: ""
    },
    timingFunction: {
      type: String,
      default: "ease-in-out"
    },
    duration: {
      type: [String, Number],
      default: 1200
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const array12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const webviewHide = ref(false);
    const degree = ref(0);
    const transform = ref("");
    const spinnerStyle = ref([
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" })
    ]);
    let animationFrame = 0;
    const otherBorderColor = computed(() => {
      const lightColor = colorGradient(props.color, "#ffffff", 100)[80];
      if (props.mode === "circle") {
        return props.inactiveColor != "" ? props.inactiveColor : lightColor;
      } else {
        return "transparent";
      }
    });
    function getSpinnerDotStyle(index) {
      const style = new UTSJSONObject({});
      style["backgroundColor"] = props.color;
      style["transform"] = `rotate(${((index + 1) * 30).toString()}deg)`;
      style["opacity"] = 1 - 0.0625 * index;
      return style;
    }
    function getRotateDuration() {
      const durationNumber = parseInt(props.duration.toString());
      return durationNumber > 0 ? durationNumber : 1200;
    }
    function getRotateStep() {
      return 360 * 16 / getRotateDuration();
    }
    function rotateLoader() {
      degree.value = (degree.value + getRotateStep()) % 360;
      transform.value = `rotate(${degree.value.toString()}deg)`;
    }
    function startRotate() {
      if (!props.show || animationFrame > 0) {
        return null;
      }
      animationFrame = setInterval(() => {
        rotateLoader();
      }, 16);
    }
    function stopRotate() {
      if (animationFrame > 0) {
        clearInterval(animationFrame);
        animationFrame = 0;
      }
    }
    function calculateSquareRadius(sideLength) {
      const diagonalLength = Math.sqrt(sideLength * sideLength + sideLength * sideLength);
      return diagonalLength / 2;
    }
    function calcSpinnerTopAndLeft() {
      array12.forEach((_ele, index) => {
        const angle = index * (360 / 12);
        const angleRad = angle * (Math.PI / 180);
        const banjing = calculateSquareRadius(parseInt(getPx(parseInt(props.size.toString()) * 2)));
        const xOffset = banjing * Math.cos(angleRad);
        const yOffset = banjing * Math.sin(angleRad);
        spinnerStyle.value[index]["left"] = `${Math.round(45 + xOffset).toString()}%`;
        spinnerStyle.value[index]["top"] = `${Math.round(34 + yOffset).toString()}%`;
      });
    }
    function init() {
      calcSpinnerTopAndLeft();
      startRotate();
    }
    watch(() => {
      return props.show;
    }, (nVal) => {
      if (nVal) {
        startRotate();
      } else {
        stopRotate();
      }
    });
    onMounted(() => {
      init();
    });
    onBeforeUnmount(() => {
      stopRotate();
    });
    const __returned__ = { props, array12, webviewHide, degree, transform, spinnerStyle, get animationFrame() {
      return animationFrame;
    }, set animationFrame(v) {
      animationFrame = v;
    }, otherBorderColor, getSpinnerDotStyle, getRotateDuration, getRotateStep, rotateLoader, startRotate, stopRotate, calculateSquareRadius, calcSpinnerTopAndLeft, init, get addUnit() {
      return addUnit;
    }, get addStyle() {
      return addStyle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-loading-icon": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "up-loading-icon__text": { "": { "marginLeft": 4, "color": "#606266", "fontSize": 14, "lineHeight": "20px" } }, "up-loading-icon__spinner": { "": { "width": 30, "height": 30, "position": "relative", "boxSizing": "border-box" } }, "up-loading-icon__spinner--semicircle": { "": { "borderTopWidth": 2, "borderRightWidth": 2, "borderBottomWidth": 2, "borderLeftWidth": 2, "borderTopColor": "rgba(0,0,0,0)", "borderRightColor": "rgba(0,0,0,0)", "borderBottomColor": "rgba(0,0,0,0)", "borderLeftColor": "rgba(0,0,0,0)", "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-loading-icon__spinner--circle": { "": { "borderTopRightRadius": 100, "borderTopLeftRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "borderTopWidth": 2, "borderRightWidth": 2, "borderBottomWidth": 2, "borderLeftWidth": 2, "borderTopColor": "#e5e5e5", "borderRightColor": "#e5e5e5", "borderBottomColor": "#e5e5e5", "borderLeftColor": "#e5e5e5", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "up-loading-icon--vertical": { "": { "flexDirection": "column" } }, "up-loading-icon__dot": { "": { "position": "absolute", "width": 2, "height": "25%", "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } } };
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass, toDisplayString: _toDisplayString } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show ? (_openBlock(), _createElementBlock(
    "view",
    {
      key: 0,
      class: _normalizeClass(["up-loading-icon", [$props.vertical ? "up-loading-icon--vertical" : ""]]),
      style: _normalizeStyle([$setup.addStyle($props.customStyle)])
    },
    [
      !$setup.webviewHide ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 0,
          class: _normalizeClass(["up-loading-icon__spinner", [`up-loading-icon__spinner--${$props.mode}`]]),
          ref: "ani",
          style: _normalizeStyle({
            transform: $setup.transform,
            width: $setup.addUnit($props.size),
            height: $setup.addUnit($props.size),
            borderTopColor: $props.color,
            borderBottomColor: $setup.otherBorderColor,
            borderLeftColor: $setup.otherBorderColor,
            borderRightColor: $setup.otherBorderColor
          })
        },
        [
          $props.mode === "spinner" ? (_openBlock(), _createElementBlock(
            _Fragment,
            { key: 0 },
            _renderList($setup.array12, (item, index) => {
              return _createElementVNode(
                "view",
                {
                  key: index,
                  class: "up-loading-icon__dot",
                  style: _normalizeStyle([$setup.spinnerStyle[index], $setup.getSpinnerDotStyle(index)])
                },
                null,
                4
                /* STYLE */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          )) : _createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )) : _createCommentVNode("v-if", true),
      $props.text != "" ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 1,
          class: "up-loading-icon__text",
          style: _normalizeStyle({
            fontSize: $setup.addUnit($props.textSize),
            color: $props.textColor
          })
        },
        _toDisplayString($props.text),
        5
        /* TEXT, STYLE */
      )) : _createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  )) : _createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-loading-icon.js.map
