"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSticky_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_config_zIndex = require("../../libs/config/zIndex.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-sticky",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSticky_props.propsSticky],
  data() {
    return {
      cssSticky: false,
      stickyTop: 0,
      elId: uni_modules_uviewUltra_libs_function_index.guid(),
      left: 0,
      width: "auto",
      height: "auto",
      fixed: false,
      contentObserver: null,
      rafId: 0
      // requestAnimationFrame ID
    };
  },
  computed: {
    // 组件样式
    style() {
      const style = new common_vendor.UTSJSONObject({});
      if (!this.disabled) {
        style["height"] = this.fixed ? this.height + "px" : "auto";
      } else {
        style["position"] = "relative";
      }
      style["backgroundColor"] = this.bgColor;
      return uni_modules_uviewUltra_libs_function_index.deepMerge(uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle), style);
    },
    // 吸顶内容的样式
    stickyContent() {
      const style = new common_vendor.UTSJSONObject({});
      if (!this.cssSticky) {
        style["position"] = this.fixed ? "fixed" : "static";
        style["top"] = this.stickyTop + "px";
        style["left"] = this.left + "px";
        style["width"] = this.width == "auto" ? "auto" : this.width + "px";
        style["zIndex"] = this.uZindex;
      }
      return style;
    },
    uZindex() {
      return this.$props["zIndex"].toString() != "" ? this.zIndex : uni_modules_uviewUltra_libs_config_zIndex.zIndex["sticky"];
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    offsetTop(nval) {
      this.getStickyTop();
    }
  },
  methods: {
    init() {
      this.getStickyTop();
      if (!this.cssSticky) {
        if (!this.disabled) {
          this.initObserveContent();
        }
      }
    },
    initObserveContent() {
      this.upGetRect("#" + this.elId).then((res) => {
        var _a, _b, _c;
        this.height = ((_a = res.height) !== null && _a !== void 0 ? _a : "").toString();
        this.left = (_b = res.left) !== null && _b !== void 0 ? _b : 0;
        this.width = ((_c = res.width) !== null && _c !== void 0 ? _c : "").toString();
        common_vendor.nextTick$1(() => {
        });
      });
    },
    observeContent() {
      this.disconnectObserver("contentObserver");
      const contentObserver = common_vendor.index.createIntersectionObserver(this, {
        // 检测的区间范围
        thresholds: [0.95, 0.98, 1]
      });
      contentObserver.relativeToViewport(new common_vendor.UTSJSONObject({
        top: -this.stickyTop
      }));
      contentObserver.observe("#" + this.elId, (res) => {
        this.setFixed(res.boundingClientRect.top);
      });
      this.contentObserver = contentObserver;
    },
    setFixed(top) {
      const fixed = top > this.stickyTop;
      this.fixed = fixed;
    },
    disconnectObserver(observerName) {
      const observer = this.$data[observerName];
      if (observer != null) {
        observer.disconnect();
      }
    },
    getStickyTop() {
      this.stickyTop = parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(this.offsetTop)) + parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(this.customNavHeight));
    }
  },
  beforeUnmount() {
    this.disconnectObserver("contentObserver");
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.sei($data.elId, "view"),
    b: common_vendor.s($options.stickyContent),
    c: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    d: common_vendor.s($options.style),
    e: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d941f132"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-sticky/up-sticky.js.map
