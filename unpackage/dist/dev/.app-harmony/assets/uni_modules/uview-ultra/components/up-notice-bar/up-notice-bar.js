import { _ as __easycom_0 } from "../up-column-notice/up-column-notice.js";
import { _ as __easycom_1$1 } from "../up-row-notice/up-row-notice.js";
import { b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpNoticeBarUpNoticeBar";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-notice-bar"
  },
  __dynamicSharedData: true,
  __hash: "29a53416",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.uvue",
  __name: "up-notice-bar",
  props: {
    text: {
      type: [Array, String],
      default: () => {
        return [];
      }
    },
    direction: {
      type: String,
      default: "row"
    },
    step: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "volume"
    },
    mode: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#f9ae3d"
    },
    bgColor: {
      type: String,
      default: "#fdf6ec"
    },
    speed: {
      type: [String, Number],
      default: 80
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    duration: {
      type: [String, Number],
      default: 2e3
    },
    disableTouch: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      default: ""
    },
    linkType: {
      type: String,
      default: "navigateTo"
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpNoticeBarUpNoticeBarSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const show = ref(true);
    function click(index) {
      emit("click", index);
      if (props.url != "" && props.linkType != "") {
        if (props.linkType == "navigateTo") {
          uni.navigateTo({ url: props.url });
        } else if (props.linkType == "redirectTo") {
          uni.redirectTo({ url: props.url });
        } else if (props.linkType == "switchTab") {
          uni.switchTab({ url: props.url });
        } else if (props.linkType == "reLaunch") {
          uni.reLaunch({ url: props.url });
        }
      }
    }
    function close() {
      show.value = false;
      emit("close");
    }
    return () => {
      "raw js";
      const _component_up_column_notice = __easycom_0;
      const _component_up_row_notice = __easycom_1$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(show.value));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 4, [{
            backgroundColor: __props.bgColor
          }, _unref(addStyle)(__props.customStyle)]);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.direction === "column" || __props.direction === "row" && __props.step));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_up_column_notice, "565f4722", {
            color: () => {
              return __props.color;
            },
            bgColor: () => {
              return __props.bgColor;
            },
            text: () => {
              return __props.text;
            },
            mode: () => {
              return __props.mode;
            },
            step: () => {
              return __props.step;
            },
            icon: () => {
              return __props.icon;
            },
            "disable-touch": () => {
              return __props.disableTouch;
            },
            fontSize: () => {
              return __props.fontSize;
            },
            duration: () => {
              return __props.duration;
            },
            onClose: () => {
              return close;
            },
            onClick: () => {
              return click;
            }
          });
          _setSharedData(__sharedData, 2, n4?.sharedData);
        }, () => {
          const n6 = _createSharedDataComponentWithFallback(_component_up_row_notice, "565f2b46", {
            color: () => {
              return __props.color;
            },
            bgColor: () => {
              return __props.bgColor;
            },
            text: () => {
              return __props.text;
            },
            mode: () => {
              return __props.mode;
            },
            fontSize: () => {
              return __props.fontSize;
            },
            speed: () => {
              return __props.speed;
            },
            url: () => {
              return __props.url;
            },
            linkType: () => {
              return __props.linkType;
            },
            icon: () => {
              return __props.icon;
            },
            onClose: () => {
              return close;
            },
            onClick: () => {
              return click;
            }
          });
          _setSharedData(__sharedData, 3, n6?.sharedData);
        }, 261);
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
//# sourceMappingURL=up-notice-bar.js.map
