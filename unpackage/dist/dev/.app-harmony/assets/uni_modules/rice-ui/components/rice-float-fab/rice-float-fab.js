import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import { u as useTouch } from "../../libs/use/useTouch/index.js";
import { d as getPxNum, a as addUnit, h as hasStrValue, k as closeto, c as clamp } from "../../libs/utils/basic.js";
import { F as FloatFabOffset, a as FloatFabWindowSize, b as FloatFabState, c as FloatFabBoundary } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceFloatFabRiceFloatFab";
const { reactive, shallowRef, computed, nextTick, watch, onMounted, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-float-fab",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "11d2485c",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-float-fab/rice-float-fab.uvue",
  __name: "rice-float-fab",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    axis: { default: "xy", type: String },
    adsorption: { type: String },
    gap: { default: "24px", type: [Number, String] },
    gapTop: { type: [Number, String] },
    gapBottom: { type: [Number, String] },
    gapLeft: { type: [Number, String] },
    gapRight: { type: [Number, String] },
    overGap: { type: Boolean, default: true },
    defaultPosition: { default: "bottom-right", type: String },
    duration: { default: 300, type: Number },
    icon: { type: String },
    iconColor: { default: "#fff", type: String },
    iconSize: { default: "30px", type: null },
    height: { default: "52px", type: [String, Number] },
    width: { default: "52px", type: [String, Number] },
    radius: { type: [String, Number] },
    bgColor: { type: String },
    disabled: { type: Boolean, default: false },
    zIndex: { type: Number },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "offset": {
      type: null,
      default: () => {
        return new FloatFabOffset({ x: -1, y: -1 });
      }
    },
    "offsetModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["click", "offsetChange"], ["update:offset"]),
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceFloatFabRiceFloatFabSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("float-fab");
    const touch = useTouch();
    const emit = __emit;
    const props = __props;
    const offset = _useModel(__props, "offset");
    const windowSize = reactive(new FloatFabWindowSize({
      width: 0,
      height: 0
    }));
    const state = reactive(new FloatFabState({
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }));
    const lastOffset = new FloatFabOffset({
      x: 0,
      y: 0
    });
    let initialized = false;
    let timer = null;
    let initTimer = null;
    const fabRef = shallowRef(null);
    const boundaryBottom = computed(() => {
      var _a2;
      return getPxNum((_a2 = props.gapBottom) !== null && _a2 !== void 0 ? _a2 : props.gap);
    });
    const boundaryRight = computed(() => {
      var _a2;
      return getPxNum((_a2 = props.gapRight) !== null && _a2 !== void 0 ? _a2 : props.gap);
    });
    const boundary = computed(() => {
      var _a2, _b;
      return new FloatFabBoundary({
        top: getPxNum((_a2 = props.gapTop) !== null && _a2 !== void 0 ? _a2 : props.gap),
        bottom: windowSize.height - state.height - boundaryBottom.value,
        left: getPxNum((_b = props.gapLeft) !== null && _b !== void 0 ? _b : props.gap),
        right: windowSize.width - state.width - boundaryRight.value
      });
    });
    const setTransform = (x, y) => {
      var _a2, _b;
      (_a2 = fabRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transform", `translate(${x}px,${y}px)`);
      (_b = fabRef.value) === null || _b === void 0 ? null : _b.style.setProperty("opacity", `1`);
    };
    const updateOffset = () => {
      offset.value = new FloatFabOffset({
        x: state.x,
        y: state.y
      });
    };
    const setPosition = () => {
      var _a2;
      const duration = touch.dragging.value || !initialized ? 0 : props.duration;
      (_a2 = fabRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", `${duration}ms`);
      setTransform(state.x, state.y);
    };
    const getFabSize = async () => {
      const rect = await fabRef.value.getBoundingClientRectAsync();
      state.height = rect.height;
      state.width = rect.width;
    };
    function setDefPosition(position = null, isInit = false) {
      if (position == "top-left") {
        state.x = boundary.value.left;
        state.y = boundary.value.top;
      } else if (position == "top-right") {
        state.x = boundary.value.right;
        state.y = boundary.value.top;
      } else if (position == "bottom-left") {
        state.x = boundary.value.left;
        state.y = boundary.value.bottom;
      } else {
        state.x = boundary.value.right;
        state.y = boundary.value.bottom;
      }
      setPosition();
      if (!isInit) {
        updateOffset();
      }
    }
    const updateState = (x, y) => {
      if (props.adsorption == "x") {
        x = closeto([boundary.value.left, boundary.value.right], x);
      } else if (props.adsorption == "y") {
        y = closeto([boundary.value.top, boundary.value.bottom], y);
      }
      x = clamp(x, boundary.value.left, boundary.value.right);
      y = clamp(y, boundary.value.top, boundary.value.bottom);
      state.x = x;
      state.y = y;
      setPosition();
    };
    function updatePosition(isInit = false) {
      var _a2, _b, _c, _d;
      let x = (_b = (_a2 = offset.value) === null || _a2 === void 0 ? null : _a2.x) !== null && _b !== void 0 ? _b : -1;
      let y = (_d = (_c = offset.value) === null || _c === void 0 ? null : _c.y) !== null && _d !== void 0 ? _d : -1;
      if (isInit && (x < 0 || y < 0)) {
        const position = props.defaultPosition;
        if (position == "top-left") {
          setTransform(-state.width, boundary.value.top);
        } else if (position == "top-right") {
          setTransform(windowSize.width + state.width, boundary.value.top);
        } else if (position == "bottom-left") {
          setTransform(-state.width, boundary.value.bottom);
        } else {
          setTransform(windowSize.width + state.width, boundary.value.bottom);
        }
        initTimer = setTimeout(() => {
          initialized = true;
          setDefPosition(position, isInit);
        }, 20);
      } else {
        updateState(x, y);
        updateOffset();
      }
      initialized = true;
    }
    async function init(isInit = false) {
      await nextTick();
      const windowInfo = uni.getWindowInfo();
      windowSize.height = windowInfo.windowHeight;
      windowSize.width = windowInfo.windowWidth;
      await getFabSize();
      updatePosition(isInit);
    }
    watch(offset, () => {
      const isSame = offset.value.x == state.x && offset.value.y == state.y;
      if (isSame || touch.dragging.value)
        return null;
      updatePosition();
    }, {
      deep: true
    });
    watch(() => {
      return [props.gap, props.gapTop, props.gapBottom, props.gapLeft, props.gapRight, props.overGap];
    }, () => {
      if (touch.dragging.value)
        return null;
      updateState(state.x, state.y);
    }, {
      deep: true
    });
    watch(() => {
      return [props.height, props.width];
    }, async () => {
      if (touch.dragging.value)
        return Promise.resolve(null);
      await nextTick();
      await getFabSize();
      updateState(state.x, state.y);
    }, {
      deep: true
    });
    const onTouchstart = (e) => {
      touch.start(e);
      if (props.disabled)
        return null;
      fabRef.value.style.setProperty("transition-duration", "0ms");
      lastOffset.x = state.x;
      lastOffset.y = state.y;
      getFabSize();
    };
    const onTouchmove = (e) => {
      touch.move(e);
      if (props.disabled || touch.isTap.value)
        return null;
      let nextX = lastOffset.x + touch.deltaX.value;
      let nextY = lastOffset.y + touch.deltaY.value;
      const axis = props.axis;
      if (axis == "x" || axis == "xy") {
        if (props.overGap) {
          nextX = clamp(nextX, 0, boundary.value.right + boundaryRight.value);
        } else {
          nextX = clamp(nextX, boundary.value.left, boundary.value.right);
        }
        state.x = nextX;
      }
      if (axis == "y" || axis == "xy") {
        if (props.overGap) {
          nextY = clamp(nextY, 0, boundary.value.bottom + boundaryBottom.value);
        } else {
          nextY = clamp(nextY, boundary.value.top, boundary.value.bottom);
        }
        state.y = nextY;
      }
      updateOffset();
      setPosition();
      e.preventDefault();
    };
    const onTouchend = () => {
      touch.end();
      if (touch.isTap.value) {
        emit("click");
      } else {
        if (props.disabled)
          return null;
        updateState(state.x, state.y);
        updateOffset();
        if (lastOffset.x != state.x || lastOffset.y != state.y) {
          emit("offsetChange", new FloatFabOffset({ x: state.x, y: state.y }));
        }
      }
    };
    const floatFabStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("height", addUnit(props.height));
      css.set("width", addUnit(props.width));
      css.set("border-radius", props.radius == null ? "999px" : addUnit(props.radius));
      if (props.zIndex != null)
        css.set("z-index", props.zIndex);
      if (props.bgColor != null)
        css.set("background", props.bgColor);
      return css;
    });
    const fabClass = computed(() => {
      return [
        ns.b(""),
        ns.theme()
      ];
    });
    const resize = async () => {
      init(true);
    };
    onMounted(() => {
      timer = setTimeout(() => {
        init(true);
      }, 200);
    });
    onUnmounted(() => {
      if (timer != null)
        clearTimeout(timer);
      if (initTimer != null)
        clearTimeout(initTimer);
    });
    const setDefaultPosition = (position) => {
      setDefPosition(position, false);
    };
    __expose({
      resize,
      setDefaultPosition
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 7, _unref(fabClass));
        _setSharedDataStyle(__sharedData, 8, [_unref(floatFabStyle), __props.customStyle]);
      });
      _createSharedDataSlot("default", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasStrValue)(__props.icon)));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_rice_icon, "1af2c0d2", {
            name: () => {
              return __props.icon;
            },
            color: () => {
              return __props.iconColor;
            },
            size: () => {
              return __props.iconSize;
            }
          });
          _setSharedData(__sharedData, 1, n4?.sharedData);
        });
      });
      _setSharedDataEvent(__sharedData, 2, onTouchstart);
      _setSharedDataEvent(__sharedData, 3, onTouchmove);
      _setSharedDataEvent(__sharedData, 4, onTouchend);
      _setSharedDataEvent(__sharedData, 5, onTouchend);
      _setSharedDataTemplateRef(__sharedData, 6, (n5) => {
        _setTemplateRef(n5, fabRef, null, "fabRef");
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
//# sourceMappingURL=rice-float-fab.js.map
