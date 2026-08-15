import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { d as defProps } from "./rowNotice.js";
import { a as addUnit, k as error, s as sleep, u as upGetRect, g as getPx } from "../../libs/function/index.js";
import { s as string } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor, setSharedDataTemplateRef: _setSharedDataTemplateRef, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpRowNoticeUpRowNotice";
const { ref, computed, watch, onMounted, onBeforeUnmount, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "1e6934a4",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-row-notice/up-row-notice.uvue",
  __name: "up-row-notice",
  props: {
    text: {
      type: String,
      default: defProps.getString("rowNotice.text")
    },
    icon: {
      type: String,
      default: defProps.getString("rowNotice.icon")
    },
    mode: {
      type: String,
      default: defProps.getString("rowNotice.mode")
    },
    color: {
      type: String,
      default: defProps.getString("rowNotice.color")
    },
    bgColor: {
      type: String,
      default: defProps.getString("rowNotice.bgColor")
    },
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("rowNotice.fontSize")
    },
    speed: {
      type: [String, Number],
      default: defProps.getNumber("rowNotice.speed")
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var _b;
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpRowNoticeUpRowNoticeSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const instance = (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
    const transform = ref("");
    const animationFrameId = ref(0);
    const startTime = ref(0);
    const currentPosition = ref(0);
    const scrollWidth = ref(0);
    const containerWidth = ref(0);
    const isAnimating = ref(false);
    ref(true);
    ref(false);
    const emit = __emit;
    const textStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["whiteSpace"] = "nowrap !important";
      style["color"] = props.color;
      style["fontSize"] = addUnit(props.fontSize);
      return style;
    });
    const animationStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["transform"] = transform.value;
      return style;
    });
    const innerText = computed(() => {
      let result = [], len = 20;
      const textArr = props.text.split("");
      for (let i = 0; i < textArr.length; i += len) {
        result.push(textArr.slice(i, i + len).join(""));
      }
      return result;
    });
    const clickHandler = (index) => {
      emit("click");
    };
    const close = () => {
      emit("close");
    };
    function animate(timestamp) {
      if (!isAnimating.value)
        return null;
      if (startTime.value == 0)
        startTime.value = timestamp;
      const elapsed = timestamp - startTime.value;
      const speedNum = parseInt(getPx(props.speed));
      const distance = speedNum * elapsed / 1e3;
      currentPosition.value = containerWidth.value - distance;
      if (currentPosition.value <= -scrollWidth.value) {
        startTime.value = timestamp;
        currentPosition.value = containerWidth.value;
      }
      transform.value = `translateX(${currentPosition.value}px)`;
      animationFrameId.value = setTimeout(() => {
        return animate(Date.now());
      }, 16);
    }
    const startScroll = async () => {
      var _a2, _b2;
      if (animationFrameId.value > 0) {
        clearTimeout(animationFrameId.value);
        animationFrameId.value = 0;
      }
      await sleep(10);
      const textRect = await upGetRect(".up-notice__content__text", false, instance);
      const containerRect = await upGetRect(".up-notice__content", false, instance);
      scrollWidth.value = (_a2 = textRect.width) !== null && _a2 !== void 0 ? _a2 : 0;
      containerWidth.value = (_b2 = containerRect.width) !== null && _b2 !== void 0 ? _b2 : 0;
      currentPosition.value = containerWidth.value;
      startTime.value = 0;
      isAnimating.value = true;
      animate(0);
    };
    const stopScroll = () => {
      isAnimating.value = false;
      if (animationFrameId.value > 0) {
        clearTimeout(animationFrameId.value);
        animationFrameId.value = 0;
      }
    };
    watch(() => {
      return props.text;
    }, (newValue) => {
      startScroll();
      if (!string(newValue)) {
        error("noticebar组件direction为row时，要求text参数为字符串形式");
      }
    }, { immediate: true });
    watch(() => {
      return props.fontSize;
    }, () => {
      startScroll();
    });
    watch(() => {
      return props.speed;
    }, () => {
      startScroll();
    });
    onMounted(() => {
      startScroll();
      if (!string(props.text)) {
        error("noticebar组件direction为row时，要求text参数为字符串形式");
      }
    });
    onBeforeUnmount(() => {
      stopScroll();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_icon = __easycom_0;
      _createSharedDataSlot("icon", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.icon));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_up_icon, "47b79926", {
            name: () => {
              return __props.icon;
            },
            color: () => {
              return __props.color;
            },
            size: "19"
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        });
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 11, [animationStyle.value]);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 7, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return innerText.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData_VFor0, 1, [textStyle.value]);
          _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_for_item0.value));
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      _setSharedDataTemplateRef(__sharedData, 8, (n9) => {
        _setTemplateRef(n9, "up-notice__content__text");
      });
      _setSharedDataTemplateRef(__sharedData, 9, (n10) => {
        _setTemplateRef(n10, "up-notice__content");
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(["link", "closable"].includes(__props.mode)));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.mode === "link"));
        }, () => {
          const n15 = _createSharedDataComponentWithFallback(_component_up_icon, "47b77354", {
            name: "arrow-right",
            size: 17,
            color: () => {
              return __props.color;
            }
          });
          _setSharedData(__sharedData, 4, n15?.sharedData);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.mode === "closable"));
        }, () => {
          const n18 = _createSharedDataComponentWithFallback(_component_up_icon, "47b76b92", {
            onClick: () => {
              return close;
            },
            name: "close",
            size: 16,
            color: () => {
              return __props.color;
            }
          });
          _setSharedData(__sharedData, 6, n18?.sharedData);
        });
      });
      _setSharedDataEvent(__sharedData, 10, clickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-row-notice.js.map
