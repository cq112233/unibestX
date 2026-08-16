import { a as addUnit } from "../../libs/utils/basic.js";
import { r as rowInjectKey } from "../rice-row/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceColRiceCol";
const { inject, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-col",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "00765f0a",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-col/rice-col.uvue",
  __name: "rice-col",
  props: {
    span: { default: 24, type: Number },
    offset: { default: 0, type: Number },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceColRiceColSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const row = inject(rowInjectKey, null);
    const gutter = computed(() => {
      var _a;
      return (_a = row === null || row === void 0 ? null : row.gutter.value) !== null && _a !== void 0 ? _a : 0;
    });
    const colStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (gutter.value > 0) {
        const gutterNum = addUnit(gutter.value / 2);
        css.set("padding-left", `${gutterNum}`);
        css.set("padding-right", `${gutterNum}`);
      }
      if (props.span >= 0) {
        const spanNum = 100 / 24 * props.span;
        css.set("flex", `0 0 ${spanNum}%`);
      }
      if (props.offset >= 0) {
        const marginLeft = 100 / 24 * props.offset;
        css.set("margin-left", `${marginLeft}%`);
      }
      return css;
    });
    const colClass = computed(() => {
      return [];
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 0, ["rice-col", _unref(colClass)]);
        _setSharedDataStyle(__sharedData, 1, [_unref(colStyle), __props.customStyle]);
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
//# sourceMappingURL=rice-col.js.map
