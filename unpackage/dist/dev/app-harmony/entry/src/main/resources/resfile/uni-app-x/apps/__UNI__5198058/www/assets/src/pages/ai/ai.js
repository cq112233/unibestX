import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../App.ku.js";
import { _ as __easycom_1 } from "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import { s as safeAreaInsets } from "../../utils/systemInfo.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
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
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/TabbarItem.js";
import "../../utils/i18n.js";
import "../../utils/toast.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed, onMounted } = globalThis.Vue;
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
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
    }, get NavBar() {
      return __easycom_0;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"page-root":{"":{"height":"100%","display":"flex","flexDirection":"column"}},"footer-fixed":{"":{"position":"fixed","left":0,"right":0,"bottom":0,"zIndex":100}},"msg-row-start":{"":{"display":"flex","flexDirection":"row","alignItems":"flex-start"}},"msg-row-end":{"":{"display":"flex","flexDirection":"row","alignItems":"flex-start","justifyContent":"flex-end"}},"msg-content-left":{"":{"display":"flex","flexDirection":"column","maxWidth":270}},"msg-content-right":{"":{"display":"flex","flexDirection":"column","alignItems":"flex-end","maxWidth":270}},"flex-col":{"":{"display":"flex","flexDirection":"column"}},"flex-row":{"":{"display":"flex","flexDirection":"row"}},"items-center":{"":{"alignItems":"center"}},"justify-center":{"":{"justifyContent":"center"}},"flex-1":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%","flex":"1"}},"chat-input":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%","height":36,"backgroundColor":"#f1f5f9","color":"#1e293b","fontSize":14,"borderTopWidth":0,"borderRightWidth":0,"borderBottomWidth":0,"borderLeftWidth":0}},"flex":{"":{"display":"flex"}}};
