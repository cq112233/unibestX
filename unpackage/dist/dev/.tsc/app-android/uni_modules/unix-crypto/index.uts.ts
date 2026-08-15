/**
 * unix-crypto 加密解密工具库（uni-app X 跨端插件）
 *
 * 全平台支持：App (Android / iOS / 鸿蒙) / H5 / 微信小程序等全端
 * 提供：
 * 1. Base64 编码与解码
 * 2. MD5 摘要计算
 * 3. SHA-256 摘要计算
 * 4. HMAC-SHA1 签名
 * 5. AES-128 加解密（ECB / PKCS7 / Hex 密文）
 * 6. DES 加解密（ECB / PKCS7 / Hex 密文）
 * 7. RSA 密钥对生成、公钥加密、私钥解密、SHA-256 签名与验签
 */

// ===== 非 Android 平台：RSA 纯 UTS 实现 =====




// ====================================================================
// Android 原生实现（javax.crypto）
// ====================================================================

import Cipher from 'javax.crypto.Cipher'
import SecretKeySpec from 'javax.crypto.spec.SecretKeySpec'
import MessageDigest from 'java.security.MessageDigest'
import KeyFactory from 'java.security.KeyFactory'
import KeyPairGenerator from 'java.security.KeyPairGenerator'
import X509EncodedKeySpec from 'java.security.spec.X509EncodedKeySpec'
import PKCS8EncodedKeySpec from 'java.security.spec.PKCS8EncodedKeySpec'
import Signature from 'java.security.Signature'
import Base64 from 'android.util.Base64'

/**
 * 字节数组转十六进制字符串（小写）
 * @param bytes 原生 ByteArray 字节数组
 * @returns 十六进制字符串
 */
function bytesToHex(bytes: ByteArray): string {
  let result = ''
  for (let i = 0; i < bytes.size; i++) {
    const b = bytes[i.toInt()].toInt()
    const hex = (b < 0 ? b + 256 : b).toString(16)
    result += (hex.length == 1 ? '0' : '') + hex
  }
  return result
}

/**
 * 十六进制字符串转字节数组
 * @param hex 十六进制字符串（偶数长度）
 * @returns 原生 ByteArray 字节数组
 */
function hexToBytes(hex: string): ByteArray {
  const len = (hex.length / 2).toInt()
  const bytes = new ByteArray(len)
  for (let i = 0; i < len; i++) {
    const b = parseInt(hex.substring(i * 2, i * 2 + 2), 16).toInt()
    bytes[i.toInt()] = (b > 127 ? b - 256 : b).toByte()
  }
  return bytes
}

/**
 * 将 Uint8Array 转换为 Android 原生 ByteArray
 * @param bytes UTS Uint8Array
 * @returns 原生 ByteArray
 */
function toByteArray(bytes: Uint8Array): ByteArray {
  const result = new ByteArray(bytes.length.toInt())
  for (let i = 0; i < bytes.length; i++) {
    result[i.toInt()] = bytes[i.toInt()].toByte()
  }
  return result
}

/**
 * 将 Android 原生 ByteArray 转换为 UTS Uint8Array
 * @param bytes 原生 ByteArray
 * @returns UTS Uint8Array
 */
function toUint8Array(bytes: ByteArray): Uint8Array {
  const result = new Uint8Array(bytes.size.toInt())
  for (let i = 0; i < bytes.size; i++) {
    const v = bytes[i.toInt()].toInt()
    result[i.toInt()] = (v < 0 ? v + 256 : v).toByte()
  }
  return result
}

/**
 * 字符串转 UTF-8 字节数组（Uint8Array）
 * @param text 原始字符串
 * @returns UTF-8 编码的字节数组
 */
function textToBytes(text: string): Uint8Array {
  return new TextEncoder().encode(text)
}

/**
 * UTF-8 字节数组（Uint8Array）转字符串
 * @param bytes UTF-8 编码的字节数组
 * @returns 解码后的字符串
 */
function bytesToText(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes)
}

/**
 * 去除 PEM 头尾与空白，仅保留 Base64 字符
 * @param pem PEM 格式字符串或裸 Base64
 * @returns 纯净的 Base64 字符串
 */
