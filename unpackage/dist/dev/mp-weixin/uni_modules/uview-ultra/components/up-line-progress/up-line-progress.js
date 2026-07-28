"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upLineProgress_lineProgress = require("./lineProgress.js");
let crtProp = uni_modules_uviewUltra_components_upLineProgress_lineProgress.defProps["lineProgress"];
function normalizeNumber(value = null, defaultValue = 0) {
  if (typeof value === "number") {
    return value;
  }
  if (value == null) {
    return defaultValue;
  }
  const parsed = parseFloat(value.toString());
  return isNaN(parsed) ? defaultValue : parsed;
}
const _sfc_main = common_vendor.defineComponent({
  name: "up-line-progress",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin],
  props: {
    activeColor: {
      type: String,
      default: crtProp["activeColor"]
    },
    inactiveColor: {
      type: String,
      default: crtProp["inactiveColor"]
    },
    percentage: {
      type: [String, Number],
      default: crtProp["percentage"]
    },
    showText: {
      type: Boolean,
      default: crtProp["showText"]
    },
    height: {
      type: [String, Number],
      default: crtProp["height"]
    }
  },
  data() {
    return {
      lineWidth: "0px"
    };
  },
  watch: {
    percentage() {
      this.resizeProgressWidth();
    },
    height() {
      this.resizeProgressWidth();
    }
  },
  computed: {
    percentageValue() {
      return normalizeNumber(this.percentage, 0);
    },
    innerPercentage() {
      return uni_modules_uviewUltra_libs_function_index.range(0, 100, this.percentageValue);
    },
    backgroundStyle() {
      return new UTSJSONObject({
        backgroundColor: this.inactiveColor,
        height: uni_modules_uviewUltra_libs_function_index.addUnit(this.height)
      });
    },
    progressStyle() {
      return new UTSJSONObject({
        width: this.lineWidth,
        backgroundColor: this.activeColor,
        height: uni_modules_uviewUltra_libs_function_index.addUnit(this.height)
      });
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    init() {
      uni_modules_uviewUltra_libs_function_index.sleep(20).then(() => {
        this.resizeProgressWidth();
      });
    },
    resizeProgressWidth() {
      uni_modules_uviewUltra_libs_function_index.upGetRect(".up-line-progress__background", false, this).then((size) => {
        const width = size.width != null ? size.width : 0;
        this.lineWidth = (width * this.innerPercentage / 100).toString() + "px";
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: common_vendor.s($options.backgroundStyle),
    b: $props.showText && $options.percentageValue >= 10
  }, $props.showText && $options.percentageValue >= 10 ? {
    c: common_vendor.t($options.innerPercentage + "%")
  } : {}, {
    d: common_vendor.s($options.progressStyle),
    e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    f: common_vendor.s($options.addStyle(_ctx.customStyle)),
    g: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7fd0b3d0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-line-progress/up-line-progress.js.map
