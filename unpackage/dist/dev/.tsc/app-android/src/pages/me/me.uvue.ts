import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
import { useTokenStore, useUserStore } from '../../store'
import { LOGIN_PAGE } from '../../router/config'
import { handleBackPressExit } from '@/src/utils/backPress'
import { setCurIdxByPath } from '@/src/tabbar/store'


const __sfc__ = defineComponent({
  __name: 'me',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

onBackPress((options: OnBackPressOptions): boolean => {

  if (options.from == 'backbutton') {
    return handleBackPressExit()
  }

  return false
})

const userStore = useUserStore()
const tokenStore = useTokenStore()

// 计算头像
const avatarUrl = computed((): string => {
  if (userStore.state.userInfo.avatar.length > 0) {
    return userStore.state.userInfo.avatar
  }
  return '/static/logo.png'
})

// 序列化用户信息为 JSON
const userInfoJson = computed((): string => {
  const info = {__$originalPosition: new UTSSourceMapPosition("info", "src/pages/me/me.uvue", 82, 9),
    userId: userStore.state.userInfo.userId,
    username: userStore.state.userInfo.username,
    nickname: userStore.state.userInfo.nickname,
    avatar: userStore.state.userInfo.avatar,
  }
  return JSON.stringify(info, null, 2)
})

onShow(() => {
  console.log('All storage keys:', uni.getStorageInfoSync().keys, " at src/pages/me/me.uvue:92")
  console.log('pinia:token:', uni.getStorageSync('pinia:token'), " at src/pages/me/me.uvue:93")
  console.log('pinia:user:', uni.getStorageSync('pinia:user'), " at src/pages/me/me.uvue:94")
})

// 登录
function handleLogin() {
  uni.navigateTo({
    url: LOGIN_PAGE,
  })
}

// 退出登录
function handleLogout() {
  uni.showModal({
    title: '提示',
    content: '确定要退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        tokenStore.clearToken()
        userStore.clearUserInfo()
        uni.showToast({
          title: '退出登录成功',
          icon: 'success',
        })
        // 退出后跳回首页（me 页需要登录，不能停留）
        setTimeout(() => {
          const targetUrl = '/src/pages/index/index'
          setCurIdxByPath(targetUrl)
          uni.switchTab({ url: targetUrl })
        }, 0)
      }
    },
  })
}

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": '我的' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({ class: "wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2 px-16px py-24px wtu-umklo8-3" }), [
            _cE("view", _uM({ class: "wtu-v9mcu4-4 wtu-4q8au6-5 rounded-12px px-20px py-30px mb-20px wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2" }), [
              _cE("image", _uM({
                class: "w-90px h-90px rounded-45px mb-16px border-width-3px border-color-[#f1f5f9] wtu-1q8anq5-6",
                src: unref(avatarUrl)
              }), null, 8 /* PROPS */, ["src"]),
              _cE("text", _uM({ class: "text-20px wtu-58fnu4-7 wtu-1c3ypac-8 mb-4px" }), _tD(unref(userStore).state.userInfo.username.length > 0 ? unref(userStore).state.userInfo.username : '未登录用户'), 1 /* TEXT */),
              unref(userStore).state.userInfo.username.length > 0
                ? _cE("text", _uM({
                    key: 0,
                    class: "text-14px wtu-1ya1no3-9 mb-12px"
                  }), _tD(unref(userStore).state.userInfo.nickname), 1 /* TEXT */)
                : _cC("v-if", true),
              _cE("view", _uM({ class: "wtu-1hohpe6-0 wtu-1pllh87-a" }), [
                _cE("text", _uM({
                  class: _nC(["text-12px px-12px py-4px rounded-20px wtu-17lenqs-b wtu-j5499y-c", unref(tokenStore).hasValidLogin() ? 'wtu-1x8u93y-d wtu-1obvnxf-e' : 'wtu-11a9dql-f wtu-1ya1no3-9'])
                }), _tD(unref(tokenStore).hasValidLogin() ? '已登录' : '未登录'), 3 /* TEXT, CLASS */)
              ])
            ]),
            _cE("view", _uM({ class: "wtu-v9mcu4-4 wtu-4q8au6-5 rounded-12px p-20px mb-24px wtu-1hohpe6-0 wtu-kfqmh9-1" }), [
              _cE("view", _uM({ class: "border-bottom-width-1px border-bottom-style-solid border-bottom-color-[#f1f5f9] pb-8px mb-12px wtu-1hohpe6-0 wtu-1pllh87-a" }), [
                _cE("text", _uM({ class: "text-15px wtu-4yhcom-g wtu-wy5oxr-h" }), "用户信息 (JSON)")
              ]),
              _cE("scroll-view", _uM({
                class: "wtu-1p4csuv-i rounded-8px p-12px h-180px",
                "scroll-y": "true"
              }), [
                _cE("text", _uM({
                  class: "text-13px wtu-1f6mdr3-j leading-20px",
                  style: _nS(_uM({"font-family":"monospace"}))
                }), _tD(unref(userInfoJson)), 5 /* TEXT, STYLE */)
              ])
            ]),
            _cE("view", _uM({ class: "wtu-v9mcu4-4 px-8px wtu-1hohpe6-0 wtu-kfqmh9-1" }), [
              isTrue(unref(tokenStore).hasValidLogin())
                ? _cE("view", _uM({
                    key: 0,
                    class: "wtu-v9mcu4-4 h-48px rounded-8px wtu-1l9wu4z-k wtu-1hohpe6-0 wtu-1pllh87-a wtu-tikv1r-2 wtu-1rnqkyn-l",
                    onClick: handleLogout
                  }), [
                    _cE("text", _uM({ class: "wtu-amc2mi-m text-14px wtu-58fnu4-7" }), "退出登录")
                  ])
                : _cE("view", _uM({
                    key: 1,
                    class: "wtu-v9mcu4-4 h-48px rounded-8px wtu-1y6dimz-n wtu-1hohpe6-0 wtu-1pllh87-a wtu-tikv1r-2 wtu-1rnqkyn-l",
                    onClick: handleLogin
                  }), [
                    _cE("text", _uM({ class: "wtu-amc2mi-m text-14px wtu-58fnu4-7" }), "登录")
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
const GenSrcPagesMeMeStyles = [_uM([["border-solid", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["font-bold", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["font-medium", _pS(_uM([["--tw-font-weight", "500"], ["fontWeight", 500]]))], ["font-semibold", _pS(_uM([["--tw-font-weight", "600"], ["fontWeight", 600]]))], ["wtu-1hohpe6-0", _pS(_uM([["display", "flex"]]))], ["wtu-kfqmh9-1", _pS(_uM([["flexDirection", "column"]]))], ["wtu-tikv1r-2", _pS(_uM([["alignItems", "center"]]))], ["wtu-umklo8-3", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["wtu-v9mcu4-4", _pS(_uM([["width", "100%"]]))], ["wtu-4q8au6-5", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-1q8anq5-6", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-58fnu4-7", _pS(_uM([["--tw-font-weight", "700"], ["fontWeight", 700]]))], ["wtu-1c3ypac-8", _pS(_uM([["color", "#1e293b"]]))], ["wtu-1ya1no3-9", _pS(_uM([["color", "#64748b"]]))], ["wtu-1pllh87-a", _pS(_uM([["flexDirection", "row"]]))], ["wtu-17lenqs-b", _pS(_uM([["--tw-font-weight", "500"], ["fontWeight", 500]]))], ["wtu-j5499y-c", _pS(_uM([["overflow", "hidden"]]))], ["wtu-1x8u93y-d", _pS(_uM([["backgroundColor", "#d1fae5"]]))], ["wtu-1obvnxf-e", _pS(_uM([["color", "#065f46"]]))], ["wtu-11a9dql-f", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-4yhcom-g", _pS(_uM([["--tw-font-weight", "600"], ["fontWeight", 600]]))], ["wtu-wy5oxr-h", _pS(_uM([["color", "#334155"]]))], ["wtu-1p4csuv-i", _pS(_uM([["backgroundColor", "#0f172a"]]))], ["wtu-1f6mdr3-j", _pS(_uM([["color", "#38bdf8"]]))], ["wtu-1l9wu4z-k", _pS(_uM([["backgroundColor", "#ef4444"]]))], ["wtu-1rnqkyn-l", _pS(_uM([["justifyContent", "center"]]))], ["wtu-amc2mi-m", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1y6dimz-n", _pS(_uM([["backgroundColor", "#3b82f6"]]))]])]
