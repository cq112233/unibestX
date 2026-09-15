import { reactive } from 'vue';
import { defineStore } from 'pinia';
// 类型统一来自 src/store/types.uts（唯一真源），本文件严禁再 export type 同名类型
import type { ILoginForm, ISingleTokenRes, IDoubleTokenRes, ITokenState } from '../types.uts';

export const useTokenStore = defineStore('token', () => {
  // 1. 响应式状态
  const state = reactive<ITokenState>({
    token: '',
    expiresIn: 0,
    accessToken: '',
    accessExpiresIn: 0,
    refreshToken: '',
    refreshExpiresIn: 0,
    tokenExpireTime: 0
  });

  // ==========================================
  // Actions
  // ==========================================

  function setSingleToken(res: ISingleTokenRes): void {
    state.token = res.token;
    state.expiresIn = res.expiresIn;
    const expireTime = Date.now() + res.expiresIn * 1000;
    state.tokenExpireTime = expireTime;
    uni.setStorageSync('accessTokenExpireTime', expireTime);
  }

  function setDoubleToken(res: IDoubleTokenRes): void {
    state.accessToken = res.accessToken;
    state.accessExpiresIn = res.accessExpiresIn;
    state.refreshToken = res.refreshToken;
    state.refreshExpiresIn = res.refreshExpiresIn;
    const now = Date.now();
    const expireTime = now + res.accessExpiresIn * 1000;
    state.tokenExpireTime = expireTime;
    uni.setStorageSync('accessTokenExpireTime', expireTime);
    uni.setStorageSync('refreshTokenExpireTime', now + res.refreshExpiresIn * 1000);
  }

  function clearToken(): void {
    state.token = '';
    state.expiresIn = 0;
    state.accessToken = '';
    state.accessExpiresIn = 0;
    state.refreshToken = '';
    state.refreshExpiresIn = 0;
    state.tokenExpireTime = 0;
    uni.removeStorageSync('accessTokenExpireTime');
    uni.removeStorageSync('refreshTokenExpireTime');
  }

  function getToken(): string {
    if (state.accessToken != '') {
      return state.accessToken;
    }
    return state.token;
  }

  function isTokenValid(): boolean {
    if (state.tokenExpireTime <= 0) {
      const val = uni.getStorageSync('accessTokenExpireTime');
      if (val != null && val !== '') {
        const num = Number.parseFloat(val.toString());
        if (!isNaN(num)) {
          state.tokenExpireTime = num;
        }
      }
    }
    return state.tokenExpireTime > 0 && Date.now() < state.tokenExpireTime;
  }

  function isRefreshTokenValid(): boolean {
    const val = uni.getStorageSync('refreshTokenExpireTime');
    if (val == null || val === '') {
      return false;
    }
    const num = Number.parseFloat(val.toString());
    if (isNaN(num)) {
      return false;
    }
    return Date.now() < num;
  }

  function hasLoginInfo(): boolean {
    return state.accessToken != '' || state.token != '';
  }

  function hasValidLogin(): boolean {
    return hasLoginInfo() && isTokenValid();
  }

  return {
    state,
    setSingleToken,
    setDoubleToken,
    clearToken,
    getToken,
    isTokenValid,
    isRefreshTokenValid,
    hasLoginInfo,
    hasValidLogin
  };
}, {
  persist: true
});
