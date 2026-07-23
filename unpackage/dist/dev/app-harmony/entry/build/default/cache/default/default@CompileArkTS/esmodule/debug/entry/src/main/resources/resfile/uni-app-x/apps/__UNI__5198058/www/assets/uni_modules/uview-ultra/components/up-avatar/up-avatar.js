import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, ref, computed, watch, onMounted, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createBlock } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-text/up-text&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useMp&";
import { r as random } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-avatar/avatar&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    //...mpSharedMpOptions,
    name: "up-avatar"
  },
  __name: "up-avatar",
  props: {
    // 头像图片路径(不能为相对路径)
    src: {
      type: String,
      default: defProps.getString("avatar.src")
    },
    // 头像形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: defProps.getString("avatar.shape")
    },
    // 头像尺寸
    size: {
      type: [String, Number],
      default: defProps.getNumber("avatar.size")
    },
    // 裁剪模式
    mode: {
      type: String,
      default: defProps.getString("avatar.mode")
    },
    // 显示的文字
    text: {
      type: String,
      default: defProps.getString("avatar.text")
    },
    // 背景色
    bgColor: {
      type: String,
      default: defProps.getString("avatar.bgColor")
    },
    // 文字颜色
    color: {
      type: String,
      default: defProps.getString("avatar.color")
    },
    // 文字大小
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("avatar.fontSize")
    },
    // 显示的图标
    icon: {
      type: String,
      default: defProps.getString("avatar.icon")
    },
    // 显示小程序头像，只对百度，微信，QQ小程序有效
    mpAvatar: {
      type: Boolean,
      default: defProps.getBoolean("avatar.mpAvatar")
    },
    // 是否使用随机背景色
    randomBgColor: {
      type: Boolean,
      default: defProps.getBoolean("avatar.randomBgColor")
    },
    // 加载失败的默认头像(组件有内置默认图片)
    defaultUrl: {
      type: String,
      default: defProps.getString("avatar.defaultUrl")
    },
    // 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
    colorIndex: {
      type: [String, Number],
      default: defProps.getString("avatar.colorIndex")
    },
    // 组件标识符
    name: {
      type: String,
      default: defProps.getString("avatar.name")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const colors = [
      "#ffb34b",
      "#f2bba9",
      "#f7a196",
      "#f18080",
      "#88a867",
      "#bfbf39",
      "#89c152",
      "#94d554",
      "#f19ec2",
      "#afaae4",
      "#e1b0df",
      "#c38cc1",
      "#72dcdc",
      "#9acdcb",
      "#77b1cc",
      "#448aca",
      "#86cefa",
      "#98d1ee",
      "#73d1f1",
      "#80a7dc"
    ];
    const avatarUrl = ref("");
    const allowMp = ref(false);
    const getBackColor = computed(() => {
      let result = "#eeeeee";
      if (props.text !== "" || props.icon !== "") {
        const colorIndexNo = parseInt(props.colorIndex.toString());
        if (props.randomBgColor) {
          if (props.colorIndex.toString() !== "") {
            result = colors[colorIndexNo];
          } else {
            result = colors[random(0, 19)];
          }
        } else {
          result = props.bgColor;
        }
      } else {
        result = "transparent";
      }
      return result;
    });
    const errorHandler = () => {
      const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAMgDAREAAhEBAxEB/8QAcQABAQEAAwEBAAAAAAAAAAAAAAUEAQMGAgcBAQAAAAAAAAAAAAAAAAAAAAAQAAIBAwICBgkDBQAAAAAAAAABAhEDBCEFMVFBYXGREiKBscHRMkJSEyOh4XLxYjNDFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHbHFyZ/Dam+yLA+Z2L0Pjtyj2poD4AAAAAAAAAAAAAAAAAAAAAAAAKWFs9y6lcvvwQeqj8z9wFaziY1n/HbUX9XF97A7QAGXI23EvJ1goyfzR0YEfN269jeZ+a03pNe0DIAAAAAAAAAAAAAAAAAAAACvtO3RcVkXlWutuL9YFYAAAAAOJRjKLjJUi9GmB5/csH/mu1h/in8PU+QGMAAAAAAAAAAAAAAAAAAaMDG/6MmMH8C80+xAelSSVFolwQAAAAAAAHVlWI37ErUelaPk+hgeYnCUJuElSUXRrrQHAAAAAAAAAAAAAAAAABa2Oz4bM7r4zdF2ICmAAAAAAAAAg7zZ8GX41wuJP0rRgYAAAAAAAAAAAAAAAAADXjbblX6NHct/wAXWPYBPt2oW4qFuKjFcEgOQAAAAAAdWXkwx7Tuy1pwjHVtgRMndr92qg/sQ6I8X2sDKAAAAAAAAAAAAAAAAADVhbdk5UvDDyx+qXCIG/G2rEtUco/cn9UtewDYAAAAAAJG8Z3hvLGtvymvNLq6gIYAAAAAAAAAAAAAAAAAPS7e64Vn+KA0AAAAAAAAAJm+v8Ftf3ewCKAAAAAAAAAAAAAAAAAX9muqeGo9NttP06+0DcAAAAAAAAAjb7dTu2ra+VOT9P8AQCWAAAAAAAAAAAAAAAAAUNmyPt5Ltv4bui/kuAF0AAAAAAADiUlGLlJ0SVW+oDzOXfd/Ind6JPRdS0QHSAAAAAAAAAAAAAAAAAE2nVaNcGB6Lbs6OTao9LsF51z60BrAAAAAABJ3jOVHjW3r/sa9QEgAAAAAAAAAAAAAAAAAAAPu1duWriuW34ZR4MC9hbnZyEoy8l36XwfYBsAAADaSq9EuLAlZ+7xSdrGdW9Hc5dgEdtt1erfFgAAAAAAAAAAAAAAAAADVjbblX6NHct/wAXWPYBPt2oW4qFuKjFcEgOQAAAAAAdWXkwx7Tuy1pwjHVtgRMndr92qg/sQ6I8X2sDKAAAAAAAAAAAAAAAAADXhbdk5UvDDyx+qXCIG/G2rEtUco/cn9UtewDYAAAAAAJG8Z3hvLGtvymvNLq6gIYAAAAAAAAAAAAAAAAAPS7e64Vn+KA0AAAAAAAAAJm+v8Ftf3ewCKAAAAAAAAAAAAAAAAAX9muqeGo9NttP06+0DcAAAAAAAAAjb7dTu2ra+VOT9P8AQCWAAAAAAAAAAAAAAAAAUNmy";
      avatarUrl.value = props.defaultUrl !== "" ? props.defaultUrl : base64Avatar;
    };
    watch(() => {
      return props.src;
    }, (newVal) => {
      if (newVal == null || newVal.trim() === "") {
        avatarUrl.value = "";
        errorHandler();
      } else {
        avatarUrl.value = newVal;
      }
    }, { immediate: true });
    onMounted(() => {
    });
    const clickHandler = (e = null) => {
      emit("click", props.name, e);
    };
    const __returned__ = { props, emit, colors, avatarUrl, allowMp, getBackColor, errorHandler, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-avatar": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "up-avatar--circle": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100 } }, "up-avatar--square": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "up-avatar__image--circle": { "": { "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "overflow": "hidden" } }, "up-avatar__image--square": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_text = resolveEasycom(resolveDynamicComponent("up-text"), __easycom_0$1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-avatar", [`up-avatar--${$props.shape}`]]),
      style: normalizeStyle([{
        backgroundColor: $setup.getBackColor,
        width: _ctx.$upAddUnit($props.size),
        height: _ctx.$upAddUnit($props.size)
      }, _ctx.$upAddStyle(_ctx.customStyle)]),
      onClick: $setup.clickHandler
    },
    [
      renderSlot(_ctx.$slots, "default", {}, () => [
        $props.mpAvatar && $setup.allowMp ? (openBlock(), createElementBlock("text", { key: 0 })) : $props.icon != "" ? (openBlock(), createBlock(_component_up_icon, {
          key: 1,
          name: $props.icon,
          size: $props.fontSize,
          color: $props.color
        }, null, 8, ["name", "size", "color"])) : $props.text != "" ? (openBlock(), createBlock(_component_up_text, {
          key: 2,
          text: $props.text,
          size: $props.fontSize,
          color: $props.color,
          align: "center",
          style: { justifyContent: "center" }
        }, null, 8, ["text", "size", "color"])) : (openBlock(), createElementBlock("image", {
          key: 3,
          class: normalizeClass(["up-avatar__image", [`up-avatar__image--${$props.shape}`]]),
          src: $setup.avatarUrl != "" ? $setup.avatarUrl : $props.defaultUrl,
          mode: $props.mode,
          onError: $setup.errorHandler,
          style: normalizeStyle([{
            width: _ctx.$upAddUnit($props.size),
            height: _ctx.$upAddUnit($props.size)
          }])
        }, null, 46, ["src", "mode"]))
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-avatar/up-avatar.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-avatar.js.map
