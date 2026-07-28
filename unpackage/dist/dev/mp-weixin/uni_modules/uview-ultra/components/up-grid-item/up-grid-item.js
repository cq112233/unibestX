"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useMp.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upGridItem_gridItem = require("./gridItem.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-grid-item"
}, { __name: "up-grid-item", props: {
  name: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upGridItem_gridItem.defProps.getArray("grid-item.name")
  },
  bgColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upGridItem_gridItem.defProps.getString("grid-item.bgColor")
  }
}, emits: ["click"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(new UTSJSONObject({
    col: 0,
    border: true,
    width: 0
  })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const width = common_vendor.ref("");
  const classes = common_vendor.ref("");
  const parentCol = common_vendor.computed(() => {
    if (parentData.value["col"] != null) {
      return parseInt(parentData.value["col"].toString());
    }
    return 0;
  });
  const itemStyle = common_vendor.computed(() => {
    const style = new UTSJSONObject({
      background: props.bgColor
    });
    style["width"] = width.value;
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(new UTSJSONObject({})));
  });
  const clickHandler = () => {
    var _a2, _b2;
    let name = props.name;
    let children = (_a2 = parent.value) === null || _a2 === void 0 ? null : _a2.$callMethod("getChildren");
    if (children == null) {
      children = (_b2 = parent.value) === null || _b2 === void 0 ? null : _b2.$data["children"];
    }
    const finalChildren = children != null ? children : [];
    if (props.name === null) {
      name = finalChildren.findIndex((child) => {
        return child === instance;
      });
    }
    parent.value.$callMethod("childClick", name);
    emit("click", name);
  };
  const getItemWidth = () => {
    let widthVal = "";
    if (parent.value != null) {
      let parentRefs = parent.value.$callMethod("getRefs");
      const parentWidth = parseFloat(parentRefs["width"].toString());
      widthVal = (parentWidth / parseInt(parentData.value["col"].toString())).toString() + "px";
    }
    width.value = widthVal;
  };
  const gridItemClasses = () => {
    if (parentData.value["border"]) {
      let classList = [];
      if (parent.value != null) {
        let childrenPat = parent.value.$callMethod("getChildren");
        childrenPat.map((child, index) => {
          let parentCol2 = parseInt(parentData.value["col"].toString());
          if (instance === child && parentCol2 > 0) {
            const len = childrenPat.length;
            if ((index + 1) % parentCol2 != 0 && index + 1 != len) {
              classList.push("up-border-right");
            }
            const lessNum = len % parentCol2 == 0 ? parentCol2 : len % parentCol2;
            if (index < len - lessNum) {
              classList.push("up-border-bottom");
            }
          }
        });
      }
      classes.value = classList;
    }
  };
  const init = () => {
    getParentData("up-grid", instance, false);
    common_vendor.nextTick$1(() => {
      getItemWidth();
    });
    common_vendor.index.$emit("$upGridItem");
    gridItemClasses();
  };
  common_vendor.onMounted(() => {
    init();
  });
  common_vendor.onUnmounted(() => {
    common_vendor.index.$off("$upGridItem");
  });
  __expose({
    gridItemClasses
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: parentCol.value > 0
    }, parentCol.value > 0 ? {
      b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      c: common_vendor.o(clickHandler, "f6"),
      d: common_vendor.n(classes.value),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      f: common_vendor.s(itemStyle.value),
      g: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    } : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f2829135"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-grid-item/up-grid-item.js.map
