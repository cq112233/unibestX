import { _ as __easycom_0$1 } from "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const { defineComponent, ref, computed, onMounted, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode, createElementBlock, Fragment, renderList, toDisplayString, normalizeStyle, withDirectives, vModelText } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { s as safeAreaInsets } from "../../utils/systemInfo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../store/app.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh_CN.js";
import "../../i18n/locales/en_US.js";
import "../../utils/toast.js";
class ChatMessage extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          id: { type: String, optional: false },
          sender: { type: String, optional: false },
          content: { type: String, optional: false },
          time: { type: String, optional: false }
        };
      },
      name: "ChatMessage"
    };
  }
  constructor(options, metadata = ChatMessage.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.sender = this.__props__.sender;
    this.content = this.__props__.content;
    this.time = this.__props__.time;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ai",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const messages = ref([]);
    const inputText = ref("");
    const isTyping = ref(false);
    const scrollTop = ref(0);
    function isAiMessage(sender) {
      return sender == "ai";
    }
    const safeAreaBottom = computed(() => {
      const insets = safeAreaInsets.value;
      if (insets != null) {
        return insets.bottom;
      }
      return 0;
    });
    function getCurrentTime() {
      const date = /* @__PURE__ */ new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const hStr = hours < 10 ? `0${hours}` : `${hours}`;
      const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
      return `${hStr}:${mStr}`;
    }
    function scrollToBottom() {
      setTimeout(() => {
        scrollTop.value = scrollTop.value + 1e3;
      }, 100);
    }
    function sendMessage() {
      const text = inputText.value.trim();
      if (text == "")
        return null;
      const userMsgId = Date.now().toString();
      messages.value.push(new ChatMessage({
        id: userMsgId,
        sender: "user",
        content: text,
        time: getCurrentTime()
      }));
      inputText.value = "";
      scrollToBottom();
      isTyping.value = true;
      setTimeout(() => {
        isTyping.value = false;
        let replyContent = "收到你的消息！目前这只是一个模拟的 AI 对话窗口，你可以在此基础上接入你自己的大语言模型（如 DeepSeek、OpenAI、Gemini等）。";
        if (text.includes("你好") || text.includes("hello")) {
          replyContent = "你好！我是你的 AI 助手，很高兴为你提供服务。有什么我可以帮你的吗？😊";
        } else if (text.includes("模板") || text.includes("unibest")) {
          replyContent = "unibestX 是基于 uni-app X 极速开发模板。它支持 TypeScript、UnoCSS、UTS 插件，并能完美编译为原生 Android/iOS App！";
        } else if (text.includes("组件")) {
          replyContent = "当前模板内置了许多优秀的组件，例如 NavBar 导航栏、uview UI 库组件等，你都可以直接使用。";
        }
        messages.value.push(new ChatMessage({
          id: Date.now().toString(),
          sender: "ai",
          content: replyContent,
          time: getCurrentTime()
        }));
        scrollToBottom();
      }, 800);
    }
    onMounted(() => {
      messages.value.push(new ChatMessage({
        id: "welcome",
        sender: "ai",
        content: "你好！我是你的 AI 智能助手。你可以询问我任何关于本应用的问题，或者只是和我随便聊聊！✨",
        time: getCurrentTime()
      }));
    });
    const __returned__ = { messages, inputText, isTyping, scrollTop, isAiMessage, safeAreaBottom, getCurrentTime, scrollToBottom, sendMessage, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    }, get NavBar() {
      return __easycom_0;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__10b981_": { "": { "backgroundImage": "none", "backgroundColor": "#10b981" } }, "bg-__2563eb_": { "": { "backgroundImage": "none", "backgroundColor": "#2563eb" } }, "bg-__e2e8f0_": { "": { "backgroundImage": "none", "backgroundColor": "#e2e8f0" } }, "bg-__f1f5f9_": { "": { "backgroundImage": "none", "backgroundColor": "#f1f5f9" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border": { "": { "borderTopWidth": "var(--un-line-width-default,1px)", "borderRightWidth": "var(--un-line-width-default,1px)", "borderBottomWidth": "var(--un-line-width-default,1px)", "borderLeftWidth": "var(--un-line-width-default,1px)" } }, "border-__e2e8f0_": { "": { "borderTopWidth": "medium", "borderRightWidth": "medium", "borderBottomWidth": "medium", "borderLeftWidth": "medium", "borderTopStyle": "none", "borderRightStyle": "none", "borderBottomStyle": "none", "borderLeftStyle": "none", "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-t": { "": { "borderTopWidth": "var(--un-line-width-default,1px)" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-col": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-32px": { "": { "height": 32 } }, "h-36px": { "": { "height": 36 } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-15px": { "": { "marginBottom": 15 } }, "ml-10px": { "": { "marginLeft": 10 } }, "ml-4px": { "": { "marginLeft": 4 } }, "ml-8px": { "": { "marginLeft": 8 } }, "mr-10px": { "": { "marginRight": 10 } }, "mr-4px": { "": { "marginRight": 4 } }, "mt-4px": { "": { "marginTop": 4 } }, "p-10px": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "p-12px": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "px-12px": { "": { "paddingLeft": 12, "paddingRight": 12 } }, "px-15px": { "": { "paddingLeft": 15, "paddingRight": 15 } }, "py-10px": { "": { "paddingTop": 10, "paddingBottom": 10 } }, "py-6px": { "": { "paddingTop": 6, "paddingBottom": 6 } }, "rounded-16px": { "": { "borderTopLeftRadius": 16, "borderTopRightRadius": 16, "borderBottomRightRadius": 16, "borderBottomLeftRadius": 16 } }, "rounded-18px": { "": { "borderTopLeftRadius": 18, "borderTopRightRadius": 18, "borderBottomRightRadius": 18, "borderBottomLeftRadius": 18 } }, "rounded-24px": { "": { "borderTopLeftRadius": 24, "borderTopRightRadius": 24, "borderBottomRightRadius": 24, "borderBottomLeftRadius": 24 } }, "rounded-bl-16px": { "": { "borderBottomLeftRadius": 16 } }, "rounded-br-16px": { "": { "borderBottomRightRadius": 16 } }, "rounded-l-16px": { "": { "borderTopLeftRadius": 16, "borderBottomLeftRadius": 16 } }, "rounded-r-16px": { "": { "borderTopRightRadius": 16, "borderBottomRightRadius": 16 } }, "shadow-sm": { "": { "boxShadow": "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow": "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-10px": { "": { "fontSize": 10 } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } }, "w-32px": { "": { "width": 32 } }, "w-36px": { "": { "width": 36 } } };
const _style_1 = { "page-root": { "": { "height": "100%", "display": "flex", "flexDirection": "column" } }, "footer-fixed": { "": { "position": "fixed", "left": 0, "right": 0, "bottom": 0, "zIndex": 100 } }, "msg-row-start": { "": { "display": "flex", "flexDirection": "row", "alignItems": "flex-start" } }, "msg-row-end": { "": { "display": "flex", "flexDirection": "row", "alignItems": "flex-start", "justifyContent": "flex-end" } }, "msg-content-left": { "": { "display": "flex", "flexDirection": "column", "maxWidth": 270 } }, "msg-content-right": { "": { "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "maxWidth": 270 } }, "flex-col": { "": { "display": "flex", "flexDirection": "column" } }, "flex-row": { "": { "display": "flex", "flexDirection": "row" } }, "items-center": { "": { "alignItems": "center" } }, "justify-center": { "": { "justifyContent": "center" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "chat-input": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "height": 36, "backgroundColor": "#f1f5f9", "color": "#1e293b", "fontSize": 14, "borderTopWidth": 0, "borderRightWidth": 0, "borderBottomWidth": 0, "borderLeftWidth": 0 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0$1);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "AI助手"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-root bg-__f8fafc_" }, [
            createCommentVNode(" 自定义导航栏 "),
            createVNode($setup["NavBar"], {
              title: "AI 智能助手",
              "show-back": true
            }),
            createCommentVNode(" 消息滚动区 "),
            createElementVNode("scroll-view", {
              class: "flex-1 px-15px py-10px",
              "scroll-y": "true",
              "scroll-top": $setup.scrollTop,
              "scroll-with-animation": true,
              style: { "height": "0px" }
            }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.messages, (msg) => {
                  return openBlock(), createElementBlock("view", {
                    key: msg.id,
                    class: "mb-15px flex-col"
                  }, [
                    createCommentVNode(" AI 消息 "),
                    $setup.isAiMessage(msg.sender) ? (openBlock(), createElementBlock("view", {
                      key: 0,
                      class: "msg-row-start"
                    }, [
                      createElementVNode("view", { class: "w-36px h-36px rounded-18px bg-__2563eb_ items-center justify-center mr-10px shadow-sm" }, [
                        createElementVNode("text", { class: "text-white text-12px font-bold" }, "AI")
                      ]),
                      createElementVNode("view", { class: "msg-content-left" }, [
                        createElementVNode("view", { class: "bg-white p-12px rounded-r-16px rounded-bl-16px shadow-sm border border-__e2e8f0_" }, [
                          createElementVNode(
                            "text",
                            { class: "text-__1e293b_ text-14px leading-relaxed" },
                            toDisplayString(msg.content),
                            1
                            /* TEXT */
                          )
                        ]),
                        createElementVNode(
                          "text",
                          { class: "text-__94a3b8_ text-10px mt-4px ml-4px" },
                          toDisplayString(msg.time),
                          1
                          /* TEXT */
                        )
                      ])
                    ])) : (openBlock(), createElementBlock(
                      Fragment,
                      { key: 1 },
                      [
                        createCommentVNode(" 用户消息 "),
                        createElementVNode("view", { class: "msg-row-end" }, [
                          createElementVNode("view", { class: "msg-content-right" }, [
                            createElementVNode("view", { class: "bg-__10b981_ p-12px rounded-l-16px rounded-br-16px shadow-sm" }, [
                              createElementVNode(
                                "text",
                                { class: "text-white text-14px leading-relaxed" },
                                toDisplayString(msg.content),
                                1
                                /* TEXT */
                              )
                            ]),
                            createElementVNode(
                              "text",
                              { class: "text-__94a3b8_ text-10px mt-4px mr-4px" },
                              toDisplayString(msg.time),
                              1
                              /* TEXT */
                            )
                          ]),
                          createElementVNode("view", { class: "w-36px h-36px rounded-18px bg-__e2e8f0_ items-center justify-center ml-10px shadow-sm" }, [
                            createElementVNode("text", { class: "text-__64748b_ text-12px font-bold" }, "ME")
                          ])
                        ])
                      ],
                      2112
                      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              createCommentVNode(" AI 正在输入状态 "),
              $setup.isTyping ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "msg-row-start mb-15px"
              }, [
                createElementVNode("view", { class: "w-36px h-36px rounded-18px bg-__2563eb_ items-center justify-center mr-10px shadow-sm" }, [
                  createElementVNode("text", { class: "text-white text-12px font-bold" }, "AI")
                ]),
                createElementVNode("view", { class: "bg-white p-12px rounded-r-16px rounded-bl-16px shadow-sm border border-__e2e8f0_" }, [
                  createElementVNode("text", { class: "text-__64748b_ text-14px" }, "AI 正在思考中...")
                ])
              ])) : createCommentVNode("v-if", true),
              createCommentVNode(" 底部安全间距占位（加上底部输入框的高度避免遮挡） "),
              createElementVNode(
                "view",
                {
                  style: normalizeStyle({ height: `${$setup.safeAreaBottom + 70}px` })
                },
                null,
                4
                /* STYLE */
              )
            ], 8, ["scroll-top"]),
            createCommentVNode(" 底部输入框区 "),
            createElementVNode(
              "view",
              {
                class: "footer-fixed bg-white border-t border-__e2e8f0_ p-10px flex-col",
                style: normalizeStyle({ paddingBottom: `${$setup.safeAreaBottom + 10}px` })
              },
              [
                createElementVNode("view", { class: "flex-row items-center bg-__f1f5f9_ rounded-24px px-12px py-6px" }, [
                  withDirectives(createElementVNode(
                    "input",
                    {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputText = $event),
                      type: "text",
                      placeholder: "和 AI 助手聊点什么吧...",
                      "placeholder-style": "color: #94a3b8",
                      class: "chat-input",
                      "confirm-type": "send",
                      onConfirm: $setup.sendMessage
                    },
                    null,
                    544
                    /* NEED_HYDRATION, NEED_PATCH */
                  ), [
                    [vModelText, $setup.inputText]
                  ]),
                  createElementVNode("view", {
                    class: "w-32px h-32px rounded-16px bg-__2563eb_ items-center justify-center ml-8px",
                    onClick: $setup.sendMessage
                  }, [
                    createVNode(_component_uni_icons, {
                      type: "paperplane-filled",
                      size: "18",
                      color: "#ffffff"
                    })
                  ])
                ])
              ],
              4
              /* STYLE */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const ai = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/ai/ai.uvue"]]);
export {
  ai as default
};
//# sourceMappingURL=ai.js.map
