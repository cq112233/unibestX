import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-sticky/sticky&";
import { g as getPx, d as deepMerge, b as addStyle, j as guid } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { z as zIndexConfig } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/zIndex&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-sticky"
  },
  __name: "up-sticky",
  props: {
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    customNavHeight: {
      type: [String, Number],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "transparent"
    },
    zIndex: {
      type: [String, Number],
      default: ""
    },
    index: {
      type: [String, Number],
      default: ""
    },
    scrollTop: {
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
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const instance = getCurrentInstance();
    const uZindex = computed(() => {
      var _a2;
      const zVal = props.zIndex;
      if (zVal != null && zVal.toString() != "") {
        const parsed = parseInt(zVal.toString());
        if (!isNaN(parsed)) {
          return parsed;
        }
      }
      return (_a2 = zIndexConfig["sticky"]) !== null && _a2 !== void 0 ? _a2 : 999;
    });
    const webMpStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (!props.disabled) {
        style["position"] = "sticky";
        const top_1 = parseFloat(getPx(props.offsetTop));
        style["top"] = top_1 + "px";
        style["zIndex"] = uZindex.value;
      } else {
        style["position"] = "relative";
      }
      if (props.bgColor != "") {
        style["backgroundColor"] = props.bgColor;
      }
      return deepMerge(addStyle(props.customStyle), style);
    });
    const elId = ref("up-sticky-" + guid());
    const isFixed = ref(false);
    const initialTop = ref(0);
    const height = ref(0);
    const left = ref(0);
    const width = ref(0);
    const isInit = ref(false);
    const stickyTop = computed(() => {
      return parseFloat(getPx(props.offsetTop)) + parseFloat(getPx(props.customNavHeight));
    });
    const wrapperStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (isFixed.value && height.value > 0) {
        style["height"] = height.value + "px";
      }
      return style;
    });
    const contentStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (!props.disabled && isFixed.value) {
        style["position"] = "fixed";
        style["top"] = stickyTop.value + "px";
        style["left"] = left.value + "px";
        if (width.value > 0) {
          style["width"] = width.value + "px";
        }
        style["zIndex"] = uZindex.value;
      } else {
        style["position"] = "relative";
      }
      if (props.bgColor != "") {
        style["backgroundColor"] = props.bgColor;
      }
      return deepMerge(addStyle(props.customStyle), style);
    });
    function getRect() {
      return new Promise((resolve) => {
        uni.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select("#" + elId.value).boundingClientRect().exec((ret) => {
          resolve(ret[0]);
        });
      });
    }
    function init() {
      getRect().then((res) => {
        var _a2;
        if (res.height != null && res.height > 0) {
          height.value = res.height;
        }
        if (res.left != null) {
          left.value = res.left;
        }
        if (res.width != null && res.width > 0) {
          width.value = res.width;
        }
        const currentTop = (_a2 = res.top) !== null && _a2 !== void 0 ? _a2 : 0;
        const st = parseFloat(props.scrollTop.toString());
        initialTop.value = currentTop + st;
        isInit.value = true;
        checkFixed(st);
      });
    }
    function checkFixed(st) {
      if (!isInit.value) {
        init();
        return null;
      }
      const currentY = initialTop.value - st;
      if (currentY <= stickyTop.value && initialTop.value > 0) {
        if (!isFixed.value) {
          getRect().then((res) => {
            if (res.width != null && res.width > 0) {
              width.value = res.width;
            }
            if (res.left != null) {
              left.value = res.left;
            }
            if (res.height != null && res.height > 0) {
              height.value = res.height;
            }
          });
        }
        isFixed.value = true;
      } else {
        isFixed.value = false;
      }
    }
    watch(() => {
      return props.scrollTop;
    }, (val = null) => {
      if (props.disabled)
        return null;
      const st = parseFloat(val.toString());
      checkFixed(st);
    });
    onMounted(() => {
      init();
    });
    const __returned__ = { props, instance, uZindex, webMpStyle, elId, isFixed, initialTop, height, left, width, isInit, stickyTop, wrapperStyle, contentStyle, getRect, init, checkFixed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-sticky": { "": { "width": "100%", "boxSizing": "border-box" } }, "up-sticky__content": { "": { "boxSizing": "border-box" } } };
const { renderSlot: _renderSlot, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", {
    class: "up-sticky",
    id: $setup.elId,
    style: _normalizeStyle($setup.wrapperStyle)
  }, [
    _createElementVNode(
      "view",
      {
        class: "up-sticky__content",
        style: _normalizeStyle($setup.contentStyle)
      },
      [
        _renderSlot(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    )
  ], 12, ["id"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-sticky.js.map
