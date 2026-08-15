"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-card"
}, { __name: "up-card", props: {
  full: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  },
  titleColor: {
    type: String,
    default: "#303133"
  },
  titleSize: {
    type: [Number, String],
    default: 15
  },
  subTitle: {
    type: String,
    default: ""
  },
  subTitleColor: {
    type: String,
    default: "#909193"
  },
  subTitleSize: {
    type: [Number, String],
    default: 12
  },
  border: {
    type: Boolean,
    default: true
  },
  index: {
    type: [Number, String, Object],
    default: ""
  },
  margin: {
    type: String,
    default: "15px"
  },
  borderRadius: {
    type: [Number, String],
    default: 8
  },
  headStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  bodyStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  footStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  headBorderBottom: {
    type: Boolean,
    default: true
  },
  footBorderTop: {
    type: Boolean,
    default: true
  },
  thumb: {
    type: String,
    default: ""
  },
  thumbWidth: {
    type: [String, Number],
    default: 30
  },
  thumbCircle: {
    type: Boolean,
    default: false
  },
  padding: {
    type: [String, Number],
    default: 15
  },
  paddingHead: {
    type: [String, Number],
    default: ""
  },
  paddingBody: {
    type: [String, Number],
    default: ""
  },
  paddingFoot: {
    type: [String, Number],
    default: ""
  },
  showHead: {
    type: Boolean,
    default: true
  },
  showFoot: {
    type: Boolean,
    default: true
  },
  boxShadow: {
    type: String,
    default: "none"
  }
}, emits: ["click", "head-click", "body-click", "foot-click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const realThumb = common_vendor.computed(() => {
    return props.thumb;
  });
  const hasBorderRadius = common_vendor.computed(() => {
    const pxStr = uni_modules_uviewUltra_libs_function_index.getPx(props.borderRadius);
    return parseFloat(pxStr) > 0;
  });
  const cardStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      borderRadius: uni_modules_uviewUltra_libs_function_index.addUnit(props.borderRadius),
      margin: props.margin,
      boxShadow: props.boxShadow
    });
  });
  const headPaddingStyle = common_vendor.computed(() => {
    const padVal = props.paddingHead != "" ? props.paddingHead : props.padding;
    return new common_vendor.UTSJSONObject({ padding: uni_modules_uviewUltra_libs_function_index.addUnit(padVal) });
  });
  const thumbStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.thumbWidth),
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.thumbWidth),
      borderRadius: props.thumbCircle ? "50px" : "4px"
    });
  });
  const titleStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.titleSize),
      color: props.titleColor
    });
  });
  const subTitleStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.subTitleSize),
      color: props.subTitleColor
    });
  });
  const bodyPaddingStyle = common_vendor.computed(() => {
    const padVal = props.paddingBody != "" ? props.paddingBody : props.padding;
    return new common_vendor.UTSJSONObject({ padding: uni_modules_uviewUltra_libs_function_index.addUnit(padVal) });
  });
  const footPaddingStyle = common_vendor.computed(() => {
    const padVal = props.paddingFoot != "" ? props.paddingFoot : props.padding;
    return new common_vendor.UTSJSONObject({ padding: uni_modules_uviewUltra_libs_function_index.addUnit(padVal) });
  });
  const emit = __emit;
  const click = () => {
    emit("click", props.index);
  };
  const headClick = () => {
    emit("head-click", props.index);
  };
  const bodyClick = () => {
    emit("body-click", props.index);
  };
  const footClick = () => {
    emit("foot-click", props.index);
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.showHead
    }, __props.showHead ? common_vendor.e({
      b: _ctx.$slots["head"] == null
    }, _ctx.$slots["head"] == null ? common_vendor.e({
      c: __props.title != ""
    }, __props.title != "" ? common_vendor.e({
      d: realThumb.value != ""
    }, realThumb.value != "" ? {
      e: realThumb.value,
      f: common_vendor.s(thumbStyle.value)
    } : {}, {
      g: common_vendor.t(__props.title),
      h: common_vendor.s(titleStyle.value)
    }) : {}, {
      i: __props.subTitle != ""
    }, __props.subTitle != "" ? {
      j: common_vendor.t(__props.subTitle),
      k: common_vendor.s(subTitleStyle.value)
    } : {}) : {}, {
      l: common_vendor.s(headPaddingStyle.value),
      m: common_vendor.s(__props.headStyle ?? {}),
      n: __props.headBorderBottom ? 1 : "",
      o: common_vendor.o(headClick, "fb")
    }) : {}, {
      p: common_vendor.o(bodyClick, "e4"),
      q: common_vendor.s(bodyPaddingStyle.value),
      r: common_vendor.s(__props.bodyStyle ?? {}),
      s: __props.showFoot
    }, __props.showFoot ? {
      t: common_vendor.o(footClick, "a3"),
      v: common_vendor.s(footPaddingStyle.value),
      w: common_vendor.s(__props.footStyle ?? {}),
      x: __props.footBorderTop ? 1 : ""
    } : {}, {
      y: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      z: common_vendor.o(click, "75"),
      A: __props.border ? 1 : "",
      B: __props.full ? 1 : "",
      C: hasBorderRadius.value ? 1 : "",
      D: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      E: common_vendor.s(cardStyle.value),
      F: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0708942b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-card/up-card.js.map
