import "./line.js";
import { a as addUnit, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpLineUpLine";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-line"
  },
  __dynamicSharedData: true,
  __hash: "5bab72f4",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-line/up-line.uvue",
  __name: "up-line",
  props: {
    color: {
      type: String,
      default: "#d6d7d9"
    },
    length: {
      type: [String, Number],
      default: "100%"
    },
    direction: {
      type: String,
      default: "row"
    },
    hairline: {
      type: Boolean,
      default: true
    },
    margin: {
      type: String,
      default: "0"
    },
    dashed: {
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
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpLineUpLineSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const lineStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["margin"] = props.margin;
      if (props.direction === "row") {
        style["borderBottomWidth"] = "1px";
        style["borderBottomStyle"] = props.dashed ? "dashed" : "solid";
        style["width"] = addUnit(props.length);
        if (props.hairline)
          style["transform"] = "scaleY(0.5)";
      } else {
        style["borderLeftWidth"] = "1px";
        style["borderLeftStyle"] = props.dashed ? "dashed" : "solid";
        style["height"] = addUnit(props.length);
        if (props.hairline)
          style["transform"] = "scaleX(0.5)";
      }
      style["borderColor"] = props.color;
      return deepMerge(style, addStyle(props.customStyle));
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 0, [lineStyle.value]);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-line.js.map
