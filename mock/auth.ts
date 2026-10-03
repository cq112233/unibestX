import type { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess } from './_util';

export default [
  // 1. 用户登录接口
  {
    url: '/api/auth/login',
    method: 'post',
    timeout: 200,
    response: (opt: any) => {
      const { username, password } = opt?.body || {};
      if (password && password !== '123456' && password !== 'admin') {
        return resultError('密码错误，测试账号密码为 123456', 400);
      }

      return resultSuccess({
        token: `mock-token-${Date.now()}`,
        expiresIn: 7200,
        userInfo: {
          userId: 1001,
          username: username || 'admin',
          nickname: '超级管理员',
          avatar: '/static/logo.png',
          roles: ['admin']
        }
      }, '登录成功');
    }
  },

  // 2. 获取当前登录用户信息
  {
    url: '/api/user/info',
    method: 'get',
    timeout: 100,
    response: () => {
      return resultSuccess({
        userId: 1001,
        username: 'admin',
        nickname: 'UNIX 极客开发者',
        avatar: '/static/logo.png',
        roles: ['admin', 'developer'],
        permissions: ['*']
      });
    }
  },

  // 3. 退出登录
  {
    url: '/api/auth/logout',
    method: 'post',
    timeout: 50,
    response: () => {
      return resultSuccess(null, '退出登录成功');
    }
  }
] as MockMethod[];
