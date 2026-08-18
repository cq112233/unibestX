import { b as base64Error, a as base64Empty } from "../z-paging-x/static/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass } = globalThis.Vue;
const __className = "GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmpty";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "z-paging-x-empty"
  },
  __dynamicSharedData: true,
  __hash: "5ee097ee",
  __className,
  __filename: "uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.uvue",
  __name: "z-paging-x-empty",
  props: {
    // 空数据描述文字
    emptyText: {
      type: String,
      default: "没有数据哦~"
    },
    // 空数据图片
    emptyImg: {
      type: String,
      default: ""
    },
    // 是否显示空数据图重新加载按钮
    showEmptyReload: {
      type: Boolean,
      default: false
    },
    // 空数据点击重新加载文字
    emptyReloadText: {
      type: String,
      default: "重新加载"
    },
    // 是否是加载失败
    isLoadFailed: {
      type: Boolean,
      default: false
    },
    // 空数据图样式
    emptyStyle: {
      type: Object
    },
    // 空数据图img样式
    emptyImgStyle: {
      type: Object
    },
    // 空数据图描述文字样式
    emptyTitleStyle: {
      type: Object
    },
    // 空数据图重新加载按钮样式
    emptyReloadStyle: {
      type: Object
    }
  },
  emits: ["reload", "viewClick"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmptySharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const localEmptyImg = computed(() => {
      return props.isLoadFailed ? base64Error : base64Empty;
    });
    const reloadClick = () => {
      emit("reload");
    };
    const emptyClick = () => {
      emit("viewClick");
    };
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 11, [__props.emptyStyle]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.emptyImg.length > 0));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 1, [__props.emptyImgStyle]);
          _setSharedDataAttr(__sharedData, 2, _toSharedDataString(__props.emptyImg));
        });
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 3, [__props.emptyImgStyle]);
          _setSharedDataAttr(__sharedData, 4, _toSharedDataString(localEmptyImg.value));
        });
      }, 261);
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 12, [__props.emptyTitleStyle]);
        _setSharedData(__sharedData, 13, _toDisplayString(__props.emptyText));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.showEmptyReload));
      }, () => {
        _setSharedDataEvent(__sharedData, 6, reloadClick);
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 7, [__props.emptyReloadStyle]);
          _setSharedData(__sharedData, 8, _toDisplayString(__props.emptyReloadText));
        });
      });
      _setSharedDataEvent(__sharedData, 9, emptyClick);
      _setSharedDataClass(__sharedData, 10, { "zpx-container": true });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=z-paging-x-empty.js.map
