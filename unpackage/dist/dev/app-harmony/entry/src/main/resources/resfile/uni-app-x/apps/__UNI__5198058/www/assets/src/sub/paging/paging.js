import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { _ as __easycom_1 } from "../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../utils/systemInfo.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
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
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../utils/toast.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/static/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/enums/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/utils/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/config/index.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
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
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_z_paging_x = resolveEasycom(__resolveDynamicComponent("z-paging-x"), __easycom_1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "分页加载"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "flex flex-col flex-1 h-full bg-_b_hf7fafc_B" }, [
            _createVNode(_component_NavBar, {
              title: "分页加载 (z-paging-x)",
              "show-back": true
            }),
            _createElementVNode("view", { class: "bg-white py-12px px-16px border-bottom-width-1px border-bottom-style-solid border-bottom-color-_b_hf1f5f9_B" }, [
              _createElementVNode("view", { class: "flex-row bg-_b_hf1f5f9_B rounded-12px p-4px" }, [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList($setup.tabList, (tab, index) => {
                    return _createElementVNode("view", {
                      key: index,
                      class: "flex-1 items-center justify-center py-8px rounded-8px",
                      style: _normalizeStyle({ backgroundColor: $setup.tabIndex === index ? "#ffffff" : "transparent" }),
                      onClick: ($event) => $setup.tabChange(index)
                    }, [
                      _createElementVNode(
                        "text",
                        {
                          class: "text-13px font-bold",
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
              "model-value": $setup.dataList,
              "default-page-size": 10,
              class: "flex-1",
              "onUpdate:modelValue": $setup.onUpdateModelValue,
              onQuery: $setup.onQuery
            }, {
              default: _withCtx(() => [
                (_openBlock(true), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList($setup.dataList, (item) => {
                    return _openBlock(), _createElementBlock("list-item", {
                      key: item.id
                    }, [
                      _createElementVNode("view", { class: "mx-16px my-8px p-16px bg-white rounded-12px border-width-1px border-style-solid border-color-_b_hedf2f7_B shadow-sm" }, [
                        _createElementVNode("view", { class: "flex-row justify-between items-center mb-8px" }, [
                          _createElementVNode(
                            "view",
                            {
                              style: _normalizeStyle({ backgroundColor: item.tagBgColor, padding: "2px 8px", borderRadius: "6px" })
                            },
                            [
                              _createElementVNode(
                                "text",
                                {
                                  style: _normalizeStyle({ color: item.tagColor, fontSize: "10px", fontWeight: "bold" })
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
                            { class: "text-12px text-_b_h94a3b8_B" },
                            "#" + _toDisplayString(item.id),
                            1
                            /* TEXT */
                          )
                        ]),
                        _createElementVNode(
                          "text",
                          { class: "text-15px font-bold text-_b_h1e293b_B mb-6px" },
                          _toDisplayString(item.title),
                          1
                          /* TEXT */
                        ),
                        _createElementVNode(
                          "text",
                          { class: "text-13px text-_b_h64748b_B leading-18px mb-12px" },
                          _toDisplayString(item.summary),
                          1
                          /* TEXT */
                        ),
                        _createElementVNode("view", { class: "flex-row justify-between items-center border-top-width-1px border-top-style-solid border-top-color-_b_hf8fafc_B pt-8px" }, [
                          _createElementVNode(
                            "text",
                            { class: "text-12px text-_b_h475569_B font-medium" },
                            _toDisplayString(item.author),
                            1
                            /* TEXT */
                          ),
                          _createElementVNode(
                            "text",
                            { class: "text-11px text-_b_h94a3b8_B" },
                            _toDisplayString(item.createTime),
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
const _style_wt = {"flex":{"":{"display":"flex"}},"flex-col":{"":{"flexDirection":"column"}},"flex-1":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"h-full":{"":{"height":"100%"}},"bg-white":{"":{"backgroundColor":"#ffffff"}},"flex-row":{"":{"flexDirection":"row"}},"bg-_b_hf1f5f9_B":{"":{"backgroundColor":"#f1f5f9"}},"items-center":{"":{"alignItems":"center"}},"justify-center":{"":{"justifyContent":"center"}},"font-bold":{"":{"--tw-font-weight":"700","fontWeight":700}},"shadow-sm":{"":{"--tw-inset-shadow":"0 0 #0000","--tw-inset-ring-shadow":"0 0 #0000","--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)","boxShadow":"var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"}},"justify-between":{"":{"justifyContent":"space-between"}},"text-_b_h94a3b8_B":{"":{"color":"#94a3b8"}},"text-_b_h1e293b_B":{"":{"color":"#1e293b"}},"text-_b_h64748b_B":{"":{"color":"#64748b"}},"text-_b_h475569_B":{"":{"color":"#475569"}},"font-medium":{"":{"--tw-font-weight":"500","fontWeight":500}}};
const paging = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_wt]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/paging/paging.uvue"]]);
export {
  paging as default
};
//# sourceMappingURL=paging.js.map
