import "./loadingIcon.js";
import { b as addStyle, a as addUnit, g as getPx } from "../../libs/function/index.js";
import { c as colorGradient } from "../../libs/function/colorGradient.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor, createSharedDataIf: _createSharedDataIf, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIcon";
const { computed, ref, watch, onMounted, onBeforeUnmount } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-loading-icon"
  },
  __dynamicSharedData: true,
  __hash: "4d7d5706",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue",
  __name: "up-loading-icon",
  props: {
    show: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "#909193"
    },
    textColor: {
      type: String,
      default: "#909193"
    },
    vertical: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: "spinner"
    },
    size: {
      type: [String, Number],
      default: "24"
    },
    textSize: {
      type: [String, Number],
      default: "15"
    },
    text: {
      type: [String, Number],
      default: ""
    },
    timingFunction: {
      type: String,
      default: "ease-in-out"
    },
    duration: {
      type: [String, Number],
      default: 1200
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const array12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const webviewHide = ref(false);
    const degree = ref(0);
    const transform = ref("");
    const spinnerItemsStyle = ref([
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" }),
      new UTSJSONObject({ left: "0", top: "0" })
    ]);
    let animationFrame = 0;
    const otherBorderColor = computed(() => {
      if (props.inactiveColor != "") {
        return props.inactiveColor;
      }
      if (props.mode == "circle") {
        if (props.color.startsWith("#")) {
          const gradient = colorGradient(props.color, "#ffffff", 100);
          if (gradient.length > 80) {
            return gradient[80];
          }
        }
        return "#e5e5e5";
      } else {
        return "transparent";
      }
    });
    const customLoadingIconStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const spinnerStyle = computed(() => {
      return new UTSJSONObject({
        transform: transform.value,
        width: addUnit(props.size),
        height: addUnit(props.size),
        borderTopColor: props.color,
        borderBottomColor: otherBorderColor.value,
        borderLeftColor: otherBorderColor.value,
        borderRightColor: otherBorderColor.value
      });
    });
    const textStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.textSize),
        color: props.textColor
      });
    });
    function getSpinnerDotStyle(index) {
      const style = new UTSJSONObject({});
      style["backgroundColor"] = props.color;
      style["transform"] = `rotate(${((index + 1) * 30).toString()}deg)`;
      style["opacity"] = 1 - 0.0625 * index;
      return style;
    }
    function getRotateDuration() {
      const durationNumber = parseInt(props.duration.toString());
      return durationNumber > 0 ? durationNumber : 1200;
    }
    function getRotateStep() {
      return 360 * 16 / getRotateDuration();
    }
    function rotateLoader() {
      degree.value = (degree.value + getRotateStep()) % 360;
      transform.value = `rotate(${degree.value.toString()}deg)`;
    }
    function startRotate() {
      if (!props.show || animationFrame > 0) {
        return null;
      }
      animationFrame = setInterval(() => {
        rotateLoader();
      }, 16);
    }
    function stopRotate() {
      if (animationFrame > 0) {
        clearInterval(animationFrame);
        animationFrame = 0;
      }
    }
    function calculateSquareRadius(sideLength) {
      const diagonalLength = Math.sqrt(sideLength * sideLength + sideLength * sideLength);
      return diagonalLength / 2;
    }
    function calcSpinnerTopAndLeft() {
      array12.forEach((_ele, index) => {
        const angle = index * (360 / 12);
        const angleRad = angle * (Math.PI / 180);
        const banjing = calculateSquareRadius(parseInt(getPx(parseInt(props.size.toString()) * 2)));
        const xOffset = banjing * Math.cos(angleRad);
        const yOffset = banjing * Math.sin(angleRad);
        spinnerItemsStyle.value[index]["left"] = `${Math.round(45 + xOffset).toString()}%`;
        spinnerItemsStyle.value[index]["top"] = `${Math.round(34 + yOffset).toString()}%`;
      });
    }
    function init() {
      calcSpinnerTopAndLeft();
      startRotate();
    }
    watch(() => {
      return props.show;
    }, (nVal) => {
      if (nVal) {
        startRotate();
      } else {
        stopRotate();
      }
    });
    onMounted(() => {
      init();
    });
    onBeforeUnmount(() => {
      stopRotate();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.show));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 10, ["up-loading-icon", [__props.vertical ? "up-loading-icon--vertical" : ""]]);
          _setSharedDataStyle(__sharedData, 11, customLoadingIconStyle.value);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(!webviewHide.value));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 5, ["up-loading-icon__spinner", [`up-loading-icon__spinner--${__props.mode}`]]);
            _setSharedDataStyle(__sharedData, 6, spinnerStyle.value);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.mode === "spinner"));
          }, () => {
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return array12;
            }, (__sharedData_VFor0, _for_item0, _for_key0) => {
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData_VFor0, 1, getSpinnerDotStyle(_for_key0.value));
              });
              return null;
            }, (__sharedData_VFor0, item, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            });
          });
          _setSharedDataTemplateRef(__sharedData, 4, (n9) => {
            _setTemplateRef(n9, "ani");
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.text != ""));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 8, textStyle.value);
            _setSharedData(__sharedData, 9, _toDisplayString(__props.text));
          });
        });
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
//# sourceMappingURL=up-loading-icon.js.map
