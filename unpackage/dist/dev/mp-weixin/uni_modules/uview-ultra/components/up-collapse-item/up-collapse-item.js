"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_cell_1 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  (_easycom_up_icon_1 + _easycom_up_cell_1 + _easycom_up_line_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_cell = () => "../up-cell/up-cell.js";
const _easycom_up_line = () => "../up-line/up-line.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_cell + _easycom_up_line)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-collapse-item"
}, { __name: "up-collapse-item", props: {
  title: {
    type: String,
    default: ""
  },
  value: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  isLink: {
    type: Boolean,
    default: true
  },
  clickable: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: "left"
  },
  name: {
    type: [String, Number],
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  duration: {
    type: [Number, String],
    default: 300
  },
  showRight: {
    type: Boolean,
    default: true
  }
}, setup(__props, _a) {
  var __expose = _a.expose;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
  const instance = common_vendor.getCurrentInstance().proxy;
  const props = __props;
  const timer = common_vendor.ref(0);
  const elId = common_vendor.ref(uni_modules_uviewUltra_libs_function_index.guid());
  const height = common_vendor.ref(0);
  const expanded = common_vendor.ref(false);
  const showBorder = common_vendor.ref(false);
  const animating = common_vendor.ref(false);
  common_vendor.watch(expanded, (n) => {
    clearTimeout(timer.value);
    timer.value = 0;
    timer.value = setTimeout(() => {
      showBorder.value = n;
    }, n ? 10 : 290);
  });
  const titleCpu = common_vendor.computed(() => {
    if ((instance === null || instance === void 0 ? null : instance.$slots["title"]) == null) {
      return props.title.toString();
    } else {
      return "";
    }
  });
  function setContentAnimate(expandedFrom) {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      expanded.value = expandedFrom;
      const rect = yield uni_modules_uviewUltra_libs_function_index.upGetRect(`#${elId.value}`, false, instance);
      height.value = expanded.value ? rect.height == null ? "auto" : rect.height : 0;
      animating.value = true;
      yield uni_modules_uviewUltra_libs_function_index.sleep(parseInt(props.duration.toString()));
      animating.value = false;
    });
  }
  function init() {
    var _a2;
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      getParentData("up-collapse", instance, false);
      if (parent.value == null) {
        return uni_modules_uviewUltra_libs_function_index.error("up-collapse-item必须要搭配up-collapse组件使用");
      }
      let value = (_a2 = parentData.value["value"]) !== null && _a2 !== void 0 ? _a2 : "";
      const accordion = parentData.value["accordion"];
      if (accordion != null && accordion) {
        if (uni_modules_uviewUltra_libs_function_test.array(value)) {
          return uni_modules_uviewUltra_libs_function_index.error("手风琴模式下，up-collapse组件的value参数不能为数组");
        }
        expanded.value = props.name.toString() == value.toString();
      } else {
        if (!uni_modules_uviewUltra_libs_function_test.array(value) && value != "") {
          return uni_modules_uviewUltra_libs_function_index.error("非手风琴模式下，up-collapse组件的value参数必须为数组");
        }
        if (value == "") {
          value = [];
        }
        const valueArr = value;
        const sameName = (element) => {
          return element == props.name.toString();
        };
        expanded.value = valueArr.some(sameName);
      }
      yield common_vendor.nextTick$1();
      setContentAnimate(expanded.value);
    });
  }
  const clickHandler = function() {
    if (props.disabled || animating.value)
      return null;
    if (parent.value != null) {
      parent.value.$callMethod("onChange", instance);
    }
  };
  common_vendor.onMounted(() => {
    init();
  });
  const getInternalState = () => {
    return new common_vendor.UTSJSONObject({
      name: props.name,
      expanded: expanded.value
    });
  };
  __expose({
    init,
    setContentAnimate,
    getInternalState
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.$slots["title"] != null && __props.title != ""
    }, _ctx.$slots["title"] != null && __props.title != "" ? {
      b: common_vendor.t(__props.title)
    } : {}, {
      c: _ctx.$slots["icon"] != null && __props.icon != ""
    }, _ctx.$slots["icon"] != null && __props.icon != "" ? {
      d: common_vendor.t(__props.icon)
    } : {}, {
      e: _ctx.$slots["value"] != null && __props.value != ""
    }, _ctx.$slots["value"] != null && __props.value != "" ? {
      f: common_vendor.t(__props.value)
    } : {}, {
      g: __props.showRight
    }, __props.showRight ? common_vendor.e({
      h: _ctx.$slots["right-icon"] != null
    }, _ctx.$slots["right-icon"] != null ? {
      i: common_vendor.p({
        size: 16,
        name: "arrow-right",
        class: "data-v-369bd0e4"
      })
    } : {}) : {}, {
      j: common_vendor.o(clickHandler, "11"),
      k: common_vendor.p({
        title: titleCpu.value,
        value: __props.value,
        label: __props.label,
        icon: __props.icon,
        isLink: __props.isLink,
        clickable: __props.clickable,
        border: __props.border && showBorder.value,
        customStyle: {
          padding: "10px 0"
        },
        class: "data-v-369bd0e4"
      }),
      l: common_vendor.sei(elId.value !== "" ? elId.value : "r0-369bd0e4", "view", elId.value),
      m: elId.value,
      n: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(height.value),
      o: common_vendor.unref(parentData)["border"] != null && common_vendor.unref(parentData)["border"]
    }, common_vendor.unref(parentData)["border"] != null && common_vendor.unref(parentData)["border"] ? {
      p: common_vendor.p({
        class: "data-v-369bd0e4"
      })
    } : {}, {
      q: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      r: `${_ctx.u_s_b_h}px`,
      s: `${_ctx.u_s_a_i_b}px`,
      t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-369bd0e4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.js.map
