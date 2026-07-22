"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-pagination",
  props: {
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
  },
  emits: ["update:currentPage", "update:pageSize", "current-change", "size-change"],
  computed: {
    totalPages() {
      const t = parseFloat(this.total.toString());
      const p = parseFloat(this.pageSize.toString());
      let pages = Math.ceil(t / p);
      if (pages < 1)
        pages = 1;
      return pages;
    },
    shouldShow() {
      if (this.hideOnSinglePage && this.totalPages <= 1) {
        return false;
      }
      return true;
    },
    showPager() {
      if (this.layout == null)
        return false;
      return this.layout.indexOf("pager") > -1;
    },
    showTotal() {
      if (this.layout == null)
        return false;
      return this.layout.indexOf("total") > -1;
    },
    currentPageStr() {
      return this.currentPage.toString();
    },
    displayedPages() {
      const total = this.totalPages;
      const current = this.currentPage;
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
    }
  },
  methods: {
    prev() {
      if (this.currentPage > 1) {
        this.emitChange(this.currentPage - 1);
      }
    },
    next() {
      if (this.currentPage < this.totalPages) {
        this.emitChange(this.currentPage + 1);
      }
    },
    goTo(page) {
      if (page == "..." || page == this.currentPage.toString()) {
        return null;
      }
      const num = parseInt(page);
      if (!isNaN(num)) {
        this.emitChange(num);
      }
    },
    emitChange(page) {
      this.$emit("update:currentPage", page);
      this.$emit("current-change", page);
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $options.shouldShow
  }, $options.shouldShow ? common_vendor.e({
    b: $props.prevText != ""
  }, $props.prevText != "" ? {
    c: common_vendor.t($props.prevText)
  } : {
    d: common_vendor.p({
      name: "arrow-left",
      size: "14",
      class: "data-v-10170ce0"
    })
  }, {
    e: $props.currentPage <= 1 ? 1 : "",
    f: $props.buttonBgColor,
    g: $props.buttonBorderColor,
    h: common_vendor.o((...args) => $options.prev && $options.prev(...args), "1c"),
    i: $options.showPager
  }, $options.showPager ? {
    j: common_vendor.f($options.displayedPages, (page, index, i0) => {
      return {
        a: common_vendor.t(page),
        b: page == $options.currentPageStr ? 1 : "",
        c: index,
        d: page == $options.currentPageStr ? 1 : "",
        e: common_vendor.o(($event) => $options.goTo(page), index)
      };
    })
  } : {}, {
    k: $options.showTotal
  }, $options.showTotal ? {
    l: common_vendor.t($props.total)
  } : {}, {
    m: $props.nextText != ""
  }, $props.nextText != "" ? {
    n: common_vendor.t($props.nextText)
  } : {
    o: common_vendor.p({
      name: "arrow-right",
      size: "14",
      class: "data-v-10170ce0"
    })
  }, {
    p: $props.currentPage >= $options.totalPages ? 1 : "",
    q: $props.buttonBgColor,
    r: $props.buttonBorderColor,
    s: common_vendor.o((...args) => $options.next && $options.next(...args), "86"),
    t: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    v: `${_ctx.u_s_b_h}px`,
    w: `${_ctx.u_s_a_i_b}px`,
    x: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-10170ce0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-pagination/up-pagination.js.map
