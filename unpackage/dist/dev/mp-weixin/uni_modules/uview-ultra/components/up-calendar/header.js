"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-calendar-header"
}, { __name: "header", props: {
  title: {
    type: String,
    default: ""
  },
  subtitle: {
    type: String,
    default: ""
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  showSubtitle: {
    type: Boolean,
    default: true
  },
  showSwitch: {
    type: Boolean,
    default: false
  },
  prevDisabled: {
    type: Boolean,
    default: false
  },
  nextDisabled: {
    type: Boolean,
    default: false
  },
  prevYearDisabled: {
    type: Boolean,
    default: false
  },
  nextYearDisabled: {
    type: Boolean,
    default: false
  },
  showToday: {
    type: Boolean,
    default: true
  },
  todayText: {
    type: String,
    default: "今天"
  },
  todayDisabled: {
    type: Boolean,
    default: false
  }
}, emits: ["prev", "next", "prevYear", "nextYear", "today"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  function t(key) {
    return uni_modules_uviewUltra_libs_i18n_index.t(key, new common_vendor.UTSJSONObject({}));
  }
  function prev() {
    if (!props.prevDisabled) {
      emit("prev");
    }
  }
  function next() {
    if (!props.nextDisabled) {
      emit("next");
    }
  }
  function prevYear() {
    if (!props.prevYearDisabled) {
      emit("prevYear");
    }
  }
  function nextYear() {
    if (!props.nextYearDisabled) {
      emit("nextYear");
    }
  }
  function today() {
    if (!props.todayDisabled) {
      emit("today");
    }
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.showTitle
    }, __props.showTitle ? {
      b: common_vendor.t(__props.title)
    } : {}, {
      c: __props.showSubtitle
    }, __props.showSubtitle ? common_vendor.e({
      d: __props.showSwitch
    }, __props.showSwitch ? {
      e: __props.prevYearDisabled ? 1 : "",
      f: common_vendor.o(prevYear, "d8")
    } : {}, {
      g: __props.showSwitch
    }, __props.showSwitch ? {
      h: __props.prevDisabled ? 1 : "",
      i: common_vendor.o(prev, "0d")
    } : {}, {
      j: common_vendor.t(__props.subtitle),
      k: __props.showSwitch
    }, __props.showSwitch ? {
      l: __props.nextDisabled ? 1 : "",
      m: common_vendor.o(next, "aa")
    } : {}, {
      n: __props.showSwitch
    }, __props.showSwitch ? {
      o: __props.nextYearDisabled ? 1 : "",
      p: common_vendor.o(nextYear, "f7")
    } : {}, {
      q: __props.showToday
    }, __props.showToday ? {
      r: common_vendor.t(__props.todayText),
      s: __props.todayDisabled ? 1 : "",
      t: common_vendor.o(today, "0a")
    } : {}) : {}, {
      v: common_vendor.t(t("up_week_one")),
      w: common_vendor.t(t("up_week_two")),
      x: common_vendor.t(t("up_week_three")),
      y: common_vendor.t(t("up_week_four")),
      z: common_vendor.t(t("up_week_five")),
      A: common_vendor.t(t("up_week_six")),
      B: common_vendor.t(t("up_week_seven")),
      C: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      D: `${_ctx.u_s_b_h}px`,
      E: `${_ctx.u_s_a_i_b}px`,
      F: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5e904c4b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-calendar/header.js.map
