import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { g as getPx, a as addUnit, d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-switch"
  },
  __name: "up-switch",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number],
      default: 25
    },
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    inactiveColor: {
      type: String,
      default: "#ffffff"
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    asyncChange: {
      type: Boolean,
      default: false
    },
    space: {
      type: [String, Number],
      default: 0
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const isActive = computed(() => {
      return props.modelValue == props.activeValue;
    });
    const customInactiveColor = computed(() => {
      return props.inactiveColor != "#fff" && props.inactiveColor != "#ffffff";
    });
    const loadingIconSize = computed(() => {
      return parseInt(getPx(props.size)) * 0.6;
    });
    const loadingColor = computed(() => {
      if (isActive.value) {
        if (props.activeColor != "" && props.activeColor != "#2979ff") {
          return props.activeColor;
        }
        return "var(--theme-color, #2979ff)";
      }
      return "#AAABAD";
    });
    const switchClass = computed(() => {
      let classes = ["up-switch", "cursor-pointer"];
      if (props.disabled) {
        classes.push("up-switch--disabled");
      }
      if (isActive.value) {
        classes.push("up-switch--on");
      } else {
        classes.push("up-switch--off");
      }
      return classes.join(" ");
    });
    const switchStyle = computed(() => {
      let style = new UTSJSONObject({});
      if (props.size.toString() != "25") {
        style["width"] = addUnit(parseInt(props.size.toString()) * 2 + 2);
        style["height"] = addUnit(parseInt(props.size.toString()) + 2);
      }
      if (isActive.value) {
        style["borderColor"] = "rgba(0, 0, 0, 0)";
      } else {
        if (customInactiveColor.value) {
          style["borderColor"] = "rgba(0, 0, 0, 0)";
        } else {
          style["borderColor"] = "rgba(0, 0, 0, 0.12)";
        }
      }
      return style;
    });
    const mergedSwitchStyle = computed(() => {
      return deepMerge(switchStyle.value, addStyle(props.customStyle));
    });
    const bgActiveStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["width"] = addUnit(parseInt(props.size.toString()) * 2 + 2);
      style["height"] = addUnit(parseInt(props.size.toString()) + 2);
      if (props.activeColor != "#2979ff") {
        style["backgroundColor"] = props.activeColor;
      }
      return style;
    });
    const nodeStyle = computed(() => {
      let style = new UTSJSONObject({});
      const sizeVal = parseInt(props.size.toString());
      const spaceVal = parseInt(props.space.toString());
      style["width"] = addUnit(sizeVal - spaceVal);
      style["height"] = addUnit(sizeVal - spaceVal);
      const translateX = isActive.value ? addUnit(props.space) : addUnit(props.size);
      style["transform"] = `translateX(-${translateX})`;
      return style;
    });
    const bgStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["width"] = addUnit(parseInt(props.size.toString()) * 2);
      style["height"] = addUnit(parseInt(props.size.toString()));
      style["backgroundColor"] = props.inactiveColor;
      style["transform"] = `scale(${isActive.value ? 0 : 1})`;
      return style;
    });
    function clickHandler() {
      if (!props.disabled && !props.loading) {
        const oldValue = isActive.value ? props.inactiveValue : props.activeValue;
        if (!props.asyncChange) {
          emit("update:modelValue", oldValue);
        }
        nextTick(() => {
          emit("change", oldValue);
        });
      }
    }
    const __returned__ = { props, emit, isActive, customInactiveColor, loadingIconSize, loadingColor, switchClass, switchStyle, mergedSwitchStyle, bgActiveStyle, nodeStyle, bgStyle, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-switch": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "backgroundColor": "rgba(0,0,0,0)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "transitionProperty": "backgroundColor", "transitionDuration": "0.4s", "borderTopColor": "rgba(0,0,0,0.12)", "borderRightColor": "rgba(0,0,0,0.12)", "borderBottomColor": "rgba(0,0,0,0.12)", "borderLeftColor": "rgba(0,0,0,0.12)", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "justifyContent": "flex-end", "alignItems": "center", "overflow": "hidden", "width": 52, "height": 27 } }, "up-switch__bg-active": { "": { "position": "absolute", "top": -1, "left": -1, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "var(--theme-color, #0957de)", "width": 52, "height": 27 } }, "up-switch__node": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#ffffff", "boxShadow": "1px 1px 1px 0 rgba(0, 0, 0, 0.25)", "transitionProperty": "transform", "transitionDuration": "0.4s", "transitionTimingFunction": "cubic-bezier(0.3,1.05,0.4,1.05)" } }, "up-switch__bg": { "": { "position": "absolute", "borderTopLeftRadius": 0, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 0, "backgroundColor": "#FFFFFF", "transitionProperty": "transform", "transitionDuration": "0.4s", "transitionTimingFunction": "ease" } }, "up-switch--disabled": { "": { "opacity": 0.6 } }, "@TRANSITION": { "up-switch": { "property": "backgroundColor", "duration": "0.4s" }, "up-switch__node": { "property": "transform", "duration": "0.4s", "timingFunction": "cubic-bezier(0.3,1.05,0.4,1.05)" }, "up-switch__bg": { "property": "transform", "duration": "0.4s", "timingFunction": "ease" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass($setup.switchClass),
      style: _normalizeStyle($setup.mergedSwitchStyle),
      onClick: $setup.clickHandler
    },
    [
      $setup.isActive ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 0,
          class: "up-switch__bg-active",
          style: _normalizeStyle($setup.bgActiveStyle)
        },
        null,
        4
        /* STYLE */
      )) : _createCommentVNode("v-if", true),
      !$setup.isActive ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 1,
          class: "up-switch__bg",
          style: _normalizeStyle($setup.bgStyle)
        },
        null,
        4
        /* STYLE */
      )) : _createCommentVNode("v-if", true),
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-switch__node", [$props.modelValue == $props.activeValue ? "up-switch__node--on" : ""]]),
          style: _normalizeStyle($setup.nodeStyle)
        },
        [
          _createVNode(_component_up_loading_icon, {
            show: $props.loading,
            mode: "circle",
            timingFunction: "linear",
            color: $setup.loadingColor,
            size: $setup.loadingIconSize
          }, null, 8, ["show", "color", "size"])
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-switch/up-switch.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-switch.js.map
