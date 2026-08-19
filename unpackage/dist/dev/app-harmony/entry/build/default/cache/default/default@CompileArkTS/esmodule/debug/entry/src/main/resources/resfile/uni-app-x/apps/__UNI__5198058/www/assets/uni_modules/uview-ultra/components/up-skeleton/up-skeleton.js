import { a as addUnit, s as sleep } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataFor: _createSharedDataFor, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSkeletonUpSkeleton";
const { computed, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-skeleton"
  },
  __dynamicSharedData: true,
  __hash: "efccbd30",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-skeleton/up-skeleton.uvue",
  __name: "up-skeleton",
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    animate: {
      type: Boolean,
      default: true
    },
    rows: {
      type: [String, Number],
      default: 0
    },
    rowsWidth: {
      type: [String, Number, Array],
      default: "100%"
    },
    rowsHeight: {
      type: [String, Number, Array],
      default: 18
    },
    title: {
      type: Boolean,
      default: true
    },
    titleWidth: {
      type: [String, Number],
      default: "50%"
    },
    titleHeight: {
      type: [String, Number],
      default: 18
    },
    avatar: {
      type: Boolean,
      default: false
    },
    avatarSize: {
      type: [String, Number],
      default: 32
    },
    avatarShape: {
      type: String,
      default: "circle"
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSkeletonUpSkeletonSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const rowsArray = computed(() => {
      var _a, _b;
      const rows = [];
      const rowCount = parseInt(props.rows.toString());
      const rWidth = props.rowsWidth;
      const rHeight = props.rowsHeight;
      for (let i = 0; i < rowCount; i++) {
        let item = new UTSJSONObject({});
        let rowWidth = "";
        if (UTS.isInstanceOf(rWidth, Array)) {
          const rWidthArr = rWidth;
          if (i == rowCount - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = rWidthArr[i] != null ? (_a = rWidthArr[i]) !== null && _a !== void 0 ? _a : "0px" : i == rWidthArr.length ? "70%" : "100%";
          }
        } else {
          if (i == rowCount - 1) {
            rowWidth = "70%";
          } else {
            rowWidth = rWidth != null ? rWidth.toString() : "";
          }
        }
        let rowHeight = "";
        if (UTS.isInstanceOf(rHeight, Array)) {
          const rHeightArr = rHeight;
          rowHeight = rHeightArr[i] != null ? (_b = rHeightArr[i]) !== null && _b !== void 0 ? _b : "0px" : "18px";
        } else {
          rowHeight = rHeight != null ? rHeight.toString() : "";
        }
        if (!props.title && i == 0) {
          item["marginTop"] = "0px";
        } else if (props.title && i == 0) {
          item["marginTop"] = "20px";
        } else {
          item["marginTop"] = "12px";
        }
        item["width"] = addUnit(rowWidth);
        item["height"] = addUnit(rowHeight);
        rows.push(item);
      }
      return rows;
    });
    const uTitleWidth = computed(() => {
      let tWidth = "0px";
      tWidth = addUnit(props.titleWidth);
      return addUnit(tWidth);
    });
    const avatarStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.avatarSize),
        width: addUnit(props.avatarSize)
      });
    });
    const titleStyle = computed(() => {
      return new UTSJSONObject({
        width: uTitleWidth.value,
        height: addUnit(props.titleHeight)
      });
    });
    function getRowStyle(item) {
      return new UTSJSONObject({
        width: item["width"],
        height: item["height"],
        marginTop: item["marginTop"]
      });
    }
    async function getComponentWidth() {
      await sleep(20);
    }
    onMounted(() => {
      getComponentWidth();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.loading));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.avatar));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 2, ["up-skeleton__wrapper__avatar", [`up-skeleton__wrapper__avatar--${__props.avatarShape}`, __props.animate ? "animate" : ""]]);
            _setSharedDataStyle(__sharedData, 3, avatarStyle.value);
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.title));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 5, ["up-skeleton__wrapper__content__title", [__props.animate ? "animate" : ""]]);
            _setSharedDataStyle(__sharedData, 6, titleStyle.value);
          });
        });
        _createSharedDataFor(_setSharedDataScoped(__sharedData, 7, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
        })), () => {
          return rowsArray.value;
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData_VFor0, 1, ["up-skeleton__wrapper__content__rows", [__props.animate ? "animate" : ""]]);
            _setSharedDataStyle(__sharedData_VFor0, 2, getRowStyle(_for_item0.value));
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
        });
        _setSharedDataTemplateRef(__sharedData, 8, (n11) => {
          _setTemplateRef(n11, "up-skeleton__wrapper__content");
        });
        _setSharedDataTemplateRef(__sharedData, 9, (n12) => {
          _setTemplateRef(n12, "up-skeleton__wrapper");
        });
      }, () => {
        _createSharedDataSlot("default", null, null);
      }, 773);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-skeleton.js.map
