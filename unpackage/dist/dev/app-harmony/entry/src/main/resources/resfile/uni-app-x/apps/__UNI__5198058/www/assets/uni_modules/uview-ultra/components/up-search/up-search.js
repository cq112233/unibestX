import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { b as addStyle, d as deepMerge, a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, watch, onMounted, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-search"
  },
  __name: "up-search",
  props: {
    shape: {
      type: String,
      default: "round"
    },
    bgColor: {
      type: String,
      default: "#f2f2f2"
    },
    placeholder: {
      type: String,
      default: "请输入关键字"
    },
    clearabled: {
      type: Boolean,
      default: true
    },
    focus: {
      type: Boolean,
      default: false
    },
    showAction: {
      type: Boolean,
      default: true
    },
    actionStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    actionText: {
      type: String,
      default: "搜索"
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    inputStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: "transparent"
    },
    searchIconColor: {
      type: String,
      default: "#909399"
    },
    searchIconSize: {
      type: [Number, String],
      default: 22
    },
    color: {
      type: String,
      default: "#606266"
    },
    placeholderColor: {
      type: String,
      default: "#909399"
    },
    searchIcon: {
      type: String,
      default: "search"
    },
    iconPosition: {
      type: String,
      default: "left"
    },
    margin: {
      type: String,
      default: "0"
    },
    animation: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    maxlength: {
      type: [String, Number],
      default: -1
    },
    height: {
      type: [String, Number],
      default: 34
    },
    label: {
      type: String,
      default: ""
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    autoBlur: {
      type: Boolean,
      default: false
    },
    onlyClearableOnFocused: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["clear", "search", "custom", "focus", "blur", "click", "clickIcon", "update:modelValue", "change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const keyword = ref(props.modelValue.toString());
    const show = ref(false);
    const focused = ref(false);
    watch(() => {
      return props.modelValue;
    }, (nVal = null) => {
      keyword.value = nVal != null ? nVal.toString() : "";
    });
    const searchStyle = computed(() => {
      const base = new UTSJSONObject({
        margin: props.margin
      });
      const custom2 = addStyle(props.customStyle);
      return deepMerge(base, custom2);
    });
    const contentStyle = computed(() => {
      return new UTSJSONObject({
        backgroundColor: props.bgColor,
        borderRadius: props.shape == "round" ? "100px" : "4px",
        borderColor: props.borderColor
      });
    });
    const inputMergedStyle = computed(() => {
      var _a2;
      const base = new UTSJSONObject({
        pointerEvents: props.disabled ? "none" : "auto",
        textAlign: props.inputAlign,
        color: props.color,
        backgroundColor: props.bgColor,
        height: addUnit(props.height)
      });
      const custom2 = (_a2 = props.inputStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
      return deepMerge(base, custom2);
    });
    const actionCustomStyle = computed(() => {
      var _a2;
      return (_a2 = props.actionStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
    });
    const showActionBtn = computed(() => {
      return !props.animation && props.showAction;
    });
    const isShowClear = computed(() => {
      if (!props.clearabled) {
        return false;
      }
      if (props.onlyClearableOnFocused) {
        return !!focused.value && keyword.value != "";
      } else {
        return keyword.value != "";
      }
    });
    onMounted(() => {
      focused.value = props.focus;
    });
    function inputChange(e) {
      keyword.value = e.detail.value;
      emit("update:modelValue", keyword.value);
      emit("change", keyword.value);
    }
    function clear() {
      keyword.value = "";
      emit("update:modelValue", "");
      emit("change", "");
      nextTick(() => {
        emit("clear");
      });
    }
    function search(e) {
      emit("search", e.detail.value);
      try {
        uni.hideKeyboard();
      } catch (err) {
      }
    }
    function custom() {
      emit("custom", keyword.value);
      try {
        uni.hideKeyboard();
      } catch (err) {
      }
    }
    function getFocus() {
      focused.value = true;
      if (props.animation && props.showAction)
        show.value = true;
      emit("focus", keyword.value);
    }
    function blurFunc() {
      setTimeout(() => {
        focused.value = false;
      }, 100);
      show.value = false;
      emit("blur", keyword.value);
    }
    function clickHandler() {
      if (props.disabled)
        emit("click");
    }
    function clickIcon(e) {
      emit("clickIcon", keyword.value);
      try {
        uni.hideKeyboard();
      } catch (err) {
      }
    }
    __expose({
      clear
    });
    const __returned__ = { props, emit, keyword, show, focused, searchStyle, contentStyle, inputMergedStyle, actionCustomStyle, showActionBtn, isShowClear, inputChange, clear, search, custom, getFocus, blurFunc, clickHandler, clickIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-search": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-search__content": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "justifyContent": "space-between", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "rgba(0,0,0,0)", "borderRightColor": "rgba(0,0,0,0)", "borderBottomColor": "rgba(0,0,0,0)", "borderLeftColor": "rgba(0,0,0,0)", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "overflow": "hidden" } }, "up-search__content__icon": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "up-search__content__label": { "": { "color": "#303133", "fontSize": 14, "marginTop": 0, "marginRight": 4, "marginBottom": 0, "marginLeft": 4 } }, "up-search__content__close": { "": { "width": 20, "height": 20, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#C6C7CB", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "transform": "scale(0.82)" } }, "up-search__content__input": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "fontSize": 14, "lineHeight": 1, "marginTop": 0, "marginRight": 5, "marginBottom": 0, "marginLeft": 5, "color": "#303133" } }, "up-search__content__input--placeholder": { "": { "color": "#909193" } }, "up-search__action": { "": { "fontSize": 14, "color": "#303133", "width": 0, "overflow": "hidden", "transitionProperty": "width", "transitionDuration": "0.3s", "whiteSpace": "nowrap", "textAlign": "center" } }, "up-search__action--active": { "": { "width": 40, "marginLeft": 5 } }, "@TRANSITION": { "up-search__action": { "property": "width", "duration": "0.3s" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, withModifiers: _withModifiers, normalizeClass: _normalizeClass } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-search", [$props.iconPosition == "right" ? "up-search__reverse" : ""]]),
      onClick: $setup.clickHandler,
      style: _normalizeStyle($setup.searchStyle)
    },
    [
      _createElementVNode(
        "view",
        {
          class: "up-search__content",
          style: _normalizeStyle($setup.contentStyle)
        },
        [
          _ctx.$slots["label"] != null || $props.label != "" ? _renderSlot(_ctx.$slots, "label", { key: 0 }, () => [
            _createElementVNode(
              "text",
              { class: "up-search__content__label" },
              _toDisplayString($props.label),
              1
              /* TEXT */
            )
          ]) : _createCommentVNode("v-if", true),
          _createElementVNode("view", { class: "up-search__content__icon" }, [
            _createVNode(_component_up_icon, {
              onClick: $setup.clickIcon,
              size: $props.searchIconSize,
              name: $props.searchIcon,
              color: $props.searchIconColor != "" ? $props.searchIconColor : $props.color
            }, null, 8, ["size", "name", "color"])
          ]),
          _createElementVNode("input", {
            "confirm-type": "search",
            onBlur: $setup.blurFunc,
            value: $setup.keyword,
            onConfirm: $setup.search,
            onInput: $setup.inputChange,
            disabled: $props.disabled,
            onFocus: $setup.getFocus,
            focus: $props.focus,
            maxlength: $props.maxlength,
            "adjust-position": $props.adjustPosition,
            "auto-blur": $props.autoBlur,
            "placeholder-class": "up-search__content__input--placeholder",
            placeholder: $props.placeholder,
            "placeholder-style": `color: ${$props.placeholderColor}`,
            class: "up-search__content__input",
            type: "text",
            style: _normalizeStyle($setup.inputMergedStyle)
          }, null, 44, ["value", "disabled", "focus", "maxlength", "adjust-position", "auto-blur", "placeholder", "placeholder-style"]),
          $setup.isShowClear ? (_openBlock(), _createElementBlock("view", {
            key: 1,
            class: "up-search__content__icon up-search__content__close",
            onClick: $setup.clear
          }, [
            _createVNode(_component_up_icon, {
              name: "close",
              size: "11",
              color: "#ffffff",
              customStyle: "line-height: 12px"
            })
          ])) : _createCommentVNode("v-if", true),
          _renderSlot(_ctx.$slots, "inputRight")
        ],
        4
        /* STYLE */
      ),
      _createElementVNode(
        "text",
        {
          style: _normalizeStyle($setup.actionCustomStyle),
          class: _normalizeClass(["up-search__action", [$setup.showActionBtn || $setup.show ? "up-search__action--active" : ""]]),
          onClick: _withModifiers($setup.custom, ["stop", "prevent"])
        },
        _toDisplayString($props.actionText),
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
