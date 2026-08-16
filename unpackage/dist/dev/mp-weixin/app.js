"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const src_router_interceptor = require("./src/router/interceptor.js");
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
  "./src/sub/uiTest/uiTest.js";
  "./src/sub/rice-ui/rice-ui.js";
  "./src/sub/rice-ui/demos/button/button.js";
  "./src/sub/rice-ui/demos/icon/icon.js";
  "./src/sub/rice-ui/demos/image/image.js";
  "./src/sub/rice-ui/demos/layout/layout.js";
  "./src/sub/rice-ui/demos/calendar/calendar.js";
  "./src/sub/rice-ui/demos/cascader/cascader.js";
  "./src/sub/rice-ui/demos/checkbox/checkbox.js";
  "./src/sub/rice-ui/demos/code-input/code-input.js";
  "./src/sub/rice-ui/demos/color-picker/color-picker.js";
  "./src/sub/rice-ui/demos/datetime-picker/datetime-picker.js";
  "./src/sub/rice-ui/demos/form/form.js";
  "./src/sub/rice-ui/demos/input/input.js";
  "./src/sub/rice-ui/demos/picker/picker.js";
  "./src/sub/rice-ui/demos/radio/radio.js";
  "./src/sub/rice-ui/demos/rate/rate.js";
  "./src/sub/rice-ui/demos/search/search.js";
  "./src/sub/rice-ui/demos/signature/signature.js";
  "./src/sub/rice-ui/demos/slider/slider.js";
  "./src/sub/rice-ui/demos/stepper/stepper.js";
  "./src/sub/rice-ui/demos/switch/switch.js";
  "./src/sub/rice-ui/demos/textarea/textarea.js";
  "./src/sub/rice-ui/demos/uploader/uploader.js";
  "./src/sub/rice-ui/demos/avatar/avatar.js";
  "./src/sub/rice-ui/demos/badge/badge.js";
  "./src/sub/rice-ui/demos/cell/cell.js";
  "./src/sub/rice-ui/demos/collapse/collapse.js";
  "./src/sub/rice-ui/demos/count-down/count-down.js";
  "./src/sub/rice-ui/demos/count-to/count-to.js";
  "./src/sub/rice-ui/demos/divider/divider.js";
  "./src/sub/rice-ui/demos/grid/grid.js";
  "./src/sub/rice-ui/demos/progress/progress.js";
  "./src/sub/rice-ui/demos/progress-circle/progress-circle.js";
  "./src/sub/rice-ui/demos/qrcode/qrcode.js";
  "./src/sub/rice-ui/demos/scroll-x/scroll-x.js";
  "./src/sub/rice-ui/demos/tag/tag.js";
  "./src/sub/rice-ui/demos/time-format/time-format.js";
  "./src/sub/rice-ui/demos/waterflow/waterflow.js";
  "./src/sub/rice-ui/demos/action-sheet/action-sheet.js";
  "./src/sub/rice-ui/demos/dialog/dialog.js";
  "./src/sub/rice-ui/demos/float-fab/float-fab.js";
  "./src/sub/rice-ui/demos/loading/loading.js";
  "./src/sub/rice-ui/demos/notice-bar/notice-bar.js";
  "./src/sub/rice-ui/demos/overlay/overlay.js";
  "./src/sub/rice-ui/demos/popup/popup.js";
  "./src/sub/rice-ui/demos/swipe-actions/swipe-actions.js";
  "./src/sub/rice-ui/demos/back-top/back-top.js";
  "./src/sub/rice-ui/demos/navbar/navbar.js";
  "./src/sub/rice-ui/demos/subsection/subsection.js";
  "./src/sub/rice-ui/demos/tabs/tabs.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      common_vendor.index.loadFontFace({
        global: true,
        family: "UniIconsFontFamily",
        source: "url('/static/uniicons.ttf')",
        success() {
          common_vendor.index.__f__("log", "at App.uvue:12", "global loadFontFace uniicons.ttf success");
        },
        fail(error) {
          common_vendor.index.__f__("warn", "at App.uvue:15", "global loadFontFace uniicons.ttf fail", error.errMsg);
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
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
