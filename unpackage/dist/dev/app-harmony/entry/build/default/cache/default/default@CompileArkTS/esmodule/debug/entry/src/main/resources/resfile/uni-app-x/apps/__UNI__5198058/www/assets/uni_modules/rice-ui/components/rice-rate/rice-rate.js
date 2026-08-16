import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import { u as useTouch } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { d as getPxNum, a as addUnit, c as clamp } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { f as formDisabledInjectKey, a as formReadonlyInjectKey } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-form/index&";
import { R as RateStatus } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-rate/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceRateRiceRate";
const { inject, computed, shallowRef, ref, onMounted, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-rate",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "6e830b16",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-rate/rice-rate.uvue",
  __name: "rice-rate",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    count: { default: 5, type: Number },
    icon: { default: "star-fill", type: String },
    voidIcon: { default: "star", type: String },
    size: { default: "22px", type: [String, Number] },
    gutter: { default: "4px", type: [String, Number] },
    color: { type: String },
    voidColor: { type: String },
    allowHalf: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    touchable: { type: Boolean, default: true },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "modelValue": {
      type: Number,
      default: 0
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceRateRiceRateSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("rate");
    const emit = __emit;
    const touch = useTouch();
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const formDisabled = inject(formDisabledInjectKey, null);
    const formReadonly = inject(formReadonlyInjectKey, null);
    const isDisabled = computed(() => {
      var _a2;
      return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || props.disabled;
    });
    const isReadonly = computed(() => {
      var _a2;
      return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly;
    });
    const unable = computed(() => {
      return isDisabled.value || isReadonly.value;
    });
    const rateRef = shallowRef(null);
    const rateItemRef = shallowRef([]);
    const rateItemWidth = ref(0);
    const rateLeft = ref(0);
    const rateList = computed(() => {
      var _a2;
      const list = [];
      const value = (_a2 = modelValue.value) !== null && _a2 !== void 0 ? _a2 : 0;
      for (let index = 1; index <= props.count; index++) {
        if (value >= index) {
          list.push(new RateStatus({ status: "full", value: 1 }));
        } else if (value + 0.5 >= index && props.allowHalf) {
          list.push(new RateStatus({ status: "half", value: 0.5 }));
        } else {
          list.push(new RateStatus({ status: "void", value: 0 }));
        }
      }
      return list;
    });
    const getRateSize = () => {
      var _a2, _b;
      (_b = (_a2 = rateRef.value) === null || _a2 === void 0 ? null : _a2.getBoundingClientRectAsync()) === null || _b === void 0 ? null : _b.then((res) => {
        rateLeft.value = res.left;
      });
      if (rateItemRef.value.length > 0) {
        rateItemRef.value[0].getBoundingClientRectAsync().then((res) => {
          rateItemWidth.value = res.width;
        });
      }
    };
    const updateModelValue = (value) => {
      if (unable.value || value == modelValue.value)
        return null;
      modelValue.value = value;
      emit("change", value);
    };
    const margin = computed(() => {
      return getPxNum(props.gutter);
    });
    const getRateIndex = (clientX) => {
      const size = rateItemWidth.value;
      const moveRange = clientX - rateLeft.value;
      let index = Math.floor(moveRange / (size + margin.value));
      index = index < 0 ? 0 : index;
      const range = Math.floor(moveRange - (size + margin.value) * index);
      let value;
      if (props.allowHalf) {
        if (range > size / 2) {
          value = index + 1;
        } else {
          value = index + 0.5;
        }
      } else {
        value = index + 1;
      }
      value = clamp(value, 0.5, props.count);
      if (touch.isTap.value && props.clearable && value == modelValue.value) {
        value = 0;
      }
      updateModelValue(value);
    };
    const handleClick = async (e, value) => {
    };
    const skipMove = ref(false);
    const onTouchstart = (e) => {
      if (unable.value)
        return null;
      getRateSize();
      skipMove.value = false;
      touch.start(e);
      getRateIndex(e.touches[0].clientX);
    };
    const onTouchmove = async (e) => {
      if (unable.value || !props.touchable || skipMove.value)
        return Promise.resolve(null);
      touch.move(e);
      if (touch.direction.value == "vertical") {
        skipMove.value = true;
      }
      if (touch.direction.value != "horizontal")
        return Promise.resolve(null);
      const clientX = e.touches[0].clientX;
      getRateIndex(clientX);
      e.preventDefault();
    };
    const iconFullColor = computed(() => {
      var _a2;
      return (_a2 = props.color) !== null && _a2 !== void 0 ? _a2 : "var(--rice-rate-color)";
    });
    const getIconColor = (item) => {
      var _a2;
      return item.status == "full" ? iconFullColor.value : (_a2 = props.voidColor) !== null && _a2 !== void 0 ? _a2 : "var(--rice-rate-void-color)";
    };
    const getRateItemStyle = (index) => {
      const css = /* @__PURE__ */ new Map();
      if (index < props.count - 1) {
        css.set("margin-right", addUnit(props.gutter));
      }
      return css;
    };
    const getHalfIconStyle = (item) => {
      return new UTSJSONObject({
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: item.value * 100 + "%"
      });
    };
    const rateClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("disabled", isDisabled.value)
      ];
    });
    let timer = 0;
    onMounted(() => {
      timer = setTimeout(() => {
        getRateSize();
      }, 100);
    });
    onUnmounted(() => {
      if (timer != null)
        clearTimeout(timer);
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 4, _unref(rateClass));
        _setSharedDataStyle(__sharedData, 5, __props.customStyle);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return _unref(rateList);
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData_VFor0, 6, getRateItemStyle(_for_key0.value));
        });
        const n2 = _createSharedDataComponentWithFallback(_component_rice_icon, "3ab59fff-" + _for_key0.value, {
          name: () => {
            return _for_item0.value.status == "full" ? __props.icon : __props.voidIcon;
          },
          size: () => {
            return __props.size;
          },
          color: () => {
            return getIconColor(_for_item0.value);
          }
        });
        _setSharedData(__sharedData_VFor0, 1, n2?.sharedData);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 2, _toSharedDataBoolean(__props.allowHalf && _for_item0.value.value == 0.5));
        }, () => {
          const n5 = _createSharedDataComponentWithFallback(_component_rice_icon, "3ab5a3e0-" + _for_key0.value, {
            size: () => {
              return __props.size;
            },
            name: () => {
              return __props.icon;
            },
            "custom-style": () => {
              return getHalfIconStyle(_for_item0.value);
            },
            color: () => {
              return _unref(iconFullColor);
            }
          });
          _setSharedData(__sharedData_VFor0, 3, n5?.sharedData);
        });
        _setSharedDataEvent(__sharedData_VFor0, 4, ($event) => {
          return handleClick($event, _for_key0.value + 1);
        });
        _setSharedDataTemplateRef(__sharedData_VFor0, 5, (n6) => {
          _setTemplateRef(n6, rateItemRef, true, "rateItemRef");
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      _setSharedDataEvent(__sharedData, 1, onTouchmove);
      _setSharedDataEvent(__sharedData, 2, onTouchstart);
      _setSharedDataTemplateRef(__sharedData, 3, (n7) => {
        _setTemplateRef(n7, rateRef, null, "rateRef");
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
//# sourceMappingURL=rice-rate.js.map
