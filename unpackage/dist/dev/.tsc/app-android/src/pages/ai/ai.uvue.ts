import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_uni_icons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
/* eslint-disable ts/consistent-type-definitions */
import NavBar from '@/src/components/NavBar/NavBar.uvue'
import { safeAreaInsets } from '@/src/utils/systemInfo'

type ChatMessage = { __$originalPosition?: UTSSourceMapPosition<"ChatMessage", "src/pages/ai/ai.uvue", 90, 6>;
  id: string
  sender: string
  content: string
  time: string
}


const __sfc__ = defineComponent({
  __name: 'ai',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const messages = ref<ChatMessage[]>([])
const inputText = ref<string>('')
const isTyping = ref<boolean>(false)
const scrollTop = ref<number>(0)

// 判断是否为 AI 消息
function isAiMessage(sender: string): boolean {
  return sender == 'ai'
}

// 底部安全区
const safeAreaBottom = computed<number>((): number => {
  const insets = safeAreaInsets.value
  if (insets != null) {
    return insets.bottom
  }
  return 0
})

// 获取当前时间字符串
function getCurrentTime(): string {
  const date = new Date()
  const hours = date.getHours() as number
  const minutes = date.getMinutes() as number
  const hStr = hours < 10 ? `0${hours}` : `${hours}`
  const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`
  return `${hStr}:${mStr}`
}

// 自动滚动到底部
function scrollToBottom() {
  setTimeout(() => {
    scrollTop.value = scrollTop.value + 1000
  }, 100)
}

// 发送消息
function sendMessage() {
  const text = inputText.value.trim()
  if (text == '')
    return

  // 添加用户消息
  const userMsgId = Date.now().toString()
  messages.value.push({
    id: userMsgId,
    sender: 'user',
    content: text,
    time: getCurrentTime(),
  } as ChatMessage)

  inputText.value = ''
  scrollToBottom()

  // 模拟 AI 回复
  isTyping.value = true

  setTimeout(() => {
    isTyping.value = false
    let replyContent = '收到你的消息！目前这只是一个模拟的 AI 对话窗口，你可以在此基础上接入你自己的大语言模型（如 DeepSeek、OpenAI、Gemini等）。'

    if (text.includes('你好') || text.includes('hello')) {
      replyContent = '你好！我是你的 AI 助手，很高兴为你提供服务。有什么我可以帮你的吗？😊'
    }
    else if (text.includes('模板') || text.includes('unibest')) {
      replyContent = 'unibestX 是基于 uni-app X 极速开发模板。它支持 TypeScript、UnoCSS、UTS 插件，并能完美编译为原生 Android/iOS App！'
    }
    else if (text.includes('组件')) {
      replyContent = '当前模板内置了许多优秀的组件，例如 NavBar 导航栏、uview UI 库组件等，你都可以直接使用。'
    }

    messages.value.push({
      id: Date.now().toString(),
      sender: 'ai',
      content: replyContent,
      time: getCurrentTime(),
    } as ChatMessage)

    scrollToBottom()
  }, 800)
}

onMounted(() => {
  // 欢迎语
  messages.value.push({
    id: 'welcome',
    sender: 'ai',
    content: '你好！我是你的 AI 智能助手。你可以询问我任何关于本应用的问题，或者只是和我随便聊聊！✨',
    time: getCurrentTime(),
  } as ChatMessage)
})

return (): any | null => {

const _component_NavBar = resolveEasyComponent("NavBar",_easycom_NavBar)
const _component_uni_icons = resolveEasyComponent("uni-icons",_easycom_uni_icons)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "navigation-style": 'custom',
        "navigation-bar-title-text": 'AI助手'
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "page-root" }), [
            _cV(_component_NavBar, _uM({
              title: "AI 智能助手",
              "show-back": true
            })),
            _cE("scroll-view", _uM({
              class: "wtu-12mckpk-0 px-15px py-10px",
              "scroll-y": "true",
              "scroll-top": unref(scrollTop),
              "scroll-with-animation": true
            }), [
              _cE(Fragment, null, RenderHelpers.renderList(unref(messages), (msg, __key, __index, _cached): any => {
                return _cE("view", _uM({
                  key: msg.id,
                  class: "mb-15px wtu-1iiedf1-1"
                }), [
                  isTrue(isAiMessage(msg.sender))
                    ? _cE("view", _uM({
                        key: 0,
                        class: "msg-row-start"
                      }), [
                        _cE("view", _uM({ class: "w-36px h-36px rounded-18px wtu-8tyvyh-2 wtu-mqpefj-3 wtu-1qpn96n-4 mr-10px wtu-1ikrsu4-5" }), [
                          _cE("text", _uM({ class: "wtu-9vtjee-6 text-12px wtu-j5w2ks-7" }), "AI")
                        ]),
                        _cE("view", _uM({ class: "msg-content-left" }), [
                          _cE("view", _uM({ class: "wtu-rq9s3i-8 p-12px rounded-r-16px rounded-bl-16px wtu-1ikrsu4-5 wtu-jpp5lf-9 wtu-1nptzfn-a" }), [
                            _cE("text", _uM({ class: "wtu-1gyyuxw-b text-14px wtu-1qe55dz-c" }), _tD(msg.content), 1 /* TEXT */)
                          ]),
                          _cE("text", _uM({ class: "wtu-1bj83jj-d text-10px mt-4px ml-4px" }), _tD(msg.time), 1 /* TEXT */)
                        ])
                      ])
                    : _cE("view", _uM({
                        key: 1,
                        class: "msg-row-end"
                      }), [
                        _cE("view", _uM({ class: "msg-content-right" }), [
                          _cE("view", _uM({ class: "wtu-b3txcv-e p-12px rounded-l-16px rounded-br-16px wtu-1ikrsu4-5" }), [
                            _cE("text", _uM({ class: "wtu-9vtjee-6 text-14px wtu-1qe55dz-c" }), _tD(msg.content), 1 /* TEXT */)
                          ]),
                          _cE("text", _uM({ class: "wtu-1bj83jj-d text-10px mt-4px mr-4px" }), _tD(msg.time), 1 /* TEXT */)
                        ]),
                        _cE("view", _uM({ class: "w-36px h-36px rounded-18px wtu-u5zyoi-f wtu-mqpefj-3 wtu-1qpn96n-4 ml-10px wtu-1ikrsu4-5" }), [
                          _cE("text", _uM({ class: "wtu-ucxd0z-g text-12px wtu-j5w2ks-7" }), "ME")
                        ])
                      ])
                ])
              }), 128 /* KEYED_FRAGMENT */),
              isTrue(unref(isTyping))
                ? _cE("view", _uM({
                    key: 0,
                    class: "msg-row-start mb-15px"
                  }), [
                    _cE("view", _uM({ class: "w-36px h-36px rounded-18px wtu-8tyvyh-2 wtu-mqpefj-3 wtu-1qpn96n-4 mr-10px wtu-1ikrsu4-5" }), [
                      _cE("text", _uM({ class: "wtu-9vtjee-6 text-12px wtu-j5w2ks-7" }), "AI")
                    ]),
                    _cE("view", _uM({ class: "wtu-rq9s3i-8 p-12px rounded-r-16px rounded-bl-16px wtu-1ikrsu4-5 wtu-jpp5lf-9 wtu-1nptzfn-a" }), [
                      _cE("text", _uM({ class: "wtu-ucxd0z-g text-14px" }), "AI 正在思考中...")
                    ])
                  ])
                : _cC("v-if", true),
              _cE("view", _uM({
                style: _nS(_uM({ height: `${unref(safeAreaBottom) + 70}px` }))
              }), null, 4 /* STYLE */)
            ], 8 /* PROPS */, ["scroll-top"]),
            _cE("view", _uM({
              class: "footer-fixed wtu-rq9s3i-8 wtu-r4rl0q-h wtu-1nptzfn-a p-10px wtu-1iiedf1-1",
              style: _nS(_uM({ paddingBottom: `${unref(safeAreaBottom) + 10}px` }))
            }), [
              _cE("view", _uM({ class: "wtu-on566v-i wtu-mqpefj-3 wtu-1t3d52l-j rounded-24px px-12px py-6px" }), [
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
                  class: "w-32px h-32px rounded-16px wtu-8tyvyh-2 wtu-mqpefj-3 wtu-1qpn96n-4 ml-8px",
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
const GenSrcPagesAiAiStyles = [_uM([["page-root", _pS(_uM([["height", "100%"], ["display", "flex"], ["flexDirection", "column"]]))], ["footer-fixed", _pS(_uM([["position", "fixed"], ["left", 0], ["right", 0], ["bottom", 0], ["zIndex", 100]]))], ["msg-row-start", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"]]))], ["msg-row-end", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"], ["justifyContent", "flex-end"]]))], ["msg-content-left", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["maxWidth", 270]]))], ["msg-content-right", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "flex-end"], ["maxWidth", 270]]))], ["flex-col", _pS(_uM([["display", "flex"], ["flexDirection", "column"]]))], ["flex-row", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["chat-input", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["height", 36], ["backgroundColor", "#f1f5f9"], ["color", "#1e293b"], ["fontSize", 14], ["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["leading-relaxed", _pS(_uM([["--tw-leading", "1.625"], ["lineHeight", 1.625]]))], ["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["shadow-sm", _pS(_uM([["--tw-shadow", "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["wtu-12mckpk-0", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1iiedf1-1", _pS(_uM([["flexDirection", "column"]]))], ["wtu-8tyvyh-2", _pS(_uM([["backgroundColor", "#2563eb"]]))], ["wtu-mqpefj-3", _pS(_uM([["alignItems", "center"]]))], ["wtu-1qpn96n-4", _pS(_uM([["justifyContent", "center"]]))], ["wtu-1ikrsu4-5", _pS(_uM([["--tw-shadow", "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"], ["boxShadow", "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"]]))], ["wtu-9vtjee-6", _pS(_uM([["color", "#ffffff"]]))], ["wtu-j5w2ks-7", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-rq9s3i-8", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-jpp5lf-9", _pS(_uM([["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-1nptzfn-a", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["wtu-1gyyuxw-b", _pS(_uM([["color", "#1e293b"]]))], ["wtu-1qe55dz-c", _pS(_uM([["--tw-leading", "1.625"], ["lineHeight", 1.625]]))], ["wtu-1bj83jj-d", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-b3txcv-e", _pS(_uM([["backgroundColor", "#10b981"]]))], ["wtu-u5zyoi-f", _pS(_uM([["backgroundColor", "#e2e8f0"]]))], ["wtu-ucxd0z-g", _pS(_uM([["color", "#64748b"]]))], ["wtu-r4rl0q-h", _pS(_uM([["borderTopStyle", "var(--tw-border-style)"], ["borderTopWidth", 1]]))], ["wtu-on566v-i", _pS(_uM([["flexDirection", "row"]]))], ["wtu-1t3d52l-j", _pS(_uM([["backgroundColor", "#f1f5f9"]]))]])]
