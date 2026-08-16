import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import { u as useChildren } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { g as gridInjectKey, a as gridName } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-grid/index&";
import { G as GridProvice } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-grid/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
