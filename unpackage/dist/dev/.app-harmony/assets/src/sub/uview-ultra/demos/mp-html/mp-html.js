import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/mp-html/components/mp-html/mp-html.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosMpHtmlMpHtml";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "7bb18bbe",
  __className,
  __filename: "src/sub/uview-ultra/demos/mp-html/mp-html.uvue",
  __name: "mp-html",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosMpHtmlMpHtmlSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosMpHtmlMpHtmlSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
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
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_mp_html = __easycom_1;
      const n24 = _createSharedDataComponent(AppKu, "2a02d9fd", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n23 = _createSharedDataComponent(LayoutComponent, "16586599", {
            "navigation-bar-title-text": "mp-html 富文本组件",
            "navigation-style": "custom"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "969763ca", {
                title: "mp-html 富文本组件",
                "auto-back": true
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_mp_html, "96974efa", { content: () => {
                return content1.value;
              } });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n6 = _createSharedDataComponentWithFallback(_component_mp_html, "96973f3e", { content: () => {
                return contentTable.value;
              } });
              _setSharedData(__sharedData, 4, n6?.sharedData);
              const n10 = _createSharedDataComponentWithFallback(_component_mp_html, "96972f80", { content: () => {
                return contentList.value;
              } });
              _setSharedData(__sharedData, 5, n10?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_mp_html, "3c554928", { content: () => {
                return contentCode.value;
              } });
              _setSharedData(__sharedData, 6, n14?.sharedData);
              const n18 = _createSharedDataComponentWithFallback(_component_mp_html, "3c55348a", { content: () => {
                return contentMedia.value;
              } });
              _setSharedData(__sharedData, 7, n18?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n23.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n24.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const mpHtml = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  mpHtml as default
};
//# sourceMappingURL=mp-html.js.map
