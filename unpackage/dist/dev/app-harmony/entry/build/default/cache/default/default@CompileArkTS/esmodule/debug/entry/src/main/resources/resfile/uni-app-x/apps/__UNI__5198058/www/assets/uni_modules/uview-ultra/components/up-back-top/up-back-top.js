import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, renderSlot, createVNode, toDisplayString, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-back-top/backtop&";
import { d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-back-top",
  mixins: [mpMixin, mixin],
  props: {
    mode: {
      type: String,
      default: "circle"
    },
    icon: {
      type: String,
      default: "arrow-upward"
    },
    text: {
      type: String,
      default: ""
    },
    duration: {
      type: [String, Number],
      default: 100
    },
    scrollTop: {
      type: [String, Number],
      default: 0
    },
    top: {
      type: [String, Number],
      default: 100
    },
    bottom: {
      type: [String, Number],
      default: 80
    },
    right: {
      type: [String, Number],
      default: 20
    },
    zIndex: {
      type: [String, Number],
      default: 999
    },
    iconStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click"],
  computed: {
    show() {
      var _a, _b;
      const sVal = ((_a = this.scrollTop) !== null && _a !== void 0 ? _a : 0).toString();
      const tVal = ((_b = this.top) !== null && _b !== void 0 ? _b : 100).toString();
      const sTop = parseFloat(sVal);
      const targetTop = parseFloat(tVal);
      if (isNaN(sTop))
        return false;
      const threshold = isNaN(targetTop) ? 100 : targetTop;
      return sTop >= threshold;
    },
    finalStyle() {
      var _a, _b, _c;
      const bStr = ((_a = this.bottom) !== null && _a !== void 0 ? _a : 80).toString();
      const rStr = ((_b = this.right) !== null && _b !== void 0 ? _b : 20).toString();
      const bVal = bStr.includes("px") ? bStr : bStr + "px";
      const rVal = rStr.includes("px") ? rStr : rStr + "px";
      const zVal = parseInt(((_c = this.zIndex) !== null && _c !== void 0 ? _c : 999).toString());
      const style = new UTSJSONObject({
        position: "fixed",
        bottom: bVal,
        right: rVal,
        width: "44px",
        height: "44px",
        zIndex: isNaN(zVal) ? 999 : zVal,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: this.mode === "circle" ? "100px" : "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#e2e8f0"
      });
      return deepMerge(style, addStyle(this.customStyle));
    }
  },
  methods: {
    backToTop(e = null) {
      uni.pageScrollTo(new UTSJSONObject({
        scrollTop: 0,
        duration: parseInt(this.duration.toString()),
        fail: (_ = null) => {
        }
      }));
      this.$emit("click", e);
    }
  }
});
const _style_0 = { "up-back-top__text": { "": { "fontSize": 10, "color": "#2563eb", "marginTop": 2 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return $options.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      style: normalizeStyle($options.finalStyle),
      class: "up-back-top",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.backToTop && $options.backToTop(...args))
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode(_component_up_icon, {
          name: $props.icon,
          size: "22",
          color: "#2563eb"
        }, null, 8, ["name"]),
        $props.text != "" ? (openBlock(), createElementBlock(
          "text",
          {
            key: 0,
            class: "up-back-top__text"
          },
          toDisplayString($props.text),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)
      ])
    ],
    4
    /* STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-back-top/up-back-top.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-back-top.js.map
