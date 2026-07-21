import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode, createElementBlock, Fragment, renderList, normalizeStyle, toDisplayString } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { _ as __easycom_1 } from "../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../store/app.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh_CN.js";
import "../../i18n/locales/en_US.js";
import "../../utils/toast.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/static/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/enums/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/utils/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/config/index.js";
class ArticleItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: Number, optional: false },
          title: { type: String, optional: false },
          summary: { type: String, optional: false },
          author: { type: String, optional: false },
          createTime: { type: String, optional: false },
          tag: { type: String, optional: false },
          tagBgColor: { type: String, optional: false },
          tagColor: { type: String, optional: false }
        };
      },
      name: "ArticleItem"
    };
  }
  constructor(options, metadata = ArticleItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.title = this.__props__.title;
    this.summary = this.__props__.summary;
    this.author = this.__props__.author;
    this.createTime = this.__props__.createTime;
    this.tag = this.__props__.tag;
    this.tagBgColor = this.__props__.tagBgColor;
    this.tagColor = this.__props__.tagColor;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "paging",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const tabList = ["全部", "技术", "设计", "生活"];
    const tabIndex = ref(0);
    const pagingX = ref(null);
    const dataList = ref([]);
    function onUpdateModelValue(val) {
      dataList.value = val;
    }
    function getMockArticles(category, pageNo, pageSize) {
      const list = [];
      const start = (pageNo - 1) * pageSize;
      for (let i = 0; i < pageSize; i++) {
        const itemId = start + i + 1;
        if (itemId > 35) {
          break;
        }
        let tag = category;
        if (category == "全部") {
          const idx = itemId % 3;
          if (idx == 0)
            tag = "技术";
          else if (idx == 1)
            tag = "设计";
          else
            tag = "生活";
        }
        let tagBgColor = "#e0f2fe";
        let tagColor = "#0284c7";
        if (tag == "设计") {
          tagBgColor = "#f3e8ff";
          tagColor = "#7c3aed";
        } else if (tag == "生活") {
          tagBgColor = "#dcfce7";
          tagColor = "#16a34a";
        }
        list.push(new ArticleItem({
          id: itemId,
          title: `${tag}专栏 · 探索移动端开发的未来第 ${itemId} 篇`,
          summary: `这是关于 ${tag} 领域的精选分享文章。通过全新的跨端原生开发理念，帮助开发者在性能与效率之间找到完美的平衡点。`,
          author: "技术专家 · unix",
          createTime: `06-04 15:${30 - i}`,
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
        try {
          const data = getMockArticles(currentCategory, pageNo, pageSize);
          if (pagingX.value != null) {
            pagingX.value.$callMethod("complete", data);
          }
        } catch (e) {
          if (pagingX.value != null) {
            pagingX.value.$callMethod("completeByError");
          }
        }
      }, 800);
    }
    function tabChange(index) {
      tabIndex.value = index;
      if (pagingX.value != null) {
        pagingX.value.$callMethod("reload");
      }
    }
    const __returned__ = { tabList, tabIndex, pagingX, dataList, onUpdateModelValue, getMockArticles, onQuery, tabChange, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f1f5f9_": { "": { "backgroundImage": "none", "backgroundColor": "#f1f5f9" } }, "bg-__f7fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f7fafc" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border-bottom-color-__f1f5f9_": { "": { "borderBottomColor": "#f1f5f9" } }, "border-bottom-style-solid": { "": { "borderBottomStyle": "solid" } }, "border-bottom-width-1px": { "": { "borderBottomWidth": 1 } }, "border-color-__edf2f7_": { "": { "borderTopColor": "#edf2f7", "borderRightColor": "#edf2f7", "borderBottomColor": "#edf2f7", "borderLeftColor": "#edf2f7" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-top-color-__f8fafc_": { "": { "borderTopColor": "#f8fafc" } }, "border-top-style-solid": { "": { "borderTopStyle": "solid" } }, "border-top-width-1px": { "": { "borderTopWidth": 1 } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "h-full": { "": { "height": "100%" } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "leading-18px": { "": { "lineHeight": "18px" } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mb-8px": { "": { "marginBottom": 8 } }, "mx-16px": { "": { "marginLeft": 16, "marginRight": 16 } }, "my-8px": { "": { "marginTop": 8, "marginBottom": 8 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "p-4px": { "": { "paddingTop": 4, "paddingRight": 4, "paddingBottom": 4, "paddingLeft": 4 } }, "pt-8px": { "": { "paddingTop": 8 } }, "px-16px": { "": { "paddingLeft": 16, "paddingRight": 16 } }, "py-12px": { "": { "paddingTop": 12, "paddingBottom": 12 } }, "py-8px": { "": { "paddingTop": 8, "paddingBottom": 8 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "shadow-sm": { "": { "boxShadow": "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow": "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-11px": { "": { "fontSize": 11 } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-15px": { "": { "fontSize": 15 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_z_paging_x = resolveEasycom(resolveDynamicComponent("z-paging-x"), __easycom_1);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "分页加载"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "flex flex-col flex-1 h-full bg-__f7fafc_" }, [
            createCommentVNode(" 导航栏 "),
            createVNode(_component_NavBar, {
              title: "分页加载 (z-paging-x)",
              "show-back": true
            }),
            createCommentVNode(" 顶部过滤 Tabs (移到 z-paging-x 外部) "),
            createElementVNode("view", { class: "bg-white py-12px px-16px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_" }, [
              createElementVNode("view", { class: "flex-row bg-__f1f5f9_ rounded-12px p-4px" }, [
                (openBlock(), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.tabList, (tab, index) => {
                    return createElementVNode("view", {
                      key: index,
                      class: "flex-1 items-center justify-center py-8px rounded-8px",
                      style: normalizeStyle({ backgroundColor: $setup.tabIndex === index ? "#ffffff" : "transparent" }),
                      onClick: ($event) => $setup.tabChange(index)
                    }, [
                      createElementVNode(
                        "text",
                        {
                          class: "text-13px font-bold",
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
            createCommentVNode(" 分页组件 "),
            createVNode(_component_z_paging_x, {
              ref: "pagingX",
              "model-value": $setup.dataList,
              "default-page-size": 10,
              class: "flex-1",
              "onUpdate:modelValue": $setup.onUpdateModelValue,
              onQuery: $setup.onQuery
            }, {
              default: withCtx(() => [
                createCommentVNode(" 列表数据 "),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.dataList, (item) => {
                    return openBlock(), createElementBlock("list-item", {
                      key: item.id
                    }, [
                      createElementVNode("view", { class: "mx-16px my-8px p-16px bg-white rounded-12px border-width-1px border-style-solid border-color-__edf2f7_ shadow-sm" }, [
                        createCommentVNode(" 头部信息 "),
                        createElementVNode("view", { class: "flex-row justify-between items-center mb-8px" }, [
                          createElementVNode(
                            "view",
                            {
                              style: normalizeStyle({ backgroundColor: item.tagBgColor, padding: "2px 8px", borderRadius: "6px" })
                            },
                            [
                              createElementVNode(
                                "text",
                                {
                                  style: normalizeStyle({ color: item.tagColor, fontSize: "10px", fontWeight: "bold" })
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
                            { class: "text-12px text-__94a3b8_" },
                            "#" + toDisplayString(item.id),
                            1
                            /* TEXT */
                          )
                        ]),
                        createCommentVNode(" 标题 & 摘要 "),
                        createElementVNode(
                          "text",
                          { class: "text-15px font-bold text-__1e293b_ mb-6px" },
                          toDisplayString(item.title),
                          1
                          /* TEXT */
                        ),
                        createElementVNode(
                          "text",
                          { class: "text-13px text-__64748b_ leading-18px mb-12px" },
                          toDisplayString(item.summary),
                          1
                          /* TEXT */
                        ),
                        createCommentVNode(" 底部栏 "),
                        createElementVNode("view", { class: "flex-row justify-between items-center border-top-width-1px border-top-style-solid border-top-color-__f8fafc_ pt-8px" }, [
                          createElementVNode(
                            "text",
                            { class: "text-12px text-__475569_ font-medium" },
                            toDisplayString(item.author),
                            1
                            /* TEXT */
                          ),
                          createElementVNode(
                            "text",
                            { class: "text-11px text-__94a3b8_" },
                            toDisplayString(item.createTime),
                            1
                            /* TEXT */
                          )
                        ])
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
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const paging = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/paging/paging.uvue"]]);
export {
  paging as default
};
//# sourceMappingURL=paging.js.map
