"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useMp.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upGrid_grid = require("./grid.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-grid"
}, { __name: "up-grid", props: {
  col: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upGrid_grid.defProps.getNumber("grid.col")
  },
  border: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upGrid_grid.defProps.getBoolean("grid.border")
  },
  align: {
    type: String,
    default: uni_modules_uviewUltra_components_upGrid_grid.defProps.getString("grid.align")
  }
}, emits: ["click"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const width = common_vendor.ref(0);
  const parentDataCpu = common_vendor.computed(() => {
    return new UTSJSONObject({
      col: props.col,
      border: props.border,
      align: props.align
    });
  });
  const gridStyle = common_vendor.computed(() => {
    let style = new UTSJSONObject({});
    switch (props.align) {
      case "left":
        style["justifyContent"] = "flex-start";
        break;
      case "center":
        style["justifyContent"] = "center";
        break;
      case "right":
        style["justifyContent"] = "flex-end";
        break;
      default:
        style["justifyContent"] = "flex-start";
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(new UTSJSONObject({})));
  });
  const getWidth = () => {
    uni_modules_uviewUltra_libs_function_index.upGetRect(`.up-grid`, false, instance).then((size) => {
      if (size.width != null) {
        width.value = size.width;
      }
    });
  };
  const childClick = (name = null) => {
    emit("click", name);
  };
  common_vendor.watch(parentDataCpu, () => {
    if (children.value.length > 0) {
      children.value.map((child) => {
        child.$callMethod("updateParentData", instance);
      });
    }
  });
  common_vendor.onMounted(() => {
    getWidth();
  });
  const getProps = function() {
    return parentDataCpu.value;
  };
  const getRefs = function() {
    return new UTSJSONObject({
      width: width.value
    });
  };
  __expose({
    childClick,
    getChildren,
    addChild,
    children,
    getProps,
    getRefs
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-988beb47"), "view", "up-grid"),
      b: common_vendor.s(gridStyle.value),
      c: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-988beb47"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-grid/up-grid.js.map
