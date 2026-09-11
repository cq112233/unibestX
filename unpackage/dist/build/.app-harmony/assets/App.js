import "./src/router/interceptor.js";
import { l as loadFont } from "./uni_modules/uview-ultra/index.js";
import "./src/store/index.js";
import { i as initNativeMidButtonTap } from "./src/tabbar/helper/index.js";
import { u as useAppStore } from "./src/store/app.js";
import { _ as _export_sfc } from "./plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { onLaunch, onShow } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __name: "App",
  setup(__props) {
    onLaunch(() => {
      useAppStore().initThemeMode();
      loadFont();
      initNativeMidButtonTap();
    });
    onShow((options = null) => {
    });
  }
});
const _style_0 = {};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  App as A
};
