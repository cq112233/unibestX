import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import { h as hasStrValue, a as addUnit } from "../../libs/utils/basic.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { C as Coloruts } from "../../libs/plugin/coloruts/conversion.js";
import "../../libs/plugin/coloruts/constant.js";
import "../../libs/plugin/coloruts/type.js";
import "../../libs/plugin/dateuts/type.js";
import "../../libs/plugin/dateuts/locale.js";
import "./type.js";
import { u as useLoading, U as UseLoadingOptions } from "./useLoading.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceLoadingRiceLoading";
const { useSlots, computed, shallowRef } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-loading",
    styleIsolation: "app-and-page",
    externalClasses: ["text-class"]
  },
  __dynamicSharedData: true,
  __hash: "49beef60",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-loading/rice-loading.uvue",
  __name: "rice-loading",
  props: {
    mode: { default: "circular", type: String },
    duration: { default: 1100, type: Number },
    color: { type: String },
    inactiveColor: { type: String },
    size: { default: "24px", type: [String, Number] },
    text: { type: [String, Number] },
    textColor: { type: String },
    textSize: { type: [String, Number] },
    textClass: { default: "", type: String },
    vertical: { type: Boolean, default: false },
    timingFunction: { default: "ease-in-out", type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceLoadingRiceLoadingSharedData", sharedDataClassId: 0 })));
    const slot = useSlots();
    const ns = useNamespace("loading");
    const props = __props;
    const color = computed(() => {
      return hasStrValue(props.color) ? props.color : "#1989fa";
    });
    const hasText = computed(() => {
      return props.text != null && props.text != "" || slot["default"] != null;
    });
    computed(() => {
      return props.mode;
    });
    const rootClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("vertical", props.vertical),
        ns.is("slot", slot["icon"] != null)
      ];
    });
    const semicircleStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      const size = addUnit(props.size);
      css.set("height", size);
      css.set("width", size);
      if (props.mode == "circle") {
        if (hasStrValue(props.inactiveColor)) {
          css.set("border-color", props.inactiveColor);
        } else if (color.value != "inherit") {
          const rgb = new Coloruts(color.value).toRgb();
          css.set("border-color", `rgba(${rgb["r"]},${rgb["g"]},${rgb["b"]},.2)`);
        }
      }
      css.set("border-top-color", color.value);
      return css;
    });
    computed(() => {
      const css = /* @__PURE__ */ new Map();
      const size = addUnit(props.size);
      css.set("height", size);
      css.set("width", size);
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
    const loadingTextClass = computed(() => {
      return `rice-loading__text--${props.vertical ? "vertical" : "row"}`;
    });
    const rotateRef = shallowRef(null);
    const circularRef = shallowRef(null);
    const animationTimingFn = computed(() => {
      return props.mode == "snow" || slot["icon"] != null ? "linear" : props.timingFunction;
    });
    useLoading(new UseLoadingOptions({
      rotateRef,
      circularRef,
      timingFunction: animationTimingFn.value,
      mode: props.mode,
      color,
      size: props.size,
      duration: props.duration
    }));
    const nativeLoadingStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      const size = addUnit(props.size);
      css.set("height", size);
      css.set("width", size);
      css.set("border-color", color.value);
      return css;
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      const _component_loading = _resolveComponent("loading");
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 12, _unref(rootClass));
        _setSharedDataStyle(__sharedData, 13, __props.customStyle);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.mode == "snow" || _unref(slot)["icon"] != null));
      }, () => {
        _createSharedDataSlot("icon", null, null, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_rice_icon, "587a5167", {
            name: "loading",
            size: () => {
              return __props.size;
            },
            color: () => {
              return _unref(color);
            }
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        });
        _setSharedDataTemplateRef(__sharedData, 2, (n5) => {
          _setTemplateRef(n5, rotateRef, null, "rotateRef");
        });
      }, () => {
        return _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.mode == "semicircle" || __props.mode == "circle"));
        }, () => {
          _setSharedDataTemplateRef(__sharedData, 4, (n7) => {
            _setTemplateRef(n7, rotateRef, null, "rotateRef");
          });
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 5, _unref(ns).m(__props.mode));
            _setSharedDataStyle(__sharedData, 6, _unref(semicircleStyle));
          });
        }, () => {
          const n9 = _createSharedDataComponentWithFallback(_component_loading, "587a5fb0", { style: () => {
            return _unref(nativeLoadingStyle);
          } });
          _setSharedData(__sharedData, 7, n9?.sharedData);
        }, 517);
      }, 261);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 8, _toSharedDataBoolean(_unref(hasText)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 10, ["rice-loading__text", [_unref(loadingTextClass), props.textClass]]);
          _setSharedDataStyle(__sharedData, 11, _unref(textStyle));
        });
        _createSharedDataSlot("default", null, null, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 9, _toDisplayString(__props.text));
          });
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=rice-loading.js.map
