import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { _ as __easycom_1$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swiper/swiper&";
import { a as addUnit, b as addStyle, i as error } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { i as image, v as video } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSwiperUpSwiper";
const { computed, ref, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-swiper"
  },
  __dynamicSharedData: true,
  __hash: "3627ca92",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-swiper/up-swiper.uvue",
  __name: "up-swiper",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    indicator: {
      type: Boolean,
      default: false
    },
    indicatorActiveColor: {
      type: String,
      default: "#FFFFFF"
    },
    indicatorInactiveColor: {
      type: String,
      default: "rgba(255, 255, 255, 0.35)"
    },
    indicatorStyle: {
      type: [String, Object],
      default: ""
    },
    indicatorMode: {
      type: String,
      default: "line"
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    current: {
      type: [String, Number],
      default: 0
    },
    currentItemId: {
      type: String,
      default: ""
    },
    interval: {
      type: [String, Number],
      default: 3e3
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    circular: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    previousMargin: {
      type: [String, Number],
      default: 0
    },
    nextMargin: {
      type: [String, Number],
      default: 0
    },
    acceleration: {
      type: Boolean,
      default: false
    },
    displayMultipleItems: {
      type: Number,
      default: 1
    },
    easingFunction: {
      type: String,
      default: "default"
    },
    keyName: {
      type: String,
      default: "url"
    },
    imgMode: {
      type: String,
      default: "aspectFill"
    },
    height: {
      type: [String, Number],
      default: 130
    },
    bgColor: {
      type: String,
      default: "#f3f4f6"
    },
    radius: {
      type: [String, Number],
      default: 4
    },
    loading: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click", "change", "update:current"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSwiperUpSwiperSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const currentIndex = ref(parseInt(props.current.toString()));
    const swiperContainerStyle = computed(() => {
      return new UTSJSONObject({
        backgroundColor: props.bgColor,
        height: addUnit(props.height),
        borderRadius: addUnit(props.radius)
      });
    });
    const swiperWrapperStyle = computed(() => {
      return new UTSJSONObject({
        width: "100%",
        height: addUnit(props.height)
      });
    });
    const swiperImageStyle = computed(() => {
      return new UTSJSONObject({
        width: "100%",
        height: addUnit(props.height),
        borderRadius: addUnit(props.radius)
      });
    });
    const swiperVideoStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.height)
      });
    });
    const customIndicatorStyle = computed(() => {
      const res = addStyle(props.indicatorStyle);
      if (typeof res === "object" && res != null) {
        return res;
      }
      return new UTSJSONObject({});
    });
    function getSource(item = null) {
      var _a2, _b;
      let src = "";
      if (item == null)
        return "";
      if (typeof item === "string") {
        src = item;
      } else if (typeof item === "object" && props.keyName != "") {
        const obj = item;
        src = (_b = (_a2 = obj[props.keyName]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      } else {
        error("请按格式传递列表参数");
        return "";
      }
      return src;
    }
    function getItemTitle(item = null) {
      var _a2, _b;
      if (item == null)
        return "";
      if (typeof item === "string")
        return item;
      if (typeof item === "object") {
        const obj = item;
        return (_b = (_a2 = obj["title"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      }
      return "";
    }
    function getPoster(item = null) {
      var _a2, _b;
      if (item == null)
        return "";
      if (typeof item === "object") {
        const obj = item;
        return (_b = (_a2 = obj["poster"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      }
      return "";
    }
    function getVideoTitle(item = null) {
      if (!props.showTitle || item == null)
        return "";
      if (typeof item === "object") {
        return getItemTitle(item);
      }
      return "";
    }
    function isImageTitleVisible(item = null) {
      if (!props.showTitle || item == null)
        return false;
      const title = getItemTitle(item);
      if (title == "")
        return false;
      return image(getSource(item));
    }
    function getItemType(item = null) {
      if (item == null)
        return "";
      if (typeof item === "string")
        return video(getSource(item)) ? "video" : "image";
      if (typeof item === "object" && props.keyName != "") {
        const obj = item;
        if (obj["type"] == null)
          return video(getSource(item)) ? "video" : "image";
        if (obj["type"] == "image")
          return "image";
        if (obj["type"] == "video")
          return "video";
        return "image";
      }
      return "image";
    }
    function pauseVideo(index) {
      if (index >= 0 && index < props.list.length) {
        const lastItem = getSource(props.list[index]);
        if (video(lastItem)) {
          const video2 = uni.createVideoContext(`video-${index}`);
          video2 === null || video2 === void 0 ? null : video2.pause();
        }
      }
    }
    function change(e) {
      const current = e.detail.current;
      pauseVideo(currentIndex.value);
      currentIndex.value = current;
      emit("update:current", currentIndex.value);
      emit("change", e.detail);
    }
    function itemStyle(index) {
      const style = new UTSJSONObject({});
      if (props.nextMargin.toString() != "" && props.previousMargin.toString() != "") {
        style["borderRadius"] = addUnit(props.radius);
        if (index != currentIndex.value) {
          style["transform"] = "scale(0.92)";
        }
      }
      return style;
    }
    function clickHandler(index) {
      emit("click", index);
    }
    watch(() => {
      return props.current;
    }, (val = null, preVal = null) => {
      if (val == preVal)
        return null;
      currentIndex.value = parseInt(val.toString());
    });
    return () => {
      "raw js";
      const _component_up_loading_icon = __easycom_1$1;
      const _component_video = _resolveComponent("video");
      const _component_swiper_item = _resolveComponent("swiper-item");
      const _component_swiper = _resolveComponent("swiper");
      const _component_up_swiper_indicator = __easycom_1$2;
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 6, swiperContainerStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.loading));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "2fb7830c", { mode: "circle" });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      }, () => {
        const n21 = _createSharedDataComponentWithFallback(_component_swiper, "2fb78194", {
          class: "up-swiper__wrapper",
          style: () => {
            return swiperWrapperStyle.value;
          },
          onChange: () => {
            return change;
          },
          circular: () => {
            return __props.circular;
          },
          interval: () => {
            return __props.interval;
          },
          duration: () => {
            return __props.duration;
          },
          autoplay: () => {
            return __props.autoplay;
          },
          current: () => {
            return __props.current;
          },
          vertical: () => {
            return __props.vertical;
          }
        }, {
          "default": _withSharedDataVaporCtx(() => {
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return __props.list;
            }, (__sharedData_VFor0, _for_item0, _for_key0) => {
              const n20 = _createSharedDataComponentWithFallback(_component_swiper_item, "2fb76c48-" + _for_key0.value, { class: "up-swiper__wrapper__item" }, {
                "default": _withSharedDataVaporCtx(() => {
                  _createSharedDataSlot("default", {
                    item: () => {
                      return _for_item0.value;
                    },
                    index: () => {
                      return _for_key0.value;
                    }
                  }, (data) => {
                    return _setSharedData(__sharedData_VFor0, 2, data);
                  }, () => {
                    _renderSharedDataEffect(() => {
                      return _setSharedDataStyle(__sharedData_VFor0, 12, itemStyle(_for_key0.value));
                    });
                    _createSharedDataIf(() => {
                      return _setSharedData(__sharedData_VFor0, 3, _toSharedDataBoolean(getItemType(_for_item0.value) == "image"));
                    }, () => {
                      _setSharedDataEvent(__sharedData_VFor0, 4, () => {
                        return clickHandler(_for_key0.value);
                      });
                      _renderSharedDataEffect(() => {
                        _setSharedDataAttr(__sharedData_VFor0, 5, _toSharedDataString(getSource(_for_item0.value)));
                        _setSharedDataAttr(__sharedData_VFor0, 6, _toSharedDataImageMode(__props.imgMode));
                        _setSharedDataStyle(__sharedData_VFor0, 7, swiperImageStyle.value);
                      });
                    });
                    _createSharedDataIf(() => {
                      return _setSharedData(__sharedData_VFor0, 8, _toSharedDataBoolean(getItemType(_for_item0.value) == "video"));
                    }, () => {
                      const _on_click = () => {
                        return clickHandler(_for_key0.value);
                      };
                      const n14 = _createSharedDataComponentWithFallback(_component_video, "1c6388bb-" + _for_key0.value, {
                        class: "up-swiper__wrapper__item__wrapper__video",
                        id: () => {
                          return `video-${_for_key0.value}`;
                        },
                        "enable-progress-gesture": false,
                        src: () => {
                          return getSource(_for_item0.value);
                        },
                        poster: () => {
                          return getPoster(_for_item0.value);
                        },
                        title: () => {
                          return getVideoTitle(_for_item0.value);
                        },
                        style: () => {
                          return swiperVideoStyle.value;
                        },
                        controls: "",
                        onClick: () => {
                          return _on_click;
                        }
                      });
                      _setSharedData(__sharedData_VFor0, 9, n14?.sharedData);
                    });
                    _createSharedDataIf(() => {
                      return _setSharedData(__sharedData_VFor0, 10, _toSharedDataBoolean(isImageTitleVisible(_for_item0.value)));
                    }, () => {
                      _renderSharedDataEffect(() => {
                        return _setSharedData(__sharedData_VFor0, 11, _toDisplayString(getItemTitle(_for_item0.value)));
                      });
                    });
                  });
                })
              });
              _setSharedData(__sharedData_VFor0, 1, n20?.sharedData);
              return n20;
            }, (__sharedData_VFor0, item, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            }, 34);
          })
        });
        _setSharedData(__sharedData, 2, n21?.sharedData);
      }, 261);
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 7, customIndicatorStyle.value);
      });
      _createSharedDataSlot("indicator", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 4, _toSharedDataBoolean(!__props.loading && __props.indicator && !__props.showTitle));
        }, () => {
          const n26 = _createSharedDataComponentWithFallback(_component_up_swiper_indicator, "1c63a3a0", {
            indicatorActiveColor: () => {
              return __props.indicatorActiveColor;
            },
            indicatorInactiveColor: () => {
              return __props.indicatorInactiveColor;
            },
            length: () => {
              return __props.list.length;
            },
            current: () => {
              return currentIndex.value;
            },
            indicatorMode: () => {
              return __props.indicatorMode;
            }
          });
          _setSharedData(__sharedData, 5, n26?.sharedData);
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
//# sourceMappingURL=up-swiper.js.map
