"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_utils_i18n = require("../../../utils/i18n.js");
if (!Array) {
  const _easycom_uni_icons_1 = common_vendor.resolveComponent("uni-icons");
  const _easycom_l_icon_1 = common_vendor.resolveComponent("l-icon");
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  (_easycom_uni_icons_1 + _easycom_l_icon_1 + _easycom_rice_icon_1)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_l_icon = () => "../../../../uni_modules/lime-icon/components/l-icon/l-icon.js";
const _easycom_rice_icon = () => "../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_l_icon + _easycom_rice_icon + common_vendor.unref(Card))();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "IconDemoCard",
  setup(__props) {
    const cardTitle = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.iconDemoTitle");
    });
    const svgAuthWarning = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.svgAuthWarning");
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          type: "contact",
          size: "26",
          style: "color:#3b82f6;margin-right:8px"
        }),
        b: common_vendor.t(svgAuthWarning.value),
        c: common_vendor.p({
          name: "circle",
          size: "24",
          style: "color:#10b981;margin-right:8px"
        }),
        d: common_vendor.p({
          name: "search",
          size: "24px",
          color: "#a855f7",
          style: "margin-right:8px"
        }),
        e: common_vendor.gei(_ctx, ""),
        f: common_vendor.p({
          title: cardTitle.value,
          id: common_vendor.gei(_ctx, "")
        }),
        g: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/IconDemoCard.js.map
