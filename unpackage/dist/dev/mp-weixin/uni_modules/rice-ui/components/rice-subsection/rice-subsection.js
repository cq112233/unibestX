"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_components_riceSubsection_type = require("./type.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-subsection",
  styleIsolation: "app-and-page"
}, { __name: "rice-subsection", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  list: { default: () => {
    return [];
  } },
  shape: { default: "square" },
  initAnimate: { type: Boolean, default: false },
  duration: { default: 300 },
  beforeChange: {},
  barClass: { default: "" },
  itemClass: { default: "" },
  textClass: { default: "" },
  activeTextClass: { default: "" },
  inactiveTextClass: { default: "" }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: Number,
    default: 0
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change", "clickSub"], ["update:modelValue"]), setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("subsection");
  const emit = __emit;
  const current = common_vendor.useModel(__props, "modelValue");
  const props = __props;
  const itemRef = common_vendor.shallowRef([]);
  const barRef = common_vendor.shallowRef(null);
  const isFirstMove = common_vendor.ref(true);
  const itemRect = common_vendor.ref(new uni_modules_riceUi_components_riceSubsection_type.SubsectionItemRect({
    width: 0,
    height: 0
  }));
  const setBarPosition = (index) => {
    var _a2, _b;
    const x = index * itemRect.value.width;
    let duration = props.duration;
    if (!props.initAnimate && isFirstMove.value) {
      duration = 0;
    }
    (_a2 = barRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", `${duration}ms`);
    (_b = barRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transform", `translateX(${x}px)`);
    isFirstMove.value = false;
  };
  const handleClick = (index) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (current.value == index)
        return Promise.resolve(null);
      if (typeof props.beforeChange == "function") {
        const flag = yield props.beforeChange(index);
        if (flag == false) {
          emit("clickSub", index);
          return Promise.resolve(null);
        }
      }
      current.value = index;
      setBarPosition(index);
      emit("change", index);
      emit("clickSub", index);
    });
  };
  const init = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      var _a2, _b;
      yield common_vendor.nextTick$1();
      if (itemRef.value.length <= 0)
        return Promise.resolve(null);
      const rect = yield itemRef.value[0].getBoundingClientRectAsync();
      itemRect.value.width = rect.width;
      itemRect.value.height = rect.height;
      (_a2 = barRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("height", `${itemRect.value.height}px`);
      (_b = barRef.value) === null || _b === void 0 ? null : _b.style.setProperty("width", `${itemRect.value.width}px`);
      setBarPosition(current.value);
    });
  };
  const rootClass = common_vendor.computed(() => {
    return [
      ns.theme(),
      ns.is("round", props.shape == "round")
    ];
  });
  const barViewClass = common_vendor.computed(() => {
    const basic = [];
    if (props.shape == "round") {
      basic.push("rice-subsection__bar--round");
    }
    basic.push(props.barClass);
    return basic;
  });
  const getTextClass = (index) => {
    const basic = [props.textClass];
    if (index == current.value) {
      basic.push("rice-subsection__item__text--active");
      basic.push(props.activeTextClass);
    } else {
      basic.push(props.inactiveTextClass);
    }
    return basic;
  };
  common_vendor.watch(current, (newVal) => {
    setBarPosition(newVal);
  });
  common_vendor.watch(() => {
    return props.list;
  }, () => {
    init();
  }, {
    deep: true
  });
  common_vendor.onMounted(() => {
    init();
  });
  __expose({
    init
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei("r0-d7a765e3", "view", barRef, {
        "k": "barRef"
      }),
      b: common_vendor.n(common_vendor.unref(barViewClass)),
      c: common_vendor.f(_ctx.list, (item, index, i0) => {
        return {
          a: common_vendor.t(item),
          b: common_vendor.n(getTextClass(index)),
          c: "d-" + i0,
          d: common_vendor.r("d", {
            index,
            subname: item
          }, i0),
          e: common_vendor.sei("r1-d7a765e3-" + index, "view", itemRef, {
            "k": "itemRef",
            "f": 1
          }),
          f: index,
          g: common_vendor.o(($event) => {
            return handleClick(index);
          }, index)
        };
      }),
      d: common_vendor.n(_ctx.itemClass),
      e: common_vendor.sei(common_vendor.gei(_ctx, "", "r2-d7a765e3"), "view", "subsectionRef"),
      f: common_vendor.n(common_vendor.unref(rootClass)),
      g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      h: `${_ctx.u_s_b_h}px`,
      i: `${_ctx.u_s_a_i_b}px`
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d7a765e3"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-subsection/rice-subsection.js.map
