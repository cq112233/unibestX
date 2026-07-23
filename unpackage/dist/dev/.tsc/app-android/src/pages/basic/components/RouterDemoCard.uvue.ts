import { computed } from 'vue'
import Card from './Card.uvue'
import { useTokenStore } from '@/src/store/token'
import { useUserStore } from '@/src/store/user'


const __sfc__ = defineComponent({
  __name: 'RouterDemoCard',
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

const tokenStore = useTokenStore()
const userStore = useUserStore()

const hasLogin = computed((): boolean => {
  return tokenStore.hasValidLogin()
})

function jumpToTest() {
  uni.navigateTo({
    url: '/src/sub/test/test?id=999&name=UNIX',
  })
}

function handleLogout() {
  tokenStore.clearToken()
  userStore.clearUserInfo()
  uni.showToast({
    title: '已清除登录状态',
    icon: 'success',
  })
}

return (): any | null => {

  return _cV(unref(Card), _uM({ title: "路由拦截与传参测试" }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }), [
        _cE("view", _uM({ class: "flex-row justify-between items-center mb-8px" }), [
          _cE("text", _uM({ class: "text-14px text-__64748b_" }), "当前登录状态:"),
          _cE("text", _uM({
            style: _nS(_uM({ fontSize: '14px', fontWeight: 'bold', color: hasLogin.value ? '#10b981' : '#f43f5e' }))
          }), _tD(hasLogin.value ? '已登录' : '未登录'), 5 /* TEXT, STYLE */)
        ]),
        _cE("text", _uM({ class: "text-12px text-__94a3b8_ leading-normal" }), " 测试场景说明：Test 页面属于需登录拦截页面。未登录时点击跳转将拦截并重定向到登录页，登录成功后会自动跳回 Test 页并解析 query 传参。 ")
      ]),
      _cE("view", _uM({ class: "flex-row justify-between" }), [
        _cE("view", _uM({
          class: "flex-1 bg-__3182ce_ rounded-8px h-42px flex flex-row items-center justify-center",
          onClick: jumpToTest
        }), [
          _cE("text", _uM({ class: "text-__ffffff_ text-14px" }), "跳转 Test 页 (传参)")
        ]),
        _cE("view", _uM({
          class: "flex-1 ml-12px bg-__ef4444_ rounded-8px h-42px flex flex-row items-center justify-center",
          onClick: handleLogout
        }), [
          _cE("text", _uM({ class: "text-__ffffff_ text-14px" }), "清除登录状态")
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

})
export default __sfc__
const GenSrcPagesBasicComponentsRouterDemoCardStyles = [_uM([["bg-__3182ce_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#3182ce"]]))], ["bg-__ef4444_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#ef4444"]]))], ["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex", _pS(_uM([["display", "flex"]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["h-42px", _pS(_uM([["height", 42]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["leading-normal", _pS(_uM([["lineHeight", "normal"]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["mb-8px", _pS(_uM([["marginBottom", 8]]))], ["ml-12px", _pS(_uM([["marginLeft", 12]]))], ["p-16px", _pS(_uM([["paddingTop", 16], ["paddingRight", 16], ["paddingBottom", 16], ["paddingLeft", 16]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-8px", _pS(_uM([["borderTopLeftRadius", 8], ["borderTopRightRadius", 8], ["borderBottomRightRadius", 8], ["borderBottomLeftRadius", 8]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__ffffff_", _pS(_uM([["color", "#ffffff"]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-14px", _pS(_uM([["fontSize", 14]]))]])]
