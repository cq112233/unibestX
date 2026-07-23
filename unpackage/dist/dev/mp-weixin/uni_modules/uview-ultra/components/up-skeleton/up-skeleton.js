"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSkeleton_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-skeleton",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSkeleton_props.propsSkeleton],
  data() {
    return {
      width: 0
    };
  },
  watch: {
    loading: {
      handler: function() {
        this.getComponentWidth();
      }
    }
  },
  computed: {
    rowsArray() {
      var _a, _b;
      const rows = [];
      for (let i = 0; i < parseInt(this.rows.toString()); i++) {
        let item = new UTSJSONObject(
          {}
          // 需要预防超出数组边界的情况
        );
        let rowWidth = "";
        if (common_vendor.UTS.isInstanceOf(this.rowsWidth, Array)) {
          if (i === parseInt(this.rows.toString()) - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = this.rowsWidth[i] != null ? (_a = this.rowsWidth[i]) !== null && _a !== void 0 ? _a : "0px" : i === this.rowsWidth.length ? "70%" : "100%";
          }
        } else {
          if (i === parseInt(this.rows.toString()) - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = this.rowsWidth.toString();
          }
        }
        let rowHeight = "";
        if (common_vendor.UTS.isInstanceOf(this.rowsHeight, Array)) {
          rowHeight = this.rowsHeight[i] != null ? (_b = this.rowsHeight[i]) !== null && _b !== void 0 ? _b : "0px" : "18px";
        } else {
          rowHeight = this.rowsHeight.toString();
        }
        if (!this.title && i == 0) {
          item["marginTop"] = "0px";
        } else if (this.title && i == 0) {
          item["marginTop"] = "20px";
        } else {
          item["marginTop"] = "12px";
        }
        item["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(rowWidth);
        item["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(rowHeight);
        rows.push(item);
      }
      return rows;
    },
    uTitleWidth() {
      let tWidth = "0px";
      tWidth = uni_modules_uviewUltra_libs_function_index.addUnit(this.titleWidth);
      return uni_modules_uviewUltra_libs_function_index.addUnit(tWidth);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    init() {
      this.getComponentWidth();
    },
    // 获取组件的宽度
    getComponentWidth() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        yield uni_modules_uviewUltra_libs_function_index.sleep(20);
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.loading
  }, _ctx.loading ? common_vendor.e({
    b: _ctx.avatar
  }, _ctx.avatar ? {
    c: common_vendor.n(`up-skeleton__wrapper__avatar--${_ctx.avatarShape}`),
    d: common_vendor.n(_ctx.animate ? "animate" : ""),
    e: $options.addUnit(_ctx.avatarSize),
    f: $options.addUnit(_ctx.avatarSize)
  } : {}, {
    g: _ctx.title
  }, _ctx.title ? {
    h: $options.uTitleWidth,
    i: $options.addUnit(_ctx.titleHeight),
    j: common_vendor.n(_ctx.animate ? "animate" : "")
  } : {}, {
    k: common_vendor.f($options.rowsArray, (item, index, i0) => {
      return {
        a: index,
        b: item["width"],
        c: item["height"],
        d: item["marginTop"]
      };
    }),
    l: common_vendor.n(_ctx.animate ? "animate" : ""),
    m: common_vendor.sei("r0-74533145", "view", "up-skeleton__wrapper__content"),
    n: common_vendor.sei("r1-74533145", "view", "up-skeleton__wrapper")
  }) : {}, {
    o: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    p: `${_ctx.u_s_b_h}px`,
    q: `${_ctx.u_s_a_i_b}px`,
    r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74533145"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-skeleton/up-skeleton.js.map
