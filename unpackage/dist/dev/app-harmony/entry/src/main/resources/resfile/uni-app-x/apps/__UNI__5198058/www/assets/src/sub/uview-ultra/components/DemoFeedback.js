import { _ as __easycom_0 } from "../../../../uni_modules/uview-ultra/components/up-alert/up-alert.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, createVNode, withCtx, withModifiers, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js";
import { _ as __easycom_2 } from "../../../../uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.js";
import { _ as __easycom_3 } from "../../../../uni_modules/uview-ultra/components/up-collapse/up-collapse.js";
import { _ as __easycom_5 } from "../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_5$1 } from "../../../../uni_modules/uview-ultra/components/up-tooltip/up-tooltip.js";
import { _ as __easycom_42 } from "../../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
import { _ as __easycom_41 } from "../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import { _ as __easycom_8 } from "../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import { _ as __easycom_9 } from "../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import { _ as __easycom_10 } from "../../../../uni_modules/uview-ultra/components/up-notify/up-notify.js";
import { _ as __easycom_11 } from "../../../../uni_modules/uview-ultra/components/up-modal/up-modal.js";
import { _ as __easycom_12 } from "../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import { _ as __easycom_13 } from "../../../../uni_modules/uview-ultra/components/up-loading-page/up-loading-page.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFeedback",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const loadingPageShow = ref(false);
    function triggerLoadingPage() {
      loadingPageShow.value = true;
      setTimeout(() => {
        loadingPageShow.value = false;
      }, 2e3);
    }
    const collapseValue = ref("1");
    const modalShow = ref(false);
    const modalTitle = ref("");
    const modalContent = ref("");
    const modalShowCancel = ref(false);
    const popupShow = ref(false);
    const popupMode = ref("bottom");
    const overlayShow = ref(false);
    const overlayOpacity = ref(0.5);
    const tooltipButtons = ref(["编辑", "删除"]);
    const uToast = ref(null);
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
    const uNotify = ref(null);
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
    const __returned__ = { loadingPageShow, triggerLoadingPage, collapseValue, modalShow, modalTitle, modalContent, modalShowCancel, popupShow, popupMode, overlayShow, overlayOpacity, tooltipButtons, uToast, showToast, uNotify, showNotify, showModal, showConfirmModal, onModalConfirm, onModalClose, openPopup, onPopupClose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "h-10px": { "": { "height": 10 } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "mt-10px": { "": { "marginTop": 10 } }, "p-20px": { "": { "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "p-30px": { "": { "paddingTop": 30, "paddingRight": 30, "paddingBottom": 30, "paddingLeft": 30 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__303133_": { "": { "color": "#303133" } }, "text-__909399_": { "": { "color": "#909399" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-16px": { "": { "fontSize": 16 } }, "w-10px": { "": { "width": 10 } }, "w-20px": { "": { "width": 20 } } };
const _style_1 = { "section-title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 8, "paddingLeft": 16, "fontSize": 18, "fontWeight": "bold", "color": "#303133" } }, "demo-block": { "": { "marginTop": 0, "marginRight": 12, "marginBottom": 12, "marginLeft": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } }, "demo-row": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "marginBottom": 8 } }, "demo-row-start": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "flex-start", "marginBottom": 8 } }, "collapse-text": { "": { "fontSize": 13, "color": "#909399", "lineHeight": "20px" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_alert = resolveEasycom(resolveDynamicComponent("up-alert"), __easycom_0);
  const _component_up_notice_bar = resolveEasycom(resolveDynamicComponent("up-notice-bar"), __easycom_1);
  const _component_up_collapse_item = resolveEasycom(resolveDynamicComponent("up-collapse-item"), __easycom_2);
  const _component_up_collapse = resolveEasycom(resolveDynamicComponent("up-collapse"), __easycom_3);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_5);
  const _component_up_tooltip = resolveEasycom(resolveDynamicComponent("up-tooltip"), __easycom_5$1);
  const _component_up_divider = resolveEasycom(resolveDynamicComponent("up-divider"), __easycom_42);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_41);
  const _component_up_overlay = resolveEasycom(resolveDynamicComponent("up-overlay"), __easycom_8);
  const _component_up_toast = resolveEasycom(resolveDynamicComponent("up-toast"), __easycom_9);
  const _component_up_notify = resolveEasycom(resolveDynamicComponent("up-notify"), __easycom_10);
  const _component_up_modal = resolveEasycom(resolveDynamicComponent("up-modal"), __easycom_11);
  const _component_up_popup = resolveEasycom(resolveDynamicComponent("up-popup"), __easycom_12);
  const _component_up_loading_page = resolveEasycom(resolveDynamicComponent("up-loading-page"), __easycom_13);
  return openBlock(), createElementBlock("view", null, [
    createCommentVNode(" ==================== 反馈组件 ==================== "),
    createElementVNode("text", { class: "section-title" }, " 反馈组件 "),
    createCommentVNode(" Alert 警告提示 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-alert "),
      createVNode(_component_up_alert, {
        title: "成功提示",
        type: "success",
        "show-icon": true
      }),
      createElementVNode("view", { class: "h-10px" }),
      createVNode(_component_up_alert, {
        title: "警告提示",
        type: "warning",
        "show-icon": true
      })
    ]),
    createCommentVNode(" NoticeBar 滚动通知 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-notice-bar "),
      createVNode(_component_up_notice_bar, {
        text: "uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库",
        mode: "link"
      })
    ]),
    createCommentVNode(" Collapse 折叠面板 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-collapse "),
      createVNode(_component_up_collapse, {
        value: $setup.collapseValue,
        accordion: true
      }, {
        default: withCtx(() => [
          createVNode(_component_up_collapse_item, {
            title: "第一项",
            name: "1"
          }, {
            default: withCtx(() => [
              createElementVNode("text", { class: "collapse-text" }, "uview-ultra 是基于 uview-plus 修改的 uni-app-x 版本")
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_collapse_item, {
            title: "第二项",
            name: "2"
          }, {
            default: withCtx(() => [
              createElementVNode("text", { class: "collapse-text" }, "支持 iOS、Android、H5、小程序等多端")
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["value"])
    ]),
    createCommentVNode(" Toast 消息提示 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-toast "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "成功提示",
          size: "mini",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.showToast("success"))
        }),
        createElementVNode("view", { class: "w-10px" }),
        createVNode(_component_up_button, {
          type: "error",
          text: "错误提示",
          size: "mini",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.showToast("error"))
        })
      ])
    ]),
    createCommentVNode(" Notify 消息通知 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-notify "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "主要通知",
          size: "mini",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.showNotify("primary"))
        }),
        createElementVNode("view", { class: "w-10px" }),
        createVNode(_component_up_button, {
          type: "success",
          text: "成功通知",
          size: "mini",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.showNotify("success"))
        })
      ])
    ]),
    createCommentVNode(" LoadingPage 加载页 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-loading-page "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "触发全屏加载",
          size: "mini",
          onClick: $setup.triggerLoadingPage
        })
      ])
    ]),
    createCommentVNode(" Overlay 遮罩层 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-overlay "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "显示遮罩",
          size: "mini",
          onClick: _cache[4] || (_cache[4] = ($event) => $setup.overlayShow = true)
        }),
        createElementVNode("view", { class: "w-10px" }),
        createVNode(_component_up_button, {
          type: "warning",
          text: "半透明遮罩",
          size: "mini",
          onClick: _cache[5] || (_cache[5] = ($event) => {
            $setup.overlayOpacity = 0.3;
            $setup.overlayShow = true;
          })
        })
      ])
    ]),
    createCommentVNode(" Modal 模态框 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-modal "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "弹窗提示",
          size: "mini",
          onClick: $setup.showModal
        }),
        createElementVNode("view", { class: "w-10px" }),
        createVNode(_component_up_button, {
          type: "warning",
          text: "确认弹窗",
          size: "mini",
          onClick: $setup.showConfirmModal
        })
      ])
    ]),
    createCommentVNode(" Popup 弹出层 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-popup "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "顶部弹出",
          size: "mini",
          onClick: _cache[6] || (_cache[6] = ($event) => $setup.openPopup("top"))
        }),
        createElementVNode("view", { class: "w-10px" }),
        createVNode(_component_up_button, {
          type: "primary",
          text: "底部弹出",
          size: "mini",
          onClick: _cache[7] || (_cache[7] = ($event) => $setup.openPopup("bottom"))
        })
      ])
    ]),
    createCommentVNode(" Tooltip 长按提示 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-tooltip "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_tooltip, {
          text: "长按此处复制文本",
          direction: "top"
        }),
        createElementVNode("view", { class: "w-20px" }),
        createVNode(_component_up_tooltip, {
          text: "长按显示操作",
          direction: "top",
          "show-copy": false,
          buttons: $setup.tooltipButtons
        }, null, 8, ["buttons"])
      ])
    ]),
    createCommentVNode(" NoNetwork 无网络提示 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-no-network "),
      createElementVNode("text", { class: "text-12px text-__909399_" }, "引入即自动监听网络状态，断网时全屏展示遮罩提示。")
    ]),
    createVNode(_component_up_divider, { text: "反馈组件结束" }),
    createCommentVNode(" Overlay 遮罩层 "),
    createVNode(_component_up_overlay, {
      show: $setup.overlayShow,
      opacity: $setup.overlayOpacity,
      onClick: _cache[9] || (_cache[9] = ($event) => $setup.overlayShow = false)
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "flex-1 items-center justify-center" }, [
          createElementVNode("view", {
            class: "bg-white rounded-8px p-20px items-center",
            onClick: _cache[8] || (_cache[8] = withModifiers(() => {
            }, ["stop"]))
          }, [
            createVNode(_component_up_loading_icon, { mode: "circle" }),
            createElementVNode("text", { class: "text-14px text-__303133_ mt-10px" }, "加载中，点击遮罩关闭")
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["show", "opacity"]),
    createCommentVNode(" Toast 组件 "),
    createVNode(
      _component_up_toast,
      { ref: "uToast" },
      null,
      512
      /* NEED_PATCH */
    ),
    createCommentVNode(" Notify 组件 "),
    createVNode(
      _component_up_notify,
      { ref: "uNotify" },
      null,
      512
      /* NEED_PATCH */
    ),
    createCommentVNode(" Modal 组件 "),
    createVNode(_component_up_modal, {
      show: $setup.modalShow,
      title: $setup.modalTitle,
      content: $setup.modalContent,
      "show-confirm-button": true,
      "show-cancel-button": $setup.modalShowCancel,
      onConfirm: $setup.onModalConfirm,
      onClose: $setup.onModalClose
    }, null, 8, ["show", "title", "content", "show-cancel-button"]),
    createCommentVNode(" Popup 组件 "),
    createVNode(_component_up_popup, {
      show: $setup.popupShow,
      mode: $setup.popupMode,
      closeable: true,
      round: 10,
      onClose: $setup.onPopupClose
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "p-30px items-center" }, [
          createElementVNode(
            "text",
            { class: "text-16px text-__303133_" },
            toDisplayString($setup.popupMode) + " 弹出层内容",
            1
            /* TEXT */
          )
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["show", "mode"]),
    createCommentVNode(" LoadingPage 组件 "),
    createVNode(_component_up_loading_page, {
      loading: $setup.loadingPageShow,
      "loading-text": "页面正在加载中...",
      "loading-mode": "circle"
    }, null, 8, ["loading"])
  ]);
}
const DemoFeedback = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/components/DemoFeedback.uvue"]]);
export {
  DemoFeedback as D
};
//# sourceMappingURL=DemoFeedback.js.map
