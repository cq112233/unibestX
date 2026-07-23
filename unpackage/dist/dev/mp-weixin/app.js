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
  "./src/sub/uiTest/uiTest.js";
  "./src/sub/uview-ultra/demos/icon/icon.js";
  "./src/sub/uview-ultra/demos/text/text.js";
  "./src/sub/uview-ultra/demos/empty/empty.js";
  "./src/sub/uview-ultra/demos/divider/divider.js";
  "./src/sub/uview-ultra/demos/loading-icon/loading-icon.js";
  "./src/sub/uview-ultra/demos/skeleton/skeleton.js";
  "./src/sub/uview-ultra/demos/card/card.js";
  "./src/sub/uview-ultra/demos/list/list.js";
  "./src/sub/uview-ultra/demos/swiper/swiper.js";
  "./src/sub/uview-ultra/demos/image/image.js";
  "./src/sub/uview-ultra/demos/transition/transition.js";
  "./src/sub/uview-ultra/demos/steps/steps.js";
  "./src/sub/uview-ultra/demos/table/table.js";
  "./src/sub/uview-ultra/demos/form/form.js";
  "./src/sub/uview-ultra/demos/pagination/pagination.js";
  "./src/sub/uview-ultra/demos/code-input/code-input.js";
  "./src/sub/uview-ultra/demos/button/button.js";
  "./src/sub/uview-ultra/demos/input/input.js";
  "./src/sub/uview-ultra/demos/checkbox/checkbox.js";
  "./src/sub/uview-ultra/demos/tag/tag.js";
  "./src/sub/uview-ultra/demos/radio/radio.js";
  "./src/sub/uview-ultra/demos/switch/switch.js";
  "./src/sub/uview-ultra/demos/rate/rate.js";
  "./src/sub/uview-ultra/demos/number-box/number-box.js";
  "./src/sub/uview-ultra/demos/slider/slider.js";
  "./src/sub/uview-ultra/demos/textarea/textarea.js";
  "./src/sub/uview-ultra/demos/upload/upload.js";
  "./src/sub/uview-ultra/demos/calendar/calendar.js";
  "./src/sub/uview-ultra/demos/picker/picker.js";
  "./src/sub/uview-ultra/demos/datetime-picker/datetime-picker.js";
  "./src/sub/uview-ultra/demos/action-sheet/action-sheet.js";
  "./src/sub/uview-ultra/demos/badge/badge.js";
  "./src/sub/uview-ultra/demos/avatar/avatar.js";
  "./src/sub/uview-ultra/demos/search/search.js";
  "./src/sub/uview-ultra/demos/alert/alert.js";
  "./src/sub/uview-ultra/demos/notice-bar/notice-bar.js";
  "./src/sub/uview-ultra/demos/collapse/collapse.js";
  "./src/sub/uview-ultra/demos/toast/toast.js";
  "./src/sub/uview-ultra/demos/notify/notify.js";
  "./src/sub/uview-ultra/demos/loading-page/loading-page.js";
  "./src/sub/uview-ultra/demos/overlay/overlay.js";
  "./src/sub/uview-ultra/demos/modal/modal.js";
  "./src/sub/uview-ultra/demos/popup/popup.js";
  "./src/sub/uview-ultra/demos/tooltip/tooltip.js";
  "./src/sub/uview-ultra/demos/no-network/no-network.js";
  "./src/sub/uview-ultra/demos/copy/copy.js";
  "./src/sub/uview-ultra/demos/grid/grid.js";
  "./src/sub/uview-ultra/demos/line/line.js";
  "./src/sub/uview-ultra/demos/album/album.js";
  "./src/sub/uview-ultra/demos/gap/gap.js";
  "./src/sub/uview-ultra/demos/sticky/sticky.js";
  "./src/sub/uview-ultra/demos/keyboard/keyboard.js";
  "./src/sub/uview-ultra/demos/dropdown/dropdown.js";
  "./src/sub/uview-ultra/demos/swipe-action/swipe-action.js";
  "./src/sub/uview-ultra/demos/line-progress/line-progress.js";
  "./src/sub/uview-ultra/demos/count-down/count-down.js";
  "./src/sub/uview-ultra/demos/count-to/count-to.js";
  "./src/sub/uview-ultra/demos/navbar/navbar.js";
  "./src/sub/uview-ultra/demos/tabbar/tabbar.js";
  "./src/sub/uview-ultra/demos/tabs/tabs.js";
  "./src/sub/uview-ultra/demos/subsection/subsection.js";
  "./src/sub/uview-ultra/demos/index-list/index-list.js";
  "./src/sub/uview-ultra/demos/navbar-mini/navbar-mini.js";
  "./src/sub/uview-ultra/demos/qrcode/qrcode.js";
  "./src/sub/uview-ultra/demos/lazy-load/lazy-load.js";
  "./src/sub/uview-ultra/demos/loadmore/loadmore.js";
  "./src/sub/uview-ultra/demos/waterfall/waterfall.js";
  "./src/sub/uview-ultra/demos/code/code.js";
  "./src/sub/uview-ultra/demos/parse/parse.js";
  "./src/sub/uview-ultra/demos/back-top/back-top.js";
  "./src/sub/uview-ultra/demos/mp-html/mp-html.js";
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
