import { b as addStyle, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSubsectionUpSubsection";
const { computed, ref, watch, onMounted, nextTick, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-subsection"
  },
  __dynamicSharedData: true,
  __hash: "28423ad6",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue",
  __name: "up-subsection",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    current: {
      type: [String, Number],
      default: 0
    },
    activeColor: {
      type: String,
      default: "#3c9cff"
    },
    inactiveColor: {
      type: String,
      default: "#303133"
    },
    mode: {
      type: String,
      default: "button"
    },
    fontSize: {
      type: [String, Number],
      default: 12
    },
    bold: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "#eeeeef"
    },
    keyName: {
      type: String,
      default: "name"
    },
    activeColorKeyName: {
      type: String,
      default: "activeColor"
    },
    inactiveColorKeyName: {
      type: String,
      default: "inactiveColor"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["change"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSubsectionUpSubsectionSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const innerCurrent = ref(parseInt(props.current.toString()));
    const componentWidth = ref(0);
    const firstTime = ref(true);
    watch(() => {
      return props.current;
    }, (n = null) => {
      const nn = parseInt(n.toString());
      if (nn !== innerCurrent.value) {
        innerCurrent.value = nn;
      }
    });
    watch(() => {
      return props.list;
    }, () => {
      init();
    });
    const wrapperStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.mode === "button") {
        style["backgroundColor"] = props.bgColor;
      }
      return style;
    });
    const barStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (componentWidth.value > 0) {
        const itemWidth = componentWidth.value / props.list.length;
        style["width"] = itemWidth.toString() + "px";
        style["transform"] = `translateX(${innerCurrent.value * itemWidth}px)`;
      } else {
        if (props.list.length > 0) {
          style["width"] = (100 / props.list.length).toString() + "%";
        }
        style["transform"] = `translateX(${innerCurrent.value * 100}%)`;
      }
      if (firstTime.value) {
        style["transitionDuration"] = "0ms";
      } else {
        style["transitionDuration"] = "300ms";
      }
      style["left"] = "0px";
      style["top"] = "0px";
      style["bottom"] = "0px";
      return style;
    });
    const innerBarStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.mode === "subsection") {
        if (props.activeColor != "#3c9cff") {
          style["backgroundColor"] = props.activeColor;
        }
      }
      return style;
    });
    function getWrapperRect() {
      return new Promise((resolve) => {
        uni.createSelectorQuery().in(instance === null || instance === void 0 ? null : instance.proxy).select(".up-subsection").boundingClientRect().exec((rect) => {
          if (rect != null && rect.length > 0) {
            resolve(rect[0]);
          } else {
            resolve(null);
          }
        });
      });
    }
    function resize() {
      getWrapperRect().then((rect = null) => {
        if (rect != null && rect.width != null && rect.width > 0) {
          componentWidth.value = rect.width;
          if (firstTime.value) {
            nextTick(() => {
              setTimeout(() => {
                firstTime.value = false;
              }, 50);
            });
          }
        }
      });
    }
    function init() {
      innerCurrent.value = parseInt(props.current.toString());
      nextTick(() => {
        resize();
      });
    }
    function itemStyle(index) {
      const style = new UTSJSONObject({});
      if (props.mode === "subsection") {
        if (props.activeColor != "#3c9cff") {
          style["borderColor"] = props.activeColor;
        }
        style["borderWidth"] = "1px";
        style["borderStyle"] = "solid";
      }
      return style;
    }
    function textStyle(index) {
      var _a2, _b;
      const style = new UTSJSONObject({});
      if (props.disabled) {
        style["fontWeight"] = "normal";
        style["fontSize"] = addUnit(props.fontSize);
        style["color"] = "#c8c9cc";
        return style;
      }
      style["fontWeight"] = props.bold && innerCurrent.value === index ? "bold" : "normal";
      style["fontSize"] = addUnit(props.fontSize);
      const item = props.list[index];
      const activeColorTemp = typeof item == "object" && item != null ? (_a2 = item[props.activeColorKeyName]) !== null && _a2 !== void 0 ? _a2 : "" : "";
      const inactiveColorTemp = typeof item === "object" && item != null ? (_b = item[props.inactiveColorKeyName]) !== null && _b !== void 0 ? _b : "" : "";
      if (props.mode === "subsection") {
        style["color"] = innerCurrent.value === index ? activeColorTemp != "" ? activeColorTemp : "#fff" : inactiveColorTemp != "" ? inactiveColorTemp : props.inactiveColor;
      } else {
        const c = activeColorTemp != "" ? activeColorTemp : props.activeColor;
        if (innerCurrent.value == index) {
          if (c != "#3c9cff") {
            style["color"] = c;
          }
        } else {
          style["color"] = inactiveColorTemp != "" ? inactiveColorTemp : props.inactiveColor;
        }
      }
      return style;
    }
    function getText(item = null) {
      if (typeof item === "string") {
        return item;
      } else if (typeof item === "object" && item != null) {
        let temp = UTS.JSON.parse(UTS.JSON.stringify(item));
        return temp.getString(props.keyName);
      } else {
        return "error";
      }
    }
    function clickHandler(index) {
      if (props.disabled)
        return null;
      innerCurrent.value = index;
      emit("change", index);
    }
    onMounted(() => {
      init();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _renderSharedDataEffect(() => {
        const _mode = __props.mode;
        const _innerCurrent = innerCurrent.value;
        const _list = __props.list;
        const _list_length = _list.length;
        _setSharedDataClass(__sharedData, 2, ["up-subsection", [`up-subsection--${_mode}`]]);
        _setSharedDataStyle(__sharedData, 3, [_unref(addStyle)(__props.customStyle), wrapperStyle.value]);
        _setSharedDataStyle(__sharedData, 4, barStyle.value);
        _setSharedDataClass(__sharedData, 5, ["up-subsection__bar__inner", {
          "up-subsection--button__bar": _mode === "button",
          "up-subsection__bar__inner--button": _mode === "button",
          "up-subsection__bar--first": _innerCurrent == 0 && _mode === "subsection",
          "up-subsection__bar--center": _innerCurrent > 0 && _innerCurrent < _list_length - 1 && _mode === "subsection",
          "up-subsection__bar--last": _innerCurrent == _list_length - 1 && _mode === "subsection"
        }]);
        _setSharedDataStyle(__sharedData, 6, innerBarStyle.value);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return __props.list;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          const _index = _for_key0.value;
          const _list = __props.list;
          const _list_length = _list.length;
          _setSharedDataClass(__sharedData_VFor0, 6, ["up-subsection__item cursor-pointer", [
            `up-subsection__item--${_index.toString()}`,
            _index < _list_length - 1 ? "up-subsection__item--no-border-right" : "",
            _index == 0 ? "up-subsection__item--first" : "",
            _index == _list_length - 1 ? "up-subsection__item--last" : "",
            __props.disabled ? "up-subsection__item--disabled" : ""
          ]]);
          _setSharedDataStyle(__sharedData_VFor0, 7, [itemStyle()]);
        });
        _createSharedDataSlot("item", {
          item: () => {
            return _for_item0.value;
          },
          index: () => {
            return _for_key0.value;
          }
        }, (data) => {
          return _setSharedData(__sharedData_VFor0, 1, data);
        }, () => {
          _renderSharedDataEffect(() => {
            const _index = _for_key0.value;
            _setSharedDataClass(__sharedData_VFor0, 2, ["up-subsection__item__text", [
              __props.disabled ? "up-subsection__item__text--disabled" : "",
              innerCurrent.value == _index && __props.mode === "button" && __props.activeColor == "#3c9cff" ? "up-subsection__item__text--active" : ""
            ]]);
            _setSharedDataStyle(__sharedData_VFor0, 3, [textStyle(_index)]);
            _setSharedData(__sharedData_VFor0, 4, _toDisplayString(getText(_for_item0.value)));
          });
        });
        _setSharedDataEvent(__sharedData_VFor0, 5, () => {
          return clickHandler(_for_key0.value);
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      });
      _setSharedDataTemplateRef(__sharedData, 1, (n8) => {
        _setTemplateRef(n8, "upSubsectionRef");
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
//# sourceMappingURL=up-subsection.js.map
