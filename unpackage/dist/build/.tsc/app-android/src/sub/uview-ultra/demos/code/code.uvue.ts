import _easycom_up_code from '@/uni_modules/uview-ultra/components/up-code/up-code.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { ref } from 'vue';

const __sfc__ = defineComponent({
  __name: 'code',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

const uCodeRef = ref<ComponentPublicInstance | null>(null);
const tips = ref('获取验证码');

function codeChange(text: string) {
  tips.value = text;
}

function getCode() {
  if (uCodeRef.value != null) {
    const codeObj = uCodeRef.value!;
    const canGet = codeObj.$callMethod('canGetCode');
    if (canGet == true) {
      uni.showLoading({ title: '正在获取验证码' });
      setTimeout(() => {
        uni.hideLoading();
        uni.showToast({ title: '验证码已发送', icon: 'success' });
        codeObj.$callMethod('start');
      }, 1000);
    }
    else {
      uni.showToast({ title: '倒计时中，请稍后再试', icon: 'none' });
    }
  }
}

return (): any | null => {

const _component_up_code = resolveEasyComponent("up-code",_easycom_up_code)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'Code 验证码倒计时','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'Code 验证码倒计时','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }), [
            _cE("view", _uM({ class: "weapp-tw-border p-_b16px_B" }), [
              _cE("view", _uM({ class: "weapp-tw-border demo-block" }), [
                _cE("text", _uM({ class: "weapp-tw-border demo-label" }), "基础用法"),
                _cE("view", _uM({ class: "weapp-tw-border flex-row items-center justify-between mt-_b10px_B" }), [
                  _cV(_component_up_code, _uM({
                    ref_key: "uCodeRef",
                    ref: uCodeRef,
                    seconds: "60",
                    onChange: codeChange
                  }), null, 512 /* NEED_PATCH */),
                  _cV(_component_up_button, _uM({
                    text: tips.value,
                    type: "primary",
                    size: "small",
                    onClick: getCode
                  }), null, 8 /* PROPS */, ["text"])
                ])
              ])
            ])
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
const GenSrcSubUviewUltraDemosCodeCodeStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["demo-block", _pS(_uM([["marginBottom", 12], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["backgroundColor", "#ffffff"], ["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["demo-label", _pS(_uM([["fontSize", 14], ["fontWeight", "bold"], ["color", "#606266"], ["marginBottom", 10], ["paddingLeft", 4], ["borderLeftWidth", 3], ["borderLeftStyle", "solid"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))]])]
