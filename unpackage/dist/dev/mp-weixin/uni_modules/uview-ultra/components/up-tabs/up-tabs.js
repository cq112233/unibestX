"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upTabs_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_components_upBadge_badge = require("../up-badge/badge.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-tabs",
  // slots: Object as SlotsType<{
  //     content: { item: UTSJSONObject, keyName: string, index: number }
  //     default: { item: UTSJSONObject, keyName: string, index: number }
  //     icon: { item: UTSJSONObject, keyName: string, index: number }
  // }>,
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upTabs_props.propsTabs],
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
      return uni_modules_uviewUltra_components_upBadge_badge.badgeProps["badge"];
    },
    lineStyle() {
      const style = new UTSJSONObject({});
      style["width"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.lineWidth);
      style["transform"] = "translateX(" + this.lineOffsetLeft + "px)";
      style["transitionDuration"] = `${this.firstTime ? 0 : this.duration}ms`;
      style["height"] = uni_modules_uviewUltra_libs_function_index.addUnit(this.lineHeight);
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
      return uni_modules_uviewUltra_libs_function_index.addStyle(val);
    },
    addUnit(val = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(val);
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
      const customeStyle = index == this.innerCurrent ? uni_modules_uviewUltra_libs_function_index.addStyle(this.activeStyle) : uni_modules_uviewUltra_libs_function_index.addStyle(this.inactiveStyle);
      if (this.list[index]["disabled"] != null && this.list[index]["disabled"]) {
        style["color"] = "#c8c9cc";
      }
      return uni_modules_uviewUltra_libs_function_index.deepMerge(customeStyle, style);
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
      const lineWidth = parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(this.lineWidth));
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
      this.$emit("click", new UTSJSONObject(Object.assign(Object.assign({}, item), { index })), index);
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
      this.$emit("change", new UTSJSONObject(Object.assign(Object.assign({}, item), { index })), index);
    },
    // 长按事件
    longPressHandler(item, index) {
      this.$emit("longPress", new UTSJSONObject(Object.assign(Object.assign({}, item), { index })));
    },
    init() {
      this.retryCount = 0;
      uni_modules_uviewUltra_libs_function_index.sleep(30).then(() => {
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
      const windowWidth = uni_modules_uviewUltra_libs_function_index.getWindowInfo().windowWidth;
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
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_badge2 = common_vendor.resolveComponent("up-badge");
  (_easycom_up_icon2 + _easycom_up_badge2)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_badge = () => "../up-badge/up-badge.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_badge)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.f(_ctx.list, (item, index, i0) => {
      return common_vendor.e(_ctx.$slots["icon"] ? {
        a: "icon-" + i0,
        b: common_vendor.r("icon", {
          item,
          keyName: _ctx.keyName,
          index
        }, i0)
      } : common_vendor.e({
        c: item.icon
      }, item.icon ? {
        d: "518f641c-0-" + i0,
        e: common_vendor.p({
          name: item["icon"],
          customStyle: $options.addStyle(_ctx.iconStyle),
          class: "data-v-518f641c"
        })
      } : {}), _ctx.$slots["content"] != null ? {
        f: "content-" + i0,
        g: common_vendor.r("content", {
          item,
          keyName: _ctx.keyName,
          index
        }, i0)
      } : _ctx.$slots["content"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null) ? {
        h: "d-" + i0,
        i: common_vendor.r("d", {
          item,
          keyName: _ctx.keyName,
          index
        }, i0)
      } : {
        j: common_vendor.t(item[_ctx.keyName]),
        k: common_vendor.n(item["disabled"] != null && item["disabled"] ? "up-tabs__wrapper__nav__item__text--disabled" : ""),
        l: common_vendor.s($options.textStyle(index))
      }, {
        m: "518f641c-1-" + i0,
        n: common_vendor.p({
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
          customStyle: "margin-left: 4px;",
          class: "data-v-518f641c"
        }),
        o: common_vendor.sei("r0-518f641c-" + index, "view", `up-tabs__wrapper__nav__item-${index}`, {
          "f": 1
        }),
        p: index,
        q: common_vendor.o(($event) => $options.clickHandler(item, index), index),
        r: common_vendor.o(($event) => $options.longPressHandler(item, index), index),
        s: `up-tabs__wrapper__nav__item-${index}`,
        t: common_vendor.n(`up-tabs__wrapper__nav__item-${index}`),
        v: common_vendor.n(item["disabled"] != null && item["disabled"] ? "up-tabs__wrapper__nav__item--disabled" : ""),
        w: common_vendor.n($data.innerCurrent == index ? "up-tabs__wrapper__nav__item-active" : "")
      });
    }),
    b: _ctx.$slots["icon"],
    c: _ctx.$slots["content"] != null,
    d: _ctx.$slots["content"] == null && (_ctx.$slots["default"] != null || _ctx.$slots["$default"] != null),
    e: common_vendor.s($options.addStyle(_ctx.itemStyle)),
    f: common_vendor.s({
      flex: _ctx.scrollable ? "none" : "1"
    }),
    g: common_vendor.sei("r1-518f641c", "view", "up-tabs__wrapper__nav__line"),
    h: common_vendor.s($options.lineStyle),
    i: common_vendor.sei("r2-518f641c", "view", "up-tabs__wrapper__nav"),
    j: $options.addUnit(_ctx.height),
    k: common_vendor.sei("r3-518f641c", "scroll-view", "up-tabs__wrapper__scroll-view"),
    l: _ctx.scrollable,
    m: $data.scrollLeft,
    n: $options.addUnit(_ctx.height),
    o: $options.addUnit(_ctx.height),
    p: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    q: common_vendor.n(_ctx.customClass),
    r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
    s: `${_ctx.u_s_b_h}px`,
    t: `${_ctx.u_s_a_i_b}px`
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-518f641c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tabs/up-tabs.js.map
