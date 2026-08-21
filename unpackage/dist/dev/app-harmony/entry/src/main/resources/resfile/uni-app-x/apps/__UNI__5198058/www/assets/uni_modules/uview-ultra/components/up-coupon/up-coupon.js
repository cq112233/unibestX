import { _ as __easycom_0 } from "../up-tag/up-tag.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCouponUpCoupon";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-coupon"
  },
  __dynamicSharedData: true,
  __hash: "82ec3d84",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-coupon/up-coupon.uvue",
  __name: "up-coupon",
  props: {
    amount: {
      type: [String, Number],
      default: ""
    },
    unit: {
      type: String,
      default: "￥"
    },
    unitPosition: {
      type: String,
      default: "left"
    },
    limit: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "优惠券"
    },
    desc: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    actionText: {
      type: String,
      default: "使用"
    },
    shape: {
      type: String,
      default: "coupon"
    },
    size: {
      type: String,
      default: "medium"
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCouponUpCouponSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const couponStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.bgColor.length > 0)
        style["backgroundColor"] = props.bgColor;
      return style;
    });
    function hasType() {
      return props.type.length > 0;
    }
    function handleClick() {
      if (props.disabled)
        return null;
      emit("click");
    }
    return () => {
      "raw js";
      const _component_up_tag = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 25, ["up-coupon", [`up-coupon--${__props.shape}`, `up-coupon--${__props.type}`, `up-coupon--${__props.size}`, { "up-coupon--disabled": __props.disabled }]]);
        _setSharedDataStyle(__sharedData, 26, [couponStyle.value]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.unitPosition == "left"));
      }, () => {
        _createSharedDataSlot("unit", {
          unit: () => {
            return __props.unit;
          },
          unitPosition: () => {
            return __props.unitPosition;
          }
        }, (data) => {
          return _setSharedData(__sharedData, 2, data);
        }, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.unitPosition == "left"));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 4, _toDisplayString(__props.unit));
            });
          });
        });
      });
      _createSharedDataSlot("amount", { amount: () => {
        return __props.amount;
      } }, (data) => {
        return _setSharedData(__sharedData, 5, data);
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 6, _toDisplayString(__props.amount));
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.unitPosition == "right"));
      }, () => {
        _createSharedDataSlot("unit", {
          unit: () => {
            return __props.unit;
          },
          unitPosition: () => {
            return __props.unitPosition;
          }
        }, (data) => {
          return _setSharedData(__sharedData, 8, data);
        }, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 9, _toSharedDataBoolean(__props.unitPosition == "right"));
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 10, _toDisplayString(__props.unit));
            });
          });
        });
      });
      _createSharedDataSlot("limit", { limit: () => {
        return __props.limit;
      } }, (data) => {
        return _setSharedData(__sharedData, 11, data);
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 12, _toSharedDataBoolean(__props.limit));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 13, _toDisplayString(__props.limit));
          });
        });
      });
      _createSharedDataSlot("title", { title: () => {
        return __props.title;
      } }, (data) => {
        return _setSharedData(__sharedData, 14, data);
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 15, _toDisplayString(__props.title));
        });
      });
      _createSharedDataSlot("desc", { desc: () => {
        return __props.desc;
      } }, (data) => {
        return _setSharedData(__sharedData, 16, data);
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 17, _toSharedDataBoolean(__props.desc));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 18, _toDisplayString(__props.desc));
          });
        });
      });
      _createSharedDataSlot("time", { time: () => {
        return __props.time;
      } }, (data) => {
        return _setSharedData(__sharedData, 19, data);
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 20, _toSharedDataBoolean(__props.time));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 21, _toDisplayString(__props.time));
          });
        });
      });
      _createSharedDataSlot("action", {
        actionText: () => {
          return __props.actionText;
        },
        circle: () => {
          return __props.circle;
        }
      }, (data) => {
        return _setSharedData(__sharedData, 22, data);
      }, () => {
        const n39 = _createSharedDataComponentWithFallback(_component_up_tag, "25ed78aa", {
          type: "error",
          text: () => {
            return __props.actionText;
          },
          bgColor: () => {
            return hasType() ? "transparent" : "#eb433d";
          },
          borderColor: () => {
            return hasType() ? "#eee" : "#eb433d";
          },
          borderRadius: "6px",
          size: "medium",
          class: "up-coupon__action-text",
          shape: () => {
            return __props.circle ? "circle" : "square";
          }
        });
        _setSharedData(__sharedData, 23, n39?.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.shape == "envelope"));
      }, () => {
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataEvent(__sharedData, 24, handleClick);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-coupon.js.map
