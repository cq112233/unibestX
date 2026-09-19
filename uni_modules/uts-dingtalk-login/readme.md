# uts-dingtalk-login 钉钉原生授权登录插件

基于钉钉开放平台 Android 官方 SDK 实现的 uni-app x 原生授权登录 UTS 插件。

## 1. 快速使用

```ts
import { dingTalkLogin, isDingTalkInstalled } from '@/uni_modules/uts-dingtalk-login'

// 1. 检查是否安装钉钉
const installed = isDingTalkInstalled('你的钉钉AppId')
if (!installed) {
  uni.showToast({ title: '未安装钉钉客户端', icon: 'none' })
  return
}

// 2. 发起登录授权
dingTalkLogin({
  appId: '你的钉钉AppId',
  success: (res) => {
    console.log('获取临时授权码 authCode:', res.authCode)
    // 将 res.authCode 发送给你的业务后端，调用钉钉接口换取用户信息
  },
  fail: (err) => {
    console.error('钉钉登录失败:', err.errCode, err.errMsg)
  }
})
```

## 2. 开放平台准备工作
1. 登录 [钉钉开放平台](https://open.dingtalk.com/)，创建移动应用并获取 **AppId / Client ID**。
2. 登记应用配置：
   - **包名**：`com.example.unibestX`
   - **签名**：填入当前打包 Keystore 证书的 MD5 指纹（去冒号）。
