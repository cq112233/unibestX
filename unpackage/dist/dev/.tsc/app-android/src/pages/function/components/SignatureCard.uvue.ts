import _easycom_l_signature from '@/uni_modules/lime-signature/components/l-signature/l-signature.uvue'
import Card from '../../basic/components/Card.uvue';
import { ref } from 'vue';
import type { LimeSignatureToFileSuccess, LimeSignatureToTempFilePathOptions } from '@/uni_modules/lime-signature';

// 签名组件实例（通过回调 ref 获取，避免 ref<any>(null) 类型问题）

const __sfc__ = defineComponent({
  __name: 'SignatureCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

let sigInstance: LSignatureComponentPublicInstance | null = null;
function onSigRef(el: any) {
  sigInstance = el as LSignatureComponentPublicInstance;
}

const penColor = ref('red');
const penSize = ref(4);
const openSmooth = ref(true);
const signUrl = ref('');

const colorList = ['#ef4444', '#000000', '#3b82f6', '#10b981', '#f59e0b'];
const penSizeOptions = [1, 3, 5, 8, 12];

function onAction(type: string) {
  const el = sigInstance;
  if (el == null) {
    uni.showToast({ title: '签名组件未就绪', icon: 'none' });
    return;
  }
  if (type === 'clear') {
    el.clear();
    signUrl.value = '';
  }
  else if (type === 'undo') {
    el.undo();
  }
  else if (type === 'redo') {
    el.redo();
  }
  else if (type === 'save') {
    el.canvasToTempFilePath({
      success: (res: LimeSignatureToFileSuccess) => {
        if (res.isEmpty) {
          uni.showToast({ title: '请先签名', icon: 'none' });
          return;
        }
        signUrl.value = res.tempFilePath;
        uni.showToast({ title: '签名保存成功', icon: 'success' });
      },
      fail: (_err: any) => {
        uni.showToast({ title: '保存失败', icon: 'error' });
      }
    } as LimeSignatureToTempFilePathOptions);
  }
}

return (): any | null => {

const _component_l_signature = resolveEasyComponent("l-signature",_easycom_l_signature)

  return _cV(unref(Card), _uM({ title: "签名板 lime-signature" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({
        class: "rounded-12px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-1dvrapb-0",
        style: _nS(_uM({"width":"100%","height":"300px"}))
      }), [
        _cV(_component_l_signature, _uM({
          ref: onSigRef,
          "pen-color": penColor.value,
          "pen-size": penSize.value,
          "open-smooth": openSmooth.value,
          "disable-scroll": "",
          "background-color": "#ffffff"
        }), null, 8 /* PROPS */, ["pen-color", "pen-size", "open-smooth"])
      ], 4 /* STYLE */),
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-12px wtu-1cr1yu4-1 mb-12px" }), "画板操作"),
        _cE("view", _uM({ class: "wtu-15uu4fg-2 mb-12px wtu-yfu56f-3" }), [
          _cE("view", _uM({
            class: "wtu-dhurvf-4 h-36px rounded-8px wtu-1jk32ls-5 wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8 mr-6px",
            onClick: () => {onAction('save')}
          }), [
            _cE("text", _uM({ class: "wtu-i6srrl-9 text-13px wtu-19k59p-a" }), "保存图片")
          ], 8 /* PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "wtu-dhurvf-4 h-36px rounded-8px wtu-ewjr3a-b wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8 mr-6px",
            onClick: () => {onAction('undo')}
          }), [
            _cE("text", _uM({ class: "wtu-i6srrl-9 text-13px wtu-19k59p-a" }), "撤销")
          ], 8 /* PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "wtu-dhurvf-4 h-36px rounded-8px wtu-v6oeps-c wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8 mr-6px",
            onClick: () => {onAction('redo')}
          }), [
            _cE("text", _uM({ class: "wtu-i6srrl-9 text-13px wtu-19k59p-a" }), "重做")
          ], 8 /* PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "wtu-dhurvf-4 h-36px rounded-8px wtu-han5s8-d wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8",
            onClick: () => {onAction('clear')}
          }), [
            _cE("text", _uM({ class: "wtu-i6srrl-9 text-13px wtu-19k59p-a" }), "清空")
          ], 8 /* PROPS */, ["onClick"])
        ])
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }), [
        _cE("text", _uM({ class: "text-12px wtu-1cr1yu4-1 mb-12px" }), "画笔设置"),
        _cE("view", _uM({ class: "wtu-15uu4fg-2 wtu-yfu56f-3 wtu-q3ffeg-7 mb-12px" }), [
          _cE("text", _uM({ class: "text-13px wtu-j8xvyj-e" }), "画笔颜色"),
          _cE("view", _uM({ class: "wtu-15uu4fg-2" }), [
            _cE(Fragment, null, RenderHelpers.renderList(colorList, (clr, __key, __index, _cached): any => {
              return _cE("view", _uM({
                key: clr,
                class: "w-28px h-28px rounded-14px ml-6px border-width-2px border-style-solid wtu-q3ffeg-7 wtu-m0xl7g-8",
                style: _nS(_uM({
              backgroundColor: clr,
              borderColor: penColor.value === clr ? '#1e293b' : 'transparent'
            })),
                onClick: () => {penColor.value = clr}
              }), null, 12 /* STYLE, PROPS */, ["onClick"])
            }), 64 /* STABLE_FRAGMENT */)
          ])
        ]),
        _cE("view", _uM({ class: "wtu-15uu4fg-2 wtu-yfu56f-3 wtu-q3ffeg-7 mb-12px" }), [
          _cE("text", _uM({ class: "text-13px wtu-j8xvyj-e" }), "画笔粗细"),
          _cE("text", _uM({ class: "text-12px wtu-1cr1yu4-1" }), _tD(penSize.value) + "px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "wtu-15uu4fg-2 mb-12px" }), [
          _cE(Fragment, null, RenderHelpers.renderList(penSizeOptions, (sz, _j, __index, _cached): any => {
            return _cE("view", _uM({
              key: sz,
              class: _nC(["wtu-dhurvf-4 h-32px rounded-6px wtu-1icw4t1-6 wtu-15uu4fg-2 wtu-q3ffeg-7 wtu-m0xl7g-8", _j < penSizeOptions.length - 1 ? 'mr-6px' : '']),
              style: _nS(_uM({ backgroundColor: penSize.value === sz ? '#3b82f6' : '#e2e8f0' })),
              onClick: () => {penSize.value = sz}
            }), [
              _cE("text", _uM({
                class: "text-12px wtu-19k59p-a",
                style: _nS(_uM({ color: penSize.value === sz ? '#ffffff' : '#475569' }))
              }), _tD(sz) + "px", 5 /* TEXT, STYLE */)
            ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
          }), 64 /* STABLE_FRAGMENT */)
        ])
      ]),
      signUrl.value !== ''
        ? _cE("view", _uM({
            key: 0,
            class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0] wtu-q3ffeg-7"
          }), [
            _cE("text", _uM({ class: "text-12px wtu-1cr1yu4-1 mb-8px" }), "签名预览"),
            _cE("image", _uM({
              src: signUrl.value,
              class: "wtu-849arj-f h-120px rounded-8px border-width-1px border-style-solid border-color-[#e2e8f0]",
              mode: "aspectFit"
            }), null, 8 /* PROPS */, ["src"])
          ])
        : _cC("v-if", true)
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesFunctionComponentsSignatureCardStyles = [_uM([["wtu-1dvrapb-0", _pS(_uM([["overflow", "hidden"]]))], ["wtu-1cr1yu4-1", _pS(_uM([["color", "#94a3b8"]]))], ["wtu-15uu4fg-2", _pS(_uM([["flexDirection", "row"]]))], ["wtu-yfu56f-3", _pS(_uM([["justifyContent", "space-between"]]))], ["wtu-dhurvf-4", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-1jk32ls-5", _pS(_uM([["backgroundColor", "#10b981"]]))], ["wtu-1icw4t1-6", _pS(_uM([["display", "flex"]]))], ["wtu-q3ffeg-7", _pS(_uM([["alignItems", "center"]]))], ["wtu-m0xl7g-8", _pS(_uM([["justifyContent", "center"]]))], ["wtu-i6srrl-9", _pS(_uM([["color", "#ffffff"]]))], ["wtu-19k59p-a", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-ewjr3a-b", _pS(_uM([["backgroundColor", "#f59e0b"]]))], ["wtu-v6oeps-c", _pS(_uM([["backgroundColor", "#3b82f6"]]))], ["wtu-han5s8-d", _pS(_uM([["backgroundColor", "#ef4444"]]))], ["wtu-j8xvyj-e", _pS(_uM([["color", "#475569"]]))], ["wtu-849arj-f", _pS(_uM([["width", "100%"]]))]])]

import { LSignatureComponentPublicInstance  } from "@/uni_modules/lime-signature/components/l-signature/l-signature.uvue"