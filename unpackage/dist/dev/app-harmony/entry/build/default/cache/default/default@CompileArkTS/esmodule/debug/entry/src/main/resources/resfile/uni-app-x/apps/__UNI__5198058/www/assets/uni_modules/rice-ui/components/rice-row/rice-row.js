import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { r as rowInjectKey } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-row/index&";
import { R as RowProvide } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-row/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceRowRiceRow";
const { computed, provide, toRef } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-row",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "071a766a",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-row/rice-row.uvue",
  __name: "rice-row",
  props: {
    gutter: { default: 0, type: Number },
    justify: { default: "start", type: String },
    align: { type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceRowRiceRowSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const alignItems = computed(() => {
      if (props.align == "top")
        return "flex-start";
      else if (props.align == "center")
        return "center";
      else if (props.align == "bottom")
        return "flex-end";
      return "";
    });
    const rowStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.gutter > 0) {
        const gutterNum = addUnit(props.gutter / 2);
        css.set("margin-left", `-${gutterNum}`);
        css.set("margin-right", `-${gutterNum}`);
      }
      let justifyContent = props.justify;
      if (props.justify == "start" || props.justify == "end") {
        justifyContent = "flex-" + justifyContent;
      }
      css.set("justify-content", justifyContent);
      if (alignItems.value != "") {
        css.set("align-items", alignItems.value);
      }
      return css;
    });
    provide(rowInjectKey, new RowProvide({
      gutter: toRef(() => {
        return props.gutter;
      })
    }));
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 0, [_unref(rowStyle), __props.customStyle]);
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
//# sourceMappingURL=rice-row.js.map
