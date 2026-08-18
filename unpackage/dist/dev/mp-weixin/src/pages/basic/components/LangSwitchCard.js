"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../../store/index.js");
const src_utils_i18n = require("../../../utils/i18n.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../../../uni_modules/uview-ultra/libs/i18n/index.js");
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
    const langTitle = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.langTitle");
    });
    const langPreview = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.langPreview");
    });
    const welcomeText = common_vendor.computed(() => {
      return src_utils_i18n.$t("message.welcome");
    });
    const helloText = common_vendor.computed(() => {
      return src_utils_i18n.$t("message.hello", new common_vendor.UTSJSONObject({ msg: "hi" }));
    });
    const uviewPreview = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.uviewPreview");
    });
    const currentLocale = common_vendor.computed(() => {
      return appStore.state.locale;
    });
    const isZhCN = common_vendor.computed(() => {
      return currentLocale.value == "zh-CN";
    });
    const isEnUS = common_vendor.computed(() => {
      return currentLocale.value == "en-US";
    });
    const uViewChooseDates = common_vendor.computed(() => {
      currentLocale.value;
      return uni_modules_uviewUltra_libs_i18n_index.t("up.calendar.chooseDates", new common_vendor.UTSJSONObject({}));
    });
    const uViewConfirm = common_vendor.computed(() => {
      currentLocale.value;
      return uni_modules_uviewUltra_libs_i18n_index.t("up.common.confirm", new common_vendor.UTSJSONObject({}));
    });
    const uViewStart = common_vendor.computed(() => {
      currentLocale.value;
      return uni_modules_uviewUltra_libs_i18n_index.t("up.common.start", new common_vendor.UTSJSONObject({}));
    });
    const uViewEnd = common_vendor.computed(() => {
      currentLocale.value;
      return uni_modules_uviewUltra_libs_i18n_index.t("up.common.end", new common_vendor.UTSJSONObject({}));
    });
    function switchLanguage(lang) {
      appStore.setLocale(lang);
      src_utils_i18n.setTabbarItem();
      common_vendor.index.showToast({
        title: src_utils_i18n.$t("message.switch_success"),
        icon: "none",
        duration: 1500
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.t(langPreview.value),
        b: common_vendor.t(welcomeText.value),
        c: common_vendor.t(helloText.value),
        d: common_vendor.t(uviewPreview.value),
        e: common_vendor.t(uViewChooseDates.value),
        f: common_vendor.t(uViewConfirm.value),
        g: common_vendor.t(uViewStart.value),
        h: common_vendor.t(uViewEnd.value),
        i: isZhCN.value
      }, isZhCN.value ? {
        j: common_vendor.p({
          type: "checkmarkempty",
          size: "20",
          class: "data-v-1f7680f0",
          style: "color:#3b82f6"
        })
      } : {}, {
        k: common_vendor.o(($event) => {
          return switchLanguage("zh-CN");
        }, "ea"),
        l: isEnUS.value
      }, isEnUS.value ? {
        m: common_vendor.p({
          type: "checkmarkempty",
          size: "20",
          class: "data-v-1f7680f0",
          style: "color:#3b82f6"
        })
      } : {}, {
        n: common_vendor.o(($event) => {
          return switchLanguage("en-US");
        }, "51"),
        o: common_vendor.gei(_ctx, ""),
        p: common_vendor.p({
          title: langTitle.value,
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-1f7680f0"
        }),
        q: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1f7680f0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/LangSwitchCard.js.map
