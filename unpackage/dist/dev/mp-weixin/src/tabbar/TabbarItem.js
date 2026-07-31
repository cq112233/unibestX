"use strict";
const common_vendor = require("../../common/vendor.js");
require("./types.js");
const src_tabbar_store = require("./store.js");
if (!Array) {
  const _easycom_uni_icons_1 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons_1();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const inactiveColor = "#999999";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TabbarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isBulge: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const tabbarItem = common_vendor.computed(() => {
      return props.item;
    });
    function getIcon() {
      if (src_tabbar_store.curIdx.value == props.index && tabbarItem.value.iconActive.length > 0) {
        return tabbarItem.value.iconActive;
      }
      return tabbarItem.value.icon;
    }
    function getActiveColor() {
      return src_tabbar_store.curIdx.value == props.index ? src_tabbar_store.themeColor.value : inactiveColor;
    }
    function isDotBadge() {
      return tabbarItem.value.badge != null && tabbarItem.value.badge == "dot";
    }
    function isNumberBadge() {
      return tabbarItem.value.badge != null && tabbarItem.value.badge != "dot";
    }
    function getBadgeText() {
      const badge = tabbarItem.value.badge;
      if (badge == null || badge == "dot")
        return "";
      if (typeof badge == "number") {
        const num = badge;
        if (num > 99)
          return "99+";
        return `${num}`;
      }
      return `${badge}`;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: props.isBulge
      }, props.isBulge ? {
        b: `${_ctx.u_s_b_h}px`,
        c: `${_ctx.u_s_a_i_b}px`
      } : common_vendor.e({
        d: common_vendor.unref(tabbarItem).iconType === "image"
      }, common_vendor.unref(tabbarItem).iconType === "image" ? {
        e: getIcon()
      } : {}, {
        f: common_vendor.unref(tabbarItem).iconType === "icon"
      }, common_vendor.unref(tabbarItem).iconType === "icon" ? {
        g: getActiveColor(),
        h: common_vendor.p({
          type: getIcon(),
          size: "24",
          style: common_vendor.normalizeStyle({
            color: getActiveColor()
          })
        })
      } : {}, {
        i: common_vendor.t(_ctx.$t(common_vendor.unref(tabbarItem).text)),
        j: getActiveColor(),
        k: isDotBadge()
      }, isDotBadge() ? {} : {}, {
        l: isNumberBadge()
      }, isNumberBadge() ? {
        m: common_vendor.t(getBadgeText())
      } : {}, {
        n: `${_ctx.u_s_b_h}px`,
        o: `${_ctx.u_s_a_i_b}px`
      }));
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/src/tabbar/TabbarItem.js.map
