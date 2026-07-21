import { _ as __easycom_1 } from "../../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, createCommentVNode, createElementBlock, Fragment, renderList, normalizeStyle, toDisplayString, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { C as Card } from "./Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
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
const _style_0 = { "bg-__f1f5f9_": { "": { "backgroundImage": "none", "backgroundColor": "#f1f5f9" } }, "bg-__fee2e2_": { "": { "backgroundImage": "none", "backgroundColor": "#fee2e2" } }, "bg-__fef3c7_": { "": { "backgroundImage": "none", "backgroundColor": "#fef3c7" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border-bottom-width-0px": { "": { "borderBottomWidth": 0 } }, "border-color-__edf2f7_": { "": { "borderTopColor": "#edf2f7", "borderRightColor": "#edf2f7", "borderBottomColor": "#edf2f7", "borderLeftColor": "#edf2f7" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-36px": { "": { "height": 36 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "leading-16px": { "": { "lineHeight": "16px" } }, "leading-18px": { "": { "lineHeight": "18px" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mb-8px": { "": { "marginBottom": 8 } }, "mr-8px": { "": { "marginRight": 8 } }, "mx-12px": { "": { "marginLeft": 12, "marginRight": 12 } }, "my-8px": { "": { "marginTop": 8, "marginBottom": 8 } }, "p-12px": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "p-2px": { "": { "paddingTop": 2, "paddingRight": 2, "paddingBottom": 2, "paddingLeft": 2 } }, "px-12px": { "": { "paddingLeft": 12, "paddingRight": 12 } }, "py-6px": { "": { "paddingTop": 6, "paddingBottom": 6 } }, "py-8px": { "": { "paddingTop": 8, "paddingBottom": 8 } }, "rounded-6px": { "": { "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__d97706_": { "": { "color": "#d97706" } }, "text-__dc2626_": { "": { "color": "#dc2626" } }, "text-11px": { "": { "fontSize": 11 } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_z_paging_x = resolveEasycom(resolveDynamicComponent("z-paging-x"), __easycom_1);
  return openBlock(), createBlock($setup["Card"], { title: "数据分页列表 (z-paging-x)" }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "flex-col mb-12px" }, [
        createElementVNode("text", { class: "text-13px text-__64748b_ leading-18px mb-8px" }, " 在卡片中直接体验实时分页，支持触底加载、下拉刷新以及各种状态切换。 "),
        createCommentVNode(" 快捷操作栏 "),
        createElementVNode("view", { class: "flex-row mb-12px" }, [
          createElementVNode("view", { class: "flex-1 mr-8px" }, [
            createElementVNode("view", {
              class: "w-full h-36px rounded-8px bg-__fee2e2_ flex flex-row items-center justify-center",
              onClick: $setup.triggerError
            }, [
              createElementVNode("text", { class: "text-__dc2626_ text-12px font-bold" }, "模拟加载错误")
            ])
          ]),
          createElementVNode("view", { class: "flex-1" }, [
            createElementVNode("view", {
              class: "w-full h-36px rounded-8px bg-__fef3c7_ flex flex-row items-center justify-center",
              onClick: $setup.triggerClear
            }, [
              createElementVNode("text", { class: "text-__d97706_ text-12px font-bold" }, "清空数据")
            ])
          ])
        ])
      ]),
      createCommentVNode(" 顶部 Tab 过滤 (移到 z-paging-x 外部) "),
      createElementVNode("view", {
        class: "bg-white py-8px px-12px border-width-1px border-style-solid border-color-__edf2f7_ border-bottom-width-0px",
        style: { "border-top-left-radius": "12px", "border-top-right-radius": "12px" }
      }, [
        createElementVNode("view", { class: "flex-row bg-__f1f5f9_ rounded-8px p-2px" }, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList($setup.tabList, (tab, index) => {
              return createElementVNode("view", {
                key: index,
                class: "flex-1 items-center justify-center py-6px rounded-6px",
                style: normalizeStyle({ backgroundColor: $setup.tabIndex === index ? "#ffffff" : "transparent" }),
                onClick: ($event) => $setup.tabChange(index)
              }, [
                createElementVNode(
                  "text",
                  {
                    class: "text-12px font-bold",
                    style: normalizeStyle({ color: $setup.tabIndex === index ? "var(--theme-color, #37c2bc)" : "#64748b" })
                  },
                  toDisplayString(tab),
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
      createCommentVNode(" 分页容器 "),
      createVNode(_component_z_paging_x, {
        ref: "pagingX",
        "model-value": $setup.dataList,
        "default-page-size": 5,
        "paging-style": { height: "200px", border: "1px solid #edf2f7", borderTopWidth: "0px", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", backgroundColor: "#f8fafc" },
        "onUpdate:modelValue": $setup.onUpdateModelValue,
        onQuery: $setup.onQuery
      }, {
        default: withCtx(() => [
          createCommentVNode(" 列表数据项 "),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.dataList, (item) => {
              return openBlock(), createElementBlock("list-item", {
                key: item.id
              }, [
                createElementVNode("view", { class: "mx-12px my-8px p-12px bg-white rounded-8px border-width-1px border-style-solid border-color-__edf2f7_" }, [
                  createElementVNode("view", { class: "flex-row justify-between items-center mb-6px" }, [
                    createElementVNode(
                      "view",
                      {
                        style: normalizeStyle({ backgroundColor: item.tagBgColor, padding: "1px 6px", borderRadius: "4px" })
                      },
                      [
                        createElementVNode(
                          "text",
                          {
                            style: normalizeStyle({ color: item.tagColor, fontSize: "9px", fontWeight: "bold" })
                          },
                          toDisplayString(item.tag),
                          5
                          /* TEXT, STYLE */
                        )
                      ],
                      4
                      /* STYLE */
                    ),
                    createElementVNode(
                      "text",
                      { class: "text-11px text-__94a3b8_" },
                      "#" + toDisplayString(item.id),
                      1
                      /* TEXT */
                    )
                  ]),
                  createElementVNode(
                    "text",
                    { class: "text-14px font-bold text-__1e293b_ mb-4px" },
                    toDisplayString(item.title),
                    1
                    /* TEXT */
                  ),
                  createElementVNode(
                    "text",
                    { class: "text-12px text-__64748b_ leading-16px" },
                    toDisplayString(item.summary),
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
const ZPagingDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/ZPagingDemoCard.uvue"]]);
export {
  ZPagingDemoCard as Z
};
//# sourceMappingURL=ZPagingDemoCard.js.map
