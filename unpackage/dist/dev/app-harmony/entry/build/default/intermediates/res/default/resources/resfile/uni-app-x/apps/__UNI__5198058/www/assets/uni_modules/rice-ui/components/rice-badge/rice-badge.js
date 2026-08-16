import "./type.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { a as addUnit, h as hasStrValue } from "../../libs/utils/basic.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { useSlots: _useSlots, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, createSharedDataSlot: _createSharedDataSlot, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceBadgeRiceBadge";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-badge",
    styleIsolation: "app-and-page",
    externalClasses: ["text-class"]
  },
  __dynamicSharedData: true,
  __hash: "4e9fbe2a",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-badge/rice-badge.uvue",
  __name: "rice-badge",
  props: {
    value: { type: [String, Number] },
    max: { type: Number },
    isDot: { type: Boolean, default: false },
    hidden: { type: Boolean, default: false },
    type: { default: "error", type: String },
    showZero: { type: Boolean, default: true },
    bgColor: { type: String },
    color: { type: String },
    fontSize: { type: [String, Number] },
    position: { default: "top-right", type: String },
    offset: { default: () => {
      return [];
    }, type: Array },
    absolute: { type: Boolean },
    textClass: { default: "", type: String },
    badgeStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceBadgeRiceBadgeSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("badge");
    const slots = _useSlots();
    const props = __props;
    const single = computed(() => {
      return slots["default"] == null;
    });
    const isAbsolute = computed(() => {
      return !single.value || props.absolute == true;
    });
    const isNumZero = computed(() => {
      return props.value === 0;
    });
    const showBadge = computed(() => {
      return !props.hidden && (props.isDot || props.showZero || !isNumZero.value);
    });
    const formatValue = computed(() => {
      if (props.isDot)
        return "";
      if (typeof props.value == "number" && typeof props.max == "number") {
        return props.max < props.value ? `${props.max}+` : props.value;
      }
      return props.value;
    });
    const contentClass = computed(() => {
      return [
        ns.e("content"),
        ns.m(props.type),
        ns.is("fixed", isAbsolute.value),
        ns.is("dot", props.isDot),
        ns.m(isAbsolute.value ? props.position : ""),
        ns.theme()
      ];
    });
    const getOffsetUumString = (val) => {
      return val.startsWith("-") ? addUnit(val.replace("-", "")) : `-${addUnit(val)}`;
    };
    const contentStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.bgColor != null) {
        css.set("background-color", props.bgColor);
      }
      if (props.offset.length > 0) {
        const x = props.offset[0];
        const y = props.offset.length >= 2 ? props.offset[1] : 0;
        if (!isAbsolute.value) {
          css.set("margin-left", addUnit(x));
          css.set("margin-top", addUnit(y));
        } else {
          const p = props.position.split("-");
          const offsetY = p[0];
          const offsetX = p[1];
          if (typeof x == "number") {
            css.set(offsetX, addUnit(offsetX == "left" ? x : -x));
          } else {
            css.set(offsetX, offsetX == "left" ? addUnit(x) : getOffsetUumString(x));
          }
          if (typeof y == "number") {
            css.set(offsetY, addUnit(offsetY == "top" ? y : -y));
          } else {
            css.set(offsetY, offsetY == "top" ? addUnit(y) : getOffsetUumString(y));
          }
        }
      }
      return css;
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.color != null) {
        css.set("color", props.color);
      }
      if (props.fontSize != null) {
        css.set("font-size", addUnit(props.fontSize));
      }
      return css;
    });
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(!_unref(single)));
      }, () => {
        _createSharedDataSlot("default", null, null);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(_unref(showBadge)));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 6, _unref(contentClass));
            _setSharedDataStyle(__sharedData, 7, [_unref(contentStyle), __props.badgeStyle]);
          });
          _createSharedDataSlot("content", null, null, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(hasStrValue)(_unref(formatValue))));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataClass(__sharedData, 3, ["rice-badge__content__text", __props.textClass]);
                _setSharedDataStyle(__sharedData, 4, _unref(textStyle));
                _setSharedData(__sharedData, 5, _toDisplayString(_unref(formatValue)));
              });
            });
          });
        });
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 12, [_unref(ns).b(""), _unref(contentClass)]);
          _setSharedDataStyle(__sharedData, 13, [_unref(contentStyle), __props.badgeStyle]);
        });
        _createSharedDataSlot("content", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 8, _toSharedDataBoolean(_unref(hasStrValue)(_unref(formatValue))));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 9, ["rice-badge__content__text", __props.textClass]);
              _setSharedDataStyle(__sharedData, 10, _unref(textStyle));
              _setSharedData(__sharedData, 11, _toDisplayString(_unref(formatValue)));
            });
          });
        });
      }, 773);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=rice-badge.js.map
