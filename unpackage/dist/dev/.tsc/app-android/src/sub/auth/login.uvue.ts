import _easycom_up_subsection from '@/uni_modules/uview-ultra/components/up-subsection/up-subsection.uvue'
import _easycom_up_input from '@/uni_modules/uview-ultra/components/up-input/up-input.uvue'
import _easycom_up_code from '@/uni_modules/uview-ultra/components/up-code/up-code.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import AppKu from '@/App.ku.uvue'
import LayoutComponent from '@/src/layouts/default.uvue'
/* eslint-disable dot-notation */
import { ref } from 'vue'
import { fetchAndStoreUserInfo, loginByPassword, loginBySms, sendPhoneCode } from '@/src/api/auth'
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

const windowHeight = ref<number>(0)
const currentSubIndex = ref<number>(0) // 0: 验证码登录, 1: 密码登录
const phoneNumber = ref<string>('18357169706')
const smsCode = ref<string>('')
const password = ref<string>('')
const loading = ref<boolean>(false)
const redirectUrl = ref<string>('')

// uview-ultra 验证码倒计时 Ref
const uCodeRef = ref<ComponentPublicInstance | null>(null)
const codeTips = ref<string>('获取验证码')

const phoneRegex = /^1[3-9]\d{9}$/

onLoad((options: UTSJSONObject | null) => {
  windowHeight.value = uni.getWindowInfo().windowHeight
  if (options != null) {
    const redirect = options['redirect'] as string | null
    if (redirect != null) {
      redirectUrl.value = redirect
    }
  }
})

function handleSubChange(index: number) {
  currentSubIndex.value = index
}

function codeChange(text: string) {
  codeTips.value = text
}

function goToRegister() {
  uni.navigateTo({
    url: '/src/sub/auth/register',
  })
}

// 处理登录成功
function handleLoginSuccess(res: any) {
  let tokenVal = `token-${Date.now()}`
  if (res != null) {
    if (typeof res == 'string') {
      tokenVal = res as string
    }
    else {
      const resObj = UTSAndroid.consoleDebugError(JSON.parseObject(JSON.stringify(res)), " at src/sub/auth/login.uvue:284")
      if (resObj != null) {
        const t = resObj.getString('access_token') ?? resObj.getString('token')
        if (t != null)
          tokenVal = t
      }
    }
  }

  tokenStore.setSingleToken({
    token: tokenVal,
    expiresIn: 7200,
  } as ISingleTokenRes)

  uni.showToast({
    title: '登录成功',
    icon: 'success',
  })

  // 通过接口获取用户信息存到 store
  fetchAndStoreUserInfo()
    .catch((err: any | null) => {
      console.warn('获取用户信息异常，使用本地账号兜底:', err, " at src/sub/auth/login.uvue:306")
      userStore.setUserInfo({
        userId: 1001,
        username: phoneNumber.value.trim(),
        nickname: `用户_${phoneNumber.value.trim().slice(-4)}`,
        avatar: '/static/logo.png',
      } as IUserInfo)
    })
    .then(() => {
      setTimeout(() => {
        if (redirectUrl.value !== '') {
          const targetUrl = UTSAndroid.consoleDebugError(decodeURIComponent(redirectUrl.value), " at src/sub/auth/login.uvue:317") ?? ''
          if (isPageTabbar(targetUrl)) {
            setCurIdxByPath(targetUrl)
            uni.switchTab({ url: targetUrl })
          }
          else {
            uni.redirectTo({ url: targetUrl })
          }
        }
        else {
          setCurIdxByPath('/src/pages/index/index')
          uni.switchTab({ url: '/src/pages/index/index' })
        }
      }, 800)
    })
}

