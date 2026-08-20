import { _ as __easycom_0 } from "../../components/NavBar/NavBar.js";
import { _ as __easycom_0$1 } from "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import { A as AppKu } from "../../../App.ku.js";
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
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
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
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataAttr: _setSharedDataAttr, unref: _unref, toSharedDataNumber: _toSharedDataNumber, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataFor: _createSharedDataFor, setSharedDataStyle: _setSharedDataStyle, isRef: _isRef, setSharedDataEvent: _setSharedDataEvent, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesAiAi";
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
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "e89d76ea",
  __className,
  __filename: "src/pages/ai/ai.uvue",
  __name: "ai",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesAiAiSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcPagesAiAiSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
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
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_input = _resolveComponent("input");
      const _component_uni_icons = __easycom_0$1;
      const n36 = _createSharedDataComponent(AppKu, "9242dfba", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "24f374cd", {
            title: "AI 智能助手",
            "show-back": true
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataAttr(__sharedData, 7, _toSharedDataNumber(_unref(scrollTop)));
          });
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 2, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return _unref(messages);
          }, (__sharedData_VFor0, _for_item0) => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(isAiMessage(_for_item0.value.sender)));
            }, () => {
              _renderSharedDataEffect(() => {
                const _msg = _for_item0.value;
                _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_msg.content));
                _setSharedData(__sharedData_VFor0, 3, _toDisplayString(_msg.time));
              });
            }, () => {
              _renderSharedDataEffect(() => {
                const _msg = _for_item0.value;
                _setSharedData(__sharedData_VFor0, 4, _toDisplayString(_msg.content));
                _setSharedData(__sharedData_VFor0, 5, _toDisplayString(_msg.time));
              });
            }, 261);
            return null;
          }, (__sharedData_VFor0, msg) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(msg.id));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(isTyping)));
          }, () => {
          });
          _renderSharedDataEffect(() => {
            const _safeAreaBottom = _unref(safeAreaBottom);
            _setSharedDataStyle(__sharedData, 8, { height: `${_safeAreaBottom + 70}px` });
            _setSharedDataStyle(__sharedData, 9, { paddingBottom: `${_safeAreaBottom + 10}px` });
          });
          const n30 = _createSharedDataComponentWithFallback(_component_input, "94308cd2", {
            value: () => {
              return _unref(inputText);
            },
            "onUpdate:value": () => {
              return (_value) => {
                return _isRef(inputText) ? inputText.value = _value : null;
              };
            },
            type: "text",
            placeholder: "和 AI 助手聊点什么吧...",
            "placeholder-style": "color: #94a3b8",
            class: "chat-input",
            "confirm-type": "send",
            onConfirm: () => {
              return sendMessage;
            }
          });
          _setSharedData(__sharedData, 4, n30?.sharedData);
          const n31 = _createSharedDataComponentWithFallback(_component_uni_icons, "942fd124", {
            type: "paperplane-filled",
            size: "18",
            color: "#ffffff"
          });
          _setSharedData(__sharedData, 5, n31?.sharedData);
          _setSharedDataEvent(__sharedData, 6, sendMessage);
        })
      });
      _setSharedData(__sharedData, 0, n36.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const ai = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  ai as default
};
//# sourceMappingURL=ai.js.map
