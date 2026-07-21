import { _ as __easycom_35 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, renderSlot, Fragment, renderList, createVNode, createCommentVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_38 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-badge/up-badge&";
import { p as propsTabs } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-tabs/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { b as badgeProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-badge/badge&";
import { a as addUnit, b as addStyle, d as deepMerge, g as getPx, s as sleep, e as getWindowInfo } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-tabs",
  // slots: Object as SlotsType<{
  //     content: { item: UTSJSONObject, keyName: string, index: number }
  //     default: { item: UTSJSONObject, keyName: string, index: number }
  //     icon: { item: UTSJSONObject, keyName: string, index: number }
  // }>,
  mixins: [mpMixin, mixin, propsTabs],
  data() {
    return {
      firstTime: true,
      scrollLeft: 0,
      scrollViewWidth: 0,
      lineOffsetLeft: 0,
      tabsRect: {
        left: 0,
        right: 0
      },
      innerCurrent: 0,
      moving: false,
      retryCount: 0,
      itemRects: []
    };
  },
  watch: {
    current: {
      immediate: true,
      handler(newValue) {
        if (newValue != this.innerCurrent) {
          if (typeof newValue == "string") {
            this.innerCurrent = parseInt(newValue);
          } else {
            this.innerCurrent = newValue;
          }
          this.$nextTick(() => {
            var _a;
            const hasRect = this.itemRects.length > 0 && this.itemRects.length === this.list.length && ((_a = this.itemRects[0].width) !== null && _a !== void 0 ? _a : 0) > 0;
            if (hasRect) {
              this.setLineLeft();
              this.setScrollLeft();
            } else {
              this.resize();
            }
          });
        }
      }
    },
    // list变化时，重新渲染list各项信息
    list(newValue, oldValue = null) {
      if (oldValue != null && this.isListEqual(newValue, oldValue)) {
        return null;
      }
      this.$nextTick(() => {
        this.resize();
      });
    }
  },
  computed: {
    propsBadge() {
      return badgeProps["badge"];
    },
    lineStyle() {
      const style = new UTSJSONObject({});
      style["width"] = addUnit(this.lineWidth);
      style["transform"] = "translateX(" + this.lineOffsetLeft + "px)";
      style["transitionDuration"] = `${this.firstTime ? 0 : this.duration}ms`;
      style["height"] = addUnit(this.lineHeight);
      style["backgroundSize"] = this.lineBgSize;
      if (this.lineColor != "#3c9cff") {
        style["backgroundColor"] = this.lineColor;
      }
      return style;
    }
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
  },
  emits: ["click", "longPress", "change", "update:current"],
  methods: {
    addStyle(val = null) {
      return addStyle(val);
    },
    addUnit(val = null) {
      return addUnit(val);
    },
    getShowValue(itemObj) {
      if (itemObj["badge"] != null) {
        let itemObjBadge = itemObj["badge"];
        if (itemObjBadge["show"] != null && itemObjBadge["show"] || itemObjBadge["isDot"] != null && itemObjBadge["isDot"] || itemObjBadge["value"] != null) {
          return true;
        }
      }
      return false;
    },
    getBadgePropValue(itemObj, name) {
      if (itemObj != null && itemObj["badge"] != null) {
        let itemObjBadge = itemObj["badge"];
        if (itemObjBadge != null && itemObjBadge[name] != null) {
          return itemObjBadge[name] != null ? itemObjBadge[name] : "";
        } else {
          return this.propsBadge != null && this.propsBadge[name] != null ? this.propsBadge[name] : "";
        }
      }
      return "";
    },
    textStyle(index) {
      const style = new UTSJSONObject(
        {}
        // 取当期是否激活的样式
      );
      const customeStyle = index == this.innerCurrent ? addStyle(this.activeStyle) : addStyle(this.inactiveStyle);
      if (this.list[index]["disabled"] != null && this.list[index]["disabled"]) {
        style["color"] = "#c8c9cc";
      }
      return deepMerge(customeStyle, style);
    },
    isListEqual(list1, list2) {
      if (list1.length != list2.length) {
        return false;
      }
      for (let i = 0; i < list1.length; i++) {
        const item1 = list1[i];
        const item2 = list2[i];
        if (item1[this.keyName] != item2[this.keyName]) {
          return false;
        }
      }
      return true;
    },
    setLineLeft() {
      var _a;
      if (this.itemRects.length <= this.innerCurrent) {
        return null;
      }
      const tabItem = this.itemRects[this.innerCurrent];
      if (tabItem == null) {
        return null;
      }
      let lineOffsetLeft = this.itemRects.slice(0, this.innerCurrent).reduce((total, curr) => {
        var _a2;
        return total + ((_a2 = curr.width) !== null && _a2 !== void 0 ? _a2 : 0);
      }, 0);
      const lineWidth = parseFloat(getPx(this.lineWidth));
      const tabWidth = (_a = tabItem.width) !== null && _a !== void 0 ? _a : 0;
      const offset = tabWidth > 0 ? (tabWidth - lineWidth) / 2 : 0;
      this.lineOffsetLeft = lineOffsetLeft + offset;
      if (this.firstTime) {
        setTimeout(() => {
          this.firstTime = false;
        }, 30);
      }
    },
    // 点击某一个标签
    clickHandler(item = null, index) {
      this.$emit("click", new UTSJSONObject({
        ...item,
        index
      }), index);
      if (item["disabled"] != null && item["disabled"])
        return null;
      if (this.innerCurrent == index)
        return null;
      this.innerCurrent = index;
      this.$nextTick(() => {
        var _a;
        const hasRect = this.itemRects.length > 0 && this.itemRects.length === this.list.length && ((_a = this.itemRects[0].width) !== null && _a !== void 0 ? _a : 0) > 0;
        if (hasRect) {
          this.setLineLeft();
          this.setScrollLeft();
        } else {
          this.resize();
        }
      });
      this.$emit("update:current", index);
      this.$emit("change", new UTSJSONObject({
        ...item,
        index
      }), index);
    },
    // 长按事件
    longPressHandler(item, index) {
      this.$emit("longPress", new UTSJSONObject({
        ...item,
        index
      }));
    },
    init() {
      this.retryCount = 0;
      sleep(30).then(() => {
        this.resize();
      });
    },
    setScrollLeft() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;
      if (this.innerCurrent < 0) {
        this.innerCurrent = 0;
      }
      if (this.itemRects.length <= this.innerCurrent) {
        return null;
      }
      const tabRect = this.itemRects[this.innerCurrent];
      if (tabRect == null) {
        return null;
      }
      const offsetLeft = this.itemRects.slice(0, this.innerCurrent).reduce((total, curr) => {
        var _a2;
        return total + ((_a2 = curr.width) !== null && _a2 !== void 0 ? _a2 : 0);
      }, 0);
      const windowWidth = getWindowInfo().windowWidth;
      let scrollLeft = offsetLeft - (((_b = (_a = this.tabsRect) === null || _a === void 0 ? null : _a.width) !== null && _b !== void 0 ? _b : 0) - ((_c = tabRect.width) !== null && _c !== void 0 ? _c : 0)) / 2 - (windowWidth - ((_e = (_d = this.tabsRect) === null || _d === void 0 ? null : _d.right) !== null && _e !== void 0 ? _e : 0)) / 2 + ((_g = (_f = this.tabsRect) === null || _f === void 0 ? null : _f.left) !== null && _g !== void 0 ? _g : 0) / 2;
      scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - ((_j = (_h = this.tabsRect) === null || _h === void 0 ? null : _h.width) !== null && _j !== void 0 ? _j : 0));
      this.scrollLeft = Math.max(0, scrollLeft);
    },
    // 获取所有标签的尺寸
    resize() {
      if (this.$props["list"].length == 0) {
        return null;
      }
      Promise.all([this.getTabsRect(), this.getAllItemRect()]).then((res) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        let tabsRect = res[0][0];
        let itemRect = res[1];
        const firstWidth = itemRect.length > 0 && itemRect[0] != null ? (_a = itemRect[0].width) !== null && _a !== void 0 ? _a : 0 : 0;
        let minWidthExpected = 30;
        if (this.list.length > 0) {
          const firstItemName = this.list[0][this.keyName];
          if (firstItemName != null) {
            const nameStr = firstItemName.toString();
            minWidthExpected = nameStr.length * 12 + 20;
          }
        }
        if (firstWidth < minWidthExpected && this.retryCount < 5) {
          this.retryCount++;
          setTimeout(() => {
            this.resize();
          }, 50);
          return null;
        }
        if (((_b = tabsRect.left) !== null && _b !== void 0 ? _b : 0) > ((_c = tabsRect.width) !== null && _c !== void 0 ? _c : 0)) {
          tabsRect.right = ((_d = tabsRect.right) !== null && _d !== void 0 ? _d : 0) - Math.floor(((_e = tabsRect === null || tabsRect === void 0 ? null : tabsRect.left) !== null && _e !== void 0 ? _e : 0) / ((_f = tabsRect === null || tabsRect === void 0 ? null : tabsRect.width) !== null && _f !== void 0 ? _f : 0)) * ((_g = tabsRect === null || tabsRect === void 0 ? null : tabsRect.width) !== null && _g !== void 0 ? _g : 0);
          tabsRect.left = ((_h = tabsRect.left) !== null && _h !== void 0 ? _h : 0) % ((_j = tabsRect.width) !== null && _j !== void 0 ? _j : 1);
        }
        this.tabsRect = tabsRect;
        this.itemRects = itemRect;
        this.scrollViewWidth = 0;
        itemRect.map((item, index) => {
          var _a2;
          if (item != null) {
            this.scrollViewWidth = this.scrollViewWidth + ((_a2 = item.width) !== null && _a2 !== void 0 ? _a2 : 0);
            this.list[index]["rect"] = item;
          }
        });
        this.setLineLeft();
        this.setScrollLeft();
      });
    },
    // 获取导航菜单的尺寸
    getTabsRect() {
      return new Promise((resolve) => {
        this.queryRect("up-tabs__wrapper__scroll-view").then((size) => {
          resolve([size]);
        });
      });
    },
    // 获取所有标签的尺寸
    getAllItemRect() {
      return new Promise((resolve) => {
        const promiseAllArr = this.$props["list"].map((item, index) => {
          return this.queryRect(`up-tabs__wrapper__nav__item-${index}`);
        });
        Promise.all(promiseAllArr).then((sizes) => {
          return resolve(sizes);
        });
      });
    },
    // 获取各个标签的尺寸
    queryRect(el) {
      return new Promise((resolve) => {
        this.upGetRect(`.${el}`).then((size) => {
          resolve(size);
        });
      });
    }
  }
});
const _style_0 = { "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "width": "100%" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "height": "100%" } }, "up-tabs__wrapper__nav__item": { "": { "paddingTop": 0, "paddingRight": 11, "paddingBottom": 0, "paddingLeft": 11, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "flexShrink": 0, "height": "100%" } }, "up-tabs__wrapper__nav__item__text": { "": { "fontSize": 15, "color": "#606266", "!whiteSpace": "nowrap" } }, "up-tabs__wrapper__nav__item__text--disabled": { "": { "!color": "#c8c9cc" } }, "up-tabs__wrapper__nav__line": { "": { "height": 3, "backgroundColor": "var(--theme-color, #0957de)", "width": 30, "position": "absolute", "bottom": 2, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "transitionProperty": "transform", "transitionDuration": "300ms" } }, "@TRANSITION": { "up-tabs__wrapper__nav__line": { "property": "transform", "duration": "300ms" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  const _component_up_badge = resolveEasycom(resolveDynamicComponent("up-badge"), __easycom_38);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-tabs", [_ctx.customClass]])
    },
    [
      createElementVNode(
        "view",
        {
          class: "up-tabs__wrapper",
          style: normalizeStyle({ height: $options.addUnit(_ctx.height) })
        },
        [
          renderSlot(_ctx.$slots, "left"),
          createElementVNode("view", { class: "up-tabs__wrapper__scroll-view-wrapper" }, [
            createElementVNode("scroll-view", {
              direction: "horizontal",
              "scroll-x": _ctx.scrollable,
              "enable-flex": true,
              "scroll-left": $data.scrollLeft,
              "scroll-with-animation": "",
              class: "up-tabs__wrapper__scroll-view",
              "show-scrollbar": false,
              ref: "up-tabs__wrapper__scroll-view",
              style: normalizeStyle({ height: $options.addUnit(_ctx.height) })
            }, [
              createElementVNode(
                "view",
                {
                  class: "up-tabs__wrapper__nav",
                  ref: "up-tabs__wrapper__nav",
                  style: normalizeStyle({ height: $options.addUnit(_ctx.height) })
                },
                [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(_ctx.list, (item, index) => {
                      return openBlock(), createElementBlock("view", {
                        class: normalizeClass(["up-tabs__wrapper__nav__item", [
                          `up-tabs__wrapper__nav__item-${index}`,
                          item["disabled"] != null && item["disabled"] ? "up-tabs__wrapper__nav__item--disabled" : "",
                          $data.innerCurrent == index ? "up-tabs__wrapper__nav__item-active" : ""
                        ]]),
                        key: index,
                        onClick: ($event) => $options.clickHandler(item, index),
                        onLongpress: ($event) => $options.longPressHandler(item, index),
                        ref_for: true,
                        ref: `up-tabs__wrapper__nav__item-${index}`,
                        style: normalizeStyle([$options.addStyle(_ctx.itemStyle), { flex: _ctx.scrollable ? "none" : "1" }])
                      }, [
                        _ctx.$slots["icon"] ? renderSlot(_ctx.$slots, "icon", {
                          key: 0,
                          item,
                          keyName: _ctx.keyName,
                          index
                        }) : (openBlock(), createElementBlock(
                          Fragment,
                          { key: 1 },
                          [
                            item.icon ? (openBlock(), createElementBlock("view", {
                              key: 0,
                              class: "up-tabs__wrapper__nav__item__prefix-icon"
                            }, [
                              createVNode(_component_up_icon, {
                                name: item["icon"],
                                customStyle: $options.addStyle(_ctx.iconStyle)
                              }, null, 8, ["name", "customStyle"])
                            ])) : createCommentVNode("v-if", true)
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )),
                        _ctx.$slots["content"] != null ? renderSlot(_ctx.$slots, "content", {
                          key: 2,
                          item,
                          keyName: _ctx.keyName,
                          index
                        }) : _ctx.$slots["content"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null) ? renderSlot(_ctx.$slots, "default", {
                          key: 3,
                          item,
                          keyName: _ctx.keyName,
                          index
                        }) : (openBlock(), createElementBlock(
                          "text",
                          {
                            key: 4,
                            class: normalizeClass([[item["disabled"] != null && item["disabled"] ? "up-tabs__wrapper__nav__item__text--disabled" : ""], "up-tabs__wrapper__nav__item__text"]),
                            style: normalizeStyle([$options.textStyle(index)])
                          },
                          toDisplayString(item[_ctx.keyName]),
                          7
                          /* TEXT, CLASS, STYLE */
                        )),
                        createVNode(_component_up_badge, {
                          show: $options.getShowValue(item),
                          isDot: $options.getBadgePropValue(item, "isDot"),
                          value: $options.getBadgePropValue(item, "value"),
                          max: $options.getBadgePropValue(item, "max"),
                          type: $options.getBadgePropValue(item, "type"),
                          showZero: $options.getBadgePropValue(item, "showZero"),
                          bgColor: $options.getBadgePropValue(item, "bgColor"),
                          color: $options.getBadgePropValue(item, "color"),
                          shape: $options.getBadgePropValue(item, "shape"),
                          numberType: $options.getBadgePropValue(item, "numberType"),
                          inverted: $options.getBadgePropValue(item, "inverted"),
                          customStyle: "margin-left: 4px;"
                        }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
                      ], 46, ["onClick", "onLongpress"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  createElementVNode(
                    "view",
                    {
                      class: "up-tabs__wrapper__nav__line",
                      ref: "up-tabs__wrapper__nav__line",
                      style: normalizeStyle($options.lineStyle)
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ],
                4
                /* STYLE */
              )
            ], 12, ["scroll-x", "scroll-left"])
          ]),
          renderSlot(_ctx.$slots, "right")
        ],
        4
        /* STYLE */
      )
    ],
    2
    /* CLASS */
  );
}
const __easycom_17 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue"]]);
export {
  __easycom_17 as _
};
//# sourceMappingURL=up-tabs.js.map
