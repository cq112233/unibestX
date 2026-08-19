import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { d as deepMerge, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-back-top"
  },
  __name: "up-back-top",
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
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const show = computed(() => {
      var _a2, _b;
      const sVal = ((_a2 = props.scrollTop) !== null && _a2 !== void 0 ? _a2 : 0).toString();
      const tVal = ((_b = props.top) !== null && _b !== void 0 ? _b : 100).toString();
      const sTop = parseFloat(sVal);
      const targetTop = parseFloat(tVal);
      if (isNaN(sTop))
        return false;
      const threshold = isNaN(targetTop) ? 100 : targetTop;
      return sTop >= threshold;
    });
    const finalStyle = computed(() => {
      var _a2, _b, _c;
      const bStr = ((_a2 = props.bottom) !== null && _a2 !== void 0 ? _a2 : 80).toString();
      const rStr = ((_b = props.right) !== null && _b !== void 0 ? _b : 20).toString();
      const bVal = bStr.includes("px") ? bStr : bStr + "px";
      const rVal = rStr.includes("px") ? rStr : rStr + "px";
      const zVal = parseInt(((_c = props.zIndex) !== null && _c !== void 0 ? _c : 999).toString());
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
        borderRadius: props.mode === "circle" ? "100px" : "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#e2e8f0"
      });
      return deepMerge(style, addStyle(props.customStyle));
    });
    function backToTop(e = null) {
      uni.pageScrollTo(new UTSJSONObject({
        scrollTop: 0,
        duration: parseInt(props.duration.toString()),
        fail: (_ = null) => {
        }
      }));
      emit("click", e);
    }
    const __returned__ = { props, emit, show, finalStyle, backToTop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-back-top__text": { "": { "fontSize": 10, "color": "#2563eb", "marginTop": 2 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeStyle: _normalizeStyle } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return $setup.show ? (_openBlock(), _createElementBlock(
    "view",
    {
      key: 0,
      style: _normalizeStyle($setup.finalStyle),
      class: "up-back-top",
      onClick: $setup.backToTop
    },
    [
      _renderSlot(_ctx.$slots, "default", {}, () => [
        _createVNode(_component_up_icon, {
          name: $props.icon,
          size: "22",
          color: "#2563eb"
        }, null, 8, ["name"]),
        $props.text != "" ? (_openBlock(), _createElementBlock(
          "text",
          {
            key: 0,
            class: "up-back-top__text"
          },
          _toDisplayString($props.text),
          1
          /* TEXT */
        )) : _createCommentVNode("v-if", true)
      ])
    ],
    4
    /* STYLE */
  )) : _createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-back-top/up-back-top.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-back-top.js.map
