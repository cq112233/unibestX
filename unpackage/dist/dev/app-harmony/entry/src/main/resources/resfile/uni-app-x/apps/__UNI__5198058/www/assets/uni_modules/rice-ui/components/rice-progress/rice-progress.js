import "./type.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { t as toNum, a as addUnit, c as clamp } from "../../libs/utils/basic.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceProgressRiceProgress";
const { useSlots, computed, ref, shallowRef, nextTick, onMounted, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-progress",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "1aed2a3a",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-progress/rice-progress.uvue",
  __name: "rice-progress",
  props: {
    percentage: { default: 0, type: [String, Number] },
    strokeWidth: { type: [String, Number] },
    showText: { type: Boolean, default: true },
    textColor: { type: String },
    textSize: { type: [String, Number] },
    textPosition: { default: "right", type: String },
    format: { type: Function },
    color: { type: String },
    inactiveColor: { type: String },
    radius: { type: [String, Number] },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceProgressRiceProgressSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("progress");
    useSlots();
    const props = __props;
    const percent = computed(() => {
      return toNum(props.percentage);
    });
    const formatText = computed(() => {
      if (typeof props.format == "function") {
        return props.format(percent.value);
      }
      return `${percent.value}%`;
    });
    const wrapperStyle = computed(() => {
      var _a;
      const css = /* @__PURE__ */ new Map();
      if (props.strokeWidth != null)
        css.set("height", addUnit(props.strokeWidth));
      if (props.inactiveColor != null)
        css.set("background", props.inactiveColor);
      css.set("border-radius", addUnit((_a = props.radius) !== null && _a !== void 0 ? _a : "100px"));
      return css;
    });
    const wrapperWidth = ref(0);
    const barStyle = computed(() => {
      var _a;
      const css = /* @__PURE__ */ new Map();
      const num = clamp(percent.value, 0, 100) / 100;
      css.set("width", `${wrapperWidth.value * num}px`);
      if (props.color != null)
        css.set("background", props.color);
      css.set("border-radius", addUnit((_a = props.radius) !== null && _a !== void 0 ? _a : "100px"));
      return css;
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.textColor != null)
        css.set("color", props.textColor);
      if (props.textSize != null)
        css.set("font-size", addUnit(props.textSize));
      return css;
    });
    const wrapperRef = shallowRef(null);
    const obServer = ref(null);
    const resizeObserver = async () => {
      await nextTick();
      if (wrapperRef.value == null)
        return Promise.resolve(null);
      const rect = await wrapperRef.value.getBoundingClientRectAsync();
      wrapperWidth.value = rect.width;
      obServer.value = new UniResizeObserver((entries) => {
        const el = UTS.arrayFind(entries, (v) => {
          return v.target == wrapperRef.value;
        });
        if (el != null) {
          wrapperWidth.value = Math.ceil(el.contentRect.width);
        }
      });
      obServer.value.observe(wrapperRef.value);
    };
    onMounted(() => {
      resizeObserver();
    });
    onUnmounted(() => {
      var _a;
      if (wrapperRef.value != null) {
        (_a = obServer.value) === null || _a === void 0 ? null : _a.unobserve(wrapperRef.value);
      }
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 9, ["rice-progress", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 10, __props.customStyle);
        _setSharedDataClass(__sharedData, 11, ["rice-progress__wrapper", { "rice-progress--inside": __props.textPosition == "inside" }]);
        _setSharedDataStyle(__sharedData, 12, _unref(wrapperStyle));
        _setSharedDataStyle(__sharedData, 13, _unref(barStyle));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.textPosition == "inside"));
      }, () => {
        _createSharedDataSlot("default", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.showText));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 6, _unref(textStyle));
              _setSharedData(__sharedData, 7, _toDisplayString(_unref(formatText)));
            });
          });
        });
      });
      _setSharedDataTemplateRef(__sharedData, 8, (n8) => {
        _setTemplateRef(n8, wrapperRef, null, "wrapperRef");
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.textPosition == "right"));
      }, () => {
        _createSharedDataSlot("default", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.showText));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 2, _unref(textStyle));
              _setSharedData(__sharedData, 3, _toDisplayString(_unref(formatText)));
            });
          });
        });
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
//# sourceMappingURL=rice-progress.js.map
