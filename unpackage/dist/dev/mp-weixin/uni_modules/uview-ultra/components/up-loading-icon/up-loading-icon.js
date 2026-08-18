"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./loadingIcon.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_colorGradient = require("../../libs/function/colorGradient.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-loading-icon"
}, { __name: "up-loading-icon", props: {
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
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props) {
  const props = __props;
  const array12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const webviewHide = common_vendor.ref(false);
  const degree = common_vendor.ref(0);
  const transform = common_vendor.ref("");
  const spinnerItemsStyle = common_vendor.ref([
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" }),
    new common_vendor.UTSJSONObject({ left: "0", top: "0" })
  ]);
  let animationFrame = 0;
  const otherBorderColor = common_vendor.computed(() => {
    if (props.inactiveColor != "") {
      return props.inactiveColor;
    }
    if (props.mode == "circle") {
      if (props.color.startsWith("#")) {
        const gradient = uni_modules_uviewUltra_libs_function_colorGradient.colorGradient(props.color, "#ffffff", 100);
        if (gradient.length > 80) {
          return gradient[80];
        }
      }
      return "#e5e5e5";
    } else {
      return "transparent";
    }
  });
  const customLoadingIconStyle = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
  });
  const spinnerStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      transform: transform.value,
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.size),
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.size),
      borderTopColor: props.color,
      borderBottomColor: otherBorderColor.value,
      borderLeftColor: otherBorderColor.value,
      borderRightColor: otherBorderColor.value
    });
  });
  const textStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.textSize),
      color: props.textColor
    });
  });
  function getSpinnerDotStyle(index) {
    const style = new common_vendor.UTSJSONObject({});
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
      const banjing = calculateSquareRadius(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(parseInt(props.size.toString()) * 2)));
      const xOffset = banjing * Math.cos(angleRad);
      const yOffset = banjing * Math.sin(angleRad);
      spinnerItemsStyle.value[index]["left"] = `${Math.round(45 + xOffset).toString()}%`;
      spinnerItemsStyle.value[index]["top"] = `${Math.round(34 + yOffset).toString()}%`;
    });
  }
  function init() {
    calcSpinnerTopAndLeft();
    startRotate();
  }
  common_vendor.watch(() => {
    return props.show;
  }, (nVal) => {
    if (nVal) {
      startRotate();
    } else {
      stopRotate();
    }
  });
  common_vendor.onMounted(() => {
    init();
  });
  common_vendor.onBeforeUnmount(() => {
    stopRotate();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.show
    }, __props.show ? common_vendor.e({
      b: !webviewHide.value
    }, !webviewHide.value ? common_vendor.e({
      c: __props.mode === "spinner"
    }, __props.mode === "spinner" ? {
      d: common_vendor.f(array12, (item, index, i0) => {
        return {
          a: index,
          b: common_vendor.s(getSpinnerDotStyle(index))
        };
      })
    } : {}, {
      e: common_vendor.sei("r0-41713c06", "view", "ani"),
      f: common_vendor.n(`up-loading-icon__spinner--${__props.mode}`),
      g: common_vendor.s(spinnerStyle.value)
    }) : {}, {
      h: __props.text != ""
    }, __props.text != "" ? {
      i: common_vendor.t(__props.text),
      j: common_vendor.s(textStyle.value)
    } : {}, {
      k: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      l: common_vendor.s(customLoadingIconStyle.value),
      m: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      n: common_vendor.n(__props.vertical ? "up-loading-icon--vertical" : ""),
      o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-41713c06"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js.map
