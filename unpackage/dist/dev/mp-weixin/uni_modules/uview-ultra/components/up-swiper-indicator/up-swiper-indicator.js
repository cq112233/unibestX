"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./swipterIndicator.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-swiper-indicator"
}, { __name: "up-swiper-indicator", props: {
  length: {
    type: [String, Number],
    default: 0
  },
  current: {
    type: [String, Number],
    default: 0
  },
  indicatorActiveColor: {
    type: String,
    default: "#FFFFFF"
  },
  indicatorInactiveColor: {
    type: String,
    default: "rgba(255, 255, 255, 0.35)"
  },
  indicatorMode: {
    type: String,
    default: "line"
  }
}, setup(__props) {
  const props = __props;
  const lineWidth = common_vendor.ref(22);
  const lengthArray = common_vendor.computed(() => {
    const list = [];
    const len = parseInt(props.length.toString());
    for (let index = 0; index < len; index++) {
      list.push(index.toString());
    }
    return list;
  });
  const lineStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(lineWidth.value);
    style["transform"] = `translateX(${uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(props.current.toString()) * lineWidth.value)})`;
    style["backgroundColor"] = props.indicatorActiveColor;
    return style;
  });
  function dotStyle(index) {
    const style = new common_vendor.UTSJSONObject({});
    style["backgroundColor"] = index === parseInt(props.current.toString()) ? props.indicatorActiveColor : props.indicatorInactiveColor;
    return style;
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.indicatorMode === "line"
    }, __props.indicatorMode === "line" ? {
      b: common_vendor.s(lineStyle.value),
      c: common_vendor.n(`up-swiper-indicator__wrapper--${__props.indicatorMode}`),
      d: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(lineWidth.value * parseInt(__props.length.toString())),
      e: __props.indicatorInactiveColor
    } : {}, {
      f: __props.indicatorMode === "dot"
    }, __props.indicatorMode === "dot" ? {
      g: common_vendor.f(lengthArray.value, (item, index, i0) => {
        return {
          a: index,
          b: common_vendor.n(index === parseInt(__props.current.toString()) ? "up-swiper-indicator__wrapper__dot--active" : ""),
          c: common_vendor.s(dotStyle(index))
        };
      })
    } : {}, {
      h: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      i: `${_ctx.u_s_b_h}px`,
      j: `${_ctx.u_s_a_i_b}px`,
      k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-12d3926a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator.js.map
