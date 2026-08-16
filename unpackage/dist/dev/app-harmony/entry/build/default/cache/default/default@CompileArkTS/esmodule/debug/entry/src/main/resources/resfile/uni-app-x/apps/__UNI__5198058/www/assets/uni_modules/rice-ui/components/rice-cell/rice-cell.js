import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { h as hasStrValue } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { d as debugWarn } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/debug&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-cell/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataSlot: _createSharedDataSlot, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCellRiceCell";
const { useSlots, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-cell",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "914ba2de",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-cell/rice-cell.uvue",
  __name: "rice-cell",
  props: {
    title: { type: [String, Number] },
    value: { type: [String, Number] },
    label: { type: [String, Number] },
    size: { type: String },
    icon: { type: String },
    url: { type: String },
    border: { type: Boolean, default: true },
    clickable: { type: Boolean, default: true },
    arrow: { type: Boolean, default: null },
    arrowDirection: { default: "right", type: String },
    center: { type: Boolean, default: false },
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
    labelStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCellRiceCellSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("cell");
    const slots = useSlots();
    const emit = __emit;
    const props = __props;
    const showArrow = computed(() => {
      var _a2;
      return (_a2 = props.arrow) !== null && _a2 !== void 0 ? _a2 : hasStrValue(props.url);
    });
    const hasLeftIcon = computed(() => {
      return slots["leftIcon"] != null || hasStrValue(props.icon);
    });
    const hasValue = computed(() => {
      return slots["value"] != null || hasStrValue(props.value);
    });
    const hasLabel = computed(() => {
      return slots["label"] != null || hasStrValue(props.label);
    });
    const iconSize = computed(() => {
      return props.size == "large" ? "17px" : "16px";
    });
    const handleClick = () => {
      if (hasStrValue(props.url)) {
        uni.navigateTo({
          url: props.url,
          fail: (err) => {
            debugWarn("Cell", err.errMsg);
          }
        });
      }
      emit("click");
    };
    const cellClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.m(props.size),
        ns.is("center", props.center)
      ];
    });
    const hoverClass = computed(() => {
      return props.clickable ? "rice-cell--hover" : "none";
    });
    return () => {
      "raw js";
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 16, _unref(cellClass));
        _setSharedDataStyle(__sharedData, 17, __props.customStyle);
        _setSharedDataClass(__sharedData, 18, _toSharedDataString(_unref(hoverClass)));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasLeftIcon)));
      }, () => {
        _createSharedDataSlot("leftIcon", null, null, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_rice_icon, "dd3d63b8", {
            name: () => {
              return __props.icon;
            },
            "custom-style": { marginRight: "2px" },
            size: () => {
              return _unref(iconSize);
            }
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        });
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 19, __props.titleStyle);
      });
      _createSharedDataSlot("title", null, null, () => {
        _renderSharedDataEffect(() => {
          const _title = __props.title;
          _setSharedDataClass(__sharedData, 9, ["rice-cell__title__text", _title]);
          _setSharedDataStyle(__sharedData, 10, __props.titleTextStyle);
          _setSharedData(__sharedData, 11, _toDisplayString(_title));
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 12, _toSharedDataBoolean(_unref(hasLabel)));
      }, () => {
        _createSharedDataSlot("label", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 13, __props.labelStyle);
            _setSharedData(__sharedData, 14, _toDisplayString(__props.label));
          });
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(hasValue)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 5, __props.valueStyle);
        });
        _createSharedDataSlot("value", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 3, __props.valueTextStyle);
            _setSharedData(__sharedData, 4, _toDisplayString(__props.value));
          });
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 6, _toSharedDataBoolean($slots["rightIcon"] != null || _unref(showArrow)));
      }, () => {
        _createSharedDataSlot("rightIcon", null, null, () => {
          const n24 = _createSharedDataComponentWithFallback(_component_rice_icon, "dd3d2f3a", {
            name: () => {
              return `arrow-${__props.arrowDirection}`;
            },
            size: () => {
              return _unref(iconSize);
            }
          });
          _setSharedData(__sharedData, 7, n24?.sharedData);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 8, _toSharedDataBoolean(__props.border));
      }, () => {
      });
      _setSharedDataEvent(__sharedData, 15, handleClick);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-cell.js.map
