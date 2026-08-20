import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { c as bem, b as addStyle, d as deepMerge, a as addUnit, g as getPx } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { t as throttle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/throttle&";
import { c as config } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, setSharedDataClass: _setSharedDataClass, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpButtonUpButton";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-button"
  },
  __dynamicSharedData: true,
  __hash: "7a99f616",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-button/up-button.uvue",
  __name: "up-button",
  props: {
    hairline: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "info"
    },
    size: {
      type: String,
      default: "normal"
    },
    shape: {
      type: String,
      default: "square"
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: ""
    },
    loadingMode: {
      type: String,
      default: "spinner"
    },
    loadingSize: {
      type: Number,
      default: 15
    },
    openType: {
      type: String,
      default: ""
    },
    formType: {
      type: String,
      default: ""
    },
    appParameter: {
      type: String,
      default: ""
    },
    hoverStopPropagation: {
      type: Boolean,
      default: false
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: ""
    },
    sendMessagePath: {
      type: String,
      default: ""
    },
    sendMessageImg: {
      type: String,
      default: ""
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
    dataName: {
      type: String,
      default: ""
    },
    throttleTime: {
      type: [String, Number],
      default: 0
    },
    hoverStartTime: {
      type: [String, Number],
      default: 20
    },
    hoverStayTime: {
      type: [String, Number],
      default: 70
    },
    text: {
      type: [String, Number],
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    color: {
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
  emits: ["click", "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpButtonUpButtonSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const bemClass = computed(() => {
      let ret = "";
      if (props.color == "") {
        ret = bem("button", [props.type, props.shape, props.size], [
          ["disabled", props.disabled],
          ["plain", props.plain],
          ["hairline", props.hairline]
        ]);
      } else {
        ret = bem("button", [props.shape, props.size], [
          ["disabled", props.disabled],
          ["plain", props.plain],
          ["hairline", props.hairline]
        ]);
      }
      return ret;
    });
    const textColorCom = computed(() => {
      if (props.color != "") {
        return props.plain ? props.color : "#ffffff";
      }
      if (props.plain) {
        if (props.type == "primary")
          return config.getString("color.up-primary");
        if (props.type == "info")
          return "#000000";
        if (props.type == "success")
          return "#5ac725";
        if (props.type == "error")
          return "#f56c6c";
        if (props.type == "warning")
          return "#f56c6c";
        return "#323233";
      }
      if (props.type == "info") {
        return "#323233";
      }
      return "#ffffff";
    });
    const loadingColor = computed(() => {
      if (props.plain) {
        return props.color != "" ? props.color : config.getString(`color.up-${props.type}`);
      }
      if (props.type == "info") {
        return "#c9c9c9";
      }
      return "rgb(200, 200, 200)";
    });
    const iconColorCom = computed(() => {
      if (props.iconColor != "")
        return props.iconColor;
      if (props.plain) {
        return props.color != "" ? props.color : props.type;
      } else {
        return "";
      }
    });
    const baseColor = computed(() => {
      let style = new UTSJSONObject({});
      if (props.color != "") {
        if (!props.plain) {
          style["backgroundColor"] = props.color;
        }
        if (props.color.toString().indexOf("gradient") != -1) {
          style["borderWidth"] = 0;
          if (!props.plain) {
            style["backgroundImage"] = props.color;
          }
        } else {
          style["borderColor"] = props.color;
          style["borderWidth"] = "1px";
          style["borderStyle"] = "solid";
        }
      }
      return style;
    });
    const textSize = computed(() => {
      let fontSize = "14";
      if (props.size === "large")
        fontSize = "16";
      if (props.size === "normal")
        fontSize = "14";
      if (props.size === "small")
        fontSize = "12";
      if (props.size === "mini")
        fontSize = "10";
      return fontSize;
    });
    const buttonRootStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      return deepMerge(baseColor.value, custom);
    });
    const loadingIconSize = computed(() => {
      return addUnit(props.loadingSize * 1.15);
    });
    const textStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: textSize.value + "px",
        color: textColorCom.value
      });
    });
    const iconSizeComputed = computed(() => {
      return addUnit(parseInt(getPx(textSize.value)) * 1.35);
    });
    const clickHandler = () => {
      if (!props.disabled && !props.loading) {
        throttle(() => {
          emit("click");
        }, parseInt(props.throttleTime.toString()));
      }
    };
    const getphonenumber = (res) => {
      emit("getphonenumber", res);
    };
    const getuserinfo = (res) => {
      emit("getuserinfo", res);
    };
    const error = (res) => {
      emit("error", res);
    };
    const opensetting = (res) => {
      emit("opensetting", res);
    };
    const launchapp = (res) => {
      emit("launchapp", res);
    };
    return () => {
      "raw js";
      const _component_up_loading_icon = __easycom_0;
      const _component_up_icon = __easycom_1;
      const _component_button = _resolveComponent("button");
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 9, ["position: relative", buttonRootStyle.value]);
        _setSharedDataClass(__sharedData, 10, ["up-button", bemClass.value]);
        _setSharedDataClass(__sharedData, 11, _toSharedDataString(!__props.disabled && !__props.loading ? "up-button--active" : ""));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.loading));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "64250b6e", {
          mode: () => {
            return __props.loadingMode;
          },
          size: () => {
            return loadingIconSize.value;
          },
          color: () => {
            return loadingColor.value;
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
        _renderSharedDataEffect(() => {
          const _loadingText = __props.loadingText;
          _setSharedDataStyle(__sharedData, 2, textStyle.value);
          _setSharedData(__sharedData, 3, _toDisplayString(_loadingText != "" ? _loadingText : __props.text));
        });
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.icon != ""));
        }, () => {
          const n7 = _createSharedDataComponentWithFallback(_component_up_icon, "6425172a", {
            name: () => {
              return __props.icon;
            },
            color: () => {
              return iconColorCom.value;
            },
            size: () => {
              return iconSizeComputed.value;
            },
            customStyle: { marginRight: "2px" }
          });
          _setSharedData(__sharedData, 5, n7?.sharedData);
        });
        _createSharedDataSlot("default", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 6, textStyle.value);
            _setSharedData(__sharedData, 7, _toDisplayString(__props.text));
          });
        });
      }, 266);
      const n11 = _createSharedDataComponentWithFallback(_component_button, "6425230a", {
        "hover-start-time": () => {
          return __props.hoverStartTime;
        },
        "hover-stay-time": () => {
          return __props.hoverStayTime;
        },
        "form-type": () => {
          return __props.formType;
        },
        "open-type": () => {
          return __props.openType;
        },
        "app-parameter": () => {
          return __props.appParameter;
        },
        "hover-stop-propagation": () => {
          return __props.hoverStopPropagation;
        },
        "send-message-title": () => {
          return __props.sendMessageTitle;
        },
        "send-message-path": () => {
          return __props.sendMessagePath;
        },
        lang: () => {
          return __props.lang;
        },
        "data-name": () => {
          return __props.dataName;
        },
        "session-from": () => {
          return __props.sessionFrom;
        },
        "send-message-img": () => {
          return __props.sendMessageImg;
        },
        "show-message-card": () => {
          return __props.showMessageCard;
        },
        onGetphonenumber: () => {
          return getphonenumber;
        },
        onGetuserinfo: () => {
          return getuserinfo;
        },
        onError: () => {
          return error;
        },
        onOpensetting: () => {
          return opensetting;
        },
        onLaunchapp: () => {
          return launchapp;
        },
        loading: () => {
          return __props.loading;
        },
        "hover-class": () => {
          return !__props.disabled && !__props.loading ? "up-button__button--active" : "";
        },
        style: "background: #fff;position: absolute;top:0;bottom:0;left:0;right:0;opacity: 0;",
        class: "up-reset-button",
        onClick: () => {
          return clickHandler;
        }
      });
      _setSharedData(__sharedData, 8, n11?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"relative":{"":{"position":"relative"}},"up-reset-button":{"":{"padding":"0","backgroundColor":"transparent"}}};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-button.js.map
