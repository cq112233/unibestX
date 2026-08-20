import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import "../../utils/systemInfo.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
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
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/static/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/enums/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/utils/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/config/index.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
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
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataSelector: _createSharedDataSelector, setSharedDataEvent: _setSharedDataEvent, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataStyle: _setSharedDataStyle, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubPagingPaging";
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
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "1458638a",
  __className,
  __filename: "src/sub/paging/paging.uvue",
  __name: "paging",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubPagingPagingSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubPagingPagingSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
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
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_NavBar = __easycom_0;
      const _component_z_paging_x = __easycom_1;
      const n23 = _createSharedDataComponent(AppKu, "2bd82232", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n22 = _createSharedDataComponent(LayoutComponent, "5869edef", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "分页加载"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "96585ec6", {
                title: "分页加载 (z-paging-x)",
                "show-back": true
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const _selector1_0 = _createSharedDataSelector(() => {
                return tabIndex.value;
              });
              const _selector1_1 = _createSharedDataSelector(() => {
                return tabIndex.value;
              });
              const n1 = _createSharedDataFor(_setSharedDataScoped(__sharedData, 5, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return tabList;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                _setSharedDataEvent(__sharedData_VFor0, 1, () => {
                  return tabChange(_for_key0.value);
                });
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData_VFor0, 4, _toDisplayString(_for_item0.value));
                });
                _selector1_0(_for_key0.value, () => {
                  _setSharedDataStyle(__sharedData_VFor0, 2, { backgroundColor: tabIndex.value === _for_key0.value ? "#ffffff" : "transparent" });
                });
                _selector1_1(_for_key0.value, () => {
                  _setSharedDataStyle(__sharedData_VFor0, 3, { color: tabIndex.value === _for_key0.value ? "var(--theme-color, #37c2bc)" : "#64748b" });
                });
                return null;
              }, (__sharedData_VFor0, tab, index) => {
                return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
              }, 1);
              n1.onReset(_selector1_0.reset);
              n1.onReset(_selector1_1.reset);
              const n20 = _createSharedDataComponentWithFallback(_component_z_paging_x, "34b3b4ac", {
                "model-value": () => {
                  return dataList.value;
                },
                "default-page-size": 10,
                class: "flex-1",
                "onUpdate:modelValue": () => {
                  return onUpdateModelValue;
                },
                onQuery: () => {
                  return onQuery;
                }
              }, {
                "default": () => {
                  _createSharedDataFor(_setSharedDataScoped(__sharedData, 4, _createSharedDataVFor(__sharedDataScope, () => {
                    return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                  })), () => {
                    return dataList.value;
                  }, (__sharedData_VFor1, _for_item1) => {
                    let _item;
                    _renderSharedDataEffect(() => {
                      _item = _for_item1.value;
                      _setSharedDataStyle(__sharedData_VFor1, 1, { backgroundColor: _item.tagBgColor, padding: "2px 8px", borderRadius: "6px" });
                      _setSharedDataStyle(__sharedData_VFor1, 2, { color: _item.tagColor, fontSize: "10px", fontWeight: "bold" });
                      _setSharedData(__sharedData_VFor1, 3, _toDisplayString(_item.tag));
                      _setSharedData(__sharedData_VFor1, 5, _toDisplayString(_item.title));
                      _setSharedData(__sharedData_VFor1, 6, _toDisplayString(_item.summary));
                      _setSharedData(__sharedData_VFor1, 7, _toDisplayString(_item.author));
                      _setSharedData(__sharedData_VFor1, 8, _toDisplayString(_item.createTime));
                    });
                    _setSharedData(__sharedData_VFor1, 4, _toDisplayString(_item.id));
                    return null;
                  }, (__sharedData_VFor1, item) => {
                    return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(item.id));
                  }, 32);
                }
              });
              _setSharedData(__sharedData, 3, n20?.sharedData);
              _setTemplateRef(n20, pagingX, null, "pagingX");
            })
          });
          _setSharedData(__sharedData, 1, n22.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n23.sharedData);
      return __sharedData;
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=paging.js.map
