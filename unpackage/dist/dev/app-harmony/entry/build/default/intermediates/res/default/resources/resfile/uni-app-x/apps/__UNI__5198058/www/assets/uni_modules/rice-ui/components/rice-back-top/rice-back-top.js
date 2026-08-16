import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { h as hasStrValue, a as addUnit } from "../../libs/utils/basic.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceBackTopRiceBackTop";
const { ref, computed, shallowRef, nextTick, onPageScroll } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-back-top",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "2c6e7c82",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-back-top/rice-back-top.uvue",
  __name: "rice-back-top",
  props: {
    mode: { default: "round", type: String },
    parentId: { type: String },
    scrollTop: { default: null, type: Number },
    offset: { default: 200, type: Number },
    right: { type: [String, Number] },
    bottom: { type: [String, Number] },
    duration: { default: 300, type: Number },
    icon: { default: "back-top", type: String },
    iconSize: { type: [String, Number] },
    text: { type: String },
    textSize: { type: [String, Number] },
    textColor: { type: String },
    width: { type: [String, Number] },
    height: { type: [String, Number] },
    radius: { type: [String, Number] },
    bgColor: { type: String },
    zoom: { type: Boolean, default: true },
    zIndex: { type: Number },
    disabledPageScroll: { type: Boolean, default: false },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceBackTopRiceBackTopSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("back-top");
    const emit = __emit;
    const props = __props;
    const pageScrollTop = ref(0);
    const _scrollTop = computed(() => {
      var _a2;
      return props.disabledPageScroll ? (_a2 = props.scrollTop) !== null && _a2 !== void 0 ? _a2 : 0 : pageScrollTop.value;
    });
    const backTopRef = shallowRef(null);
    const isShow = computed(() => {
      return _scrollTop.value >= props.offset;
    });
    const init = ref(false);
    const backToTop = (e) => {
      if (props.disabledPageScroll) {
        emit("click", e);
        return null;
      }
      if (hasStrValue(props.parentId)) {
        const el = uni.getElementById(props.parentId);
        if (el != null) {
          el.scrollTop = _scrollTop.value;
          nextTick(() => {
            el.scrollTop = 0;
          });
        }
      } else {
        uni.pageScrollTo(new UTSJSONObject({
          scrollTop: 0,
          duration: props.duration
        }));
      }
      emit("click", e);
    };
    onPageScroll((e) => {
      init.value = true;
      pageScrollTop.value = e.scrollTop;
    });
    const _iconSize = computed(() => {
      if (props.iconSize != null)
        return props.iconSize;
      return hasStrValue(props.text) ? "20px" : "24px";
    });
    const backTopStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.zIndex != null)
        css.set("z-index", props.zIndex);
      if (props.bottom != null)
        css.set("bottom", addUnit(props.bottom));
      if (props.right != null)
        css.set("right", addUnit(props.right));
      if (props.bgColor != null) {
        css.set("background", props.bgColor);
        css.set("border-color", props.bgColor);
      }
      if (props.height != null)
        css.set("height", props.height);
      if (props.width != null)
        css.set("width", props.width);
      if (props.radius != null)
        css.set("border-radius", props.radius);
      return css;
    });
    const _textColor = computed(() => {
      var _a2;
      return (_a2 = props.textColor) !== null && _a2 !== void 0 ? _a2 : "var(--rice-text-color)";
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.textColor != null)
        css.set("color", props.textColor);
      if (props.textSize != null)
        css.set("font-size", addUnit(props.textSize));
      return css;
    });
    const backTopCss = computed(() => {
      const mode = ["round", "half-round"].includes(props.mode) ? props.mode : "round";
      return [
        ns.b(""),
        ns.theme(),
        ns.m(mode),
        ns.is("zoom", props.zoom),
        ns.is("show", isShow.value),
        ns.is("init", init.value)
      ];
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 8, _unref(backTopCss));
        _setSharedDataStyle(__sharedData, 9, [_unref(backTopStyle), __props.customStyle]);
      });
      _createSharedDataSlot("default", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasStrValue)(__props.icon)));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_rice_icon, "72b1cd70", {
            name: () => {
              return __props.icon;
            },
            size: () => {
              return _unref(_iconSize);
            },
            color: () => {
              return _unref(_textColor);
            },
            bold: ""
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(hasStrValue)(__props.text)));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 3, ["rice-back-top__text", { "rice-back-top--half-round__text": __props.mode == "half-round" }]);
            _setSharedDataStyle(__sharedData, 4, _unref(textStyle));
            _setSharedData(__sharedData, 5, _toDisplayString(__props.text));
          });
        });
      });
      _setSharedDataEvent(__sharedData, 6, backToTop);
      _setSharedDataTemplateRef(__sharedData, 7, (n8) => {
        _setTemplateRef(n8, backTopRef, null, "backTopRef");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-back-top.js.map
