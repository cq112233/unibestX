"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upNotify_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_components_upNotify_notify = require("./notify.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
let notifyPropCrt = uni_modules_uviewUltra_components_upNotify_notify.defProps["notify"];
class tmpConfigType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          top: { type: Number, optional: false },
          bgColor: { type: String, optional: false },
          color: { type: String, optional: false },
          fontSize: { type: "Unknown", optional: false },
          safeAreaInsetTop: { type: Boolean, optional: false },
          duration: { type: Number, optional: false }
        };
      },
      name: "tmpConfigType"
    };
  }
  constructor(options, metadata = tmpConfigType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.bgColor = this.__props__.bgColor;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.safeAreaInsetTop = this.__props__.safeAreaInsetTop;
    this.duration = this.__props__.duration;
    delete this.__props__;
  }
}
const _sfc_main = common_vendor.defineComponent({
  name: "up-notify",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upNotify_props.propsNotify],
  data() {
    return {
      // 是否展示组件
      open: false,
      timer: null,
      config: new UTSJSONObject({
        // 到顶部的距离
        top: notifyPropCrt["top"],
        // type主题，primary，success，warning，error
        type: notifyPropCrt["type"],
        // 字体颜色
        color: notifyPropCrt["color"],
        // 背景颜色
        bgColor: notifyPropCrt["bgColor"],
        // 展示的文字内容
        message: notifyPropCrt["message"],
        // 展示时长，为0时不消失，单位ms
        duration: notifyPropCrt["duration"],
        // 字体大小
        fontSize: notifyPropCrt["fontSize"],
        // 是否留出顶部安全距离（状态栏高度）
        safeAreaInsetTop: notifyPropCrt["safeAreaInsetTop"]
      }),
      // 合并后的配置，避免多次调用组件后，可能会复用之前使用的配置参数
      tmpConfig: new UTSJSONObject({
        top: notifyPropCrt["top"],
        type: notifyPropCrt["type"],
        color: notifyPropCrt["color"],
        bgColor: notifyPropCrt["bgColor"],
        message: "",
        duration: notifyPropCrt["duration"],
        fontSize: notifyPropCrt["fontSize"],
        safeAreaInsetTop: notifyPropCrt["safeAreaInsetTop"]
      })
    };
  },
  computed: {
    containerStyle() {
      let top = 0;
      const topValue = this.tmpConfig["top"];
      const isTopZero = topValue != null && parseFloat(topValue.toString()) == 0;
      const style = new UTSJSONObject({
        top: uni_modules_uviewUltra_libs_function_index.addUnit(isTopZero ? top : topValue),
        // 因为组件底层为up-transition组件，必须将其设置为fixed定位
        // 让其出现在导航栏底部
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 10076
      });
      return style;
    },
    // 组件背景颜色
    backgroundColor() {
      const style = new UTSJSONObject({});
      if (this.tmpConfig["bgColor"] != "") {
        style.backgroundColor = this.tmpConfig["bgColor"];
      }
      return style;
    },
    // 默认主题下的图标
    icon() {
      let icon = "";
      if (this.tmpConfig["type"] === "success") {
        icon = "checkmark-circle";
      } else if (this.tmpConfig["type"] === "error") {
        icon = "close-circle";
      } else if (this.tmpConfig["type"] === "warning") {
        icon = "error-circle";
      }
      return icon;
    }
  },
  created() {
  },
  methods: {
    getPx(e = null) {
      return uni_modules_uviewUltra_libs_function_index.getPx(e);
    },
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    primary(message) {
      this.show(new UTSJSONObject({
        type: "primary",
        message
      }));
    },
    success(message) {
      this.show(new UTSJSONObject({
        type: "success",
        message
      }));
    },
    error(message) {
      this.show(new UTSJSONObject({
        type: "error",
        message
      }));
    },
    warning(message) {
      this.show(new UTSJSONObject({
        type: "warning",
        message
      }));
    },
    show(options) {
      this.tmpConfig = uni_modules_uviewUltra_libs_function_index.deepMerge(this.config, options);
      this.clearTimer();
      this.open = true;
      if (parseInt(this.tmpConfig["duration"].toString()) > 0) {
        this.timer = setTimeout(() => {
          this.open = false;
          this.clearTimer();
          const complete = this.tmpConfig["complete"];
          if (typeof complete === "function") {
            complete();
          }
        }, parseInt(this.tmpConfig["duration"].toString()));
      }
    },
    // 关闭notify
    close() {
      this.clearTimer();
    },
    clearTimer() {
      var _a;
      this.open = false;
      clearTimeout((_a = this.timer) !== null && _a !== void 0 ? _a : 0);
      this.timer = null;
    }
  },
  beforeUnmount() {
    this.clearTimer();
  }
});
if (!Array) {
  const _easycom_up_status_bar2 = common_vendor.resolveComponent("up-status-bar");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_transition2 = common_vendor.resolveComponent("up-transition");
  (_easycom_up_status_bar2 + _easycom_up_icon2 + _easycom_up_transition2)();
}
const _easycom_up_status_bar = () => "../up-status-bar/up-status-bar.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_transition = () => "../up-transition/up-transition.js";
if (!Math) {
  (_easycom_up_status_bar + _easycom_up_icon + _easycom_up_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $data.tmpConfig["safeAreaInsetTop"]
  }, $data.tmpConfig["safeAreaInsetTop"] ? {
    b: common_vendor.p({
      class: "data-v-21e8743e"
    })
  } : {}, {
    c: ["success", "warning", "error"].includes($data.tmpConfig["type"].toString())
  }, ["success", "warning", "error"].includes($data.tmpConfig["type"].toString()) ? {
    d: common_vendor.p({
      name: $data.tmpConfig["icon"],
      color: $data.tmpConfig["color"],
      size: 1.3 * parseFloat($options.getPx($data.tmpConfig["fontSize"] ?? "0").toString()),
      customStyle: {
        marginRight: "4px"
      },
      class: "data-v-21e8743e"
    })
  } : {}, {
    e: common_vendor.t($data.tmpConfig["message"]),
    f: $options.addUnit($data.tmpConfig["fontSize"] ?? "0"),
    g: $data.tmpConfig["color"] ?? "",
    h: common_vendor.n(`up-notify--${$data.tmpConfig["type"]}`),
    i: common_vendor.s($options.backgroundColor),
    j: common_vendor.s($options.addStyle(_ctx.customStyle)),
    k: common_vendor.gei(_ctx, ""),
    l: common_vendor.p({
      mode: "slide-down",
      customStyle: $options.containerStyle,
      show: $data.open,
      id: common_vendor.gei(_ctx, ""),
      class: "data-v-21e8743e"
    }),
    m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-21e8743e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-notify/up-notify.js.map
