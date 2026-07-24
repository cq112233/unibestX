import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode, createElementBlock, Fragment, renderList, toDisplayString } = globalThis.Vue
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
import "../../../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
import "../../../../store/app.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh_CN.js";
import "../../../../i18n/locales/en_US.js";
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
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/components/up-list/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-list/list.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
const _style_0 = { "bg-__19be6b_": { "": { "backgroundImage": "none", "backgroundColor": "#19be6b" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-col": { "": { "flexDirection": "column" } }, "font-500": { "": { "fontWeight": 500 } }, "font-bold": { "": { "fontWeight": 700 } }, "h-8px": { "": { "height": 8 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-8px": { "": { "marginBottom": 8 } }, "ml-8px": { "": { "marginLeft": 8 } }, "mr-10px": { "": { "marginRight": 10 } }, "mt-4px": { "": { "marginTop": 4 } }, "none": { "": { "display": "none" } }, "p-12px": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "pb-30px": { "": { "paddingBottom": 30 } }, "rounded-4px": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "shadow-xs": { "": { "boxShadow": "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow": "0 1rpx 2rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.05)))" } }, "text-__19be6b_": { "": { "color": "#19be6b" } }, "text-__2979ff_": { "": { "color": "#2979ff" } }, "text-__303133_": { "": { "color": "#303133" } }, "text-__909399_": { "": { "color": "#909399" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "w-8px": { "": { "width": 8 } } };
const _style_1 = { "demo-list-cell": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16, "backgroundColor": "#ffffff", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f5f5f5" } }, "demo-list-cell-avatar": { "": { "width": 40, "height": 40, "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "marginRight": 12, "backgroundColor": "#2979ff", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "demo-list-cell-content": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "list-loading": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 15, "paddingRight": 0, "paddingBottom": 15, "paddingLeft": 0 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_1);
  const _component_up_list = resolveEasycom(resolveDynamicComponent("up-list"), __easycom_3);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-list 列表",
        "disable-scroll": true
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px flex flex-col" }, [
            createVNode(_component_NavBar, {
              title: "up-list 双列表",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            createElementVNode("view", { class: "p-12px flex-1" }, [
              createCommentVNode(" 列表 1：高度 380px "),
              createElementVNode("view", { class: "mb-16px" }, [
                createElementVNode("text", { class: "text-14px font-bold text-__2979ff_ mb-8px" }, "列表 1：动态加载列表 (高度 380px)"),
                createVNode(_component_up_list, {
                  height: 380,
                  "lower-threshold": 20,
                  "refresher-enabled": true,
                  "refresher-triggered": $setup.listRefreshing,
                  class: "bg-white rounded-8px shadow-xs",
                  onScrolltolower: $setup.onListLoadMore,
                  onRefresherrefresh: $setup.onListRefresh
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($setup.listItems, (item, idx) => {
                        return openBlock(), createElementBlock("view", {
                          key: idx,
                          class: "demo-list-cell"
                        }, [
                          createElementVNode("view", { class: "demo-list-cell-avatar" }, [
                            createVNode(_component_up_icon, {
                              name: "account",
                              size: "20",
                              color: "#ffffff"
                            })
                          ]),
                          createElementVNode("view", { class: "demo-list-cell-content" }, [
                            createElementVNode(
                              "text",
                              { class: "text-14px font-500 text-__303133_" },
                              toDisplayString(item.title),
                              1
                              /* TEXT */
                            ),
                            createElementVNode(
                              "text",
                              { class: "text-12px text-__909399_ mt-4px" },
                              toDisplayString(item.desc),
                              1
                              /* TEXT */
                            )
                          ])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    $setup.listLoading ? (openBlock(), createElementBlock("view", {
                      key: 0,
                      class: "list-loading"
                    }, [
                      createVNode(_component_up_loading_icon, {
                        mode: "circle",
                        size: "20"
                      }),
                      createElementVNode("text", { class: "text-12px text-__909399_ ml-8px" }, "加载中...")
                    ])) : createCommentVNode("v-if", true)
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["refresher-triggered"])
              ]),
              createCommentVNode(" 列表 2：高度 280px "),
              createElementVNode("view", null, [
                createElementVNode("text", { class: "text-14px font-bold text-__19be6b_ mb-8px" }, "列表 2：静态展示列表 (高度 280px)"),
                createVNode(_component_up_list, {
                  height: 280,
                  class: "bg-white rounded-8px shadow-xs"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($setup.staticListItems, (item, idx) => {
                        return openBlock(), createElementBlock("view", {
                          key: idx,
                          class: "demo-list-cell"
                        }, [
                          createElementVNode("view", { class: "w-8px h-8px rounded-4px bg-__19be6b_ mr-10px" }),
                          createElementVNode("view", { class: "demo-list-cell-content" }, [
                            createElementVNode(
                              "text",
                              { class: "text-14px font-500 text-__303133_" },
                              toDisplayString(item.title),
                              1
                              /* TEXT */
                            ),
                            createElementVNode(
                              "text",
                              { class: "text-12px text-__909399_ mt-4px" },
                              toDisplayString(item.desc),
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
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/list/list.uvue"]]);
export {
  list as default
};
//# sourceMappingURL=list.js.map
