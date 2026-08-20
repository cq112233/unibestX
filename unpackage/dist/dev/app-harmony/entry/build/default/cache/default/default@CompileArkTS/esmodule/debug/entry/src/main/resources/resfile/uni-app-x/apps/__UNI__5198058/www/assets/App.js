import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/router/interceptor&";
import { l as loadFont } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/index&";
import { u as useAppStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/app&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { onLaunch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __name: "App",
  setup(__props) {
    onLaunch(() => {
      loadFont();
      useAppStore().initThemeMode();
    });
  }
});
const _style_0 = {};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  App as A
};
//# sourceMappingURL=App.js.map
