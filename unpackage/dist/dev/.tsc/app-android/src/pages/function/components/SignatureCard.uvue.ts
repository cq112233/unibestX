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
        class: "rounded-12px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ overflow-hidden",
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
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }), [
        _cE("text", _uM({ class: "text-12px text-__94a3b8_ mb-12px" }), "画板操作"),
        _cE("view", _uM({ class: "flex-row mb-12px justify-between" }), [
          _cE("view", _uM({
            class: "flex-1 h-36px rounded-8px bg-__10b981_ flex flex-row items-center justify-center mr-6px",
            onClick: () => {onAction('save')}
          }), [
            _cE("text", _uM({ class: "text-__ffffff_ text-13px font-bold" }), "保存图片")
          ], 8 /* PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "flex-1 h-36px rounded-8px bg-__f59e0b_ flex flex-row items-center justify-center mr-6px",
            onClick: () => {onAction('undo')}
          }), [
            _cE("text", _uM({ class: "text-__ffffff_ text-13px font-bold" }), "撤销")
          ], 8 /* PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "flex-1 h-36px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center mr-6px",
            onClick: () => {onAction('redo')}
          }), [
            _cE("text", _uM({ class: "text-__ffffff_ text-13px font-bold" }), "重做")
          ], 8 /* PROPS */, ["onClick"]),
          _cE("view", _uM({
            class: "flex-1 h-36px rounded-8px bg-__ef4444_ flex flex-row items-center justify-center",
            onClick: () => {onAction('clear')}
          }), [
            _cE("text", _uM({ class: "text-__ffffff_ text-13px font-bold" }), "清空")
          ], 8 /* PROPS */, ["onClick"])
        ])
      ]),
      _cE("view", _uM({ class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }), [
        _cE("text", _uM({ class: "text-12px text-__94a3b8_ mb-12px" }), "画笔设置"),
        _cE("view", _uM({ class: "flex-row justify-between items-center mb-12px" }), [
          _cE("text", _uM({ class: "text-13px text-__475569_" }), "画笔颜色"),
          _cE("view", _uM({ class: "flex-row" }), [
            _cE(Fragment, null, RenderHelpers.renderList(colorList, (clr, __key, __index, _cached): any => {
              return _cE("view", _uM({
                key: clr,
                class: "w-28px h-28px rounded-14px ml-6px border-width-2px border-style-solid items-center justify-center",
                style: _nS(_uM({
              backgroundColor: clr,
              borderColor: penColor.value === clr ? '#1e293b' : 'transparent'
            })),
                onClick: () => {penColor.value = clr}
              }), null, 12 /* STYLE, PROPS */, ["onClick"])
            }), 64 /* STABLE_FRAGMENT */)
          ])
        ]),
        _cE("view", _uM({ class: "flex-row justify-between items-center mb-12px" }), [
          _cE("text", _uM({ class: "text-13px text-__475569_" }), "画笔粗细"),
          _cE("text", _uM({ class: "text-12px text-__94a3b8_" }), _tD(penSize.value) + "px", 1 /* TEXT */)
        ]),
        _cE("view", _uM({ class: "flex-row mb-12px" }), [
          _cE(Fragment, null, RenderHelpers.renderList(penSizeOptions, (sz, _j, __index, _cached): any => {
            return _cE("view", _uM({
              key: sz,
              class: _nC(["flex-1 h-32px rounded-6px flex flex-row items-center justify-center", _j < penSizeOptions.length - 1 ? 'mr-6px' : '']),
              style: _nS(_uM({ backgroundColor: penSize.value === sz ? '#3b82f6' : '#e2e8f0' })),
              onClick: () => {penSize.value = sz}
            }), [
              _cE("text", _uM({
                class: "text-12px font-bold",
                style: _nS(_uM({ color: penSize.value === sz ? '#ffffff' : '#475569' }))
              }), _tD(sz) + "px", 5 /* TEXT, STYLE */)
            ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
          }), 64 /* STABLE_FRAGMENT */)
        ])
      ]),
      signUrl.value !== ''
        ? _cE("view", _uM({
            key: 0,
            class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_ items-center"
          }), [
            _cE("text", _uM({ class: "text-12px text-__94a3b8_ mb-8px" }), "签名预览"),
            _cE("image", _uM({
              src: signUrl.value,
              class: "w-full h-120px rounded-8px border-width-1px border-style-solid border-color-__e2e8f0_",
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
const GenSrcPagesFunctionComponentsSignatureCardStyles = [_uM([["bg-__10b981_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#10b981"]]))], ["bg-__3b82f6_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#3b82f6"]]))], ["bg-__ef4444_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#ef4444"]]))], ["bg-__f59e0b_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f59e0b"]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["border-width-2px", _pS(_uM([["borderTopWidth", 2], ["borderRightWidth", 2], ["borderBottomWidth", 2], ["borderLeftWidth", 2]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-120px", _pS(_uM([["height", 120]]))], ["h-28px", _pS(_uM([["height", 28]]))], ["h-32px", _pS(_uM([["height", 32]]))], ["h-36px", _pS(_uM([["height", 36]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["ml-6px", _pS(_uM([["marginLeft", 6]]))], ["mr-6px", _pS(_uM([["marginRight", 6]]))], ["none", _pS(_uM([["display", "none"]]))], ["overflow-hidden", _pS(_uM([["overflow", "hidden"]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-14px", _pS(_uM([["borderTopLeftRadius", 14], ["borderTopRightRadius", 14], ["borderBottomRightRadius", 14], ["borderBottomLeftRadius", 14]]))], ["rounded-6px", _pS(_uM([["borderTopLeftRadius", 6], ["borderTopRightRadius", 6], ["borderBottomRightRadius", 6], ["borderBottomLeftRadius", 6]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__475569_", _pS(_uM([["color", "#475569"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-13px", _pS(_uM([["fontSize", 13]]))], ["w-28px", _pS(_uM([["width", 28]]))], ["w-full", _pS(_uM([["width", "100%"]]))]])]

import { LSignatureComponentPublicInstance  } from "@/uni_modules/lime-signature/components/l-signature/l-signature.uvue"