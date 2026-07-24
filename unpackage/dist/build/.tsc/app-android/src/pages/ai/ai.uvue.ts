import _easycom_NavBar from '@/src/components/NavBar/NavBar.uvue'
import _easycom_uni_icons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
/* eslint-disable ts/consistent-type-definitions */
import NavBar from '@/src/components/NavBar/NavBar.uvue'
import { safeAreaInsets } from '@/src/utils/systemInfo'

type ChatMessage = {
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
              class: "flex-1 px-15px py-10px",
              "scroll-y": "true",
              "scroll-top": unref(scrollTop),
              "scroll-with-animation": true
            }), [
              _cE(Fragment, null, RenderHelpers.renderList(unref(messages), (msg, __key, __index, _cached): any => {
                return _cE("view", _uM({
                  key: msg.id,
                  class: "mb-15px flex-col"
                }), [
                  isTrue(isAiMessage(msg.sender))
                    ? _cE("view", _uM({
                        key: 0,
                        class: "msg-row-start"
                      }), [
                        _cE("view", _uM({ class: "w-36px h-36px rounded-18px bg-__2563eb_ items-center justify-center mr-10px shadow-sm" }), [
                          _cE("text", _uM({ class: "text-white text-12px font-bold" }), "AI")
                        ]),
                        _cE("view", _uM({ class: "msg-content-left" }), [
                          _cE("view", _uM({ class: "bg-white p-12px rounded-r-16px rounded-bl-16px shadow-sm border border-__e2e8f0_" }), [
                            _cE("text", _uM({ class: "text-__1e293b_ text-14px leading-relaxed" }), _tD(msg.content), 1 /* TEXT */)
                          ]),
                          _cE("text", _uM({ class: "text-__94a3b8_ text-10px mt-4px ml-4px" }), _tD(msg.time), 1 /* TEXT */)
                        ])
                      ])
                    : _cE("view", _uM({
                        key: 1,
                        class: "msg-row-end"
                      }), [
                        _cE("view", _uM({ class: "msg-content-right" }), [
                          _cE("view", _uM({ class: "bg-__10b981_ p-12px rounded-l-16px rounded-br-16px shadow-sm" }), [
                            _cE("text", _uM({ class: "text-white text-14px leading-relaxed" }), _tD(msg.content), 1 /* TEXT */)
                          ]),
                          _cE("text", _uM({ class: "text-__94a3b8_ text-10px mt-4px mr-4px" }), _tD(msg.time), 1 /* TEXT */)
                        ]),
                        _cE("view", _uM({ class: "w-36px h-36px rounded-18px bg-__e2e8f0_ items-center justify-center ml-10px shadow-sm" }), [
                          _cE("text", _uM({ class: "text-__64748b_ text-12px font-bold" }), "ME")
                        ])
                      ])
                ])
              }), 128 /* KEYED_FRAGMENT */),
              isTrue(unref(isTyping))
                ? _cE("view", _uM({
                    key: 0,
                    class: "msg-row-start mb-15px"
                  }), [
                    _cE("view", _uM({ class: "w-36px h-36px rounded-18px bg-__2563eb_ items-center justify-center mr-10px shadow-sm" }), [
                      _cE("text", _uM({ class: "text-white text-12px font-bold" }), "AI")
                    ]),
                    _cE("view", _uM({ class: "bg-white p-12px rounded-r-16px rounded-bl-16px shadow-sm border border-__e2e8f0_" }), [
                      _cE("text", _uM({ class: "text-__64748b_ text-14px" }), "AI 正在思考中...")
                    ])
                  ])
                : _cC("v-if", true),
              _cE("view", _uM({
                style: _nS(_uM({ height: `${unref(safeAreaBottom) + 70}px` }))
              }), null, 4 /* STYLE */)
            ], 8 /* PROPS */, ["scroll-top"]),
            _cE("view", _uM({
              class: "footer-fixed bg-white border-t border-__e2e8f0_ p-10px flex-col",
              style: _nS(_uM({ paddingBottom: `${unref(safeAreaBottom) + 10}px` }))
            }), [
              _cE("view", _uM({ class: "flex-row items-center bg-__f1f5f9_ rounded-24px px-12px py-6px" }), [
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
                  class: "w-32px h-32px rounded-16px bg-__2563eb_ items-center justify-center ml-8px",
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
const GenSrcPagesAiAiStyles = [_uM([["bg-__10b981_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#10b981"]]))], ["bg-__2563eb_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#2563eb"]]))], ["bg-__e2e8f0_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#e2e8f0"]]))], ["bg-__f1f5f9_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f1f5f9"]]))], ["bg-white", _pS(_uM([["backgroundColor", "rgba(255,255,255,var(--un-bg-opacity,1))"]]))], ["border", _pS(_uM([["borderTopWidth", "var(--un-line-width-default,1px)"], ["borderRightWidth", "var(--un-line-width-default,1px)"], ["borderBottomWidth", "var(--un-line-width-default,1px)"], ["borderLeftWidth", "var(--un-line-width-default,1px)"]]))], ["border-__e2e8f0_", _pS(_uM([["borderTopWidth", "medium"], ["borderRightWidth", "medium"], ["borderBottomWidth", "medium"], ["borderLeftWidth", "medium"], ["borderTopStyle", "none"], ["borderRightStyle", "none"], ["borderBottomStyle", "none"], ["borderLeftStyle", "none"], ["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-t", _pS(_uM([["borderTopWidth", "var(--un-line-width-default,1px)"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-col", _pS(_uM([["flexDirection", "column"], ["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"], ["display", "flex"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-32px", _pS(_uM([["height", 32]]))], ["h-36px", _pS(_uM([["height", 36]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-15px", _pS(_uM([["marginBottom", 15]]))], ["ml-10px", _pS(_uM([["marginLeft", 10]]))], ["ml-4px", _pS(_uM([["marginLeft", 4]]))], ["ml-8px", _pS(_uM([["marginLeft", 8]]))], ["mr-10px", _pS(_uM([["marginRight", 10]]))], ["mr-4px", _pS(_uM([["marginRight", 4]]))], ["mt-4px", _pS(_uM([["marginTop", 4]]))], ["p-10px", _pS(_uM([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10]]))], ["p-12px", _pS(_uM([["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["px-12px", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["px-15px", _pS(_uM([["paddingLeft", 15], ["paddingRight", 15]]))], ["py-10px", _pS(_uM([["paddingTop", 10], ["paddingBottom", 10]]))], ["py-6px", _pS(_uM([["paddingTop", 6], ["paddingBottom", 6]]))], ["rounded-16px", _pS(_uM([["borderTopLeftRadius", 16], ["borderTopRightRadius", 16], ["borderBottomRightRadius", 16], ["borderBottomLeftRadius", 16]]))], ["rounded-18px", _pS(_uM([["borderTopLeftRadius", 18], ["borderTopRightRadius", 18], ["borderBottomRightRadius", 18], ["borderBottomLeftRadius", 18]]))], ["rounded-24px", _pS(_uM([["borderTopLeftRadius", 24], ["borderTopRightRadius", 24], ["borderBottomRightRadius", 24], ["borderBottomLeftRadius", 24]]))], ["rounded-bl-16px", _pS(_uM([["borderBottomLeftRadius", 16]]))], ["rounded-br-16px", _pS(_uM([["borderBottomRightRadius", 16]]))], ["rounded-l-16px", _pS(_uM([["borderTopLeftRadius", 16], ["borderBottomLeftRadius", 16]]))], ["rounded-r-16px", _pS(_uM([["borderTopRightRadius", 16], ["borderBottomRightRadius", 16]]))], ["shadow-sm", _pS(_uM([["boxShadow", "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))"], ["--un-shadow", "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))"]]))], ["text-__1e293b_", _pS(_uM([["color", "#1e293b"]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-10px", _pS(_uM([["fontSize", 10]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-white", _pS(_uM([["color", "rgba(255,255,255,var(--un-color-opacity,1))"]]))], ["w-32px", _pS(_uM([["width", 32]]))], ["w-36px", _pS(_uM([["width", 36]]))], ["page-root", _pS(_uM([["height", "100%"], ["display", "flex"], ["flexDirection", "column"]]))], ["footer-fixed", _pS(_uM([["position", "fixed"], ["left", 0], ["right", 0], ["bottom", 0], ["zIndex", 100]]))], ["msg-row-start", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"]]))], ["msg-row-end", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "flex-start"], ["justifyContent", "flex-end"]]))], ["msg-content-left", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["maxWidth", 270]]))], ["msg-content-right", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "flex-end"], ["maxWidth", 270]]))], ["chat-input", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["height", 36], ["backgroundColor", "#f1f5f9"], ["color", "#1e293b"], ["fontSize", 14], ["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))]])]
