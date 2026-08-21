import "../../libs/composable/useMp.js";
import { d as defProps } from "./gap.js";
import { b as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpGapUpGap";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    // ...mpSharedMpOptions,
    name: "up-gap"
  },
  __dynamicSharedData: true,
  __hash: "7554e520",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-gap/up-gap.uvue",
  __name: "up-gap",
  props: {
    // 背景颜色（默认 'transparent' ）
    bgColor: {
      type: String,
      default: defProps.getString("gap.bgColor")
    },
    // 分割槽高度，单位px（默认 20 ）
    height: {
      type: [String, Number],
      default: defProps.getNumber("gap.height")
    },
    // 与前一个组件的距离，单位px（ 默认 0 ）
    marginTop: {
      type: [String, Number],
      default: defProps.getNumber("gap.marginTop")
    },
    // 与后一个组件的距离，单位px （默认 0 ）
    marginBottom: {
      type: [String, Number],
      default: defProps.getNumber("gap.marginBottom")
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpGapUpGapSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const gapStyle = computed(() => {
      return new UTSJSONObject({
        backgroundColor: props.bgColor,
        height: addUnit(props.height),
        marginTop: addUnit(props.marginTop),
        marginBottom: addUnit(props.marginBottom)
      });
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 0, [gapStyle.value]);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-gap.js.map
