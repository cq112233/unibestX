import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-swiper-indicator/swipterIndicator&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSwiperIndicatorUpSwiperIndicator";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-swiper-indicator"
  },
  __dynamicSharedData: true,
  __hash: "aa7ce418",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator.uvue",
  __name: "up-swiper-indicator",
  props: {
    length: {
      type: [String, Number],
      default: 0
    },
    current: {
      type: [String, Number],
      default: 0
    },
    indicatorActiveColor: {
      type: String,
      default: "#FFFFFF"
    },
    indicatorInactiveColor: {
      type: String,
      default: "rgba(255, 255, 255, 0.35)"
    },
    indicatorMode: {
      type: String,
      default: "line"
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSwiperIndicatorUpSwiperIndicatorSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const lineWidth = ref(22);
    const lengthArray = computed(() => {
      const list = [];
      const len = parseInt(props.length.toString());
      for (let index = 0; index < len; index++) {
        list.push(index.toString());
      }
      return list;
    });
    const lineStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["width"] = addUnit(lineWidth.value);
      style["transform"] = `translateX(${addUnit(parseInt(props.current.toString()) * lineWidth.value)})`;
      style["backgroundColor"] = props.indicatorActiveColor;
      return style;
    });
    const lineWrapperStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(lineWidth.value * parseInt(props.length.toString())),
        backgroundColor: props.indicatorInactiveColor
      });
    });
    function dotStyle(index) {
      const style = new UTSJSONObject({});
      style["backgroundColor"] = index === parseInt(props.current.toString()) ? props.indicatorActiveColor : props.indicatorInactiveColor;
      return style;
    }
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.indicatorMode === "line"));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 1, ["up-swiper-indicator__wrapper", [`up-swiper-indicator__wrapper--${__props.indicatorMode}`]]);
          _setSharedDataStyle(__sharedData, 2, lineWrapperStyle.value);
          _setSharedDataStyle(__sharedData, 3, lineStyle.value);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.indicatorMode === "dot"));
      }, () => {
        _createSharedDataFor(_setSharedDataScoped(__sharedData, 5, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
        })), () => {
          return lengthArray.value;
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          _renderSharedDataEffect(() => {
            const _index = _for_key0.value;
            _setSharedDataClass(__sharedData_VFor0, 1, ["up-swiper-indicator__wrapper__dot", [_index === parseInt(__props.current.toString()) ? "up-swiper-indicator__wrapper__dot--active" : ""]]);
            _setSharedDataStyle(__sharedData_VFor0, 2, dotStyle(_index));
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
        }, 1);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-swiper-indicator.js.map
