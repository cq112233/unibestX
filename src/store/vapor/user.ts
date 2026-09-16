import { reactive } from 'vue';
import { defineStore } from 'pinia';
// 类型统一来自 src/store/types.uts（唯一真源），本文件严禁再 export type 同名类型
import type { IUserInfo, IUserState } from '../types.uts';

const DEFAULT_AVATAR = '/static/logo.png';

const defaultUserInfo: IUserInfo = {
  userId: -1,
  username: '',
  nickname: '',
  avatar: DEFAULT_AVATAR
};

export const useUserStore = defineStore('user', () => {
  // 1. 响应式状态
  const state = reactive<IUserState>({
    userInfo: {
      userId: defaultUserInfo.userId,
      username: defaultUserInfo.username,
      nickname: defaultUserInfo.nickname,
      avatar: defaultUserInfo.avatar
    }
  });

  // ==========================================
  // Actions
  // ==========================================

  function setUserInfo(info: IUserInfo): void {
    state.userInfo = {
      userId: info.userId,
      username: info.username,
      nickname: info.nickname,
      avatar: info.avatar != '' ? info.avatar : DEFAULT_AVATAR
    };
  }

  function setAvatar(avatar: string): void {
    state.userInfo.avatar = avatar;
  }

  function clearUserInfo(): void {
    state.userInfo = {
      userId: defaultUserInfo.userId,
      username: defaultUserInfo.username,
      nickname: defaultUserInfo.nickname,
      avatar: defaultUserInfo.avatar
    };
    uni.removeStorageSync('user');
  }

  return {
    state,
    setUserInfo,
    setAvatar,
    clearUserInfo
  };
}, {
  persist: true
});