function stripPemBody(pem: string): string {
  return pem
    .replace('-----BEGIN PUBLIC KEY-----', '')
    .replace('-----END PUBLIC KEY-----', '')
    .replace('-----BEGIN RSA PUBLIC KEY-----', '')
    .replace('-----END RSA PUBLIC KEY-----', '')
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace('-----BEGIN RSA PRIVATE KEY-----', '')
    .replace('-----END RSA PRIVATE KEY-----', '')
    .replace(/\s+/g, '')
}

/**
 * Base64 字符串解码为字节数组（用于解析密钥）
 * @param b64 Base64 字符串（可带 PEM 头尾）
 * @returns 字节数组
 */
function base64ToBytes(b64: string): Uint8Array {
  return toUint8Array(Base64.decode(stripPemBody(b64), Base64.DEFAULT))
}

/**
 * 字节数组编码为 Base64 字符串（用于输出密钥）
 * @param bytes 字节数组
 * @returns Base64 字符串
 */
function bytesToBase64(bytes: Uint8Array): string {
  return Base64.encodeToString(toByteArray(bytes), Base64.NO_WRAP)
}

/**
 * Base64 编码（Android：android.util.Base64）
 * @param text 待编码的原始文本
 * @returns Promise<string> Base64 字符串
 */