// 使用 uview-ultra 的 up-code 组件触发发送验证码
function handleSendCode() {
  const phoneStr = phoneNumber.value.trim()
  if (!phoneRegex.test(phoneStr)) {
    uni.showToast({
      title: '请输入有效的11位手机号码',
      icon: 'none',
    })
    return
  }

  if (uCodeRef.value != null) {
    const codeObj = uCodeRef.value!
    const canGet = codeObj.$callMethod('canGetCode')
    if (canGet == true) {
      uni.showLoading({ title: '正在发送验证码...' })
      sendPhoneCode({
        phone: phoneStr,
        scene: 'login',
      })
        .then((_res: any) => {
          uni.hideLoading()
          uni.showToast({ title: '验证码已发送', icon: 'success' })
          codeObj.$callMethod('start')
        })
        .catch((err: any | null) => {
          uni.hideLoading()
          console.warn('后端接口请求异常，开启演示倒计时:', err, " at src/sub/auth/login.uvue:361")
          uni.showToast({ title: '验证码已发送', icon: 'success' })
          codeObj.$callMethod('start')
        })
    }
    else {
      uni.showToast({ title: '倒计时中，请稍后再试', icon: 'none' })
    }
  }
}

// 提交登录表单
function handleLoginSubmit() {
  const phoneStr = phoneNumber.value.trim()
  if (!phoneRegex.test(phoneStr)) {
    uni.showToast({ title: '请输入正确的手机号码', icon: 'none' })
    return
  }

  if (loading.value)
    return
  loading.value = true

  if (currentSubIndex.value == 0) {
    const codeStr = smsCode.value.trim()
    if (codeStr == '') {
      loading.value = false
      uni.showToast({ title: '请输入短信验证码', icon: 'none' })
      return
    }

    loginBySms({
      phone_number: phoneStr,
      validate_code: codeStr,
    })
      .then((res: any) => {
        loading.value = false
        handleLoginSuccess(res)
      })
      .catch((err: any | null) => {
        loading.value = false
        console.error('验证码登录失败:', err, " at src/sub/auth/login.uvue:402")
      })
  }
  else {
    const pwdStr = password.value.trim()
    if (pwdStr == '') {
      loading.value = false
      uni.showToast({ title: '请输入登录密码', icon: 'none' })
      return
    }

    loginByPassword({
      phone_number: phoneStr,
      password: pwdStr,
    })
      .then((res: any) => {
        loading.value = false
        handleLoginSuccess(res)
      })
      .catch((err: any | null) => {
        loading.value = false
        console.error('密码登录失败:', err, " at src/sub/auth/login.uvue:423")
      })
  }
}

function onOtherLogin(type: string) {
  if (type === 'wx') {
    uni.showToast({ title: '微信快捷登录演示', icon: 'none' })
  }
  else {
    phoneNumber.value = '18357169706'
    smsCode.value = '123456'
    uni.showToast({ title: '已填充游客测试账号', icon: 'success' })
  }
}

