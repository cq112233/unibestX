# crypto-bestX

> 专为 **uni-app X / UTS** 打造的全平台密码学安全加密与工具库。
> 原生高性能与纯 UTS 跨端算法无缝融合，提供统一的异步 Promise 风格 API，全平台字节级互通。

---

## 🌟 核心特性

- 🚀 **全平台覆盖与无缝适配**：
  - **Android 端**：原生调用系统高性能 `javax.crypto` 与 `android.util.Base64`；
  - **H5 / 小程序端**：深度融合 `crypto-js` 与原生 WebCrypto 接口；
  - **iOS / 鸿蒙端**：纯 UTS 算法引擎，五端输出完全一致。
- 🆔 **UUID 生成**：符合 RFC 4122 标准的 UUID v4 生成方法（`generateUUID()` / `uuid()`），支持标准带横线及 32 位无横线格式。
- 🔑 **RSA 全流程非对称加密**：支持 1024 / 2048 位 RSA 密钥对生成、公钥加密、私钥解密、SHA-256 / SHA-1 / MD5 签名与验签（采用标准 SPKI / PKCS#8 格式，全端及与 Java / Go / Python 后端无缝互通）。
- 🔒 **对称加密算法**：AES-128 与 DES（支持 ECB 模式、PKCS7 / PKCS5 填充、十六进制密文输出）。
- 🛡 **哈希散列与签名**：MD5、SHA-256 散列摘要，以及 HMAC-SHA1 消息认证码。
- 📦 **安全 Base64 编解码**：纯 UTS 核心编解码，完美支持中文 UTF-8 字符集与二进制数据，彻底杜绝微信小程序真机 `TextEncoder` 缺失报错。

---

## 📖 快速导航目录

