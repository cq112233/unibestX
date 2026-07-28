import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, normalizeStyle, createElementBlock, Fragment, renderList, toDisplayString } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-index-item/up-index-item.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-index-list/up-index-list.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-index-anchor/indexAnchor.js";
import "../../../../../uni_modules/uview-ultra/components/up-index-item/indexItem.js";
import "../../../../../uni_modules/uview-ultra/components/up-index-list/indexList.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index-list",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const indexList2 = ref(["A", "B", "C", "D", "F", "G", "H", "J", "L", "M", "N", "Q", "R", "S", "T", "W", "X", "Y", "Z"]);
    const itemArr = ref([
      ["阿卡丽", "阿木木", "阿里"],
      ["白起", "百里守约", "百里玄策", "扁鹊"],
      ["曹操", "成吉思汗", "程咬金"],
      ["妲己", "大乔", "狄仁杰", "貂蝉", "达摩"],
      ["范海辛", "飞天"],
      ["高渐离", "公孙离", "关羽", "宫本武藏", "干将莫邪"],
      ["韩信", "后羿", "花木兰", "黄忠"],
      ["姜子牙", "橘右京"],
      ["兰陵王", "老夫子", "李白", "李元芳", "刘邦", "刘备", "刘禅", "吕布", "露娜", "鲁班七号"],
      ["马可波罗", "梦奇", "明世隐", "墨子", "芈月"],
      ["哪吒", "娜可露露", "牛魔", "女娲"],
      ["奇迹暖暖", "青雉"],
      ["任逍遥", "瑞文"],
      ["孙膑", "孙尚香", "孙悟空", "苏烈", "沈梦溪"],
      ["太乙真人", "提莫"],
      ["王昭君", "武则天", "项羽"],
      ["夏侯惇", "项羽", "小乔"],
      ["雅典娜", "亚瑟", "杨戬", "杨玉环", "瑶", "虞姬", "嬴政", "元歌"],
      ["张飞", "张良", "赵云", "甄姬", "钟馗", "钟无艳", "周瑜", "庄周", "诸葛亮", "猪八戒"]
    ]);
    const windowHeight = ref(uni.getWindowInfo().windowHeight);
    const __returned__ = { indexList: indexList2, itemArr, windowHeight, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "relative": { "": { "position": "relative" } } };
const _style_1 = { "page-container": { "": { "display": "flex", "flexDirection": "column" } }, "list-cell": { "": { "display": "flex", "boxSizing": "border-box", "width": "100%", "paddingTop": 10, "paddingRight": 12, "paddingBottom": 10, "paddingLeft": 12, "overflow": "hidden", "backgroundColor": "#ffffff", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f3f4f6" } }, "list-item-text": { "": { "fontSize": 14, "lineHeight": "24px", "color": "#323233" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_index_anchor = resolveEasycom(resolveDynamicComponent("up-index-anchor"), __easycom_1);
  const _component_up_index_item = resolveEasycom(resolveDynamicComponent("up-index-item"), __easycom_2);
  const _component_up_index_list = resolveEasycom(resolveDynamicComponent("up-index-list"), __easycom_3);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-index-list 索引列表"
      }, {
        default: withCtx(() => [
          createElementVNode(
            "view",
            {
              class: "page-container bg-__f8fafc_",
              style: normalizeStyle({ height: `${$setup.windowHeight}px` })
            },
            [
              createVNode(_component_NavBar, {
                title: "IndexList 索引列表",
                "auto-back": true
              }),
              createElementVNode("view", {
                class: "flex-1 relative",
                style: { "flex": "1" }
              }, [
                createVNode(_component_up_index_list, {
                  style: { "flex": "1" },
                  "index-list": $setup.indexList
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($setup.itemArr, (item, index) => {
                        return openBlock(), createBlock(
                          _component_up_index_item,
                          { key: index },
                          {
                            default: withCtx(() => [
                              createVNode(_component_up_index_anchor, {
                                text: $setup.indexList[index]
                              }, null, 8, ["text"]),
                              (openBlock(true), createElementBlock(
                                Fragment,
                                null,
                                renderList(item, (cell, cellIndex) => {
                                  return openBlock(), createElementBlock("view", {
                                    key: cellIndex,
                                    class: "list-cell"
                                  }, [
                                    createElementVNode(
                                      "text",
                                      { class: "list-item-text" },
                                      toDisplayString(cell),
                                      1
                                      /* TEXT */
                                    )
                                  ]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["index-list"])
              ])
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const indexList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/index-list/index-list.uvue"]]);
export {
  indexList as default
};
//# sourceMappingURL=index-list.js.map
