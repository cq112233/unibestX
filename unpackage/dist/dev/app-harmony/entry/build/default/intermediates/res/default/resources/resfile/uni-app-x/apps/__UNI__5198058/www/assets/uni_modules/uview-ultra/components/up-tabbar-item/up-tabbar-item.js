import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, nextTick, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, createBlock, Fragment, renderSlot, createVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-badge/up-badge.js";
import { p as propsTabbarItem } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { b as addStyle, f as error } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-tabbar-item",
  mixins: [mpMixin, mixin, propsTabbarItem],
  data() {
    return {
      isActive: false,
      routeSyncTimer: 0,
      routeSyncLast: "",
      parentData: new UTSJSONObject({
        value: null,
        activeColor: "",
        inactiveColor: ""
      })
    };
  },
  //  微信小程序中 options 选项
  options: {
    virtualHost: true
    //将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等
  },
  computed: {
    // 计算是否为中间按钮
    isMidButton() {
      return this.mode === "midButton";
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.startRouteSync();
  },
  beforeUnmount() {
    this.clearRouteSync();
  },
  emits: ["click", "change"],
  methods: {
    addStyle(val = null) {
      return addStyle(val);
    },
    clearRouteSync() {
      if (this.routeSyncTimer != null) {
        clearInterval(this.routeSyncTimer);
        this.routeSyncTimer = 0;
      }
    },
    getCurrentRoutePath() {
      const pages = getCurrentPages();
      if (pages == null || pages.length == 0)
        return "";
      const currentPage = pages[pages.length - 1];
      const route = currentPage != null && currentPage.route != null ? currentPage.route.toString() : "";
      if (route == "")
        return "";
      return route.startsWith("/") ? route : `/${route}`;
    },
    normalizeRoutePath(path) {
      return path.replace(/^[#\\/]+/, "");
    },
    syncActiveByRouteOrValue() {
      this.updateParentData();
      const index = this.getChildIndex(this);
      const name = this.name != null ? this.name : index;
      const routePath = this.getCurrentRoutePath();
      if (typeof name === "string" && routePath != "") {
        const isRouteMatch = this.normalizeRoutePath(name) == this.normalizeRoutePath(routePath);
        if (isRouteMatch) {
          this.isActive = true;
          return null;
        }
      }
      this.isActive = name === this.parentData["value"];
    },
    startRouteSync() {
      this.clearRouteSync();
      if (!(typeof this.name === "string" && this.name.indexOf("/") > -1))
        return null;
      this.routeSyncLast = this.getCurrentRoutePath();
      this.routeSyncTimer = setInterval(() => {
        const current = this.getCurrentRoutePath();
        if (current != this.routeSyncLast) {
          this.routeSyncLast = current;
          this.syncActiveByRouteOrValue();
        }
      }, 200);
    },
    init() {
      if (this.parent == null) {
        error("up-tabbar-item必须搭配up-tabbar组件使用");
      }
      this.syncActiveByRouteOrValue();
    },
    updateParentData() {
      this.getParentData("up-tabbar");
    },
    // 此方法将会被父组件up-tabbar调用
    updateFromParent() {
      this.init();
    },
    clickHandler() {
      nextTick(() => {
        const index = this.getChildIndex(this);
        const name = this.name != null ? this.name : index;
        if (this.parent != null && name.toString() != this.parent.$props["value"].toString()) {
          this.parent.$emit("change", name);
        }
        this.$emit("click", name);
      });
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabbar-item": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "width": "100%", "height": 50 } }, "up-tabbar-item__icon": { "": { "display": "flex", "flexDirection": "row", "position": "relative", "width": "150rpx", "justifyContent": "center" } }, "up-tabbar-item__text": { "": { "marginTop": 2, "fontSize": 12, "color": "#606266" } }, "up-tabbar-item--mid-button": { "": { "transform": "translateY(-10px)" } }, "up-tabbar-item--mid-button-cover": { "": { "backgroundColor": "#ffffff", "position": "absolute", "top": 22, "left": -10, "width": 90, "bottom": 0 } }, "up-tabbar-item__icon--mid-button": { "": { "width": 70, "height": 70, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#ffffff", "boxShadow": "0 0 10px rgba(0, 0, 0, 0.1)", "display": "flex", "alignItems": "center", "justifyContent": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_badge = resolveEasycom(resolveDynamicComponent("up-badge"), __easycom_1$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-tabbar-item", [$options.isMidButton ? "up-tabbar-item--mid-button" : ""]]),
      style: normalizeStyle([$options.addStyle(_ctx.customStyle)]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    },
    [
      createElementVNode(
        "view",
        {
          class: normalizeClass(["up-tabbar-item__icon", [$options.isMidButton ? "up-tabbar-item__icon--mid-button" : ""]])
        },
        [
          $options.isMidButton ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "up-tabbar-item--mid-button-cover"
          })) : createCommentVNode("v-if", true),
          _ctx.icon ? (openBlock(), createBlock(_component_up_icon, {
            key: 1,
            name: _ctx.icon,
            color: $data.isActive ? $data.parentData["activeColor"] : $data.parentData["inactiveColor"],
            size: $options.isMidButton ? 26 : 20
          }, null, 8, ["name", "color", "size"])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 2 },
            [
              $data.isActive ? renderSlot(_ctx.$slots, "active-icon", { key: 0 }) : renderSlot(_ctx.$slots, "inactive-icon", { key: 1 })
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          createVNode(_component_up_badge, {
            absolute: "",
            offset: [0, _ctx.dot ? "34rpx" : _ctx.badge != null && parseInt(_ctx.badge.toString()) > 9 ? "14rpx" : "20rpx"],
            customStyle: _ctx.badgeStyle,
            isDot: _ctx.dot,
            value: _ctx.badge != null ? _ctx.dot ? 1 : _ctx.badge : 0,
            show: _ctx.dot ? true : _ctx.badge != null ? parseInt(_ctx.badge.toString()) > 0 : false
          }, null, 8, ["offset", "customStyle", "isDot", "value", "show"])
        ],
        2
        /* CLASS */
      ),
      renderSlot(_ctx.$slots, "text", {}, () => [
        createElementVNode(
          "text",
          {
            class: "up-tabbar-item__text",
            style: normalizeStyle({
              color: $data.isActive ? $data.parentData["activeColor"] : $data.parentData["inactiveColor"]
            })
          },
          toDisplayString(_ctx.text),
          5
          /* TEXT, STYLE */
        )
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-tabbar-item.js.map
