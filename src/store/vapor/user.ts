import { reactive } from 'vue';
import { defineStore } from 'pinia';

// ==========================================
// 类型定义
// ==========================================

export type IUserInfo = {
  userId: number;
  username: string;
  nickname: string;
  avatar: string;
};

export type IUserState = {
  userInfo: IUserInfo;
};

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
