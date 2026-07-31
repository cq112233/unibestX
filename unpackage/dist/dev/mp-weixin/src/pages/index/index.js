"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  _easycom_up_button_1();
}
const _easycom_up_button = () => "../../../uni_modules/uview-ultra/components/up-button/up-button.js";
if (!Math) {
  (_easycom_up_button + common_vendor.unref(WeappTailwindcss) + common_vendor.unref(BindClass) + common_vendor.unref(TButton) + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const WeappTailwindcss = () => "../../components/WeappTailwindcss.js";
const BindClass = () => "../../components/BindClass.js";
const TButton = () => "../../components/t-button/t-button.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const buttonColors = [
      "bg-[#000]",
      "bg-[#111]",
      "bg-[#222]",
      "bg-[#333]",
      "bg-[#444]",
      "bg-[#555]",
      "bg-[#666]",
      "bg-[#777]",
      "bg-[#888]",
      "bg-[#999]",
      "bg-[#aaa]",
      "bg-[#bbb]",
      "bg-[#ccc]",
      "bg-[#ddd]",
      "bg-[#eee]",
      "bg-[#fff]"
    ];
    const globalNum = common_vendor.ref(0);
    const buttonClass = common_vendor.computed(() => {
      const index = globalNum.value % buttonColors.length;
      return buttonColors[index];
    });
    const templateCorpusDynamicClass = common_vendor.computed(() => {
      return "template-corpus-dynamic bg-[#68c828] text-[100px] w-[323px] h-[45px]";
    });
    function setGlobalNum(num) {
      globalNum.value = num;
    }
    common_vendor.onLoad(() => {
      common_vendor.index.__f__("log", "at src/pages/index/index.uvue:41", "欢迎使用 weapp-tailwindcss 模板");
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          type: "primary",
          class: "data-v-55cb847e"
        }),
        b: common_vendor.p({
          class: "data-v-55cb847e"
        }),
        c: common_vendor.p({
          class: "data-v-55cb847e"
        }),
        d: common_vendor.n(common_vendor.unref(templateCorpusDynamicClass)),
        e: common_vendor.t(common_vendor.unref(globalNum)),
        f: common_vendor.n(common_vendor.unref(buttonClass)),
        g: common_vendor.o(($event) => {
          return setGlobalNum(common_vendor.unref(globalNum) + 1);
        }, "d7"),
        h: common_vendor.p({
          ["t-class"]: "bg-[#0977ee] text-[31rpx]",
          ["t-class-content"]: "px-[29rpx]",
          class: "data-v-55cb847e"
        }),
        i: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "首页",
          class: "data-v-55cb847e"
        }),
        j: common_vendor.gei(_ctx, ""),
        k: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-55cb847e"
        }),
        l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-55cb847e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/index/index.js.map
