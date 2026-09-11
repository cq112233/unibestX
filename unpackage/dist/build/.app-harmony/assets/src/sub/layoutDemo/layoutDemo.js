import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/navbar.js";
import { b as availableHeight } from "../../utils/systemInfo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../tabbar/index.js";
import "../../tabbar/helper/index.js";
import "../../tabbar/helper/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
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
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../tabbar/custom/index.js";
import "../../utils/toast.js";
import "../../components/NavBar/NavBar.js";
import "../../utils/pageScroll.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, setSharedDataStyle: _setSharedDataStyle, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, createSharedDataFor: _createSharedDataFor, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenSrcSubLayoutDemoLayoutDemo";
const { computed, ref } = globalThis.Vue;
const codeTemplate = `<view class="flex flex-col flex-1">
  <!-- 顶部固定内容（可选） -->

  <scroll-view direction="vertical" class="flex-1 flex flex-col"
    @scroll="onScroll" @scrolltolower="onLower">
    <!-- 滚动内容 -->
  </scroll-view>
</view>`;
class DemoItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          title: { type: String, optional: false },
          subtitle: { type: String, optional: false },
          desc: { type: String, optional: false },
          tag: { type: String, optional: false },
          avatar: { type: String, optional: false },
          color: { type: String, optional: false }
        };
      }
    };
  }
  constructor(options, metadata = DemoItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.title = this.__props__.title;
    this.subtitle = this.__props__.subtitle;
    this.desc = this.__props__.desc;
    this.tag = this.__props__.tag;
    this.avatar = this.__props__.avatar;
    this.color = this.__props__.color;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/layoutDemo/layoutDemo.uvue",
  __name: "layoutDemo",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubLayoutDemoLayoutDemoSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubLayoutDemoLayoutDemoSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
    const computedAvailableHeight = computed(() => {
      var _a;
      return (_a = availableHeight.value) !== null && _a !== void 0 ? _a : 0;
    });
    const demoItems = [
      new DemoItem({ title: "首页", subtitle: "Home", desc: "根容器 flex-1 撑满开发高度，滚动区域在内部自写 scroll-view。", tag: "首页", avatar: "首", color: "#3b82f6" }),
      new DemoItem({ title: "向下滑动", subtitle: "Scroll me", desc: "此列表由内部 scroll-view 滚动，@scroll 会实时更新 scrollTop。", tag: "滚动", avatar: "滚", color: "#10b981" }),
      new DemoItem({ title: "第三项", subtitle: "Item 3", desc: "滚动超出后内部 scroll-view 接管、触底检测独立生效。", tag: "示例", avatar: "3", color: "#f59e0b" }),
      new DemoItem({ title: "第四项", subtitle: "Item 4", desc: "触底时触发 @scrolltolower，次数在上方指标卡累加。", tag: "触底", avatar: "4", color: "#ec4899" }),
      new DemoItem({ title: "第五项", subtitle: "Item 5", desc: "根容器必须为 view（非 scroll-view），避免与布局产生双重滚动冲突。", tag: "规范", avatar: "5", color: "#8b5cf6" }),
      new DemoItem({ title: "第六项", subtitle: "Item 6", desc: "可用高度 computedAvailableHeight 即你要写的高度，框架已算好。", tag: "高度", avatar: "6", color: "#06b6d4" }),
      new DemoItem({ title: "第七项", subtitle: "Item 7", desc: "VITE_TABBAR_MODE=1 时不包含底部 tabbar 区域，底部非编辑区。", tag: "模式", avatar: "7", color: "#6366f1" }),
      new DemoItem({ title: "第八项", subtitle: "Item 8", desc: "按 H5 正常开发即可，无需再手算状态栏/导航栏/tabbar 偏移。", tag: "H5", avatar: "8", color: "#0ea5e9" })
    ];
    const scrollTop = ref(0);
    const reachBottomCount = ref(0);
    function handleScroll(e) {
      scrollTop.value = Math.ceil(e.detail.scrollTop);
    }
    function handleScrollToLower() {
      reachBottomCount.value++;
    }
    return () => {
      "raw js";
      const n98 = _createSharedDataComponent(AppKu, "07f93669", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "布局页面示例", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n97 = _createSharedDataComponent(LayoutComponent, "22f580bc", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "布局页面示例", "navigationStyle": "custom" }
          }, {
            "default": () => {
              _setSharedDataStyle(__sharedData, 3, { maxWidth: "520px" });
              _setSharedData(__sharedData, 4, _toDisplayString(codeTemplate));
              _renderSharedDataEffect(() => {
                _setSharedData(__sharedData, 8, _toDisplayString(computedAvailableHeight.value));
                _setSharedData(__sharedData, 9, _toDisplayString(scrollTop.value));
                _setSharedData(__sharedData, 10, _toDisplayString(reachBottomCount.value));
              });
              _createSharedDataFor(_setSharedDataScoped(__sharedData, 2, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return demoItems;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                _renderSharedDataEffect(() => {
                  const _item = _for_item0.value;
                  const __backgroundColor_item_color = { backgroundColor: _item.color };
                  _setSharedDataStyle(__sharedData_VFor0, 1, __backgroundColor_item_color);
                  _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_item.avatar));
                  _setSharedData(__sharedData_VFor0, 3, _toDisplayString(_item.title));
                  _setSharedData(__sharedData_VFor0, 4, _toDisplayString(_item.subtitle));
                  _setSharedDataStyle(__sharedData_VFor0, 5, __backgroundColor_item_color);
                  _setSharedData(__sharedData_VFor0, 6, _toDisplayString(_item.tag));
                  _setSharedData(__sharedData_VFor0, 7, _toDisplayString(_item.desc));
                });
                return null;
              }, (__sharedData_VFor0, item, index) => {
                return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
              });
              _setSharedDataEvent(__sharedData, 5, handleScroll);
              _setSharedDataEvent(__sharedData, 6, handleScrollToLower);
              _setSharedDataStyle(__sharedData, 7, { maxWidth: "520px" });
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 11, _toDisplayString(reachBottomCount.value));
              });
            }
          });
          _setSharedData(__sharedData, 1, n97.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n98.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"flex":{"":{"display":"flex"}},"flex-col":{"":{"flexDirection":"column"}},"flex-1":{"":{"flex":"1"}}};
const layoutDemo = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  layoutDemo as default
};
