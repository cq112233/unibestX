import AppKu from '@/App.ku.uvue'
import { useTokenStore, useUserStore } from '../../store';
import { LOGIN_PAGE } from '../../router/config';
import { handleBackPressExit } from '@/src/utils/backPress';
import { setCurIdxByPath } from '@/src/tabbar/store';

const __sfc__ = defineComponent({
  __name: 'me',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

;

onBackPress((options: OnBackPressOptions): boolean => {

  if (options.from == 'backbutton') {
    return handleBackPressExit();
  }

  return false;
});

const userStore = useUserStore();
const tokenStore = useTokenStore();

// 计算头像
const avatarUrl = computed((): string => {
  if (userStore.state.userInfo.avatar.length > 0) {
    return userStore.state.userInfo.avatar;
  }
  return '/static/logo.png';
});

// 序列化用户信息为 JSON
const userInfoJson = computed((): string => {
  const info = {__$originalPosition: new UTSSourceMapPosition("info", "src/pages/me/me.uvue", 78, 9),
    userId: userStore.state.userInfo.userId,
    username: userStore.state.userInfo.username,
    nickname: userStore.state.userInfo.nickname,
    avatar: userStore.state.userInfo.avatar
  };
  return JSON.stringify(info, null, 2);
});

onShow(() => {
  console.log('All storage keys:', uni.getStorageInfoSync().keys, " at src/pages/me/me.uvue:88");
  console.log('pinia:token:', uni.getStorageSync('pinia:token'), " at src/pages/me/me.uvue:89");
  console.log('pinia:user:', uni.getStorageSync('pinia:user'), " at src/pages/me/me.uvue:90");
});

// 登录
function handleLogin() {
  uni.navigateTo({
    url: LOGIN_PAGE
  });
}

// 退出登录
function handleLogout() {
  uni.showModal({
    title: '提示',
    content: '确定要退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        tokenStore.clearToken();
        userStore.clearUserInfo();
        uni.showToast({
          title: '退出登录成功',
          icon: 'success'
        });
        // 退出后跳回首页（me 页需要登录，不能停留）
        setTimeout(() => {
          const targetUrl = '/src/pages/index/index';
          setCurIdxByPath(targetUrl);
          uni.switchTab({ url: targetUrl });
        }, 0);
      }
    }
  });
}

