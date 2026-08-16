import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import { f as getRandomStr, h as hasStrValue } from "../../libs/utils/basic.js";
import "../../libs/use/useCountDown/index.js";
import { i as isDark } from "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { c as collapseInjectKey } from "../rice-collapse/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCollapseItemRiceCollapseItem";
const { inject, ref, shallowRef, computed, getCurrentInstance, watch, nextTick, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-collapse-item",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "15df9460",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-collapse-item/rice-collapse-item.uvue",
  __name: "rice-collapse-item",
  props: {
    name: { type: null },
    icon: { type: String },
    title: { type: [String, Number] },
    value: { type: [String, Number] },
    contentText: { type: [String, Number] },
    duration: { type: Number },
    border: { type: Boolean, default: true },
    contentBorder: { type: Boolean, default: true },
    arrow: { type: Boolean, default: true },
    clickable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    titleStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    titleTextStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    valueStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    valueTextStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    contentStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    contentTextStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  setup(__props, _a) {
    var $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCollapseItemRiceCollapseItemSharedData", sharedDataClassId: 0 })));
    useNamespace("collapse-item");
    const collapse = inject(collapseInjectKey);
    const contentId = getRandomStr(10);
    const props = __props;
    const showContentBorder = ref(false);
    const wrapperRef = shallowRef(null);
    const contentHeight = ref(0);
    const itemName = computed(() => {
      var _a2;
      return (_a2 = props.name) !== null && _a2 !== void 0 ? _a2 : "rice-" + getRandomStr();
    });
    const isActive = computed(() => {
      var _a2;
      return (_a2 = collapse === null || collapse === void 0 ? null : collapse.activeNames.value.includes(itemName.value)) !== null && _a2 !== void 0 ? _a2 : false;
    });
    computed(() => {
      var _a2;
      return (_a2 = collapse === null || collapse === void 0 ? null : collapse.activeNames.value) !== null && _a2 !== void 0 ? _a2 : [];
    });
    const _duration = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.duration) !== null && _a2 !== void 0 ? _a2 : collapse === null || collapse === void 0 ? null : collapse.duration.value) !== null && _b !== void 0 ? _b : 250;
    });
    const handleHeaderClick = () => {
      if (props.disabled || props.readonly)
        return null;
      collapse === null || collapse === void 0 ? null : collapse.handleItemClick(itemName.value);
    };
    let timer = null;
    const clearTimer = () => {
      if (timer != null)
        clearTimeout(timer);
    };
    const handleTransitionend = (flag) => {
      var _a2;
      if (flag) {
        (_a2 = wrapperRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("height", "auto");
      }
    };
    const onTransitionend = () => {
      handleTransitionend(isActive.value);
    };
    const startAnimation = async (newVal) => {
      var _a2, _b, _c;
      const height = `${contentHeight.value}px`;
      const properValue = (_a2 = wrapperRef.value) === null || _a2 === void 0 ? null : _a2.style.getPropertyValue("height");
      showContentBorder.value = newVal;
      if (!newVal && properValue == "auto") {
        (_b = wrapperRef.value) === null || _b === void 0 ? null : _b.style.setProperty("height", height);
      }
      if (newVal) {
        (_c = wrapperRef.value) === null || _c === void 0 ? null : _c.style.setProperty("height", height);
      } else {
        timer = setTimeout(() => {
          var _a3;
          (_a3 = wrapperRef.value) === null || _a3 === void 0 ? null : _a3.style.setProperty("height", "0px");
        }, 20);
      }
    };
    getCurrentInstance();
    const contentRef = shallowRef(null);
    watch(isActive, async (newVal) => {
      var _a2, _b;
      await nextTick();
      const rect = await ((_a2 = contentRef.value) === null || _a2 === void 0 ? null : _a2.getBoundingClientRectAsync());
      contentHeight.value = (_b = rect === null || rect === void 0 ? null : rect.height) !== null && _b !== void 0 ? _b : 0;
      startAnimation(newVal);
    }, {
      immediate: true
    });
    const headerClass = computed(() => {
      return "";
    });
    const wrapperStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("transition-duration", `${_duration.value}ms`);
      return css;
    });
    const rightIconColor = computed(() => {
      if (props.disabled) {
        return isDark.value ? "#4d4d4d" : "#c8c9cc";
      }
      return null;
    });
    const rightIconStyle = computed(() => {
      return new UTSJSONObject({
        transform: isActive.value ? "rotate(-180deg)" : "rotate(0deg)",
        transition: `transform ${_duration.value}ms`
      });
    });
    const hoverClass = computed(() => {
      if (props.disabled || props.readonly || !props.clickable)
        return "none";
      return "rice-collapse-item--hover";
    });
    onUnmounted(() => {
      clearTimer();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 17, ["rice-collapse-item__header", _unref(headerClass)]);
        _setSharedDataClass(__sharedData, 18, _toSharedDataString(_unref(hoverClass)));
      });
      _createSharedDataSlot("leftIcon", null, null);
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 19, __props.titleStyle);
      });
      _createSharedDataSlot("title", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 8, ["rice-collapse-item__title--text", { "rice-collapse-item__title--disabled": __props.disabled }]);
          _setSharedDataStyle(__sharedData, 9, __props.titleTextStyle);
          _setSharedData(__sharedData, 10, _toDisplayString(__props.title));
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean($slots["value"] != null || _unref(hasStrValue)(__props.value)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 4, __props.valueStyle);
        });
        _createSharedDataSlot("value", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 1, ["rice-collapse-item__value--text", { "rice-collapse-item__value--disabled": __props.disabled }]);
            _setSharedDataStyle(__sharedData, 2, __props.valueTextStyle);
            _setSharedData(__sharedData, 3, _toDisplayString(__props.value));
          });
        });
      });
      _createSharedDataSlot("rightIcon", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.arrow));
        }, () => {
          const n15 = _createSharedDataComponentWithFallback(_component_rice_icon, "be908104", {
            name: "arrow-down",
            color: () => {
              return _unref(rightIconColor);
            },
            "custom-style": () => {
              return _unref(rightIconStyle);
            }
          });
          _setSharedData(__sharedData, 6, n15?.sharedData);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.border));
      }, () => {
      });
      _setSharedDataEvent(__sharedData, 13, handleHeaderClick);
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 20, _unref(wrapperStyle));
        _setSharedDataAttr(__sharedData, 21, _toSharedDataString(_unref(contentId)));
        _setSharedDataStyle(__sharedData, 22, __props.contentStyle);
      });
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 11, __props.contentTextStyle);
          _setSharedData(__sharedData, 12, _toDisplayString(__props.contentText));
        });
      });
      _setSharedDataTemplateRef(__sharedData, 14, (n23) => {
        _setTemplateRef(n23, contentRef, null, "contentRef");
      });
      _setSharedDataEvent(__sharedData, 15, onTransitionend);
      _setSharedDataTemplateRef(__sharedData, 16, (n25) => {
        _setTemplateRef(n25, wrapperRef, null, "wrapperRef");
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 23, ["rice-collapse-item--border", { "rice-collapse-item--border--show": _unref(showContentBorder) && __props.contentBorder }]);
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
//# sourceMappingURL=rice-collapse-item.js.map
