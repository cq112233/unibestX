"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upPopup_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-popup",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upPopup_props.propsPopup],
  data() {
    return {
      overlayDuration: 0
    };
  },
  created() {
    this.overlayDuration = parseInt(this.duration.toString()) + 50;
  },
  watch: {
    show(newValue = null, oldValue = null) {
    }
  },
  computed: {
    transitionStyle() {
      const style = new common_vendor.UTSJSONObject({
        display: "flex"
      });
      if (!this.pageInline) {
        style["zIndex"] = parseInt(this.zIndex.toString()) + 1;
        style["position"] = "fixed";
      }
      style[this.mode] = 0;
      if (this.mode === "left") {
        return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (this.mode === "right") {
        return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (this.mode === "top") {
        return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (this.mode === "bottom") {
        return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (this.mode === "center") {
        return uni_modules_uviewUltra_libs_function_index.deepMerge(style, new common_vendor.UTSJSONObject({
          alignItems: "center",
          "justify-content": "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }));
      }
      return new common_vendor.UTSJSONObject({});
    },
    contentStyle() {
      const style = new common_vendor.UTSJSONObject(
        {}
        // 通过设备信息的safeAreaInsets值来判断是否需要预留顶部状态栏和底部安全局的位置
        // 不使用css方案，是因为nvue不支持css的iPhoneX安全区查询属性
      );
      common_vendor.index.getWindowInfo().safeAreaInsets;
      if (this.mode !== "center") {
        style["flex"] = 1;
      }
      if (this.bgColor != "") {
        style["backgroundColor"] = this.bgColor;
      }
      if (this.round != "") {
        const value = uni_modules_uviewUltra_libs_function_index.addUnit(this.round);
        if (this.mode === "top") {
          style["borderBottomLeftRadius"] = value;
          style["borderBottomRightRadius"] = value;
        } else if (this.mode === "bottom") {
          style["borderTopLeftRadius"] = value;
          style["borderTopRightRadius"] = value;
        } else if (this.mode === "center") {
          style["borderRadius"] = value;
        }
      }
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
    },
    position() {
      if (this.mode === "center") {
        return this.zoom ? "fade-zoom" : "fade";
      }
      if (this.mode === "left") {
        return "slide-left";
      }
      if (this.mode === "right") {
        return "slide-right";
      }
      if (this.mode === "bottom") {
        return "slide-up";
      }
      if (this.mode === "top") {
        return "slide-down";
      }
      return "";
    }
  },
  emits: ["open", "close", "click", "update:show"],
  methods: {
    // 点击遮罩
    overlayClick() {
      if (this.closeOnClickOverlay) {
        this.$emit("update:show", false);
        this.$emit("close");
      }
    },
    close(e = null) {
      this.$emit("update:show", false);
      this.$emit("close");
    },
    afterEnter() {
      this.$emit("open");
    },
    clickHandler() {
      if (this.mode === "center") {
        this.overlayClick();
      }
      this.$emit("click");
    }
    // retryComputedComponentRect(children: any): void {
    // 	// 组件内部需要计算节点的组件
    // 	const names = ['up-calendar-month', 'up-album', 'up-collapse-item', 'up-dropdown', 'up-index-item', 'up-index-list',
    // 		'up-line-progress', 'up-list-item', 'up-rate', 'up-read-more', 'up-row', 'up-row-notice', 'up-scroll-list',
    // 		'up-skeleton', 'up-slider', 'up-steps-item', 'up-sticky', 'up-subsection', 'up-swipe-action-item', 'up-tabbar',
    // 		'up-tabs', 'up-tooltip'
    // 	]
    // 	// 历遍所有的子组件节点
    // 	for (let i = 0; i < children.length; i++) {
    // 		const child = children[i]
    // 		// 拿到子组件的子组件
    // 		const grandChild = child.$children
    // 		// 判断如果在需要重新初始化的组件数组中名中，并且存在init方法的话，则执行
    // 		if (names.includes(child.$options.name) && typeof child?.init === 'function') {
    // 			// 需要进行一定的延时，因为初始化页面需要时间
    // 			sleep(50).then(() => {
    // 				child.init()
    // 			})
    // 		}
    // 		// 如果子组件还有孙组件，进行递归历遍
    // 		if (grandChild.length) {
    // 			this.retryComputedComponentRect(grandChild)
    // 		}
    // 	}
    // }
  }
});
if (!Array) {
  const _easycom_up_overlay2 = common_vendor.resolveComponent("up-overlay");
  const _easycom_up_status_bar2 = common_vendor.resolveComponent("up-status-bar");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_safe_bottom2 = common_vendor.resolveComponent("up-safe-bottom");
  const _easycom_up_transition2 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_overlay2 + _easycom_up_status_bar2 + _easycom_up_icon2 + _easycom_up_safe_bottom2 + _easycom_up_transition2)();
}
const _easycom_up_overlay = () => "../up-overlay/up-overlay.js";
const _easycom_up_status_bar = () => "../up-status-bar/up-status-bar.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_safe_bottom = () => "../up-safe-bottom/up-safe-bottom.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_overlay + _easycom_up_status_bar + _easycom_up_icon + _easycom_up_safe_bottom + _easycom_up_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.overlay && !_ctx.pageInline
  }, _ctx.overlay && !_ctx.pageInline ? {
    b: common_vendor.o($options.overlayClick, "47"),
    c: common_vendor.p({
      show: _ctx.show && !_ctx.pageInline,
      zIndex: _ctx.zIndex,
      duration: $data.overlayDuration,
      customStyle: _ctx.overlayStyle,
      opacity: _ctx.overlayOpacity,
      class: "data-v-86915299"
    })
  } : {}, {
    d: _ctx.safeAreaInsetTop
  }, _ctx.safeAreaInsetTop ? {
    e: common_vendor.p({
      class: "data-v-86915299"
    })
  } : {}, {
    f: _ctx.closeable
  }, _ctx.closeable ? {
    g: common_vendor.p({
      name: "close",
      color: "#909399",
      size: "18",
      bold: true,
      class: "data-v-86915299"
    }),
    h: common_vendor.o((...args) => $options.close && $options.close(...args), "6f"),
    i: common_vendor.n("up-popup__content__close--" + _ctx.closeIconPos)
  } : {}, {
    j: _ctx.safeAreaInsetBottom
  }, _ctx.safeAreaInsetBottom ? {
    k: common_vendor.p({
      class: "data-v-86915299"
    })
  } : {}, {
    l: common_vendor.s($options.contentStyle),
    m: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args), "49"),
    n: common_vendor.o($options.afterEnter, "d7"),
    o: common_vendor.o($options.clickHandler, "d1"),
    p: common_vendor.p({
      show: _ctx.pageInline ? true : _ctx.show,
      customStyle: $options.transitionStyle,
      mode: _ctx.pageInline ? "none" : $options.position,
      duration: _ctx.duration,
      class: "data-v-86915299"
    }),
    q: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    r: common_vendor.n(_ctx.customClass),
    s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    t: `${_ctx.u_s_b_h}px`,
    v: `${_ctx.u_s_a_i_b}px`
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-86915299"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-popup/up-popup.js.map
