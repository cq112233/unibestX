"use strict";
const common_vendor = require("../../../../common/vendor.js");
class CardProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: true }
        };
      },
      name: "CardProps"
    };
  }
  constructor(options, metadata = CardProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Card",
  props: {
    title: { default: "默认标题" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.t(_ctx.title),
        b: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        c: `${_ctx.u_s_b_h}px`,
        d: `${_ctx.u_s_a_i_b}px`,
        e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/Card.js.map
