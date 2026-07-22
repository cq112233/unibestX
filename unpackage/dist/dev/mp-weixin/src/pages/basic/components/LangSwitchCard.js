"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../../store/index.js");
const src_utils_i18n = require("../../../utils/i18n.js");
const src_store_app = require("../../../store/app.js");
if (!Array) {
  const _easycom_uni_icons_1 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons_1();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + common_vendor.unref(Card))();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "LangSwitchCard",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentLocale = common_vendor.computed(() => {
      return appStore.state.locale;
    });
    const isZhCN = common_vendor.computed(() => {
      return currentLocale.value == "zh-CN";
    });
    const isEnUS = common_vendor.computed(() => {
      return currentLocale.value == "en-US";
    });
    function switchLanguage(lang) {
      appStore.setLocale(lang);
      common_vendor.index.showToast({
        title: src_utils_i18n.t("message.switch_success", null),
        icon: "none",
        duration: 1500
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.t(_ctx.$t("basic.langPreview")),
        b: common_vendor.t(_ctx.$t("message.welcome")),
        c: common_vendor.t(_ctx.$t("message.hello", {
          msg: "hi"
        })),
        d: common_vendor.unref(isZhCN)
      }, common_vendor.unref(isZhCN) ? {
        e: common_vendor.p({
          type: "checkmarkempty",
          size: "20",
          style: "color:#3b82f6"
        })
      } : {}, {
        f: common_vendor.o(($event) => {
          return switchLanguage("zh-CN");
        }, "80"),
        g: common_vendor.unref(isEnUS)
      }, common_vendor.unref(isEnUS) ? {
        h: common_vendor.p({
          type: "checkmarkempty",
          size: "20",
          style: "color:#3b82f6"
        })
      } : {}, {
        i: common_vendor.o(($event) => {
          return switchLanguage("en-US");
        }, "3f"),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          title: _ctx.$t("basic.langTitle"),
          id: common_vendor.gei(_ctx, "")
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/LangSwitchCard.js.map
