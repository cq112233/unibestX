import { e as getWindowInfo, a as addUnit, d as deepMerge, b as addStyle, s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedDataStyle: _setSharedDataStyle, toSharedDataNumber: _toSharedDataNumber, toSharedDataAttrBoolean: _toSharedDataAttrBoolean, toSharedDataScrollViewRefresherDefaultStyle: _toSharedDataScrollViewRefresherDefaultStyle, toSharedDataColor: _toSharedDataColor, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpListUpList";
const { ref, computed, provide } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-list"
  },
  __dynamicSharedData: true,
  __hash: "3e309736",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-list/up-list.uvue",
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
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpListUpListSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataAttr(__sharedData, 7, _toSharedDataString(__props.scrollIntoView));
        _setSharedDataStyle(__sharedData, 8, [listStyle.value]);
        _setSharedDataAttr(__sharedData, 9, _toSharedDataNumber(parseFloat(__props.scrollTop.toString())));
        _setSharedDataAttr(__sharedData, 10, _toSharedDataNumber(parseFloat(__props.lowerThreshold.toString())));
        _setSharedDataAttr(__sharedData, 11, _toSharedDataNumber(parseFloat(__props.upperThreshold.toString())));
        _setSharedDataAttr(__sharedData, 12, _toSharedDataAttrBoolean(__props.showScrollbar, true));
        _setSharedDataAttr(__sharedData, 13, _toSharedDataAttrBoolean(__props.scrollWithAnimation, false));
        _setSharedDataAttr(__sharedData, 14, _toSharedDataAttrBoolean(__props.refresherEnabled, false));
        _setSharedDataAttr(__sharedData, 15, _toSharedDataNumber(__props.refresherThreshold));
        _setSharedDataAttr(__sharedData, 16, _toSharedDataScrollViewRefresherDefaultStyle(__props.refresherDefaultStyle));
        _setSharedDataAttr(__sharedData, 17, _toSharedDataColor(__props.refresherBackground));
        _setSharedDataAttr(__sharedData, 18, _toSharedDataAttrBoolean(__props.refresherTriggered, false));
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataEvent(__sharedData, 0, onScroll);
      _setSharedDataEvent(__sharedData, 1, scrolltolower);
      _setSharedDataEvent(__sharedData, 2, scrolltoupper);
      _setSharedDataEvent(__sharedData, 3, refresherpulling);
      _setSharedDataEvent(__sharedData, 4, refresherrefresh);
      _setSharedDataEvent(__sharedData, 5, refresherrestore);
      _setSharedDataEvent(__sharedData, 6, refresherabort);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-list.js.map