const _style_1 = {"wtu-12mckpk-0":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%","flex":"1"}},"wtu-3zg6a-1":{"":{"paddingLeft":15,"paddingRight":15}},"wtu-1imgdni-2":{"":{"paddingTop":10,"paddingBottom":10}},"wtu-15ke1fv-3":{"":{"marginBottom":15}},"wtu-1iiedf1-4":{"":{"flexDirection":"column"}},"wtu-8tr2im-5":{"":{"width":36}},"wtu-7y5lr9-6":{"":{"height":36}},"wtu-6q9kae-7":{"":{"borderTopLeftRadius":18,"borderTopRightRadius":18,"borderBottomRightRadius":18,"borderBottomLeftRadius":18,"borderRadius":18}},"wtu-8tyvyh-8":{"":{"backgroundColor":"#2563eb"}},"wtu-mqpefj-9":{"":{"alignItems":"center"}},"wtu-1qpn96n-a":{"":{"justifyContent":"center"}},"wtu-1lxf9re-b":{"":{"marginRight":10}},"wtu-1ikrsu4-c":{"":{"--tw-inset-shadow":"0 0 #0000","--tw-inset-ring-shadow":"0 0 #0000","--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 1px 3px 0 var(--tw-shadow-color, rgba(0, 0, 0, 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgba(0, 0, 0, 0.1))","boxShadow":"var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","-TwInsetShadow":"0 0 #0000","-TwInsetRingShadow":"0 0 #0000","-TwRingOffsetShadow":"0 0 #0000","-TwRingShadow":"0 0 #0000","-TwShadow":"0 1px 3px 0 var(--tw-shadow-color,rgba(0,0,0,0.1)),0 1px 2px -1px var(--tw-shadow-color,rgba(0,0,0,0.1))"}},"wtu-9vtjee-d":{"":{"color":"#fff"}},"wtu-msrkdo-e":{"":{"fontSize":12}},"wtu-j5w2ks-f":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":"700","-TwFontWeight":"var(--font-weight-bold,700)"}},"wtu-rq9s3i-g":{"":{"backgroundColor":"#fff"}},"wtu-78q8ib-h":{"":{"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"padding":12}},"wtu-d58m5d-i":{"":{"borderTopRightRadius":16,"borderBottomRightRadius":16}},"wtu-5faia3-j":{"":{"borderBottomLeftRadius":16}},"wtu-jpp5lf-k":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"-TwBorderStyle":"solid","borderStyle":"var(--tw-border-style)","borderWidth":1}},"wtu-1nptzfn-l":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0","borderColor":"#e2e8f0"}},"wtu-1gyyuxw-m":{"":{"color":"#1e293b"}},"wtu-14sfh86-n":{"":{"fontSize":14}},"wtu-1qe55dz-o":{"":{"--tw-leading":"var(--leading-relaxed, 1.625)","lineHeight":"1.625","-TwLeading":"var(--leading-relaxed,1.625)"}},"wtu-1bj83jj-p":{"":{"color":"#94a3b8"}},"wtu-1w0aoxm-q":{"":{"fontSize":10}},"wtu-1rwo7k7-r":{"":{"marginTop":4}},"wtu-34to1r-s":{"":{"marginLeft":4}},"wtu-b3txcv-t":{"":{"backgroundColor":"#10b981"}},"wtu-oa4lpf-u":{"":{"borderTopLeftRadius":16,"borderBottomLeftRadius":16}},"wtu-gkh66x-v":{"":{"borderBottomRightRadius":16}},"wtu-f5xa25-w":{"":{"marginRight":4}},"wtu-u5zyoi-x":{"":{"backgroundColor":"#e2e8f0"}},"wtu-3mj074-y":{"":{"marginLeft":10}},"wtu-ucxd0z-z":{"":{"color":"#64748b"}},"wtu-r4rl0q-10":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderTopWidth":1,"-TwBorderStyle":"solid"}},"wtu-hixf31-11":{"":{"paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10,"padding":10}},"wtu-on566v-12":{"":{"flexDirection":"row"}},"wtu-1t3d52l-13":{"":{"backgroundColor":"#f1f5f9"}},"wtu-15fkpjz-14":{"":{"borderTopLeftRadius":24,"borderTopRightRadius":24,"borderBottomRightRadius":24,"borderBottomLeftRadius":24,"borderRadius":24}},"wtu-1owynq5-15":{"":{"paddingLeft":12,"paddingRight":12}},"wtu-y3lmuv-16":{"":{"paddingTop":6,"paddingBottom":6}},"wtu-qglysi-17":{"":{"width":32}},"wtu-ikawjt-18":{"":{"height":32}},"wtu-vh6n5g-19":{"":{"borderTopLeftRadius":16,"borderTopRightRadius":16,"borderBottomRightRadius":16,"borderBottomLeftRadius":16,"borderRadius":16}},"wtu-1gsk3nn-1a":{"":{"marginLeft":8}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, createCommentVNode: _createCommentVNode, normalizeStyle: _normalizeStyle, vModelText: _vModelText, withDirectives: _withDirectives, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_uni_icons = resolveEasycom(__resolveDynamicComponent("uni-icons"), __easycom_1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "page-root" }, [
        _createVNode(_component_NavBar, {
          title: "AI 智能助手",
          "show-back": true
        }),
        _createElementVNode("scroll-view", {
          class: "wtu-12mckpk-0 wtu-3zg6a-1 wtu-1imgdni-2",
          direction: "vertical",
          "scroll-top": $setup.scrollTop,
          "scroll-with-animation": true
        }, [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.messages, (msg) => {
              return _openBlock(), _createElementBlock("view", {
                key: msg.id,
                class: "wtu-15ke1fv-3 wtu-1iiedf1-4"
              }, [
                $setup.isAiMessage(msg.sender) ? (_openBlock(), _createElementBlock("view", {
                  key: 0,
                  class: "msg-row-start"
                }, [
                  _createElementVNode("view", { class: "wtu-8tr2im-5 wtu-7y5lr9-6 wtu-6q9kae-7 wtu-8tyvyh-8 wtu-mqpefj-9 wtu-1qpn96n-a wtu-1lxf9re-b wtu-1ikrsu4-c" }, [
                    _createElementVNode("text", { class: "wtu-9vtjee-d wtu-msrkdo-e wtu-j5w2ks-f" }, "AI")
                  ]),
                  _createElementVNode("view", { class: "msg-content-left" }, [
                    _createElementVNode("view", { class: "wtu-rq9s3i-g wtu-78q8ib-h wtu-d58m5d-i wtu-5faia3-j wtu-1ikrsu4-c wtu-jpp5lf-k wtu-1nptzfn-l" }, [
                      _createElementVNode(
                        "text",
                        { class: "wtu-1gyyuxw-m wtu-14sfh86-n wtu-1qe55dz-o" },
                        _toDisplayString(msg.content),
                        1
                        /* TEXT */
                      )
                    ]),
                    _createElementVNode(
                      "text",
                      { class: "wtu-1bj83jj-p wtu-1w0aoxm-q wtu-1rwo7k7-r wtu-34to1r-s" },
                      _toDisplayString(msg.time),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : (_openBlock(), _createElementBlock("view", {
                  key: 1,
                  class: "msg-row-end"
                }, [
                  _createElementVNode("view", { class: "msg-content-right" }, [
                    _createElementVNode("view", { class: "wtu-b3txcv-t wtu-78q8ib-h wtu-oa4lpf-u wtu-gkh66x-v wtu-1ikrsu4-c" }, [
                      _createElementVNode(
                        "text",
                        { class: "wtu-9vtjee-d wtu-14sfh86-n wtu-1qe55dz-o" },
                        _toDisplayString(msg.content),
                        1
                        /* TEXT */
                      )
                    ]),
                    _createElementVNode(
                      "text",
                      { class: "wtu-1bj83jj-p wtu-1w0aoxm-q wtu-1rwo7k7-r wtu-f5xa25-w" },
                      _toDisplayString(msg.time),
                      1
                      /* TEXT */
                    )
                  ]),
                  _createElementVNode("view", { class: "wtu-8tr2im-5 wtu-7y5lr9-6 wtu-6q9kae-7 wtu-u5zyoi-x wtu-mqpefj-9 wtu-1qpn96n-a wtu-3mj074-y wtu-1ikrsu4-c" }, [
                    _createElementVNode("text", { class: "wtu-ucxd0z-z wtu-msrkdo-e wtu-j5w2ks-f" }, "ME")
                  ])
                ]))
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          $setup.isTyping ? (_openBlock(), _createElementBlock("view", {
            key: 0,
            class: "msg-row-start wtu-15ke1fv-3"
          }, [
            _createElementVNode("view", { class: "wtu-8tr2im-5 wtu-7y5lr9-6 wtu-6q9kae-7 wtu-8tyvyh-8 wtu-mqpefj-9 wtu-1qpn96n-a wtu-1lxf9re-b wtu-1ikrsu4-c" }, [
              _createElementVNode("text", { class: "wtu-9vtjee-d wtu-msrkdo-e wtu-j5w2ks-f" }, "AI")
            ]),
            _createElementVNode("view", { class: "wtu-rq9s3i-g wtu-78q8ib-h wtu-d58m5d-i wtu-5faia3-j wtu-1ikrsu4-c wtu-jpp5lf-k wtu-1nptzfn-l" }, [
              _createElementVNode("text", { class: "wtu-ucxd0z-z wtu-14sfh86-n" }, "AI 正在思考中...")
            ])
          ])) : _createCommentVNode("v-if", true),
          _createElementVNode(
            "view",
            {
              style: _normalizeStyle({ height: `${$setup.safeAreaBottom + 70}px` })
            },
            null,
            4
            /* STYLE */
          )
        ], 8, ["scroll-top"]),
        _createElementVNode(
          "view",
          {
            class: "footer-fixed wtu-rq9s3i-g wtu-r4rl0q-10 wtu-1nptzfn-l wtu-hixf31-11 wtu-1iiedf1-4",
            style: _normalizeStyle({ paddingBottom: `${$setup.safeAreaBottom + 10}px` })
          },
          [
            _createElementVNode("view", { class: "wtu-on566v-12 wtu-mqpefj-9 wtu-1t3d52l-13 wtu-15fkpjz-14 wtu-1owynq5-15 wtu-y3lmuv-16" }, [
              _withDirectives(_createElementVNode(
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
                [_vModelText, $setup.inputText]
              ]),
              _createElementVNode("view", {
                class: "wtu-qglysi-17 wtu-ikawjt-18 wtu-vh6n5g-19 wtu-8tyvyh-8 wtu-mqpefj-9 wtu-1qpn96n-a wtu-1gsk3nn-1a",
                onClick: $setup.sendMessage
              }, [
                _createVNode(_component_uni_icons, {
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
  });
}
const ai = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/ai/ai.uvue"]]);
export {
  ai as default
};
//# sourceMappingURL=ai.js.map
