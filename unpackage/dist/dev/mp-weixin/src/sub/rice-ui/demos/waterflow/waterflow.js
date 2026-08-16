"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  _easycom_NavBar_1();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
if (!Math) {
  (_easycom_NavBar + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
class CardItem extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: Number, optional: false },
          height: { type: String, optional: false }
        };
      },
      name: "CardItem"
    };
  }
  constructor(options, metadata = CardItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "waterflow",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const leftList = [
      new CardItem({ id: 1, height: "120px" }),
      new CardItem({ id: 3, height: "160px" }),
      new CardItem({ id: 5, height: "100px" })
    ];
    const rightList = [
      new CardItem({ id: 2, height: "150px" }),
      new CardItem({ id: 4, height: "110px" }),
      new CardItem({ id: 6, height: "140px" })
    ];
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Waterflow 瀑布流",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-f4df7b92"
        }),
        b: currentTheme.value,
        c: common_vendor.f(leftList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: item.id,
            c: item.height
          };
        }),
        d: currentTheme.value,
        e: common_vendor.f(rightList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: item.id,
            c: item.height
          };
        }),
        f: currentTheme.value,
        g: common_vendor.gei(_ctx, ""),
        h: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-f4df7b92"
        }),
        i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4df7b92"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/waterflow/waterflow.js.map
