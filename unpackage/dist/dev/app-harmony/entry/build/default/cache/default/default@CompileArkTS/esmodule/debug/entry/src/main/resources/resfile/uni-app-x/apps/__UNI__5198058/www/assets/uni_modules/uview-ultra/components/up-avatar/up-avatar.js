import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_1$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-text/up-text&";
import { b as addStyle, a as addUnit, d as deepMerge, r as random } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpAvatarUpAvatar";
const { ref, computed, watch, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-avatar"
  },
  __dynamicSharedData: true,
  __hash: "36e44abe",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-avatar/up-avatar.uvue",
  __name: "up-avatar",
  props: {
    src: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "circle"
    },
    size: {
      type: [String, Number],
      default: 40
    },
    mode: {
      type: String,
      default: "scaleToFill"
    },
    text: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#eee"
    },
    color: {
      type: String,
      default: "#fff"
    },
    fontSize: {
      type: [String, Number],
      default: 18
    },
    icon: {
      type: String,
      default: ""
    },
    mpAvatar: {
      type: Boolean,
      default: false
    },
    randomBgColor: {
      type: Boolean,
      default: false
    },
    defaultUrl: {
      type: String,
      default: ""
    },
    colorIndex: {
      type: [String, Number],
      default: ""
    },
    name: {
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
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpAvatarUpAvatarSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const colors = [
      "#ffb34b",
      "#f2bba9",
      "#f7a196",
      "#f18080",
      "#88a867",
      "#bfbf39",
      "#89c152",
      "#94d554",
      "#f19ec2",
      "#afaae4",
      "#e1b0df",
      "#c38cc1",
      "#72dcdc",
      "#9acdcb",
      "#77b1cc",
      "#448aca",
      "#86cefa",
      "#98d1ee",
      "#73d1f1",
      "#80a7dc"
    ];
    const avatarUrl = ref("");
    const getBackColor = computed(() => {
      let result = "#eeeeee";
      if (props.text !== "" || props.icon !== "") {
        const colorIndexNo = parseInt(props.colorIndex.toString());
        if (props.randomBgColor) {
          if (props.colorIndex.toString() !== "") {
            result = colors[colorIndexNo];
          } else {
            result = colors[random(0, 19)];
          }
        } else {
          result = props.bgColor;
        }
      } else {
        result = "transparent";
      }
      return result;
    });
    const avatarStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const base = new UTSJSONObject({
        backgroundColor: getBackColor.value,
        width: addUnit(props.size),
        height: addUnit(props.size)
      });
      return deepMerge(base, custom);
    });
    const imageSizeStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(props.size),
        height: addUnit(props.size)
      });
    });
    const errorHandler = () => {
      avatarUrl.value = props.defaultUrl;
    };
    const clickHandler = () => {
      emit("click", props.name);
    };
    watch(() => {
      return props.src;
    }, (newValue) => {
      avatarUrl.value = newValue;
    });
    onMounted(() => {
      avatarUrl.value = props.src;
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1$1;
      const _component_up_text = __easycom_1$2;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 10, ["up-avatar", [`up-avatar--${__props.shape}`]]);
        _setSharedDataStyle(__sharedData, 11, avatarStyle.value);
      });
      _createSharedDataSlot("default", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.icon != ""));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_up_icon, "64edce99", {
            name: () => {
              return __props.icon;
            },
            size: () => {
              return __props.fontSize;
            },
            color: () => {
              return __props.color;
            }
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.text != ""));
          }, () => {
            const n6 = _createSharedDataComponentWithFallback(_component_up_text, "64edd2d7", {
              text: () => {
                return __props.text;
              },
              size: () => {
                return __props.fontSize;
              },
              color: () => {
                return __props.color;
              },
              align: "center",
              style: { justifyContent: "center" }
            });
            _setSharedData(__sharedData, 3, n6?.sharedData);
          }, () => {
            _setSharedDataEvent(__sharedData, 4, errorHandler);
            _renderSharedDataEffect(() => {
              const _avatarUrl = avatarUrl.value;
              _setSharedDataClass(__sharedData, 5, ["up-avatar__image", [`up-avatar__image--${__props.shape}`]]);
              _setSharedDataAttr(__sharedData, 6, _toSharedDataString(_avatarUrl != "" ? _avatarUrl : __props.defaultUrl));
              _setSharedDataAttr(__sharedData, 7, _toSharedDataImageMode(__props.mode));
              _setSharedDataStyle(__sharedData, 8, imageSizeStyle.value);
            });
          }, 517);
        }, 261);
      });
      _setSharedDataEvent(__sharedData, 9, clickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-avatar.js.map
