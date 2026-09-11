import { _ as __easycom_2 } from "../../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
import { C as Card } from "../../basic/components/Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataEvent: _setSharedDataEvent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, createSharedDataSelector: _createSharedDataSelector, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataClass: _setSharedDataClass, createSharedDataFor: _createSharedDataFor, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsZPagingDemoCard";
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
      }
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
const emptyText = "暂无数据 ~";
const emptyErrorText = "加载失败，请点击重试";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/function/components/ZPagingDemoCard.uvue",
  __name: "ZPagingDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsZPagingDemoCardSharedData", sharedDataClassId: 0 })));
    const showList = ref(true);
    const loadFailed = ref(false);
    const tabList = ["全部", "技术", "设计"];
    const tabIndex = ref(0);
    const pagingX = ref(null);
    const dataList = ref([]);
    function onUpdateModelValue(val) {
      dataList.value = val;
    }
    function tabChange(index) {
      tabIndex.value = index;
      loadFailed.value = false;
      showList.value = true;
      if (pagingX.value != null) {
        pagingX.value.$callMethod("reload");
      }
    }
    function triggerError() {
      dataList.value = [];
      loadFailed.value = true;
      showList.value = false;
    }
    function triggerClear() {
      dataList.value = [];
      loadFailed.value = false;
      showList.value = false;
    }
    function onEmptyReload() {
      loadFailed.value = false;
      showList.value = true;
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
        loadFailed.value = false;
        const data = getMockArticles(currentCategory, pageNo, pageSize);
        if (pagingX.value != null) {
          pagingX.value.$callMethod("complete", data);
        }
      }, 600);
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_z_paging_x = __easycom_2;
      const n35 = _createSharedDataComponent(
        Card,
        "4b4c5faa",
        { title: "数据分页列表 (z-paging-x)" },
        {
          "default": _withSharedDataVaporCtx(() => {
            _setSharedDataEvent(__sharedData, 9, triggerError);
            _setSharedDataEvent(__sharedData, 10, triggerClear);
            const _selector9_0 = _createSharedDataSelector(() => {
              return tabIndex.value;
            });
            const _selector9_1 = _createSharedDataSelector(() => {
              return tabIndex.value;
            });
            const n9 = _createSharedDataFor(_setSharedDataScoped(__sharedData, 8, _createSharedDataVFor(__sharedDataScope, () => {
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
              _selector9_0(_for_key0.value, () => {
                _setSharedDataClass(__sharedData_VFor0, 2, ["weapp-tw-border wtu-13lz6jk-7 wtu-99t06f-e wtu-1a6bk3r-f wtu-1to6p8f-u wtu-5shwin-v", tabIndex.value === _for_key0.value ? "wtu-1vo8z52-l" : "wtu-9b5i85-s"]);
              });
              _selector9_1(_for_key0.value, () => {
                _setSharedDataClass(__sharedData_VFor0, 3, ["weapp-tw-border wtu-a0x5no-h wtu-vbfg4k-i", tabIndex.value === _for_key0.value ? "wtu-1vqo4p2-w" : "wtu-k196jf-3"]);
              });
              return null;
            }, (__sharedData_VFor0, tab, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            }, 1);
            n9.onReset(_selector9_0.reset);
            n9.onReset(_selector9_1.reset);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(showList.value));
            }, () => {
              const n27 = _createSharedDataComponentWithFallback(_component_z_paging_x, "e69e26e0", {
                "list-is": "list-view",
                "list-id": "zpagingDemoList",
                "custom-nested-scroll": true,
                "model-value": () => {
                  return dataList.value;
                },
                "default-page-size": 10,
                "show-back-to-top": true,
                "back-to-top-threshold": 60,
                "paging-style": { height: "200px", border: "1px solid #edf2f7", borderTopWidth: "0px", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", backgroundColor: "#f8fafc" },
                "onUpdate:modelValue": () => {
                  return onUpdateModelValue;
                },
                onQuery: () => {
                  return onQuery;
                }
              }, {
                "default": () => {
                  _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
                    return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                  })), () => {
                    return dataList.value;
                  }, (__sharedData_VFor1, _for_item1) => {
                    let _item;
                    _renderSharedDataEffect(() => {
                      _item = _for_item1.value;
                      _setSharedDataStyle(__sharedData_VFor1, 1, { backgroundColor: _item.tagBgColor, padding: "1px 6px", borderRadius: "4px" });
                      _setSharedDataStyle(__sharedData_VFor1, 2, { color: _item.tagColor, fontSize: "9px", fontWeight: "bold" });
                      _setSharedData(__sharedData_VFor1, 3, _toDisplayString(_item.tag));
                      _setSharedData(__sharedData_VFor1, 5, _toDisplayString(_item.title));
                      _setSharedData(__sharedData_VFor1, 6, _toDisplayString(_item.summary));
                    });
                    _setSharedData(__sharedData_VFor1, 4, _toDisplayString(_item.id));
                    return null;
                  }, (__sharedData_VFor1, item) => {
                    return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(item.id));
                  }, 32);
                }
              });
              _setSharedData(__sharedData, 2, n27?.sharedData);
              _setTemplateRef(n27, pagingX, null, "pagingX");
            }, () => {
              _setSharedDataEvent(__sharedData, 4, onEmptyReload);
              _renderSharedDataEffect(() => {
                const _loadFailed = loadFailed.value;
                _setSharedData(__sharedData, 5, _toDisplayString(_loadFailed ? "😓" : "📭"));
                _setSharedData(__sharedData, 6, _toDisplayString(_loadFailed ? emptyErrorText : emptyText));
                _setSharedData(__sharedData, 7, _toDisplayString(_loadFailed ? "点击重试" : "点击刷新"));
              });
            }, 389);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n35.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const ZPagingDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  ZPagingDemoCard as Z
};
