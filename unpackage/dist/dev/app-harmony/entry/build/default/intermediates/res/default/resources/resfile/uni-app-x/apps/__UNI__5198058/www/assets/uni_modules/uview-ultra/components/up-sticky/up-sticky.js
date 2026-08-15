import "./sticky.js";
import { g as getPx, d as deepMerge, b as addStyle, j as guid } from "../../libs/function/index.js";
import { z as zIndexConfig } from "../../libs/config/zIndex.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpStickyUpSticky";
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-sticky"
  },
  __dynamicSharedData: true,
  __hash: "6eab6503",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-sticky/up-sticky.uvue",
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
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpStickyUpStickySharedData", sharedDataClassId: 0 })));
    const props = __props;
    const instance = getCurrentInstance();
    const uZindex = computed(() => {
      var _a;
      const zVal = props.zIndex;
      if (zVal != null && zVal.toString() != "") {
        const parsed = parseInt(zVal.toString());
        if (!isNaN(parsed)) {
          return parsed;
        }
      }
      return (_a = zIndexConfig["sticky"]) !== null && _a !== void 0 ? _a : 999;
    });
    computed(() => {
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
        var _a;
        if (res.height != null && res.height > 0) {
          height.value = res.height;
        }
        if (res.left != null) {
          left.value = res.left;
        }
        if (res.width != null && res.width > 0) {
          width.value = res.width;
        }
        const currentTop = (_a = res.top) !== null && _a !== void 0 ? _a : 0;
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
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataAttr(__sharedData, 0, _toSharedDataString(elId.value));
        _setSharedDataStyle(__sharedData, 1, wrapperStyle.value);
        _setSharedDataStyle(__sharedData, 2, contentStyle.value);
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-sticky.js.map
