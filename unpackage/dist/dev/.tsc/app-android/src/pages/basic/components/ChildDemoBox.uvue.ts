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

  return _cE("view", _uM({ class: "wtu-gcabbq-0 rounded-12px p-14px border-width-1px border-style-solid border-color-[#cbd5e1]" }), [
    _cE("view", _uM({ class: "mb-10px border-b-width-1px border-b-style-solid border-b-color-[#cbd5e1] pb-8px" }), [
      renderSlot(_ctx.$slots, "header", {}, (): any[] => [
        _cE("text", _uM({ class: "text-14px wtu-1nivbe9-1 wtu-15nsgd4-2" }), "📦 " + _tD(_ctx.title) + "（默认 Header）", 1 /* TEXT */)
      ])
    ]),
    _cE("view", _uM({ class: "mb-12px wtu-182oteh-3 rounded-8px p-10px" }), [
      _cE("text", _uM({ class: "text-12px wtu-1nivbe9-1 wtu-c3ez2v-4 mb-4px" }), "【父传子 Props 动态接收】"),
      _cE("view", _uM({ class: "wtu-x7nkyg-5 wtu-ix6v4k-6" }), [
        _cE("text", _uM({ class: "text-12px wtu-grng8o-7" }), "父组件传递的 Count: "),
        _cE("text", _uM({ class: "text-14px wtu-1nivbe9-1 wtu-18ekrle-8 ml-6px" }), _tD(_ctx.count), 1 /* TEXT */)
      ])
    ]),
    _cE("view", _uM({ class: "mb-12px wtu-182oteh-3 rounded-8px p-10px" }), [
      _cE("text", _uM({ class: "text-12px wtu-1nivbe9-1 wtu-c3ez2v-4 mb-6px" }), "【具名作用域插槽 (Slot 向父组件传参)】"),
      _cE(Fragment, null, RenderHelpers.renderList(_ctx.tags, (item, index, __index, _cached): any => {
        return _cE("view", _uM({
          key: index,
          class: "mb-6px"
        }), [
          renderSlot(_ctx.$slots, "itemSlot", _uM({
            item: item,
            index: index
          }), (): any[] => [
            _cE("view", _uM({ class: "wtu-zipktt-9 rounded-4px p-6px" }), [
              _cE("text", _uM({ class: "text-12px wtu-grng8o-7" }), "Tag " + _tD(index + 1) + ": " + _tD(item), 1 /* TEXT */)
            ])
          ])
        ])
      }), 128 /* KEYED_FRAGMENT */)
    ]),
    _cE("view", _uM({ class: "mb-10px wtu-182oteh-3 rounded-8px p-10px" }), [
      _cE("text", _uM({ class: "text-12px wtu-1nivbe9-1 wtu-c3ez2v-4 mb-8px" }), "【子传父 Emits 事件触发】"),
      _cE("view", _uM({ class: "wtu-x7nkyg-5 wtu-jpge2z-a wtu-ix6v4k-6 mb-8px" }), [
        _cE("view", _uM({
          class: "wtu-812ws7-b wtu-s60y7a-c rounded-6px h-32px wtu-x7nkyg-5 wtu-ix6v4k-6 wtu-1pd1px4-d mr-6px",
          onClick: handleAdd
        }), [
          _cE("text", _uM({ class: "wtu-ih0clp-e text-12px" }), "触发 Count + 1")
        ]),
        _cE("view", _uM({
          class: "wtu-812ws7-b wtu-4dipnu-f rounded-6px h-32px wtu-x7nkyg-5 wtu-ix6v4k-6 wtu-1pd1px4-d ml-6px",
          onClick: handleReset
        }), [
          _cE("text", _uM({ class: "wtu-ih0clp-e text-12px" }), "触发 重置事件")
        ])
      ]),
      _cE("view", _uM({ class: "wtu-zipktt-9 rounded-6px p-8px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-x7nkyg-5 wtu-ix6v4k-6 wtu-jpge2z-a" }), [
        _cE("input", _uM({
          modelValue: inputMsg.value,
          onInput: ($event: UniInputEvent) => {(inputMsg).value = $event.detail.value},
          placeholder: "输入要送回父组件的消息",
          class: "text-12px wtu-812ws7-b h-30px px-8px wtu-182oteh-3 rounded-4px border-width-1px border-style-solid border-color-[#cbd5e1]"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"]),
        _cE("view", _uM({
          class: "wtu-aufsc6-g rounded-6px h-30px px-10px wtu-x7nkyg-5 wtu-ix6v4k-6 wtu-1pd1px4-d ml-8px",
          onClick: handleSendMsg
        }), [
          _cE("text", _uM({ class: "wtu-ih0clp-e text-12px" }), "发送给父组件")
        ])
      ])
    ]),
    _cE("view", _uM({ class: "pt-6px border-t-width-1px border-t-style-solid border-t-color-[#cbd5e1]" }), [
      renderSlot(_ctx.$slots, "footer", {}, (): any[] => [
        _cE("text", _uM({ class: "text-11px wtu-1xb3h6w-h" }), "（默认 Footer）")
      ])
    ])
  ])
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsChildDemoBoxStyles = [_uM([["wtu-gcabbq-0", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-1nivbe9-1", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-15nsgd4-2", _pS(_uM([["color", "#334155"]]))], ["wtu-182oteh-3", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-c3ez2v-4", _pS(_uM([["color", "#475569"]]))], ["wtu-x7nkyg-5", _pS(_uM([["flexDirection", "row"]]))], ["wtu-ix6v4k-6", _pS(_uM([["alignItems", "center"]]))], ["wtu-grng8o-7", _pS(_uM([["color", "#64748b"]]))], ["wtu-18ekrle-8", _pS(_uM([["color", "#2563eb"]]))], ["wtu-zipktt-9", _pS(_uM([["backgroundColor", "#f8fafc"]]))], ["wtu-jpge2z-a", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-812ws7-b", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-s60y7a-c", _pS(_uM([["backgroundColor", "#2563eb"]]))], ["wtu-1pd1px4-d", _pS(_uM([["justifyContent", "center"]]))], ["wtu-ih0clp-e", _pS(_uM([["color", "#ffffff"]]))], ["wtu-4dipnu-f", _pS(_uM([["backgroundColor", "#dc2626"]]))], ["wtu-aufsc6-g", _pS(_uM([["backgroundColor", "#059669"]]))], ["wtu-1xb3h6w-h", _pS(_uM([["color", "#94a3b8"]]))]])]
