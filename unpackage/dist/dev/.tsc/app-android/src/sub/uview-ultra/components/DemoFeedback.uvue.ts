import _easycom_up_alert from '@/uni_modules/uview-ultra/components/up-alert/up-alert.uvue'
import _easycom_up_notice_bar from '@/uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.uvue'
import _easycom_up_collapse_item from '@/uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue'
import _easycom_up_collapse from '@/uni_modules/uview-ultra/components/up-collapse/up-collapse.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_tooltip from '@/uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue'
import _easycom_up_divider from '@/uni_modules/uview-ultra/components/up-divider/up-divider.uvue'
import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_overlay from '@/uni_modules/uview-ultra/components/up-overlay/up-overlay.uvue'
import _easycom_up_toast from '@/uni_modules/uview-ultra/components/up-toast/up-toast.uvue'
import _easycom_up_notify from '@/uni_modules/uview-ultra/components/up-notify/up-notify.uvue'
import _easycom_up_modal from '@/uni_modules/uview-ultra/components/up-modal/up-modal.uvue'
import _easycom_up_popup from '@/uni_modules/uview-ultra/components/up-popup/up-popup.uvue'
import _easycom_up_loading_page from '@/uni_modules/uview-ultra/components/up-loading-page/up-loading-page.uvue'
import { ref } from 'vue'

// ==================== 反馈组件 ====================

