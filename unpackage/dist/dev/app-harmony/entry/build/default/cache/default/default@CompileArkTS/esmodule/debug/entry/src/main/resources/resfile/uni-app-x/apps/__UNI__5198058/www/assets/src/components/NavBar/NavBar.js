import { s as safeAreaInsets, a as systemInfo } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/systemInfo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenSrcComponentsNavBarNavBar";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "8698ac0e",
  __className,
  __filename: "src/components/NavBar/NavBar.uvue",
  __name: "NavBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    titleColor: {
      type: String,
      default: "#1e293b"
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    showBack: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcComponentsNavBarNavBarSharedData", sharedDataClassId: 0 })));
    const statusBarHeight = computed(() => {
      var _a, _b, _c, _d;
      return (_d = (_b = (_a = safeAreaInsets.value) === null || _a === void 0 ? null : _a.top) !== null && _b !== void 0 ? _b : (_c = systemInfo.value) === null || _c === void 0 ? null : _c.statusBarHeight) !== null && _d !== void 0 ? _d : 0;
    });
    function handleBack() {
      uni.navigateBack(new UTSJSONObject({
        success() {
          uni.__f__("log", "at src/components/NavBar/NavBar.uvue:86", "返回成功");
        },
        fail() {
          uni.switchTab({
            url: "/src/pages/index/index"
          });
        }
      }));
    }
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 7, __props.fixed ? "navbar-container navbar-fixed" : "navbar-container");
        _setSharedDataStyle(__sharedData, 8, { backgroundColor: __props.bgColor, borderBottom: __props.border ? "1px solid #e2e8f0" : "none" });
        _setSharedDataStyle(__sharedData, 9, { height: `${statusBarHeight.value}px` });
      });
      _createSharedDataSlot("left", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.showBack));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 3, { borderColor: __props.titleColor });
          });
        });
      });
      _setSharedDataEvent(__sharedData, 6, handleBack);
      _createSharedDataSlot("default", null, null, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 4, { color: __props.titleColor });
          _setSharedData(__sharedData, 5, _toDisplayString(__props.title));
        });
      });
      _createSharedDataSlot("right", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.fixed && __props.placeholder));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 1, { height: `${statusBarHeight.value + 44}px` });
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=NavBar.js.map
