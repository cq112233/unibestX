import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, normalizeClass, normalizeStyle, toDisplayString, createBlock, Fragment, renderList } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
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
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-pagination": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "flexWrap": "wrap", "width": "100%", "minHeight": 30 } }, "up-pagination-text": { "": { "fontSize": 14, "color": "#606266" } }, "text-active": { "": { "color": "#ffffff" } }, "up-pagination-total": { "": { "marginTop": 0, "marginRight": 10, "marginBottom": 0, "marginLeft": 10, "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "up-pagination-btn": { "": { "marginTop": 0, "marginRight": 3, "marginBottom": 0, "marginLeft": 3, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "height": 30, "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#dcdfe6", "borderRightColor": "#dcdfe6", "borderBottomColor": "#dcdfe6", "borderLeftColor": "#dcdfe6", "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "backgroundColor": "#f5f7fa", "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "btn-disabled": { "": { "opacity": 0.5 } }, "up-pagination-item": { "": { "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "height": 30, "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "item-active": { "": { "backgroundColor": "var(--theme-color, #0957de)" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return $options.shouldShow ? (openBlock(), createElementBlock("view", {
    key: 0,
    class: "up-pagination"
  }, [
    createCommentVNode(" 上一页按钮 "),
    createElementVNode(
      "view",
      {
        class: normalizeClass(["up-pagination-btn", { "btn-disabled": $props.currentPage <= 1 }]),
        style: normalizeStyle({ backgroundColor: $props.buttonBgColor, borderColor: $props.buttonBorderColor }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.prev && $options.prev(...args))
      },
      [
        $props.prevText != "" ? (openBlock(), createElementBlock(
          "text",
          {
            key: 0,
            class: "up-pagination-text"
          },
          toDisplayString($props.prevText),
          1
          /* TEXT */
        )) : (openBlock(), createBlock(_component_up_icon, {
          key: 1,
          name: "arrow-left",
          size: "14"
        }))
      ],
      6
      /* CLASS, STYLE */
    ),
    createCommentVNode(" 页码列表 "),
    $options.showPager ? (openBlock(true), createElementBlock(
      Fragment,
      { key: 0 },
      renderList($options.displayedPages, (page, index) => {
        return openBlock(), createElementBlock("view", {
          key: index,
          class: normalizeClass(["up-pagination-item", { "item-active": page == $options.currentPageStr }]),
          onClick: ($event) => $options.goTo(page)
        }, [
          createElementVNode(
            "text",
            {
              class: normalizeClass(["up-pagination-text", { "text-active": page == $options.currentPageStr }])
            },
            toDisplayString(page),
            3
            /* TEXT, CLASS */
          )
        ], 10, ["onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    )) : createCommentVNode("v-if", true),
    createCommentVNode(" 总数显示 "),
    $options.showTotal ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "up-pagination-total"
    }, [
      createElementVNode(
        "text",
        { class: "up-pagination-text" },
        "共 " + toDisplayString($props.total) + " 条",
        1
        /* TEXT */
      )
    ])) : createCommentVNode("v-if", true),
    createCommentVNode(" 下一页按钮 "),
    createElementVNode(
      "view",
      {
        class: normalizeClass(["up-pagination-btn", { "btn-disabled": $props.currentPage >= $options.totalPages }]),
        style: normalizeStyle({ backgroundColor: $props.buttonBgColor, borderColor: $props.buttonBorderColor }),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.next && $options.next(...args))
      },
      [
        $props.nextText != "" ? (openBlock(), createElementBlock(
          "text",
          {
            key: 0,
            class: "up-pagination-text"
          },
          toDisplayString($props.nextText),
          1
          /* TEXT */
        )) : (openBlock(), createBlock(_component_up_icon, {
          key: 1,
          name: "arrow-right",
          size: "14"
        }))
      ],
      6
      /* CLASS, STYLE */
    )
  ])) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-pagination/up-pagination.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-pagination.js.map
