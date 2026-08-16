import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import { h as hasStrValue, a as addUnit } from "../../libs/utils/basic.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceAvatarRiceAvatar";
const { ref, computed, watch } = globalThis.Vue;
const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-avatar",
    styleIsolation: "app-and-page",
    externalClasses: ["text-class"]
  },
  __dynamicSharedData: true,
  __hash: "6c815072",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-avatar/rice-avatar.uvue",
  __name: "rice-avatar",
  props: {
    src: { type: String },
    round: { type: Boolean, default: true },
    radius: { type: [String, Number] },
    size: { type: [String, Number] },
    mode: { default: "scaleToFill", type: String },
    text: { type: [String, Number] },
    icon: { type: String },
    bgColor: { type: String },
    color: { type: String },
    fontSize: { type: [String, Number] },
    textClass: { type: String },
    defaultUrl: { type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["click", "error"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceAvatarRiceAvatarSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("avatar");
    const emit = __emit;
    const props = __props;
    const isLoading = ref(true);
    const avatarUrl = ref(props.src);
    const _radius = computed(() => {
      return props.radius;
    });
    const iconSize = computed(() => {
      if (props.fontSize != null)
        return props.fontSize;
      if (props.size == "large")
        return "20px";
      if (props.size == "mini")
        return "14px";
      return "16px";
    });
    const loadError = (event = null) => {
      isLoading.value = false;
      avatarUrl.value = hasStrValue(props.defaultUrl) ? props.defaultUrl : base64Avatar;
      emit("error", event);
    };
    const onImageLoad = () => {
      isLoading.value = false;
    };
    watch(() => {
      return props.src;
    }, (newVal = null) => {
      avatarUrl.value = newVal;
      if (!hasStrValue(newVal)) {
        loadError(null);
      }
    }, {
      immediate: true
    });
    const handleClick = () => {
      emit("click");
    };
    const rootStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.size) && props.size != "large" && props.size != "mini") {
        const size = addUnit(props.size);
        css.set("width", size);
        css.set("height", size);
      }
      if (props.bgColor != null) {
        css.set("background", props.bgColor);
      }
      if (_radius.value != null) {
        css.set("border-radius", addUnit(_radius.value));
      }
      return css;
    });
    const imageStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (_radius.value != null) {
        css.set("border-radius", addUnit(_radius.value));
      }
      return css;
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.fontSize != null) {
        css.set("font-size", addUnit(props.fontSize));
      }
      if (props.color != null)
        css.set("color", props.color);
      return css;
    });
    const rootClass = computed(() => {
      const cls = [
        ns.b(""),
        ns.is("round", props.round && props.radius == null),
        ns.is("text", hasStrValue(props.text) || hasStrValue(props.icon)),
        ns.theme()
      ];
      if (props.size == "large" || props.size == "mini") {
        cls.push(ns.m(props.size));
      }
      return cls;
    });
    const avatarTextClass = computed(() => {
      var _a2;
      const basic = ["rice-avatar__text", (_a2 = props.textClass) !== null && _a2 !== void 0 ? _a2 : ""];
      if (props.size == "large" || props.size == "mini") {
        basic.push(`rice-avatar__text--${props.size}`);
      }
      return basic;
    });
    const imageClass = computed(() => {
      const cls = [
        ns.e("image"),
        ns.is("round", props.round && !hasStrValue(props.radius)),
        ns.is("loading", isLoading.value)
      ];
      if (props.size == "large" || props.size == "mini") {
        cls.push(ns.e(`image--${props.size}`));
      }
      return cls;
    });
    return () => {
      "raw js";
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 13, _unref(rootClass));
        _setSharedDataStyle(__sharedData, 14, [_unref(rootStyle), __props.customStyle]);
      });
      _createSharedDataSlot("default", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasStrValue)(__props.icon)));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_rice_icon, "52bf5600", {
            name: () => {
              return __props.icon;
            },
            size: () => {
              return _unref(iconSize);
            },
            color: () => {
              return __props.color;
            }
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(hasStrValue)(__props.text)));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 3, _unref(avatarTextClass));
              _setSharedDataStyle(__sharedData, 4, _unref(textStyle));
              _setSharedData(__sharedData, 5, _toDisplayString(__props.text));
            });
          }, () => {
            _setSharedDataEvent(__sharedData, 6, onImageLoad);
            _setSharedDataEvent(__sharedData, 7, loadError);
            _renderSharedDataEffect(() => {
              _setSharedDataAttr(__sharedData, 8, _toSharedDataString(_unref(avatarUrl)));
              _setSharedDataAttr(__sharedData, 9, _toSharedDataImageMode(__props.mode));
              _setSharedDataStyle(__sharedData, 10, _unref(imageStyle));
              _setSharedDataClass(__sharedData, 11, _unref(imageClass));
            });
          }, 517);
        }, 261);
      });
      _setSharedDataEvent(__sharedData, 12, handleClick);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-avatar.js.map
