import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/z-paging-x&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
class CompactArticleItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: Number, optional: false },
          title: { type: String, optional: false },
          summary: { type: String, optional: false },
          tag: { type: String, optional: false },
          tagBgColor: { type: String, optional: false },
          tagColor: { type: String, optional: false }
        };
      },
      name: "CompactArticleItem"
    };
  }
  constructor(options, metadata = CompactArticleItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.title = this.__props__.title;
    this.summary = this.__props__.summary;
    this.tag = this.__props__.tag;
    this.tagBgColor = this.__props__.tagBgColor;
    this.tagColor = this.__props__.tagColor;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ZPagingDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const shouldFail = ref(false);
    const tabList = ["全部", "技术", "设计"];
    const tabIndex = ref(0);
    const pagingX = ref(null);
    const dataList = ref([]);
    function onUpdateModelValue(val) {
      dataList.value = val;
    }
    function tabChange(index) {
      tabIndex.value = index;
      if (pagingX.value != null) {
        pagingX.value.$callMethod("reload");
      }
    }
    function triggerError() {
      shouldFail.value = true;
      if (pagingX.value != null) {
        pagingX.value.$callMethod("reload");
      }
    }
    function triggerClear() {
      dataList.value = [];
      if (pagingX.value != null) {
        pagingX.value.$callMethod("complete", []);
      }
    }
    function getMockArticles(category, pageNo, pageSize) {
      const list = [];
      const start = (pageNo - 1) * pageSize;
      for (let i = 0; i < pageSize; i++) {
        const itemId = start + i + 1;
        if (itemId > 12) {
          break;
        }
        let tag = category;
        if (category == "全部") {
          tag = itemId % 2 == 0 ? "技术" : "设计";
        }
        let tagBgColor = "#e0f2fe";
        let tagColor = "#0284c7";
        if (tag == "设计") {
          tagBgColor = "#f3e8ff";
          tagColor = "#7c3aed";
        }
        list.push(new CompactArticleItem({
          id: itemId,
          title: `${tag}动态 · 原生探索第 ${itemId} 篇`,
          summary: `卡片演示中的 ${tag} 文章，支持局部滚动加载数据。`,
          tag,
          tagBgColor,
          tagColor
        }));
      }
      return list;
    }
    function onQuery(pageNo, pageSize) {
      const currentCategory = tabList[tabIndex.value];
      setTimeout(() => {
        if (shouldFail.value) {
          shouldFail.value = false;
          if (pagingX.value != null) {
            pagingX.value.$callMethod("completeByError");
          }
          return null;
        }
        const data = getMockArticles(currentCategory, pageNo, pageSize);
        if (pagingX.value != null) {
          pagingX.value.$callMethod("complete", data);
        }
      }, 600);
    }
    const __returned__ = { shouldFail, tabList, tabIndex, pagingX, dataList, onUpdateModelValue, tabChange, triggerError, triggerClear, getMockArticles, onQuery, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-363vo5-0":{"":{"flexDirection":"column"}},"wtu-k196jf-1":{"":{"color":"#64748b"}},"wtu-13t3cxb-2":{"":{"flexDirection":"row"}},"wtu-13lz6jk-3":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1q4uxtw-4":{"":{"width":"100%"}},"wtu-11r5j79-5":{"":{"backgroundColor":"#fee2e2"}},"wtu-cab7ja-6":{"":{"display":"flex"}},"wtu-99t06f-7":{"":{"alignItems":"center"}},"wtu-1a6bk3r-8":{"":{"justifyContent":"center"}},"wtu-1q1c76l-9":{"":{"color":"#dc2626"}},"wtu-vbfg4k-a":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-1vy0ete-b":{"":{"backgroundColor":"#fef3c7"}},"wtu-12jt6bz-c":{"":{"color":"#d97706"}},"wtu-1vo8z52-d":{"":{"backgroundColor":"#ffffff"}},"wtu-9b5i85-e":{"":{"backgroundColor":"#f1f5f9"}},"wtu-1d8uwje-f":{"":{"justifyContent":"space-between"}},"wtu-1oi0tuv-g":{"":{"color":"#94a3b8"}},"wtu-fw3sss-h":{"":{"color":"#1e293b"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_z_paging_x = resolveEasycom(__resolveDynamicComponent("z-paging-x"), __easycom_1);
  return _openBlock(), _createBlock($setup["Card"], { title: "数据分页列表 (z-paging-x)" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-363vo5-0 mb-12px" }, [
        _createElementVNode("text", { class: "text-13px wtu-k196jf-1 leading-18px mb-8px" }, " 在卡片中直接体验实时分页，支持触底加载、下拉刷新以及各种状态切换。 "),
        _createElementVNode("view", { class: "wtu-13t3cxb-2 mb-12px" }, [
          _createElementVNode("view", { class: "wtu-13lz6jk-3 mr-8px" }, [
            _createElementVNode("view", {
              class: "wtu-1q4uxtw-4 h-36px rounded-8px wtu-11r5j79-5 wtu-cab7ja-6 wtu-13t3cxb-2 wtu-99t06f-7 wtu-1a6bk3r-8",
              onClick: $setup.triggerError
            }, [
              _createElementVNode("text", { class: "wtu-1q1c76l-9 text-12px wtu-vbfg4k-a" }, "模拟加载错误")
            ])
          ]),
          _createElementVNode("view", { class: "wtu-13lz6jk-3" }, [
            _createElementVNode("view", {
              class: "wtu-1q4uxtw-4 h-36px rounded-8px wtu-1vy0ete-b wtu-cab7ja-6 wtu-13t3cxb-2 wtu-99t06f-7 wtu-1a6bk3r-8",
              onClick: $setup.triggerClear
            }, [
              _createElementVNode("text", { class: "wtu-12jt6bz-c text-12px wtu-vbfg4k-a" }, "清空数据")
            ])
          ])
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1vo8z52-d py-8px px-12px border-width-1px border-style-solid border-color-[#edf2f7] border-bottom-width-0px",
        style: { "border-top-left-radius": "12px", "border-top-right-radius": "12px" }
      }, [
        _createElementVNode("view", { class: "wtu-13t3cxb-2 wtu-9b5i85-e rounded-8px p-2px" }, [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.tabList, (tab, index) => {
              return _createElementVNode("view", {
                key: index,
                class: "wtu-13lz6jk-3 wtu-99t06f-7 wtu-1a6bk3r-8 py-6px rounded-6px",
                style: _normalizeStyle({ backgroundColor: $setup.tabIndex === index ? "#ffffff" : "transparent" }),
                onClick: ($event) => $setup.tabChange(index)
              }, [
                _createElementVNode(
                  "text",
                  {
                    class: "text-12px wtu-vbfg4k-a",
                    style: _normalizeStyle({ color: $setup.tabIndex === index ? "var(--theme-color, #37c2bc)" : "#64748b" })
                  },
                  _toDisplayString(tab),
                  5
                  /* TEXT, STYLE */
                )
              ], 12, ["onClick"]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      _createVNode(_component_z_paging_x, {
        ref: "pagingX",
        "list-is": "scroll-view",
        "model-value": $setup.dataList,
        "default-page-size": 10,
        "paging-style": { height: "200px", border: "1px solid #edf2f7", borderTopWidth: "0px", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", backgroundColor: "#f8fafc" },
        "onUpdate:modelValue": $setup.onUpdateModelValue,
        onQuery: $setup.onQuery
      }, {
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.dataList, (item) => {
              return _openBlock(), _createElementBlock("view", {
                key: item.id
              }, [
                _createElementVNode("view", { class: "mx-12px my-8px p-12px wtu-1vo8z52-d rounded-8px border-width-1px border-style-solid border-color-[#edf2f7]" }, [
                  _createElementVNode("view", { class: "wtu-13t3cxb-2 wtu-1d8uwje-f wtu-99t06f-7 mb-6px" }, [
                    _createElementVNode(
                      "view",
                      {
                        style: _normalizeStyle({ backgroundColor: item.tagBgColor, padding: "1px 6px", borderRadius: "4px" })
                      },
                      [
                        _createElementVNode(
                          "text",
                          {
                            style: _normalizeStyle({ color: item.tagColor, fontSize: "9px", fontWeight: "bold" })
                          },
                          _toDisplayString(item.tag),
                          5
                          /* TEXT, STYLE */
                        )
                      ],
                      4
                      /* STYLE */
                    ),
                    _createElementVNode(
                      "text",
                      { class: "text-11px wtu-1oi0tuv-g" },
                      "#" + _toDisplayString(item.id),
                      1
                      /* TEXT */
                    )
                  ]),
                  _createElementVNode(
                    "text",
                    { class: "text-14px wtu-vbfg4k-a wtu-fw3sss-h mb-4px" },
                    _toDisplayString(item.title),
                    1
                    /* TEXT */
                  ),
                  _createElementVNode(
                    "text",
                    { class: "text-12px wtu-k196jf-1 leading-16px" },
                    _toDisplayString(item.summary),
                    1
                    /* TEXT */
                  )
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model-value"])
    ]),
    _: 1
    /* STABLE */
  });
}
const ZPagingDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/ZPagingDemoCard.uvue"]]);
export {
  ZPagingDemoCard as Z
};
//# sourceMappingURL=ZPagingDemoCard.js.map
