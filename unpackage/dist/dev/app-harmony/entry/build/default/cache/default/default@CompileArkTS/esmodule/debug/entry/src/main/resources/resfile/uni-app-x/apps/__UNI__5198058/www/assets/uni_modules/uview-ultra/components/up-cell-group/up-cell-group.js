import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { a as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell-group/cellGroup&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCellGroupUpCellGroup";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-cell-group"
  },
  __dynamicSharedData: true,
  __hash: "5ec6a692",
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
    const props = __props;
    const customCellGroupStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    return () => {
      "raw js";
      const _component_up_line = __easycom_1;
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 4, customCellGroupStyle.value);
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
        const n8 = _createSharedDataComponentWithFallback(_component_up_line, "66bb79d9");
        _setSharedData(__sharedData, 3, n8?.sharedData);
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-cell-group.js.map
