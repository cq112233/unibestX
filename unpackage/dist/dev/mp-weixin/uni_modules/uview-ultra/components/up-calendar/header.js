"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/mixin/mixin.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-calendar-header",
  // mixins: [mpMixin, mixin],
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 副标题
    subtitle: {
      type: String,
      default: ""
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    // 是否显示副标题
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
  },
  data() {
    return {};
  },
  methods: {
    prev() {
      if (!this.prevDisabled) {
        this.$emit("prev");
      }
    },
    next() {
      if (!this.nextDisabled) {
        this.$emit("next");
      }
    },
    prevYear() {
      if (!this.prevYearDisabled) {
        this.$emit("prevYear");
      }
    },
    nextYear() {
      if (!this.nextYearDisabled) {
        this.$emit("nextYear");
      }
    },
    today() {
      if (!this.todayDisabled) {
        this.$emit("today");
      }
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $props.showTitle
  }, $props.showTitle ? {
    b: common_vendor.t($props.title)
  } : {}, {
    c: $props.showSubtitle
  }, $props.showSubtitle ? common_vendor.e({
    d: $props.showSwitch
  }, $props.showSwitch ? {
    e: $props.prevYearDisabled ? 1 : "",
    f: common_vendor.o((...args) => $options.prevYear && $options.prevYear(...args), "ba")
  } : {}, {
    g: $props.showSwitch
  }, $props.showSwitch ? {
    h: $props.prevDisabled ? 1 : "",
    i: common_vendor.o((...args) => $options.prev && $options.prev(...args), "51")
  } : {}, {
    j: common_vendor.t($props.subtitle),
    k: $props.showSwitch
  }, $props.showSwitch ? {
    l: $props.nextDisabled ? 1 : "",
    m: common_vendor.o((...args) => $options.next && $options.next(...args), "42")
  } : {}, {
    n: $props.showSwitch
  }, $props.showSwitch ? {
    o: $props.nextYearDisabled ? 1 : "",
    p: common_vendor.o((...args) => $options.nextYear && $options.nextYear(...args), "1b")
  } : {}, {
    q: $props.showToday
  }, $props.showToday ? {
    r: common_vendor.t($props.todayText),
    s: $props.todayDisabled ? 1 : "",
    t: common_vendor.o((...args) => $options.today && $options.today(...args), "b0")
  } : {}) : {}, {
    v: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    w: `${_ctx.u_s_b_h}px`,
    x: `${_ctx.u_s_a_i_b}px`,
    y: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e904c4b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-calendar/header.js.map
