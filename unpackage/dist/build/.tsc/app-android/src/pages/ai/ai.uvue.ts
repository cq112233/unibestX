import _easycom_uni_icons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { safeAreaInsets } from '@/src/utils/systemInfo';
type ChatMessage = {
  id: string;
  sender: string;
  content: string;
  time: string;
};


const __sfc__ = defineComponent({
  __name: 'ai',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const messages = ref<ChatMessage[]>([]);
const inputText = ref<string>('');
const isTyping = ref<boolean>(false);
const scrollTop = ref<number>(0);

// 判断是否为 AI 消息
function isAiMessage(sender: string): boolean {
  return sender == 'ai';
}

// 底部安全区
const safeAreaBottom = computed<number>((): number => {
  const insets = safeAreaInsets.value;
  if (insets != null) {
    return insets.bottom;
  }
  return 0;
});

// 获取当前时间字符串
function getCurrentTime(): string {
  const date = new Date();
  const hours = date.getHours() as number;
  const minutes = date.getMinutes() as number;
  const hStr = hours < 10 ? `0${hours}` : `${hours}`;
  const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hStr}:${mStr}`;
}

// 自动滚动到底部
function scrollToBottom() {
  setTimeout(() => {
    scrollTop.value = scrollTop.value + 1000;
  }, 100);
}

// 发送消息
function sendMessage() {
  const text = inputText.value.trim();
  if (text == '')
    return;

  // 添加用户消息
  const userMsgId = Date.now().toString();
  messages.value.push({
    id: userMsgId,
    sender: 'user',
    content: text,
    time: getCurrentTime()
  } as ChatMessage);

  inputText.value = '';
  scrollToBottom();

  // 模拟 AI 回复
  isTyping.value = true;

  setTimeout(() => {
    isTyping.value = false;
    let replyContent = '收到你的消息！目前这只是一个模拟的 AI 对话窗口，你可以在此基础上接入你自己的大语言模型（如 DeepSeek、OpenAI、Gemini等）。';

    if (text.includes('你好') || text.includes('hello')) {
      replyContent = '你好！我是你的 AI 助手，很高兴为你提供服务。有什么我可以帮你的吗？😊';
    }
    else if (text.includes('模板') || text.includes('unibest')) {
      replyContent = 'unibestX 是基于 uni-app X 极速开发模板。它支持 TypeScript、UnoCSS、UTS 插件，并能完美编译为原生 Android/iOS App！';
    }
    else if (text.includes('组件')) {
      replyContent = '当前模板内置了许多优秀的组件与工具，例如 NavBar 导航栏、分页加载、网络请求等，你都可以直接使用。';
    }

    messages.value.push({
      id: Date.now().toString(),
      sender: 'ai',
      content: replyContent,
      time: getCurrentTime()
    } as ChatMessage);

    scrollToBottom();
  }, 800);
}

onMounted(() => {
  // 欢迎语
  messages.value.push({
    id: 'welcome',
    sender: 'ai',
    content: '你好！我是你的 AI 智能助手。你可以询问我任何关于本应用的问题，或者只是和我随便聊聊！✨',
    time: getCurrentTime()
  } as ChatMessage);
});

return (): any | null => {

const _component_uni_icons = resolveEasyComponent("uni-icons",_easycom_uni_icons)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "page-style": {'navigationBarTitleText':'AI 智能助手','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-root wtu-12mckpk-0 wtu-gwjw8e-1 wtu-1iiedf1-2" }), [
            _cE("scroll-view", _uM({
              class: "wtu-12mckpk-0 wtu-3zg6a-3 wtu-1imgdni-4",
              direction: "vertical",
              "scroll-top": unref(scrollTop),
              "scroll-with-animation": true
            }), [
              _cE(Fragment, null, RenderHelpers.renderList(unref(messages), (msg, __key, __index, _cached): any => {
                return _cE("view", _uM({
                  key: msg.id,
                  class: "wtu-15ke1fv-5 wtu-1iiedf1-2"
                }), [
                  isTrue(isAiMessage(msg.sender))
                    ? _cE("view", _uM({
                        key: 0,
                        class: "msg-row-start"
                      }), [
                        _cE("view", _uM({ class: "wtu-8tr2im-6 wtu-7y5lr9-7 wtu-6q9kae-8 wtu-8tyvyh-9 wtu-mqpefj-a wtu-1qpn96n-b wtu-1lxf9re-c wtu-1ikrsu4-d" }), [
                          _cE("text", _uM({ class: "wtu-9vtjee-e wtu-msrkdo-f wtu-j5w2ks-g" }), "AI")
                        ]),
                        _cE("view", _uM({ class: "msg-content-left" }), [
                          _cE("view", _uM({ class: "wtu-rq9s3i-h wtu-78q8ib-i wtu-d58m5d-j wtu-5faia3-k wtu-1ikrsu4-d wtu-jpp5lf-l wtu-1nptzfn-m" }), [
                            _cE("text", _uM({ class: "wtu-1gyyuxw-n wtu-14sfh86-o wtu-1qe55dz-p" }), _tD(msg.content), 1 /* TEXT */)
                          ]),
                          _cE("text", _uM({ class: "wtu-1bj83jj-q wtu-1w0aoxm-r wtu-1rwo7k7-s wtu-34to1r-t" }), _tD(msg.time), 1 /* TEXT */)
                        ])
                      ])
                    : _cE("view", _uM({
                        key: 1,
                        class: "msg-row-end"
                      }), [
                        _cE("view", _uM({ class: "msg-content-right" }), [
                          _cE("view", _uM({ class: "wtu-b3txcv-u wtu-78q8ib-i wtu-oa4lpf-v wtu-gkh66x-w wtu-1ikrsu4-d" }), [
                            _cE("text", _uM({ class: "wtu-9vtjee-e wtu-14sfh86-o wtu-1qe55dz-p" }), _tD(msg.content), 1 /* TEXT */)
                          ]),
                          _cE("text", _uM({ class: "wtu-1bj83jj-q wtu-1w0aoxm-r wtu-1rwo7k7-s wtu-f5xa25-x" }), _tD(msg.time), 1 /* TEXT */)
                        ]),
                        _cE("view", _uM({ class: "wtu-8tr2im-6 wtu-7y5lr9-7 wtu-6q9kae-8 wtu-u5zyoi-y wtu-mqpefj-a wtu-1qpn96n-b wtu-3mj074-z wtu-1ikrsu4-d" }), [
                          _cE("text", _uM({ class: "wtu-ucxd0z-10 wtu-msrkdo-f wtu-j5w2ks-g" }), "ME")
                        ])
                      ])
                ])
              }), 128 /* KEYED_FRAGMENT */),
              isTrue(unref(isTyping))
                ? _cE("view", _uM({
                    key: 0,
                    class: "msg-row-start wtu-15ke1fv-5"
                  }), [
                    _cE("view", _uM({ class: "wtu-8tr2im-6 wtu-7y5lr9-7 wtu-6q9kae-8 wtu-8tyvyh-9 wtu-mqpefj-a wtu-1qpn96n-b wtu-1lxf9re-c wtu-1ikrsu4-d" }), [
                      _cE("text", _uM({ class: "wtu-9vtjee-e wtu-msrkdo-f wtu-j5w2ks-g" }), "AI")
                    ]),
                    _cE("view", _uM({ class: "wtu-rq9s3i-h wtu-78q8ib-i wtu-d58m5d-j wtu-5faia3-k wtu-1ikrsu4-d wtu-jpp5lf-l wtu-1nptzfn-m" }), [
                      _cE("text", _uM({ class: "wtu-ucxd0z-10 wtu-14sfh86-o" }), "AI 正在思考中...")
                    ])
                  ])
                : _cC("v-if", true),
              _cE("view", _uM({
                style: _nS(_uM({ height: `${unref(safeAreaBottom) + 70}px` }))
              }), null, 4 /* STYLE */)
            ], 8 /* PROPS */, ["scroll-top"]),
            _cE("view", _uM({
              class: "footer-fixed wtu-rq9s3i-h wtu-r4rl0q-11 wtu-1nptzfn-m wtu-hixf31-12 wtu-1iiedf1-2",
              style: _nS(_uM({ paddingBottom: `${unref(safeAreaBottom) + 10}px` }))
            }), [
              _cE("view", _uM({ class: "wtu-on566v-13 wtu-mqpefj-a wtu-1t3d52l-14 wtu-15fkpjz-15 wtu-1owynq5-16 wtu-y3lmuv-17" }), [
                _cE("input", _uM({
                  modelValue: unref(inputText),
                  onInput: ($event: UniInputEvent) => {trySetRefValue(inputText, $event.detail.value)},
                  type: "text",
                  placeholder: "和 AI 助手聊点什么吧...",
                  "placeholder-style": "color: #94a3b8",
                  class: "chat-input",
                  "confirm-type": "send",
                  onConfirm: sendMessage
                }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue"]),
                _cE("view", _uM({
                  class: "wtu-qglysi-18 wtu-ikawjt-19 wtu-vh6n5g-1a wtu-8tyvyh-9 wtu-mqpefj-a wtu-1qpn96n-b wtu-1gsk3nn-1b",
                  onClick: sendMessage
                }), [
                  _cV(_component_uni_icons, _uM({
                    type: "paperplane-filled",
                    size: "18",
                    color: "#ffffff"
                  }))
                ])
              ])
            ], 4 /* STYLE */)
          ])
        ]),
        _: 1 /* STABLE */
      }))
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesAiAiStyles = [_uM([["page-root", _pS(_uM([["height", "100%"], ["display", "flex"], ["flexDirection", "column"]]))], ["footer-fixed", _pS(_uM([["position", "fixed"], ["left", 0], ["right", 0], ["bottom", 0], ["zIndex", 100]]))], ["msg-row-start", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"]]))], ["msg-row-end", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"], ["justifyContent", "flex-end"]]))], ["msg-content-left", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["maxWidth", 270]]))], ["msg-content-right", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "flex-end"], ["maxWidth", 270]]))], ["flex-col", _pS(_uM([["display", "flex"], ["flexDirection", "column"]]))], ["flex-row", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["chat-input", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["height", 36], ["backgroundColor", "#f1f5f9"], ["color", "#1e293b"], ["fontSize", 14], ["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["wtu-12mckpk-0", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-gwjw8e-1", _pS(_uM([["display", "flex"]]))], ["wtu-1iiedf1-2", _pS(_uM([["flexDirection", "column"]]))], ["wtu-3zg6a-3", _pS(_uM([["paddingLeft", 15], ["paddingRight", 15]]))], ["wtu-1imgdni-4", _pS(_uM([["paddingTop", 10], ["paddingBottom", 10]]))], ["wtu-15ke1fv-5", _pS(_uM([["marginBottom", 15]]))], ["wtu-8tr2im-6", _pS(_uM([["width", 36]]))], ["wtu-7y5lr9-7", _pS(_uM([["height", 36]]))], ["wtu-6q9kae-8", _pS(_uM([["borderTopLeftRadius", 18], ["borderTopRightRadius", 18], ["borderBottomRightRadius", 18], ["borderBottomLeftRadius", 18]]))], ["wtu-8tyvyh-9", _pS(_uM([["backgroundColor", "#2563eb"]]))], ["wtu-mqpefj-a", _pS(_uM([["alignItems", "center"]]))], ["wtu-1qpn96n-b", _pS(_uM([["justifyContent", "center"]]))], ["wtu-1lxf9re-c", _pS(_uM([["marginRight", 10]]))], ["wtu-1ikrsu4-d", _pS(_uM([["--tw-inset-shadow", "0 0 #0000"], ["--tw-inset-ring-shadow", "0 0 #0000"], ["--tw-ring-offset-shadow", "0 0 #0000"], ["--tw-ring-shadow", "0 0 #0000"], ["--tw-shadow", "0 1px 3px 0 var(--tw-shadow-color, rgba(0, 0, 0, 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgba(0, 0, 0, 0.1))"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["wtu-9vtjee-e", _pS(_uM([["color", "#ffffff"]]))], ["wtu-msrkdo-f", _pS(_uM([["fontSize", 12]]))], ["wtu-j5w2ks-g", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-rq9s3i-h", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-78q8ib-i", _pS(_uM([["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["wtu-d58m5d-j", _pS(_uM([["borderTopRightRadius", 16], ["borderBottomRightRadius", 16]]))], ["wtu-5faia3-k", _pS(_uM([["borderBottomLeftRadius", 16]]))], ["wtu-jpp5lf-l", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-1nptzfn-m", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-1gyyuxw-n", _pS(_uM([["color", "#1e293b"]]))], ["wtu-14sfh86-o", _pS(_uM([["fontSize", 14]]))], ["wtu-1qe55dz-p", _pS(_uM([["--tw-leading", "var(--leading-relaxed, 1.625)"], ["lineHeight", 1.625]]))], ["wtu-1bj83jj-q", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-1w0aoxm-r", _pS(_uM([["fontSize", 10]]))], ["wtu-1rwo7k7-s", _pS(_uM([["marginTop", 4]]))], ["wtu-34to1r-t", _pS(_uM([["marginLeft", 4]]))], ["wtu-b3txcv-u", _pS(_uM([["backgroundColor", "#10b981"]]))], ["wtu-oa4lpf-v", _pS(_uM([["borderTopLeftRadius", 16], ["borderBottomLeftRadius", 16]]))], ["wtu-gkh66x-w", _pS(_uM([["borderBottomRightRadius", 16]]))], ["wtu-f5xa25-x", _pS(_uM([["marginRight", 4]]))], ["wtu-u5zyoi-y", _pS(_uM([["backgroundColor", "#e2e8f0"]]))], ["wtu-3mj074-z", _pS(_uM([["marginLeft", 10]]))], ["wtu-ucxd0z-10", _pS(_uM([["color", "#64748b"]]))], ["wtu-r4rl0q-11", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderTopWidth", 1]]))], ["wtu-hixf31-12", _pS(_uM([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10]]))], ["wtu-on566v-13", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1t3d52l-14", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-15fkpjz-15", _pS(_uM([["borderTopLeftRadius", 24], ["borderTopRightRadius", 24], ["borderBottomRightRadius", 24], ["borderBottomLeftRadius", 24]]))], ["wtu-1owynq5-16", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["wtu-y3lmuv-17", _pS(_uM([["paddingTop", 6], ["paddingBottom", 6]]))], ["wtu-qglysi-18", _pS(_uM([["width", 32]]))], ["wtu-ikawjt-19", _pS(_uM([["height", 32]]))], ["wtu-vh6n5g-1a", _pS(_uM([["borderTopLeftRadius", 16], ["borderTopRightRadius", 16], ["borderBottomRightRadius", 16], ["borderBottomLeftRadius", 16]]))], ["wtu-1gsk3nn-1b", _pS(_uM([["marginLeft", 8]]))]])]
