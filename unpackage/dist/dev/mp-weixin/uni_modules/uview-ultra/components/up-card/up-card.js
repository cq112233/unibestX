"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upCard_card = require("./card.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-card"
}, { __name: "up-card", props: {
  // 与屏幕两侧是否留空隙
  full: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getBoolean("card.full")
  },
  // 标题
  title: {
    type: String,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.title")
  },
  // 标题颜色
  titleColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.titleColor")
  },
  // 标题字体大小
  titleSize: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.titleSize")
  },
  // 副标题
  subTitle: {
    type: String,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.subTitle")
  },
  // 副标题颜色
  subTitleColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.subTitleColor")
  },
  // 副标题字体大小
  subTitleSize: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getBoolean("card.subTitleSize")
  },
  // 是否显示外部边框，只对full=false时有效(卡片与边框有空隙时)
  border: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getBoolean("card.border")
  },
  // 用于标识点击了第几个
  index: {
    type: [Number, String, Object],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.index")
  },
  // 用于隔开上下左右的边距，带单位的写法，如："30px 30px"，"20px 20px 30px 30px"
  margin: {
    type: String,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.margin")
  },
  // card卡片的圆角
  borderRadius: {
    type: [Number, String],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.borderRadius")
  },
  // 头部自定义样式，对象形式
  headStyle: {
    type: Object,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getAny("card.headStyle")
  },
  // 主体自定义样式，对象形式
  bodyStyle: {
    type: Object,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getAny("card.bodyStyle")
  },
  // 底部自定义样式，对象形式
  footStyle: {
    type: Object,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getAny("card.footStyle")
  },
  // 头部是否下边框
  headBorderBottom: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getBoolean("card.headBorderBottom")
  },
  // 底部是否有上边框
  footBorderTop: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getBoolean("card.footBorderTop")
  },
  // 标题左边的缩略图
  thumb: {
    type: String,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.thumb")
  },
  // 缩略图宽高
  thumbWidth: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.thumbWidth")
  },
  // 缩略图是否为圆形
  thumbCircle: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getBoolean("card.thumbCircle")
  },
  // 给head，body，foot的内边距
  padding: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.padding")
  },
  paddingHead: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.paddingHead")
  },
  paddingBody: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.paddingBody")
  },
  paddingFoot: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.paddingFoot")
  },
  // 是否显示头部
  showHead: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getBoolean("card.showHead")
  },
  // 是否显示尾部
  showFoot: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getBoolean("card.showFoot")
  },
  // 卡片外围阴影，字符串形式
  boxShadow: {
    type: String,
    default: uni_modules_uviewUltra_components_upCard_card.defProps.getString("card.boxShadow")
  }
}, emits: ["click", "head-click", "body-click", "foot-click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const realThumb = common_vendor.computed(() => {
    if (props.thumb == "")
      return "";
    return props.thumb;
  });
  const hasBorderRadius = common_vendor.computed(() => {
    const pxStr = uni_modules_uviewUltra_libs_function_index.getPx(props.borderRadius);
    return parseFloat(pxStr) > 0;
  });
  const cardStyle = common_vendor.computed(() => {
    return new UTSJSONObject({
      borderRadius: uni_modules_uviewUltra_libs_function_index.addUnit(props.borderRadius),
      margin: props.margin,
      boxShadow: props.boxShadow
    });
  });
  const headPaddingStyle = common_vendor.computed(() => {
    const padVal = props.paddingHead != "" ? props.paddingHead : props.padding;
    return new UTSJSONObject({ padding: uni_modules_uviewUltra_libs_function_index.addUnit(padVal) });
  });
  const thumbStyle = common_vendor.computed(() => {
    return new UTSJSONObject({
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.thumbWidth),
      width: uni_modules_uviewUltra_libs_function_index.addUnit(props.thumbWidth),
      borderRadius: props.thumbCircle ? "50px" : "4px"
    });
  });
  const titleStyle = common_vendor.computed(() => {
    return new UTSJSONObject({
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.titleSize),
      color: props.titleColor
    });
  });
  const subTitleStyle = common_vendor.computed(() => {
    return new UTSJSONObject({
      fontSize: uni_modules_uviewUltra_libs_function_index.addUnit(props.subTitleSize),
      color: props.subTitleColor
    });
  });
  const bodyPaddingStyle = common_vendor.computed(() => {
    const padVal = props.paddingBody != "" ? props.paddingBody : props.padding;
    return new UTSJSONObject({ padding: uni_modules_uviewUltra_libs_function_index.addUnit(padVal) });
  });
  const footPaddingStyle = common_vendor.computed(() => {
    const padVal = props.paddingFoot != "" ? props.paddingFoot : props.padding;
    return new UTSJSONObject({ padding: uni_modules_uviewUltra_libs_function_index.addUnit(padVal) });
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
