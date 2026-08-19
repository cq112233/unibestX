import { ref } from 'vue';
import type { PropType } from 'vue';


const __sfc__ = defineComponent({
  __name: 'ChildDemoBox',
  props: {
  title: {
    type: String,
    default: '通信子组件'
  },
  count: {
    type: Number,
    default: 0
  },
  tags: {
    type: Array as PropType<Array<string>>,
    default: (): Array<string> => ['Vue3', 'uni-app X', 'UTS'] as Array<string>
  }
},
  emits: ['add', 'reset', 'send-msg'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const inputMsg = ref('Hello Parent from Child!');

function handleAdd() {
  emit('add', 1);
}

function handleReset() {
  emit('reset');
}

function handleSendMsg() {
  if (inputMsg.value.trim() == '') {
    uni.showToast({
      title: '请输入消息内容',
      icon: 'none'
    });
    return;
  }
  emit('send-msg', inputMsg.value);
  uni.showToast({
    title: '消息已发送',
    icon: 'success'
  });
}

return (): any | null => {

  return _cE("view", _uM({ class: "bg-__f1f5f9_ rounded-12px p-14px border-width-1px border-style-solid border-color-__cbd5e1_" }), [
    _cE("view", _uM({ class: "mb-10px border-b-width-1px border-b-style-solid border-b-color-__cbd5e1_ pb-8px" }), [
      renderSlot(_ctx.$slots, "header", {}, (): any[] => [
        _cE("text", _uM({ class: "text-14px font-bold text-__334155_" }), "📦 " + _tD(_ctx.title) + "（默认 Header）", 1 /* TEXT */)
      ])
    ]),
    _cE("view", _uM({ class: "mb-12px bg-white rounded-8px p-10px" }), [
      _cE("text", _uM({ class: "text-12px font-bold text-__475569_ mb-4px" }), "【父传子 Props 动态接收】"),
      _cE("view", _uM({ class: "flex-row items-center" }), [
        _cE("text", _uM({ class: "text-12px text-__64748b_" }), "父组件传递的 Count: "),
        _cE("text", _uM({ class: "text-14px font-bold text-__2563eb_ ml-6px" }), _tD(_ctx.count), 1 /* TEXT */)
      ])
    ]),
    _cE("view", _uM({ class: "mb-12px bg-white rounded-8px p-10px" }), [
      _cE("text", _uM({ class: "text-12px font-bold text-__475569_ mb-6px" }), "【具名作用域插槽 (Slot 向父组件传参)】"),
      _cE(Fragment, null, RenderHelpers.renderList(_ctx.tags, (item, index, __index, _cached): any => {
        return _cE("view", _uM({
          key: index,
          class: "mb-6px"
        }), [
          renderSlot(_ctx.$slots, "itemSlot", _uM({
            item: item,
            index: index
          }), (): any[] => [
            _cE("view", _uM({ class: "bg-__f8fafc_ rounded-4px p-6px" }), [
              _cE("text", _uM({ class: "text-12px text-__64748b_" }), "Tag " + _tD(index + 1) + ": " + _tD(item), 1 /* TEXT */)
            ])
          ])
        ])
      }), 128 /* KEYED_FRAGMENT */)
    ]),
    _cE("view", _uM({ class: "mb-10px bg-white rounded-8px p-10px" }), [
      _cE("text", _uM({ class: "text-12px font-bold text-__475569_ mb-8px" }), "【子传父 Emits 事件触发】"),
      _cE("view", _uM({ class: "flex-row justify-between items-center mb-8px" }), [
        _cE("view", _uM({
          class: "flex-1 bg-__2563eb_ rounded-6px h-32px flex-row items-center justify-center mr-6px",
          onClick: handleAdd
        }), [
          _cE("text", _uM({ class: "text-white text-12px" }), "触发 Count + 1")
        ]),
        _cE("view", _uM({
          class: "flex-1 bg-__dc2626_ rounded-6px h-32px flex-row items-center justify-center ml-6px",
          onClick: handleReset
        }), [
          _cE("text", _uM({ class: "text-white text-12px" }), "触发 重置事件")
        ])
      ]),
      _cE("view", _uM({ class: "bg-__f8fafc_ rounded-6px p-8px border-width-1px border-style-solid border-color-__e2e8f0_ flex-row items-center justify-between" }), [
        _cE("input", _uM({
          modelValue: inputMsg.value,
          onInput: ($event: UniInputEvent) => {(inputMsg).value = $event.detail.value},
          placeholder: "输入要送回父组件的消息",
          class: "text-12px flex-1 h-30px px-8px bg-white rounded-4px border-width-1px border-style-solid border-color-__cbd5e1_"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({
          class: "bg-__059669_ rounded-6px h-30px px-10px flex-row items-center justify-center ml-8px",
          onClick: handleSendMsg
        }), [
          _cE("text", _uM({ class: "text-white text-12px" }), "发送给父组件")
        ])
      ])
    ]),
    _cE("view", _uM({ class: "pt-6px border-t-width-1px border-t-style-solid border-t-color-__cbd5e1_" }), [
      renderSlot(_ctx.$slots, "footer", {}, (): any[] => [
        _cE("text", _uM({ class: "text-11px text-__94a3b8_" }), "（默认 Footer）")
      ])
    ])
  ])
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsChildDemoBoxStyles = [_uM([["bg-__059669_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#059669"]]))], ["bg-__2563eb_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#2563eb"]]))], ["bg-__dc2626_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#dc2626"]]))], ["bg-__f1f5f9_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f1f5f9"]]))], ["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["bg-white", _pS(_uM([["backgroundColor", "rgba(255,255,255,var(--un-bg-opacity,1))"]]))], ["border-b-color-__cbd5e1_", _pS(_uM([["borderBottomColor", "#cbd5e1"]]))], ["border-b-style-solid", _pS(_uM([["borderBottomStyle", "solid"]]))], ["border-b-width-1px", _pS(_uM([["borderBottomWidth", 1]]))], ["border-color-__cbd5e1_", _pS(_uM([["borderTopColor", "#cbd5e1"], ["borderRightColor", "#cbd5e1"], ["borderBottomColor", "#cbd5e1"], ["borderLeftColor", "#cbd5e1"]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-t-color-__cbd5e1_", _pS(_uM([["borderTopColor", "#cbd5e1"]]))], ["border-t-style-solid", _pS(_uM([["borderTopStyle", "solid"]]))], ["border-t-width-1px", _pS(_uM([["borderTopWidth", 1]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-30px", _pS(_uM([["height", 30]]))], ["h-32px", _pS(_uM([["height", 32]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-10px", _pS(_uM([["marginBottom", 10]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-4px", _pS(_uM([["marginBottom", 4]]))], ["mb-6px", _pS(_uM([["marginBottom", 6]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["ml-6px", _pS(_uM([["marginLeft", 6]]))], ["ml-8px", _pS(_uM([["marginLeft", 8]]))], ["mr-6px", _pS(_uM([["marginRight", 6]]))], ["none", _pS(_uM([["display", "none"]]))], ["p-10px", _pS(_uM([["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10]]))], ["p-14px", _pS(_uM([["paddingTop", 14], ["paddingRight", 14], ["paddingBottom", 14], ["paddingLeft", 14]]))], ["p-6px", _pS(_uM([["paddingTop", 6], ["paddingRight", 6], ["paddingBottom", 6], ["paddingLeft", 6]]))], ["p-8px", _pS(_uM([["paddingTop", 8], ["paddingRight", 8], ["paddingBottom", 8], ["paddingLeft", 8]]))], ["pb-8px", _pS(_uM([["paddingBottom", 8]]))], ["pt-6px", _pS(_uM([["paddingTop", 6]]))], ["px-10px", _pS(_uM([["paddingLeft", 10], ["paddingRight", 10]]))], ["px-8px", _pS(_uM([["paddingLeft", 8], ["paddingRight", 8]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-4px", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["rounded-6px", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__2563eb_", _pS(_uM([["color", "#2563eb"]]))], ["text-__334155_", _pS(_uM([["color", "#334155"]]))], ["text-__475569_", _pS(_uM([["color", "#475569"]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-11px", _pS(_uM([["fontSize", 11]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-white", _pS(_uM([["color", "rgba(255,255,255,var(--un-color-opacity,1))"]]))]])]
