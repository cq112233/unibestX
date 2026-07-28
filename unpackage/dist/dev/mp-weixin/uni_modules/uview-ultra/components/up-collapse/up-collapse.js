"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upCollapse_collapse = require("./collapse.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
if (!Array) {
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  _easycom_up_line_1();
}
const _easycom_up_line = () => "../up-line/up-line.js";
if (!Math) {
  _easycom_up_line();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-collapse"
}, { __name: "up-collapse", props: {
  value: {
    type: [String, Number, Array],
    default: () => {
      return uni_modules_uviewUltra_components_upCollapse_collapse.defProps.getString("collapse.value");
    }
  },
  accordion: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCollapse_collapse.defProps.getBoolean("collapse.accordion")
  },
  border: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upCollapse_collapse.defProps.getBoolean("collapse.border")
  }
}, emits: ["change", "open", "close"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
  common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const emit = __emit;
  const parentDataSelf = common_vendor.computed(() => {
    return new UTSJSONObject({
      accordion: props.accordion,
      border: props.border,
      value: props.value
    });
  });
  const init = function() {
    var _a2;
    (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
      child === null || child === void 0 ? null : child.$callMethod("init");
    });
  };
  const onChange = function(target) {
    var _a2;
    const changeArr = [];
    (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child, index) => {
      let childState = child.$callMethod("getInternalState");
      if (props.accordion) {
        if (child !== target) {
          child.$callMethod("setContentAnimate", false);
        }
      }
      if (child === target) {
        child.$callMethod("setContentAnimate", !childState["expanded"]);
      }
      changeArr.push(new UTSJSONObject({
        // 如果没有定义name属性，则默认返回组件的index索引
        name: childState["name"] != null ? childState["name"].toString() : index.toString(),
        status: childState["expanded"] ? "open" : "close"
      }));
    });
    emit("change", changeArr);
    let trgetState = target.$callMethod("getInternalState");
    const expand = trgetState["expanded"];
    emit(expand ? "open" : "close", trgetState["name"] != null ? trgetState["name"] : "");
  };
  common_vendor.watch(parentDataSelf, () => {
    init();
  }, { deep: true });
  const getProps = function() {
    return parentDataSelf.value;
  };
  const getRefs = function() {
    return new UTSJSONObject({});
  };
  __expose({
    onChange,
    getChildren,
    addChild,
    getProps,
    getRefs
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.border
    }, __props.border ? {
      b: common_vendor.p({
        class: "data-v-538e5810"
      })
    } : {}, {
      c: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      d: `${_ctx.u_s_b_h}px`,
      e: `${_ctx.u_s_a_i_b}px`,
      f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-538e5810"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-collapse/up-collapse.js.map
