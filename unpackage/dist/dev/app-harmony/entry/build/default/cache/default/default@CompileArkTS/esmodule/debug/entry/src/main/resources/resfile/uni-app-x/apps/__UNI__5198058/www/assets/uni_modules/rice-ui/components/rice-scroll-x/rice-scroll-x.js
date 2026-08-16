import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { d as getPxNum, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-scroll-x/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, setSharedDataAttr: _setSharedDataAttr, toSharedDataAttrBoolean: _toSharedDataAttrBoolean, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceScrollXRiceScrollX";
const { ref, shallowRef, computed, nextTick, onMounted, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-scroll-x",
    styleIsolation: "app-and-page",
    externalClasses: ["indicator-class", "indicator-active-class"]
  },
  __dynamicSharedData: true,
  __hash: "11acc5ae",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-scroll-x/rice-scroll-x.uvue",
  __name: "rice-scroll-x",
  props: {
    showIndicator: { type: Boolean, default: true },
    indicatorWidth: { default: "50px", type: [String, Number] },
    indicatorHeight: { type: [String, Number] },
    indicatorBarWidth: { default: "20px", type: [String, Number] },
    indicatorColor: { type: String },
    indicatorActiveColor: { type: String },
    indicatorClass: { default: "", type: String },
    indicatorActiveClass: { default: "", type: String },
    indicatorStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["scrollToLeft", "scrollToRight"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceScrollXRiceScrollXSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("scroll-x");
    const emit = __emit;
    const props = __props;
    const bounces = ref(false);
    const scrollXRef = shallowRef(null);
    const barRef = shallowRef(null);
    const _indicatorWidth = computed(() => {
      return getPxNum(addUnit(props.indicatorWidth));
    });
    const _indicatorBarWidth = computed(() => {
      return getPxNum(addUnit(props.indicatorBarWidth));
    });
    const scrollXWidth = ref(0);
    const getScrollRect = async () => {
      await nextTick();
      if (scrollXRef.value != null) {
        const rect = await scrollXRef.value.getBoundingClientRectAsync();
        scrollXWidth.value = rect.width;
      }
    };
    const onScrolltoupper = () => {
      emit("scrollToLeft");
    };
    const onScrolltolower = () => {
      emit("scrollToRight");
    };
    const onScroll = async (e) => {
      var _a2;
      const scrollLeft = e.detail.scrollLeft;
      const scrollWidth = e.detail.scrollWidth;
      if (scrollXWidth.value == 0) {
        await getScrollRect();
      }
      const x = scrollLeft / (scrollWidth - scrollXWidth.value) * (_indicatorWidth.value - _indicatorBarWidth.value);
      (_a2 = barRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transform", `translateX(${x}px)`);
    };
    const indicatorStyles = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.indicatorHeight != null) {
        css.set("height", addUnit(props.indicatorHeight));
      }
      return css;
    });
    const lineStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("width", addUnit(props.indicatorWidth));
      if (props.indicatorColor != null) {
        css.set("background-color", props.indicatorColor);
      }
      return css;
    });
    const barStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("width", addUnit(props.indicatorBarWidth));
      if (props.indicatorActiveColor != null) {
        css.set("background-color", props.indicatorActiveColor);
      }
      return css;
    });
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        getScrollRect();
      }, 50);
    });
    onUnmounted(() => {
      if (timer != null)
        clearTimeout(timer);
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 11, ["rice-scroll-x", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 12, __props.customStyle);
        _setSharedDataAttr(__sharedData, 13, _toSharedDataAttrBoolean(_unref(bounces), true));
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataEvent(__sharedData, 7, onScroll);
      _setSharedDataEvent(__sharedData, 8, onScrolltoupper);
      _setSharedDataEvent(__sharedData, 9, onScrolltolower);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showIndicator));
      }, () => {
        _setSharedDataTemplateRef(__sharedData, 1, (n4) => {
          _setTemplateRef(n4, barRef, null, "barRef");
        });
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 2, _unref(indicatorStyles));
          _setSharedDataClass(__sharedData, 3, ["rice-scroll-x__indicator__line", __props.indicatorClass]);
          _setSharedDataStyle(__sharedData, 4, [_unref(lineStyle), __props.indicatorStyle]);
          _setSharedDataClass(__sharedData, 5, ["rice-scroll-x__indicator__bar", __props.indicatorActiveClass]);
          _setSharedDataStyle(__sharedData, 6, _unref(barStyle));
        });
      });
      _setSharedDataTemplateRef(__sharedData, 10, (n7) => {
        _setTemplateRef(n7, scrollXRef, null, "scrollXRef");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-scroll-x.js.map
