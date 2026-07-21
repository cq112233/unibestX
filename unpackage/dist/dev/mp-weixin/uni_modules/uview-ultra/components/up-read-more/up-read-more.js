"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upReadMore_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-read-more",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upReadMore_props.propsReadMore],
  data() {
    return {
      isLongContent: true,
      status: "close",
      elId: uni_modules_uviewUltra_libs_function_index.guid(),
      contentHeight: 0,
      initRetryCount: 0
      // 高度测量重试次数
    };
  },
  computed: {
    // 展开后无需阴影，收起时才需要阴影样式
    innerShadowStyle() {
      if (this.status === "open")
        return new common_vendor.UTSJSONObject({});
      return this.shadowStyle;
    }
  },
  mounted() {
    this.init();
  },
  emits: ["open", "close"],
  methods: {
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    getPx(e = null) {
      return uni_modules_uviewUltra_libs_function_index.getPx(e);
    },
    init() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        yield uni_modules_uviewUltra_libs_function_index.sleep(150);
        this.getContentHeight().then((size) => {
          var _a;
          this.contentHeight = (_a = size.height) !== null && _a !== void 0 ? _a : 0;
          if (this.contentHeight <= 0) {
            this.initRetryCount = this.initRetryCount + 1;
            if (this.initRetryCount <= 3) {
              setTimeout(() => {
                this.init();
              }, 200);
            }
            return null;
          }
          if (this.contentHeight <= parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(this.showHeight))) {
            this.isLongContent = false;
            this.status = "close";
          }
        });
      });
    },
    // 获取内容的高度
    getContentHeight() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
          this.upGetRect("." + this.elId).then((res) => {
            resolve(res);
          });
        });
      });
    },
    // 展开或者收起
    toggleReadMore() {
      this.status = this.status === "close" ? "open" : "close";
      if (this.toggle == false)
        this.isLongContent = false;
      this.$emit(this.status, this.name);
    }
  }
});
if (!Array) {
  const _easycom_up_text2 = common_vendor.resolveComponent("up-text");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_text2 + _easycom_up_icon2)();
}
const _easycom_up_text = () => "../up-text/up-text.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  (_easycom_up_text + _easycom_up_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: common_vendor.sei("r0-fb6e0f23", "view", "up-read-more__content__inner"),
    b: common_vendor.n($data.elId),
    c: $data.isLongContent && $data.status === "close" ? $options.addUnit(_ctx.showHeight) : "auto",
    d: $data.isLongContent
  }, $data.isLongContent ? {
    e: common_vendor.p({
      text: $data.status === "close" ? _ctx.closeText : _ctx.openText,
      color: _ctx.color,
      size: _ctx.fontSize,
      lineHeight: _ctx.fontSize,
      margin: "0 5px 0 0",
      class: "data-v-fb6e0f23"
    }),
    f: common_vendor.p({
      color: _ctx.color,
      size: parseInt($options.getPx(_ctx.fontSize)) + 2,
      name: $data.status === "close" ? "arrow-down" : "arrow-up",
      class: "data-v-fb6e0f23"
    }),
    g: common_vendor.o((...args) => $options.toggleReadMore && $options.toggleReadMore(...args), "aa"),
    h: common_vendor.s($options.innerShadowStyle)
  } : {}, {
    i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    j: `${_ctx.u_s_b_h}px`,
    k: `${_ctx.u_s_a_i_b}px`,
    l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb6e0f23"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-read-more/up-read-more.js.map
