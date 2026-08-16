import "../../libs/utils/basic.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import { u as useChildren } from "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { g as gridInjectKey, a as gridName } from "./index.js";
import { G as GridProvice } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceGridRiceGrid";
const { computed, provide, toRef } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-grid",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "68f35a50",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-grid/rice-grid.uvue",
  __name: "rice-grid",
  props: {
    columnNum: { type: [String, Number] },
    align: { type: String },
    textColor: { type: String },
    textSize: { type: [String, Number] },
    iconColor: { type: String },
    iconSize: { type: [String, Number] },
    border: { type: Boolean, default: true },
    clickable: { type: Boolean, default: true },
    vertical: { type: Boolean, default: true },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceGridRiceGridSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("grid");
    const props = __props;
    const _a = useChildren(gridName), linkChildren = _a.linkChildren, childrenList = _a.childrenList;
    linkChildren();
    const formatColumnNum = computed(() => {
      var _a2;
      const num = (_a2 = props.columnNum) !== null && _a2 !== void 0 ? _a2 : 4;
      return typeof num == "string" ? parseInt(num) : num;
    });
    const rootClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("border", props.border)
      ];
    });
    provide(gridInjectKey, new GridProvice({
      columnNum: toRef(() => {
        return formatColumnNum.value;
      }),
      textColor: toRef(() => {
        return props.textColor;
      }),
      textSize: toRef(() => {
        return props.textSize;
      }),
      iconColor: toRef(() => {
        return props.iconColor;
      }),
      iconSize: toRef(() => {
        return props.iconSize;
      }),
      border: toRef(() => {
        return props.border;
      }),
      clickable: toRef(() => {
        return props.clickable;
      }),
      vertical: toRef(() => {
        return props.vertical;
      }),
      childrenList
    }));
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, _unref(rootClass));
        _setSharedDataStyle(__sharedData, 1, __props.customStyle);
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
//# sourceMappingURL=rice-grid.js.map
