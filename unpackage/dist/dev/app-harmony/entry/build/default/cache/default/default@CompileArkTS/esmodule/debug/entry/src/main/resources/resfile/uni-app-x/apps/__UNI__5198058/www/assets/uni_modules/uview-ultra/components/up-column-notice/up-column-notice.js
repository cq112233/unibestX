import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-column-notice/columnNotice&";
import { a as addUnit, i as error } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { a as array } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpColumnNoticeUpColumnNotice";
const { computed, reactive } = globalThis.Vue;
const { watch } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "9654e4e4",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-column-notice/up-column-notice.uvue",
  __name: "up-column-notice",
  props: {
    text: {
      type: Array,
      default: () => {
        return [];
      }
    },
    icon: {
      type: String,
      default: () => {
        return defProps.getString("columnNotice.icon");
      }
    },
    mode: {
      type: String,
      default: () => {
        return defProps.getString("columnNotice.mode");
      }
    },
    color: {
      type: String,
      default: () => {
        return defProps.getString("columnNotice.color");
      }
    },
    bgColor: {
      type: String,
      default: () => {
        return defProps.getString("columnNotice.bgColor");
      }
    },
    fontSize: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("columnNotice.fontSize");
      }
    },
    speed: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("columnNotice.speed");
      }
    },
    step: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("columnNotice.step");
      }
    },
    duration: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("columnNotice.duration");
      }
    },
    disableTouch: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("columnNotice.disableTouch");
      }
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpColumnNoticeUpColumnNoticeSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const index = ref(0);
    const textStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["color"] = props.color;
      style["fontSize"] = addUnit(props.fontSize);
      return style;
    });
    computed(() => {
      if (props.mode == "horizontal")
        return false;
      else
        return true;
    });
    const noticeChange = (e) => {
      index.value = e.detail.current;
    };
    const clickHandler = () => {
      emit("click", index.value);
    };
    const close = () => {
      emit("close");
    };
    watch(() => {
      return props.text;
    }, (newValue) => {
      if (!array(newValue)) {
        error("noticebar组件direction为column时，要求text参数为数组形式");
      }
    }, {
      immediate: true
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0$1;
      const _component_swiper_item = _resolveComponent("swiper-item");
      const _component_swiper = _resolveComponent("swiper");
      _createSharedDataSlot("icon", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.icon));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_up_icon, "17ccbc9f", {
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
      const n10 = _createSharedDataComponentWithFallback(_component_swiper, "17ccc061", {
        "disable-touch": () => {
          return __props.disableTouch;
        },
        vertical: () => {
          return __props.step ? false : true;
        },
        circular: "",
        interval: () => {
          return __props.duration;
        },
        autoplay: true,
        class: "up-notice__swiper",
        onChange: () => {
          return noticeChange;
        }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return __props.text;
          }, (__sharedData_VFor0, _for_item0, _for_key0) => {
            const n9 = _createSharedDataComponentWithFallback(_component_swiper_item, "17ccc7c8-" + _for_key0.value, { class: "up-notice__swiper__item" }, {
              "default": () => {
                _renderSharedDataEffect(() => {
                  _setSharedDataStyle(__sharedData_VFor0, 2, [textStyle.value]);
                  _setSharedData(__sharedData_VFor0, 3, _toDisplayString(_for_item0.value));
                });
              }
            });
            _setSharedData(__sharedData_VFor0, 1, n9?.sharedData);
            return n9;
          }, (__sharedData_VFor0, item, index2) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index2));
          }, 34);
        })
      });
      _setSharedData(__sharedData, 2, n10?.sharedData);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 4, _toSharedDataBoolean(["link", "closable"].includes(__props.mode)));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.mode === "link"));
        }, () => {
          const n15 = _createSharedDataComponentWithFallback(_component_up_icon, "17ccd388", {
            name: "arrow-right",
            size: 17,
            color: () => {
              return __props.color;
            }
          });
          _setSharedData(__sharedData, 6, n15?.sharedData);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.mode === "closable"));
        }, () => {
          const n18 = _createSharedDataComponentWithFallback(_component_up_icon, "17ccd769", {
            name: "close",
            size: 16,
            color: () => {
              return __props.color;
            },
            onClick: () => {
              return close;
            }
          });
          _setSharedData(__sharedData, 8, n18?.sharedData);
        });
      });
      _setSharedDataEvent(__sharedData, 9, clickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-column-notice.js.map
