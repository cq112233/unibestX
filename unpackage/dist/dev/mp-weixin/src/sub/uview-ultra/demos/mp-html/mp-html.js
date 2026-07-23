"use strict";
const common_vendor = require("../../../../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_mp_html_1 = common_vendor.resolveComponent("mp-html");
  (_easycom_NavBar_1 + _easycom_mp_html_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_mp_html = () => "../../../../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  (_easycom_NavBar + _easycom_mp_html + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
const LayoutComponent = () => "../../../../layouts/default.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "mp-html",
  setup(__props) {
    const content1 = common_vendor.ref(`
  <h2>mp-html 跨端富文本组件</h2>
  <p>这是一个专门为 <b>uni-app X</b> 打造的高性能原生 HTML 解析器组件，支持多种 HTML 5 常见标签与样式。</p>
  <hr />
  <p>支持 <i>斜体</i>、<b>加粗</b>、<u>下划线</u> 以及 <span style="color: #e11d48; font-weight: bold;">自定义颜色文本</span>。</p>
`);
    const contentTable = common_vendor.ref(`
  <table border="1">
    <tr>
      <th>组件名称</th>
      <th>类型</th>
      <th>平台支持</th>
    </tr>
    <tr>
      <td>mp-html</td>
      <td>富文本</td>
      <td>全端 (Android / iOS / H5)</td>
    </tr>
    <tr>
      <td>up-waterfall</td>
      <td>瀑布流</td>
      <td>全端支持</td>
    </tr>
  </table>
`);
    const contentList = common_vendor.ref(`
  <p><b>框架核心优势：</b></p>
  <ul>
    <li>原生 Kotlin / Swift 高效渲染</li>
    <li>无缝嵌入 UniAppX 架构</li>
    <li>自动适配屏幕尺寸</li>
  </ul>
  <p><b>部署步骤：</b></p>
  <ol>
    <li>导入 mp-html 插件</li>
    <li>配置 uni_modules 节点</li>
    <li>直接使用 &lt;mp-html :content="html" /&gt;</li>
  </ol>
`);
    const contentCode = common_vendor.ref(`
  <p>示例代码：</p>
  <pre><code>const html = '&lt;h1&gt;Hello UniAppX&lt;/h1&gt;'
const node = parse(html)</code></pre>
`);
    const contentMedia = common_vendor.ref(`
  <p>访问官方链接：<a href="https://uniapp.dcloud.net.cn/">DCloud 官方文档</a></p>
  <p>示例图片展示：</p>
  <img src="/static/logo.png" style="width: 120px; height: 120px;" />
`);
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "mp-html 富文本组件",
          ["auto-back"]: true,
          class: "data-v-31464d21"
        }),
        b: common_vendor.p({
          content: content1.value,
          class: "data-v-31464d21"
        }),
        c: common_vendor.p({
          content: contentTable.value,
          class: "data-v-31464d21"
        }),
        d: common_vendor.p({
          content: contentList.value,
          class: "data-v-31464d21"
        }),
        e: common_vendor.p({
          content: contentCode.value,
          class: "data-v-31464d21"
        }),
        f: common_vendor.p({
          content: contentMedia.value,
          class: "data-v-31464d21"
        }),
        g: common_vendor.p({
          ["navigation-bar-title-text"]: "mp-html 富文本组件",
          ["navigation-style"]: "custom",
          class: "data-v-31464d21"
        }),
        h: common_vendor.gei(_ctx, ""),
        i: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-31464d21"
        }),
        j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-31464d21"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/demos/mp-html/mp-html.js.map
