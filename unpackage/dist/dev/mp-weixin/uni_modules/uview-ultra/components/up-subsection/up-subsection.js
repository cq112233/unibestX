"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-subsection"
}, { __name: "up-subsection", props: {
  list: {
    type: Array,
    default: () => {
      return [];
    }
  },
  current: {
    type: [String, Number],
    default: 0
  },
  activeColor: {
    type: String,
    default: "#3c9cff"
  },
  inactiveColor: {
    type: String,
    default: "#303133"
  },
  mode: {
    type: String,
    default: "button"
  },
  fontSize: {
    type: [String, Number],
    default: 12
  },
  bold: {
    type: Boolean,
    default: true
  },
  bgColor: {
    type: String,
    default: "#eeeeef"
  },
  keyName: {
    type: String,
    default: "name"
  },
  activeColorKeyName: {
    type: String,
    default: "activeColor"
  },
  inactiveColorKeyName: {
    type: String,
    default: "inactiveColor"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["change"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const innerCurrent = common_vendor.ref(parseInt(props.current.toString()));
  const componentWidth = common_vendor.ref(0);
  const firstTime = common_vendor.ref(true);
  common_vendor.watch(() => {
    return props.current;
  }, (n = null) => {
    const nn = parseInt(n.toString());
    if (nn !== innerCurrent.value) {
      innerCurrent.value = nn;
    }
  });
  common_vendor.watch(() => {
    return props.list;
  }, () => {
    init();
  });
  const wrapperStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.mode === "button") {
      style["backgroundColor"] = props.bgColor;
    }
    return style;
  });
  const barStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (componentWidth.value > 0) {
      const itemWidth = componentWidth.value / props.list.length;
      style["width"] = itemWidth.toString() + "px";
      style["transform"] = `translateX(${innerCurrent.value * itemWidth}px)`;
    } else {
      if (props.list.length > 0) {
        style["width"] = (100 / props.list.length).toString() + "%";
      }
      style["transform"] = `translateX(${innerCurrent.value * 100}%)`;
    }
    if (firstTime.value) {
      style["transitionDuration"] = "0ms";
    } else {
      style["transitionDuration"] = "300ms";
    }
    style["left"] = "0px";
    style["top"] = "0px";
    style["bottom"] = "0px";
    return style;
  });
  const innerBarStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    if (props.mode === "subsection") {
      if (props.activeColor != "#3c9cff") {
        style["backgroundColor"] = props.activeColor;
      }
    }
    return style;
  });
  function getWrapperRect() {
    return new Promise((resolve) => {
      common_vendor.index.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select(".up-subsection").boundingClientRect().exec((rect) => {
        if (rect != null && rect.length > 0) {
          resolve(rect[0]);
        } else {
          resolve(null);
        }
      });
    });
  }
  function resize() {
    getWrapperRect().then((rect = null) => {
      if (rect != null && rect.width != null && rect.width > 0) {
        componentWidth.value = rect.width;
        if (firstTime.value) {
          common_vendor.nextTick$1(() => {
            setTimeout(() => {
              firstTime.value = false;
            }, 50);
          });
        }
      }
    });
  }
  function init() {
    innerCurrent.value = parseInt(props.current.toString());
    common_vendor.nextTick$1(() => {
      resize();
    });
  }
  function itemStyle(index) {
    const style = new common_vendor.UTSJSONObject({});
    if (props.mode === "subsection") {
      if (props.activeColor != "#3c9cff") {
        style["borderColor"] = props.activeColor;
      }
      style["borderWidth"] = "1px";
      style["borderStyle"] = "solid";
    }
    return style;
  }
  function textStyle(index) {
    var _a2, _b;
    const style = new common_vendor.UTSJSONObject({});
    if (props.disabled) {
      style["fontWeight"] = "normal";
      style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.fontSize);
      style["color"] = "#c8c9cc";
      return style;
    }
    style["fontWeight"] = props.bold && innerCurrent.value === index ? "bold" : "normal";
    style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.fontSize);
    const item = props.list[index];
    const activeColorTemp = typeof item == "object" && item != null ? (_a2 = item[props.activeColorKeyName]) !== null && _a2 !== void 0 ? _a2 : "" : "";
    const inactiveColorTemp = typeof item === "object" && item != null ? (_b = item[props.inactiveColorKeyName]) !== null && _b !== void 0 ? _b : "" : "";
    if (props.mode === "subsection") {
      style["color"] = innerCurrent.value === index ? activeColorTemp != "" ? activeColorTemp : "#fff" : inactiveColorTemp != "" ? inactiveColorTemp : props.inactiveColor;
    } else {
      const c = activeColorTemp != "" ? activeColorTemp : props.activeColor;
      if (innerCurrent.value == index) {
        if (c != "#3c9cff") {
          style["color"] = c;
        }
      } else {
        style["color"] = inactiveColorTemp != "" ? inactiveColorTemp : props.inactiveColor;
      }
    }
    return style;
  }
  function getText(item = null) {
    if (typeof item === "string") {
      return item;
    } else if (typeof item === "object" && item != null) {
      let temp = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(item));
      return temp.getString(props.keyName);
    } else {
      return "error";
    }
  }
  function clickHandler(index) {
    if (props.disabled)
      return null;
    innerCurrent.value = index;
    emit("change", index);
  }
  common_vendor.onMounted(() => {
    init();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: __props.mode === "button" ? 1 : "",
      b: __props.mode === "button" ? 1 : "",
      c: innerCurrent.value == 0 && __props.mode === "subsection" ? 1 : "",
      d: innerCurrent.value > 0 && innerCurrent.value < __props.list.length - 1 && __props.mode === "subsection" ? 1 : "",
      e: innerCurrent.value == __props.list.length - 1 && __props.mode === "subsection" ? 1 : "",
      f: common_vendor.s(innerBarStyle.value),
      g: common_vendor.s(barStyle.value),
      h: common_vendor.f(__props.list, (item, index, i0) => {
        return {
          a: common_vendor.t(getText(item)),
          b: common_vendor.n(innerCurrent.value == index && __props.mode === "button" && __props.activeColor == "#3c9cff" ? "up-subsection__item__text--active" : ""),
          c: common_vendor.s(textStyle(index)),
          d: "item-" + i0,
          e: common_vendor.r("item", {
            item,
            index
          }, i0),
          f: common_vendor.n(`up-subsection__item--${index.toString()}`),
          g: common_vendor.n(index < __props.list.length - 1 ? "up-subsection__item--no-border-right" : ""),
          h: common_vendor.n(index == 0 ? "up-subsection__item--first" : ""),
          i: common_vendor.n(index == __props.list.length - 1 ? "up-subsection__item--last" : ""),
          j: common_vendor.s(itemStyle()),
          k: common_vendor.o(($event) => {
            return clickHandler(index);
          }, index),
          l: index
        };
      }),
      i: common_vendor.n(__props.disabled ? "up-subsection__item__text--disabled" : ""),
      j: common_vendor.n(__props.disabled ? "up-subsection__item--disabled" : ""),
      k: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-d80a85c3"), "view", "upSubsectionRef"),
      l: common_vendor.n(`up-subsection--${__props.mode}`),
      m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      n: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      o: common_vendor.s(wrapperStyle.value),
      p: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d80a85c3"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-subsection/up-subsection.js.map
