import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_1$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useMp&";
import { b as addStyle, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-alert/alert&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpAlertUpAlert";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    //...mpSharedMpOptions,
    name: "up-alert"
  },
  __dynamicSharedData: true,
  __hash: "20883926",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-alert/up-alert.uvue",
  __name: "up-alert",
  props: {
    // 主题，success/warning/info/error
    type: {
      type: String,
      default: defProps.getString("alert.type")
    },
    // 辅助性文字
    description: {
      type: String,
      default: defProps.getString("alert.description")
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: defProps.getBoolean("alert.closable")
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: defProps.getBoolean("alert.showIcon")
    },
    // 浅或深色调，light-浅色，dark-深色
    effect: {
      type: String,
      default: defProps.getString("alert.effect")
    },
    // 文字是否居中
    center: {
      type: Boolean,
      default: defProps.getBoolean("alert.center")
    },
    // 字体大小
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("alert.fontSize")
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    // 标题文字
    title: {
      type: String,
      default: defProps.getString("alert.title", "")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpAlertUpAlertSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const show = ref(true);
    const alertStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const style1 = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.fontSize),
        textAlign: props.center ? "center" : "left"
      });
    });
    const iconColor = computed(() => {
      return props.effect == "light" ? props.type : "#ffffff";
    });
    const iconName = computed(() => {
      switch (props.type) {
        case "success":
          return "checkmark-circle-fill";
        case "error":
          return "close-circle-fill";
        case "warning":
          return "error-circle-fill";
        case "info":
          return "info-circle-fill";
        case "primary":
          return "more-circle-fill";
        default:
          return "error-circle-fill";
      }
    });
    const clickHandler = () => {
      emit("click");
    };
    const closeHandler = () => {
      show.value = false;
    };
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1$1;
      const _component_up_transition = __easycom_1$2;
      const n16 = _createSharedDataComponentWithFallback(
        _component_up_transition,
        "1dcf3f31",
        {
          mode: "fade",
          show: () => {
            return show.value;
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 15, ["up-alert", [`up-alert--${__props.type}--${__props.effect}`]]);
              _setSharedDataStyle(__sharedData, 16, alertStyle.value);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.showIcon));
            }, () => {
              const n2 = _createSharedDataComponentWithFallback(_component_up_icon, "3207849e", {
                name: () => {
                  return iconName.value;
                },
                size: "18",
                color: () => {
                  return iconColor.value;
                }
              });
              _setSharedData(__sharedData, 2, n2?.sharedData);
            });
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 17, {
                paddingRight: __props.closable ? "20px" : "0px"
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.title));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataClass(__sharedData, 7, ["up-alert__content__title", [__props.effect === "dark" ? "up-alert__text--dark" : `up-alert__text--${__props.type}--light`]]);
                _setSharedDataStyle(__sharedData, 8, style1.value);
                _setSharedData(__sharedData, 9, _toDisplayString(__props.title));
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 10, _toSharedDataBoolean(__props.description));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataClass(__sharedData, 11, ["up-alert__content__desc", [__props.effect === "dark" ? "up-alert__text--dark" : `up-alert__text--${__props.type}--light`]]);
                _setSharedDataStyle(__sharedData, 12, style1.value);
                _setSharedData(__sharedData, 13, _toDisplayString(__props.description));
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.closable));
            }, () => {
              const n13 = _createSharedDataComponentWithFallback(_component_up_icon, "0eea2534", {
                name: "close",
                color: () => {
                  return iconColor.value;
                },
                size: "15"
              });
              _setSharedData(__sharedData, 4, n13?.sharedData);
              _setSharedDataEvent(__sharedData, 5, closeHandler);
            });
            _setSharedDataEvent(__sharedData, 14, clickHandler);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n16?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-alert.js.map
