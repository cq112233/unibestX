"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSearch_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-search",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSearch_props.propsSearch],
  data() {
    return {
      keyword: "",
      show: false,
      // 标记input当前状态是否处于聚焦中，如果是，才会显示右侧的清除控件
      focused: false
      // 绑定输入框的值
      // inputValue: this.value
    };
  },
  mounted() {
    this.focused = this.focus;
  },
  watch: {
    keyword(nVal) {
      this.$emit("update:modelValue", nVal);
      this.$emit("change", nVal);
    },
    modelValue: {
      immediate: true,
      handler(nVal) {
      }
    }
  },
  computed: {
    showActionBtn() {
      return !this.animation && this.showAction;
    },
    // 是否显示清除控件
    isShowClear() {
      let clearabled = this.$props["clearabled"];
      let focused = this.$data["focused"];
      let keyword = this.$data["keyword"];
      let onlyClearableOnFocused = this.$props["onlyClearableOnFocused"];
      if (!clearabled) {
        return false;
      }
      if (onlyClearableOnFocused) {
        return !!focused && keyword !== "";
      } else {
        return keyword !== "";
      }
    }
  },
  emits: ["clear", "search", "custom", "focus", "blur", "click", "clickIcon", "update:modelValue", "change"],
  methods: {
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    // 目前HX2.6.9 v-model双向绑定无效，故监听input事件获取输入框内容的变化
    inputChange(e) {
      this.keyword = e.detail.value;
    },
    // 清空输入
    // 也可以作为用户通过this.$refs形式调用清空输入框内容
    clear() {
      this.keyword = "";
      this.$nextTick(() => {
        this.$emit("clear");
      });
    },
    // 确定搜索
    search(e) {
      this.$emit("search", e.detail.value);
      try {
        common_vendor.index.hideKeyboard();
      } catch (e2) {
      }
    },
    // 点击右边自定义按钮的事件
    custom() {
      this.$emit("custom", this.keyword);
      try {
        common_vendor.index.hideKeyboard();
      } catch (e) {
      }
    },
    // 获取焦点
    getFocus() {
      this.focused = true;
      if (this.animation && this.showAction)
        this.show = true;
      this.$emit("focus", this.keyword);
    },
    // 失去焦点
    blurFunc() {
      setTimeout(() => {
        this.focused = false;
      }, 100);
      this.show = false;
      this.$emit("blur", this.keyword);
    },
    // 点击搜索框，只有disabled=true时才发出事件，因为禁止了输入，意味着是想跳转真正的搜索页
    clickHandler() {
      if (this.disabled)
        this.$emit("click");
    },
    // 点击左边图标
    clickIcon(e) {
      this.$emit("clickIcon", this.keyword);
      try {
        common_vendor.index.hideKeyboard();
      } catch (e2) {
      }
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: _ctx.$slots["label"] != null || _ctx.label !== null
  }, _ctx.$slots["label"] != null || _ctx.label !== null ? {
    b: common_vendor.t(_ctx.label)
  } : {}, {
    c: common_vendor.o($options.clickIcon, "10"),
    d: common_vendor.p({
      size: _ctx.searchIconSize,
      name: _ctx.searchIcon,
      color: _ctx.searchIconColor != "" ? _ctx.searchIconColor : _ctx.color,
      class: "data-v-86b11a81"
    }),
    e: common_vendor.o((...args) => $options.blurFunc && $options.blurFunc(...args), "c9"),
    f: $data.keyword,
    g: common_vendor.o((...args) => $options.search && $options.search(...args), "22"),
    h: common_vendor.o((...args) => $options.inputChange && $options.inputChange(...args), "f8"),
    i: _ctx.disabled,
    j: common_vendor.o((...args) => $options.getFocus && $options.getFocus(...args), "87"),
    k: _ctx.focus,
    l: _ctx.maxlength,
    m: _ctx.adjustPosition,
    n: _ctx.autoBlur,
    o: _ctx.placeholder,
    p: `color: ${_ctx.placeholderColor}`,
    q: common_vendor.s({
      pointerEvents: _ctx.disabled ? "none" : "auto",
      textAlign: _ctx.inputAlign,
      color: _ctx.color,
      backgroundColor: _ctx.bgColor,
      height: $options.addUnit(_ctx.height)
    }),
    r: common_vendor.s(_ctx.inputStyle),
    s: $options.isShowClear
  }, $options.isShowClear ? {
    t: common_vendor.p({
      name: "close",
      size: "11",
      color: "#ffffff",
      customStyle: "line-height: 12px",
      class: "data-v-86b11a81"
    }),
    v: common_vendor.o((...args) => $options.clear && $options.clear(...args), "4d")
  } : {}, {
    w: _ctx.bgColor,
    x: _ctx.shape == "round" ? "100px" : "4px",
    y: _ctx.borderColor,
    z: common_vendor.t(_ctx.actionText),
    A: common_vendor.s(_ctx.actionStyle),
    B: common_vendor.n($options.showActionBtn || $data.show ? "up-search__action--active" : ""),
    C: common_vendor.o((...args) => $options.custom && $options.custom(...args), "b7"),
    D: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    E: common_vendor.n(_ctx.iconPosition === "right" ? "up-search__reverse" : ""),
    F: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    G: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args), "74"),
    H: common_vendor.s({
      margin: _ctx.margin
    }),
    I: common_vendor.s($options.addStyle(_ctx.customStyle)),
    J: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-86b11a81"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-search/up-search.js.map
