import { _ as __easycom_1 } from "../up-index-anchor/up-index-anchor.js";
import { _ as __easycom_1$1 } from "../up-transition/up-transition.js";
import { s as sleep, e as getWindowInfo, g as getPx, u as upGetRect } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { d as defProps } from "./indexList.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataAttr: _setSharedDataAttr, toSharedDataNumber: _toSharedDataNumber, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, setSharedDataTemplateRef: _setSharedDataTemplateRef, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataClass: _setSharedDataClass, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpIndexListUpIndexList";
const { ref, computed, watch, onMounted, getCurrentInstance } = globalThis.Vue;
class UPIndexListChildrenItemType extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.height = this.__props__.height;
    this.top = this.__props__.top;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-index-list"
  },
  __dynamicSharedData: true,
  __hash: "2dbdfa3e",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-index-list/up-index-list.uvue",
  __name: "up-index-list",
  props: {
    inactiveColor: {
      type: String,
      default: defProps.getString("indexList.inactiveColor")
    },
    activeColor: {
      type: String,
      default: defProps.getString("indexList.activeColor")
    },
    indexList: {
      type: Array,
      default: () => {
        const list = [];
        defProps.getArray("indexList.indexList").forEach((item) => {
          list.push(item);
        });
        return list;
      }
    },
    sticky: {
      type: Boolean,
      default: defProps.getBoolean("indexList.sticky")
    },
    customNavHeight: {
      type: [String, Number],
      default: defProps.getNumber("indexList.customNavHeight")
    },
    safeBottomFix: {
      type: Boolean,
      default: defProps.getBoolean("indexList.safeBottomFix")
    },
    itemMargin: {
      type: [String],
      default: defProps.getString("indexList.itemMargin")
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpIndexListUpIndexListSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(), children = _b.children, addChild = _b.addChild, getChildren = _b.getChildren;
    const instance = getCurrentInstance().proxy;
    const indexList = () => {
      const indexListArray = [];
      const charCodeOfA = "A".charCodeAt(0);
      for (let i = 0; i < 26; i++) {
        indexListArray.push(String.fromCharCode(charCodeOfA + i));
      }
      return indexListArray;
    };
    const props = __props;
    const activeIndex = ref(-1);
    const touching = ref(false);
    const scrollTop = ref(0);
    const scrollIntoView = ref("");
    const indicatorHeight = ref(50);
    const anchors = ref([]);
    const indicatorText = ref("");
    const letterInfo = ref(new UTSJSONObject({
      height: 0,
      itemHeight: 0,
      top: 0
    }));
    const pageY = ref(0);
    const topOffset = ref(0);
    const sys = ref(null);
    const scrollViewHeight = ref(0);
    const scrolling = ref(false);
    const uIndexList = computed(() => {
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
        upGetRect(".up-index-list__letter", false, instance).then((size) => {
          resolve(size);
        });
      });
    };
    const setIndexListLetterInfo = () => {
      getIndexListLetterRect().then((size) => {
        const height = size.height;
        const sysData = getWindowInfo();
        sysData.windowHeight;
        let customNavHeight = 0;
        if (props.customNavHeight == 0) {
          customNavHeight = -(sysData.statusBarHeight + 44);
        } else {
          customNavHeight = parseInt(getPx(props.customNavHeight));
        }
        const scrollHeight = scrollViewHeight.value > 0 ? scrollViewHeight.value : sysData.windowHeight - customNavHeight;
        letterInfo.value = new UTSJSONObject({
          height: height !== null && height !== void 0 ? height : 0,
          // 为了让字母列表对屏幕绝对居中，让其对导航栏进行修正，也即往上偏移导航栏的一半高度
          top: scrollHeight / 2,
          itemHeight: Math.floor((height !== null && height !== void 0 ? height : 0) / uIndexList.value.length)
        });
      });
    };
    const indicatorTop = computed(() => {
      let top = letterInfo.value["top"];
      let height = letterInfo.value["height"];
      let itemHeight = letterInfo.value["itemHeight"];
      return Math.floor(top - height / 2 + itemHeight * activeIndex.value + itemHeight - 70 / 2);
    });
    watch(() => {
      return uIndexList.value;
    }, () => {
      sleep(30).then(() => {
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
        upGetRect(".up-index-list__scroll-view", false, instance).then((size) => {
          resolve(size);
        });
      });
    }
    const init = () => {
      let customNavHeight = getPx(props.customNavHeight);
      sys.value = getWindowInfo();
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
        upGetRect(".up-index-list__header", false, instance).then((size) => {
          resolve(size);
        });
      });
    };
    const setValueForTouch = async (currentIndex) => {
      var _a2, _b2, _c;
      if (currentIndex !== activeIndex.value) {
        activeIndex.value = currentIndex;
        indicatorText.value = keyVal(uIndexList.value[currentIndex]);
        let tmpId = keyVal(uIndexList.value[currentIndex]).charCodeAt(0).toString();
        scrollIntoView.value = `up-index-item-${tmpId}`;
        uni.__f__("log", "at uni_modules/uview-ultra/components/up-index-list/up-index-list.uvue:318", scrollIntoView.value);
        const customNavHeight = props.customNavHeight;
        const header = await getHeaderRect();
        let top_1 = (_a2 = header.height) !== null && _a2 !== void 0 ? _a2 : 0;
        let childrenItems = children.value.map((item, index) => {
          let itemRefs = item.$callMethod("getRefs");
          const childHeight = itemRefs["height"] + parseFloat(getPx(props.itemMargin));
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
          scrollTop.value = ((_c = childrenItems[currentIndex].top) !== null && _c !== void 0 ? _c : 0) - parseFloat(getPx(customNavHeight));
        }
      }
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
      sleep(300).then(() => {
        touching.value = false;
        scrollIntoView.value = "";
      });
    };
    const scrollHandler = async (e) => {
      var _a2;
      if (touching.value || scrolling.value)
        return Promise.resolve(null);
      scrolling.value = true;
      sleep(10).then(() => {
        scrolling.value = false;
      });
      let scrollTopNum = 0;
      const len = children.value.length;
      let childrenItems = [];
      const header = await getHeaderRect();
      let top = (_a2 = header.height) !== null && _a2 !== void 0 ? _a2 : 0;
      childrenItems = children.value.map((item, index) => {
        let itemRefs = item.$callMethod("getRefs");
        const childHeight = itemRefs["height"] + parseInt(getPx(props.itemMargin));
        const child = new UPIndexListChildrenItemType({
          height: childHeight,
          top
        });
        top = top + childHeight;
        return child;
      });
      scrollTopNum = e.detail.scrollTop;
      scrollTopNum = scrollTopNum + parseInt(getPx(props.customNavHeight));
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
    };
    onMounted(() => {
      init();
      sleep(50).then(() => {
        setIndexListLetterInfo();
      });
      anchors.value = [];
      sys.value = getWindowInfo();
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
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_index_anchor = __easycom_1;
      const _component_up_transition = __easycom_1$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.sticky && activeIndex.value >= 0 && activeIndex.value < uIndexList.value.length));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_up_index_anchor, "9ac47056", { text: () => {
          return keyVal(uIndexList.value[activeIndex.value]);
        } });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      _renderSharedDataEffect(() => {
        _setSharedDataAttr(__sharedData, 18, _toSharedDataNumber(scrollTop.value));
        _setSharedDataAttr(__sharedData, 19, _toSharedDataString(scrollIntoView.value));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 6, _toSharedDataBoolean($slots["header"] != null));
      }, () => {
        _createSharedDataSlot("header", null, null);
      });
      _createSharedDataSlot("default", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 7, _toSharedDataBoolean($slots["footer"] != null));
      }, () => {
        _createSharedDataSlot("footer", null, null);
      });
      _setSharedDataEvent(__sharedData, 9, scrollHandler);
      _setSharedDataStyle(__sharedData, 10, {
        flex: 1
      });
      _setSharedDataTemplateRef(__sharedData, 11, (n13) => {
        _setTemplateRef(n13, "up-index-list__scroll-view");
      });
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 20, { top: $up.addUnit(letterInfo.value["top"] ?? ""), transform: "translateY(-50%)" });
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 8, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return uIndexList.value;
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          const _activeIndex = activeIndex.value;
          const _index = _for_key0.value;
          _setSharedDataClass(__sharedData_VFor0, 1, ["up-index-list__letter__item", { "up-index-list__letter__item--active": _activeIndex === _index && __props.activeColor === "#5677fc" }]);
          _setSharedDataStyle(__sharedData_VFor0, 2, getItemStyle(_index));
          _setSharedDataStyle(__sharedData_VFor0, 3, { color: _activeIndex === _index ? "#fff" : __props.inactiveColor });
          _setSharedData(__sharedData_VFor0, 4, _toDisplayString(keyVal(_for_item0.value)));
        });
        return null;
      }, (__sharedData_VFor0, item, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      _setSharedDataEvent(__sharedData, 12, touchStart);
      _setSharedDataEvent(__sharedData, 13, touchMove);
      _setSharedDataEvent(__sharedData, 14, touchEnd);
      _setSharedDataEvent(__sharedData, 15, touchEnd);
      _setSharedDataTemplateRef(__sharedData, 16, (n18) => {
        _setTemplateRef(n18, "up-index-list__letter");
      });
      const n21 = _createSharedDataComponentWithFallback(_component_up_transition, "bdcb46aa", {
        mode: "fade",
        show: () => {
          return touching.value;
        },
        customStyle: () => {
          return {
            position: "absolute",
            right: "30px",
            top: $up.addUnit(indicatorTop.value, "px"),
            width: $up.addUnit(indicatorHeight.value + 10),
            zIndex: 3
          };
        }
      }, {
        "default": () => {
          _setSharedDataClass(__sharedData, 3, ["up-index-list__indicator", ["up-index-list__indicator--show"]]);
          _renderSharedDataEffect(() => {
            const _$up = $up;
            const _indicatorHeight = indicatorHeight.value;
            const _activeIndex = activeIndex.value;
            _setSharedDataStyle(__sharedData, 4, {
              height: _$up.addUnit(_indicatorHeight),
              width: _$up.addUnit(_indicatorHeight)
            });
            _setSharedData(__sharedData, 5, _toDisplayString(_activeIndex >= 0 ? keyVal(uIndexList.value[_activeIndex]) : ""));
          });
        }
      });
      _setSharedData(__sharedData, 2, n21?.sharedData);
      _setSharedDataTemplateRef(__sharedData, 17, (n22) => {
        _setTemplateRef(n22, "up-index-list");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-index-list.js.map
