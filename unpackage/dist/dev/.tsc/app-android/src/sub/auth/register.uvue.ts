import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { LOGIN_PAGE } from '../../router/config';


const __sfc__ = defineComponent({
  __name: 'register',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

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

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": '注册' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "flex-1 p-30px items-center justify-center" }), [
            _cE("view", _uM({ class: "mb-30px" }), [
              _cE("text", _uM({ class: "text-20px font-bold text-_b_h1e293b_B" }), "注册页")
            ]),
            _cE("view", _uM({
              class: "w-200px h-44px rounded-8px bg-_b_h10b981_B flex flex-row items-center justify-center",
              onClick: doRegister
            }), [
              _cE("text", _uM({ class: "text-_b_hffffff_B text-14px font-bold" }), "点击模拟注册")
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
const GenSrcSubAuthRegisterStyles = [_uM([["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["text-_b_h1e293b_B", _pS(_uM([["color", "#1e293b"]]))], ["bg-_b_h10b981_B", _pS(_uM([["backgroundColor", "#10b981"]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["text-_b_hffffff_B", _pS(_uM([["color", "#ffffff"]]))]])]
