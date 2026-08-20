import { c as classNames } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-shared/classNames/index&";
import { s as stringifyStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-shared/stringifyStyle/index&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-shared/addUnit/index&";
import { u as useIcon, l as loadingFonts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-icon/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesLimeIconComponentsLIconLIcon";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    styleIsolation: "app-shared",
    inheritAttrs: true,
    externalClasses: ["l-class"],
    options: new UTSJSONObject({
      virtualHost: true
    })
  },
  __dynamicSharedData: true,
  __hash: "438cd3c4",
  __className,
  __filename: "uni_modules/lime-icon/components/l-icon/l-icon.uvue",
  __name: "l-icon",
  props: {
    name: { default: "", type: String },
    color: { type: String },
    size: { type: [String, Number] },
    prefix: { default: "l", type: String },
    inherit: { type: Boolean, default: true },
    web: { type: Boolean, default: false },
    lClass: { type: null },
    lStyle: { type: null }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesLimeIconComponentsLIconLIconSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const _b = useIcon(computed(() => {
      return props.name;
    }), { prefix: props.prefix }), type = _b.type, fontIcon = _b.fontIcon, imageUrl = _b.imageUrl, iconifyUrl = _b.iconifyUrl, parsed = _b.parsed;
    const fontLoading = computed(() => {
      var _a2;
      if (type.value == "font") {
        if (((_a2 = fontIcon.value) === null || _a2 === void 0 ? null : _a2.fontFamily) == "l")
          return false;
        return loadingFonts.value.some((item) => {
          var _a3;
          return item.fontFamily == ((_a3 = fontIcon.value) === null || _a3 === void 0 ? null : _a3.fontFamily);
        });
      }
      return false;
    });
    const classes = computed(() => {
      var _a2;
      const prefix = (_a2 = props.prefix) !== null && _a2 !== void 0 ? _a2 : "l";
      return classNames(type.value == "font" ? prefix : null, props.lClass);
    });
    const styles = computed(() => {
      var _a2;
      const fontSize = addUnit(props.size);
      const isFont = type.value == "font";
      return stringifyStyle(new UTSJSONObject({
        fontFamily: isFont ? (_a2 = fontIcon.value) === null || _a2 === void 0 ? null : _a2.fontFamily : false,
        fontSize: isFont ? fontSize : false,
        color: isFont ? props.color : false,
        width: !isFont ? fontSize : false,
        height: !isFont ? fontSize : false
      }), props.lStyle);
    });
    const handleClick = () => {
      emit("click");
    };
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(type) == "font" && !_unref(fontLoading)));
      }, () => {
        _setSharedDataEvent(__sharedData, 1, handleClick);
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 2, ["l-icon l-icon--font l-class", _unref(classes)]);
          _setSharedDataStyle(__sharedData, 3, _unref(styles));
          _setSharedData(__sharedData, 4, _toDisplayString(_unref(fontIcon)?.char));
        });
      }, () => {
        return _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(_unref(type) == "image" && (!_unref(parsed).isSvg || __props.color == null)));
        }, () => {
          _setSharedDataEvent(__sharedData, 6, handleClick);
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 7, ["l-icon l-icon--image l-class", _unref(classes)]);
            _setSharedDataStyle(__sharedData, 8, _unref(styles));
            _setSharedDataAttr(__sharedData, 9, _toSharedDataString(_unref(imageUrl)));
          });
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 10, _toSharedDataBoolean(_unref(iconifyUrl) != null || _unref(type) == "image" && _unref(parsed).isSvg && __props.color != null));
          }, () => {
            _setSharedDataEvent(__sharedData, 11, handleClick);
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 12, ["l-icon l-icon--image l-class", _unref(classes)]);
              _setSharedDataStyle(__sharedData, 13, _unref(styles));
              _setSharedDataAttr(__sharedData, 14, _toSharedDataString(_unref(iconifyUrl) ?? _unref(imageUrl)));
            });
          });
        }, 517);
      }, 261);
      return __sharedData;
    };
  }
});
const _style_0 = {"@FONT-FACE":[{"src":"url(\"/uni_modules/lime-icon/static/app/t4.ttf\")","fontFamily":"l"}]};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=l-icon.js.map
