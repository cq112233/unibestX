"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-pagination"
}, { __name: "up-pagination", props: {
  currentPage: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  prevText: {
    type: String,
    default: ""
  },
  nextText: {
    type: String,
    default: ""
  },
  buttonBgColor: {
    type: String,
    default: "#f5f7fa"
  },
  buttonBorderColor: {
    type: String,
    default: "#dcdfe6"
  },
  layout: {
    type: String,
    default: "prev, pager, next, total"
  },
  hideOnSinglePage: {
    type: Boolean,
    default: false
  }
}, emits: ["update:currentPage", "update:pageSize", "current-change", "size-change"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const totalPages = common_vendor.computed(() => {
    const t = parseFloat(props.total.toString());
    const p = parseFloat(props.pageSize.toString());
    let pages = Math.ceil(t / p);
    if (pages < 1)
      pages = 1;
    return pages;
  });
  const shouldShow = common_vendor.computed(() => {
    if (props.hideOnSinglePage && totalPages.value <= 1) {
      return false;
    }
    return true;
  });
  const showPager = common_vendor.computed(() => {
    if (props.layout == null)
      return false;
    return props.layout.indexOf("pager") > -1;
  });
  const showTotal = common_vendor.computed(() => {
    if (props.layout == null)
      return false;
    return props.layout.indexOf("total") > -1;
  });
  const currentPageStr = common_vendor.computed(() => {
    return props.currentPage.toString();
  });
  const displayedPages = common_vendor.computed(() => {
    const total = totalPages.value;
    const current = props.currentPage;
    const pages = [];
    if (total <= 4) {
      for (let i = 1; i <= total; i++) {
        pages.push(i.toString());
      }
      return pages;
    }
    if (current <= 2) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i.toString());
      }
      pages.push("...");
      pages.push(total.toString());
      return pages;
    }
    if (current >= total - 1) {
      pages.push("1");
      pages.push("...");
      for (let i = total - 3; i <= total; i++) {
        pages.push(i.toString());
      }
      return pages;
    }
    pages.push("1");
    pages.push("...");
    pages.push((current - 1).toString());
    pages.push(current.toString());
    pages.push((current + 1).toString());
    pages.push("...");
    pages.push(total.toString());
    return pages;
  });
  function emitChange(page) {
    emit("update:currentPage", page);
    emit("current-change", page);
  }
  function prev() {
    if (props.currentPage > 1) {
      emitChange(props.currentPage - 1);
    }
  }
  function next() {
    if (props.currentPage < totalPages.value) {
      emitChange(props.currentPage + 1);
    }
  }
  function goTo(page) {
    if (page == "..." || page == props.currentPage.toString()) {
      return null;
    }
    const num = parseInt(page);
    if (!isNaN(num)) {
      emitChange(num);
    }
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: shouldShow.value
    }, shouldShow.value ? common_vendor.e({
      b: __props.prevText != ""
    }, __props.prevText != "" ? {
      c: common_vendor.t(__props.prevText)
    } : {
      d: common_vendor.p({
        name: "arrow-left",
        size: "14",
        class: "data-v-10170ce0"
      })
    }, {
      e: __props.currentPage <= 1 ? 1 : "",
      f: __props.buttonBgColor,
      g: __props.buttonBorderColor,
      h: common_vendor.o(prev, "57"),
      i: showPager.value
    }, showPager.value ? {
      j: common_vendor.f(displayedPages.value, (page, index, i0) => {
        return {
          a: common_vendor.t(page),
          b: page == currentPageStr.value ? 1 : "",
          c: index,
          d: page == currentPageStr.value ? 1 : "",
          e: common_vendor.o(($event) => {
            return goTo(page);
          }, index)
        };
      })
    } : {}, {
      k: showTotal.value
    }, showTotal.value ? {
      l: common_vendor.t(__props.total)
    } : {}, {
      m: __props.nextText != ""
    }, __props.nextText != "" ? {
      n: common_vendor.t(__props.nextText)
    } : {
      o: common_vendor.p({
        name: "arrow-right",
        size: "14",
        class: "data-v-10170ce0"
      })
    }, {
      p: __props.currentPage >= totalPages.value ? 1 : "",
      q: __props.buttonBgColor,
      r: __props.buttonBorderColor,
      s: common_vendor.o(next, "e7"),
      t: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      v: `${_ctx.u_s_b_h}px`,
      w: `${_ctx.u_s_a_i_b}px`,
      x: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10170ce0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-pagination/up-pagination.js.map