- [一、UUID 生成工具 (generateUUID / uuid)](#一uuid-生成工具-generateuuid--uuid)
- [二、Base64 编码与解码 (base64Encode / base64Decode)](#二base64-编码与解码-base64encode--base64decode)
- [三、哈希散列与消息认证 (MD5 / SHA-256 / HMAC-SHA1)](#三哈希散列与消息认证-md5--sha-256--hmac-sha1)
- [四、对称加解密 (AES-128 / DES)](#四对称加解密-aes-128--des)
- [五、RSA 非对称加密、解密与签名验签](#五rsa-非对称加密解密与签名验签)
  - [5.1 密钥对生成 (rsaGenerateKeyPair)](#51-密钥对生成-rsageneratekeypair)
  - [5.2 公钥加密与私钥解密 (rsaEncrypt / rsaDecrypt)](#52-公钥加密与私钥解密-rsaencrypt--rsadecrypt)
  - [5.3 私钥签名与公钥验签 (rsaSign / rsaVerify)](#53-私钥签名与公钥验签-rsasign--rsaverify)
- [六、各平台底层架构对照表](#六各平台底层架构对照表)
- [七、目录结构与规范](#七目录结构与规范)

---

## 一、UUID 生成工具 (generateUUID / uuid)

提供两种风格的唯一标识符（UUID v4）生成器，均为同步方法：

```uts
import { generateUUID, uuid } from '@/uni_modules/crypto-bestX';

// 1. 标准 RFC 4122 v4 UUID（带 4 个连字符，共 36 位）
const standardId: string = generateUUID(); 
// 输出示例: "f47ac10b-58cc-4372-a567-0e02b2c3d479"

// 2. 紧凑型 UUID（去除连字符，共 32 位纯十六进制字符）
const compactId: string = uuid(); 
// 输出示例: "f47ac10b58cc4372a5670e02b2c3d479"
```

### 📋 API 参数与返回值

| 方法名 | 入参 | 返回值类型 | 格式说明 |
| :--- | :---: | :---: | :--- |
| `generateUUID()` | 无 | `string` | 36 位标准小写 UUID（含 `-` 连字符） |
| `uuid()` | 无 | `string` | 32 位纯小写十六进制字符串（不含连字符） |

---

## 二、Base64 编码与解码 (base64Encode / base64Decode)

支持包含中文、Emoji 在内的 UTF-8 文本编码与还原，不依赖小程序缺失的 `TextEncoder` / `window.btoa`：

```uts
import { base64Encode, base64Decode } from '@/uni_modules/crypto-bestX';

// 编码
const b64 = await base64Encode('你好，uni-app X！');
console.log(b64); // "5L2g5aW977yMdW5pLWFwcCBY77yM"

// 解码
const originText = await base64Decode(b64);
console.log(originText); // "你好，uni-app X！"
```

### 📋 API 参数与返回值

| 方法名 | 参数 | 类型 | 必填 | 返回值类型 | 说明 |
| :--- | :--- | :---: | :---: | :---: | :--- |
| `base64Encode` | `text` | `string` | **是** | `Promise<string>` | 原始 UTF-8 字符串编码为 Base64 字符串 |
| `base64Decode` | `base64` | `string` | **是** | `Promise<string>` | Base64 字符串解码还原为 UTF-8 原始字符串 |

---

## 三、哈希散列与消息认证 (MD5 / SHA-256 / HMAC-SHA1)

适用于密码哈希、数据防篡改校验与接口签名认证（全量输出为小写十六进制字符串）：

```uts
import { md5, sha256, hmacSha1 } from '@/uni_modules/crypto-bestX';

// 1. MD5 摘要 (32 位小写 Hex)
const md5Hex = await md5('hello world');
// 输出: "5eb63bbbe01eeed093cb22bb8f5acdc3"

// 2. SHA-256 摘要 (64 位小写 Hex)
const sha256Hex = await sha256('hello world');
// 输出: "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9"

// 3. HMAC-SHA1 消息认证码签名 (40 位小写 Hex)
const hmacHex = await hmacSha1('待签名的原始消息', 'secret-key-123');
```

### 📋 API 参数与返回值

| 方法名 | 参数名 | 类型 | 必填 | 返回值类型 | 输出格式 |
| :--- | :--- | :---: | :---: | :---: | :--- |
| `md5` | `text` | `string` | **是** | `Promise<string>` | 32 位小写十六进制字符串 |
| `sha256` | `text` | `string` | **是** | `Promise<string>` | 64 位小写十六进制字符串 |
| `hmacSha1` | `text`<br>`key` | `string`<br>`string` | **是**<br>**是** | `Promise<string>` | 40 位小写十六进制签名串 |

---

## 四、对称加解密 (AES-128 / DES)

采用国际标准的 **ECB 模式** 与 **PKCS7 / PKCS5 填充**，密文统一输出为小写十六进制字符串，可直接与后端服务互通。

```uts
import { aesEncrypt, aesDecrypt, desEncrypt, desDecrypt } from '@/uni_modules/crypto-bestX';

// ==========================================
// 1. AES-128 加密与解密（密钥长度必须为 16 字节 / 16 个字符）
// ==========================================
const aesKey = '1234567890123456';
const cipherHex = await aesEncrypt('我的敏感业务数据', aesKey);
console.log('AES 密文 (Hex):', cipherHex);

const plainText = await aesDecrypt(cipherHex, aesKey);
console.log('AES 解密明文:', plainText); // "我的敏感业务数据"

// ==========================================
// 2. DES 加密与解密（密钥长度必须为 8 字节 / 8 个字符）
// ==========================================
const desKey = '12345678';
const desCipherHex = await desEncrypt('DES测试数据', desKey);
const desPlainText = await desDecrypt(desCipherHex, desKey);
```

### 📋 API 参数与返回值

| 方法名 | 参数签名 | 密钥要求 | 返回值类型 | 说明 |
| :--- | :--- | :---: | :---: | :--- |
| `aesEncrypt` | `(text: string, key: string)` | 16 字节 | `Promise<string>` | **AES-128 加密**，输出小写 Hex 密文字符串 |
| `aesDecrypt` | `(hex: string, key: string)` | 16 字节 | `Promise<string>` | **AES-128 解密**，入参为 Hex 密文，返回明文 |
| `desEncrypt` | `(text: string, key: string)` | 8 字节 | `Promise<string>` | **DES 加密**，输出小写 Hex 密文字符串 |
| `desDecrypt` | `(hex: string, key: string)` | 8 字节 | `Promise<string>` | **DES 解密**，入参为 Hex 密文，返回明文 |

---

## 五、RSA 非对称加密、解密与签名验签

公钥格式遵循标准 **SPKI (X.509) Base64**，私钥格式遵循标准 **PKCS#8 Base64**，填充方式为 **PKCS#1 v1.5**。

### 5.1 密钥对生成 (rsaGenerateKeyPair)

```uts
import { rsaGenerateKeyPair } from '@/uni_modules/crypto-bestX';

// 动态生成 1024 位 RSA 密钥对（亦支持 2048 位）
const keyPairJson = await rsaGenerateKeyPair(1024);

// 解析结果
const keyData = JSON.parse(keyPairJson) as UTSJSONObject;
const publicKey = keyData.getString('publicKey')!;   // SPKI Base64 公钥
const privateKey = keyData.getString('privateKey')!; // PKCS#8 Base64 私钥
```

#### 📋 rsaGenerateKeyPair 参数与返回值

| 参数名 | 类型 | 必填 | 默认值 | 返回值类型 | 说明 |
| :--- | :--- | :---: | :---: | :---: | :--- |
| `bits` | `number` | **是** | - | `Promise<string>` | 密钥位数（推荐 `1024` 或 `2048`），返回 JSON 字符串 `{ publicKey, privateKey }` |

---

### 5.2 公钥加密与私钥解密 (rsaEncrypt / rsaDecrypt)

常用于客户端将用户密码、Token 等隐私字段使用服务端公钥加密传输：

```uts
import { rsaEncrypt, rsaDecrypt } from '@/uni_modules/crypto-bestX';

// 公钥加密（密文为小写十六进制字符串）
const rsaCipherHex = await rsaEncrypt('password_123456', publicKey);

// 私钥解密（恢复为明文字符串）
const original = await rsaDecrypt(rsaCipherHex, privateKey);
```

#### 📋 加解密 API 参数与返回值

| 方法名 | 参数名 | 类型 | 说明 | 返回值类型 |
| :--- | :--- | :---: | :--- | :---: |
| `rsaEncrypt` | `text`<br>`publicKey` | `string`<br>`string` | 待加密的明文字符串<br>SPKI Base64 格式的 RSA 公钥 | `Promise<string>` (Hex 密文) |
| `rsaDecrypt` | `hex`<br>`privateKey` | `string`<br>`string` | 待解密的小写十六进制密文<br>PKCS#8 Base64 格式的 RSA 私钥 | `Promise<string>` (原始明文) |

---

### 5.3 私钥签名与公钥验签 (rsaSign / rsaVerify)

常用于交易防抵赖、报文防篡改场景：

```uts
import { rsaSign, rsaVerify } from '@/uni_modules/crypto-bestX';

const data = 'amount=100&to=bob';

// 1. 私钥生成数字签名（支持 'SHA-256' / 'SHA-1' / 'MD5'，默认 'SHA-256'）
const signatureHex = await rsaSign(data, privateKey, 'SHA-256');

// 2. 公钥校验签名真伪
const isValid: boolean = await rsaVerify(data, publicKey, signatureHex, 'SHA-256');
console.log('签名校验结果:', isValid); // true
```

#### 📋 签名与验签 API 参数与返回值

| 方法名 | 参数 | 类型 | 必填 | 说明 | 返回值类型 |
| :--- | :--- | :---: | :---: | :--- | :---: |
| `rsaSign` | `text`<br>`privateKey`<br>`hashType` | `string`<br>`string`<br>`string` | **是**<br>**是**<br>否 | 待签名消息<br>PKCS#8 私钥<br>散列摘要算法（默认 `'SHA-256'`） | `Promise<string>` (签名 Hex) |
| `rsaVerify` | `text`<br>`publicKey`<br>`sigHex`<br>`hashType` | `string`<br>`string`<br>`string`<br>`string` | **是**<br>**是**<br>**是**<br>否 | 原始消息内容<br>SPKI 公钥<br>待验证的十六进制签名<br>散列摘要算法（默认 `'SHA-256'`） | `Promise<boolean>` (布尔值) |

---

## 六、各平台底层架构对照表

| 功能模块 | Android 端 (`#ifdef APP-ANDROID`) | H5 端 (`#ifdef H5`) | 微信小程序 (`#ifdef MP-WEIXIN`) | iOS / 鸿蒙等端 (`#ifndef ...`) |
| :--- | :--- | :--- | :--- | :--- |
| **Base64** | `android.util.Base64` (系统原生) | 纯 UTS 高效算法 (`codec.uts`) | 纯 UTS 高效算法 (`codec.uts`) | 纯 UTS 高效算法 (`codec.uts`) |
| **MD5 摘要** | `MessageDigest.getInstance("MD5")` | `CryptoJS.MD5` | `CryptoJS.MD5` | 纯 UTS 位运算算法 |
| **SHA-256** | `MessageDigest.getInstance("SHA-256")` | `CryptoJS.SHA256` | `CryptoJS.SHA256` | 纯 UTS 位运算算法 |
| **HMAC-SHA1** | `javax.crypto.Mac` (HmacSHA1) | `CryptoJS.HmacSHA1` | `CryptoJS.HmacSHA1` | 纯 UTS 迭代哈希算法 |
| **AES-128** | `Cipher` (`AES/ECB/PKCS5Padding`) | `CryptoJS.AES` (ECB / PKCS7) | `CryptoJS.AES` (ECB / PKCS7) | 纯 UTS AES 表驱动算法 |
| **DES** | `Cipher` (`DES/ECB/PKCS5Padding`) | `CryptoJS.DES` (ECB / PKCS7) | `CryptoJS.DES` (ECB / PKCS7) | 纯 UTS 64 位 Feistel 算法 |
| **RSA 密钥生成** | `KeyPairGenerator` ("RSA") | `crypto.subtle` (自动降级 UTS) | 纯 JS/BigInt 高速素数生成与 DER 编码 | 纯 JS/BigInt 高速素数生成与 DER 编码 |
| **RSA 加密/解密** | `Cipher` (`RSA/ECB/PKCS1Padding`) | 纯 UTS RSA 算术 (`rsa.uts`) | 纯 UTS RSA 算术 (`rsa.uts`) | 纯 UTS RSA 算术 (`rsa.uts`) |
| **RSA 签名/验签** | `Signature` (`SHA256withRSA`) | 纯 UTS PKCS#1 v1.5 (`rsa.uts`) | 纯 UTS PKCS#1 v1.5 (`rsa.uts`) | 纯 UTS PKCS#1 v1.5 (`rsa.uts`) |
| **UUID v4** | `java.util.UUID.randomUUID()` | `crypto.randomUUID()` / 降级 | RFC 4122 v4 伪随机算法 | RFC 4122 v4 伪随机算法 |

---

## 七、目录结构与规范

```text
uni_modules/crypto-bestX/
├── index.uts             # 核心统一对外出口
├── index.d.ts            # TypeScript 类型提示与补全
├── package.json          # 插件元数据（id: crypto-bestX）
├── readme.md             # 官方使用说明文档
├── changelog.md          # 版本更新历史
├── codec.uts             # 纯 UTS UTF-8 与 Base64 编解码器（全端无报错支持）
└── rsa.uts               # 纯 UTS 大整数与 RSA 加密、解密、签名、验签算法内核
```

---

## 📄 开源与规范协议

- 本库遵循 **MIT** 开源协议。
- 专为 **uni-app X** 打造，全量遵循 UTS 强类型规范与统一异步 Promise 风格。
