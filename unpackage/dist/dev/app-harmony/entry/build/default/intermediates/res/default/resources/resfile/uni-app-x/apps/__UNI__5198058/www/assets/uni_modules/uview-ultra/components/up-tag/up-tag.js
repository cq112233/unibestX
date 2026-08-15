import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-transition/up-transition.js";
import { i as image } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTagUpTag";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-tag"
  },
  __dynamicSharedData: true,
  __hash: "15421bde",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-tag/up-tag.uvue",
  __name: "up-tag",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    size: {
      type: String,
      default: "medium"
    },
    shape: {
      type: String,
      default: "square"
    },
    text: {
      type: [String, Number],
      default: ""
    },
    bgColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    closeColor: {
      type: String,
      default: "#C6C7CB"
    },
    name: {
      type: [String, Number],
      default: ""
    },
    plainFill: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTagUpTagSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const style = computed(() => {
      const s = new UTSJSONObject({});
      if (props.bgColor != "") {
        s["backgroundColor"] = props.bgColor;
      }
      if (props.color != "") {
        s["color"] = props.color;
      }
      if (props.borderColor != "") {
        s["borderColor"] = props.borderColor;
      }
      return s;
    });
    const textColor = computed(() => {
      const s = new UTSJSONObject({});
      if (props.color != "") {
        s["color"] = props.color;
      }
      return s;
    });
    const imgStyle = computed(() => {
      const width = props.size === "large" ? "17px" : props.size === "medium" ? "15px" : "13px";
      return new UTSJSONObject({
        width,
        height: width
      });
    });
    const closeSize = computed(() => {
      return props.size === "large" ? "15px" : props.size === "medium" ? "13px" : "12px";
    });
    const iconSize = computed(() => {
      return props.size === "large" ? "21px" : props.size === "medium" ? "19px" : "16px";
    });
    const elIconColor = computed(() => {
      return props.iconColor != "" ? props.iconColor : props.plain ? props.type : "#ffffff";
    });
    function closeHandler() {
      emit("close", props.name.toString());
    }
    function clickHandler() {
      emit("click", props.name.toString());
    }
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_transition = __easycom_1$1;
      const n20 = _createSharedDataComponentWithFallback(
        _component_up_transition,
        "5a09e631",
        {
          mode: "fade",
          show: () => {
            return __props.show;
          },
          style: "display: flex;"
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            _renderSharedDataEffect(() => {
              const _plain = __props.plain;
              const _type = __props.type;
              const _closable = __props.closable;
              _setSharedDataClass(__sharedData, 13, ["up-tag", [`up-tag--${__props.shape}`, !_plain ? `up-tag--${_type}` : "", _plain ? `up-tag--${_type}--plain` : "", `up-tag--${__props.size}`, _plain && __props.plainFill ? `up-tag--${_type}--plain--fill` : ""]]);
              _setSharedDataStyle(__sharedData, 14, [{
                marginRight: _closable ? "10px" : 0,
                marginTop: _closable ? "10px" : 0
              }, style.value]);
            });
            _createSharedDataSlot("icon", null, null, () => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.icon != ""));
              }, () => {
                _createSharedDataIf(() => {
                  return _setSharedData(__sharedData, 7, _toSharedDataBoolean(_unref(image)(__props.icon)));
                }, () => {
                  _renderSharedDataEffect(() => {
                    _setSharedDataAttr(__sharedData, 8, _toSharedDataString(__props.icon));
                    _setSharedDataStyle(__sharedData, 9, [imgStyle.value]);
                  });
                }, () => {
                  const n8 = _createSharedDataComponentWithFallback(_component_up_icon, "01ad9822", {
                    color: () => {
                      return elIconColor.value;
                    },
                    name: () => {
                      return __props.icon;
                    },
                    size: () => {
                      return iconSize.value;
                    }
                  });
                  _setSharedData(__sharedData, 10, n8?.sharedData);
                }, 261);
              }, null, 129);
            });
            _renderSharedDataEffect(() => {
              const _type = __props.type;
              _setSharedDataClass(__sharedData, 15, ["up-tag__text", [`up-tag__text--${_type}`, __props.plain ? `up-tag__text--${_type}--plain` : "", `up-tag__text--${__props.size}`]]);
              _setSharedDataStyle(__sharedData, 16, [textColor.value]);
            });
            _createSharedDataSlot("default", null, null, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 11, _toDisplayString(__props.text));
              });
            });
            _setSharedDataEvent(__sharedData, 12, clickHandler);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.closable));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataClass(__sharedData, 4, ["up-tag__close", [`up-tag__close--${__props.size}`]]);
                _setSharedDataStyle(__sharedData, 5, { backgroundColor: __props.closeColor });
              });
              const n17 = _createSharedDataComponentWithFallback(_component_up_icon, "340a2430", {
                name: "close",
                size: () => {
                  return closeSize.value;
                },
                color: "#ffffff"
              });
              _setSharedData(__sharedData, 2, n17?.sharedData);
              _setSharedDataEvent(__sharedData, 3, closeHandler);
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n20?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-tag.js.map
