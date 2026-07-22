"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_components_upIndexAnchor_indexAnchor = require("./indexAnchor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-index-anchor"
}, { __name: "up-index-anchor", props: {
  text: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upIndexAnchor_indexAnchor.defProps.getString("indexAnchor.text")
  },
  color: {
    type: String,
    default: uni_modules_uviewUltra_components_upIndexAnchor_indexAnchor.defProps.getString("indexAnchor.color")
  },
  size: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upIndexAnchor_indexAnchor.defProps.getNumber("indexAnchor.size")
  },
  bgColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upIndexAnchor_indexAnchor.defProps.getString("indexAnchor.bgColor")
  },
  height: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upIndexAnchor_indexAnchor.defProps.getNumber("indexAnchor.height")
  }
}, emits: [], setup(__props, _a) {
  _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParent = _b.getParent;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const textName = common_vendor.computed(() => {
    return props.text.toString();
  });
  const parentSticky = common_vendor.computed(() => {
    const indexList = getParent("up-index-list", instance);
    if (parentData.value["sticky"] != null) {
      return indexList != null ? parentData.value["sticky"] : true;
    } else {
      return false;
    }
  });
  const init = function() {
    const indexList = getParent("up-index-list", instance);
    if (indexList == null) {
      return uni_modules_uviewUltra_libs_function_index.error("up-index-anchor必须要搭配up-index-list组件使用");
    }
    if (parent.value != null) {
      parent.value.$callMethod("addAnchors", instance);
    }
    const indexListItem = uni_modules_uviewUltra_libs_function_index.getParentFunc("up-index-item", instance);
    if (indexListItem == null) {
      return uni_modules_uviewUltra_libs_function_index.error("up-index-anchor必须要搭配up-index-item组件使用");
    }
    if (props.text.toString().charCodeAt(0) != null) {
      indexListItem.$callMethod("setId", props.text.toString().charCodeAt(0).toString());
    }
  };
  common_vendor.onMounted(() => {
    init();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.t(textName.value),
      b: _ctx.$up.addUnit(__props.size),
      c: __props.color,
      d: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-93878528"), "view", `up-index-anchor-${textName.value}`),
      e: parentSticky.value ? 1 : "",
      f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      g: `up-index-anchor-${textName.value}`,
      h: common_vendor.s({
        height: _ctx.$up.addUnit(__props.height),
        backgroundColor: __props.bgColor
      }),
      i: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-93878528"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.js.map
