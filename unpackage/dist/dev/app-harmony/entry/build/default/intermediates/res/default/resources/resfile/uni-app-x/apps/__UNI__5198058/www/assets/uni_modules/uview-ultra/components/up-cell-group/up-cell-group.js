import { _ as __easycom_0 } from "../up-line/up-line.js";
import { b as addStyle } from "../../libs/function/index.js";
import { d as defProps } from "./cellGroup.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, unref: _unref, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCellGroupUpCellGroup";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-cell-group"
  },
  __dynamicSharedData: true,
  __hash: "c388592a",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-cell-group/up-cell-group.uvue",
  __name: "up-cell-group",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: defProps.getString("cellGroup.title")
    },
    border: {
      type: Boolean,
      default: defProps.getBoolean("cellGroup.border")
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCellGroupUpCellGroupSharedData", sharedDataClassId: 0 })));
    return () => {
      "raw js";
      const _component_up_line = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 4, [_unref(addStyle)(__props.customStyle)]);
        _setSharedDataClass(__sharedData, 5, [[__props.customClass], "up-cell-group"]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.title));
      }, () => {
        _createSharedDataSlot("title", null, null, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 1, _toDisplayString(__props.title));
          });
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.border));
      }, () => {
        const n8 = _createSharedDataComponentWithFallback(_component_up_line, "66bb79f1");
        _setSharedData(__sharedData, 3, n8?.sharedData);
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
//# sourceMappingURL=up-cell-group.js.map
