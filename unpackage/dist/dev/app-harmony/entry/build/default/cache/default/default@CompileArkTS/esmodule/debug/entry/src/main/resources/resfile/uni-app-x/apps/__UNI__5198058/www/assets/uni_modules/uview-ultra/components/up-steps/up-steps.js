import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpStepsUpSteps";
const { provide, ref, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-steps"
  },
  __dynamicSharedData: true,
  __hash: "4c2b391c",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-steps/up-steps.uvue",
  __name: "up-steps",
  props: {
    direction: {
      type: String,
      default: "row"
    },
    current: {
      type: [String, Number],
      default: 0
    },
    activeColor: {
      type: String,
      default: "#3c9cff"
    },
    inactiveColor: {
      type: String,
      default: "#969799"
    },
    activeIcon: {
      type: String,
      default: ""
    },
    inactiveIcon: {
      type: String,
      default: ""
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpStepsUpStepsSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const parentState = computed(() => {
      return new UTSJSONObject({
        direction: props.direction,
        current: props.current,
        activeColor: props.activeColor,
        inactiveColor: props.inactiveColor,
        activeIcon: props.activeIcon,
        inactiveIcon: props.inactiveIcon,
        dot: props.dot
      });
    });
    provide("upStepsProps", parentState);
    const itemCount = ref(0);
    const registerStepItem = () => {
      const currentIndex = itemCount.value;
      itemCount.value = itemCount.value + 1;
      return currentIndex;
    };
    provide("upStepsRegister", registerStepItem);
    provide("upStepsItemCount", itemCount);
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 0, ["up-steps", [`up-steps--${__props.direction}`]]);
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-steps.js.map
