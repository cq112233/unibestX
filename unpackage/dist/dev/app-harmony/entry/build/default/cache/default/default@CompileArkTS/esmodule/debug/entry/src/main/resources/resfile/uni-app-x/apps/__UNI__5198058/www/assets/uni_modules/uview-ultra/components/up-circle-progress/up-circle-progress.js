import { f as range, a as addUnit, b as addStyle, d as deepMerge } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataClass: _setSharedDataClass, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCircleProgressUpCircleProgress";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-circle-progress"
  },
  __dynamicSharedData: true,
  __hash: "424fe104",
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
      default: ""
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
    function normalizeNumber(value = null, defaultValue = 0) {
      if (typeof value == "number") {
        return value;
      }
      if (value == null) {
        return defaultValue;
      }
      const parsed = parseFloat(value.toString());
      return isNaN(parsed) ? defaultValue : parsed;
    }
    const props = __props;
    const isDefaultColor = computed(() => {
      return props.activeColor == "";
    });
    const percent = computed(() => {
      return range(0, 100, normalizeNumber(props.percentage, 30));
    });
    const size = computed(() => {
      return addUnit(props.width);
    });
    const stroke = computed(() => {
      return addUnit(props.strokeWidth);
    });
    const rootStyle = computed(() => {
      const base = new UTSJSONObject({});
      base["width"] = size.value;
      base["height"] = size.value;
      const custom = addStyle(props.customStyle);
      return deepMerge(base, custom);
    });
    const trackStyle = computed(() => {
      return new UTSJSONObject({
        width: size.value,
        height: size.value,
        borderWidth: stroke.value,
        borderColor: props.inactiveColor
      });
    });
    const textStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.activeColor != "") {
        style["color"] = props.activeColor;
      }
      return style;
    });
    function buildFillStyle(deg) {
      const style = new UTSJSONObject({});
      style["width"] = size.value;
      style["height"] = size.value;
      style["borderWidth"] = stroke.value;
      if (props.activeColor != "") {
        style["borderTopColor"] = props.activeColor;
        style["borderRightColor"] = props.activeColor;
      }
      style["borderBottomColor"] = "transparent";
      style["borderLeftColor"] = "transparent";
      style["transform"] = `rotate(${deg.toString()}deg)`;
      return style;
    }
    const rightStyle = computed(() => {
      let deg = percent.value * 3.6 - 135;
      if (deg > 45) {
        deg = 45;
      }
      if (deg < -135) {
        deg = -135;
      }
      return buildFillStyle(deg);
    });
    const leftStyle = computed(() => {
      let deg = percent.value * 3.6 - 135;
      if (deg < 45) {
        deg = 45;
      }
      if (deg > 225) {
        deg = 225;
      }
      return buildFillStyle(deg);
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 9, rootStyle.value);
        _setSharedDataStyle(__sharedData, 10, trackStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(percent.value > 0));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 1, ["up-circle-progress__fill up-circle-progress__fill--right", [isDefaultColor.value ? "up-circle-progress__fill--primary" : ""]]);
          _setSharedDataStyle(__sharedData, 2, rightStyle.value);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(percent.value > 50));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 4, ["up-circle-progress__fill up-circle-progress__fill--left", [isDefaultColor.value ? "up-circle-progress__fill--primary" : ""]]);
          _setSharedDataStyle(__sharedData, 5, leftStyle.value);
        });
      });
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 6, ["up-circle-progress__text", [isDefaultColor.value ? "up-circle-progress__text--primary" : ""]]);
          _setSharedDataStyle(__sharedData, 7, textStyle.value);
          _setSharedData(__sharedData, 8, _toDisplayString(percent.value));
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
