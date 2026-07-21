"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const src_router_interceptor = require("./src/router/interceptor.js");
const uni_modules_uviewUltra_index = require("./uni_modules/uview-ultra/index.js");
const src_store_index = require("./src/store/index.js");
const src_i18n_index = require("./src/i18n/index.js");
if (!Math) {
  "./src/pages/index/index.js";
  "./src/pages/me/me.js";
  "./src/pages/basic/basic.js";
  "./src/pages/function/function.js";
  "./src/pages/ai/ai.js";
  "./src/sub/auth/login.js";
  "./src/sub/auth/register.js";
  "./src/sub/test/test.js";
  "./src/sub/paging/paging.js";
  "./src/sub/uview-ultra/uview-ultra.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      uni_modules_uviewUltra_index.loadFont();
      common_vendor.index.loadFontFace({
        global: true,
        family: "UniIconsFontFamily",
        source: "url('/static/uniicons.ttf')",
        success() {
          common_vendor.index.__f__("log", "at App.uvue:14", "global loadFontFace uniicons.ttf success");
        },
        fail(error) {
          common_vendor.index.__f__("warn", "at App.uvue:17", "global loadFontFace uniicons.ttf fail", error.errMsg);
        }
      });
    });
    common_vendor.onShow((options = null) => {
      src_router_interceptor.checkDirectEntry(options);
    });
    return () => {
    };
  }
});
function createApp() {
  src_router_interceptor.installRouteInterceptor();
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(src_store_index.pinia);
  app.config.globalProperties.$pinia = src_store_index.pinia;
  app.use(src_i18n_index.i18n);
  app.use(uni_modules_uviewUltra_index.ultraUI, () => {
    return new common_vendor.UTSJSONObject({
      options: new common_vendor.UTSJSONObject({
        config: new common_vendor.UTSJSONObject({
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
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
