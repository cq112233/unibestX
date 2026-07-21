"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_up_alert_1 = common_vendor.resolveComponent("up-alert");
  const _easycom_up_notice_bar_1 = common_vendor.resolveComponent("up-notice-bar");
  const _easycom_up_collapse_item_1 = common_vendor.resolveComponent("up-collapse-item");
  const _easycom_up_collapse_1 = common_vendor.resolveComponent("up-collapse");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_tooltip_1 = common_vendor.resolveComponent("up-tooltip");
  const _easycom_up_divider_1 = common_vendor.resolveComponent("up-divider");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_overlay_1 = common_vendor.resolveComponent("up-overlay");
  const _easycom_up_toast_1 = common_vendor.resolveComponent("up-toast");
  const _easycom_up_notify_1 = common_vendor.resolveComponent("up-notify");
  const _easycom_up_modal_1 = common_vendor.resolveComponent("up-modal");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  const _easycom_up_loading_page_1 = common_vendor.resolveComponent("up-loading-page");
  (_easycom_up_alert_1 + _easycom_up_notice_bar_1 + _easycom_up_collapse_item_1 + _easycom_up_collapse_1 + _easycom_up_button_1 + _easycom_up_tooltip_1 + _easycom_up_divider_1 + _easycom_up_loading_icon_1 + _easycom_up_overlay_1 + _easycom_up_toast_1 + _easycom_up_notify_1 + _easycom_up_modal_1 + _easycom_up_popup_1 + _easycom_up_loading_page_1)();
}
const _easycom_up_alert = () => "../../../../uni_modules/uview-ultra/components/up-alert/up-alert.js";
const _easycom_up_notice_bar = () => "../../../../uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js";
const _easycom_up_collapse_item = () => "../../../../uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.js";
const _easycom_up_collapse = () => "../../../../uni_modules/uview-ultra/components/up-collapse/up-collapse.js";
const _easycom_up_button = () => "../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_tooltip = () => "../../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
const _easycom_up_divider = () => "../../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
const _easycom_up_loading_icon = () => "../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
const _easycom_up_overlay = () => "../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
const _easycom_up_toast = () => "../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
const _easycom_up_notify = () => "../../../../uni_modules/uview-ultra/components/up-notify/up-notify.js";
const _easycom_up_modal = () => "../../../../uni_modules/uview-ultra/components/up-modal/up-modal.js";
const _easycom_up_popup = () => "../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
const _easycom_up_loading_page = () => "../../../../uni_modules/uview-ultra/components/up-loading-page/up-loading-page.js";
if (!Math) {
  (_easycom_up_alert + _easycom_up_notice_bar + _easycom_up_collapse_item + _easycom_up_collapse + _easycom_up_button + _easycom_up_tooltip + _easycom_up_divider + _easycom_up_loading_icon + _easycom_up_overlay + _easycom_up_toast + _easycom_up_notify + _easycom_up_modal + _easycom_up_popup + _easycom_up_loading_page)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "DemoFeedback",
  setup(__props) {
    const loadingPageShow = common_vendor.ref(false);
    function triggerLoadingPage() {
      loadingPageShow.value = true;
      setTimeout(() => {
        loadingPageShow.value = false;
      }, 2e3);
    }
    const collapseValue = common_vendor.ref("1");
    const modalShow = common_vendor.ref(false);
    const modalTitle = common_vendor.ref("");
    const modalContent = common_vendor.ref("");
    const modalShowCancel = common_vendor.ref(false);
    const popupShow = common_vendor.ref(false);
    const popupMode = common_vendor.ref("bottom");
    const overlayShow = common_vendor.ref(false);
    const overlayOpacity = common_vendor.ref(0.5);
    const tooltipButtons = common_vendor.ref(["编辑", "删除"]);
    const uToast = common_vendor.ref(null);
    function showToast(type) {
      const toast = uToast.value;
      if (toast != null) {
        const configs = new UTSJSONObject({
          success: new UTSJSONObject({ message: "操作成功！", type: "success" }),
          error: new UTSJSONObject({ message: "操作失败！", type: "error" }),
          warning: new UTSJSONObject({ message: "请注意风险！", type: "warning" }),
          default: new UTSJSONObject({ message: "这是一条提示", type: "default" })
        });
        const config = configs[type];
        toast.$callMethod("show", new UTSJSONObject({
          message: config.message,
          type: config.type
        }));
      }
    }
    const uNotify = common_vendor.ref(null);
    function showNotify(type) {
      const notify = uNotify.value;
      if (notify != null) {
        const msgs = new UTSJSONObject({
          primary: "主要通知消息",
          success: "操作成功通知",
          warning: "请注意安全通知",
          error: "发生错误通知"
        });
        notify.$callMethod("show", new UTSJSONObject({
          message: msgs[type],
          type
        }));
      }
    }
    function showModal() {
      modalTitle.value = "提示";
      modalContent.value = "这是一个模态弹窗，用于提示重要信息。";
      modalShowCancel.value = false;
      modalShow.value = true;
    }
    function showConfirmModal() {
      modalTitle.value = "确认操作";
      modalContent.value = "确定要执行此操作吗？此操作不可撤销。";
      modalShowCancel.value = true;
      modalShow.value = true;
    }
    function onModalConfirm() {
      modalShow.value = false;
      showToast("success");
    }
    function onModalClose() {
      modalShow.value = false;
    }
    function openPopup(mode) {
      popupMode.value = mode;
      popupShow.value = true;
    }
    function onPopupClose() {
      popupShow.value = false;
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "成功提示",
          type: "success",
          ["show-icon"]: true,
          class: "data-v-bc17eb75"
        }),
        b: common_vendor.p({
          title: "警告提示",
          type: "warning",
          ["show-icon"]: true,
          class: "data-v-bc17eb75"
        }),
        c: common_vendor.p({
          text: "uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库",
          mode: "link",
          class: "data-v-bc17eb75"
        }),
        d: common_vendor.p({
          title: "第一项",
          name: "1",
          class: "data-v-bc17eb75"
        }),
        e: common_vendor.p({
          title: "第二项",
          name: "2",
          class: "data-v-bc17eb75"
        }),
        f: common_vendor.p({
          value: collapseValue.value,
          accordion: true,
          class: "data-v-bc17eb75"
        }),
        g: common_vendor.o(($event) => {
          return showToast("success");
        }, "d1"),
        h: common_vendor.p({
          type: "primary",
          text: "成功提示",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        i: common_vendor.o(($event) => {
          return showToast("error");
        }, "8b"),
        j: common_vendor.p({
          type: "error",
          text: "错误提示",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        k: common_vendor.o(($event) => {
          return showNotify("primary");
        }, "79"),
        l: common_vendor.p({
          type: "primary",
          text: "主要通知",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        m: common_vendor.o(($event) => {
          return showNotify("success");
        }, "2a"),
        n: common_vendor.p({
          type: "success",
          text: "成功通知",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        o: common_vendor.o(triggerLoadingPage, "cd"),
        p: common_vendor.p({
          type: "primary",
          text: "触发全屏加载",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        q: common_vendor.o(($event) => {
          return overlayShow.value = true;
        }, "21"),
        r: common_vendor.p({
          type: "primary",
          text: "显示遮罩",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        s: common_vendor.o(($event) => {
          overlayOpacity.value = 0.3;
          overlayShow.value = true;
        }, "c6"),
        t: common_vendor.p({
          type: "warning",
          text: "半透明遮罩",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        v: common_vendor.o(showModal, "fd"),
        w: common_vendor.p({
          type: "primary",
          text: "弹窗提示",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        x: common_vendor.o(showConfirmModal, "26"),
        y: common_vendor.p({
          type: "warning",
          text: "确认弹窗",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        z: common_vendor.o(($event) => {
          return openPopup("top");
        }, "72"),
        A: common_vendor.p({
          type: "primary",
          text: "顶部弹出",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        B: common_vendor.o(($event) => {
          return openPopup("bottom");
        }, "b9"),
        C: common_vendor.p({
          type: "primary",
          text: "底部弹出",
          size: "mini",
          class: "data-v-bc17eb75"
        }),
        D: common_vendor.p({
          text: "长按此处复制文本",
          direction: "top",
          class: "data-v-bc17eb75"
        }),
        E: common_vendor.p({
          text: "长按显示操作",
          direction: "top",
          ["show-copy"]: false,
          buttons: tooltipButtons.value,
          class: "data-v-bc17eb75"
        }),
        F: common_vendor.p({
          text: "反馈组件结束",
          class: "data-v-bc17eb75"
        }),
        G: common_vendor.p({
          mode: "circle",
          class: "data-v-bc17eb75"
        }),
        H: common_vendor.o(() => {
        }, "24"),
        I: common_vendor.o(($event) => {
          return overlayShow.value = false;
        }, "08"),
        J: common_vendor.p({
          show: overlayShow.value,
          opacity: overlayOpacity.value,
          class: "data-v-bc17eb75"
        }),
        K: common_vendor.sr(uToast, "bc17eb75-22", {
          "k": "uToast"
        }),
        L: common_vendor.p({
          class: "r data-v-bc17eb75"
        }),
        M: common_vendor.sr(uNotify, "bc17eb75-23", {
          "k": "uNotify"
        }),
        N: common_vendor.p({
          class: "r data-v-bc17eb75"
        }),
        O: common_vendor.o(onModalConfirm, "1e"),
        P: common_vendor.o(onModalClose, "98"),
        Q: common_vendor.p({
          show: modalShow.value,
          title: modalTitle.value,
          content: modalContent.value,
          ["show-confirm-button"]: true,
          ["show-cancel-button"]: modalShowCancel.value,
          class: "data-v-bc17eb75"
        }),
        R: common_vendor.t(popupMode.value),
        S: common_vendor.o(onPopupClose, "e5"),
        T: common_vendor.p({
          show: popupShow.value,
          mode: popupMode.value,
          closeable: true,
          round: 10,
          class: "data-v-bc17eb75"
        }),
        U: common_vendor.p({
          loading: loadingPageShow.value,
          ["loading-text"]: "页面正在加载中...",
          ["loading-mode"]: "circle",
          class: "data-v-bc17eb75"
        }),
        V: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        W: `${_ctx.u_s_b_h}px`,
        X: `${_ctx.u_s_a_i_b}px`,
        Y: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bc17eb75"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/components/DemoFeedback.js.map
