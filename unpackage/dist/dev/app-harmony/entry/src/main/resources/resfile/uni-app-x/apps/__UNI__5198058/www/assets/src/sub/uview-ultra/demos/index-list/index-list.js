import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-index-anchor/up-index-anchor.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-index-item/up-index-item.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/uview-ultra/components/up-index-list/up-index-list.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../components/layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
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
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-index-anchor/indexAnchor.js";
import "../../../../../uni_modules/uview-ultra/components/up-index-item/indexItem.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-index-list/indexList.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosIndexListIndexList";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "4c5f9c94",
  __className,
  __filename: "src/sub/uview-ultra/demos/index-list/index-list.uvue",
  __name: "index-list",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosIndexListIndexListSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosIndexListIndexListSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
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
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_index_anchor = __easycom_1;
      const _component_up_index_item = __easycom_2;
      const _component_up_index_list = __easycom_3;
      const n13 = _createSharedDataComponent(AppKu, "1e43093e", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n12 = _createSharedDataComponent(LayoutComponent, "2af0f0b5", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-index-list 索引列表"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData, 5, { height: `${windowHeight.value}px` });
              });
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "332d2965", {
                title: "IndexList 索引列表",
                "auto-back": true
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_index_list, "332d2d45", {
                style: "flex: 1",
                "index-list": () => {
                  return indexList2.value;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  _createSharedDataFor(_setSharedDataScoped(__sharedData, 4, _createSharedDataVFor(__sharedDataScope, () => {
                    return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
                  })), () => {
                    return itemArr.value;
                  }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                    const n8 = _createSharedDataComponentWithFallback(_component_up_index_item, "332d3164-" + _for_key0.value, null, {
                      "default": _withSharedDataVaporCtx(() => {
                        const n3 = _createSharedDataComponentWithFallback(_component_up_index_anchor, "332d31bf-" + _for_key0.value, { text: () => {
                          return indexList2.value[_for_key0.value];
                        } });
                        _setSharedData(__sharedData_VFor0, 2, n3?.sharedData);
                        _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 3, _createSharedDataVFor(__sharedDataScope, () => {
                          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                        })), () => {
                          return _for_item0.value;
                        }, (__sharedData_VFor1, _for_item1, _for_key1) => {
                          _renderSharedDataEffect(() => {
                            return _setSharedData(__sharedData_VFor1, 1, _toDisplayString(_for_item1.value));
                          });
                          return null;
                        }, (__sharedData_VFor1, cell, cellIndex) => {
                          return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(cellIndex));
                        }, 32);
                      })
                    });
                    _setSharedData(__sharedData_VFor0, 1, n8?.sharedData);
                    return n8;
                  }, (__sharedData_VFor0, item, index) => {
                    return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
                  }, 34);
                })
              });
              _setSharedData(__sharedData, 3, n9?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n12.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n13.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const indexList = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  indexList as default
};
//# sourceMappingURL=index-list.js.map
