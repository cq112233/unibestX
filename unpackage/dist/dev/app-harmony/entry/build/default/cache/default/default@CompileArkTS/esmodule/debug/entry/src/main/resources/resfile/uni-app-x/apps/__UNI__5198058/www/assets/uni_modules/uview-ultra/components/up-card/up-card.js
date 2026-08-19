import { g as getPx, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCardUpCard";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-card"
  },
  __dynamicSharedData: true,
  __hash: "1a3762a8",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-card/up-card.uvue",
  __name: "up-card",
  props: {
    full: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    titleColor: {
      type: String,
      default: "#303133"
    },
    titleSize: {
      type: [Number, String],
      default: 15
    },
    subTitle: {
      type: String,
      default: ""
    },
    subTitleColor: {
      type: String,
      default: "#909193"
    },
    subTitleSize: {
      type: [Number, String],
      default: 12
    },
    border: {
      type: Boolean,
      default: true
    },
    index: {
      type: [Number, String, Object],
      default: ""
    },
    margin: {
      type: String,
      default: "15px"
    },
    borderRadius: {
      type: [Number, String],
      default: 8
    },
    headStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    bodyStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    footStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    headBorderBottom: {
      type: Boolean,
      default: true
    },
    footBorderTop: {
      type: Boolean,
      default: true
    },
    thumb: {
      type: String,
      default: ""
    },
    thumbWidth: {
      type: [String, Number],
      default: 30
    },
    thumbCircle: {
      type: Boolean,
      default: false
    },
    padding: {
      type: [String, Number],
      default: 15
    },
    paddingHead: {
      type: [String, Number],
      default: ""
    },
    paddingBody: {
      type: [String, Number],
      default: ""
    },
    paddingFoot: {
      type: [String, Number],
      default: ""
    },
    showHead: {
      type: Boolean,
      default: true
    },
    showFoot: {
      type: Boolean,
      default: true
    },
    boxShadow: {
      type: String,
      default: "none"
    }
  },
  emits: ["click", "head-click", "body-click", "foot-click"],
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCardUpCardSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const realThumb = computed(() => {
      return props.thumb;
    });
    const hasBorderRadius = computed(() => {
      const pxStr = getPx(props.borderRadius);
      return parseFloat(pxStr) > 0;
    });
    const cardStyle = computed(() => {
      return new UTSJSONObject({
        borderRadius: addUnit(props.borderRadius),
        margin: props.margin,
        boxShadow: props.boxShadow
      });
    });
    const headPaddingStyle = computed(() => {
      const padVal = props.paddingHead != "" ? props.paddingHead : props.padding;
      return new UTSJSONObject({ padding: addUnit(padVal) });
    });
    const thumbStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.thumbWidth),
        width: addUnit(props.thumbWidth),
        borderRadius: props.thumbCircle ? "50px" : "4px"
      });
    });
    const titleStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.titleSize),
        color: props.titleColor
      });
    });
    const subTitleStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.subTitleSize),
        color: props.subTitleColor
      });
    });
    const bodyPaddingStyle = computed(() => {
      const padVal = props.paddingBody != "" ? props.paddingBody : props.padding;
      return new UTSJSONObject({ padding: addUnit(padVal) });
    });
    const footPaddingStyle = computed(() => {
      const padVal = props.paddingFoot != "" ? props.paddingFoot : props.padding;
      return new UTSJSONObject({ padding: addUnit(padVal) });
    });
    const emit = __emit;
    const click = () => {
      emit("click", props.index);
    };
    const headClick = () => {
      emit("head-click", props.index);
    };
    const bodyClick = () => {
      emit("body-click", props.index);
    };
    const footClick = () => {
      emit("foot-click", props.index);
    };
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 20, ["up-card", {
          "up-border": __props.border,
          "up-card-full": __props.full,
          "up-card--border": hasBorderRadius.value
        }]);
        _setSharedDataStyle(__sharedData, 21, cardStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.showHead));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 12, ["up-card__head", {
            "up-border-bottom": __props.headBorderBottom
          }]);
          _setSharedDataStyle(__sharedData, 13, [headPaddingStyle.value, __props.headStyle ?? {}]);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean($slots["head"] == null));
        }, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.title != ""));
          }, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 3, _toSharedDataBoolean(realThumb.value != ""));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataAttr(__sharedData, 4, _toSharedDataString(realThumb.value));
                _setSharedDataStyle(__sharedData, 5, thumbStyle.value);
              });
            });
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 6, titleStyle.value);
              _setSharedData(__sharedData, 7, _toDisplayString(__props.title));
            });
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 8, _toSharedDataBoolean(__props.subTitle != ""));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 9, subTitleStyle.value);
              _setSharedData(__sharedData, 10, _toDisplayString(__props.subTitle));
            });
          });
        }, () => {
          _createSharedDataSlot("head", null, null);
        }, 1029);
        _setSharedDataEvent(__sharedData, 11, headClick);
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 22, [bodyPaddingStyle.value, __props.bodyStyle ?? {}]);
      });
      _createSharedDataSlot("body", null, null, () => {
        _createSharedDataSlot("default", null, null);
      });
      _setSharedDataEvent(__sharedData, 18, bodyClick);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 14, _toSharedDataBoolean(__props.showFoot));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 16, ["up-card__foot", {
            "up-border-top": __props.footBorderTop
          }]);
          _setSharedDataStyle(__sharedData, 17, [footPaddingStyle.value, __props.footStyle ?? {}]);
        });
        _createSharedDataSlot("foot", null, null);
        _setSharedDataEvent(__sharedData, 15, footClick);
      });
      _setSharedDataEvent(__sharedData, 19, click);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-card.js.map
