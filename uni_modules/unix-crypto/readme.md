# unix-crypto

uni-app X 全端跨平台加密解密与安全工具库，提供异步 Promise 风格的密码学方法与常用安全工具，兼容 Android、iOS、鸿蒙、H5、微信小程序等全平台。

---

## 🌟 特性

- 🚀 **全平台覆盖**：Android (原生 javax.crypto / android.util.Base64)、H5 / 微信小程序 (crypto-js + WebCrypto)、iOS / 鸿蒙 (纯 UTS 算法)。
- 🆔 **UUID 生成**：符合 RFC 4122 标准的 UUID v4 生成方法（`generateUUID()` / `uuid()`）。
- 🔑 **RSA 全流程**：支持 1024 / 2048 位 RSA 密钥对生成、公钥加密、私钥解密、SHA-256 签名与验签（SPKI / PKCS#8 格式全端互通）。
- 🔒 **对称加密**：AES-128 / DES（ECB 模式、PKCS7 填充、十六进制密文输出）。
- 🛡️ **哈希与签名**：MD5、SHA-256、HMAC-SHA1 摘要。
- 📦 **Base64 编解码**：支持 UTF-8 中文字符集及任意二进制数据。

---

## 📊 各平台底层实现对照表

| 功能模块 | Android 端 (`#ifdef APP-ANDROID`) | H5 端 (`#ifdef H5`) | 微信小程序 (`#ifdef MP-WEIXIN`) | iOS / 鸿蒙等其他端 (`#ifndef ...`) |
| :--- | :--- | :--- | :--- | :--- |
| **1. Base64 编/解码** | `android.util.Base64` (系统原生) | `CryptoJS.enc.Base64` | `CryptoJS.enc.Base64` | `uni.arrayBufferToBase64` / `uni.base64ToArrayBuffer` |
| **2. MD5 摘要** | `MessageDigest.getInstance("MD5")` | `CryptoJS.MD5` | `CryptoJS.MD5` | 纯 UTS 位运算算法 |
| **3. SHA-256 摘要** | `MessageDigest.getInstance("SHA-256")` | `CryptoJS.SHA256` | `CryptoJS.SHA256` | 纯 UTS 位运算算法 |
| **4. HMAC-SHA1 签名** | `javax.crypto.Mac` (HmacSHA1) | `CryptoJS.HmacSHA1` | `CryptoJS.HmacSHA1` | 纯 UTS 迭代哈希算法 |
| **5. AES 加解密** | `Cipher.getInstance("AES/ECB/PKCS5Padding")` | `CryptoJS.AES` (ECB / PKCS7) | `CryptoJS.AES` (ECB / PKCS7) | 纯 UTS AES-128 表驱动算法 (ECB / PKCS7) |
| **6. DES 加解密** | `Cipher.getInstance("DES/ECB/PKCS5Padding")` | `CryptoJS.DES` (ECB / PKCS7) | `CryptoJS.DES` (ECB / PKCS7) | 纯 UTS 64 位 Feistel 网络算法 (ECB / PKCS7) |
| **7. RSA 密钥对生成** | `KeyPairGenerator.getInstance("RSA")` | 优先 `crypto.subtle` (Web Crypto)，自动降级 UTS BigInt | 纯 JS/BigInt 高速素数生成与 DER 编码 | 纯 JS/BigInt 高速素数生成与 DER 编码 |
| **8. RSA 公钥加密** | `Cipher.getInstance("RSA/ECB/PKCS1Padding")` | 纯 UTS RSA 算术 (`rsa.uts`) | 纯 UTS RSA 算术 (`rsa.uts`) | 纯 UTS RSA 算术 (`rsa.uts`) |
| **9. RSA 私钥解密** | `Cipher.getInstance("RSA/ECB/PKCS1Padding")` | 纯 UTS RSA 算术 (`rsa.uts`) | 纯 UTS RSA 算术 (`rsa.uts`) | 纯 UTS RSA 算术 (`rsa.uts`) |
| **10. RSA 签名与验签** | `Signature.getInstance("SHA256withRSA")` | 纯 UTS PKCS#1 v1.5 (`rsa.uts`) | 纯 UTS PKCS#1 v1.5 (`rsa.uts`) | 纯 UTS PKCS#1 v1.5 (`rsa.uts`) |
| **11. UUID 生成 (v4)** | `java.util.UUID.randomUUID()` | 优先 `crypto.randomUUID()`，自动降级伪随机 | RFC 4122 v4 伪随机算法 | RFC 4122 v4 伪随机算法 |

---

## 📖 使用方式与代码示例

```uts
import {
  generateUUID,
  uuid,
  base64Encode,
  base64Decode,
  md5,
  sha256,
  hmacSha1,
  aesEncrypt,
  aesDecrypt,
  desEncrypt,
  desDecrypt,
  rsaGenerateKeyPair,
  rsaEncrypt,
  rsaDecrypt,
  rsaSign,
  rsaVerify,
} from '@/uni_modules/unix-crypto'

// ==========================================
// 1. UUID 生成（同步）
// ==========================================
const myUuid = generateUUID() // 如: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
const shortId = uuid()

// ==========================================
// 2. Base64 编码与解码
// ==========================================
const b64 = await base64Encode('hello uni-app x')
const text = await base64Decode(b64)

// ==========================================
// 3. MD5 / SHA-256 / HMAC-SHA1 摘要与签名
// ==========================================
const md5Hex = await md5('hello')
const sha256Hex = await sha256('hello')
const hmacHex = await hmacSha1('hello', 'my-secret-key')

// ==========================================
// 4. AES-128 / DES 对称加解密（ECB / PKCS7）
// ==========================================
// AES (16 字节密钥)
const aesCipherHex = await aesEncrypt('hello', '1234567890123456')
const aesPlainText = await aesDecrypt(aesCipherHex, '1234567890123456')

// DES (8 字节密钥)
const desCipherHex = await desEncrypt('hello', '12345678')
const desPlainText = await desDecrypt(desCipherHex, '12345678')

// ==========================================
// 5. RSA 非对称加密、解密、签名与验签
// ==========================================
// 动态生成 1024 位 RSA 密钥对（返回 JSON 字符串）
const keyPairJson = await rsaGenerateKeyPair(1024)
const keyData = JSON.parse(keyPairJson) as UTSJSONObject
const publicKey = keyData.getString('publicKey')!
const privateKey = keyData.getString('privateKey')!

// 公钥加密与私钥解密
const rsaCipherHex = await rsaEncrypt('hello', publicKey)
const rsaPlainText = await rsaDecrypt(rsaCipherHex, privateKey)

// 私钥签名与公钥验签 (支持 SHA-256 / SHA-1 / MD5)
const sigHex = await rsaSign('hello', privateKey, 'SHA-256')
const isValid = await rsaVerify('hello', publicKey, sigHex, 'SHA-256')
```

---

## 🔒 规范与设计原则

1. **统一异步 Promise**：所有涉及加解密、签名与复杂计算的 API 均封装为 `Promise<string>` 或 `Promise<boolean>`，业务侧直接 `await` 调用，无需感知多端差异。
2. **密文与格式统一**：
   - 对称加密（AES / DES）与非对称加密（RSA）密文统一输出为**小写十六进制字符串 (Hex)**。
   - RSA 公钥格式为标准 **SPKI (X.509) Base64**，私钥格式为标准 **PKCS#8 Base64**，可在各端及与服务端（Java / Node.js / Go / Python）无缝解密对接。
