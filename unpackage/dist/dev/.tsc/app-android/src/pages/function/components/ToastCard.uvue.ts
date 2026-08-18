import Card from '../../basic/components/Card.uvue';
import { ref } from 'vue';
import { toast, toastSuccess } from '@/src/utils/toast';


const __sfc__ = defineComponent({
  __name: 'ToastCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const customMsg = ref<string>('来自 Function 功能页的 Toast 消息！');

function showCustomToast() {
  if (customMsg.value.trim() == '') {
    toast('请输入提示内容');
    return;
  }
  toast(customMsg.value);
}

function showSuccessToast() {
  toastSuccess('Function 页面全局 Toast 触发成功！');
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "全局 Toast 提示调用" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-12px wtu-1pd9yl-0 leading-20px" }), " 演示从功能页调用 App.ku.uvue 全局挂载的 <up-toast ref=\"uToastRef\" />，支持自定义消息、类型与轻提示反馈。 ")
      ]),
      _cE("view", _uM({ class: "mb-12px" }), [
        _cE("text", _uM({ class: "text-12px wtu-b5uul9-1 mb-6px" }), "自定义 Toast 内容"),
        _cE("input", _uM({
          modelValue: customMsg.value,
          onInput: ($event: UniInputEvent) => {(customMsg).value = $event.detail.value},
          placeholder: "请输入要提示的文字内容",
          class: "h-38px wtu-19clxu8-2 rounded-6px px-12px border-width-1px border-style-solid border-color-[#cbd5e1] text-14px wtu-12c53hp-3"
        }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput"])
      ]),
      _cE("view", _uM({ class: "wtu-1yca3x4-4 wtu-clldfh-5" }), [
        _cE("view", _uM({
          class: "wtu-bte5oa-6 mr-10px wtu-zsktp1-7 rounded-8px h-40px wtu-1yca3x4-4 wtu-clldfh-5 wtu-xpmuf1-8 wtu-164irp9-9",
          onClick: showCustomToast
        }), [
          _cE("text", _uM({ class: "wtu-pubmk8-a text-13px wtu-bj9ji2-b" }), "弹出自定义 Toast")
        ]),
        _cE("view", _uM({
          class: "wtu-bte5oa-6 wtu-zhey3t-c rounded-8px h-40px wtu-1yca3x4-4 wtu-clldfh-5 wtu-xpmuf1-8 wtu-164irp9-9",
          onClick: showSuccessToast
        }), [
          _cE("text", _uM({ class: "wtu-pubmk8-a text-13px wtu-bj9ji2-b" }), "弹出成功 Toast")
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsToastCardStyles = [_uM([["wtu-1pd9yl-0", _pS(_uM([["color", "#64748b"]]))], ["wtu-b5uul9-1", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-19clxu8-2", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-12c53hp-3", _pS(_uM([["color", "#334155"]]))], ["wtu-1yca3x4-4", _pS(_uM([["display", "flex"]]))], ["wtu-clldfh-5", _pS(_uM([["flexDirection", "row"]]))], ["wtu-bte5oa-6", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-zsktp1-7", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-xpmuf1-8", _pS(_uM([["alignItems", "center"]]))], ["wtu-164irp9-9", _pS(_uM([["justifyContent", "center"]]))], ["wtu-pubmk8-a", _pS(_uM([["color", "#ffffff"]]))], ["wtu-bj9ji2-b", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-zhey3t-c", _pS(_uM([["backgroundColor", "#10b981"]]))]])]
