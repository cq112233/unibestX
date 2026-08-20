import { i as icons } from "./icons.js";
import { a as addUnit, b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { c as config } from "../../libs/config/config.js";
import { d as defProps } from "./icon.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, toSharedDataImageMode: _toSharedDataImageMode, setSharedDataStyle: _setSharedDataStyle, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpIconUpIcon";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "d1bb5820",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-icon/up-icon.uvue",
  __name: "up-icon",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    // 图标类名
    name: {
      type: String,
      default: () => {
        return defProps.getString("icon.name");
      }
    },
    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: () => {
        return defProps.getString("icon.color");
      }
    },
    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: () => {
        return defProps.getString("icon.size");
      }
    },
    // 是否显示粗体
    bold: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("icon.bold");
      }
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String],
      default: () => {
        return defProps.getString("icon.index");
      }
    },
    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: () => {
        return defProps.getString("icon.hoverClass");
      }
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: () => {
        return defProps.getString("icon.customPrefix");
      }
    },
    // 图标右边或者下面的文字
    label: {
      type: [String],
      default: () => {
        return defProps.getString("icon.label");
      }
    },
    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: () => {
        return defProps.getString("icon.labelPos");
      }
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: () => {
        return defProps.getString("icon.labelSize");
      }
    },
    // label的颜色
    labelColor: {
      type: String,
      default: () => {
        return defProps.getString("icon.labelColor");
      }
    },
    // label与图标的距离
    space: {
      type: [String, Number],
      default: () => {
        return defProps.getString("icon.space");
      }
    },
    // 图片的mode
    imgMode: {
      type: String,
      default: () => {
        return defProps.getString("icon.imgMode");
      }
    },
    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: () => {
        return defProps.getString("icon.width");
      }
    },
    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: () => {
        return defProps.getString("icon.height");
      }
    },
    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: () => {
        return defProps.getString("icon.top");
      }
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("icon.stop");
      }
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpIconUpIconSharedData", sharedDataClassId: 0 })));
    const preventEvent = useUltraUI().preventEvent;
    const props = __props;
    const emit = __emit;
    const uClasses = computed(() => {
      let classes = [];
      classes.push(props.customPrefix + "-" + props.name);
      if (props.customPrefix == "upicon") {
        classes.push("up-iconfont");
      } else {
        classes.push(props.customPrefix);
      }
      let types = config.getArray("type");
      if (props.color.toString() != "" && types != null && (types === null || types === void 0 ? null : types.includes(props.color.toString())))
        classes.push("up-icon__icon--" + props.color.toString());
      return classes.join(" ");
    });
    const iconStyle = computed(() => {
      let style = new UTSJSONObject(
        {
          fontSize: addUnit(props.size.toString()),
          lineHeight: addUnit(props.size.toString()),
          fontWeight: props.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: addUnit(props.top)
        }
        // 非主题色值时，才当作颜色值
      );
      let types = config.getArray("type");
      if (props.color.toString() != "" && types != null && !types.includes(props.color.toString())) {
        style["color"] = props.color.toString();
      }
      return style;
    });
    const isImg = computed(() => {
      return props.name.toString().indexOf("/") != -1;
    });
    const imgStyle = computed(() => {
      let style = new UTSJSONObject(
        {}
        // 如果设置width和height属性，则优先使用，否则使用size属性
      );
      style["width"] = props.width != "" ? addUnit(props.width) : addUnit(props.size.toString());
      style["height"] = props.height != "" ? addUnit(props.height) : addUnit(props.size.toString());
      return style;
    });
    const mergedImgStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const img = imgStyle.value;
      return deepMerge(img, custom);
    });
    const mergedIconStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const iconS = iconStyle.value;
      return deepMerge(iconS, custom);
    });
    const labelStyleComputed = computed(() => {
      return new UTSJSONObject({
        color: props.labelColor,
        fontSize: addUnit(props.labelSize),
        marginLeft: props.labelPos == "right" ? addUnit(props.space) : "0px",
        marginTop: props.labelPos == "bottom" ? addUnit(props.space) : "0px",
        marginRight: props.labelPos == "left" ? addUnit(props.space) : "0px",
        marginBottom: props.labelPos == "top" ? addUnit(props.space) : "0px"
      });
    });
    const icon = computed(() => {
      if (props.customPrefix !== "upicon")
        return "";
      if (icons["upicon-" + props.name] != null) {
        return icons["upicon-" + props.name];
      } else {
        return props.name.toString();
      }
    });
    function clickHandler(e) {
      emit("click", props.index);
      if (props.stop) {
        preventEvent(e);
      }
    }
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 12, ["up-icon", ["up-icon--" + __props.labelPos]]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isImg.value));
      }, () => {
        _renderSharedDataEffect(() => {
          const _imgMode = __props.imgMode;
          _setSharedDataAttr(__sharedData, 1, _toSharedDataString(__props.name));
          _setSharedDataAttr(__sharedData, 2, _toSharedDataImageMode(_imgMode != "" ? _imgMode : "aspectFit"));
          _setSharedDataStyle(__sharedData, 3, mergedImgStyle.value);
        });
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 4, ["up-icon__icon", uClasses.value]);
          _setSharedDataStyle(__sharedData, 5, mergedIconStyle.value);
          _setSharedDataClass(__sharedData, 6, _toSharedDataString(__props.hoverClass));
          _setSharedData(__sharedData, 7, _toDisplayString(icon.value));
        });
      }, 261);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 8, _toSharedDataBoolean(__props.label !== ""));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataStyle(__sharedData, 9, labelStyleComputed.value);
          _setSharedData(__sharedData, 10, _toDisplayString(__props.label));
        });
      });
      _setSharedDataEvent(__sharedData, 11, clickHandler);
      return __sharedData;
    };
  }
});
const _style_0 = {"@FONT-FACE":[{"src":"url(\"/assets/iconfont.4bc8cc97.ttf\")","fontFamily":"iconfont"}]};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-icon.js.map
