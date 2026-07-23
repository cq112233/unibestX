import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/mp-html/components/mp-html/mp-html.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
import "../../../../store/app.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh_CN.js";
import "../../../../i18n/locales/en_US.js";
import "../../../../utils/toast.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mp-html",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const content1 = ref(`
  <h2>mp-html 跨端富文本组件</h2>
  <p>这是一个专门为 <b>uni-app X</b> 打造的高性能原生 HTML 解析器组件，支持多种 HTML 5 常见标签与样式。</p>
  <hr />
  <p>支持 <i>斜体</i>、<b>加粗</b>、<u>下划线</u> 以及 <span style="color: #e11d48; font-weight: bold;">自定义颜色文本</span>。</p>
`);
    const contentTable = ref(`
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
    const contentList = ref(`
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
    const contentCode = ref(`
  <p>示例代码：</p>
  <pre><code>const html = '&lt;h1&gt;Hello UniAppX&lt;/h1&gt;'
const node = parse(html)</code></pre>
`);
    const contentMedia = ref(`
  <p>访问官方链接：<a href="https://uniapp.dcloud.net.cn/">DCloud 官方文档</a></p>
  <p>示例图片展示：</p>
  <img src="/static/logo.png" style="width: 120px; height: 120px;" />
`);
    const __returned__ = { content1, contentTable, contentList, contentCode, contentMedia, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "mt-12px": { "": { "marginTop": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } }, "content-box": { "": { "backgroundColor": "#f8fafc", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_mp_html = resolveEasycom(resolveDynamicComponent("mp-html"), __easycom_1);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-bar-title-text": "mp-html 富文本组件",
        "navigation-style": "custom"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            createVNode(_component_NavBar, {
              title: "mp-html 富文本组件",
              "auto-back": true
            }),
            createElementVNode("view", { class: "p-16px" }, [
              createCommentVNode(" 1. 基础文本与标题 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "基础文本与排版"),
                createElementVNode("view", { class: "content-box" }, [
                  createVNode(_component_mp_html, { content: $setup.content1 }, null, 8, ["content"])
                ])
              ]),
              createCommentVNode(" 2. 表格解析 "),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "HTML 表格解析 (Table)"),
                createElementVNode("view", { class: "content-box" }, [
                  createVNode(_component_mp_html, { content: $setup.contentTable }, null, 8, ["content"])
                ])
              ]),
              createCommentVNode(" 3. 有序/无序列表 "),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "列表解析 (List)"),
                createElementVNode("view", { class: "content-box" }, [
                  createVNode(_component_mp_html, { content: $setup.contentList }, null, 8, ["content"])
                ])
              ]),
              createCommentVNode(" 4. 代码块 "),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "代码块解析 (Code)"),
                createElementVNode("view", { class: "content-box" }, [
                  createVNode(_component_mp_html, { content: $setup.contentCode }, null, 8, ["content"])
                ])
              ]),
              createCommentVNode(" 5. 链接与图片 "),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "超链接与图片展示"),
                createElementVNode("view", { class: "content-box" }, [
                  createVNode(_component_mp_html, { content: $setup.contentMedia }, null, 8, ["content"])
                ])
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const mpHtml = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/mp-html/mp-html.uvue"]]);
export {
  mpHtml as default
};
//# sourceMappingURL=mp-html.js.map