const __sfc__ = defineComponent({
  __name: 'DemoFeedback',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const loadingPageShow = ref(false)
function triggerLoadingPage() {
  loadingPageShow.value = true
  setTimeout(() => {
    loadingPageShow.value = false
  }, 2000)
}

const collapseValue = ref('1')
const modalShow = ref(false)
const modalTitle = ref('')
const modalContent = ref('')
const modalShowCancel = ref(false)
const popupShow = ref(false)
const popupMode = ref('bottom')
const overlayShow = ref(false)
const overlayOpacity = ref(0.5)

// Tooltip
const tooltipButtons = ref(['编辑', '删除'] as string[])

// Toast
const uToast = ref(null as ComponentPublicInstance | null)
function showToast(type: string) {
  const toast = uToast.value
  if (toast != null) {
    const configs = { __$originalPosition: new UTSSourceMapPosition("configs", "src/sub/uview-ultra/components/DemoFeedback.uvue", 230, 11), 
      success: { message: '操作成功！', type: 'success' },
      error: { message: '操作失败！', type: 'error' },
      warning: { message: '请注意风险！', type: 'warning' },
      default: { message: '这是一条提示', type: 'default' },
    } as UTSJSONObject
    const config = configs[type] as UTSJSONObject
    toast.$callMethod('show', {
      message: config.message as string,
      type: config.type as string,
    })
  }
}

// Notify
const uNotify = ref(null as ComponentPublicInstance | null)
function showNotify(type: string) {
  const notify = uNotify.value
  if (notify != null) {
    const msgs = { __$originalPosition: new UTSSourceMapPosition("msgs", "src/sub/uview-ultra/components/DemoFeedback.uvue", 249, 11), 
      primary: '主要通知消息',
      success: '操作成功通知',
      warning: '请注意安全通知',
      error: '发生错误通知',
    } as UTSJSONObject
    notify.$callMethod('show', {
      message: msgs[type] as string,
      type,
    })
  }
}

// Modal
function showModal() {
  modalTitle.value = '提示'
  modalContent.value = '这是一个模态弹窗，用于提示重要信息。'
  modalShowCancel.value = false
  modalShow.value = true
}
function showConfirmModal() {
  modalTitle.value = '确认操作'
  modalContent.value = '确定要执行此操作吗？此操作不可撤销。'
  modalShowCancel.value = true
  modalShow.value = true
}
function onModalConfirm() {
  modalShow.value = false
  showToast('success')
}
function onModalClose() {
  modalShow.value = false
}

// Popup
function openPopup(mode: string) {
  popupMode.value = mode
  popupShow.value = true
}
function onPopupClose() {
  popupShow.value = false
}

return (): any | null => {

const _component_up_alert = resolveEasyComponent("up-alert",_easycom_up_alert)
const _component_up_notice_bar = resolveEasyComponent("up-notice-bar",_easycom_up_notice_bar)
const _component_up_collapse_item = resolveEasyComponent("up-collapse-item",_easycom_up_collapse_item)
const _component_up_collapse = resolveEasyComponent("up-collapse",_easycom_up_collapse)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_tooltip = resolveEasyComponent("up-tooltip",_easycom_up_tooltip)
const _component_up_divider = resolveEasyComponent("up-divider",_easycom_up_divider)
const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)
const _component_up_overlay = resolveEasyComponent("up-overlay",_easycom_up_overlay)
const _component_up_toast = resolveEasyComponent("up-toast",_easycom_up_toast)
const _component_up_notify = resolveEasyComponent("up-notify",_easycom_up_notify)
const _component_up_modal = resolveEasyComponent("up-modal",_easycom_up_modal)
const _component_up_popup = resolveEasyComponent("up-popup",_easycom_up_popup)
const _component_up_loading_page = resolveEasyComponent("up-loading-page",_easycom_up_loading_page)

  return _cE("view", null, [
    _cE("text", _uM({ class: "section-title" }), " 反馈组件 "),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-alert "),
      _cV(_component_up_alert, _uM({
        title: "成功提示",
        type: "success",
        "show-icon": true
      })),
      _cE("view", _uM({ class: "h-10px" })),
      _cV(_component_up_alert, _uM({
        title: "警告提示",
        type: "warning",
        "show-icon": true
      }))
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-notice-bar "),
      _cV(_component_up_notice_bar, _uM({
        text: "uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库",
        mode: "link"
      }))
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-collapse "),
      _cV(_component_up_collapse, _uM({
        value: collapseValue.value,
        accordion: true
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cV(_component_up_collapse_item, _uM({
            title: "第一项",
            name: "1"
          }), _uM({
            default: withSlotCtx((): any[] => [
              _cE("text", _uM({ class: "collapse-text" }), "uview-ultra 是基于 uview-plus 修改的 uni-app-x 版本")
            ]),
            _: 1 /* STABLE */
          })),
          _cV(_component_up_collapse_item, _uM({
            title: "第二项",
            name: "2"
          }), _uM({
            default: withSlotCtx((): any[] => [
              _cE("text", _uM({ class: "collapse-text" }), "支持 iOS、Android、H5、小程序等多端")
            ]),
            _: 1 /* STABLE */
          }))
        ]),
        _: 1 /* STABLE */
      }), 8 /* PROPS */, ["value"])
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-toast "),
      _cE("view", _uM({ class: "demo-row-start" }), [
        _cV(_component_up_button, _uM({
          type: "primary",
          text: "成功提示",
          size: "mini",
          onClick: () => {showToast('success')}
        }), null, 8 /* PROPS */, ["onClick"]),
        _cE("view", _uM({ class: "w-10px" })),
        _cV(_component_up_button, _uM({
          type: "error",
          text: "错误提示",
          size: "mini",
          onClick: () => {showToast('error')}
        }), null, 8 /* PROPS */, ["onClick"])
      ])
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-notify "),
      _cE("view", _uM({ class: "demo-row-start" }), [
        _cV(_component_up_button, _uM({
          type: "primary",
          text: "主要通知",
          size: "mini",
          onClick: () => {showNotify('primary')}
        }), null, 8 /* PROPS */, ["onClick"]),
        _cE("view", _uM({ class: "w-10px" })),
        _cV(_component_up_button, _uM({
          type: "success",
          text: "成功通知",
          size: "mini",
          onClick: () => {showNotify('success')}
        }), null, 8 /* PROPS */, ["onClick"])
      ])
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-loading-page "),
      _cE("view", _uM({ class: "demo-row-start" }), [
        _cV(_component_up_button, _uM({
          type: "primary",
          text: "触发全屏加载",
          size: "mini",
          onClick: triggerLoadingPage
        }))
      ])
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-overlay "),
      _cE("view", _uM({ class: "demo-row-start" }), [
        _cV(_component_up_button, _uM({
          type: "primary",
          text: "显示遮罩",
          size: "mini",
          onClick: () => {overlayShow.value = true}
        }), null, 8 /* PROPS */, ["onClick"]),
        _cE("view", _uM({ class: "w-10px" })),
        _cV(_component_up_button, _uM({
          type: "warning",
          text: "半透明遮罩",
          size: "mini",
          onClick: () => {overlayOpacity.value = 0.3; overlayShow.value = true}
        }), null, 8 /* PROPS */, ["onClick"])
      ])
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-modal "),
      _cE("view", _uM({ class: "demo-row-start" }), [
        _cV(_component_up_button, _uM({
          type: "primary",
          text: "弹窗提示",
          size: "mini",
          onClick: showModal
        })),
        _cE("view", _uM({ class: "w-10px" })),
        _cV(_component_up_button, _uM({
          type: "warning",
          text: "确认弹窗",
          size: "mini",
          onClick: showConfirmModal
        }))
      ])
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-popup "),
      _cE("view", _uM({ class: "demo-row-start" }), [
        _cV(_component_up_button, _uM({
          type: "primary",
          text: "顶部弹出",
          size: "mini",
          onClick: () => {openPopup('top')}
        }), null, 8 /* PROPS */, ["onClick"]),
        _cE("view", _uM({ class: "w-10px" })),
        _cV(_component_up_button, _uM({
          type: "primary",
          text: "底部弹出",
          size: "mini",
          onClick: () => {openPopup('bottom')}
        }), null, 8 /* PROPS */, ["onClick"])
      ])
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-tooltip "),
      _cE("view", _uM({ class: "demo-row-start" }), [
        _cV(_component_up_tooltip, _uM({
          text: "长按此处复制文本",
          direction: "top"
        })),
        _cE("view", _uM({ class: "w-20px" })),
        _cV(_component_up_tooltip, _uM({
          text: "长按显示操作",
          direction: "top",
          "show-copy": false,
          buttons: tooltipButtons.value
        }), null, 8 /* PROPS */, ["buttons"])
      ])
    ]),
    _cE("view", _uM({ class: "demo-block" }), [
      _cE("text", _uM({ class: "demo-label" }), " up-no-network "),
      _cE("text", _uM({ class: "text-12px text-__909399_" }), "引入即自动监听网络状态，断网时全屏展示遮罩提示。")
    ]),
    _cV(_component_up_divider, _uM({ text: "反馈组件结束" })),
    _cV(_component_up_overlay, _uM({
      show: overlayShow.value,
      opacity: overlayOpacity.value,
      onClick: () => {overlayShow.value = false}
    }), _uM({
      default: withSlotCtx((): any[] => [
        _cE("view", _uM({ class: "flex-1 items-center justify-center" }), [
          _cE("view", _uM({
            class: "bg-white rounded-8px p-20px items-center",
            onClick: withModifiers(() => {}, ["stop"])
          }), [
            _cV(_component_up_loading_icon, _uM({ mode: "circle" })),
            _cE("text", _uM({ class: "text-14px text-__303133_ mt-10px" }), "加载中，点击遮罩关闭")
          ], 8 /* PROPS */, ["onClick"])
        ])
      ]),
      _: 1 /* STABLE */
    }), 8 /* PROPS */, ["show", "opacity", "onClick"]),
    _cV(_component_up_toast, _uM({
      ref_key: "uToast",
      ref: uToast
    }), null, 512 /* NEED_PATCH */),
    _cV(_component_up_notify, _uM({
      ref_key: "uNotify",
      ref: uNotify
    }), null, 512 /* NEED_PATCH */),
    _cV(_component_up_modal, _uM({
      show: modalShow.value,
      title: modalTitle.value,
      content: modalContent.value,
      "show-confirm-button": true,
      "show-cancel-button": modalShowCancel.value,
      onConfirm: onModalConfirm,
      onClose: onModalClose
    }), null, 8 /* PROPS */, ["show", "title", "content", "show-cancel-button"]),
    _cV(_component_up_popup, _uM({
      show: popupShow.value,
      mode: popupMode.value,
      closeable: true,
      round: 10,
      onClose: onPopupClose
    }), _uM({
      default: withSlotCtx((): any[] => [
        _cE("view", _uM({ class: "p-30px items-center" }), [
          _cE("text", _uM({ class: "text-16px text-__303133_" }), _tD(popupMode.value) + " 弹出层内容", 1 /* TEXT */)
        ])
      ]),
      _: 1 /* STABLE */
    }), 8 /* PROPS */, ["show", "mode"]),
    _cV(_component_up_loading_page, _uM({
      loading: loadingPageShow.value,
      "loading-text": "页面正在加载中...",
      "loading-mode": "circle"
    }), null, 8 /* PROPS */, ["loading"])
  ])
}
}

})
export default __sfc__
const GenSrcSubUviewUltraComponentsDemoFeedbackStyles = [_uM([["bg-white", _pS(_uM([["backgroundColor", "rgba(255,255,255,var(--un-bg-opacity,1))"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["h-10px", _pS(_uM([["height", 10]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mt-10px", _pS(_uM([["marginTop", 10]]))], ["p-20px", _pS(_uM([["paddingTop", 20], ["paddingRight", 20], ["paddingBottom", 20], ["paddingLeft", 20]]))], ["p-30px", _pS(_uM([["paddingTop", 30], ["paddingRight", 30], ["paddingBottom", 30], ["paddingLeft", 30]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__303133_", _pS(_uM([["color", "#303133"]]))], ["text-__909399_", _pS(_uM([["color", "#909399"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-16px", _pS(_uM([["fontSize", 16]]))], ["w-10px", _pS(_uM([["width", 10]]))], ["w-20px", _pS(_uM([["width", 20]]))], ["section-title", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 8], ["paddingLeft", 16], ["fontSize", 18], ["fontWeight", "bold"], ["color", "#303133"]]))], ["demo-block", _pS(_uM([["marginTop", 0], ["marginRight", 12], ["marginBottom", 12], ["marginLeft", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "#2979ff"]]))], ["demo-row", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexWrap", "wrap"], ["alignItems", "center"], ["justifyContent", "space-between"], ["marginBottom", 8]]))], ["demo-row-start", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["flexWrap", "wrap"], ["alignItems", "center"], ["justifyContent", "flex-start"], ["marginBottom", 8]]))], ["collapse-text", _pS(_uM([["fontSize", 13], ["color", "#909399"], ["lineHeight", "20px"]]))]])]
