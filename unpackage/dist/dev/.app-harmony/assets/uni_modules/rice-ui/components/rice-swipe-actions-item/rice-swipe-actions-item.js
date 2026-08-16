import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import { s as swipeActionsInjectKey, a as swipeActionsName } from "../rice-swipe-actions/index.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import { u as useParent } from "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import { u as useTouch } from "../../libs/use/useTouch/index.js";
import { h as hasStrValue, s as splitCssProperty, c as clamp } from "../../libs/utils/basic.js";
import { a as SwipeActionsState, b as SwipeActionsMenuRect, c as SwipeActionsItemClose, d as SwipeActionsItemClick, e as SwipeActionsItemOpen } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, createSharedDataSlot: _createSharedDataSlot, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceSwipeActionsItemRiceSwipeActionsItem";
const { useSlots, inject, computed, reactive, getCurrentInstance, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-swipe-actions-item",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "affe5464",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-swipe-actions-item/rice-swipe-actions-item.uvue",
  __name: "rice-swipe-actions-item",
  props: {
    name: { type: [String, Number] },
    leftMenu: { default: () => {
      return [];
    }, type: Array },
    rightMenu: { default: () => {
      return [];
    }, type: Array },
    iosStyle: { type: Boolean, default: null },
    disabled: { type: Boolean, default: false },
    duration: { default: 300, type: Number },
    autoClose: { type: Boolean, default: null },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: ["open", "close", "click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceSwipeActionsItemRiceSwipeActionsItemSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("swipe-actions-item");
    const slot = useSlots();
    const emit = __emit;
    const swipeActions = inject(swipeActionsInjectKey, null);
    useParent(swipeActionsName);
    const props = __props;
    const hasLeftAction = computed(() => {
      return props.leftMenu.length > 0 || slot["left"] != null;
    });
    const hasRightAction = computed(() => {
      return props.rightMenu.length > 0 || slot["right"] != null;
    });
    const isDisabled = computed(() => {
      var _a2;
      return props.disabled || ((_a2 = swipeActions === null || swipeActions === void 0 ? null : swipeActions.disabled.value) !== null && _a2 !== void 0 ? _a2 : false);
    });
    const isAutoClose = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.autoClose) !== null && _a2 !== void 0 ? _a2 : swipeActions === null || swipeActions === void 0 ? null : swipeActions.autoClose.value) !== null && _b !== void 0 ? _b : true;
    });
    const isIosStyle = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = props.iosStyle) !== null && _a2 !== void 0 ? _a2 : swipeActions === null || swipeActions === void 0 ? null : swipeActions.iosStyle.value) !== null && _b !== void 0 ? _b : true;
    });
    const state = reactive(new SwipeActionsState({
      x: 0,
      leftWidth: 0,
      rightWidth: 0,
      opened: false,
      position: "cell"
    }));
    const instance = getCurrentInstance();
    const closeOtherSwipe = () => {
      var _a2;
      (_a2 = swipeActions === null || swipeActions === void 0 ? null : swipeActions.closeOtherSwipe) === null || _a2 === void 0 ? null : _a2.call(swipeActions, instance);
    };
    const swipeRef = ref(null);
    const leftActionRef = ref(null);
    const rightActionRef = ref(null);
    const skipMove = ref(false);
    const lastX = ref(0);
    const touch = useTouch();
    const durationTime = computed(() => {
      return touch.dragging.value ? "0ms" : props.duration + "ms";
    });
    const menuRect = reactive(new SwipeActionsMenuRect({
      rightMenuDom: [],
      rightMenuOffset: [],
      leftMenuOffset: [],
      leftMenuDom: []
    }));
    const getDomChildren = (dom = null) => {
      if (dom == null)
        return [];
      let children = dom.children;
      children = children.filter((v) => {
        return v.tagName != "COMMENT" && v.nodeName != "#comment";
      });
      const isSwipeActions = true;
      if (children.length == 1 && isSwipeActions) {
        children = children[0].children;
        children = children.filter((v) => {
          return v.tagName != "COMMENT" && v.nodeName != "#comment";
        });
      }
      return children;
    };
    const resize = () => {
      var _a2, _b, _c, _d;
      menuRect.rightMenuOffset = [];
      menuRect.rightMenuDom = [];
      state.rightWidth = (_b = (_a2 = rightActionRef.value) === null || _a2 === void 0 ? null : _a2.getBoundingClientRect().width) !== null && _b !== void 0 ? _b : 0;
      if (rightActionRef.value != null && isIosStyle.value) {
        menuRect.rightMenuDom = getDomChildren(rightActionRef.value);
        let rightOffset = 0;
        for (let i = 0; i < menuRect.rightMenuDom.length; i++) {
          rightOffset += menuRect.rightMenuDom[i].getBoundingClientRect().width;
          menuRect.rightMenuOffset.push(-rightOffset);
        }
      }
      menuRect.leftMenuOffset == [];
      menuRect.leftMenuDom = [];
      state.leftWidth = (_d = (_c = leftActionRef.value) === null || _c === void 0 ? null : _c.getBoundingClientRect().width) !== null && _d !== void 0 ? _d : 0;
      if (leftActionRef.value != null && isIosStyle.value) {
        menuRect.leftMenuDom = getDomChildren(leftActionRef.value);
        let leftOffset = state.leftWidth;
        for (let i = 0; i < menuRect.leftMenuDom.length; i++) {
          menuRect.leftMenuOffset.push(leftOffset);
          leftOffset -= menuRect.leftMenuDom[i].getBoundingClientRect().width;
        }
      }
    };
    const getCurrentPosition = (x) => {
      if (x == 0)
        return "cell";
      return x > 0 ? "left" : "right";
    };
    function handleLeftActions(x, isOpen = false) {
      if (leftActionRef.value == null)
        return null;
      if (x < 0)
        x = 0;
      const children = menuRect.leftMenuDom;
      for (let i = 0; i < children.length; i++) {
        let moveX = 0;
        if (i != children.length - 1) {
          const offset = menuRect.leftMenuOffset[i + 1];
          moveX = offset - x * (offset / state.leftWidth);
        }
        if (moveX < 0)
          moveX = 0;
        if (isOpen)
          moveX = 0;
        children[i].style.setProperty("transition-property", "transform");
        children[i].style.setProperty("transition-duration", durationTime.value);
        children[i].style.setProperty("transform", `translateX(${moveX}px)`);
        children[i].style.setProperty("z-index", children.length - i);
      }
    }
    function handleRightActions(x, isOpen = false) {
      if (rightActionRef.value == null)
        return null;
      if (x > 0)
        x = 0;
      const children = menuRect.rightMenuDom;
      for (let i = 0; i < children.length; i++) {
        let moveX = 0;
        if (i > 0) {
          const offset = menuRect.rightMenuOffset[i - 1];
          moveX = offset + x * (offset / state.rightWidth);
        }
        if (moveX > 0)
          moveX = 0;
        if (isOpen)
          moveX = 0;
        children[i].style.setProperty("transition-property", "transform");
        children[i].style.setProperty("transition-duration", durationTime.value);
        children[i].style.setProperty("transform", `translateX(${moveX}px)`);
      }
    }
    function animateActions(x, isOpen = false) {
      var _a2, _b, _c;
      state.x = clamp(x, -state.rightWidth, state.leftWidth);
      (_a2 = swipeRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-property", "transform");
      (_b = swipeRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transition-duration", durationTime.value);
      (_c = swipeRef.value) === null || _c === void 0 ? null : _c.style.setProperty("transform", `translateX(${state.x}px)`);
      if (isIosStyle.value) {
        handleLeftActions(state.x, isOpen);
        handleRightActions(state.x, isOpen);
      }
    }
    const onTouchstart = async (e) => {
      if (isDisabled.value)
        return Promise.resolve(null);
      skipMove.value = false;
      touch.start(e);
      resize();
      lastX.value = state.x;
      closeOtherSwipe();
    };
    const onTouchmove = async (e) => {
      if (isDisabled.value || skipMove.value)
        return Promise.resolve(null);
      touch.move(e);
      if (touch.direction.value == "vertical") {
        skipMove.value = true;
      }
      if (touch.direction.value != "horizontal")
        return Promise.resolve(null);
      const offsetX = touch.deltaX.value + lastX.value;
      state.position = getCurrentPosition(offsetX);
      animateActions(offsetX);
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
    };
    const getThreshold = () => {
      const THRESHOLD = 0.15;
      const num = state.opened ? 1 - THRESHOLD : THRESHOLD;
      return state.position == "left" ? state.leftWidth * num : state.rightWidth * num;
    };
    const emitOpen = () => {
      emit("open", new SwipeActionsItemOpen({
        name: props.name,
        position: state.position
      }));
    };
    function handleOpen() {
      closeOtherSwipe();
      const offsetX = state.position == "left" ? state.leftWidth : -state.rightWidth;
      touch.changeDragging(false);
      animateActions(offsetX, true);
      if (!state.opened) {
        state.opened = true;
        emitOpen();
      }
    }
    function open(position) {
      if (position != "left" && position != "right")
        return null;
      if (state.opened && position == state.position)
        return null;
      state.position = position;
      resize();
      handleOpen();
    }
    const emitClose = () => {
      emit("close", new SwipeActionsItemClose({
        name: props.name
      }));
    };
    const handleClose = () => {
      state.position = "cell";
      touch.changeDragging(false);
      animateActions(0);
      if (state.opened) {
        state.opened = false;
        emitClose();
      }
    };
    const onTouchend = async (e) => {
      if (isDisabled.value)
        return Promise.resolve(null);
      touch.end();
      const threshold = getThreshold();
      if (Math.abs(state.x) > threshold) {
        handleOpen();
      } else {
        handleClose();
      }
    };
    const emitClick = (position, index) => {
      emit("click", new SwipeActionsItemClick({
        name: props.name,
        position,
        index,
        opened: state.opened
      }));
    };
    const clickContent = () => {
      if (!touch.isTap.value)
        return null;
      emitClick("cell", -1);
      if (isAutoClose.value && state.opened) {
        handleClose();
      }
    };
    const clickMenu = (position, index) => {
      emitClick(position, index);
      if (isAutoClose.value) {
        handleClose();
      }
    };
    const getMenuStyle = (style = null) => {
      return splitCssProperty(style).rectCssProperty;
    };
    const getMenuTextStyle = (style = null) => {
      return splitCssProperty(style).textCssProperty;
    };
    __expose({
      open,
      close: handleClose
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 12, ["rice-swipe-actions-item", _unref(ns).theme()]);
        _setSharedDataStyle(__sharedData, 13, __props.customStyle);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(hasLeftAction)));
      }, () => {
        _createSharedDataSlot("left", null, null, () => {
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 1, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return __props.leftMenu;
          }, (__sharedData_VFor0, _for_item0, _for_key0) => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor0, 4, getMenuStyle(_for_item0.value.style));
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_unref(hasStrValue)(_for_item0.value.icon)));
            }, () => {
              const n8 = _createSharedDataComponentWithFallback(_component_rice_icon, "79ce3720-" + _for_key0.value, {
                name: () => {
                  return _for_item0.value.icon;
                },
                size: () => {
                  return _for_item0.value.iconSize;
                },
                color: () => {
                  return _for_item0.value.style?.["color"];
                },
                "custom-style": () => {
                  return { marginRight: _unref(hasStrValue)(_for_item0.value.text) ? "4px" : "0" };
                }
              });
              _setSharedData(__sharedData_VFor0, 2, n8?.sharedData);
            });
            _setSharedDataEvent(__sharedData_VFor0, 3, () => {
              return clickMenu("left", _for_key0.value);
            });
            _renderSharedDataEffect(() => {
              const _item = _for_item0.value;
              _setSharedDataStyle(__sharedData_VFor0, 5, getMenuTextStyle(_item.style));
              _setSharedData(__sharedData_VFor0, 6, _toDisplayString(_item.text));
            });
            return null;
          }, (__sharedData_VFor0, item, index) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
          });
        });
        _setSharedDataTemplateRef(__sharedData, 2, (n11) => {
          _setTemplateRef(n11, leftActionRef, null, "leftActionRef");
        });
      });
      _createSharedDataSlot("default", null, null);
      _setSharedDataEvent(__sharedData, 6, clickContent);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(hasRightAction)));
      }, () => {
        _createSharedDataSlot("right", null, null, () => {
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 4, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
          })), () => {
            return __props.rightMenu;
          }, (__sharedData_VFor1, _for_item1, _for_key1) => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor1, 4, getMenuStyle(_for_item1.value.style));
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor1, 1, _toSharedDataBoolean(_unref(hasStrValue)(_for_item1.value.icon)));
            }, () => {
              const n22 = _createSharedDataComponentWithFallback(_component_rice_icon, "bffd30ec-" + _for_key1.value, {
                name: () => {
                  return _for_item1.value.icon;
                },
                size: () => {
                  return _for_item1.value.iconSize;
                },
                color: () => {
                  return _for_item1.value.style?.["color"];
                },
                "custom-style": () => {
                  return { marginRight: _unref(hasStrValue)(_for_item1.value.text) ? "4px" : "0" };
                }
              });
              _setSharedData(__sharedData_VFor1, 2, n22?.sharedData);
            });
            _setSharedDataEvent(__sharedData_VFor1, 3, () => {
              return clickMenu("right", _for_key1.value);
            });
            _renderSharedDataEffect(() => {
              const _item = _for_item1.value;
              _setSharedDataStyle(__sharedData_VFor1, 5, getMenuTextStyle(_item.style));
              _setSharedData(__sharedData_VFor1, 6, _toDisplayString(_item.text));
            });
            return null;
          }, (__sharedData_VFor1, item, index) => {
            return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(index));
          });
        });
        _setSharedDataTemplateRef(__sharedData, 5, (n25) => {
          _setTemplateRef(n25, rightActionRef, null, "rightActionRef");
        });
      });
      _setSharedDataEvent(__sharedData, 7, onTouchstart);
      _setSharedDataEvent(__sharedData, 8, onTouchmove);
      _setSharedDataEvent(__sharedData, 9, onTouchend);
      _setSharedDataEvent(__sharedData, 10, onTouchend);
      _setSharedDataTemplateRef(__sharedData, 11, (n26) => {
        _setTemplateRef(n26, swipeRef, null, "swipeRef");
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
//# sourceMappingURL=rice-swipe-actions-item.js.map
