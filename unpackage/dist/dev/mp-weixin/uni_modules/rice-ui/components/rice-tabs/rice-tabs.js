"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_components_riceTabs_type = require("./type.js");
if (!Array) {
  const _easycom_rice_badge_1 = common_vendor.resolveComponent("rice-badge");
  _easycom_rice_badge_1();
}
const _easycom_rice_badge = () => "../rice-badge/rice-badge.js";
if (!Math) {
  _easycom_rice_badge();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-tabs",
  styleIsolation: "app-and-page",
  externalClasses: ["active-text-class", "inactive-textClass", "disabled-text-class", "text-class"]
}, { __name: "rice-tabs", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  list: { default: () => {
    return [];
  } },
  shrink: { type: Boolean, default: false },
  lineMode: { default: "slide" },
  titleActiveColor: {},
  titleInactiveColor: {},
  initAnimate: { type: Boolean, default: true },
  bgColor: {},
  height: {},
  lineColor: {},
  lineWidth: { default: "20px" },
  lineHeight: {},
  textClass: {},
  activeTextClass: {},
  inactiveTextClass: {},
  disabledTextClass: {},
  itemStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } },
  activeStyle: {},
  inactiveStyle: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}), new common_vendor.UTSJSONObject({
  "modelValue": {
    type: Number,
    default: 0
  },
  "modelModifiers": {}
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["clickTab", "change"], ["update:modelValue"]), setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const emit = __emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("tabs");
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const scrollLeft = common_vendor.ref(0);
  let isFirstMove = common_vendor.ref(true);
  const indicatorRef = common_vendor.shallowRef(null);
  const tabScrollRef = common_vendor.shallowRef(null);
  const tabsItemRef = common_vendor.ref([]);
  const tabsItemRect = common_vendor.ref([]);
  const cacheTabItemsSize = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      tabsItemRect.value = [];
      let totalWidth = 0;
      for (let i = 0; i < tabsItemRef.value.length; i++) {
        const element = tabsItemRef.value[i];
        const rect = yield element.getBoundingClientRectAsync();
        const x = i == 0 ? 0 : totalWidth;
        const w = rect.width;
        totalWidth += w;
        tabsItemRect.value.push(new uni_modules_riceUi_components_riceTabs_type.TabsItemRect({
          x,
          w
        }));
      }
    });
  };
  const updateTabIndicator = (currentIndex, moveToIndex, percentage) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      var _a2, _b, _c, _d, _g, _h;
      if (tabsItemRect.value.length == 0 || moveToIndex >= tabsItemRect.value.length)
        return Promise.resolve(null);
      tabsItemRect.value[currentIndex];
      const moveToSize = tabsItemRect.value[moveToIndex];
      const indicatorLineX = moveToSize.x;
      const indicatorLineW = uni_modules_riceUi_libs_utils_basic.getPxNum(props.lineWidth, moveToSize.w);
      const x = indicatorLineX + (moveToSize.w - indicatorLineW) / 2;
      if (!props.initAnimate) {
        (_a2 = indicatorRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("opacity", isFirstMove.value ? 0 : 1);
        (_b = indicatorRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transition-duration", isFirstMove.value ? "0ms" : "300ms");
      }
      (_c = indicatorRef.value) === null || _c === void 0 ? null : _c.style.setProperty("width", indicatorLineW + "px");
      (_g = (_d = indicatorRef.value) === null || _d === void 0 ? null : _d.style) === null || _g === void 0 ? null : _g.setProperty("transform", `translateX(${x}px)`);
      const rect = yield tabScrollRef.value.getBoundingClientRectAsync();
      scrollLeft.value = x - rect.width / 2;
      yield common_vendor.nextTick$1();
      (_h = indicatorRef.value) === null || _h === void 0 ? null : _h.style.setProperty("opacity", 1);
      isFirstMove.value = false;
    });
  };
  const tabClick = (tab, index) => {
    var _a2, _b;
    emit("clickTab", new uni_modules_riceUi_components_riceTabs_type.TabsClickTab({
      index,
      name: tab.name,
      value: tab.value,
      disabled: (_a2 = tab.disabled) !== null && _a2 !== void 0 ? _a2 : false
    }));
    if (modelValue.value == index || tab.disabled == true)
      return null;
    updateTabIndicator(modelValue.value, index);
    modelValue.value = index;
    emit("change", new uni_modules_riceUi_components_riceTabs_type.TabsChange({
      index,
      name: tab.name,
      value: tab.value,
      disabled: (_b = tab.disabled) !== null && _b !== void 0 ? _b : false
    }));
  };
  const getActiveZoomStyle = (index) => {
    var _a2;
    const css = /* @__PURE__ */ new Map();
    let width = "0px";
    if (index == modelValue.value) {
      width = uni_modules_riceUi_libs_utils_basic.addUnit((_a2 = props.lineWidth) !== null && _a2 !== void 0 ? _a2 : "20px");
    }
    css.set("width", width);
    return css;
  };
  const resize = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      yield cacheTabItemsSize();
      updateTabIndicator(modelValue.value, modelValue.value);
    });
  };
  const tabsStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.height != null) {
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    }
    if (props.bgColor != null) {
      css.set("background-color", props.bgColor);
    }
    return css;
  });
  const indicatorStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.lineHeight != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.lineHeight));
    if (props.lineColor != null)
      css.set("background-color", props.lineColor);
    return css;
  });
  const getItemStyle = (tab, index) => {
    const basic = [props.itemStyle];
    if (tab.disabled == true)
      return basic;
    const isSelected = index == modelValue.value;
    if (isSelected && props.activeStyle != null) {
      basic.push(props.activeStyle);
    }
    if (!isSelected && props.inactiveStyle != null) {
      basic.push(props.inactiveStyle);
    }
    return basic;
  };
  const getTextClass = (tab, index) => {
    var _a2, _b, _c;
    const basic = [];
    const isSelected = index == modelValue.value;
    if (props.textClass != null) {
      basic.push(props.textClass);
    }
    if (isSelected) {
      basic.push("rice-tabs__item__active");
      basic.push((_a2 = props.activeTextClass) !== null && _a2 !== void 0 ? _a2 : "");
    } else {
      basic.push((_b = props.inactiveTextClass) !== null && _b !== void 0 ? _b : "");
    }
    if (tab.disabled == true) {
      basic.push("rice-tabs__item__disabled");
      basic.push((_c = props.disabledTextClass) !== null && _c !== void 0 ? _c : "");
    }
    return basic;
  };
  const getTextStyle = (tab, index) => {
    const css = /* @__PURE__ */ new Map();
    const isSelected = index == modelValue.value;
    if (isSelected && props.titleActiveColor != null) {
      css.set("color", props.titleActiveColor);
    }
    if (!isSelected && props.titleInactiveColor != null) {
      css.set("color", props.titleInactiveColor);
    }
    return css;
  };
  common_vendor.watch(modelValue, (newVal, oldVal) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      updateTabIndicator(oldVal, newVal);
    });
  });
  common_vendor.watch(() => {
    return [props.lineWidth, props.lineHeight, props.list];
  }, () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield common_vendor.nextTick$1();
      resize();
    });
  });
  common_vendor.onMounted(() => {
    setTimeout(() => {
      resize();
    }, 100);
  });
  __expose({
    resize
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.f(_ctx.list, (item, index, i0) => {
        return common_vendor.e({
          a: item.badge != null
        }, item.badge != null ? {
          b: common_vendor.t(item.name),
          c: common_vendor.n(getTextClass(item, index)),
          d: common_vendor.s(getTextStyle(item, index)),
          e: "c0441e19-0-" + i0,
          f: common_vendor.p({
            ["is-dot"]: item.badge.isDot,
            value: item.badge.value,
            ["show-zero"]: item.badge.showZero ?? true,
            offset: [10, 0],
            class: "data-v-c0441e19"
          })
        } : {
          g: common_vendor.t(item.name),
          h: common_vendor.n(getTextClass(item, index)),
          i: common_vendor.s(getTextStyle(item, index))
        }, _ctx.lineMode == "zoom" ? {
          j: common_vendor.s(getActiveZoomStyle(index)),
          k: common_vendor.s(common_vendor.unref(indicatorStyle))
        } : {}, {
          l: common_vendor.sei("r0-c0441e19-" + index, "view", tabsItemRef, {
            "k": "tabsItemRef",
            "f": 1
          }),
          m: index,
          n: common_vendor.s(getItemStyle(item, index)),
          o: common_vendor.o(($event) => {
            return tabClick(item, index);
          }, index)
        });
      }),
      b: _ctx.lineMode == "zoom",
      c: props.shrink ? 1 : "",
      d: _ctx.lineMode == "slide"
    }, _ctx.lineMode == "slide" ? {
      e: common_vendor.sei("r1-c0441e19", "view", indicatorRef, {
        "k": "indicatorRef"
      }),
      f: common_vendor.s(common_vendor.unref(indicatorStyle)),
      g: !_ctx.initAnimate ? 1 : ""
    } : {}, {
      h: common_vendor.sei("r2-c0441e19", "scroll-view", tabScrollRef, {
        "k": "tabScrollRef"
      }),
      i: common_vendor.unref(scrollLeft),
      j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      k: common_vendor.n(common_vendor.unref(ns).theme()),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      m: common_vendor.s(common_vendor.unref(tabsStyle)),
      n: common_vendor.s(_ctx.customStyle),
      o: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c0441e19"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-tabs/rice-tabs.js.map
