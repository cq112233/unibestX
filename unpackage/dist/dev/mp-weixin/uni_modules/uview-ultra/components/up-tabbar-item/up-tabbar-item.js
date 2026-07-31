"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upTabbarItem_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-tabbar-item",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upTabbarItem_props.propsTabbarItem],
  data() {
    return {
      isActive: false,
      routeSyncTimer: 0,
      routeSyncLast: "",
      parentData: new common_vendor.UTSJSONObject({
        value: null,
        activeColor: "",
        inactiveColor: ""
      })
    };
  },
  //  微信小程序中 options 选项
  options: {
    virtualHost: true
    //将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等
  },
  computed: {
    // 计算是否为中间按钮
    isMidButton() {
      return this.mode === "midButton";
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.startRouteSync();
  },
  beforeUnmount() {
    this.clearRouteSync();
  },
  emits: ["click", "change"],
  methods: {
    addStyle(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(val);
    },
    clearRouteSync() {
      if (this.routeSyncTimer != null) {
        clearInterval(this.routeSyncTimer);
        this.routeSyncTimer = 0;
      }
    },
    getCurrentRoutePath() {
      const pages = getCurrentPages();
      if (pages == null || pages.length == 0)
        return "";
      const currentPage = pages[pages.length - 1];
      const route = currentPage != null && currentPage.route != null ? currentPage.route.toString() : "";
      if (route == "")
        return "";
      return route.startsWith("/") ? route : `/${route}`;
    },
    normalizeRoutePath(path) {
      return path.replace(/^[#\\/]+/, "");
    },
    syncActiveByRouteOrValue() {
      this.updateParentData();
      const index = this.getChildIndex(this);
      const name = this.name != null ? this.name : index;
      const routePath = this.getCurrentRoutePath();
      if (typeof name === "string" && routePath != "") {
        const isRouteMatch = this.normalizeRoutePath(name) == this.normalizeRoutePath(routePath);
        if (isRouteMatch) {
          this.isActive = true;
          return null;
        }
      }
      this.isActive = name === this.parentData["value"];
    },
    startRouteSync() {
      this.clearRouteSync();
      if (!(typeof this.name === "string" && this.name.indexOf("/") > -1))
        return null;
      this.routeSyncLast = this.getCurrentRoutePath();
      this.routeSyncTimer = setInterval(() => {
        const current = this.getCurrentRoutePath();
        if (current != this.routeSyncLast) {
          this.routeSyncLast = current;
          this.syncActiveByRouteOrValue();
        }
      }, 200);
    },
    init() {
      if (this.parent == null) {
        uni_modules_uviewUltra_libs_function_index.error("up-tabbar-item必须搭配up-tabbar组件使用");
      }
      this.syncActiveByRouteOrValue();
    },
    updateParentData() {
      this.getParentData("up-tabbar");
    },
    // 此方法将会被父组件up-tabbar调用
    updateFromParent() {
      this.init();
    },
    clickHandler() {
      common_vendor.nextTick$1(() => {
        const index = this.getChildIndex(this);
        const name = this.name != null ? this.name : index;
        if (this.parent != null && name.toString() != this.parent.$props["value"].toString()) {
          this.parent.$emit("change", name);
        }
        this.$emit("click", name);
      });
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_badge2 = common_vendor.resolveComponent("up-badge");
  (_easycom_up_icon2 + _easycom_up_badge2)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_badge = () => "../up-badge/up-badge.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_badge)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $options.isMidButton
  }, $options.isMidButton ? {} : {}, {
    b: _ctx.icon
  }, _ctx.icon ? {
    c: common_vendor.p({
      name: _ctx.icon,
      color: $data.isActive ? $data.parentData["activeColor"] : $data.parentData["inactiveColor"],
      size: $options.isMidButton ? 26 : 20,
      class: "data-v-dff5b91d"
    })
  } : common_vendor.e({
    d: $data.isActive
  }, $data.isActive ? {} : {}), {
    e: common_vendor.p({
      absolute: true,
      offset: [0, _ctx.dot ? "34rpx" : _ctx.badge != null && parseInt(_ctx.badge.toString()) > 9 ? "14rpx" : "20rpx"],
      customStyle: _ctx.badgeStyle,
      isDot: _ctx.dot,
      value: _ctx.badge != null ? _ctx.dot ? 1 : _ctx.badge : 0,
      show: _ctx.dot ? true : _ctx.badge != null ? parseInt(_ctx.badge.toString()) > 0 : false,
      class: "data-v-dff5b91d"
    }),
    f: common_vendor.n($options.isMidButton ? "up-tabbar-item__icon--mid-button" : ""),
    g: common_vendor.t(_ctx.text),
    h: $data.isActive ? $data.parentData["activeColor"] : $data.parentData["inactiveColor"],
    i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    j: common_vendor.s($options.addStyle(_ctx.customStyle)),
    k: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    l: common_vendor.n($options.isMidButton ? "up-tabbar-item--mid-button" : ""),
    m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    n: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "f0")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dff5b91d"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.js.map
