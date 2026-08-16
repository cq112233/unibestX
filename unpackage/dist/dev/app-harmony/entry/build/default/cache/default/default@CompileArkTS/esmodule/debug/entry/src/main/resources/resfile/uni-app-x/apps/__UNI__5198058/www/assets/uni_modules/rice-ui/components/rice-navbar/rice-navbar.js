import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import { h as hasStrValue, d as getPxNum, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import { u as useSafeArea, s as safeAreaInsets } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-navbar/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { useSlots: _useSlots, defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceNavbarRiceNavbar";
const { computed, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-navbar",
    styleIsolation: "app-and-page",
    externalClasses: ["title-text-class", "navbar-class"]
  },
  __dynamicSharedData: true,
  __hash: "e6a279f0",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-navbar/rice-navbar.uvue",
  __name: "rice-navbar",
  props: {
    title: { type: String },
    titleSize: { type: [String, Number] },
    titleColor: { type: String },
    titleWidth: { type: [String, Number] },
    fixed: { type: Boolean, default: true },
    placeholder: { type: Boolean, default: true },
    border: { type: Boolean, default: false },
    leftArrow: { type: Boolean, default: true },
    leftIcon: { default: "arrow-left", type: String },
    leftIconSize: { default: "20px", type: [String, Number] },
    leftIconColor: { type: String },
    leftText: { type: String },
    leftTextColor: { type: String },
    rightText: { type: String },
    rightTextColor: { type: String },
    zIndex: { type: Number },
    bgColor: { type: String },
    safeAreaInsetTop: { type: Boolean, default: true },
    height: { default: "44px", type: [String, Number] },
    autoBack: { type: Boolean, default: true },
    titleTextClass: { default: "", type: String },
    navbarClass: { default: "", type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["clickLeft", "clickRight"],
  __multiRoot: true,
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceNavbarRiceNavbarSharedData", sharedDataClassId: 0 })));
    const slot = _useSlots();
    const emit = __emit;
    const ns = useNamespace("navbar");
    useSafeArea();
    const props = __props;
    const hasLeft = computed(() => {
      return slot["left"] != null || props.leftArrow || hasStrValue(props.leftText);
    });
    const hasRight = computed(() => {
      return slot["right"] != null || hasStrValue(props.rightText);
    });
    const clickLeft = (e) => {
      if (slot["left"] != null)
        return null;
      e.stopPropagation();
      if (props.autoBack)
        uni.navigateBack();
      emit("clickLeft");
    };
    const clickRight = (e) => {
      if (slot["right"] != null)
        return null;
      e.stopPropagation();
      emit("clickRight");
    };
    const arrowColor = computed(() => {
      var _a2;
      return (_a2 = props.leftIconColor) !== null && _a2 !== void 0 ? _a2 : "var(--rice-text-color)";
    });
    const navbarHeight = computed(() => {
      let height = getPxNum(props.height);
      if (props.safeAreaInsetTop)
        height += safeAreaInsets.value.statusBarHeight;
      return height + "px";
    });
    const centerStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.titleWidth != null)
        css.set("width", addUnit(props.titleWidth));
      return css;
    });
    const navbarStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.bgColor != null)
        css.set("background", props.bgColor);
      if (props.fixed && props.zIndex != null)
        css.set("z-index", props.zIndex);
      css.set("height", addUnit(props.height));
      return css;
    });
    const leftTextStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.leftTextColor != null)
        css.set("color", props.leftTextColor);
      return css;
    });
    const rightTextStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.rightTextColor != null)
        css.set("color", props.rightTextColor);
      return css;
    });
    const titleTextStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.titleColor != null)
        css.set("color", props.titleColor);
      if (props.titleSize != null)
        css.set("font-size", addUnit(props.titleSize));
      return css;
    });
    const navbarCustomClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("fixed", props.fixed),
        ns.is("safearea-top", props.safeAreaInsetTop),
        ns.is("border", props.border)
      ];
    });
    onMounted(() => {
    });
    return () => {
      "raw js";
      const _component_rice_icon = __easycom_0;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.fixed && __props.placeholder));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 1, { height: _unref(navbarHeight) });
        });
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 19, [_unref(navbarCustomClass), __props.navbarClass]);
        _setSharedDataStyle(__sharedData, 20, _unref(navbarStyle));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(hasLeft)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 9, ["rice-navbar__aside rice-navbar__left", { "rice-navbar__aside--safearea-top": __props.safeAreaInsetTop }]);
        });
        _createSharedDataSlot("left", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.leftArrow));
          }, () => {
            const n9 = _createSharedDataComponentWithFallback(_component_rice_icon, "61142a40", {
              name: () => {
                return __props.leftIcon;
              },
              size: () => {
                return __props.leftIconSize;
              },
              color: () => {
                return _unref(arrowColor);
              }
            });
            _setSharedData(__sharedData, 4, n9?.sharedData);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 5, _toSharedDataBoolean(_unref(hasStrValue)(__props.leftText)));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 6, _unref(leftTextStyle));
              _setSharedData(__sharedData, 7, _toDisplayString(__props.leftText));
            });
          });
        });
        _setSharedDataEvent(__sharedData, 8, clickLeft);
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 21, ["rice-navbar__center", { "rice-navbar__center--has-right": _unref(hasRight) && __props.safeAreaInsetTop }]);
        _setSharedDataStyle(__sharedData, 22, _unref(centerStyle));
      });
      _createSharedDataSlot("title", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 16, ["rice-navbar__title", __props.titleTextClass]);
          _setSharedDataStyle(__sharedData, 17, _unref(titleTextStyle));
          _setSharedData(__sharedData, 18, _toDisplayString(__props.title));
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 10, _toSharedDataBoolean(_unref(hasRight)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 15, ["rice-navbar__aside rice-navbar__right", { "rice-navbar__aside--safearea-top": __props.safeAreaInsetTop }]);
        });
        _createSharedDataSlot("right", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 11, _toSharedDataBoolean(_unref(hasStrValue)(__props.rightText)));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 12, _unref(rightTextStyle));
              _setSharedData(__sharedData, 13, _toDisplayString(__props.rightText));
            });
          });
        });
        _setSharedDataEvent(__sharedData, 14, clickRight);
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
//# sourceMappingURL=rice-navbar.js.map
