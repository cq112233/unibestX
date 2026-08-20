import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-badge/up-badge&";
import { b as badgeProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-badge/badge&";
import { a as addUnit, b as addStyle, g as getPx, e as getWindowInfo, s as sleep, d as deepMerge, u as upGetRect } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, watch, onMounted, getCurrentInstance, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-tabs"
  },
  __name: "up-tabs",
  props: {
    duration: {
      type: Number,
      default: 200
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    lineColor: {
      type: String,
      default: "#3c9cff"
    },
    activeStyle: {
      type: [String, Object],
      default: () => {
        return new UTSJSONObject({
          color: "#303133"
        });
      }
    },
    inactiveStyle: {
      type: [String, Object],
      default: () => {
        return new UTSJSONObject({
          color: "#606266"
        });
      }
    },
    lineWidth: {
      type: [String, Number],
      default: "20px"
    },
    lineHeight: {
      type: [String, Number],
      default: "3px"
    },
    lineBgSize: {
      type: String,
      default: "cover"
    },
    itemStyle: {
      type: [String, Object],
      default: () => {
        return new UTSJSONObject({
          height: "44px"
        });
      }
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    current: {
      type: [Number, String],
      default: 0
    },
    keyName: {
      type: String,
      default: "name"
    },
    iconStyle: {
      type: [String, Object],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    height: {
      type: [String, Number],
      default: "44px"
    }
  },
  emits: ["click", "longPress", "change", "update:current"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const firstTime = ref(true);
    const scrollLeft = ref(0);
    const scrollViewWidth = ref(0);
    const lineOffsetLeft = ref(0);
    const tabsRect = ref({
      left: 0,
      right: 0
    });
    const innerCurrent = ref(0);
    const retryCount = ref(0);
    const itemRects = ref([]);
    const tabsWrapperStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.height)
      });
    });
    const iconCustomStyle = computed(() => {
      return addStyle(props.iconStyle);
    });
    const propsBadge = computed(() => {
      return badgeProps["badge"];
    });
    const lineStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["width"] = addUnit(props.lineWidth);
      style["transform"] = "translateX(" + lineOffsetLeft.value + "px)";
      style["transitionDuration"] = `${firstTime.value ? 0 : props.duration}ms`;
      style["height"] = addUnit(props.lineHeight);
      style["backgroundSize"] = props.lineBgSize;
      if (props.lineColor != "#3c9cff") {
        style["backgroundColor"] = props.lineColor;
      }
      return style;
    });
    function getShowValue(itemObj) {
      if (itemObj["badge"] != null) {
        let itemObjBadge = itemObj["badge"];
        if (itemObjBadge["show"] != null && itemObjBadge["show"] || itemObjBadge["isDot"] != null && itemObjBadge["isDot"] || itemObjBadge["value"] != null) {
          return true;
        }
      }
      return false;
    }
    function getBadgePropValue(itemObj, name) {
      if (itemObj != null && itemObj["badge"] != null) {
        let itemObjBadge = itemObj["badge"];
        if (itemObjBadge != null && itemObjBadge[name] != null) {
          return itemObjBadge[name] != null ? itemObjBadge[name] : "";
        } else {
          return propsBadge.value != null && propsBadge.value[name] != null ? propsBadge.value[name] : "";
        }
      }
      return "";
    }
    function textStyle(index) {
      const style = new UTSJSONObject({});
      const customeStyle = index == innerCurrent.value ? addStyle(props.activeStyle) : addStyle(props.inactiveStyle);
      if (props.list[index]["disabled"] != null && props.list[index]["disabled"]) {
        style["color"] = "#c8c9cc";
      }
      return deepMerge(customeStyle, style);
    }
    function getItemStyle() {
      const custom = addStyle(props.itemStyle);
      const base = new UTSJSONObject({
        flex: props.scrollable ? "none" : "1"
      });
      return deepMerge(base, custom);
    }
    function isListEqual(list1, list2) {
      if (list1.length != list2.length) {
        return false;
      }
      for (let i = 0; i < list1.length; i++) {
        const item1 = list1[i];
        const item2 = list2[i];
        if (item1[props.keyName] != item2[props.keyName]) {
          return false;
        }
      }
      return true;
    }
    function getTabsRect() {
      return upGetRect(".up-tabs__wrapper__scroll-view", false, instance === null || instance === void 0 ? null : instance.proxy);
    }
    function getAllItemRect() {
      return new Promise((resolve) => {
        const total = props.list.length;
        if (total == 0) {
          resolve([]);
          return null;
        }
        let results = [];
        let count = 0;
        for (let i = 0; i < total; i++) {
          const idx = i;
          upGetRect(`.up-tabs__wrapper__nav__item-${idx}`, false, instance === null || instance === void 0 ? null : instance.proxy).then((size) => {
            results.push(size);
            count++;
            if (count == total) {
              resolve(results);
            }
          });
        }
      });
    }
    function setLineLeft() {
      var _a2;
      if (itemRects.value.length <= innerCurrent.value) {
        return null;
      }
      const tabItem = itemRects.value[innerCurrent.value];
      if (tabItem == null) {
        return null;
      }
      let totalOffset = itemRects.value.slice(0, innerCurrent.value).reduce((total, curr) => {
        var _a3;
        return total + ((_a3 = curr.width) !== null && _a3 !== void 0 ? _a3 : 0);
      }, 0);
      const lineWidthVal = parseFloat(getPx(props.lineWidth));
      const tabWidth = (_a2 = tabItem.width) !== null && _a2 !== void 0 ? _a2 : 0;
      const offset = tabWidth > 0 ? (tabWidth - lineWidthVal) / 2 : 0;
      lineOffsetLeft.value = totalOffset + offset;
      if (firstTime.value) {
        setTimeout(() => {
          firstTime.value = false;
        }, 30);
      }
    }
    function setScrollLeft() {
      var _a2, _b, _c, _d, _e;
      if (innerCurrent.value < 0) {
        innerCurrent.value = 0;
      }
      if (itemRects.value.length <= innerCurrent.value) {
        return null;
      }
      const tabRect = itemRects.value[innerCurrent.value];
      if (tabRect == null) {
        return null;
      }
      const offsetLeft = itemRects.value.slice(0, innerCurrent.value).reduce((total, curr) => {
        var _a3;
        return total + ((_a3 = curr.width) !== null && _a3 !== void 0 ? _a3 : 0);
      }, 0);
      const windowWidth = getWindowInfo().windowWidth;
      let nextScrollLeft = offsetLeft - (((_a2 = tabsRect.value.width) !== null && _a2 !== void 0 ? _a2 : 0) - ((_b = tabRect.width) !== null && _b !== void 0 ? _b : 0)) / 2 - (windowWidth - ((_c = tabsRect.value.right) !== null && _c !== void 0 ? _c : 0)) / 2 + ((_d = tabsRect.value.left) !== null && _d !== void 0 ? _d : 0) / 2;
      nextScrollLeft = Math.min(nextScrollLeft, scrollViewWidth.value - ((_e = tabsRect.value.width) !== null && _e !== void 0 ? _e : 0));
      scrollLeft.value = Math.max(0, nextScrollLeft);
    }
    function resize() {
      if (props.list.length == 0) {
        return null;
      }
      getTabsRect().then((tRect) => {
        getAllItemRect().then((iRect) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k;
          const firstWidth = iRect.length > 0 && iRect[0] != null ? (_a2 = iRect[0].width) !== null && _a2 !== void 0 ? _a2 : 0 : 0;
          let minWidthExpected = 30;
          if (props.list.length > 0) {
            const firstItemName = props.list[0][props.keyName];
            if (firstItemName != null) {
              const nameStr = firstItemName.toString();
              minWidthExpected = nameStr.length * 12 + 20;
            }
          }
          if (firstWidth < minWidthExpected && retryCount.value < 5) {
            retryCount.value++;
            setTimeout(() => {
              resize();
            }, 50);
            return null;
          }
          if (((_b = tRect.left) !== null && _b !== void 0 ? _b : 0) > ((_c = tRect.width) !== null && _c !== void 0 ? _c : 0)) {
            tRect.right = ((_d = tRect.right) !== null && _d !== void 0 ? _d : 0) - Math.floor(((_e = tRect.left) !== null && _e !== void 0 ? _e : 0) / ((_f = tRect.width) !== null && _f !== void 0 ? _f : 0)) * ((_g = tRect.width) !== null && _g !== void 0 ? _g : 0);
            tRect.left = ((_h = tRect.left) !== null && _h !== void 0 ? _h : 0) % ((_j = tRect.width) !== null && _j !== void 0 ? _j : 1);
          }
          tabsRect.value = tRect;
          itemRects.value = iRect;
          scrollViewWidth.value = 0;
          for (let i = 0; i < iRect.length; i++) {
            const item = iRect[i];
            if (item != null) {
              scrollViewWidth.value = scrollViewWidth.value + ((_k = item.width) !== null && _k !== void 0 ? _k : 0);
            }
          }
          setLineLeft();
          setScrollLeft();
        });
      });
    }
    function clickHandler(item = null, index) {
      emit("click", new UTSJSONObject({
        ...item,
        index
      }), index);
      if (item["disabled"] != null && item["disabled"])
        return null;
      if (innerCurrent.value == index)
        return null;
      innerCurrent.value = index;
      nextTick(() => {
        var _a2;
        const hasRect = itemRects.value.length > 0 && itemRects.value.length == props.list.length && ((_a2 = itemRects.value[0].width) !== null && _a2 !== void 0 ? _a2 : 0) > 0;
        if (hasRect) {
          setLineLeft();
          setScrollLeft();
        } else {
          resize();
        }
      });
      emit("update:current", index);
      emit("change", new UTSJSONObject({
        ...item,
        index
      }), index);
    }
    function longPressHandler(item, index) {
      emit("longPress", new UTSJSONObject({
        ...item,
        index
      }));
    }
    function init() {
      retryCount.value = 0;
      sleep(30).then(() => {
        resize();
      });
    }
    watch(() => {
      return props.current;
    }, (newValue = null) => {
      let num = typeof newValue == "string" ? parseInt(newValue.toString()) : newValue;
      if (num != innerCurrent.value) {
        innerCurrent.value = num;
        nextTick(() => {
          var _a2;
          const hasRect = itemRects.value.length > 0 && itemRects.value.length == props.list.length && ((_a2 = itemRects.value[0].width) !== null && _a2 !== void 0 ? _a2 : 0) > 0;
          if (hasRect) {
            setLineLeft();
            setScrollLeft();
          } else {
            resize();
          }
        });
      }
    }, { immediate: true });
    watch(() => {
      return props.list;
    }, (newValue, oldValue = null) => {
      if (oldValue != null && isListEqual(newValue, oldValue)) {
        return null;
      }
      nextTick(() => {
        resize();
      });
    });
    onMounted(() => {
      init();
    });
    __expose({
      init,
      resize
    });
    const __returned__ = { props, emit, instance, firstTime, scrollLeft, scrollViewWidth, lineOffsetLeft, tabsRect, innerCurrent, retryCount, itemRects, tabsWrapperStyle, iconCustomStyle, propsBadge, lineStyle, getShowValue, getBadgePropValue, textStyle, getItemStyle, isListEqual, getTabsRect, getAllItemRect, setLineLeft, setScrollLeft, resize, clickHandler, longPressHandler, init };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"row","alignItems":"center","width":"100%"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"row","flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"row","position":"relative","height":"100%"}},"up-tabs__wrapper__nav__item":{"":{"paddingTop":0,"paddingRight":11,"paddingBottom":0,"paddingLeft":11,"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","flexShrink":0,"height":"100%"}},"up-tabs__wrapper__nav__item__text":{"":{"fontSize":15,"color":"#606266","!whiteSpace":"nowrap"}},"up-tabs__wrapper__nav__item__text--disabled":{"":{"!color":"#c8c9cc"}},"up-tabs__wrapper__nav__line":{"":{"height":3,"backgroundColor":"var(--theme-color, #0957de)","width":30,"position":"absolute","bottom":2,"borderTopLeftRadius":100,"borderTopRightRadius":100,"borderBottomRightRadius":100,"borderBottomLeftRadius":100,"transitionProperty":"transform","transitionDuration":"300ms"}},"@TRANSITION":{"up-tabs__wrapper__nav__line":{"property":"transform","duration":"300ms"}},"flex":{"":{"display":"flex"}},"relative":{"":{"position":"relative"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_badge = resolveEasycom(__resolveDynamicComponent("up-badge"), __easycom_1$1);
  return _openBlock(), _createElementBlock("view", { class: "up-tabs" }, [
    _createElementVNode(
      "view",
      {
        class: "up-tabs__wrapper",
        style: _normalizeStyle($setup.tabsWrapperStyle)
      },
      [
        _renderSlot(_ctx.$slots, "left"),
        _createElementVNode("view", { class: "up-tabs__wrapper__scroll-view-wrapper" }, [
          _createElementVNode("scroll-view", {
            direction: $props.scrollable ? "horizontal" : "none",
            "scroll-left": $setup.scrollLeft,
            "scroll-with-animation": "",
            class: "up-tabs__wrapper__scroll-view",
            "show-scrollbar": false,
            ref: "up-tabs__wrapper__scroll-view",
            style: _normalizeStyle($setup.tabsWrapperStyle)
          }, [
            _createElementVNode(
              "view",
              {
                class: "up-tabs__wrapper__nav",
                ref: "up-tabs__wrapper__nav",
                style: _normalizeStyle($setup.tabsWrapperStyle)
              },
              [
                (_openBlock(true), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList($props.list, (item, index) => {
                    return _openBlock(), _createElementBlock("view", {
                      class: _normalizeClass(["up-tabs__wrapper__nav__item", [
                        `up-tabs__wrapper__nav__item-${index}`,
                        item["disabled"] != null && item["disabled"] ? "up-tabs__wrapper__nav__item--disabled" : "",
                        $setup.innerCurrent == index ? "up-tabs__wrapper__nav__item-active" : ""
                      ]]),
                      key: index,
                      onClick: ($event) => $setup.clickHandler(item, index),
                      onLongpress: ($event) => $setup.longPressHandler(item, index),
                      ref_for: true,
                      ref: `up-tabs__wrapper__nav__item-${index}`,
                      style: _normalizeStyle($setup.getItemStyle())
                    }, [
                      _ctx.$slots["icon"] ? _renderSlot(_ctx.$slots, "icon", {
                        key: 0,
                        item,
                        keyName: $props.keyName,
                        index
                      }) : (_openBlock(), _createElementBlock(
                        _Fragment,
                        { key: 1 },
                        [
                          item["icon"] != null ? (_openBlock(), _createElementBlock("view", {
                            key: 0,
                            class: "up-tabs__wrapper__nav__item__prefix-icon"
                          }, [
                            _createVNode(_component_up_icon, {
                              name: item["icon"],
                              customStyle: $setup.iconCustomStyle
                            }, null, 8, ["name", "customStyle"])
                          ])) : _createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      )),
                      _ctx.$slots["content"] != null ? _renderSlot(_ctx.$slots, "content", {
                        key: 2,
                        item,
                        keyName: $props.keyName,
                        index
                      }) : _ctx.$slots["content"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null) ? _renderSlot(_ctx.$slots, "default", {
                        key: 3,
                        item,
                        keyName: $props.keyName,
                        index
                      }) : (_openBlock(), _createElementBlock(
                        "text",
                        {
                          key: 4,
                          class: _normalizeClass([[item["disabled"] != null && item["disabled"] ? "up-tabs__wrapper__nav__item__text--disabled" : ""], "up-tabs__wrapper__nav__item__text"]),
                          style: _normalizeStyle($setup.textStyle(index))
                        },
                        _toDisplayString(item[$props.keyName]),
                        7
                        /* TEXT, CLASS, STYLE */
                      )),
                      _createVNode(_component_up_badge, {
                        show: $setup.getShowValue(item),
                        isDot: $setup.getBadgePropValue(item, "isDot"),
                        value: $setup.getBadgePropValue(item, "value"),
                        max: $setup.getBadgePropValue(item, "max"),
                        type: $setup.getBadgePropValue(item, "type"),
                        showZero: $setup.getBadgePropValue(item, "showZero"),
                        bgColor: $setup.getBadgePropValue(item, "bgColor"),
                        color: $setup.getBadgePropValue(item, "color"),
                        shape: $setup.getBadgePropValue(item, "shape"),
                        numberType: $setup.getBadgePropValue(item, "numberType"),
                        inverted: $setup.getBadgePropValue(item, "inverted"),
                        customStyle: "margin-left: 4px;"
                      }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
                    ], 46, ["onClick", "onLongpress"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                _createElementVNode(
                  "view",
                  {
                    class: "up-tabs__wrapper__nav__line",
                    ref: "up-tabs__wrapper__nav__line",
                    style: _normalizeStyle($setup.lineStyle)
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ], 12, ["direction", "scroll-left"])
        ]),
        _renderSlot(_ctx.$slots, "right")
      ],
      4
      /* STYLE */
    )
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-tabs.js.map
