import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-pagination"
  },
  __name: "up-pagination",
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
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const totalPages = computed(() => {
      const t = parseFloat(props.total.toString());
      const p = parseFloat(props.pageSize.toString());
      let pages = Math.ceil(t / p);
      if (pages < 1)
        pages = 1;
      return pages;
    });
    const shouldShow = computed(() => {
      if (props.hideOnSinglePage && totalPages.value <= 1) {
        return false;
      }
      return true;
    });
    const showPager = computed(() => {
      if (props.layout == null)
        return false;
      return props.layout.indexOf("pager") > -1;
    });
    const showTotal = computed(() => {
      if (props.layout == null)
        return false;
      return props.layout.indexOf("total") > -1;
    });
    const currentPageStr = computed(() => {
      return props.currentPage.toString();
    });
    const displayedPages = computed(() => {
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
    const __returned__ = { props, emit, totalPages, shouldShow, showPager, showTotal, currentPageStr, displayedPages, emitChange, prev, next, goTo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-pagination":{"":{"display":"flex","flexDirection":"row","alignItems":"center","flexWrap":"wrap","width":"100%","minHeight":30}},"up-pagination-text":{"":{"fontSize":14,"color":"#606266"}},"text-active":{"":{"color":"#ffffff"}},"up-pagination-total":{"":{"marginTop":0,"marginRight":10,"marginBottom":0,"marginLeft":10,"display":"flex","flexDirection":"row","alignItems":"center"}},"up-pagination-btn":{"":{"marginTop":0,"marginRight":3,"marginBottom":0,"marginLeft":3,"paddingTop":0,"paddingRight":8,"paddingBottom":0,"paddingLeft":8,"height":30,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#dcdfe6","borderRightColor":"#dcdfe6","borderBottomColor":"#dcdfe6","borderLeftColor":"#dcdfe6","borderTopLeftRadius":4,"borderTopRightRadius":4,"borderBottomRightRadius":4,"borderBottomLeftRadius":4,"backgroundColor":"#f5f7fa","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center"}},"btn-disabled":{"":{"opacity":0.5}},"up-pagination-item":{"":{"marginTop":0,"marginRight":2,"marginBottom":0,"marginLeft":2,"paddingTop":0,"paddingRight":8,"paddingBottom":0,"paddingLeft":8,"height":30,"borderTopLeftRadius":4,"borderTopRightRadius":4,"borderBottomRightRadius":4,"borderBottomLeftRadius":4,"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center"}},"item-active":{"":{"backgroundColor":"var(--theme-color, #0957de)"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createBlock: _createBlock, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return $setup.shouldShow ? (_openBlock(), _createElementBlock("view", {
    key: 0,
    class: "up-pagination"
  }, [
    _createElementVNode(
      "view",
      {
        class: _normalizeClass(["up-pagination-btn", { "btn-disabled": $props.currentPage <= 1 }]),
        style: _normalizeStyle({ backgroundColor: $props.buttonBgColor, borderColor: $props.buttonBorderColor }),
        onClick: $setup.prev
      },
      [
        $props.prevText != "" ? (_openBlock(), _createElementBlock(
          "text",
          {
            key: 0,
            class: "up-pagination-text"
          },
          _toDisplayString($props.prevText),
          1
          /* TEXT */
        )) : (_openBlock(), _createBlock(_component_up_icon, {
          key: 1,
          name: "arrow-left",
          size: "14"
        }))
      ],
      6
      /* CLASS, STYLE */
    ),
    $setup.showPager ? (_openBlock(true), _createElementBlock(
      _Fragment,
      { key: 0 },
      _renderList($setup.displayedPages, (page, index) => {
        return _openBlock(), _createElementBlock("view", {
          key: index,
          class: _normalizeClass(["up-pagination-item", { "item-active": page == $setup.currentPageStr }]),
          onClick: ($event) => $setup.goTo(page)
        }, [
          _createElementVNode(
            "text",
            {
              class: _normalizeClass(["up-pagination-text", { "text-active": page == $setup.currentPageStr }])
            },
            _toDisplayString(page),
            3
            /* TEXT, CLASS */
          )
        ], 10, ["onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    )) : _createCommentVNode("v-if", true),
    $setup.showTotal ? (_openBlock(), _createElementBlock("view", {
      key: 1,
      class: "up-pagination-total"
    }, [
      _createElementVNode(
        "text",
        { class: "up-pagination-text" },
        "共 " + _toDisplayString($props.total) + " 条",
        1
        /* TEXT */
      )
    ])) : _createCommentVNode("v-if", true),
    _createElementVNode(
      "view",
      {
        class: _normalizeClass(["up-pagination-btn", { "btn-disabled": $props.currentPage >= $setup.totalPages }]),
        style: _normalizeStyle({ backgroundColor: $props.buttonBgColor, borderColor: $props.buttonBorderColor }),
        onClick: $setup.next
      },
      [
        $props.nextText != "" ? (_openBlock(), _createElementBlock(
          "text",
          {
            key: 0,
            class: "up-pagination-text"
          },
          _toDisplayString($props.nextText),
          1
          /* TEXT */
        )) : (_openBlock(), _createBlock(_component_up_icon, {
          key: 1,
          name: "arrow-right",
          size: "14"
        }))
      ],
      6
      /* CLASS, STYLE */
    )
  ])) : _createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-pagination/up-pagination.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-pagination.js.map
