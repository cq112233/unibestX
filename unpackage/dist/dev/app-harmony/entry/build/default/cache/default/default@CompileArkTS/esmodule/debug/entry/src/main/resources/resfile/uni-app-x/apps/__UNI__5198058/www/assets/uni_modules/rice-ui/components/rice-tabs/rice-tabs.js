import { _ as __easycom_2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-badge/rice-badge&";
import { a as addUnit, d as getPxNum } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { a as TabsClickTab, b as TabsChange, c as TabsItemRect } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-tabs/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceTabsRiceTabs";
const { ref, shallowRef, nextTick, computed, watch, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-tabs",
    styleIsolation: "app-and-page",
    externalClasses: ["active-text-class", "inactive-textClass", "disabled-text-class", "text-class"]
  },
  __dynamicSharedData: true,
  __hash: "7aae90d7",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-tabs/rice-tabs.uvue",
  __name: "rice-tabs",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    list: { default: () => {
      return [];
    }, type: Array },
    shrink: { type: Boolean, default: false },
    lineMode: { default: "slide", type: String },
    titleActiveColor: { type: String },
    titleInactiveColor: { type: String },
    initAnimate: { type: Boolean, default: true },
    bgColor: { type: String },
    height: { type: [String, Number] },
    lineColor: { type: String },
    lineWidth: { default: "20px", type: [String, Number] },
    lineHeight: { type: [String, Number] },
    textClass: { type: String },
    activeTextClass: { type: String },
    inactiveTextClass: { type: String },
    disabledTextClass: { type: String },
    itemStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    activeStyle: { type: null },
    inactiveStyle: { type: null },
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
  emits: /* @__PURE__ */ _mergeModels(["clickTab", "change"], ["update:modelValue"]),
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceTabsRiceTabsSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    const ns = useNamespace("tabs");
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    ref(0);
    let isFirstMove = ref(true);
    const indicatorRef = shallowRef(null);
    const tabScrollRef = shallowRef(null);
    const tabsItemRef = ref([]);
    const tabsItemRect = ref([]);
    const cacheTabItemsSize = async () => {
      tabsItemRect.value = [];
      for (let i = 0; i < tabsItemRef.value.length; i++) {
        const element = tabsItemRef.value[i];
        const x = element.offsetLeft;
        const w = element.offsetWidth;
        tabsItemRect.value.push(new TabsItemRect({
          x,
          w
        }));
      }
    };
    const updateTabIndicator = async (currentIndex, moveToIndex, percentage) => {
      var _a2, _b, _c, _d, _e, _f;
      if (tabsItemRect.value.length == 0 || moveToIndex >= tabsItemRect.value.length)
        return Promise.resolve(null);
      tabsItemRect.value[currentIndex];
      const moveToSize = tabsItemRect.value[moveToIndex];
      const indicatorLineX = moveToSize.x;
      const indicatorLineW = getPxNum(props.lineWidth, moveToSize.w);
      const x = indicatorLineX + (moveToSize.w - indicatorLineW) / 2;
      if (!props.initAnimate) {
        (_a2 = indicatorRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("opacity", isFirstMove.value ? 0 : 1);
        (_b = indicatorRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transition-duration", isFirstMove.value ? "0ms" : "300ms");
      }
      (_c = indicatorRef.value) === null || _c === void 0 ? null : _c.style.setProperty("width", indicatorLineW + "px");
      (_e = (_d = indicatorRef.value) === null || _d === void 0 ? null : _d.style) === null || _e === void 0 ? null : _e.setProperty("transform", `translateX(${x}px)`);
      const rect = await tabScrollRef.value.getBoundingClientRectAsync();
      tabScrollRef.value.scrollLeft = x - rect.width / 2;
      await nextTick();
      (_f = indicatorRef.value) === null || _f === void 0 ? null : _f.style.setProperty("opacity", 1);
      isFirstMove.value = false;
    };
    const tabClick = (tab, index) => {
      var _a2, _b;
      emit("clickTab", new TabsClickTab({
        index,
        name: tab.name,
        value: tab.value,
        disabled: (_a2 = tab.disabled) !== null && _a2 !== void 0 ? _a2 : false
      }));
      if (modelValue.value == index || tab.disabled == true)
        return null;
      updateTabIndicator(modelValue.value, index);
      modelValue.value = index;
      emit("change", new TabsChange({
        index,
        name: tab.name,
        value: tab.value,
        disabled: (_b = tab.disabled) !== null && _b !== void 0 ? _b : false
      }));
    };
    const getActiveZoomStyle = (index) => {
      var _a2;
      const css = /* @__PURE__ */ new Map();
      let width = "0px";
      if (index == modelValue.value) {
        width = addUnit((_a2 = props.lineWidth) !== null && _a2 !== void 0 ? _a2 : "20px");
      }
      css.set("width", width);
      return css;
    };
    const resize = async () => {
      await nextTick();
      await cacheTabItemsSize();
      updateTabIndicator(modelValue.value, modelValue.value);
    };
    const tabsStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.height != null) {
        css.set("height", addUnit(props.height));
      }
      if (props.bgColor != null) {
        css.set("background-color", props.bgColor);
      }
      return css;
    });
    const indicatorStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.lineHeight != null)
        css.set("height", addUnit(props.lineHeight));
      if (props.lineColor != null)
        css.set("background-color", props.lineColor);
      return css;
    });
    const getItemStyle = (tab, index) => {
      const basic = [props.itemStyle];
      if (tab.disabled == true)
        return basic;
      const isSelected = index == modelValue.value;
      if (isSelected && props.activeStyle != null) {
        basic.push(props.activeStyle);
      }
      if (!isSelected && props.inactiveStyle != null) {
        basic.push(props.inactiveStyle);
      }
      return basic;
    };
    const getTextClass = (tab, index) => {
      var _a2, _b, _c;
      const basic = [];
      const isSelected = index == modelValue.value;
      if (props.textClass != null) {
        basic.push(props.textClass);
      }
      if (isSelected) {
        basic.push("rice-tabs__item__active");
        basic.push((_a2 = props.activeTextClass) !== null && _a2 !== void 0 ? _a2 : "");
      } else {
        basic.push((_b = props.inactiveTextClass) !== null && _b !== void 0 ? _b : "");
      }
      if (tab.disabled == true) {
        basic.push("rice-tabs__item__disabled");
        basic.push((_c = props.disabledTextClass) !== null && _c !== void 0 ? _c : "");
      }
      return basic;
    };
    const getTextStyle = (tab, index) => {
      const css = /* @__PURE__ */ new Map();
      const isSelected = index == modelValue.value;
      if (isSelected && props.titleActiveColor != null) {
        css.set("color", props.titleActiveColor);
      }
      if (!isSelected && props.titleInactiveColor != null) {
        css.set("color", props.titleInactiveColor);
      }
      return css;
    };
    watch(modelValue, async (newVal, oldVal) => {
      updateTabIndicator(oldVal, newVal);
    });
    watch(() => {
      return [props.lineWidth, props.lineHeight, props.list];
    }, async () => {
      await nextTick();
      resize();
    });
    onMounted(() => {
      setTimeout(() => {
        resize();
      }, 100);
    });
    __expose({
      resize
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_badge = __easycom_2;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 6, ["rice-tabs", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 7, [_unref(tabsStyle), __props.customStyle]);
      });
      _createSharedDataSlot("left", null, null);
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return __props.list;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData_VFor0, 13, ["rice-tabs__item", { "rice-tabs--shrink": props.shrink }]);
          _setSharedDataStyle(__sharedData_VFor0, 14, getItemStyle(_for_item0.value, _for_key0.value));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_for_item0.value.badge != null));
        }, () => {
          const n6 = _createSharedDataComponentWithFallback(_component_rice_badge, "4d88140e-" + _for_key0.value, {
            "is-dot": () => {
              return _for_item0.value.badge.isDot;
            },
            value: () => {
              return _for_item0.value.badge.value;
            },
            "show-zero": () => {
              return _for_item0.value.badge.showZero ?? true;
            },
            offset: [10, 0]
          }, {
            "default": () => {
              _renderSharedDataEffect(() => {
                const _item = _for_item0.value;
                const _index = _for_key0.value;
                _setSharedDataClass(__sharedData_VFor0, 3, ["rice-tabs__item__text", getTextClass(_item, _index)]);
                _setSharedDataStyle(__sharedData_VFor0, 4, getTextStyle(_item, _index));
                _setSharedData(__sharedData_VFor0, 5, _toDisplayString(_item.name));
              });
            }
          });
          _setSharedData(__sharedData_VFor0, 2, n6?.sharedData);
        }, () => {
          _renderSharedDataEffect(() => {
            const _item = _for_item0.value;
            const _index = _for_key0.value;
            _setSharedDataClass(__sharedData_VFor0, 6, ["rice-tabs__item__text", getTextClass(_item, _index)]);
            _setSharedDataStyle(__sharedData_VFor0, 7, getTextStyle(_item, _index));
            _setSharedData(__sharedData_VFor0, 8, _toDisplayString(_item.name));
          });
        }, 261);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 9, _toSharedDataBoolean(__props.lineMode == "zoom"));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData_VFor0, 10, [getActiveZoomStyle(_for_key0.value), _unref(indicatorStyle)]);
          });
        });
        _setSharedDataEvent(__sharedData_VFor0, 11, () => {
          return tabClick(_for_item0.value, _for_key0.value);
        });
        _setSharedDataTemplateRef(__sharedData_VFor0, 12, (n12) => {
          _setTemplateRef(n12, tabsItemRef, true, "tabsItemRef");
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.lineMode == "slide"));
      }, () => {
        _setSharedDataTemplateRef(__sharedData, 2, (n15) => {
          _setTemplateRef(n15, indicatorRef, null, "indicatorRef");
        });
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 3, _unref(indicatorStyle));
          _setSharedDataClass(__sharedData, 4, ["rice-tabs__indicator", { "rice-tabs__indicator--animate": !__props.initAnimate }]);
        });
      });
      _setSharedDataTemplateRef(__sharedData, 5, (n16) => {
        _setTemplateRef(n16, tabScrollRef, null, "tabScrollRef");
      });
      _createSharedDataSlot("right", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-tabs.js.map
