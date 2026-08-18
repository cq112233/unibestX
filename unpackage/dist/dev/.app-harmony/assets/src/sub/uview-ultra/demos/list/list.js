import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_0$1 } from "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-list/up-list.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "list",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const listItems = ref([
      new UTSJSONObject({ title: "列表 1 - 项目 01", desc: "支持下拉刷新与触底加载" }),
      new UTSJSONObject({ title: "列表 1 - 项目 02", desc: "基于 scroll-view 封装" }),
      new UTSJSONObject({ title: "列表 1 - 项目 03", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 04", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 05", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 06", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 07", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 08", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 09", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 10", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 11", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 12", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 13", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 14", desc: "支持单指内部滚动" }),
      new UTSJSONObject({ title: "列表 1 - 项目 15", desc: "支持单指内部滚动" })
    ]);
    const staticListItems = ref([
      new UTSJSONObject({ title: "列表 2 - 项目 01", desc: "静态列表第 1 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 02", desc: "静态列表第 2 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 03", desc: "静态列表第 3 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 04", desc: "静态列表第 4 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 05", desc: "静态列表第 5 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 06", desc: "静态列表第 6 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 07", desc: "静态列表第 7 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 08", desc: "静态列表第 8 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 09", desc: "静态列表第 9 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 10", desc: "静态列表第 10 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 11", desc: "静态列表第 11 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 12", desc: "静态列表第 12 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 13", desc: "静态列表第 13 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 14", desc: "静态列表第 14 项内容" }),
      new UTSJSONObject({ title: "列表 2 - 项目 15", desc: "静态列表第 15 项内容" })
    ]);
    const listLoading = ref(false);
    const listRefreshing = ref(false);
    let listLoadCount = 1;
    function onListLoadMore() {
      if (listLoading.value)
        return null;
      listLoading.value = true;
      setTimeout(() => {
        listLoadCount += 1;
        const newItems = [];
        for (let i = 1; i <= 3; i++) {
          newItems.push(new UTSJSONObject({
            title: `加载项 ${listLoadCount}-${i}`,
            desc: `这是第 ${listLoadCount} 批加载的第 ${i} 条数据`
          }));
        }
        listItems.value = listItems.value.concat(newItems);
        listLoading.value = false;
        uni.showToast({ title: `加载了 ${newItems.length} 条`, icon: "none", duration: 1500 });
      }, 1e3);
    }
    function onListRefresh() {
      listRefreshing.value = true;
      setTimeout(() => {
        listRefreshing.value = false;
        uni.showToast({ title: "刷新完成", icon: "none", duration: 1500 });
      }, 1500);
    }
    const __returned__ = { listItems, staticListItems, listLoading, listRefreshing, get listLoadCount() {
      return listLoadCount;
    }, set listLoadCount(v) {
      listLoadCount = v;
    }, onListLoadMore, onListRefresh, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"demo-list-cell":{"":{"display":"flex","flexDirection":"row","alignItems":"center","paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"backgroundColor":"#ffffff","borderBottomWidth":1,"borderBottomStyle":"solid","borderBottomColor":"#f5f5f5"}},"demo-list-cell-avatar":{"":{"width":40,"height":40,"borderTopLeftRadius":4,"borderTopRightRadius":4,"borderBottomRightRadius":4,"borderBottomLeftRadius":4,"marginRight":12,"backgroundColor":"#2979ff","display":"flex","justifyContent":"center","alignItems":"center"}},"demo-list-cell-content":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"list-loading":{"":{"display":"flex","flexDirection":"row","justifyContent":"center","alignItems":"center","paddingTop":15,"paddingRight":0,"paddingBottom":15,"paddingLeft":0}},"flex":{"":{"display":"flex"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"flex-col":{"":{"flexDirection":"column"}},"flex-1":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"h-full":{"":{"height":"100%"}},"font-bold":{"":{"--tw-font-weight":"700","fontWeight":700}},"bg-white":{"":{"backgroundColor":"#ffffff"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1);
  const _component_up_list = resolveEasycom(__resolveDynamicComponent("up-list"), __easycom_3);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-list 列表",
        "disable-scroll": true
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B flex flex-col flex-1 h-full" }, [
            _createVNode(_component_NavBar, {
              title: "up-list 双列表嵌套",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            _createElementVNode("scroll-view", {
              type: "nested",
              direction: "vertical",
              class: "flex-1 h-0"
            }, [
              _createElementVNode("nested-scroll-header", null, [
                _createElementVNode("view", { class: "p-12px pb-0" }, [
                  _createElementVNode("text", { class: "text-14px font-bold text-_b_h2979ff_B mb-8px" }, "列表 1：动态加载列表 (高度 380px)"),
                  _createVNode(_component_up_list, {
                    height: 580,
                    "lower-threshold": 20,
                    "refresher-enabled": true,
                    "refresher-triggered": $setup.listRefreshing,
                    class: "bg-white rounded-8px shadow-xs",
                    onScrolltolower: $setup.onListLoadMore,
                    onRefresherrefresh: $setup.onListRefresh
                  }, {
                    default: _withCtx(() => [
                      (_openBlock(true), _createElementBlock(
                        _Fragment,
                        null,
                        _renderList($setup.listItems, (item, idx) => {
                          return _openBlock(), _createElementBlock("view", {
                            key: idx,
                            class: "demo-list-cell"
                          }, [
                            _createElementVNode("view", { class: "demo-list-cell-avatar" }, [
                              _createVNode(_component_up_icon, {
                                name: "account",
                                size: "20",
                                color: "#ffffff"
                              })
                            ]),
                            _createElementVNode("view", { class: "demo-list-cell-content" }, [
                              _createElementVNode(
                                "text",
                                { class: "text-14px font-500 text-_b_h303133_B" },
                                _toDisplayString(item.title),
                                1
                                /* TEXT */
                              ),
                              _createElementVNode(
                                "text",
                                { class: "text-12px text-_b_h909399_B mt-4px" },
                                _toDisplayString(item.desc),
                                1
                                /* TEXT */
                              )
                            ])
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      $setup.listLoading ? (_openBlock(), _createElementBlock("view", {
                        key: 0,
                        class: "list-loading"
                      }, [
                        _createVNode(_component_up_loading_icon, {
                          mode: "circle",
                          size: "20"
                        }),
                        _createElementVNode("text", { class: "text-12px text-_b_h909399_B ml-8px" }, "加载中...")
                      ])) : _createCommentVNode("v-if", true)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["refresher-triggered"])
                ])
              ]),
              _createElementVNode("nested-scroll-header", null, [
                _createElementVNode("view", { class: "p-12px pb-24px" }, [
                  _createElementVNode("text", { class: "text-14px font-bold text-_b_h19be6b_B mb-8px" }, "列表 2：静态展示列表 (高度 280px)"),
                  _createVNode(_component_up_list, {
                    height: 280,
                    class: "bg-white rounded-8px shadow-xs"
                  }, {
                    default: _withCtx(() => [
                      (_openBlock(true), _createElementBlock(
                        _Fragment,
                        null,
                        _renderList($setup.staticListItems, (item, idx) => {
                          return _openBlock(), _createElementBlock("view", {
                            key: idx,
                            class: "demo-list-cell"
                          }, [
                            _createElementVNode("view", { class: "w-8px h-8px rounded-4px bg-_b_h19be6b_B mr-10px" }),
                            _createElementVNode("view", { class: "demo-list-cell-content" }, [
                              _createElementVNode(
                                "text",
                                { class: "text-14px font-500 text-_b_h303133_B" },
                                _toDisplayString(item.title),
                                1
                                /* TEXT */
                              ),
                              _createElementVNode(
                                "text",
                                { class: "text-12px text-_b_h909399_B mt-4px" },
                                _toDisplayString(item.desc),
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
                  })
                ])
              ])
            ])
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
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/list/list.uvue"]]);
export {
  list as default
};
//# sourceMappingURL=list.js.map
