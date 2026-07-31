"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/composable/useMp.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_components_upAvatar_avatar = require("./avatar.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_text_1 = common_vendor.resolveComponent("up-text");
  (_easycom_up_icon_1 + _easycom_up_text_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_text = () => "../up-text/up-text.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_text)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  //...mpSharedMpOptions,
  name: "up-avatar"
}, { __name: "up-avatar", props: {
  // 头像图片路径(不能为相对路径)
  src: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.src")
  },
  // 头像形状，circle-圆形，square-方形
  shape: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.shape")
  },
  // 头像尺寸
  size: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getNumber("avatar.size")
  },
  // 裁剪模式
  mode: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.mode")
  },
  // 显示的文字
  text: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.text")
  },
  // 背景色
  bgColor: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.bgColor")
  },
  // 文字颜色
  color: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.color")
  },
  // 文字大小
  fontSize: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getNumber("avatar.fontSize")
  },
  // 显示的图标
  icon: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.icon")
  },
  // 显示小程序头像，只对百度，微信，QQ小程序有效
  mpAvatar: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getBoolean("avatar.mpAvatar")
  },
  // 是否使用随机背景色
  randomBgColor: {
    type: Boolean,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getBoolean("avatar.randomBgColor")
  },
  // 加载失败的默认头像(组件有内置默认图片)
  defaultUrl: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.defaultUrl")
  },
  // 如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间
  colorIndex: {
    type: [String, Number],
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.colorIndex")
  },
  // 组件标识符
  name: {
    type: String,
    default: uni_modules_uviewUltra_components_upAvatar_avatar.defProps.getString("avatar.name")
  }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
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
  const avatarUrl = common_vendor.ref("");
  const allowMp = common_vendor.ref(false);
  const getBackColor = common_vendor.computed(() => {
    let result = "#eeeeee";
    if (props.text !== "" || props.icon !== "") {
      const colorIndexNo = parseInt(props.colorIndex.toString());
      if (props.randomBgColor) {
        if (props.colorIndex.toString() !== "") {
          result = colors[colorIndexNo];
        } else {
          result = colors[uni_modules_uviewUltra_libs_function_index.random(0, 19)];
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
  common_vendor.watch(() => {
    return props.src;
  }, (newVal) => {
    if (newVal == null || newVal.trim() === "") {
      avatarUrl.value = "";
      errorHandler();
    } else {
      avatarUrl.value = newVal;
    }
  }, { immediate: true });
  common_vendor.onMounted(() => {
    allowMp.value = true;
  });
  const clickHandler = (e = null) => {
    emit("click", props.name, e);
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.mpAvatar && allowMp.value
    }, __props.mpAvatar && allowMp.value ? {
      b: common_vendor.s({
        width: _ctx.$upAddUnit(__props.size),
        height: _ctx.$upAddUnit(__props.size)
      })
    } : {}, {
      c: __props.mpAvatar && allowMp.value
    }, __props.mpAvatar && allowMp.value ? {} : __props.icon != "" ? {
      e: common_vendor.p({
        name: __props.icon,
        size: __props.fontSize,
        color: __props.color,
        class: "data-v-364890b0"
      })
    } : __props.text != "" ? {
      g: common_vendor.p({
        text: __props.text,
        size: __props.fontSize,
        color: __props.color,
        align: "center",
        class: "data-v-364890b0",
        style: common_vendor.normalizeStyle({
          justifyContent: "center"
        })
      })
    } : {
      h: common_vendor.n(`up-avatar__image--${__props.shape}`),
      i: avatarUrl.value != "" ? avatarUrl.value : __props.defaultUrl,
      j: __props.mode,
      k: common_vendor.o(errorHandler, "2e"),
      l: common_vendor.s({
        width: _ctx.$upAddUnit(__props.size),
        height: _ctx.$upAddUnit(__props.size)
      })
    }, {
      d: __props.icon != "",
      f: __props.text != "",
      m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      n: common_vendor.n(`up-avatar--${__props.shape}`),
      o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      p: common_vendor.s({
        backgroundColor: getBackColor.value,
        width: _ctx.$upAddUnit(__props.size),
        height: _ctx.$upAddUnit(__props.size)
      }),
      q: common_vendor.s(_ctx.$upAddStyle(_ctx.customStyle)),
      r: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      s: common_vendor.o(clickHandler, "75")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-364890b0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-avatar/up-avatar.js.map
