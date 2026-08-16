import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import { u as useChildren } from "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { s as swipeActionsInjectKey, a as swipeActionsName } from "./index.js";
import { S as SwipeActionsProvide } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceSwipeActionsRiceSwipeActions";
const { provide, toRef } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-swipe-actions",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "2f5695bb",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-swipe-actions/rice-swipe-actions.uvue",
  __name: "rice-swipe-actions",
  props: {
    disabled: { type: Boolean, default: false },
    accordion: { type: Boolean, default: false },
    autoClose: { type: Boolean, default: true },
    iosStyle: { type: Boolean, default: true },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceSwipeActionsRiceSwipeActionsSharedData", sharedDataClassId: 0 })));
    const _b = useChildren(swipeActionsName), linkChildren = _b.linkChildren, childrenList = _b.childrenList;
    linkChildren();
    const props = __props;
    const submitClose = (item) => {
      var _a2;
      (_a2 = item.proxy) === null || _a2 === void 0 ? null : _a2.$callMethod("close");
    };
    const closeOtherSwipe = (vm = null) => {
      if (!props.accordion || vm == null)
        return null;
      childrenList.value.forEach((item) => {
        if (item.proxy !== vm.proxy) {
          submitClose(item);
        }
      });
    };
    const closeAll = () => {
      childrenList.value.forEach((item) => {
        submitClose(item);
      });
    };
    const close = (names) => {
      childrenList.value.forEach((item) => {
        const name = item.props["name"];
        if (name != null) {
          const hasName = names.includes(name);
          if (hasName)
            submitClose(item);
        }
      });
    };
    provide(swipeActionsInjectKey, new SwipeActionsProvide({
      accordion: toRef(() => {
        return props.accordion;
      }),
      disabled: toRef(() => {
        return props.disabled;
      }),
      autoClose: toRef(() => {
        return props.autoClose;
      }),
      iosStyle: toRef(() => {
        return props.iosStyle;
      }),
      closeOtherSwipe
    }));
    __expose({
      closeAll,
      close
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 0, __props.customStyle);
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
//# sourceMappingURL=rice-swipe-actions.js.map
