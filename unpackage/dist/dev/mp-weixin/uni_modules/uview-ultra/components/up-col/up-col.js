"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCol_col = require("./col.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  namne: "up-col"
}, { __name: "up-col", props: {
  // 占父容器宽度的多少等分，总分为12份
  span: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCol_col.defProps.getNumber("col.span")
  },
  // 指定栅格左侧的间隔数(总12栏)
  offset: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upCol_col.defProps.getNumber("col.offset")
  },
  // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
  justify: {
    type: String,
    default: uni_modules_uviewUltra_components_upCol_col.defProps.getString("col.justify")
  },
  // 垂直对齐方式，可选值为top、center、bottom、stretch
  align: {
    type: String,
    default: uni_modules_uviewUltra_components_upCol_col.defProps.getString("col.align")
  },
  // 文字对齐方式
  textAlign: {
    type: String,
    default: uni_modules_uviewUltra_components_upCol_col.defProps.getString("col.textAlign")
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(new common_vendor.UTSJSONObject({
    gutter: 0
  })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance().proxy;
  const width = common_vendor.ref(0);
  const gridNum = common_vendor.ref(12);
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
  const colStyle = common_vendor.computed(() => {
    let pct = 100 / gridNum.value * parseInt(props.span.toString());
    const style = new common_vendor.UTSJSONObject({
      // 这里写成"padding: 0 10px"的形式是因为nvue的需要
      // @ts-ignore
      paddingLeft: uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(parentData.value["gutter"].toString())) / 2),
      // @ts-ignore
      paddingRight: uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(parentData.value["gutter"].toString())) / 2),
      alignItems: uAlignItem.value,
      // @ts-ignore
      justifyContent: uJustify.value,
      flex: `0 0 ${pct.toString()}%`,
      // @ts-ignore
      marginLeft: (100 / 12 * parseInt(props.offset.toString())).toString() + "%"
    });
    return style;
  });
  const updateParentData = () => {
    getParentData("up-row", instance, false);
  };
  const init = () => {
    var _a2;
    updateParentData();
    let promise = (_a2 = parent.value) === null || _a2 === void 0 ? null : _a2.$callMethod("getComponentWidth");
    if (promise != null) {
      promise.then((widthTmp = null) => {
        if (widthTmp != null) {
          width.value = parseInt(widthTmp.toString());
        }
      });
    }
  };
  const clickHandler = (e = null) => {
    emit("click");
  };
  init();
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-d224e10f"), "view", "up-col"),
      b: common_vendor.n("up-col-" + __props.span),
      c: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      d: common_vendor.s(colStyle.value),
      e: common_vendor.s(_ctx.$upAddStyle(_ctx.customStyle)),
      f: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      g: common_vendor.o(clickHandler, "a2")
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d224e10f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-col/up-col.js.map
