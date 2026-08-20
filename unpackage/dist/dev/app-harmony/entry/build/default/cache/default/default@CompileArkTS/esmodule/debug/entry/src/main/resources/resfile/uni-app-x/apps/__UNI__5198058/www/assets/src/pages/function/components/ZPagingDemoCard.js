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
const _style_0 = {"wtu-363vo5-0":{"":{"flexDirection":"column"}},"wtu-1yjgjtw-1":{"":{"marginBottom":12}},"wtu-1shi4c1-2":{"":{"fontSize":13}},"wtu-k196jf-3":{"":{"color":"#64748b"}},"wtu-ipjkxr-4":{"":{"--tw-leading":"18px","lineHeight":"18px"}},"wtu-1qa8yup-5":{"":{"marginBottom":8}},"wtu-13t3cxb-6":{"":{"flexDirection":"row"}},"wtu-13lz6jk-7":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-dqdach-8":{"":{"marginRight":8}},"wtu-1q4uxtw-9":{"":{"width":"100%"}},"wtu-1wj5rfx-a":{"":{"height":36}},"wtu-118m6zx-b":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-11r5j79-c":{"":{"backgroundColor":"#fee2e2"}},"wtu-cab7ja-d":{"":{"display":"flex"}},"wtu-99t06f-e":{"":{"alignItems":"center"}},"wtu-1a6bk3r-f":{"":{"justifyContent":"center"}},"wtu-1q1c76l-g":{"":{"color":"#dc2626"}},"wtu-a0x5no-h":{"":{"fontSize":12}},"wtu-vbfg4k-i":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-1vy0ete-j":{"":{"backgroundColor":"#fef3c7"}},"wtu-12jt6bz-k":{"":{"color":"#d97706"}},"wtu-1vo8z52-l":{"":{"backgroundColor":"#ffffff"}},"wtu-1qagzpp-m":{"":{"paddingTop":8,"paddingBottom":8}},"wtu-unk8et-n":{"":{"paddingLeft":12,"paddingRight":12}},"wtu-1n43ppt-o":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-5jnqzp-p":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-1s5dir1-q":{"":{"borderTopColor":"#edf2f7","borderRightColor":"#edf2f7","borderBottomColor":"#edf2f7","borderLeftColor":"#edf2f7"}},"wtu-wquw4l-r":{"":{"--tw-border-style":"solid","borderBottomStyle":"var(--tw-border-style)","borderBottomWidth":0}},"wtu-9b5i85-s":{"":{"backgroundColor":"#f1f5f9"}},"wtu-mhanxm-t":{"":{"paddingTop":2,"paddingRight":2,"paddingBottom":2,"paddingLeft":2}},"wtu-1to6p8f-u":{"":{"paddingTop":6,"paddingBottom":6}},"wtu-5shwin-v":{"":{"borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6}},"wtu-d1mip6-w":{"":{"marginLeft":12,"marginRight":12}},"wtu-1nrqtt4-x":{"":{"marginTop":8,"marginBottom":8}},"wtu-r4yzsb-y":{"":{"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12}},"wtu-1d8uwje-z":{"":{"justifyContent":"space-between"}},"wtu-1qnpy9n-10":{"":{"marginBottom":6}},"wtu-tfarvr-11":{"":{"fontSize":11}},"wtu-1oi0tuv-12":{"":{"color":"#94a3b8"}},"wtu-s0l2i6-13":{"":{"fontSize":14}},"wtu-fw3sss-14":{"":{"color":"#1e293b"}},"wtu-10ykoyt-15":{"":{"marginBottom":4}},"wtu-fbtvf1-16":{"":{"--tw-leading":"16px","lineHeight":"16px"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_z_paging_x = resolveEasycom(__resolveDynamicComponent("z-paging-x"), __easycom_1);
  return _openBlock(), _createBlock($setup["Card"], { title: "数据分页列表 (z-paging-x)" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-363vo5-0 wtu-1yjgjtw-1" }, [
        _createElementVNode("text", { class: "wtu-1shi4c1-2 wtu-k196jf-3 wtu-ipjkxr-4 wtu-1qa8yup-5" }, " 在卡片中直接体验实时分页，支持触底加载、下拉刷新以及各种状态切换。 "),
        _createElementVNode("view", { class: "wtu-13t3cxb-6 wtu-1yjgjtw-1" }, [
          _createElementVNode("view", { class: "wtu-13lz6jk-7 wtu-dqdach-8" }, [
            _createElementVNode("view", {
              class: "wtu-1q4uxtw-9 wtu-1wj5rfx-a wtu-118m6zx-b wtu-11r5j79-c wtu-cab7ja-d wtu-13t3cxb-6 wtu-99t06f-e wtu-1a6bk3r-f",
              onClick: $setup.triggerError
            }, [
              _createElementVNode("text", { class: "wtu-1q1c76l-g wtu-a0x5no-h wtu-vbfg4k-i" }, "模拟加载错误")
            ])
          ]),
          _createElementVNode("view", { class: "wtu-13lz6jk-7" }, [
            _createElementVNode("view", {
              class: "wtu-1q4uxtw-9 wtu-1wj5rfx-a wtu-118m6zx-b wtu-1vy0ete-j wtu-cab7ja-d wtu-13t3cxb-6 wtu-99t06f-e wtu-1a6bk3r-f",
              onClick: $setup.triggerClear
            }, [
              _createElementVNode("text", { class: "wtu-12jt6bz-k wtu-a0x5no-h wtu-vbfg4k-i" }, "清空数据")
            ])
          ])
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1vo8z52-l wtu-1qagzpp-m wtu-unk8et-n wtu-1n43ppt-o wtu-5jnqzp-p wtu-1s5dir1-q wtu-wquw4l-r",
        style: { "border-top-left-radius": "12px", "border-top-right-radius": "12px" }
      }, [
        _createElementVNode("view", { class: "wtu-13t3cxb-6 wtu-9b5i85-s wtu-118m6zx-b wtu-mhanxm-t" }, [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.tabList, (tab, index) => {
              return _createElementVNode("view", {
                key: index,
                class: "wtu-13lz6jk-7 wtu-99t06f-e wtu-1a6bk3r-f wtu-1to6p8f-u wtu-5shwin-v",
                style: _normalizeStyle({ backgroundColor: $setup.tabIndex === index ? "#ffffff" : "transparent" }),
                onClick: ($event) => $setup.tabChange(index)
              }, [
                _createElementVNode(
                  "text",
                  {
                    class: "wtu-a0x5no-h wtu-vbfg4k-i",
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
                _createElementVNode("view", { class: "wtu-d1mip6-w wtu-1nrqtt4-x wtu-r4yzsb-y wtu-1vo8z52-l wtu-118m6zx-b wtu-1n43ppt-o wtu-5jnqzp-p wtu-1s5dir1-q" }, [
                  _createElementVNode("view", { class: "wtu-13t3cxb-6 wtu-1d8uwje-z wtu-99t06f-e wtu-1qnpy9n-10" }, [
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
                      { class: "wtu-tfarvr-11 wtu-1oi0tuv-12" },
                      "#" + _toDisplayString(item.id),
                      1
                      /* TEXT */
                    )
                  ]),
                  _createElementVNode(
                    "text",
                    { class: "wtu-s0l2i6-13 wtu-vbfg4k-i wtu-fw3sss-14 wtu-10ykoyt-15" },
                    _toDisplayString(item.title),
                    1
                    /* TEXT */
                  ),
                  _createElementVNode(
                    "text",
                    { class: "wtu-a0x5no-h wtu-k196jf-3 wtu-fbtvf1-16" },
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
