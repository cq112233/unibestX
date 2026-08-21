"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../store/index.js");
const src_store_app = require("../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  _easycom_NavBar_1();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
if (!Math) {
  (_easycom_NavBar + common_vendor.unref(WeappTailwindcss) + common_vendor.unref(BindClass) + common_vendor.unref(TButton) + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const WeappTailwindcss = () => "./components/WeappTailwindcss.js";
const BindClass = () => "./components/BindClass.js";
const TButton = () => "./components/t-button.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tailwindcss",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const isDark = common_vendor.computed(() => {
      return appStore.state.isDark;
    });
    function toggleDark() {
      const nextMode = appStore.state.isDark ? "light" : "dark";
      appStore.setThemeMode(nextMode);
    }
    const buttonColors = [
      "bg-_b_h000_B",
      "bg-_b_h111_B",
      "bg-_b_h222_B",
      "bg-_b_h333_B",
      "bg-_b_h444_B",
      "bg-_b_h555_B",
      "bg-_b_h666_B",
      "bg-_b_h777_B",
      "bg-_b_h888_B",
      "bg-_b_h999_B",
      "bg-_b_haaa_B",
      "bg-_b_hbbb_B",
      "bg-_b_hccc_B",
      "bg-_b_hddd_B",
      "bg-_b_heee_B",
      "bg-_b_hfff_B"
    ];
    const globalNum = common_vendor.ref(0);
    const buttonClass = common_vendor.computed(() => {
      const index = globalNum.value % buttonColors.length;
      return buttonColors[index];
    });
    const templateCorpusDynamicClass = common_vendor.computed(() => {
      return "template-corpus-dynamic bg-_b_h68c828_B text-slate-700 text-_b26px_B w-_b323px_B h-_b45px_B leading-_b45px_B px-3";
    });
    function setGlobalNum(num) {
      globalNum.value = num;
    }
    common_vendor.onLoad(() => {
      common_vendor.index.__f__("log", "at src/sub/tailwindcss/tailwindcss.uvue:51", "欢迎使用 weapp-tailwindcss 模板");
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "weapp-tailwindcss 示例",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          class: "data-v-f9f3846f"
        }),
        b: common_vendor.p({
          class: "data-v-f9f3846f"
        }),
        c: common_vendor.p({
          class: "data-v-f9f3846f"
        }),
        d: common_vendor.t(common_vendor.unref(isDark) ? "切换到亮色模式" : "切换到暗色模式"),
        e: common_vendor.o(toggleDark, "0a"),
        f: common_vendor.n(common_vendor.unref(templateCorpusDynamicClass)),
        g: common_vendor.t(common_vendor.unref(globalNum)),
        h: common_vendor.n(common_vendor.unref(buttonClass)),
        i: common_vendor.o(($event) => {
          return setGlobalNum(common_vendor.unref(globalNum) + 1);
        }, "9a"),
        j: common_vendor.p({
          ["t-class"]: "bg-_b_h0977ee_B text-_b31rpx_B",
          ["t-class-content"]: "px-_b29rpx_B",
          class: "data-v-f9f3846f"
        }),
        k: common_vendor.unref(isDark) ? 1 : "",
        l: common_vendor.p({
          ["navigation-bar-title-text"]: "weapp-tailwindcss 示例",
          ["navigation-style"]: "custom",
          class: "data-v-f9f3846f"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-f9f3846f"
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f9f3846f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/sub/tailwindcss/tailwindcss.js.map
