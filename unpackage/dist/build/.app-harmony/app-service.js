import "./assets/pages-json-uts.js";
import { A as App } from "./assets/App.js";
import { p as pinia } from "./assets/src/store/index.js";
import { i as i18n } from "./assets/src/i18n/index.js";
import { u as ultraUI } from "./assets/uni_modules/uview-ultra/index.js";
import { i as installRouteInterceptor } from "./assets/src/router/interceptor.js";
import "./assets/@dcloudio/uni-cloud.js";
import "./assets/src/tabbar/helper/index.js";
import "./assets/src/tabbar/helper/store.js";
import "./assets/src/tabbar/types.js";
import "./assets/src/tabbar/config.js";
import "./assets/src/utils/theme.js";
import "./assets/theme.js";
import "./assets/src/utils/systemInfo.js";
import "./assets/src/store/app.js";
import "./assets/uni_modules/x-pinia-s/instans/types.js";
import "./assets/uni_modules/x-pinia-s/instans/storeBase.js";
import "./assets/uni_modules/x-pinia-s/instans/subscriptions.js";
import "./assets/uni_modules/x-pinia-s/instans/defineStore.js";
import "./assets/uni_modules/x-pinia-s/instans/rootState.js";
import "./assets/uni_modules/x-pinia-s/instans/createPinia.js";
import "./assets/uni_modules/x-pinia-s/instans/persist.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/index.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "./assets/uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "./assets/uni_modules/uview-ultra/libs/config/config.js";
import "./assets/plugin-vue-export-helper.js";
import "./assets/src/store/token.js";
import "./assets/src/store/user.js";
import "./assets/uni_modules/lime-i18n/common/index.js";
import "./assets/uni_modules/lime-i18n/common/composer-class.js";
import "./assets/uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "./assets/uni_modules/lime-i18n/common/format.js";
import "./assets/uni_modules/lime-i18n/common/util.js";
import "./assets/uni_modules/lime-i18n/common/errors.js";
import "./assets/uni_modules/lime-i18n/common/warnings.js";
import "./assets/uni_modules/lime-i18n/common/types.js";
import "./assets/src/i18n/locales/zh-CN.js";
import "./assets/src/i18n/locales/en-US.js";
import "./assets/uni_modules/uview-ultra/libs/mixin/mixin.js";
import "./assets/uni_modules/uview-ultra/libs/function/test.js";
import "./assets/uni_modules/uview-ultra/libs/function/index.js";
import "./assets/uni_modules/uview-ultra/libs/function/digit.js";
import "./assets/uni_modules/uview-ultra/libs/config/color.js";
import "./assets/src/router/config.js";
import "./assets/pages.js";
const __global__ = typeof globalThis === "undefined" ? Function("return this")() : globalThis;
__global__.__uniX = true;
const { createSSRApp } = globalThis.Vue;
function createApp() {
  installRouteInterceptor();
  const app = createSSRApp(App);
  app.use(pinia);
  app.config.globalProperties.$pinia = pinia;
  app.use(i18n);
  app.use(ultraUI, () => {
    return new UTSJSONObject({
      options: new UTSJSONObject({
        config: new UTSJSONObject({
          // 开启只加载一次字体图标的优化，避免重复加载
          loadFontOnce: true
        })
      })
    });
  });
  return {
    app
  };
}
__global__.__mount__ = () => {
  createApp().app.mount("#app");
};
