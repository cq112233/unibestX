import { http } from '../http/request'
import { getEnvConfig } from '../utils/env'
import type { LimeRequestConfig } from '@/uni_modules/lime-request'
import type { IUserInfo } from '../store/user'
import { useUserStore } from '../store/user'

/** 获取当前环境配置下的 BaseURL */
export function getAuthBaseUrl() : string {
  return getEnvConfig().baseURL
}

// ==========================================
// 1. 发送验证码 API
// ==========================================
export type ISendPhoneCodeParams = {
  phone : string
  scene : string // "register" | "reset_password" | "login" | "change_phone"
}

/**
 * 发送手机短信验证码
 * POST /api/mobile/member/send_phone_code
 */
export function sendPhoneCode(params : ISendPhoneCodeParams) : Promise<any> {
  return http.post<any>(
    '/api/mobile/member/send_phone_code',
    {
      phone: params.phone,
      scene: params.scene,
    } as UTSJSONObject,
    {
      baseURL: getAuthBaseUrl(),
      extra: {
        ignoreAuth: true,
      } as UTSJSONObject,
    } as LimeRequestConfig,
  )
}

// ==========================================
// 2. 账号密码登录 API
// ==========================================
export type IMemberLoginParams = {
  phone_number : string
  password : string
}

/**
 * 会员密码登录
 * POST /api/mobile/member/login
 */
export function loginByPassword(params : IMemberLoginParams) : Promise<any> {
  return http.post<any>(
    '/api/mobile/member/login',
    {
      phone_number: params.phone_number,
      password: params.password,
    } as UTSJSONObject,
    {
      baseURL: getAuthBaseUrl(),
      extra: {
        ignoreAuth: true,
      } as UTSJSONObject,
    } as LimeRequestConfig,
  )
}

// ==========================================
// 3. 手机验证码登录 API
// ==========================================
export type IMemberSmsLoginParams = {
  phone_number : string
  validate_code : string
}

/**
 * 手机验证码登录
 * POST /api/mobile/member/login_sms
 */
export function loginBySms(params : IMemberSmsLoginParams) : Promise<any> {
  return http.post<any>(
    '/api/mobile/member/login_sms',
    {
      phone_number: params.phone_number,
      validate_code: params.validate_code,
    } as UTSJSONObject,
    {
      baseURL: getAuthBaseUrl(),
      extra: {
        ignoreAuth: true,
      } as UTSJSONObject,
    } as LimeRequestConfig,
  )
}

// ==========================================
// 4. 用户注册 API
// ==========================================
export type IMemberRegisterParams = {
  phone_number : string
  password : string
  validate_code : string
}

/**
 * 用户注册
 * POST /api/mobile/member/register
 */
export function registerMember(params : IMemberRegisterParams) : Promise<any> {
  return http.post<any>(
    '/api/mobile/member/register',
    {
      phone_number: params.phone_number,
      password: params.password,
      validate_code: params.validate_code,
    } as UTSJSONObject,
    {
      baseURL: getAuthBaseUrl(),
      extra: {
        ignoreAuth: true,
      } as UTSJSONObject,
    } as LimeRequestConfig,
  )
}

// ==========================================
// 5. 获取当前登录会员信息 API
// ==========================================
/**
 * 获取当前登录会员信息
 * GET /api/mobile/member/get_member_info
 */
export function getMemberInfo() : Promise<any> {
  return http.get<any>(
    '/api/mobile/member/get_member_info',
    {
      baseURL: getAuthBaseUrl(),
    } as LimeRequestConfig,
  )
}

/**
 * 请求后端接口获取最新用户信息，并同步写入 userStore
 */
export function fetchAndStoreUserInfo() : Promise<IUserInfo> {
  const userStore = useUserStore()
  return getMemberInfo().then((res : any) : IUserInfo => {
    let uId = 1001
    let uName = ''
    let uNick = ''
    let uAvatar = ''

    if (res != null) {
      if (typeof res == 'string') {
        uName = res as string
      }
      else {
        const obj = JSON.parseObject(JSON.stringify(res))
        if (obj != null) {
          let memberData = obj
          if (obj['data'] != null && typeof obj['data'] == 'object') {
            const dataObj = JSON.parseObject(JSON.stringify(obj['data']))
            if (dataObj != null) {
              memberData = dataObj
            }
          }

          const phoneVal = memberData.getString('phone_number') ?? memberData.getString('phone') ?? memberData.getString('username')
          if (phoneVal != null) uName = phoneVal

          const nickVal = memberData.getString('nickname') ?? memberData.getString('name')
          if (nickVal != null) uNick = nickVal

          const avatarVal = memberData.getString('avatar')
          if (avatarVal != null) uAvatar = avatarVal

          const idNum = memberData.getNumber('userId') ?? memberData.getNumber('id')
          if (idNum != null) {
            uId = idNum
          }
        }
      }
    }

    if (uNick == '' && uName != '') {
      uNick = `用户_${uName.slice(-4)}`
    }

    const info = {
      userId: uId,
      username: uName,
      nickname: uNick != '' ? uNick : '用户',
      avatar: uAvatar != '' ? uAvatar : '/static/logo.png',
    } as IUserInfo

    userStore.setUserInfo(info)
    return info
  })
}

// ==========================================
// 6. 退出登录 API
// ==========================================
/**
 * 退出登录
 * POST /api/mobile/member/logout
 */
export function logout() : Promise<any> {
  return http.post<any>(
    '/api/mobile/member/logout',
    null,
    {
      baseURL: getAuthBaseUrl(),
    } as LimeRequestConfig,
  )
}
