import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor&";
const { defineComponent, getCurrentInstance, ref, computed, watch, onMounted, resolveDynamicComponent, openBlock, createElementBlock, createCommentVNode, createVNode, createElementVNode, renderSlot, normalizeStyle, Fragment, renderList, normalizeClass, toDisplayString, withCtx } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-transition/up-transition&";
import { s as sleep, e as getWindowInfo, g as getPx, u as upGetRect } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-index-list/indexList&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-index-list"
  },
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
    var __expose = _a.expose;
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
    const getIndexListScrollViewRect = () => {
      return new Promise((resolve) => {
        upGetRect(".up-index-list", false, instance).then((size) => {
          resolve(size);
        });
      });
    };
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
        letterInfo.value = {
          height: height !== null && height !== void 0 ? height : 0,
          // 为了让字母列表对屏幕绝对居中，让其对导航栏进行修正，也即往上偏移导航栏的一半高度
          top: scrollHeight / 2,
          itemHeight: Math.floor((height !== null && height !== void 0 ? height : 0) / uIndexList.value.length)
        };
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
        uni.__f__("log", "at uni_modules/uview-ultra/components/up-index-list/up-index-list.uvue:319", scrollIntoView.value);
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
    const __returned__ = { children, addChild, getChildren, instance, indexList, props, activeIndex, touching, scrollTop, scrollIntoView, indicatorHeight, anchors, indicatorText, letterInfo, pageY, topOffset, sys, scrollViewHeight, scrolling, uIndexList, getIndexListScrollViewRect, getIndexListLetterRect, setIndexListLetterInfo, indicatorTop, keyVal, getIndexListRect, init, getHeaderRect, setValueForTouch, getIndexListLetter, touchStart, touchMove, touchEnd, scrollHandler, getItemStyle, addAnchors, getProps, getRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-index-list": { "": { "position": "relative", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "column" } }, "up-index-list__letter": { "": { "position": "absolute", "right": 0, "zIndex": 3, "paddingTop": 0, "paddingRight": 6, "paddingBottom": 0, "paddingLeft": 6, "width": 30 } }, "up-index-list__letter__item": { "": { "width": 16, "height": 16, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "marginTop": 1, "marginRight": 0, "marginBottom": 1, "marginLeft": 0, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "up-index-list__letter__item--active": { "": { "backgroundColor": "var(--theme-color, #0957de)" } }, "up-index-list__letter__item__index": { "": { "fontSize": 12, "textAlign": "center", "lineHeight": "12px" } }, "up-index-list__indicator": { "": { "width": 50, "height": 50, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 0, "borderBottomLeftRadius": 100, "backgroundColor": "#c9c9c9", "transform": "rotate(-45deg)", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "up-index-list__indicator__text": { "": { "fontSize": 28, "lineHeight": "28px", "fontWeight": "bold", "color": "#ffffff", "transform": "rotate(45deg)", "textAlign": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_index_anchor = resolveEasycom(resolveDynamicComponent("up-index-anchor"), __easycom_1);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_1$1);
  return openBlock(), createElementBlock(
    "view",
    {
      ref: "up-index-list",
      class: "up-index-list"
    },
    [
      createCommentVNode(" 模拟吸顶锚点：在原生 App 端不支持 position: sticky 时作为平替方案 "),
      $props.sticky && $setup.activeIndex >= 0 && $setup.activeIndex < $setup.uIndexList.length ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "up-index-list__sticky-header",
        style: { "position": "absolute", "top": "0", "left": "0", "right": "0", "z-index": "2" }
      }, [
        createVNode(_component_up_index_anchor, {
          text: $setup.keyVal($setup.uIndexList[$setup.activeIndex])
        }, null, 8, ["text"])
      ])) : createCommentVNode("v-if", true),
      createElementVNode("scroll-view", {
        "scroll-top": $setup.scrollTop,
        "scroll-into-view": $setup.scrollIntoView,
        style: {
          flex: 1
        },
        direction: "vertical",
        "scroll-y": true,
        onScroll: $setup.scrollHandler,
        ref: "up-index-list__scroll-view",
        class: "up-index-list__scroll-view"
      }, [
        _ctx.$slots["header"] != null ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "up-index-list__header"
        }, [
          renderSlot(_ctx.$slots, "header")
        ])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default"),
        _ctx.$slots["footer"] != null ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "up-index-list__footer"
        }, [
          renderSlot(_ctx.$slots, "footer")
        ])) : createCommentVNode("v-if", true)
      ], 40, ["scroll-top", "scroll-into-view"]),
      createElementVNode(
        "view",
        {
          class: "up-index-list__letter",
          ref: "up-index-list__letter",
          style: normalizeStyle({ top: _ctx.$up.addUnit($setup.letterInfo["top"] ?? ""), transform: "translateY(-50%)" }),
          onTouchstart: $setup.touchStart,
          onTouchmove: $setup.touchMove,
          onTouchend: $setup.touchEnd,
          onTouchcancel: $setup.touchEnd
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.uIndexList, (item, index) => {
              return openBlock(), createElementBlock(
                "view",
                {
                  class: normalizeClass(["up-index-list__letter__item", { "up-index-list__letter__item--active": $setup.activeIndex === index && $props.activeColor === "#5677fc" }]),
                  key: index,
                  style: normalizeStyle($setup.getItemStyle(index))
                },
                [
                  createElementVNode(
                    "text",
                    {
                      class: "up-index-list__letter__item__index",
                      style: normalizeStyle({ color: $setup.activeIndex === index ? "#fff" : $props.inactiveColor })
                    },
                    toDisplayString($setup.keyVal(item)),
                    5
                    /* TEXT, STYLE */
                  )
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        36
        /* STYLE, NEED_HYDRATION */
      ),
      createVNode(_component_up_transition, {
        mode: "fade",
        show: $setup.touching,
        customStyle: {
          position: "absolute",
          right: "30px",
          top: _ctx.$up.addUnit($setup.indicatorTop, "px"),
          width: _ctx.$up.addUnit($setup.indicatorHeight + 10),
          zIndex: 3
        }
      }, {
        default: withCtx(() => [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["up-index-list__indicator", ["up-index-list__indicator--show"]]),
              style: normalizeStyle({
                height: _ctx.$up.addUnit($setup.indicatorHeight),
                width: _ctx.$up.addUnit($setup.indicatorHeight)
              })
            },
            [
              createElementVNode(
                "text",
                { class: "up-index-list__indicator__text" },
                toDisplayString($setup.activeIndex >= 0 ? $setup.keyVal($setup.uIndexList[$setup.activeIndex]) : ""),
                1
                /* TEXT */
              )
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "customStyle"])
    ],
    512
    /* NEED_PATCH */
  );
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-index-list/up-index-list.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-index-list.js.map