return (): any | null => {

const _component_up_subsection = resolveEasyComponent("up-subsection",_easycom_up_subsection)
const _component_up_input = resolveEasyComponent("up-input",_easycom_up_input)
const _component_up_code = resolveEasyComponent("up-code",_easycom_up_code)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)

  return _cV(unref(AppKu), null, _uM({
    default: withSlotCtx((): any[] => [
      _cV(unref(LayoutComponent), _uM({ "navigation-bar-title-text": '登录' }), _uM({
        default: withSlotCtx((): any[] => [
          _cE("view", _uM({
            class: "flex-1 flex-col items-center justify-center bg-__f8fafc_ px-24px py-20px",
            style: _nS(_uM({ minHeight: windowHeight.value > 0 ? (windowHeight.value + 'px') : '100%' }))
          }), [
            _cE("view", _uM({ class: "w-full" }), [
              _cE("view", _uM({ class: "items-center mb-16px" }), [
                _cE("view", _uM({ class: "w-68px h-68px rounded-20px bg-white p-6px mb-10px border-width-1px border-style-solid border-color-__edf2f7_ items-center justify-center" }), [
                  _cE("image", _uM({
                    class: "w-54px h-54px rounded-14px",
                    src: "/static/logo.png",
                    mode: "aspectFit"
                  }))
                ]),
                _cE("text", _uM({ class: "text-24px font-bold text-__0f172a_ mb-6px tracking-tight" }), "欢迎登录 unibestX"),
                _cE("view", _uM({ class: "bg-__eff6ff_ px-12px py-4px rounded-12px border-width-1px border-style-solid border-color-__dbeafe_" }), [
                  _cE("text", _uM({ class: "text-12px font-bold text-__2563eb_" }), "最好用的 uni-app X 极速开发模板")
                ])
              ]),
              _cE("view", _uM({ class: "bg-white rounded-24px p-20px border-width-1px border-style-solid border-color-__e2e8f0_ mb-16px" }), [
                _cE("view", _uM({ class: "mb-20px" }), [
                  _cV(_component_up_subsection, _uM({
                    list: ['验证码登录', '密码登录'],
                    current: currentSubIndex.value,
                    "active-color": "#2563eb",
                    "bg-color": "#f1f5f9",
                    onChange: handleSubChange
                  }), null, 8 /* PROPS */, ["current"])
                ]),
                _cE("view", _uM({ class: "mb-16px" }), [
                  _cE("text", _uM({ class: "text-12px font-bold text-__475569_ mb-6px pl-2px" }), "手机号码"),
                  _cV(_component_up_input, _uM({
                    modelValue: phoneNumber.value,
                    "onUpdate:modelValue": $event => {(phoneNumber).value = $event},
                    type: "number",
                    maxlength: "11",
                    placeholder: "请输入11位手机号码",
                    "prefix-icon": "phone",
                    clearable: "",
                    shape: "circle"
                  }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ]),
                currentSubIndex.value == 0
                  ? _cE("view", _uM({
                      key: 0,
                      class: "mb-16px"
                    }), [
                      _cE("text", _uM({ class: "text-12px font-bold text-__475569_ mb-6px pl-2px" }), "短信验证码"),
                      _cE("view", _uM({ class: "flex-row items-center" }), [
                        _cE("view", _uM({ class: "flex-1 mr-8px" }), [
                          _cV(_component_up_input, _uM({
                            modelValue: smsCode.value,
                            "onUpdate:modelValue": $event => {(smsCode).value = $event},
                            type: "number",
                            maxlength: "6",
                            placeholder: "请输入6位验证码",
                            "prefix-icon": "integral",
                            clearable: "",
                            shape: "circle"
                          }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _cV(_component_up_code, _uM({
                          ref_key: "uCodeRef",
                          ref: uCodeRef,
                          seconds: "60",
                          onChange: codeChange
                        }), null, 512 /* NEED_PATCH */),
                        _cV(_component_up_button, _uM({
                          text: codeTips.value,
                          type: "primary",
                          size: "small",
                          shape: "circle",
                          "custom-style": { height: '38px', paddingLeft: '14px', paddingRight: '14px' },
                          onClick: handleSendCode
                        }), null, 8 /* PROPS */, ["text"])
                      ])
                    ])
                  : _cC("v-if", true),
                currentSubIndex.value == 1
                  ? _cE("view", _uM({
                      key: 1,
                      class: "mb-16px"
                    }), [
                      _cE("text", _uM({ class: "text-12px font-bold text-__475569_ mb-6px pl-2px" }), "登录密码"),
                      _cV(_component_up_input, _uM({
                        modelValue: password.value,
                        "onUpdate:modelValue": $event => {(password).value = $event},
                        type: "password",
                        placeholder: "请输入密码（8-20位）",
                        "prefix-icon": "lock",
                        clearable: "",
                        shape: "circle"
                      }), null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ])
                  : _cC("v-if", true),
                _cE("view", _uM({ class: "mt-8px mb-14px" }), [
                  _cV(_component_up_button, _uM({
                    type: "primary",
                    size: "large",
                    shape: "circle",
                    loading: loading.value,
                    "loading-text": "登录验证中...",
                    text: "立 即 登 录",
                    onClick: handleLoginSubmit
                  }), null, 8 /* PROPS */, ["loading"])
                ]),
                _cE("view", _uM({ class: "flex-row justify-between items-center px-4px pt-2px" }), [
                  _cE("text", _uM({
                    class: "text-13px text-__2563eb_ font-bold",
                    onClick: goToRegister
                  }), " 注册新账号 "),
                  _cE("text", _uM({
                    class: "text-13px text-__64748b_",
                    onClick: goToRegister
                  }), " 忘记密码？ ")
                ])
              ]),
              _cE("view", _uM({ class: "items-center pt-2px" }), [
                _cE("view", _uM({ class: "flex-row items-center justify-center mb-10px w-full px-10px" }), [
                  _cE("view", _uM({ class: "flex-1 h-1px bg-__e2e8f0_" })),
                  _cE("text", _uM({ class: "text-11px text-__94a3b8_ px-12px" }), "快捷测试登录"),
                  _cE("view", _uM({ class: "flex-1 h-1px bg-__e2e8f0_" }))
                ]),
                _cE("view", _uM({ class: "flex-row items-center justify-center mb-12px" }), [
                  _cE("view", _uM({
                    class: "bg-white rounded-10px px-14px h-34px border-width-1px border-style-solid border-color-__cbd5e1_ flex-row items-center justify-center mr-10px",
                    onClick: () => {onOtherLogin('wx')}
                  }), [
                    _cE("text", _uM({ class: "text-12px font-bold text-__059669_" }), "微信快捷登录")
                  ], 8 /* PROPS */, ["onClick"]),
                  _cE("view", _uM({
                    class: "bg-white rounded-10px px-14px h-34px border-width-1px border-style-solid border-color-__cbd5e1_ flex-row items-center justify-center ml-10px",
                    onClick: () => {onOtherLogin('guest')}
                  }), [
                    _cE("text", _uM({ class: "text-12px font-bold text-__2563eb_" }), "一键填充测试账号")
                  ], 8 /* PROPS */, ["onClick"])
                ]),
                _cE("text", _uM({ class: "text-11px text-__94a3b8_ text-center leading-normal mb-2px" }), " 登录即同意《用户服务协议》与《隐私政策》 "),
                _cE("text", _uM({ class: "text-10px text-__cbd5e1_ text-center" }), " unibestX Architecture © 2026 ")
              ])
            ])
          ], 4 /* STYLE */)
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
const GenSrcSubAuthLoginStyles = [_uM([["bg-__e2e8f0_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#e2e8f0"]]))], ["bg-__eff6ff_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#eff6ff"]]))], ["bg-__f8fafc_", _pS(_uM([["backgroundImage", "none"], ["backgroundColor", "#f8fafc"]]))], ["bg-white", _pS(_uM([["backgroundColor", "rgba(255,255,255,var(--un-bg-opacity,1))"]]))], ["border-color-__cbd5e1_", _pS(_uM([["borderTopColor", "#cbd5e1"], ["borderRightColor", "#cbd5e1"], ["borderBottomColor", "#cbd5e1"], ["borderLeftColor", "#cbd5e1"]]))], ["border-color-__dbeafe_", _pS(_uM([["borderTopColor", "#dbeafe"], ["borderRightColor", "#dbeafe"], ["borderBottomColor", "#dbeafe"], ["borderLeftColor", "#dbeafe"]]))], ["border-color-__e2e8f0_", _pS(_uM([["borderTopColor", "#e2e8f0"], ["borderRightColor", "#e2e8f0"], ["borderBottomColor", "#e2e8f0"], ["borderLeftColor", "#e2e8f0"]]))], ["border-color-__edf2f7_", _pS(_uM([["borderTopColor", "#edf2f7"], ["borderRightColor", "#edf2f7"], ["borderBottomColor", "#edf2f7"], ["borderLeftColor", "#edf2f7"]]))], ["border-style-solid", _pS(_uM([["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["border-width-1px", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1]]))], ["flex-1", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["flex-col", _pS(_uM([["flexDirection", "column"]]))], ["flex-row", _pS(_uM([["flexDirection", "row"]]))], ["font-bold", _pS(_uM([["fontWeight", 700]]))], ["h-1px", _pS(_uM([["height", 1]]))], ["h-34px", _pS(_uM([["height", 34]]))], ["h-54px", _pS(_uM([["height", 54]]))], ["h-68px", _pS(_uM([["height", 68]]))], ["items-center", _pS(_uM([["alignItems", "center"]]))], ["justify-between", _pS(_uM([["justifyContent", "space-between"]]))], ["justify-center", _pS(_uM([["justifyContent", "center"]]))], ["leading-normal", _pS(_uM([["lineHeight", "normal"]]))], ["mb-10px", _pS(_uM([["marginBottom", 10]]))], ["mb-12px", _pS(_uM([["marginBottom", 12]]))], ["mb-14px", _pS(_uM([["marginBottom", 14]]))], ["mb-16px", _pS(_uM([["marginBottom", 16]]))], ["mb-20px", _pS(_uM([["marginBottom", 20]]))], ["mb-2px", _pS(_uM([["marginBottom", 2]]))], ["mb-6px", _pS(_uM([["marginBottom", 6]]))], ["ml-10px", _pS(_uM([["marginLeft", 10]]))], ["mr-10px", _pS(_uM([["marginRight", 10]]))], ["mr-8px", _pS(_uM([["marginRight", 8]]))], ["mt-8px", _pS(_uM([["marginTop", 8]]))], ["none", _pS(_uM([["display", "none"]]))], ["p-20px", _pS(_uM([["paddingTop", 20], ["paddingRight", 20], ["paddingBottom", 20], ["paddingLeft", 20]]))], ["p-6px", _pS(_uM([["paddingTop", 6], ["paddingRight", 6], ["paddingBottom", 6], ["paddingLeft", 6]]))], ["pl-2px", _pS(_uM([["paddingLeft", 2]]))], ["pt-2px", _pS(_uM([["paddingTop", 2]]))], ["px-10px", _pS(_uM([["paddingLeft", 10], ["paddingRight", 10]]))], ["px-12px", _pS(_uM([["paddingLeft", 12], ["paddingRight", 12]]))], ["px-14px", _pS(_uM([["paddingLeft", 14], ["paddingRight", 14]]))], ["px-24px", _pS(_uM([["paddingLeft", 24], ["paddingRight", 24]]))], ["px-4px", _pS(_uM([["paddingLeft", 4], ["paddingRight", 4]]))], ["py-20px", _pS(_uM([["paddingTop", 20], ["paddingBottom", 20]]))], ["py-4px", _pS(_uM([["paddingTop", 4], ["paddingBottom", 4]]))], ["rounded-10px", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 10], ["borderBottomRightRadius", 10], ["borderBottomLeftRadius", 10]]))], ["rounded-12px", _pS(_uM([["borderTopLeftRadius", 12], ["borderTopRightRadius", 12], ["borderBottomRightRadius", 12], ["borderBottomLeftRadius", 12]]))], ["rounded-14px", _pS(_uM([["borderTopLeftRadius", 14], ["borderTopRightRadius", 14], ["borderBottomRightRadius", 14], ["borderBottomLeftRadius", 14]]))], ["rounded-20px", _pS(_uM([["borderTopLeftRadius", 20], ["borderTopRightRadius", 20], ["borderBottomRightRadius", 20], ["borderBottomLeftRadius", 20]]))], ["rounded-24px", _pS(_uM([["borderTopLeftRadius", 24], ["borderTopRightRadius", 24], ["borderBottomRightRadius", 24], ["borderBottomLeftRadius", 24]]))], ["shadow-sm", _pS(_uM([["boxShadow", "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))"], ["--un-shadow", "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))"]]))], ["shadow-xs", _pS(_uM([["boxShadow", "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))"], ["--un-shadow", "0 1rpx 2rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.05)))"]]))], ["text-__059669_", _pS(_uM([["color", "#059669"]]))], ["text-__0f172a_", _pS(_uM([["color", "#0f172a"]]))], ["text-__2563eb_", _pS(_uM([["color", "#2563eb"]]))], ["text-__475569_", _pS(_uM([["color", "#475569"]]))], ["text-__64748b_", _pS(_uM([["color", "#64748b"]]))], ["text-__94a3b8_", _pS(_uM([["color", "#94a3b8"]]))], ["text-__cbd5e1_", _pS(_uM([["color", "#cbd5e1"]]))], ["text-10px", _pS(_uM([["fontSize", 10]]))], ["text-11px", _pS(_uM([["fontSize", 11]]))], ["text-12px", _pS(_uM([["fontSize", 12]]))], ["text-13px", _pS(_uM([["fontSize", 13]]))], ["text-24px", _pS(_uM([["fontSize", 24]]))], ["text-center", _pS(_uM([["textAlign", "center"]]))], ["w-54px", _pS(_uM([["width", 54]]))], ["w-68px", _pS(_uM([["width", 68]]))], ["w-full", _pS(_uM([["width", "100%"]]))]])]
