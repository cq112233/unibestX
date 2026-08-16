import { h as hasStrValue, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/type&";
import { f as fontData } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/font&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceIconRiceIcon";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-icon",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "cb87bd42",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-icon/rice-icon.uvue",
  __name: "rice-icon",
  props: {
    name: { default: "", type: String },
    size: { default: "16px", type: [String, Number] },
    color: { type: String },
    bold: { type: Boolean },
    fontFamily: { type: String },
    stop: { type: Boolean },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceIconRiceIconSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("icon");
    const emit = __emit;
    const props = __props;
    const isBase64 = () => {
      return props.name.indexOf("data:") > -1 && props.name.indexOf("base64") > -1;
    };
    const isImage = computed(() => {
      return props.name.includes("/") || isBase64();
    });
    const iconCode = computed(() => {
      var _a2, _b;
      if (hasStrValue(props.fontFamily))
        return String.fromCharCode(parseInt(props.name, 16));
      return (_b = (_a2 = UTS.arrayFind(fontData, (v) => {
        return v.name == props.name;
      })) === null || _a2 === void 0 ? null : _a2.code) !== null && _b !== void 0 ? _b : "";
    });
    const iconClick = () => {
      emit("click");
    };
    const iconStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.size != null)
        css.set("font-size", addUnit(props.size));
      if (hasStrValue(props.color))
        css.set("color", props.color);
      if (hasStrValue(props.fontFamily))
        css.set("font-family", props.fontFamily);
      return css;
    });
    const imageStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.size != null) {
        const size = addUnit(props.size);
        css.set("height", addUnit(size));
        css.set("width", addUnit(size));
      }
      return css;
    });
    const iconClass = computed(() => {
      var _a2;
      return [
        ns.theme(),
        ns.is("bold", (_a2 = props.bold) !== null && _a2 !== void 0 ? _a2 : false)
      ];
    });
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(!_unref(isImage)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 3, ["rice-icon", _unref(iconClass)]);
          _setSharedDataStyle(__sharedData, 4, [_unref(iconStyle), __props.customStyle]);
        });
        _createSharedDataSlot("default", null, null, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 1, _toDisplayString(_unref(iconCode)));
          });
        });
        _setSharedDataEvent(__sharedData, 2, iconClick);
      }, () => {
        _setSharedDataEvent(__sharedData, 5, iconClick);
        _renderSharedDataEffect(() => {
          _setSharedDataAttr(__sharedData, 6, _toSharedDataString(__props.name));
          _setSharedDataStyle(__sharedData, 7, [_unref(imageStyle), __props.customStyle]);
        });
      }, 261);
      return __sharedData;
    };
  }
});
const _style_0 = {"@FONT-FACE":[{"src":"url(\"/uni_modules/rice-ui/static/font/riceIcon.ttf\")","fontFamily":"riceIcon"}]};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=rice-icon.js.map
