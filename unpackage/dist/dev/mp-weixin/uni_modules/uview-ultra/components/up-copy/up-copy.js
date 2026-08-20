"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-copy"
}, { __name: "up-copy", props: {
  content: {
    type: String,
    default: ""
  },
  alertStyle: {
    type: String,
    default: "toast"
  },
  notice: {
    type: String,
    default: "复制成功"
  }
}, emits: ["success"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const handleClick = () => {
    const rawContent = props.content;
    if (rawContent == null || rawContent == "") {
      common_vendor.index.showToast({
        title: "暂无",
        icon: "none",
        duration: 2e3
      });
      return null;
    }
    const content = `${rawContent}`;
    common_vendor.index.setClipboardData({
      data: content,
      success: function() {
        const alertStyle = props.alertStyle == null ? "toast" : props.alertStyle;
        const notice = props.notice == null ? "复制成功" : props.notice;
        if (alertStyle == "modal") {
          common_vendor.index.showModal(new common_vendor.UTSJSONObject({
            title: "提示",
            content: notice
          }));
        } else {
          common_vendor.index.showToast({
            title: notice,
            icon: "none"
          });
        }
        emit("success");
      },
      fail: function() {
        common_vendor.index.showToast({
          title: "复制失败",
          icon: "none",
          duration: 3e3
        });
      }
    });
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      b: common_vendor.o(handleClick, "28"),
      c: `${_ctx.u_s_b_h}px`,
      d: `${_ctx.u_s_a_i_b}px`,
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-copy/up-copy.js.map
