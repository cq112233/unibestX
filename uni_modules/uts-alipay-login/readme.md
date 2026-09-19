# uts-alipay-login 支付宝原生授权登录插件

基于支付宝官方 Android SDK `AuthTask.authV2` 实现的原生一键授权登录 UTS 插件。

## 1. 快速使用

```ts
import { alipayLogin, isAlipayInstalled } from '@/uni_modules/uts-alipay-login'

// 1. 发起授权登录
alipayLogin({
  // authInfo 由你的后端调用支付宝开放平台服务（或 SDK alipay.open.auth.sdk.code.get）生成签名授权串
  authInfo: 'apiname=com.alipay.account.auth&app_id=xxxx&auth_type=AUTHACCOUNT...',
  success: (res) => {
    console.log('支付宝授权成功，临时授权码 authCode:', res.authCode)
    console.log('支付宝用户 ID userId:', res.userId)
    // 将 res.authCode 发给业务后端换取用户身份 Token
  },
  fail: (err) => {
    console.error('支付宝授权失败:', err.errCode, err.errMsg)
  }
})
```

## 2. 特性
- **已安装支付宝**：直接拉起手机支付宝 App 弹窗确认授权。
- **未安装支付宝**：SDK 自动降级为内置安全网页授权页面，无需手动跳转系统浏览器。