export function base64Encode(text: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      resolve(Base64.encodeToString(toByteArray(textToBytes(text)), Base64.NO_WRAP))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * Base64 解码（Android：android.util.Base64）
 * @param base64 Base64 字符串
 * @returns Promise<string> 解码后的原始文本
 */
export function base64Decode(base64: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      resolve(bytesToText(toUint8Array(Base64.decode(base64, Base64.DEFAULT))))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * 按指定算法计算文本摘要并输出十六进制
 * @param algorithm 摘要算法名（如 MD5 / SHA-256）
 * @param text 待计算的原始文本
 * @returns 十六进制摘要字符串
 */
function digestHex(algorithm: string, text: string): string {
  const md = MessageDigest.getInstance(algorithm)
  const bytes = md.digest(toByteArray(textToBytes(text)))
  return bytesToHex(bytes)
}

/**
 * MD5 摘要（Android 原生实现）
 * @param text 待计算的原始文本
 * @returns Promise<string> 32 位十六进制 MD5
 */
export function md5(text: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      resolve(digestHex('MD5', text))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * SHA-256 摘要（Android 原生实现）
 * @param text 待计算的原始文本
 * @returns Promise<string> 64 位十六进制 SHA-256
 */
export function sha256(text: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      resolve(digestHex('SHA-256', text))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * HMAC-SHA1 带密钥签名（Android 原生 javax.crypto.Mac 实现）
 * @param text 待签名的原始文本
 * @param key 签名密钥
 * @returns Promise<string> 40 位十六进制签名结果
 */
export function hmacSha1(text: string, key: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const mac = javax.crypto.Mac.getInstance('HmacSHA1')
      const secretKey = new SecretKeySpec(toByteArray(textToBytes(key)), 'HmacSHA1')
      mac.init(secretKey)
      const bytes = mac.doFinal(toByteArray(textToBytes(text)))
      resolve(bytesToHex(bytes))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * 对称加密核心函数（支持 AES / DES）
 * @param transformation 转换模式（如 AES/ECB/PKCS5Padding）
 * @param algorithm 算法名（如 AES / DES）
 * @param text 明文
 * @param key 密钥
 * @returns 十六进制密文字符串
 */
function cipherEncrypt(transformation: string, algorithm: string, text: string, key: string): string {
  const cipher = Cipher.getInstance(transformation)
  const secretKey = new SecretKeySpec(toByteArray(textToBytes(key)), algorithm)
  cipher.init(Cipher.ENCRYPT_MODE, secretKey)
  const encrypted = cipher.doFinal(toByteArray(textToBytes(text)))
  return bytesToHex(encrypted)
}

/**
 * 对称解密核心函数（支持 AES / DES）
 * @param transformation 转换模式（如 AES/ECB/PKCS5Padding）
 * @param algorithm 算法名（如 AES / DES）
 * @param hex 十六进制密文字符串
 * @param key 密钥
 * @returns 解密后的明文
 */
function cipherDecrypt(transformation: string, algorithm: string, hex: string, key: string): string {
  const cipher = Cipher.getInstance(transformation)
  const secretKey = new SecretKeySpec(toByteArray(textToBytes(key)), algorithm)
  cipher.init(Cipher.DECRYPT_MODE, secretKey)
  const decrypted = cipher.doFinal(hexToBytes(hex))
  return bytesToText(toUint8Array(decrypted))
}

/**
 * AES 加密（Android 原生实现，AES/ECB/PKCS5Padding）
 * @param text 明文
 * @param key 密钥（需 16 位）
 * @returns Promise<string> 密文十六进制字符串
 */
export function aesEncrypt(text: string, key: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      resolve(cipherEncrypt('AES/ECB/PKCS5Padding', 'AES', text, key))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * AES 解密（Android 原生实现，AES/ECB/PKCS5Padding）
 * @param hex 密文的十六进制字符串
 * @param key 密钥（需 16 位，与加密时一致）
 * @returns Promise<string> 明文
 */
export function aesDecrypt(hex: string, key: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      resolve(cipherDecrypt('AES/ECB/PKCS5Padding', 'AES', hex, key))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * DES 加密（Android 原生实现，DES/ECB/PKCS5Padding）
 * @param text 明文
 * @param key 密钥（需 8 位）
 * @returns Promise<string> 密文十六进制字符串
 */
export function desEncrypt(text: string, key: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      resolve(cipherEncrypt('DES/ECB/PKCS5Padding', 'DES', text, key))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * DES 解密（Android 原生实现，DES/ECB/PKCS5Padding）
 * @param hex 密文的十六进制字符串
 * @param key 密钥（需 8 位，与加密时一致）
 * @returns Promise<string> 明文
 */
export function desDecrypt(hex: string, key: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      resolve(cipherDecrypt('DES/ECB/PKCS5Padding', 'DES', hex, key))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

// ---- DER / PKCS#1 -> PKCS#8 / SPKI 转换辅助 ----

type DerElem = { tag: number; contentStart: number; contentLen: number; nextStart: number }

function derReadElem(bytes: Uint8Array, start: number): DerElem {
  const s = start.toInt()
  const tag = (bytes[s] as number).toInt()
  const l0 = (bytes[s + 1] as number).toInt()
  let len: number = 0
  let headerLen: number = 2
  if (l0 < 0x80) {
    len = l0
  }
  else {
    const numLen = l0 & 0x7f
    for (let i = 0; i < numLen; i++) {
      len = len * 256 + ((bytes[s + 2 + i.toInt()] as number).toInt())
    }
    headerLen = 2 + numLen
  }
  const contentStart = start + headerLen
  return { tag: tag, contentStart: contentStart, contentLen: len, nextStart: contentStart + len }
}

function derSub(bytes: Uint8Array, start: number, end: number): Uint8Array {
  const len = (end - start).toInt()
  const out = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    out[i.toInt()] = bytes[(start + i).toInt()]
  }
  return out
}

function derSeq(items: Uint8Array[]): Uint8Array {
  let totalLen = 0
  for (let i = 0; i < items.length; i++) {
    totalLen += items[i.toInt()].length.toInt()
  }
  let header: Uint8Array
  if (totalLen < 128) {
    header = new Uint8Array([0x30, totalLen.toInt()].map((n : number) : number => n))
  }
  else if (totalLen < 256) {
    header = new Uint8Array([0x30, 0x81, totalLen.toInt()].map((n : number) : number => n))
  }
  else {
    header = new Uint8Array([0x30, 0x82, Math.floor(totalLen / 256).toInt(), (totalLen % 256).toInt()].map((n : number) : number => n))
  }
  const out = new Uint8Array(header.length.toInt() + totalLen.toInt())
  for (let i = 0; i < header.length; i++) out[i.toInt()] = header[i.toInt()]
  let offset = header.length.toInt()
  for (let i = 0; i < items.length; i++) {
    const item = items[i.toInt()]
    for (let j = 0; j < item.length; j++) {
      out[offset + j.toInt()] = item[j.toInt()]
    }
    offset += item.length.toInt()
  }
  return out
}

function pkcs1ToSpki(pkcs1: Uint8Array): Uint8Array {
  const algo = new Uint8Array([0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x01, 0x05, 0x00].map((n : number) : number => n))
  const bitContent = new Uint8Array(1 + pkcs1.length.toInt())
  bitContent[0] = 0x00.toByte()
  for (let i = 0; i < pkcs1.length; i++) bitContent[1 + i.toInt()] = pkcs1[i.toInt()]
  let bitHeader: Uint8Array
  const bitLen = bitContent.length.toInt()
  if (bitLen < 128) bitHeader = new Uint8Array([0x03, bitLen].map((n : number) : number => n))
  else if (bitLen < 256) bitHeader = new Uint8Array([0x03, 0x81, bitLen].map((n : number) : number => n))
  else bitHeader = new Uint8Array([0x03, 0x82, Math.floor(bitLen / 256).toInt(), (bitLen % 256).toInt()].map((n : number) : number => n))
  const bitString = new Uint8Array(bitHeader.length.toInt() + bitContent.length.toInt())
  for (let i = 0; i < bitHeader.length; i++) bitString[i.toInt()] = bitHeader[i.toInt()]
  for (let i = 0; i < bitContent.length; i++) bitString[bitHeader.length.toInt() + i.toInt()] = bitContent[i.toInt()]
  return derSeq([algo, bitString])
}

function pkcs1ToPkcs8(pkcs1: Uint8Array): Uint8Array {
  const version0 = new Uint8Array([0x02, 0x01, 0x00].map((n : number) : number => n))
  const algo = new Uint8Array([0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x01, 0x05, 0x00].map((n : number) : number => n))
  const octLen = pkcs1.length.toInt()
  let octHeader: Uint8Array
  if (octLen < 128) octHeader = new Uint8Array([0x04, octLen].map((n : number) : number => n))
  else if (octLen < 256) octHeader = new Uint8Array([0x04, 0x81, octLen].map((n : number) : number => n))
  else octHeader = new Uint8Array([0x04, 0x82, Math.floor(octLen / 256).toInt(), (octLen % 256).toInt()].map((n : number) : number => n))
  const octString = new Uint8Array(octHeader.length.toInt() + pkcs1.length.toInt())
  for (let i = 0; i < octHeader.length; i++) octString[i.toInt()] = octHeader[i.toInt()]
  for (let i = 0; i < pkcs1.length; i++) octString[octHeader.length.toInt() + i.toInt()] = pkcs1[i.toInt()]
  return derSeq([version0, algo, octString])
}

function normalizePublicKeyDer(der: Uint8Array): Uint8Array {
  const outer = derReadElem(der, 0)
  const content = derSub(der, outer.contentStart, outer.contentStart + outer.contentLen)
  const first = derReadElem(content, 0)
  if (first.tag == 0x02) return pkcs1ToSpki(der)
  return der
}

function normalizePrivateKeyDer(der: Uint8Array): Uint8Array {
  const outer = derReadElem(der, 0)
  const content = derSub(der, outer.contentStart, outer.contentStart + outer.contentLen)
  const first = derReadElem(content, 0)
  if (first.tag == 0x02) {
    const second = derReadElem(content, first.nextStart)
    if (second.tag == 0x02) return pkcs1ToPkcs8(der)
  }
  return der
}

function loadAndroidPublicKey(pemOrB64: string): java.security.PublicKey {
  const der = normalizePublicKeyDer(base64ToBytes(pemOrB64))
  const spec = new X509EncodedKeySpec(toByteArray(der))
  const kf = KeyFactory.getInstance('RSA')
  return kf.generatePublic(spec)
}

function loadAndroidPrivateKey(pemOrB64: string): java.security.PrivateKey {
  const der = normalizePrivateKeyDer(base64ToBytes(pemOrB64))
  const spec = new PKCS8EncodedKeySpec(toByteArray(der))
  const kf = KeyFactory.getInstance('RSA')
  return kf.generatePrivate(spec)
}

/**
 * 生成 RSA 密钥对（Android：java.security.KeyPairGenerator）
 * @param bits 密钥长度（建议 1024 / 2048）
 * @returns Promise<string> JSON：{"publicKey":"SPKI-Base64","privateKey":"PKCS8-Base64"}
 */
export function rsaGenerateKeyPair(bits: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const generator = KeyPairGenerator.getInstance('RSA')
      generator.initialize(bits.toInt())
      const pair = generator.generateKeyPair()
      const publicB64 = bytesToBase64(toUint8Array(pair.getPublic().getEncoded()))
      const privateB64 = bytesToBase64(toUint8Array(pair.getPrivate().getEncoded()))
      resolve('{"publicKey":"' + publicB64 + '","privateKey":"' + privateB64 + '"}')
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * RSA 公钥加密（Android 原生实现，RSA/ECB/PKCS1Padding）
 * @param text 明文（UTF-8）
 * @param publicKey 公钥（PEM 或 Base64，PKCS#1 / SPKI）
 * @returns Promise<string> 密文十六进制字符串
 */
export function rsaEncrypt(text: string, publicKey: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const key = loadAndroidPublicKey(publicKey)
      const cipher = Cipher.getInstance('RSA/ECB/PKCS1Padding')
      cipher.init(Cipher.ENCRYPT_MODE, key)
      const encrypted = cipher.doFinal(toByteArray(textToBytes(text)))
      resolve(bytesToHex(encrypted))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * RSA 私钥解密（Android 原生实现，RSA/ECB/PKCS1Padding）
 * @param hex 密文十六进制字符串
 * @param privateKey 私钥（PEM 或 Base64，PKCS#1 / PKCS#8）
 * @returns Promise<string> 明文（UTF-8）
 */
export function rsaDecrypt(hex: string, privateKey: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const key = loadAndroidPrivateKey(privateKey)
      const cipher = Cipher.getInstance('RSA/ECB/PKCS1Padding')
      cipher.init(Cipher.DECRYPT_MODE, key)
      const decrypted = cipher.doFinal(hexToBytes(hex))
      resolve(bytesToText(toUint8Array(decrypted)))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

function signatureAlgorithmName(hashType: string): string {
  if (hashType == 'MD5') return 'MD5withRSA'
  if (hashType == 'SHA-1' || hashType == 'SHA1') return 'SHA1withRSA'
  return 'SHA256withRSA'
}

/**
 * RSA 私钥签名（Android 原生 Signature 实现，EMSA-PKCS1-v1_5）
 * @param text 待签名的原始文本
 * @param privateKey 私钥（PEM 或 Base64，PKCS#1 / PKCS#8）
 * @param hashType 摘要算法名（MD5 / SHA-1 / SHA-256）
 * @returns Promise<string> 签名十六进制字符串
 */
export function rsaSign(text: string, privateKey: string, hashType: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const key = loadAndroidPrivateKey(privateKey)
      const signer = Signature.getInstance(signatureAlgorithmName(hashType))
      signer.initSign(key)
      signer.update(toByteArray(textToBytes(text)))
      const sig = signer.sign()
      resolve(bytesToHex(sig))
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * RSA 公钥验签（Android 原生 Signature 实现，EMSA-PKCS1-v1_5）
 * @param text 原始文本
 * @param publicKey 公钥（PEM 或 Base64，PKCS#1 / SPKI）
 * @param sigHex 签名十六进制字符串
 * @param hashType 摘要算法名（MD5 / SHA-1 / SHA-256）
 * @returns Promise<boolean> 验签是否通过
 */
export function rsaVerify(text: string, publicKey: string, sigHex: string, hashType: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    try {
      const key = loadAndroidPublicKey(publicKey)
      const verifier = Signature.getInstance(signatureAlgorithmName(hashType))
      verifier.initVerify(key)
      verifier.update(toByteArray(textToBytes(text)))
      const valid = verifier.verify(hexToBytes(sigHex))
      resolve(valid)
    }
    catch (e : any) {
      reject(e)
    }
  })
}

/**
 * 生成符合 RFC 4122 标准的 UUID v4 字符串
 * @returns 36 位 UUID 字符串
 */
export function generateUUID(): string {
  return java.util.UUID.randomUUID().toString()
}

/**
 * 别名：uuid()
 */
export function uuid(): string {
  return generateUUID()
}


// ====================================================================
// H5 / 微信小程序实现（crypto-js + rsa-uts 纯 UTS）
// ====================================================================




























































































































































































































































































































































// ====================================================================
// 其他平台实现（iOS / 鸿蒙等）：纯 UTS 算法
// ====================================================================
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































