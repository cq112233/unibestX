"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_tag_1 = common_vendor.resolveComponent("up-tag");
  (_easycom_NavBar_1 + _easycom_up_tag_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_tag = () => "../../../../../uni_modules/uview-ultra/components/up-tag/up-tag.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_tag + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tag",
  setup(__props) {
    const showTag = common_vendor.ref(true);
    function closeTag() {
      showTag.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "up-tag 标签",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-c7c968a5"
        }),
        b: common_vendor.p({
          text: "标签",
          type: "primary",
          size: "normal",
          class: "mr-10px mb-10px data-v-c7c968a5"
        }),
        c: common_vendor.p({
          text: "成功",
          type: "success",
          size: "normal",
          class: "mr-10px mb-10px data-v-c7c968a5"
        }),
        d: common_vendor.p({
          text: "警告",
          type: "warning",
          size: "normal",
          class: "mr-10px mb-10px data-v-c7c968a5"
        }),
        e: common_vendor.p({
          text: "危险",
          type: "error",
          size: "normal",
          class: "mr-10px mb-10px data-v-c7c968a5"
        }),
        f: common_vendor.p({
          text: "镂空",
          type: "primary",
          plain: true,
          size: "normal",
          class: "mr-10px data-v-c7c968a5"
        }),
        g: common_vendor.p({
          text: "镂空",
          type: "success",
          plain: true,
          size: "normal",
          class: "mr-10px data-v-c7c968a5"
        }),
        h: common_vendor.p({
          text: "大尺寸",
          size: "large",
          type: "primary",
          class: "mr-10px data-v-c7c968a5"
        }),
        i: common_vendor.p({
          text: "普通",
          size: "normal",
          type: "success",
          class: "mr-10px data-v-c7c968a5"
        }),
        j: common_vendor.p({
          text: "迷你",
          size: "mini",
          type: "warning",
          class: "mr-10px data-v-c7c968a5"
        }),
        k: common_vendor.p({
          text: "半圆角",
          shape: "circle",
          type: "primary",
          class: "mr-10px data-v-c7c968a5"
        }),
        l: common_vendor.p({
          text: "直角",
          shape: "square",
          type: "primary",
          class: "mr-10px data-v-c7c968a5"
        }),
        m: showTag.value
      }, showTag.value ? {
        n: common_vendor.o(closeTag, "ad"),
        o: common_vendor.p({
          text: "点击关闭",
          type: "primary",
          closable: true,
          class: "mr-10px data-v-c7c968a5"
        })
      } : {}, {
        p: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "up-tag 标签",
          class: "data-v-c7c968a5"
        }),
        q: common_vendor.gei(_ctx, ""),
        r: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-c7c968a5"
        }),
        s: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c7c968a5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/tag/tag.js.map
