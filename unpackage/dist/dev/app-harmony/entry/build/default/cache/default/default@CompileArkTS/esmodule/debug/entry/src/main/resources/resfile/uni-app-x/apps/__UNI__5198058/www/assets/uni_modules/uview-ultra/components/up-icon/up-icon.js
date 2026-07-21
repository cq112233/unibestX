const { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode } = globalThis.Vue
import { i as icons } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/icons&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { c as config } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/icon&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-icon",
  props: {
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
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
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
    const __returned__ = { preventEvent, props, emit, uClasses, iconStyle, isImg, imgStyle, icon, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-icon": { "": { "display": "flex", "alignItems": "center" } }, "up-icon--left": { "": { "flexDirection": "row-reverse", "alignItems": "center" } }, "up-icon--right": { "": { "flexDirection": "row", "alignItems": "center" } }, "up-icon--top": { "": { "flexDirection": "column-reverse", "justifyContent": "center" } }, "up-icon--bottom": { "": { "flexDirection": "column", "justifyContent": "center" } }, "up-icon__icon": { "": { "fontFamily": "iconfont", "position": "relative" } }, "up-icon__icon--primary": { "": { "color": "var(--theme-color, #0957de)" } }, "up-icon__icon--success": { "": { "color": "#5ac725" } }, "up-icon__icon--error": { "": { "color": "#f56c6c" } }, "up-icon__icon--warning": { "": { "color": "#f9ae3d" } }, "up-icon__icon--info": { "": { "color": "#909399" } }, "up-icon__label": { "": { "lineHeight": 1 } }, "@FONT-FACE": [{ "fontFamily": "iconfont", "src": 'url("/assets/iconfont.4bc8cc97.ttf")' }] };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-icon", ["up-icon--" + $props.labelPos]]),
      onClick: $setup.clickHandler
    },
    [
      $setup.isImg ? (openBlock(), createElementBlock("image", {
        key: 0,
        class: "up-icon__img",
        src: $props.name,
        mode: $props.imgMode != "" ? $props.imgMode : "aspectFit",
        style: normalizeStyle([$setup.imgStyle, _ctx.$up.addStyle(_ctx.customStyle)])
      }, null, 12, ["src", "mode"])) : (openBlock(), createElementBlock("text", {
        key: 1,
        class: normalizeClass(["up-icon__icon", $setup.uClasses]),
        style: normalizeStyle([$setup.iconStyle, _ctx.$up.addStyle(_ctx.customStyle)]),
        "hover-class": $props.hoverClass
      }, toDisplayString($setup.icon), 15, ["hover-class"])),
      createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
      $props.label !== "" ? (openBlock(), createElementBlock(
        "text",
        {
          key: 2,
          class: "up-icon__label",
          style: normalizeStyle({
            color: $props.labelColor,
            fontSize: _ctx.$up.addUnit($props.labelSize),
            marginLeft: $props.labelPos == "right" ? _ctx.$up.addUnit($props.space) : 0,
            marginTop: $props.labelPos == "bottom" ? _ctx.$up.addUnit($props.space) : 0,
            marginRight: $props.labelPos == "left" ? _ctx.$up.addUnit($props.space) : 0,
            marginBottom: $props.labelPos == "top" ? _ctx.$up.addUnit($props.space) : 0
          })
        },
        toDisplayString($props.label),
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
const __easycom_35 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-icon/up-icon.uvue"]]);
export {
  __easycom_35 as _
};
//# sourceMappingURL=up-icon.js.map
