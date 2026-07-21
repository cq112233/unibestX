import { _ as __easycom_41 } from "../up-loading-icon/up-loading-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { p as propsSwitch } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { f as error, a as addUnit, g as getPx, b as addStyle } from "../../libs/function/index.js";
import "../../types/common.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-switch",
  mixins: [mpMixin, mixin, propsSwitch],
  watch: {
    modelValue: {
      immediate: true,
      handler(n = null) {
        if (n !== this.inactiveValue && n !== this.activeValue) {
          error("v-model绑定的值必须为inactiveValue、activeValue二者之一");
        }
      }
    }
  },
  data() {
    return {
      bgColor: "#ffffff"
    };
  },
  computed: {
    switchClass() {
      let classes = ["up-switch", "cursor-pointer"];
      if (this.disabled) {
        classes.push("up-switch--disabled");
      }
      if (this.isActive) {
        classes.push("up-switch--on");
      } else {
        classes.push("up-switch--off");
      }
      return classes.join(" ");
    },
    isActive() {
      return this.modelValue === this.activeValue;
    },
    switchStyle() {
      let style = new UTSJSONObject(
        {}
        // 仅当 size 不是默认值 25 时，才把 width 和 height 写入内联样式中，避免内联属性污染
      );
      if (this.size.toString() != "25") {
        style["width"] = addUnit(parseInt(this.size.toString()) * 2 + 2);
        style["height"] = addUnit(parseInt(this.size.toString()) + 2);
      }
      if (this.isActive) {
        style["borderColor"] = "rgba(0, 0, 0, 0)";
      } else {
        if (this.customInactiveColor) {
          style["borderColor"] = "rgba(0, 0, 0, 0)";
        } else {
          style["borderColor"] = "rgba(0, 0, 0, 0.12)";
        }
      }
      return style;
    },
    bgActiveStyle() {
      let style = new UTSJSONObject(
        {}
        // @ts-ignore
      );
      style["width"] = addUnit(parseInt(this.size.toString()) * 2 + 2);
      style["height"] = addUnit(parseInt(this.size.toString()) + 2);
      if (this.activeColor != "#2979ff") {
        style["backgroundColor"] = this.activeColor;
      }
      return style;
    },
    nodeStyle() {
      let style = new UTSJSONObject(
        {}
        // 如果自定义非激活颜色，将node圆点的尺寸减少两个像素，让其与外边框距离更大一点
        // @ts-ignore
      );
      style["width"] = addUnit(parseInt(this.size.toString()) - parseInt(this.space.toString()));
      style["height"] = addUnit(parseInt(this.size.toString()) - parseInt(this.space.toString()));
      const translateX = this.isActive ? addUnit(this.space) : addUnit(this.size);
      style["transform"] = `translateX(-${translateX})`;
      return style;
    },
    bgStyle() {
      let style = new UTSJSONObject(
        {}
        // 这里宽度设置为 parseInt(size) * 2，刚好填满容器内部宽度，防止关闭时两侧露出绿色背景
        // @ts-ignore
      );
      style["width"] = addUnit(parseInt(this.size.toString()) * 2);
      style["height"] = addUnit(parseInt(this.size.toString()));
      style["backgroundColor"] = this.inactiveColor;
      style["transform"] = `scale(${this.isActive ? 0 : 1})`;
      return style;
    },
    customInactiveColor() {
      return this.inactiveColor !== "#fff" && this.inactiveColor !== "#ffffff";
    }
  },
  emits: ["update:modelValue", "change"],
  methods: {
    getPx(e = null) {
      return getPx(e);
    },
    addStyle(e = null) {
      return addStyle(e);
    },
    clickHandler() {
      if (!this.disabled && !this.loading) {
        const oldValue = this.isActive ? this.inactiveValue : this.activeValue;
        if (!this.asyncChange) {
          this.$emit("update:modelValue", oldValue);
        }
        this.$nextTick(() => {
          this.$emit("change", oldValue);
        });
      }
    }
  }
});
const _style_0 = { "up-switch": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "backgroundColor": "rgba(0,0,0,0)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "transitionProperty": "backgroundColor", "transitionDuration": "0.4s", "borderTopColor": "rgba(0,0,0,0.12)", "borderRightColor": "rgba(0,0,0,0.12)", "borderBottomColor": "rgba(0,0,0,0.12)", "borderLeftColor": "rgba(0,0,0,0.12)", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "justifyContent": "flex-end", "alignItems": "center", "overflow": "hidden", "width": 52, "height": 27 } }, "up-switch__bg-active": { "": { "position": "absolute", "top": -1, "left": -1, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "var(--theme-color, #0957de)", "width": 52, "height": 27 } }, "up-switch__node": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#ffffff", "boxShadow": "1px 1px 1px 0 rgba(0, 0, 0, 0.25)", "transitionProperty": "transform", "transitionDuration": "0.4s", "transitionTimingFunction": "cubic-bezier(0.3,1.05,0.4,1.05)" } }, "up-switch__bg": { "": { "position": "absolute", "borderTopLeftRadius": 0, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 0, "backgroundColor": "#FFFFFF", "transitionProperty": "transform", "transitionDuration": "0.4s", "transitionTimingFunction": "ease" } }, "up-switch--disabled": { "": { "opacity": 0.6 } }, "@TRANSITION": { "up-switch": { "property": "backgroundColor", "duration": "0.4s" }, "up-switch__node": { "property": "transform", "duration": "0.4s", "timingFunction": "cubic-bezier(0.3,1.05,0.4,1.05)" }, "up-switch__bg": { "property": "transform", "duration": "0.4s", "timingFunction": "ease" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_41);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass($options.switchClass),
      style: normalizeStyle([$options.switchStyle, $options.addStyle(_ctx.customStyle)]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    },
    [
      $options.isActive ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: "up-switch__bg-active",
          style: normalizeStyle([$options.bgActiveStyle])
        },
        null,
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      !$options.isActive ? (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          class: "up-switch__bg",
          style: normalizeStyle([$options.bgStyle])
        },
        null,
        4
        /* STYLE */
      )) : createCommentVNode("v-if", true),
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-switch__node", [_ctx.modelValue == _ctx.activeValue ? "up-switch__node--on" : ""]]),
          style: normalizeStyle([$options.nodeStyle]),
          ref: "up-switch__node"
        },
        [
          createVNode(_component_up_loading_icon, {
            show: _ctx.loading,
            mode: "circle",
            timingFunction: "linear",
            color: _ctx.modelValue == _ctx.activeValue ? _ctx.activeColor : "#AAABAD",
            size: parseInt($options.getPx(_ctx.size)) * 0.6
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
const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-switch/up-switch.uvue"]]);
export {
  __easycom_7 as _
};
//# sourceMappingURL=up-switch.js.map
