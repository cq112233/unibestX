import { _ as __easycom_1 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-line/up-line.js";
import { d as defProps } from "./cell.js";
import { b as addStyle } from "../../libs/function/index.js";
import { e as empty } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataSlot: _createSharedDataSlot, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCellUpCell";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-cell"
  },
  __dynamicSharedData: true,
  __hash: "5a187b7f",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-cell/up-cell.uvue",
  __name: "up-cell",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: defProps.getString("cell.title")
    },
    label: {
      type: String,
      default: defProps.getString("cell.label")
    },
    value: {
      type: [String, Number],
      default: defProps.getString("cell.value")
    },
    icon: {
      type: String,
      default: defProps.getString("cell.icon")
    },
    iconStyle: {
      type: [String, Object],
      default: defProps.getAny("cell.iconStyle")
    },
    rightIcon: {
      type: String,
      default: defProps.getString("cell.rightIcon")
    },
    rightIconStyle: {
      type: [String, Object],
      default: defProps.getAny("cell.rightIconStyle")
    },
    size: {
      type: String,
      default: defProps.getString("cell.size")
    },
    center: {
      type: Boolean,
      default: defProps.getBoolean("cell.center")
    },
    url: {
      type: String,
      default: defProps.getString("cell.url")
    },
    name: {
      type: [String, Number],
      default: defProps.getString("cell.name")
    },
    linkType: {
      type: String,
      default: defProps.getString("cell.linkType")
    },
    clickable: {
      type: Boolean,
      default: defProps.getBoolean("cell.clickable")
    },
    isLink: {
      type: Boolean,
      default: defProps.getBoolean("cell.isLink")
    },
    arrowDirection: {
      type: String,
      default: defProps.getString("cell.arrowDirection")
    },
    border: {
      type: Boolean,
      default: defProps.getBoolean("cell.border")
    },
    disabled: {
      type: Boolean,
      default: defProps.getBoolean("cell.disabled")
    },
    titleStyle: {
      type: Object,
      default: defProps.getAny("cell.titleStyle")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCellUpCellSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emits = __emit;
    const testEmpty = function(val) {
      return empty(val);
    };
    const titleTextStyle = computed(() => {
      return addStyle(props.titleStyle);
    });
    const customCellStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const clickHandler = (e = null) => {
      if (props.disabled)
        return null;
      emits("click", new UTSJSONObject({
        name: props.name
      }));
      if (!props.isLink)
        return null;
      if (props.url != "") {
        uni.navigateTo({
          url: props.url
        });
      }
    };
    __expose({
      testEmpty
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1;
      const _component_up_line = __easycom_1$1;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 22, ["up-cell", [__props.customClass]]);
        _setSharedDataStyle(__sharedData, 23, customCellStyle.value);
        _setSharedDataClass(__sharedData, 24, _toSharedDataString(!__props.disabled && (__props.clickable || __props.isLink) ? "up-cell--clickable" : ""));
        _setSharedDataClass(__sharedData, 25, ["up-cell__body", { "up-cell--center": __props.center, "up-cell__body--large": __props.size == "large" }]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 11, _toSharedDataBoolean($slots["icon"] != null || __props.icon != ""));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 12, _toSharedDataBoolean($slots["icon"] != null));
        }, () => {
          _createSharedDataSlot("icon", null, null);
        }, () => {
          const n6 = _createSharedDataComponentWithFallback(_component_up_icon, "50dbb0ab", {
            name: () => {
              return __props.icon;
            },
            "custom-style": () => {
              return __props.iconStyle;
            },
            size: () => {
              return __props.size == "large" ? "22px" : "18px";
            }
          });
          _setSharedData(__sharedData, 13, n6?.sharedData);
        }, 261);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 14, _toSharedDataBoolean($slots["title"] != null && __props.title == ""));
      }, () => {
        _createSharedDataSlot("title", null, null);
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 15, ["up-cell__title-text", { "up-cell--disabled": __props.disabled, "up-cell__title-text--large": __props.size == "large" }]);
          _setSharedDataStyle(__sharedData, 16, titleTextStyle.value);
          _setSharedData(__sharedData, 17, _toDisplayString(__props.title));
        });
      }, 773);
      _createSharedDataSlot("label", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 18, _toSharedDataBoolean(__props.label != ""));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 19, ["up-cell__label", { "up-cell--disabled": __props.disabled, "up-cell__label--large": __props.size == "large" }]);
            _setSharedData(__sharedData, 20, _toDisplayString(__props.label));
          });
        });
      });
      _createSharedDataSlot("value", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 2, _toSharedDataBoolean(testEmpty(__props.value) == false));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 3, ["up-cell__value", { "up-cell--disabled": __props.disabled, "up-cell__value--large": __props.size == "large" }]);
            _setSharedData(__sharedData, 4, _toDisplayString(__props.value));
          });
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 5, _toSharedDataBoolean($slots["right-icon"] != null || __props.isLink));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 8, ["up-cell__right-icon-wrap", [`up-cell__right-icon-wrap--${__props.arrowDirection}`]]);
        });
        _createSharedDataSlot("right-icon", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.rightIcon != ""));
          }, () => {
            const n31 = _createSharedDataComponentWithFallback(_component_up_icon, "6acec164", {
              name: () => {
                return __props.rightIcon;
              },
              "custom-style": () => {
                return __props.rightIconStyle;
              },
              color: () => {
                return __props.disabled ? "#c8c9cc" : "info";
              },
              size: () => {
                return __props.size == "large" ? "18px" : "16px";
              }
            });
            _setSharedData(__sharedData, 7, n31?.sharedData);
          });
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 9, _toSharedDataBoolean($slots["righticon"] != null));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 10, ["up-cell__right-icon-wrap", [`up-cell__right-icon-wrap--${__props.arrowDirection}`]]);
        });
        _createSharedDataSlot("righticon", null, null);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.border));
      }, () => {
        const n40 = _createSharedDataComponentWithFallback(_component_up_line, "6ace0534");
        _setSharedData(__sharedData, 1, n40?.sharedData);
      });
      _setSharedDataEvent(__sharedData, 21, clickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-cell.js.map
