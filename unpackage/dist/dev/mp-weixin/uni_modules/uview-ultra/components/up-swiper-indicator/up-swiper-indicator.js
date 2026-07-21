"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSwiperIndicator_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-swiper-indicator",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSwiperIndicator_props.propsSwiperIndicator],
  data() {
    return {
      lineWidth: 22
    };
  },
  computed: {
    lengthArray() {
      var _a;
      let list = [];
      const len = (_a = this.$props["length"]) !== null && _a !== void 0 ? _a : 0;
      for (var index = 0; index < len; index++) {
        list.push(index.toString());
      }
      return list;
    },
    // 指示器为线型的样式
    lineStyle() {
      let style = new common_vendor.UTSJSONObject({});
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.lineWidth);
      style["transform"] = `translateX(${uni_modules_uviewUltra_libs_function_index.addUnit(this.current * this.lineWidth)})`;
      style["backgroundColor"] = this.indicatorActiveColor;
      return style;
    }
  },
  methods: {
    addUnit(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(val);
    },
    // 指示器为点型的样式
    dotStyle(index) {
      let style = new common_vendor.UTSJSONObject({});
      style["backgroundColor"] = index === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
      return style;
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.indicatorMode === "line"
  }, _ctx.indicatorMode === "line" ? {
    b: common_vendor.s($options.lineStyle),
    c: common_vendor.n(`up-swiper-indicator__wrapper--${_ctx.indicatorMode}`),
    d: $options.addUnit($data.lineWidth * _ctx.length),
    e: _ctx.indicatorInactiveColor
  } : {}, {
    f: _ctx.indicatorMode === "dot"
  }, _ctx.indicatorMode === "dot" ? {
    g: common_vendor.f($options.lengthArray, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.n(index === _ctx.current ? "up-swiper-indicator__wrapper__dot--active" : ""),
        c: common_vendor.s($options.dotStyle(index))
      };
    })
  } : {}, {
    h: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    i: `${_ctx.u_s_b_h}px`,
    j: `${_ctx.u_s_a_i_b}px`,
    k: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-12d3926a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator.js.map
