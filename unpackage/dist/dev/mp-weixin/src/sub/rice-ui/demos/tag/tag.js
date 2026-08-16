"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_tag_1 = common_vendor.resolveComponent("rice-tag");
  (_easycom_NavBar_1 + _easycom_rice_tag_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_tag = () => "../../../../../uni_modules/rice-ui/components/rice-tag/rice-tag.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_tag + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tag",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const showTag1 = common_vendor.ref(true);
    const showTag2 = common_vendor.ref(true);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "Tag 标签",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-672b095c"
        }),
        b: currentTheme.value,
        c: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "主要标签",
          class: "data-v-672b095c"
        }),
        d: common_vendor.p({
          type: "success",
          text: "成功标签",
          class: "data-v-672b095c"
        }),
        e: common_vendor.p({
          type: "warning",
          text: "警告标签",
          class: "data-v-672b095c"
        }),
        f: common_vendor.p({
          type: "error",
          text: "危险标签",
          class: "data-v-672b095c"
        }),
        g: common_vendor.p({
          type: "info",
          text: "默认标签",
          class: "data-v-672b095c"
        }),
        h: currentTheme.value,
        i: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "空心标签",
          plain: true,
          class: "data-v-672b095c"
        }),
        j: common_vendor.p({
          type: "success",
          text: "圆角标签",
          round: true,
          class: "data-v-672b095c"
        }),
        k: common_vendor.p({
          type: "warning",
          text: "标记样式",
          mark: true,
          class: "data-v-672b095c"
        }),
        l: common_vendor.p({
          type: "primary",
          color: "#7232dd",
          text: "自定义颜色",
          class: "data-v-672b095c"
        }),
        m: currentTheme.value,
        n: common_vendor.unref(showTag1)
      }, common_vendor.unref(showTag1) ? {
        o: common_vendor.o(($event) => {
          return showTag1.value = false;
        }, "da"),
        p: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "可关闭 1",
          closeable: true,
          class: "data-v-672b095c"
        })
      } : {}, {
        q: common_vendor.unref(showTag2)
      }, common_vendor.unref(showTag2) ? {
        r: common_vendor.o(($event) => {
          return showTag2.value = false;
        }, "68"),
        s: common_vendor.p({
          type: "success",
          text: "可关闭 2",
          closeable: true,
          class: "data-v-672b095c"
        })
      } : {}, {
        t: common_vendor.gei(_ctx, ""),
        v: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-672b095c"
        }),
        w: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-672b095c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/tag/tag.js.map
