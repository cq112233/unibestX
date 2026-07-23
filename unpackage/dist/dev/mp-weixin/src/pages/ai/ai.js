"use strict";
const common_vendor = require("../../../common/vendor.js");
const src_utils_systemInfo = require("../../utils/systemInfo.js");
if (!Array) {
  const _easycom_uni_icons_1 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons_1();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (common_vendor.unref(NavBar) + _easycom_uni_icons + common_vendor.unref(LayoutComponent) + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../App.ku.js";
const LayoutComponent = () => "../../layouts/default.js";
const NavBar = () => "../../components/NavBar/NavBar.js";
class ChatMessage extends common_vendor.UTS.UTSType {
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
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.id = this.__props__.id;
    this.sender = this.__props__.sender;
    this.content = this.__props__.content;
    this.time = this.__props__.time;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ai",
  setup(__props) {
    const messages = common_vendor.ref([]);
    const inputText = common_vendor.ref("");
    const isTyping = common_vendor.ref(false);
    const scrollTop = common_vendor.ref(0);
    function isAiMessage(sender) {
      return sender == "ai";
    }
    const safeAreaBottom = common_vendor.computed(() => {
      const insets = src_utils_systemInfo.safeAreaInsets.value;
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
    common_vendor.onMounted(() => {
      messages.value.push(new ChatMessage({
        id: "welcome",
        sender: "ai",
        content: "你好！我是你的 AI 智能助手。你可以询问我任何关于本应用的问题，或者只是和我随便聊聊！✨",
        time: getCurrentTime()
      }));
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.p({
          title: "AI 智能助手",
          ["show-back"]: true
        }),
        b: common_vendor.f(common_vendor.unref(messages), (msg, k0, i0) => {
          return common_vendor.e({
            a: isAiMessage(msg.sender)
          }, isAiMessage(msg.sender) ? {
            b: common_vendor.t(msg.content),
            c: common_vendor.t(msg.time)
          } : {
            d: common_vendor.t(msg.content),
            e: common_vendor.t(msg.time)
          }, {
            f: msg.id
          });
        }),
        c: common_vendor.unref(isTyping)
      }, common_vendor.unref(isTyping) ? {} : {}, {
        d: `${common_vendor.unref(safeAreaBottom) + 70}px`,
        e: common_vendor.unref(scrollTop),
        f: common_vendor.o(sendMessage, "8a"),
        g: common_vendor.unref(inputText),
        h: common_vendor.o(($event) => {
          return common_vendor.isRef(inputText) ? inputText.value = $event.detail.value : null;
        }, "8e"),
        i: common_vendor.p({
          type: "paperplane-filled",
          size: "18",
          color: "#ffffff"
        }),
        j: common_vendor.o(sendMessage, "78"),
        k: `${common_vendor.unref(safeAreaBottom) + 10}px`,
        l: common_vendor.p({
          ["navigation-style"]: "custom",
          ["navigation-bar-title-text"]: "AI助手"
        }),
        m: common_vendor.gei(_ctx, ""),
        n: common_vendor.p({
          id: common_vendor.gei(_ctx, "")
        }),
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/pages/ai/ai.js.map
