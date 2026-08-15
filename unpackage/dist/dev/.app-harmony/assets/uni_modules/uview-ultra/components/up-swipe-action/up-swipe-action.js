const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSwipeActionUpSwipeAction";
const { ref, provide, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-swipe-action"
  },
  __dynamicSharedData: true,
  __hash: "26ecc926",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-swipe-action/up-swipe-action.uvue",
  __name: "up-swipe-action",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSwipeActionUpSwipeActionSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const activeItemId = ref(-1);
    function registerActive(id) {
      if (props.autoClose) {
        activeItemId.value = id;
      }
    }
    provide("upSwipeActionContext", new UTSJSONObject({
      autoClose: props.autoClose,
      activeItemId,
      registerActive
    }));
    return () => {
      "raw js";
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=up-swipe-action.js.map
