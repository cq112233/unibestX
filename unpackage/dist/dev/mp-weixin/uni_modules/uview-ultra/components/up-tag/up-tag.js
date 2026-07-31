"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upTag_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_test = require("../../libs/function/test.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-tag",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upTag_props.propsTag],
  data() {
    return {};
  },
  computed: {
    style() {
      const style = new common_vendor.UTSJSONObject({});
      if (this.bgColor != "") {
        style["backgroundColor"] = this.bgColor;
      }
      if (this.color != "") {
        style["color"] = this.color;
      }
      if (this.borderColor != "") {
        style["borderColor"] = this.borderColor;
      }
      return style;
    },
    // nvue下，文本颜色无法继承父元素
    textColor() {
      const style = new common_vendor.UTSJSONObject({});
      if (this.color != "") {
        style["color"] = this.color;
      }
      return style;
    },
    imgStyle() {
      const width = this.size === "large" ? "17px" : this.size === "medium" ? "15px" : "13px";
      return new common_vendor.UTSJSONObject({
        width,
        height: width
      });
    },
    // 文本的样式
    closeSize() {
      const size = this.size === "large" ? "15px" : this.size === "medium" ? "13px" : "12px";
      return size;
    },
    // 图标大小
    iconSize() {
      const size = this.size === "large" ? "21px" : this.size === "medium" ? "19px" : "16px";
      return size;
    },
    // 图标颜色
    elIconColor() {
      return this.iconColor != "" ? this.iconColor : this.plain ? this.type : "#ffffff";
    }
  },
  emits: ["click", "close"],
  methods: {
    testImage(str) {
      return uni_modules_uviewUltra_libs_function_test.image(str);
    },
    // 点击关闭按钮
    closeHandler() {
      this.$emit("close", this.$props["name"].toString());
    },
    // 点击标签
    clickHandler() {
      this.$emit("click", this.$props["name"].toString());
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_transition2 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_icon2 + _easycom_up_transition2)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? common_vendor.e({
    b: $options.testImage(_ctx.icon)
  }, $options.testImage(_ctx.icon) ? {
    c: _ctx.icon,
    d: common_vendor.s($options.imgStyle)
  } : {
    e: common_vendor.p({
      color: $options.elIconColor,
      name: _ctx.icon,
      size: $options.iconSize,
      class: "data-v-3e67a6dc"
    })
  }) : {}, {
    f: common_vendor.t(_ctx.text),
    g: common_vendor.s($options.textColor),
    h: common_vendor.n(`up-tag__text--${_ctx.type}`),
    i: common_vendor.n(_ctx.plain ? `up-tag__text--${_ctx.type}--plain` : ""),
    j: common_vendor.n(`up-tag__text--${_ctx.size}`),
    k: common_vendor.n(`up-tag--${_ctx.shape}`),
    l: common_vendor.n(!_ctx.plain ? `up-tag--${_ctx.type}` : ""),
    m: common_vendor.n(_ctx.plain ? `up-tag--${_ctx.type}--plain` : ""),
    n: common_vendor.n(`up-tag--${_ctx.size}`),
    o: common_vendor.n(_ctx.plain && _ctx.plainFill ? `up-tag--${_ctx.type}--plain--fill` : ""),
    p: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "d9"),
    q: common_vendor.s({
      marginRight: _ctx.closable ? "10px" : 0,
      marginTop: _ctx.closable ? "10px" : 0
    }),
    r: common_vendor.s($options.style),
    s: _ctx.closable
  }, _ctx.closable ? {
    t: common_vendor.p({
      name: "close",
      size: $options.closeSize,
      color: "#ffffff",
      class: "data-v-3e67a6dc"
    }),
    v: common_vendor.n(`up-tag__close--${_ctx.size}`),
    w: common_vendor.o((...args) => $options.closeHandler && $options.closeHandler(...args), "34"),
    x: _ctx.closeColor
  } : {}, {
    y: common_vendor.gei(_ctx, ""),
    z: common_vendor.p({
      mode: "fade",
      show: _ctx.show,
      id: common_vendor.gei(_ctx, ""),
      class: "data-v-3e67a6dc",
      style: "display:flex"
    }),
    A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3e67a6dc"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tag/up-tag.js.map
