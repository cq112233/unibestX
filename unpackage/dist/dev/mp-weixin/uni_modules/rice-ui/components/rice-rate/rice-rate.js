"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
const uni_modules_riceUi_libs_use_useTouch_index = require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_riceForm_index = require("../rice-form/index.js");
const uni_modules_riceUi_components_riceRate_type = require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-rate",
  styleIsolation: "app-and-page"
}, { __name: "rice-rate", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  count: { default: 5 },
  icon: { default: "star-fill" },
  voidIcon: { default: "star" },
  size: { default: "22px" },
  gutter: { default: "4px" },
  color: {},
  voidColor: {},
  allowHalf: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  touchable: { type: Boolean, default: true },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: Number,
    default: 0
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change"], ["update:modelValue"]), setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("rate");
  const emit = __emit;
  const touch = uni_modules_riceUi_libs_use_useTouch_index.useTouch();
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const formDisabled = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formDisabledInjectKey, null);
  const formReadonly = common_vendor.inject(uni_modules_riceUi_components_riceForm_index.formReadonlyInjectKey, null);
  const isDisabled = common_vendor.computed(() => {
    var _a2;
    return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || props.disabled;
  });
  const isReadonly = common_vendor.computed(() => {
    var _a2;
    return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly;
  });
  const unable = common_vendor.computed(() => {
    return isDisabled.value || isReadonly.value;
  });
  const rateRef = common_vendor.shallowRef(null);
  const rateItemRef = common_vendor.shallowRef([]);
  const rateItemWidth = common_vendor.ref(0);
  const rateLeft = common_vendor.ref(0);
  const rateList = common_vendor.computed(() => {
    var _a2;
    const list = [];
    const value = (_a2 = modelValue.value) !== null && _a2 !== void 0 ? _a2 : 0;
    for (let index = 1; index <= props.count; index++) {
      if (value >= index) {
        list.push(new uni_modules_riceUi_components_riceRate_type.RateStatus({ status: "full", value: 1 }));
      } else if (value + 0.5 >= index && props.allowHalf) {
        list.push(new uni_modules_riceUi_components_riceRate_type.RateStatus({ status: "half", value: 0.5 }));
      } else {
        list.push(new uni_modules_riceUi_components_riceRate_type.RateStatus({ status: "void", value: 0 }));
      }
    }
    return list;
  });
  const getRateSize = () => {
    var _a2, _b;
    (_b = (_a2 = rateRef.value) === null || _a2 === void 0 ? null : _a2.getBoundingClientRectAsync()) === null || _b === void 0 ? null : _b.then((res) => {
      rateLeft.value = res.left;
    });
    if (rateItemRef.value.length > 0) {
      rateItemRef.value[0].getBoundingClientRectAsync().then((res) => {
        rateItemWidth.value = res.width;
      });
    }
  };
  const updateModelValue = (value) => {
    if (unable.value || value == modelValue.value)
      return null;
    modelValue.value = value;
    emit("change", value);
  };
  const margin = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.getPxNum(props.gutter);
  });
  const getRateIndex = (clientX) => {
    const size = rateItemWidth.value;
    const moveRange = clientX - rateLeft.value;
    let index = Math.floor(moveRange / (size + margin.value));
    index = index < 0 ? 0 : index;
    const range = Math.floor(moveRange - (size + margin.value) * index);
    let value;
    if (props.allowHalf) {
      if (range > size / 2) {
        value = index + 1;
      } else {
        value = index + 0.5;
      }
    } else {
      value = index + 1;
    }
    value = uni_modules_riceUi_libs_utils_basic.clamp(value, 0.5, props.count);
    if (touch.isTap.value && props.clearable && value == modelValue.value) {
      value = 0;
    }
    updateModelValue(value);
  };
  const handleClick = (e, value) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (props.allowHalf) {
        getRateSize();
        getRateIndex(e.clientX);
        return Promise.resolve(null);
      }
      if (props.clearable && value == modelValue.value) {
        value = 0;
      }
      updateModelValue(value);
    });
  };
  const skipMove = common_vendor.ref(false);
  const onTouchstart = (e) => {
    if (unable.value)
      return null;
    getRateSize();
    skipMove.value = false;
    touch.start(e);
  };
  const onTouchmove = (e) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (unable.value || !props.touchable || skipMove.value)
        return Promise.resolve(null);
      touch.move(e);
      if (touch.direction.value == "vertical") {
        skipMove.value = true;
      }
      if (touch.direction.value != "horizontal")
        return Promise.resolve(null);
      const clientX = e.touches[0].clientX;
      getRateIndex(clientX);
      e.preventDefault();
    });
  };
  const iconFullColor = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.color) !== null && _a2 !== void 0 ? _a2 : "var(--rice-rate-color)";
  });
  const getIconColor = (item) => {
    var _a2;
    return item.status == "full" ? iconFullColor.value : (_a2 = props.voidColor) !== null && _a2 !== void 0 ? _a2 : "var(--rice-rate-void-color)";
  };
  const getRateItemStyle = (index) => {
    const css = /* @__PURE__ */ new Map();
    if (index < props.count - 1) {
      css.set("margin-right", uni_modules_riceUi_libs_utils_basic.addUnit(props.gutter));
    }
    return css;
  };
  const getHalfIconStyle = (item) => {
    return new common_vendor.UTSJSONObject({
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      width: item.value * 100 + "%"
    });
  };
  const rateClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("disabled", isDisabled.value)
    ];
  });
  let timer = 0;
  common_vendor.onMounted(() => {
    timer = setTimeout(() => {
      getRateSize();
    }, 100);
  });
  common_vendor.onUnmounted(() => {
    if (timer != null)
      clearTimeout(timer);
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(common_vendor.unref(rateList), (item, index, i0) => {
        return common_vendor.e({
          a: "f9c9940a-0-" + i0,
          b: common_vendor.p({
            name: item.status == "full" ? _ctx.icon : _ctx.voidIcon,
            size: _ctx.size,
            color: getIconColor(item),
            class: "data-v-f9c9940a"
          }),
          c: _ctx.allowHalf && item.value == 0.5
        }, _ctx.allowHalf && item.value == 0.5 ? {
          d: "f9c9940a-1-" + i0,
          e: common_vendor.p({
            size: _ctx.size,
            name: _ctx.icon,
            ["custom-style"]: getHalfIconStyle(item),
            color: common_vendor.unref(iconFullColor),
            class: "data-v-f9c9940a"
          })
        } : {}, {
          f: common_vendor.sei("r0-f9c9940a-" + index, "view", rateItemRef, {
            "k": "rateItemRef",
            "f": 1
          }),
          g: index,
          h: common_vendor.s(getRateItemStyle(index)),
          i: common_vendor.o(($event) => {
            return handleClick($event, index + 1);
          }, index)
        });
      }),
      b: common_vendor.sei(common_vendor.gei(_ctx, "", "r1-f9c9940a"), "view", rateRef, {
        "k": "rateRef"
      }),
      c: common_vendor.n(common_vendor.unref(rateClass)),
      d: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      e: common_vendor.s(_ctx.customStyle),
      f: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      g: common_vendor.o(onTouchmove, "34"),
      h: common_vendor.o(onTouchstart, "9c")
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f9c9940a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-rate/rice-rate.js.map
