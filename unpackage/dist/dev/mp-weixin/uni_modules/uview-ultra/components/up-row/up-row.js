"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upRow_row = require("./row.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-row"
}, { __name: "up-row", props: {
  // 栅格间隔，左右各为此值的一半，单位px
  gutter: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upRow_row.defProps.getNumber("row.gutter")
  },
  // 水平排列方式(微信小程序暂不支持) 可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
  justify: {
    type: String,
    default: uni_modules_uviewUltra_components_upRow_row.defProps.getNumber("row.justify")
  },
  // 垂直排列方式
  align: {
    type: String,
    default: uni_modules_uviewUltra_components_upRow_row.defProps.getNumber("row.align")
  }
}, emits: ["click"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI().children;
  const props = __props;
  const emit = __emit;
  const uJustify = common_vendor.computed(() => {
    if (props.justify == "end" || props.justify == "start")
      return "flex-" + props.justify;
    else if (props.justify == "around" || props.justify == "between")
      return "space-" + props.justify;
    else
      return props.justify;
  });
  const uAlignItem = common_vendor.computed(() => {
    if (props.align == "top")
      return "flex-start";
    if (props.align == "bottom")
      return "flex-end";
    else
      return props.align;
  });
  const rowStyle = common_vendor.computed(() => {
    const style = new UTSJSONObject(
      {
        alignItems: uAlignItem.value,
        justifyContent: uJustify.value
      }
      // 通过给up-row左右两边的负外边距，消除up-col在有gutter时，第一个和最后一个元素的左内边距和右内边距造成的影响
    );
    if (props.gutter != "") {
      style["marginLeft"] = uni_modules_uviewUltra_libs_function_index.addUnit((0 - parseInt(props.gutter.toString())) / 2);
      style["marginRight"] = uni_modules_uviewUltra_libs_function_index.addUnit((0 - parseInt(props.gutter.toString())) / 2);
    }
    return style;
  });
  const clickHandler = (e = null) => {
    emit("click");
  };
  const getComponentWidth = () => {
    return new Promise((resolve) => {
      uni_modules_uviewUltra_libs_function_index.sleep().then(() => {
        uni_modules_uviewUltra_libs_function_index.upGetRect(".up-row").then((res = null) => {
          let node = res;
          resolve(node.width != null ? node.width : 0);
        });
      });
    });
  };
  const getProps = function() {
    return new UTSJSONObject({
      gutter: props.gutter,
      justify: props.justify,
      align: props.align
    });
  };
  const getRefs = function() {
    return new UTSJSONObject({});
  };
  __expose({
    getComponentWidth,
    getProps,
    getRefs
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-735d8a8c"), "view", "up-row"),
      b: common_vendor.s(rowStyle.value),
      c: common_vendor.s(_ctx.$upAddStyle(props.customStyle)),
      d: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      e: common_vendor.o(clickHandler, "b9"),
      f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-735d8a8c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-row/up-row.js.map
