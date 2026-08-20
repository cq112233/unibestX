import { e as getWindowInfo, a as addUnit, d as deepMerge, b as addStyle, s as sleep } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, provide } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-list"
  },
  __name: "up-list",
  props: {
    showScrollbar: {
      type: Boolean,
      default: false
    },
    lowerThreshold: {
      type: [String, Number],
      default: 50
    },
    upperThreshold: {
      type: [String, Number],
      default: 0
    },
    scrollTop: {
      type: [String, Number],
      default: 0
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    scrollIntoView: {
      type: String,
      default: ""
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number],
      default: 0
    },
    width: {
      type: [String, Number],
      default: 0
    },
    refresherEnabled: {
      type: Boolean,
      default: false
    },
    refresherThreshold: {
      type: Number,
      default: 45
    },
    refresherDefaultStyle: {
      type: String,
      default: "black"
    },
    refresherBackground: {
      type: String,
      default: "#FFF"
    },
    refresherTriggered: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: [
    "scroll",
    "scrolltolower",
    "scroll-to-lower",
    "scrolltoupper",
    "scroll-to-upper",
    "refresherpulling",
    "refresherrefresh",
    "refresherrestore",
    "refresherabort"
  ],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const innerScrollTop = ref(0);
    const offset = ref(0);
    const sys = getWindowInfo();
    const listStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.width != 0)
        style["width"] = addUnit(props.width);
      if (props.height != 0)
        style["height"] = addUnit(props.height);
      if (style["height"] == null)
        style["height"] = addUnit(sys.windowHeight, "px");
      return deepMerge(style, addStyle(props.customStyle));
    });
    provide("upListContext", new UTSJSONObject({
      innerScrollTop,
      updateOffsetFromChild: (top) => {
        offset.value = top;
      }
    }));
    function onScroll(e) {
      let top = e.detail.scrollTop;
      innerScrollTop.value = top;
      emit("scroll", top);
    }
    function scrolltolower(e) {
      sleep(30).then(() => {
        emit("scrolltolower");
        emit("scroll-to-lower");
      });
    }
    function scrolltoupper(e) {
      sleep(30).then(() => {
        emit("scrolltoupper");
        emit("scroll-to-upper");
        offset.value = 0;
      });
    }
    function refresherpulling(e) {
      emit("refresherpulling", e);
    }
    function refresherrefresh(e) {
      emit("refresherrefresh", e);
    }
    function refresherrestore(e) {
      emit("refresherrestore", e);
    }
    function refresherabort(e) {
      emit("refresherabort", e);
    }
    const __returned__ = { props, emit, innerScrollTop, offset, sys, listStyle, onScroll, scrolltolower, scrolltoupper, refresherpulling, refresherrefresh, refresherrestore, refresherabort };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-list": { "": { "flexDirection": "column" } } };
const { renderSlot: _renderSlot, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("scroll-view", {
    class: "up-list",
    direction: "vertical",
    "scroll-into-view": $props.scrollIntoView,
    style: _normalizeStyle([$setup.listStyle]),
    "scroll-top": parseFloat($props.scrollTop.toString()),
    "lower-threshold": parseFloat($props.lowerThreshold.toString()),
    "upper-threshold": parseFloat($props.upperThreshold.toString()),
    "show-scrollbar": $props.showScrollbar,
    "scroll-with-animation": $props.scrollWithAnimation,
    onScroll: $setup.onScroll,
    onScrolltolower: $setup.scrolltolower,
    onScrolltoupper: $setup.scrolltoupper,
    "refresher-enabled": $props.refresherEnabled,
    "refresher-threshold": $props.refresherThreshold,
    "refresher-default-style": $props.refresherDefaultStyle,
    "refresher-background": $props.refresherBackground,
    "refresher-triggered": $props.refresherTriggered,
    onRefresherpulling: $setup.refresherpulling,
    onRefresherrefresh: $setup.refresherrefresh,
    onRefresherrestore: $setup.refresherrestore,
    onRefresherabort: $setup.refresherabort
  }, [
    _createElementVNode("view", null, [
      _renderSlot(_ctx.$slots, "default")
    ])
  ], 44, ["scroll-into-view", "scroll-top", "lower-threshold", "upper-threshold", "show-scrollbar", "scroll-with-animation", "refresher-enabled", "refresher-threshold", "refresher-default-style", "refresher-background", "refresher-triggered"]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-list/up-list.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-list.js.map
