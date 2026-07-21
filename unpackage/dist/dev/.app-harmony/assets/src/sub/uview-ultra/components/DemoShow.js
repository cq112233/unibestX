import { _ as __easycom_0 } from "../../../../uni_modules/uview-ultra/components/up-card/up-card.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, createVNode, withCtx, Fragment, renderList, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_35 } from "../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_41 } from "../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import { _ as __easycom_3 } from "../../../../uni_modules/uview-ultra/components/up-list/up-list.js";
import { _ as __easycom_42 } from "../../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
import { l as logoImg } from "../../../assets/images/logo.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoShow",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const listItems = ref([
      new UTSJSONObject({ title: "List 列表项 01", desc: "这是高性能列表的第一项" }),
      new UTSJSONObject({ title: "List 列表项 02", desc: "支持下拉刷新和滚动加载更多" }),
      new UTSJSONObject({ title: "List 列表项 03", desc: "基于 scroll-view 封装" }),
      new UTSJSONObject({ title: "List 列表项 04", desc: "适用于长列表滚动场景" }),
      new UTSJSONObject({ title: "List 列表项 05", desc: "内置 refresher 下拉刷新能力" }),
      new UTSJSONObject({ title: "List 列表项 06", desc: "支持 scrolltolower 触底加载" })
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
          listItems.value.length + i;
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
    const __returned__ = { listItems, listLoading, listRefreshing, get listLoadCount() {
      return listLoadCount;
    }, set listLoadCount(v) {
      listLoadCount = v;
    }, onListLoadMore, onListRefresh, get logoImg() {
      return logoImg;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "flex-row": { "": { "flexDirection": "row" } }, "font-500": { "": { "fontWeight": 500 } }, "h-10px": { "": { "height": 10 } }, "justify-between": { "": { "justifyContent": "space-between" } }, "leading-20px": { "": { "lineHeight": "20px" } }, "ml-8px": { "": { "marginLeft": 8 } }, "mt-4px": { "": { "marginTop": 4 } }, "none": { "": { "display": "none" } }, "text-__2979ff_": { "": { "color": "#2979ff" } }, "text-__303133_": { "": { "color": "#303133" } }, "text-__606266_": { "": { "color": "#606266" } }, "text-__909399_": { "": { "color": "#909399" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "w-full": { "": { "width": "100%" } } };
const _style_1 = { "section-title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 8, "paddingLeft": 16, "fontSize": 18, "fontWeight": "bold", "color": "#303133" } }, "demo-block": { "": { "marginTop": 0, "marginRight": 12, "marginBottom": 12, "marginLeft": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } }, "demo-list-cell": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16, "backgroundColor": "#ffffff", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f5f5f5" } }, "demo-list-cell-avatar": { "": { "width": 40, "height": 40, "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4, "marginRight": 12, "backgroundColor": "#2979ff", "display": "flex", "justifyContent": "center", "alignItems": "center" } }, "demo-list-cell-content": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "list-loading": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 15, "paddingRight": 0, "paddingBottom": 15, "paddingLeft": 0 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_card = resolveEasycom(resolveDynamicComponent("up-card"), __easycom_0);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_41);
  const _component_up_list = resolveEasycom(resolveDynamicComponent("up-list"), __easycom_3);
  const _component_up_divider = resolveEasycom(resolveDynamicComponent("up-divider"), __easycom_42);
  return openBlock(), createElementBlock("view", null, [
    createCommentVNode(" ==================== 展示组件 ==================== "),
    createElementVNode("text", { class: "section-title" }, " 展示组件 "),
    createCommentVNode(" Card 卡片 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-card "),
      createVNode(_component_up_card, {
        title: "基础卡片",
        "sub-title": "副标题",
        margin: "0",
        "show-foot": false
      }, {
        default: withCtx(() => [
          createElementVNode("text", {
            slot: "body",
            class: "text-13px text-__606266_ leading-20px"
          }, "这是卡片主体内容区域，可以放置任意内容。")
        ]),
        _: 1
        /* STABLE */
      }),
      createElementVNode("view", { class: "h-10px" }),
      createVNode(_component_up_card, {
        title: "带缩略图",
        thumb: $setup.logoImg,
        "thumb-circle": true,
        "thumb-width": "36px",
        margin: "0"
      }, {
        default: withCtx(() => [
          createElementVNode("text", {
            slot: "body",
            class: "text-13px text-__606266_ leading-20px"
          }, "左侧缩略图为圆形，适合展示头像或图标。"),
          createElementVNode("view", {
            slot: "foot",
            class: "flex-row justify-between w-full"
          }, [
            createElementVNode("text", { class: "text-12px text-__909399_" }, "底部区域"),
            createElementVNode("text", { class: "text-12px text-__2979ff_" }, "查看详情")
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["thumb"])
    ]),
    createCommentVNode(" List 高性能列表 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-list "),
      createVNode(_component_up_list, {
        height: 300,
        "lower-threshold": 20,
        "refresher-enabled": true,
        "refresher-triggered": $setup.listRefreshing,
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
    createVNode(_component_up_divider, { text: "展示组件结束" })
  ]);
}
const DemoShow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/components/DemoShow.uvue"]]);
export {
  DemoShow as D
};
//# sourceMappingURL=DemoShow.js.map
