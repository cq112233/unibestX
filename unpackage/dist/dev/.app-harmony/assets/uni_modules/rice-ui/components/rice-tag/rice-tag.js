import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import "../../libs/use/useCountDown/index.js";
import { i as isDark } from "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { C as Coloruts } from "../../libs/plugin/coloruts/conversion.js";
import "../../libs/plugin/coloruts/constant.js";
import "../../libs/plugin/coloruts/type.js";
import "../../libs/plugin/dateuts/type.js";
import "../../libs/plugin/dateuts/locale.js";
import { i as isThemeColor, b as isGradientColor, a as addUnit, h as hasStrValue } from "../../libs/utils/basic.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceTagRiceTag";
const { computed, ref, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-tag",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "5d6611ce",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-tag/rice-tag.uvue",
  __name: "rice-tag",
  props: {
    type: { type: String },
    size: { type: String },
    color: { type: String },
    text: { type: [String, Number] },
    icon: { type: String },
    textColor: { type: String },
    textSize: { type: [String, Number] },
    show: { type: Boolean, default: true },
    plain: { type: Boolean, default: false },
    plainFill: { type: Boolean, default: false },
    round: { type: Boolean, default: true },
    mark: { type: Boolean, default: false },
    closeable: { type: Boolean, default: false },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceTagRiceTagSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("tag");
    const emit = __emit;
    const props = __props;
    const isPlain = computed(() => {
      return props.plain || props.plainFill;
    });
    const realShow = ref(props.show);
    const handleClick = () => {
      emit("click");
    };
    const handleClose = (e) => {
      e.stopPropagation();
      emit("close");
    };
    const onTransitionend = () => {
      realShow.value = props.show;
    };
    watch(() => {
      return props.show;
    }, () => {
      if (props.show)
        realShow.value = true;
    });
    const getTextColor = () => {
      if (props.textColor != null)
        return props.textColor;
      if (props.color != null) {
        return isPlain.value && !isGradientColor(props.color) ? props.color : "#f5f5f5";
      }
      return "";
    };
    const iconSize = computed(() => {
      if (props.size == "large")
        return 18;
      if (props.size == "small")
        return 14;
      return 16;
    });
    const iconColor = computed(() => {
      const textColor = getTextColor();
      if (textColor != "")
        return textColor;
      const baseColor = "var(--rice-text-color)";
      const themeColor = `var(--rice-${props.type}-color)`;
      if (isPlain.value)
        return isThemeColor(props.type) ? themeColor : baseColor;
      return isThemeColor(props.type) ? "#f5f5f5" : baseColor;
    });
    function darken(color, amount = 20) {
      return color.mix("#141414", amount).toHexString();
    }
    const tagStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.color != null) {
        const color = props.color;
        if (isGradientColor(color)) {
          css.set("background", color);
          css.set("border-style", "none");
        } else {
          const colorUts = new Coloruts(color);
          css.set("border-color", color);
          if (!isPlain.value) {
            css.set("background", color);
          } else if (props.plainFill) {
            css.set("background", isDark.value ? darken(colorUts, 90) : colorUts.tint(90).toHexString());
          }
        }
      }
      css.set("opacity", props.show ? 1 : 0);
      return css;
    });
    const tagClass = computed(() => {
      const basic = [
        ns.b(""),
        ns.theme(),
        ns.is("round", props.round),
        ns.is("mark", props.mark),
        ns.m(props.size)
      ];
      if (isThemeColor(props.type)) {
        const theme = ns.m(props.plainFill ? `${props.type}--plain-fill` : props.type);
        basic.push(theme);
      }
      basic.push(ns.is("plain", props.plain));
      return basic;
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      const textColor = getTextColor();
      if (textColor != "")
        css.set("color", textColor);
      if (props.textSize != null)
        css.set("font-size", addUnit(props.textSize));
      return css;
    });
    const textClass = computed(() => {
      const basic = [ns.e("text")];
      if (isThemeColor(props.type)) {
        const theme = ns.m(isPlain.value ? `${props.type}--plain__text` : `${props.type}__text`);
        basic.push(theme);
      }
      if (props.size != null) {
        basic.push(ns.m(`${props.size}__text`));
      }
      return basic;
    });
    return () => {
      "raw js";
      const _component_rice_icon = __easycom_0;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(realShow)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 11, _unref(tagClass));
          _setSharedDataStyle(__sharedData, 12, [_unref(tagStyle), __props.customStyle]);
        });
        _createSharedDataSlot("default", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 1, _toSharedDataBoolean(_unref(hasStrValue)(__props.icon)));
          }, () => {
            const n6 = _createSharedDataComponentWithFallback(_component_rice_icon, "ca72f464", {
              name: () => {
                return __props.icon;
              },
              color: () => {
                return _unref(iconColor);
              },
              size: () => {
                return `${_unref(iconSize)}px`;
              },
              "custom-style": { marginRight: "2px" }
            });
            _setSharedData(__sharedData, 2, n6?.sharedData);
          });
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 3, _unref(textClass));
            _setSharedDataStyle(__sharedData, 4, _unref(textStyle));
            _setSharedData(__sharedData, 5, _toDisplayString(__props.text));
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.closeable));
        }, () => {
          const n10 = _createSharedDataComponentWithFallback(_component_rice_icon, "ca72de98", {
            name: "cross",
            color: () => {
              return _unref(iconColor);
            },
            size: () => {
              return `${_unref(iconSize) - 2}px`;
            },
            "custom-style": { marginLeft: "4px" }
          });
          _setSharedData(__sharedData, 7, n10?.sharedData);
          _setSharedDataEvent(__sharedData, 8, handleClose);
        });
        _setSharedDataEvent(__sharedData, 9, handleClick);
        _setSharedDataEvent(__sharedData, 10, onTransitionend);
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
//# sourceMappingURL=rice-tag.js.map
