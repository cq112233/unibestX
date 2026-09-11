import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/navbar.uvue'
import { LOGIN_PAGE } from '../../router/config';

const __sfc__ = defineComponent({
  __name: 'register',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

function doRegister() {
  uni.showToast({
    title: '注册成功',
    icon: 'success'
  });

  // 延迟后跳转到登录页
  setTimeout(() => {
    uni.navigateTo({
      url: LOGIN_PAGE
    });
  }, 1000);
}

return (): any | null => {

  return _cV(unref(AppKu), _uM({
    layout: 'navbar',
    "show-back": true,
    "hide-navbar": false,
    "enable-pull-down-refresh": false,
    "page-style": {'navigationBarTitleText':'注册','navigationStyle':'custom'}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": {'navigationBarTitleText':'注册','navigationStyle':'custom'}
      }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "weapp-tw-border flex-1 p-_b30px_B items-center justify-center" }), [
            _cE("view", _uM({ class: "weapp-tw-border mb-_b30px_B" }), [
              _cE("text", _uM({ class: "weapp-tw-border text-_b20px_B font-bold text-_b_h1e293b_B" }), "注册页")
            ]),
            _cE("view", _uM({
              class: "weapp-tw-border w-_b200px_B h-_b44px_B rounded-_b8px_B bg-_b_h10b981_B flex flex-row items-center justify-center",
              onClick: doRegister
            }), [
              _cE("text", _uM({ class: "weapp-tw-border text-_b_hffffff_B text-_b14px_B font-bold" }), "点击模拟注册")
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
const GenSrcSubAuthRegisterStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))]])]
