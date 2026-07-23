"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_up_parse_1 = common_vendor.resolveComponent("up-parse");
  (_easycom_NavBar_1 + _easycom_up_parse_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_up_parse = () => "../../../../../uni_modules/uview-ultra/components/up-parse/up-parse.js";
if (!Math) {
  (_easycom_NavBar + _easycom_up_parse + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "parse",
  setup(__props) {
    const content1 = common_vendor.ref(`<p>欢迎使用 uview-ultra 富文本解析组件，这里是一段很长的描述文字，用来测试换行和基础排版能力。</p><img src='https://cdn.uviewui.com/uview/swiper/2.jpg' />`);
    const content2 = common_vendor.ref(`<p>这段文本可以长按被选中和复制，因为开启了 selectable 属性。您可以尝试长按我试试。</p>`);
    const content3 = common_vendor.ref(`<h3>这是一级标题</h3><p>这段文字使用了 tagStyle 设置特定的样式，比如颜色和字号，还有加粗效果。</p>`);
    const tagStyle = common_vendor.ref(new common_vendor.UTSJSONObject({
      p: "color: #606266; font-size: 14px; line-height: 1.8;",
      h3: "color: #2979ff; font-weight: bold; margin-bottom: 10px;"
    }));
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Parse 富文本解析",
          ["auto-back"]: true,
          class: "data-v-46f15a58"
        }),
        b: common_vendor.p({
          content: content1.value,
          class: "data-v-46f15a58"
        }),
        c: common_vendor.p({
          content: content2.value,
          selectable: true,
          class: "data-v-46f15a58"
        }),
        d: common_vendor.p({
          content: content3.value,
          ["tag-style"]: tagStyle.value,
          class: "data-v-46f15a58"
        }),
        e: common_vendor.p({
          ["navigation-bar-title-text"]: "Parse 富文本解析",
          ["navigation-style"]: "custom",
          class: "data-v-46f15a58"
        }),
        f: common_vendor.gei(_ctx, ""),
        g: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-46f15a58"
        }),
        h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-46f15a58"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/parse/parse.js.map