return (): any | null => {

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2 px-16px py-24px pb-100px" }), [
        _cE("view", _uM({ class: "wtu-v9mcu4-3 wtu-4q8au6-4 rounded-12px px-20px py-30px mb-20px wtu-1hohpe6-0 wtu-kfqmh9-1 wtu-tikv1r-2" }), [
          _cE("image", _uM({
            class: "w-90px h-90px rounded-45px mb-16px border-width-3px border-color-[#f1f5f9] wtu-1q8anq5-5",
            src: unref(avatarUrl)
          }), null, 8 /* PROPS */, ["src"]),
          _cE("text", _uM({ class: "text-20px wtu-58fnu4-6 wtu-1c3ypac-7 mb-4px" }), _tD(unref(userStore).state.userInfo.username.length > 0 ? unref(userStore).state.userInfo.username : '未登录用户'), 1 /* TEXT */),
          unref(userStore).state.userInfo.username.length > 0
            ? _cE("text", _uM({
                key: 0,
                class: "text-14px wtu-1ya1no3-8 mb-12px"
              }), _tD(unref(userStore).state.userInfo.nickname), 1 /* TEXT */)
            : _cC("v-if", true),
          _cE("view", _uM({ class: "wtu-1hohpe6-0 wtu-1pllh87-9" }), [
            _cE("text", _uM({
              class: _nC(["text-12px px-12px py-4px rounded-20px wtu-17lenqs-a wtu-j5499y-b", unref(tokenStore).hasValidLogin() ? 'wtu-1x8u93y-c wtu-1obvnxf-d' : 'wtu-11a9dql-e wtu-1ya1no3-8'])
            }), _tD(unref(tokenStore).hasValidLogin() ? '已登录' : '未登录'), 3 /* TEXT, CLASS */)
          ])
        ]),
        _cE("view", _uM({ class: "wtu-v9mcu4-3 wtu-4q8au6-4 rounded-12px p-20px mb-24px wtu-1hohpe6-0 wtu-kfqmh9-1" }), [
          _cE("view", _uM({ class: "border-bottom-width-1px border-bottom-style-solid border-bottom-color-[#f1f5f9] pb-8px mb-12px wtu-1hohpe6-0 wtu-1pllh87-9" }), [
            _cE("text", _uM({ class: "text-15px wtu-4yhcom-f wtu-wy5oxr-g" }), "用户信息 (JSON)")
          ]),
          _cE("scroll-view", _uM({
            class: "wtu-1p4csuv-h rounded-8px p-12px h-180px",
            direction: "vertical"
          }), [
            _cE("text", _uM({
              class: "text-13px wtu-1f6mdr3-i leading-20px",
              style: _nS(_uM({"font-family":"monospace"}))
            }), _tD(unref(userInfoJson)), 5 /* TEXT, STYLE */)
          ])
        ]),
        _cE("view", _uM({ class: "wtu-v9mcu4-3 px-8px wtu-1hohpe6-0 wtu-kfqmh9-1" }), [
          isTrue(unref(tokenStore).hasValidLogin())
            ? _cE("view", _uM({
                key: 0,
                class: "wtu-v9mcu4-3 h-48px rounded-8px wtu-1l9wu4z-j wtu-1hohpe6-0 wtu-1pllh87-9 wtu-tikv1r-2 wtu-1rnqkyn-k",
                onClick: handleLogout
              }), [
                _cE("text", _uM({ class: "wtu-amc2mi-l text-14px wtu-58fnu4-6" }), "退出登录")
              ])
            : _cE("view", _uM({
                key: 1,
                class: "wtu-v9mcu4-3 h-48px rounded-8px wtu-1y6dimz-m wtu-1hohpe6-0 wtu-1pllh87-9 wtu-tikv1r-2 wtu-1rnqkyn-k",
                onClick: handleLogin
              }), [
                _cE("text", _uM({ class: "wtu-amc2mi-l text-14px wtu-58fnu4-6" }), "登录")
              ])
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesMeMeStyles = [_uM([["wtu-1hohpe6-0", _pS(_uM([["display", "flex"]]))], ["wtu-kfqmh9-1", _pS(_uM([["flexDirection", "column"]]))], ["wtu-tikv1r-2", _pS(_uM([["alignItems", "center"]]))], ["wtu-v9mcu4-3", _pS(_uM([["width", "100%"]]))], ["wtu-4q8au6-4", _pS(_uM([["backgroundColor", "#ffffff"]]))], ["wtu-1q8anq5-5", _pS(_uM([["--tw-border-style", "solid"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["wtu-58fnu4-6", _pS(_uM([["--tw-font-weight", "var(--font-weight-bold, 700)"], ["fontWeight", 700]]))], ["wtu-1c3ypac-7", _pS(_uM([["color", "#1e293b"]]))], ["wtu-1ya1no3-8", _pS(_uM([["color", "#64748b"]]))], ["wtu-1pllh87-9", _pS(_uM([["flexDirection", "row"]]))], ["wtu-17lenqs-a", _pS(_uM([["--tw-font-weight", "var(--font-weight-medium, 500)"], ["fontWeight", 500]]))], ["wtu-j5499y-b", _pS(_uM([["overflow", "hidden"]]))], ["wtu-1x8u93y-c", _pS(_uM([["backgroundColor", "#d1fae5"]]))], ["wtu-1obvnxf-d", _pS(_uM([["color", "#065f46"]]))], ["wtu-11a9dql-e", _pS(_uM([["backgroundColor", "#f1f5f9"]]))], ["wtu-4yhcom-f", _pS(_uM([["--tw-font-weight", "var(--font-weight-semibold, 600)"], ["fontWeight", 600]]))], ["wtu-wy5oxr-g", _pS(_uM([["color", "#334155"]]))], ["wtu-1p4csuv-h", _pS(_uM([["backgroundColor", "#0f172a"]]))], ["wtu-1f6mdr3-i", _pS(_uM([["color", "#38bdf8"]]))], ["wtu-1l9wu4z-j", _pS(_uM([["backgroundColor", "#ef4444"]]))], ["wtu-1rnqkyn-k", _pS(_uM([["justifyContent", "center"]]))], ["wtu-amc2mi-l", _pS(_uM([["color", "#ffffff"]]))], ["wtu-1y6dimz-m", _pS(_uM([["backgroundColor", "#3b82f6"]]))]])]
