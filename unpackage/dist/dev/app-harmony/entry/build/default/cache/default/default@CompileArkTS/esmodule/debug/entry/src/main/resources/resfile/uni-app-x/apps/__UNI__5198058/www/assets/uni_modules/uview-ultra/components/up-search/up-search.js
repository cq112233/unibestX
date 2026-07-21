import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, toDisplayString, createCommentVNode, createVNode, withModifiers } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { p as propsSearch } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-search/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { a as addUnit, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-search",
  mixins: [mpMixin, mixin, propsSearch],
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
      return addUnit(e);
    },
    addStyle(e = null) {
      return addStyle(e);
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
        uni.hideKeyboard();
      } catch (e2) {
      }
    },
    // 点击右边自定义按钮的事件
    custom() {
      this.$emit("custom", this.keyword);
      try {
        uni.hideKeyboard();
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
        uni.hideKeyboard();
      } catch (e2) {
      }
    }
  }
});
const _style_0 = { "up-search": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-search__content": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "justifyContent": "space-between", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "rgba(0,0,0,0)", "borderRightColor": "rgba(0,0,0,0)", "borderBottomColor": "rgba(0,0,0,0)", "borderLeftColor": "rgba(0,0,0,0)", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "overflow": "hidden" } }, "up-search__content__icon": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "up-search__content__label": { "": { "color": "#303133", "fontSize": 14, "marginTop": 0, "marginRight": 4, "marginBottom": 0, "marginLeft": 4 } }, "up-search__content__close": { "": { "width": 20, "height": 20, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomLeftRadius": 100, "borderBottomRightRadius": 100, "backgroundColor": "#C6C7CB", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.82)" } }, "up-search__content__input": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "fontSize": 14, "marginTop": 0, "marginRight": 5, "marginBottom": 0, "marginLeft": 5, "color": "#303133" } }, "up-search__content__input--placeholder": { "": { "color": "#909193" } }, "up-search__action": { "": { "fontSize": 14, "color": "#303133", "width": 0, "overflow": "hidden", "transitionProperty": "width", "transitionDuration": "0.3s", "whiteSpace": "nowrap", "textAlign": "center" } }, "up-search__action--active": { "": { "width": 40, "marginLeft": 5 } }, "@TRANSITION": { "up-search__action": { "property": "width", "duration": "0.3s" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-search", [_ctx.iconPosition === "right" ? "up-search__reverse" : ""]]),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      style: normalizeStyle([{
        margin: _ctx.margin
      }, $options.addStyle(_ctx.customStyle)])
    },
    [
      createElementVNode(
        "view",
        {
          class: "up-search__content",
          style: normalizeStyle({
            backgroundColor: _ctx.bgColor,
            borderRadius: _ctx.shape == "round" ? "100px" : "4px",
            borderColor: _ctx.borderColor
          })
        },
        [
          _ctx.$slots["label"] != null || _ctx.label !== null ? renderSlot(_ctx.$slots, "label", { key: 0 }, () => [
            createElementVNode(
              "text",
              { class: "up-search__content__label" },
              toDisplayString(_ctx.label),
              1
              /* TEXT */
            )
          ]) : createCommentVNode("v-if", true),
          createElementVNode("view", { class: "up-search__content__icon" }, [
            createVNode(_component_up_icon, {
              onClick: $options.clickIcon,
              size: _ctx.searchIconSize,
              name: _ctx.searchIcon,
              color: _ctx.searchIconColor != "" ? _ctx.searchIconColor : _ctx.color
            }, null, 8, ["onClick", "size", "name", "color"])
          ]),
          createElementVNode("input", {
            "confirm-type": "search",
            onBlur: _cache[0] || (_cache[0] = (...args) => $options.blurFunc && $options.blurFunc(...args)),
            value: $data.keyword,
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.search && $options.search(...args)),
            onInput: _cache[2] || (_cache[2] = (...args) => $options.inputChange && $options.inputChange(...args)),
            disabled: _ctx.disabled,
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.getFocus && $options.getFocus(...args)),
            focus: _ctx.focus,
            maxlength: _ctx.maxlength,
            "adjust-position": _ctx.adjustPosition,
            "auto-blur": _ctx.autoBlur,
            "placeholder-class": "up-search__content__input--placeholder",
            placeholder: _ctx.placeholder,
            "placeholder-style": `color: ${_ctx.placeholderColor}`,
            class: "up-search__content__input",
            type: "text",
            style: normalizeStyle([{
              pointerEvents: _ctx.disabled ? "none" : "auto",
              textAlign: _ctx.inputAlign,
              color: _ctx.color,
              backgroundColor: _ctx.bgColor,
              height: $options.addUnit(_ctx.height)
            }, _ctx.inputStyle])
          }, null, 44, ["value", "disabled", "focus", "maxlength", "adjust-position", "auto-blur", "placeholder", "placeholder-style"]),
          $options.isShowClear ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "up-search__content__icon up-search__content__close",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            createVNode(_component_up_icon, {
              name: "close",
              size: "11",
              color: "#ffffff",
              customStyle: "line-height: 12px"
            })
          ])) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "inputRight")
        ],
        4
        /* STYLE */
      ),
      createElementVNode(
        "text",
        {
          style: normalizeStyle([_ctx.actionStyle]),
          class: normalizeClass(["up-search__action", [$options.showActionBtn || $data.show ? "up-search__action--active" : ""]]),
          onClick: _cache[5] || (_cache[5] = withModifiers((...args) => $options.custom && $options.custom(...args), ["stop", "prevent"]))
        },
        toDisplayString(_ctx.actionText),
        7
        /* TEXT, CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-search/up-search.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-search.js.map
