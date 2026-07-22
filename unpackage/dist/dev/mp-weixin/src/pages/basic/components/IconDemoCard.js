"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons_1 = common_vendor.resolveComponent("uni-icons");
  const _easycom_l_icon_1 = common_vendor.resolveComponent("l-icon");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  (_easycom_uni_icons_1 + _easycom_l_icon_1 + _easycom_up_icon_1)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_l_icon = () => "../../../../uni_modules/lime-icon/components/l-icon/l-icon.js";
const _easycom_up_icon = () => "../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_l_icon + _easycom_up_icon + common_vendor.unref(Card))();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "IconDemoCard",
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          type: "contact",
          size: "26",
          style: "color:#3b82f6;margin-right:8px"
        }),
        b: common_vendor.p({
          name: "circle",
          size: "24",
          style: "color:#10b981;margin-right:8px"
        }),
        c: common_vendor.p({
          name: "setting",
          size: "24",
          style: "color:#a855f7;margin-right:8px"
        }),
        d: common_vendor.gei(_ctx, ""),
        e: common_vendor.p({
          title: "字体图标示例",
          id: common_vendor.gei(_ctx, "")
        }),
        f: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/IconDemoCard.js.map
