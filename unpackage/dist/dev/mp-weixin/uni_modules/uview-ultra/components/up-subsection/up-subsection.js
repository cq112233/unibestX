"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSubsection_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-subsection",
  mixins: [
    uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin,
    uni_modules_uviewUltra_libs_mixin_mixin.mixin,
    uni_modules_uviewUltra_components_upSubsection_props.subsectionProps
  ],
  data() {
    return {
      innerCurrent: 0,
      componentWidth: 0,
      firstTime: true,
      windowResizeCallback: new UTSJSONObject({})
    };
  },
  watch: {
    list() {
      this.init();
    },
    current: {
      immediate: true,
      handler(n) {
        let nn = parseInt(n.toString());
        if (nn !== this.innerCurrent) {
          this.innerCurrent = nn;
        }
      }
    }
  },
  computed: {
    wrapperStyle() {
      const style = new UTSJSONObject({});
      if (this.mode === "button") {
        style["backgroundColor"] = this.bgColor;
      }
      return style;
    },
    // 滑块的样式
    barStyle() {
      const style = new UTSJSONObject({});
      if (this.componentWidth > 0) {
        const itemWidth = this.componentWidth / this.list.length;
        style["width"] = itemWidth.toString() + "px";
        style["transform"] = `translateX(${this.innerCurrent * itemWidth}px)`;
      } else {
        if (this.list.length > 0) {
          style["width"] = (100 / this.list.length).toString() + "%";
        }
        style["transform"] = `translateX(${this.innerCurrent * 100}%)`;
      }
      if (this.firstTime) {
        style["transitionDuration"] = "0ms";
      } else {
        style["transitionDuration"] = "300ms";
      }
      style["left"] = "0px";
      style["top"] = "0px";
      style["bottom"] = "0px";
      return style;
    },
    innerBarStyle() {
      const style = new UTSJSONObject({});
      if (this.mode === "subsection") {
        if (this.activeColor != "#3c9cff") {
          style["backgroundColor"] = this.activeColor;
        }
      }
      return style;
    }
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
  },
  emits: ["change"],
  methods: {
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    init() {
      this.innerCurrent = parseInt(this.current.toString());
      this.$nextTick(() => {
        this.resize();
      });
    },
    resize() {
      this.getWrapperRect().then((rect = null) => {
        if (rect != null && rect.width != null && rect.width > 0) {
          this.componentWidth = rect.width;
          if (this.firstTime) {
            this.$nextTick(() => {
              setTimeout(() => {
                this.firstTime = false;
              }, 50);
            });
          }
        }
      });
    },
    getWrapperRect() {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(this).select(".up-subsection").boundingClientRect().exec((rect) => {
          if (rect != null && rect.length > 0) {
            resolve(rect[0]);
          } else {
            resolve(null);
          }
        });
      });
    },
    itemStyle(index) {
      const style = new UTSJSONObject({});
      if (this.mode === "subsection") {
        if (this.activeColor != "#3c9cff") {
          style["borderColor"] = this.activeColor;
        }
        style["borderWidth"] = "1px";
        style["borderStyle"] = "solid";
      }
      return style;
    },
    textStyle(index) {
      var _a, _b;
      const style = new UTSJSONObject({});
      if (this.disabled) {
        style["fontWeight"] = "normal";
        style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.fontSize);
        style["color"] = "#c8c9cc";
        return style;
      }
      style["fontWeight"] = this.bold && this.innerCurrent === index ? "bold" : "normal";
      style["fontSize"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.fontSize);
      const item = this.list[index];
      const activeColorTemp = typeof item == "object" && item != null ? (_a = item[this.activeColorKeyName]) !== null && _a !== void 0 ? _a : "" : "";
      const inactiveColorTemp = typeof item === "object" && item != null ? (_b = item[this.inactiveColorKeyName]) !== null && _b !== void 0 ? _b : "" : "";
      if (this.mode === "subsection") {
        style["color"] = this.innerCurrent === index ? activeColorTemp != "" ? activeColorTemp : "#fff" : inactiveColorTemp != "" ? inactiveColorTemp : this.inactiveColor;
      } else {
        const c = activeColorTemp != "" ? activeColorTemp : this.activeColor;
        if (this.innerCurrent == index) {
          if (c != "#3c9cff") {
            style["color"] = c;
          }
        } else {
          style["color"] = inactiveColorTemp != "" ? inactiveColorTemp : this.inactiveColor;
        }
      }
      return style;
    },
    // 判断展示文本
    getText(item = null) {
      if (typeof item === "string") {
        return item;
      } else if (typeof item === "object") {
        let temp = common_vendor.UTS.JSON.parse(common_vendor.UTS.JSON.stringify(item));
        return temp.getString(this.keyName);
      } else {
        return "error";
      }
    },
    clickHandler(index) {
      if (this.disabled)
        return null;
      this.innerCurrent = index;
      this.$emit("change", index);
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: _ctx.mode === "button" ? 1 : "",
    b: _ctx.mode === "button" ? 1 : "",
    c: $data.innerCurrent == 0 && _ctx.mode === "subsection" ? 1 : "",
    d: $data.innerCurrent > 0 && $data.innerCurrent < _ctx.list.length - 1 && _ctx.mode === "subsection" ? 1 : "",
    e: $data.innerCurrent == _ctx.list.length - 1 && _ctx.mode === "subsection" ? 1 : "",
    f: common_vendor.s($options.innerBarStyle),
    g: common_vendor.sei("r0-d80a85c3", "view", "up-subsection__bar"),
    h: common_vendor.s($options.barStyle),
    i: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.t($options.getText(item)),
        b: common_vendor.n($data.innerCurrent == index && _ctx.mode === "button" && _ctx.activeColor == "#3c9cff" ? "up-subsection__item__text--active" : ""),
        c: common_vendor.s($options.textStyle(index)),
        d: "item-" + i0,
        e: common_vendor.r("item", {
          item,
          index
        }, i0),
        f: common_vendor.sei("r1-d80a85c3-" + index, "view", `up-subsection__item--${index.toString()}`, {
          "f": 1
        }),
        g: common_vendor.n(`up-subsection__item--${index.toString()}`),
        h: common_vendor.n(index < _ctx.list.length - 1 ? "up-subsection__item--no-border-right" : ""),
        i: common_vendor.n(index == 0 ? "up-subsection__item--first" : ""),
        j: common_vendor.n(index == _ctx.list.length - 1 ? "up-subsection__item--last" : ""),
        k: `up-subsection__item--${index.toString()}`,
        l: common_vendor.s($options.itemStyle(index)),
        m: common_vendor.o(($event) => $options.clickHandler(index), index),
        n: index
      };
    }),
    j: common_vendor.n(_ctx.disabled ? "up-subsection__item__text--disabled" : ""),
    k: common_vendor.n(_ctx.disabled ? "up-subsection__item--disabled" : ""),
    l: common_vendor.sei(common_vendor.gei(_ctx, "", "r2-d80a85c3"), "view", "up-subsection"),
    m: common_vendor.n(`up-subsection--${_ctx.mode}`),
    n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    o: common_vendor.s($options.addStyle(_ctx.customStyle)),
    p: common_vendor.s($options.wrapperStyle),
    q: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d80a85c3"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-subsection/up-subsection.js.map
