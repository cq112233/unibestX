import { ref } from 'vue';
import Card from './Card.uvue';
import ChildDemoBox from './ChildDemoBox.uvue';


const __sfc__ = defineComponent({
  __name: 'PropsDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const parentCount = ref<number>(10);
const childMessage = ref<string>('暂无子组件消息');
const tagList = ref<Array<string>>(['响应式 Props 传递', 'Emits 事件监听与回传', '具名 Header/Footer 插槽', '具名 Slot 作用域传参']);

function onChildAdd(delta: number) {
  parentCount.value += delta;
}

function onChildReset() {
  parentCount.value = 0;
  childMessage.value = '已被子组件重置为 0';
}

function onChildSendMsg(msg: string) {
  childMessage.value = msg;
}

function addFiveFromParent() {
  parentCount.value += 5;
}

function resetParent() {
  parentCount.value = 10;
  childMessage.value = '已重置为初始状态';
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "父子组件传参 & 具名插槽演示" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-vxgnz7-0 wtu-bzagc8-1 wtu-b66ka1-2 wtu-74ncny-3 wtu-1owovkx-4 wtu-1pdwtsl-5 wtu-cwe6v6-6" }), [
        _cE("text", _uM({ class: "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-44jmxl-9 wtu-bhsfe3-a" }), "👨‍👩‍👧 父组件状态管理面板"),
        _cE("view", _uM({ class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-1vkc6z9-d" }), [
          _cE("text", _uM({ class: "wtu-1hmoe0k-e wtu-1581zln-f" }), "父组件 Count 变量: "),
          _cE("text", _uM({ class: "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-1cwqag0-g wtu-1cbwlqp-h" }), _tD(parentCount.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-hqsngi-i" }), [
          _cE("text", _uM({ class: "wtu-1hmoe0k-e wtu-1581zln-f" }), "接收到的子组件消息: "),
          _cE("text", _uM({ class: "wtu-1hmoe0k-e wtu-sv7fhw-8 wtu-cj9lbh-j wtu-1cbwlqp-h" }), _tD(childMessage.value), 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-1qcvxlr-b wtu-i6zy5z-c" }), [
          _cE("view", _uM({
            class: "wtu-1t9ug01-k wtu-1qt2m0f-l wtu-hvwz4r-m wtu-bf75hz-n wtu-1qcvxlr-b wtu-i6zy5z-c wtu-19aj3kn-o wtu-6ebfap-p",
            onClick: addFiveFromParent
          }), [
            _cE("text", _uM({ class: "wtu-1c2l3ni-q wtu-1hmoe0k-e" }), "父组件直接 Count + 5")
          ]),
          _cE("view", _uM({
            class: "wtu-1h73awj-r wtu-1qt2m0f-l wtu-hvwz4r-m wtu-bf75hz-n wtu-1qcvxlr-b wtu-i6zy5z-c wtu-19aj3kn-o",
            onClick: resetParent
          }), [
            _cE("text", _uM({ class: "wtu-1c2l3ni-q wtu-1hmoe0k-e" }), "父组件重置状态")
          ])
        ])
      ]),
      _cV(unref(ChildDemoBox), _uM({
        title: "组件通信演示子节点",
        count: parentCount.value,
        tags: tagList.value,
        onAdd: onChildAdd,
        onReset: onChildReset,
        onSendMsg: onChildSendMsg
      }), _uM({
        header: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-16203my-s" }), [
            _cE("text", _uM({ class: "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-161zm7w-t" }), "🏷️ 父组件填入的具名 Header 插槽"),
            _cE("text", _uM({ class: "wtu-1j9rfuf-u wtu-1581zln-f wtu-v9l0kh-v wtu-zb8dsk-w wtu-1y4fkff-x wtu-1jbz86x-y" }), "自定义 Header")
          ])
        ]),
        itemSlot: withScopedSlotCtx((slotProps: Record<string, any | null>): any[] => {
        const item = slotProps["item"]
        const index = slotProps["index"]
        return [
          _cE("view", _uM({ class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-1ue7bt4-z wtu-1qt2m0f-l wtu-1932lzo-10 wtu-1owovkx-4 wtu-1pdwtsl-5 wtu-16vqpiu-11" }), [
            _cE("text", _uM({ class: "wtu-1j9rfuf-u wtu-sv7fhw-8 wtu-1gdtqyh-12 wtu-1ys92t7-13" }), "#" + _tD((index as number) + 1), 1 /* TEXT */),
            _cE("text", _uM({ class: "wtu-1hmoe0k-e wtu-165ep59-14 wtu-1nu791o-15" }), _tD(item), 1 /* TEXT */),
            _cE("text", _uM({ class: "wtu-1sh719e-16 wtu-1qit6r8-17 wtu-1aizezg-18" }), "具名Slot传参: " + _tD(item), 1 /* TEXT */)
          ])
        ]}),
        footer: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-16203my-s wtu-1y4fkff-x" }), [
            _cE("text", _uM({ class: "wtu-1hmoe0k-e wtu-ntizu3-19" }), "📌 父组件填入的具名 Footer 插槽"),
            _cE("text", _uM({ class: "wtu-1j9rfuf-u wtu-cj9lbh-j wtu-5777z3-1a wtu-zb8dsk-w wtu-1y4fkff-x wtu-1jbz86x-y wtu-1nu791o-15" }), "双向通信验证成功")
          ])
        ]),
        _: 1 /* STABLE */
      }), 8 /* PROPS */, ["count", "tags"])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsPropsDemoCardStyles = [_uM([["wtu-vxgnz7-0", _pS(_uM([["backgroundColor", "#eff6ff"]]))], ["wtu-bzagc8-1", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["wtu-b66ka1-2", _pS(_uM([["paddingTop", 14], ["paddingRight", 14], ["paddingBottom", 14], ["paddingLeft", 14]]))], ["wtu-74ncny-3", _pS(_uM([["marginBottom", 14]]))], ["wtu-1owovkx-4", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "var(--tw-border-style)"], ["borderRightStyle", "var(--tw-border-style)"], ["borderBottomStyle", "var(--tw-border-style)"], ["borderLeftStyle", "var(--tw-border-style)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["wtu-1pdwtsl-5", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-cwe6v6-6", _pS(_uM([["borderTopColor", "#bfdbfe"], ["borderRightColor", "#bfdbfe"], ["borderBottomColor", "#bfdbfe"], ["borderLeftColor", "#bfdbfe"]]))], ["wtu-1a5l072-7", _pS(_uM([["fontSize", 14]]))], ["wtu-sv7fhw-8", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-44jmxl-9", _pS(_uM([["color", "#1e40af"]]))], ["wtu-bhsfe3-a", _pS(_uM([["marginBottom", 6]]))], ["wtu-1qcvxlr-b", _pS(_uM([["flexDirection", "row"]]))], ["wtu-i6zy5z-c", _pS(_uM([["alignItems", "center"]]))], ["wtu-1vkc6z9-d", _pS(_uM([["marginBottom", 4]]))], ["wtu-1hmoe0k-e", _pS(_uM([["fontSize", 12]]))], ["wtu-1581zln-f", _pS(_uM([["color", "#3b82f6"]]))], ["wtu-1cwqag0-g", _pS(_uM([["color", "#1d4ed8"]]))], ["wtu-1cbwlqp-h", _pS(_uM([["marginLeft", 6]]))], ["wtu-hqsngi-i", _pS(_uM([["marginBottom", 10]]))], ["wtu-cj9lbh-j", _pS(_uM([["color", "#059669"]]))], ["wtu-1t9ug01-k", _pS(_uM([["backgroundColor", "#2563eb"]]))], ["wtu-1qt2m0f-l", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["wtu-hvwz4r-m", _pS(_uM([["paddingLeft", 10], ["paddingRight", 10]]))], ["wtu-bf75hz-n", _pS(_uM([["height", 30]]))], ["wtu-19aj3kn-o", _pS(_uM([["justifyContent", "center"]]))], ["wtu-6ebfap-p", _pS(_uM([["marginRight", 8]]))], ["wtu-1c2l3ni-q", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1h73awj-r", _pS(_uM([["backgroundColor", "#64748b"]]))], ["wtu-16203my-s", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-161zm7w-t", _pS(_uM([["color", "#1e293b"]]))], ["wtu-1j9rfuf-u", _pS(_uM([["fontSize", 11]]))], ["wtu-v9l0kh-v", _pS(_uM([["backgroundColor", "#dbeafe"]]))], ["wtu-zb8dsk-w", _pS(_uM([["paddingLeft", 6], ["paddingRight", 6]]))], ["wtu-1y4fkff-x", _pS(_uM([["paddingTop", 2], ["paddingBottom", 2]]))], ["wtu-1jbz86x-y", _pS(_uM([["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["wtu-1ue7bt4-z", _pS(_uM([["backgroundColor", "#f0fdf4"]]))], ["wtu-1932lzo-10", _pS(_uM([["paddingTop", 8], ["paddingRight", 8], ["paddingBottom", 8], ["paddingLeft", 8]]))], ["wtu-16vqpiu-11", _pS(_uM([["borderTopColor", "#bbf7d0"], ["borderRightColor", "#bbf7d0"], ["borderBottomColor", "#bbf7d0"], ["borderLeftColor", "#bbf7d0"]]))], ["wtu-1gdtqyh-12", _pS(_uM([["color", "#15803d"]]))], ["wtu-1ys92t7-13", _pS(_uM([["marginRight", 6]]))], ["wtu-165ep59-14", _pS(_uM([["color", "#166534"]]))], ["wtu-1nu791o-15", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-1sh719e-16", _pS(_uM([["fontSize", 10]]))], ["wtu-1qit6r8-17", _pS(_uM([["color", "#22c55e"]]))], ["wtu-1aizezg-18", _pS(_uM([["marginLeft", "auto"]]))], ["wtu-ntizu3-19", _pS(_uM([["color", "#64748b"]]))], ["wtu-5777z3-1a", _pS(_uM([["backgroundColor", "#ecfdf5"]]))]])]
