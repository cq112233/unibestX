import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { a as addUnit, i as isThemeColor, h as hasStrValue } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { N as NoticeBarState } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-notice-bar/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceNoticeBarRiceNoticeBar";
const { reactive, shallowRef, nextTick, watch, computed, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-notice-bar",
    styleIsolation: "app-and-page",
    externalClasses: ["text-class"]
  },
  __dynamicSharedData: true,
  __hash: "35ccf562",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-notice-bar/rice-notice-bar.uvue",
  __name: "rice-notice-bar",
  props: {
    type: { default: "warning", type: String },
    message: { type: String },
    color: { type: String },
    fontSize: { type: [String, Number] },
    bgColor: { type: String },
    leftIcon: { type: String },
    rightIcon: { type: String },
    delay: { type: Number },
    speed: { default: 60, type: Number },
    closeable: { type: Boolean, default: false },
    scrollable: { type: Boolean, default: null },
    wrapable: { type: Boolean },
    textClass: { default: "", type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["click", "clickLeft", "clickRight"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceNoticeBarRiceNoticeBarSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("notice-bar");
    const emit = __emit;
    const props = __props;
    const state = reactive(new NoticeBarState({
      show: true,
      offset: 0,
      duration: 0,
      wrapWidth: 0,
      contentWidth: 0
    }));
    let startTimer = null;
    let endTimer = null;
    let transitionTimer = null;
    const wrapperRef = shallowRef(null);
    const contentRef = shallowRef(null);
    const startSleep = () => {
      return new Promise((resolve) => {
        var _a2;
        const ms = (_a2 = props.delay) !== null && _a2 !== void 0 ? _a2 : 0.3;
        if (startTimer != null)
          clearTimeout(startTimer);
        startTimer = setTimeout(() => {
          resolve(true);
        }, ms * 1e3);
      });
    };
    const reset = async () => {
      await nextTick();
      if (startTimer != null)
        clearTimeout(startTimer);
      await startSleep();
      if (wrapperRef.value == null || contentRef.value == null)
        return Promise.resolve(null);
      state.duration = 0;
      state.offset = 0;
      const wrapperRet = await wrapperRef.value.getBoundingClientRectAsync();
      const contentRet = await contentRef.value.getBoundingClientRectAsync();
      const wrapperWidth = wrapperRet.width;
      const contentWidth = contentRet.width;
      if ((props.scrollable == true || contentWidth > wrapperWidth) && props.wrapable == false) {
        if (transitionTimer != null)
          clearTimeout(transitionTimer);
        transitionTimer = setTimeout(() => {
          state.wrapWidth = wrapperWidth;
          state.contentWidth = contentWidth;
          state.offset = -contentWidth;
          state.duration = contentWidth / props.speed;
        }, 50);
      }
    };
    const onTransitionend = () => {
      state.duration = 0;
      state.offset = state.wrapWidth;
      if (endTimer != null)
        clearTimeout(endTimer);
      endTimer = setTimeout(() => {
        state.duration = (state.contentWidth + state.wrapWidth) / props.speed;
        state.offset = -state.contentWidth;
      }, 50);
    };
    const handleClick = () => {
      emit("click");
    };
    const clickLeft = () => {
      emit("clickLeft");
    };
    const clickRight = () => {
      emit("clickRight");
    };
    const handleClose = () => {
      state.show = false;
    };
    watch(() => {
      return [props.message, props.scrollable];
    }, async () => {
      await nextTick();
      uni.__f__("log", "at uni_modules/rice-ui/components/rice-notice-bar/rice-notice-bar.uvue:132", "ios change");
      reset();
    }, {
      deep: true
    });
    const noticeBarStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.bgColor != null)
        css.set("background-color", props.bgColor);
      return css;
    });
    const contentStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (state.offset != 0) {
        css.set("transform", `translateX(${state.offset}px)`);
      }
      css.set("transition-duration", `${state.duration}s`);
      if (props.color != null)
        css.set("color", props.color);
      if (props.fontSize != null)
        css.set("font-size", addUnit(props.fontSize));
      return css;
    });
    const noticeBarType = computed(() => {
      return isThemeColor(props.type) ? props.type : "warning";
    });
    const noticeBarClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.m(noticeBarType.value),
        ns.is("wrapable", props.wrapable == true)
      ];
    });
    const scrollClass = computed(() => {
      const ellipsis = props.scrollable == false && props.wrapable == false;
      return [
        ns.e("scroll"),
        ns.is("__scroll--auto", props.wrapable == true || ellipsis)
      ];
    });
    const contentClass = computed(() => {
      const ellipsis = props.scrollable == false && props.wrapable == false;
      return [
        ns.e("content"),
        ns.is("__content--wrapable", props.wrapable == true),
        ns.is("__content--ellipsis", ellipsis),
        ns.e(`content--${noticeBarType.value}`)
      ];
    });
    const iconColor = computed(() => {
      var _a2;
      return (_a2 = props.color) !== null && _a2 !== void 0 ? _a2 : `var(--rice-${noticeBarType.value}-color)`;
    });
    onMounted(() => {
      reset();
    });
    __expose({
      reset
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(state).show));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 11, _unref(noticeBarClass));
          _setSharedDataStyle(__sharedData, 12, [_unref(noticeBarStyle), __props.customStyle]);
        });
        _createSharedDataSlot("leftIcon", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 1, _toSharedDataBoolean(_unref(hasStrValue)(__props.leftIcon)));
          }, () => {
            const n6 = _createSharedDataComponentWithFallback(_component_rice_icon, "9d94442e", {
              name: () => {
                return __props.leftIcon;
              },
              color: () => {
                return _unref(iconColor);
              },
              size: "18px",
              "custom-style": { width: "25px" },
              onClick: () => {
                return clickLeft;
              }
            });
            _setSharedData(__sharedData, 2, n6?.sharedData);
          });
        });
        _setSharedDataEvent(__sharedData, 7, onTransitionend);
        _setSharedDataTemplateRef(__sharedData, 8, (n7) => {
          _setTemplateRef(n7, contentRef, null, "contentRef");
        });
        _setSharedDataEvent(__sharedData, 9, handleClick);
        _setSharedDataTemplateRef(__sharedData, 10, (n9) => {
          _setTemplateRef(n9, wrapperRef, null, "wrapperRef");
        });
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 13, _unref(scrollClass));
          _setSharedDataClass(__sharedData, 14, [_unref(contentClass), __props.textClass]);
          _setSharedDataStyle(__sharedData, 15, _unref(contentStyle));
          _setSharedData(__sharedData, 16, _toDisplayString(__props.message));
        });
        _createSharedDataSlot("rightIcon", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(hasStrValue)(__props.rightIcon)));
          }, () => {
            const n14 = _createSharedDataComponentWithFallback(_component_rice_icon, "9d941d6e", {
              name: () => {
                return __props.rightIcon;
              },
              "custom-style": { width: "25px", textAlign: "right" },
              color: () => {
                return _unref(iconColor);
              },
              size: "18px",
              onClick: () => {
                return clickRight;
              }
            });
            _setSharedData(__sharedData, 4, n14?.sharedData);
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.closeable));
        }, () => {
          const n17 = _createSharedDataComponentWithFallback(_component_rice_icon, "9d940ee4", {
            name: "cross",
            "custom-style": { width: "25px", textAlign: "right" },
            color: () => {
              return _unref(iconColor);
            },
            size: "18px",
            onClick: () => {
              return handleClose;
            }
          });
          _setSharedData(__sharedData, 6, n17?.sharedData);
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
//# sourceMappingURL=rice-notice-bar.js.map
