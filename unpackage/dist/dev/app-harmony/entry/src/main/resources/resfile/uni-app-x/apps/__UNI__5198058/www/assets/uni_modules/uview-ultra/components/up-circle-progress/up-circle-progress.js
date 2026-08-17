import { b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCircleProgressUpCircleProgress";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-circle-progress"
  },
  __dynamicSharedData: true,
  __hash: "88a79214",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-circle-progress/up-circle-progress.uvue",
  __name: "up-circle-progress",
  props: {
    percentage: {
      type: [String, Number],
      default: 30
    },
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    inactiveColor: {
      type: String,
      default: "#e5e9f2"
    },
    width: {
      type: [String, Number],
      default: 80
    },
    strokeWidth: {
      type: [String, Number],
      default: 6
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
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCircleProgressUpCircleProgressSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const percent = computed(() => {
      const val = typeof props.percentage === "number" ? props.percentage : parseFloat(props.percentage.toString());
      return isNaN(val) ? 0 : Math.max(0, Math.min(100, val));
    });
    const sizePx = computed(() => {
      const raw = props.width;
      if (typeof raw === "number")
        return raw;
      const parsed = parseFloat(raw.toString());
      return isNaN(parsed) ? 80 : parsed;
    });
    const strokePx = computed(() => {
      const raw = props.strokeWidth;
      if (typeof raw === "number")
        return raw;
      const parsed = parseFloat(raw.toString());
      return isNaN(parsed) ? 6 : parsed;
    });
    const circleStyle = computed(() => {
      const style = new UTSJSONObject({});
      const size = sizePx.value.toString() + "px";
      style["width"] = size;
      style["height"] = size;
      style["borderRadius"] = size;
      style["borderWidth"] = strokePx.value.toString() + "px";
      style["borderStyle"] = "solid";
      style["borderColor"] = percent.value > 0 ? props.activeColor : props.inactiveColor;
      return style;
    });
    const rootCircleStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const circle = circleStyle.value;
      return deepMerge(circle, custom);
    });
    const innerStyle = computed(() => {
      const style = new UTSJSONObject({});
      return style;
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 2, rootCircleStyle.value);
        _setSharedDataStyle(__sharedData, 3, innerStyle.value);
      });
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 0, { color: __props.activeColor });
          _setSharedData(__sharedData, 1, _toDisplayString(percent.value));
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
//# sourceMappingURL=up-circle-progress.js.map
