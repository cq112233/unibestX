"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_composable_useUltraUI = require("../../libs/composable/useUltraUI.js");
const uni_modules_uviewUltra_components_upIndexList_indexList = require("./indexList.js");
if (!Array) {
  const _easycom_up_transition_1 = common_vendor.resolveComponent("up-transition");
  _easycom_up_transition_1();
}
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  _easycom_up_transition();
}
class UPIndexListChildrenItemType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          height: { type: Number, optional: false },
          top: { type: Number, optional: false }
        };
      },
      name: "UPIndexListChildrenItemType"
    };
  }
  constructor(options, metadata = UPIndexListChildrenItemType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.height = this.__props__.height;
    this.top = this.__props__.top;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-index-list"
}, { __name: "up-index-list", props: {
  inactiveColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upIndexList_indexList.defProps.getString("indexList.inactiveColor")
  },
  activeColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upIndexList_indexList.defProps.getString("indexList.activeColor")
  },
  indexList: {
    type: Array,
    default: () => {
      const list = [];
      uni_modules_uviewUltra_components_upIndexList_indexList.defProps.getArray("indexList.indexList").forEach((item) => {
        list.push(item);
      });
      return list;
    }
  },
  sticky: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upIndexList_indexList.defProps.getBoolean("indexList.sticky")
  },
  customNavHeight: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upIndexList_indexList.defProps.getNumber("indexList.customNavHeight")
  },
  safeBottomFix: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upIndexList_indexList.defProps.getBoolean("indexList.safeBottomFix")
  },
  itemMargin: {
    type: [String],
    default: uni_modules_uviewUltra_components_upIndexList_indexList.defProps.getString("indexList.itemMargin")
  }
}, setup(__props, _a) {
  var __expose = _a.expose;
  const _b = uni_modules_uviewUltra_libs_composable_useUltraUI.useUltraUI(), children = _b.children, addChild = _b.addChild, getChildren = _b.getChildren;
  const instance = common_vendor.getCurrentInstance().proxy;
  const indexList = () => {
    const indexListArray = [];
    const charCodeOfA = "A".charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      indexListArray.push(String.fromCharCode(charCodeOfA + i));
    }
    return indexListArray;
  };
  const props = __props;
  const activeIndex = common_vendor.ref(-1);
  const touching = common_vendor.ref(false);
  const scrollTop = common_vendor.ref(0);
  const scrollIntoView = common_vendor.ref("");
  const indicatorHeight = common_vendor.ref(50);
  const anchors = common_vendor.ref([]);
  const indicatorText = common_vendor.ref("");
  const letterInfo = common_vendor.ref(new UTSJSONObject({
    height: 0,
    itemHeight: 0,
    top: 0
  }));
  const pageY = common_vendor.ref(0);
  const topOffset = common_vendor.ref(0);
  const sys = common_vendor.ref(null);
  const scrollViewHeight = common_vendor.ref(0);
  const scrolling = common_vendor.ref(false);
  const uIndexList = common_vendor.computed(() => {
    if (props.indexList.length > 0) {
      return props.indexList;
    } else {
      const list = [];
      indexList().forEach((item) => {
        list.push(item);
      });
      return list;
    }
  });
  const getIndexListLetterRect = () => {
    return new Promise((resolve) => {
      uni_modules_uviewUltra_libs_function_index.upGetRect(".up-index-list__letter", false, instance).then((size) => {
        resolve(size);
      });
    });
  };
  const setIndexListLetterInfo = () => {
    getIndexListLetterRect().then((size) => {
      const height = size.height;
      const sysData = uni_modules_uviewUltra_libs_function_index.getWindowInfo();
      sysData.windowHeight;
      let customNavHeight = 0;
      if (props.customNavHeight == 0) {
        customNavHeight = -(sysData.statusBarHeight + 44);
      } else {
        customNavHeight = parseInt(uni_modules_uviewUltra_libs_function_index.getPx(props.customNavHeight));
      }
      const scrollHeight = scrollViewHeight.value > 0 ? scrollViewHeight.value : sysData.windowHeight - customNavHeight;
      letterInfo.value = {
        height: height !== null && height !== void 0 ? height : 0,
        // 为了让字母列表对屏幕绝对居中，让其对导航栏进行修正，也即往上偏移导航栏的一半高度
        top: scrollHeight / 2,
        itemHeight: Math.floor((height !== null && height !== void 0 ? height : 0) / uIndexList.value.length)
      };
    });
  };
  const indicatorTop = common_vendor.computed(() => {
    let top = letterInfo.value["top"];
    let height = letterInfo.value["height"];
    let itemHeight = letterInfo.value["itemHeight"];
    return Math.floor(top - height / 2 + itemHeight * activeIndex.value + itemHeight - 70 / 2);
  });
  common_vendor.watch(() => {
    return uIndexList.value;
  }, () => {
    uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
      setIndexListLetterInfo();
    });
  }, {
    immediate: false
  });
  const keyVal = (item = null) => {
    if (item == null) {
      return "";
    }
    if (typeof item == "string") {
      return item;
    }
    const itemObj = item;
    const keyNames = ["key", "name", "value", "label", "text"];
    for (let i = 0; i < keyNames.length; i++) {
      const value = itemObj[keyNames[i]];
      if (value != null) {
        return value.toString();
      }
    }
    return item.toString();
  };
  function getIndexListRect() {
    return new Promise((resolve) => {
      uni_modules_uviewUltra_libs_function_index.upGetRect(".up-index-list__scroll-view", false, instance).then((size) => {
        resolve(size);
      });
    });
  }
  const init = () => {
    let customNavHeight = uni_modules_uviewUltra_libs_function_index.getPx(props.customNavHeight);
    sys.value = uni_modules_uviewUltra_libs_function_index.getWindowInfo();
    getIndexListRect().then((sizeScroll) => {
      const h = (sizeScroll === null || sizeScroll === void 0 ? null : sizeScroll.height) != null && sizeScroll.height > 0 ? sizeScroll.height : sys.value.windowHeight - parseInt(customNavHeight);
      scrollViewHeight.value = h;
      topOffset.value = sys.value.windowHeight - h;
    });
  };
  const getHeaderRect = () => {
    return new Promise((resolve) => {
      if (instance.$slots["header"] == null) {
        resolve({
          width: 0,
          height: 0
        });
      }
      uni_modules_uviewUltra_libs_function_index.upGetRect(".up-index-list__header", false, instance).then((size) => {
        resolve(size);
      });
    });
  };
  const setValueForTouch = (currentIndex) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      var _a2, _b2, _c;
      if (currentIndex !== activeIndex.value) {
        activeIndex.value = currentIndex;
        indicatorText.value = keyVal(uIndexList.value[currentIndex]);
        const customNavHeight = props.customNavHeight;
        const header = yield getHeaderRect();
        let top_1 = (_a2 = header.height) !== null && _a2 !== void 0 ? _a2 : 0;
        let childrenItems = children.value.map((item, index) => {
          let itemRefs = item.$callMethod("getRefs");
          const childHeight = itemRefs["height"] + parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(props.itemMargin));
          const child = new UTSJSONObject(
            {
              height: childHeight,
              top: top_1
            }
            // 进行累加，给下一个item提供计算依据
          );
          top_1 = top_1 + childHeight;
          return child;
        });
        if (((_b2 = childrenItems[currentIndex]) === null || _b2 === void 0 ? null : _b2.top) != null || childrenItems[currentIndex].top == 0) {
          scrollTop.value = ((_c = childrenItems[currentIndex].top) !== null && _c !== void 0 ? _c : 0) - parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(customNavHeight));
        }
      }
    });
  };
  const getIndexListLetter = (pageYO) => {
    pageY.value = pageYO;
    let top = letterInfo.value["top"];
    let height = letterInfo.value["height"];
    let itemHeight = letterInfo.value["itemHeight"];
    let index = 0;
    top = top - height / 2;
    pageY.value = pageY.value - topOffset.value;
    if (pageY.value < top) {
      index = 0;
    } else if (pageY.value >= top + height) {
      index = uIndexList.value.length - 1;
    } else {
      index = Math.floor((pageY.value - top) / itemHeight);
    }
    return index;
  };
  const touchStart = (e) => {
    e.preventDefault();
    const touchStartData = e.changedTouches[0];
    touching.value = true;
    const pageY2 = touchStartData.pageY;
    touchStartData.screenY;
    const currentIndex = getIndexListLetter(pageY2);
    setValueForTouch(currentIndex);
  };
  const touchMove = (e) => {
    e.preventDefault();
    let touchMoveData = e.changedTouches[0];
    const pageY2 = touchMoveData.pageY;
    touchMoveData.screenY;
    const currentIndex = getIndexListLetter(pageY2);
    setValueForTouch(currentIndex);
  };
  const touchEnd = (e) => {
    e.preventDefault();
    uni_modules_uviewUltra_libs_function_index.sleep(300).then(() => {
      touching.value = false;
      scrollIntoView.value = "";
    });
  };
  const scrollHandler = (e) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      var _a2;
      if (touching.value || scrolling.value)
        return Promise.resolve(null);
      scrolling.value = true;
      uni_modules_uviewUltra_libs_function_index.sleep(10).then(() => {
        scrolling.value = false;
      });
      let scrollTopNum = 0;
      const len = children.value.length;
      let childrenItems = [];
      const header = yield getHeaderRect();
      let top = (_a2 = header.height) !== null && _a2 !== void 0 ? _a2 : 0;
      childrenItems = children.value.map((item, index) => {
        let itemRefs = item.$callMethod("getRefs");
        const childHeight = itemRefs["height"] + parseInt(uni_modules_uviewUltra_libs_function_index.getPx(props.itemMargin));
        const child = new UPIndexListChildrenItemType({
          height: childHeight,
          top
        });
        top = top + childHeight;
        return child;
      });
      scrollTopNum = e.detail.scrollTop;
      scrollTopNum = scrollTopNum + parseInt(uni_modules_uviewUltra_libs_function_index.getPx(props.customNavHeight));
      for (let i = 0; i < len; i++) {
        const item = childrenItems[i];
        let nextItem = null;
        if (i < childrenItems.length - 1) {
          nextItem = childrenItems[i + 1];
        }
        if (scrollTopNum <= childrenItems[0].top || scrollTopNum >= childrenItems[len - 1].top + childrenItems[len - 1].height) {
          activeIndex.value = -1;
          break;
        } else if (nextItem == null) {
          activeIndex.value = len - 1;
          break;
        } else if (scrollTopNum > item.top && scrollTopNum < nextItem.top) {
          activeIndex.value = i;
          break;
        }
      }
    });
  };
  common_vendor.onMounted(() => {
    init();
    uni_modules_uviewUltra_libs_function_index.sleep(50).then(() => {
      setIndexListLetterInfo();
    });
    anchors.value = [];
    sys.value = uni_modules_uviewUltra_libs_function_index.getWindowInfo();
  });
  const getItemStyle = (index) => {
    const style = new UTSJSONObject({});
    if (activeIndex.value === index && props.activeColor !== "#5677fc") {
      style["backgroundColor"] = props.activeColor;
    }
    return style;
  };
  const addAnchors = function(anchorIns) {
    anchors.value.push(anchorIns);
  };
  const getProps = function() {
    return new UTSJSONObject({});
  };
  const getRefs = function() {
    return new UTSJSONObject({});
  };
  __expose({
    addAnchors,
    getChildren,
    addChild,
    getProps,
    getRefs
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.$slots["header"] != null
    }, _ctx.$slots["header"] != null ? {} : {}, {
      b: _ctx.$slots["footer"] != null
    }, _ctx.$slots["footer"] != null ? {} : {}, {
      c: common_vendor.sei("r0-12381c23", "scroll-view", "up-index-list__scroll-view"),
      d: scrollTop.value,
      e: scrollIntoView.value,
      f: common_vendor.o(scrollHandler, "f3"),
      g: common_vendor.f(uIndexList.value, (item, index, i0) => {
        return {
          a: common_vendor.t(keyVal(item)),
          b: activeIndex.value === index ? "#fff" : __props.inactiveColor,
          c: activeIndex.value === index && __props.activeColor === "#5677fc" ? 1 : "",
          d: index,
          e: common_vendor.s(getItemStyle(index))
        };
      }),
      h: common_vendor.sei("r1-12381c23", "view", "up-index-list__letter"),
      i: _ctx.$up.addUnit(letterInfo.value["top"] ?? ""),
      j: common_vendor.o(touchStart, "95"),
      k: common_vendor.o(touchMove, "92"),
      l: common_vendor.o(touchEnd, "67"),
      m: common_vendor.o(touchEnd, "48"),
      n: common_vendor.t(activeIndex.value >= 0 ? keyVal(uIndexList.value[activeIndex.value]) : ""),
      o: _ctx.$up.addUnit(indicatorHeight.value),
      p: _ctx.$up.addUnit(indicatorHeight.value),
      q: common_vendor.p({
        mode: "fade",
        show: touching.value,
        customStyle: {
          position: "absolute",
          right: "30px",
          top: _ctx.$up.addUnit(indicatorTop.value, "px"),
          width: _ctx.$up.addUnit(indicatorHeight.value + 10),
          zIndex: 3
        },
        class: "data-v-12381c23"
      }),
      r: common_vendor.sei(common_vendor.gei(_ctx, "", "r2-12381c23"), "view", "up-index-list"),
      s: `${_ctx.u_s_b_h}px`,
      t: `${_ctx.u_s_a_i_b}px`,
      v: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-12381c23"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-index-list/up-index-list.js.map
