import { a as addUnit, b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpBadgeUpBadge";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-badge"
  },
  __dynamicSharedData: true,
  __hash: "37f68b73",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-badge/up-badge.uvue",
  __name: "up-badge",
  props: {
    isDot: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: ""
    },
    modelValue: {
      type: [Number, String],
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    },
    max: {
      type: [Number, String],
      default: 999
    },
    type: {
      type: String,
      default: "error"
    },
    showZero: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ffffff"
    },
    shape: {
      type: String,
      default: "circle"
    },
    numberType: {
      type: String,
      default: "overflow"
    },
    offset: {
      type: Array,
      default: () => {
        return [];
      }
    },
    inverted: {
      type: Boolean,
      default: false
    },
    absolute: {
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
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpBadgeUpBadgeSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const badgeStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.color != "") {
        style["color"] = props.color;
      }
      if (props.bgColor != "" && !props.inverted) {
        style["backgroundColor"] = props.bgColor;
      }
      if (props.absolute) {
        style["position"] = "absolute";
        let offsetArray = props.offset;
        if (offsetArray.length > 0) {
          const top_1 = offsetArray[0];
          style["top"] = addUnit(top_1);
          if (offsetArray.length == 2) {
            style["right"] = addUnit(offsetArray[1]);
          } else {
            style["right"] = addUnit(top_1);
          }
        }
      }
      return style;
    });
    const computedBadgeStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const badge = badgeStyle.value;
      return deepMerge(badge, custom);
    });
    const showValue = computed(() => {
      let valueReturn = "";
      const valStr = props.value != "" ? props.value.toString() : props.modelValue != "" ? props.modelValue.toString() : "0";
      switch (props.numberType.toString()) {
        case "overflow":
          valueReturn = parseInt(valStr) > parseInt(props.max.toString()) ? props.max.toString() + "+" : valStr;
          break;
        case "ellipsis":
          valueReturn = parseInt(valStr) > parseInt(props.max.toString()) ? "..." : valStr;
          break;
        case "limit":
          valueReturn = parseInt(valStr) > 999 ? parseInt(valStr) >= 9999 ? (Math.floor(parseInt(valStr) / 1e4 * 100) / 100).toString() + "w" : (Math.floor(parseInt(valStr) / 1e3 * 100) / 100).toString() + "k" : valStr;
          break;
        default:
          valueReturn = valStr;
      }
      return valueReturn;
    });
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.show && ((parseInt(__props.value.toString()) == 0 ? __props.showZero : true) || __props.isDot)));
      }, () => {
        _renderSharedDataEffect(() => {
          const _isDot = __props.isDot;
          const _inverted = __props.inverted;
          const _type = __props.type;
          _setSharedDataClass(__sharedData, 1, ["up-badge", [
            _isDot ? "up-badge--dot" : "up-badge--not-dot",
            _inverted ? "up-badge--inverted" : "",
            __props.shape === "horn" ? "up-badge--horn" : "",
            _inverted ? `up-badge--${_type}--inverted` : `up-badge--${_type}`
          ]]);
          _setSharedDataStyle(__sharedData, 2, computedBadgeStyle.value);
          _setSharedData(__sharedData, 3, _toDisplayString(_isDot ? "" : showValue.value));
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
//# sourceMappingURL=up-badge.js.map
