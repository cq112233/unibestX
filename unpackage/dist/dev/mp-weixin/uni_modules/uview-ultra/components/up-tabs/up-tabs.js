"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upBadge_badge = require("../up-badge/badge.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_badge_1 = common_vendor.resolveComponent("up-badge");
  (_easycom_up_icon_1 + _easycom_up_badge_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_badge = () => "../up-badge/up-badge.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_badge)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-tabs"
}, { __name: "up-tabs", props: {
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
      return new common_vendor.UTSJSONObject({
        color: "#303133"
      });
    }
  },
  inactiveStyle: {
    type: [String, Object],
    default: () => {
      return new common_vendor.UTSJSONObject({
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
      return new common_vendor.UTSJSONObject({
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
      return new common_vendor.UTSJSONObject({});
    }
  },
  height: {
    type: [String, Number],
    default: "44px"
  }
}, emits: ["click", "longPress", "change", "update:current"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const firstTime = common_vendor.ref(true);
  const scrollLeft = common_vendor.ref(0);
  const scrollViewWidth = common_vendor.ref(0);
  const lineOffsetLeft = common_vendor.ref(0);
  const tabsRect = common_vendor.ref({
    left: 0,
    right: 0
  });
  const innerCurrent = common_vendor.ref(0);
  const retryCount = common_vendor.ref(0);
  const itemRects = common_vendor.ref([]);
  const propsBadge = common_vendor.computed(() => {
    return uni_modules_uviewUltra_components_upBadge_badge.badgeProps["badge"];
  });
  const lineStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({});
    style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.lineWidth);
    style["transform"] = "translateX(" + lineOffsetLeft.value + "px)";
    style["transitionDuration"] = `${firstTime.value ? 0 : props.duration}ms`;
    style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(props.lineHeight);
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
    const style = new common_vendor.UTSJSONObject({});
    const customeStyle = index == innerCurrent.value ? uni_modules_uviewUltra_libs_function_index.addStyle(props.activeStyle) : uni_modules_uviewUltra_libs_function_index.addStyle(props.inactiveStyle);
    if (props.list[index]["disabled"] != null && props.list[index]["disabled"]) {
      style["color"] = "#c8c9cc";
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(customeStyle, style);
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
    const lineWidthVal = parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(props.lineWidth));
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
    var _a2, _b, _c, _d, _g, _h, _j, _k, _l;
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
    const windowWidth = uni_modules_uviewUltra_libs_function_index.getWindowInfo().windowWidth;
    let nextScrollLeft = offsetLeft - (((_b = (_a2 = tabsRect.value) === null || _a2 === void 0 ? null : _a2.width) !== null && _b !== void 0 ? _b : 0) - ((_c = tabRect.width) !== null && _c !== void 0 ? _c : 0)) / 2 - (windowWidth - ((_g = (_d = tabsRect.value) === null || _d === void 0 ? null : _d.right) !== null && _g !== void 0 ? _g : 0)) / 2 + ((_j = (_h = tabsRect.value) === null || _h === void 0 ? null : _h.left) !== null && _j !== void 0 ? _j : 0) / 2;
    nextScrollLeft = Math.min(nextScrollLeft, scrollViewWidth.value - ((_l = (_k = tabsRect.value) === null || _k === void 0 ? null : _k.width) !== null && _l !== void 0 ? _l : 0));
    scrollLeft.value = Math.max(0, nextScrollLeft);
  }
  function clickHandler(item = null, index) {
    emit("click", new common_vendor.UTSJSONObject(Object.assign(Object.assign({}, item), { index })), index);
    if (item["disabled"] != null && item["disabled"])
      return null;
    if (innerCurrent.value == index)
      return null;
    innerCurrent.value = index;
    common_vendor.nextTick$1(() => {
      var _a2;
      const hasRect = itemRects.value.length > 0 && itemRects.value.length === props.list.length && ((_a2 = itemRects.value[0].width) !== null && _a2 !== void 0 ? _a2 : 0) > 0;
      if (hasRect) {
        setLineLeft();
        setScrollLeft();
      } else {
        resize();
      }
    });
    emit("update:current", index);
    emit("change", new common_vendor.UTSJSONObject(Object.assign(Object.assign({}, item), { index })), index);
  }
  function longPressHandler(item, index) {
    emit("longPress", new common_vendor.UTSJSONObject(Object.assign(Object.assign({}, item), { index })));
  }
  function resize() {
    if (props.list.length == 0) {
      return null;
    }
    Promise.all([getTabsRect(), getAllItemRect()]).then((res) => {
      var _a2, _b, _c, _d, _g, _h, _j, _k, _l;
      let tRect = res[0][0];
      let iRect = res[1];
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
        tRect.right = ((_d = tRect.right) !== null && _d !== void 0 ? _d : 0) - Math.floor(((_g = tRect === null || tRect === void 0 ? null : tRect.left) !== null && _g !== void 0 ? _g : 0) / ((_h = tRect === null || tRect === void 0 ? null : tRect.width) !== null && _h !== void 0 ? _h : 0)) * ((_j = tRect === null || tRect === void 0 ? null : tRect.width) !== null && _j !== void 0 ? _j : 0);
        tRect.left = ((_k = tRect.left) !== null && _k !== void 0 ? _k : 0) % ((_l = tRect.width) !== null && _l !== void 0 ? _l : 1);
      }
      tabsRect.value = tRect;
      itemRects.value = iRect;
      scrollViewWidth.value = 0;
      iRect.map((item, index) => {
        var _a3;
        if (item != null) {
          scrollViewWidth.value = scrollViewWidth.value + ((_a3 = item.width) !== null && _a3 !== void 0 ? _a3 : 0);
        }
      });
      setLineLeft();
      setScrollLeft();
    });
  }
  function getTabsRect() {
    return new Promise((resolve) => {
      uni_modules_uviewUltra_libs_function_index.upGetRect(".up-tabs__wrapper__scroll-view", false, instance === null || instance === void 0 ? null : instance.proxy).then((size) => {
        resolve([size]);
      });
    });
  }
  function getAllItemRect() {
    return new Promise((resolve) => {
      const promiseAllArr = props.list.map((item, index) => {
        return uni_modules_uviewUltra_libs_function_index.upGetRect(`.up-tabs__wrapper__nav__item-${index}`, false, instance === null || instance === void 0 ? null : instance.proxy);
      });
      Promise.all(promiseAllArr).then((sizes) => {
        return resolve(sizes);
      });
    });
  }
  function init() {
    retryCount.value = 0;
    uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
      resize();
    });
  }
  common_vendor.watch(() => {
    return props.current;
  }, (newValue = null) => {
    let num = typeof newValue == "string" ? parseInt(newValue.toString()) : newValue;
    if (num != innerCurrent.value) {
      innerCurrent.value = num;
      common_vendor.nextTick$1(() => {
        var _a2;
        const hasRect = itemRects.value.length > 0 && itemRects.value.length === props.list.length && ((_a2 = itemRects.value[0].width) !== null && _a2 !== void 0 ? _a2 : 0) > 0;
        if (hasRect) {
          setLineLeft();
          setScrollLeft();
        } else {
          resize();
        }
      });
    }
  }, { immediate: true });
  common_vendor.watch(() => {
    return props.list;
  }, (newValue, oldValue = null) => {
    if (oldValue != null && isListEqual(newValue, oldValue)) {
      return null;
    }
    common_vendor.nextTick$1(() => {
      resize();
    });
  });
  common_vendor.onMounted(() => {
    init();
  });
  __expose({
    init,
    resize
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(__props.list, (item, index, i0) => {
        return common_vendor.e(_ctx.$slots["icon"] ? {
          a: "icon-" + i0,
          b: common_vendor.r("icon", {
            item,
            keyName: __props.keyName,
            index
          }, i0)
        } : common_vendor.e({
          c: item["icon"] != null
        }, item["icon"] != null ? {
          d: "518f641c-0-" + i0,
          e: common_vendor.p({
            name: item["icon"],
            customStyle: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.iconStyle),
            class: "data-v-518f641c"
          })
        } : {}), _ctx.$slots["content"] != null ? {
          f: "content-" + i0,
          g: common_vendor.r("content", {
            item,
            keyName: __props.keyName,
            index
          }, i0)
        } : _ctx.$slots["content"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null) ? {
          h: "d-" + i0,
          i: common_vendor.r("d", {
            item,
            keyName: __props.keyName,
            index
          }, i0)
        } : {
          j: common_vendor.t(item[__props.keyName]),
          k: common_vendor.n(item["disabled"] != null && item["disabled"] ? "up-tabs__wrapper__nav__item__text--disabled" : ""),
          l: common_vendor.s(textStyle(index))
        }, {
          m: "518f641c-1-" + i0,
          n: common_vendor.p({
            show: getShowValue(item),
            isDot: getBadgePropValue(item, "isDot"),
            value: getBadgePropValue(item, "value"),
            max: getBadgePropValue(item, "max"),
            type: getBadgePropValue(item, "type"),
            showZero: getBadgePropValue(item, "showZero"),
            bgColor: getBadgePropValue(item, "bgColor"),
            color: getBadgePropValue(item, "color"),
            shape: getBadgePropValue(item, "shape"),
            numberType: getBadgePropValue(item, "numberType"),
            inverted: getBadgePropValue(item, "inverted"),
            customStyle: "margin-left: 4px;",
            class: "data-v-518f641c"
          }),
          o: common_vendor.sei("r0-518f641c-" + index, "view", `up-tabs__wrapper__nav__item-${index}`, {
            "f": 1
          }),
          p: index,
          q: common_vendor.o(($event) => {
            return clickHandler(item, index);
          }, index),
          r: common_vendor.o(($event) => {
            return longPressHandler(item, index);
          }, index),
          s: `up-tabs__wrapper__nav__item-${index}`,
          t: common_vendor.n(`up-tabs__wrapper__nav__item-${index}`),
          v: common_vendor.n(item["disabled"] != null && item["disabled"] ? "up-tabs__wrapper__nav__item--disabled" : ""),
          w: common_vendor.n(innerCurrent.value == index ? "up-tabs__wrapper__nav__item-active" : "")
        });
      }),
      b: _ctx.$slots["icon"],
      c: _ctx.$slots["content"] != null,
      d: _ctx.$slots["content"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null),
      e: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.itemStyle)),
      f: common_vendor.s({
        flex: __props.scrollable ? "none" : "1"
      }),
      g: common_vendor.sei("r1-518f641c", "view", "up-tabs__wrapper__nav__line"),
      h: common_vendor.s(lineStyle.value),
      i: common_vendor.sei("r2-518f641c", "view", "up-tabs__wrapper__nav"),
      j: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height),
      k: common_vendor.sei("r3-518f641c", "scroll-view", "up-tabs__wrapper__scroll-view"),
      l: scrollLeft.value,
      m: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height),
      n: (__props.scrollable ? "horizontal" : "none") === "horizontal" || (__props.scrollable ? "horizontal" : "none") === "all",
      o: !(__props.scrollable ? "horizontal" : "none") || (__props.scrollable ? "horizontal" : "none") === "vertical" || (__props.scrollable ? "horizontal" : "none") === "all",
      p: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height),
      q: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      r: `${_ctx.u_s_b_h}px`,
      s: `${_ctx.u_s_a_i_b}px`,
      t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-518f641c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tabs/up-tabs.js.map
