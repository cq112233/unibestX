import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
/* eslint-disable dot-notation */
import { ref } from 'vue'
import type { ISingleTokenRes, IUserInfo } from '../../store'
import { useTokenStore, useUserStore } from '../../store'
import { isPageTabbar, setCurIdxByPath } from '../../tabbar/store'


const __sfc__ = defineComponent({
  __name: 'login',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const tokenStore = useTokenStore()
const userStore = useUserStore()
const redirectUrl = ref<string>('')

onLoad((options: UTSJSONObject | null) => {
  if (options != null) {
    const redirect = options['redirect'] as string | null
    if (redirect != null) {
      redirectUrl.value = redirect
    }
  }
})

function doLogin() {
  if (tokenStore.hasValidLogin()) {
    if (redirectUrl.value !== '') {
      const targetUrl = decodeURIComponent(redirectUrl.value) ?? ''
      if (isPageTabbar(targetUrl)) {
        setCurIdxByPath(targetUrl)
        uni.switchTab({ url: targetUrl })
      }
      else {
        uni.redirectTo({ url: targetUrl })
      }
    }
    else {
      uni.navigateBack()
    }
    return
  }

  // 模拟登录：设置 token 与用户信息
  tokenStore.setSingleToken({
    token: 'mock-token-UNIX-123456',
    expiresIn: 7200,
  } as ISingleTokenRes)

  userStore.setUserInfo({
    userId: 1001,
    username: 'UNIX',
    nickname: 'UNIX 开发者',
    avatar: '/static/logo.png',
  } as IUserInfo)

  uni.showToast({
    title: '登录成功',
    icon: 'success',
  })

  setTimeout(() => {
    if (redirectUrl.value !== '') {
      const targetUrl = decodeURIComponent(redirectUrl.value) ?? ''
      if (isPageTabbar(targetUrl)) {
        setCurIdxByPath(targetUrl)
        uni.switchTab({ url: targetUrl })
      }
      else {
        uni.redirectTo({ url: targetUrl })
      }
    }
    else {
      uni.navigateBack()
    }
  }, 1000)
}

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": '登录' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "flex-1 p-30px items-center justify-center" }), [
            _cE("view", _uM({ class: "mb-30px" }), [
              _cE("text", _uM({ class: "text-20px font-bold text-__1e293b_" }), "登录页")
            ]),
            _cE("view", _uM({
              class: "w-200px h-44px rounded-8px bg-__3b82f6_ flex flex-row items-center justify-center",
              onClick: doLogin
            }), [
              _cE("text", _uM({ class: "text-__ffffff_ text-14px font-bold" }), "点击模拟登录")
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
const GenSrcSubAuthLoginStyles = [_uM([["bg-__3b82f6_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#3b82f6"]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-44px", _pS(_uM([["height", 44]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["mb-30px", _pS(_uM([["marginBottom", 30]]))], ["p-30px", _pS(_uM([["paddingTop", 30], ["paddingRight", 30], ["paddingBottom", 30], ["paddingLeft", 30]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__1e293b_", _pS(_uM([["color", "#1e293b"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))], ["text-20px", _pS(_uM([["fontSize", 20]]))], ["w-200px", _pS(_uM([["width", 200]]))]])]
